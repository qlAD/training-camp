'use client';

import React from 'react';

export const DatabaseGlow: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 中心数据库绿光 */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(59,130,246,0.25) 40%, transparent 70%)',
          animation: 'dbpulse 6s ease-in-out infinite',
        }}
      />
      {/* 左下角琥珀工具光 */}
      <div className="absolute bottom-[-80px] left-[-60px] h-[280px] w-[280px] rounded-full opacity-35 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 65%)',
          animation: 'dbpulse 7s ease-in-out 1.5s infinite',
        }}
      />
      {/* 右上角青蓝数据流 */}
      <div className="absolute right-[-60px] top-[-80px] h-[260px] w-[260px] rounded-full opacity-30 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 65%)',
          animation: 'dbpulse 8s ease-in-out 0.8s infinite',
        }}
      />

      <style>{`
        @keyframes dbpulse {
          0%, 100% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.08); opacity: 0.55; }
        }
      `}</style>
    </div>
  );
};
