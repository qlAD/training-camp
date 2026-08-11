'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { ChipPop } from '../components/kinetic/ChipPop';
import { EditorGrid } from '../components/fx/EditorGrid';
import { GlowDot } from '../components/fx/GlowDot';
import { FileSplitDemo } from '../components/visual/FileSplitDemo';
import { CheckCircle2, BookOpen, PenLine, Presentation, Rocket } from 'lucide-react';

/* ---------- 镜头 14：单文件拆多文件 ---------- */
export const Shot14FileSplit: React.FC = () => (
  <StageClock length={8}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="单文件拆多文件" sub="all-in-one → 三件套分离" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <FileSplitDemo at={1} />
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 15：今日实操三件事 ---------- */
export const Shot15HandsOn: React.FC = () => (
  <StageClock length={6}>
    <EditorGrid />
    <GlowDot />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="今日实操三件事" sub="动手：改风格 · 加内容 · 拆文件" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto w-full max-w-xl space-y-3">
          {[
            {
              icon: PenLine,
              title: '改配色和字体',
              desc: '用 CSS 选择器改出你喜欢的风格',
              tag: 'CSS',
              tagCls: 'text-sky-300 bg-sky-400/15 border-sky-400/30',
              done: true,
            },
            {
              icon: Presentation,
              title: '加头像和爱好',
              desc: '用 HTML 标签添加图片和列表内容',
              tag: 'HTML',
              tagCls: 'text-orange-300 bg-orange-400/15 border-orange-400/30',
              done: true,
            },
            {
              icon: Rocket,
              title: '拆文件 + 发布',
              desc: '拆成三件套，提交 Gitee 生成链接',
              tag: 'Git',
              tagCls: 'text-amber-300 bg-amber-400/15 border-amber-400/30',
              done: false,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealFade key={item.title} index={1 + i}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/60">
                    <Icon className="h-4 w-4 text-sky-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-slate-100">{item.title}</p>
                      <span className={`rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold ${item.tagCls}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                  <CheckCircle2
                    className={`h-5 w-5 ${item.done ? 'text-emerald-300' : 'text-slate-600'}`}
                  />
                </div>
              </RevealFade>
            );
          })}
        </div>
      </RevealFade>
    </div>
  </StageClock>
);

/* ---------- 镜头 16：作业与自测清单 ---------- */
export const Shot16Homework: React.FC = () => (
  <StageClock length={7}>
    <EditorGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFade index={0}>
        <BigTitle text="作业与自测清单" sub="巩固今天的五步流程" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-sky-300" />
              <span className="text-sm font-bold text-slate-100">必做作业</span>
            </div>
            <div className="space-y-2">
              {[
                '把今天的个人简介页面重新做一遍',
                '尝试用 Plan 模式让 AI 帮你改 3 个地方',
                '把单文件拆成 HTML/CSS/JS 三件套',
                '提交到 Gitee，拿到在线链接',
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-900/40 px-3 py-2">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600 font-mono text-[9px] font-bold text-slate-500">
                    {i + 1}
                  </span>
                  <span className="text-[12px] leading-relaxed text-slate-300">{task}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-bold text-slate-100">自测清单</span>
            </div>
            <div className="space-y-2">
              {[
                '能说清楚 Vibe Coding 的五步流程吗？',
                '写提示词时会主动加上四要素吗？',
                '知道什么时候用 Plan、什么时候用 Spec 吗？',
                '能独立把单文件拆成三件套吗？',
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-900/40 px-3 py-2">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600 font-mono text-[9px] font-bold text-slate-500">
                    ?
                  </span>
                  <span className="text-[12px] leading-relaxed text-slate-300">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
        <BigTitle text="今日收获" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <ChipPop
          at={1}
          tone="ok"
          words={['Vibe Coding 五步流程', '提示词四要素', 'Plan / Spec 模式', '三件套协作', '拆文件上线']}
        />
      </RevealFade>
      <RevealFade index={5} className="w-full">
        <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-3.5 shadow-[0_0_24px_rgba(56,189,248,0.15)]">
          <span className="font-mono text-2xl font-black text-sky-300">DAY 4</span>
          <div className="text-left">
            <p className="font-bold text-sky-100">作品集搭建</p>
            <p className="text-[11px] text-sky-200/70">Vue 3 + Vite 项目 · 组件化开发入门</p>
          </div>
        </div>
      </RevealFade>
      <RevealFade index={6}>
        <p className="bg-gradient-to-r from-orange-200 via-sky-200 to-amber-200 bg-clip-text text-center text-lg font-black text-transparent">
          标准化 · 流程化 · 规模化 — 让 AI 真正帮你写代码
        </p>
      </RevealFade>
    </div>
  </StageClock>
);