import type { PlanSection } from '@/lib';
import type { SummerPlanEnrichment } from '../types';

export const BOOTCAMP_PLAN_DATA: PlanSection<SummerPlanEnrichment>[] = [
  {
    id: 'section-1',
    title: '一、训练营概述',
    icon: 'Compass',
    content: '大模型技术的爆发正在重塑软件开发的范式。"Vibe Coding"（AI 辅助编程）让开发者从大量重复编码中解放出来，将精力聚焦于架构设计、创意构思和质量把控。对于在校学生而言，掌握"用 AI 做全栈开发"的能力，已成为一项极具竞争力的基础技能。本训练营旨在填补这一空白——零基础起步，14 天完成两个真实项目，让学员亲身体验 AI 时代的全栈开发全流程。',
    subsections: [
      {
        title: '1.1 训练营背景与意义',
        content: '适应生成式 AI 时代技术变迁，帮助低年级学生建立全栈软件工程思维与独立完成真实线上项目的能力。',
      },
      {
        title: '1.2 训练营定位',
        content: '定位为实战型短期集训（非学分课程），以 Vibe Coding 核心理念驱动：AI 写代码，人做决策。',
        table: {
          headers: ['项目', '内容'],
          rows: [
            ['名称', 'AI 赋能下的全栈开发 · 暑期训练营'],
            ['性质', '实战型短期集训（非学分课程）'],
            ['核心理念', 'Vibe Coding — AI 写代码，人做决策'],
            ['Slogan', '14 天，用 AI 做出你的第一个项目'],
          ],
        },
      },
      {
        title: '1.3 培养目标',
        content: '学员完成训练营后将获得全栈开发、AI 协作、工程实践、产品思维和持续学习五大维度能力。',
        table: {
          headers: ['能力维度', '具体目标'],
          rows: [
            ['全栈开发能力', '能独立完成一个 Spring Boot + Vue 3 全栈项目的设计与开发'],
            ['AI 协作能力', '熟练使用大模型（DeepSeek V3） + TRAE IDE 等 AI 工具进行代码生成、Debug、优化'],
            ['工程实践能力', '掌握 Git 版本控制、Gitee 协作、阿里云部署上线'],
            ['产品思维', '能从用户需求出发设计功能，完成从 idea 到产品的闭环'],
            ['持续学习能力', '具备利用 AI 自学新技术的元能力，结营后能独立拓展'],
          ],
        },
      },
      {
        title: '1.4 特色亮点',
        content: '涵盖零基础友好、双项目驱动、国产工具链、Vibe Coding 教学法以及结营即有产出五大亮点。',
        bullets: [
          '零基础友好 — 不要求任何编程经验，课程中不会讲太多的代码部分，从装环境到部署上线全程带练',
          '双项目驱动 — 个人作品集 + 「此刻」兴趣社区，兼顾成就感和深度',
          '国产工具链 — TRAE IDE + DeepSeek V3 API + Gitee + 阿里云，全链路国产',
          'Vibe Coding 教学法 — 复制→对话→引导，三阶段进阶，不是教语言，是教"怎么用 AI 做产品"',
          '结营即有产出 — 每个学员结营时拥有 2 个可访问的线上项目 + Gitee 仓库',
        ],
      },
    ],
    enrichments: [
      {
        type: 'techStackMatrix',
        tag: '100% 全链路国产化',
        items: [
          { label: 'AI 编程 IDE', value: 'TRAE IDE', tone: 'indigo' },
          { label: '大模型 API', value: 'DeepSeek V3', tone: 'emerald' },
          { label: '全栈架构', value: 'Vue 3 + Spring Boot', tone: 'cyan' },
          { label: '版本与云端', value: 'Gitee + 阿里云 ECS', tone: 'slate' },
        ],
      },
    ],
  },
  {
    id: 'section-2',
    title: '二、招生信息',
    icon: 'Users',
    content: '面向软件学院 2025 级本科生及对编程感兴趣零基础/薄弱的学生，提供全程免费的暑期集训。',
    subsections: [
      {
        title: '2.1 招生对象',
        content: '软件学院 2025 级本科生，对编程感兴趣但零基础或基础薄弱，希望快速体验全栈开发、产出真实项目的学生。',
      },
      {
        title: '2.2 报名条件',
        content: '需自备笔记本电脑（Windows/macOS，8G+ 内存，20G+ 可用磁盘），保持 14 天全程参与。',
        table: {
          headers: ['条件', '说明'],
          rows: [
            ['身份', '软件学院在读学生'],
            ['基础', '无需编程经验'],
            ['设备', '自备笔记本电脑（Windows/macOS，8G+ 内存，20G+ 可用磁盘）'],
            ['态度', '尽量 14 天全程参与，每天能投入 45 ~ 90 分钟正课 + 约 30 分钟练习'],
          ],
        },
      },
      {
        title: '2.3 时间与地点',
        content: '暑期连续 14 天，每晚 19:00 - 20:30，采用企业微信直播与群打卡形式。',
        table: {
          headers: ['项目', '安排'],
          rows: [
            ['时间', '8 月 10 日 - 8 月 23 日，连续 14 天'],
            ['每日课时', '19:00 — 20:30'],
            ['形式', '企业微信直播授课 + 企业微信群日常沟通'],
            ['打卡', '每日在企业微信群提交学习成果'],
          ],
        },
      },
      {
        title: '2.4 费用说明',
        content: '学院支持，培训费免费；全链路工具均可免费使用。',
        table: {
          headers: ['项目', '金额', '备注'],
          rows: [
            ['培训费', '免费', '学院支持，不收取任何费用'],
            ['TRAE IDE', '免费', '全程使用免费版'],
            ['DeepSeek V3 API', '3 - 5 元（可选）', 'DeepSeek 提供的 API 服务，用于生成代码'],
            ['阿里云服务器', '按量 / 19 元学生包', '可用学生认证优惠价自愿开通'],
            ['Gitee', '免费', '代码托管'],
          ],
        },
      },
    ],
    enrichments: [
      {
        type: 'paradigmCompare',
        tag: '效率提升 300%+',
        items: [
          {
            title: '语法门槛降低 80%',
            kpi: '语法门槛降低 80%',
            tone: 'indigo',
            desc: '无需背诵繁琐语法与配置，自然语言提问即生成精准组件与接口代码。',
          },
          {
            title: '项目上线率 98%+',
            kpi: '项目上线率 98%+',
            tone: 'emerald',
            desc: '从本地 Run 到阿里云 HTTP 公网上线全全带练，告别卡在本地报错的困境。',
          },
          {
            title: '工程思维建立',
            kpi: '工程思维建立',
            tone: 'amber',
            desc: '掌握提示词工程、模块分解、Git 提交与规范化云端集成真实研发流程。',
          },
        ],
      },
    ],
  },
  {
    id: 'section-3',
    title: '三、课程体系设计',
    icon: 'Layers',
    content: '14 天训练营划分为八个阶段，逐层递进，每天 45~90 分钟：概念讲解 + 实操演示 + 学员跟练与答疑。',
    subsections: [
      {
        title: '3.1 课程设计理念',
        content: '采取"小步快跑、阶梯递进"路线，前 4 天建立前端成就感，后 10 天攻克全栈前后端打通与云端部署。',
      },
      {
        title: '3.2 课程全景总览',
        content: '全套 14 课时全景编排表：',
        table: {
          headers: ['阶段', 'Day', '核心主题', '实操产出'],
          rows: [
            ['一、开场与准备', '1', '开营仪式 · Vibe Coding 认知 · 第一个 HTML', '个人简介 HTML 页面'],
            ['二、计算机与互联网', '2', '互联网原理（浏览器↔服务器） · JDK/Node.js/Git 安装', '开发环境就绪 · Gitee 仓库'],
            ['三、前端基础', '3', 'HTML / CSS / JavaScript 极速入门', '美化版个人简介页面'],
            ['四、现代前端', '4', 'Vue 3 + Vite 项目搭建 · 作品集首页', '个人作品集 Vue 项目'],
            ['', '5', 'Element Plus 组件库 · 帖子发布表单', '帖子发布页面（「此刻」前奏）'],
            ['五、初始后端', '6', 'Spring Boot 3 项目骨架 · 第一个 GET API', 'Hello API · IDEA + MySQL 准备'],
            ['', '7', 'MySQL 安装配置 · 实体类 · 完整 CRUD', 'Post CRUD API（浏览器可验证）'],
            ['六、生态力量', '8', '需求拆解 · 前后端联调（axios + CORS）', '前后端连通 · 项目仓库初始化'],
            ['', '9', '提示词工程 · Vibe Coding 最佳实践 · 用户系统', '注册/登录完整模块'],
            ['', '10', 'AI Debug · MVP 原则 · 信息流开发', '首页帖子信息流'],
            ['七、部署运维', '11', '功能完善 · Bug 修复 · 项目 checklist', '项目初稿完成'],
            ['', '12', '服务器 · Nginx · jar 包部署', '线上可访问 / 本地运行录屏'],
            ['八、完结撒花', '13', '演示准备 · README 整理 · 录屏', '演示视频 + 完整仓库'],
            ['', '14', '结营仪式 · 模拟毕设', '提交两个项目最终版'],
          ],
        },
      },
    ],
    enrichments: [
      {
        type: 'milestoneGrid',
        items: [
          {
            phase: '阶段一 · 工具筑基 (Day 1 - 3)',
            tag: '入门',
            tone: 'indigo',
            desc: '环境准备、TRAE IDE 配置、与 AI 模型深度对话、独立生成第一个前端响应式页面。',
          },
          {
            phase: '阶段二 · 个人作品集 (Day 4 - 7)',
            tag: '项目 1',
            tone: 'emerald',
            desc: '设计《个人简历与作品集网站》，实现交互动画、自定义样式与 Gitee Pages 托管。',
          },
          {
            phase: '阶段三 · 「此刻」社区 (Day 8 - 12)',
            tag: '项目 2',
            tone: 'purple',
            desc: '开发全栈兴趣社区，打通 Spring Boot API，接入 AI 自动生成帖子摘要与分类功能。',
          },
          {
            phase: '阶段四 · 部署与路演 (Day 13 - 14)',
            tag: '冲刺',
            tone: 'amber',
            desc: '阿里云云主机部署、公网域名绑定、线上作品展览与学院/社团官方结营颁奖。',
          },
        ],
      },
    ],
  },
  {
    id: 'section-4',
    title: '四、实战项目设计',
    icon: 'FolderGit2',
    content: '双项目驱动，一轻一重，循序渐进：个人作品集主页 (Day 1-4) + 「此刻」兴趣社区 (Day 5-14)。',
    subsections: [
      {
        title: '4.1 项目体系概览',
        content: '个人作品集展示自己，随后作为载体嵌入「此刻」兴趣社区形成作品闭环。',
        table: {
          headers: ['项目', '时间', '类型', '规模', '定位'],
          rows: [
            ['项目一：个人作品集主页', 'Day 1-4', '前端项目', '3-5 个页面', '快速获得成就感，熟悉 AI 前端开发'],
            ['项目二：「此刻」兴趣图文社区', 'Day 5-14', '全栈应用', '5-8 个页面 + 10+ API', '掌握完整全栈开发流程'],
          ],
        },
      },
      {
        title: '4.2 个人作品集主页模块设计',
        content: '注重零门槛与可视化呈现，包含个人介绍、技能标签、作品展示卡片与联系方式。',
      },
      {
        title: '4.3 「此刻」兴趣图文社区功能与数据表设计',
        content: '定位为记录与分享日常的简约图文分享社区，具备完善的用户、帖子、点赞与评论模块。',
        table: {
          headers: ['表名', '主要字段'],
          rows: [
            ['user', 'id, username, password, nickname, avatar, bio, createTime'],
            ['post', 'id, userId, title, content, imageUrl, category, likeCount, createTime'],
            ['like_record', 'id, userId, postId, createTime'],
            ['comment', 'id, userId, postId, content, createTime'],
          ],
        },
      },
    ],
    enrichments: [
      {
        type: 'deliverablesChecklist',
        tag: '官方发证',
        items: [
          '个人全栈作品集网站',
          '「此刻」社区全栈源码',
          '公网 HTTP 独立部署域名',
          'Gitee 规范代码提交记录',
          'AI 提示词案例与提问集',
          '学院/社团官方结营证明',
        ],
      },
    ],
  },
  {
    id: 'section-5',
    title: '五、师资团队',
    icon: 'UserCheck',
    content: '由 AI 创新应用社核心骨干成员作为主讲讲师，配合软件学院大三助教团队提供高效答疑。',
    subsections: [
      {
        title: '5.1 讲师阵容与团队职责',
        content: '主讲讲师 2 人，助教 ≤5 人。提供企微群 <30 分钟答疑响应、每晚 21:00-21:30 Office Hour、以及 Checkpoint 辅导。',
      },
      {
        title: '5.2 助教团队与答疑保障',
        content: '高年级优秀学长学姐担任助教，负责 1v1 环境排查、代码 Bug 指导与每日作业验收。',
      },
    ],
    enrichments: [
      {
        type: 'teamCards',
        items: [
          {
            name: '乔林 营长 / 导师',
            role: '指导老师',
            tone: 'indigo',
            desc: '软件学院助教，负责课程顶层架构设计与大模型应用技术把关。',
          },
          {
            name: 'AI 创新应用社讲师团',
            role: '主讲授课',
            tone: 'emerald',
            desc: '社团资深开发者，每晚 19:00 企业微信直播实操演示，零保留传授。',
          },
          {
            name: '高年级助教团队',
            role: '1v1 答疑',
            tone: 'amber',
            desc: '软件学院学长学姐全天社群答疑、环境报错排查，确保人人不掉队。',
          },
        ],
      },
    ],
  },
  {
    id: 'section-6',
    title: '六、考核与认证',
    icon: 'Award',
    content: '建立科学的多维度考核体系，打卡、阶段 Checkpoint 与项目综合评分相结合。',
    subsections: [
      {
        title: '6.1 考核体系',
        content: '各项权重明细：',
        table: {
          headers: ['考核项', '权重', '说明'],
          rows: [
            ['每日打卡', '20%', '14 天打卡 ≥12 天即为满分'],
            ['项目一：个人作品集', '20%', 'Day 4 提交，按完成度和美观度评分'],
            ['阶段 Checkpoint ①', '10%', 'Day 8 检查：前后端联调是否跑通'],
            ['阶段 Checkpoint ②', '10%', 'Day 10 检查：核心功能完成度'],
            ['项目二：「此刻」兴趣社区', '40%', '按评审标准综合评分（功能、代码、UI、AI 协作）'],
            ['模拟毕业设计', '自愿', '结营后完成，秋季开学单独评奖（不纳入训练营总分）'],
          ],
        },
      },
      {
        title: '6.2 结营证书与认证',
        content: '达到 60 分以上颁发学院/社团官方训练营结营证明；优秀学员颁发优秀学员荣誉证书。',
      },
      {
        title: '6.3 模拟毕业设计奖励',
        content: '第一名 200元现金，第二名 150元现金，第三名 100元现金。',
      },
    ],
    enrichments: [
      {
        type: 'personaGrid',
        items: [
          {
            title: '🌱 低年级大一新生',
            desc: '提前建立全栈工程认知，掌握现代化 AI 工具。',
          },
          {
            title: '💡 跨专业/非计类',
            desc: '无编程经验，想快速做出个人专属网站/小应用。',
          },
          {
            title: '🚀 竞赛与创新项目',
            desc: '为大创、互联网+等竞赛储备实战原型开发能力。',
          },
          {
            title: '🎨 兴趣与极客玩家',
            desc: '探索最新 AI Agent、云端部署与现代前端范式。',
          },
        ],
      },
    ],
  },
  {
    id: 'section-7',
    title: '七、后勤保障与服务',
    icon: 'ShieldCheck',
    content: '企业微信直播与群互动，Gitee 代码托管，提供录播回放（保留至结营后30天）、随堂笔记与 FAQ 问题库。',
    subsections: [
      {
        title: '7.1 后勤保障与软件支持',
        content: '全程使用企业微信作为授课与沟通阵地，社团提供官方代码仓库与 AI 提示词库。',
      },
      {
        title: '7.2 学员服务与资料保留',
        content: '提供全套课程录播回放与随堂代码包，结营后 30 天内仍可持续查阅与跟练。',
      },
    ],
    enrichments: [
      {
        type: 'supportCards',
        items: [
          {
            title: '📹 课程全程高清录播',
            tone: 'indigo',
            desc: '方便错过的同学随时补课，视频保留至结营后 30 天。',
          },
          {
            title: '📦 开箱即用代码包',
            tone: 'emerald',
            desc: '每堂课提供完整阶段代码分支，卡壳时可直接一键同步。',
          },
          {
            title: '💬 官方交流群全天候',
            tone: 'amber',
            desc: '企业微信专属群，助教 30 分钟内快速响应，环境报错远程排查。',
          },
        ],
      },
    ],
  },
  {
    id: 'section-8',
    title: '八、学业与职业规划',
    icon: 'GraduationCap',
    content: '涵盖学校政策解读、毕业设计流程拆解、竞赛与科研辅导、考研与就业方向，并辅导完善简历与 Gitee 仓库展示。',
    subsections: [
      {
        title: '8.1 学业提升与毕业设计预演',
        content: '为低年级学员提前拆解毕业设计规范与开发流程，将训练营实战经验无缝转化为大创或竞赛成果。',
      },
      {
        title: '8.2 竞赛科研与职业发展辅导',
        content: '指导学员将项目整理并上传至 Gitee，打造极具含金量的个人技术履历。',
      },
    ],
    enrichments: [
      {
        type: 'faqList',
        items: [
          {
            q: 'Q: 没有任何编程基础能跟上吗？',
            a: 'A: 完全可以！课程全程以 AI 对话带练为主，重点在于学会表达需求与调优，助教全程 1v1 指导环境配置。',
          },
          {
            q: 'Q: 集训需要自备什么设备与环境？',
            a: 'A: 只需要一台能上网的普通 Windows/Mac 电脑，安装 TRAE CN 软件与 Chrome 浏览器即可，模型 Token 全免费。',
          },
        ],
      },
    ],
  },
  {
    id: 'section-9',
    title: '九、风险预案与应急措施',
    icon: 'AlertTriangle',
    content: '每3天 Checkpoint 识别落后学员并开展 1v1 辅导，配备豆包/DeepSeek 双 AI 备选方案，提供 Todesk 远程协助。',
    subsections: [
      {
        title: '9.1 学习进度跟踪与一对一帮扶',
        content: '每 3 天设置 Checkpoint 节点，对进度滞后的学员及时开展一对一答疑解惑。',
      },
      {
        title: '9.2 工具与环境备选预案',
        content: '如遇 AI API 波动或网络问题，提供备用模型 Token 与本地代码备份包，确保教学顺畅。',
      },
    ],
    enrichments: [
      {
        type: 'assistanceFlow',
        desc: '每 3 天设置 Checkpoint 节点对学员打卡与代码同步情况进行统计。对于存在落后风险的学员，助教将主动发起企业微信单聊，提供语音或 Todesk 远程协助排查环境报错，确保零掉队。',
      },
    ],
  },
  {
    id: 'section-10',
    title: '十、报名方式与联系方式',
    icon: 'PhoneCall',
    content: '主办单位：软件学院 · AI 创新应用社 | 联系人：乔林 19537178744。关注学院年级群招募通知，扫码进群填表即可。',
    subsections: [
      {
        title: '10.1 报名条件与入群流程',
        content: '全校学生扫描学院年级群招募二维码即可免试入群报名，名额有限，额满即止。',
      },
      {
        title: '10.2 官方咨询与联系方式',
        content: '软件学院助教：乔林 (电话/企微: 19537178744)。欢迎扫码咨询训练营详细事宜。',
      },
    ],
    enrichments: [
      {
        type: 'enrollmentBox',
        tag: '正在热招中',
        items: [
          {
            title: '📍 报名入群方式',
            desc: '扫码关注软件学院官方年级群招募通知，扫码填写企业微信报名表即可一键入群。',
          },
          {
            title: '📞 官方指导',
            desc: '软件学院助教 乔林 (电话/企微: 19537178744) | AI 创新应用社讲师团',
          },
        ],
      },
    ],
  },
];
