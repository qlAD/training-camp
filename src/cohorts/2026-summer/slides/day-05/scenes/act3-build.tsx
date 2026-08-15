'use client';

import React from 'react';
import { motion } from 'motion/react';
import { DesignCanvasScene } from '../components/scene/DesignCanvasScene';
import { RevealFrame } from '../components/kinetic/RevealFrame';
import { DesignTitle } from '../components/kinetic/DesignTitle';
import { DotGrid } from '../components/fx/DotGrid';
import { StudioGlow } from '../components/fx/StudioGlow';
import { MockData } from '../components/visual/MockData';
import { PageDevPoints } from '../components/visual/PageDevPoints';
import { CikeStructure } from '../components/visual/CikeStructure';
import {
  PenTool,
  Code2,
  FolderTree,
  FileText,
  CheckCircle2,
  Rocket,
  Image as ImageIcon,
  GitBranch,
  Layers,
  Database,
  Lightbulb,
  Server,
} from 'lucide-react';
import { EASE } from '../components/scene/theme';

/* ---------- Shot10: Mock 假数据 ---------- */
export const Shot10Mock: React.FC = () => (
  <DesignCanvasScene length={8}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="用 Mock 把页面撑起来" sub="让它在浏览器里活过来" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <MockData />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot11: 五页开发要点 ---------- */
export const Shot11DevPoints: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="五个页面各自的开发要点" sub="不追求精致，追求流程跑通" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <PageDevPoints />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot12: 目录结构 ---------- */
export const Shot12Structure: React.FC = () => (
  <DesignCanvasScene length={10}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="cike/frontend 目录结构" sub="各回各家，是工程化的基本功" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <CikeStructure />
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot13: 今日实操三段 ---------- */
export const Shot13HandsOn: React.FC = () => (
  <DesignCanvasScene length={5}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="今日实操三段" sub="原型 → 开发 → 规整" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <div className="mx-auto w-full max-w-xl space-y-2">
          {[
            {
              icon: PenTool,
              title: '用 Trae Work 画完整原型',
              desc: '五个页面 + 跳转箭头 + 边角状态，导出图片',
              tag: '原型',
              tagCls: 'text-violet-300 bg-violet-500/15 border-violet-400/30',
              color: 'border-violet-400/30 bg-violet-500/10',
            },
            {
              icon: Code2,
              title: '独立开发社区全部前端页面',
              desc: 'Vue3+Vite+路由+Mock，点来点去能跳通',
              tag: '开发',
              tagCls: 'text-pink-300 bg-pink-500/15 border-pink-400/30',
              color: 'border-pink-400/30 bg-pink-500/10',
            },
            {
              icon: FolderTree,
              title: '规整 cike/frontend 目录结构',
              desc: '页面/组件/Mock/路由各归各位，README 写清楚',
              tag: '规整',
              tagCls: 'text-cyan-300 bg-cyan-500/15 border-cyan-400/30',
              color: 'border-cyan-400/30 bg-cyan-500/10',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealFrame key={item.title} index={1 + i}>
                <div className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${item.color}`}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950/40">
                    <Icon className="h-4 w-4 text-violet-300" />
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
              </RevealFrame>
            );
          })}
        </div>
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot14: 作业与自测清单 ---------- */
export const Shot14Homework: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="作业与自测清单" sub="三个交付物 + 七项自测" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-violet-300" />
              <span className="text-sm font-bold text-slate-100">三个交付物</span>
            </div>
            <div className="space-y-2">
              {[
                { icon: ImageIcon, text: '社区原型设计图 → 归档 day05 文件夹' },
                { icon: GitBranch, text: 'cike/frontend → 独立 Gitee 仓库' },
                { icon: Rocket, text: '本地能启动 + 提交记录附运行截图' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2">
                    <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400" />
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
                '五个核心页面全部画进原型',
                '原型图已导出并归档到 day05 文件夹',
                'cike/frontend 本地能一键启动，五页面都能打开',
                '页面跳转逻辑跑通（登录、发布、查看详情）',
                '使用了 Mock 假数据，页面有内容渲染',
                '项目目录分层清晰，不混乱',
                '代码已推送至独立 Gitee 仓库，附运行截图',
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
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);

/* ---------- Shot15: 总结与 Day6 预告 ---------- */
const CHIP_WORDS = ['UI / UX 区分', 'Trae Work 原型', '五个页面', 'Mock 数据', '先想后做'];

export const Shot15Summary: React.FC = () => (
  <DesignCanvasScene length={7}>
    <DotGrid />
    <StudioGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealFrame index={0}>
        <DesignTitle text="今日收获" size="xl" />
      </RevealFrame>
      <RevealFrame index={1} className="w-full">
        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
          {CHIP_WORDS.map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.15, ease: EASE }}
              className="rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-1.5"
            >
              <span className="text-xs font-bold text-violet-300">{word}</span>
            </motion.div>
          ))}
        </div>
      </RevealFrame>
      <RevealFrame index={6} className="w-full">
        <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3.5">
          <span className="font-mono text-2xl font-black text-cyan-300">DAY 6</span>
          <div className="text-left">
            <p className="font-bold text-cyan-100">后端入门 + MySQL 数据库</p>
            <p className="text-[11px] text-cyan-200/70">IDEA · Maven · SpringBoot · 数据库表设计</p>
          </div>
        </div>
      </RevealFrame>
      <RevealFrame index={7}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 bg-clip-text text-center text-lg font-black text-transparent"
        >
          动手之前先想清楚 — 原型是想法的试纸
        </motion.p>
      </RevealFrame>
    </div>
  </DesignCanvasScene>
);
