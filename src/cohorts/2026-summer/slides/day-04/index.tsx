'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import { Shot01Open, Shot02ProductThinking, Shot03PRD, Shot04WorkshopFactory } from './scenes/act1-cognition';
import { Shot05NodeSetup, Shot06Scaffold, Shot07Structure, Shot08Router, Shot09PackageJSON, Shot10Config } from './scenes/act2-project';
import { Shot11Migration, Shot12Components, Shot13RouterConfig, Shot14Readme, Shot15HandsOn, Shot16Homework, Shot17Summary } from './scenes/act3-migration';

const SHOTS: React.FC[] = [
  Shot01Open,
  Shot02ProductThinking,
  Shot03PRD,
  Shot04WorkshopFactory,
  Shot05NodeSetup,
  Shot06Scaffold,
  Shot07Structure,
  Shot08Router,
  Shot09PackageJSON,
  Shot10Config,
  Shot11Migration,
  Shot12Components,
  Shot13RouterConfig,
  Shot14Readme,
  Shot15HandsOn,
  Shot16Homework,
  Shot17Summary,
];

/* Day 4 · 现代前端工程化 · Vue3+Vite 项目搭建 */
export const day04Deck: DayDeckRenderer = {
  meta: {
    day: 4,
    stageName: 'Day 4 · 现代前端工程化 · Vue3 + Vite',
    title: '从能跑的页面到能长大的工程',
    subtitle: 'AI 全栈暑期训练营 · Day 4',
    duration: '60 min',
    target: '零基础学员 · 已完成 Day 1-3',
    output: '掌握 Vue3+Vite 工程化流程 + 文档驱动开发思维',
    aiPractice: '用提示词三要素让 AI 帮你做静态→Vue 迁移',
    slides: [
      {
        id: 'd4-s01',
        title: '冷开场：静态页面的墙',
        subtitle: '帐篷 vs 小楼的比喻',
        layout: 'concept',
        instructorNotes:
          '对比静态页面（帐篷）和 Vue3 工程（小楼）的差异。静态页面搭起来快但经不起扩展，工程化项目有地基、有水电、能长大。引出今天要"拆帐篷盖小楼"。',
        keyTakeaway: '静态页面的局限 → 工程化的必要性',
      },
      {
        id: 'd4-s02',
        title: '产品思维：先想清楚再动手',
        subtitle: '产品思维三问',
        layout: 'concept',
        instructorNotes:
          '产品思维核心：先想清楚"为谁解决什么问题"。展示三问：给谁用？解决什么痛点？没有它会怎样？强调产品思维不是 PM 专属，是工程师必备。',
        keyTakeaway: '产品思维三问：给谁用 / 痛点 / 必要性',
      },
      {
        id: 'd4-s03',
        title: 'PRD 核心构成',
        subtitle: '把需求写成一份"合同"',
        layout: 'concept',
        instructorNotes:
          '展示 PRD 五大核心：项目背景与目标 → 目标用户 → 功能清单与优先级 → 页面与交互说明 → 非功能需求。强调文档是协作的合同。',
        keyTakeaway: 'PRD 五大核心构成',
      },
      {
        id: 'd4-s04',
        title: '工程化价值对比',
        subtitle: '手工作坊 vs 现代工厂',
        layout: 'concept',
        instructorNotes:
          '左侧展示手工作坊（静态页面）的痛点：复制粘贴、改导航逐个文件、第三方库难引入。右侧展示现代工厂（Vue3 工程）的优势：标准化结构、组件复用、包管理、配置统一。',
        keyTakeaway: '工程化 vs 手工开发的差异',
      },
      {
        id: 'd4-s05',
        title: 'Node.js 安装与 npm 配置',
        subtitle: '装好引擎再上路',
        layout: 'steps',
        instructorNotes:
          '三步流程：1. 安装 Node.js（双击 msi）→ 2. 配置国内镜像源（npmmirror）→ 3. 验证安装（node -v + npm config get registry）。',
        keyTakeaway: 'Node.js 安装 + 镜像源配置',
      },
      {
        id: 'd4-s06',
        title: 'Vue3 + Vite 脚手架',
        subtitle: '一秒搭好项目骨架',
        layout: 'steps',
        instructorNotes:
          '展示 npm create vite 的四步流程：创建项目 → 配置选项（选最简方案）→ 进入目录 → 启动开发。强调启动快、热更新的体验。',
        keyTakeaway: 'Vite 脚手架四步流程',
      },
      {
        id: 'd4-s07',
        title: '项目结构解析',
        subtitle: '脚手架生成的目录长什么样',
        layout: 'concept',
        instructorNotes:
          '展示标准 Vue3 项目目录结构：根目录（my-app）→ src（源代码）→ components（公共组件）/ views（页面）/ router（路由）。强调文件组织的规范性。',
        keyTakeaway: 'Vue3 项目目录结构',
      },
      {
        id: 'd4-s08',
        title: '路由系统',
        subtitle: 'URL 和页面的对应关系',
        layout: 'concept',
        instructorNotes:
          '展示路由配置表：/ → 首页，/works → 作品列表，/about → 关于我。对比 URL 地址栏变化和页面内容切换，说明路由让 SPA 有了真正的页面导航。',
        keyTakeaway: '路由系统让 SPA 有页面导航',
      },
      {
        id: 'd4-s09',
        title: '包管理与 package.json',
        subtitle: '项目的"采购清单"',
        layout: 'concept',
        instructorNotes:
          '展示 package.json 结构：scripts（dev/build）、dependencies（vue、vue-router）。说明 npm install 安装依赖、npm install <pkg> 加新库。',
        keyTakeaway: 'package.json 是依赖清单',
      },
      {
        id: 'd4-s10',
        title: '配置文件',
        subtitle: '工程化不止一套脚手架',
        layout: 'concept',
        instructorNotes:
          '展示三类配置文件：vite.config.js（构建配置）→ .eslintrc.cjs（代码规范）→ .prettierrc（格式化）。说明工程化的"统一管理"理念。',
        keyTakeaway: '配置文件统一管理构建流程',
      },
      {
        id: 'd4-s11',
        title: 'AI 迁移：静态 → Vue',
        subtitle: '让 AI 帮你搬家',
        layout: 'steps',
        instructorNotes:
          '迁移五步法：1. 提供 Day3 代码 → 2. 明确迁移目标 → 3. 说明约束 → 4. AI 生成方案 → 5. 合并调试。强调提示词三要素的重要性。',
        keyTakeaway: 'AI 迁移五步法',
      },
      {
        id: 'd4-s12',
        title: '组件化拆解',
        subtitle: '像搭积木一样拼出应用',
        layout: 'concept',
        instructorNotes:
          '展示从"三个独立 HTML"到"组件化工程"的变化：公共组件（NavBar、Footer）+ 页面视图（Home、Works、About）+ 根组件（App）。强调"改一处、全站生效"的好处。',
        keyTakeaway: '组件化：复用、按需加载、易扩展',
      },
      {
        id: 'd4-s13',
        title: '配基础路由',
        subtitle: '至少两到三条，页面切换正常',
        layout: 'concept',
        instructorNotes:
          '展示实际的 router/index.js 代码，配三条路由：/ 首页、/works 作品列表、/about 关于我。强调路由是 SPA 的核心机制。',
        keyTakeaway: '路由配置实战',
      },
      {
        id: 'd4-s14',
        title: 'README 工业级规范',
        subtitle: '项目的"门面"',
        layout: 'concept',
        instructorNotes:
          '展示 README 五大构成：项目简介 → 技术栈 → 启动步骤 → 目录结构 → 部署说明。强调"别人照 README 能一键启动才算合格"。',
        keyTakeaway: 'README 工业级规范',
      },
      {
        id: 'd4-s15',
        title: '今日实操五件事',
        subtitle: '环境 → 搭建 → 迁移 → 配置 → 文档',
        layout: 'exercise',
        instructorNotes:
          '五件实操任务：1. 装 Node.js + 镜像源 → 2. 脚手架搭建 Vue3+Vite → 3. AI 迁移静态作品集 → 4. 配路由、拆组件 → 5. 写 PRD + README。',
        keyTakeaway: '今日实操五件事',
      },
      {
        id: 'd4-s16',
        title: '作业与自测清单',
        subtitle: '三个交付物 + 七项自测',
        layout: 'steps',
        instructorNotes:
          '三个交付物：1. PRD 文档 → day04 目录 → 2. Vue 作品集工程 → portfolio 独立仓库 → 3. README 规范。七项自测清单。',
        keyTakeaway: '三个交付物 + 七项自测',
      },
      {
        id: 'd4-s17',
        title: '总结与 Day5 预告',
        subtitle: '文档驱动 · 工程思维',
        layout: 'summary',
        instructorNotes:
          '今日五大收获快闪 → Day 5 预告（UI/UX 设计 + 「此刻」社区前端）→ 收尾 Slogan："文档驱动 · 工程思维 —— 让 AI 真正帮你写代码"。',
        keyTakeaway: '今日五收获 + 明日预告',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};