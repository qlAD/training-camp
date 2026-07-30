import { DayCourseDeck } from '../../../../types';

export const day02Deck: DayCourseDeck = {
    day: 2,
    stageName: '第二阶段：计算机与互联网',
    title: 'Day 2 — 互联网原理 + 环境搭建 (JDK / Node / Git / Gitee)',
    subtitle: '拆解浏览器与服务器对话机制，打造全栈开发工具链',
    duration: '90 分钟',
    target: '建立 HTTP 请求响应模型认知，一站式安装配置 JDK 21、Node.js 18、Git 并准备 Gitee',
    output: '开发环境就绪，终端校验通过，创建并提交第一个 Gitee 仓库',
    aiPractice: '用豆包解释概念 → "能给我用比喻讲一下浏览器和服务器是怎么通信的吗？"',
    slides: [
      {
        id: 'd2-s1',
        title: '互联网是怎么工作的？浏览器 ↔ 服务器',
        subtitle: '从输入网址到页面呈现的背后的故事',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '用户输入 URL', desc: '在浏览器输入 https://gitee.com，发起网络请求' },
          { stepNumber: 2, title: 'DNS 域名解析', desc: '将人类可读的网址翻译为服务器 IP 地址' },
          { stepNumber: 3, title: 'HTTP GET 请求', desc: '浏览器向服务器喊话："请把首页 HTML/JS 给我！"' },
          { stepNumber: 4, title: '服务器 Response', desc: '服务器打包数据返回，浏览器渲染页面' },
        ],
        instructorNotes: '用"去餐厅点餐"做比喻：浏览器是顾客，HTTP 请求是菜单点单，服务器是厨师，返回的网页是菜品。',
      },
      {
        id: 'd2-s2',
        title: '全栈开发工具链清册',
        subtitle: '工欲善其事，必先利其器',
        layout: 'concept',
        bullets: [
          '☕ JDK 21: Java 语言运行环境， Spring Boot 后端核心引擎',
          '🟢 Node.js 18+: JavaScript 运行环境，Vue 3 前端构建基石',
          '🌿 Git & Gitee: 现代软件工程的代码版本控制与云端仓库',
          '🤖 TRAE CN / Reasonix: 字节/国产 Agent 级别的 AI 辅助集成开发环境',
        ],
      },
      {
        id: 'd2-s3',
        title: '终端验证命令',
        subtitle: '如何检查你的工具链是否安装成功？',
        layout: 'split_code',
        codeBlock: {
          language: 'bash',
          filename: 'Terminal / CMD',
          code: `# 检查 Java 版本
java -version
# 预期输出: openjdk version "21.0.x" ...

# 检查 Node.js 版本
node -v
# 预期输出: v18.x.x 或 v20.x.x

# 检查 Git 版本
git --version
# 预期输出: git version 2.x.x`,
        },
        keyTakeaway: '终端提示 command not found 时，将报错直接粘贴给豆包，AI 会指导你配置环境变量 PATH。',
      },
      {
        id: 'd2-s4',
        title: 'Day 2 实操：创建你的第一个 Gitee 仓库',
        subtitle: '开启代码托管之旅',
        layout: 'exercise',
        bullets: [
          '1. 注册并登录 Gitee (gitee.com)',
          '2. 点击右上角 "+" → 新建仓库，命名为 "my-first-bootcamp"',
          '3. 勾选 "初始化仓库" 并选择 Readme 模版',
          '4. 在本地终端运行 git clone 仓库地址，将代码拉取到本地',
          '5. 截屏你的 Gitee 个人仓库主页打卡提交',
        ],
      },
    ],
};
