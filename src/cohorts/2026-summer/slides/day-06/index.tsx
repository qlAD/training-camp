'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import { Shot01Open, Shot02Kitchen, Shot03Split } from './scenes/act1-cognition';
import {
  Shot04TwoTools,
  Shot05MavenMirror,
  Shot06SpringBootWhy,
  Shot07ThreePowers,
  Shot08MySQLHome,
  Shot09Paradigms,
} from './scenes/act2-core';
import {
  Shot10AIDesign,
  Shot11ImagesPitfall,
  Shot12HandsOn,
  Shot13Homework,
  Shot14Summary,
} from './scenes/act3-practice';

const SHOTS: React.FC[] = [
  Shot01Open,
  Shot02Kitchen,
  Shot03Split,
  Shot04TwoTools,
  Shot05MavenMirror,
  Shot06SpringBootWhy,
  Shot07ThreePowers,
  Shot08MySQLHome,
  Shot09Paradigms,
  Shot10AIDesign,
  Shot11ImagesPitfall,
  Shot12HandsOn,
  Shot13Homework,
  Shot14Summary,
];

/* Day 6 · 后端入门 · MySQL 数据库方案设计 · 「此刻」社区 */
export const day06Deck: DayDeckRenderer = {
  meta: {
    day: 6,
    stageName: 'Day 6 · 后端入门 · MySQL 数据库',
    title: '当假数据开始长出真实的根：后端 + 数据库',
    subtitle: 'AI 全栈暑期训练营 · Day 6',
    duration: '60 min',
    target: '零基础学员 · 已完成 Day 1-5',
    output: 'SpringBoot 环境 + MySQL 部署 + 完整数据库设计文档与建表 SQL',
    aiPractice: '让 AI 出第一版数据库设计，再用三道人工校验关为它把好关',
    slides: [
      {
        id: 'd6-s01',
        title: '冷开场：数据是"演"的',
        subtitle: '刷新一下，列表永远是那几条 Mock',
        layout: 'concept',
        instructorNotes:
          '承接 Day5 假数据 → 问学员「刷新首页还一样吗」→ 戳破假数据局限性 → 今天的目标：给社区挖一口真井（后端 + DB）。',
        keyTakeaway: '假数据是排练，今天搭真舞台 — 数据要有根',
      },
      {
        id: 'd6-s02',
        title: '后端这张"脸"',
        subtitle: '餐厅后厨类比：顾客 · 点单 · 传菜口 · 厨师 · 仓库',
        layout: 'concept',
        instructorNotes:
          '新手对后端最容易觉得神秘，用餐厅类比把抽象变具体：顾客=你我/前端，菜单+点单=接口API，传菜口=HTTP请求响应，厨师=业务逻辑，仓库=数据库。',
        keyTakeaway: '接口 = 前后端约定的「传菜口」',
      },
      {
        id: 'd6-s03',
        title: '前后端怎么分工',
        subtitle: '前端呈现交互 · 后端数据业务 · 中间是契约',
        layout: 'concept',
        instructorNotes:
          '一句话分工：前端关心好看好点、后端关心安全好查。5步完整链路（发请求→处理→DB读写→返回→渲染）先在脑子里串起来，后面写接口就不懵。',
        keyTakeaway: '前后端 5 步完整链路图',
      },
      {
        id: 'd6-s04',
        title: '两把"刀"配齐',
        subtitle: 'IDEA（Java 灶台）+ Maven（依赖管家）',
        layout: 'concept',
        instructorNotes:
          'IDEA=Java IDE超级记事本/Maven=自动拉别人写好的库。安装路径避坑：不要中文不要空格，不然以后千奇百怪的错误。',
        keyTakeaway: 'IDEA + Maven 安装要点 + 路径避坑',
      },
      {
        id: 'd6-s05',
        title: 'Maven 镜像配置避坑',
        subtitle: '阿里云镜像 — 蜗牛变高铁',
        layout: 'exercise',
        instructorNotes:
          '这是当天最容易浪费半小时的点：Maven默认从国外中央仓库下载极慢。装完Maven第一件事就是settings.xml里换阿里云镜像。现场一定要让学员先配好再拉依赖。',
        keyTakeaway: 'settings.xml 加阿里云镜像，下载速度从分钟级变秒级',
      },
      {
        id: 'd6-s06',
        title: 'SpringBoot 为什么当主角',
        subtitle: '约定大于配置 · 开箱即用',
        layout: 'concept',
        instructorNotes:
          '对比传统Java Web（打地基盖餐厅）vs SpringBoot（拎包入住）：不用XML、不用单独装Tomcat、不用自己凑依赖。一句话：让学员只写最核心的业务。',
        keyTakeaway: 'SpringBoot 核心理念 · 约定大于配置',
      },
      {
        id: 'd6-s07',
        title: '三个省头发的本事',
        subtitle: '内嵌服务器 · 自动配置 · 起步依赖',
        layout: 'steps',
        instructorNotes:
          '三优势拆开讲：①内嵌Tomcat=跑main就活 ②自动配置=引入DB依赖就配好通道 ③起步依赖=勾spring-web全家桶到齐。SpringBoot帮你把模板化的包都圆了。',
        keyTakeaway: '三大优势的各自作用',
      },
      {
        id: 'd6-s08',
        title: '给数据安个"家"',
        subtitle: 'MySQL 仓库 + DataGrid 管理后台',
        layout: 'concept',
        instructorNotes:
          'MySQL=仓库本体/DataGrid=仓库管理后台。两坑必提：字符集必须utf8mb4不然emoji乱码；端口3306被占用要先查。root密码务必记牢存下来。',
        keyTakeaway: 'MySQL 安装两大坑 + DataGrid 连接四件套',
      },
      {
        id: 'd6-s09',
        title: '三大范式 · 仓库整理规矩',
        subtitle: '1NF 不可分 · 2NF 全依赖 · 3NF 不传话',
        layout: 'concept',
        instructorNotes:
          '别讲得太学术，用用户表/订单表/部门表的正反例讲。一句话原则：能拆就拆、能引用就引用、别多处存同一份。提到范式不是铁律，后期为性能可以冗余，但初期先"规整"。',
        keyTakeaway: '三范式的正反例 + 朴素整理原则',
      },
      {
        id: 'd6-s10',
        title: '让 AI 帮你画图纸',
        subtitle: '喂需求 → 出文档+SQL → 人工校验三道关',
        layout: 'steps',
        instructorNotes:
          '提示词要强调：遵循三范式+字段注释+主外键索引。重点是**千万别无脑照搬**：字段类型/约束/索引三道人工关必须过，AI给的手机号可能用数字、密码可能和基本信息混一起，这些要学员把关。',
        keyTakeaway: '喂 AI → 出文档 → 人工三道关（类型/约束/索引）',
      },
      {
        id: 'd6-s11',
        title: '多图存储避坑',
        subtitle: 'images 字段用 JSON 数组，别新建图片表',
        layout: 'concept',
        instructorNotes:
          '现场容易有人想「笔记多图=建post_image表关联」。明确讲：社区不是电商SKU，多图是附属信息，加表=多join+多事务+写入麻烦，用JSON数组存images URLs就行，简单够用。',
        keyTakeaway: 'images 用 JSON 数组 vs 独立图片表 · 社区场景推荐前者',
      },
      {
        id: 'd6-s12',
        title: '今日实操三段',
        subtitle: 'SpringBoot Hello API · MySQL 部署 · 建表 SQL 执行',
        layout: 'exercise',
        instructorNotes:
          '三块实操：①SpringBoot hello接口通了=后端活；②MySQL+DataGrid连cike库成功=环境通；③AI生成+人工校验+执行+归档=数据库方案落地。强调每一块都有明确的"跑通标志"。',
        keyTakeaway: '三块任务各自的跑通成功标志',
      },
      {
        id: 'd6-s13',
        title: '作业与自测清单',
        subtitle: '两个交付物 + 一个后端工程 · 五项自测',
        layout: 'steps',
        instructorNotes:
          '交付物归档：数据库设计文档+建表SQL→day06。后端工程→cike/backend推送Gitee，和frontend并排。5项自测覆盖启动/连接/表结构/文档/推送。',
        keyTakeaway: 'day06 归档 + cike/backend 推送 Gitee · 五项自测',
      },
      {
        id: 'd6-s14',
        title: '总结与 Day7 预告',
        subtitle: '数据有了"根" · 明天长"枝"（RESTful 接口）',
        layout: 'summary',
        instructorNotes:
          '今日收获快闪（后厨心智/两工具/SpringBoot/MySQL/三范式/AI+SQL）→ Day7预告：在今天建的表之上写标准RESTful接口，Post CRUD完整闭环。收尾Slogan：今天不追求精妙，追求跑通一次完整链路。',
        keyTakeaway: '今日收获回顾 + Day7 RESTful CRUD 预告',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
