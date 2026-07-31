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
  AnimationSlide,
  EffectSlide,
  DiagramSlide,
} from './shared/layouts';
import { ArchitectureDiagram } from './shared/diagrams';
import { RequestFlowAnimation } from './shared/animations';
import { APIResponseShowcase } from './shared/effects';

// #1 封面：Spring Boot 3 后端入门
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第五阶段：初始后端"
    badgeText="Day 6 · 课程讲义"
    title="Spring Boot 3 后端入门"
    subtitle="搭建项目骨架，编写第一个 GET API，前后端首次打通"
    bullets={[
      'Spring Boot 3：Java 领域最流行的后端框架，约定优于配置',
      'MVC 分层：Controller → Service → Repository 各司其职',
      '90 分钟跑通第一个 GET 接口：http://localhost:8080/api/hello',
    ]}
  />
);

// #2 议程：Day 6 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 6 学习路线图"
    subtitle="从后端认知到第一个 GET API，5 个目标串成一条线"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '认知后端', desc: '理解后端四大职责与前端的边界' },
      { title: '认识 Spring Boot', desc: '掌握 Spring Boot 3 的核心优势与架构分层' },
      { title: '搭建项目', desc: '用 Spring Initializr 创建项目并解析目录结构' },
      { title: '理解 MVC', desc: '掌握 Controller-Service-Repository 请求流转' },
      { title: '写出 API', desc: '编写 @RestController 第一个 GET 接口并访问验证' },
    ]}
  />
);

// #3 概念：后端是什么
const Slide03: React.FC = () => (
  <ConceptSlide
    title="后端是什么？后端在忙什么？"
    subtitle="业务逻辑、数据持久化与安全卫士"
    badgeText="核心概念"
    bullets={[
      '🌐 RESTful API：前后端通信的标准语言 (GET / POST / PUT / DELETE)',
      '🏗️ Spring Boot 3：Java 领域最流行的后端框架，开箱即用',
      '📐 三层架构：Controller (接收请求) → Service (业务计算) → Repository (读写数据库)',
      '🛡️ 安全校验：验证用户身份，保护数据隐私与合规',
    ]}
    keyTakeaway="后端 = 业务逻辑 + 数据存储 + API 服务 + 鉴权，四件事缺一不可。"
  />
);

// #4 对比：前端 vs 后端
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="前端 vs 后端对比"
    subtitle="浏览器运行 vs 服务器运行 / 展示 vs 业务 / 用户可见 vs 不可见"
    leftLabel="前端"
    rightLabel="后端"
    left={{
      title: '前端 (Frontend)',
      items: [
        '运行在浏览器，用户直接可见',
        '负责展示与交互：UI、动画、表单',
        '技术栈：HTML / CSS / Vue / React',
        '关注体验：加载速度、视觉、可用性',
      ],
    }}
    right={{
      title: '后端 (Backend)',
      items: [
        '运行在服务器，用户不可见',
        '负责业务与数据：API、数据库、鉴权',
        '技术栈：Java / Spring Boot / MySQL',
        '关注稳定：并发、安全、数据一致性',
      ],
    }}
    keyTakeaway="前端管「长什么样」，后端管「能做什么 + 数据在哪」。"
  />
);

// #5 概念：Spring Boot 3 介绍
const Slide05: React.FC = () => (
  <ConceptSlide
    title="Spring Boot 3 介绍"
    subtitle="Java 后端事实标准，四大优势让开发提速"
    badgeText="核心概念"
    bullets={[
      '约定优于配置：合理默认值，免去繁琐 XML 配置',
      '内嵌 Tomcat：无需部署 war 包，main 方法一键启动',
      'Starter 依赖：spring-boot-starter-web 一行引入 Web 全家桶',
      '自动装配：根据依赖自动注入 Bean，开箱即用',
    ]}
    keyTakeaway="Spring Boot 把 Spring 的复杂配置自动化，让 Java 后端开发像搭积木一样简单。"
  />
);

// #6 图解：Spring Boot 架构图
const Slide06: React.FC = () => (
  <DiagramSlide
    title="Spring Boot 架构图"
    subtitle="Controller-Service-Repository-DB 分层，请求自上而下流转"
    badgeText="架构图解"
    takeaway="分层让职责清晰：Controller 接请求，Service 做业务，Repository 读写库。"
  >
    <ArchitectureDiagram
      direction="vertical"
      layers={[
        { title: '客户端', nodes: [{ label: '浏览器 / HTTP 客户端', sublabel: '发起 HTTP 请求', tone: 'cyan' }] },
        { title: 'Controller 层', nodes: [{ label: 'HelloController', sublabel: '接收请求 / 返回 JSON', tone: 'indigo' }] },
        { title: 'Service 层', nodes: [{ label: '业务逻辑', sublabel: '校验 / 编排', tone: 'violet' }] },
        { title: 'Repository 层', nodes: [{ label: '数据访问', sublabel: 'JDBC / JPA', tone: 'amber' }] },
        { title: '数据库', nodes: [{ label: 'MySQL / 存储', sublabel: '持久化数据', tone: 'emerald' }] },
      ]}
    />
  </DiagramSlide>
);

// #7 终端：Spring Initializr 创建项目
const Slide07: React.FC = () => (
  <TerminalSlide
    title="Spring Initializr 创建项目"
    subtitle="start.spring.io 选依赖 + 下载解压，30 秒生成项目骨架"
    commands={[
      {
        comment: '浏览器打开项目生成器',
        cmd: 'open https://start.spring.io',
        expected: 'Spring Initializr 页面：选择 Project / Language / Spring Boot 版本',
      },
      {
        comment: '关键依赖（唯一必选）',
        cmd: 'Dependencies: Spring Web',
        expected: '提供 RESTful 接口支持，自动内嵌 Tomcat + Spring MVC',
      },
      {
        comment: '下载并解压',
        cmd: 'unzip demo.zip -d cike-backend',
        expected: '生成 pom.xml + src/main/java + src/main/resources',
      },
    ]}
    takeaway="Spring Web 一个 Starter 就够了：自动带上 Tomcat + Spring MVC。"
  />
);

// #8 代码：项目结构解析
const Slide08: React.FC = () => (
  <CodeBoxSlide
    title="项目结构解析"
    subtitle="src/main/java 放代码、resources 放配置、pom.xml 管依赖"
    filename="cike-backend/"
    language="text"
    showLineNumbers={false}
    code={`cike-backend/
├── pom.xml                    # Maven 依赖与构建配置
├── src/
│   ├── main/
│   │   ├── java/com/example/cike/
│   │   │   └── CikeApplication.java   # 启动入口（含 main 方法）
│   │   └── resources/
│   │       └── application.yml        # 应用配置（端口/数据源）
│   └── test/                          # 单元测试
└── mvnw / mvnw.cmd                    # Maven Wrapper`}
    takeaway="代码在 src/main/java，配置在 resources，依赖在 pom.xml。"
  />
);

// #9 代码：application.yml 配置
const Slide09: React.FC = () => (
  <CodeBoxSlide
    title="application.yml 配置"
    subtitle="server.port / datasource / context-path 全在这里"
    filename="application.yml"
    language="yaml"
    highlightLines={[2, 3]}
    code={`server:
  port: 8080                    # 服务端口
  servlet:
    context-path: /             # 上下文路径

spring:
  application:
    name: cike-backend          # 应用名
  # datasource:                 # 明天接入 MySQL 时启用
  #   url: jdbc:mysql://localhost:3306/cike
  #   username: root
  #   password: ***`}
    takeaway="application.yml 是后端的「配置中心」，改端口/数据源都在这。"
  />
);

// #10 概念：MVC 分层架构
const Slide10: React.FC = () => (
  <ConceptSlide
    title="MVC 分层架构"
    subtitle="Model / View / Controller + Service / Repository 五层各司其职"
    badgeText="核心概念"
    bullets={[
      'Controller：接收 HTTP 请求，参数校验后调用 Service，组装响应',
      'Service：业务逻辑编排，是后端的「大脑」，事务边界在这层',
      'Repository：数据访问层，封装数据库读写（JDBC / JPA / MyBatis）',
      'Model：数据载体（DTO / Entity），在不同层之间传递结构化数据',
    ]}
    keyTakeaway="后端分层 = Controller 接请求 + Service 做业务 + Repository 读写库。"
  />
);

// #11 动画：请求流转动效
const Slide11: React.FC = () => (
  <AnimationSlide
    title="请求流转动效"
    subtitle="Request → Controller → Service → Repository → Response"
    animationType="RequestFlow"
    caption="点击播放或单步切换，观察分层调用与响应回流"
    takeaway="请求自上而下流转，响应原路返回，分层解耦。"
  >
    <RequestFlowAnimation
      layers={[
        { label: 'Controller' },
        { label: 'Service' },
        { label: 'Repository' },
        { label: 'Database' },
      ]}
      steps={[
        { label: '1. 请求到达 Controller', highlight: [0], desc: 'HTTP GET /api/hello 进入 HelloController' },
        { label: '2. 调用 Service 业务', highlight: [1], desc: 'Service 编排业务逻辑（本例简化直返）' },
        { label: '3. Repository 读写库', highlight: [2], desc: '需要持久化时访问数据库' },
        { label: '4. 响应返回客户端', highlight: [0], desc: 'Controller 将结果序列化为 JSON 返回' },
      ]}
    />
  </AnimationSlide>
);

// #12 代码：第一个 Controller
const Slide12: React.FC = () => (
  <CodeBoxSlide
    title="第一个 Controller"
    subtitle={'@RestController + @RequestMapping("/api") + @GetMapping("/hello")'}
    filename="HelloController.java"
    language="java"
    highlightLines={[7, 8, 11]}
    code={`package com.example.cike.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> sayHello() {
        return Map.of(
            "message", "Hello from CiKE API!",
            "status", "success",
            "timestamp", String.valueOf(System.currentTimeMillis())
        );
    }
}`}
    takeaway="@RestController 让方法直接返回 JSON 对象，@GetMapping 定制 URL 路由。"
  />
);

// #13 代码：@RestController 注解
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="@RestController 注解"
    subtitle="@RestController vs @Controller + @ResponseBody"
    filename="RestControllerCompare.java"
    language="java"
    code={`// ✅ 写 REST API：@RestController = @Controller + @ResponseBody
@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> sayHello() {
        return Map.of("message", "Hello");  // 自动序列化为 JSON
    }
}

// ⚠️ 传统 @Controller：默认返回视图名，需手动加 @ResponseBody 才返 JSON
@Controller
public class PageController {

    @GetMapping("/hello")
    @ResponseBody                   // 缺它则按视图名渲染页面
    public Map<String, String> sayHello() {
        return Map.of("message", "Hello");
    }
}`}
    takeaway="@RestController 是 @Controller + @ResponseBody 的组合注解，写 API 必备。"
  />
);

// #14 终端：启动 Spring Boot 应用
const Slide14: React.FC = () => (
  <TerminalSlide
    title="启动 Spring Boot 应用"
    subtitle="mvn spring-boot:run 或 IDEA 点击 Run，看日志确认端口"
    commands={[
      {
        cmd: 'mvn spring-boot:run',
        expected:
          '... Tomcat started on port(s): 8080 (http)\n... Started CikeApplication in 2.134 seconds',
      },
      {
        comment: '或打包后运行',
        cmd: 'mvn clean package -DskipTests',
        expected: 'BUILD SUCCESS',
      },
      {
        cmd: 'java -jar target/cike-backend-0.0.1-SNAPSHOT.jar',
        expected: 'Tomcat started on port 8080',
      },
    ]}
    takeaway="看到「Started ... in N seconds」与 Tomcat 8080 即启动成功。"
  />
);

// #15 特效：API 响应展示
const Slide15: React.FC = () => (
  <EffectSlide
    title="API 响应展示"
    subtitle="浏览器访问 /api/hello，返回美化 JSON"
    effectType="APIResponseShowcase"
    caption="GET /api/hello · 200 OK · application/json"
    takeaway="一个 GET 请求，后端返回结构化 JSON，前端就能解析渲染。"
  >
    <APIResponseShowcase
      endpoint={{ method: 'GET', path: '/api/hello', status: 200 }}
      response={{
        message: 'Hello from CiKE API!',
        status: 'success',
        timestamp: '1690000000000',
      }}
      title="Hello API 响应"
      responseTime={12}
    />
  </EffectSlide>
);

// #16 提示词：用 AI 生成 API
const Slide16: React.FC = () => (
  <PromptSlide
    title="用 AI 生成 API"
    subtitle="结构化提示词：角色 / 任务 / 栈 / 约束 / 输出"
    role="Java 后端助理"
    task="生成一个 GET 接口"
    stack="Spring Boot 3 + Spring Web"
    constraints="接口路径 /api/hello，返回 JSON"
    outputFormat="完整 HelloController.java 文件 + 启动命令"
    template={`你是一位资深 Java 后端工程师。

请用 Spring Boot 3 帮我生成一个 REST API：
- 接口：GET /api/hello
- 返回 JSON：{ "message": "Hello from CiKE API!", "status": "success", "timestamp": "<当前时间戳>" }
- 包名：com.example.cike.controller

要求：
1. 使用 @RestController + @RequestMapping + @GetMapping
2. 返回 Map<String, String>，由 Jackson 自动序列化
3. 附带 mvn 启动命令`}
    takeaway="把路径、返回结构、包名写清楚，AI 一次就能生成可运行的 Controller。"
  />
);

// #17 练习：启动 Spring Boot 后端
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="启动你的 Spring Boot 后端"
    subtitle="验证你的第一个 API"
    tasks={[
      '使用 Spring Initializr 或 IDEA 快速建项目（Dependencies: Spring Web）',
      '让 AI 生成 HelloController.java 文件',
      '点击 Run 启动服务器，打开浏览器访问 http://localhost:8080/api/hello',
      '看到 JSON 响应后截图打卡提交',
    ]}
  />
);

// #18 终端：curl 测试 API
const Slide18: React.FC = () => (
  <TerminalSlide
    title="curl 测试 API"
    subtitle="命令行验证接口，查看响应头与 JSON"
    commands={[
      {
        cmd: 'curl http://localhost:8080/api/hello',
        expected:
          '{"message":"Hello from CiKE API!","status":"success","timestamp":"1690000000000"}',
      },
      {
        comment: '带响应头与状态码',
        cmd: 'curl -i http://localhost:8080/api/hello',
        expected:
          'HTTP/1.1 200\nContent-Type: application/json\n\n{"message":"Hello from CiKE API!",...}',
      },
    ]}
    takeaway="200 + application/json 即接口正常；前后端联调从此开始。"
  />
);

// #19 知识检查：Day 6 Quiz
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 6 知识检查"
    subtitle="后端职责 / SpringBoot 优势 / MVC 分层 / @RestController 4 题"
    questions={[
      {
        question: '后端的核心职责不包括下列哪一项？',
        options: ['业务逻辑处理', '数据持久化存储', '页面视觉动画', '提供 RESTful API'],
        answer: 2,
        explanation: '页面视觉动画属于前端职责；后端负责业务、数据与 API。',
      },
      {
        question: 'Spring Boot 3 最显著的优点是？',
        options: [
          '必须手动配置 XML',
          '约定优于配置 + 内嵌 Tomcat',
          '只能用 JSP 渲染',
          '不支持自动装配',
        ],
        answer: 1,
        explanation: 'Spring Boot 靠约定优于配置、内嵌容器与自动装配大幅降低开发成本。',
      },
      {
        question: 'MVC 分层中负责接收 HTTP 请求的是？',
        options: ['Repository', 'Service', 'Controller', 'Model'],
        answer: 2,
        explanation: 'Controller 接收并路由请求，Service 处理业务，Repository 读写数据库。',
      },
      {
        question: '@RestController 等价于哪个组合？',
        options: [
          '@Controller + @Service',
          '@Controller + @ResponseBody',
          '@Component + @Configuration',
          '@Repository + @Bean',
        ],
        answer: 1,
        explanation:
          '@RestController = @Controller + @ResponseBody，方法返回值直接序列化为 JSON。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="后端骨架就绪，明天接入 MySQL + 完整 CRUD"
    dayNumber={6}
    takeaways={[
      '后端 = 业务逻辑 + 数据存储 + API 服务 + 鉴权，四大职责',
      'Spring Boot 3 靠约定优于配置、内嵌 Tomcat、Starter、自动装配提速',
      'Controller-Service-Repository 分层让请求流转清晰可维护',
      '@RestController + @GetMapping 写出第一个 GET 接口 /api/hello',
      'Hello API 已跑通，前后端首次打通，明日接入 MySQL 实现 CRUD',
    ]}
    nextDayPreview="Day 7 — MySQL 安装配置 + 实体类 + 完整 CRUD"
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
      return null;
  }
};

export const day06Deck: DayDeckRenderer = {
  meta: {
    day: 6,
    stageName: '第五阶段：初始后端',
    title: 'Day 6 — Spring Boot 3 项目骨架 · 第一个 GET API',
    subtitle: '进入 Java 后端世界，理解 MVC 分层与 RESTful 接口',
    duration: '90 分钟',
    target: '理解 Controller-Service-Repository 分层，用 Spring Boot 编写第一个 GET 接口',
    output: 'Hello API 成功运行，访问 http://localhost:8080/api/hello 返回 JSON',
    aiPractice: '豆包 → "用 Spring Boot 3 生成一个 REST API，GET /api/hello 返回 JSON"',
    slides: [
      {
        id: 'd6-s1',
        title: 'Spring Boot 3 后端入门',
        subtitle: '搭建项目骨架，编写第一个 GET API，前后端首次打通',
        layout: 'cover',
        instructorNotes: '开场用「前端已就绪，数据从哪来」切入，引出后端。强调今天只做 GET，明天才接数据库。',
        keyTakeaway: '后端骨架 + 第一个 GET API = 前后端打通的第一步。',
      },
      {
        id: 'd6-s2',
        title: 'Day 6 学习路线图',
        subtitle: '后端认知→SpringBoot→项目搭建→MVC→API 5 目标',
        layout: 'steps',
        instructorNotes: '带学员过 5 个目标，强调最后一条「写出 API」是今天的验收点。',
        keyTakeaway: '5 目标递进：认知→框架→搭建→分层→出 API。',
      },
      {
        id: 'd6-s3',
        title: '后端是什么？后端在忙什么？',
        subtitle: '业务逻辑、数据持久化与安全卫士',
        layout: 'concept',
        instructorNotes: '用餐厅比喻：前端是菜单与装潢，后端是厨房与仓库。把四大职责讲透。',
        keyTakeaway: '后端 = 业务逻辑 + 数据存储 + API 服务 + 鉴权。',
      },
      {
        id: 'd6-s4',
        title: '前端 vs 后端对比',
        subtitle: '浏览器运行vs服务器运行/展示vs业务/用户可见vs不可见',
        layout: 'comparison',
        instructorNotes: '让学员举一个功能（如登录）说明前端做什么、后端做什么，强化边界感。',
        keyTakeaway: '前端管「长什么样」，后端管「能做什么 + 数据在哪」。',
      },
      {
        id: 'd6-s5',
        title: 'Spring Boot 3 介绍',
        subtitle: '约定优于配置/内嵌Tomcat/Starter/自动装配 四优势',
        layout: 'concept',
        instructorNotes: '对比传统 Spring 的 XML 配置痛苦，凸显 Boot 的「开箱即用」。',
        keyTakeaway: 'Spring Boot = 约定优于配置 + 内嵌容器 + Starter + 自动装配。',
      },
      {
        id: 'd6-s6',
        title: 'Spring Boot 架构图',
        subtitle: 'Controller-Service-Repository-DB 分层图',
        layout: 'concept',
        instructorNotes: '指着图讲清每层职责，强调今天 Hello 示例主要走 Controller，Service/Repository 明天接入。',
        keyTakeaway: '分层让职责清晰：Controller 接请求，Service 做业务，Repository 读写库。',
      },
      {
        id: 'd6-s7',
        title: 'Spring Initializr 创建项目',
        subtitle: 'start.spring.io 选依赖 + 下载解压',
        layout: 'steps',
        instructorNotes: '现场打开 start.spring.io 演示选 Spring Web 依赖，强调 Group/Artifact 命名规范。',
        keyTakeaway: 'Spring Web 一个 Starter 即带 Tomcat + Spring MVC。',
      },
      {
        id: 'd6-s8',
        title: '项目结构解析',
        subtitle: 'src/main/java + application.yml + pom.xml',
        layout: 'split_code',
        instructorNotes: '讲清 main/java 放代码、resources 放配置、test 放测试；pom.xml 管依赖。',
        keyTakeaway: '代码在 src/main/java，配置在 resources，依赖在 pom.xml。',
      },
      {
        id: 'd6-s9',
        title: 'application.yml 配置',
        subtitle: 'server.port/datasource/context-path',
        layout: 'split_code',
        instructorNotes: '演示改端口为 8080，强调 yml 缩进敏感；datasource 明天才填。',
        keyTakeaway: 'application.yml 是后端的「配置中心」，改端口/数据源都在这。',
      },
      {
        id: 'd6-s10',
        title: 'MVC 分层架构',
        subtitle: 'Model/View/Controller + Service/Repository 五层',
        layout: 'concept',
        instructorNotes: '把经典 MVC 与后端 Service/Repository 结合讲，避免与前端 MVC 混淆。',
        keyTakeaway: '后端分层 = Controller + Service + Repository，各司其职。',
      },
      {
        id: 'd6-s11',
        title: '请求流转动效',
        subtitle: 'Request→Controller→Service→Repository→Response',
        layout: 'concept',
        instructorNotes: '点播放让学员看清请求自上而下、响应原路返回，强调解耦。',
        keyTakeaway: '请求向下流转，响应向上返回，分层解耦。',
      },
      {
        id: 'd6-s12',
        title: '第一个 Controller',
        subtitle: '@RestController + @GetMapping("/hello")',
        layout: 'split_code',
        instructorNotes: '逐行讲注解：@RestController、@RequestMapping("/api")、@GetMapping。强调返回 Map 自动转 JSON。',
        keyTakeaway: '@RestController 让方法返回值直接序列化为 JSON。',
      },
      {
        id: 'd6-s13',
        title: '@RestController 注解',
        subtitle: '@RestController vs @Controller + @ResponseBody',
        layout: 'split_code',
        instructorNotes: '对比两种写法，强调写 API 用 @RestController，写页面用 @Controller。',
        keyTakeaway: '@RestController = @Controller + @ResponseBody，写 API 必备。',
      },
      {
        id: 'd6-s14',
        title: '启动 Spring Boot 应用',
        subtitle: 'mvn spring-boot:run / java -jar + 启动日志',
        layout: 'steps',
        instructorNotes: '演示 IDEA 点 Run 与命令行两种方式，教看启动日志找端口。',
        keyTakeaway: '看到 Started + Tomcat 8080 即启动成功。',
      },
      {
        id: 'd6-s15',
        title: 'API 响应展示',
        subtitle: 'JSON 响应美化卡片',
        layout: 'concept',
        instructorNotes: '浏览器访问 /api/hello，让学员看到 JSON；引出前端如何 fetch 这个接口。',
        keyTakeaway: 'GET 接口返回结构化 JSON，前端解析即可渲染。',
      },
      {
        id: 'd6-s16',
        title: '用 AI 生成 API',
        subtitle: '角色:Java助理/任务:GET API/栈:Spring Boot 3',
        layout: 'prompt_template',
        instructorNotes: '演示把路径、返回结构、包名写进 Prompt，AI 一次生成可运行 Controller。',
        keyTakeaway: '结构化 Prompt 让 AI 一次生成可运行的 Controller。',
      },
      {
        id: 'd6-s17',
        title: '启动 Spring Boot 后端',
        subtitle: '创建项目→写Controller→启动→访问→打卡',
        layout: 'exercise',
        instructorNotes: '巡场指导，常见坑：包名错、端口被占、忘记选 Spring Web。',
        keyTakeaway: '跑通 /api/hello 返回 JSON 即打卡成功。',
      },
      {
        id: 'd6-s18',
        title: 'curl 测试 API',
        subtitle: 'curl http://localhost:8080/api/hello + 响应',
        layout: 'split_code',
        instructorNotes: '教 curl -i 看响应头；Windows 学员可用 Invoke-WebRequest 或浏览器。',
        keyTakeaway: '200 + application/json 即接口正常，前后端联调从此开始。',
      },
      {
        id: 'd6-s19',
        title: 'Day 6 知识检查',
        subtitle: '后端职责/SpringBoot优势/MVC分层/@RestController 4题',
        layout: 'concept',
        instructorNotes: '让学员现场作答，错题重点回顾第 3、4 题。',
        keyTakeaway: '四题覆盖：后端职责、Boot 优势、分层、@RestController。',
      },
      {
        id: 'd6-s20',
        title: '今日总结',
        subtitle: '后端骨架就绪 + 明日 MySQL+CRUD',
        layout: 'summary',
        instructorNotes: '收尾强调明天接 MySQL，今天只做内存返回的 Hello API。',
        keyTakeaway: '后端骨架就绪，明日接入 MySQL 实现完整 CRUD。',
      },
    ],
  },
  Render,
};
