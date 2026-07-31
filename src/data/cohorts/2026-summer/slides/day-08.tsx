'use client';

import React from 'react';
import { Monitor, Server, Database } from 'lucide-react';
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
import { ArchitectureDiagram } from './shared/diagrams';
import { CORSPreflightAnimation, DataFlowAnimation } from './shared/animations';
import { ConnectionSuccessEffect } from './shared/effects';

// #1 封面：需求拆解与前后端联调
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第六阶段：生态力量"
    badgeText="Day 8 · 课程讲义"
    title="需求拆解与前后端联调"
    subtitle="用 axios + CORS 贯通「此刻」前后端任督二脉"
    bullets={[
      '需求拆解四步法：把想法拆成 表 → API → 页面',
      'axios 封装实例 + 拦截器，统一调用后端接口',
      '解决浏览器同源策略，配通 Spring Boot CORS',
      '90 分钟跑通联调：Vue 表单提交 → 写入 MySQL',
    ]}
  />
);

// #2 议程：Day 8 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 8 学习路线图"
    subtitle="从需求拆解到 axios、CORS、联调与 Checkpoint，5 个目标串成一条线"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '需求拆解', desc: '掌握功能拆分、接口定义、数据流与边界四步法' },
      { title: 'axios 封装', desc: '创建实例、配置 baseURL 与请求/响应拦截器' },
      { title: 'CORS 跨域', desc: '理解同源策略，用 @CrossOrigin 放行前端源' },
      { title: '前后端联调', desc: 'Vue 调 Spring Boot API，数据写入 MySQL' },
      { title: 'Checkpoint 5', desc: '完成连通测试打卡，前后端正式贯通' },
    ]}
  />
);

// #3 概念：需求拆解思维
const Slide03: React.FC = () => (
  <ConceptSlide
    title="需求拆解思维"
    subtitle="把一个想法拆成可落地的 表 → API → 页面，四步法走完不返工"
    badgeText="核心方法"
    bullets={[
      '功能拆分：把「发帖」拆成填写表单、提交接口、刷新列表三个动作',
      '接口定义：约定路径 /api/posts、方法 POST/GET、入参与返回结构',
      '数据流：前端表单 → axios → 后端 Controller → Service → MySQL',
      '边界确认：哪些前端做、哪些后端做、错误与跨域由谁兜底',
    ]}
    keyTakeaway="拆清楚再写代码，联调阶段就不会反复返工。"
  />
);

// #4 图解：「此刻」功能架构图
const Slide04: React.FC = () => (
  <DiagramSlide
    title="「此刻」功能架构图"
    subtitle="前端页面 + 后端 API + 数据库，三层各司其职、通过 HTTP 连通"
    badgeText="架构图解"
    caption="靛蓝=前端 · 青色=axios · 紫罗兰=后端 · 翠绿=数据库"
    takeaway="联调就是让这条链路从上到下贯通，数据能真正流动。"
  >
    <ArchitectureDiagram
      direction="vertical"
      layers={[
        {
          title: '前端页面层（Vue 3）',
          nodes: [
            { label: '发布表单', sublabel: 'CreatePost.vue', icon: Monitor, tone: 'indigo' },
            { label: '帖子列表', sublabel: 'PostList.vue', icon: Monitor, tone: 'cyan' },
          ],
        },
        {
          title: '后端 API 层（Spring Boot）',
          nodes: [
            { label: 'POST /api/posts', sublabel: '发布帖子', icon: Server, tone: 'violet' },
            { label: 'GET /api/posts', sublabel: '查询列表', icon: Server, tone: 'violet' },
          ],
        },
        {
          title: '数据库层（MySQL）',
          nodes: [
            { label: 'posts 表', sublabel: 'id / title / content', icon: Database, tone: 'emerald' },
          ],
        },
      ]}
    />
  </DiagramSlide>
);

// #5 对比：前后端独立 vs 联调
const Slide05: React.FC = () => (
  <ComparisonSlide
    title="前后端独立 vs 联调"
    subtitle="独立开发用 Mock 假数据，联调后才有真实数据流动"
    leftLabel="独立开发阶段"
    rightLabel="联调阶段"
    left={{
      title: '各自开发',
      items: [
        '前端用 Mock 数据，跑通界面与交互',
        '后端写好 API，用 Postman 单测',
        '两端互不依赖，进度可并行',
        '页面看到的是假数据，未真正连通',
      ],
    }}
    right={{
      title: '前后端联调',
      items: [
        '前端 axios 调真实后端接口',
        '表单提交写入 MySQL 数据库',
        '列表展示后端返回的真实帖子',
        '数据贯通，里程碑正式达成',
      ],
    }}
    keyTakeaway="联调是把『各自能跑』变成『一起能跑』的关键一跃。"
  />
);

// #6 概念：axios HTTP 客户端
const Slide06: React.FC = () => (
  <ConceptSlide
    title="axios HTTP 客户端"
    subtitle="浏览器内置 fetch 之外，Vue 项目最常用的 Promise 请求库"
    badgeText="技术选型"
    bullets={[
      'Promise API：链式 .then/.catch 或 async/await，告别回调地狱',
      '拦截器：请求前加 Token、响应后统一处理错误，一处配置全局生效',
      '简洁 API：axios.get/post/put/delete 一行调用，自动 JSON 转换',
      '浏览器支持：兼容 IE9+ 与主流浏览器，社区生态成熟稳定',
    ]}
    keyTakeaway="拦截器 + baseURL 让所有请求统一收口，维护成本最低。"
  />
);

// #7 终端：安装 axios
const Slide07: React.FC = () => (
  <TerminalSlide
    title="安装 axios"
    subtitle="一条命令装好 axios，并在 package.json 确认版本"
    commands={[
      {
        comment: '安装 axios',
        cmd: 'npm install axios',
        expected: 'added 8 packages in 3s',
      },
      {
        comment: '查看安装版本',
        cmd: 'npm list axios',
        expected: 'axios@1.7.7',
      },
    ]}
    takeaway="装完在 package.json 的 dependencies 能看到 axios，即可开始封装。"
  />
);

// #8 代码：axios 封装
const Slide08: React.FC = () => (
  <CodeBoxSlide
    title="axios 封装"
    subtitle="创建实例 + baseURL + 拦截器，统一收口所有请求"
    language="ts"
    filename="src/utils/request.ts"
    highlightLines={[6, 9, 10, 11, 14, 15]}
    code={`import axios from 'axios';

// 创建 axios 实例，统一配置 baseURL 与超时
const request = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
});

// 请求拦截器：统一加请求头
request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  return config;
});

// 响应拦截器：统一剥离 .data 并处理错误
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('请求失败:', error.message);
    return Promise.reject(error);
  },
);

export default request;`}
    takeaway="实例化 + 拦截器是 axios 封装的标准范式，后续所有接口复用 request。"
  />
);

// #9 代码：调用后端 API（保留原 day-08.ts 代码示例原文）
const Slide09: React.FC = () => (
  <CodeBoxSlide
    title="调用后端 API"
    subtitle="用封装好的实例发起 POST，把表单数据交给后端"
    language="javascript"
    filename="api.js (Vue 3)"
    highlightLines={[3, 4, 5, 8]}
    code={`import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export async function createPost(postData) {
  try {
    const response = await api.post('/posts', postData)
    return response.data
  } catch (error) {
    console.error('发布失败:', error)
    throw error
  }
}`}
    takeaway="createPost 把『发请求 → 取 data → 抛错误』三步封装成一个函数。"
  />
);

// #10 动画：请求跨域动效（CORSPreflight）
const Slide10: React.FC = () => (
  <AnimationSlide
    title="请求跨域动效"
    subtitle="浏览器 → OPTIONS 预检 → 后端响应 → 真实请求，看懂 CORS 全流程"
    animationType="CORSPreflight"
    caption="青色=预检请求 · 翠绿=预检响应 · 靛蓝=真实请求 · 翠绿=真实响应"
    takeaway="非简单请求会先发 OPTIONS 预检，后端放行后才发真实请求。"
  >
    <CORSPreflightAnimation
      origin={{ label: '前端 :5173' }}
      target={{ label: '后端 :8080' }}
      steps={[
        { label: '浏览器发起预检 OPTIONS', phase: 'preflight', desc: '非简单请求先问后端：允许我的源访问吗？' },
        { label: '后端返回预检响应 200 OK', phase: 'preflight-resp', desc: 'Access-Control-Allow-Origin 放行前端源' },
        { label: '浏览器发送真实请求 POST', phase: 'real-request', desc: '预检通过，正式提交帖子数据' },
        { label: '后端返回真实响应 200 OK', phase: 'real-resp', desc: '写入成功，返回新帖子数据' },
      ]}
    />
  </AnimationSlide>
);

// #11 概念：同源策略与 CORS（保留原 day-08.ts 端口示例与 @CrossOrigin 解法）
const Slide11: React.FC = () => (
  <ConceptSlide
    title="同源策略与 CORS"
    subtitle="浏览器默认拦截跨源请求，CORS 是后端主动放行的标准机制"
    badgeText="核心概念"
    bullets={[
      '同源定义：协议 + 域名 + 端口三者完全一致才算同源',
      '跨域场景：前端 http://localhost:5173 与后端 http://localhost:8080 端口不同，触发 CORS 拦截',
      'CORS 头：后端响应 Access-Control-Allow-Origin 等头部，声明允许哪些源访问',
      '解决方案：后端添加 @CrossOrigin 注解，放行前端源地址',
    ]}
    keyTakeaway="CORS 是浏览器的安全机制，必须由后端响应头来放行。"
  />
);

// #12 代码：后端 CORS 配置
const Slide12: React.FC = () => (
  <CodeBoxSlide
    title="后端 CORS 配置"
    subtitle="@CrossOrigin 注解 + CorsFilter 全局配置，双保险放行前端"
    language="java"
    filename="CorsConfig.java"
    highlightLines={[3, 12, 13, 14, 15, 16, 17, 18]}
    code={`package com.cike.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
  @Bean
  public CorsFilter corsFilter() {
    CorsConfiguration config = new CorsConfiguration();
    config.addAllowedOrigin("http://localhost:5173"); // 放行前端源
    config.addAllowedHeader("*");
    config.addAllowedMethod("*");
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
  }
}`}
    takeaway="也可在 Controller 方法上加 @CrossOrigin 注解做局部放行。"
  />
);

// #13 动画：联调数据流动效（DataFlow）
const Slide13: React.FC = () => (
  <AnimationSlide
    title="联调数据流动效"
    subtitle="前端 → axios → 后端 → 数据库 → 返回 → 渲染，数据在链路中流动"
    animationType="DataFlow"
    caption="靛蓝=前端 · 青色=axios · 紫罗兰=后端 · 翠绿=数据库"
    takeaway="联调成功 = 数据能在这四个节点间完整往返。"
  >
    <DataFlowAnimation
      nodes={[
        { id: 'fe', label: '前端页面', type: 'frontend' },
        { id: 'ax', label: 'axios', type: 'axios' },
        { id: 'be', label: '后端 API', type: 'backend' },
        { id: 'db', label: 'MySQL', type: 'db' },
      ]}
      steps={[
        { label: '提交表单', path: ['fe', 'ax'], desc: 'Vue 调用 createPost() 发起 POST' },
        { label: '转发后端', path: ['ax', 'be'], desc: 'axios 把请求发到 Spring Boot' },
        { label: '写入数据库', path: ['be', 'db'], desc: 'Service 调 Repository 保存帖子' },
        { label: '返回结果', path: ['db', 'be', 'ax'], desc: '数据库返回 → 后端响应 → axios 接收' },
        { label: '渲染列表', path: ['ax', 'fe'], desc: '前端拿到数据，刷新帖子列表' },
      ]}
    />
  </AnimationSlide>
);

// #14 代码：前端展示后端数据
const Slide14: React.FC = () => (
  <CodeBoxSlide
    title="前端展示后端数据"
    subtitle="axios 拉取列表，v-for 渲染帖子卡片，响应式自动更新"
    language="vue"
    filename="PostList.vue"
    highlightLines={[3, 7, 8, 9, 10, 15, 16, 17]}
    code={`<script setup lang="ts">
import { ref, onMounted } from 'vue';
import request from '@/utils/request';

const posts = ref<{ id: number; title: string; content: string }[]>([]);

const loadPosts = async () => {
  posts.value = await request.get('/posts');
};

onMounted(loadPosts);
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>`}
    takeaway="onMounted 自动拉数据 + v-for 渲染，列表页就有了真实帖子。"
  />
);

// #15 特效：联调成功效果（ConnectionSuccessEffect）
const Slide15: React.FC = () => (
  <EffectSlide
    title="联调成功效果"
    subtitle="数据流贯通动画 + 成功提示，标志前后端正式连通"
    effectType="ConnectionSuccessEffect"
    caption="前端提交 → 后端接收 → 数据库写入 → 成功返回"
    takeaway="看到这个绿色对勾，就说明 Day 8 联调里程碑达成。"
  >
    <ConnectionSuccessEffect
      title="「此刻」前后端联调成功"
      from={{ label: 'Vue 3 前端', icon: <Monitor className="h-7 w-7" /> }}
      to={{ label: 'Spring Boot 后端', icon: <Server className="h-7 w-7" /> }}
      dataFlow={['POST /api/posts', 'Controller 接收', 'Service 处理', 'MySQL 写入', '200 OK 返回']}
    />
  </EffectSlide>
);

// #16 提示词：AI 排查跨域报错
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 排查跨域报错"
    subtitle="把报错原文与技术栈喂给 AI，让它定位 CORS 配置缺漏"
    role="全栈助理"
    task="排查并解决前端 axios 调 Spring Boot 接口的跨域报错"
    stack="Vue 3 + axios / Spring Boot 3 / Maven"
    constraints="报错：CORS policy: No 'Access-Control-Allow-Origin' header；前端跑在 :5173，后端 :8080"
    outputFormat="给出后端 CORS 配置代码（@CrossOrigin 或 CorsFilter）与验证步骤"
    template={`你是一位熟练的全栈工程师。
前端 Vue 3 + axios 访问后端 Spring Boot 3 接口时，浏览器控制台报错：
"CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

环境：
- 前端：http://localhost:5173（Vite）
- 后端：http://localhost:8080（Spring Boot）

请：
1. 解释为什么会出现这个跨域错误
2. 给出两种解决方案：Controller 上的 @CrossOrigin 注解、全局 CorsFilter 配置
3. 给出验证步骤（重启后端、刷新前端、查看 Network 面板）`}
    takeaway="把报错原文 + 环境 + 期望方案写进提示词，AI 给的答案最可直接用。"
  />
);

// #17 练习：连通测试 Checkpoint ①（保留原 day-08.ts Checkpoint 交付要求）
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="连通测试 Checkpoint ①"
    subtitle="核心里程碑交付：从 Vue 页面提交表单可写入 MySQL 数据库"
    tasks={[
      '启动后端 Spring Boot 服务（:8080），确认 CORS 配置已放行 :5173',
      '启动前端 Vue 3 开发服务（:5173），确认 axios baseURL 指向后端',
      '在 Gitee 上初始化 ci-ke 联合仓库，前后端代码统一托管',
      '前端提交发布表单，触发 axios.post() 调用后端接口',
      '后端接收并成功插入 MySQL 数据库，返回 200 OK',
      '刷新页面看到真实数据，完成 Checkpoint ① 检查打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教确认你的前后端已正式贯通！"
  />
);

// #18 终端：联调调试三板斧
const Slide18: React.FC = () => (
  <TerminalSlide
    title="联调调试三板斧"
    subtitle="Network 面板 / Console / 后端日志，三处定位联调问题"
    commands={[
      {
        comment: '① 浏览器 Network 面板：看请求状态码与响应头',
        cmd: '→ 检查 OPTIONS 预检是否 200，响应是否含 Access-Control-Allow-Origin',
        expected: 'Status: 200 OK · Headers: access-control-allow-origin: http://localhost:5173',
      },
      {
        comment: '② Console 控制台：看前端报错与 axios 拦截器日志',
        cmd: '→ 检查是否有 CORS 报错或 4xx/5xx',
        expected: '无红色错误，console.error 请求失败信息已剥离',
      },
      {
        comment: '③ 后端控制台日志：看接口是否被调用',
        cmd: '→ 检查 Spring Boot 日志是否打印 POST /api/posts',
        expected: 'Tomcat: POST /api/posts 200 12ms',
      },
    ]}
    takeaway="联调出问题先看 Network 状态码，再分前端 Console / 后端日志两头查。"
  />
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 8 知识检查"
    subtitle="4 道题，确认你掌握了需求拆解、axios、CORS 原因与同源策略"
    questions={[
      {
        question: '需求拆解四步法中，『约定 /api/posts、POST/GET、入参与返回』属于哪一步？',
        options: ['功能拆分', '接口定义', '数据流', '边界确认'],
        answer: 1,
        explanation: '接口定义负责约定路径、方法、入参与返回结构，是前后端协作的契约。',
      },
      {
        question: 'axios 相比直接用 fetch 最突出的工程价值是？',
        options: [
          '运行速度比 fetch 快十倍',
          '拦截器统一处理请求头与错误、自动 JSON 转换',
          '可以替代 Vue 3 框架',
          '内置数据库连接池',
        ],
        answer: 1,
        explanation: '拦截器让 Token 注入与错误处理一处配置全局生效，是 axios 的核心工程价值。',
      },
      {
        question: '前端 :5173 访问后端 :8080 报 CORS 错误，根本原因是？',
        options: [
          '后端代码有语法错误',
          '端口不同导致浏览器同源策略拦截跨源请求',
          '前端没装 axios',
          '数据库没启动',
        ],
        answer: 1,
        explanation: '协议/域名/端口任一不同即跨源，浏览器会拦截，需后端用 CORS 头放行。',
      },
      {
        question: '判定两个页面『同源』要求哪三项完全一致？',
        options: [
          '协议 + 域名 + 端口',
          'URL + 方法 + 头部',
          '前端 + 后端 + 数据库',
          '用户名 + 密码 + Token',
        ],
        answer: 0,
        explanation: '同源 = 协议 + 域名 + 端口三者完全相同，任一不同即为跨源。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="前后端正式贯通，明天进入提示词工程与用户系统"
    dayNumber={8}
    takeaways={[
      '需求拆解四步法：功能拆分 / 接口定义 / 数据流 / 边界确认',
      'axios 实例 + baseURL + 拦截器，统一收口所有 HTTP 请求',
      '同源策略导致跨域，CORS 由后端响应头放行前端源',
      '@CrossOrigin 与 CorsFilter 双方式解决 Spring Boot 跨域',
      '联调成功：Vue 表单 → axios → Spring Boot → MySQL 贯通',
    ]}
    nextDayPreview="Day 9 — 提示词工程 · AI Agent · 用户系统（登录认证）"
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

export const day08Deck: DayDeckRenderer = {
  meta: {
    day: 8,
    stageName: '第六阶段：生态力量',
    title: 'Day 8 — 需求拆解 · 前后端联调 (axios + CORS)',
    subtitle: '贯通前后端任督二脉，解决跨域问题与接口对接',
    duration: '90 分钟',
    target: '掌握将想法拆解为"表→API→页面"的方法，用 axios 连通 Vue 3 与 Spring Boot',
    output: '前后端完整联调成功，从 Vue 页面提交表单可写入 MySQL 数据库',
    aiPractice: '豆包 → "前端 axios 报跨域错误，Spring Boot 怎么配置 @CrossOrigin？"',
    slides: [
      { id: 'd8-s1', title: '需求拆解与前后端联调', subtitle: 'axios + CORS 贯通「此刻」前后端', layout: 'cover', instructorNotes: '开场强调今天是前后端贯通的里程碑，axios 与 CORS 是两大工具。', keyTakeaway: '联调 = 让前端页面真正读写后端数据库。' },
      { id: 'd8-s2', title: 'Day 8 学习路线图', subtitle: '需求拆解→axios→CORS→联调→Checkpoint 5 目标', layout: 'steps', instructorNotes: '用 5 目标串起今日主线，每段对应一个交付。', keyTakeaway: '5 目标串成一条线，终点是 Checkpoint ⑤ 联调贯通。' },
      { id: 'd8-s3', title: '需求拆解思维', subtitle: '功能拆分/接口定义/数据流/边界 四步法', layout: 'concept', instructorNotes: '强调先拆后写，避免联调返工。', keyTakeaway: '拆清楚再写代码，联调阶段就不会反复返工。' },
      { id: 'd8-s4', title: '「此刻」功能架构图', subtitle: '前端页面+后端API+数据库 三层关系', layout: 'concept', instructorNotes: '借架构图让学员看清数据走向。', keyTakeaway: '联调就是让这条链路从上到下贯通。' },
      { id: 'd8-s5', title: '前后端独立 vs 联调', subtitle: '各自开发 vs 连通 / Mock 数据 vs 真实数据', layout: 'comparison', instructorNotes: '对比独立与联调，凸显联调的价值。', keyTakeaway: '联调是把『各自能跑』变成『一起能跑』的关键一跃。' },
      { id: 'd8-s6', title: 'axios HTTP 客户端', subtitle: 'Promise/拦截器/简洁API/浏览器支持 四特点', layout: 'concept', instructorNotes: '讲清 axios 相比 fetch 的工程价值。', keyTakeaway: '拦截器 + baseURL 让所有请求统一收口。' },
      { id: 'd8-s7', title: '安装 axios', subtitle: 'npm install axios + 验证版本', layout: 'split_code', instructorNotes: '演示安装并确认版本写入 dependencies。', keyTakeaway: 'package.json 出现 axios 即可开始封装。' },
      { id: 'd8-s8', title: 'axios 封装', subtitle: '创建实例 + baseURL + 拦截器', layout: 'split_code', instructorNotes: '重点讲拦截器统一加头与错误处理。', keyTakeaway: '实例化 + 拦截器是 axios 封装的标准范式。' },
      { id: 'd8-s9', title: '调用后端 API', subtitle: 'axios.post(/posts) 发布帖子示例', layout: 'split_code', instructorNotes: '保留原始 createPost 代码，演示 async/await 用法。', keyTakeaway: 'createPost 把发请求、取 data、抛错误三步收口。' },
      { id: 'd8-s10', title: '请求跨域动效', subtitle: '浏览器→OPTIONS预检→后端→真实请求', layout: 'concept', instructorNotes: '用动画讲清预检与真实请求两阶段。', keyTakeaway: '非简单请求先发 OPTIONS 预检，后端放行才发真实请求。' },
      { id: 'd8-s11', title: '同源策略与 CORS', subtitle: '同源定义/跨域场景/CORS头/解决方案 四要点', layout: 'concept', instructorNotes: '保留原始端口示例 5173/8080 与 @CrossOrigin 解法。', keyTakeaway: 'CORS 是浏览器安全机制，必须由后端响应头放行。' },
      { id: 'd8-s12', title: '后端 CORS 配置', subtitle: '@CrossOrigin + CorsFilter 配置', layout: 'split_code', instructorNotes: '演示全局 CorsFilter 与局部 @CrossOrigin 两种方式。', keyTakeaway: '@CrossOrigin 局部放行、CorsFilter 全局放行，按需选择。' },
      { id: 'd8-s13', title: '联调数据流动效', subtitle: '前端→axios→后端→DB→返回→渲染', layout: 'concept', instructorNotes: '用动画串联整条数据链路。', keyTakeaway: '联调成功 = 数据能在四个节点间完整往返。' },
      { id: 'd8-s14', title: '前端展示后端数据', subtitle: 'v-for 渲染帖子列表 + 响应式更新', layout: 'split_code', instructorNotes: '演示 onMounted 拉数据 + v-for 渲染。', keyTakeaway: 'onMounted 拉数据 + v-for 渲染，列表页就有真实帖子。' },
      { id: 'd8-s15', title: '联调成功效果', subtitle: '数据流贯通动画 + 成功提示', layout: 'concept', instructorNotes: '用成功动效收束联调里程碑。', keyTakeaway: '绿色对勾 = Day 8 联调里程碑达成。' },
      { id: 'd8-s16', title: 'AI 排查跨域报错', subtitle: '角色:全栈助理 / 任务:解决CORS / 栈:Spring+Vue', layout: 'prompt_template', instructorNotes: '演示把报错原文+环境喂给 AI 的提示词写法。', keyTakeaway: '报错原文 + 环境 + 期望方案 = AI 给出可直接用的答案。' },
      { id: 'd8-s17', title: '连通测试 Checkpoint ①', subtitle: '启动后端→启动前端→访问→看到数据→打卡', layout: 'exercise', instructorNotes: '保留原始 Checkpoint ① 交付要求。', keyTakeaway: '从 Vue 提交到写入 MySQL，Checkpoint ① 打卡完成。' },
      { id: 'd8-s18', title: '联调调试三板斧', subtitle: 'Network面板/Console/后端日志 三板斧', layout: 'split_code', instructorNotes: '教三处定位联调问题的方法。', keyTakeaway: '先看 Network 状态码，再分前端 Console / 后端日志两头查。' },
      { id: 'd8-s19', title: 'Day 8 知识检查', subtitle: '需求拆解/axios/CORS原因/同源策略 4 题', layout: 'concept', instructorNotes: '4 题快速检验今日掌握度。', keyTakeaway: '四步法、axios 拦截器、CORS 由后端放行、同源三要素。' },
      { id: 'd8-s20', title: '今日总结', subtitle: '前后端贯通 + 明日提示词工程+用户系统', layout: 'summary', instructorNotes: '收束今日并预告 Day 9。', keyTakeaway: '前后端贯通达成，明天进入提示词工程与用户系统。' },
    ],
  },
  Render,
};