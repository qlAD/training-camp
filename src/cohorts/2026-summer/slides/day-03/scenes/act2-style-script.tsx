'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { ChipPop } from '../components/kinetic/ChipPop';
import { EditorGrid } from '../components/fx/EditorGrid';
import { GlowDot } from '../components/fx/GlowDot';
import { PlanSpecCompare } from '../components/visual/PlanSpecCompare';
import { HtmlSkeleton } from '../components/visual/HtmlSkeleton';
import { SelectorCards } from '../components/visual/SelectorCards';
import { EventDemo } from '../components/visual/EventDemo';
import { Trinity } from '../components/visual/Trinity';
import { Plug, Settings, Key, CheckCircle2, Cpu } from 'lucide-react';

/* ---------- 镜头 7：TRAE IDE 插件管理 ---------- */
const PLUGINS = [
  { name: 'TRAE AI', desc: '核心智能编程助手', status: '已安装', tone: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10' },
  { name: 'Prettier', desc: '代码格式化工具', status: '已安装', tone: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10' },
  { name: 'ESLint', desc: '代码规范检查', status: '已安装', tone: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10' },
  { name: 'GitLens', desc: 'Git 增强工具', status: '推荐安装', tone: 'text-sky-300 border-sky-400/30 bg-sky-400/10' },
];

export const Shot07Plugins: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="TRAE IDE 插件管理" sub="工欲善其事，必先利其器" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto w-full max-w-xl space-y-2">
          {PLUGINS.map((p, i) => (
            <RevealFade key={p.name} index={1 + i}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800/60">
                  <Plug className="h-4 w-4 text-sky-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-100">{p.name}</p>
                  <p className="text-[11px] text-slate-400">{p.desc}</p>
                </div>
                <span className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold ${p.tone}`}>
                  {p.status}
                </span>
              </div>
            </RevealFade>
          ))}
        </div>
      </RevealFade>
      <RevealFade index={5}>
        <p className="text-sm font-medium text-slate-300">打开扩展面板（⌘⇧X），按需安装即可</p>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 8：DeepSeek API 接入 ---------- */
export const Shot08APISetup: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <GlowDot />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="DeepSeek API 接入" sub="三步打通 AI 编程通道" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              step: 1,
              title: '获取 API Key',
              desc: '登录 platform.deepseek.com 申请密钥',
              icon: Key,
              cls: 'border-orange-400/40 bg-orange-400/10',
              iconCls: 'text-orange-300',
              numCls: 'bg-orange-400 text-slate-950',
            },
            {
              step: 2,
              title: '配置到 TRAE',
              desc: '设置 → 模型管理 → 填入 API Key',
              icon: Settings,
              cls: 'border-sky-400/40 bg-sky-400/10',
              iconCls: 'text-sky-300',
              numCls: 'bg-sky-400 text-slate-950',
            },
            {
              step: 3,
              title: '选择模型',
              desc: '选 deepseek-chat，开始对话编程',
              icon: Cpu,
              cls: 'border-amber-400/40 bg-amber-400/10',
              iconCls: 'text-amber-300',
              numCls: 'bg-amber-400 text-slate-950',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className={`relative flex flex-col gap-3 rounded-2xl border p-4 ${item.cls}`}>
                <span
                  className={`absolute -top-2 left-4 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] font-black ${item.numCls}`}
                >
                  {item.step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/50">
                  <Icon className={`h-5 w-5 ${item.iconCls}`} />
                </div>
                <p className="text-sm font-bold text-slate-100">{item.title}</p>
                <p className="text-[11px] leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </RevealFade>
      <RevealFade index={6}>
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
          <span className="text-sm font-bold text-emerald-200">连接成功！可以开始 Vibe Coding 了</span>
        </div>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 9：Plan vs Spec 模式 ---------- */
export const Shot09PlanSpec: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="Plan vs Spec 模式" sub="两种节奏，各有所长" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <PlanSpecCompare at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 10：HTML 骨架 ---------- */
export const Shot10HTML: React.FC = () => (
  <StageClock length={8}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="HTML 骨架" sub="结构是页面的地基" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <HtmlSkeleton at={1} />
      </RevealFade>
      <RevealFade index={5} className="w-full">
        <Trinity at={5} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 11：CSS 皮肤 ---------- */
export const Shot11CSS: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="CSS 皮肤" sub="选择器 + 属性，定制你的风格" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <SelectorCards at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 12：JS 交互 ---------- */
export const Shot12JS: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <GlowDot />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="JS 交互" sub="一次点击，页面就活了" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <EventDemo at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 13：三剑客协作 ---------- */
export const Shot13Trio: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="三剑客协作" sub="HTML 结构 · CSS 样式 · JS 行为" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <Trinity at={1} />
      </RevealFade>
      <RevealFade index={5} className="w-full">
        <ChipPop
          at={5}
          tone="ok"
          words={['结构归 HTML', '样式归 CSS', '行为归 JS', '分工协作，缺一不可']}
        />
      </RevealFade>
    </div>
  </StageClock>
);