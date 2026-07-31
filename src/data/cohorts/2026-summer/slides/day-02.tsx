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
  DiagramSlide,
  AnimationSlide,
  EffectSlide,
} from './shared/layouts';
import { ToolchainBadgeWall } from './shared/effects';
import { HTTPRequestAnimation, DNSResolutionAnimation } from './shared/animations';
import { ArchitectureDiagram } from './shared/diagrams';

// #1 封面：互联网原理 + 环境搭建
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第二阶段：计算机与互联网"
    badgeText="课程讲义 · Day 2"
    title="Day 2 — 互联网原理 + 环境搭建"
    subtitle="拆解浏览器与服务器对话机制，打造全栈开发工具链"
    bullets={[
      '理解互联网工作原理与 HTTP 请求响应模型',
      '掌握 DNS 域名解析的完整链路',
      '一站式安装 JDK 21 / Node.js 18 / Git 并终端验证',
      '创建并提交第一个 Gitee 仓库，开启代码托管之旅',
    ]}
  />
);

// #2 议程：Day 2 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 2 学习路线图"
    subtitle="5 个核心目标，从原理到工具链一站式打通"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '互联网原理', desc: '网络 / 服务器 / IP / URL / 协议 五个基础概念' },
      { title: 'HTTP 模型', desc: '请求响应五要素 + GET vs POST 对比' },
      { title: 'DNS 解析', desc: '域名到 IP 的四步链路动效' },
      { title: '工具链安装', desc: 'JDK / Node / Git 终端验证全部通过' },
      { title: 'Gitee 托管', desc: '创建仓库并 clone 到本地打卡' },
    ]}
  />
);

// #3 概念：互联网是怎么工作的
const Slide03: React.FC = () => (
  <ConceptSlide
    badgeText="核心概念"
    title="互联网是怎么工作的"
    subtitle="五个基础概念，看懂网页背后的运作机制"
    bullets={[
      '网络：全球计算机互联的基础设施，像信息高速公路',
      '服务器：24 小时开机、对外提供网页与数据的远端计算机',
      'IP 地址：每台联网设备的数字门牌号（如 123.45.67.89）',
      'URL：统一资源定位符，人类可读的网址（如 https://gitee.com）',
      '协议：通信双方约定的规则，HTTP/HTTPS 即网页传输协议',
    ]}
    keyTakeaway="互联网 = 网络（基础设施）+ 协议（规则）+ 服务器/客户端（角色）+ IP/URL（寻址）"
  />
);

// #4 动效：浏览器 ↔ 服务器请求
const Slide04: React.FC = () => (
  <AnimationSlide
    title="浏览器 ↔ 服务器请求动效"
    subtitle="从输入网址到页面呈现的完整往返"
    animationType="HTTPRequest"
    caption="蓝色箭头 = 请求(req)，绿色箭头 = 响应(resp)"
    takeaway="一次网页访问 = 一次请求 + 一次响应，HTTP 就是这场对话的语言"
  >
    <HTTPRequestAnimation
      client={{ label: '浏览器（客户端）' }}
      server={{ label: '服务器（远端）' }}
      steps={[
        {
          label: '发起 GET 请求',
          direction: 'req',
          payload: 'GET / HTTP/1.1\nHost: gitee.com',
          desc: '浏览器向服务器请求首页',
        },
        {
          label: '服务器返回响应',
          direction: 'resp',
          payload: 'HTTP/1.1 200 OK\nContent-Type: text/html',
          desc: '服务器打包 HTML 数据返回',
        },
        {
          label: '请求静态资源',
          direction: 'req',
          payload: 'GET /style.css\nGET /app.js',
          desc: 'HTML 引用 CSS/JS，浏览器再次发起请求',
        },
        {
          label: '返回资源并渲染',
          direction: 'resp',
          payload: '200 OK × N',
          desc: '资源到齐，浏览器绘制出可见页面',
        },
      ]}
    />
  </AnimationSlide>
);

// #5 概念：HTTP 请求响应模型
const Slide05: React.FC = () => (
  <ConceptSlide
    badgeText="核心概念"
    title="HTTP 请求响应模型"
    subtitle="理解一次 HTTP 对话的五个核心要素"
    bullets={[
      'Method（方法）：GET 查询 / POST 提交 / PUT 更新 / DELETE 删除',
      'URL（地址）：请求的目标资源路径，如 /api/users',
      'Header（请求头）：元信息，如 Content-Type、Authorization、User-Agent',
      'Body（请求体）：POST/PUT 携带的数据，GET 通常为空',
      'Status（状态码）：3 位数字结果，200 成功 / 404 未找到 / 500 服务器错误',
    ]}
    keyTakeaway="HTTP 五要素 = Method(做什么) + URL(对谁做) + Header(元信息) + Body(带什么) + Status(结果如何)"
  />
);

// #6 对比：GET vs POST
const Slide06: React.FC = () => (
  <ComparisonSlide
    title="GET vs POST 对比"
    subtitle="最常用的两个 HTTP 方法，职责与特性迥异"
    leftLabel="GET"
    rightLabel="POST"
    left={{
      title: 'GET — 查询读取',
      items: [
        '参数拼在 URL 问号后，如 /search?q=vue',
        '请求体一般为空',
        '可被浏览器 / CDN 缓存',
        '幂等：多次请求结果相同',
        '适合：搜索、列表、详情页',
      ],
    }}
    right={{
      title: 'POST — 提交写入',
      items: [
        '参数放在请求 Body 中，不显示在 URL',
        '可携带大量 / 敏感数据（JSON、表单）',
        '默认不缓存',
        '非幂等：重复提交会产生多条数据',
        '适合：登录、注册、创建订单',
      ],
    }}
    keyTakeaway="GET 读数据（幂等可缓存），POST 写数据（非幂等不缓存）——选错方法会引发安全与语义问题"
  />
);

// #7 动效：DNS 域名解析流程
const Slide07: React.FC = () => (
  <AnimationSlide
    title="DNS 域名解析流程"
    subtitle="gitee.com 怎么变成服务器 IP 地址"
    animationType="DNSResolution"
    caption="浏览器依次询问本地 DNS → 根 → 顶级域 → 权威 DNS，最终拿到目标 IP"
    takeaway="DNS 是互联网的通讯录，把人类记得住的名字翻译成机器找得到的 IP"
  >
    <DNSResolutionAnimation
      steps={[
        { label: '查本地缓存', node: 'browser', desc: '先看本机 hosts / DNS 缓存有没有 gitee.com' },
        { label: '询问本地 DNS', node: 'dns', desc: '向运营商本地 DNS 发起递归查询' },
        { label: '查询根 DNS', node: 'root', desc: '根服务器指向 .com 顶级域' },
        { label: '查询顶级域 DNS', node: 'tld', desc: '.com 顶级域指向 gitee.com 的权威服务器' },
        { label: '权威 DNS 返回 IP', node: 'authoritative', desc: 'gitee.com 权威服务器给出真实 IP' },
        { label: '连接目标服务器', node: 'target', desc: '浏览器拿到 IP，开始建立 TCP 连接' },
      ]}
    />
  </AnimationSlide>
);

// #8 概念：前后端分工
const Slide08: React.FC = () => (
  <ConceptSlide
    badgeText="核心概念"
    title="前后端分工"
    subtitle="一个完整 Web 应用的三层职责划分"
    bullets={[
      '前端：负责界面展示与用户交互（HTML / CSS / JS、Vue）',
      '后端：负责业务逻辑与数据处理（Java / Spring Boot、Node）',
      '数据库：负责持久化存储（MySQL、Redis）',
      '前端调用后端 API，后端读写数据库，三者协作闭环',
    ]}
    keyTakeaway="前端管「看起来怎么样」，后端管「逻辑对不对」，数据库管「数据存没存」"
  />
);

// #9 图解：全栈工具链架构图
const Slide09: React.FC = () => (
  <DiagramSlide
    badgeText="架构图解"
    title="全栈工具链架构图"
    subtitle="JDK / Node / Git / Gitee / TRAE 五大工具的关系"
    caption="上层 = 云端协作，中层 = 本地运行时，下层 = 版本控制与 AI 提效"
    takeaway="JDK 跑后端、Node 跑前端、Git 管版本、Gitee 存云端、TRAE 提效率"
  >
    <ArchitectureDiagram
      direction="vertical"
      layers={[
        {
          title: '云端协作层',
          nodes: [
            { label: 'Gitee', sublabel: '代码托管', tone: 'rose' },
            { label: 'TRAE CN', sublabel: 'AI IDE', tone: 'violet' },
          ],
        },
        {
          title: '本地运行时层',
          nodes: [
            { label: 'JDK 21', sublabel: 'Java 后端', tone: 'amber' },
            { label: 'Node.js 18', sublabel: '前端构建', tone: 'emerald' },
          ],
        },
        {
          title: '版本控制层',
          nodes: [
            { label: 'Git', sublabel: '本地版本控制', tone: 'cyan' },
          ],
        },
      ]}
    />
  </DiagramSlide>
);

// #10 终端：基础命令
const Slide10: React.FC = () => (
  <TerminalSlide
    title="终端基础命令"
    subtitle="5 个必会命令，操作文件与目录"
    prompt="$"
    commands={[
      { cmd: 'pwd', expected: '/c/Users/student', comment: '显示当前所在目录（print working directory）' },
      { cmd: 'ls', expected: 'Desktop  Documents  Downloads', comment: '列出当前目录下的文件与文件夹' },
      { cmd: 'cd Documents', expected: '(已切换到 Documents 目录)', comment: '进入指定目录（change directory）' },
      { cmd: 'mkdir my-project', expected: '(已创建 my-project 文件夹)', comment: '新建目录（make directory）' },
      { cmd: 'clear', expected: '(终端屏幕已清空)', comment: '清屏，历史记录仍可上滚查看' },
    ]}
    takeaway="pwd 看位置、ls 看内容、cd 切目录、mkdir 建文件夹、clear 清屏——终端操作五板斧"
  />
);

// #11 代码框：JDK 21 安装验证
const Slide11: React.FC = () => (
  <CodeBoxSlide
    title="JDK 21 安装验证"
    subtitle="确认 Java 开发环境就绪"
    filename="Terminal"
    language="bash"
    takeaway="java -version 输出 21.0.x 即 JDK 安装成功；command not found 多半是 PATH 未配置"
    code={`# 检查 Java 版本（应输出 21.0.x）
java -version

# 预期输出：
# openjdk version "21.0.2" 2024-01-16
# OpenJDK Runtime Environment (build 21.0.2+13)
# OpenJDK 64-Bit Server VM (build 21.0.2+13, mixed mode)

# 若提示 command not found，需配置 JAVA_HOME 与 PATH 环境变量`}
  />
);

// #12 代码框：Node.js 18 安装验证
const Slide12: React.FC = () => (
  <CodeBoxSlide
    title="Node.js 18 安装验证"
    subtitle="确认前端构建环境就绪"
    filename="Terminal"
    language="bash"
    takeaway="node -v 与 npm -v 都有版本号输出，前端工具链即可用"
    code={`# 检查 Node.js 版本（应输出 v18.x.x 或更高）
node -v

# 预期输出：
# v18.20.0

# 顺便检查包管理器 npm
npm -v

# 预期输出：
# 10.5.0`}
  />
);

// #13 代码框：Git 安装与配置
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="Git 安装与配置"
    subtitle="确认版本控制工具并完成首次身份配置"
    filename="Terminal"
    language="bash"
    takeaway="Git 提交会带上 user.name / email 身份信息，配置一次全局生效"
    code={`# 1. 检查 Git 版本
git --version
# 预期输出：
# git version 2.43.0

# 2. 配置全局用户名（替换为你的名字）
git config --global user.name "Your Name"

# 3. 配置全局邮箱（替换为 Gitee 注册邮箱）
git config --global user.email "you@example.com"

# 4. 查看配置是否生效
git config --global --list
# 预期输出：
# user.name=Your Name
# user.email=you@example.com`}
  />
);

// #14 特效：环境就绪徽章墙
const Slide14: React.FC = () => (
  <EffectSlide
    title="环境就绪徽章"
    subtitle="五大工具全部校验通过，工具链集齐"
    effectType="ToolchainBadgeWall"
    caption="徽章依次点亮：JDK 21 ✓ / Node.js 18 ✓ / Git ✓ / Gitee ✓ / TRAE ✓"
    takeaway="徽章齐亮 = 本地开发环境就绪，可以开始写代码了"
  >
    <ToolchainBadgeWall
      tools={[
        { name: 'JDK 21', category: '运行时', logoText: '☕', iconColor: 'text-amber-400' },
        { name: 'Node.js 18', category: '运行时', logoText: '⬢', iconColor: 'text-emerald-400' },
        { name: 'Git', category: '版本控制', logoText: '🌿', iconColor: 'text-cyan-400' },
        { name: 'Gitee', category: '云端托管', logoText: 'G', iconColor: 'text-rose-400' },
        { name: 'TRAE CN', category: 'AI IDE', logoText: '🤖', iconColor: 'text-violet-400' },
      ]}
    />
  </EffectSlide>
);

// #15 提示词：让 AI 解释环境报错
const Slide15: React.FC = () => (
  <PromptSlide
    title="让 AI 解释环境报错"
    subtitle="遇到 command not found，把报错交给豆包"
    role="资深运维助理"
    task="解读终端报错 “java: command not found” 并指导修复"
    stack="环境变量 PATH / Windows 系统"
    constraints="面向零基础学员，每步给出可复制的命令与截图位置"
    outputFormat="分步骤：原因 → 检查 → 修复命令 → 验证"
    template={`你是资深运维助理。我在终端执行 java -version 时报 “java: command not found”，操作系统是 Windows 11。请用比喻讲一下为什么会报这个错，并给出配置 PATH 环境变量的完整步骤，每一步都附上可复制的命令和验证方法。`}
    takeaway="报错原文 + 操作系统 + 你的目标 = AI 给出最准的修复方案"
  />
);

// #16 概念：Gitee 代码托管平台
const Slide16: React.FC = () => (
  <ConceptSlide
    badgeText="核心概念"
    title="Gitee 代码托管平台"
    subtitle="国产代码托管，四句话理解它的价值"
    bullets={[
      '仓库（Repository）：一个项目代码的云端存储单元',
      '版本控制：每次提交都是一个快照，可随时回溯历史',
      '协作：多人分支并行开发，Pull Request 合并代码',
      '克隆（clone）：把云端仓库完整复制到本地，离线可改',
    ]}
    keyTakeaway="Gitee = 代码的云盘 + 时光机 + 协作台，Git 是操作它的语言"
  />
);

// #17 练习：创建第一个 Gitee 仓库
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="创建第一个 Gitee 仓库"
    subtitle="动手实操：从注册到克隆到本地"
    tasks={[
      '注册并登录 Gitee（gitee.com），完成手机号绑定',
      '点击右上角 + → 新建仓库，命名为 my-first-bootcamp',
      '勾选「初始化仓库」并选择 Readme 模板，点击创建',
      '复制仓库 HTTPS 地址，准备下一步 clone',
      '本地终端执行 git clone 拉取到本地，截屏打卡',
    ]}
    submissionText="完成后截屏 Gitee 仓库主页 + 本地 clone 成功，发到企微群打卡"
  />
);

// #18 终端：git clone 实操
const Slide18: React.FC = () => (
  <TerminalSlide
    title="git clone 实操"
    subtitle="把云端仓库拉到本地"
    prompt="$"
    commands={[
      {
        cmd: 'git clone https://gitee.com/your-name/my-first-bootcamp.git',
        expected: 'Cloning into \'my-first-bootcamp\'...\nremote: Enumerating objects: 6, done.\nremote: Counting objects: 100% (6/6), done.\nReceiving objects: 100% (6/6), done.',
        comment: '克隆远程仓库到当前目录',
      },
      { cmd: 'cd my-first-bootcamp', expected: '(已进入仓库目录)', comment: '进入克隆下来的项目文件夹' },
      { cmd: 'ls', expected: 'README.md', comment: '看到初始化的 Readme 文件即克隆成功' },
    ]}
    takeaway="git clone <仓库地址> 一次拉取全部历史；后续用 git pull 同步最新更新"
  />
);

// #19 测验：Day 2 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 2 知识检查"
    subtitle="4 道题，检验今日核心掌握"
    questions={[
      {
        question: 'HTTP 的全称是？',
        options: [
          'HyperText Transfer Protocol',
          'High Tech Transfer Process',
          'Home Tool Transfer Protocol',
          'Hyperlink Text Transmission Protocol',
        ],
        answer: 0,
        explanation: 'HTTP = HyperText Transfer Protocol，超文本传输协议，是浏览器与服务器通信的规则。',
      },
      {
        question: 'DNS 的主要作用是？',
        options: [
          '加密网页数据',
          '把域名翻译成 IP 地址',
          '压缩网页加速访问',
          '管理数据库连接',
        ],
        answer: 1,
        explanation: 'DNS 是域名系统，负责将人类可读的域名解析为机器可寻址的 IP 地址。',
      },
      {
        question: '下列哪组命令能验证 JDK / Node / Git 是否安装？',
        options: [
          'java -v / node -version / git -v',
          'java -version / node -v / git --version',
          'jdk / nodejs / git',
          'java --check / node --check / git --check',
        ],
        answer: 1,
        explanation: '标准命令为 java -version、node -v、git --version，注意三者参数写法各不相同。',
      },
      {
        question: '关于 Gitee 的说法，正确的是？',
        options: [
          '只能存放 Java 代码',
          '是一种编程语言',
          '提供代码托管与版本控制协作',
          '可以替代 JDK 运行 Java',
        ],
        answer: 2,
        explanation: 'Gitee 是代码托管平台，提供仓库、版本控制与团队协作，本身不是语言或运行时。',
      },
    ]}
  />
);

// #20 总结：今日总结 + 明日预告
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="Day 2 收获盘点 + 明日预告"
    dayNumber={2}
    takeaways={[
      '互联网原理：网络 + 服务器 + IP/URL + 协议，HTTP 是浏览器与服务器的对话语言',
      'HTTP 五要素：Method / URL / Header / Body / Status，GET 读、POST 写',
      'DNS 解析：域名 → 本地 DNS → 根 → 顶级域 → 权威 → IP',
      '工具链就绪：JDK 21 + Node.js 18 + Git 全部终端验证通过',
      'Gitee 仓库已创建并 clone 到本地，代码托管之旅开启',
    ]}
    nextDayPreview="Day 3 — 前端三剑客：HTML 骨架 / CSS 美化 / JS 交互，一日打通前端基础"
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
      return <Slide01 />;
  }
};

export const day02Deck: DayDeckRenderer = {
  meta: {
    day: 2,
    stageName: '第二阶段：计算机与互联网',
    title: 'Day 2 — 互联网原理 + 环境搭建 (JDK / Node / Git / Gitee)',
    subtitle: '拆解浏览器与服务器对话机制，打造全栈开发工具链',
    duration: '90 分钟',
    target: '建立 HTTP 请求响应模型认知，一站式安装配置 JDK 21、Node.js 18、Git 并准备 Gitee',
    output: '开发环境就绪，终端校验通过，创建并提交第一个 Gitee 仓库',
    aiPractice: '用豆包解释概念 → “能给我用比喻讲一下浏览器和服务器是怎么通信的吗？”',
    slides: [
      {
        id: 'd2-s1',
        title: '互联网原理与环境搭建',
        layout: 'cover',
        instructorNotes: '开场用“输入网址到看到页面”的日常体验切入，强调今日两条主线：懂原理 + 装工具。',
        keyTakeaway: '今日双主线：互联网原理 + 全栈工具链就绪',
      },
      {
        id: 'd2-s2',
        title: 'Day 2 学习路线图',
        layout: 'steps',
        instructorNotes: '带学员过 5 个目标，说明前 8 页讲原理、9-15 页装工具、16-18 页搞 Gitee。',
        keyTakeaway: '5 目标：互联网原理 → HTTP → DNS → 工具链 → Gitee',
      },
      {
        id: 'd2-s3',
        title: '互联网是怎么工作的',
        layout: 'concept',
        instructorNotes: '用“公路 + 门牌 + 约定”比喻讲五概念，避免一上来就堆术语。',
        keyTakeaway: '互联网 = 网络 + 协议 + 服务器/客户端 + IP/URL',
      },
      {
        id: 'd2-s4',
        title: '浏览器↔服务器请求动效',
        layout: 'steps',
        instructorNotes: '点击动画播放，强调 req/resp 一来一回即一次网页访问。',
        keyTakeaway: '一次网页访问 = 一次请求 + 一次响应',
      },
      {
        id: 'd2-s5',
        title: 'HTTP 请求响应模型',
        layout: 'concept',
        instructorNotes: '结合餐厅点单比喻：Method=点菜动作、URL=菜单项、Body=备注、Status=上菜结果。',
        keyTakeaway: 'HTTP 五要素：Method / URL / Header / Body / Status',
      },
      {
        id: 'd2-s6',
        title: 'GET vs POST 对比',
        layout: 'comparison',
        instructorNotes: '让学员举例：搜索框是 GET，登录是 POST，加深语义理解。',
        keyTakeaway: 'GET 读数据（幂等可缓存），POST 写数据（非幂等不缓存）',
      },
      {
        id: 'd2-s7',
        title: 'DNS 域名解析流程',
        layout: 'steps',
        instructorNotes: '用“查通讯录找电话号码”比喻 DNS，强调递归查询链路。',
        keyTakeaway: 'DNS 把域名翻译成 IP，是互联网的通讯录',
      },
      {
        id: 'd2-s8',
        title: '前后端分工',
        layout: 'concept',
        instructorNotes: '画三层图：前端=门面、后端=厨房、数据库=仓库。',
        keyTakeaway: '前端管展示、后端管逻辑、数据库管存储',
      },
      {
        id: 'd2-s9',
        title: '全栈工具链架构图',
        layout: 'concept',
        instructorNotes: '对照架构图说明每个工具的位置与职责，预告下面逐一安装。',
        keyTakeaway: 'JDK 跑后端、Node 跑前端、Git 管版本、Gitee 存云端、TRAE 提效',
      },
      {
        id: 'd2-s10',
        title: '终端基础命令',
        layout: 'split_code',
        instructorNotes: '现场敲一遍 pwd/ls/cd/mkdir/clear，让学员跟着练。',
        keyTakeaway: '终端五板斧：pwd / ls / cd / mkdir / clear',
      },
      {
        id: 'd2-s11',
        title: 'JDK 21 安装验证',
        layout: 'split_code',
        instructorNotes: '强调预期输出 21.0.x，遇到 command not found 留到 slide 15 用 AI 解决。',
        keyTakeaway: 'java -version 输出 21.0.x 即 JDK 就绪',
      },
      {
        id: 'd2-s12',
        title: 'Node.js 18 安装验证',
        layout: 'split_code',
        instructorNotes: '顺带讲 npm 是 Node 的包管理器，前端项目靠它装依赖。',
        keyTakeaway: 'node -v 与 npm -v 都有输出即前端工具链可用',
      },
      {
        id: 'd2-s13',
        title: 'Git 安装与配置',
        layout: 'split_code',
        instructorNotes: '强调 user.name/email 全局配一次即可，后面提交都带这个身份。',
        keyTakeaway: 'Git 配置 user.name/email 一次，全局生效',
      },
      {
        id: 'd2-s14',
        title: '环境就绪徽章',
        layout: 'concept',
        instructorNotes: '徽章点亮时让学员截图，作为环境就绪的打卡凭证。',
        keyTakeaway: '徽章齐亮 = 本地开发环境就绪',
      },
      {
        id: 'd2-s15',
        title: '让 AI 解释环境报错',
        layout: 'prompt_template',
        instructorNotes: '演示把真实报错粘给豆包，强调“报错 + 系统 + 目标”三要素。',
        keyTakeaway: '报错原文 + 操作系统 + 目标 = AI 最准的修复方案',
      },
      {
        id: 'd2-s16',
        title: 'Gitee 代码托管平台',
        layout: 'concept',
        instructorNotes: '类比 GitHub，强调 Gitee 国内访问快、注册即用。',
        keyTakeaway: 'Gitee = 代码云盘 + 时光机 + 协作台',
      },
      {
        id: 'd2-s17',
        title: '创建第一个 Gitee 仓库',
        layout: 'exercise',
        instructorNotes: '强调勾选初始化 Readme，否则空仓库 clone 下来是空的。',
        keyTakeaway: '注册 → 新建 → 初始化 Readme → clone → 打卡',
      },
      {
        id: 'd2-s18',
        title: 'git clone 实操',
        layout: 'split_code',
        instructorNotes: '提醒 HTTPS 地址末尾 .git 可省略，但保留更清晰。',
        keyTakeaway: 'git clone 拉取全部历史，后续用 git pull 同步',
      },
      {
        id: 'd2-s19',
        title: 'Day 2 知识检查',
        layout: 'concept',
        instructorNotes: '逐题互动，答错时引导回顾对应 slide。',
        keyTakeaway: 'HTTP / DNS / 工具链命令 / Gitee 用途四项通关',
      },
      {
        id: 'd2-s20',
        title: '今日总结',
        layout: 'summary',
        instructorNotes: '回顾 5 要点，预告明日前端三剑客，布置今晚复习任务。',
        keyTakeaway: '原理懂了 + 工具齐了，明日前端三剑客',
      },
    ],
  },
  Render,
};