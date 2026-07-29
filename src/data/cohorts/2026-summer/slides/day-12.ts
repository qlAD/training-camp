import { DayCourseDeck } from '../../../../types';

export const day12Deck: DayCourseDeck = {
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
};
