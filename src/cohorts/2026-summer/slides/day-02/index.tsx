'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import {
  Shot01ColdOpen,
  Shot02FileExplorer,
  Shot03PathCompare,
  Shot04InstallFlow,
  Shot05BSCSCompare,
  Shot06DataFlow,
} from './scenes/act1-opener';
import {
  Shot07TechStack,
  Shot08Terminal,
  Shot09Git,
  Shot10Gitee,
  Shot11Markdown,
  Shot12IDE,
  Shot13Clone,
} from './scenes/act2-core';
import {
  Shot14HandsOn,
  Shot15VersionFlow,
  Shot16Homework,
  Shot17Summary,
} from './scenes/act3-build';

const SHOTS: React.FC[] = [
  Shot01ColdOpen,
  Shot02FileExplorer,
  Shot03PathCompare,
  Shot04InstallFlow,
  Shot05BSCSCompare,
  Shot06DataFlow,
  Shot07TechStack,
  Shot08Terminal,
  Shot09Git,
  Shot10Gitee,
  Shot11Markdown,
  Shot12IDE,
  Shot13Clone,
  Shot14HandsOn,
  Shot15VersionFlow,
  Shot16Homework,
  Shot17Summary,
];

export const day02Deck: DayDeckRenderer = {
  meta: {
    day: 2,
    stageName: 'Day 2 · 计算机底层基础 + 开发工具链搭建',
    title: '磨刀不误砍柴工',
    subtitle: 'AI 全栈暑期训练营 · Day 2',
    duration: '50 min',
    target: '零基础学员 · 已完成 Day 1',
    output: '开发环境就绪（终端/Git/Gitee/Markdown/TRAE IDE）+ Gitee 仓库',
    aiPractice: '用 AI 理解底层概念 · 安装环境报错让 AI 排错',
    slides: [
      {
        id: 'd2-s01',
        title: '冷开场：磨刀不误砍柴工',
        subtitle: '代码还没开始写，人先崩了',
        layout: 'cover',
        instructorNotes:
          '用终端报错的场景开场：文件找不到、命令报红、Git推不上去。共情式开场："这种崩，不是因为你笨，是因为地基没打稳。"',
        keyTakeaway: 'Day 2 不写代码，先把地基夯实、工具箱配齐',
      },
      {
        id: 'd2-s02',
        title: '文件、文件夹、扩展名',
        subtitle: '文件命名规则 · 扩展名的作用',
        layout: 'concept',
        instructorNotes:
          '文件树可视化，扩展名徽章依次弹出。强调：扩展名告诉OS用什么方式打开。新手最经典的坑——辛辛苦苦写的网页双击变记事本。',
        keyTakeaway: '文件 = 命名 + 扩展名，扩展名错了一切白搭',
      },
      {
        id: 'd2-s03',
        title: '路径：绝对 vs 相对',
        subtitle: '完整地址 vs 当前位置出发',
        layout: 'comparison',
        instructorNotes:
          '左右对比两条路径。绝对路径像"从北京海淀区某某街道"，写死位置；相对路径像"往前走五十米右转"，项目内部一律用相对路径。记住：一个点=当前目录，两个点=上一级。',
        keyTakeaway: '写死位置用绝对路径，项目内部资源引用一律用相对路径',
      },
      {
        id: 'd2-s04',
        title: '软件安装与运行原理',
        subtitle: '解压+注册 vs 加载+分配',
        layout: 'concept',
        instructorNotes:
          '安装=解压复制+注册表登记；运行=加载内存+分配资源。理解了这个，就明白为什么"装了却打不开"——路径丢了、依赖没装、权限不够。',
        keyTakeaway: '安装是静态的，运行是动态的，编辑器也是一种软件',
      },
      {
        id: 'd2-s05',
        title: 'B/S vs C/S 架构',
        subtitle: '浏览器/服务器 vs 客户端/服务器',
        layout: 'comparison',
        instructorNotes:
          'C/S代表QQ/微信：要装客户端、体验好但更新要重装。B/S代表网站：零安装、易维护但受浏览器限制。训练营两个项目都是B/S，因为最适合快速上线。',
        keyTakeaway: '需要硬件/原生体验选C/S；要快速迭代/跨平台选B/S',
      },
      {
        id: 'd2-s06',
        title: '互联网数据链路',
        subtitle: '请求 → 传输 → 处理 → 响应 → 渲染',
        layout: 'steps',
        instructorNotes:
          '五阶段流水线点亮：DNS解析→HTTP请求→服务器处理→响应返回→浏览器渲染。记住这五步，互联网骨架就清楚了。全过程几百毫秒。',
        keyTakeaway: '互联网数据链路五步：请求/传输/处理/响应/渲染',
      },
      {
        id: 'd2-s07',
        title: '全栈技术栈图谱',
        subtitle: '前端 + 后端 + 数据库',
        layout: 'concept',
        instructorNotes:
          '三层技术栈图谱：前端(HTML/CSS/JS+Vue/React)、后端(SpringBoot/Node.js)、数据库(MySQL/Redis)。强调训练营选型：Vue3+SpringBoot+MySQL，国内中大型企业最常见组合。',
        keyTakeaway: '技术栈选型：合适就好，团队熟/生态稳/能交付',
      },
      {
        id: 'd2-s08',
        title: '终端：真工程师的方向盘',
        subtitle: 'cd / ls / mkdir / rm / clear',
        layout: 'steps',
        instructorNotes:
          '终端窗口打字机效果：cd/ls/mkdir/rm/clear逐条执行。强调：命令行快、可批量、可自动化。今天要练到手比脑子还快。',
        keyTakeaway: '终端是工程师的方向盘，不是鼠标的替代品',
      },
      {
        id: 'd2-s09',
        title: 'Git：给代码拍快照',
        subtitle: '版本管理 = 可回滚的历史',
        layout: 'steps',
        instructorNotes:
          'Git五步流程可视化：init→add→commit→push→pull。强调：Git是版本快照系统，写崩了能回滚，多人协作能合并。全局配置用户名邮箱只设一次。',
        keyTakeaway: 'Git = 版本快照，写崩了能回滚的安全网',
      },
      {
        id: 'd2-s10',
        title: 'Gitee：代码云端之家',
        subtitle: '国内最稳的 Git 托管',
        layout: 'steps',
        instructorNotes:
          'Gitee注册+仓库关联+推送流程。强调：用令牌或SSH密钥，密码登录已禁用。遇到认证失败别死磕密码。',
        keyTakeaway: 'Gitee = 国内最稳的代码托管，令牌/SSH是正道',
      },
      {
        id: 'd2-s11',
        title: 'Markdown：技术人的通用语言',
        subtitle: '标题/列表/加粗/引用/代码/链接',
        layout: 'concept',
        instructorNotes:
          '六张语法卡片：Heading/Bold/List/Quote/Code/Link，左侧原始Markdown右侧渲染效果。Markdown是写文档、记笔记、写README的通用语言，后面每一份作业都用它。',
        keyTakeaway: 'Markdown = 极简排版语法，技术人的日常用语',
      },
      {
        id: 'd2-s12',
        title: 'TRAE IDE：主力编辑器',
        subtitle: '侧边栏 + 编辑区 + 终端',
        layout: 'concept',
        instructorNotes:
          'IDE界面导览：文件树/编辑区/终端面板。强调：TRAE自带终端，不用再单独开命令行窗口，写代码和敲Git在同一界面搞定。',
        keyTakeaway: '一个编辑器管理整个项目，效率翻倍',
      },
      {
        id: 'd2-s13',
        title: 'git clone 拉取项目',
        subtitle: '从云端到本地的完整流程',
        layout: 'steps',
        instructorNotes:
          'clone流程：从Gitee找项目→复制URL→git clone→IDE打开文件夹。体验"编辑器管理整个项目"和记事本打开单文件的天壤之别。',
        keyTakeaway: 'clone + IDE打开 = 正式开发的第一步',
      },
      {
        id: 'd2-s14',
        title: '今天的实操',
        subtitle: '终端 / Git / Markdown / IDE 四件事',
        layout: 'steps',
        instructorNotes:
          '四件事依次展示：1.终端命令反复练；2.Git/Gitee完整推拉流程；3.独立写Markdown文档；4.TRAE IDE打开项目文件夹。目标：让每一件工具都听你使唤。',
        keyTakeaway: '地基扎实了，明天盖楼才稳',
      },
      {
        id: 'd2-s15',
        title: '代码版本托管闭环',
        subtitle: 'init → add → commit → push → pull',
        layout: 'steps',
        instructorNotes:
          '完整五步流程回顾，强调"先pull后推"是好习惯，能避免远程有更新你不知道导致的冲突。养成肌肉记忆，省掉无数麻烦。',
        keyTakeaway: '代码版本托管全流程，先拉后推是关键习惯',
      },
      {
        id: 'd2-s16',
        title: '今日作业',
        subtitle: '写笔记 · 建仓库 · 推代码',
        layout: 'exercise',
        instructorNotes:
          '与讲义完全对齐：3项作业（写笔记存homework/day02 + homework文件夹git初始化关联Gitee + 推送Day1+Day2所有作业到Gitee）+ 7项自测清单（含homework/day02路径、Git全局配置、令牌/SSH、Day1+Day2 push成功、Gitee网页端可见）。逐条确认。',
        keyTakeaway: '3 项作业 + 7 项自测，完整跑通版本托管流程',
      },
      {
        id: 'd2-s17',
        title: 'Day 2 总结',
        subtitle: '底层认知 · 工具配齐 · 云端归档',
        layout: 'summary',
        instructorNotes:
          '三收获回顾：计算机底层认知清楚了、工具链都配齐能用了、第一个云端仓库有了。Day3预告：前端三剑客+Vibe Coding标准化实战。磨刀不误砍柴工，Day3见。',
        keyTakeaway: '三收获 + 明日预告：前端三剑客 + Vibe Coding',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
