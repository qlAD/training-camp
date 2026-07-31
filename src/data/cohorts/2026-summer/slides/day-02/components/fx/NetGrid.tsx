'use client';

import React from 'react';

/** 网络网格底纹：青色细网格，中心渐隐，营造拓扑底感 */
export const NetGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      backgroundImage:
        'linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
      maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)',
    }}
  />
);
