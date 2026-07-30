import { DayCourseDeck } from '../../../../types';

export const day13Deck: DayCourseDeck = {
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
        title: '优秀技术 README 的构成要素',
        subtitle: '你的第一份硬核技术名片',
        layout: 'concept',
        bullets: [
          '📌 项目 Badge 徽章: Vue 3, Spring Boot, MySQL, License',
          '🖼️ 核心功能截图展示: 首页瀑布流、发布页、个人中心',
          '🏗️ 架构图与技术选型: 前后端解耦架构说明',
          '⚡ 快速启动指南: git clone, npm install, java -jar 步骤',
        ],
      },
      {
        id: 'd13-s2',
        title: '2 分钟展示视频黄金结构',
        subtitle: '如何像产品经理一样流畅演示',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '00:00 - 00:20 痛点与定位', desc: '介绍「此刻」解决什么问题，针对什么人群' },
          { stepNumber: 2, title: '00:20 - 01:20 核心功能演示', desc: '展示注册登录、发帖、分类筛选、点赞全流程' },
          { stepNumber: 3, title: '01:20 - 01:50 AI 协作亮点', desc: '展示提示词记录与 AI Debug 解决难点的经验' },
          { stepNumber: 4, title: '01:50 - 02:00 总结与展望', desc: '结语与后续维护计划' },
        ],
      },
      {
        id: 'd13-s3',
        title: 'Day 13 任务：准备最终提交物',
        subtitle: '展示你的全栈果实',
        layout: 'exercise',
        bullets: [
          '1. 整理 Gitee 仓库根目录 README.md',
          '2. 使用 OBS 或系统自带工具录制 2 分钟演示视频',
          '3. 在项目作品集中添加该项目的跳转链接',
          '4. 预演 Day 14 结营展示',
        ],
      },
    ],
};
