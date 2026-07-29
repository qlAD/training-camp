import { DayCourseDeck } from '../../../../types';

export const day05Deck: DayCourseDeck = {
    day: 5,
    stageName: '第四阶段：现代前端',
    title: 'Day 5 — Element Plus 组件库 · 帖子发布表单',
    subtitle: '集成高颜值 UI 组件库，打造「此刻」社区的前端核心表单',
    duration: '90 分钟',
    target: '掌握 Element Plus 的引入与 Form 组件，生成带图片上传与分类选择的帖子发布页',
    output: '帖子发布页面 (「此刻」兴趣社区的前端基础表单页面)',
    aiPractice: 'TRAE CN 对话 → "用 Vue 3 + Element Plus 生成一个帖子发布页面"',
    slides: [
      {
        id: 'd5-s1',
        title: '为什么不需要自己造轮子？Element Plus',
        subtitle: '企业级 Vue 3 组件库的威力',
        layout: 'comparison',
        comparison: {
          leftTitle: '原生手写表单',
          leftItems: [
            '耗费数小时写 CSS 样式与对齐',
            '下拉框、日期选择器、上传控件极难实现',
            '移动端与响应式适配麻烦',
          ],
          rightTitle: 'Element Plus 组件库',
          rightItems: [
            '开箱即用的 <el-button> <el-form> <el-select>',
            '内置优雅动画与一致的设计规范',
            '几行代码搞定复杂表单校验与图片上传控件',
          ],
        },
      },
      {
        id: 'd5-s2',
        title: '帖子发布表单的代码结构',
        subtitle: 'Vue 3 + Element Plus 快速组装',
        layout: 'split_code',
        codeBlock: {
          language: 'vue',
          filename: 'CreatePost.vue',
          code: `<template>
  <el-form :model="postForm" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="postForm.title" placeholder="分享此刻的想法..." />
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="postForm.category">
        <el-option label="日常" value="daily" />
        <el-option label="二次元" value="anime" />
        <el-option label="游戏" value="game" />
      </el-select>
    </el-form-item>
    <el-button type="primary" @click="submitPost">发布此刻</el-button>
  </el-form>
</template>`,
        },
      },
      {
        id: 'd5-s3',
        title: 'Day 5 实操：完成帖子发布界面',
        subtitle: '为「此刻」社区做好前端准备',
        layout: 'exercise',
        bullets: [
          '1. 在 Vue 3 项目中运行 npm install element-plus @element-plus/icons-vue',
          '2. 用 TRAE CN 生成完整的 CreatePost.vue 组件',
          '3. 完善文本框、图片上传占位区、分类标签与提交按钮',
          '4. 截图作品集与发布页打卡提交',
        ],
      },
    ],
};
