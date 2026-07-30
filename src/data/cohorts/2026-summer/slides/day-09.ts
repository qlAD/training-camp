import { DayCourseDeck } from '../../../../types';

export const day09Deck: DayCourseDeck = {
    day: 9,
    stageName: '第六阶段：生态力量',
    title: 'Day 9 — 提示词工程 · Reasonix / AI Agent 引入 · 用户系统',
    subtitle: '掌握结构化提示词神技，用 Agent 快速搭建注册与登录',
    duration: '90 分钟',
    target: '熟练运用三段式结构化提示词，利用 AI Agent 高效完成用户系统模块',
    output: '用户注册/登录完整模块 (含密码加密、前端表单与 Token 鉴权)',
    aiPractice: '万能提示词模板 → 角色 + 任务 + 技术栈 + 约束 + 输出',
    slides: [
      {
        id: 'd9-s1',
        title: '高级提示词工程：结构化 Prompt 秘籍',
        subtitle: '给 AI 明确上下文，告别模糊输出',
        layout: 'prompt_template',
        promptBox: {
          role: '资深全栈开发工程师',
          task: '为「此刻」社区实现用户注册与登录完整功能',
          stack: 'Vue 3 + Element Plus + Spring Boot 3 + JPA + MySQL',
          template: '【角色】：你是一个资深全栈工程师\n【任务】：实现用户注册与登录功能\n【约束】：\n 1. 密码使用 BCrypt 加密存储\n 2. 登录成功返回 UserDTO 对象\n 3. 包含前端 Element Plus 表单代码与后端 Controller 代码\n【输出】：请分别输出前端 Component 与后端 Java 代码',
        },
      },
      {
        id: 'd9-s2',
        title: '用户注册登录逻辑时序',
        subtitle: '前后端安全鉴权流程',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '用户填写表单', desc: '输入用户名与密码，点击登录' },
          { stepNumber: 2, title: '后端比对密码', desc: '查询数据库，使用 BCrypt 校验哈希密文' },
          { stepNumber: 3, title: '颁发令牌/信息', desc: '返回登录状态与当前用户信息' },
          { stepNumber: 4, title: '前端状态保存', desc: '将用户信息与登录状态保存在 localStorage 或 Pinia 中' },
        ],
      },
      {
        id: 'd9-s3',
        title: 'Day 9 任务：完成「此刻」用户模块',
        subtitle: '让应用具备多用户登录能力',
        layout: 'exercise',
        bullets: [
          '1. 使用结构化 Prompt 让 AI 生成 Login.vue 与 Register.vue',
          '2. 生成 UserController 与 UserService',
          '3. 测试注册新账号并使用该账号登录',
          '4. 截图登录成功效果并在企微群打卡',
        ],
      },
    ],
};
