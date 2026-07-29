import { DayCourseDeck } from '../../../../types';

export const day01Deck: DayCourseDeck = {
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
        title: '欢迎来到 AI 赋能下的全栈开发暑期训练营',
        subtitle: '14 天，用 AI 做出你的第一个线上全栈项目',
        layout: 'cover',
        bullets: [
          '🎯 核心理念：Vibe Coding —— AI 写代码，人做决策',
          '🚀 双项目驱动：个人作品集 + 「此刻」兴趣社区',
          '🛠️ 全国产工具链：TRAE CN + 豆包/DeepSeek + Gitee + 阿里云',
          '💡 零基础友好：不要求任何编程经验，全程带练到上线',
        ],
        instructorNotes: '开场强调：不要害怕写不出代码，今天大家就能在 AI 的帮助下亲手做出一款运行在浏览器里的网页！',
      },
      {
        id: 'd1-s2',
        title: '什么是 Vibe Coding？大模型时代的新范式',
        subtitle: '从"逐行敲代码"到"对话式编程"',
        layout: 'comparison',
        comparison: {
          leftTitle: 'Traditional Coding (传统编程)',
          leftItems: [
            '记住繁杂的语法与 API',
            '80% 时间处理环境配置与报错',
            '入门门槛高，几周看不到结果',
            '开发者是代码的"打字员"',
          ],
          rightTitle: 'Vibe Coding (AI 时代范式)',
          rightItems: [
            '将想法转化为清晰的提示词 Prompt',
            'AI 实时为你编写、调试和重构',
            '几分钟即可看到可视化成果',
            '开发者是架构师与产品经理',
          ],
        },
        keyTakeaway: '人负责构思需求与质量把控，AI 负责繁重的具体编码与细节实现。',
        instructorNotes: '向学员解释：我们不是不学习知识，而是把精力放在更高的产品构思与逻辑设计上。',
      },
      {
        id: 'd1-s3',
        title: 'Prompt 实践：用豆包生成你的第一个 HTML 页面',
        subtitle: '学会表达，就是学会编程',
        layout: 'prompt_template',
        promptBox: {
          role: '前端开发助理',
          task: '生成一个单页面的个人简介 HTML 网页',
          stack: 'HTML5 + CSS3 (包含渐变背景与圆角卡片)',
          template: '请帮我生成一个简单且美观的个人简介 HTML 页面。包含：\n1. 个人头像占位图与姓名"张三"\n2. 一句话自我介绍："软件学院大一学生，热衷 AI 全栈开发"\n3. 技能标签：[HTML, CSS, AI Prompting]\n4. 联系按钮与淡雅的背景样式',
        },
        instructorNotes: '现场打开豆包或 TRAE CN 对话框，直接复制上述提示词并运行给学员看。',
      },
      {
        id: 'd1-s4',
        title: '生成结果解析：网页的骨架 —— HTML',
        subtitle: '标签 (Tag)、属性 (Attribute) 与结构',
        layout: 'split_code',
        codeBlock: {
          language: 'html',
          filename: 'index.html',
          code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的个人简介</title>
  <style>
    body { font-family: sans-serif; background: #f4f6f9; display: flex; justify-content: center; padding: 40px; }
    .card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://via.placeholder.com/100" style="border-radius: 50%;">
    <h1>李明 · 个人简介</h1>
    <p>软件学院 2025 级 | AI 全栈探索者</p>
  </div>
</body>
</html>`,
        },
        keyTakeaway: '<html> <head> <body> 是网页的标准三层骨架，CSS 写在 <style> 标签里控制美观。',
      },
      {
        id: 'd1-s5',
        title: 'Day 1 跟着练习与打卡作业',
        subtitle: '今晚完成你的第一个成果打卡',
        layout: 'exercise',
        bullets: [
          '1. 打开 TRAE CN 或 豆包 AI 对话框',
          '2. 输入提示词生成包含你真实名字与爱好的个人简介 HTML',
          '3. 双击用浏览器打开 index.html 网页',
          '4. 截图网页并在企微群内打卡提交："Day 1 已完成，我的第一个 HTML 页面诞生！"',
        ],
        instructorNotes: '助教在群里准备随时收集学员打卡截图，第一天打卡完成率目标 100%！',
      },
    ],
};
