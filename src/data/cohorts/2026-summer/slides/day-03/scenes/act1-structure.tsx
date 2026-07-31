'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { ChipPop } from '../components/kinetic/ChipPop';
import { EditorGrid } from '../components/fx/EditorGrid';
import { GlowDot } from '../components/fx/GlowDot';
import { CodeWindow, CodeLine } from '../components/visual/CodeWindow';
import { BrowserPreview } from '../components/visual/BrowserPreview';
import { RouteNodes } from '../components/visual/RouteNodes';
import { Trinity } from '../components/visual/Trinity';
import { TagPill } from '../components/visual/TagPill';
import { HtmlSkeleton } from '../components/visual/HtmlSkeleton';

/* ---------- 镜头 1：冷开场 · 素颜的网页 ---------- */
const SHOT01_LINES: CodeLine[] = [
  { text: '<h1>你好，我是李明</h1>', color: '#F97316' },
  { text: '<p>这是我最朴素的一页</p>', color: '#F97316' },
  { text: '<!-- 没有样式，没有交互 -->', color: '#8B93A7' },
];

export const Shot01Plain: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="素颜的网页" sub="还记得 Day 1 的「第一个网页」吗" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto flex w-full max-w-3xl items-stretch gap-4">
          <div className="min-w-0 flex-1">
            <CodeWindow at={1} lines={SHOT01_LINES} title="index.html" badge="HTML" badgeTone="html" />
          </div>
          <div className="w-48 shrink-0 self-center">
            <BrowserPreview at={1}>
              <div className="px-4 py-5 text-center">
                <p className="text-lg font-black text-slate-800">你好，我是李明</p>
                <p className="mt-1 text-xs text-slate-500">这是我最朴素的一页</p>
              </div>
            </BrowserPreview>
          </div>
        </div>
      </RevealFade>
      <RevealFade index={4}>
        <p className="text-sm font-medium text-slate-300">它还能更好看 —— 今天，给它上妆</p>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 2：承诺快闪 · 三件套登场 ---------- */
export const Shot02Promises: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <GlowDot />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealFade index={0} className="w-full">
        <ChipPop at={0} tone="html" words={['HTML 结构', 'CSS 化妆', 'JS 交互']} />
      </RevealFade>
      <RevealFade index={1}>
        <BigTitle text="今天，三件套登场" />
      </RevealFade>
      <RevealFade index={4}>
        <p className="text-sm font-medium text-slate-300">50 分钟后，你的个人简介焕然一新</p>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 3：今日路线 ---------- */
export const Shot03Route: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="今天学什么？" sub="五站走完，你的页面就换新装了" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <RouteNodes
          at={1}
          stops={[
            { label: '认识三件套', sub: '各司其职', tone: 'html' },
            { label: 'HTML 骨架', sub: '搭结构', tone: 'html' },
            { label: 'CSS 上妆', sub: '上样式', tone: 'css' },
            { label: 'JS 心跳', sub: '加交互', tone: 'js' },
            { label: '合体发布', sub: '进仓库', tone: 'ok' },
          ]}
        />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 4：网页的三位一体 ---------- */
export const Shot04Trinity: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="网页的三位一体" sub="同一个人，三套衣服" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <Trinity at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 5：标签：网页的积木 ---------- */
export const Shot05Tags: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="标签：网页的积木" sub="<h1> <p> <img> 各司其职" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <TagPill
          at={1}
          tags={[
            { tag: '<h1>', example: '你好，我是李明', cls: 'block text-xl font-black text-slate-800' },
            { tag: '<p>', example: '全栈学员，喜欢写代码', cls: 'block text-xs text-slate-600' },
            { tag: '<img>', example: '🖼️ 我的照片占位', cls: 'block text-sm' },
            { tag: '<ul>', example: '• 写代码  • 摄影', cls: 'block text-xs text-slate-600' },
          ]}
        />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 6：HTML 骨架 ---------- */
export const Shot06Skeleton: React.FC = () => (
  <StageClock length={10}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="HTML 骨架" sub="一个页面长什么样" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <HtmlSkeleton at={1} />
      </RevealFade>
    </div>
  </StageClock>
);
