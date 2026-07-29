import { DayCourseDeck } from '../../../../types';

export const day10Deck: DayCourseDeck = {
    day: 10,
    stageName: '第六阶段：生态力量',
    title: 'Day 10 — AI Debug 技巧 · MVP 原则 · 「此刻」首页信息流',
    subtitle: '学会向 AI 精准喂错误日志，遵循 MVP 原操快速迭代首页',
    duration: '90 分钟',
    target: '掌握定位与修复 Bug 的三步法，完成「此刻」首页帖子卡片瀑布流',
    output: '「此刻」首页信息流 (卡片式帖子列表、按分类 Tab 过滤、点赞交互)',
    aiPractice: '报错处理模板 → 粘贴报错 + 代码上下文 + 环境 → 求方案',
    slides: [
      {
        id: 'd10-s1',
        title: '高效 AI Debug 三步法',
        subtitle: '不要只发一句"报错了"，AI 需要具体的营养',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '复制完整 StackTrace', desc: '提取控制台红字报错或 NullPointerException 堆栈' },
          { stepNumber: 2, title: '附带上下文代码', desc: '提供报错行所在的方法块与关联变量' },
          { stepNumber: 3, title: '明确当前技术栈', desc: '指出 Vue 版本或 Spring Boot 版本，以便 AI 给精准解法' },
        ],
      },
      {
        id: 'd10-s2',
        title: 'MVP (最小可行性产品) 原则',
        subtitle: '先跑通核心流程，再打磨美化',
        layout: 'comparison',
        comparison: {
          leftTitle: '过度设计陷阱 (过早优化)',
          leftItems: [
            '纠结完美复杂的动画与图标',
            '设计复杂的权限与十几种关联表',
            '卡在细节导致项目无法按时上线',
          ],
          rightTitle: 'MVP 快速闭环 (推荐方式)',
          rightItems: [
            '先确保发帖、看帖、点赞三个核心动作顺畅',
            'UI 采用简单大方的 Element Plus 卡片',
            '跑通后通过迭代逐步加入增强功能',
          ],
        },
      },
      {
        id: 'd10-s3',
        title: 'Day 10 Checkpoint ② 首页信息流上线',
        subtitle: '完成 MVP 核心版本',
        layout: 'exercise',
        bullets: [
          '1. 用 AI 生成 HomeFeed.vue 卡片列表',
          '2. 实现按"日常/游戏/二次元/音乐"分类过滤 Tab',
          '3. 实现点击点赞按钮使点赞数实时 +1 并在后端落盘',
          '4. 提交 Checkpoint ② 检查打卡',
        ],
      },
    ],
};
