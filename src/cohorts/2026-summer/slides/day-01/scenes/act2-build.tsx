'use client';

import React from 'react';
import {
  Code2,
  Sparkles,
  Brain,
  GitBranch,
  Cloud,
  Terminal,
  Globe,
  Hash,
  FileText,
  CircleDot,
  Network,
  Layers,
  Monitor,
} from 'lucide-react';
import { SceneSlide } from '../components/scene/SceneSlide';
import { RevealBlock } from '../components/kinetic/RevealBlock';
import { NeonTitle } from '../components/kinetic/NeonTitle';
import { StageBackground } from '../components/fx/StageBackground';
import { ChainMap } from '../components/visual/ChainMap';
import { BadgeWall } from '../components/visual/BadgeWall';
import { PromptCards } from '../components/visual/PromptCards';
import { AITransform } from '../components/visual/AITransform';
import { SkeletonTree } from '../components/visual/SkeletonTree';
import { MakeupCard } from '../components/visual/MakeupCard';
import { PipelineFlow } from '../components/visual/PipelineFlow';

/* ---------- 镜头 8：工具链地图 ---------- */
export const Shot08Chain: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="国产工具链：生成 — 托管 — 部署" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <ChainMap
          at={1}
          segments={[
            { label: '生成', icon: <Terminal className="h-4 w-4" />, desc: '对话式 AI 写代码' },
            { label: '托管', icon: <GitBranch className="h-4 w-4" />, desc: '代码仓库与协作' },
            { label: '部署', icon: <Globe className="h-4 w-4" />, desc: '一键发布上线' },
          ]}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 9：徽章墙 ---------- */
export const Shot09Badges: React.FC = () => (
  <SceneSlide sceneCount={2}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="今天先认识三位工具搭档" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <BadgeWall
          at={1}
          badges={[
            { name: 'TRAE IDE', icon: <Code2 className="h-5 w-5" />, desc: 'AI 编程助手' },         
            { name: 'DeepSeek', icon: <Brain className="h-5 w-5" />, desc: '深度推理模型' },
            { name: 'Gitee', icon: <GitBranch className="h-5 w-5" />, desc: '代码托管平台' },
          ]}
        />
        <p className="mt-4 text-center text-[11px] text-slate-500">今天先把它们认个脸熟，后面每天都要打交道</p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 10：写提示词 ---------- */
export const Shot10Prompt: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="把需求说清楚" at={0} sub="结构化提示词五要素" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <PromptCards
          at={1}
          elements={[
            { label: '角色', value: '资深前端' },
            { label: '任务', value: '个人简介页' },
            { label: '栈', value: 'HTML+CSS' },
            { label: '约束', value: '深色简洁' },
            { label: '输出', value: '完整代码' },
          ]}
          promptLines={[
            '你是一名资深前端工程师。',
            '任务：为「小满」做一个个人简介页。',
            '技术栈：原生 HTML + CSS。',
            '约束：风格简洁、深色系、单页面。',
            '输出：完整可运行的 index.html。',
          ]}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 11：AI 生成页面 ---------- */
export const Shot11AI: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="你描述，它干活" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <AITransform
          at={1}
          promptLines={['做一个个人简介页', '深色系，卡片居中', '名字叫小满']}
          pageLines={['100%', '86%', '92%', '74%', '64%', '80%', '70%', '58%']}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 12：HTML 骨架 ---------- */
export const Shot12Skeleton: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="HTML：网页的骨架" at={0} sub="三层结构 html / head / body" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <SkeletonTree at={1} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 13：CSS 化妆 ---------- */
export const Shot13Makeup: React.FC = () => (
  <SceneSlide sceneCount={10}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="CSS：网页的化妆师" at={0} sub="HTML 管骨头，CSS 管好看" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <MakeupCard at={1} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 14：渲染流水线 ---------- */
export const Shot14Pipeline: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="从字节到像素" at={0} sub="浏览器把代码变成画面的六步" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-4xl">
        <PipelineFlow
          at={1}
          stages={[
            { label: '字节', sub: 'Bytes', icon: <Hash className="h-4 w-4" /> },
            { label: '字符', sub: 'Chars', icon: <FileText className="h-4 w-4" /> },
            { label: '节点', sub: 'Nodes', icon: <CircleDot className="h-4 w-4" /> },
            { label: 'DOM', sub: 'Tree', icon: <Network className="h-4 w-4" /> },
            { label: '渲染树', sub: 'Render', icon: <Layers className="h-4 w-4" /> },
            { label: '像素', sub: 'Pixels', icon: <Monitor className="h-4 w-4" /> },
          ]}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);
