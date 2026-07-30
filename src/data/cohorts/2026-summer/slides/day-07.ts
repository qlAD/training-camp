import { DayCourseDeck } from '../../../../types';

export const day07Deck: DayCourseDeck = {
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
};
