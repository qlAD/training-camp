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
import { DebugFlowAnimation, ListLoadAnimation } from './shared/animations';
import { FeedEffectPreview } from './shared/effects';
import { PyramidDiagram } from './shared/diagrams';

// #1 封面：AI Debug 与首页信息流
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第六阶段：生态力量"
    badgeText="Day 10 · 课程讲义"
    title="AI Debug 与首页信息流"
    subtitle="用 AI 精准定位 Bug，遵循 MVP 原则上线「此刻」信息流"
    bullets={[
      'AI Debug 三步法：报错粘贴 + 上下文 + 技术栈',
      'MVP 原则：先跑通核心流程，再打磨美化',
      '90 分钟完成「此刻」首页信息流：卡片列表 / 分页 / 下拉刷新',
    ]}
  />
);

// #2 议程：Day 10 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 10 学习路线图"
    subtitle="从 AI Debug 到首页信息流上线，5 个目标串成一条线"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: 'AI Debug', desc: '掌握向 AI 喂报错与上下文的三步法，快速定位 Bug' },
      { title: 'MVP 原则', desc: '理解最小可行产品边界，先跑通核心流程再迭代' },
      { title: '信息流布局', desc: '搭建首页顶部导航 + 帖子卡片列表 + 侧边栏' },
      { title: '分页与刷新', desc: '实现分页加载与下拉刷新，体验丝滑滚动' },
      { title: 'Checkpoint 上线', desc: '完成信息流核心版本并提交打卡' },
    ]}
  />
);

// #3 概念：AI Debug 思维
const Slide03: React.FC = () => (
  <ConceptSlide
    title="AI Debug 思维"
    subtitle="不要只发一句「报错了」，AI 需要具体的营养"
    badgeText="核心概念"
    bullets={[
      '复制完整 StackTrace：提取控制台红字报错或 NullPointerException 堆栈',
      '附带上下文代码：提供报错行所在的方法块与关联变量',
      '明确当前技术栈：指出 Vue 版本或 Spring Boot 版本，以便 AI 给精准解法',
      '分段排查与验证：按堆栈自顶向下定位，修复后重新运行确认通过',
    ]}
    keyTakeaway="报错 + 上下文 + 技术栈 + 验证，AI Debug 四步法让定位 Bug 事半功倍。"
  />
);

// #4 对比：传统调试 vs AI 调试
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="传统调试 vs AI 调试"
    subtitle="断点单步 vs 全量报错，经验依赖 vs AI 引导"
    leftLabel="传统调试"
    rightLabel="AI 调试"
    left={{
      title: '断点单步排查',
      items: [
        '逐行打断点、单步执行，耗时长',
        '依赖个人经验判断报错根因',
        '遇到陌生栈帧容易卡壳无思路',
        '修复后靠手动复现验证',
      ],
    }}
    right={{
      title: '全量报错引导',
      items: [
        '粘贴完整堆栈，AI 一眼定位根因',
        '结合上下文代码给出修复方案',
        '提供多种思路与最佳实践参考',
        '修复后可让 AI 生成回归用例验证',
      ],
    }}
    keyTakeaway="传统调试靠经验，AI 调试靠信息——把报错喂全，效率天差地别。"
  />
);

// #5 提示词：让 AI 定位 Bug
const Slide05: React.FC = () => (
  <PromptSlide
    title="让 AI 定位 Bug"
    subtitle="把报错、代码、环境一次喂全，AI 直接给修复方案"
    role="Spring Boot Debug 助理"
    task="定位并修复 NullPointerException"
    stack="Spring Boot 3.2 / MyBatis-Plus / MySQL 8"
    constraints="提供完整 StackTrace 与报错行所在方法；标注 Spring Boot 版本；输出修复 diff 与原因"
    outputFormat="修复后的方法代码 + 一段根因说明"
    template={`你是一位资深的 Spring Boot 排错工程师。
请帮我定位并修复下面的 NullPointerException：

技术栈：Spring Boot 3.2 + MyBatis-Plus + MySQL 8

完整堆栈：
java.lang.NullPointerException
  at com.cike.service.PostServiceImpl.lambda$getFeed$0(PostServiceImpl.java:42)
  at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)
  ...

报错行所在方法：
public List<PostVO> getFeed(int page) {
  List<Post> posts = postMapper.selectPage(page);
  return posts.stream().map(p -> {
    p.setLikeCount(redisTemplate.opsForValue().get("like:" + p.getId())); // line 42
    return toVO(p);
  }).collect(Collectors.toList());
}

请输出：1) 根因分析 2) 修复后的代码 3) 防御性建议`}
    takeaway="结构化报错提示词：堆栈 + 代码 + 版本 + 期望输出，AI 一次给解。"
  />
);

// #6 动画：Debug 流程动效
const Slide06: React.FC = () => (
  <AnimationSlide
    title="Debug 流程动效"
    subtitle="报错 → 粘贴 AI → 定位 → 修复 → 验证，闭环五步"
    animationType="DebugFlow"
    caption="红=报错 · 青=粘贴 · 琥珀=定位 · 靛=修复 · 绿=验证"
    takeaway="把 Debug 拆成五步动画，每一步都可被 AI 加速。"
  >
    <DebugFlowAnimation
      steps={[
        { label: '控制台报错', action: 'error', desc: 'NPE 堆栈出现在 PostServiceImpl:42' },
        { label: '粘贴给 AI', action: 'paste', desc: '堆栈 + 方法块 + Spring Boot 版本' },
        { label: 'AI 定位根因', action: 'locate', desc: 'redisTemplate 未注入为 null' },
        { label: '按建议修复', action: 'fix', desc: '补 @Autowired 或判空兜底' },
        { label: '重跑验证', action: 'verify', desc: '接口返回 200，列表正常渲染' },
      ]}
    />
  </AnimationSlide>
);

// #7 概念：MVP 原则
const Slide07: React.FC = () => (
  <ConceptSlide
    title="MVP 原则"
    subtitle="先跑通核心流程，再打磨美化——别陷入过度设计陷阱"
    badgeText="核心概念"
    bullets={[
      '核心功能：确保发帖、看帖、点赞三个动作顺畅，而非纠结复杂动画',
      '最小可用：UI 用简单的 Element Plus 卡片，先能跑再求美',
      '快速验证：跑通后立刻让用户用起来，用真实反馈驱动迭代',
      '持续迭代：通过版本迭代逐步加入分类、图片、评论等增强功能',
    ]}
    keyTakeaway="MVP = 核心功能 + 最小可用 + 快速验证 + 持续迭代，先闭环再优化。"
  />
);

// #8 图解：MVP 功能边界图
const Slide08: React.FC = () => (
  <DiagramSlide
    title="MVP 功能边界图"
    subtitle="必做 / 待做 / 不做 三层分明，避免过度设计"
    badgeText="功能边界"
    caption="底层=必做（最宽）· 中层=待做 · 顶层=不做（最窄）"
    takeaway="把功能划进三个圈，MVP 只做最宽的那一圈。"
  >
    <PyramidDiagram
      levels={[
        { label: '不做', desc: '复杂权限、十几种关联表、过度动画', tone: 'rose' },
        { label: '待做', desc: '评论、多图、分类筛选增强', tone: 'amber' },
        { label: '必做', desc: '发帖、看帖、点赞、列表分页', tone: 'emerald' },
      ]}
    />
  </DiagramSlide>
);

// #9 代码：首页信息流布局
const Slide09: React.FC = () => (
  <CodeBoxSlide
    title="首页信息流布局"
    subtitle="顶部导航 + 帖子列表 + 侧边栏，三栏式信息流骨架"
    language="vue"
    filename="HomeFeed.vue"
    highlightLines={[6, 7, 8, 9, 10]}
    code={`<template>
  <div class="home-feed">
    <TopNav :active="'feed'" />
    <div class="feed-layout">
      <main class="feed-main">
        <PostList :posts="posts" @load-more="loadMore" />
      </main>
      <aside class="feed-side">
        <HotTags :tags="hotTags" />
        <ActiveUsers :users="activeUsers" />
      </aside>
    </div>
  </div>
</template>
`}
    takeaway="主内容 + 侧边栏的双栏布局，是信息流页面的经典骨架。"
  />
);

// #10 代码：帖子卡片组件
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="帖子卡片组件"
    subtitle="PostCard.vue：头像 + 标题 + 内容 + 图片 + 点赞"
    language="vue"
    filename="PostCard.vue"
    highlightLines={[14, 15, 16, 17, 18]}
    code={`<script setup lang="ts">
import { ref } from 'vue';
import { Heart } from '@element-plus/icons-vue';

const props = defineProps<{ post: Post }>();
const liked = ref(false);
const onLike = async () => {
  liked.value = !liked.value;
  props.post.likeCount += liked.value ? 1 : -1;
  await api.like(props.post.id, liked.value); // 落盘
};
</script>

<template>
  <el-card class="post-card" shadow="hover">
    <div class="header">
      <el-avatar :src="post.avatar" />
      <span class="author">{{ post.author }}</span>
      <span class="time">{{ post.time }}</span>
    </div>
    <h3 class="title">{{ post.title }}</h3>
    <p class="content">{{ post.content }}</p>
    <el-image v-if="post.cover" :src="post.cover" fit="cover" />
    <div class="actions">
      <el-button text :type="liked ? 'danger' : ''" @click="onLike">
        <el-icon><Heart /></el-icon> {{ post.likeCount }}
      </el-button>
    </div>
  </el-card>
</template>
`}
    takeaway="一张卡片 = 一个 PostCard 组件，列表循环渲染即可形成瀑布流。"
  />
);

// #11 动画：列表加载动效
const Slide11: React.FC = () => (
  <AnimationSlide
    title="列表加载动效"
    subtitle="骨架屏 → 数据到达 → 逐条渲染，体验丝滑"
    animationType="ListLoad"
    caption="灰条闪烁=骨架屏 · 淡入=数据到达"
    takeaway="骨架屏先占位、数据到达后逐条淡入，避免白屏焦虑。"
  >
    <ListLoadAnimation
      title="「此刻」信息流"
      items={[
        { label: '夏日骑行 vlog', desc: '@小柯 · 2 分钟前' },
        { label: '二次元新番追番手记', desc: '@喵喵 · 5 分钟前' },
        { label: '周末游戏通关复盘', desc: '@老王 · 8 分钟前' },
        { label: '深夜 emo 随笔三则', desc: '@阿橘 · 12 分钟前' },
      ]}
    />
  </AnimationSlide>
);

// #12 代码：分页加载逻辑
const Slide12: React.FC = () => (
  <CodeBoxSlide
    title="分页加载逻辑"
    subtitle="axios 分页参数 + 滚动触底加载下一页"
    language="ts"
    filename="useFeed.ts"
    highlightLines={[10, 11, 12, 13, 14, 15, 16]}
    code={`import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useFeed() {
  const posts = ref<Post[]>([]);
  const page = ref(1);
  const loading = ref(false);
  const hasMore = ref(true);

  const loadMore = async () => {
    if (loading.value || !hasMore.value) return;
    loading.value = true;
    const res = await axios.get('/api/posts', {
      params: { page: page.value, size: 10 },
    });
    posts.value.push(...res.data.list);
    hasMore.value = res.data.hasMore;
    page.value += 1;
    loading.value = false;
  };

  onMounted(loadMore);
  return { posts, loading, hasMore, loadMore };
}
`}
    takeaway="分页三件套：page 累加、loading 防抖、hasMore 兜底。"
  />
);

// #13 代码：下拉刷新
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="下拉刷新"
    subtitle="顶部下拉 + loading 动画 + 重新请求首页"
    language="vue"
    filename="PullRefresh.vue"
    highlightLines={[3, 4, 5, 6, 7, 8]}
    code={`<script setup lang="ts">
import { ref } from 'vue';
import { useFeed } from './useFeed';
const { posts, loading, loadMore, refresh } = useFeed();
const refreshing = ref(false);
const onRefresh = async () => {
  refreshing.value = true;
  await refresh();      // 重新拉 page=1
  refreshing.value = false;
};
</script>

<template>
  <el-scrollbar ref="scrollRef" @scroll="onScroll">
    <div class="pull-tip" v-if="refreshing">刷新中…</div>
    <PostCard v-for="p in posts" :key="p.id" :post="p" />
    <div class="load-more" v-if="loading" @click="loadMore">加载更多</div>
  </el-scrollbar>
</template>
`}
    takeaway="下拉刷新 = 顶部 loading + 重置 page=1 重新请求，列表回到最新。"
  />
);

// #14 特效：信息流效果展示
const Slide14: React.FC = () => (
  <EffectSlide
    title="信息流效果展示"
    subtitle="「此刻」首页信息流完整效果：骨架屏后逐条淡入"
    effectType="FeedEffectPreview"
    caption="头像 / 标题 / 内容 / 图片 / 点赞数 / 评论数，覆盖卡片全部要素"
    takeaway="这就是 Day 10 的产出物——一个带骨架屏与淡入的信息流。"
  >
    <FeedEffectPreview
      title="「此刻」首页信息流"
      posts={[
        { author: '小柯', time: '2 分钟前', content: '夏日骑行 vlog：环湖 40 公里，风是甜的。', likes: 128, comments: 12 },
        { author: '喵喵', time: '5 分钟前', content: '七月新番追番手记：这一季的作画太顶了。', likes: 86, comments: 7 },
        { author: '老王', time: '8 分钟前', content: '周末通关了那款魂系游戏，手都在抖。', likes: 204, comments: 33 },
        { author: '阿橘', time: '12 分钟前', content: '深夜 emo 三则，写完心情好多了。', likes: 54, comments: 9 },
      ]}
    />
  </EffectSlide>
);

// #15 概念：用户体验优化
const Slide15: React.FC = () => (
  <ConceptSlide
    title="用户体验优化"
    subtitle="loading / 空状态 / 错误态 / 防抖，四把体验钥匙"
    badgeText="体验优化"
    bullets={[
      'loading 态：骨架屏或加载动画占位，避免白屏与焦虑',
      '空状态：列表为空时给插画与引导文案，告诉用户下一步做什么',
      '错误态：请求失败展示重试按钮，而非裸报错或空白',
      '防抖节流：滚动与输入事件加 debounce/throttle，避免抖动与多余请求',
    ]}
    keyTakeaway="四种状态都照顾到，信息流才像「活着」的产品。"
  />
);

// #16 提示词：AI 优化交互
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 优化交互"
    subtitle="把交互需求写清楚，AI 一次产出带状态的信息流组件"
    role="Vue 3 + Element Plus UX 助理"
    task="优化「此刻」信息流的交互体验"
    stack="Vue 3 (script setup + TS) / Element Plus / axios"
    constraints="覆盖 loading/空/错误三种状态；滚动触底分页；下拉刷新；点赞防抖"
    outputFormat="单文件组件 FeedView.vue，含模板与逻辑"
    template={`你是一位 Vue 3 + Element Plus 交互体验工程师。
请优化「此刻」首页信息流组件 FeedView.vue：

技术栈：Vue 3 <script setup lang="ts"> + Element Plus + axios

交互需求：
- loading 态：首屏用 el-skeleton 占位
- 空状态：无帖子时显示 el-empty 与「去发布」按钮
- 错误态：请求失败显示 el-result + 重试按钮
- 分页：滚动触底加载下一页，loading 防抖
- 下拉刷新：顶部下拉触发 refresh，重置 page=1
- 点赞防抖：500ms 内重复点击只发一次请求

请输出完整 .vue 文件。`}
    takeaway="把四种状态与边界写进提示词，AI 才能一次产出体验完备的信息流。"
  />
);

// #17 练习：首页信息流上线
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="首页信息流上线"
    subtitle="为「此刻」社区搭起 MVP 版信息流并提交 Checkpoint"
    tasks={[
      '用 AI 生成 PostCard.vue：头像 / 标题 / 内容 / 图片 / 点赞',
      '组装 HomeFeed.vue 卡片列表，循环渲染帖子',
      '实现按「日常/游戏/二次元/音乐」分类过滤 Tab',
      '接入 useFeed 分页：滚动触底加载下一页',
      '实现下拉刷新与点击点赞实时 +1 并后端落盘',
      '本地预览交互，截图发企微群并提交 Checkpoint ② 打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评你的「此刻」首页信息流！"
  />
);

// #18 终端：性能检查
const Slide18: React.FC = () => (
  <TerminalSlide
    title="性能检查"
    subtitle="用浏览器 DevTools 的 Network / Performance 面板给信息流体检"
    commands={[
      {
        comment: 'Network 面板观察请求瀑布',
        cmd: '刷新首页 → 看 /api/posts 请求',
        expected: `GET /api/posts?page=1  200  142 ms
GET /api/upload/cover.jpg  200  88 ms`,
      },
      {
        comment: 'Performance 录制滚动帧',
        cmd: 'Record → 滚动信息流 → Stop',
        expected: 'FPS 58~60  |  Main thread < 80ms/task  |  长任务 0 次',
      },
      {
        comment: '检查图片资源体积',
        cmd: 'Network → 筛选 Img → 看 cover.jpg',
        expected: 'cover.jpg 312 KB → 建议压缩到 < 200KB 或换 WebP',
      },
      {
        comment: '滚动监听加 throttle 后复测',
        cmd: 'npm run build && 复测 Performance',
        expected: '滚动卡顿消失，FPS 稳定 60',
      },
    ]}
    takeaway="Network 看请求瀑布、Performance 看帧率与长任务，两板定位性能瓶颈。"
  />
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 10 知识检查"
    subtitle="4 道题，确认你掌握了 Debug 四步、MVP 定义、分页参数与用户体验"
    questions={[
      {
        question: '向 AI 求 Debug 时，最关键的「营养」不包括下列哪一项？',
        options: ['完整 StackTrace', '报错行所在方法块', '电脑品牌型号', '当前框架版本'],
        answer: 2,
        explanation: 'AI 需要堆栈、上下文代码与技术栈版本，电脑品牌与定位 Bug 无关。',
      },
      {
        question: 'MVP（最小可行产品）原则强调的首要目标是？',
        options: ['一次做到完美再上线', '先跑通核心流程再迭代', '堆满功能吸引用户', '只做 UI 不做后端'],
        answer: 1,
        explanation: 'MVP 强调核心功能最小可用、快速验证、持续迭代，而非过度设计。',
      },
      {
        question: '信息流分页加载时，防止重复请求的关键状态是？',
        options: ['page 页码', 'loading 与 hasMore', 'posts 列表', 'scroll 滚动距离'],
        answer: 1,
        explanation: 'loading 防止并发重复请求，hasMore 防止到底后继续请求。',
      },
      {
        question: '信息流体验优化中，请求失败时应展示哪种状态？',
        options: ['空白页面', '裸露的报错堆栈', '错误态 + 重试按钮', '直接跳转登录'],
        answer: 2,
        explanation: '错误态配合重试按钮，给用户明确反馈与下一步操作，体验最佳。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="「此刻」核心功能闭环达成，明天进入收尾与 Bug 修复"
    dayNumber={10}
    takeaways={[
      'AI Debug 四步法：报错 + 上下文 + 技术栈 + 验证',
      'MVP 原则：核心功能 + 最小可用 + 快速验证 + 持续迭代',
      '首页信息流：卡片列表 + 分类 Tab + 点赞交互',
      '分页与下拉刷新：page / loading / hasMore 三件套',
      '体验优化：loading / 空状态 / 错误态 / 防抖 四把钥匙',
    ]}
    nextDayPreview="Day 11 — 功能完善 · Bug 修复 · 项目 Checklist"
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

export const day10Deck: DayDeckRenderer = {
  meta: {
    day: 10,
    stageName: '第六阶段：生态力量',
    title: 'Day 10 — AI Debug 技巧 · MVP 原则 · 「此刻」首页信息流',
    subtitle: '学会向 AI 精准喂错误日志，遵循 MVP 原则快速迭代首页',
    duration: '90 分钟',
    target: '掌握定位与修复 Bug 的三步法，完成「此刻」首页帖子卡片瀑布流',
    output: '「此刻」首页信息流（卡片式帖子列表、按分类 Tab 过滤、点赞交互）',
    aiPractice: '报错处理模板 → 粘贴报错 + 代码上下文 + 环境 → 求方案',
    slides: [
      {
        id: 'd10-s1',
        title: 'AI Debug 与首页信息流',
        subtitle: '用 AI 精准定位 Bug，遵循 MVP 原则上线「此刻」信息流',
        layout: 'cover',
        instructorNotes: '开场点题：今天把 Debug、MVP、信息流三件事串成一条线。',
        keyTakeaway: 'AI Debug + MVP + 信息流，第六阶段生态力量的核心闭环。',
      },
      {
        id: 'd10-s2',
        title: 'Day 10 学习路线图',
        subtitle: 'Debug→MVP→信息流→分页→Checkpoint 5 目标',
        layout: 'steps',
        instructorNotes: '用 5 个目标给学员清晰的路径感，强调最后要打卡。',
        keyTakeaway: '五个目标串成 Day 10 一条线，终点是 Checkpoint 上线。',
      },
      {
        id: 'd10-s3',
        title: 'AI Debug 思维',
        subtitle: '报错粘贴 / 上下文给足 / 分段排查 / 验证 四步法',
        layout: 'concept',
        instructorNotes: '强调别只发「报错了」三个字，AI 需要具体营养。',
        keyTakeaway: '报错 + 上下文 + 技术栈 + 验证，AI Debug 四步法。',
      },
      {
        id: 'd10-s4',
        title: '传统调试 vs AI 调试',
        subtitle: '断点单步 vs 全量报错 / 经验依赖 vs AI 引导',
        layout: 'comparison',
        instructorNotes: '用对比让学员直观感受 AI 调试的提效。',
        keyTakeaway: '传统靠经验，AI 靠信息——喂全报错效率天差地别。',
      },
      {
        id: 'd10-s5',
        title: '让 AI 定位 Bug',
        subtitle: '角色:Debug助理 / 任务:定位NPE / 栈:Spring+完整堆栈',
        layout: 'prompt_template',
        instructorNotes: '现场可演示把堆栈粘贴给 AI，看它一次给解。',
        keyTakeaway: '结构化报错提示词：堆栈 + 代码 + 版本 + 期望输出。',
      },
      {
        id: 'd10-s6',
        title: 'Debug 流程动效',
        subtitle: '报错→粘贴AI→定位→修复→验证 闭环五步',
        layout: 'concept',
        instructorNotes: '动画演示完整 Debug 闭环，强调每步都能被 AI 加速。',
        keyTakeaway: 'Debug 拆成五步，每一步都可被 AI 加速。',
      },
      {
        id: 'd10-s7',
        title: 'MVP 原则',
        subtitle: '核心功能 / 最小可用 / 快速验证 / 迭代 四精髓',
        layout: 'concept',
        instructorNotes: '提醒别陷入过度设计陷阱，先跑通核心流程。',
        keyTakeaway: 'MVP = 核心 + 最小 + 快速 + 迭代，先闭环再优化。',
      },
      {
        id: 'd10-s8',
        title: 'MVP 功能边界图',
        subtitle: '必做 vs 待做 vs 不做 三层分明',
        layout: 'concept',
        instructorNotes: '用金字塔图把功能划进三个圈，MVP 只做最宽那圈。',
        keyTakeaway: '把功能划进三个圈，MVP 只做最宽的那一圈。',
      },
      {
        id: 'd10-s9',
        title: '首页信息流布局',
        subtitle: '顶部导航 + 帖子列表 + 侧边栏 三栏骨架',
        layout: 'split_code',
        instructorNotes: '讲解双栏布局是信息流页面的经典骨架。',
        keyTakeaway: '主内容 + 侧边栏双栏布局是信息流经典骨架。',
      },
      {
        id: 'd10-s10',
        title: '帖子卡片组件',
        subtitle: 'PostCard.vue 头像 / 标题 / 内容 / 图片 / 点赞',
        layout: 'split_code',
        instructorNotes: '一张卡片一个组件，列表循环渲染成瀑布流。',
        keyTakeaway: '一张卡片 = 一个 PostCard，循环渲染成瀑布流。',
      },
      {
        id: 'd10-s11',
        title: '列表加载动效',
        subtitle: '骨架屏 → 数据到达 → 逐条渲染 丝滑体验',
        layout: 'concept',
        instructorNotes: '强调骨架屏占位可避免白屏焦虑。',
        keyTakeaway: '骨架屏先占位、数据淡入，告别白屏焦虑。',
      },
      {
        id: 'd10-s12',
        title: '分页加载逻辑',
        subtitle: 'axios 分页参数 + 滚动触底加载',
        layout: 'split_code',
        instructorNotes: '讲清 page / loading / hasMore 三件套。',
        keyTakeaway: '分页三件套：page 累加、loading 防抖、hasMore 兜底。',
      },
      {
        id: 'd10-s13',
        title: '下拉刷新',
        subtitle: '顶部下拉 + loading + 重新请求首页',
        layout: 'split_code',
        instructorNotes: '下拉刷新本质是重置 page=1 重新请求。',
        keyTakeaway: '下拉刷新 = 顶部 loading + 重置 page=1 重新请求。',
      },
      {
        id: 'd10-s14',
        title: '信息流效果展示',
        subtitle: '完整信息流效果：骨架屏后逐条淡入',
        layout: 'concept',
        instructorNotes: '展示 Day 10 的产出物，给学员成就感。',
        keyTakeaway: '带骨架屏与淡入的信息流是 Day 10 的产出。',
      },
      {
        id: 'd10-s15',
        title: '用户体验优化',
        subtitle: 'loading 态 / 空状态 / 错误态 / 防抖 四优化点',
        layout: 'concept',
        instructorNotes: '四种状态都照顾到，信息流才像活着的产品。',
        keyTakeaway: '四把钥匙：loading / 空 / 错误 / 防抖。',
      },
      {
        id: 'd10-s16',
        title: 'AI 优化交互',
        subtitle: '角色:UX助理 / 任务:信息流交互 / 栈:Vue3+ElementPlus',
        layout: 'prompt_template',
        instructorNotes: '把四种状态与边界写进提示词，AI 才能一次产出。',
        keyTakeaway: '把状态与边界写进提示词，AI 一次产出体验完备的信息流。',
      },
      {
        id: 'd10-s17',
        title: '首页信息流上线',
        subtitle: '卡片→列表→分页→刷新→打卡 Checkpoint',
        layout: 'exercise',
        instructorNotes: '强调完成后提交 Checkpoint ② 打卡。',
        keyTakeaway: 'MVP 版信息流上线并提交 Checkpoint 打卡。',
      },
      {
        id: 'd10-s18',
        title: '性能检查',
        subtitle: 'Network / Performance 面板体检 + 优化建议',
        layout: 'concept',
        instructorNotes: '演示 DevTools 两板定位性能瓶颈。',
        keyTakeaway: 'Network 看瀑布、Performance 看帧率与长任务。',
      },
      {
        id: 'd10-s19',
        title: 'Day 10 知识检查',
        subtitle: 'Debug 四步 / MVP 定义 / 分页参数 / 用户体验 4 题',
        layout: 'concept',
        instructorNotes: '4 题快速检验学员掌握度，错题当场答疑。',
        keyTakeaway: '四题检验 Debug / MVP / 分页 / 体验四个要点。',
      },
      {
        id: 'd10-s20',
        title: '今日总结',
        subtitle: '核心功能闭环 + 明日功能完善 + Bug 修复',
        layout: 'summary',
        instructorNotes: '收束今日成果并预告 Day 11 收尾主题。',
        keyTakeaway: '核心功能闭环达成，明日进入收尾与 Bug 修复。',
      },
    ],
  },
  Render,
};