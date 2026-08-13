'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BlueprintScene } from '../components/scene/BlueprintScene';
import { RevealProject } from '../components/kinetic/RevealProject';
import { BlueprintTitle } from '../components/kinetic/BlueprintTitle';
import { BlueprintGrid } from '../components/fx/BlueprintGrid';
import { ProjectGlow } from '../components/fx/ProjectGlow';
import { MigrationFlow } from '../components/visual/MigrationFlow';
import { ComponentBreakdown } from '../components/visual/ComponentBreakdown';
import { ReadmeGuide } from '../components/visual/ReadmeGuide';
import {
  FileCode,
  Component,
  FileText,
  Rocket,
  CheckCircle2,
  BookOpen,
  FileCheck,
  ClipboardList,
  ArrowRight,
} from 'lucide-react';
import { EASE } from '../components/scene/theme';

/* ---------- Shot11: AI 迁移静态→Vue ---------- */
export const Shot11Migration: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="让 AI 帮你搬家" sub="静态迁移 Vue3 工程" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <MigrationFlow />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot12: 组件化拆解 ---------- */
export const Shot12Components: React.FC = () => (
  <BlueprintScene length={8}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="组件化拆解" sub="像搭积木一样拼出应用" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <ComponentBreakdown />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot13: 路由配置实操 ---------- */
const ROUTER_CODE_LINES = [
  { text: "// src/router/index.js", color: '#64748B' },
  { text: "import { createRouter, createWebHistory } from 'vue-router'", color: '#22D3EE' },
  { text: '', color: '#64748B' },
  { text: 'const routes = [', color: '#34D399' },
  { text: "  { path: '/', name: 'Home', component: Home },", color: '#F59E0B' },
  { text: "  { path: '/works', name: 'Works', component: Works },", color: '#F59E0B' },
  { text: "  { path: '/about', name: 'About', component: About },", color: '#F59E0B' },
  { text: ']', color: '#34D399' },
  { text: '', color: '#64748B' },
  { text: 'export default createRouter({', color: '#34D399' },
  { text: '  history: createWebHistory(),', color: '#22D3EE' },
  { text: '  routes,', color: '#22D3EE' },
  { text: '})', color: '#34D399' },
];

const CodeBlock: React.FC<{ lines: typeof ROUTER_CODE_LINES }> = ({ lines }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: EASE }}
    className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80"
  >
    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/60 px-4 py-1.5">
      <FileCode className="h-3 w-3 text-cyan-400" />
      <span className="font-mono text-[10px] text-slate-400">router/index.js</span>
    </div>
    <div className="p-3 font-mono text-[10px] leading-relaxed">
      {lines.map((line, i) => (
        <div key={i} style={{ color: line.color }}>
          {line.text || '\u00A0'}
        </div>
      ))}
    </div>
  </motion.div>
);

const ROUTER_COLORS = {
  amber: { borderCls: 'border-amber-400/30', bgCls: 'bg-amber-500/10', textCls: 'text-amber-300' },
  cyan: { borderCls: 'border-cyan-400/30', bgCls: 'bg-cyan-500/10', textCls: 'text-cyan-300' },
  emerald: { borderCls: 'border-emerald-400/30', bgCls: 'bg-emerald-500/10', textCls: 'text-emerald-300' },
} as const;

export const Shot13RouterConfig: React.FC = () => (
  <BlueprintScene length={8}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="配基础路由" sub="至少两到三条，页面切换正常" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <CodeBlock lines={ROUTER_CODE_LINES} />
          <div className="flex flex-col gap-3">
            {([
              { icon: Component, text: '首页 /', color: 'amber' as const },
              { icon: Component, text: '作品列表 /works', color: 'cyan' as const },
              { icon: Component, text: '关于我 /about', color: 'emerald' as const },
            ]).map((item, i) => {
              const Icon = item.icon;
              const c = ROUTER_COLORS[item.color];
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
                  className={`flex items-center gap-2 rounded-lg border ${c.borderCls} ${c.bgCls} px-3 py-2`}
                >
                  <Icon className={`h-4 w-4 ${c.textCls}`} />
                  <code className="font-mono text-xs text-slate-200">{item.text}</code>
                  <ArrowRight className="h-3 w-3 text-slate-500" />
                  <span className="text-xs text-slate-400">已配置</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot14: README 工业级规范 ---------- */
export const Shot14Readme: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="README 规范" sub="项目的'门面'" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <ReadmeGuide />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot15: 今日实操任务 ---------- */
export const Shot15HandsOn: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="今日实操五件事" sub="动手：环境 → 搭建 → 迁移 → 配置 → 文档" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <div className="mx-auto w-full max-w-xl space-y-2">
          {[
            {
              icon: Rocket,
              title: '装 Node.js、配镜像源',
              desc: '安装 Node.js 并切换国内镜像',
              tag: '环境',
              tagCls: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
              color: 'border-amber-400/30 bg-amber-500/10',
            },
            {
              icon: FileCode,
              title: '脚手架搭建 Vue3+Vite 项目',
              desc: '从零创建项目并成功启动',
              tag: '搭建',
              tagCls: 'text-cyan-300 bg-cyan-500/15 border-cyan-400/30',
              color: 'border-cyan-400/30 bg-cyan-500/10',
            },
            {
              icon: Component,
              title: 'AI 迁移静态作品集',
              desc: 'Day3 代码迁移为 Vue 组件',
              tag: '迁移',
              tagCls: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
              color: 'border-emerald-400/30 bg-emerald-500/10',
            },
            {
              icon: ArrowRight,
              title: '配基础路由、拆公共组件',
              desc: '至少两到三条路由，组件复用',
              tag: '配置',
              tagCls: 'text-sky-300 bg-sky-500/15 border-sky-400/30',
              color: 'border-sky-400/30 bg-sky-500/10',
            },
            {
              icon: BookOpen,
              title: '写 PRD 和 README',
              desc: 'PRD 模板 + README 规范',
              tag: '文档',
              tagCls: 'text-violet-300 bg-violet-500/15 border-violet-400/30',
              color: 'border-violet-400/30 bg-violet-500/10',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealProject key={item.title} index={1 + i}>
                <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${item.color}`}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950/40">
                    <Icon className="h-4 w-4 text-cyan-300" />
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
                </div>
              </RevealProject>
            );
          })}
        </div>
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot16: 作业与自测清单 ---------- */
export const Shot16Homework: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="作业与自测清单" sub="三个交付物 + 七项自测" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-bold text-slate-100">三个交付物</span>
            </div>
            <div className="space-y-2">
              {[
                { icon: FileText, text: 'PRD 需求文档 → day04 目录' },
                { icon: Component, text: 'Vue 作品集工程 → portfolio 独立仓库' },
                { icon: BookOpen, text: '规范 README → 本地一键启动' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2">
                    <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                    <span className="text-[11px] leading-relaxed text-slate-300">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-bold text-slate-100">自测清单</span>
            </div>
            <div className="space-y-1.5">
              {[
                'Node.js 已安装，npm 镜像源已切换',
                'Vue3+Vite 项目能用脚手架搭建并启动',
                'Day3 静态作品已迁移为 Vue 工程',
                '至少两到三条路由配置完成',
                '公共组件已拆分复用',
                'PRD 文档按模板写好',
                'portfolio 工程已推送至 Gitee',
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-1.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600 font-mono text-[9px] font-bold text-slate-500">
                    ?
                  </span>
                  <span className="text-[10px] leading-relaxed text-slate-300">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot17: 总结与 Day5 预告 ---------- */
const CHIP_WORDS = ['文档驱动开发', '产品思维', 'Vue3 + Vite', '工程化思维', 'README 规范'];

export const Shot17Summary: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="今日收获" size="xl" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
          {CHIP_WORDS.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.15, ease: EASE }}
              className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5"
            >
              <span className="text-xs font-bold text-emerald-300">{word}</span>
            </motion.div>
          ))}
        </div>
      </RevealProject>
      <RevealProject index={6} className="w-full">
        <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3.5">
          <span className="font-mono text-2xl font-black text-cyan-300">DAY 5</span>
          <div className="text-left">
            <p className="font-bold text-cyan-100">UI/UX 设计基础</p>
            <p className="text-[11px] text-cyan-200/70">「此刻」社区前端页面开发</p>
          </div>
        </div>
      </RevealProject>
      <RevealProject index={7}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-200 via-cyan-200 to-emerald-200 bg-clip-text text-center text-lg font-black text-transparent"
        >
          文档驱动 · 工程思维 — 让 AI 真正帮你写代码
        </motion.p>
      </RevealProject>
    </div>
  </BlueprintScene>
);