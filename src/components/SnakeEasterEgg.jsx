import { useState, useEffect, useRef, useCallback } from 'react';

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
];

const CELL = 20;
const COLS = 22;
const ROWS = 17;
const W = COLS * CELL;
const H = ROWS * CELL;
const COLORS = ['#667eea', '#a855f7', '#06b6d4'];

const randFood = (snake) => {
  let pos;
  do {
    pos = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  return pos;
};

const initState = () => {
  const snake = [{ x: 11, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 8 }];
  return { snake, dir: { x: 1, y: 0 }, food: randFood(snake), score: 0, alive: true };
};

export default function SnakeEasterEgg() {
  const [active, setActive] = useState(false);
  const [score, setScore] = useState(0);
  const [dead, setDead] = useState(false);
  const konamiSeq = useRef([]);
  const gameRef = useRef(initState());
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastTickRef = useRef(0);
  const dirQueue = useRef([]);
  const activeRef = useRef(false);

  useEffect(() => { activeRef.current = active; }, [active]);

  // Konami code detection
  useEffect(() => {
    const handler = (e) => {
      if (activeRef.current) return;
      konamiSeq.current = [...konamiSeq.current, e.code].slice(-KONAMI.length);
      if (konamiSeq.current.join(',') === KONAMI.join(',')) {
        gameRef.current = initState();
        setScore(0);
        setDead(false);
        setActive(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const close = useCallback(() => {
    setActive(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const restart = useCallback(() => {
    gameRef.current = initState();
    dirQueue.current = [];
    lastTickRef.current = 0;
    setScore(0);
    setDead(false);
  }, []);

  // Arrow key handler
  useEffect(() => {
    if (!active) return;
    const dirMap = {
      ArrowUp: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
    };
    const handler = (e) => {
      if (e.key === 'Escape') { close(); return; }
      if (dirMap[e.key]) {
        e.preventDefault();
        dirQueue.current.push(dirMap[e.key]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, close]);

  // Draw + game loop
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const TICK_MS = 130;

    const draw = (state) => {
      // Background
      ctx.fillStyle = 'rgba(10, 10, 18, 0.97)';
      ctx.fillRect(0, 0, W, H);

      // Grid dots
      ctx.fillStyle = 'rgba(102,126,234,0.07)';
      for (let cx = 0; cx < COLS; cx++) {
        for (let cy = 0; cy < ROWS; cy++) {
          ctx.beginPath();
          ctx.arc(cx * CELL + CELL / 2, cy * CELL + CELL / 2, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Food — glowing dot
      const fx = state.food.x * CELL + CELL / 2;
      const fy = state.food.y * CELL + CELL / 2;
      const grd = ctx.createRadialGradient(fx, fy, 0, fx, fy, CELL / 2);
      grd.addColorStop(0, '#a855f7');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(fx, fy, CELL / 2 - 1, 0, Math.PI * 2);
      ctx.fill();

      // Snake segments
      state.snake.forEach((seg, i) => {
        const fade = 1 - (i / state.snake.length) * 0.6;
        ctx.fillStyle = i === 0
          ? '#667eea'
          : `rgba(102,126,${Math.floor(234 * fade)},${fade * 0.9})`;
        const pad = i === 0 ? 1 : 3;
        const x = seg.x * CELL + pad;
        const y = seg.y * CELL + pad;
        const s = CELL - pad * 2;
        const r = i === 0 ? 5 : 3;
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + s - r, y);
        ctx.arcTo(x + s, y, x + s, y + r, r);
        ctx.lineTo(x + s, y + s - r);
        ctx.arcTo(x + s, y + s, x + s - r, y + s, r);
        ctx.lineTo(x + r, y + s);
        ctx.arcTo(x, y + s, x, y + s - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
        ctx.fill();
      });
    };

    const tick = (now) => {
      if (!gameRef.current.alive) return;
      if (now - lastTickRef.current >= TICK_MS) {
        lastTickRef.current = now;
        const state = gameRef.current;

        // Consume direction queue
        while (dirQueue.current.length > 0) {
          const next = dirQueue.current.shift();
          if (next.x !== -state.dir.x || next.y !== -state.dir.y) {
            state.dir = next;
            break;
          }
        }

        const head = {
          x: (state.snake[0].x + state.dir.x + COLS) % COLS,
          y: (state.snake[0].y + state.dir.y + ROWS) % ROWS,
        };

        if (state.snake.some(s => s.x === head.x && s.y === head.y)) {
          state.alive = false;
          draw(state);
          setDead(true);
          return;
        }

        state.snake.unshift(head);

        if (head.x === state.food.x && head.y === state.food.y) {
          state.food = randFood(state.snake);
          state.score += 1;
          setScore(state.score);
        } else {
          state.snake.pop();
        }
      }

      draw(gameRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, dead]);

  if (!active) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={close}
    >
      <div
        style={{ position: 'relative' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
          padding: '0 2px',
        }}>
          <span style={{ color: '#667eea', fontFamily: 'monospace', fontSize: '12px', fontWeight: 600, letterSpacing: '0.03em' }}>
            {'// easter_egg.snake'} <span style={{ color: '#94a3b8' }}>score: {score}</span>
          </span>
          <button
            onClick={close}
            style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', lineHeight: 1, padding: '0 2px' }}
            aria-label="Cerrar"
          >×</button>
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          style={{
            display: 'block',
            border: '1px solid rgba(102,126,234,0.25)',
            borderRadius: '12px',
          }}
        />

        {/* Game Over overlay */}
        {dead && (
          <div style={{
            position: 'absolute',
            inset: '36px 0 0 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10,10,18,0.88)',
            borderRadius: '0 0 12px 12px',
          }}>
            <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '20px', marginBottom: '6px' }}>Game Over</p>
            <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '22px' }}>Score: {score}</p>
            <button
              onClick={restart}
              style={{
                background: 'linear-gradient(135deg, #667eea, #a855f7)',
                color: 'white',
                border: 'none',
                borderRadius: '24px',
                padding: '9px 24px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Jugar de nuevo
            </button>
          </div>
        )}

        {/* Footer hint */}
        <p style={{
          color: '#94a3b8',
          fontSize: '11px',
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'monospace',
          opacity: 0.6,
        }}>
          ↑ ↓ ← → para mover &nbsp;·&nbsp; ESC para salir
        </p>
      </div>
    </div>
  );
}
