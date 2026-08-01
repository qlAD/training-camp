'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import {
  Shot01ColdOpen,
  Shot02Promises,
  Shot03Route,
  Shot04VibeCoding,
  Shot05Paradigm,
  Shot06Loop,
  Shot07Roles,
} from './scenes/act1-opener';
import {
  Shot08Chain,
  Shot09Badges,
  Shot10Prompt,
  Shot11AI,
  Shot12Skeleton,
  Shot13Makeup,
  Shot14Pipeline,
} from './scenes/act2-build';
import {
  Shot15Checklist,
  Shot16Quiz,
  Shot17Summary,
} from './scenes/act3-finish';

const SHOTS: React.FC[] = [
  Shot01ColdOpen,
  Shot02Promises,
  Shot03Route,
  Shot04VibeCoding,
  Shot05Paradigm,
  Shot06Loop,
  Shot07Roles,
  Shot08Chain,
  Shot09Badges,
  Shot10Prompt,
  Shot11AI,
  Shot12Skeleton,
  Shot13Makeup,
  Shot14Pipeline,
  Shot15Checklist,
  Shot16Quiz,
  Shot17Summary,
];

/** Day 1 · AE 动效版演示幻灯片（每天 = 一期独立视频，仅本日私有组件） */
export const day01Deck: DayDeckRenderer = {
  meta: {
    day: 1,
    stageName: 'Day 1 · Vibe Coding · 第一个网页',
    title: '从零到你的第一个网页',
    subtitle: 'AI 全栈暑期训练营 · Day 1（AE 动效版演示）',
    duration: '50 min',
    target: '零基础学员 · 无需编程经验',
    output: '一个 AI 生成的个人简介网页（HTML + CSS）',
    aiPractice: '结构化提示词五要素 + 对话式开发闭环',
    slides: [
      {
        id: 'd1-s01',
        title: '冷开场：零基础，也可以。',
        subtitle: '从一行 Hello World 开始',
        layout: 'cover',
        instructorNotes:
          '先别急着讲课程，放 5-8 秒代码打字画面让大家进入状态。停顿一下再抛出钩子：今天你将亲手做出人生第一个网页。语气要轻，像视频开场的旁白。',
        keyTakeaway: '零基础也可以做出第一个网页',
      },
      {
        id: 'd1-s02',
        title: '承诺快闪：欢迎来到 AI 全栈暑期训练营',
        subtitle: '14 天 · 双项目 · 全国产工具链 · 零基础友好',
        layout: 'cover',
        instructorNotes:
          '四个关键词快闪（1 秒一个），读到最后一个时顺势报出正式标题。营造"这就是我们"的仪式感，给足开营氛围。',
        keyTakeaway: '训练营四大承诺：14 天 / 双项目 / 全国产工具链 / 零基础友好',
      },
      {
        id: 'd1-s03',
        title: '今日路线：今天学什么？',
        subtitle: '认知 → 工具 → 动手 → 原理 → 打卡',
        layout: 'steps',
        instructorNotes:
          '逐站点亮今天的路线图，讲到哪站就口头点题。让学员对 50 分钟节奏有预期：先建立认知，再动手做出来。',
        keyTakeaway: '今日五站：认知、工具、动手、原理、打卡',
      },
      {
        id: 'd1-s04',
        title: 'Vibe Coding：AI 写代码，人做决策',
        subtitle: '本日最重要的一个概念',
        layout: 'concept',
        instructorNotes:
          '先让大字弹出"AI 写代码，人做决策"，再点亮人/AI 分屏：人负责决策与方向，AI 负责敲代码。强调：Vibe Coding 不是不写代码，而是人从"打字员"升级为"决策者"。',
        keyTakeaway: 'Vibe Coding = AI 写代码，人做决策',
      },
      {
        id: 'd1-s05',
        title: '从打字，到指挥',
        subtitle: '传统开发 vs Vibe Coding',
        layout: 'comparison',
        instructorNotes:
          '左卡先入（传统打字员），中间箭头，右卡后入（架构师）。落点一句话：程序员 ≠ 打字员，而是 AI 的架构师与评审。',
        keyTakeaway: '范式跃迁：从逐行敲码到对话式指挥',
      },
      {
        id: 'd1-s06',
        title: '想法 → 成果的循环',
        subtitle: '人机协作闭环',
        layout: 'steps',
        instructorNotes:
          '五个节点沿圆环依次点亮，最后"产出"回流到"想法"形成闭环，中心浮现 ∞。点题：开发不是一条直线，而是一个不断迭代的循环。',
        keyTakeaway: '协作闭环：想法 → Prompt → AI → 审核 → 产出 → 迭代',
      },
      {
        id: 'd1-s07',
        title: '你，是方向盘',
        subtitle: 'AI 协作中的四个角色',
        layout: 'concept',
        instructorNotes:
          '先亮中心"方向盘在你手里"，再依次点亮四张角色卡：产品经理、技术评审、沟通者、教练。让学员对号入座，意识到自己在 AI 协作中的主体地位。',
        keyTakeaway: '人是方向盘：产品经理 / 技术评审 / 沟通者 / 教练',
      },
      {
        id: 'd1-s08',
        title: '国产工具链：生成 — 托管 — 部署',
        subtitle: '全链路国产工具',
        layout: 'steps',
        instructorNotes:
          '三段链路逐段展开：生成（TRAE IDE/DeepSeek）→ 托管（Gitee）→ 部署（阿里云）。强调国产、免费、一站打通。',
        keyTakeaway: '工具链三段：生成 / 托管 / 部署，全链路国产',
      },
      {
        id: 'd1-s09',
        title: '今天先认识五位搭档',
        subtitle: 'TRAE IDE · DeepSeek · Gitee · 阿里云',
        layout: 'concept',
        instructorNotes:
          '三位徽章逐个弹入。今天只要求"认个脸熟"，后面每天都会深入使用。不展开细节，保持节奏。',
        keyTakeaway: '三位工具搭档：TRAE IDE / DeepSeek / Gitee',
      },
      {
        id: 'd1-s10',
        title: '把需求说清楚',
        subtitle: '结构化提示词五要素',
        layout: 'prompt_template',
        instructorNotes:
          '五要素卡依次揭示（角色/任务/栈/约束/输出），随后提示词正文打字机逐行打出。现场就带着学员用这五句写一条自己的提示词。',
        keyTakeaway: '提示词五要素：角色 / 任务 / 栈 / 约束 / 输出',
      },
      {
        id: 'd1-s11',
        title: '你描述，它干活',
        subtitle: '从提示词到页面，5 分钟',
        layout: 'split_code',
        instructorNotes:
          '左屏提示词 → 中间 AI 脉冲 → 右屏页面逐行渲染出来。让学员直观感受"描述即生成"，为动手环节做铺垫。',
        keyTakeaway: '描述即生成：一句需求换一个页面',
      },
      {
        id: 'd1-s12',
        title: 'HTML：网页的骨架',
        subtitle: 'html / head / body 三层结构',
        layout: 'split_code',
        instructorNotes:
          '骨架图逐节拼出（头骨→脊柱→肋骨），右侧代码行同步高亮。生活化比喻：HTML 是网页的骨架，先有骨头才有血肉。',
        keyTakeaway: 'HTML 三层骨架：html / head / body',
      },
      {
        id: 'd1-s13',
        title: 'CSS：网页的化妆师',
        subtitle: '背景渐变 · 居中 · 圆角 · 阴影',
        layout: 'split_code',
        instructorNotes:
          '同一张卡片四步"上妆"：打底（渐变背景）→ 定妆（居中）→ 塑形（圆角）→ 高光（霓虹阴影）。呼应生活化比喻：CSS 是化妆师。',
        keyTakeaway: 'CSS 四件套：渐变 / 居中 / 圆角 / 阴影',
      },
      {
        id: 'd1-s14',
        title: '从字节到像素',
        subtitle: '浏览器渲染六步',
        layout: 'steps',
        instructorNotes:
          '六段流光从左到右依次点亮：字节→字符→节点→DOM→渲染树→像素。把"浏览器怎么把代码变成画面"讲成一个流水线故事。',
        keyTakeaway: '渲染六步：字节 → 字符 → 节点 → DOM → 渲染树 → 像素',
      },
      {
        id: 'd1-s15',
        title: '今晚把它做出来',
        subtitle: '五步完成首日打卡',
        layout: 'steps',
        instructorNotes:
          '逐项打勾五步任务，最后亮出"首日打卡目标 100%"徽章。给明确动作：注册、写提示词、看懂骨架、加 CSS、晒作品。',
        keyTakeaway: '首日打卡五步，目标 100%',
      },
      {
        id: 'd1-s16',
        title: '三题验收',
        subtitle: '点一点，答对才算吸收',
        layout: 'exercise',
        instructorNotes:
          '交互弹题：点击选项即时反馈。答错的回到对应镜头复习一遍。这一镜用于确认学员真的吸收了，而不是"看过"。',
        keyTakeaway: '三题验收：认知 / 提示词 / 渲染',
      },
      {
        id: 'd1-s17',
        title: '总结预告：明天的互联网',
        subtitle: 'DAY 2 · DNS 与 HTTP',
        layout: 'summary',
        instructorNotes:
          '四张收获卡回顾 → DAY 2 预告卡从右侧推入 → 收尾 Slogan 逐词点亮："Create wonderful code, build a wonderful world." 情绪拉满收尾。',
        keyTakeaway: '今日四收获 + 明日预告：拆开互联网（DNS / HTTP）',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
