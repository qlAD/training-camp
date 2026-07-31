'use client';

import React from 'react';
import { DayDeckRenderer } from '../../../../types';
import {
  CoverSlide,
  AgendaSlide,
  ConceptSlide,
  ComparisonSlide,
  CodeBoxSlide,
  TerminalSlide,
  PromptSlide,
  ExerciseSlide,
  SummarySlide,
  QuizSlide,
  AnimationSlide,
  EffectSlide,
  DiagramSlide,
} from './shared/layouts';
import { ArchitectureDiagram } from './shared/diagrams';
import { ReverseProxyAnimation } from './shared/animations';
import { OnlineAccessEffect } from './shared/effects';

// #1 封面：服务器部署上线
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第七阶段：部署运维"
    badgeText="Day 12 · 课程讲义"
    title="服务器部署上线"
    subtitle="阿里云 + Nginx + jar 包 + 静态部署，将项目发布到公网"
    bullets={[
      '云服务器：7x24 小时不停机的云端 Linux 电脑，公网 IP 全网可访问',
      '后端 jar：mvn package 打包后 nohup 后台常驻运行',
      'Nginx 反向代理：监听 80 端口，托管前端静态 + 代理 /api 至后端',
      '90 分钟让你的项目正式跑在互联网上，手机也能访问',
    ]}
  />
);

// #2 议程：Day 12 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 12 学习路线图"
    subtitle="从服务器到 Nginx，5 个目标串成一条部署链路"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '认识服务器', desc: '理解云服务器 ECS、安全组、公网 IP、SSH 四概念' },
      { title: '配置环境', desc: 'SSH 连接服务器并安装 Java 运行环境' },
      { title: '部署后端', desc: '上传 jar 包并用 nohup 后台常驻运行' },
      { title: '配置 Nginx', desc: '反向代理 /api + 托管前端静态 dist' },
      { title: '线上访问', desc: '公网 IP 访问验证 + 日志排查与打卡' },
    ]}
  />
);

// #3 概念：部署是什么
const Slide03: React.FC = () => (
  <ConceptSlide
    title="部署是什么？"
    subtitle="本地→线上 / 单一→可访问 / 开发→生产 三大转变"
    badgeText="核心概念"
    bullets={[
      '本地 → 线上：代码从你的电脑搬到 7x24 不停机的云服务器',
      '单一 → 可访问：从只有自己能访问，变成全网用户都能访问',
      '开发 → 生产：从「能跑就行」到「稳定常驻、可被信任」',
      '部署 = 把项目放到一台永远在线的电脑上，并让公网能找到它',
    ]}
    keyTakeaway="部署的本质是三大转变：本地→线上、单一→可访问、开发→生产。"
  />
);

// #4 图解：部署架构图
const Slide04: React.FC = () => (
  <DiagramSlide
    title="部署架构图"
    subtitle="浏览器 → Nginx → 前端静态 / 后端 jar → 数据库"
    badgeText="架构图解"
    takeaway="Nginx 是入口：静态资源直接返回，/api 请求转发给后端 jar。"
  >
    <ArchitectureDiagram
      direction="vertical"
      layers={[
        { title: '客户端', nodes: [{ label: '浏览器 / 手机', sublabel: '公网 IP 访问 80 端口', tone: 'cyan' }] },
        { title: 'Nginx 反向代理', nodes: [{ label: 'Nginx :80', sublabel: '路由分发 + 静态托管', tone: 'indigo' }] },
        { title: '前端静态资源', nodes: [{ label: 'dist 目录', sublabel: 'HTML / CSS / JS 文件', tone: 'violet' }] },
        { title: '后端服务', nodes: [{ label: 'Spring Boot jar', sublabel: '监听 127.0.0.1:8080', tone: 'amber' }] },
        { title: '数据库', nodes: [{ label: 'MySQL', sublabel: '持久化业务数据', tone: 'emerald' }] },
      ]}
    />
  </DiagramSlide>
);

// #5 对比：本地 vs 线上
const Slide05: React.FC = () => (
  <ComparisonSlide
    title="本地 vs 线上对比"
    subtitle="localhost vs 公网 IP / 手动启动 vs 常驻运行"
    leftLabel="本地开发"
    rightLabel="线上部署"
    left={{
      title: '本地开发 (Local)',
      items: [
        '地址：localhost:8080 / localhost:5173',
        '启动：手动 npm run dev / mvn spring-boot:run',
        '访问：只有开发者自己能打开',
        '状态：关机即下线，不持续运行',
      ],
    }}
    right={{
      title: '线上部署 (Production)',
      items: [
        '地址：公网 IP / 域名（如 47.96.x.x）',
        '启动：nohup 后台常驻，开机自启',
        '访问：全网任何设备都能打开',
        '状态：7x24 不停机，持续提供服务',
      ],
    }}
    keyTakeaway="线上 = 公网 IP + 常驻运行，让项目「永远在线、全网可达」。"
  />
);

// #6 概念：阿里云服务器
const Slide06: React.FC = () => (
  <ConceptSlide
    title="阿里云服务器"
    subtitle="ECS / 安全组 / 公网 IP / SSH 四大概念"
    badgeText="核心概念"
    bullets={[
      'ECS 云服务器：阿里云提供的虚拟 Linux 电脑，按需购买、弹性扩容',
      '安全组：虚拟防火墙，需放行 22(SSH) / 80(HTTP) / 443(HTTPS) 端口',
      '公网 IP：全网唯一的门牌号，浏览器输入即可访问你的服务器',
      'SSH：远程登录协议，本地终端用 ssh root@ip 连接并管理服务器',
    ]}
    keyTakeaway="ECS 是云上电脑，安全组放行端口，公网 IP 是门牌，SSH 是远程钥匙。"
  />
);

// #7 终端：SSH 连接服务器
const Slide07: React.FC = () => (
  <TerminalSlide
    title="SSH 连接服务器"
    subtitle="ssh root@公网IP + 首次连接确认指纹"
    commands={[
      {
        comment: '本地终端发起 SSH 连接',
        cmd: 'ssh root@47.96.xxx.xxx',
        expected: "The authenticity of host '47.96.xxx.xxx' can't be established.\nED25519 key fingerprint is ...\nAre you sure you want to continue connecting (yes/no)?",
      },
      {
        comment: '首次连接输入 yes 确认指纹',
        cmd: 'yes',
        expected: "Warning: Permanently added '47.96.xxx.xxx' (ED25519) to the list of known hosts.\nroot@47.96.xxx.xxx's password:",
      },
      {
        comment: '输入服务器密码后进入远程 shell',
        cmd: '输入密码（不可见）',
        expected: 'Welcome to Alibaba Cloud ...\n[root@i-bp1xxx ~]#',
      },
    ]}
    takeaway="首次连接输入 yes 信任指纹，之后即可在本地终端操作远程服务器。"
  />
);

// #8 终端：安装 Java 环境
const Slide08: React.FC = () => (
  <TerminalSlide
    title="安装 Java 环境"
    subtitle="yum 安装 OpenJDK 17 + 验证版本"
    commands={[
      {
        comment: 'CentOS / Alibaba Cloud Linux 用 yum 安装',
        cmd: 'yum install -y java-17-openjdk',
        expected: 'Complete!  # 下载并安装 OpenJDK 17',
      },
      {
        comment: '验证 Java 版本',
        cmd: 'java -version',
        expected: 'openjdk version "17.0.x" 2024-xx-xx\nOpenJDK Runtime Environment ...\nOpenJDK 64-Bit Server VM ...',
      },
      {
        comment: 'Ubuntu 系统改用 apt',
        cmd: 'apt install -y openjdk-17-jdk',
        expected: 'Done  # Ubuntu / Debian 系统等效安装命令',
      },
    ]}
    takeaway="java -version 能输出版本号即环境就绪，jar 包才能跑起来。"
  />
);

// #9 终端：上传 jar 包
const Slide09: React.FC = () => (
  <TerminalSlide
    title="上传 jar 包"
    subtitle="scp 把本地 jar 传到服务器 /opt 目录"
    commands={[
      {
        comment: '本地先打包后端（跳过测试加速）',
        cmd: 'mvn clean package -DskipTests',
        expected: 'BUILD SUCCESS\ntarget/cike-backend-0.0.1-SNAPSHOT.jar',
      },
      {
        comment: '用 scp 上传到服务器 /opt 目录',
        cmd: 'scp target/cike-backend-0.0.1-SNAPSHOT.jar root@47.96.xxx.xxx:/opt/',
        expected: "root@47.96.xxx.xxx's password:\ncike-backend-0.0.1-SNAPSHOT.jar  100%  38MB  8.2MB/s",
      },
      {
        comment: '回到服务器确认文件已上传',
        cmd: 'ls -lh /opt/cike-backend-0.0.1-SNAPSHOT.jar',
        expected: '-rw-r--r-- 1 root root 38M Jul 31 10:00 cike-backend-0.0.1-SNAPSHOT.jar',
      },
    ]}
    takeaway="scp = ssh 版的 cp，本地文件一键传到远程服务器指定目录。"
  />
);

// #10 代码：后台运行 jar
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="后台运行 jar"
    subtitle="nohup + & 让服务脱离终端常驻，日志重定向到文件"
    filename="运行后端服务"
    language="bash"
    highlightLines={[1]}
    code={`nohup java -jar /opt/cike-backend-0.0.1-SNAPSHOT.jar > /opt/backend.log 2>&1 &
# nohup：忽略挂断信号，关掉终端服务不退出
# &：放入后台运行，释放当前 shell
# > backend.log：标准输出重定向到日志文件
# 2>&1：标准错误也合并写入同一日志

# 查看实时日志
tail -f /opt/backend.log
# 确认进程存活
ps -ef | grep cike-backend`}
    takeaway="nohup ... & 让 jar 脱离终端常驻，关掉 SSH 服务也不会停。"
  />
);

// #11 概念：Nginx 反向代理
const Slide11: React.FC = () => (
  <ConceptSlide
    title="Nginx 反向代理"
    subtitle="代理 / 负载 / 静态托管 / HTTPS 四大价值"
    badgeText="核心概念"
    bullets={[
      '反向代理：客户端只看到 Nginx，后端真实地址隐藏在内网',
      '负载均衡：一台 Nginx 可分发请求到多台后端，横向扩展',
      '静态托管：直接把前端 dist 文件交给 Nginx，访问飞快',
      'HTTPS 终结：Nginx 统一处理证书，后端无需关心加密',
    ]}
    keyTakeaway="Nginx 是流量的「前台」，代理、分发、托管、加密一手包办。"
  />
);

// #12 动画：反向代理动效
const Slide12: React.FC = () => (
  <AnimationSlide
    title="反向代理动效"
    subtitle="请求 → Nginx → 分发到后端 jar / 前端静态"
    animationType="ReverseProxy"
    caption="点击播放或单步切换，观察 Nginx 如何分发请求"
    takeaway="Nginx 根据 URL 路径决定转发目标：/api 走后端，其余走静态。"
  >
    <ReverseProxyAnimation
      client={{ label: '浏览器' }}
      nginx={{ label: 'Nginx :80' }}
      backends={[
        { label: '前端静态 dist', healthy: true },
        { label: '后端 jar :8080', healthy: true },
      ]}
      steps={[
        { label: '1. 浏览器发起请求 /', target: 0, desc: '访问首页，Nginx 命中 location /' },
        { label: '2. Nginx 返回静态 dist', target: 0, desc: '直接返回 index.html 给浏览器' },
        { label: '3. 前端发起 /api 请求', target: 1, desc: 'Nginx 命中 location /api/' },
        { label: '4. Nginx 代理至后端 jar', target: 1, desc: 'proxy_pass 到 127.0.0.1:8080 并返回 JSON' },
      ]}
    />
  </AnimationSlide>
);

// #13 代码：Nginx 配置
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="Nginx 配置"
    subtitle="server + location / 静态托管 + location /api/ proxy_pass"
    filename="nginx.conf"
    language="nginx"
    highlightLines={[6, 12]}
    code={`server {
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
}`}
    takeaway="location / 托管前端，location /api/ 反向代理后端，try_files 兜底 SPA 路由。"
  />
);

// #14 终端：部署前端静态
const Slide14: React.FC = () => (
  <TerminalSlide
    title="部署前端静态"
    subtitle="npm run build 打包 + scp dist 上传到 Nginx 目录"
    commands={[
      {
        comment: '本地前端打包生成 dist',
        cmd: 'npm run build',
        expected: 'dist/index.html\ndist/assets/index-xxxx.js\ndist/assets/index-xxxx.css',
      },
      {
        comment: '上传 dist 到 Nginx 静态目录',
        cmd: 'scp -r dist/* root@47.96.xxx.xxx:/var/www/cike-frontend/dist/',
        expected: "root@47.96.xxx.xxx's password:\nindex.html  100%  ...",
      },
      {
        comment: '服务器上重载 Nginx 配置',
        cmd: 'nginx -t && nginx -s reload',
        expected: 'nginx: configuration file /etc/nginx/nginx.conf test is successful',
      },
    ]}
    takeaway="前端打包成 dist 直接丢给 Nginx 托管，reload 让配置即时生效。"
  />
);

// #15 特效：线上访问效果
const Slide15: React.FC = () => (
  <EffectSlide
    title="线上访问效果"
    subtitle="公网 IP 访问 + 状态指标卡片"
    effectType="OnlineAccessEffect"
    caption="http://47.96.xxx.xxx · 200 OK · 全网可达"
    takeaway="公网 IP 输入即可访问，手机 4G 也能打开你的项目。"
  >
    <OnlineAccessEffect
      url="http://47.96.xxx.xxx"
      visitors={128}
      responseTime={86}
      uptime={99}
      title="刺客项目 · 线上访问"
    />
  </EffectSlide>
);

// #16 提示词：AI 排查部署问题
const Slide16: React.FC = () => (
  <PromptSlide
    title="AI 排查部署问题"
    subtitle="结构化提示词：角色 / 任务 / 栈 / 约束 / 输出"
    role="运维助理"
    task="排查部署报错"
    stack="Linux + Nginx + Spring Boot jar"
    constraints="附上完整报错日志与 Nginx 配置"
    outputFormat="可能原因 + 对应解决命令"
    template={`你是一位资深运维工程师。

请帮我排查部署问题：
- 现象：访问公网 IP 返回 502 Bad Gateway
- 后端：nohup java -jar cike-backend.jar 运行中，端口 8080
- Nginx 配置：
  location /api/ { proxy_pass http://127.0.0.1:8080/api/; }
- 报错日志：
  [error] connect() failed (111: Connection refused)

要求：
1. 列出 2-3 个可能原因
2. 每个原因给出对应的排查命令
3. 给出最终修复建议`}
    takeaway="把现象、配置、日志一起丢给 AI，能快速定位 502 / 连接拒绝等部署问题。"
  />
);

// #17 练习：部署与验证
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="部署与验证"
    subtitle="连接→上传→启动→配置 Nginx→访问→打卡"
    tasks={[
      '1. 在服务器上后台运行 nohup java -jar cike-backend.jar &',
      '2. 配置 Nginx 托管 dist 文件夹并 reload',
      '3. 在手机浏览器输入服务器公网 IP 测试访问',
      '4. 提交线上链接或本地完整运行录屏打卡',
    ]}
  />
);

// #18 终端：日志查看
const Slide18: React.FC = () => (
  <TerminalSlide
    title="日志查看"
    subtitle="tail -f 实时跟踪 + nginx -t reload 校验重载"
    commands={[
      {
        comment: '实时跟踪后端日志',
        cmd: 'tail -f /opt/backend.log',
        expected: '... Started CikeApplication in 2.1 seconds\n... Tomcat started on port 8080',
      },
      {
        comment: '校验 Nginx 配置语法',
        cmd: 'nginx -t',
        expected: 'nginx: configuration file /etc/nginx/nginx.conf test is successful',
      },
      {
        comment: '平滑重载 Nginx（不中断连接）',
        cmd: 'nginx -s reload',
        expected: '# 无输出即重载成功，新配置即时生效',
      },
    ]}
    takeaway="tail -f 看实时日志，nginx -t 先校验再 reload，安全无中断。"
  />
);

// #19 知识检查：Day 12 Quiz
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 12 知识检查"
    subtitle="部署三转变 / Nginx 四价值 / proxy_pass / 日志命令 4 题"
    questions={[
      {
        question: '部署上线的三大转变不包括下列哪一项？',
        options: ['本地→线上', '单一→可访问', '开发→生产', '单体→微服务'],
        answer: 3,
        explanation: '三大转变是本地→线上、单一→可访问、开发→生产；单体→微服务是架构演进，不是部署概念。',
      },
      {
        question: 'Nginx 反向代理的核心价值不包括？',
        options: ['隐藏后端真实地址', '负载均衡', '编译 Java 代码', '静态托管与 HTTPS 终结'],
        answer: 2,
        explanation: 'Nginx 不负责编译 Java，编译由 Maven 完成；Nginx 负责代理、负载、静态托管、HTTPS。',
      },
      {
        question: 'Nginx 把 /api 请求转发给后端 8080 的指令是？',
        options: [
          'root http://127.0.0.1:8080;',
          'proxy_pass http://127.0.0.1:8080/api/;',
          'rewrite http://127.0.0.1:8080;',
          'redirect http://127.0.0.1:8080;',
        ],
        answer: 1,
        explanation: 'location /api/ 中用 proxy_pass 将请求反向代理到后端服务地址。',
      },
      {
        question: '实时查看后端日志的命令是？',
        options: ['cat backend.log', 'tail -f backend.log', 'ls backend.log', 'cp backend.log'],
        answer: 1,
        explanation: 'tail -f 持续追加显示文件新增内容，是实时跟踪日志的标准做法。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="项目正式上线，明日演示准备"
    dayNumber={12}
    takeaways={[
      '部署三转变：本地→线上、单一→可访问、开发→生产',
      '阿里云 ECS + 安全组放行端口 + 公网 IP + SSH 远程登录',
      '后端 jar 用 nohup ... & 后台常驻，scp 上传到 /opt',
      'Nginx 反向代理：location / 托管前端，location /api/ 转发后端',
      '项目正式上线公网，明日进入演示准备与录屏交付',
    ]}
    nextDayPreview="Day 13 — 演示准备 · README 规范 · 录屏技巧"
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
      return null;
  }
};

export const day12Deck: DayDeckRenderer = {
  meta: {
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
        title: '服务器部署上线',
        subtitle: '阿里云 + Nginx + jar 包 + 静态部署',
        layout: 'cover',
        instructorNotes: '开场用「项目写完只在你的电脑上，怎么让全网看到」切入，引出部署上线。强调今天把前后端一起发布到公网。',
        keyTakeaway: '部署 = 云服务器 + jar 后台运行 + Nginx 反向代理 + 前端静态托管。',
      },
      {
        id: 'd12-s2',
        title: 'Day 12 学习路线图',
        subtitle: '服务器→环境→jar→Nginx→前端 5 目标',
        layout: 'steps',
        instructorNotes: '带学员过 5 个目标，强调最后一条「线上访问」是今天的验收点。',
        keyTakeaway: '5 目标递进：服务器→环境→后端→Nginx→前端访问。',
      },
      {
        id: 'd12-s3',
        title: '部署是什么？',
        subtitle: '本地→线上/单一→可访问/开发→生产 三转变',
        layout: 'concept',
        instructorNotes: '用「开店」比喻：本地是家里做菜自己吃，部署是开张营业让路人进店。讲透三大转变。',
        keyTakeaway: '部署的本质是三大转变：本地→线上、单一→可访问、开发→生产。',
      },
      {
        id: 'd12-s4',
        title: '部署架构图',
        subtitle: '浏览器→Nginx→前端静态/后端jar→DB',
        layout: 'concept',
        instructorNotes: '指着图讲清 Nginx 是唯一入口：静态直接返回，/api 转发后端。强调后端只监听 127.0.0.1 不暴露公网。',
        keyTakeaway: 'Nginx 是入口：静态资源直接返回，/api 请求转发给后端 jar。',
      },
      {
        id: 'd12-s5',
        title: '本地 vs 线上对比',
        subtitle: 'localhost vs 公网IP/手动启动 vs 常驻',
        layout: 'comparison',
        instructorNotes: '让学员体会「关机即下线」与「7x24 在线」的差别，引出 nohup 常驻的必要性。',
        keyTakeaway: '线上 = 公网 IP + 常驻运行，让项目永远在线、全网可达。',
      },
      {
        id: 'd12-s6',
        title: '阿里云服务器',
        subtitle: 'ECS/安全组/公网IP/SSH 四概念',
        layout: 'concept',
        instructorNotes: '现场演示阿里云控制台找 ECS 实例与公网 IP，强调安全组必须放行 22/80 端口，否则 SSH 与访问都失败。',
        keyTakeaway: 'ECS 是云上电脑，安全组放行端口，公网 IP 是门牌，SSH 是远程钥匙。',
      },
      {
        id: 'd12-s7',
        title: 'SSH 连接服务器',
        subtitle: 'ssh root@ip + 首次确认指纹',
        layout: 'steps',
        instructorNotes: '演示首次连接的 yes 确认，强调密码输入不可见是正常现象；Windows 学员可用 PowerShell 自带 ssh。',
        keyTakeaway: '首次连接输入 yes 信任指纹，即可在本地终端操作远程服务器。',
      },
      {
        id: 'd12-s8',
        title: '安装 Java 环境',
        subtitle: 'yum install java + 验证版本',
        layout: 'steps',
        instructorNotes: '演示 yum 安装 OpenJDK 17，强调 java -version 必须能看到版本号才算成功；Ubuntu 学员改用 apt。',
        keyTakeaway: 'java -version 能输出版本号即环境就绪，jar 包才能跑起来。',
      },
      {
        id: 'd12-s9',
        title: '上传 jar 包',
        subtitle: 'scp target/app.jar root@ip:/opt',
        layout: 'steps',
        instructorNotes: '演示本地 mvn package 打包，再用 scp 上传；强调 scp 路径要对，目标目录 /opt 需存在。',
        keyTakeaway: 'scp = ssh 版的 cp，本地文件一键传到远程服务器指定目录。',
      },
      {
        id: 'd12-s10',
        title: '后台运行 jar',
        subtitle: 'nohup java -jar app.jar & + 日志重定向',
        layout: 'split_code',
        instructorNotes: '逐段讲 nohup、&、>、2>&1 的作用；强调关掉 SSH 服务不停才是关键。演示 tail -f 看日志、ps -ef 查进程。',
        keyTakeaway: 'nohup ... & 让 jar 脱离终端常驻，关掉 SSH 服务也不会停。',
      },
      {
        id: 'd12-s11',
        title: 'Nginx 反向代理',
        subtitle: '代理/负载/静态托管/HTTPS 四价值',
        layout: 'concept',
        instructorNotes: '用「公司前台」比喻 Nginx：访客先到前台，前台决定把人带到哪个部门。强调后端真实地址被隐藏。',
        keyTakeaway: 'Nginx 是流量的「前台」，代理、分发、托管、加密一手包办。',
      },
      {
        id: 'd12-s12',
        title: '反向代理动效',
        subtitle: '请求→Nginx→分发后端/静态',
        layout: 'concept',
        instructorNotes: '点播放让学员看清 Nginx 如何根据 URL 分发：/ 走静态、/api 走后端。强调路径路由是关键。',
        keyTakeaway: 'Nginx 根据 URL 路径决定转发目标：/api 走后端，其余走静态。',
      },
      {
        id: 'd12-s13',
        title: 'Nginx 配置',
        subtitle: 'server + location /api proxy_pass + root 静态',
        layout: 'split_code',
        instructorNotes: '逐行讲 server/location/root/try_files/proxy_pass；强调 try_files 兜底 SPA 前端路由，proxy_pass 末尾斜杠要一致。',
        keyTakeaway: 'location / 托管前端，location /api/ 反向代理后端，try_files 兜底 SPA 路由。',
      },
      {
        id: 'd12-s14',
        title: '部署前端静态',
        subtitle: 'scp dist/* root@ip:/usr/share/nginx/html',
        layout: 'steps',
        instructorNotes: '演示本地 npm run build 生成 dist，再 scp 上传到 Nginx root 目录；强调 nginx -t 先校验再 reload。',
        keyTakeaway: '前端打包成 dist 直接丢给 Nginx 托管，reload 让配置即时生效。',
      },
      {
        id: 'd12-s15',
        title: '线上访问效果',
        subtitle: '公网IP访问截图+动效',
        layout: 'concept',
        instructorNotes: '现场用手机 4G 网络访问公网 IP，让学员真切感受「全网可达」；强调这是 14 天项目的里程碑时刻。',
        keyTakeaway: '公网 IP 输入即可访问，手机 4G 也能打开你的项目。',
      },
      {
        id: 'd12-s16',
        title: 'AI 排查部署问题',
        subtitle: '角色:运维助理/任务:部署报错/栈:Linux+Nginx',
        layout: 'prompt_template',
        instructorNotes: '演示把 502 现象、Nginx 配置、报错日志一起丢给 AI，让 AI 给出可能原因与排查命令。',
        keyTakeaway: '把现象、配置、日志一起丢给 AI，能快速定位 502 / 连接拒绝等部署问题。',
      },
      {
        id: 'd12-s17',
        title: '部署与验证',
        subtitle: '连接→上传→启动→配置Nginx→访问→打卡',
        layout: 'exercise',
        instructorNotes: '巡场指导，常见坑：安全组没放行 80、proxy_pass 斜杠漏、jar 没后台运行被 SSH 关闭带走。',
        keyTakeaway: '跑通公网 IP 访问首页 + /api 返回 JSON 即打卡成功。',
      },
      {
        id: 'd12-s18',
        title: '日志查看',
        subtitle: 'tail -f logs + nginx -t reload',
        layout: 'steps',
        instructorNotes: '教 tail -f 实时跟踪、nginx -t 先校验配置语法再 reload，避免改错配置导致 Nginx 挂掉。',
        keyTakeaway: 'tail -f 看实时日志，nginx -t 先校验再 reload，安全无中断。',
      },
      {
        id: 'd12-s19',
        title: 'Day 12 知识检查',
        subtitle: '部署三转变/Nginx四价值/proxy_pass/日志命令 4题',
        layout: 'concept',
        instructorNotes: '让学员现场作答，错题重点回顾第 3 题 proxy_pass 的指令辨析。',
        keyTakeaway: '四题覆盖：部署三转变、Nginx 四价值、proxy_pass、日志命令。',
      },
      {
        id: 'd12-s20',
        title: '今日总结',
        subtitle: '项目正式上线 + 明日演示准备',
        layout: 'summary',
        instructorNotes: '收尾庆祝项目正式上线，强调明天进入演示准备与录屏交付，今晚可拍照发朋友圈留念。',
        keyTakeaway: '项目正式上线公网，明日进入演示准备与录屏交付。',
      },
    ],
  },
  Render,
};