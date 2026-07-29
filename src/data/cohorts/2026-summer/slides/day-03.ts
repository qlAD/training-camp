import { DayCourseDeck } from '../../../../types';

export const day03Deck: DayCourseDeck = {
    day: 3,
    stageName: '第三阶段：前端基础',
    title: 'Day 3 — HTML / CSS / JavaScript 极速入门',
    subtitle: '掌握前端三剑客分工，用 AI 快速实现动态交互与美化',
    duration: '90 分钟',
    target: '理解结构(HTML)、样式(CSS)与行为(JS)的分工，能用 AI 迭代网页动态效果',
    output: '美化版个人简介页面 (包含 CSS 渐变、卡片布局与 JS 点击互动弹窗)',
    aiPractice: '豆包对话 → "帮我美化这个 HTML 页面，加一个好看的渐变背景和圆角卡片"',
    slides: [
      {
        id: 'd3-s1',
        title: '前端三剑客的职能分工',
        subtitle: '建造一栋房子的完美比喻',
        layout: 'comparison',
        comparison: {
          leftTitle: 'HTML & CSS (静态外观)',
          leftItems: [
            'HTML: 建筑骨架 (墙壁、门窗、楼梯)',
            'CSS: 室内装修 (墙面颜色、灯光、家具样式)',
            '负责决定页面"长什么样"',
          ],
          rightTitle: 'JavaScript (动态灵魂)',
          rightItems: [
            'JS: 智能家居 (点击开关开灯、自动感应门)',
            '负责处理用户点击、数据交互与逻辑',
            '让网页真正"动起来"',
          ],
        },
      },
      {
        id: 'd3-s2',
        title: '用 AI 添加 JS 互动：从静态到响应',
        subtitle: '监听点击事件 (Event Listener)',
        layout: 'split_code',
        codeBlock: {
          language: 'javascript',
          filename: 'script.js',
          code: `// 获取按钮与计数元素
const btn = document.getElementById('likeBtn');
let count = 0;

btn.addEventListener('click', () => {
  count++;
  btn.innerText = \`👍 点赞 (\${count})\`;
  console.log('用户点赞了！当前总数:', count);
});`,
        },
        keyTakeaway: '在 HTML 中通过 id 给元素命名，JS 就能精准抓取并赋予其动态响应。',
      },
      {
        id: 'd3-s3',
        title: 'Day 3 实操任务：升级个人简介页',
        subtitle: '为你的页面注入个性样式与动态按钮',
        layout: 'exercise',
        bullets: [
          '1. 向 AI 提出提示词："给我的个人简介增加一个问候弹窗和实时点赞计数器"',
          '2. 将 AI 提供的 CSS 复制到 <style> 中，JS 复制到 <script> 中',
          '3. 测试点击按钮，观察点赞数字增加',
          '4. 打卡提交美化后的页面与操作视频/截图',
        ],
      },
    ],
};
