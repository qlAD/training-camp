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
  EffectSlide,
  AnimationSlide,
} from './shared/layouts';
import { BoxModelVisualizer, StyleBeforeAfter } from './shared/effects';
import { DOMTreeAnimation } from './shared/animations';

// #1 Cover — 前端三剑客极速入门
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第三阶段：前端基础"
    badgeText="Day 3 · 课程讲义"
    title="前端三剑客极速入门"
    subtitle="一日打通 HTML 骨架、CSS 美化与 JS 交互"
    bullets={[
      'HTML：用标签搭建页面结构骨架',
      'CSS：用样式为页面穿上漂亮外衣',
      'JavaScript：用代码让页面真正动起来',
      '综合实战：升级你的个人简介页',
    ]}
  />
);

// #2 Agenda — Day 3 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 3 学习路线图"
    subtitle="四个目标，循序渐进打通前端基础"
    objectiveCountLabel="4 目标"
    objectives={[
      { title: 'HTML', desc: '常用标签与嵌套树，搭建页面骨架' },
      { title: 'CSS', desc: '选择器、盒模型与 Flex 布局，美化外观' },
      { title: 'JavaScript', desc: '变量、函数与事件监听，赋予交互' },
      { title: '综合实战', desc: '升级个人简介页：样式 + 动效 + 交互' },
    ]}
  />
);

// #3 Concept — 前端三剑客职责
const Slide03: React.FC = () => (
  <ConceptSlide
    title="前端三剑客职责"
    subtitle="结构、表现、行为三层分离，各司其职"
    badgeText="核心概念"
    bullets={[
      'HTML — 结构层：用标签描述内容语义，决定页面"是什么"',
      'CSS — 表现层：用样式控制视觉外观，决定页面"长什么样"',
      'JavaScript — 行为层：用代码响应交互逻辑，决定页面"能做什么"',
      '三层分离：结构、样式、行为解耦，便于维护与团队协作',
    ]}
    keyTakeaway="把 HTML 当骨架、CSS 当皮肤、JS 当肌肉，三者协作构成完整网页。"
  />
);

// #4 CodeBox — HTML 常用标签
const Slide04: React.FC = () => (
  <CodeBoxSlide
    title="HTML 常用标签"
    subtitle="div / span / p / h1 / a / img / ul / li 一网打尽"
    filename="index.html"
    language="html"
    takeaway="块级标签（div/p/h1/ul）独占一行，行内标签（span/a）共享一行。"
    code={`<!-- HTML 常用标签示例 -->
<div class="card">
  <h1>个人简介</h1>
  <p>你好，我是 <span class="name">小明</span>。</p>
  <img src="avatar.png" alt="头像">
  <ul>
    <li>喜欢前端开发</li>
    <li>正在学习 Vue 3</li>
  </ul>
  <a href="https://gitee.com">我的 Gitee 主页</a>
</div>`}
  />
);

// #5 Animation:DOMTree — 标签嵌套树动效
const Slide05: React.FC = () => (
  <AnimationSlide
    title="标签嵌套树动效"
    subtitle="父子标签层级展开，理解 DOM 的树形结构"
    animationType="DOMTree"
    caption="点击下一步，逐层展开标签层级"
    takeaway="HTML 标签相互嵌套形成 DOM 树，浏览器据此渲染页面。"
  >
    <DOMTreeAnimation
      tree={[
        {
          tag: 'html',
          children: [
            { tag: 'head', children: [{ tag: 'title' }] },
            {
              tag: 'body',
              children: [
                {
                  tag: 'div',
                  attrs: [{ key: 'class', value: 'card' }],
                  children: [{ tag: 'h1' }, { tag: 'p', children: [{ tag: 'span' }] }],
                },
                { tag: 'ul', children: [{ tag: 'li' }, { tag: 'li' }] },
              ],
            },
          ],
        },
      ]}
      steps={[
        { label: 'Step 1', visibleTags: ['html'], desc: '根元素 <html> 包裹整个页面' },
        { label: 'Step 2', visibleTags: ['html', 'head', 'title'], desc: '<head> 内的 <title> 描述页面标题' },
        { label: 'Step 3', visibleTags: ['html', 'head', 'title', 'body'], desc: '<body> 承载所有可见内容' },
        {
          label: 'Step 4',
          visibleTags: ['html', 'head', 'title', 'body', 'div', 'h1', 'p', 'span'],
          desc: '<div> 分块，内嵌 <h1> 标题与 <p> 段落',
        },
        {
          label: 'Step 5',
          visibleTags: ['html', 'head', 'title', 'body', 'div', 'h1', 'p', 'span', 'ul', 'li'],
          desc: '<ul> 列表内嵌多个 <li> 列表项',
        },
      ]}
    />
  </AnimationSlide>
);

// #6 Concept — CSS 选择器体系
const Slide06: React.FC = () => (
  <ConceptSlide
    title="CSS 选择器体系"
    subtitle="五种选择器，精准定位要美化的元素"
    badgeText="核心概念"
    bullets={[
      '标签选择器：p { } 选中所有 <p> 标签',
      '类选择器：.card { } 选中 class="card" 的元素',
      'ID 选择器：#title { } 选中 id="title" 的唯一元素',
      '后代选择器：.card p { } 选中 .card 内部的所有 <p>',
      '伪类选择器：a:hover { } 选中鼠标悬停时的 <a>',
    ]}
    keyTakeaway="选择器越精确优先级越高；类选择器 .class 是日常最常用的。"
  />
);

// #7 CodeBox — CSS 盒模型
const Slide07: React.FC = () => (
  <CodeBoxSlide
    title="CSS 盒模型"
    subtitle="content / padding / border / margin 四层嵌套"
    filename="style.css"
    language="css"
    takeaway="盒模型由内向外：内容 → 内边距 → 边框 → 外边距，决定元素占位。"
    code={`/* CSS 盒模型：content / padding / border / margin */
.card {
  width: 240px;
  padding: 20px;                 /* 内边距：内容到边框的距离 */
  border: 4px solid #6366f1;     /* 边框 */
  margin: 16px;                  /* 外边距：与其他元素的间距 */
  background: #1e293b;
  border-radius: 12px;
  color: #fff;
}`}
  />
);

// #8 Effect:BoxModelVisualizer — 盒模型可视化
const Slide08: React.FC = () => (
  <EffectSlide
    title="盒模型可视化"
    subtitle="四层嵌套彩色标注，一眼看懂占位"
    effectType="BoxModel"
    caption="由内向外：content → padding → border → margin"
    takeaway="调试布局时，用浏览器开发者工具的盒模型视图排查间距问题。"
  >
    <BoxModelVisualizer
      title="盒子 .card"
      content={{ width: 200, height: 70, label: 'content' }}
      padding={{ top: 20, right: 20, bottom: 20, left: 20 }}
      border={{ width: 4, color: '#6366f1' }}
      margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
    />
  </EffectSlide>
);

// #9 Effect — Flexbox 布局动效（无专用动画组件，用 EffectSlide + children 演示）
const flexDemos: { label: string; cls: string }[] = [
  { label: 'justify-content: center', cls: 'justify-center' },
  { label: 'justify-content: space-between', cls: 'justify-between' },
  { label: 'justify-content: space-around', cls: 'justify-around' },
  { label: 'justify-content: space-evenly', cls: 'justify-evenly' },
];

const Slide09: React.FC = () => (
  <EffectSlide
    title="Flexbox 布局动效"
    subtitle="justify-content 切换，对比四种主轴对齐效果"
    effectType="Flexbox"
    caption="display:flex 开启弹性布局后调整主轴对齐"
    takeaway="一行 display:flex + justify-content 即可搞定过去浮动定位才难的居中。"
  >
    <div className="space-y-4">
      {flexDemos.map((d) => (
        <div key={d.cls}>
          <div className="text-[11px] font-mono text-indigo-300 mb-1.5">{d.label}</div>
          <div className={`flex ${d.cls} bg-slate-800/60 border border-slate-700 rounded-lg p-2`}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </EffectSlide>
);

// #10 CodeBox — Flex 布局实战
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="Flex 布局实战"
    subtitle="display:flex + 居中 / 两端分布 / 换行"
    filename="flex.css"
    language="css"
    takeaway="flex 解决了垂直居中、等分间距等传统 CSS 难题，是现代布局首选。"
    code={`/* Flex 布局实战 */
.container {
  display: flex;                   /* 启用弹性布局 */
  justify-content: center;         /* 主轴：水平居中 */
  align-items: center;             /* 交叉轴：垂直居中 */
  gap: 12px;                       /* 子项间距 */
}
.between { justify-content: space-between; }  /* 两端分布 */
.around  { justify-content: space-around; }   /* 两侧留半间距 */
.wrap    { flex-wrap: wrap; }                 /* 允许换行 */`}
  />
);

// #11 Concept — JavaScript 是什么
const Slide11: React.FC = () => (
  <ConceptSlide
    title="JavaScript 是什么"
    subtitle='让网页"活起来"的脚本语言'
    badgeText="核心概念"
    bullets={[
      '动态：运行时可改变数据结构与类型，灵活多变',
      '弱类型：变量无需声明类型，自动推断（let / const）',
      '解释执行：浏览器引擎逐行解析运行，无需编译',
      '浏览器内置：所有主流浏览器原生支持，开箱即用',
    ]}
    keyTakeaway="JS 是前端唯一的脚本语言，负责处理用户交互与动态更新页面。"
  />
);

// #12 CodeBox — JS 变量与函数
const Slide12: React.FC = () => (
  <CodeBoxSlide
    title="JS 变量与函数"
    subtitle="let / const + 箭头函数，现代 JS 基础语法"
    filename="vars.js"
    language="javascript"
    takeaway="const 优先、let 次之；箭头函数语法简洁，是回调的首选写法。"
    code={`// JS 变量与箭头函数
const name = '小明';        // 常量：不可重新赋值
let count = 0;              // 变量：可重新赋值

// 箭头函数：求两数之和
const add = (a, b) => a + b;

count = add(3, 4);          // 7
console.log(\`\${name} 的分数：\${count}\`);`}
  />
);

// #13 Animation:DOMTree — DOM 操作动效
const Slide13: React.FC = () => (
  <AnimationSlide
    title="DOM 操作动效"
    subtitle="querySelector 选中节点 → addEventListener 绑定事件 → 回调改 DOM"
    animationType="DOMTree"
    caption="JS 通过 DOM API 读取与修改页面元素"
    takeaway="事件监听三步走：选中元素 → 绑定事件 → 在回调里改 DOM。"
  >
    <DOMTreeAnimation
      tree={[
        {
          tag: 'body',
          children: [
            { tag: 'button', attrs: [{ key: 'id', value: 'likeBtn' }] },
            { tag: 'span', attrs: [{ key: 'id', value: 'count' }] },
          ],
        },
      ]}
      steps={[
        {
          label: 'querySelector',
          visibleTags: ['body', 'button'],
          desc: "document.querySelector('#likeBtn') 选中按钮节点",
        },
        {
          label: 'addEventListener',
          visibleTags: ['body', 'button'],
          desc: "btn.addEventListener('click', cb) 绑定点击事件",
        },
        {
          label: 'click 触发',
          visibleTags: ['body', 'button', 'span'],
          desc: '用户点击 → 回调执行 → 修改 #count 文本',
        },
      ]}
    />
  </AnimationSlide>
);

// #14 CodeBox — 事件监听示例
const Slide14: React.FC = () => (
  <CodeBoxSlide
    title="事件监听示例"
    subtitle="click 事件 + 回调修改 DOM"
    filename="event.js"
    language="javascript"
    takeaway="事件回调内可任意读写 DOM，实现点赞、切换主题等交互。"
    code={`// 事件监听：点击按钮修改 DOM
const btn = document.querySelector('#likeBtn');
let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  btn.innerText = \`👍 点赞 (\${count})\`;
});`}
  />
);

// #15 Comparison — 三种技术职责对比
const Slide15: React.FC = () => (
  <ComparisonSlide
    title="三种技术职责对比"
    subtitle="结构 vs 表现 vs 行为，划清各自边界"
    leftLabel="静态层"
    rightLabel="动态层"
    left={{
      title: 'HTML + CSS',
      items: [
        'HTML：结构 — 用标签描述内容语义（骨架）',
        'CSS：表现 — 用样式控制视觉外观（皮肤）',
        '页面加载后基本不变，决定"长什么样"',
        '关注点：语义、布局、配色、字体',
      ],
    }}
    right={{
      title: 'JavaScript',
      items: [
        'JS：行为 — 监听事件并修改 DOM（肌肉）',
        '响应用户点击/输入，动态更新内容与样式',
        '运行时可改变一切，决定"能做什么"',
        '关注点：交互、逻辑、数据、状态',
      ],
    }}
    keyTakeaway="三层分离：HTML 管结构、CSS 管外观、JS 管交互，各司其职便于维护。"
    contrastIcons
  />
);

// #16 Prompt — 用 AI 生成炫酷样式
const Slide16: React.FC = () => (
  <PromptSlide
    title="用 AI 生成炫酷样式"
    subtitle="结构化提示词，让 AI 帮你写出渐变背景与动画"
    role="资深前端 CSS 助理"
    task="为个人简介页生成渐变背景 + 悬停动画的 CSS3 样式"
    stack="HTML5 + CSS3"
    constraints="兼容主流浏览器，使用 CSS3 渐变与 transition，不引入 JS"
    outputFormat="可直接粘贴到 <style> 的代码块"
    takeaway="给 AI 明确角色、任务、栈与约束，才能得到可直接复用的代码。"
    template={`你是一位资深前端 CSS 助理。
请为我的个人简介页编写 CSS3 样式：
1. 背景：linear-gradient 渐变（紫蓝过渡）
2. 卡片：圆角 + 阴影 + 半透明背景
3. 按钮：悬停时放大并改变颜色（transition）
4. 文字：标题加粗高亮，正文柔和对比

技术栈：HTML5 + CSS3（不写 JS）
请输出可直接粘贴到 <style> 标签的完整代码。`}
  />
);

// #17 Exercise — 升级个人简介页
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="升级个人简介页"
    subtitle="为 Day 1 的页面注入样式、动效与交互"
    tasks={[
      '用 AI 生成 CSS，给页面加渐变背景、圆角卡片与配色',
      '把 AI 给的 CSS 粘到 <style>，刷新查看美化效果',
      '加一个"点赞"按钮，用 JS 实现点击计数并更新文案',
      '测试交互正常后，截图/录屏并打卡提交链接',
    ]}
    submissionText="打卡：提交美化后页面链接 + 操作截图/录屏"
    showTaskNumbers
  />
);

// #18 Effect:StyleBeforeAfter — 最终效果展示
const Slide18: React.FC = () => (
  <EffectSlide
    title="最终效果展示"
    subtitle="Day 1 纯 HTML → Day 3 样式 + 动效 + 交互"
    effectType="StyleBeforeAfter"
    caption="同样的内容，加上 CSS 与 JS 后焕然一新"
    takeaway="三剑客合力：结构清晰、外观精致、交互流畅。"
  >
    <StyleBeforeAfter
      before={{
        label: 'Day 1 · 纯 HTML',
        render: (
          <div className="p-4 bg-white text-slate-800 rounded text-xs space-y-2">
            <h3 className="font-bold text-sm">小明</h3>
            <p>你好，我是小明。</p>
            <p>喜欢前端开发。</p>
          </div>
        ),
      }}
      after={{
        label: 'Day 3 · HTML + CSS + JS',
        render: (
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg space-y-2">
            <h3 className="font-bold text-sm">✨ 小明</h3>
            <p className="text-indigo-100">你好，我是小明。</p>
            <button className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              👍 点赞 (3)
            </button>
          </div>
        ),
      }}
    />
  </EffectSlide>
);

// #19 Quiz — Day 3 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 3 知识检查"
    subtitle="4 道题，检验三剑客掌握情况"
    questions={[
      {
        question: '前端三剑客各自负责什么？',
        options: [
          'HTML 结构 / CSS 表现 / JS 行为',
          'HTML 表现 / CSS 结构 / JS 行为',
          'HTML 行为 / CSS 表现 / JS 结构',
          '三者都只负责结构',
        ],
        answer: 0,
        explanation: 'HTML 管结构、CSS 管表现、JS 管行为，三层分离各司其职。',
      },
      {
        question: 'CSS 盒模型由内向外依次是？',
        options: [
          'margin → border → padding → content',
          'content → padding → border → margin',
          'content → border → padding → margin',
          'padding → content → margin → border',
        ],
        answer: 1,
        explanation: '由内向外：内容 content → 内边距 padding → 边框 border → 外边距 margin。',
      },
      {
        question: '下列哪个是 Flex 布局"水平居中"的属性值？',
        options: [
          'align-items: center',
          'flex-direction: column',
          'justify-content: center',
          'flex-wrap: wrap',
        ],
        answer: 2,
        explanation: 'justify-content 控制主轴（默认水平）对齐，center 即水平居中。',
      },
      {
        question: 'JS 中给按钮绑定点击事件用哪个方法？',
        options: [
          'document.querySelector("btn")',
          'btn.addEventListener("click", 回调)',
          'btn.style.color = "red"',
          'const x = 1',
        ],
        answer: 1,
        explanation: 'addEventListener("click", 回调) 为元素绑定点击事件，在回调中改 DOM。',
      },
    ]}
  />
);

// #20 Summary — 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="Day 3 收获：前端基础已打通"
    dayNumber={3}
    takeaways={[
      'HTML：常用标签与嵌套树，搭建页面结构骨架',
      'CSS：选择器、盒模型与 Flex 布局，掌控外观与排版',
      'JavaScript：变量、函数与事件监听，赋予页面交互',
      '综合实战：用 AI 协作升级个人简介页（样式 + 动效 + 交互）',
    ]}
    nextDayPreview="Day 4 — Vue 3 + Vite 现代前端：组件化开发与作品集首页"
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

export const day03Deck: DayDeckRenderer = {
  meta: {
    day: 3,
    stageName: '第三阶段：前端基础',
    title: 'Day 3 — HTML / CSS / JavaScript 极速入门',
    subtitle: '一日打通前端三剑客：结构、样式与交互',
    duration: '90 分钟',
    target: '掌握 HTML 标签嵌套、CSS 盒模型与 Flex 布局、JS 变量函数与事件监听',
    output: '升级后的个人简介页（含样式、动效与简单交互）',
    aiPractice: '豆包对话 → "给我写一个 HTML 页面，点击按钮切换暗色主题"',
    slides: [
      { id: 'd3-s1', title: '前端三剑客极速入门', subtitle: 'HTML 骨架 / CSS 美化 / JS 交互 一日打通', layout: 'cover' },
      { id: 'd3-s2', title: 'Day 3 学习路线图', subtitle: 'HTML → CSS → JS → 综合实战', layout: 'concept' },
      { id: 'd3-s3', title: '前端三剑客职责', subtitle: 'HTML 结构 / CSS 表现 / JS 行为 三层分离', layout: 'concept' },
      { id: 'd3-s4', title: 'HTML 常用标签', subtitle: 'div / span / p / h1 / a / img / ul / li', layout: 'split_code' },
      { id: 'd3-s5', title: '标签嵌套树动效', subtitle: '父子标签层级展开', layout: 'concept' },
      { id: 'd3-s6', title: 'CSS 选择器体系', subtitle: '标签 / 类 / ID / 后代 / 伪类', layout: 'concept' },
      { id: 'd3-s7', title: 'CSS 盒模型', subtitle: 'content / padding / border / margin 四层', layout: 'split_code' },
      { id: 'd3-s8', title: '盒模型可视化', subtitle: '四层嵌套彩色标注', layout: 'concept' },
      { id: 'd3-s9', title: 'Flexbox 布局动效', subtitle: 'justify-content / align-items 切换', layout: 'concept' },
      { id: 'd3-s10', title: 'Flex 布局实战', subtitle: 'display:flex + 居中 / 两端分布 / 换行', layout: 'split_code' },
      { id: 'd3-s11', title: 'JavaScript 是什么', subtitle: '动态 / 弱类型 / 解释执行 / 浏览器内置', layout: 'concept' },
      { id: 'd3-s12', title: 'JS 变量与函数', subtitle: 'let / const + 箭头函数', layout: 'split_code' },
      { id: 'd3-s13', title: 'DOM 操作动效', subtitle: 'querySelector / addEventListener', layout: 'concept' },
      { id: 'd3-s14', title: '事件监听示例', subtitle: 'click 事件 + 回调修改 DOM', layout: 'split_code' },
      { id: 'd3-s15', title: '三种技术职责对比', subtitle: '结构 vs 表现 vs 行为 各自边界', layout: 'comparison' },
      { id: 'd3-s16', title: '用 AI 生成炫酷样式', subtitle: '角色:CSS 助理 / 任务:渐变背景+动画 / 栈:CSS3', layout: 'prompt_template' },
      { id: 'd3-s17', title: '升级个人简介页', subtitle: '加样式 → 加交互 → 加动效 → 打卡', layout: 'exercise' },
      { id: 'd3-s18', title: '最终效果展示', subtitle: 'Day 1 vs Day 3 进阶对比', layout: 'concept' },
      { id: 'd3-s19', title: 'Day 3 知识检查', subtitle: '三剑客职责 / 盒模型四层 / Flex 属性 / 事件监听', layout: 'concept' },
      { id: 'd3-s20', title: '今日总结', subtitle: '前端基础打通 + 明日 Vue 3 现代前端', layout: 'summary' },
    ],
  },
  Render,
};