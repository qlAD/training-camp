'use client';

import React from 'react';
import { DesignCanvasScene } from '../components/scene/DesignCanvasScene';
import { RevealFrame } from '../components/kinetic/RevealFrame';
import { DesignTitle } from '../components/kinetic/DesignTitle';
import { DotGrid } from '../components/fx/DotGrid';
import { StudioGlow } from '../components/fx/StudioGlow';
import { ThreeStages } from '../components/visual/ThreeStages';
import { FeatureBreakdown } from '../components/visual/FeatureBreakdown';
import { FivePagesOverview } from '../components/visual/FivePagesOverview';
import { PageFlowMap } from '../components/visual/PageFlowMap';
import { EdgeStates } from '../components/visual/EdgeStates';

/* ---------- Shot05: 草图、视觉稿、代码 三阶段 ---------- */
export const Shot05ThreeStages: React.FC = () => (
  <DesignCanvasScene length={8}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="草图、视觉稿、代码" sub="三样东西，三个阶段" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <ThreeStages />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot06: 「此刻」功能拆解 ---------- */
export const Shot06Feature: React.FC = () => (
  <DesignCanvasScene length={9}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="给「此刻」搭骨架" sub="核心两件事：发内容 · 看内容聊内容" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <FeatureBreakdown />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot07: 五个页面总览 ---------- */
export const Shot07FivePages: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="五个页面，今天交付" sub="首页 · 发布 · 详情 · 个人中心 · 登录注册" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <FivePagesOverview />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot08: 页面跳转逻辑 ---------- */
export const Shot08PageFlow: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="页面跳转逻辑" sub="从哪来、到哪去 —— 用线连出来" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <PageFlowMap />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot09: 边角状态 ---------- */
export const Shot09EdgeStates: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="别只画正常流程" sub="补上边角状态，后面少踩一半坑" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <EdgeStates />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);
