'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TimelineScene } from '../components/scene/TimelineScene';
import { RevealLayer } from '../components/kinetic/RevealLayer';
import { GlowTitle } from '../components/kinetic/GlowTitle';
import { PopCards } from '../components/kinetic/PopCards';
import { NetGrid } from '../components/fx/NetGrid';
import { DataRipple } from '../components/fx/DataRipple';
import { VersionClosedLoop } from '../components/visual/VersionClosedLoop';
import { Checkoff } from '../components/visual/Checkoff';
import { EASE, COLORS } from '../components/scene/theme';

/* ---------- 镜头 14：今日实操清单 ---------- */
const STEP_CARDS = [
  { icon: '⌨️', title: '终端命令反复练', desc: 'ls / cd / mkdir / touch 滚瓜烂熟' },
  { icon: '🌿', title: 'Git Gitee 完整推拉', desc: 'init → add → commit → push → pull' },
  { icon: '📝', title: '独立写 Markdown 文档', desc: '标题 / 列表 / 代码块 / 引用 / 链接' },
  { icon: '🔥', title: 'TRAE IDE 打开项目', desc: '工程目录 · 文件树 · 终端集成' },
];

export const Shot14HandsOn: React.FC = () => (
  <TimelineScene length={5}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="今天的实操" sub="四件事，一件件过手" />
      </RevealLayer>
      <div className="grid w-full max-w-3xl grid-cols-2 gap-3">
        {STEP_CARDS.map((card, i) => (
          <RevealLayer key={card.title} index={i + 1}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
              style={{
                boxShadow: `0 0 16px ${COLORS.sky}22`,
                borderColor: `${COLORS.sky}33`,
              }}
            >
              <span className="text-2xl">{card.icon}</span>
              <div>
                <p className="font-bold text-slate-100">{card.title}</p>
                <p className="mt-0.5 text-xs text-slate-400">{card.desc}</p>
              </div>
            </motion.div>
          </RevealLayer>
        ))}
      </div>
      <RevealLayer index={5}>
        <p className="bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-center text-base font-black text-transparent">
          让每一件工具都听你使唤
        </p>
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 15：代码版本托管闭环 ---------- */
export const Shot15VersionFlow: React.FC = () => (
  <TimelineScene length={7}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="代码版本托管闭环" sub="先 pull 后 push，养成肌肉记忆" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <VersionClosedLoop at={1} />
      </RevealLayer>
      <RevealLayer index={7}>
        <p className="bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-center text-base font-black text-transparent">
          先 pull 后推是好习惯，养成肌肉记忆
        </p>
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 16：作业与自测清单 ---------- */
const HOMEWORK_ITEMS = [
  '写 Markdown 学习笔记存到 homework/day02（含标题/列表/加粗/引用）',
  '对 homework 文件夹 git 初始化并关联 Gitee 远程',
  '把 Day1+Day2 所有作业文件 commit 并 push 到 Gitee',
];

const SELF_CHECK_ITEMS = [
  'Markdown 笔记至少用到标题/列表/加粗/引用四种语法',
  '笔记已保存到 homework/day02 目录',
  'homework 文件夹已完成 git 初始化',
  '已配置 Git 全局用户名和邮箱',
  'Gitee 远程仓库已与本地关联（令牌或 SSH 任选其一）',
  'Day1、Day2 全部作业文件已 commit 并成功 push 到 Gitee',
  '在 Gitee 网页端能看到自己推送的文件',
];

export const Shot16Homework: React.FC = () => (
  <TimelineScene length={14}>
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="今日作业" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <Checkoff at={1} items={HOMEWORK_ITEMS} />
      </RevealLayer>
      <RevealLayer index={4}>
        <p className="text-sm font-bold text-teal-300">7 项自测清单</p>
      </RevealLayer>
      <RevealLayer index={5} className="w-full">
        <Checkoff at={5} items={SELF_CHECK_ITEMS} />
      </RevealLayer>
      <RevealLayer index={13}>
        <p className="bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-center text-base font-black text-transparent">
          7 项自测清单确保完整
        </p>
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 17：总结预告 ---------- */
const TAKEAWAYS = ['计算机底层认知', '工具链配齐', '第一个云端仓库'];

export const Shot17Summary: React.FC = () => (
  <TimelineScene length={5}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="Day 2 总结" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <PopCards at={1} words={TAKEAWAYS} />
      </RevealLayer>
      <RevealLayer index={3} className="w-full">
        <div className="mx-auto flex w-full max-w-md items-center gap-4 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-5 py-3.5 shadow-[0_0_24px_rgba(251,191,36,0.15)]">
          <span className="font-mono text-2xl font-black text-amber-300">DAY 3</span>
          <div className="text-left">
            <p className="font-bold text-amber-100">前端三剑客 + Vibe Coding 标准化</p>
            <p className="text-[11px] text-amber-200/70">HTML / CSS / JavaScript 极速入门</p>
          </div>
        </div>
      </RevealLayer>
      <RevealLayer index={5}>
        <p className="bg-gradient-to-r from-sky-200 via-teal-200 to-lime-200 bg-clip-text text-center text-base font-black text-transparent">
          三收获 + 明日预告
        </p>
      </RevealLayer>
    </div>
  </TimelineScene>
);
