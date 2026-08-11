'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { EditorGrid } from '../components/fx/EditorGrid';
import { GlowDot } from '../components/fx/GlowDot';
import { CodeWindow, CodeLine } from '../components/visual/CodeWindow';
import { BrowserPreview } from '../components/visual/BrowserPreview';
import { CodingSteps } from '../components/visual/CodingSteps';
import { PromptElements } from '../components/visual/PromptElements';
import { CheckCircle2, AlertTriangle, RefreshCw, Eye } from 'lucide-react';

/* ---------- 镜头 1：冷开场 · 从碰运气到标准化 ---------- */
const SHOT01_LINES: CodeLine[] = [
  { text: '// Day 1 的做法：想到啥写啥', color: '#8B93A7' },
  { text: 'const btn = document.querySelector("#btn");', color: '#FBBF24' },
  { text: 'btn.onclick = () => {', color: '#FBBF24' },
  { text: '  document.write("你好");', color: '#FBBF24' },
  { text: '}; // 刷新就没了', color: '#8B93A7' },
];

export const Shot01Open: React.FC = () => (
  <StageClock length={5}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="从碰运气到标准化" sub="还记得 Day 1 写代码的手忙脚乱吗？" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto flex w-full max-w-3xl items-stretch gap-4">
          <div className="min-w-0 flex-1">
            <CodeWindow at={1} lines={SHOT01_LINES} title="script.js" badge="JS" badgeTone="js" />
          </div>
          <div className="w-48 shrink-0 self-center">
            <BrowserPreview at={1}>
              <div className="px-4 py-5 text-center">
                <p className="text-lg font-black text-slate-800">你好</p>
                <p className="mt-1 text-xs text-rose-500">⚠ 点击后页面被覆盖了</p>
              </div>
            </BrowserPreview>
          </div>
        </div>
      </RevealFade>
      <RevealFade index={4}>
        <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2">
          <span className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-1.5 text-xs font-bold text-rose-200">
            ❌ 想到啥写啥
          </span>
          <span className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-1.5 text-xs font-bold text-rose-200">
            ❌ 不思考结构
          </span>
          <span className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-1.5 text-xs font-bold text-rose-200">
            ❌ 错了不知为啥
          </span>
        </div>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 2：Vibe Coding 五步流程 ---------- */
export const Shot02CodingSteps: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <GlowDot />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="Vibe Coding 五步流程" sub="告别碰运气，按步骤交付" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <CodingSteps at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 3：Step 1 · 理清需求 ---------- */
const SHOT03_LINES: CodeLine[] = [
  { text: '// 不是："帮我写个页面"', color: '#8B93A7' },
  { text: '', color: '#8B93A7' },
  { text: '// 而是：', color: '#8B93A7' },
  { text: '// • 做什么：个人简介页', color: '#FBBF24' },
  { text: '// • 给谁看：训练营老师和同学', color: '#FBBF24' },
  { text: '// • 有什么：姓名 + 头像 + 爱好', color: '#FBBF24' },
  { text: '// • 啥风格：简洁、有我的个性', color: '#FBBF24' },
];

export const Shot03Step1: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="Step 1 · 理清需求" sub="想清楚，才能写清楚" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <CodeWindow at={1} lines={SHOT03_LINES} title="需求.txt" badge="TXT" badgeTone="js" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: '🎯', label: '做什么', value: '个人简介页' },
              { icon: '👥', label: '给谁看', value: '老师和同学' },
              { icon: '📦', label: '有什么', value: '姓名 / 头像 / 爱好' },
              { icon: '🎨', label: '啥风格', value: '简洁、有个性' },
            ].map((item, i) => (
              <RevealFade key={item.label} index={2 + i}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-2.5">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-[11px] text-slate-500">{item.label}</p>
                    <p className="text-sm font-bold text-slate-200">{item.value}</p>
                  </div>
                </div>
              </RevealFade>
            ))}
          </div>
        </div>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 4：Step 2 · 拆解任务 ---------- */
export const Shot04Step2: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="Step 2 · 拆解任务" sub="大任务拆成小步骤，一步一交付" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto w-full max-w-2xl space-y-2">
          {[
            { title: '搭骨架', desc: '用 HTML 写出页面结构', color: 'border-orange-400/40 bg-orange-400/10 text-orange-200' },
            { title: '上妆容', desc: '用 CSS 美化样式和布局', color: 'border-sky-400/40 bg-sky-400/10 text-sky-200' },
            { title: '加心跳', desc: '用 JS 添加交互功能', color: 'border-amber-400/40 bg-amber-400/10 text-amber-200' },
            { title: '拆文件', desc: '把单文件拆成 HTML/CSS/JS 三件套', color: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200' },
            { title: '发上线', desc: '提交 Gitee，生成在线链接', color: 'border-violet-400/40 bg-violet-400/10 text-violet-200' },
          ].map((step, i) => (
            <RevealFade key={step.title} index={1 + i}>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-black ${step.color}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-100">{step.title}</p>
                  <p className="text-[11px] text-slate-400">{step.desc}</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-slate-600" />
              </div>
            </RevealFade>
          ))}
        </div>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 5：Step 3 · 提示词四要素 ---------- */
export const Shot05PromptElements: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="Step 3 · 提示词四要素" sub="Role + Task + Context + Output" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <PromptElements at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 6：Step 4 · 审查与调整 ---------- */
const SHOT06_LINES: CodeLine[] = [
  { text: '// 自查清单', color: '#8B93A7' },
  { text: '1. 页面能正常打开吗？', color: '#38BDF8' },
  { text: '2. 样式在不同屏幕正常吗？', color: '#38BDF8' },
  { text: '3. 交互按钮点了有反应吗？', color: '#38BDF8' },
  { text: '4. 代码能跑，但能读吗？', color: '#38BDF8' },
  { text: '5. 命名清晰吗？别人能懂吗？', color: '#38BDF8' },
];

export const Shot06Step4: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealFade index={0}>
        <BigTitle text="Step 4 · 审查与调整" sub="AI 写的代码也需要你的把关" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <CodeWindow at={1} lines={SHOT06_LINES} title="审查清单.txt" badge="CHECK" badgeTone="css" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { icon: Eye, label: '打开看看', desc: '浏览器里实际跑一下' },
              { icon: RefreshCw, label: '微调调整', desc: '不满意就继续对话' },
              { icon: AlertTriangle, label: '注意陷阱', desc: '别让 AI 跳过你没说的需求' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealFade key={item.label} index={2 + i}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                    <div>
                      <p className="text-sm font-bold text-slate-100">{item.label}</p>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </RevealFade>
              );
            })}
          </div>
        </div>
      </RevealFade>
      <RevealFade index={5}>
        <p className="text-sm font-medium text-slate-300">AI 是副驾驶，你才是主驾驶 —— 审仔细，才能发出去</p>
      </RevealFade>
    </div>
  </StageClock>
);