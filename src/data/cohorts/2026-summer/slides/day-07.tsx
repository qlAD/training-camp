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
} from './shared/layouts';
import { TableStructureAnimation, CRUDFlowAnimation } from './shared/animations';
import { APIMatrixShowcase } from './shared/effects';

// #1 封面：MySQL + 完整 CRUD
const Slide01: React.FC = () => (
  <CoverSlide
    stageName="第五阶段：初始后端"
    badgeText="Day 7 · 课程讲义"
    title="MySQL + 完整 CRUD"
    subtitle="让数据永久保存，掌握数据库操作与 Spring Data JPA"
    bullets={[
      '数据持久化：从内存到磁盘，让「此刻」帖子永久存盘',
      '实体映射：@Entity 注解把 Java 对象映射到数据库表',
      '增删改查 API：POST/GET/PUT/DELETE 四端点贯穿后端链路',
    ]}
  />
);

// #2 议程：Day 7 学习路线图
const Slide02: React.FC = () => (
  <AgendaSlide
    title="Day 7 学习路线图"
    subtitle="从数据库认知到 CRUD 接口跑通，5 个目标串成一条后端数据链"
    objectiveCountLabel="5 目标"
    objectives={[
      { title: '数据库认知', desc: '理解内存与持久化的差异，掌握关系型数据库表/行/列/主键概念' },
      { title: 'MySQL 安装', desc: '本地安装 MySQL 并用命令行登录、查看数据库与表结构' },
      { title: 'JPA 实体', desc: '用 @Entity/@Table/@Id 注解把 Post 对象映射到数据库表' },
      { title: 'CRUD 接口', desc: 'JpaRepository + Service + Controller 跑通增删改查四端点' },
      { title: '接口测试', desc: '用 Postman/curl 验证 POST 创建与 GET 查询返回真实数据' },
    ]}
  />
);

// #3 概念：为什么需要数据库
const Slide03: React.FC = () => (
  <ConceptSlide
    title="为什么需要数据库"
    subtitle="变量重启即失、容量有限——数据库解决四大持久化需求"
    badgeText="核心概念"
    bullets={[
      '内存易失：进程退出或服务器重启，内存里的变量全部丢失',
      '数据量大：内存按 GB 计费，磁盘按 TB 计费，海量数据只能落盘',
      '并发控制：多请求同时写同一份数据，数据库用事务与锁保证一致',
      '结构查询：SQL 让你按条件筛选、排序、聚合，远胜遍历内存数组',
    ]}
    keyTakeaway="数据库 = 永久存储 + 大容量 + 并发安全 + 结构化查询。"
  />
);

// #4 对比：内存 vs 持久化
const Slide04: React.FC = () => (
  <ComparisonSlide
    title="内存 vs 持久化对比"
    subtitle="同样的帖子数据，存内存与存数据库的代价差异"
    leftLabel="内存存储"
    rightLabel="数据库持久化"
    left={{
      title: '内存（List/Map）',
      items: [
        '重启即失，进程退出数据归零',
        '容量受限于服务器内存，GB 级',
        '读写速度极快，但无并发保护',
        '无结构化查询，需手动遍历筛选',
      ],
    }}
    right={{
      title: '数据库（MySQL）',
      items: [
        '永久存储，重启后数据依旧在',
        '容量随磁盘扩展，TB 级起步',
        '事务与锁保证多请求并发安全',
        'SQL 一句 WHERE 即可筛选聚合',
      ],
    }}
    keyTakeaway="速度换可靠：内存追求快，数据库追求「不丢、能查、能并发」。"
  />
);

// #5 概念：关系型数据库 MySQL
const Slide05: React.FC = () => (
  <ConceptSlide
    title="关系型数据库 MySQL"
    subtitle="表、行、列、主键、外键——五个概念撑起整个关系模型"
    badgeText="技术选型"
    bullets={[
      '表 (Table)：一类实体的集合，如 post 表存放所有帖子',
      '行 (Row)：一条具体记录，如「今天的此刻」就是 post 表的一行',
      '列 (Column)：字段定义，如 id / title / content / category',
      '主键 (Primary Key)：唯一标识一行，如 id 自增列',
      '外键 (Foreign Key)：建立表间关联，如 post.user_id 指向 user.id',
    ]}
    keyTakeaway="关系型数据库用「表+主键+外键」把现实世界映射成可查询的结构。"
  />
);

// #6 动画：表行列结构动效
const Slide06: React.FC = () => (
  <AnimationSlide
    title="表行列结构动效"
    subtitle="观察一张 post 表如何被拆解为表 → 行 → 列 → 单元格"
    animationType="TableStructure"
    caption="紫色=表 · 绿色=行 · 琥珀=列 · 紫罗兰=单元格"
    takeaway="表是行的集合，行是字段的集合，字段即列——这就是关系模型的层级。"
  >
    <TableStructureAnimation
      tableName="post"
      columns={['id', 'title', 'content', 'category']}
      rows={[
        [1, '今天的此刻', '学会了数据库...', 'daily'],
        [2, '二次元日常', '新番推荐！', 'anime'],
        [3, '游戏战绩', '上分啦', 'game'],
      ]}
      steps={[
        { label: 'post 表整体', highlight: 'table', desc: '一张表存放所有帖子记录' },
        { label: '第 2 行：一条记录', highlight: 'row', desc: '行 = 一条具体的帖子' },
        { label: 'title 列：字段定义', highlight: 'column', desc: '列 = 所有帖子的标题字段' },
        { label: '单元格 (2, title)', highlight: 'cell', desc: '行与列交叉处即一个具体值' },
      ]}
    />
  </AnimationSlide>
);

// #7 终端：MySQL 安装验证
const Slide07: React.FC = () => (
  <TerminalSlide
    title="MySQL 安装验证"
    subtitle="登录 MySQL 并查看现有数据库，确认安装成功"
    commands={[
      {
        comment: '用 root 账户登录 MySQL（提示输入密码）',
        cmd: 'mysql -u root -p',
        expected: 'Enter password: ****',
      },
      {
        comment: '查看当前 MySQL 实例中所有数据库',
        cmd: 'SHOW DATABASES;',
        expected: '+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+',
      },
      {
        comment: '创建「此刻」社区数据库 ci_ke',
        cmd: 'CREATE DATABASE ci_ke DEFAULT CHARSET utf8mb4;',
        expected: 'Query OK, 1 row affected (0.01 sec)',
      },
    ]}
    takeaway="能进入 mysql> 提示符并 SHOW DATABASES 看到列表，即说明 MySQL 已就绪。"
  />
);

// #8 代码：SQL 基础语句
const Slide08: React.FC = () => (
  <CodeBoxSlide
    title="SQL 基础语句"
    subtitle="CREATE / INSERT / SELECT / UPDATE / DELETE 五大语句覆盖全部 CRUD"
    language="sql"
    filename="crud-basics.sql"
    highlightLines={[3, 6, 9, 12, 14]}
    code={`-- 建表
CREATE TABLE post (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(128) NOT NULL,
  content TEXT,
  category VARCHAR(32)
);

-- 插入一行
INSERT INTO post (title, content, category) VALUES ('今天的此刻', '...', 'daily');

-- 查询
SELECT * FROM post WHERE category = 'daily';

-- 更新
UPDATE post SET title = '新标题' WHERE id = 1;

-- 删除
DELETE FROM post WHERE id = 1;
`}
    takeaway="SQL 的 CRUD 对应 INSERT / SELECT / UPDATE / DELETE，与后端 API 一一映射。"
  />
);

// #9 概念：ORM 与 JPA
const Slide09: React.FC = () => (
  <ConceptSlide
    title="ORM 与 JPA 概念"
    subtitle="对象关系映射——让 Java 对象与数据库表自动同步"
    badgeText="核心概念"
    bullets={[
      '对象关系映射：Java 类 ↔ 数据库表，对象字段 ↔ 表列，对象实例 ↔ 表行',
      '免写 SQL：save() 自动生成 INSERT，findAll() 自动生成 SELECT',
      '注解映射：@Entity/@Table/@Id 声明映射关系，框架负责转换',
    ]}
    keyTakeaway="JPA 让你用面向对象的方式操作数据库，SQL 由框架生成。"
  />
);

// #10 代码：@Entity 实体类
const Slide10: React.FC = () => (
  <CodeBoxSlide
    title="@Entity 实体类"
    subtitle="用注解把 Post 类映射到 post 表，字段即列"
    language="java"
    filename="Post.java"
    highlightLines={[1, 2, 4, 5, 6]}
    code={`@Entity
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
`}
    takeaway="@Entity 声明这是实体类，@Table 指定表名，@Id + @GeneratedValue 让主键自增。"
  />
);

// #11 代码：JpaRepository 接口
const Slide11: React.FC = () => (
  <CodeBoxSlide
    title="JpaRepository 接口"
    subtitle="继承即拥有——一行声明换来全套内置 CRUD 方法"
    language="java"
    filename="PostRepository.java"
    highlightLines={[1, 2]}
    code={`public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategory(String category);
}
`}
    takeaway="继承 JpaRepository 后，Spring 会自动为你提供 save(), findById(), deleteById() 等所有内置方法！"
  />
);

// #12 动画：CRUD 流程动效
const Slide12: React.FC = () => (
  <AnimationSlide
    title="CRUD 流程动效"
    subtitle="增 → 查 → 改 → 删，四步循环构成数据生命周期"
    animationType="CRUDFlow"
    caption="绿=Create · 蓝=Read · 琥珀=Update · 红=Delete"
    takeaway="CRUD 不是一次性流程，而是用户操作驱动的循环——每次交互都对应一种操作。"
  >
    <CRUDFlowAnimation
      title="Post 数据生命周期"
      operations={[
        { type: 'create', label: '创建帖子', desc: 'POST /api/posts → save() 生成 INSERT' },
        { type: 'read', label: '查询列表', desc: 'GET /api/posts → findAll() 生成 SELECT' },
        { type: 'update', label: '更新标题', desc: 'PUT /api/posts/1 → save() 生成 UPDATE' },
        { type: 'delete', label: '删除帖子', desc: 'DELETE /api/posts/1 → deleteById() 生成 DELETE' },
      ]}
    />
  </AnimationSlide>
);

// #13 代码：Service 层实现
const Slide13: React.FC = () => (
  <CodeBoxSlide
    title="Service 层实现"
    subtitle="PostService 封装业务逻辑，调用 Repository 完成增删改查"
    language="java"
    filename="PostService.java"
    highlightLines={[1, 5, 9, 13, 17]}
    code={`@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post updatePost(Long id, Post post) {
        post.setId(id);
        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}
`}
    takeaway="Service 层是业务编排者：参数校验、调用 Repository、处理异常都在这里完成。"
  />
);

// #14 代码：Controller CRUD API
const Slide14: React.FC = () => (
  <CodeBoxSlide
    title="Controller CRUD API"
    subtitle="POST/GET/PUT/DELETE 四端点，对应 HTTP 动词与 CRUD 一一映射"
    language="java"
    filename="PostController.java"
    highlightLines={[4, 8, 13, 18]}
    code={`@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping
    public Post create(@RequestBody Post post) {
        return postService.createPost(post);
    }

    @GetMapping
    public List<Post> list() {
        return postService.getAllPosts();
    }

    @PutMapping("/{id}")
    public Post update(@PathVariable Long id, @RequestBody Post post) {
        return postService.updatePost(id, post);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        postService.deletePost(id);
    }
}
`}
    takeaway="HTTP 动词与 CRUD 对应：POST=增、GET=查、PUT=改、DELETE=删。"
  />
);

// #15 特效：API 矩阵展示
const Slide15: React.FC = () => (
  <EffectSlide
    title="API 矩阵展示"
    subtitle="四个端点一图速览：方法 + 路径 + 用途"
    effectType="APIMatrixShowcase"
    caption="GET 蓝色查询 · POST 琥珀创建 · PUT 靛蓝更新 · DELETE 红色删除"
    takeaway="RESTful 风格用同一资源路径 + 不同 HTTP 动词区分四种操作。"
  >
    <APIMatrixShowcase
      title="「此刻」帖子 CRUD 接口矩阵"
      apis={[
        { method: 'POST', path: '/api/posts', desc: '创建一条新帖子，请求体携带 title/content/category', tone: 'amber' },
        { method: 'GET', path: '/api/posts', desc: '查询全部帖子列表，返回 Post[] 数组', tone: 'emerald' },
        { method: 'PUT', path: '/api/posts/{id}', desc: '按 id 更新指定帖子的字段', tone: 'indigo' },
        { method: 'DELETE', path: '/api/posts/{id}', desc: '按 id 删除指定帖子', tone: 'rose' },
      ]}
    />
  </EffectSlide>
);

// #16 提示词：让 AI 生成 CRUD
const Slide16: React.FC = () => (
  <PromptSlide
    title="让 AI 生成 CRUD"
    subtitle="把实体字段与端点要求写清楚，AI 一次生成完整三层代码"
    role="Java 后端助理"
    task="为 Post 实体生成完整的 CRUD REST API"
    stack="Spring Boot 3 / Spring Data JPA / MySQL"
    constraints="Post 字段：id/title/content/category/imageUrl/userId/createTime；端点路径 /api/posts；含 PostController/PostService/PostRepository 三层"
    outputFormat="三个 Java 文件：PostController.java / PostService.java / PostRepository.java"
    template={`你是一位熟练的 Java 后端工程师。
请为「此刻」社区的 Post 实体生成完整的 CRUD REST API：

技术栈：Spring Boot 3 + Spring Data JPA + MySQL

Post 实体字段：
- id (Long, 自增主键)
- title (String, 必填)
- content (String)
- category (String)
- imageUrl (String)
- userId (Long)
- createTime (LocalDateTime, 默认 now)

接口要求（路径 /api/posts）：
- POST   /api/posts      创建帖子
- GET    /api/posts      查询全部
- PUT    /api/posts/{id} 按 id 更新
- DELETE /api/posts/{id} 按 id 删除

请输出三个文件：PostController.java / PostService.java / PostRepository.java`}
    takeaway="结构化提示词五段式（角色/任务/栈/约束/输出）是让 AI 稳定产出三层代码的关键。"
  />
);

// #17 练习：跑通帖子 CRUD
const Slide17: React.FC = () => (
  <ExerciseSlide
    title="跑通帖子 CRUD 接口"
    subtitle="让「此刻」社区具备真正的后端数据能力"
    tasks={[
      '在 MySQL 中创建 ci_ke 数据库',
      '在 application.yml 配置数据库连接用户名与密码',
      '让 AI 生成 PostController, PostService, PostRepository',
      '测试 POST /api/posts 创建一条新帖子，并用 GET /api/posts 查询出结果',
      '截屏数据库记录或 API 响应打卡',
    ]}
    submissionText="完成后截图发到企微群打卡，助教实时点评你的「此刻」CRUD 接口！"
  />
);

// #18 终端：Postman 测试 API
const Slide18: React.FC = () => (
  <TerminalSlide
    title="Postman 测试 API"
    subtitle="用 curl 验证 POST 创建与 GET 查询，观察真实响应"
    commands={[
      {
        comment: '创建一条新帖子（POST）',
        cmd: 'curl -X POST http://localhost:8080/api/posts -H "Content-Type: application/json" -d \'{"title":"今天的此刻","content":"学会数据库","category":"daily"}\'',
        expected: '{"id":1,"title":"今天的此刻","content":"学会数据库","category":"daily"}',
      },
      {
        comment: '查询全部帖子（GET）',
        cmd: 'curl http://localhost:8080/api/posts',
        expected: '[{"id":1,"title":"今天的此刻","content":"学会数据库","category":"daily"}]',
      },
    ]}
    takeaway="能拿到带 id 的 JSON 响应，说明数据已真正落盘并可通过 API 读取。"
  />
);

// #19 知识检查
const Slide19: React.FC = () => (
  <QuizSlide
    title="Day 7 知识检查"
    subtitle="4 道题，确认你掌握了数据库价值、JPA 作用、四 CRUD 与 JpaRepository"
    questions={[
      {
        question: '相比内存存储，数据库最核心的价值是？',
        options: [
          '读写速度更快',
          '数据永久存储且支持并发与结构化查询',
          '占用内存更小',
          '完全替代文件系统',
        ],
        answer: 1,
        explanation: '数据库的核心价值是持久化、大容量、并发安全与结构化查询，而非速度。',
      },
      {
        question: 'JPA / ORM 的核心作用是？',
        options: [
          '替代 Spring 框架',
          '把 Java 对象映射到数据库表，免手写 SQL',
          '加速前端渲染',
          '管理 HTTP 请求路由',
        ],
        answer: 1,
        explanation: 'ORM 通过注解把类映射到表，调用 save()/findAll() 即自动生成对应 SQL。',
      },
      {
        question: 'CRUD 四个操作对应哪组 SQL/HTTP？',
        options: [
          'SELECT / INSERT / DELETE / UPDATE',
          'CREATE / READ / UPDATE / DELETE 对应 INSERT/SELECT/UPDATE/DELETE',
          'GET / POST / PUT / DELETE',
          '选项 B 与 C 都对（HTTP 动词也一一对应）',
        ],
        answer: 3,
        explanation: 'CRUD = Create/Read/Update/Delete，对应 SQL 的 INSERT/SELECT/UPDATE/DELETE，也对应 HTTP 的 POST/GET/PUT/DELETE。',
      },
      {
        question: '继承 JpaRepository<Post, Long> 后会自动获得？',
        options: [
          '只有 findAll() 一个方法',
          'save()、findById()、findAll()、deleteById() 等全套内置方法',
          '需要自己实现所有方法',
          '仅生成 Controller 层代码',
        ],
        answer: 1,
        explanation: 'JpaRepository 内置了常用 CRUD 方法，无需手写实现即可直接调用。',
      },
    ]}
  />
);

// #20 今日总结
const Slide20: React.FC = () => (
  <SummarySlide
    title="今日总结"
    subtitle="后端数据层打通，明天进入前后端联调"
    dayNumber={7}
    takeaways={[
      '数据库解决内存易失、容量、并发、查询四大持久化需求',
      'MySQL 用表/行/列/主键/外键五概念构建关系模型',
      'SQL 五大语句 INSERT/SELECT/UPDATE/DELETE/CREATE 覆盖全部 CRUD',
      'JPA 用 @Entity + JpaRepository 把对象映射到表，免写 SQL',
      'Controller/Service/Repository 三层 + 四端点 API 已就绪，明日前后端联调',
    ]}
    nextDayPreview="Day 8 — 需求拆解与前后端联调：axios + CORS 让「此刻」真正连通"
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

export const day07Deck: DayDeckRenderer = {
  meta: {
    day: 7,
    stageName: '第五阶段：初始后端',
    title: 'Day 7 — MySQL 安装配置 · 实体类 · 完整 CRUD',
    subtitle: '让数据永久保存，掌握数据库操作与 Spring Data JPA',
    duration: '90 分钟',
    target: '理解表与实体映射，用 AI 快速生成数据库 CRUD 完整后端链路',
    output: 'Post 实体 CRUD API (增删改查)，可通过浏览器或 Postman 测试',
    aiPractice: 'TRAE CN 对话 → "在 Spring Boot 3 中为 Post 实体生成完整的 CRUD REST API"',
    slides: [
      { id: 'd7-s1', title: 'MySQL + 完整 CRUD', subtitle: '让数据永久保存，掌握数据库操作与 Spring Data JPA', layout: 'cover', instructorNotes: '开场强调今日是从「内存」走向「磁盘」的关键一课，数据从此不再丢失。', keyTakeaway: '数据持久化 + 实体映射 + 增删改查 API，是今日三大主线。' },
      { id: 'd7-s2', title: 'Day 7 学习路线图', subtitle: '数据库认知→MySQL→JPA→CRUD→测试 5 目标', layout: 'steps', instructorNotes: '按 5 目标顺序推进，每个目标对应后续若干张幻灯片。', keyTakeaway: '5 个目标串成后端数据链：认知→安装→映射→接口→验证。' },
      { id: 'd7-s3', title: '为什么需要数据库', subtitle: '内存易失/数据量/并发/查询 四需求', layout: 'concept', instructorNotes: '用「重启即失」痛点切入，引出持久化必要性。', keyTakeaway: '数据库 = 永久存储 + 大容量 + 并发安全 + 结构化查询。' },
      { id: 'd7-s4', title: '内存 vs 持久化对比', subtitle: '重启即失 vs 永久存储 / 容量小 vs 大 / 速度 vs 可靠', layout: 'comparison', instructorNotes: '强调速度与可靠的权衡，数据库不是为快而生。', keyTakeaway: '速度换可靠：内存追求快，数据库追求不丢、能查、能并发。' },
      { id: 'd7-s5', title: '关系型数据库 MySQL', subtitle: '表/行/列/主键/外键 五概念', layout: 'concept', instructorNotes: '结合 post 表实例讲解，避免抽象。', keyTakeaway: '表+主键+外键把现实世界映射成可查询的结构。' },
      { id: 'd7-s6', title: '表行列结构动效', subtitle: '表→行(记录)→列(字段) 展开', layout: 'concept', instructorNotes: '点击播放观察高亮层级变化，重点讲清行=记录、列=字段。', keyTakeaway: '表是行的集合，行是字段的集合，字段即列。' },
      { id: 'd7-s7', title: 'MySQL 安装验证', subtitle: 'mysql -u root -p + SHOW DATABASES;', layout: 'split_code', instructorNotes: '现场演示登录与建库，确认 ci_ke 数据库创建成功。', keyTakeaway: '进入 mysql> 并 SHOW DATABASES 看到列表即安装就绪。' },
      { id: 'd7-s8', title: 'SQL 基础语句', subtitle: 'CREATE/INSERT/SELECT/UPDATE/DELETE', layout: 'split_code', instructorNotes: '逐句解释 SQL 与后端 API 的对应关系。', keyTakeaway: 'SQL 的 CRUD 对应 INSERT/SELECT/UPDATE/DELETE，与 API 一一映射。' },
      { id: 'd7-s9', title: 'ORM 与 JPA 概念', subtitle: '对象关系映射/免写SQL/注解映射 三价值', layout: 'concept', instructorNotes: '强调「免写 SQL」是 JPA 最大红利，但底层仍是 SQL。', keyTakeaway: 'JPA 让你用面向对象方式操作数据库，SQL 由框架生成。' },
      { id: 'd7-s10', title: '@Entity 实体类', subtitle: '@Entity/@Table/@Id/@GeneratedValue', layout: 'split_code', instructorNotes: '逐行讲注解：@Entity 声明实体、@Table 指定表名、@Id 标主键。', keyTakeaway: '@Entity + @Table + @Id + @GeneratedValue 完成实体到表的映射。' },
      { id: 'd7-s11', title: 'JpaRepository 接口', subtitle: 'extends JpaRepository<Post,Long> + 自动方法', layout: 'split_code', instructorNotes: '重点：继承即拥有，无需写任何实现。', keyTakeaway: '继承 JpaRepository 后自动获得 save/findById/findAll/deleteById 等方法。' },
      { id: 'd7-s12', title: 'CRUD 流程动效', subtitle: '增→查→改→删 四步循环', layout: 'concept', instructorNotes: '播放动画，强调 CRUD 是用户驱动的循环而非一次性流程。', keyTakeaway: 'CRUD 是用户操作驱动的循环，每次交互对应一种操作。' },
      { id: 'd7-s13', title: 'Service 层实现', subtitle: 'PostService + save/findAll/delete 逻辑', layout: 'split_code', instructorNotes: '讲清 Service 是业务编排者，未来校验与异常处理都在此层。', keyTakeaway: 'Service 层封装业务逻辑，调用 Repository 完成增删改查。' },
      { id: 'd7-s14', title: 'Controller CRUD API', subtitle: 'POST/GET/PUT/DELETE 四端点', layout: 'split_code', instructorNotes: '强调 HTTP 动词与 CRUD 的一一对应关系。', keyTakeaway: 'HTTP 动词与 CRUD 对应：POST=增、GET=查、PUT=改、DELETE=删。' },
      { id: 'd7-s15', title: 'API 矩阵展示', subtitle: '四端点+路径+方法 矩阵卡', layout: 'concept', instructorNotes: '用矩阵卡帮助学员一眼记住四个端点的路径与方法。', keyTakeaway: 'RESTful 用同一资源路径 + 不同 HTTP 动词区分四种操作。' },
      { id: 'd7-s16', title: 'AI 生成 CRUD', subtitle: '角色:Java助理/任务:Post CRUD/栈:SpringDataJPA', layout: 'prompt_template', instructorNotes: '现场用 TRAE CN 跑这段提示词，生成三层代码。', keyTakeaway: '结构化提示词五段式让 AI 稳定产出三层代码。' },
      { id: 'd7-s17', title: '跑通帖子 CRUD', subtitle: '建库→配置→生成代码→启动→测试→打卡', layout: 'exercise', instructorNotes: '巡视学员是否完成建库与配置两步，卡住者优先辅导。', keyTakeaway: '能拿到带 id 的 JSON 响应即说明 CRUD 链路打通。' },
      { id: 'd7-s18', title: 'Postman 测试 API', subtitle: 'POST 创建 + GET 查询 响应示例', layout: 'split_code', instructorNotes: '演示 curl 或 Postman 发请求，重点看响应里的 id 字段。', keyTakeaway: '带 id 的 JSON 响应证明数据已真正落盘并可通过 API 读取。' },
      { id: 'd7-s19', title: 'Day 7 知识检查', subtitle: '数据库价值/JPA作用/四CRUD/JpaRepository 4 题', layout: 'concept', instructorNotes: '让学员抢答，错题重点复盘第 3 题（CRUD 多重对应关系）。', keyTakeaway: 'CRUD 同时对应 SQL 与 HTTP 动词，是后端最核心的四种操作。' },
      { id: 'd7-s20', title: '今日总结', subtitle: '后端数据层打通 + 明日前后端联调', layout: 'summary', instructorNotes: '预告 Day 8 用 axios 打通前后端，让「此刻」真正连通。', keyTakeaway: '后端数据层已就绪，明日进入前后端联调。' },
    ],
  },
  Render,
};
