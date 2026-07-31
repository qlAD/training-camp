'use client';

import React from 'react';
import { DayDeckRenderer } from '../../../../types';
import {
  CoverSlide,
  AgendaSlide,
  ConceptSlide,
  ComparisonSlide,
  PromptSlide,
  ExerciseSlide,
  SummarySlide,
  QuizSlide,
  TimelineSlide,
  AnimationSlide,
  EffectSlide,
  DiagramSlide,
} from './shared/layouts';
import { MindMapDiagram, FlowchartDiagram } from './shared/diagrams';
import { GrowthTrajectoryAnimation, LearningPathAnimation } from './shared/animations';
import { ProjectShowcaseWall, AwardShowcaseEffect } from './shared/effects';

// #1 封面：结营仪式与未来展望
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第八阶段：完结撒花"
    badgeText="Day 14 · 结营讲义"
    title="结营仪式 · 模拟毕设发布 · 颁奖与后续规划"
    subtitle="庆祝 14 天蜕变，开启下一段 AI 赋能的探索征程"
    bullets={[
      '🎉 14 天从零基础到产出两个线上项目，蜕变收官',
      '🏆 表彰优秀学员，发布模拟毕业设计挑战与评奖机制',
      '🗺️ 规划结营后的自学路线与社群资源，新征程启航',
      '🚀 Vibe Coding, Keep Building！',
    ]}
  />
);

// #2 议程：Day 14 结营流程图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 14 结营流程图"
    subtitle="回顾→成果→毕设→颁奖→规划，5 个环节串成结营主线"
    objectiveCountLabel="5 环节"
    objectives={[
      { title: '回顾成长', desc: '14 天里程碑与成长轨迹复盘' },
      { title: '成果展示', desc: '作品集 + 此刻 双项目成果墙' },
      { title: '模拟毕设', desc: '发布选题方向与评奖机制' },
      { title: '颁奖表彰', desc: '一二三等奖与结业证书' },
      { title: '后续规划', desc: '自学路线、社群资源与个人计划' },
    ]}
  />
);

// #3 时间线：14 天里程碑回顾
const Slide03: React.FC = () => (
  <TimelineSlide
    title="14 天里程碑回顾"
    subtitle="D1 开营 → D3 前端 → D7 后端 → D10 信息流 → D12 上线 → D14 结营"
    milestones={[
      { day: 'D1', event: '开营', desc: 'Vibe Coding 入门 + 环境准备', highlight: false },
      { day: 'D3', event: '前端起步', desc: 'HTML/CSS/JS + 作品集主页', highlight: false },
      { day: 'D7', event: '后端就绪', desc: 'MySQL + Spring Boot CRUD', highlight: false },
      { day: 'D10', event: '信息流', desc: '动态列表 + 登录注册 + 互动', highlight: false },
      { day: 'D12', event: '上线部署', desc: '服务器部署 + 域名访问', highlight: false },
      { day: 'D14', event: '结营', desc: '毕设发布 + 颁奖 + 规划', highlight: true },
    ]}
    takeaway="6 个里程碑串起从开营到结营的全栈成长路径。"
  />
);

// #4 动画：成长轨迹动效
const Slide04: React.FC = () => (
  <AnimationSlide
    title="成长轨迹动效"
    subtitle="零基础 → 全栈，14 天能力跃迁时间轴"
    animationType="GrowthTrajectory"
    caption="点击播放或单步切换，观察能力等级随天数上升"
    takeaway="从 D1 零基础到 D14 全栈入门，能力曲线持续上扬。"
  >
    <GrowthTrajectoryAnimation
      milestones={[
        { day: 1, label: '零基础开营', level: 1, desc: '环境准备 + Vibe Coding' },
        { day: 3, label: '前端入门', level: 2, desc: 'HTML/CSS/JS + 作品集' },
        { day: 7, label: '后端就绪', level: 3, desc: 'Spring Boot + MySQL CRUD' },
        { day: 10, label: '信息流打通', level: 4, desc: '动态 + 登录 + 互动' },
        { day: 12, label: '上线部署', level: 4, desc: '服务器 + 域名访问' },
        { day: 14, label: '全栈入门', level: 5, desc: '毕设发布 + 结营' },
      ]}
    />
  </AnimationSlide>
);

// #5 概念：技能矩阵总结
const Slide05: React.FC = () => (
  <ConceptSlide
    title="技能矩阵总结"
    subtitle="前端 / 后端 / 数据库 / 部署 / AI 协作，五大技能达成"
    badgeText="核心概念"
    bullets={[
      '🎨 前端：HTML / CSS / JavaScript，能独立搭建响应式页面与作品集',
      '⚙️ 后端：Spring Boot 3 + RESTful API，掌握 Controller-Service-Repository 分层',
      '🗄️ 数据库：MySQL 表设计 + JDBC/JPA 读写，理解持久化与 CRUD',
      '🚀 部署：服务器上线 + 域名访问 + 跨域配置，项目可被世界访问',
      '🤖 熟练掌握了 Vibe Coding 与大模型 AI 协作秘籍',
      '🎓 获得了从需求拆解到服务器部署的全流程工程思维',
    ]}
    keyTakeaway="五项技能构成全栈入门最小闭环：能写、能存、能部署、能用 AI。"
  />
);

// #6 图解：知识体系图
const Slide06: React.FC = () => (
  <DiagramSlide
    title="Vibe Coding 全栈知识体系图"
    subtitle="以全栈交付为核心，五大分支辐射展开"
    badgeText="知识体系"
    takeaway="知识树以「全栈交付」为根，前端/后端/数据/部署/AI 五大分支协同。"
  >
    <MindMapDiagram
      direction="radial"
      root={{
        label: 'Vibe Coding 全栈',
        children: [
          { label: '前端', children: [{ label: 'HTML/CSS' }, { label: 'JavaScript' }, { label: '响应式布局' }] },
          { label: '后端', children: [{ label: 'Spring Boot' }, { label: 'RESTful API' }, { label: 'MVC 分层' }] },
          { label: '数据库', children: [{ label: 'MySQL' }, { label: '表设计' }, { label: 'CRUD' }] },
          { label: '部署', children: [{ label: '服务器上线' }, { label: '域名访问' }, { label: 'CORS' }] },
          { label: 'AI 协作', children: [{ label: '结构化 Prompt' }, { label: 'Vibe Coding' }, { label: 'Debug 协作' }] },
        ],
      }}
    />
  </DiagramSlide>
);

// #7 对比：营前 vs 营后
const Slide07: React.FC = () => (
  <ComparisonSlide
    title="营前 vs 营后对比"
    subtitle="零基础 vs 两项目 / 手动 vs AI 协作 / 本地 vs 上线"
    leftLabel="营前"
    rightLabel="营后"
    left={{
      title: '营前（Day 1）',
      items: [
        '零基础：未写过完整项目',
        '手动编码：逐行查文档敲代码',
        '本地运行：项目只在自己电脑',
        '单点技能：只了解个别概念',
      ],
    }}
    right={{
      title: '营后（Day 14）',
      items: [
        '两项目：作品集 + 此刻兴趣社区',
        'AI 协作：Vibe Coding 全流程提效',
        '线上部署：域名可访问的真实应用',
        '全栈闭环：前端+后端+数据+部署',
      ],
    }}
    keyTakeaway="14 天完成从「零基础本地」到「全栈线上 + AI 协作」的跃迁。"
  />
);

// #8 特效：项目成果墙
const Slide08: React.FC = () => (
  <EffectSlide
    title="项目成果墙"
    subtitle="作品集 + 此刻，双项目展示"
    effectType="ProjectShowcaseWall"
    caption="两个项目均已完成线上部署，可作为长期作品积累"
    takeaway="作品集展示自我，此刻验证全栈，双项目构成作品集基线。"
  >
    <ProjectShowcaseWall
      projects={[
        {
          name: '个人作品集',
          tag: '前端 · 静态主页',
          desc: 'HTML/CSS/JS 构建的响应式个人主页，展示项目与联系方式',
          tone: 'indigo',
          techStack: ['HTML', 'CSS', 'JavaScript'],
          highlights: [
            '🎉 拥有了属于自己的个人作品集主页',
            '响应式布局适配移动端',
            'GitHub Pages 在线访问',
          ],
        },
        {
          name: '此刻',
          tag: '全栈 · 兴趣社区',
          desc: 'Spring Boot + MySQL + 前端的全栈兴趣社区，支持动态发布与互动',
          tone: 'emerald',
          techStack: ['Spring Boot', 'MySQL', 'RESTful API', 'Vue/JS'],
          highlights: [
            '🚀 成功发布了第一个全栈应用「此刻」兴趣社区',
            '完整 CRUD + 数据持久化',
            '服务器部署 + 域名访问',
          ],
        },
      ]}
    />
  </EffectSlide>
);

// #9 概念：模拟毕设挑战
const Slide09: React.FC = () => (
  <ConceptSlide
    title="模拟毕业设计挑战"
    subtitle="独立完成 · 秋季评奖 · 现金奖励 · 荣誉证书"
    badgeText="核心概念"
    bullets={[
      '🎯 独立完成：在结营后自主选题并完成一个全栈小项目',
      '🏆 秋季评奖：开学后统一评审，参与即有机会获奖',
      '💰 现金奖励：一二三等奖分别 200 / 150 / 100 元',
      '📜 荣誉证书：获奖者颁发荣誉证书，可写入简历',
    ]}
    keyTakeaway="模拟毕设把 14 天所学凝聚成一个可展示的独立作品。"
  />
);

// #10 对比：选题方向对比
const Slide10: React.FC = () => (
  <ComparisonSlide
    title="模拟毕设选题方向对比"
    subtitle="四个校园场景方向，选一个深入打磨"
    leftLabel="生活交易类"
    rightLabel="校园服务类"
    left={{
      title: '生活交易方向',
      items: [
        '🛒 校园二手物品交易平台',
        '🍵 校园失物招领与便民互助',
        '核心：发布-浏览-联系 闭环',
        '难度：中，重信息匹配与状态管理',
      ],
    }}
    right={{
      title: '校园服务方向',
      items: [
        '📚 课程评价与选课助手',
        '🧩 社团招新与活动报名小程序',
        '核心：评价/报名 + 列表筛选',
        '难度：中，重表单交互与数据聚合',
      ],
    }}
    keyTakeaway="四方向均覆盖全栈闭环，按兴趣与数据可得性二选一即可。"
  />
);

// #11 概念：评奖机制
const Slide11: React.FC = () => (
  <ConceptSlide
    title="评奖机制"
    subtitle="一二三等奖 / 评审标准 / 提交方式 / 时间节点"
    badgeText="核心概念"
    bullets={[
      '🥇 第一名：200 元现金 + 荣誉证书',
      '🥈 第二名：150 元现金；🥉 第三名：100 元现金',
      '评审标准：功能完整度 + 代码质量 + 文档 + 创新性',
      '提交方式：GitHub 仓库链接 + README + 录屏，秋季开学前自愿独立完成并提交评审',
    ]}
    keyTakeaway="评审看「能跑 + 好用 + 有文档」，先把闭环跑通再打磨细节。"
  />
);

// #12 特效：奖项展示
const Slide12: React.FC = () => (
  <EffectSlide
    title="奖项展示"
    subtitle="奖杯 + 证书 + 奖金，动效颁奖卡"
    effectType="AwardShowcaseEffect"
    caption="点击「庆祝一下」触发彩带，提前感受颁奖氛围"
    takeaway="一二三等奖 + 特别奖，奖励坚持与创新的学员。"
  >
    <AwardShowcaseEffect
      triggerConfetti
      awards={[
        { rank: 'first', title: '一等奖', prize: '200 元现金 + 荣誉证书', certificate: '优秀学员证书' },
        { rank: 'second', title: '二等奖', prize: '150 元现金', certificate: '荣誉证书' },
        { rank: 'third', title: '三等奖', prize: '100 元现金', certificate: '荣誉证书' },
        { rank: 'feature', title: '特别奖', prize: '最具创新 / 最佳文档', certificate: '荣誉证书' },
      ]}
    />
  </EffectSlide>
);

// #13 概念：后续学习路线
const Slide13: React.FC = () => (
  <ConceptSlide
    title="后续学习路线"
    subtitle="深耕全栈 / AI Agent / 移动端 / 算法，四个进阶方向"
    badgeText="核心概念"
    bullets={[
      '🌐 深耕全栈：Vue/React 进阶 + 微服务 + Docker，做大做深现有项目',
      '🤖 AI Agent：Prompt 工程 + Agent 编排，向 AI 应用开发进阶',
      '📱 移动端：小程序 / React Native，把全栈能力迁移到移动场景',
      '🧮 算法基础：数据结构与算法，夯实工程内功与面试准备',
    ]}
    keyTakeaway="四方向无优劣，按兴趣与职业目标选一条持续投入即可。"
  />
);

// #14 图解：自学路线图
const Slide14: React.FC = () => (
  <DiagramSlide
    title="自学路线图"
    subtitle="短期 / 中期 / 长期，三阶段递进学习路径"
    badgeText="学习路径"
    takeaway="短期巩固、中期进阶、长期专精，按节奏持续推进。"
  >
    <FlowchartDiagram
      nodes={[
        { id: 'start', label: '结营起点', type: 'start' },
        { id: 'short', label: '短期 1-2 月', type: 'process', tone: 'indigo' },
        { id: 'mid', label: '中期 3-6 月', type: 'process', tone: 'violet' },
        { id: 'long', label: '长期 6 月+', type: 'process', tone: 'cyan' },
        { id: 'goal', label: '专精方向', type: 'end' },
      ]}
      edges={[
        { from: 'start', to: 'short', label: '巩固' },
        { from: 'short', to: 'mid', label: '进阶' },
        { from: 'mid', to: 'long', label: '专精' },
        { from: 'long', to: 'goal', label: '产出' },
      ]}
    />
  </DiagramSlide>
);

// #15 动画：学习路径动效
const Slide15: React.FC = () => (
  <AnimationSlide
    title="学习路径动效"
    subtitle="当前 → 进阶 → 专精，阶梯式展开"
    animationType="LearningPath"
    caption="点击播放，逐条解锁进阶路径"
    takeaway="从当前全栈基线出发，逐级解锁进阶与专精方向。"
  >
    <LearningPathAnimation
      paths={[
        { label: '当前基线', desc: '全栈入门 + 两项目作品', difficulty: '已达成', tone: 'emerald' },
        { label: '进阶方向', desc: 'Vue/React 或 AI Agent 深入', difficulty: '中', tone: 'indigo' },
        { label: '专精方向', desc: '独立设计并交付完整产品', difficulty: '高', tone: 'violet' },
        { label: '持续产出', desc: '开源贡献 + 作品集迭代', difficulty: '长期', tone: 'fuchsia' },
      ]}
    />
  </AnimationSlide>
);

// #16 提示词：AI 续学对话
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 续学对话"
    subtitle="结构化提示词：角色 / 任务 / 栈 / 约束 / 输出"
    role="学习规划师"
    task="制定结营后的进阶学习路线"
    stack="AI Agent 方向"
    constraints="基于已掌握的全栈基础，3-6 个月可执行"
    outputFormat="分阶段学习计划 + 每周节奏 + 推荐资源"
    template={`你是一位资深的技术学习规划师。

我已经完成 14 天 Vibe Coding 全栈训练营，掌握：
- 前端：HTML/CSS/JavaScript + 个人作品集
- 后端：Spring Boot 3 + RESTful API
- 数据库：MySQL + CRUD
- 部署：服务器上线 + 域名访问
- AI 协作：结构化 Prompt + Vibe Coding

请帮我制定一份结营后的进阶学习路线：
- 方向：AI Agent 开发
- 周期：3-6 个月
- 要求：
  1. 分短期（1-2 月）/ 中期（3-4 月）/ 长期（5-6 月）三阶段
  2. 每阶段给出目标、学习资源、实战项目
  3. 每周建议学习节奏（约 8-10 小时）
  4. 标注每个阶段的验收产出`}
    takeaway="把已有基础写清楚，AI 就能给出可执行的分阶段进阶路线。"
  />
);

// #17 练习：制定个人计划
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="制定你的个人学习计划"
    subtitle="选方向 → 列资源 → 定节奏 → 打卡承诺"
    tasks={[
      '从深耕全栈 / AI Agent / 移动端 / 算法 中选定一个主攻方向',
      '列出该方向 3-5 个学习资源（文档/课程/开源项目）',
      '确定每周可投入的学习节奏（建议 8-10 小时/周）',
      '在社群或打卡平台承诺并开始第一次学习打卡',
    ]}
  />
);

// #18 概念：社群与资源
const Slide18: React.FC = () => (
  <ConceptSlide
    title="社群与资源"
    subtitle="AI 创新应用社 / 开源社区 / 官方文档 / 课程，四大资源"
    badgeText="核心概念"
    bullets={[
      '🎓 AI 创新应用社：校内技术社团，持续探索 AI 前沿与项目协作',
      '🌐 开源社区：GitHub + 开源项目，参与贡献积累真实工程经验',
      '📖 官方文档：Spring / Vue / MDN，第一手权威资料',
      '🎥 在线课程：B 站 / Coursera / 极客时间，体系化补强薄弱点',
    ]}
    keyTakeaway="社群提供同伴与反馈，文档与课程提供深度，组合使用最有效。"
  />
);

// #19 知识检查：14 天总复盘
const Slide19: React.FC = () => (
  <QuizSlide
    title="14 天总复盘"
    subtitle="Vibe Coding / 全栈四层 / 部署 / CORS / Debug 5 题总结"
    questions={[
      {
        question: 'Vibe Coding 的核心思想是？',
        options: [
          '用 AI 替代所有手写代码',
          '用自然语言与 AI 协作，AI 生成代码、人主导设计',
          '只学框架不学基础',
          '完全依赖复制粘贴',
        ],
        answer: 1,
        explanation: 'Vibe Coding 强调人主导设计与决策，AI 辅助生成代码，协作提效。',
      },
      {
        question: '全栈四层架构中，负责接收 HTTP 请求的是？',
        options: ['Repository', 'Service', 'Controller', '数据库'],
        answer: 2,
        explanation: 'Controller 接请求，Service 做业务，Repository 读写库，数据库持久化。',
      },
      {
        question: '项目上线后，前端跨域请求被浏览器拦截，应如何解决？',
        options: [
          '让用户换浏览器',
          '在后端配置 CORS 允许来源',
          '关闭前端所有请求',
          '把后端端口改为 80',
        ],
        answer: 1,
        explanation: 'CORS 由后端通过响应头声明允许的来源/方法/头，浏览器据此放行。',
      },
      {
        question: '前后端联调时接口返回 500，最有效的排查顺序是？',
        options: [
          '直接重写整个后端',
          '看后端日志定位异常 → 复现请求 → 检查参数与业务逻辑 → 修复验证',
          '换一台电脑访问',
          '只看前端控制台',
        ],
        answer: 1,
        explanation: '500 是服务端错误，应先看后端日志定位异常堆栈，再复现并逐步收敛。',
      },
      {
        question: '模拟毕设评审最看重的首要标准是？',
        options: ['UI 一定要炫酷', '功能闭环能跑通', '代码越短越好', '只看文档'],
        answer: 1,
        explanation: '先把功能闭环跑通（能跑 + 好用），再谈代码质量、文档与创新性。',
      },
    ]}
  />
);

// #20 今日总结：结营寄语
const Slide20: React.FC = () => (
  <SummarySlide
    title="结营寄语：保持好奇，AI 时代未来可期！"
    subtitle="技术会变，利用 AI 解决问题的主动性永不过时"
    dayNumber={14}
    takeaways={[
      '🌟 祝贺所有坚持完成 14 天学习的学员！',
      '🎓 14 天完成从零基础到全栈入门的蜕变',
      '📜 结业证书与优秀学员证书将在秋季开学统一颁发',
      '🤝 欢迎加入 AI 创新应用社，继续探索技术前沿',
      '🚀 Vibe Coding, Keep Building！',
    ]}
    nextDayPreview="下一站：模拟毕设挑战 + AI 创新应用社，新征程见！"
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
      return null;
  }
};

export const day14Deck: DayDeckRenderer = {
  meta: {
    day: 14,
    stageName: '第八阶段：完结撒花',
    title: 'Day 14 — 结营仪式 · 模拟毕设发布 · 颁奖与后续规划',
    subtitle: '庆祝 14 天蜕变，开启下一段 AI 赋能的探索征程',
    duration: '90 分钟',
    target: '回顾 14 天成长轨迹，表彰优秀学员，发布模拟毕业设计挑战',
    output: '提交 2 个项目最终版，获得结业认证，开启模拟毕设探索',
    aiPractice: '开启自学路线图对话 → "如何在结营后继续深入学习 AI Agent 开发？"',
    slides: [
      {
        id: 'd14-s1',
        title: '结营仪式与未来展望',
        subtitle: '14 天蜕变 / 毕设发布 / 颁奖 / 新征程',
        layout: 'cover',
        instructorNotes: '开场营造仪式感，先肯定所有人的坚持，再预告今天 5 个环节：回顾、成果、毕设、颁奖、规划。',
        keyTakeaway: '14 天蜕变收官，今天庆祝成果并开启新征程。',
      },
      {
        id: 'd14-s2',
        title: 'Day 14 结营流程图',
        subtitle: '回顾→成果→毕设→颁奖→规划 5 环节',
        layout: 'steps',
        instructorNotes: '带学员过 5 个环节，强调今天是收官 + 展望，节奏从回顾到颁奖再转规划。',
        keyTakeaway: '5 环节串成结营主线：回顾→成果→毕设→颁奖→规划。',
      },
      {
        id: 'd14-s3',
        title: '14 天里程碑回顾',
        subtitle: 'D1开营→D3前端→D7后端→D10信息流→D12上线→D14结营',
        layout: 'concept',
        instructorNotes: '指着时间线回顾每个里程碑的关键产出，让学员有「我真的走完了」的成就感。',
        keyTakeaway: '6 个里程碑串起从开营到结营的全栈成长路径。',
      },
      {
        id: 'd14-s4',
        title: '成长轨迹动效',
        subtitle: '零基础→全栈 14 天能力跃迁',
        layout: 'concept',
        instructorNotes: '点播放让学员看清能力曲线持续上扬，强调成长是非线性的跃迁。',
        keyTakeaway: '从 D1 零基础到 D14 全栈入门，能力曲线持续上扬。',
      },
      {
        id: 'd14-s5',
        title: '技能矩阵总结',
        subtitle: '前端/后端/数据库/部署/AI 协作 五技能',
        layout: 'concept',
        instructorNotes: '逐项点出每项技能的具体产出，让学员意识到自己已具备全栈入门最小闭环。',
        keyTakeaway: '五项技能构成全栈入门最小闭环：能写、能存、能部署、能用 AI。',
      },
      {
        id: 'd14-s6',
        title: 'Vibe Coding 全栈知识体系图',
        subtitle: '以全栈交付为核心，五大分支辐射展开',
        layout: 'concept',
        instructorNotes: '用思维导图把 14 天知识结构化，强调这是继续学习的地图。',
        keyTakeaway: '知识树以「全栈交付」为根，前端/后端/数据/部署/AI 五大分支协同。',
      },
      {
        id: 'd14-s7',
        title: '营前 vs 营后对比',
        subtitle: '零基础 vs 两项目 / 手动 vs AI协作 / 本地 vs 上线',
        layout: 'comparison',
        instructorNotes: '让学员对照左右两列，感受 14 天前后的状态差异，强化获得感。',
        keyTakeaway: '14 天完成从「零基础本地」到「全栈线上 + AI 协作」的跃迁。',
      },
      {
        id: 'd14-s8',
        title: '项目成果墙',
        subtitle: '作品集 + 此刻 双项目展示',
        layout: 'concept',
        instructorNotes: '展示两个项目的核心模块与技术栈，强调这是可写进简历的真实作品。',
        keyTakeaway: '作品集展示自我，此刻验证全栈，双项目构成作品集基线。',
      },
      {
        id: 'd14-s9',
        title: '模拟毕业设计挑战',
        subtitle: '独立完成/秋季评奖/现金奖励/荣誉证书',
        layout: 'concept',
        instructorNotes: '讲清挑战的四要点，强调「独立完成」与「秋季评奖」两个关键词。',
        keyTakeaway: '模拟毕设把 14 天所学凝聚成一个可展示的独立作品。',
      },
      {
        id: 'd14-s10',
        title: '模拟毕设选题方向对比',
        subtitle: '二手交易/选课助手/社团招新/失物招领 四方向',
        layout: 'comparison',
        instructorNotes: '对比四个方向的难度与核心闭环，帮学员按兴趣与数据可得性做选择。',
        keyTakeaway: '四方向均覆盖全栈闭环，按兴趣与数据可得性二选一即可。',
      },
      {
        id: 'd14-s11',
        title: '评奖机制',
        subtitle: '一二三等奖/评审标准/提交方式/时间',
        layout: 'concept',
        instructorNotes: '讲清评审标准优先级：功能闭环 > 代码质量 > 文档 > 创新，先把项目跑通。',
        keyTakeaway: '评审看「能跑 + 好用 + 有文档」，先把闭环跑通再打磨细节。',
      },
      {
        id: 'd14-s12',
        title: '奖项展示',
        subtitle: '奖杯+证书+奖金 动效颁奖卡',
        layout: 'concept',
        instructorNotes: '点击彩带营造颁奖氛围，预告秋季开学统一颁发证书。',
        keyTakeaway: '一二三等奖 + 特别奖，奖励坚持与创新的学员。',
      },
      {
        id: 'd14-s13',
        title: '后续学习路线',
        subtitle: '深耕全栈/AI Agent/移动端/算法 四方向',
        layout: 'concept',
        instructorNotes: '介绍四个进阶方向，强调无优劣之分，按兴趣选一条持续投入。',
        keyTakeaway: '四方向无优劣，按兴趣与职业目标选一条持续投入即可。',
      },
      {
        id: 'd14-s14',
        title: '自学路线图',
        subtitle: '短期/中期/长期 学习路径图',
        layout: 'concept',
        instructorNotes: '用流程图展示三阶段递进，强调按节奏推进，不急于求成。',
        keyTakeaway: '短期巩固、中期进阶、长期专精，按节奏持续推进。',
      },
      {
        id: 'd14-s15',
        title: '学习路径动效',
        subtitle: '当前→进阶→专精 阶梯动效',
        layout: 'concept',
        instructorNotes: '点播放逐条解锁路径，强调从当前基线出发逐级进阶。',
        keyTakeaway: '从当前全栈基线出发，逐级解锁进阶与专精方向。',
      },
      {
        id: 'd14-s16',
        title: 'AI 续学对话',
        subtitle: '角色:学习规划师/任务:进阶路线/栈:AI Agent',
        layout: 'prompt_template',
        instructorNotes: '演示把已有基础写进 Prompt，让 AI 给出可执行的分阶段路线。',
        keyTakeaway: '把已有基础写清楚，AI 就能给出可执行的分阶段进阶路线。',
      },
      {
        id: 'd14-s17',
        title: '制定你的个人学习计划',
        subtitle: '选方向→列资源→定节奏→打卡承诺',
        layout: 'exercise',
        instructorNotes: '现场让学员选方向并写下第一周节奏，鼓励在社群打卡承诺。',
        keyTakeaway: '选方向 + 列资源 + 定节奏 + 打卡，让学习不中断。',
      },
      {
        id: 'd14-s18',
        title: '社群与资源',
        subtitle: 'AI创新应用社/开源社区/官方文档/课程 四资源',
        layout: 'concept',
        instructorNotes: '介绍四类资源，强调社群提供同伴与反馈，文档课程提供深度。',
        keyTakeaway: '社群提供同伴与反馈，文档与课程提供深度，组合使用最有效。',
      },
      {
        id: 'd14-s19',
        title: '14 天总复盘',
        subtitle: 'Vibe Coding/全栈四层/部署/CORS/Debug 5题',
        layout: 'concept',
        instructorNotes: '让学员现场作答 5 题总结，错题对应到具体天数复习。',
        keyTakeaway: '5 题覆盖 Vibe Coding、分层、CORS、Debug、毕设评审。',
      },
      {
        id: 'd14-s20',
        title: '结营寄语：保持好奇，AI 时代未来可期！',
        subtitle: '技术会变，利用 AI 解决问题的主动性永不过时',
        layout: 'summary',
        instructorNotes: '收尾用情感升华，祝贺坚持者，预告证书颁发与社群，喊出 Keep Building。',
        keyTakeaway: '保持好奇，AI 时代未来可期，Vibe Coding Keep Building！',
      },
    ],
  },
  Render,
};