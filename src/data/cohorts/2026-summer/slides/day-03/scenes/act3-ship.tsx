'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { ChipPop } from '../components/kinetic/ChipPop';
import { EditorGrid } from '../components/fx/EditorGrid';
import { GlowDot } from '../components/fx/GlowDot';
import { ProfileBuilder } from '../components/visual/ProfileBuilder';
import { TaskList } from '../components/visual/TaskList';
import { PublishBtn } from '../components/visual/PublishBtn';
import { MiniQuiz, QuizQ } from '../components/visual/MiniQuiz';

/* ---------- 镜头 13：合体：你的个人简介 ---------- */
export const Shot13Profile: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="合体：你的个人简介" sub="HTML + CSS + JS 合而为一" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <ProfileBuilder at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 14：动手：照着改 ---------- */
export const Shot14Task: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="动手：照着改" sub="三步改出你的风格（现场实操）" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <TaskList at={1} items={['改颜色：换一套你喜欢的配色', '加照片：放一张你的头像', '加爱好列表：写写你喜欢什么']} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 15：发布：放进 Gitee ---------- */
export const Shot15Publish: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <GlowDot />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="发布：放进 Gitee" sub="commit 今天的新成果" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <PublishBtn at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 16：三题验收 ---------- */
const QUIZ: QuizQ[] = [
  {
    q: 'HTML 主要负责网页的？',
    options: ['结构', '颜色', '点击反馈'],
    answer: 0,
    explain: 'HTML 搭骨架、装内容；颜色归 CSS，交互归 JS。',
  },
  {
    q: 'CSS 能让网页？',
    options: ['动起来', '变好看', '保存数据'],
    answer: 1,
    explain: 'CSS 管样式：颜色、大小、布局，就是给网页化妆。',
  },
  {
    q: 'JS 让页面？',
    options: ['有骨架', '有背景色', '响应点击'],
    answer: 2,
    explain: 'JS 管行为：点击、变化、请求，让页面活过来。',
  },
];

export const Shot16Quiz: React.FC = () => (
  <StageClock length={2}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="三题验收" sub="点一点，答对才算吸收" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <MiniQuiz questions={QUIZ} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 17：总结预告 ---------- */
export const Shot17Summary: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="今天收获" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <ChipPop
          at={1}
          tone="ok"
          words={['会写结构', '会上妆', '会做交互', '发布上线']}
        />
      </RevealFade>
      <RevealFade index={5} className="w-full">
        <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-3.5 shadow-[0_0_24px_rgba(56,189,248,0.15)]">
          <span className="font-mono text-2xl font-black text-sky-300">DAY 4</span>
          <div className="text-left">
            <p className="font-bold text-sky-100">作品集开篇</p>
            <p className="text-[11px] text-sky-200/70">Vue 3 + Vite 项目搭建 · 作品集首页</p>
          </div>
        </div>
      </RevealFade>
      <RevealFade index={6}>
        <p className="bg-gradient-to-r from-orange-200 via-sky-200 to-amber-200 bg-clip-text text-center text-lg font-black text-transparent">
          Structure. Style. Spark. — Your page, your voice.
        </p>
      </RevealFade>
    </div>
  </StageClock>
);
