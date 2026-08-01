'use client';

import React from 'react';
import { TimelineScene } from '../components/scene/TimelineScene';
import { RevealLayer } from '../components/kinetic/RevealLayer';
import { GlowTitle } from '../components/kinetic/GlowTitle';
import { PopCards } from '../components/kinetic/PopCards';
import { NetGrid } from '../components/fx/NetGrid';
import { FullTrip } from '../components/visual/FullTrip';
import { TerminalTape, InstallJob } from '../components/visual/TerminalTape';
import { GitPush } from '../components/visual/GitPush';
import { MiniQuiz, QuizQ } from '../components/visual/MiniQuiz';

/* ---------- 镜头 13：一次完整旅程 ---------- */
export const Shot13Trip: React.FC = () => (
  <TimelineScene length={7}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="一次完整的旅程" sub="点击 → DNS → 请求 → 响应 → 渲染" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <FullTrip at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 14：装好三件套 ---------- */
const INSTALL_JOBS: InstallJob[] = [
  {
    title: 'JDK 21',
    cmd: 'java --version',
    lines: [
      '下载 JDK 21 …',
      '配置 JAVA_HOME …',
      '检测安装 …',
    ],
    ok: 'openjdk 21.0.2 ✓',
  },
  {
    title: 'Node.js',
    cmd: 'node -v',
    lines: [
      '下载 Node 20 LTS …',
      'npm 注册 …',
      '检测安装 …',
    ],
    ok: 'v20.11.1 ✓',
  },
  {
    title: 'Git',
    cmd: 'git --version',
    lines: [
      '下载 Git 2.43 …',
      '初始化全局配置 …',
      '检测安装 …',
    ],
    ok: 'git version 2.43.0 ✓',
  },
];

export const Shot14Install: React.FC = () => (
  <TimelineScene length={3}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="装好三件套" sub="JDK · Node.js · Git —— 装完验证版本号" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <TerminalTape at={1} jobs={INSTALL_JOBS} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 15：代码放进云端 ---------- */
export const Shot15Git: React.FC = () => (
  <TimelineScene length={6}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="把代码放进云端" sub="git init → add → commit → push" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <GitPush at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 16：三题验收 ---------- */
const QUIZ: QuizQ[] = [
  {
    q: 'DNS 的主要作用是？',
    options: ['把域名翻译成 IP', '给网页加锁', '加速网络下载'],
    answer: 0,
    explain: 'DNS 就是互联网的通讯录：记名字，翻译成数字。',
  },
  {
    q: 'URL 里的 https:// 叫做？',
    options: ['域名', '端口', '协议'],
    answer: 2,
    explain: '协议告诉浏览器「怎么寄信」：https 是加密传输。',
  },
  {
    q: '打开网页看到 404，最可能的原因是？',
    options: ['服务器崩了', '页面不存在', '网络断了'],
    answer: 1,
    explain: '404 = 地址写错或内容不存在，先检查你的 URL。',
  },
];

export const Shot16Quiz: React.FC = () => (
  <TimelineScene length={2}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="三题验收" sub="点一点，答对才算吸收" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <MiniQuiz questions={QUIZ} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 17：总结预告 ---------- */
export const Shot17Summary: React.FC = () => (
  <TimelineScene length={7}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="今天收获" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <PopCards at={1} words={['看得懂 DNS', '看得懂 HTTP', '环境三件套就绪', '代码进了 Gitee']} />
      </RevealLayer>
      <RevealLayer index={5} className="w-full">
        <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-5 py-3.5 shadow-[0_0_24px_rgba(251,191,36,0.15)]">
          <span className="font-mono text-2xl font-black text-amber-300">DAY 3</span>
          <div className="text-left">
            <p className="font-bold text-amber-100">给网页化妆</p>
            <p className="text-[11px] text-amber-200/70">HTML / CSS / JavaScript 极速入门</p>
          </div>
        </div>
      </RevealLayer>
      <RevealLayer index={6}>
        <p className="bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-center text-lg font-black text-transparent">
          Internet is our world. Build it, one request at a time.
        </p>
      </RevealLayer>
    </div>
  </TimelineScene>
);
