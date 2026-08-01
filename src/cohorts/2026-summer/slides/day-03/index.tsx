'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import { Shot01Plain, Shot02Promises, Shot03Route, Shot04Trinity, Shot05Tags, Shot06Skeleton } from './scenes/act1-structure';
import { Shot07Makeup, Shot08Selectors, Shot09Box, Shot10Event, Shot11JSTrio, Shot12FullEvent } from './scenes/act2-style-script';
import { Shot13Profile, Shot14Task, Shot15Publish, Shot16Quiz, Shot17Summary } from './scenes/act3-ship';

const SHOTS: React.FC[] = [
  Shot01Plain,
  Shot02Promises,
  Shot03Route,
  Shot04Trinity,
  Shot05Tags,
  Shot06Skeleton,
  Shot07Makeup,
  Shot08Selectors,
  Shot09Box,
  Shot10Event,
  Shot11JSTrio,
  Shot12FullEvent,
  Shot13Profile,
  Shot14Task,
  Shot15Publish,
  Shot16Quiz,
  Shot17Summary,
];

/** Day 3 · AE 动效版演示幻灯片（每天 = 一期独立视频，仅本日私有组件，编辑器+浏览器主题从 0 设计） */
export const day03Deck: DayDeckRenderer = {
  meta: {
    day: 3,
    stageName: 'Day 3 · 给网页化妆 · HTML/CSS/JS 极速入门',
    title: '给网页化妆',
    subtitle: 'AI 全栈暑期训练营 · Day 3（AE 动效版演示）',
    duration: '60 min',
    target: '零基础学员 · 已完成 Day 1-2',
    output: '美化版个人简介页面（含样式 + 交互），提交 Gitee',
    aiPractice: '说需求让 AI 改代码 · 用 AI 排查样式/交互问题',
    slides: [
      {
        id: 'd3-s01',
        title: '冷开场：素颜的网页',
        subtitle: '还记得 Day 1 的「第一个网页」吗',
        layout: 'split_code',
        instructorNotes:
          '左代码窗右浏览器预览：白底黑字的最简 HTML。停顿后抛出：它能更好看，今天给它上妆。',
        keyTakeaway: 'HTML 素颜页面 + 今天的「化妆」目标',
      },
      {
        id: 'd3-s02',
        title: '承诺快闪：三件套登场',
        subtitle: '结构 · 化妆 · 交互',
        layout: 'cover',
        instructorNotes:
          '三张卡快闪：HTML 结构 / CSS 化妆 / JS 交互。顺势报出正式标题。',
        keyTakeaway: '今日三件套：HTML / CSS / JS',
      },
      {
        id: 'd3-s03',
        title: '今日路线',
        subtitle: '认识 → 骨架 → 上妆 → 心跳 → 合体',
        layout: 'steps',
        instructorNotes:
          '逐站点亮五站路线，让学员对节奏有预期：认识三件套 / HTML 骨架 / CSS 上妆 / JS 心跳 / 合体发布。',
        keyTakeaway: '五站路线：认识 / 骨架 / 上妆 / 交互 / 发布',
      },
      {
        id: 'd3-s04',
        title: '网页的三位一体',
        subtitle: '同一个人，三套衣服',
        layout: 'concept',
        instructorNotes:
          'HTML=骨架(结构)、CSS=妆容(样式)、JS=表情(行为)，三张卡逐张弹入。点题：三者缺一不可。',
        keyTakeaway: '网页 = 结构 + 样式 + 行为',
      },
      {
        id: 'd3-s05',
        title: '标签：网页的积木',
        subtitle: '<h1> <p> <img> 各司其职',
        layout: 'concept',
        instructorNotes:
          '标签 pill 逐颗点亮，下方预览联动出现对应内容。让学员直观看到"写了什么标签就长出什么内容"。',
        keyTakeaway: '常用标签：h1 / p / img / ul',
      },
      {
        id: 'd3-s06',
        title: 'HTML 骨架',
        subtitle: '一个页面长什么样',
        layout: 'concept',
        instructorNotes:
          '结构树逐节点点亮：html 外壳 / head 说明 / body 内容三层。点题：三层，一个页面。',
        keyTakeaway: '页面三层：html / head / body',
      },
      {
        id: 'd3-s07',
        title: 'CSS：给标签上妆',
        subtitle: 'color · background · font-size',
        layout: 'split_code',
        instructorNotes:
          '同一段代码加 4 行 CSS，右侧预览实时变蓝变大。点题：同样的 HTML，加上 CSS 就换了一身妆。',
        keyTakeaway: 'CSS 属性：颜色 / 背景 / 字号',
      },
      {
        id: 'd3-s08',
        title: '选择器三兄弟',
        subtitle: '标签 · 类 · ID',
        layout: 'concept',
        instructorNotes:
          '三张选择器代码卡逐张弹入。点题口诀：标签选一群，类选一批，ID 选一个。',
        keyTakeaway: '选择器：h1 / .card / #header',
      },
      {
        id: 'd3-s09',
        title: '盒模型与布局',
        subtitle: '每一块内容都是一个「盒子」',
        layout: 'concept',
        instructorNotes:
          '嵌套盒从外到内逐层点亮：margin / border / padding / content。点题：网页里每个元素都是一个盒子。',
        keyTakeaway: '盒模型四层：margin / border / padding / content',
      },
      {
        id: 'd3-s10',
        title: 'JS：让页面动起来',
        subtitle: '一次点击，一次响应',
        layout: 'exercise',
        instructorNotes:
          '真实可点的 demo：现场点按钮，标题换字、背景换色。点题：一次点击，一次响应。',
        keyTakeaway: 'JS = 行为：点击 → 响应',
      },
      {
        id: 'd3-s11',
        title: 'JS 三件套',
        subtitle: '变量 · 函数 · 事件',
        layout: 'split_code',
        instructorNotes:
          '五行代码逐行点亮，对应三个概念：变量存数据 / 函数写动作 / 事件等触发。',
        keyTakeaway: '变量 / 函数 / 事件',
      },
      {
        id: 'd3-s12',
        title: '一个完整交互',
        subtitle: '三行代码，整页响应',
        layout: 'split_code',
        instructorNotes:
          '左代码右 demo：三行代码实现点击换字。点题：结构归 HTML，妆归 CSS，心跳归 JS。',
        keyTakeaway: 'onclick 事件 → 修改页面内容',
      },
      {
        id: 'd3-s13',
        title: '合体：你的个人简介',
        subtitle: 'HTML + CSS + JS 合而为一',
        layout: 'steps',
        instructorNotes:
          '三块代码（index.html / style.css / script.js）依次并入，右侧预览卡渲染出完整个人简介（姓名/头像/爱好/按钮）。',
        keyTakeaway: '三件套合体 → 完整个人简介',
      },
      {
        id: 'd3-s14',
        title: '动手：照着改',
        subtitle: '三步改出你的风格',
        layout: 'exercise',
        instructorNotes:
          '学员实操环节：改颜色 / 加照片 / 加爱好列表，逐条打勾。现场跟练，卡住让 AI 排错。',
        keyTakeaway: '三步实操：改色 / 加照 / 加爱好',
      },
      {
        id: 'd3-s15',
        title: '发布：放进 Gitee',
        subtitle: 'commit 今天的新成果',
        layout: 'steps',
        instructorNotes:
          '发布按钮 → 上传进度条 → Gitee 云端仓库点亮。点题：今天的成果一键进仓库。',
        keyTakeaway: '美化版个人简介发布到 Gitee',
      },
      {
        id: 'd3-s16',
        title: '三题验收',
        subtitle: '点一点，答对才算吸收',
        layout: 'exercise',
        instructorNotes:
          '交互弹题：HTML 管什么 / CSS 管什么 / JS 管什么。答错回到对应镜头复习。',
        keyTakeaway: '三题验收：结构 / 样式 / 行为',
      },
      {
        id: 'd3-s17',
        title: '总结预告：作品集开篇',
        subtitle: 'DAY 4 · Vue 3 + Vite 项目搭建',
        layout: 'summary',
        instructorNotes:
          '四张收获卡（会写结构/会上妆/会做交互/发布上线）→ DAY 4 预告卡推入 → 收尾 Slogan："Structure. Style. Spark. — Your page, your voice."',
        keyTakeaway: '今日四收获 + 明日预告：Vue 3 + Vite 作品集',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
