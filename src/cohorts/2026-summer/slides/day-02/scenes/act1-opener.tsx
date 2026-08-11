'use client';

import React from 'react';
import { TimelineScene } from '../components/scene/TimelineScene';
import { RevealLayer } from '../components/kinetic/RevealLayer';
import { GlowTitle } from '../components/kinetic/GlowTitle';
import { TypeText } from '../components/kinetic/TypeText';
import { NetGrid } from '../components/fx/NetGrid';
import { DataRipple } from '../components/fx/DataRipple';
import { FileExplorer } from '../components/visual/FileExplorer';
import { PathCompare } from '../components/visual/PathCompare';
import { InstallFlow } from '../components/visual/InstallFlow';
import { BSCSCompare } from '../components/visual/BSCSCompare';
import { DataFlow } from '../components/visual/DataFlow';

/* ---------- 镜头 1：冷开场 —— 磨刀不误砍柴工 ---------- */
export const Shot01ColdOpen: React.FC = () => (
  <TimelineScene length={3}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-10">
      <RevealLayer index={0} className="w-full max-w-2xl">
        <div className="rounded-2xl border border-sky-400/20 bg-slate-950/70 p-5 font-mono text-sm text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
          <TypeText
            at={0}
            speed={26}
            lines={[
              '> npm install',
              '> 安装失败：Node.js 未找到',
              '> 你确定 PATH 配置好了吗？',
              '> 先装好环境，再来写代码…',
            ]}
          />
        </div>
      </RevealLayer>
      <RevealLayer index={1} className="mt-8">
        <GlowTitle text="磨刀不误砍柴工" />
      </RevealLayer>
      <RevealLayer index={2} className="mt-4">
        <p className="text-sm font-medium text-slate-300">代码还没开始写，人先崩了？</p>
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 2：文件、文件夹、扩展名 ---------- */
export const Shot02FileExplorer: React.FC = () => (
  <TimelineScene length={5}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="文件、文件夹、扩展名" sub="扩展名是新手最容易栽跟头的地方" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <FileExplorer at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 3：路径：绝对 vs 相对 ---------- */
export const Shot03PathCompare: React.FC = () => (
  <TimelineScene length={4}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="路径：绝对 vs 相对" sub="写死位置用绝对路径，项目内部用相对路径" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <PathCompare at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 4：软件安装与运行 ---------- */
export const Shot04InstallFlow: React.FC = () => (
  <TimelineScene length={4}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="软件安装与运行" sub="安装 = 解压 + 注册，运行 = 加载 + 分配" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <InstallFlow at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 5：B/S vs C/S 架构 ---------- */
export const Shot05BSCSCompare: React.FC = () => (
  <TimelineScene length={5}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="B/S vs C/S" sub="需要硬件/原生体验选 C/S；要快速迭代/跨平台选 B/S" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <BSCSCompare at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 6：互联网数据链路 ---------- */
export const Shot06DataFlow: React.FC = () => (
  <TimelineScene length={6}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="互联网数据链路" sub="请求 → 传输 → 处理 → 响应 → 渲染" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <DataFlow at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);