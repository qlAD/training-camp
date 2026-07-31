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
import { FlowchartDiagram } from './shared/diagrams';
import { LoginFlowAnimation, PromptOptimizationAnimation } from './shared/animations';
import { LoginInteractiveEffect } from './shared/effects';

// #1 封面：提示词工程与用户系统
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第六阶段：生态力量"
    badgeText="Day 9 · 课程讲义"
    title="提示词工程 · AI Agent · 用户系统"
    subtitle="掌握结构化提示词神技，用 Agent 快速搭建注册与登录"
    bullets={[
      '结构化 Prompt 五段式：角色 + 任务 + 栈 + 约束 + 输出',
      '认识 AI Agent 与 Reasonix：感知 / 规划 / 工具 / 执行 / 反思',
      '90 分钟完成「此刻」用户注册与登录模块（含 JWT 鉴权）',
    ]}
  />
);

// #2 议程：Day 9 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 9 学习路线图"
    subtitle="提示词 → Agent → Reasonix → 用户系统 → 登录 5 目标"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '提示词工程', desc: '掌握结构化 Prompt 四原则与五段式模板' },
      { title: 'AI Agent', desc: '理解 Agent 五能力与工作流循环' },
      { title: 'Reasonix', desc: '认识字节 Agent 级 IDE 的自主编码能力' },
      { title: '用户系统', desc: '设计 User 实体与认证逻辑，生成 JWT Token' },
      { title: '登录联调', desc: '前端登录表单 + 后端接口 + Token 鉴权闭环' },
    ]}
  />
);

// #3 概念：提示词工程
const Slide03: React.FC = () => (
  <ConceptSlide
    title="提示词工程"
    subtitle="清晰 / 结构化 / 上下文 / 迭代 四原则"
    badgeText="核心概念"
    bullets={[
      '清晰：明确说出要什么，避免「帮我写个东西」式模糊表达',
      '结构化：用角色 / 任务 / 约束 / 输出分段，让 AI 抓得住重点',
      '上下文：给足技术栈、字段、业务背景，AI 才能对症下药',
      '迭代：第一版不满意很正常，追问修正比一次到位更现实',
    ]}
    keyTakeaway="好提示词 = 清晰意图 + 结构化表达 + 充足上下文 + 持续迭代。"
  />
);

// #4 对比：烂提示 vs 好提示
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="烂提示 vs 好提示"
    subtitle="模糊 vs 具体 / 无背景 vs 给角色 / 一句话 vs 结构化"
    left={{ title: '烂提示', items: ['「帮我写个登录」', '没说技术栈，AI 只能猜', '没给字段与校验规则', '输出泛泛，无法直接用'] }}
    right={{ title: '好提示', items: ['角色 + 任务 + 栈 + 约束 + 输出 五段式', '明确 Vue3 + Spring Boot + JWT', '指定用户名/密码必填、BCrypt 加密', '一次产出可运行的前后端代码'] }}
    leftLabel="烂提示"
    rightLabel="好提示"
    keyTakeaway="同样的 AI，结构化提示词能让产出质量从 40 分跳到 90 分。"
  />
);

// #5 提示词：结构化提示词模板
const Slide05: React.FC = () => (
  <PromptSlide
    title="结构化提示词模板"
    subtitle="角色 + 任务 + 栈 + 约束 + 输出 五段式"
    role="资深全栈开发工程师"
    task="为「此刻」社区实现用户注册与登录完整功能"
    stack="Vue 3 + Element Plus + Spring Boot 3 + JPA + MySQL"
    constraints="1. 密码使用 BCrypt 加密存储；2. 登录成功返回 UserDTO 对象；3. 包含前端 Element Plus 表单代码与后端 Controller 代码"
    outputFormat="请分别输出前端 Component 与后端 Java 代码"
    template={`【角色】：你是一个资深全栈工程师
【任务】：实现用户注册与登录功能
【约束】：
 1. 密码使用 BCrypt 加密存储
 2. 登录成功返回 UserDTO 对象
 3. 包含前端 Element Plus 表单代码与后端 Controller 代码
【输出】：请分别输出前端 Component 与后端 Java 代码`}
    takeaway="五段式模板是让 AI 稳定产出可运行代码的关键。"
  />
);

// #6 动画：提示词优化动效
const Slide06: React.FC = () => (
  <AnimationSlide
    title="提示词优化动效"
    subtitle="烂 Prompt → 迭代 → 好 Prompt → 好结果"
    animationType="PromptOptimization"
    caption="红色 = 低质量 / 琥珀 = 中等 / 绿色 = 高质量"
    takeaway="迭代是提示词工程的常态，每次追问都在逼近好结果。"
  >
    <PromptOptimizationAnimation
      versions={[
        { label: 'v1 烂提示', prompt: '帮我写个登录', result: '返回一个泛泛的 HTML 表单，没有技术栈、没有校验、没有后端', quality: 30 },
        { label: 'v2 加上下文', prompt: '用 Vue3 帮我写个登录表单', result: '有了 Vue 表单，但仍缺校验规则与后端对接', quality: 55 },
        { label: 'v3 结构化', prompt: '角色:全栈 / 任务:登录 / 栈:Vue3+Spring / 约束:BCrypt / 输出:前后端', result: '一次产出含校验的前端表单与后端 Controller，可直接运行', quality: 90 },
      ]}
    />
  </AnimationSlide>
);

// #7 概念：AI Agent 是什么
const Slide07: React.FC = () => (
  <ConceptSlide
    title="AI Agent 是什么"
    subtitle="感知 / 规划 / 工具 / 执行 / 反思 五能力"
    badgeText="核心概念"
    bullets={[
      '感知：接收用户指令与环境信息，理解要解决什么问题',
      '规划：把大目标拆成可执行步骤，决定先做什么后做什么',
      '工具：调用搜索、代码执行、文件读写等外部能力',
      '执行：按计划逐步操作，产出中间结果',
      '反思：检查结果是否达标，不达标则调整方案再来一轮',
    ]}
    keyTakeaway="Agent = 能感知、会规划、用工具、可执行、懂反思的智能体。"
  />
);

// #8 图解：Agent 工作流图
const Slide08: React.FC = () => (
  <DiagramSlide
    title="Agent 工作流图"
    subtitle="输入 → 理解 → 调用工具 → 执行 → 反馈 循环"
    badgeText="架构图解"
    caption="Agent 在「反馈」不达标时会回到「规划」重新拆解，形成闭环"
    takeaway="Agent 的核心是「规划-执行-反思」循环，而非一次性问答。"
  >
    <FlowchartDiagram
      nodes={[
        { id: 'input', label: '用户输入', type: 'start' },
        { id: 'understand', label: '理解意图', type: 'process' },
        { id: 'plan', label: '规划步骤', type: 'decision' },
        { id: 'tool', label: '调用工具', type: 'io' },
        { id: 'exec', label: '执行操作', type: 'process' },
        { id: 'feedback', label: '反馈检查', type: 'decision' },
        { id: 'output', label: '输出结果', type: 'end' },
      ]}
      edges={[
        { from: 'input', to: 'understand' },
        { from: 'understand', to: 'plan' },
        { from: 'plan', to: 'tool' },
        { from: 'tool', to: 'exec' },
        { from: 'exec', to: 'feedback' },
        { from: 'feedback', to: 'output', label: '达标' },
        { from: 'feedback', to: 'plan', label: '不达标' },
      ]}
    />
  </DiagramSlide>
);

// #9 概念：Reasonix 介绍
const Slide09: React.FC = () => (
  <ConceptSlide
    title="Reasonix 介绍"
    subtitle="字节 Agent 级 IDE / 自主编码 / 多轮协作 三特点"
    badgeText="工具认知"
    bullets={[
      '字节出品的 Agent 级 IDE，把 AI 从「补全助手」升级为「编码主体」',
      '自主编码：给出需求后可自主拆解、读写文件、运行调试，端到端交付',
      '多轮协作：支持长上下文多轮对话，边写边改边验证，逼近可用产物',
    ]}
    keyTakeaway="Reasonix 让「描述需求 → 拿到可运行代码」的链路真正跑通。"
  />
);

// #10 代码：用户实体设计
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="用户实体设计"
    subtitle="User.java + id / username / password / email"
    language="java"
    filename="User.java"
    highlightLines={[4, 6, 7, 9, 10, 12]}
    code={`package com.cike.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    private String email;

    // getter / setter 省略
}`}
    takeaway="JPA 实体用 @Entity + @Id 标注，主键自增交给 @GeneratedValue。"
  />
);

// #11 代码：用户认证逻辑
const Slide11: React.FC = () => (
  <CodeBoxSlide
    title="用户认证逻辑"
    subtitle="UserService.login() + 密码校验"
    language="java"
    filename="UserService.java"
    highlightLines={[14, 15, 16, 17, 18, 19]}
    code={`package com.cike.service;

import com.cike.model.User;
import com.cike.repository.UserRepository;
import com.cike.util.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(String username, String rawPassword) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("用户不存在"));
        if (!encoder.matches(rawPassword, user.getPassword())) {
            throw new RuntimeException("密码错误");
        }
        return JwtUtil.generateToken(user.getUsername());
    }
}`}
    takeaway="BCrypt.matches 验证明文与哈希；密码绝不明文存储。"
  />
);

// #12 动画：登录流程动效
const Slide12: React.FC = () => (
  <AnimationSlide
    title="登录流程动效"
    subtitle="输入 → 校验 → 生成 Token → 返回 → 存储"
    animationType="LoginFlow"
    caption="登录表单 → 提交凭证 → 认证服务 → 用户库 → 签发令牌 → 重定向"
    takeaway="登录的本质：校验凭证 + 签发令牌 + 前端持久化。"
  >
    <LoginFlowAnimation
      steps={[
        { label: '填写账号密码', node: 'form', desc: '用户在登录表单输入凭证' },
        { label: '提交到认证服务', node: 'submit', desc: '前端 POST /api/login' },
        { label: '查询用户库', node: 'service', desc: 'UserService 按用户名查库' },
        { label: '比对密码哈希', node: 'db', desc: 'BCrypt 校验密文' },
        { label: '签发 JWT Token', node: 'token', desc: '认证通过生成 Token' },
        { label: '返回并重定向', node: 'redirect', desc: '前端存 Token 跳转首页' },
      ]}
    />
  </AnimationSlide>
);

// #13 代码：JWT Token 生成
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="JWT Token 生成"
    subtitle="jjwt 依赖 + 生成 / 解析 Token"
    language="java"
    filename="JwtUtil.java"
    highlightLines={[8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20]}
    code={`package com.cike.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

public class JwtUtil {
    private static final String SECRET = "cike-secret-key-2026";

    public static String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 86400000))
            .signWith(SignatureAlgorithm.HS256, SECRET)
            .compact();
    }

    public static String parseToken(String token) {
        return Jwts.parser()
            .setSigningKey(SECRET)
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
}`}
    takeaway="JWT = Header.Payload.Signature，签名保证 Token 不可篡改。"
  />
);

// #14 代码：前端登录页面
const Slide14: React.FC = () => (
  <CodeBoxSlide
    title="前端登录页面"
    subtitle="ElForm 登录表单 + axios 调用"
    language="vue"
    filename="Login.vue"
    highlightLines={[6, 7, 8, 11, 12, 13, 14, 15]}
    code={`<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import axios from 'axios';

const router = useRouter();
const formRef = ref();
const loginForm = reactive({ username: '', password: '' });

const submit = async () => {
  await formRef.value?.validate();
  const { data } = await axios.post('/api/login', loginForm);
  localStorage.setItem('token', data.token);
  ElMessage.success('登录成功');
  router.push('/');
};
</script>

<template>
  <el-form ref="formRef" :model="loginForm" label-width="72px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" type="password" show-password />
    </el-form-item>
    <el-button type="primary" @click="submit">登录</el-button>
  </el-form>
</template>`}
    takeaway="登录成功后把 Token 存入 localStorage，后续请求带上 Authorization 头。"
  />
);

// #15 特效：登录交互效果
const Slide15: React.FC = () => (
  <EffectSlide
    title="登录交互效果"
    subtitle="表单 + Token + 跳转动效"
    effectType="LoginInteractiveEffect"
    caption="输入凭证 → 校验通过 → 签发 Token → 存储并跳转"
    takeaway="完整登录闭环：表单 → 鉴权 → Token → 持久化 → 跳转。"
  >
    <LoginInteractiveEffect
      title="「此刻」登录流程"
      steps={[
        { label: '输入账号密码', detail: 'ElForm 双向绑定 loginForm' },
        { label: '提交登录请求', detail: 'axios POST /api/login' },
        { label: '后端校验通过', detail: 'BCrypt 比对成功，签发 JWT' },
        { label: '存储 Token 并跳转', detail: 'localStorage 保存，router.push 首页' },
      ]}
    />
  </EffectSlide>
);

// #16 提示词：AI 生成用户系统
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 生成用户系统"
    subtitle="角色:全栈助理 / 任务:登录注册 / 栈:Spring+Vue+JWT"
    role="全栈助理"
    task="生成「此刻」用户注册与登录完整模块"
    stack="Spring Boot 3 + JPA + MySQL + Vue 3 + Element Plus + JWT"
    constraints="User 实体含 id/username/password/email；密码 BCrypt 加密；登录返回 JWT Token；前端含 Register.vue 与 Login.vue"
    outputFormat="后端 UserController / UserService / User 实体 + JwtUtil + 前端 Login.vue / Register.vue"
    template={`【角色】：你是一个全栈助理
【任务】：为「此刻」社区生成用户注册与登录完整模块
【技术栈】：Spring Boot 3 + JPA + MySQL + Vue 3 + Element Plus + JWT
【约束】：
 1. User 实体含 id / username / password / email
 2. 密码使用 BCrypt 加密存储
 3. 登录成功返回 JWT Token
 4. 前端含 Register.vue 与 Login.vue（Element Plus 表单）
【输出】：后端 UserController / UserService / User 实体 + JwtUtil + 前端 Login.vue / Register.vue`}
    takeaway="一个结构化 Prompt 就能让 AI 产出完整的用户系统脚手架。"
  />
);

// #17 练习：完成用户模块
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="完成用户模块"
    subtitle="实体 → API → 前端 → 联调 → 打卡"
    tasks={[
      '用结构化 Prompt 让 AI 生成 User 实体、UserController、UserService',
      '生成 JwtUtil，实现登录成功签发 Token',
      '让 AI 生成 Login.vue 与 Register.vue（Element Plus 表单）',
      '启动后端 + 前端，测试注册新账号并用该账号登录',
      '截图登录成功效果并在企微群打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评你的用户系统！"
  />
);

// #18 终端：接口测试
const Slide18: React.FC = () => (
  <TerminalSlide
    title="接口测试"
    subtitle="Postman 测试登录 + Token 返回"
    commands={[
      {
        comment: '测试登录接口',
        cmd: 'curl -X POST http://localhost:8080/api/login -H "Content-Type: application/json" -d \'{"username":"train","password":"123456"}\'',
        expected: '{\n  "code": 200,\n  "token": "eyJhbGciOiJIUzI1NiJ9..."\n}',
      },
      {
        comment: '带 Token 访问受保护接口',
        cmd: 'curl http://localhost:8080/api/posts -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9..."',
        expected: '{\n  "code": 200,\n  "data": [ ... ]\n}',
      },
    ]}
    takeaway="登录返回 Token，后续请求带上 Authorization: Bearer <token> 即可鉴权。"
  />
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 9 知识检查"
    subtitle="提示词四原则 / Agent 五能力 / JWT 作用 / 认证流程 4 题"
    questions={[
      {
        question: '结构化提示词的「五段式」指的是？',
        options: [
          '角色 + 任务 + 栈 + 约束 + 输出',
          '标题 + 正文 + 结尾 + 图片 + 链接',
          '问题 + 假设 + 实验 + 结论 + 复盘',
          '输入 + 处理 + 存储 + 查询 + 输出',
        ],
        answer: 0,
        explanation: '五段式 = 角色 / 任务 / 技术栈 / 约束 / 输出格式，是让 AI 稳定产出的关键。',
      },
      {
        question: '以下哪一项不属于 AI Agent 的核心能力？',
        options: ['感知', '规划', '编译', '反思'],
        answer: 2,
        explanation: 'Agent 五能力为感知 / 规划 / 工具 / 执行 / 反思，编译不属于 Agent 核心能力。',
      },
      {
        question: 'JWT Token 的主要作用是？',
        options: [
          '压缩前端打包体积',
          '在客户端与服务端之间安全传递鉴权信息',
          '加密数据库密码',
          '加速 Vue 渲染',
        ],
        answer: 1,
        explanation: 'JWT 用签名保证不可篡改，常用于登录后颁发令牌、后续请求鉴权。',
      },
      {
        question: '用户登录认证流程正确顺序是？',
        options: [
          '生成 Token → 输密码 → 存库 → 校验',
          '输密码 → 后端比对哈希 → 签发 Token → 前端存储',
          '签发 Token → 前端存储 → 输密码 → 比对',
          '存库 → 签发 Token → 输密码 → 比对',
        ],
        answer: 1,
        explanation: '先提交凭证，后端用 BCrypt 比对哈希，通过后签发 Token，前端持久化。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="用户系统就绪 + 明日 AI Debug + 信息流"
    dayNumber={9}
    takeaways={[
      '结构化提示词五段式（角色 / 任务 / 栈 / 约束 / 输出）让 AI 稳定产出',
      'AI Agent = 感知 / 规划 / 工具 / 执行 / 反思 五能力的智能体',
      'Reasonix 是字节 Agent 级 IDE，能端到端自主编码',
      '用户系统：User 实体 + BCrypt 加密 + JWT 鉴权',
      '「此刻」用户注册登录模块就绪，明日进入 AI Debug 与首页信息流',
    ]}
    nextDayPreview="Day 10 — AI Debug 思维 · MVP 原则 · 首页信息流"
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

export const day09Deck: DayDeckRenderer = {
  meta: {
    day: 9,
    stageName: '第六阶段：生态力量',
    title: 'Day 9 — 提示词工程 · Reasonix / AI Agent 引入 · 用户系统',
    subtitle: '掌握结构化提示词神技，用 Agent 快速搭建注册与登录',
    duration: '90 分钟',
    target: '熟练运用三段式结构化提示词，利用 AI Agent 高效完成用户系统模块',
    output: '用户注册/登录完整模块 (含密码加密、前端表单与 Token 鉴权)',
    aiPractice: '万能提示词模板 → 角色 + 任务 + 技术栈 + 约束 + 输出',
    slides: [
      { id: 'd9-s1', title: '提示词工程与用户系统', subtitle: 'Prompt 进阶 / Agent 认知 / 登录认证', layout: 'cover', instructorNotes: '开场介绍 Day 9 三大主题：提示词工程、AI Agent、用户系统。强调今天会用结构化提示词让 AI 一次性生成注册登录代码。', keyTakeaway: '结构化提示词 + AI Agent 是今天高效产出用户系统的两大利器。' },
      { id: 'd9-s2', title: 'Day 9 学习路线图', subtitle: '提示词→Agent→Reasonix→用户系统→登录 5 目标', layout: 'steps', instructorNotes: '用 5 个目标串起今天的学习路径，先提示词再 Agent 最后落地用户系统。', keyTakeaway: '5 目标递进：提示词→Agent→Reasonix→用户系统→登录联调。' },
      { id: 'd9-s3', title: '提示词工程', subtitle: '清晰 / 结构化 / 上下文 / 迭代 四原则', layout: 'concept', instructorNotes: '讲解四原则时结合反例，让学生体会模糊提示词的代价。', keyTakeaway: '好提示词 = 清晰意图 + 结构化表达 + 充足上下文 + 持续迭代。' },
      { id: 'd9-s4', title: '烂提示 vs 好提示对比', subtitle: '模糊 vs 具体 / 无背景 vs 给角色 / 一句话 vs 结构化', layout: 'comparison', instructorNotes: '左右对比让学生直观感受提示词质量对产出的影响。', keyTakeaway: '结构化提示词能让产出质量从 40 分跳到 90 分。' },
      { id: 'd9-s5', title: '结构化提示词模板', subtitle: '角色+任务+栈+约束+输出 五段式', layout: 'prompt_template', instructorNotes: '五段式模板是今天反复使用的万能公式，建议学生记下来。', keyTakeaway: '五段式模板（角色/任务/栈/约束/输出）让 AI 稳定产出可运行代码。' },
      { id: 'd9-s6', title: '提示词优化动效', subtitle: '烂 Prompt→迭代→好 Prompt→好结果', layout: 'concept', instructorNotes: '动效展示三个版本提示词的质量分变化，强调迭代是常态。', keyTakeaway: '迭代是提示词工程的常态，每次追问都在逼近好结果。' },
      { id: 'd9-s7', title: 'AI Agent 是什么', subtitle: '感知 / 规划 / 工具 / 执行 / 反思 五能力', layout: 'concept', instructorNotes: '用人类做事的流程类比 Agent 五能力，帮助学生建立直觉。', keyTakeaway: 'Agent = 能感知、会规划、用工具、可执行、懂反思的智能体。' },
      { id: 'd9-s8', title: 'Agent 工作流图', subtitle: '输入→理解→调用工具→执行→反馈 循环', layout: 'concept', instructorNotes: '重点讲「反馈不达标回到规划」的闭环，这是 Agent 区别于一次性问答的关键。', keyTakeaway: 'Agent 的核心是「规划-执行-反思」循环。' },
      { id: 'd9-s9', title: 'Reasonix 介绍', subtitle: '字节 Agent 级 IDE / 自主编码 / 多轮协作', layout: 'concept', instructorNotes: '介绍 Reasonix 时可现场演示一段自主编码，让学生感受 Agent 级 IDE 的能力。', keyTakeaway: 'Reasonix 让「描述需求 → 拿到可运行代码」的链路真正跑通。' },
      { id: 'd9-s10', title: '用户实体设计', subtitle: 'User.java + id / username / password / email', layout: 'split_code', instructorNotes: '讲解 JPA 实体注解，强调密码字段绝不明文存储。', keyTakeaway: 'JPA 实体用 @Entity + @Id 标注，主键自增交给 @GeneratedValue。' },
      { id: 'd9-s11', title: '用户认证逻辑', subtitle: 'UserService.login() + 密码校验', layout: 'split_code', instructorNotes: '重点讲 BCrypt.matches 的用法，明文与哈希比对返回布尔。', keyTakeaway: 'BCrypt.matches 验证明文与哈希；密码绝不明文存储。' },
      { id: 'd9-s12', title: '登录流程动效', subtitle: '输入→校验→生成 Token→返回→存储', layout: 'concept', instructorNotes: '动效展示登录全流程，重点强调签发 Token 与前端持久化两个环节。', keyTakeaway: '登录的本质：校验凭证 + 签发令牌 + 前端持久化。' },
      { id: 'd9-s13', title: 'JWT Token 生成', subtitle: 'jjwt 依赖 + 生成 / 解析 Token', layout: 'split_code', instructorNotes: '讲解 JWT 三段结构，签名保证不可篡改。jjwt 是 Java 生态常用库。', keyTakeaway: 'JWT = Header.Payload.Signature，签名保证 Token 不可篡改。' },
      { id: 'd9-s14', title: '前端登录页面', subtitle: 'ElForm 登录表单 + axios 调用', layout: 'split_code', instructorNotes: '前端登录表单用 ElForm + axios，成功后存 Token 并跳转。', keyTakeaway: '登录成功后把 Token 存入 localStorage，后续请求带上 Authorization 头。' },
      { id: 'd9-s15', title: '登录交互效果', subtitle: '表单 + Token + 跳转动效', layout: 'concept', instructorNotes: '动效展示完整登录闭环，可暂停讲解每个环节。', keyTakeaway: '完整登录闭环：表单 → 鉴权 → Token → 持久化 → 跳转。' },
      { id: 'd9-s16', title: 'AI 生成用户系统', subtitle: '角色:全栈助理 / 任务:登录注册 / 栈:Spring+Vue+JWT', layout: 'prompt_template', instructorNotes: '这个 Prompt 是今天的核心产出物，用它一次性生成用户系统脚手架。', keyTakeaway: '一个结构化 Prompt 就能让 AI 产出完整的用户系统脚手架。' },
      { id: 'd9-s17', title: '完成用户模块', subtitle: '实体→API→前端→联调→打卡', layout: 'exercise', instructorNotes: '引导学生按步骤完成用户模块，强调注册新账号并登录的闭环验证。', keyTakeaway: '实体→API→前端→联调，跑通注册登录闭环。' },
      { id: 'd9-s18', title: '接口测试', subtitle: 'Postman 测试登录 + Token 返回', layout: 'split_code', instructorNotes: '用 curl 模拟 Postman 测试，重点演示 Token 返回与带 Token 访问受保护接口。', keyTakeaway: '登录返回 Token，后续请求带上 Authorization: Bearer <token> 鉴权。' },
      { id: 'd9-s19', title: 'Day 9 知识检查', subtitle: '提示词四原则 / Agent 五能力 / JWT 作用 / 认证流程 4 题', layout: 'concept', instructorNotes: '4 题快速检验，重点关注 Agent 五能力与 JWT 作用的错题。', keyTakeaway: '掌握提示词四原则、Agent 五能力、JWT 鉴权与认证流程。' },
      { id: 'd9-s20', title: '今日总结', subtitle: '用户系统就绪 + 明日 AI Debug + 信息流', layout: 'summary', instructorNotes: '总结今天三大产出，预告明天 AI Debug 与首页信息流。', keyTakeaway: '用户系统就绪，明日进入 AI Debug 与首页信息流。' },
    ],
  },
  Render,
};
