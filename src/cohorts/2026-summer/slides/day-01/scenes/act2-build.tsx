'use client';

import React from 'react';
import { SceneSlide } from '../components/scene/SceneSlide';
import { RevealBlock } from '../components/kinetic/RevealBlock';
import { NeonTitle } from '../components/kinetic/NeonTitle';
import { StageBackground } from '../components/fx/StageBackground';
import { ProjectIntro } from '../components/visual/ProjectIntro';
import { RouteMap } from '../components/visual/RouteMap';
import { ParadigmShift } from '../components/visual/ParadigmShift';
import { AIRoles } from '../components/visual/AIRoles';
import { FlowLoop } from '../components/visual/FlowLoop';
import { PromptTemplate } from '../components/visual/PromptTemplate';
import { DemoPreview } from '../components/visual/DemoPreview';

/* ---------- 镜头 7：两个项目一根主线 ---------- */
export const Shot07Projects: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="两个项目，一根主线" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <ProjectIntro at={1} />
      </RevealBlock>
      <RevealBlock index={2} className="text-center">
        <p className="text-sm font-medium text-slate-400">个人作品集 + 「此刻」图文兴趣社区</p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 8：项目对应技术路线 ---------- */
export const Shot08ProjectTech: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="每个阶段都有交付物" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <RouteMap
          at={1}
          stations={['Day1 主页', 'Day3 拆文件', 'Day4 Vue', 'Day6 后端', 'Day8 联调', 'Day11 部署']}
        />
      </RevealBlock>
      <RevealBlock index={2} className="text-center">
        <p className="text-sm font-medium text-slate-400">
          HTML/CSS → Vue3 → SpringBoot → MySQL · 14 天双项目完整闭环
        </p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 9：Vibe Coding 新范式 ---------- */
export const Shot09ParadigmShift: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="Vibe Coding：开发新范式" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <ParadigmShift at={1} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 10：AI 不会替你做的三件事 ---------- */
export const Shot10AIRoles: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="AI不会替你做的三件事" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <AIRoles at={1} />
      </RevealBlock>
      <RevealBlock index={2} className="text-center">
        <p className="text-sm font-black text-cyan-300">你始终是主驾驶</p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 11：想法 → 成果的循环 ---------- */
export const Shot11FlowLoop: React.FC = () => (
  <SceneSlide sceneCount={8}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="想法 → 成果的循环" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <FlowLoop at={1} nodes={['想法', 'Prompt', 'AI', '审核', '产出', '迭代']} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 12：把需求说清楚 ---------- */
export const Shot12PromptTemplate: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="把需求说清楚" at={0} sub="把需求写明白，AI 才能写得好" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <PromptTemplate at={1} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 13：AI 生成个人主页 ---------- */
export const Shot13DemoPreview: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="你描述，它干活" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-4xl">
        <DemoPreview at={1} />
      </RevealBlock>
    </div>
  </SceneSlide>
);