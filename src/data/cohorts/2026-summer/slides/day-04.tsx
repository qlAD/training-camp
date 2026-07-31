'use client';

import React from 'react';
import { DayDeckRenderer } from '../../../../types';
import {
  CoverSlide,
  AgendaSlide,
  ConceptSlide,
  ComparisonSlide,
  CodeBoxSlide,
  TerminalSlide,
  PromptSlide,
  ExerciseSlide,
  SummarySlide,
  QuizSlide,
} from './shared/layouts';
import { ComponentPreviewWall } from './shared/effects';
import { ReactivityAnimation, TemplateRenderAnimation } from './shared/animations';

// ──────────────────────────── #1 Cover ────────────────────────────
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第四阶段：现代前端"
    badgeText="课程讲义"
    title="Vue 3 + Vite 现代前端"
    subtitle="从原生 JS 跃迁到现代框架，组件化构建作品集首页"
    bullets={[
      '框架化开发：从命令式 DOM 操作到声明式渲染',
      '组件化构建：像拼积木一样组装页面',
      '落地作品集首页：Vue 3 + Vite + AI 协作',
    ]}
  />
);

// ──────────────────────────── #2 Agenda ────────────────────────────
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 4 学习路线图"
    subtitle="Vue 认知 → Vite 搭建 → SFC → 组件 → 作品集首页"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '认知 Vue 3', desc: '理解框架价值与核心特性，建立组件化思维' },
      { title: '搭建 Vite 项目', desc: '用 npm create vite 创建工程化骨架' },
      { title: '掌握 SFC 三段式', desc: 'template / script / style 协作开发' },
      { title: '组件与 props', desc: '拆分组件并通过 props 完成父子通信' },
      { title: '落地作品集首页', desc: 'AI 对话生成 hero + 项目列表 + 技能标签' },
    ]}
  />
);

// ──────────────────────────── #3 Concept：为什么用框架 ────────────────────────────
const Slide03: React.FC = () => (
  <ConceptSlide
    title="为什么用框架？"
    subtitle="原生 JS 的四大痛点，恰好对应框架的四大价值"
    badgeText="核心概念"
    bullets={[
      '痛点：原生 JS 手动操作 DOM，代码随页面规模膨胀且难以维护',
      '复用：组件化把 UI 拆成可复用积木（Header / Card / Footer），一次编写多处使用',
      '响应式：数据驱动视图，数据变化自动更新 UI，告别 getElementById',
      '生态：路由、状态管理、UI 库、构建工具配套齐全，专注业务而非造轮子',
    ]}
    keyTakeaway="框架不是“更难的原生 JS”，而是把重复劳动交给工具，让你专注于业务本身。"
  />
);

// ──────────────────────────── #4 Comparison：原生 JS vs Vue ────────────────────────────
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="原生 JS vs Vue 3"
    subtitle="命令式操作 DOM vs 声明式描述 UI"
    leftLabel="传统方案"
    rightLabel="推荐方案"
    left={{
      title: '原生 JavaScript',
      items: [
        '手动 document.querySelector + innerHTML 拼接视图',
        '状态与视图分离，任何改动都需手动同步 DOM',
        'UI 几乎零复用，复制粘贴成风、维护成本高',
        '工程化需自行拼装 webpack / babel / 热更新',
      ],
    }}
    right={{
      title: 'Vue 3 + Vite',
      items: [
        '声明式渲染：写模板，Vue 自动更新 DOM',
        '响应式数据驱动视图，状态即视图、自动同步',
        '组件化拼装，Header / Card 随处复用',
        'Vite 开箱即用，HMR + 生产构建一体化',
      ],
    }}
    keyTakeaway="从“命令式操作 DOM”到“声明式描述 UI”，是前端生产力的关键跃迁。"
  />
);

// ──────────────────────────── #5 Concept：Vue 3 核心特性 ────────────────────────────
const Slide05: React.FC = () => (
  <ConceptSlide
    title="Vue 3 核心特性"
    subtitle="响应式 / 组合式 API / SFC / 虚拟 DOM 四位一体"
    badgeText="核心特性"
    bullets={[
      '响应式系统：ref / reactive 让数据变化自动同步到视图',
      '组合式 API (Composition API)：用 setup() 或 <script setup> 按逻辑组织代码，复用更灵活',
      '单文件组件 (SFC)：.vue 文件把 template / script / style 三段合一，结构清晰',
      '虚拟 DOM：通过 diff 算法最小化真实 DOM 操作，渲染高效',
    ]}
    keyTakeaway="Vue 3 = 响应式数据 + 组合式 API + SFC + 虚拟 DOM，四位一体。"
  />
);

// ──────────────────────────── #6 Animation：响应式数据流 ────────────────────────────
const Slide06: React.FC = () => (
  <ReactivityAnimation
    state={{ label: 'count (ref)', value: '0' }}
    views={[
      { label: '<h1>{{ count }}</h1>' },
      { label: '<button @click="count++">赞 {{ count }}</button>' },
      { label: '<span>已有 {{ count }} 人点赞</span>' },
    ]}
    steps={[
      { label: '用户点击按钮', action: 'set', desc: 'count.value++ → 响应式数据被修改' },
      { label: '系统追踪依赖', action: 'notify', desc: 'Vue 通知所有依赖 count 的视图' },
      { label: '视图自动更新', action: 'update', desc: '引用 count 的 DOM 同步刷新，无需手动操作' },
    ]}
  />
);

// ──────────────────────────── #7 Concept：Vite 构建工具 ────────────────────────────
const Slide07: React.FC = () => (
  <ConceptSlide
    title="Vite 构建工具"
    subtitle="下一代前端构建工具，让开发节奏跟上你的思路"
    badgeText="构建工具"
    bullets={[
      '快速冷启动：基于浏览器原生 ESM，按需编译，秒级启动无需打包',
      '即时 HMR：修改文件后毫秒级热替换，保留页面状态',
      '原生 ESM：开发期直接以 ES 模块加载，告别繁琐打包步骤',
      '轻量灵活：配置简洁、插件生态丰富，生产构建用 Rollup 输出优化产物',
    ]}
    keyTakeaway="Vite 把“等构建”的时间省下来，让你专注写代码本身。"
  />
);

// ──────────────────────────── #8 Terminal：创建 Vite 项目 ────────────────────────────
const Slide08: React.FC = () => (
  <TerminalSlide
    title="创建 Vite 项目"
    subtitle="四条命令，搭起 Vue 3 工程骨架"
    commands={[
      {
        cmd: 'npm create vite@latest portfolio',
        comment: '创建 Vite 项目（交互式选择）',
        expected:
          '✔ Project name: portfolio\n✔ Select a framework: » Vue\n✔ Select a variant: » TypeScript',
      },
      { cmd: 'cd portfolio', comment: '进入项目目录' },
      {
        cmd: 'npm install',
        comment: '安装依赖',
        expected: 'added 245 packages in 12s',
      },
      {
        cmd: 'npm run dev',
        comment: '启动开发服务器',
        expected: 'VITE v5.x  ready in 800 ms\n➜  Local:   http://localhost:5173/',
      },
    ]}
    takeaway="Vite 冷启动通常 < 1 秒，浏览器打开 http://localhost:5173 即可预览。"
  />
);

// ──────────────────────────── #9 CodeBox：项目结构解析 ────────────────────────────
const Slide09: React.FC = () => (
  <CodeBoxSlide
    title="项目结构解析"
    subtitle="Vite + Vue 3 项目的标准骨架"
    filename="portfolio/  (目录结构)"
    language="text"
    showLineNumbers={false}
    code={`portfolio/
├── index.html              # HTML 入口
├── package.json            # 依赖与脚本
├── vite.config.ts          # Vite 配置
├── public/                 # 静态资源（不参与构建）
│   └── vite.svg
└── src/
    ├── main.ts             # 应用入口：createApp(App).mount('#app')
    ├── App.vue             # 根组件
    ├── components/         # 业务组件目录
    │   ├── ProjectCard.vue
    │   └── SkillTag.vue
    └── assets/             # 参与构建的资源
        └── logo.svg`}
    takeaway="src/ 是主战场：main.ts 挂载应用，App.vue 是根组件，components/ 放业务组件。"
  />
);

// ──────────────────────────── #10 CodeBox：SFC 三段式 ────────────────────────────
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="单文件组件 (SFC)"
    subtitle="template + script + style 三段合一"
    filename="PortfolioCard.vue"
    language="vue"
    highlightLines={[2, 9, 17]}
    code={`<script setup>
import { ref } from 'vue'

const title = ref('个人作品集')
const stars = ref(12)

function addStar() {
  stars.value++
}
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button @click="addStar">⭐ {{ stars }}</button>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  border-radius: 12px;
  background: #1e293b;
}
h3 { color: #f1f5f9; }
</style>`}
    takeaway="<script setup> 写逻辑、<template> 写结构、<style scoped> 写样式，三段协作。"
  />
);

// ──────────────────────────── #11 Animation：模板语法渲染 ────────────────────────────
const Slide11: React.FC = () => (
  <TemplateRenderAnimation
    template={`<div class="card">
  <h2>{{ title }}</h2>
  <p>作者：{{ author }}</p>
  <span>⭐ {{ stars }}</span>
</div>`}
    data={[
      { key: 'title', value: 'Vue 3 作品集' },
      { key: 'author', value: '小明' },
      { key: 'stars', value: '128' },
    ]}
    steps={[
      { label: '模板定义', highlight: 'template', desc: '使用 {{ }} 占位符标记插值位置' },
      { label: '数据绑定', highlight: 'data', desc: '响应式数据与占位符键名一一对应' },
      { label: '渲染结果', highlight: 'rendered', desc: '占位符被替换为真实数据并写入 DOM' },
    ]}
  />
);

// ──────────────────────────── #12 CodeBox：指令 v-if / v-for ────────────────────────────
const Slide12: React.FC = () => (
  <CodeBoxSlide
    title="指令：v-if 与 v-for"
    subtitle="条件渲染 + 列表渲染，Vue 模板两大核心指令"
    filename="Directives.vue"
    language="vue"
    highlightLines={[11, 12, 16, 17]}
    code={`<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(true)
const projects = ref([
  { id: 1, name: '作品集网站', stars: 12 },
  { id: 2, name: '天气预报', stars: 8 },
  { id: 3, name: '记账本', stars: 5 },
])
</script>

<template>
  <!-- v-if：条件渲染 -->
  <p v-if="isLoggedIn">欢迎回来，开发者！</p>
  <p v-else>请先登录</p>

  <!-- v-for：列表渲染，必须配合 :key -->
  <ul>
    <li v-for="project in projects" :key="project.id">
      {{ project.name }} — ⭐ {{ project.stars }}
    </li>
  </ul>
</template>`}
    takeaway="v-if 控制是否渲染，v-for 控制循环渲染列表，且必须用 :key 绑定唯一标识。"
  />
);

// ──────────────────────────── #13 CodeBox：组件 props 传值 ────────────────────────────
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="组件 props 传值"
    subtitle="defineProps 声明接收属性，父组件通过属性传值"
    filename="ProjectCard.vue + App.vue"
    language="vue"
    highlightLines={[3, 4, 5, 6, 15, 16]}
    code={`<!-- ProjectCard.vue（子组件） -->
<script setup>
defineProps({
  title: String,
  stars: { type: Number, default: 0 },
})
</script>

<template>
  <div class="card">
    <h4>{{ title }}</h4>
    <span>⭐ {{ stars }}</span>
  </div>
</template>

<!-- App.vue（父组件） -->
<script setup>
import ProjectCard from './components/ProjectCard.vue'
</script>

<template>
  <ProjectCard title="作品集网站" :stars="12" />
  <ProjectCard title="天气预报" :stars="8" />
</template>`}
    takeaway="子组件用 defineProps 声明入参，父组件在标签上写属性传值；动态值用 :prop 绑定。"
  />
);

// ──────────────────────────── #14 Effect：组件化效果展示 ────────────────────────────
const Slide14: React.FC = () => (
  <ComponentPreviewWall
    title="组件化效果：像拼积木一样搭页面"
    columns={3}
    components={[
      {
        name: 'AppHeader',
        desc: '顶部导航栏组件',
        tone: 'indigo',
        preview: (
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 rounded bg-indigo-500/60" />
            <div className="ml-auto flex gap-1">
              <div className="h-2 w-6 rounded bg-slate-500/60" />
              <div className="h-2 w-6 rounded bg-slate-500/60" />
              <div className="h-2 w-6 rounded bg-slate-500/60" />
            </div>
          </div>
        ),
      },
      {
        name: 'HeroCard',
        desc: '英雄区介绍卡片',
        tone: 'emerald',
        preview: (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-500/60" />
            <div className="flex-1 space-y-1">
              <div className="h-2 w-20 rounded bg-slate-400/60" />
              <div className="h-2 w-14 rounded bg-slate-500/40" />
            </div>
          </div>
        ),
      },
      {
        name: 'ProjectGrid',
        desc: '项目列表网格',
        tone: 'amber',
        preview: (
          <div className="grid grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-5 rounded bg-amber-500/50" />
            ))}
          </div>
        ),
      },
      {
        name: 'SkillTag',
        desc: '技能标签组件',
        tone: 'violet',
        preview: (
          <div className="flex flex-wrap gap-1">
            <div className="h-3 w-8 rounded-full bg-violet-500/60" />
            <div className="h-3 w-10 rounded-full bg-violet-500/40" />
            <div className="h-3 w-6 rounded-full bg-violet-500/50" />
          </div>
        ),
      },
      {
        name: 'ContactForm',
        desc: '联系表单组件',
        tone: 'cyan',
        preview: (
          <div className="space-y-1">
            <div className="h-3 w-full rounded bg-cyan-500/40" />
            <div className="h-3 w-full rounded bg-cyan-500/40" />
            <div className="h-4 w-12 rounded bg-cyan-500/70" />
          </div>
        ),
      },
      {
        name: 'AppFooter',
        desc: '底部页脚组件',
        tone: 'rose',
        preview: (
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 rounded bg-rose-500/50" />
            <div className="ml-auto h-2 w-6 rounded bg-slate-500/50" />
          </div>
        ),
      },
    ]}
  />
);

// ──────────────────────────── #15 Prompt：生成作品集首页 ────────────────────────────
const Slide15: React.FC = () => (
  <PromptSlide
    title="生成作品集首页 Prompt"
    subtitle="结构化提示词，让 AI 一次给到可用代码"
    role="你是一位资深 Vue 3 前端工程师"
    task="帮我生成一个个人作品集首页，包含 Hero 自我介绍区、项目列表网格、技能标签云"
    stack="Vue 3 + Vite + TypeScript，使用 <script setup> 组合式 API"
    constraints="组件拆分清晰，样式现代简洁；响应式数据用 ref，列表用 v-for + :key"
    outputFormat="一个完整的 App.vue 文件，必要时附 components/ 子组件代码"
    template="用 Vue 3 + Vite 帮我生成一个个人作品集首页，包含 hero 区、项目列表、技能标签，使用 <script setup> 和 ref，组件拆分清晰。"
    takeaway="结构化 Prompt = 角色 + 任务 + 技术栈 + 约束 + 输出格式，AI 一次给到可用代码。"
  />
);

// ──────────────────────────── #16 CodeBox：首页布局实现 ────────────────────────────
const Slide16: React.FC = () => (
  <CodeBoxSlide
    title="首页布局实现"
    subtitle="hero + 项目列表 + 技能标签，一个 SFC 搞定"
    filename="App.vue"
    language="vue"
    highlightLines={[5, 6, 8, 20, 27, 30]}
    code={`<script setup>
import { ref } from 'vue'

const name = ref('小明')
const title = ref('前端开发工程师')
const skills = ref(['Vue 3', 'TypeScript', 'Vite', 'Node.js', 'CSS3'])

const projects = ref([
  { id: 1, name: '个人作品集', desc: '基于 Vue 3 + Vite 的作品展示', stars: 24 },
  { id: 2, name: '天气预报', desc: '接入开放 API 的天气应用', stars: 18 },
  { id: 3, name: '记账本', desc: '本地持久化的记账小工具', stars: 9 },
])
</script>

<template>
  <header class="hero">
    <h1>{{ name }}</h1>
    <p>{{ title }}</p>
    <div class="tags">
      <span v-for="skill in skills" :key="skill" class="tag">{{ skill }}</span>
    </div>
  </header>

  <section class="projects">
    <h2>项目作品</h2>
    <div class="grid">
      <article v-for="p in projects" :key="p.id" class="card">
        <h3>{{ p.name }}</h3>
        <p>{{ p.desc }}</p>
        <span>⭐ {{ p.stars }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.hero { text-align: center; padding: 48px 16px; }
.tags { display: flex; gap: 8px; justify-content: center; margin-top: 12px; }
.tag { padding: 4px 12px; border-radius: 999px; background: #6366f1; color: #fff; font-size: 12px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.card { padding: 16px; border-radius: 12px; background: #1e293b; }
</style>`}
    takeaway="一个 App.vue 即可包含数据、模板、样式；后续可拆出 HeroCard / ProjectCard 子组件复用。"
  />
);

// ──────────────────────────── #17 Exercise：完成作品集首页 ────────────────────────────
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="练习：完成作品集首页"
    subtitle="从创建项目到本地预览，全流程打卡"
    tasks={[
      '使用 npm create vite@latest portfolio -- --template vue 创建 Vue 3 + TS 项目',
      '在 TRAE CN 中输入 Prompt：“用 Vue 3 + Vite 帮我生成一个个人作品集首页，含 hero、项目列表、技能标签”',
      '将生成的代码贴入 App.vue，按需拆分 components/ 子组件',
      '运行 npm run dev 在浏览器预览效果，截图发企微群打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评！"
  />
);

// ──────────────────────────── #18 Effect：作品集首页预览 ────────────────────────────
const Slide18: React.FC = () => (
  <ComponentPreviewWall
    title="作品集首页预览"
    columns={2}
    components={[
      {
        name: 'Hero 区',
        desc: '姓名 + 标语 + 技能标签云',
        tone: 'indigo',
        preview: (
          <div className="flex flex-col items-center gap-1.5 py-2">
            <div className="h-8 w-8 rounded-full bg-indigo-500/70" />
            <div className="h-2.5 w-24 rounded bg-slate-300/80" />
            <div className="h-2 w-16 rounded bg-slate-500/60" />
            <div className="mt-1 flex gap-1">
              <div className="h-3 w-8 rounded-full bg-indigo-500/60" />
              <div className="h-3 w-10 rounded-full bg-indigo-500/40" />
              <div className="h-3 w-6 rounded-full bg-indigo-500/50" />
            </div>
          </div>
        ),
      },
      {
        name: '项目列表',
        desc: '3 列网格展示作品卡片',
        tone: 'emerald',
        preview: (
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 rounded bg-emerald-500/40 flex flex-col justify-end p-1"
              >
                <div className="h-1.5 w-3/4 rounded bg-slate-300/70" />
                <div className="mt-0.5 h-1.5 w-1/2 rounded bg-slate-400/60" />
              </div>
            ))}
          </div>
        ),
      },
      {
        name: '技能标签',
        desc: 'Vue / TS / Vite / Node.js 标签云',
        tone: 'amber',
        preview: (
          <div className="flex flex-wrap gap-1.5 py-1">
            <div className="h-3.5 w-10 rounded-full bg-amber-500/70" />
            <div className="h-3.5 w-14 rounded-full bg-amber-500/50" />
            <div className="h-3.5 w-8 rounded-full bg-amber-500/60" />
            <div className="h-3.5 w-12 rounded-full bg-amber-500/40" />
            <div className="h-3.5 w-9 rounded-full bg-amber-500/50" />
          </div>
        ),
      },
      {
        name: '联系方式',
        desc: '邮箱 + GitHub / 微博 链接',
        tone: 'violet',
        preview: (
          <div className="flex items-center gap-2 py-1">
            <div className="h-3 w-24 rounded bg-violet-500/60" />
            <div className="h-3 w-16 rounded bg-violet-500/40" />
            <div className="ml-auto h-3 w-10 rounded bg-violet-500/70" />
          </div>
        ),
      },
    ]}
  />
);

// ──────────────────────────── #19 Quiz：知识检查 ────────────────────────────
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 4 知识检查"
    subtitle="四道题，检验今日 Vue 3 核心知识"
    questions={[
      {
        question: '下列哪一项不是 Vue 3 的核心特性？',
        options: [
          '响应式系统 (ref / reactive)',
          '组合式 API (Composition API)',
          '单文件组件 (SFC)',
          'jQuery 风格的链式 DOM 操作',
        ],
        answer: 3,
        explanation: 'Vue 3 采用声明式渲染与响应式系统，并非 jQuery 风格的命令式 DOM 操作。',
      },
      {
        question: '单文件组件 (SFC) 的三段式结构是？',
        options: [
          'template / script / style',
          'html / css / js',
          'header / body / footer',
          'setup / render / mount',
        ],
        answer: 0,
        explanation: '.vue 文件由 <template>、<script setup>、<style> 三段组成。',
      },
      {
        question: '关于 v-if 与 v-for，描述正确的是？',
        options: [
          'v-if 控制列表渲染',
          'v-for 控制条件渲染',
          'v-if 控制条件渲染，v-for 控制列表渲染',
          'v-for 只能渲染数字',
        ],
        answer: 2,
        explanation: 'v-if 决定元素是否渲染，v-for 用于循环渲染列表，且需配合 :key。',
      },
      {
        question: '父组件向子组件传递数据，子组件应使用？',
        options: ['defineProps', 'defineEmits', 'ref', 'v-model'],
        answer: 0,
        explanation: 'defineProps 声明子组件接收的属性；defineEmits 用于子组件向父组件抛出事件。',
      },
    ]}
  />
);

// ──────────────────────────── #20 Summary ────────────────────────────
const Slide20: React.FC = () => (
  <SummarySlide
    dayNumber={4}
    title="今日总结：从原生到现代前端"
    subtitle="组件化思维 + Vite 工程 + AI 协作，三步跨入现代前端"
    takeaways={[
      '框架价值：组件复用 + 响应式数据 + 完整生态，告别命令式 DOM',
      'Vue 3 核心：响应式 / 组合式 API / SFC / 虚拟 DOM 四位一体',
      'Vite 工程：秒级冷启动 + HMR，开发体验拉满',
      'SFC 三段式：template 写结构、script 写逻辑、style 写样式',
      '组件通信：defineProps 接收数据，父组件通过属性传值',
      'AI 落地：结构化 Prompt 直接生成作品集首页代码',
    ]}
    nextDayPreview="Day 5 — Element Plus 组件库：用现成 UI 组件高效搭建帖子发布表单。"
  />
);

// ──────────────────────────── Render 路由 ────────────────────────────
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

export const day04Deck: DayDeckRenderer = {
  meta: {
    day: 4,
    stageName: '第四阶段：现代前端',
    title: 'Day 4 — Vue 3 + Vite 项目搭建 · 个人作品集首页',
    subtitle: '从原生 JS 跃迁到现代框架，组件化构建作品集首页',
    duration: '90 分钟',
    target: '掌握 Vue 3 + Vite 项目搭建、SFC 三段式、响应式数据与组件 props',
    output: '基于 Vue 3 + Vite 的个人作品集首页（含 hero、项目列表、技能标签）',
    aiPractice: 'TRAE CN 对话 → "用 Vue 3 + Vite 帮我生成一个个人作品集首页"',
    slides: [
      { id: 'd4-s1', title: 'Vue 3 + Vite 现代前端', subtitle: '框架化开发 / 组件化 / 作品集首页', layout: 'cover' },
      { id: 'd4-s2', title: 'Day 4 学习路线图', subtitle: 'Vue 认知 → Vite 搭建 → SFC → 组件 → 作品集', layout: 'steps' },
      { id: 'd4-s3', title: '为什么用框架？', subtitle: '原生痛点 / 组件复用 / 响应式 / 生态', layout: 'concept' },
      { id: 'd4-s4', title: '原生 JS vs Vue 3', subtitle: '手动 DOM vs 声明式渲染 / 零复用 vs 组件化', layout: 'comparison' },
      { id: 'd4-s5', title: 'Vue 3 核心特性', subtitle: '响应式 / 组合式 API / SFC / 虚拟 DOM', layout: 'concept' },
      { id: 'd4-s6', title: '响应式数据流动效', subtitle: '数据变化 → 自动更新视图 闭环', layout: 'concept' },
      { id: 'd4-s7', title: 'Vite 构建工具', subtitle: '快速冷启动 / HMR / ESM / 轻量', layout: 'concept' },
      { id: 'd4-s8', title: '创建 Vite 项目', subtitle: 'npm create vite@latest + 选 Vue + npm install', layout: 'split_code' },
      { id: 'd4-s9', title: '项目结构解析', subtitle: 'src/main.ts / App.vue / components/ 树结构', layout: 'split_code' },
      { id: 'd4-s10', title: '单文件组件 SFC', subtitle: 'template / script / style 三段式', layout: 'split_code' },
      { id: 'd4-s11', title: '模板语法渲染动效', subtitle: '{{ }} 插值 / v-bind 绑定动效', layout: 'concept' },
      { id: 'd4-s12', title: '指令 v-if / v-for', subtitle: '条件渲染 + 列表渲染 示例', layout: 'split_code' },
      { id: 'd4-s13', title: '组件 props 传值', subtitle: 'defineProps + 父子通信', layout: 'split_code' },
      { id: 'd4-s14', title: '组件化效果展示', subtitle: '多组件卡片墙', layout: 'concept' },
      { id: 'd4-s15', title: '生成作品集首页 Prompt', subtitle: '角色 / 任务 / 栈 / 约束 / 输出', layout: 'prompt_template' },
      { id: 'd4-s16', title: '首页布局实现', subtitle: 'hero + 项目列表 + 技能标签 完整代码', layout: 'split_code' },
      { id: 'd4-s17', title: '完成作品集首页', subtitle: '创建项目 → 生成首页 → 本地预览 → 打卡', layout: 'exercise' },
      { id: 'd4-s18', title: '预览效果展示', subtitle: '作品集首页截图墙', layout: 'concept' },
      { id: 'd4-s19', title: 'Day 4 知识检查', subtitle: 'Vue 特性 / SFC 三段 / v-if / v-for / props', layout: 'concept' },
      { id: 'd4-s20', title: '今日总结', subtitle: '现代前端入门 + 明日 Element Plus 组件库', layout: 'summary' },
    ],
  },
  Render,
};