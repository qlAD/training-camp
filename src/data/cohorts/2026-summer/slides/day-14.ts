import { DayCourseDeck } from '../../../../types';

export const day14Deck: DayCourseDeck = {
    day: 14,
    stageName: '第八阶段：完结撒花',
    title: 'Day 14 — 结营仪式 · 模拟毕设发布 · 颁奖与后续规划',
    subtitle: '庆祝 14 天蜕变，开启下一段 AI 赋能的探索征程',
    duration: '90 分钟',
    target: '回顾 14 天成长轨迹，表彰优秀学员，发布模拟毕业设计挑战',
    output: '提交 2 个项目最终版，获得结业认证，开启模拟毕设探索',
    aiPractice: '开启自学路线图对话 → "如何在结营后继续深入学习 AI Agent 开发？"',
    slides: [
      {
        id: 'd14-s1',
        title: '14 天全景里程碑总回顾',
        subtitle: '从零基础到产出两个线上项目',
        layout: 'concept',
        bullets: [
          '🎉 拥有了属于自己的个人作品集主页',
          '🚀 成功发布了第一个全栈应用「此刻」兴趣社区',
          '🤖 熟练掌握了 Vibe Coding 与大模型 AI 协作秘籍',
          '🎓 获得了从需求拆解到服务器部署的全流程工程思维',
        ],
      },
      {
        id: 'd14-s2',
        title: '模拟毕业设计选题挑战',
        subtitle: '秋季开学评奖 (最高 200 元现金奖励)',
        layout: 'comparison',
        comparison: {
          leftTitle: '选题方向示例',
          leftItems: [
            '🛒 校园二手物品交易平台',
            '📚 课程评价与选课助手',
            '🧩 社团招新与活动报名小程序',
            '🍵 校园失物招领与便民互助',
          ],
          rightTitle: '奖励与评选机制',
          rightItems: [
            '🥇 第一名：200 元现金 + 荣誉证书',
            '🥈 第二名：150 元现金',
            '🥉 第三名：100 元现金',
            '秋季开学前自愿独立完成并提交评审',
          ],
        },
      },
      {
        id: 'd14-s3',
        title: '结营寄语：保持好奇，AI 时代未来可期！',
        subtitle: '技术会变，利用 AI 解决问题的主动性永不过时',
        layout: 'cover',
        bullets: [
          '🌟 祝贺所有坚持完成 14 天学习的学员！',
          '📜 结业证书与优秀学员证书将在秋季开学统一颁发',
          '🤝 欢迎加入 AI 创新应用社，继续探索技术前沿',
          '🚀 Vibe Coding, Keep Building!',
        ],
      },
    ],
};
