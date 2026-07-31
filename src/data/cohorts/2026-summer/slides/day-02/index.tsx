'use client';

import React from 'react';
import { DayDeckRenderer } from '../../../../../types';
import {
  Shot01ColdOpen,
  Shot02Promises,
  Shot03Route,
  Shot04Web,
  Shot05ClientServer,
} from './scenes/act1-opener';
import {
  Shot06IP,
  Shot07Port,
  Shot08URL,
  Shot09DNS,
  Shot10DNSTrip,
  Shot11HTTP,
  Shot12Status,
} from './scenes/act2-core';
import {
  Shot13Trip,
  Shot14Install,
  Shot15Git,
  Shot16Quiz,
  Shot17Summary,
} from './scenes/act3-build';

const SHOTS: React.FC[] = [
  Shot01ColdOpen,
  Shot02Promises,
  Shot03Route,
  Shot04Web,
  Shot05ClientServer,
  Shot06IP,
  Shot07Port,
  Shot08URL,
  Shot09DNS,
  Shot10DNSTrip,
  Shot11HTTP,
  Shot12Status,
  Shot13Trip,
  Shot14Install,
  Shot15Git,
  Shot16Quiz,
  Shot17Summary,
];

/** Day 2 · AE 动效版演示幻灯片（每天 = 一期独立视频，仅本日私有组件，网络主题从 0 设计） */
export const day02Deck: DayDeckRenderer = {
  meta: {
    day: 2,
    stageName: 'Day 2 · 拆开互联网 · DNS 与 HTTP',
    title: '点一下，世界回应',
    subtitle: 'AI 全栈暑期训练营 · Day 2（AE 动效版演示）',
    duration: '50 min',
    target: '零基础学员 · 无需编程经验',
    output: '开发环境就绪（JDK / Node.js / Git）+ Gitee 仓库',
    aiPractice: '用 AI 讲清网络原理 · 安装环境报错让 AI 排错',
    slides: [
      {
        id: 'd2-s01',
        title: '冷开场：点一下，世界回应',
        subtitle: '一个点击背后发生了什么',
        layout: 'cover',
        instructorNotes:
          '先让终端画面打出一次完整的网页访问过程，像视频开场旁白一样安静。停顿后抛出钩子：今天我们把这次点击拆开来看。',
        keyTakeaway: '一次点击背后是 DNS、HTTP、渲染一整条链路',
      },
      {
        id: 'd2-s02',
        title: '承诺快闪：今天你也能讲明白',
        subtitle: '14 天 · 从「会用」到「懂原理」',
        layout: 'cover',
        instructorNotes:
          '四张卡快闪（1 秒一张）：看懂 DNS / 看懂 HTTP / 装好环境 / 建好仓库。读到最后顺势报出正式标题。',
        keyTakeaway: '今日四承诺：DNS / HTTP / 环境 / 仓库',
      },
      {
        id: 'd2-s03',
        title: '今日路线：今天学什么？',
        subtitle: '认识网络 → 请求响应 → 域名 → 传输 → 动手',
        layout: 'steps',
        instructorNotes:
          '逐站点亮五站路线图，讲到哪站就口头点题，让学员对 50 分钟节奏有预期。',
        keyTakeaway: '今日五站：认识网络 / 请求响应 / 域名 / 传输 / 动手',
      },
      {
        id: 'd2-s04',
        title: '互联网：一张巨大的网',
        subtitle: '设备与设备的连接',
        layout: 'concept',
        instructorNotes:
          '中心中转先现，再点亮你、学校机房、社团服务器、远方网站四颗节点，连线脉冲生长。点题：互联网的本质是「连接」。',
        keyTakeaway: '互联网 = 无数设备通过线路彼此连接',
      },
      {
        id: 'd2-s05',
        title: '浏览器 ↔ 服务器',
        subtitle: '谁是客户端？谁是服务端？',
        layout: 'comparison',
        instructorNotes:
          '左浏览器右服务器，中间请求流光、响应流光往返。点题：你看到的一切都来自服务器的一次「回应」。',
        keyTakeaway: '浏览器发起请求，服务器返回响应',
      },
      {
        id: 'd2-s06',
        title: 'IP：设备的门牌号',
        subtitle: '172.16.0.1 这样的数字地址',
        layout: 'concept',
        instructorNotes:
          '地址牌四段逐段点亮（172.16.0.1），每段 0-255。点题：互联网上每台设备都有一个门牌号。',
        keyTakeaway: 'IP = 设备在网络上的门牌号',
      },
      {
        id: 'd2-s07',
        title: '端口：门牌下的「门」',
        subtitle: '一台服务器同时服务很多程序',
        layout: 'concept',
        instructorNotes:
          '先亮「一台服务器」楼，再弹出两扇门：80 网页、443 加密网页。点题：不同程序，各走各的门。',
        keyTakeaway: '端口 = IP 之下的一扇扇门（80 / 443）',
      },
      {
        id: 'd2-s08',
        title: 'URL：一封信的完整地址',
        subtitle: '协议 · 域名 · 端口 · 路径 · 参数',
        layout: 'concept',
        instructorNotes:
          '整条 URL 先灰显，五个组成部分逐个点亮并配标签。点题：协议告诉怎么寄，域名告诉寄给谁。',
        keyTakeaway: 'URL 五件套：协议 / 域名 / 端口 / 路径 / 参数',
      },
      {
        id: 'd2-s09',
        title: 'DNS：互联网的通讯录',
        subtitle: '记名字，不记数字',
        layout: 'concept',
        instructorNotes:
          '通讯录封面弹出，三条域名-IP 条目依次出现，最后高亮 example.com 的翻译。点题：你记名字，DNS 翻译数字。',
        keyTakeaway: 'DNS = 域名 → IP 的翻译服务',
      },
      {
        id: 'd2-s10',
        title: '输入网址后发生了什么',
        subtitle: '一次 DNS 解析的旅程',
        layout: 'steps',
        instructorNotes:
          '五个节点从左到右点亮：你 → 本地 DNS → 根 DNS → 顶级 DNS → 权威 DNS，最后拿到 IP 回流。点题：层层转发、层层查。',
        keyTakeaway: 'DNS 解析：本地 → 根 → 顶级 → 权威 → 返回 IP',
      },
      {
        id: 'd2-s11',
        title: 'HTTP：浏览器写的信',
        subtitle: '请求 = 方法 + 路径 + 头',
        layout: 'split_code',
        instructorNotes:
          '请求信封先入（GET /index.html + Host 等请求头），流光寄出，响应信封回信（200 OK + HTML）。点题：写信、回信的规则。',
        keyTakeaway: 'HTTP 请求/响应：方法与路径 + 头 + 内容',
      },
      {
        id: 'd2-s12',
        title: '服务器回的信',
        subtitle: '状态码 200 / 404 / 500',
        layout: 'concept',
        instructorNotes:
          '三枚状态码徽章逐张弹入。点题口诀：2xx 成功、4xx 你的问题、5xx 服务器的问题。',
        keyTakeaway: '状态码：200 成功 / 404 不存在 / 500 服务器错',
      },
      {
        id: 'd2-s13',
        title: '一次完整的旅程',
        subtitle: '点击 → DNS → 请求 → 响应 → 渲染',
        layout: 'steps',
        instructorNotes:
          '六段流水线逐段点亮并流动：点击 → DNS 查 IP → 发送请求 → 服务器处理 → 返回内容 → 渲染页面。点题：全过程只要几百毫秒。',
        keyTakeaway: '完整链路：点击 / DNS / 请求 / 处理 / 返回 / 渲染',
      },
      {
        id: 'd2-s14',
        title: '装好三件套',
        subtitle: 'JDK · Node.js · Git，装完验证版本号',
        layout: 'steps',
        instructorNotes:
          '三个终端窗口并排，逐行跑出安装输出，最后各自验证版本号（绿色 ✓）。现场同步装，报错让 AI 排。',
        keyTakeaway: '环境三件套：JDK / Node.js / Git，版本号验证',
      },
      {
        id: 'd2-s15',
        title: '把代码放进云端',
        subtitle: 'git init → add → commit → push',
        layout: 'steps',
        instructorNotes:
          '四步命令逐条点亮，最后 Gitee 云端仓库卡亮起。点题：Git 管版本，Gitee 存云端，今天小目标达成。',
        keyTakeaway: 'Git 四步 + Gitee 云端仓库',
      },
      {
        id: 'd2-s16',
        title: '三题验收',
        subtitle: '点一点，答对才算吸收',
        layout: 'exercise',
        instructorNotes:
          '交互弹题：DNS 作用 / URL 组成 / 404 含义。答错的回到对应镜头复习一遍。',
        keyTakeaway: '三题验收：DNS / URL / 状态码',
      },
      {
        id: 'd2-s17',
        title: '总结预告：给网页化妆',
        subtitle: 'DAY 3 · HTML / CSS / JavaScript 极速入门',
        layout: 'summary',
        instructorNotes:
          '四张收获卡回顾 → DAY 3 预告卡推入 → 收尾 Slogan 点亮："Internet is our world. Build it, one request at a time."',
        keyTakeaway: '今日四收获 + 明日预告：HTML/CSS/JS 极速入门',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
