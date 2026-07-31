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
import { QuadrantDiagram } from './shared/diagrams';
import { DataTable } from './shared/data-display';
import { BugFixAnimation } from './shared/animations';
import { QualityImprovementEffect } from './shared/effects';

// #1 封面：功能完善 · Bug 修复 · 项目 Checklist
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第七阶段：部署运维"
    badgeText="Day 11 · 课程讲义"
    title="功能完善 · Bug 修复 · 项目 Checklist"
    subtitle="全员代码磨合与体验收拢，打造生产级稳定应用"
    bullets={[
      '收尾打磨：对照上线 Checklist 逐条检查边界与体验',
      '质量提升：修复残留 Bug，完善评论区与异常处理',
      '文档收口：撰写 README，git 提交规范化收尾',
    ]}
  />
);

// #2 议程：Day 11 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 11 学习路线图"
    subtitle="Bug 修复 → 边界处理 → 重构 → Checklist → 文档，5 个目标串成收尾闭环"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: 'Bug 修复', desc: '掌握常见 Bug 修复流程，借助 AI 批量定位与修复' },
      { title: '边界处理', desc: '处理空数据、超长文本、并发与网络异常等边界情况' },
      { title: '代码重构', desc: '通过提取函数、消除重复提升代码可维护性' },
      { title: 'Checklist', desc: '对照功能/UI/性能/文档清单逐条验收' },
      { title: '文档收口', desc: '撰写 README 并规范 git 提交，项目终稿收尾' },
    ]}
  />
);

// #3 概念：项目收尾思维
const Slide03: React.FC = () => (
  <ConceptSlide
    title="项目收尾思维"
    subtitle="从『能跑』到『好交付』，四维度评估项目成熟度"
    badgeText="核心概念"
    bullets={[
      '完整性：功能闭环、流程无断点，主流程与异常分支都能走通',
      '健壮性：边界输入不崩溃，异常有兜底，错误提示友好可恢复',
      '可维护：分层清晰、命名规范、重复逻辑抽取，他人能接手',
      '规范度：代码有注释、提交有规范、文档有 README，团队协作友好',
    ]}
    keyTakeaway="收尾不是『再加功能』，而是把四维度打磨到位。"
  />
);

// #4 图解：项目质量维度图（四象限）
const Slide04: React.FC = () => (
  <DiagramSlide
    title="项目质量维度图"
    subtitle="功能 / 性能 / 代码 / 文档 四象限，全面评估项目健康度"
    badgeText="质量图解"
    caption="四象限：代码 / 功能 / 文档 / 性能，每格列出关键检查项"
    takeaway="四象限均衡发展，才能交付一个『好用且好维护』的项目。"
  >
    <QuadrantDiagram
      axes={{ xLabel: '工程视角', yLabel: '用户视角', xPositiveLabel: '外在', yPositiveLabel: '体验' }}
      quadrants={[
        { label: '代码', items: ['分层清晰', '命名规范', '重复消除'], tone: 'violet' },
        { label: '功能', items: ['主流程闭环', '边界有处理', '异常有兜底'], tone: 'amber' },
        { label: '文档', items: ['README 规范', '接口文档', '提交记录清晰'], tone: 'cyan' },
        { label: '性能', items: ['首屏 < 2s', '接口 < 300ms', '无内存泄漏'], tone: 'emerald' },
      ]}
    />
  </DiagramSlide>
);

// #5 代码：全局异常处理统一格式（保留原 day-11.ts 代码原文）
const Slide05: React.FC = () => (
  <CodeBoxSlide
    title="全局异常处理统一格式"
    subtitle="用 GlobalExceptionHandler 兜底 NPE / 空指针 / 异步顺序 / 边界值 等常见 Bug"
    language="java"
    filename="GlobalExceptionHandler.java"
    highlightLines={[1, 2, 4, 5]}
    code={`@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleException(Exception e) {
        return ResponseEntity.status(500).body(Map.of(
            "code", 500,
            "message", e.getMessage() != null ? e.getMessage() : "服务器内部错误",
            "timestamp", System.currentTimeMillis()
        ));
    }
}`}
    takeaway="全局异常处理器是最后一道防线，把 500 错误转成统一 JSON，避免后端崩溃白屏。"
  />
);

// #6 提示词：AI 批量修 Bug
const Slide06: React.FC = () => (
  <PromptSlide
    title="AI 批量修 Bug"
    subtitle="把报错清单喂给 AI，让它批量定位根因并给出修复方案"
    role="全栈 Debug 助理"
    task="批量修复「此刻」项目残留 Bug"
    stack="全栈（Vue 3 + Spring Boot 3 + MySQL）+ 报错清单"
    constraints="逐条给出根因分析与修复 diff；优先修复影响主流程的 Bug；不引入新依赖"
    outputFormat="Markdown 报告：每条 Bug 含【根因】【修复代码】【回归验证步骤】"
    template={`你是一位资深全栈 Debug 工程师。
请帮我批量修复「此刻」项目的残留 Bug，报错清单如下：

1. POST /api/posts 偶发 500：标题为空时后端 NPE
2. 评论列表加载时偶尔顺序错乱（异步并发）
3. 帖子内容超长时前端布局溢出
4. 网络断开时前端无提示，按钮卡死

请逐条输出：
-【根因】一两句话说明为什么会发生
-【修复代码】给出关键代码片段（后端 Java / 前端 Vue）
-【回归验证】如何验证已修复且未引入新问题

优先处理影响主流程的 Bug，不引入新依赖。`}
    takeaway="结构化报错清单 + 根因/修复/验证三段式，是让 AI 稳定修 Bug 的关键。"
  />
);

// #7 动画：Bug 修复流程动效
const Slide07: React.FC = () => (
  <AnimationSlide
    title="Bug 修复流程动效"
    subtitle="发现 → 定位 → 修复 → 回归 → 关闭，一个 Bug 的完整生命周期"
    animationType="BugFix"
    caption="红色=高危 · 琥珀=中危 · 绿色=低危；每 1.8 秒自动推进下一步"
    takeaway="修复不是改完就结束，回归验证通过才算真正关闭。"
  >
    <BugFixAnimation
      bug={{ label: 'POST /api/posts 标题为空时 NPE', severity: 'high' }}
      fixSteps={[
        { label: '发现', desc: '测试提交空标题，后端抛 NullPointerException' },
        { label: '定位', desc: '堆栈指向 PostService.create 的 title.length() 调用' },
        { label: '修复', desc: '增加空值校验 + GlobalExceptionHandler 兜底' },
        { label: '回归', desc: '重放空标题/超长/特殊字符用例，全部通过' },
        { label: '关闭', desc: '更新 Bug 看板状态为 Done，提交修复 commit' },
      ]}
    />
  </AnimationSlide>
);

// #8 代码：边界情况处理
const Slide08: React.FC = () => (
  <CodeBoxSlide
    title="边界情况处理"
    subtitle="空数据 / 超长文本 / 并发 / 网络异常，四种边界的标准处理"
    language="vue"
    filename="BoundaryGuard.vue"
    highlightLines={[6, 8, 11, 14]}
    code={`<script setup lang="ts">
import { ElMessage } from 'element-plus';

const onSubmit = async (title: string) => {
  // 1. 空数据：前置校验，挡在请求前
  if (!title?.trim()) return ElMessage.warning('标题不能为空');
  // 2. 超长文本：截断 + 提示
  const safe = title.slice(0, 200);
  try {
    // 3. 网络异常：try/catch 兜底，给出友好提示
    await api.post('/api/posts', { title: safe });
    ElMessage.success('发布成功');
  } catch (e) {
    ElMessage.error('网络异常，请稍后重试');
  }
};
</script>`}
    takeaway="边界处理口诀：空值前置挡、超长要截断、并发加锁序、网络必兜底。"
  />
);

// #9 对比：修复前后对比
const Slide09: React.FC = () => (
  <ComparisonSlide
    title="修复前后对比"
    subtitle="同样一个边界输入，崩溃 vs 健壮、无提示 vs 友好提示"
    leftLabel="修复前"
    rightLabel="修复后"
    left={{
      title: '脆弱版本',
      items: [
        '空标题提交 → 后端 NPE → 500 白屏',
        '超长内容 → 前端布局溢出',
        '网络断开 → 按钮卡死无反馈',
        '错误只甩一句 500，用户摸不着头脑',
      ],
    }}
    right={{
      title: '健壮版本',
      items: [
        '空标题前置校验 + 友好提示',
        '超长内容自动截断并提醒',
        '网络异常 try/catch + 重试提示',
        '统一 JSON 错误码 + 可读 message',
      ],
    }}
    keyTakeaway="健壮不是不报错，而是报错时让用户知道发生了什么、该怎么做。"
  />
);

// #10 概念：代码规范
const Slide10: React.FC = () => (
  <ConceptSlide
    title="代码规范"
    subtitle="命名 / 注释 / 分层 / 单一职责，四条规范让代码可读可维护"
    badgeText="工程规范"
    bullets={[
      '命名规范：变量名词化、函数动词化、布尔用 is/has/can 前缀，见名知意',
      '注释规范：复杂逻辑写为什么，而非写做了什么；公共 API 必有 Javadoc',
      '分层规范：Controller 不写业务、Service 不直接返 HTML、Repository 只管数据',
      '单一职责：一个函数/类只做一件事，超过 50 行考虑拆分',
    ]}
    keyTakeaway="规范的本质是降低沟通成本，让下一个人（含未来的自己）能秒懂。"
  />
);

// #11 代码：重构示例
const Slide11: React.FC = () => (
  <CodeBoxSlide
    title="重构示例"
    subtitle="提取函数 / 消除重复 / 简化逻辑，三招让代码瘦身"
    language="ts"
    filename="refactor.ts"
    highlightLines={[14, 15, 16, 18, 19]}
    code={`// 重构前：重复的校验逻辑散落各处
function createPost(p: Post) {
  if (!p.title) throw new Error('标题空');
  if (p.title.length > 200) throw new Error('标题长');
  // ...创建逻辑
}
function updatePost(p: Post) {
  if (!p.title) throw new Error('标题空');
  if (p.title.length > 200) throw new Error('标题长');
  // ...更新逻辑
}

// 重构后：提取函数 + 消除重复 + 单一职责
function validateTitle(title: string) {
  if (!title?.trim()) throw new Error('标题不能为空');
  if (title.length > 200) throw new Error('标题不能超过 200 字');
}
const createPost = (p: Post) => { validateTitle(p.title); /* 创建 */ };
const updatePost = (p: Post) => { validateTitle(p.title); /* 更新 */ };`}
    takeaway="重构三招：重复的提函数、嵌套的早返回、长函数拆小函数，行为不变代码更轻。"
  />
);

// #12 特效：代码质量提升
const Slide12: React.FC = () => (
  <EffectSlide
    title="代码质量提升"
    subtitle="重构前后对比墙：质量分提升、问题数下降"
    effectType="QualityImprovement"
    caption="左：重构前 · 右：重构后；中间数字为质量分提升与问题数下降"
    takeaway="重构的收益可量化：质量分上升、问题数下降、维护成本随之降低。"
  >
    <QualityImprovementEffect
      before={{ score: 62, label: '重构前', issues: 18 }}
      after={{ score: 91, label: '重构后', issues: 4 }}
      title="代码质量评分"
    />
  </EffectSlide>
);

// #13 概念：上线前 Checklist 检查清单（保留原 day-11.ts 四条备注原文）
const Slide13: React.FC = () => (
  <ConceptSlide
    title="上线前 Checklist 检查清单"
    subtitle="从开发态迈向生产态，逐条打勾验收"
    badgeText="上线清单"
    bullets={[
      '✅ 表单校验: 空标题、过长文本、未选择分类的提示',
      '✅ 异常捕获: 全局 GlobalExceptionHandler 捕获 500 报错',
      '✅ 用户体验: 数据加载时的 Loading 骨架屏或转圈提示',
      '✅ 边界处理: 评论区无数据时的空状态占位图',
    ]}
    keyTakeaway="Checklist 不是形式，而是把『没想到』变成『已验收』。"
  />
);

// #14 图解：Checklist 矩阵图
const Slide14: React.FC = () => (
  <DiagramSlide
    title="Checklist 矩阵图"
    subtitle="功能 / UI / 性能 / 文档 / 部署 五类清单条目矩阵"
    badgeText="清单矩阵"
    caption="按类别逐条验收，✅ 已完成 · ⏳ 收尾待办"
    takeaway="把 Checklist 拆成矩阵，收尾进度一目了然。"
  >
    <DataTable
      title="项目收尾 Checklist"
      headers={['类别', '条目', '状态']}
      rows={[
        ['功能', '帖子发布/列表/详情闭环', '✅'],
        ['功能', '评论列表与发表评论', '✅'],
        ['UI', 'Loading 骨架屏与空状态', '✅'],
        ['UI', '移动端响应式适配', '⏳'],
        ['性能', '首屏加载 < 2s', '✅'],
        ['性能', '接口响应 < 300ms', '⏳'],
        ['文档', 'README 含安装与使用', '✅'],
        ['文档', '接口文档与截图', '⏳'],
        ['部署', 'jar 包打包成功', '⏳'],
        ['部署', 'Nginx 配置就绪', '⏳'],
      ]}
      tone="indigo"
    />
  </DiagramSlide>
);

// #15 代码：README 规范
const Slide15: React.FC = () => (
  <CodeBoxSlide
    title="README 规范"
    subtitle="标题 / 截图 / 安装 / 使用 / 技术栈，一份合格 README 的模板"
    language="markdown"
    filename="README.md"
    highlightLines={[1, 3, 9, 15, 19]}
    code={`# 此刻 · 校园生活社区

> 一个分享「此刻」想法的校园社区：发帖、评论、点赞，前后端全栈实现。

## 截图
![首页](./docs/screenshot-home.png)
![发布](./docs/screenshot-publish.png)

## 技术栈
- 前端：Vue 3 + Element Plus + Vite
- 后端：Spring Boot 3 + MyBatis + MySQL
- 部署：Nginx + 阿里云 ECS

## 安装
git clone https://github.com/your-name/now.git
cd now && npm install && mvn install

## 使用
npm run dev          # 前端
mvn spring-boot:run  # 后端
浏览器打开 http://localhost:5173`}
    takeaway="README 是项目的门面：让人 30 秒看懂『是什么、怎么跑、用什么技术』。"
  />
);

// #16 提示词：AI 生成文档
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 生成文档"
    subtitle="把项目信息喂给 AI，自动生成结构化 README"
    role="文档助理"
    task="生成「此刻」项目 README.md"
    stack="Markdown"
    constraints="包含标题、简介、截图占位、技术栈、安装、使用、目录结构；中文撰写；简介不超过 30 字"
    outputFormat="标准 Markdown 文件 README.md"
    template={`你是一位技术文档工程师。
请为「此刻」校园生活社区项目生成 README.md：

项目信息：
- 名称：此刻
- 定位：分享此刻想法的校园社区，支持发帖/评论/点赞
- 技术栈：Vue 3 + Element Plus / Spring Boot 3 + MySQL / Nginx
- 启动：前端 npm run dev，后端 mvn spring-boot:run

请输出包含以下章节的 Markdown：
1. 项目标题与一句话简介（≤30 字）
2. 功能特性（5 条）
3. 技术栈（前端/后端/部署分组）
4. 安装与运行步骤
5. 目录结构说明
6. 截图占位

中文撰写，结构清晰，可直接提交。`}
    takeaway="AI 生成文档的关键：把项目信息结构化给出，章节要求列清楚。"
  />
);

// #17 练习：项目终稿收尾（保留原 day-11.ts 四条任务原文）
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="Day 11 任务：项目终稿收尾"
    subtitle="解决掉最后一个 Bug，对照 Checklist 完成收尾"
    tasks={[
      '1. 在企微群获取 Checklist 文档，逐条打勾测试',
      '2. 完成评论列表与发表评论功能',
      '3. 撰写项目 README.md 描述技术栈与创新点',
      '4. 打卡提交项目最终测试通过截图',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评你的项目终稿！"
  />
);

// #18 终端：git 提交规范
const Slide18: React.FC = () => (
  <TerminalSlide
    title="git 提交规范"
    subtitle="git add / commit -m 规范 + git log 查看，让提交历史可追溯"
    commands={[
      {
        comment: '暂存本次改动的文件',
        cmd: 'git add src/ README.md',
        expected: 'staged 5 files',
      },
      {
        comment: '提交，信息使用「类型(范围): 描述」格式',
        cmd: 'git commit -m "fix(post): 修复空标题提交 NPE"',
        expected: '[main 1a2b3c4] fix(post): 修复空标题提交 NPE',
      },
      {
        comment: '查看最近提交历史（一行一条）',
        cmd: 'git log --oneline -5',
        expected: '1a2b3c4 fix(post): 修复空标题提交 NPE  (HEAD -> main)',
      },
    ]}
    takeaway="提交信息用「类型(范围): 描述」，历史一目了然，回滚排查都快。"
  />
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 11 知识检查"
    subtitle="4 道题，确认你掌握收尾四维度、Bug 流程、规范与 Checklist"
    questions={[
      {
        question: '项目收尾思维的四维度是？',
        options: [
          '功能/性能/代码/文档',
          '完整性/健壮性/可维护/规范',
          '前端/后端/数据库/部署',
          '需求/设计/编码/测试',
        ],
        answer: 1,
        explanation: '收尾思维四维度是完整性、健壮性、可维护性、规范度，用于评估项目成熟度。',
      },
      {
        question: 'Bug 修复流程的正确顺序是？',
        options: [
          '修复→发现→定位→关闭',
          '发现→定位→修复→回归→关闭',
          '定位→发现→关闭→回归',
          '发现→回归→修复→定位',
        ],
        answer: 1,
        explanation: '标准流程：发现→定位→修复→回归验证→关闭，回归通过才算真正关闭。',
      },
      {
        question: '下列哪条符合代码规范？',
        options: [
          'Controller 里直接写 SQL',
          '一个函数 200 行搞定所有逻辑',
          '函数名用动词、布尔用 is/has 前缀',
          '复杂逻辑不写注释让后人猜',
        ],
        answer: 2,
        explanation: '命名规范要求函数动词化、布尔用 is/has/can 前缀，见名知意。',
      },
      {
        question: '上线前 Checklist 的核心作用是？',
        options: [
          '增加功能数量',
          '把『没想到』变成『已验收』',
          '替代测试',
          '让代码运行更快',
        ],
        answer: 1,
        explanation: 'Checklist 把易遗漏的边界与体验逐条验收，从开发态迈向生产态。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="项目质量达标，明天正式进入服务器部署"
    dayNumber={11}
    takeaways={[
      '收尾思维四维度：完整性、健壮性、可维护性、规范度',
      'GlobalExceptionHandler 兜底异常，边界处理四招：空值挡/超长截/并发锁/网络兜',
      '代码规范四条 + 重构三招，质量分从 62 提升到 91',
      '上线 Checklist 矩阵逐条验收，README 文档收口',
      'git 提交规范化，项目终稿冻结，准备部署',
    ]}
    nextDayPreview="Day 12 — 服务器部署：阿里云 ECS + Nginx 反向代理 + jar 包上线"
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

export const day11Deck: DayDeckRenderer = {
  meta: {
    day: 11,
    stageName: '第七阶段：部署运维',
    title: 'Day 11 — 功能完善 · Bug 修复 · 项目 Checklist 检查',
    subtitle: '全员代码磨合与体验收拢，打造生产级稳定应用',
    duration: '90 分钟',
    target: '对照上线 Checklist 检查边界条件，修复残留 Bug 并完善评论区功能',
    output: '「此刻」应用功能全量冻结，完成测试与 README 文档初稿',
    aiPractice: 'AI 审查对话 → "请帮我审查这段代码，是否有潜在内存泄漏或空指针问题？"',
    slides: [
      { id: 'd11-s1', title: '功能完善 · Bug 修复 · 项目 Checklist', subtitle: '收尾打磨 / 质量提升 / Checklist 收尾三件事', layout: 'cover', instructorNotes: '开场强调 Day 11 是收尾日，不再加新功能，专注打磨质量。', keyTakeaway: '收尾打磨、质量提升、Checklist 三件事。' },
      { id: 'd11-s2', title: 'Day 11 学习路线图', subtitle: 'Bug修复→边界→重构→Checklist→文档 5 目标', layout: 'steps', instructorNotes: '用路线图串起 5 个目标，让学员知道今天为什么这样安排。', keyTakeaway: 'Bug→边界→重构→Checklist→文档 收尾闭环。' },
      { id: 'd11-s3', title: '项目收尾思维', subtitle: '完整性/健壮性/可维护/规范 四维度', layout: 'concept', instructorNotes: '四维度是评估标准，让学员对照自己项目打分。', keyTakeaway: '收尾是把完整性/健壮性/可维护/规范打磨到位。' },
      { id: 'd11-s4', title: '项目质量维度图', subtitle: '功能/性能/代码/文档 四象限', layout: 'concept', instructorNotes: '四象限帮学员定位项目短板，哪格空就补哪格。', keyTakeaway: '功能/性能/代码/文档 四象限均衡发展。' },
      { id: 'd11-s5', title: '全局异常处理统一格式', subtitle: 'GlobalExceptionHandler 兜底 NPE/空指针/异步/边界值', layout: 'split_code', instructorNotes: '保留 GlobalExceptionHandler 原文，演示全局兜底如何把 500 转 JSON。', keyTakeaway: '全局异常处理是最后一道防线。' },
      { id: 'd11-s6', title: 'AI 批量修 Bug', subtitle: '角色:Debug助理 / 任务:批量修复 / 栈:全栈+报错清单', layout: 'prompt_template', instructorNotes: '演示如何把报错清单结构化喂给 AI 批量修 Bug。', keyTakeaway: '结构化清单 + 根因/修复/验证三段式。' },
      { id: 'd11-s7', title: 'Bug 修复流程动效', subtitle: '发现→定位→修复→回归→关闭', layout: 'concept', instructorNotes: 'BugFix 动画演示一个 Bug 的完整生命周期，强调回归验证。', keyTakeaway: '回归通过才算关闭。' },
      { id: 'd11-s8', title: '边界情况处理', subtitle: '空数据/超长文本/并发/网络异常 四处理', layout: 'split_code', instructorNotes: '四种边界处理代码示例，口诀帮助记忆。', keyTakeaway: '空值挡/超长截/并发锁/网络兜。' },
      { id: 'd11-s9', title: '修复前后对比', subtitle: '崩溃 vs 健壮 / 无提示 vs 友好提示', layout: 'comparison', instructorNotes: '前后对比让学员直观感受健壮性的价值。', keyTakeaway: '健壮是报错时让用户知道该怎么做。' },
      { id: 'd11-s10', title: '代码规范', subtitle: '命名/注释/分层/单一职责 四规范', layout: 'concept', instructorNotes: '四条规范是团队协作底线，强调降低沟通成本。', keyTakeaway: '规范降低沟通成本。' },
      { id: 'd11-s11', title: '重构示例', subtitle: '提取函数/消除重复/简化逻辑 三案例', layout: 'split_code', instructorNotes: '重构三招代码示例，强调行为不变。', keyTakeaway: '重复提函数/嵌套早返回/长函数拆小。' },
      { id: 'd11-s12', title: '代码质量提升', subtitle: '重构前后对比墙：质量分提升、问题数下降', layout: 'concept', instructorNotes: '质量分对比墙，让重构收益可量化。', keyTakeaway: '重构让质量分上升、问题数下降。' },
      { id: 'd11-s13', title: '上线前 Checklist 检查清单', subtitle: '从开发态迈向生产态，逐条打勾验收', layout: 'concept', instructorNotes: '保留原 Checklist 四条，逐条演示打勾验收。', keyTakeaway: 'Checklist 把『没想到』变成『已验收』。' },
      { id: 'd11-s14', title: 'Checklist 矩阵图', subtitle: '功能/UI/性能/文档/部署 各类清单条目矩阵', layout: 'concept', instructorNotes: '矩阵图展示收尾进度，⏳ 项即待办。', keyTakeaway: '矩阵让收尾进度一目了然。' },
      { id: 'd11-s15', title: 'README 规范', subtitle: '标题/截图/安装/使用/技术栈 模板', layout: 'split_code', instructorNotes: 'README 模板，强调 30 秒看懂项目。', keyTakeaway: 'README 是项目门面。' },
      { id: 'd11-s16', title: 'AI 生成文档', subtitle: '角色:文档助理 / 任务:README / 栈:Markdown', layout: 'prompt_template', instructorNotes: '演示 AI 生成 README 的结构化提示词。', keyTakeaway: '结构化项目信息 + 章节要求。' },
      { id: 'd11-s17', title: '项目终稿收尾', subtitle: '修Bug→评论→README→打卡', layout: 'exercise', instructorNotes: '保留原 4 条任务，要求学员打卡提交测试截图。', keyTakeaway: '修Bug→评论→README→打卡 收尾闭环。' },
      { id: 'd11-s18', title: 'git 提交规范', subtitle: 'git add/commit -m 规范 + git log 查看', layout: 'split_code', instructorNotes: 'git 提交规范，演示类型(范围): 描述格式。', keyTakeaway: '提交规范让历史可追溯。' },
      { id: 'd11-s19', title: 'Day 11 知识检查', subtitle: '收尾四维度/Bug流程/规范/Checklist 4 题', layout: 'concept', instructorNotes: '4 题检查收尾四维度/Bug流程/规范/Checklist 掌握情况。', keyTakeaway: '收尾四维度 + Bug 五步流程。' },
      { id: 'd11-s20', title: '今日总结', subtitle: '项目质量达标 + 明日服务器部署', layout: 'summary', instructorNotes: '总结今日成果，预告明日服务器部署。', keyTakeaway: '项目质量达标，明日部署。' },
    ],
  },
  Render,
};