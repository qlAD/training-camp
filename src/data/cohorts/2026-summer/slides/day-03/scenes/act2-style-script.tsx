'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { EditorGrid } from '../components/fx/EditorGrid';
import { CodeWindow, CodeLine } from '../components/visual/CodeWindow';
import { BrowserPreview } from '../components/visual/BrowserPreview';
import { SelectorCards } from '../components/visual/SelectorCards';
import { BoxModelView } from '../components/visual/BoxModelView';
import { EventDemo } from '../components/visual/EventDemo';

/* ---------- 镜头 7：CSS 给标签上妆 ---------- */
const SHOT07_LINES: CodeLine[] = [
  { text: 'h1 {', color: '#38BDF8' },
  { text: '  color: #38bdf8;', color: '#38BDF8' },
  { text: '  font-size: 40px;', color: '#38BDF8' },
  { text: '}', color: '#38BDF8' },
];

export const Shot07Makeup: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="CSS：给标签上妆" sub="color · background · font-size" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto flex w-full max-w-3xl items-stretch gap-4">
          <div className="min-w-0 flex-1">
            <CodeWindow at={1} lines={SHOT07_LINES} title="style.css" badge="CSS" badgeTone="css" />
          </div>
          <div className="w-48 shrink-0 self-center">
            <BrowserPreview at={1}>
              <div className="px-4 py-5 text-center">
                <p className="text-2xl font-black text-sky-500">你好，我是李明</p>
                <p className="mt-1 text-xs text-slate-500">加了 CSS，标题变蓝、变大了</p>
              </div>
            </BrowserPreview>
          </div>
        </div>
      </RevealFade>
      <RevealFade index={5}>
        <p className="text-sm font-medium text-slate-300">同样的 HTML，加上 CSS 就换了一身妆</p>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 8：选择器三兄弟 ---------- */
export const Shot08Selectors: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="选择器三兄弟" sub="标签 · 类 · ID" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <SelectorCards at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 9：盒模型与布局 ---------- */
export const Shot09Box: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="盒模型与布局" sub="每一块内容都是一个「盒子」" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <BoxModelView at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 10：JS 让页面动起来 ---------- */
export const Shot10Event: React.FC = () => (
  <StageClock length={4}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="JS：让页面动起来" sub="一次点击，一次响应" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <EventDemo at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 11：JS 三件套 ---------- */
const SHOT11_LINES: CodeLine[] = [
  { text: 'let name = "李明";', color: '#FBBF24' },
  { text: 'function hello() {', color: '#FBBF24' },
  { text: '  alert("你好，" + name);', color: '#FBBF24' },
  { text: '}', color: '#FBBF24' },
  { text: '// 变量 · 函数 · 事件', color: '#8B93A7' },
];

export const Shot11JSTrio: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="JS 三件套" sub="变量 · 函数 · 事件" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto w-full max-w-2xl">
          <CodeWindow at={1} lines={SHOT11_LINES} title="script.js" badge="JS" badgeTone="js" />
        </div>
      </RevealFade>
      <RevealFade index={6}>
        <p className="text-sm font-medium text-slate-300">变量存数据，函数写动作，事件等触发 —— JS 就是这三件事</p>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 12：一个完整交互 ---------- */
const SHOT12_LINES: CodeLine[] = [
  { text: 'const btn = document.querySelector("button");', color: '#FBBF24' },
  { text: 'btn.onclick = () => {', color: '#FBBF24' },
  { text: '  title.textContent = "学会了 JS 🎉";', color: '#FBBF24' },
  { text: '};', color: '#FBBF24' },
];

export const Shot12FullEvent: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="一个完整交互" sub="三行代码，整页响应" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto flex w-full max-w-3xl items-stretch gap-4">
          <div className="min-w-0 flex-1">
            <CodeWindow at={1} lines={SHOT12_LINES} title="script.js" badge="JS" badgeTone="js" />
          </div>
          <div className="w-64 shrink-0 self-center">
            <EventDemo at={1} />
          </div>
        </div>
      </RevealFade>
      <RevealFade index={5}>
        <p className="text-sm font-medium text-slate-300">结构交给 HTML，妆交给 CSS，心跳交给 JS</p>
      </RevealFade>
    </div>
  </StageClock>
);
