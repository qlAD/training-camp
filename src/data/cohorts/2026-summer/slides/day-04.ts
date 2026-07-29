import { DayCourseDeck } from '../../../../types';

export const day04Deck: DayCourseDeck = {
    day: 4,
    stageName: '第四阶段：现代前端',
    title: 'Day 4 — Vue 3 + Vite 项目搭建 · 个人作品集首页',
    subtitle: '走进现代单页面应用 (SPA) 时代，AI 驱动设计个人作品集',
    duration: '90 分钟',
    target: '掌握 Vue 3 声明式渲染与 Vite 极速构建，用 TRAE CN 对话生成个人作品集',
    output: '个人作品集 Vue 项目 (包含导航、个人介绍与项目展示模块)',
    aiPractice: 'TRAE CN 对话 → "用 Vue 3 + Vite 生成一个个人作品集网站，包含首页、关于我、作品展示"',
    slides: [
      {
        id: 'd4-s1',
        title: '为什么现代开发选择 Vue 3 + Vite？',
        subtitle: '告别繁重 DOM 操作，拥抱组件化开发',
        layout: 'concept',
        bullets: [
          '⚡ Vite: 毫秒级热重载 (HMR)，极速开发体验',
          '🧩 组件化 (Component): 像拼积木一样搭页面 (Header, Card, Footer)',
          '🔄 响应式状态 (ref/reactive): 数据改变，界面自动更新，无需手动写 document.getElementById',
          '🧭 单页面路由 (Vue Router): 无缝页面无刷新切换',
        ],
      },
      {
        id: 'd4-s2',
        title: 'Vue 3 单文件组件 (SFC) 结构解析',
        subtitle: 'Template + Script + Style 三合一',
        layout: 'split_code',
        codeBlock: {
          language: 'vue',
          filename: 'PortfolioCard.vue',
          code: `<script setup>
import { ref } from 'vue'

const projectTitle = ref('我的全栈作品集')
const stars = ref(12)

function addStar() {
  stars.value++
}
</script>

<template>
  <div class="portfolio-card">
    <h2>{{ projectTitle }}</h2>
    <button @click="addStar">⭐ 点赞 {{ stars }}</button>
  </div>
</template>`,
        },
        keyTakeaway: '<script setup> 处理数据与逻辑，<template> 负责 HTML 模板，{{ }} 用于插值数据。',
      },
      {
        id: 'd4-s3',
        title: 'Day 4 任务：生成个人作品集首页',
        subtitle: '项目一 Phase 1 落地',
        layout: 'exercise',
        bullets: [
          '1. 使用 npm create vite@latest portfolio -- --template vue 创建项目',
          '2. 在 TRAE CN 中输入对话："请为我的 Vue 3 项目编写一个炫酷的个人作品集 Homepage"',
          '3. 包含：顶部 Navigation、Hero Banner 自我介绍、Grid 展示卡片',
          '4. 运行 npm run dev 预览并在浏览器中截图打卡',
        ],
      },
    ],
};
