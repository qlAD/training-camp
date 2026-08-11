'use client';

import React from 'react';
import { StageClock } from '../components/scene/StageClock';
import { RevealFade } from '../components/kinetic/RevealFade';
import { BigTitle } from '../components/kinetic/BigTitle';
import { ChipPop } from '../components/kinetic/ChipPop';
import { EditorGrid } from '../components/fx/EditorGrid';
import { GlowDot } from '../components/fx/GlowDot';
import { FileSplitDemo } from '../components/visual/FileSplitDemo';
import { CheckCircle2, BookOpen, Key, Presentation, Rocket } from 'lucide-react';

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
        <BigTitle text="今日实操三件事" sub="动手：接 API · 完善作品集 · 拆分重构" />
      </RevealFade>
      <RevealFade index={1} className="w-full">
        <div className="mx-auto w-full max-w-xl space-y-3">
          {[
            {
              icon: Key,
              title: '接入 DeepSeek API',
              desc: '在 TRAE 内配置 Key，连通测试',
              tag: 'API',
              tagCls: 'text-orange-300 bg-orange-400/15 border-orange-400/30',
              done: true,
            },
            {
              icon: Presentation,
              title: '完善个人静态作品集',
              desc: 'Plan 模式聊结构 + Spec 模式生成区块',
              tag: 'Vibe',
              tagCls: 'text-sky-300 bg-sky-400/15 border-sky-400/30',
              done: true,
            },
            {
              icon: Rocket,
              title: '拆分单文件为多文件',
              desc: '拆成 html/css/js 三件套并跑通',
              tag: 'Refactor',
              tagCls: 'text-emerald-300 bg-emerald-400/15 border-emerald-400/30',
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
                '把拆分完毕的静态作品集代码（html+css+js）归档到 day03 文件夹',
                '把代码更新提交到 Gitee 远程仓库，提交评论附运行截图',
                '保证代码本地双击 html 文件能直接打开、正常运行',
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
            <div className="space-y-1.5">
              {[
                'TRAE IDE 已接入 DeepSeek API，能在编辑器内直接对话生成代码',
                '作品集页面结构清晰，至少包含自我介绍、技能、作品、联系方式',
                '页面有基础交互（按钮点击或卡片悬停）且能正常响应',
                '代码已拆分为 html、css、js 多文件，分层清晰',
                '拆分后页面样式和交互均正常，没有"丢样式"',
                '代码已归档到 day03 文件夹并提交到 Gitee，提交评论含运行截图',
                '本地双击 html 文件可直接打开、正常运行',
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-900/40 px-3 py-1.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600 font-mono text-[9px] font-bold text-slate-500">
                    ?
                  </span>
                  <span className="text-[11px] leading-relaxed text-slate-300">{task}</span>
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