'use client';

import React from 'react';

export const BlueprintGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      backgroundImage:
        'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
      backgroundSize: '46px 46px',
      maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)',
    }}
  />
);