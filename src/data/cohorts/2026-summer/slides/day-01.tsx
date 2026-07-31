'use client';

import React from 'react';
import { DayDeckRenderer } from '../../../../types';
import {
  CoverSlide,
  AgendaSlide,
  ConceptSlide,
  ComparisonSlide,
  CodeBoxSlide,
  PromptSlide,
  ExerciseSlide,
  SummarySlide,
  QuizSlide,
  AnimationSlide,
  EffectSlide,
} from './shared/layouts';
import { ToolchainBadgeWall, StyleBeforeAfter } from './shared/effects';
import {
  CollaborationFlowAnimation,
  DOMTreeAnimation,
  BrowserRenderAnimation,
} from './shared/animations';
import {
  Lightbulb,
  Terminal,
  Sparkles,
  CheckCircle2,
  Trophy,
  Box,
  Braces,
  Boxes,
  Network,
  Layers,
  LayoutGrid,
} from 'lucide-react';

// ============================================================
// Slide 01 — 封面：欢迎来到 AI 全栈暑期训练营
// ============================================================
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第一阶段：开场与准备"
    badgeText="课程讲义"
    title="欢迎来到 AI 全栈暑期训练营"
    subtitle="14 天，用 AI 做出你的第一个线上全栈项目"
    bullets={[
      '🎯 核心理念：Vibe Coding —— AI 写代码，人做决策',
      '🚀 双项目驱动：个人作品集 + 「此刻」兴趣社区',
      '🛠️ 全国产工具链：TRAE CN + 豆包/DeepSeek + Gitee + 阿里云',
      '💡 零基础友好：不要求任何编程经验，全程带练到上线',
    ]}
  />
);

// ============================================================
// Slide 02 — 议程：Day 1 学习路线图
// ============================================================
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 1 学习路线图"
    subtitle="今天我们将完成四个目标，正式开启 Vibe Coding 之旅"
    objectiveCountLabel="4 目标"
    objectives={[
      { title: '建立 Vibe Coding 认知', desc: '理解 AI 时代的新编程范式与人机协作心智模型' },
      { title: '认识国产工具链', desc: '了解 TRAE CN / 豆包 / DeepSeek / Gitee / 阿里云 五件套' },
      { title: '生成第一个 HTML 页面', desc: '用提示词驱动 AI 产出可运行的个人简介网页' },
      { title: '完成首日打卡', desc: '浏览器打开成果并截图，在企微群内提交打卡' },
    ]}
  />
);

// ============================================================
// Slide 03 — 概念：什么是 Vibe Coding
// ============================================================
const Slide03: React.FC = () => (
  <ConceptSlide
    badgeText="核心概念"
    title="什么是 Vibe Coding？"
    subtitle="大模型时代下的全新编程范式"
    bullets={[
      'AI 写代码：把你脑中的想法用自然语言描述，由大模型实时生成可运行的代码。',
      '人做决策：需求拆解、架构取舍、质量把关仍然由人负责，AI 只执行具体实现。',
      '对话式编程：通过多轮对话不断澄清需求与迭代成果，像和一位工程师搭档结对编程。',
      '几分钟出成果：从想法到可见的网页，门槛被压到最低，零基础也能立刻看到可视化结果。',
    ]}
    keyTakeaway="Vibe Coding 不是不学编程，而是把精力从「记语法」上移到「想清楚要什么」上。"
  />
);

// ============================================================
// Slide 04 — 对比：传统编程 vs Vibe Coding
// ============================================================
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="传统编程 vs Vibe Coding"
    subtitle="从「逐行敲代码」到「对话式编程」的范式跃迁"
    leftLabel="传统范式"
    rightLabel="AI 时代范式"
    left={{
      title: 'Traditional Coding',
      items: [
        '先花大量时间记忆语法、API 与配置规则',
        '80% 时间消耗在环境配置、查文档与调试报错',
        '入门门槛高，几周甚至几月看不到可视化成果',
        '开发者更像代码的「打字员」，困在细节里',
      ],
    }}
    right={{
      title: 'Vibe Coding',
      items: [
        '把想法转化为清晰、结构化的提示词 Prompt',
        'AI 实时为你编写、调试、重构代码，省去重复劳动',
        '几分钟即可看到运行在浏览器里的可视化成果',
        '开发者是架构师与产品经理，专注构思与决策',
      ],
    }}
    keyTakeaway="人负责构思需求与质量把控，AI 负责繁重的具体编码与细节实现。"
  />
);

// ============================================================
// Slide 05 — 概念：AI 协作心智模型（四角色）
// ============================================================
const Slide05: React.FC = () => (
  <ConceptSlide
    badgeText="心智模型"
    title="与 AI 协作的四种角色"
    subtitle="人机分工：把精力花在更高维度的思考上"
    bullets={[
      '构思需求（产品经理）：想清楚「我要解决什么问题、成果长什么样」，把模糊想法变成明确目标。',
      '质量把控（技术评审）：审阅 AI 产出的代码与效果，判断是否符合预期、是否存在安全隐患。',
      '提示词表达（沟通者）：用结构化、可执行的语言向 AI 下达指令，让模型准确理解你的意图。',
      '反馈迭代（教练）：基于初版成果给出具体反馈，引导 AI 一步步逼近你想要的最终效果。',
    ]}
    keyTakeaway="AI 是你的执行者，而你是方向盘——方向对了，速度才有意义。"
  />
);
// ============================================================
// Slide 06 — 动效：人机协作流程闭环
// ============================================================
const Slide06: React.FC = () => (
  <AnimationSlide
    title="人机协作闭环：从想法到成果"
    subtitle="想法 → Prompt → AI 生成 → 人审核 → 产出，再回到下一个想法"
    animationType="CollaborationFlow"
    caption="高亮的节点表示当前环节，箭头流动表示信息传递；产出后会回到想法，形成迭代闭环。"
    takeaway="这不是一次性流水线，而是一个不断反馈、持续优化的闭环。"
  >
    <CollaborationFlowAnimation
      nodes={[
        { id: 'idea', label: '想法', icon: Lightbulb, tone: 'amber' },
        { id: 'prompt', label: 'Prompt', icon: Terminal, tone: 'cyan' },
        { id: 'ai', label: 'AI 生成', icon: Sparkles, tone: 'violet' },
        { id: 'review', label: '人审核', icon: CheckCircle2, tone: 'emerald' },
        { id: 'output', label: '产出', icon: Trophy, tone: 'indigo' },
      ]}
      steps={[
        { label: '① 提出想法', highlight: ['idea'], desc: '从一个模糊的需求出发：我想做一个个人简介页面。' },
        { label: '② 转化为 Prompt', highlight: ['idea', 'prompt'], desc: '把想法翻译成 AI 能理解的结构化指令。' },
        { label: '③ AI 生成代码', highlight: ['prompt', 'ai'], desc: '大模型实时产出 HTML / CSS 代码。' },
        { label: '④ 人工审核把关', highlight: ['ai', 'review'], desc: '人检查效果与正确性，决定是否接受。' },
        { label: '⑤ 产出可用成果', highlight: ['review', 'output'], desc: '通过审核后得到可运行的网页。' },
        { label: '⑥ 反馈迭代闭环', highlight: ['output', 'idea'], desc: '基于成果提出新想法，开启下一轮优化。' },
      ]}
    />
  </AnimationSlide>
);

// ============================================================
// Slide 07 — 概念：国产工具链全景（五件套）
// ============================================================
const Slide07: React.FC = () => (
  <ConceptSlide
    badgeText="工具链全景"
    title="国产 AI 工具链：五件套"
    subtitle="从写代码到部署上线，一条全国产的闭环通路"
    bullets={[
      'TRAE CN：国产 AI IDE，内置对话式编程，是本项目的主力开发环境。',
      '豆包：字节出品的 AI 对话助手，适合快速生成 HTML / 文案与即时答疑。',
      'DeepSeek：国产开源大模型，逻辑与代码能力强，可作为备选生成引擎。',
      'Gitee：国产代码托管平台，类似 GitHub，用于版本管理与团队协作。',
      '阿里云：项目最终部署上线的云服务平台，让网页真正对全网可见。',
    ]}
    keyTakeaway="一条「生成—托管—部署」的国产闭环：用 TRAE CN 写、用 Gitee 存、用阿里云跑。"
  />
);

// ============================================================
// Slide 08 — 特效：工具链徽章墙
// ============================================================
const Slide08: React.FC = () => (
  <EffectSlide
    title="工具链徽章墙"
    subtitle="今天你将逐一认识这五位「搭档」"
    effectType="ToolchainBadgeWall"
    caption="每个徽章代表一个工具，按类别配色——后续每天都会用到它们。"
    takeaway="认识工具只是第一步，接下来 13 天我们会把它们逐一用熟。"
  >
    <ToolchainBadgeWall
      tools={[
        { name: 'TRAE CN', category: '构建工具', logoText: 'TRAE' },
        { name: '豆包', category: 'AI 助手', logoText: '豆包' },
        { name: 'DeepSeek', category: '核心模型', logoText: 'DS' },
        { name: 'Gitee', category: '代码托管', logoText: 'G' },
        { name: '阿里云', category: '部署平台', logoText: '阿里云' },
      ]}
    />
  </EffectSlide>
);

// ============================================================
// Slide 09 — 提示词：第一个 HTML 生成提示词
// ============================================================
const Slide09: React.FC = () => (
  <PromptSlide
    title="第一个 HTML 生成提示词"
    subtitle="学会表达，就是学会编程——把需求说清楚，AI 才能做对"
    role="前端开发助理"
    task="生成单页面个人简介 HTML 网页"
    stack="HTML5 + CSS3（内联样式）"
    constraints="单文件、可直接在浏览器打开、零外部依赖"
    outputFormat="一段完整可运行的 HTML 代码"
    template={`请帮我生成一个简单且美观的个人简介 HTML 页面，要求如下：

1. 页面标题：我的个人简介
2. 顶部一张 100×100 的圆形头像占位图
3. 大标题显示姓名"李明"
4. 一句话自我介绍："软件学院 2025 级，热爱 AI 全栈开发"
5. 三个技能标签：HTML、CSS、AI Prompting
6. 使用 HTML5 + 内联 CSS3：渐变背景 + 圆角卡片 + 柔和阴影
7. 单文件输出，浏览器双击即可打开`}
    takeaway="提示词越具体，AI 产出越接近预期——先写清结构与样式要求，再提交生成。"
  />
);

// ============================================================
// Slide 10 — 代码框：HTML 骨架解析
// ============================================================
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="网页骨架解析：HTML 三层结构"
    subtitle="高亮行即网页的标准骨架：DOCTYPE 声明 + html / head / body"
    filename="index.html"
    language="html"
    showLineNumbers
    highlightLines={[1, 2, 3, 12]}
    takeaway="<html> <head> <body> 是网页的标准三层骨架，CSS 写在 <head> 的 <style> 里控制美观。"
    code={`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的个人简介</title>
  <style>
    body { font-family: sans-serif; background: #f4f6f9; display: flex; justify-content: center; padding: 40px; }
    .card { background: #fff; padding: 32px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); text-align: center; }
    img { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; }
  </style>
</head>
<body>
  <div class="card">
    <img src="avatar.jpg" alt="头像">
    <h1>李明</h1>
    <p>软件学院 2025 级 · 热爱 AI 全栈开发</p>
  </div>
</body>
</html>`}
  />
);
// ============================================================
// Slide 11 — 概念：HTML 标签结构与嵌套
// ============================================================
const Slide11: React.FC = () => (
  <ConceptSlide
    badgeText="HTML 基础"
    title="HTML 标签结构与嵌套规则"
    subtitle="看懂标签、属性、嵌套与语义化，就掌握了 HTML 的全部骨架"
    bullets={[
      '标签（Tag）：用尖括号包裹的关键字，如 <h1> 标题 </h1>，成对出现，结束标签带斜杠。',
      '属性（Attribute）：写在开始标签里的键值对，如 <img src="avatar.jpg">，给标签附加信息。',
      '嵌套规则：标签可以层层包含，但要正确闭合，<div><p></p></div> 合法，<div><p></div></p> 错误。',
      '语义化：用 <header> <nav> <main> <footer> 等有含义的标签，让浏览器与搜索引擎更易理解结构。',
    ]}
    keyTakeaway="HTML 的本质就是「用标签描述内容的结构」，像搭积木一样层层嵌套。"
  />
);

// ============================================================
// Slide 12 — 动效：DOM 树构建
// ============================================================
const Slide12: React.FC = () => (
  <AnimationSlide
    title="DOM 树构建：标签如何长成一棵树"
    subtitle="浏览器把扁平的 HTML 文本，逐层解析成一棵可操作的节点树"
    animationType="DOMTree"
    caption="每一层标签都是树上的一个节点，高亮表示当前解析到的标签，最终构成完整的 DOM 树。"
    takeaway="DOM 树是浏览器理解网页结构的内部表示，后续 JavaScript 就是通过操作这棵树来改变页面。"
  >
    <DOMTreeAnimation
      tree={[
        {
          tag: 'html',
          children: [
            {
              tag: 'head',
              children: [
                { tag: 'meta', attrs: [{ key: 'charset', value: 'UTF-8' }] },
                { tag: 'title' },
              ],
            },
            {
              tag: 'body',
              children: [
                {
                  tag: 'div',
                  attrs: [{ key: 'class', value: 'card' }],
                  children: [
                    { tag: 'img', attrs: [{ key: 'src', value: 'avatar.jpg' }] },
                    { tag: 'h1' },
                    { tag: 'p' },
                  ],
                },
              ],
            },
          ],
        },
      ]}
      steps={[
        { label: '① 解析根节点 <html>', visibleTags: ['html'], desc: '浏览器最先识别出整个文档的根标签。' },
        { label: '② 分化 <head> 与 <body>', visibleTags: ['html', 'head', 'body'], desc: '根节点下分裂出头部与主体两大分支。' },
        { label: '③ 填充 <head> 元信息', visibleTags: ['html', 'head', 'meta', 'title', 'body'], desc: '头部装入字符集与标题等不直接显示的信息。' },
        { label: '④ <body> 出现 <div> 容器', visibleTags: ['html', 'head', 'meta', 'title', 'body', 'div'], desc: '主体内出现第一个布局容器卡片。' },
        { label: '⑤ 嵌入内容节点，DOM 树完成', visibleTags: ['html', 'head', 'meta', 'title', 'body', 'div', 'img', 'h1', 'p'], desc: '容器内嵌入图片、标题、段落，整棵 DOM 树构建完毕。' },
      ]}
    />
  </AnimationSlide>
);

// ============================================================
// Slide 13 — 代码框：CSS 样式初体验
// ============================================================
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="CSS 样式初体验：让卡片变美观"
    subtitle="高亮行即今天要认识的四个核心样式：背景、弹性布局、圆角、阴影"
    filename="style.css"
    language="css"
    showLineNumbers
    highlightLines={[3, 4, 12, 13]}
    takeaway="background 控制背景、flex 控制布局、border-radius 控制圆角、box-shadow 控制阴影——四件套成就美观卡片。"
    code={`body {
  font-family: sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.card {
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
}`}
  />
);

// ============================================================
// Slide 14 — 特效：样式前后对比
// ============================================================
const Slide14: React.FC = () => (
  <EffectSlide
    title="样式前后对比：CSS 的魔法"
    subtitle="同样的 HTML 结构，加上 CSS 后判若两「页」"
    effectType="StyleBeforeAfter"
    caption="左侧是无任何样式的默认渲染，右侧是加上渐变背景、圆角卡片与阴影后的效果。"
    takeaway="HTML 决定「有什么」，CSS 决定「长什么样」——两者分工，才是一个完整的网页。"
  >
    <StyleBeforeAfter
      before={{
        label: '无样式',
        render: (
          <div style={{ fontFamily: 'Times New Roman, serif', padding: '12px', background: '#fff', color: '#000' }}>
            <img src="https://placehold.co/80" alt="头像" style={{ border: '1px solid #000' }} />
            <h1 style={{ margin: '4px 0', fontSize: '18px' }}>李明</h1>
            <p style={{ margin: '4px 0', fontSize: '13px' }}>软件学院 2025 级</p>
            <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>联系我</a>
          </div>
        ),
      }}
      after={{
        label: '有样式',
        render: (
          <div
            style={{
              fontFamily: 'sans-serif',
              padding: '24px',
              borderRadius: '16px',
              background: '#fff',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              textAlign: 'center',
            }}
          >
            <img
              src="https://placehold.co/80"
              alt="头像"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <h1 style={{ margin: '8px 0 4px', fontSize: '18px', color: '#1e1b4b' }}>李明</h1>
            <p style={{ margin: '4px 0', fontSize: '13px', color: '#64748b' }}>软件学院 2025 级</p>
            <span
              style={{
                display: 'inline-block',
                marginTop: '8px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg,#667eea,#764ba2)',
                color: '#fff',
                fontSize: '12px',
              }}
            >
              联系我
            </span>
          </div>
        ),
      }}
    />
  </EffectSlide>
);

// ============================================================
// Slide 15 — 概念：浏览器如何渲染网页
// ============================================================
const Slide15: React.FC = () => (
  <ConceptSlide
    badgeText="渲染原理"
    title="浏览器如何渲染一张网页？"
    subtitle="从一段 HTML 文本到屏幕上的像素，浏览器要走完五步"
    bullets={[
      '解析 HTML：浏览器逐字符读取 HTML 文本，识别标签与属性。',
      '构建 DOM：把标签按嵌套关系组织成一棵 DOM 树（文档对象模型）。',
      '应用 CSS：解析样式规则，与 DOM 节点匹配，生成带样式的渲染树。',
      '布局（Layout）：计算每个节点在屏幕上的位置与大小。',
      '绘制（Paint）：按布局结果把节点逐个画到屏幕上，成为你看到的像素。',
    ]}
    keyTakeaway="理解渲染流程，未来遇到「页面为什么没更新 / 样式没生效」时，你就能定位问题。"
  />
);
// ============================================================
// Slide 16 — 动效：浏览器渲染流程
// ============================================================
const Slide16: React.FC = () => (
  <AnimationSlide
    title="渲染流水线：从字节到像素"
    subtitle="浏览器把网络传来的字节流，一步步变成屏幕上的画面"
    animationType="BrowserRender"
    caption="六个阶段依次推进，高亮表示当前所处的渲染阶段。"
    takeaway="字节 → 字符 → 节点 → DOM → 渲染树 → 像素，这就是浏览器让 HTML「活过来」的全过程。"
  >
    <BrowserRenderAnimation
      stages={[
        { label: '字节 Bytes', icon: Box, desc: '从网络收到的原始 0/1 字节流。' },
        { label: '字符 Characters', icon: Braces, desc: '按编码（如 UTF-8）把字节解码成可读字符。' },
        { label: '节点 Tokens', icon: Boxes, desc: '把字符切分成一个个标签、属性、文本节点。' },
        { label: 'DOM 树', icon: Network, desc: '按嵌套关系组装成文档对象模型树。' },
        { label: '渲染树', icon: Layers, desc: '合并 CSS 样式，生成用于显示的渲染树。' },
        { label: '像素 Pixels', icon: LayoutGrid, desc: '布局并绘制，最终呈现到屏幕上。' },
      ]}
    />
  </AnimationSlide>
);

// ============================================================
// Slide 17 — 练习：个人简介 HTML 打卡
// ============================================================
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="实操打卡：生成你的个人简介 HTML"
    subtitle="今晚跟着五步走，亲手做出你的第一个网页"
    tasks={[
      '打开 TRAE CN 或豆包 AI 对话框，准备开始对话。',
      '复制 Slide 09 的提示词，把姓名、介绍、技能替换成你自己的真实信息后发送。',
      '复制 AI 生成的 HTML 代码，保存为 index.html 文件（注意后缀名）。',
      '双击 index.html 用浏览器打开，确认页面正常显示你的个人简介。',
      '截图网页，在企微群发送：「Day 1 已完成，我的第一个 HTML 页面诞生！」',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评！第一天打卡完成率目标 100%。"
  />
);

// ============================================================
// Slide 18 — 提示词：优化提示词技巧
// ============================================================
const Slide18: React.FC = () => (
  <PromptSlide
    title="进阶：优化提示词的四个技巧"
    subtitle="同样的 AI，写出好 Prompt 的人能拿到 10 倍效果的成果"
    role="资深前端工程师"
    task="生成高保真个人简介 HTML 页面"
    stack="HTML5 + CSS3（Flexbox + 毛玻璃）"
    constraints="单文件、移动端自适应、零外部依赖"
    outputFormat="完整可运行的 HTML 代码"
    template={`你是一位资深前端工程师，请为我生成一个个人简介 HTML 页面。

【页面结构】
- 顶部圆形头像 + 姓名 + 一句话简介
- 中部三列技能卡片（图标 + 技能名 + 熟练度）
- 底部联系按钮（微信 / 邮箱）

【视觉风格】
- 参考 Apple 官网的极简风：大留白、毛玻璃卡片、柔和阴影
- 主色 #6366F1（靛蓝），背景浅灰渐变
- 字体系统默认无衬线，标题加粗 700，正文 400

【技术要求】
- 单文件 HTML5 + 内联 CSS3，使用 Flexbox 居中
- 移动端自适应（viewport meta）
- 头像用 https://placehold.co/120 占位

请直接输出完整 HTML 代码，无需解释。`}
    takeaway="增加细节、指定风格、给参考、迭代优化——四招让你的提示词质量翻倍。"
  />
);

// ============================================================
// Slide 19 — 测验：Day 1 知识检查
// ============================================================
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 1 知识检查"
    subtitle="四道小题，检验你今天的收获——点击选项即可查看对错与解析"
    questions={[
      {
        question: 'Vibe Coding 的核心理念是什么？',
        options: ['AI 写代码，人做决策', '完全自动生成，无需任何人工参与', '只能用 Python 一种语言编程', '禁止使用任何 AI 工具辅助'],
        answer: 0,
        explanation: 'Vibe Coding 强调人机分工：AI 负责具体编码，人负责构思需求与质量把控。',
      },
      {
        question: 'HTML 文档的标准三层骨架标签是？',
        options: ['<header><main><footer>', '<html><head><body>', '<div><span><p>', '<ul><li><ol>'],
        answer: 1,
        explanation: '<html> 是根，<head> 存放元信息，<body> 存放可见内容，构成三层骨架。',
      },
      {
        question: 'CSS 在 HTML 页面中起到什么作用？',
        options: ['定义网页的结构与内容', '控制网页的样式与美观', '处理用户交互的业务逻辑', '存储用户的持久化数据'],
        answer: 1,
        explanation: 'HTML 决定「有什么」，CSS 决定「长什么样」，两者分工协作。',
      },
      {
        question: '浏览器渲染网页的正确顺序是？',
        options: [
          '绘制 → 布局 → 解析 HTML',
          '解析 HTML → 构建 DOM → 应用 CSS → 布局 → 绘制',
          '应用 CSS → 解析 HTML → 绘制',
          '构建 DOM → 绘制 → 解析 HTML',
        ],
        answer: 1,
        explanation: '五步流水线：解析 HTML、构建 DOM、应用 CSS、布局、绘制，缺一不可。',
      },
    ]}
  />
);

// ============================================================
// Slide 20 — 总结：今日收获与明日预告
// ============================================================
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日收获与明日预告"
    subtitle="14 天旅程的第一步已经迈出，明天我们拆开互联网的黑盒"
    dayNumber={1}
    takeaways={[
      'Vibe Coding = AI 写代码 + 人做决策，对话式编程让零基础也能几分钟出成果。',
      '国产工具链五件套：TRAE CN 写代码、豆包/DeepSeek 做 AI 对话、Gitee 托管、阿里云部署。',
      'HTML 三层骨架 <html><head><body> + CSS 内联样式 = 一个可运行的网页。',
      '浏览器渲染五步：解析 HTML → 构建 DOM → 应用 CSS → 布局 → 绘制像素。',
    ]}
    nextDayPreview="Day 2 — 互联网原理 + 全栈环境搭建：拆解浏览器与服务器的对话，安装 JDK / Node / Git 并创建第一个 Gitee 仓库。"
  />
);
// ============================================================
// Render：根据 slideIndex 渲染对应 Slide 组件
// ============================================================
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

export const day01Deck: DayDeckRenderer = {
  meta: {
    day: 1,
    stageName: '第一阶段：开场与准备',
    title: 'Day 1 — 开营仪式 · Vibe Coding 认知 · 第一个 HTML',
    subtitle: '体验 AI 编程神奇魅力，零代码基础开启全栈之旅',
    duration: '90 分钟',
    target: '建立 Vibe Coding 认知，掌握与 AI 协作生成 HTML 页面的全流程',
    output: '个人简介 HTML 页面 (含姓名、照片、一句话介绍与基础样式)',
    aiPractice: '豆包对话 → "请生成一个简单的个人简介 HTML 页面，样式美观"',
    slides: [
      {
        id: 'd1-s1',
        title: '欢迎来到 AI 全栈暑期训练营',
        layout: 'cover',
        instructorNotes:
          '开场强调：不要害怕写不出代码，今天大家就能在 AI 的帮助下亲手做出一款运行在浏览器里的网页！重点传递「14 天 / 双项目 / 全国产工具链 / 零基础友好」四个承诺。',
        keyTakeaway: '14 天双项目驱动，全程国产工具链，零基础也能做出上线项目。',
      },
      {
        id: 'd1-s2',
        title: 'Day 1 学习路线图',
        layout: 'steps',
        instructorNotes:
          '用 4 个目标给学员明确的「今天能带走什么」预期，避免一开始就陷入细节。强调四个目标循序渐进：先认知、再识工具、后动手、最后打卡。',
        keyTakeaway: '今日四目标：Vibe Coding 认知 → 工具链 → HTML 生成 → 群内打卡。',
      },
      {
        id: 'd1-s3',
        title: '什么是 Vibe Coding',
        layout: 'concept',
        instructorNotes:
          '向学员解释：我们不是不学习知识，而是把精力放在更高的产品构思与逻辑设计上。可现场举例「我想做个简介页」如何几分钟变成可见网页。',
        keyTakeaway: 'AI 写代码、人做决策，对话式编程让零基础几分钟出成果。',
      },
      {
        id: 'd1-s4',
        title: '传统编程 vs Vibe Coding',
        layout: 'comparison',
        instructorNotes:
          '对比不是为了贬低传统编程，而是让学员理解范式转变。可问「你之前学编程卡在哪一步」引发共鸣，再用右侧四点给出新路径。',
        keyTakeaway: '人负责构思与把控，AI 负责具体编码——从打字员变架构师。',
      },
      {
        id: 'd1-s5',
        title: 'AI 协作心智模型',
        layout: 'concept',
        instructorNotes:
          '强调四角色不是 AI 的能力，而是「人」必须承担的职责。AI 越强，人越要把控方向与质量，否则容易得到「看起来对其实错」的代码。',
        keyTakeaway: '构思需求 / 质量把控 / 提示词表达 / 反馈迭代——人不可缺席的四角色。',
      },
      {
        id: 'd1-s6',
        title: '人机协作流程动效',
        layout: 'concept',
        instructorNotes:
          '点击播放观看闭环动效，引导学员注意最后一步「产出 → 想法」的回路：Vibe Coding 是迭代而非一次性。',
        keyTakeaway: '想法 → Prompt → AI 生成 → 人审核 → 产出，形成迭代闭环。',
      },
      {
        id: 'd1-s7',
        title: '国产工具链全景',
        layout: 'concept',
        instructorNotes:
          '逐一介绍五件套的定位，强调「全国产」的意义：合规、网络稳定、对中文友好。后续每天都会用到它们。',
        keyTakeaway: 'TRAE CN / 豆包 / DeepSeek / Gitee / 阿里云，构成生成—托管—部署闭环。',
      },
      {
        id: 'd1-s8',
        title: '工具链徽章墙',
        layout: 'concept',
        instructorNotes:
          '让学员对五个工具有视觉印象即可，不需要记住细节。提醒：明天起会逐一上手安装与使用。',
        keyTakeaway: '认识五件套的图标与定位，后续 13 天逐一用熟。',
      },
      {
        id: 'd1-s9',
        title: '第一个 HTML 生成提示词',
        layout: 'prompt_template',
        instructorNotes:
          '现场打开豆包或 TRAE CN 对话框，直接复制上述提示词并运行给学员看。强调「一键复制 Prompt」按钮可用。',
        keyTakeaway: '结构化提示词（角色 / 任务 / 栈 / 约束 / 输出）让 AI 产出可控。',
      },
      {
        id: 'd1-s10',
        title: '生成的 HTML 骨架解析',
        layout: 'split_code',
        instructorNotes:
          '逐行讲解高亮的 DOCTYPE / html / head / body，让学员理解「三层骨架」。提醒 <style> 写在 <head> 里。',
        keyTakeaway: '<html><head><body> 三层骨架，CSS 内联在 <head> 的 <style> 中。',
      },
      {
        id: 'd1-s11',
        title: 'HTML 标签结构与嵌套',
        layout: 'concept',
        instructorNotes:
          '用「搭积木」比喻嵌套关系，强调标签必须正确闭合。语义化部分可一带而过，后续会深入。',
        keyTakeaway: '标签 / 属性 / 嵌套 / 语义化——HTML 四要点。',
      },
      {
        id: 'd1-s12',
        title: 'DOM 树构建动效',
        layout: 'concept',
        instructorNotes:
          '播放动效，让学员直观看到扁平 HTML 如何变成树。强调 DOM 是浏览器内部表示，后续 JS 会操作它。',
        keyTakeaway: 'HTML 逐层解析成 DOM 树，是浏览器理解网页结构的内部表示。',
      },
      {
        id: 'd1-s13',
        title: 'CSS 样式初体验',
        layout: 'split_code',
        instructorNotes:
          '逐个讲解高亮的 background / flex / border-radius / box-shadow，让学员理解 CSS 四件套如何让卡片变美观。',
        keyTakeaway: 'background / flex / border-radius / box-shadow——CSS 美观四件套。',
      },
      {
        id: 'd1-s14',
        title: '样式前后对比',
        layout: 'comparison',
        instructorNotes:
          '强调同一个 HTML，加不加 CSS 判若两页。让学员理解 HTML 与 CSS 的分工。',
        keyTakeaway: 'HTML 决定「有什么」，CSS 决定「长什么样」。',
      },
      {
        id: 'd1-s15',
        title: '浏览器如何渲染网页',
        layout: 'concept',
        instructorNotes:
          '五步流程是今天最偏理论的一页，用「厨房做菜」比喻：食材（HTML）→ 菜谱（CSS）→ 摆盘（布局）→ 上桌（绘制）。',
        keyTakeaway: '解析 HTML → 构建 DOM → 应用 CSS → 布局 → 绘制，渲染五步。',
      },
      {
        id: 'd1-s16',
        title: '浏览器渲染流程',
        layout: 'concept',
        instructorNotes:
          '播放动效让学员看到字节到像素的全过程。强调这只是认知层面的了解，不需要背诵。',
        keyTakeaway: '字节 → 字符 → 节点 → DOM → 渲染树 → 像素。',
      },
      {
        id: 'd1-s17',
        title: '个人简介 HTML 打卡',
        layout: 'exercise',
        instructorNotes:
          '助教在群里准备随时收集学员打卡截图，第一天打卡完成率目标 100%！提醒学员把信息替换成自己的真实内容。',
        keyTakeaway: '五步走完：打开 AI → 输入 Prompt → 保存 HTML → 浏览器打开 → 群内打卡。',
      },
      {
        id: 'd1-s18',
        title: '优化提示词技巧',
        layout: 'prompt_template',
        instructorNotes:
          '对比 Slide 09 的基础提示词，让学员感受「细节 / 风格 / 参考 / 迭代」四技巧带来的质量提升。鼓励打卡后再用进阶 Prompt 优化一版。',
        keyTakeaway: '增加细节 / 指定风格 / 给参考 / 迭代优化——提示词四技巧。',
      },
      {
        id: 'd1-s19',
        title: 'Day 1 知识检查',
        layout: 'concept',
        instructorNotes:
          '让学员现场答题，答错的知识点立即回顾对应幻灯片。四题全对可获「Day 1 满分」群内表扬。',
        keyTakeaway: 'Vibe Coding 定义 / HTML 三骨架 / CSS 作用 / 渲染流程——四题回顾。',
      },
      {
        id: 'd1-s20',
        title: '今日收获与明日预告',
        layout: 'summary',
        instructorNotes:
          '回顾四个要点，预告明天内容。提醒学员今晚务必完成打卡，明天带电脑准备安装环境。',
        keyTakeaway: '今日四要点 + 明日互联网原理与环境搭建。',
      },
    ],
  },
  Render,
};