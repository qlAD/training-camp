'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import { Shot01Open, Shot02UIUX, Shot03Principles, Shot04TraeWork } from './scenes/act1-cognition';
import { Shot05ThreeStages, Shot06Feature, Shot07FivePages, Shot08PageFlow, Shot09EdgeStates } from './scenes/act2-design';
import { Shot10Mock, Shot11DevPoints, Shot12Structure, Shot13HandsOn, Shot14Homework, Shot15Summary } from './scenes/act3-build';

const SHOTS: React.FC[] = [
  Shot01Open,
  Shot02UIUX,
  Shot03Principles,
  Shot04TraeWork,
  Shot05ThreeStages,
  Shot06Feature,
  Shot07FivePages,
  Shot08PageFlow,
  Shot09EdgeStates,
  Shot10Mock,
  Shot11DevPoints,
  Shot12Structure,
  Shot13HandsOn,
  Shot14Homework,
  Shot15Summary,
];

/* Day 5 · UI/UX 设计 · 原型与页面 · 「此刻」社区前端 */
export const day05Deck: DayDeckRenderer = {
  meta: {
    day: 5,
    stageName: 'Day 5 · UI/UX 设计 · 原型与页面',
    title: '给「此刻」先画张脸：从设计稿到五个页面',
    subtitle: 'AI 全栈暑期训练营 · Day 5',
    duration: '60 min',
    target: '零基础学员 · 已完成 Day 1-4',
    output: '掌握 UI/UX 基础 + 原型设计 + Mock 数据驱动五页面',
    aiPractice: '用 Mock 数据让前端先跑起来，等后端接口再替换',
    slides: [
      {
        id: 'd5-s01',
        title: '冷开场：先别急着敲',
        subtitle: '先想后做 vs 先写后想',
        layout: 'concept',
        instructorNotes:
          'Day4 回顾（Vue 工程已就绪）→ 今天换频道「此刻」社区开工。先问"首页长什么样/发布页点哪个按钮"。新手栽跟头因为上来就写，先设计再开发是第一道分水岭。',
        keyTakeaway: '动手之前先想清楚 —— 先画出来再写出来',
      },
      {
        id: 'd5-s02',
        title: 'UI 与 UX',
        subtitle: '两个容易混的词，说的是两件事',
        layout: 'concept',
        instructorNotes:
          'UI=界面设计（颜色/字号/按钮/图标/留白=皮肤）；UX=体验设计（反馈/提示位置/用起来顺不顺手=感受）。类比：UI 是餐厅装修摆盘，UX 是进门到结账整段体验。好产品皮骨都讲究。',
        keyTakeaway: 'UI 看起来怎样 / UX 用起来怎样',
      },
      {
        id: 'd5-s03',
        title: '网页设计五原则',
        subtitle: '一致 · 反馈 · 层次 · 留白 · 可达',
        layout: 'concept',
        instructorNotes:
          '一致（同类按钮长得一样）；反馈（点了得有反应）；层次（重要内容大显眼）；留白（别塞满，呼吸感）；可达（照顾不同屏幕）。画完原型自查一遍。',
        keyTakeaway: '网页设计五原则 + 自查清单',
      },
      {
        id: 'd5-s04',
        title: '认识 Trae Work',
        subtitle: '装好一支电子画笔',
        layout: 'concept',
        instructorNotes:
          'Trae Work 安装（06-工具资源/TraeWork_CN-Setup-x64.exe），Design 模式拖拽矩形/文字/图片占位块。别和 Trae Code 搞混（画图 vs 敲码）。避坑：原型阶段不选美，先把"哪块放什么"想清楚。',
        keyTakeaway: 'Trae Work（画图）vs Trae Code（敲码）',
      },
      {
        id: 'd5-s05',
        title: '草图、视觉稿、代码',
        subtitle: '三样东西，三个阶段',
        layout: 'steps',
        instructorNotes:
          '产品原型（黑白粗糙，验证流程）→ UI 视觉稿（高保真，定调子）→ 可运行代码（真正产品）。三者场景泾渭分明。今天重点产出原型+代码两端，视觉稿环节简化。',
        keyTakeaway: '原型想清楚 / 视觉稿定标准 / 代码能跑',
      },
      {
        id: 'd5-s06',
        title: '「此刻」功能拆解',
        subtitle: '核心两件事：发内容 · 看内容聊内容',
        layout: 'concept',
        instructorNotes:
          '图文社区核心两件事：让人发内容、让人看内容聊内容。拆出：注册登录 / 发布带图笔记 / 首页刷笔记 / 详情点赞评论收藏 / 个人中心。',
        keyTakeaway: '顺着两条主线拆出五个功能',
      },
      {
        id: 'd5-s07',
        title: '五个页面总览',
        subtitle: '首页 · 发布 · 详情 · 个人中心 · 登录注册',
        layout: 'concept',
        instructorNotes:
          '首页（瀑布流卡片=首图+标题+作者+互动数据）；发布页（九宫格多图+标题正文+发布）；详情页（大图+正文+评论+互动）；个人中心（头像+三 Tab）；登录注册（账号密码+切换）。',
        keyTakeaway: '五个页面 + 各自职责',
      },
      {
        id: 'd5-s08',
        title: '页面跳转逻辑',
        subtitle: '从哪来、到哪去',
        layout: 'concept',
        instructorNotes:
          '未登录进首页能看，点发布/点赞弹去登录；登录后回原页面；发布成功跳回首页新内容置顶。用线连出来比写文档清楚十倍。',
        keyTakeaway: '页面跳转流程图',
      },
      {
        id: 'd5-s09',
        title: '边角状态',
        subtitle: '别只画正常流程',
        layout: 'concept',
        instructorNotes:
          '多想"没登录怎样""上传失败显示什么""列表没数据展示什么"。补上边角状态（空列表/未登录/失败/加载中）后面少踩一半坑。',
        keyTakeaway: '四种边角状态要补上',
      },
      {
        id: 'd5-s10',
        title: 'Mock 假数据',
        subtitle: '让页面活过来',
        layout: 'concept',
        instructorNotes:
          '后端 Day6 才写、Day8 联调，今天前端用 Mock 假数据（title/content/images/author/likes）。换接口时只改一处。避坑：Mock 别写死在组件里，单独文件=单一数据源。',
        keyTakeaway: 'Mock 数据 + 单一数据源',
      },
      {
        id: 'd5-s11',
        title: '五页开发要点',
        subtitle: '各自的开发重点',
        layout: 'concept',
        instructorNotes:
          '首页（瀑布流+分页加载）；发布页（九宫格选图+表单禁用启用）；详情页（多图按比例+评论区+互动状态）；个人中心（信息聚合+三 Tab）；登录注册（两表单切换+基础校验）。',
        keyTakeaway: '五页各自开发要点',
      },
      {
        id: 'd5-s12',
        title: '目录结构',
        subtitle: 'cike/frontend 分层',
        layout: 'concept',
        instructorNotes:
          '社区前端放 cike/frontend 下，分层：views/components/mock/router/styles/utils 各占一处。各回各家是工程化基本功，别堆一个文件夹。',
        keyTakeaway: 'cike/frontend 六层目录结构',
      },
      {
        id: 'd5-s13',
        title: '今日实操三段',
        subtitle: '原型 → 开发 → 规整',
        layout: 'exercise',
        instructorNotes:
          '三段任务：1. Trae Work 画完整原型（五页+跳转+边角状态，导出图片）→ 2. 独立开发五前端页面（Vue3+Vite+路由+Mock，流程跑通）→ 3. 规整目录+README。',
        keyTakeaway: '今日实操三段',
      },
      {
        id: 'd5-s14',
        title: '作业与自测清单',
        subtitle: '三个交付物 + 七项自测',
        layout: 'steps',
        instructorNotes:
          '三个交付物：原型图归档 day05 / cike/frontend 独立 Gitee 仓库 / 本地启动+运行截图。七项自测清单（五页面全画进原型/已导出归档/本地启动/跳转跑通/Mock 渲染/目录分层/推送 Gitee）。',
        keyTakeaway: '三个交付物 + 七项自测',
      },
      {
        id: 'd5-s15',
        title: '总结与 Day6 预告',
        subtitle: '先想后做 · 原型试纸',
        layout: 'summary',
        instructorNotes:
          '今日五收获快闪（UI/UX 区分/Trae Work 原型/五个页面/Mock 数据/先想后做）→ Day6 预告（后端入门+MySQL 数据库方案设计 / IDEA+Maven+SpringBoot+数据库表）→ 收尾 Slogan"动手之前先想清楚"。',
        keyTakeaway: '今日五收获 + 明日预告',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
