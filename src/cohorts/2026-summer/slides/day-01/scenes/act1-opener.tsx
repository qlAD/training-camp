'use client';

import React from 'react';
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Award,
  ListChecks,
  BookOpen,
} from 'lucide-react';
import { SceneSlide } from '../components/scene/SceneSlide';
import { RevealBlock } from '../components/kinetic/RevealBlock';
import { NeonTitle } from '../components/kinetic/NeonTitle';
import { Typewriter } from '../components/kinetic/Typewriter';
import { StageBackground } from '../components/fx/StageBackground';
import { JourneyMap } from '../components/visual/JourneyMap';
import { RouteMap } from '../components/visual/RouteMap';
import { SoftwareConcept } from '../components/visual/SoftwareConcept';
import { RNDualFlow } from '../components/visual/RNDualFlow';
import { MindsetCompare } from '../components/visual/MindsetCompare';

/* ---------- 镜头 1：冷开场 ---------- */
export const Shot01ColdOpen: React.FC = () => (
  <SceneSlide sceneCount={3}>
    <StageBackground variant="code" />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-10">
      <RevealBlock index={0} className="w-full max-w-2xl text-center">
        <Typewriter
          lines={[
            '14 天我能学到什么？',
            'AI 辅助编程是噱头吗？',
            '零基础能做出产品吗？',
            '程序员的核心能力变了吗？',
          ]}
          at={0}
          speed={52}
        />
      </RevealBlock>
      <RevealBlock index={1} className="mt-8">
        <NeonTitle text="先别急着敲代码" at={1} size="xl" />
      </RevealBlock>
      <RevealBlock index={2} className="mt-4">
        <p className="text-sm font-medium text-slate-300">
          今天，我们先把学习地图画清楚
        </p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 2：14 天旅程全景 ---------- */
export const Shot02JourneyMap: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="14 天旅程全景" at={0} sub="打地基 → 起高楼 → 封顶交付" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <JourneyMap at={1} />
      </RevealBlock>
      <RevealBlock index={2} className="mt-2 self-start rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-4 py-2">
        <p className="text-xs font-bold text-indigo-300">Day 1–3 · 打地基</p>
        <p className="text-[11px] text-slate-400">认知 + 工具 + 第一个网页</p>
      </RevealBlock>
      <RevealBlock index={3} className="self-start rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-4 py-2">
        <p className="text-xs font-bold text-cyan-300">Day 4–10 · 起高楼</p>
        <p className="text-[11px] text-slate-400">前端 + 工程化 + 后端 + 数据库</p>
      </RevealBlock>
      <RevealBlock index={4} className="self-start rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2">
        <p className="text-xs font-bold text-fuchsia-300">Day 11–14 · 封顶交付</p>
        <p className="text-[11px] text-slate-400">部署上线 + 复盘 + 毕业项目</p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 3：训练营全景解读 ---------- */
export const Shot03Overview: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="训练营全景解读" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <RouteMap
          at={1}
          stations={['认知', '工具', '前端', '工程化', '后端', '数据库', '部署', '复盘']}
        />
      </RevealBlock>
      <RevealBlock index={2} className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5">
          <Award className="h-3.5 w-3.5 text-amber-300" />
          <span className="text-xs font-bold text-amber-200">考核标准</span>
          <span className="text-[10px] text-amber-300/70">打卡 + 项目 + 答辩</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5">
          <ListChecks className="h-3.5 w-3.5 text-cyan-300" />
          <span className="text-xs font-bold text-cyan-200">评优机制</span>
          <span className="text-[10px] text-cyan-300/70">优秀学员 + 最佳项目</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5">
          <BookOpen className="h-3.5 w-3.5 text-emerald-300" />
          <span className="text-xs font-bold text-emerald-200">前置要求</span>
          <span className="text-[10px] text-emerald-300/70">零基础 · 自带笔记本</span>
        </div>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 4：软件到底是什么 ---------- */
export const Shot04Software: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="软件到底是什么" at={0} sub="需求 + 组织 + 代码数据" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-md">
        <SoftwareConcept at={1} />
      </RevealBlock>
      <RevealBlock index={2} className="mt-2 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-center">
          <Lightbulb className="mx-auto h-4 w-4 text-amber-300" />
          <p className="mt-1 text-[10px] font-bold text-amber-200">需求</p>
          <p className="text-[9px] text-slate-400">解决什么问题</p>
        </div>
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-center">
          <Code2 className="mx-auto h-4 w-4 text-cyan-300" />
          <p className="mt-1 text-[10px] font-bold text-cyan-200">组织</p>
          <p className="text-[9px] text-slate-400">协作与规范</p>
        </div>
        <div className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-2 text-center">
          <ShieldCheck className="mx-auto h-4 w-4 text-fuchsia-300" />
          <p className="mt-1 text-[10px] font-bold text-fuchsia-200">代码数据</p>
          <p className="text-[9px] text-slate-400">最终落地产物</p>
        </div>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 5：研发四阶段流程 ---------- */
export const Shot05RNDualFlow: React.FC = () => (
  <SceneSlide sceneCount={6}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="研发四阶段" at={0} sub="需求 → 设计 → 开发 → 测试上线" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <RNDualFlow at={1} />
      </RevealBlock>
      <div className="mt-2 grid w-full grid-cols-4 gap-2">
        <RevealBlock index={2} className="rounded-lg border border-amber-400/30 bg-amber-500/10 px-2 py-2 text-center">
          <Lightbulb className="mx-auto h-3.5 w-3.5 text-amber-300" />
          <p className="mt-1 text-[10px] font-bold text-amber-200">产品经理</p>
          <p className="text-[9px] text-slate-400">调研需求</p>
        </RevealBlock>
        <RevealBlock index={3} className="rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-2 py-2 text-center">
          <PenTool className="mx-auto h-3.5 w-3.5 text-indigo-300" />
          <p className="mt-1 text-[10px] font-bold text-indigo-200">设计师</p>
          <p className="text-[9px] text-slate-400">规划方案</p>
        </RevealBlock>
        <RevealBlock index={4} className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2 py-2 text-center">
          <Code2 className="mx-auto h-3.5 w-3.5 text-cyan-300" />
          <p className="mt-1 text-[10px] font-bold text-cyan-200">工程师</p>
          <p className="text-[9px] text-slate-400">编码实现</p>
        </RevealBlock>
        <RevealBlock index={5} className="rounded-lg border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-2 text-center">
          <Rocket className="mx-auto h-3.5 w-3.5 text-fuchsia-300" />
          <p className="mt-1 text-[10px] font-bold text-fuchsia-200">测试运维</p>
          <p className="text-[9px] text-slate-400">上线保障</p>
        </RevealBlock>
      </div>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 6：程序员 vs 软件工程师 ---------- */
export const Shot06MindsetCompare: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="程序员 vs 软件工程师" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <MindsetCompare at={1} />
      </RevealBlock>
      <div className="mt-2 grid w-full grid-cols-2 gap-3">
        <RevealBlock index={2} className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3">
          <p className="text-xs font-bold text-amber-300">普通程序员</p>
          <ul className="mt-1 space-y-0.5 text-[10px] text-slate-400">
            <li>· 关注「能不能写出来」</li>
            <li>· 关注「功能能不能跑」</li>
            <li>· 关注「交付了就行」</li>
          </ul>
        </RevealBlock>
        <RevealBlock index={3} className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3">
          <p className="text-xs font-bold text-emerald-300">软件工程师</p>
          <ul className="mt-1 space-y-0.5 text-[10px] text-slate-400">
            <li>· 关注「该不该做」</li>
            <li>· 关注「会不会塌」</li>
            <li>· 关注「半年后还能改」</li>
          </ul>
        </RevealBlock>
      </div>
    </div>
  </SceneSlide>
);