'use client';

import React from 'react';

export const RackGrid: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 机架竖线（12 列服务器槽位） */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="rack-vertical"
            width="8.333%"
            height="100%"
            patternUnits="objectBoundingBox"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(51,65,85,0.25)"
              strokeWidth="1"
            />
          </pattern>
          <pattern id="rack-horizontal" width="100%" height="40" patternUnits="userSpaceOnUse">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="rgba(51,65,85,0.22)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rack-vertical)" />
        <rect width="100%" height="100%" fill="url(#rack-horizontal)" />
      </svg>

      {/* 边角机架标签 */}
      <div className="absolute left-4 top-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        SERVER · RACK · 01
      </div>
      <div className="absolute right-4 top-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        DB · NODE · ACTIVE
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        BACKEND · SPRING · MYSQL
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-600/60">
        CORS · REST · READY
      </div>

      {/* 左右侧指示灯条 */}
      <div className="absolute left-1 top-1/2 flex -translate-y-1/2 flex-col gap-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-emerald-400/60"
            style={{
              animation: `blink 2s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="absolute right-1 top-1/2 flex -translate-y-1/2 flex-col gap-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-blue-400/60"
            style={{
              animation: `blink 2.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};
