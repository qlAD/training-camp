'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import {
  Shot01ColdOpen,
  Shot02JourneyMap,
  Shot03Overview,
  Shot04Software,
  Shot05RNDualFlow,
  Shot06MindsetCompare,
} from './scenes/act1-opener';
import {
  Shot07Projects,
  Shot08ProjectTech,
  Shot09ParadigmShift,
  Shot10AIRoles,
  Shot11FlowLoop,
  Shot12PromptTemplate,
  Shot13DemoPreview,
} from './scenes/act2-build';
import {
  Shot14HandsOn,
  Shot15Pitfalls,
  Shot16Homework,
  Shot17Summary,
} from './scenes/act3-finish';

const SHOTS: React.FC[] = [
  Shot01ColdOpen,
  Shot02JourneyMap,
  Shot03Overview,
  Shot04Software,
  Shot05RNDualFlow,
  Shot06MindsetCompare,
  Shot07Projects,
  Shot08ProjectTech,
  Shot09ParadigmShift,
  Shot10AIRoles,
  Shot11FlowLoop,
  Shot12PromptTemplate,
  Shot13DemoPreview,
  Shot14HandsOn,
  Shot15Pitfalls,
  Shot16Homework,
  Shot17Summary,
];

export const day01Deck: DayDeckRenderer = {
  meta: {
    day: 1,
    stageName: 'Day 1 · 开营认知与 AI 编码入门',
    title: '当我们谈论 Vibe Coding 时，我们在谈论什么',
    subtitle: 'AI 全栈暑期训练营 · Day 1',
    duration: '50 min',
    target: '零基础学员 · 无需编程经验',
    output: '一个 AI 生成的个人作品集主页（HTML）',
    aiPractice: '把需求说清楚 + Vibe Coding 完整流程',
    slides: [
      {
        id: 'd1-s01',
        title: '冷开场：先别急着敲代码',
        subtitle: '今天，我们先把学习地图画清楚',
        layout: 'cover',
        instructorNotes:
          '抛出三个钩子问题：14天能学到什么？AI辅助编程是不是噱头？零基础真能做出线上项目吗？语气要轻松，像视频开场旁白。',
        keyTakeaway: 'Day 1 不敲代码，先搞清楚为什么学、学什么、怎么学',
      },
      {
        id: 'd1-s02',
        title: '14天旅程全景',
        subtitle: '打地基 → 起高楼 → 封顶交付',
        layout: 'concept',
        instructorNotes:
          '三阶段路线图逐段点亮，讲清每个阶段的交付物和学习目标。让学员心里有数：哪天要交什么，哪天是硬骨头。',
        keyTakeaway: '14天三阶段：打地基(D1-3) → 起高楼(D4-10) → 封顶交付(D11-14)',
      },
      {
        id: 'd1-s03',
        title: '训练营全景解读',
        subtitle: '八大技术模块 · 考核标准 · 评优机制',
        layout: 'steps',
        instructorNotes:
          '八大技术模块依次点亮：①认知打底 ②工具链 ③前端三剑客 ④前端工程化(Vue3) ⑤后端(SpringBoot) ⑥数据库(MySQL) ⑦部署上云 ⑧复盘归档。同时讲解考核标准、评优奖励机制、阶段性交付产出要求。明确前置知识基础与电脑硬件/软件配置最低标准。强调每日小交付是14天大项目的砖。',
        keyTakeaway: '每日小交付是14天大项目的砖，别等Day13才发现欠了作业',
      },
      {
        id: 'd1-s04',
        title: '软件到底是什么',
        subtitle: '需求 + 组织 + 代码数据',
        layout: 'concept',
        instructorNotes:
          '软件三要素三角可视化：需求是起点（没有需求就是自嗨），组织是关键（一万行堆一起叫灾难），代码数据是产物。把抽象概念讲得朴素。',
        keyTakeaway: '软件 = 满足需求的、被组织起来的代码和数据',
      },
      {
        id: 'd1-s05',
        title: '研发四阶段流程',
        subtitle: '需求 → 设计 → 开发 → 测试上线',
        layout: 'steps',
        instructorNotes:
          '四阶段流水线点亮，每阶段对应一个岗位：产品经理/设计师/工程师/测试运维。强调训练营里你会一人分饰多角，体会每个岗位的痛点。',
        keyTakeaway: '研发四阶段 + 四大岗位，理解协作边界',
      },
      {
        id: 'd1-s06',
        title: '程序员 vs 软件工程师',
        subtitle: '思维差异：能不能做 vs 该不该做',
        layout: 'comparison',
        instructorNotes:
          '左卡"普通程序员"：我能不能写出来？右卡"软件工程师"：该不该做？会不会塌？半年后还能改？落点：训练营练的是后者的思维。',
        keyTakeaway: '先想清楚，再动手；交付要规范，过程可追溯',
      },
      {
        id: 'd1-s07',
        title: '两个项目一根主线',
        subtitle: '个人作品集 + 「此刻」图文兴趣社区',
        layout: 'concept',
        instructorNotes:
          '双项目卡片展示：作品集（小而全，陪你走完全程）和「此刻」社区（重头戏，对标小红书）。说清两个项目如何贯穿14天。',
        keyTakeaway: '两个项目 + 一条 Vibe Coding 主线',
      },
      {
        id: 'd1-s08',
        title: '每个阶段都有交付物',
        subtitle: '项目里程碑与技术路线',
        layout: 'steps',
        instructorNotes:
          '用路线图展示两个项目在各阶段的交付物：Day1 AI生成主页→Day3拆多文件→Day4 Vue工程→Day6 后端建库→Day8 第一轮联调→Day11 部署上公网。强调每个阶段都有可运行的交付物，不是听完就算了。',
        keyTakeaway: '每个阶段都有可运行的交付物，不是听完就算了',
      },
      {
        id: 'd1-s09',
        title: 'Vibe Coding：开发新范式',
        subtitle: '传统路径 vs AI 时代路径',
        layout: 'comparison',
        instructorNotes:
          '上半部分展示传统路径：学语法→学框架→做项目（大半年）。下半部分展示Vibe Coding路径：描述需求→AI生成→理解调整→验证（数天）。核心变化：学习起点从"背语法"变成"提需求"。',
        keyTakeaway: 'Vibe Coding 把路径压扁了，但要求你会提需求、会审代码',
      },
      {
        id: 'd1-s10',
        title: 'AI 不会替你做的三件事',
        subtitle: '判断需求 · 看懂代码 · 拼装系统',
        layout: 'concept',
        instructorNotes:
          '三张卡片依次点亮：1.判断需求合不合理（AI让它写它就写）；2.看懂它写的代码（看不懂就没法改）；3.把片段拼成系统（AI擅长片段不擅长统筹）。',
        keyTakeaway: '你始终是主驾驶，AI是副驾驶',
      },
      {
        id: 'd1-s11',
        title: '想法 → 成果的循环',
        subtitle: '人机协作闭环',
        layout: 'steps',
        instructorNotes:
          '闭环圆环点亮：想法→Prompt→AI→审核→产出→迭代。中心浮现∞。点题：开发不是直线，是不断迭代的循环。',
        keyTakeaway: '协作闭环：想法 → Prompt → AI → 审核 → 产出 → 迭代',
      },
      {
        id: 'd1-s12',
        title: '把需求说清楚',
        subtitle: '把需求写明白，AI 才能写得好',
        layout: 'prompt_template',
        instructorNotes:
          '五张要素卡依次点亮（角色/任务/栈/约束/输出），下方打字机输出完整提示词。注意：Day 1 只是把需求说清楚的小贴士，不强调"五要素"术语（Day 3 才系统讲"提示词四要素"）。现场带学员用这些要素写一条自己的提示词。',
        keyTakeaway: '把需求说清楚：角色 + 任务 + 技术栈 + 约束 + 输出',
      },
      {
        id: 'd1-s13',
        title: '你描述，它干活',
        subtitle: '从提示词到页面，5分钟',
        layout: 'split_code',
        instructorNotes:
          '三栏演示：左屏提示词打字机输出→中间AI脉冲思考→右屏页面逐行渲染。让学员直观感受"描述即生成"，为动手环节铺垫。',
        keyTakeaway: '一句需求换一个页面，Vibe Coding 的核心节奏',
      },
      {
        id: 'd1-s14',
        title: '今天的实操：四步走一遍',
        subtitle: '想清楚 → 观察 → 改进 → 归档',
        layout: 'steps',
        instructorNotes:
          '四步依次点亮：1.想清楚要什么（别上来就"做个主页"）；2.观察AI产出（读一遍，不懂就问）；3.提改进需求（自然语言迭代）；4.保存归档。强调：今天不追求漂亮，追求跑通完整流程。',
        keyTakeaway: '实操四步法，跑通一次完整流程比完美更重要',
      },
      {
        id: 'd1-s15',
        title: '新手高频踩坑预警',
        subtitle: 'AI 答非所问 · 代码乱码 · 不知道怎么存',
        layout: 'concept',
        instructorNotes:
          '三个高频坑点依次揭示，每个配解法：AI答非所问→需求没说清换个说法；代码乱码→检查扩展名和编码；不知道怎么存→文件扩展名要是.html。语气共情。',
        keyTakeaway: '三大坑点 + 解法，不是你笨，是大家都踩过',
      },
      {
        id: 'd1-s16',
        title: '今日作业',
        subtitle: '生成你的第一个 AI 个人主页',
        layout: 'exercise',
        instructorNotes:
          '四项勾选清单逐项打勾：代码能双击打开/含基本信息/至少一轮迭代/归档到homework/day01。强调提交路径，提醒今天先不用Git（Day2再教）。',
        keyTakeaway: '作业四步 + 自测清单，跑通第一次AI辅助开发落地',
      },
      {
        id: 'd1-s17',
        title: 'Day 1 总结',
        subtitle: '14天地图 · 全栈思维 · 你是主驾驶',
        layout: 'summary',
        instructorNotes:
          '三个关键词快闪回顾 → Day 2 预告卡推入（计算机底层+工具链搭建）→ 收尾Slogan点亮。情绪拉满收尾，让学员带着成就感离场。',
        keyTakeaway: '三大收获 + 明日预告：磨刀不误砍柴工',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
