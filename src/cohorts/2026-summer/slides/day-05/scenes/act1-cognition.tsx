'use client';

import React from 'react';
import { DesignCanvasScene } from '../components/scene/DesignCanvasScene';
import { RevealFrame } from '../components/kinetic/RevealFrame';
import { DesignTitle } from '../components/kinetic/DesignTitle';
import { DotGrid } from '../components/fx/DotGrid';
import { StudioGlow } from '../components/fx/StudioGlow';
import { CodeFirstPitfall } from '../components/visual/CodeFirstPitfall';
import { UIVsUX } from '../components/visual/UIVsUX';
import { DesignPrinciples } from '../components/visual/DesignPrinciples';
import { TraeWorkIntro } from '../components/visual/TraeWorkIntro';

/* ---------- Shot01: 冷开场 · 先别急着敲 ---------- */
export const Shot01Open: React.FC = () => (
  <DesignCanvasScene length={6}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="先别急着敲，先想想它长什么样" sub="Day5 开工「此刻」社区 —— 先画出来，而不是先写出来" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <CodeFirstPitfall />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot02: UI 与 UX ---------- */
export const Shot02UIUX: React.FC = () => (
  <DesignCanvasScene length={9}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="UI 与 UX" sub="两个容易混的词，说的是两件事" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <UIVsUX />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot03: 网页设计五原则 ---------- */
export const Shot03Principles: React.FC = () => (
  <DesignCanvasScene length={8}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="网页设计五原则" sub="画完原型，挨个问一遍" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <DesignPrinciples />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot04: 认识 Trae Work ---------- */
export const Shot04TraeWork: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="装好一支电子画笔" sub="认识 Trae Work —— 别和 Trae Code 搞混" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <TraeWorkIntro />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);
