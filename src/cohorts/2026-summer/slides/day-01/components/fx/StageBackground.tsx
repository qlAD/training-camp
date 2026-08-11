'use client';

import React from 'react';
import { GradientRibbon } from './GradientRibbon';
import { GlowOrb } from './GlowOrb';
import { ParticleField } from './ParticleField';
import { CodeMotif } from './CodeMotif';
import { PerspectiveGrid } from './PerspectiveGrid';
import { RIBBON_A, RIBBON_B, RIBBON_C } from '../scene/theme';

interface StageBackgroundProps {
  /* code = 叠加透视科技网格（代码/渲染类镜头） */
  variant?: 'default' | 'code';
}

/*
 * 舞台氛围层：流体光带 + 辉光 + 粒子 + 代码母题（绝对定位，内容需 z-10）。
 * 注意：深空底色由舞台外壳统一提供（SlideDeckView 舞台根节点），本组件不再绘制不透明底色，
 * 以保证顶栏/内容区/底栏背景一致，且底部双 SVG 水印可透出。
 */
export const StageBackground: React.FC<StageBackgroundProps> = ({ variant = 'default' }) => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
    <GradientRibbon
      className="left-[-18%] top-[-14%] w-[75%] h-[70%]"
      colors={RIBBON_A}
      duration={26}
      rotate={18}
    />
    <GradientRibbon
      className="right-[-22%] bottom-[-18%] w-[80%] h-[68%]"
      colors={RIBBON_B}
      duration={31}
      rotate={-14}
    />
    <GradientRibbon
      className="left-[30%] top-[30%] w-[45%] h-[45%]"
      colors={RIBBON_C}
      duration={22}
      rotate={40}
    />
    <GlowOrb className="left-[8%] top-[58%] w-72 h-72" color="rgba(99,102,241,0.32)" />
    <GlowOrb className="right-[6%] top-[18%] w-80 h-80" color="rgba(34,211,238,0.26)" />
    <GlowOrb className="left-[42%] top-[6%] w-64 h-64" color="rgba(232,121,249,0.24)" />
    <ParticleField count={16} />
    <CodeMotif count={6} />
    {variant === 'code' && <PerspectiveGrid />}
  </div>
);
