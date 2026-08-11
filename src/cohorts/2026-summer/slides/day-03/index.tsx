'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import { Shot01Open, Shot02CodingSteps, Shot03Step1, Shot04Step2, Shot05PromptElements, Shot06Step4, Shot06bVerifyArchive } from './scenes/act1-structure';
import { Shot07Plugins, Shot08APISetup, Shot09PlanSpec, Shot10HTML, Shot11CSS, Shot12JS, Shot13Trio } from './scenes/act2-style-script';
import { Shot14FileSplit, Shot15HandsOn, Shot16Homework, Shot17Summary } from './scenes/act3-ship';

const SHOTS: React.FC[] = [
  Shot01Open,
  Shot02CodingSteps,
  Shot03Step1,
  Shot04Step2,
  Shot05PromptElements,
  Shot06Step4,
  Shot06bVerifyArchive,
  Shot07Plugins,
  Shot08APISetup,
  Shot09PlanSpec,
  Shot10HTML,
  Shot11CSS,
  Shot12JS,
  Shot13Trio,
  Shot14FileSplit,
  Shot15HandsOn,
  Shot16Homework,
  Shot17Summary,
];

/* Day 3 · Vibe Coding 标准化流程 · 从碰运气到流程化 */
export const day03Deck: DayDeckRenderer = {
  meta: {
    day: 3,
    stageName: 'Day 3 · Vibe Coding 标准化 · AI 编程五步流程',
    title: 'Vibe Coding 标准化',
    subtitle: 'AI 全栈暑期训练营 · Day 3',
    duration: '60 min',
    target: '零基础学员 · 已完成 Day 1-2',
    output: '掌握 Vibe Coding 五步流程 + 三件套协作 + 独立上线',
    aiPractice: '用提示词四要素让 AI 写代码 · 审查 AI 代码并调整',
    slides: [
      {
        id: 'd3-s01',
        title: '冷开场：从碰运气到标准化',
        subtitle: 'Day 1 代码的问题：想到啥写啥',
        layout: 'split_code',
        instructorNotes:
          '左代码窗（Day 1 单文件糊出来的代码）+ 右浏览器预览（问题展示）。抛出讲义三个痛点：代码全挤一个文件/AI给啥用啥/没看懂代码。引出今天要把"碰运气式聊天"升级为"有章法的标准流程"。',
        keyTakeaway: '痛点引入：Day 1 主页的三个不舒服 → 今天升级为标准化流程',
      },
      {
        id: 'd3-s02',
        title: 'Vibe Coding 五步流程',
        subtitle: '想清楚 · 拆明白 · 写清楚 · 审仔细 · 验证归档',
        layout: 'cover',
        instructorNotes:
          '五步卡片逐张弹入：理清需求 / 拆解任务 / 写提示词 / 审查调整 / 迭代发布。建立流程框架。',
        keyTakeaway: 'Vibe Coding 五步流程总览',
      },
      {
        id: 'd3-s03',
        title: 'Step 1：理清需求',
        subtitle: '想清楚，才能写清楚',
        layout: 'split_code',
        instructorNotes:
          '左代码窗展示"需求清单"（不是模糊的"帮我写个页面"），右侧四卡片点亮：做什么 / 给谁看 / 有什么 / 啥风格。',
        keyTakeaway: '需求四问：做什么 / 给谁看 / 有什么 / 啥风格',
      },
      {
        id: 'd3-s04',
        title: 'Step 2：拆解任务',
        subtitle: '大任务拆成小步骤',
        layout: 'steps',
        instructorNotes:
          '五步任务清单逐行点亮：搭骨架 → 上妆容 → 加心跳 → 拆文件 → 发上线。每步都有明确交付物。',
        keyTakeaway: '任务拆解：骨架 → 样式 → 交互 → 拆文件 → 发布',
      },
      {
        id: 'd3-s05',
        title: 'Step 3：提示词四要素',
        subtitle: '角色 · 目标 · 约束 · 示例',
        layout: 'concept',
        instructorNotes:
          '四要素卡片逐张弹入：角色 / 目标 / 约束 / 示例。底部总结条显示四要素齐了才能让 AI 写出好代码。',
        keyTakeaway: '提示词四要素：角色 / 目标 / 约束 / 示例',
      },
      {
        id: 'd3-s06',
        title: 'Step 4：审查与调整',
        subtitle: 'AI 是副驾驶，你才是主驾驶',
        layout: 'split_code',
        instructorNotes:
          '左代码窗展示自查清单（5 条），右侧三张审查要点卡：打开看看 / 微调调整 / 注意陷阱。',
        keyTakeaway: '审查三要点：跑起来 / 微调 / 防陷阱',
      },
      {
        id: 'd3-s06b',
        title: 'Step 5 · 验证与归档',
        subtitle: '跑不通的代码不算交付',
        layout: 'steps',
        instructorNotes: '第五步验证与归档：浏览器真跑一遍→确认无问题→存档→提交Git。强调"跑不通的代码不算交付"，与讲义五步法收尾对齐。',
        keyTakeaway: '验证与归档：跑通→存档→提交 Git，跑不通不算交付',
      },
      {
        id: 'd3-s07',
        title: 'TRAE IDE 插件管理',
        subtitle: '工欲善其事，必先利其器',
        layout: 'concept',
        instructorNotes:
          '四个插件（TRAE AI / Prettier / ESLint / GitLens）逐行点亮，状态徽章显示已安装/推荐安装。',
        keyTakeaway: '必备插件：TRAE AI + Prettier + ESLint',
      },
      {
        id: 'd3-s08',
        title: 'DeepSeek API 接入',
        subtitle: '三步打通 AI 编程通道',
        layout: 'steps',
        instructorNotes:
          '三步卡片：获取 API Key → 配置到 TRAE → 选择模型。底部绿色状态卡显示连接成功。',
        keyTakeaway: 'API 接入三步：Key → 配置 → 选模型',
      },
      {
        id: 'd3-s09',
        title: 'Plan vs Spec 模式',
        subtitle: '两种节奏，各有所长',
        layout: 'concept',
        instructorNotes:
          '左右对比：Plan（先出图纸，梳理思路）vs Spec（按规格施工，精确生成）。底部"怎么选"总结：思路不清用 Plan，规格明确用 Spec。',
        keyTakeaway: '思路不清用 Plan，规格明确用 Spec',
      },
      {
        id: 'd3-s10',
        title: 'HTML 骨架',
        subtitle: '结构是页面的地基',
        layout: 'concept',
        instructorNotes:
          'HtmlSkeleton 结构树逐节点点亮（5 秒）→ Trinity 三张卡弹入（第 6 秒）。结构 + 三位一体结合。',
        keyTakeaway: 'HTML 结构 + 三位一体概念',
      },
      {
        id: 'd3-s11',
        title: 'CSS 皮肤',
        subtitle: '选择器 + 属性，定制你的风格',
        layout: 'concept',
        instructorNotes:
          'SelectorCards 三张代码卡：标签选择器 / 类选择器 / ID 选择器。总结口诀。',
        keyTakeaway: '选择器三兄弟：标签 / 类 / ID',
      },
      {
        id: 'd3-s12',
        title: 'JS 交互',
        subtitle: '一次点击，页面就活了',
        layout: 'exercise',
        instructorNotes:
          'EventDemo 真实可点：点击按钮标题换字、背景换色。现场让学员试操作。',
        keyTakeaway: 'JS 交互：点击 → 响应',
      },
      {
        id: 'd3-s13',
        title: '三剑客协作',
        subtitle: 'HTML 结构 · CSS 样式 · JS 行为',
        layout: 'concept',
        instructorNotes:
          'Trinity 三张卡逐张弹入 → ChipPop 四条快闪：结构归 HTML / 样式归 CSS / 行为归 JS / 分工协作缺一不可。',
        keyTakeaway: '三件套分工协作',
      },
      {
        id: 'd3-s14',
        title: '单文件拆多文件',
        subtitle: 'all-in-one → 三件套分离',
        layout: 'concept',
        instructorNotes:
          'FileSplitDemo：左侧 all-in-one.html → 箭头 → 右侧三个目标文件（index.html / style.css / script.js）依次出现。',
        keyTakeaway: '文件拆分：HTML / CSS / JS 三件套',
      },
      {
        id: 'd3-s15',
        title: '今日实操三件事',
        subtitle: '接 API · 完善作品集 · 拆分重构',
        layout: 'exercise',
        instructorNotes:
          '三件事依次展示：1.接入DeepSeek API（配置Key+连通测试）；2.基于Vibe Coding流程完善个人静态作品集（Plan模式聊结构+Spec模式生成区块）；3.完成单文件到多文件拆分重构（拆成html/css/js三件套并跑通）。与讲义"今天课堂三件事"完全对齐。',
        keyTakeaway: '今日实操三件事：接 API · 完善作品集 · 拆分重构',
      },
      {
        id: 'd3-s16',
        title: '作业与自测清单',
        subtitle: '3 项作业 + 7 项自测',
        layout: 'steps',
        instructorNotes:
          '与讲义完全对齐：3项必做作业（归档day03/提交Gitee附截图/双击能打开）+ 7项自测清单（含API接入、页面结构、基础交互、拆分多文件、拆分后正常、归档提交附截图、双击能打开）。逐条展示，学员课后完成。',
        keyTakeaway: '3 项作业 + 7 项自测',
      },
      {
        id: 'd3-s17',
        title: '总结预告',
        subtitle: '标准化 · 流程化 · 规模化',
        layout: 'summary',
        instructorNotes:
          '五项收获快闪 → DAY 4 预告卡（Vue 3 + Vite 作品集）→ 收尾 Slogan："标准化 · 流程化 · 规模化 — 让 AI 真正帮你写代码"',
        keyTakeaway: '今日五收获 + 明日预告',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};