import { DayCourseDeck } from '../types';

export const ALL_COURSE_DECKS: DayCourseDeck[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
    day: 4,
    stageName: '第四阶段：现代前端',
    title: 'Day 4 — Vue 3 + Vite 项目搭建 · 个人作品集首页',
    subtitle: '走进现代单页面应用 (SPA) 时代，AI 驱动设计个人作品集',
    duration: '90 分钟',
    target: '掌握 Vue 3 声明式渲染与 Vite 极速构建，用 TRAE CN 对话生成个人作品集',
    output: '个人作品集 Vue 项目 (包含导航、个人介绍与项目展示模块)',
    aiPractice: 'TRAE CN 对话 → "用 Vue 3 + Vite 生成一个个人作品集网站，包含首页、关于我、作品展示"',
    slides: [
      {
        id: 'd4-s1',
        title: '为什么现代开发选择 Vue 3 + Vite？',
        subtitle: '告别繁重 DOM 操作，拥抱组件化开发',
        layout: 'concept',
        bullets: [
          '⚡ Vite: 毫秒级热重载 (HMR)，极速开发体验',
          '🧩 组件化 (Component): 像拼积木一样搭页面 (Header, Card, Footer)',
          '🔄 响应式状态 (ref/reactive): 数据改变，界面自动更新，无需手动写 document.getElementById',
          '🧭 单页面路由 (Vue Router): 无缝页面无刷新切换',
        ],
      },
      {
        id: 'd4-s2',
        title: 'Vue 3 单文件组件 (SFC) 结构解析',
        subtitle: 'Template + Script + Style 三合一',
        layout: 'split_code',
        codeBlock: {
          language: 'vue',
          filename: 'PortfolioCard.vue',
          code: `<script setup>
import { ref } from 'vue'

const projectTitle = ref('我的全栈作品集')
const stars = ref(12)

function addStar() {
  stars.value++
}
</script>

<template>
  <div class="portfolio-card">
    <h2>{{ projectTitle }}</h2>
    <button @click="addStar">⭐ 点赞 {{ stars }}</button>
  </div>
</template>`,
        },
        keyTakeaway: '<script setup> 处理数据与逻辑，<template> 负责 HTML 模板，{{ }} 用于插值数据。',
      },
      {
        id: 'd4-s3',
        title: 'Day 4 任务：生成个人作品集首页',
        subtitle: '项目一 Phase 1 落地',
        layout: 'exercise',
        bullets: [
          '1. 使用 npm create vite@latest portfolio -- --template vue 创建项目',
          '2. 在 TRAE CN 中输入对话："请为我的 Vue 3 项目编写一个炫酷的个人作品集 Homepage"',
          '3. 包含：顶部 Navigation、Hero Banner 自我介绍、Grid 展示卡片',
          '4. 运行 npm run dev 预览并在浏览器中截图打卡',
        ],
      },
    ],
  },
  {
    day: 5,
    stageName: '第四阶段：现代前端',
    title: 'Day 5 — Element Plus 组件库 · 帖子发布表单',
    subtitle: '集成高颜值 UI 组件库，打造「此刻」社区的前端核心表单',
    duration: '90 分钟',
    target: '掌握 Element Plus 的引入与 Form 组件，生成带图片上传与分类选择的帖子发布页',
    output: '帖子发布页面 (「此刻」兴趣社区的前端基础表单页面)',
    aiPractice: 'TRAE CN 对话 → "用 Vue 3 + Element Plus 生成一个帖子发布页面"',
    slides: [
      {
        id: 'd5-s1',
        title: '为什么不需要自己造轮子？Element Plus',
        subtitle: '企业级 Vue 3 组件库的威力',
        layout: 'comparison',
        comparison: {
          leftTitle: '原生手写表单',
          leftItems: [
            '耗费数小时写 CSS 样式与对齐',
            '下拉框、日期选择器、上传控件极难实现',
            '移动端与响应式适配麻烦',
          ],
          rightTitle: 'Element Plus 组件库',
          rightItems: [
            '开箱即用的 <el-button> <el-form> <el-select>',
            '内置优雅动画与一致的设计规范',
            '几行代码搞定复杂表单校验与图片上传控件',
          ],
        },
      },
      {
        id: 'd5-s2',
        title: '帖子发布表单的代码结构',
        subtitle: 'Vue 3 + Element Plus 快速组装',
        layout: 'split_code',
        codeBlock: {
          language: 'vue',
          filename: 'CreatePost.vue',
          code: `<template>
  <el-form :model="postForm" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="postForm.title" placeholder="分享此刻的想法..." />
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="postForm.category">
        <el-option label="日常" value="daily" />
        <el-option label="二次元" value="anime" />
        <el-option label="游戏" value="game" />
      </el-select>
    </el-form-item>
    <el-button type="primary" @click="submitPost">发布此刻</el-button>
  </el-form>
</template>`,
        },
      },
      {
        id: 'd5-s3',
        title: 'Day 5 实操：完成帖子发布界面',
        subtitle: '为「此刻」社区做好前端准备',
        layout: 'exercise',
        bullets: [
          '1. 在 Vue 3 项目中运行 npm install element-plus @element-plus/icons-vue',
          '2. 用 TRAE CN 生成完整的 CreatePost.vue 组件',
          '3. 完善文本框、图片上传占位区、分类标签与提交按钮',
          '4. 截图作品集与发布页打卡提交',
        ],
      },
    ],
  },
  {
    day: 6,
    stageName: '第五阶段：初始后端',
    title: 'Day 6 — Spring Boot 3 项目骨架 · 第一个 GET API',
    subtitle: '进入 Java 后端世界，理解 MVC 分层与 RESTful 接口',
    duration: '90 分钟',
    target: '理解 Controller-Service-Repository 分层，用 Spring Boot 编写第一个 GET 接口',
    output: 'Hello API 成功运行，访问 http://localhost:8080/api/hello 返回 JSON',
    aiPractice: '豆包 → "用 Spring Boot 3 生成一个 REST API，GET /api/hello 返回 JSON"',
    slides: [
      {
        id: 'd6-s1',
        title: '什么是后端？后端在忙什么？',
        subtitle: '业务逻辑、数据持久化与安全卫士',
        layout: 'concept',
        bullets: [
          '🌐 RESTful API: 前后端通信的标准语言 (GET, POST, PUT, DELETE)',
          '🏗️ Spring Boot 3: Java 领域最流行的后端开发框架，开箱即用',
          '📐 三层架构: Controller (接收请求) → Service (业务计算) → Repository (读写数据库)',
          '🛡️ 安全校验: 验证用户身份，保护数据隐私与合规',
        ],
      },
      {
        id: 'd6-s2',
        title: '第一个 RestController 接口示范',
        subtitle: '注解 (Annotation) 驱动的开发方式',
        layout: 'split_code',
        codeBlock: {
          language: 'java',
          filename: 'HelloController.java',
          code: `package com.example.cike.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> sayHello() {
        return Map.of(
            "message", "Hello from CiKe API!",
            "status", "success",
            "timestamp", String.valueOf(System.currentTimeMillis())
        );
    }
}`,
        },
        keyTakeaway: '@RestController 让方法直接返回 JSON 对象，@GetMapping 定制 URL 路由。',
      },
      {
        id: 'd6-s3',
        title: 'Day 6 任务：启动你的 Spring Boot 后端',
        subtitle: '验证你的第一个 API',
        layout: 'exercise',
        bullets: [
          '1. 使用 Spring Initializr 或 IDEA 快速建项目 (Dependencies: Spring Web)',
          '2. 让 AI 生成 HelloController.java 文件',
          '3. 点击 Run 启动服务器，打开浏览器访问 http://localhost:8080/api/hello',
          '4. 看到 JSON 响应后截图打卡提交',
        ],
      },
    ],
  },
  {
    day: 7,
    stageName: '第五阶段：初始后端',
    title: 'Day 7 — MySQL 安装配置 · 实体类 · 完整 CRUD',
    subtitle: '让数据永久保存，掌握数据库操作与 Spring Data JPA',
    duration: '90 分钟',
    target: '理解表与实体映射，用 AI 快速生成数据库 CRUD 完整后端链路',
    output: 'Post 实体 CRUD API (增删改查)，可通过浏览器或 Postman 测试',
    aiPractice: 'TRAE CN 对话 → "在 Spring Boot 3 中为 Post 实体生成完整的 CRUD REST API"',
    slides: [
      {
        id: 'd7-s1',
        title: '为什么需要数据库？关系型数据库 MySQL',
        subtitle: '持久化存储的核心概念',
        layout: 'concept',
        bullets: [
          '💾 内存 vs 磁盘: 变量重启即消失，数据库让数据永久存盘',
          '📊 表 (Table)、行 (Row)、列 (Column): 结构的化存取逻辑',
          '🔑 主键 (Primary Key) 与外键 (Foreign Key): 保证唯 一性与实体间关联',
          '⚡ CRUD: Create (创建), Read (读取), Update (更新), Delete (删除)',
        ],
      },
      {
        id: 'd7-s2',
        title: 'Spring Data JPA 实体与接口声明',
        subtitle: '无需写繁琐 SQL，注解映射表结构',
        layout: 'split_code',
        codeBlock: {
          language: 'java',
          filename: 'Post.java & PostRepository.java',
          code: `@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String title;
    private String content;
    private String imageUrl;
    private String category;
    private LocalDateTime createTime = LocalDateTime.now();
}

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategory(String category);
}`,
        },
        keyTakeaway: '继承 JpaRepository 后，Spring 会自动为你提供 save(), findById(), deleteById() 等所有内置方法！',
      },
      {
        id: 'd7-s3',
        title: 'Day 7 任务：跑通帖子 CRUD 接口',
        subtitle: '让「此刻」社区具备后端数据能力',
        layout: 'exercise',
        bullets: [
          '1. 在 MySQL 中创建 ci_ke 数据库',
          '2. 在 application.yml 配置数据库连接用户名与密码',
          '3. 让 AI 生成 PostController, PostService, PostRepository',
          '4. 测试 POST /api/posts 创建一条新帖子，并用 GET /api/posts 查询出结果',
          '5. 截屏数据库记录或 API 响应打卡',
        ],
      },
    ],
  },
  {
    day: 8,
    stageName: '第六阶段：生态力量',
    title: 'Day 8 — 需求拆解 · 前后端联调 (axios + CORS)',
    subtitle: '贯通前后端任督二脉，解决跨域问题与接口对接',
    duration: '90 分钟',
    target: '掌握将想法拆解为"表→API→页面"的方法，用 axios 连通 Vue 3 与 Spring Boot',
    output: '前后端完整联调成功，从 Vue 页面提交表单可写入 MySQL 数据库',
    aiPractice: '豆包 → "前端 axios 报跨域错误，Spring Boot 怎么配置 @CrossOrigin？"',
    slides: [
      {
        id: 'd8-s1',
        title: '跨域 (CORS) 是什么？为什么浏览器要拦截？',
        subtitle: '浏览器的同源策略与跨域解法',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '前端地址', desc: 'http://localhost:5173 (Vite 默认端口)' },
          { stepNumber: 2, title: '后端地址', desc: 'http://localhost:8080 (Spring Boot 默认端口)' },
          { stepNumber: 3, title: '跨域拦截', desc: '端口不同导致浏览器触发 CORS 安全机制限制请求' },
          { stepNumber: 4, title: '解决方案', desc: '后端添加 @CrossOrigin 注解，放行前端源地址' },
        ],
      },
      {
        id: 'd8-s2',
        title: '前端 Axios 调用后端 API 代码实战',
        subtitle: '发送 POST 请求发布帖子',
        layout: 'split_code',
        codeBlock: {
          language: 'javascript',
          filename: 'api.js (Vue 3)',
          code: `import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export async function createPost(postData) {
  try {
    const response = await api.post('/posts', postData)
    return response.data
  } catch (error) {
    console.error('发布失败:', error)
    throw error
  }
}`,
        },
      },
      {
        id: 'd8-s3',
        title: 'Day 8 Checkpoint ① 连通测试',
        subtitle: '核心里程碑交付',
        layout: 'exercise',
        bullets: [
          '1. 在 Gitee 上初始化 ci-ke 联合仓库',
          '2. 前端提交发布表单，触发 axios.post()',
          '3. 后端接收并成功插入 MySQL 数据库',
          '4. 完成第一次 Checkpoint ① 检查打卡',
        ],
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
    day: 11,
    stageName: '第七阶段：部署运维',
    title: 'Day 11 — 功能完善 · Bug 修复 · 项目 Checklist 检查',
    subtitle: '全员代码磨合与体验收拢，打造生产级稳定应用',
    duration: '90 分钟',
    target: '对照上线 Checklist 检查边界条件，修复残留 Bug 并完善评论区功能',
    output: '「此刻」应用功能全量冻结，完成测试与 README 文档初稿',
    aiPractice: 'AI 审查对话 → "请帮我审查这段代码，是否有潜在内存泄漏或空指针问题？"',
    slides: [
      {
        id: 'd11-s1',
        title: '上线前 Checklist 检查清单',
        subtitle: '从开发态迈向生产态',
        layout: 'concept',
        bullets: [
          '✅ 表单校验: 空标题、过长文本、未选择分类的提示',
          '✅ 异常捕获: 全局 GlobalExceptionHandler 捕获 500 报错',
          '✅ 用户体验: 数据加载时的 Loading 骨架屏或转圈提示',
          '✅ 边界处理: 评论区无数据时的空状态占位图',
        ],
      },
      {
        id: 'd11-s2',
        title: '全局异常处理统一格式代码',
        subtitle: '优雅防护后端崩溃',
        layout: 'split_code',
        codeBlock: {
          language: 'java',
          filename: 'GlobalExceptionHandler.java',
          code: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleException(Exception e) {
        return ResponseEntity.status(500).body(Map.of(
            "code", 500,
            "message", e.getMessage() != null ? e.getMessage() : "服务器内部错误",
            "timestamp", System.currentTimeMillis()
        ));
    }
}`,
        },
      },
      {
        id: 'd11-s3',
        title: 'Day 11 任务：项目终稿收尾',
        subtitle: '解决掉最后一个 Bug',
        layout: 'exercise',
        bullets: [
          '1. 在企微群获取 Checklist 文档，逐条打勾测试',
          '2. 完成评论列表与发表评论功能',
          '3. 撰写项目 README.md 描述技术栈与创新点',
          '4. 打卡提交项目最终测试通过截图',
        ],
      },
    ],
  },
  {
    day: 12,
    stageName: '第七阶段：部署运维',
    title: 'Day 12 — 服务器部署 · Nginx 反向代理 · jar 包与前端静态部署',
    subtitle: '将你的项目部署到云端公网，所有人均可访问',
    duration: '90 分钟',
    target: '理解 Linux 服务器与 Nginx 作用，完成 Spring Boot jar 打包与 Vue 静态托管',
    output: '线上公网可访问项目地址 (或本地录屏演示备案)',
    aiPractice: '豆包 → "Spring Boot + Vue 3 项目如何在 Linux 阿里云服务器部署？请给出命令"',
    slides: [
      {
        id: 'd12-s1',
        title: '什么是云服务器与 Nginx？',
        subtitle: '软件发布上线必知必会',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '云服务器 (ECS)', desc: '7x24 小时不停机的云端 Linux 电脑' },
          { stepNumber: 2, title: '后端打包 jar', desc: 'mvn package 生成包含所有依赖的 executable jar' },
          { stepNumber: 3, title: '前端打包 dist', desc: 'npm run build 打包 HTML/CSS/JS 静态文件' },
          { stepNumber: 4, title: 'Nginx 反向代理', desc: '监听 80 端口，路由前端页面并代理 /api 请求至 8080' },
        ],
      },
      {
        id: 'd12-s2',
        title: 'Nginx 最简配置参考',
        subtitle: '优雅路由静态资源与 API',
        layout: 'split_code',
        codeBlock: {
          language: 'nginx',
          filename: 'nginx.conf',
          code: `server {
    listen 80;
    server_name localhost;

    location / {
        root /var/www/cike-frontend/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8080/api/;
        proxy_set_header Host $host;
    }
}`,
        },
      },
      {
        id: 'd12-s3',
        title: 'Day 12 任务：部署与验证',
        subtitle: '让项目真正跑在互联网上',
        layout: 'exercise',
        bullets: [
          '1. 在服务器上后台运行 nohup java -jar cike-backend.jar &',
          '2. 配置 Nginx 托管 dist 文件夹并 reload',
          '3. 在手机浏览器输入服务器公网 IP 测试访问',
          '4. 提交线上链接或本地完整运行录屏打卡',
        ],
      },
    ],
  },
  {
    day: 13,
    stageName: '第八阶段：完结撒花',
    title: 'Day 13 — 演示准备 · README 规范整理 · 录屏技巧与 Gitee 打造',
    subtitle: '打造属于你的硬核 GitHub/Gitee 技术履历与演示视频',
    duration: '90 分钟',
    target: '掌握技术展示与 README 编写规范，录制 2 分钟项目实操视频',
    output: '高质量 Gitee 仓库 (含徽章、架构图、截图) + 2分钟演示视频',
    aiPractice: '豆包 → "帮我为项目 «此刻兴趣社区» 撰写一份专业的高质量 Gitee README.md"',
    slides: [
      {
        id: 'd13-s1',
        title: '优秀技术 README 的构成要素',
        subtitle: '你的第一份硬核技术名片',
        layout: 'concept',
        bullets: [
          '📌 项目 Badge 徽章: Vue 3, Spring Boot, MySQL, License',
          '🖼️ 核心功能截图展示: 首页瀑布流、发布页、个人中心',
          '🏗️ 架构图与技术选型: 前后端解耦架构说明',
          '⚡ 快速启动指南: git clone, npm install, java -jar 步骤',
        ],
      },
      {
        id: 'd13-s2',
        title: '2 分钟展示视频黄金结构',
        subtitle: '如何像产品经理一样流畅演示',
        layout: 'steps',
        steps: [
          { stepNumber: 1, title: '00:00 - 00:20 痛点与定位', desc: '介绍「此刻」解决什么问题，针对什么人群' },
          { stepNumber: 2, title: '00:20 - 01:20 核心功能演示', desc: '展示注册登录、发帖、分类筛选、点赞全流程' },
          { stepNumber: 3, title: '01:20 - 01:50 AI 协作亮点', desc: '展示提示词记录与 AI Debug 解决难点的经验' },
          { stepNumber: 4, title: '01:50 - 02:00 总结与展望', desc: '结语与后续维护计划' },
        ],
      },
      {
        id: 'd13-s3',
        title: 'Day 13 任务：准备最终提交物',
        subtitle: '展示你的全栈果实',
        layout: 'exercise',
        bullets: [
          '1. 整理 Gitee 仓库根目录 README.md',
          '2. 使用 OBS 或系统自带工具录制 2 分钟演示视频',
          '3. 在项目作品集中添加该项目的跳转链接',
          '4. 预演 Day 14 结营展示',
        ],
      },
    ],
  },
  {
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
  },
];
