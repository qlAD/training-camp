'use client';

import React from 'react';

export const SpecSheetGrid: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 规格书横向表单线 */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="spec-horizontal" width="100%" height="44" patternUnits="userSpaceOnUse">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="rgba(51,65,85,0.20)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="22"
              x2="100%"
              y2="22"
              stroke="rgba(30,42,63,0.55)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          </pattern>
          <pattern id="spec-vertical" width="9.09%" height="100%" patternUnits="objectBoundingBox">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(30,42,63,0.40)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spec-vertical)" />
        <rect width="100%" height="100%" fill="url(#spec-horizontal)" />
      </svg>

      {/* 四角机位标签 */}
      <div className="absolute left-4 top-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        API · CONTRACT · 01
      </div>
      <div className="absolute right-4 top-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        HTTP · VERBS · READY
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        CORS · OPEN · 5173 → 8080
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        JSON · UNIFIED · CODE/MSG/DATA
      </div>

      {/* 左侧指示灯条：四动词色交替 */}
      <div className="absolute left-1 top-1/2 flex -translate-y-1/2 flex-col gap-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const colors = [
            'bg-blue-400/60',
            'bg-emerald-400/60',
            'bg-amber-400/60',
            'bg-rose-400/60',
          ];
          return (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${colors[i % 4]}`}
              style={{
                animation: `specblink 2s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          );
        })}
      </div>
      {/* 右侧指示灯条：青蓝契约色 */}
      <div className="absolute right-1 top-1/2 flex -translate-y-1/2 flex-col gap-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-cyan-400/60"
            style={{
              animation: `specblink 2.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes specblink {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};
