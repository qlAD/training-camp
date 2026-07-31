'use client';

import React from 'react';
import { FileText, Monitor, Layers, Download } from 'lucide-react';
import { DayDeckRenderer } from '../../../../types';
import {
  CoverSlide,
  AgendaSlide,
  ConceptSlide,
  ComparisonSlide,
  CodeBoxSlide,
  PromptSlide,
  ExerciseSlide,
  SummarySlide,
  QuizSlide,
  AnimationSlide,
  EffectSlide,
  DiagramSlide,
} from './shared/layouts';
import { RepoFacadeShowcase } from './shared/effects';
import { RecordFlowAnimation, GitHistoryAnimation } from './shared/animations';
import { MindMapDiagram } from './shared/diagrams';

// #1 封面：演示准备与交付物打磨
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第八阶段：完结撒花"
    badgeText="Day 13 · 课程讲义"
    title="演示准备 · README 规范 · 录屏技巧"
    subtitle="打磨交付物：精美 README + 2 分钟录屏 + Gitee 门面"
    bullets={[
      '项目正式上线只是起点，交付物决定技术履历成色',
      'README / 录屏 / 仓库门面三件套，打造硬核作品集',
      '90 分钟完成演示准备与最终提交物打包',
    ]}
  />
);

// #2 议程：Day 13 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 13 学习路线图"
    subtitle="演示 → README → 录屏 → 仓库 → 交付，5 个目标串成一条线"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '演示准备', desc: '理解项目演示的价值与好演示的标准' },
      { title: 'README 规范', desc: '掌握技术 README 五要素并用 AI 生成' },
      { title: '录屏技巧', desc: '学会 2 分钟演示视频的脚本与录制流程' },
      { title: '仓库美化', desc: '美化 Gitee 门面：README 渲染 + 头像 + 标签' },
      { title: '交付打包', desc: '整理文档结构与 LICENSE，准备最终提交物' },
    ]}
  />
);

// #3 概念：项目演示的重要性
const Slide03: React.FC = () => (
  <ConceptSlide
    title="项目演示的重要性"
    subtitle="为什么交付物打磨和写代码一样重要"
    badgeText="核心概念"
    bullets={[
      '说服力：可运行的演示比 PPT 更能让评委 / HR 信服',
      '专业度：精美 README 与录屏体现工程素养与交付意识',
      '可传播：一份录屏 + 一份 README，作品自带传播力',
      '评奖加分：完整交付物是评奖与简历加分的硬指标',
    ]}
    keyTakeaway="代码写得好是基础，演示与文档才是作品被看见的关键。"
  />
);

// #4 对比：烂演示 vs 好演示
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="烂演示 vs 好演示"
    subtitle="同样一个项目，交付物决定第一印象"
    leftLabel="烂演示"
    rightLabel="好演示"
    left={{
      title: '草草交付',
      items: [
        '仓库无 README，只有代码',
        '录屏卡顿、无脚本、严重超时',
        '截图模糊、功能说不清楚',
        '评委打开就关，毫无记忆点',
      ],
    }}
    right={{
      title: '精美交付',
      items: [
        'README 含徽章 / 截图 / 架构图 / 启动指南',
        '2 分钟录屏脚本清晰、流畅演示',
        '截图精致、功能逐一展示',
        '评委一眼记住，传播力拉满',
      ],
    }}
    keyTakeaway="好演示 = 精美 README + 流畅录屏 + 清晰门面，三者缺一不可。"
  />
);

// #5 概念：README 规范
const Slide05: React.FC = () => (
  <ConceptSlide
    title="README 规范"
    subtitle="一份优秀技术 README 的五要素"
    badgeText="规范要素"
    bullets={[
      '📝 标题与简介：项目名称、一句话定位、技术栈标签',
      '📌 项目 Badge 徽章: Vue 3, Spring Boot, MySQL, License',
      '🖼️ 核心功能截图展示: 首页瀑布流、发布页、个人中心',
      '🏗️ 架构图与技术选型: 前后端解耦架构说明',
      '⚡ 快速启动指南: git clone, npm install, java -jar 步骤',
    ]}
    keyTakeaway="徽章 + 截图 + 架构图 + 启动指南 + 简介，五要素齐全的 README 才专业。"
  />
);

// #6 代码：README 模板
const Slide06: React.FC = () => (
  <CodeBoxSlide
    title="README 模板"
    subtitle="一份可直接套用的 Markdown README 骨架"
    language="markdown"
    filename="README.md"
    highlightLines={[5, 6, 7, 8]}
    code={`# 此刻兴趣社区 Moment Community

> 基于 Vue 3 + Spring Boot 的兴趣社区，分享此刻的想法

![Vue 3](https://img.shields.io/badge/Vue-3-42b883)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-6db33f)
![MySQL](https://img.shields.io/badge/MySQL-8-4479a1)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ 功能特性
- 帖子发布：标题 / 内容 / 封面 / 分类
- 信息流：瀑布流分页加载
- 个人中心：我的发布与点赞

## 🖼️ 截图
| 首页 | 发布页 | 个人中心 |
|------|--------|----------|
| ![](docs/home.png) | ![](docs/post.png) | ![](docs/me.png) |

## 🏗️ 技术栈
- 前端：Vue 3 + Vite + Element Plus
- 后端：Spring Boot 3 + MyBatis
- 数据库：MySQL 8

## 🚀 快速启动

    git clone https://gitee.com/you/moment-community.git
    cd moment-community
    # 前端
    cd frontend && npm install && npm run dev
    # 后端
    cd backend && mvn spring-boot:run

## 📂 项目结构

    moment-community/
    ├── frontend/   # Vue 3 前端
    ├── backend/    # Spring Boot 后端
    └── docs/       # 文档与截图

## 📄 License
MIT License
`}
    takeaway="套用模板补全五要素，30 分钟产出专业 README。"
  />
);

// #7 提示词：AI 写 README
const Slide07: React.FC = () => (
  <PromptSlide
    title="AI 写 README"
    subtitle="把项目信息喂给 AI，30 秒生成专业 README"
    role="技术文档助理"
    task="为「此刻」兴趣社区项目撰写专业的高质量 Gitee README.md"
    stack="Markdown / Gitee 渲染"
    constraints="项目为 Vue 3 + Spring Boot 3 全栈兴趣社区；README 需含徽章/截图/功能/启动/技术栈/结构/License"
    outputFormat="完整 README.md，可直接放入仓库根目录"
    template={`你是一位熟练的技术文档助理。
请为「此刻」兴趣社区项目撰写一份专业的高质量 Gitee README.md。

技术栈：Vue 3 + Vite + Element Plus / Spring Boot 3 + MyBatis / MySQL 8

README 需包含：
- 项目标题与一句话简介
- Badge 徽章（Vue 3 / Spring Boot / MySQL / License）
- 核心功能特性列表
- 功能截图占位
- 技术栈说明
- 快速启动指南（git clone / npm install / java -jar）
- 项目目录结构
- License 信息

风格：专业、简洁、结构清晰，适合作为个人技术履历展示。
请输出完整 README.md 内容。`}
    takeaway="结构化提示词（角色 / 任务 / 栈 / 约束 / 输出）让 AI 稳定产出专业 README。"
  />
);

// #8 概念：录屏技巧
const Slide08: React.FC = () => (
  <ConceptSlide
    title="录屏技巧"
    subtitle="2 分钟演示视频的脚本与录制要点"
    badgeText="录屏要点"
    bullets={[
      '脚本：00:00-00:20 痛点定位 → 00:20-01:20 核心功能 → 01:20-01:50 AI 协作亮点 → 01:50-02:00 总结展望',
      '分辨率：1080p 全屏录制，关闭系统通知与桌面杂乱',
      '时长：严格控制在 2 分钟内，节奏紧凑不拖沓',
      '剪辑：剪掉卡顿与等待，配字幕与片头片尾',
    ]}
    keyTakeaway="脚本先行 + 1080p + 2 分钟内 + 剪辑打磨，四要点成就流畅录屏。"
  />
);

// #9 动画：录屏流程动效
const Slide09: React.FC = () => (
  <AnimationSlide
    title="录屏流程动效"
    subtitle="准备 → 录制 → 剪辑 → 导出，四步跑通录屏全流程"
    animationType="RecordFlow"
    caption="每一步都有明确产出：脚本 → raw 视频 → 字幕版 → 上传 mp4"
    takeaway="准备 → 录制 → 剪辑 → 导出，按流程走一遍即可产出合格录屏。"
  >
    <RecordFlowAnimation
      steps={[
        { label: '准备', icon: FileText, desc: '写脚本、清桌面、关系统通知' },
        { label: '录制', icon: Monitor, desc: '1080p 全屏录制 2 分钟' },
        { label: '剪辑', icon: Layers, desc: '剪卡顿、配字幕、加片头片尾' },
        { label: '导出', icon: Download, desc: '导出 mp4，上传 Gitee / 作品集' },
      ]}
    />
  </AnimationSlide>
);

// #10 代码：Gitee 仓库美化
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="Gitee 仓库美化"
    subtitle="README 渲染 + 头像 + 描述 + 标签，打造仓库门面"
    language="markdown"
    filename="仓库门面四件套"
    highlightLines={[2, 3, 4, 5]}
    code={`# 仓库门面四件套
仓库名:   moment-community
描述:     「此刻」兴趣社区 - Vue3 + Spring Boot 全栈项目
推荐标签: vue3, spring-boot, mysql, fullstack, community
头像:     上传项目 Logo（512x512 PNG）
README:   默认渲染根目录 README.md（无需额外配置）

# 标签作用：增加 Gitee 搜索曝光，方便评委按技术栈找到你
# 描述作用：一句话讲清项目定位，决定评委是否点进来`}
    takeaway="描述 + 标签 + 头像 + README 渲染，四件套美化仓库门面。"
  />
);// #11 特效：仓库门面展示
const Slide11: React.FC = () => (
  <EffectSlide
    title="仓库门面展示"
    subtitle="美化前后的 Gitee 仓库门面对比"
    effectType="RepoFacadeShowcase"
    caption="美化后：完整描述 / 标签 / 语言占比 / Star 一目了然"
    takeaway="美化后的仓库门面让评委一眼记住你的项目。"
  >
    <RepoFacadeShowcase
      title="「此刻」兴趣社区 · Gitee 仓库"
      repo={{
        name: 'moment-community',
        owner: 'your-name',
        description: '「此刻」兴趣社区 - Vue3 + Spring Boot 全栈项目，含发帖、信息流、点赞',
        stars: 42,
        forks: 8,
        language: 'Vue',
        languageColor: '#42b883',
        topics: ['vue3', 'spring-boot', 'mysql', 'fullstack', 'community'],
      }}
    />
  </EffectSlide>
);

// #12 概念：项目文档结构
const Slide12: React.FC = () => (
  <ConceptSlide
    title="项目文档结构"
    subtitle="一个完整项目该有的五件套文档"
    badgeText="文档结构"
    bullets={[
      'README.md：项目门面，含介绍 / 截图 / 启动指南',
      'docs/：详细设计文档与接口说明',
      'screenshots/：高清功能截图素材库',
      '录屏视频：2 分钟演示 mp4，直观展示功能',
      'LICENSE + .gitignore：开源协议与忽略规则',
    ]}
    keyTakeaway="README + docs + 截图 + 录屏 + LICENSE，五件套让项目专业可维护。"
  />
);

// #13 图解：交付物清单图
const Slide13: React.FC = () => (
  <DiagramSlide
    title="交付物清单图"
    subtitle="源码 + 文档 + 录屏 + 截图 + 链接，交付矩阵一览"
    badgeText="交付矩阵"
    takeaway="源码 + 文档 + 录屏 + 截图 + 链接，交付矩阵一项不能少。"
  >
    <MindMapDiagram
      root={{
        label: '最终交付物',
        children: [
          { label: '源码', children: [{ label: 'Git 仓库完整提交历史' }] },
          { label: '文档', children: [{ label: 'README + docs/ 设计文档' }] },
          { label: '录屏', children: [{ label: '2 分钟演示 mp4' }] },
          { label: '截图', children: [{ label: '首页 / 发布 / 个人中心' }] },
          { label: '链接', children: [{ label: 'Gitee + 作品集 URL' }] },
        ],
      }}
    />
  </DiagramSlide>
);

// #14 代码：LICENSE 与 .gitignore
const Slide14: React.FC = () => (
  <CodeBoxSlide
    title="LICENSE 与 .gitignore"
    subtitle="MIT LICENSE + .gitignore 模板，开源规范两件套"
    language="bash"
    filename=".gitignore"
    highlightLines={[2, 3, 7, 12, 13]}
    code={`# 依赖
node_modules/
target/
dist/

# 环境
.env
.env.local
application-local.yml

# IDE
.idea/
.vscode/
*.iml

# 系统
.DS_Store
Thumbs.db

# 日志
*.log
logs/
`}
    takeaway="同时新增 MIT LICENSE 文件声明开源协议，.gitignore 防止提交依赖与密钥。"
  />
);

// #15 动画：提交历史动效
const Slide15: React.FC = () => (
  <AnimationSlide
    title="提交历史动效"
    subtitle="14 天提交时间线展开，看见你的成长轨迹"
    animationType="GitHistory"
    caption="8 个关键 commit 串起 14 天全栈成长之路"
    takeaway="14 天提交时间线，是你成长轨迹最好的证明。"
  >
    <GitHistoryAnimation
      title="「此刻」项目 14 天提交历史"
      commits={[
        { hash: 'a1b2c3d', message: 'Day 1: 项目初始化与前端骨架', author: 'you', time: 'Day 1', tone: 'indigo' },
        { hash: 'b2c3d4e', message: 'Day 3: Vue 3 组件化与路由', author: 'you', time: 'Day 3', tone: 'cyan' },
        { hash: 'c3d4e5f', message: 'Day 5: Element Plus 发布表单', author: 'you', time: 'Day 5', tone: 'violet' },
        { hash: 'd4e5f6a', message: 'Day 7: Spring Boot 后端与首个 API', author: 'you', time: 'Day 7', tone: 'emerald' },
        { hash: 'e5f6a7b', message: 'Day 9: 前后端联调与 CORS', author: 'you', time: 'Day 9', tone: 'amber' },
        { hash: 'f6a7b8c', message: 'Day 10: 信息流与分页加载', author: 'you', time: 'Day 10', tone: 'rose' },
        { hash: 'a7b8c9d', message: 'Day 12: Nginx 部署与上线', author: 'you', time: 'Day 12', tone: 'indigo' },
        { hash: 'b8c9d0e', message: 'Day 13: README 与交付物整理', author: 'you', time: 'Day 13', tone: 'emerald' },
      ]}
    />
  </AnimationSlide>
);

// #16 提示词：AI 生成文档
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 生成文档"
    subtitle="让 AI 一次性生成全套项目交付文档"
    role="技术文档助理"
    task="为「此刻」兴趣社区项目生成全套交付文档（README + 设计文档 + 录屏脚本）"
    stack="Markdown"
    constraints="项目为 Vue 3 + Spring Boot 3 全栈兴趣社区，已部署上线；文档放入 Gitee 仓库"
    outputFormat="三份独立 Markdown 文档：README.md / docs/design.md / docs/record-script.md"
    template={`你是一位熟练的技术文档助理。
请为「此刻」兴趣社区项目一次性生成全套交付文档。

需要生成：
1. README.md：项目门面，含徽章 / 截图 / 功能 / 启动 / 技术栈
2. docs/design.md：简要架构与核心接口设计说明
3. docs/record-script.md：2 分钟演示录屏脚本（含时间轴）

项目信息：Vue 3 + Spring Boot 3 全栈兴趣社区，已部署上线。

风格：统一 Markdown，结构清晰，可直接放入 Gitee 仓库。
请分别输出三份文档内容。`}
    takeaway="AI 一次性生成 README + 设计文档 + 录屏脚本，交付文档不再难。"
  />
);

// #17 练习：准备最终提交物
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="准备最终提交物"
    subtitle="展示你的全栈果实，把交付物打包到位"
    tasks={[
      '整理 Gitee 仓库根目录 README.md',
      '使用 OBS 或系统自带工具录制 2 分钟演示视频',
      '在项目作品集中添加该项目的跳转链接',
      '为仓库添加 MIT LICENSE 与 .gitignore',
      '美化仓库门面：描述 + 标签 + 头像',
      '预演 Day 14 结营展示，截图发企微群打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评你的最终交付物！"
  />
);

// #18 特效：成品展示
const Slide18: React.FC = () => (
  <EffectSlide
    title="成品展示"
    subtitle="最终仓库门面截图，交付物就绪"
    effectType="RepoFacadeShowcase"
    caption="完整 README + 标签 + Star，达到成品门面标准"
    takeaway="最终仓库门面就绪，交付物打磨完成。"
  >
    <RepoFacadeShowcase
      title="「此刻」兴趣社区 · 最终成品仓库"
      repo={{
        name: 'moment-community',
        owner: 'your-name',
        description: '「此刻」兴趣社区 - Vue3 + Spring Boot 全栈项目 | 14 天训练营结营作品',
        stars: 86,
        forks: 15,
        language: 'Vue',
        languageColor: '#42b883',
        topics: ['vue3', 'spring-boot', 'mysql', 'fullstack', 'community', 'bootcamp'],
      }}
    />
  </EffectSlide>
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 13 知识检查"
    subtitle="4 道题：README 五要素 / 录屏四要点 / 文档五件套 / LICENSE"
    questions={[
      {
        question: '优秀技术 README 不属于五要素的是？',
        options: [
          '项目 Badge 徽章',
          '核心功能截图',
          '团队员工花名册',
          '快速启动指南',
        ],
        answer: 2,
        explanation: 'README 五要素为标题简介、徽章、功能截图、架构图技术选型、快速启动指南；员工花名册与项目门面无关。',
      },
      {
        question: '2 分钟演示录屏最关键的第一步是？',
        options: [
          '直接开录，边录边想',
          '先写脚本，按时间轴分配内容',
          '先选剪辑软件',
          '先上传到 Gitee',
        ],
        answer: 1,
        explanation: '脚本先行是录屏四要点之首，按时间轴（痛点→功能→AI协作→总结）分配内容才能控制在 2 分钟内。',
      },
      {
        question: '完整项目文档五件套包含哪一项？',
        options: [
          'README + docs + 截图 + 录屏 + LICENSE',
          '需求文档 + 测试报告 + 周报 + 月报 + 年报',
          'PPT + Excel + Word + 邮件 + 聊天记录',
          '源码 + 依赖 + 日志 + 缓存 + 临时文件',
        ],
        answer: 0,
        explanation: '文档五件套为 README、docs/、screenshots/、录屏视频、LICENSE + .gitignore。',
      },
      {
        question: '关于 MIT LICENSE 与 .gitignore 说法正确的是？',
        options: [
          'LICENSE 没用，可以不写',
          '.gitignore 用来把 node_modules 提交进仓库',
          'LICENSE 声明开源协议，.gitignore 忽略依赖与密钥',
          '两者都必须用中文编写',
        ],
        answer: 2,
        explanation: 'MIT LICENSE 声明开源协议让他人可合法使用，.gitignore 忽略 node_modules/target/.env 等避免提交依赖与密钥。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="交付物就绪，明日结营仪式"
    dayNumber={13}
    takeaways={[
      '项目演示四价值：说服力 / 专业度 / 可传播 / 评奖加分',
      'README 五要素：徽章 + 截图 + 架构图 + 启动指南 + 简介',
      '录屏四要点：脚本先行 + 1080p + 2 分钟内 + 剪辑打磨',
      'Gitee 门面四件套：描述 + 标签 + 头像 + README 渲染',
      '交付物三件套就绪，迎接明日结营仪式',
    ]}
    nextDayPreview="Day 14 — 结营仪式 · 模拟毕设 · 颁奖与规划"
  />
);

const Render: React.FC<{ slideIndex: number }> = ({ slideIndex }) => {
  switch (slideIndex) {
    case 0:
      return <Slide01 />;
    case 1:
      return <Slide02 />;
    case 2:
      return <Slide03 />;
    case 3:
      return <Slide04 />;
    case 4:
      return <Slide05 />;
    case 5:
      return <Slide06 />;
    case 6:
      return <Slide07 />;
    case 7:
      return <Slide08 />;
    case 8:
      return <Slide09 />;
    case 9:
      return <Slide10 />;
    case 10:
      return <Slide11 />;
    case 11:
      return <Slide12 />;
    case 12:
      return <Slide13 />;
    case 13:
      return <Slide14 />;
    case 14:
      return <Slide15 />;
    case 15:
      return <Slide16 />;
    case 16:
      return <Slide17 />;
    case 17:
      return <Slide18 />;
    case 18:
      return <Slide19 />;
    case 19:
      return <Slide20 />;
    default:
      return <Slide01 />;
  }
};
export const day13Deck: DayDeckRenderer = {
  meta: {
    day: 13,
    stageName: '第八阶段：完结撒花',
    title: 'Day 13 — 演示准备 · README 规范整理 · 录屏技巧与 Gitee 打造',
    subtitle: '打造属于你的硬核 GitHub/Gitee 技术履历与演示视频',
    duration: '90 分钟',
    target: '掌握技术展示与 README 编写规范，录制 2 分钟项目实操视频',
    output: '高质量 Gitee 仓库 (含徽章、架构图、截图) + 2分钟演示视频',
    aiPractice: '豆包 → "帮我为项目 «此刻兴趣社区» 撰写一份专业的高质量 Gitee README.md"',
    slides: [
      {
        id: 'd13-s1',
        title: '演示准备与交付物打磨',
        subtitle: 'README / 录屏 / Gitee 门面三件套',
        layout: 'cover',
        instructorNotes: '开场强调：代码写完不等于交付完成。今天把 README、录屏、仓库门面三件套打磨好，作品才真正「被看见」。预告今日 5 目标与最终提交物清单。',
        keyTakeaway: '交付物三件套：精美 README + 2 分钟录屏 + Gitee 门面。',
      },
      {
        id: 'd13-s2',
        title: 'Day 13 学习路线图',
        subtitle: '演示→README→录屏→仓库→交付 5 目标',
        layout: 'steps',
        instructorNotes: '用 5 目标串起今日主线：先理解演示价值，再写 README，然后学录屏，美化仓库，最后打包交付。每完成一个目标对应一个产出。',
        keyTakeaway: 'Day 13 五目标：演示 → README → 录屏 → 仓库 → 交付。',
      },
      {
        id: 'd13-s3',
        title: '项目演示的重要性',
        subtitle: '说服力/专业度/可传播/评奖 四价值',
        layout: 'concept',
        instructorNotes: '讲清四价值：说服力（可运行 > PPT）、专业度（工程素养）、可传播（录屏自带传播力）、评奖加分（硬指标）。让学生意识到交付物和代码同等重要。',
        keyTakeaway: '代码写得好是基础，演示与文档才是作品被看见的关键。',
      },
      {
        id: 'd13-s4',
        title: '烂演示 vs 好演示',
        subtitle: '无文档 vs 精美 README / 卡顿录屏 vs 流畅演示',
        layout: 'comparison',
        instructorNotes: '用对比让学生直观感受差距。烂演示：无 README、卡顿录屏、模糊截图；好演示：精美 README、流畅录屏、清晰门面。强调三者缺一不可。',
        keyTakeaway: '好演示 = 精美 README + 流畅录屏 + 清晰门面，三者缺一不可。',
      },
      {
        id: 'd13-s5',
        title: 'README 规范',
        subtitle: '标题/截图/功能/安装/技术栈 五要素',
        layout: 'concept',
        instructorNotes: '拆解 README 五要素：标题简介、Badge 徽章、功能截图、架构图技术选型、快速启动指南。逐条点评优秀案例，让学生对照自己仓库查漏补缺。',
        keyTakeaway: '徽章 + 截图 + 架构图 + 启动指南 + 简介，五要素齐全的 README 才专业。',
      },
      {
        id: 'd13-s6',
        title: 'README 模板',
        subtitle: '完整 Markdown README 模板',
        layout: 'split_code',
        instructorNotes: '带学生过一遍 README 模板：标题+徽章、功能、截图表格、技术栈、快速启动、目录结构、License。强调徽章用 shields.io、启动命令要可复制可运行。',
        keyTakeaway: '套用模板补全五要素，30 分钟产出专业 README。',
      },
      {
        id: 'd13-s7',
        title: 'AI 写 README',
        subtitle: '角色:文档助理 / 任务:项目 README / 栈:Markdown',
        layout: 'prompt_template',
        instructorNotes: '演示用 AI 生成 README：把项目名、技术栈、功能清单喂给 AI，30 秒生成完整 README。强调提示词要写清字段清单与风格要求。',
        keyTakeaway: '结构化提示词让 AI 稳定产出专业 README。',
      },
      {
        id: 'd13-s8',
        title: '录屏技巧',
        subtitle: '脚本/分辨率/时长/剪辑 四要点',
        layout: 'concept',
        instructorNotes: '讲录屏四要点：脚本（2 分钟时间轴）、分辨率（1080p）、时长（2 分钟内）、剪辑（剪卡顿配字幕）。重点强调脚本先行，按时间轴分配内容。',
        keyTakeaway: '脚本先行 + 1080p + 2 分钟内 + 剪辑打磨，四要点成就流畅录屏。',
      },
      {
        id: 'd13-s9',
        title: '录屏流程动效',
        subtitle: '准备→录制→剪辑→导出 四步动效',
        layout: 'concept',
        instructorNotes: '用动效展示录屏四步：准备（写脚本清桌面）→ 录制（1080p 全屏）→ 剪辑（剪卡顿配字幕）→ 导出（mp4 上传）。让学生跟着流程走一遍。',
        keyTakeaway: '准备 → 录制 → 剪辑 → 导出，四步跑通录屏全流程。',
      },
      {
        id: 'd13-s10',
        title: 'Gitee 仓库美化',
        subtitle: 'README 渲染 + 头像 + 描述 + 标签',
        layout: 'split_code',
        instructorNotes: '讲 Gitee 仓库门面四件套：仓库名、描述、推荐标签、头像 Logo。强调 README 默认渲染根目录，标签用 vue3/spring-boot 等增加曝光。',
        keyTakeaway: '描述 + 标签 + 头像 + README 渲染，四件套美化仓库门面。',
      },
      {
        id: 'd13-s11',
        title: '仓库门面展示',
        subtitle: '美化前后对比墙',
        layout: 'concept',
        instructorNotes: '展示美化后的仓库门面：完整的描述、标签、语言占比、Star/Fork。对比美化前的空荡门面，让学生看到门面的第一印象差异。',
        keyTakeaway: '美化后的仓库门面让评委一眼记住你的项目。',
      },
      {
        id: 'd13-s12',
        title: '项目文档结构',
        subtitle: 'README/文档/截图/录屏/LICENSE 五件套',
        layout: 'concept',
        instructorNotes: '讲项目文档五件套：README、docs/、screenshots/、录屏视频、LICENSE + .gitignore。强调文档不是负担，是项目可维护与可传播的基础。',
        keyTakeaway: 'README + docs + 截图 + 录屏 + LICENSE，五件套让项目专业可维护。',
      },
      {
        id: 'd13-s13',
        title: '交付物清单图',
        subtitle: '源码+文档+录屏+截图+链接 矩阵',
        layout: 'concept',
        instructorNotes: '用思维导图展示交付矩阵：源码、文档、录屏、截图、链接五大类，每类列具体产出。让学生对照清单逐一确认是否齐全。',
        keyTakeaway: '源码 + 文档 + 录屏 + 截图 + 链接，交付矩阵一项不能少。',
      },
      {
        id: 'd13-s14',
        title: 'LICENSE 与 .gitignore',
        subtitle: 'MIT LICENSE + .gitignore 模板',
        layout: 'split_code',
        instructorNotes: '讲开源规范两件套：MIT LICENSE（声明开源协议，让他人可合法使用）与 .gitignore（忽略 node_modules/target/.env 等）。强调不要把密钥和依赖提交进仓库。',
        keyTakeaway: 'MIT LICENSE + .gitignore，开源规范两件套不可少。',
      },
      {
        id: 'd13-s15',
        title: '提交历史动效',
        subtitle: '14 天提交时间线展开',
        layout: 'concept',
        instructorNotes: '用提交历史动效回顾 14 天成长：从 Day 1 项目初始化到 Day 13 交付物整理，8 个关键 commit 串成成长轨迹。让学生看到自己一路的脚印。',
        keyTakeaway: '14 天提交时间线，是你成长轨迹最好的证明。',
      },
      {
        id: 'd13-s16',
        title: 'AI 生成文档',
        subtitle: '角色:文档助理 / 任务:全套文档 / 栈:Markdown',
        layout: 'prompt_template',
        instructorNotes: '演示用 AI 一次性生成全套文档：README、设计文档、录屏脚本三份。强调把项目信息一次喂全，AI 能批量产出结构化文档。',
        keyTakeaway: 'AI 一次性生成 README + 设计文档 + 录屏脚本，交付文档不再难。',
      },
      {
        id: 'd13-s17',
        title: '准备最终提交物',
        subtitle: 'README→录屏→仓库美化→LICENSE→打卡',
        layout: 'exercise',
        instructorNotes: '布置今日任务：整理 README、录制 2 分钟视频、作品集加链接、加 LICENSE 与 .gitignore、美化门面、预演 Day 14。强调截图打卡，助教点评。',
        keyTakeaway: '六步打包最终提交物，交付物就绪迎接结营。',
      },
      {
        id: 'd13-s18',
        title: '成品展示',
        subtitle: '最终仓库门面截图',
        layout: 'concept',
        instructorNotes: '展示最终成品仓库门面：完整 README、标签、Star。让学生对照自己的仓库，确认门面是否达到成品标准。',
        keyTakeaway: '最终仓库门面就绪，交付物打磨完成。',
      },
      {
        id: 'd13-s19',
        title: 'Day 13 知识检查',
        subtitle: 'README 五要素/录屏四要点/文档五件套/LICENSE 4 题',
        layout: 'concept',
        instructorNotes: '用 4 题快速检验：README 五要素、录屏四要点、文档五件套、LICENSE。答错的知识点当场回顾。',
        keyTakeaway: 'README 五要素 / 录屏四要点 / 文档五件套 / LICENSE，四大知识点回顾。',
      },
      {
        id: 'd13-s20',
        title: '今日总结',
        subtitle: '交付物就绪 + 明日结营仪式',
        layout: 'summary',
        instructorNotes: '总结今日：交付物三件套就绪，明日结营仪式。预告 Day 14：14 天回顾、模拟毕设、颁奖与后续规划。鼓励学生带着作品迎接结营。',
        keyTakeaway: '交付物就绪，明日结营仪式见证 14 天蜕变。',
      },
    ],
  },
  Render,
};