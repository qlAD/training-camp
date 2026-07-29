import { DayCourseDeck } from '../../../../types';

export const day08Deck: DayCourseDeck = {
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
};
