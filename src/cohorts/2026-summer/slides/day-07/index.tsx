'use client';

import React from 'react';
import type { DayDeckRenderer } from '@/lib';
import { Shot01Open, Shot02Contract, Shot03Verbs, Shot04RestVsOld } from './scenes/act1-cognition';
import {
  Shot05Trio,
  Shot06ResponseBody,
  Shot07ErrorCodes,
  Shot08AIDoc,
  Shot09FullCrud,
} from './scenes/act2-spec';
import {
  Shot10ParamValidation,
  Shot11DebugTrio,
  Shot12CorsException,
  Shot13HandsOn,
  Shot14Homework,
  Shot15Summary,
} from './scenes/act3-practice';

const SHOTS: React.FC[] = [
  Shot01Open,
  Shot02Contract,
  Shot03Verbs,
  Shot04RestVsOld,
  Shot05Trio,
  Shot06ResponseBody,
  Shot07ErrorCodes,
  Shot08AIDoc,
  Shot09FullCrud,
  Shot10ParamValidation,
  Shot11DebugTrio,
  Shot12CorsException,
  Shot13HandsOn,
  Shot14Homework,
  Shot15Summary,
];

/* Day 7 · 后端入门 · RESTful 接口方案设计 · 「此刻」社区 */
export const day07Deck: DayDeckRenderer = {
  meta: {
    day: 7,
    stageName: 'Day 7 · 后端入门 · RESTful 接口',
    title: '当后厨开出了第一份正经菜单：RESTful 接口',
    subtitle: 'AI 全栈暑期训练营 · Day 7',
    duration: '60 min',
    target: '零基础学员 · 已完成 Day 1-6',
    output: '全套接口文档 + 全业务 CRUD 接口 + 跨域配置与全局异常处理',
    aiPractice: '让 AI 批量生成全套标准化接口文档，再当审稿人把字段、业务、权限三道关把好',
    slides: [
      {
        id: 'd7-s01',
        title: '冷开场：前端还在门外干瞪眼',
        subtitle: '表建好了，可数据塞不进去也取不出来',
        layout: 'concept',
        instructorNotes:
          '承接 Day6 建好的表 → 问学员「前端点发布，数据怎么塞进笔记表」→ 戳破缺的「对外的门」→ 今天的主角 RESTful API：规定前端怎么敲门、后端怎么应答、出错怎么报、成功怎么回。',
        keyTakeaway: '今天开「对外的门」—— RESTful API',
      },
      {
        id: 'd7-s02',
        title: 'RESTful = 前后端那份不成文的契约',
        subtitle: '餐厅点单规矩 · 一切皆资源 · URL 是地址 · HTTP 方法是动作',
        layout: 'concept',
        instructorNotes:
          'REST 不是框架不是语言，是一套约定俗成的接口设计风格。核心思想「一切皆资源」：用户/笔记/评论都是资源，每个资源有唯一 URL。URL 描述「资源是什么」，HTTP 方法描述「做什么」，两者分离接口就干净。',
        keyTakeaway: '一切皆资源 · URL=地址 · HTTP 方法=动作',
      },
      {
        id: 'd7-s03',
        title: 'HTTP 四个动作',
        subtitle: 'GET 取 · POST 增 · PUT 改 · DELETE 删',
        layout: 'concept',
        instructorNotes:
          '四动词对应四动作：GET 读不改、POST 新增、PUT 整体更新、DELETE 删除。重点避坑：动作和地址对不上号——删评论写成 POST /comment/delete?id=1 是反例，规范是 DELETE /comments/1，动作资源各司其职。',
        keyTakeaway: 'HTTP 四动词 + 避坑：动作地址要匹配',
      },
      {
        id: 'd7-s04',
        title: 'REST vs 老接口风格',
        subtitle: '全用 POST + 动词 vs 动作 + 资源分离',
        layout: 'comparison',
        instructorNotes:
          '老风格 /deleteComment、/addLike、/listNotes 全 POST 加动词——能用但不优雅。REST 的 DELETE /comments/1、POST /notes/1/likes、GET /notes?page=1 干净一致。沟通成本低，这是 REST 的核心红利。',
        keyTakeaway: 'REST vs 老风格 · 动作资源分离的优雅',
      },
      {
        id: 'd7-s05',
        title: '三件套别少',
        subtitle: 'HTTP 状态码 · 统一响应体 · 业务错误码',
        layout: 'concept',
        instructorNotes:
          '三件套是联调最要命的地方：①HTTP 状态码(2xx/4xx/5xx)是协议层第一句话；②统一响应体每个接口返回 JSON 都一个样；③业务错误码区分通了但业务失败的情况。别图省事一律 200 塞错误信息——糊弄联调的人。',
        keyTakeaway: '三件套 · 联调要命的地方',
      },
      {
        id: 'd7-s06',
        title: '统一响应体',
        subtitle: 'code · message · data —— 解析逻辑写一遍就够',
        layout: 'concept',
        instructorNotes:
          '三字段：code(业务码 0 成功)、message(一句话)、data(真实数据)。前端拿到的每个响应都是这壳子。重点避坑：封装必须在项目最开始就定下来用一个统一返回工具类包一层，写到一半回头改每个接口都得动，痛苦加倍。',
        keyTakeaway: '统一响应体三字段 + 项目开始就定',
      },
      {
        id: 'd7-s07',
        title: '业务错误码表 · 前缀分类',
        subtitle: '1xxxx 用户 · 2xxxx 内容 · 3xxxx 文件',
        layout: 'concept',
        instructorNotes:
          'HTTP 状态码只能告诉「通没通」，但通了的请求内部业务可能也失败(用户名已存在/笔记不存在/余额不足)。靠自定义业务错误码区分，前缀分类让前端一看码就知道弹什么提示，不用解析 message。',
        keyTakeaway: '业务错误码表 + 前缀分类',
      },
      {
        id: 'd7-s08',
        title: '让 AI 当接口文书写手',
        subtitle: '喂文档 → 批量生成 → 审稿 → 定稿',
        layout: 'steps',
        instructorNotes:
          '把 Day6 数据库设计文档+需求喂给 AI 批量生成全套接口文档(地址/方式/入参/返回体/权限/异常)。提示词必须强调「返回体遵循统一格式 code/message/data 三字段」，否则 AI 自作主张给每个接口设计不同结构。生成完当审稿人：字段对不对表、漏没漏关键业务、权限标得对不对。文档定稿=Day8 联调唯一标准参考。',
        keyTakeaway: 'AI 批量生成 → 人工审稿 → 定稿',
      },
      {
        id: 'd7-s09',
        title: '全业务 CRUD · 把社区的门都开出来',
        subtitle: '用户 · 笔记 · 互动 · 文件上传 —— 一个不落',
        layout: 'concept',
        instructorNotes:
          '四模块：①用户(注册/登录/查/改，JWT 留 Day8)；②笔记(发布多图 images URL 数组/列表分页/详情/更新/删除)；③互动(点赞/评论/收藏 + my-liked-notes 复用点赞表反查零成本)；④文件上传(图片头像都走它，返回 URL)。每接口套路：接参→校验→service→DB→统一响应体返回。写熟前两三个后面就是复制粘贴改改。',
        keyTakeaway: '四模块 CRUD + my-liked-notes 复用 + 开发套路',
      },
      {
        id: 'd7-s10',
        title: '参数校验兜底',
        subtitle: '前端可能漏校验 · 后端必须兜底 · Bean Validation',
        layout: 'concept',
        instructorNotes:
          '参数校验千万别偷懒：手机号格式、必填字段、ID 类型——前端可能漏，后端必须兜底，否则脏数据入库。推荐 Bean Validation 注解(@NotBlank/@NotNull/@Size/@Pattern/@Email 等)，控制层加 @Valid 触发，一个注解搞定一个校验，比手写 if-else 优雅得多。校验失败异常交给全局异常处理器。',
        keyTakeaway: 'Bean Validation 注解 + 后端兜底',
      },
      {
        id: 'd7-s11',
        title: '调试三件套',
        subtitle: 'IDEA HTTP Client 快测 · Apifox 主力 · 跨域拦路虎 CORS',
        layout: 'concept',
        instructorNotes:
          '浏览器只能发 GET，接口调试要专用工具。①IDEA HTTP Client 自带 .http 文件，贴代码顺手测；②Apifox 今天主力，批量管理/存历史/导出分享=Day8 联调作战地图；③跨域拦路虎：前端 5173→后端 8080 浏览器拦 CORS，后端配全局跨域允许，不解决 Day8 第一秒翻车。Apifox 用环境变量抽 baseUrl，别写死。',
        keyTakeaway: '调试三件套 + Apifox 环境变量',
      },
      {
        id: 'd7-s12',
        title: '跨域放开 + 异常兜底',
        subtitle: '全局 CORS 配置 · 全局异常处理器',
        layout: 'concept',
        instructorNotes:
          '跨域：后端写配置类放开，告诉浏览器「8080 愿意接待 5173」。全局异常处理器兜两类：参数校验异常(前端传错参)+数据库访问异常(SQL 错/连接断)，别让原始堆栈抛给前端既不安全也不友好，捕获后转统一 code-message 响应体，前端拿到的永远是规整结果。',
        keyTakeaway: '全局 CORS + 全局异常处理器 → 统一响应',
      },
      {
        id: 'd7-s13',
        title: '今日实操五步',
        subtitle: '定规范 → AI 文档 → 逐模块开发 → 跨域异常 → 逐接口验收',
        layout: 'exercise',
        instructorNotes:
          '五步：①定规范(响应体/错误码/URL 风格三件白纸黑字)；②AI 生成接口文档审稿定稿存 day07；③逐模块开发(用户→笔记→文件→互动，每写完一个接口立刻测别堆一起)；④配跨域+全局异常；⑤Apifox 逐接口验收(独立调用正常+错误场景规整)。后端开发阶段封顶。',
        keyTakeaway: '五步实操 · 后端从「能跑」变「能用」',
      },
      {
        id: 'd7-s14',
        title: '作业与自测清单',
        subtitle: '两个交付物 · 八项自测',
        layout: 'steps',
        instructorNotes:
          '交付物：全套接口文档归档 day07(Apifox 导出或 Markdown)；后端代码推 Gitee 提交评论附关键接口测试截图(登录/发笔记/点赞/评论/上传)。8 项自测覆盖文档归档/字段完整/响应格式/跨域/异常/逐接口验收/推送/错误码表。',
        keyTakeaway: 'day07 归档 + Gitee 推送附截图 · 八项自测',
      },
      {
        id: 'd7-s15',
        title: '总结与 Day8 预告',
        subtitle: '后端「接口齐全」· 明天 JWT 鉴权全链路联调',
        layout: 'summary',
        instructorNotes:
          '今日收获快闪(契约/四动词/三件套/统一响应/AI 文档/全业务 CRUD/复用/Apifox+CORS/异常兜底)→ Day8 预告：第一轮联调 JWT 鉴权全链路——前端登录页真调今天的注册/登录接口，后端签发令牌、前端存令牌、后续请求带令牌、后端校验令牌。链路跑通那一刻注册登录才真正活过来。收尾 Slogan：文档先行、规范统一、逐接口验收——这套节奏以后做任何正经项目开头都得这么干。',
        keyTakeaway: '今日收获回顾 + Day8 JWT 鉴权联调预告',
      },
    ],
  },
  Render: ({ slideIndex }) => {
    const Shot = SHOTS[slideIndex] ?? SHOTS[0];
    return <Shot />;
  },
};
