'use client';

import React from 'react';
import {
  Keyboard,
  Cpu,
  Lightbulb,
  ShieldCheck,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';
import { SceneSlide } from '../components/scene/SceneSlide';
import { RevealBlock } from '../components/kinetic/RevealBlock';
import { NeonTitle } from '../components/kinetic/NeonTitle';
import { KineticText } from '../components/kinetic/KineticText';
import { Typewriter } from '../components/kinetic/Typewriter';
import { FlashWords } from '../components/kinetic/FlashWords';
import { StageBackground } from '../components/fx/StageBackground';
import { FlowLoop } from '../components/visual/FlowLoop';
import { RouteMap } from '../components/visual/RouteMap';
import { HumanAISplit } from '../components/visual/HumanAISplit';
import { CompareCards } from '../components/visual/CompareCards';
import { QuadrantCards } from '../components/visual/QuadrantCards';

/* ---------- 镜头 1：冷开场钩子 ---------- */
export const Shot01ColdOpen: React.FC = () => (
  <SceneSlide sceneCount={3}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-10">
      <RevealBlock index={0} className="w-full max-w-2xl text-center">
        <Typewriter
          lines={[
            'print("Hello World!")',
            'git init && git add .',
            'npm create vite@latest',
            '<html lang="zh">',
            'body { display: grid; }',
            'curl -i https://your-site.com',
          ]}
          at={0}
          speed={48}
        />
      </RevealBlock>
      <RevealBlock index={1} className="mt-8">
        <NeonTitle text="零基础，也可以。" at={1} size="xl" />
      </RevealBlock>
      <RevealBlock index={2} className="mt-4">
        <p className="text-sm font-medium text-slate-300">
          今天，你将亲手做出人生第一个网页
        </p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 2：承诺快闪 ---------- */
export const Shot02Promises: React.FC = () => (
  <SceneSlide sceneCount={3}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-10">
      <RevealBlock index={0} className="w-full">
        <FlashWords words={['14 天', '双项目', '全国产工具链', '零基础友好']} at={0} interval={900} />
      </RevealBlock>
      <RevealBlock index={1} className="mt-8">
        <NeonTitle text="欢迎来到 AI 全栈暑期训练营" at={1} size="xl" />
      </RevealBlock>
      <RevealBlock index={2} className="mt-4">
        <p className="text-sm font-medium text-slate-300">从今天起，你正式成为一名 AI 时代的程序员</p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 3：今日路线 ---------- */
export const Shot03Route: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="今天学什么？" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <RouteMap at={1} stations={['认知', '工具', '动手', '原理', '打卡']} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 4：Vibe Coding 定义 ---------- */
export const Shot04VibeCoding: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="Vibe Coding" at={0} />
      </RevealBlock>
      <RevealBlock index={1}>
        <KineticText
          text="AI 写代码，人做决策"
          at={1}
          mode="words"
          stagger={180}
          className="text-3xl sm:text-4xl font-black text-slate-100"
        />
      </RevealBlock>
      <RevealBlock index={2} className="w-full max-w-2xl">
        <HumanAISplit at={2} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 5：新旧范式对比 ---------- */
export const Shot05Paradigm: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="从打字，到指挥" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <CompareCards
          at={1}
          left={{
            title: '传统开发 · 打字员',
            icon: <Keyboard className="h-4 w-4" />,
            items: ['一行一行手敲代码', '遇到报错自己猜', '加班赶工交付'],
          }}
          right={{
            title: 'Vibe Coding · 架构师',
            icon: <Cpu className="h-4 w-4" />,
            items: ['对话式指挥 AI', '把需求说清楚', '你负责评审与决策'],
          }}
        />
      </RevealBlock>
      <RevealBlock index={2}>
        <p className="text-sm font-medium text-slate-400">程序员 ≠ 打字员，而是 AI 的架构师与评审</p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 6：人机协作闭环 ---------- */
export const Shot06Loop: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="想法 → 成果的循环" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <FlowLoop at={1} nodes={['想法', 'Prompt', 'AI', '审核', '产出']} />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 7：协作四角色 ---------- */
export const Shot07Roles: React.FC = () => (
  <SceneSlide sceneCount={6}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="你，是方向盘" at={0} sub="AI 负责执行，你负责四个角色" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <QuadrantCards
          at={1}
          roles={[
            { icon: <Lightbulb className="h-4 w-4" />, title: '产品经理', desc: '想清楚要做什么、为什么做' },
            { icon: <ShieldCheck className="h-4 w-4" />, title: '技术评审', desc: 'AI 写的代码，你得看得懂、把得关' },
            { icon: <MessageSquare className="h-4 w-4" />, title: '沟通者', desc: '把需求翻译成 AI 听得懂的提示词' },
            { icon: <GraduationCap className="h-4 w-4" />, title: '教练', desc: '带 AI 迭代，一次比一次好' },
          ]}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);
