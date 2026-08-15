'use client';

import React from 'react';
import { COLORS } from '../scene/theme';

export const DotGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    style={{
      backgroundColor: COLORS.canvasBg,
      backgroundImage: `radial-gradient(${COLORS.dotColor} 1.2px, transparent 1.2px)`,
      backgroundSize: '32px 32px',
      maskImage: 'radial-gradient(ellipse 82% 72% at 50% 45%, black, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(ellipse 82% 72% at 50% 45%, black, transparent 80%)',
    }}
  />
);
