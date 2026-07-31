'use client';

import React from 'react';
import { motion } from 'motion/react';

/** 底部透视科技网格（可选，用于「代码/渲染」类镜头） */
export const PerspectiveGrid: React.FC = () => (
  <div
    className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none overflow-hidden"
    aria-hidden
    style={{
      perspective: '600px',
      maskImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
      WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
    }}
  >
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(rgba(99,102,241,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.22) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        transform: 'rotateX(60deg)',
        transformOrigin: 'center bottom',
      }}
      animate={{ backgroundPosition: ['0 0', '0 44px'] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);
