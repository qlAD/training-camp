'use client';

import React from 'react';
import { BlueprintScene } from '../components/scene/BlueprintScene';
import { RevealProject } from '../components/kinetic/RevealProject';
import { BlueprintTitle } from '../components/kinetic/BlueprintTitle';
import { BlueprintGrid } from '../components/fx/BlueprintGrid';
import { ProjectGlow } from '../components/fx/ProjectGlow';
import { TentVsBuilding } from '../components/visual/TentVsBuilding';
import { ProductThinking } from '../components/visual/ProductThinking';
import { PRDTemplate } from '../components/visual/PRDTemplate';
import { WorkshopVsFactory } from '../components/visual/WorkshopVsFactory';

/* ---------- Shot01: 冷开场 · 静态页面的墙 ---------- */
export const Shot01Open: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="当你觉得'页面能跑就行了'的时候" sub="别急着庆祝 —— 离真正的'项目'还差一座桥" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <TentVsBuilding />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot02: 产品思维 · 先想清楚再动手 ---------- */
export const Shot02ProductThinking: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="产品思维" sub="先想清楚，再动手" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <ProductThinking />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot03: PRD 核心构成 ---------- */
export const Shot03PRD: React.FC = () => (
  <BlueprintScene length={8}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="PRD 核心构成" sub="把需求写成一份'合同'" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <PRDTemplate />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot04: 工程化价值对比 ---------- */
export const Shot04WorkshopFactory: React.FC = () => (
  <BlueprintScene length={8}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="工程化的价值" sub="手工作坊 → 现代工厂" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <WorkshopVsFactory />
      </RevealProject>
    </div>
  </BlueprintScene>
);