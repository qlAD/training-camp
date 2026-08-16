import type { DayDeckRenderer } from '@/lib';
import { day01Deck } from '../slides/day-01';
import { day02Deck } from '../slides/day-02';
import { day03Deck } from '../slides/day-03';
import { day04Deck } from '../slides/day-04';
import { day05Deck } from '../slides/day-05';
import { day06Deck } from '../slides/day-06';

// 14 期主题路线图（每期 = 一期独立视频，逐日产出）：
//   Day 1  「开营仪式 · Vibe Coding 认知 · 第一个 HTML」→ 个人简介 HTML 页面 ✅ day-01
//   Day 2  「互联网原理（浏览器↔服务器 · DNS · HTTP）· JDK/Node.js/Git 安装」→ 开发环境就绪 · Gitee 仓库 ✅ day-02
//   Day 3  「HTML / CSS / JavaScript 极速入门」→ 美化版个人简介页面（含样式+交互） ✅ day-03
//   Day 4  「Vue 3 + Vite 项目搭建 · 作品集首页」→ 个人作品集 Vue 项目 ✅ day-04
//   Day 5  「UI/UX 设计 · 原型设计 · Mock 数据」→ 「此刻」社区五个前端页面 ✅ day-05
//   Day 6  「Spring Boot 3 项目骨架 · 第一个 GET API」→ Hello API · IDEA + MySQL 准备 ✅ day-06
//   Day 7  「MySQL 安装配置 · 实体类 · 完整 CRUD」→ Post CRUD API
//   Day 8  「需求拆解 · 前后端联调（axios + CORS）」→ 前后端连通 · 项目仓库初始化
//   Day 9  「提示词工程 · Reasonix 引入 · 用户系统」→ 注册/登录完整模块
//   Day 10 「AI Debug · MVP 原则 · 信息流开发」→ 首页帖子信息流
//   Day 11 「功能完善 · Bug 修复 · 项目 checklist」→ 项目初稿完成
//   Day 12 「服务器 · Nginx · jar 包部署」→ 线上可访问 / 本地运行录屏
//   Day 13 「演示准备 · README 整理 · 录屏」→ 演示视频 + 完整仓库
//   Day 14 「结营仪式 · 模拟毕设发布」→ 提交两个项目最终版
export const ALL_COURSE_DECKS: DayDeckRenderer[] = [day01Deck, day02Deck, day03Deck, day04Deck, day05Deck, day06Deck];
