'use client';

import React from 'react';

/* 代码编辑器网格底纹：细网格中心渐隐，营造编辑区氛围 */
export const EditorGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      backgroundImage:
        'linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)',
      backgroundSize: '46px 46px',
      maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)',
    }}
  />
);
