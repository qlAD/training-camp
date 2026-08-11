'use client';

import React from 'react';
import { TimelineScene } from '../components/scene/TimelineScene';
import { RevealLayer } from '../components/kinetic/RevealLayer';
import { GlowTitle } from '../components/kinetic/GlowTitle';
import { NetGrid } from '../components/fx/NetGrid';
import { DataRipple } from '../components/fx/DataRipple';
import { TechStackMap } from '../components/visual/TechStackMap';
import { TerminalDemo } from '../components/visual/TerminalDemo';
import { GitFlow } from '../components/visual/GitFlow';
import { GiteeSetup } from '../components/visual/GiteeSetup';
import { MarkdownGuide } from '../components/visual/MarkdownGuide';
import { IDETour } from '../components/visual/IDETour';
import { CloneFlow } from '../components/visual/CloneFlow';

/* ---------- 镜头 7：全栈技术栈图谱 ---------- */
export const Shot07TechStack: React.FC = () => (
  <TimelineScene length={9}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="全栈技术栈图谱" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <TechStackMap at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 8：终端基础命令 ---------- */
export const Shot08Terminal: React.FC = () => (
  <TimelineScene length={5}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="终端：真工程师的方向盘" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <TerminalDemo at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 9：Git安装与全局配置 ---------- */
export const Shot09Git: React.FC = () => (
  <TimelineScene length={5}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="Git：给代码拍快照" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <GitFlow at={1} showPull={false} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 10：Gitee注册与仓库关联 ---------- */
export const Shot10Gitee: React.FC = () => (
  <TimelineScene length={6}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="Gitee：代码云端之家" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <GiteeSetup at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 11：Markdown完整语法 ---------- */
export const Shot11Markdown: React.FC = () => (
  <TimelineScene length={4}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="Markdown：技术人的通用语言" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <MarkdownGuide at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 12：TRAE IDE安装初始化 ---------- */
export const Shot12IDE: React.FC = () => (
  <TimelineScene length={5}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="TRAE IDE：主力编辑器" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <IDETour at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 13：git clone与项目管理 ---------- */
export const Shot13Clone: React.FC = () => (
  <TimelineScene length={6}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="git clone 拉取项目" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <CloneFlow at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);