import { DayCourseDeck } from '../../../../types';

export const day06Deck: DayCourseDeck = {
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
};
