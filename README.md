# 集训营标准化体系全景门户

> 软件学院 AI 创新应用社历届集训营的标准化物料全景门户。

## 项目简介

本项目是软件学院 AI 创新应用社面向历届集训营打造的**标准化物料全景门户**，旨在解决传统集训营物料（策划案/海报/课件）分散存储、格式不统一、复用困难等问题。

**核心价值主张**：
- **一期一目录** — 每个集训期数拥有独立的数据目录，数据与组件完全解耦
- **全量可导出** — 策划案一键导出 PDF、海报 4K 导出 PNG、课件支持交互式浏览
- **模块化扩展** — 幻灯片按天分拆、策划案按节组织，易维护易扩展
- **零配置新增期数** — 新增期数仅需建目录 + 写数据 + 注册一行，无需改动组件

## 核心特性

- 🎯 **多期统一管理** — 历届 / 规划中集训营在注册表中统一维护，首页自动渲染期数卡片
- 📄 **策划案一键导出 PDF** — 完整结构化策划案，支持分节、子节、表格、要点，浏览器打印导出
- 🎨 **4K 海报生成器** — 3 种主题（tech / academic / modern）可配置，支持 Logo、二维码、文案定制，基于 `html-to-image` 高质量 PNG 导出
- 📊 **14 天交互式课件** — 8 种幻灯片布局（封面/概念/代码对比/双栏对比/步骤/提示模板/练习/总结），支持 14 天按天切换浏览
- 🏗️ **模块化数据架构** — 每个期数独立目录，幻灯片按 `day-XX.ts` 单天分拆，避免大文件失控
- 🔌 **零侵入扩展** — 新增期数只需建目录 + 编写 4 份数据文件 + 在注册表 import 一行，组件零修改
- 🎨 **Tailwind CSS 4** — 原子化样式体系，打印样式优化，`no-print` 与 `print-reset` 工具类
- 📱 **响应式设计** — 桌面 / 平板 / 移动端自适应浏览

## 技术栈

### 核心框架
| 名称 | 版本 | 说明 |
|------|------|------|
| Next.js | 16.2.12 | App Router 架构，SSR + 客户端组件混合 |
| React | 19.2.4 | 最新版 React Hooks 体系 |
| React DOM | 19.2.4 | React DOM 渲染器 |
| TypeScript | 5 | 全量类型安全，严格模式 |

### UI & 样式
| 名称 | 版本 | 说明 |
|------|------|------|
| Tailwind CSS | 4 | 原子化 CSS 框架，PostCSS 集成 |
| @tailwindcss/postcss | 4 | Tailwind PostCSS 适配器 |
| lucide-react | 1.28.0 | 高质量 SVG 图标库 |

### 功能依赖
| 名称 | 版本 | 说明 |
|------|------|------|
| canvas-confetti | 1.9.4 | 海报导出成功的庆祝动效 |
| html-to-image | 1.11.13 | DOM 节点转 PNG 的 4K 海报导出 |
| @types/canvas-confetti | 1.9.0 | canvas-confetti 类型定义 |

### 开发工具
| 名称 | 版本 | 说明 |
|------|------|------|
| ESLint | 9 | 代码质量检查 |
| eslint-config-next | 16.2.12 | Next.js ESLint 规则集 |
| @types/node | 20 | Node.js 类型定义 |
| @types/react | 19 | React 类型定义 |
| @types/react-dom | 19 | React DOM 类型定义 |

## 快速开始

### 环境要求
- Node.js >= 20
- npm 随 Node.js 自带

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

启动后访问 [http://localhost:3000](http://localhost:3000) 查看门户首页。

### 生产构建

```bash
npm run build
npm run start
```

### Docker Compose 部署

项目通过 `output: "standalone"` 输出最小化运行产物，配合多阶段 Dockerfile 构建轻量生产镜像。

**前置要求**：已安装 [Docker](https://www.docker.com/) 与 [Docker Compose](https://docs.docker.com/compose/)。

```bash
# 构建并启动容器
docker compose up -d --build
```

- 访问 [http://localhost:3000](http://localhost:3000)
- 查看日志：`docker compose logs -f`
- 停止并移除容器：`docker compose down`
- 重启容器：`docker compose restart`

端口映射可在 `docker-compose.yml` 中调整（`"3000:3000"` 为「宿主机端口:容器端口」）。

## 功能模块详解

### 集训营门户首页

门户首页是所有集训期数的总入口，以卡片网格形式展示历届与规划中的集训营。

- **期数卡片**：包含标题、副标题、状态徽章、日期范围、标签、亮点列表、渐变色背景
- **状态体系**：`active`（全量开放）、`upcoming`（即将开启）、`archived`（已归档）、`planning`（规划中）
- **动态路由**：点击卡片自动跳转至 `/cohort/[cohortId]` 单期工作坊

> 📷 截图位：门户首页全景（后续补充）

### 策划案 PDF 导出

完整结构化的训练营策划案渲染与 PDF 导出。

**核心能力**：
- 分节（`PlanSection`）与子节（`subsection`）嵌套结构
- 支持纯文本、表格（`table.headers + rows`）、要点列表（`bullets`）三种内容形态
- 内置 `no-print` 工具类隐藏操作按钮，`print-reset` 重置打印样式

**导出操作步骤**：
1. 进入单期工作坊 → 切换至「策划案」标签
2. 预览策划案内容确认无误
3. 点击右上角「导出 PDF」按钮
4. 在浏览器打印对话框中选择「另存为 PDF」即可

> 📷 截图位：策划案预览界面（后续补充）

### 宣传海报 PNG 生成

高清宣发海报预览与 4K PNG 导出。

**核心能力**：
- 3 种主题：`tech`（科技风深色渐变）、`academic`（学术风浅色）、`modern`（现代风撞色）
- 双 Logo 展示（学院 + 社团），支持草图风格 watermark
- 可配置二维码、头像、联系方式、项目亮点、项目案例展示
- `html-to-image` 实现 DOM → 4K PNG，导出成功触发 canvas-confetti 庆祝动效

**导出操作步骤**：
1. 进入单期工作坊 → 切换至「宣传海报」标签
2. 在配置面板中选择主题与 Logo 样式
3. 预览海报效果
4. 点击「导出 PNG (4K)」按钮，浏览器自动下载海报文件

> 📷 截图位：海报生成器界面（后续补充）

### 课程幻灯片浏览

14 天交互式课程幻灯片浏览与导航。

**核心能力**：
- 8 种布局枚举 `SlideLayout`：`cover` / `concept` / `split_code` / `comparison` / `steps` / `prompt_template` / `exercise` / `summary`
- 14 天按天切换，每天幻灯片独立导航
- 每天包含：阶段名、标题、副标题、时长、目标、产出、AI 练习点
- 讲师备注（`instructorNotes`）与核心要点（`keyTakeaway`）辅助教学

**浏览操作**：
1. 进入单期工作坊 → 切换至「课件库」标签
2. 顶部「Day 01 ~ Day 14」切换天数
3. 幻灯片内左右箭头或键盘方向键翻页

> 📷 截图位：幻灯片浏览界面（后续补充）

## 项目架构

### 目录结构

```
training-camp/
├── public/                          # 静态资源
│   ├── school-logo.svg             # 软件学院 Logo（彩色）
│   ├── school-sketch.svg           # 软件学院 Logo（草图风）
│   ├── club-logo.svg               # AI 社 Logo（彩色）
│   └── club-sketch.svg             # AI 社 Logo（草图风）
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx              # 全局布局（全局样式 + 字体）
│   │   ├── page.tsx                # 门户首页（含双 Logo Header/Footer）
│   │   ├── not-found.tsx           # 404 页面
│   │   ├── globals.css             # Tailwind 指令 + 打印样式
│   │   └── cohort/[cohortId]/       # 单期工作坊动态路由
│   │       └── page.tsx            # 单期工作坊页（路由参数 cohortId）
│   ├── components/                  # 功能组件（7 个）
│   │   ├── Navbar.tsx              # 全局导航栏 + 面包屑
│   │   ├── BootcampPortal.tsx      # 门户首页期数卡片网格
│   │   ├── CohortWorkshop.tsx      # 单期工作坊容器（标签切换）
│   │   ├── MaterialOverview.tsx    # 单期物料总览（三大物料卡片）
│   │   ├── PlanDocumentView.tsx    # 策划案视图 + PDF 导出
│   │   ├── PosterGeneratorView.tsx # 海报生成器 + 4K PNG 导出
│   │   └── SlideDeckView.tsx       # 幻灯片视图 + 天数/页码导航
│   ├── data/
│   │   ├── cohortsRegistry.ts      # ⭐ 期数统一注册表（所有期数在此注册）
│   │   └── cohorts/
│   │       ├── 2026-summer/        # 2026 暑期营（active）
│   │       │   ├── index.ts        # 期数聚合出口（meta + planData + slidesData + posterConfig）
│   │       │   ├── planData.ts     # 策划案分节内容
│   │       │   ├── posterConfig.ts # 海报主题与文案配置
│   │       │   ├── slidesData.ts   # 14 天幻灯片总聚合
│   │       │   └── slides/         # 按天分拆的幻灯片（14 个文件）
│   │       │       ├── day-01.ts ~ day-14.ts
│   │       └── 2026-winter/        # 2026 寒假营（planning，空壳）
│   │           └── index.ts
│   └── types.ts                    # 全局 TypeScript 类型（8 个核心接口）
├── next.config.ts                  # Next.js 配置（output: standalone）
├── postcss.config.mjs              # PostCSS + Tailwind 4 配置
├── eslint.config.mjs               # ESLint 9 配置
├── tsconfig.json                   # TypeScript 配置（严格模式）
├── Dockerfile                      # 多阶段 Docker 构建
├── docker-compose.yml              # Docker Compose 编排
├── .dockerignore                   # Docker 构建忽略清单
└── package.json
```

### 数据注册机制

项目的核心数据流转采用「**注册表驱动**」模式，所有组件从注册表读取数据，实现零侵入扩展。

**数据流路径**：

```
src/data/cohorts/[id]/index.ts
        ↓ （import）
src/data/cohortsRegistry.ts → COHORTS_REGISTRY: Record<string, CohortMaterials>
        ↓ （Object.values）
        COHORTS_LIST: BootcampCohort[] → 传给 BootcampPortal 组件（首页）
        ↓ （getCohortMaterials(id)）
        CohortMaterials → 传给 CohortWorkshop 组件（单期页）
```

**关键约束**：
- 所有期数必须在 `cohortsRegistry.ts` 中显式注册，否则路由不可达
- 期数 ID（`cohortId`）必须与目录名、注册表 key 三者一致，例如 `2026-summer`
- 单期动态路由页 `/cohort/[cohortId]/page.tsx` 通过 `getCohortMaterials()` 拉取数据

### 新增期数标准流程（SOP）

以下 5 步即可完成一个全新集训期数的接入，**无需修改任何组件代码**。

**Step 1：创建期数目录**
```bash
# 目录命名规范：[年份]-[季节]，季节英文小写
mkdir src/data/cohorts/2027-spring
```

**Step 2：创建 4 个核心数据文件**
```
src/data/cohorts/2027-spring/
├── index.ts          # ⭐ 聚合出口（必须）
├── planData.ts       # 策划案数据（可选，缺失则物料不显示）
├── posterConfig.ts   # 海报配置（可选，缺失则物料不显示）
└── slidesData.ts     # 幻灯片总聚合（可选，缺失则物料不显示）
```

`index.ts` 模板（参考 `2026-summer/index.ts`）：
```typescript
import { CohortMaterials } from '../../../types';
import { YOUR_PLAN_DATA } from './planData';
import { YOUR_SLIDES_DATA } from './slidesData';
import { YOUR_POSTER_CONFIG } from './posterConfig';

export const cohort_2027_spring: CohortMaterials = {
  meta: {
    id: '2027-spring',        // 与目录名、注册 key 严格一致
    year: '2027',
    season: '春季',            // '暑期' | '寒假' | '秋季' | '春季'
    title: '标题',
    subtitle: '副标题',
    status: 'planning',        // 'active' | 'upcoming' | 'archived' | 'planning'
    statusText: '状态文案',
    dateRange: '2027.03.01 - 2027.03.14',
    materialsCount: 3,
    tags: ['标签1', '标签2'],
    description: '描述文本',
    highlights: ['亮点1', '亮点2', '亮点3'],
    bgGradient: 'from-indigo-600 via-indigo-700 to-violet-800',
    accentColor: 'indigo',
    target: '目标人群',
  },
  planData: YOUR_PLAN_DATA,
  slidesData: YOUR_SLIDES_DATA,
  posterConfig: YOUR_POSTER_CONFIG,
};
```

**Step 3：可选 — 按天分拆幻灯片**
如需多天课件，创建 `slides/` 目录，每天一个文件，在 `slidesData.ts` 中聚合：
```
src/data/cohorts/2027-spring/
└── slides/
    ├── day-01.ts
    ├── day-02.ts
    └── ...
```

**Step 4：注册表注册（关键一步）**
编辑 `src/data/cohortsRegistry.ts`，增加两行：
```typescript
import { cohort_2027_spring } from './cohorts/2027-spring';  // 顶部新增 import

export const COHORTS_REGISTRY: Record<string, CohortMaterials> = {
  '2026-summer': cohort_2026_summer,
  '2026-winter': cohort_2026_winter,
  '2027-spring': cohort_2027_spring,  // ⭐ 新增一行
};
```

**Step 5：完成验证**
- 门户首页 `http://localhost:3000` 应出现新期数卡片
- 点击卡片可进入 `/cohort/2027-spring` 工作坊页
- 三大物料标签根据数据文件存在与否自动显示/隐藏

## 期数数据手册

本章从 `src/types.ts` 提取所有核心数据结构的字段说明，用于指导期数数据编写。

### 期数元数据字段说明（BootcampCohort）

共 16 个字段，定义每期集训营的门户展示信息。

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | `string` | ✅ | 期数唯一 ID，与目录名 + 注册表 key 严格一致 |
| `year` | `string` | ✅ | 年份（如 `"2026"`） |
| `season` | `'暑期'\|'寒假'\|'秋季'\|'春季'` | ✅ | 季节枚举 |
| `title` | `string` | ✅ | 期数完整标题（门户卡片主标题） |
| `subtitle` | `string` | ✅ | 期数副标题，一句话定位 |
| `status` | `'active'\|'upcoming'\|'archived'\|'planning'` | ✅ | 期数状态枚举，决定徽章颜色 |
| `statusText` | `string` | ✅ | 状态补充文案（如「资料全量开放 · 16 项交付物」） |
| `dateRange` | `string` | ✅ | 日期范围展示文本 |
| `materialsCount` | `number` | ✅ | 交付物数量统计 |
| `tags` | `string[]` | ✅ | 标签数组，展示在卡片上 |
| `description` | `string` | ✅ | 期数长描述 |
| `highlights` | `string[]` | ✅ | 亮点列表（3 条建议） |
| `bgGradient` | `string` | ✅ | 卡片背景渐变，Tailwind 语法（如 `from-indigo-600 via-indigo-700 to-violet-800`） |
| `accentColor` | `string` | ✅ | 主色调标识（如 `indigo` / `emerald` / `rose`） |
| `target` | `string` | ❌ | 目标人群（可选） |

### 策划案数据结构（PlanSection[]）

策划案由若干 `PlanSection` 分节组成，每节支持子节嵌套。

**PlanSection 字段**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | `string` | ✅ | 分节唯一 ID（锚点用） |
| `title` | `string` | ✅ | 分节大标题 |
| `icon` | `string` | ✅ | Lucide 图标名，与 `IconName` 映射 |
| `content` | `string` | ✅ | 分节正文（Markdown 纯文本，段落间换行分隔） |
| `subsections` | `Subsection[]` | ❌ | 子节数组 |

**Subsection 子节字段**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | `string` | ✅ | 子节标题 |
| `content` | `string` | ✅ | 子节正文 |
| `table` | `{headers: string[], rows: string[][]}` | ❌ | 表格数据（表头 + 二维数组行） |
| `bullets` | `string[]` | ❌ | 要点列表 |

**优先级**：同一子节中 `table` 优先级最高，其次 `bullets`，最后纯文本 `content`。三者可组合。

### 海报配置字段（PosterConfig）

共 20 个字段，控制海报的主题、视觉元素与所有文案。

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `theme` | `'tech'\|'academic'\|'modern'` | ✅ | 主题枚举 |
| `logoStyle` | `'color'\|'sketch'\|'hybrid'` | ❌ | Logo 展示风格 |
| `showSketchWatermark` | `boolean` | ❌ | 是否显示草图风背景水印 |
| `customQrUrl` | `string` | ❌ | 二维码跳转 URL |
| `customAvatarUrl` | `string` | ❌ | 联系人头像 URL |
| `qrLabel` | `string` | ❌ | 二维码下方标签文案 |
| `title` | `string` | ✅ | 海报主标题 |
| `subtitle` | `string` | ✅ | 海报副标题 |
| `slogan` | `string` | ✅ | Slogan 大标语 |
| `targetAudience` | `string` | ✅ | 招募对象 |
| `timeLocation` | `string` | ✅ | 时间地点 |
| `contactName` | `string` | ✅ | 联系人姓名 |
| `contactTitle` | `string` | ❌ | 联系人职位/头衔 |
| `contactPhone` | `string` | ✅ | 联系电话 |
| `organizer` | `string` | ✅ | 主办方名称 |
| `highlights` | `{title: string, desc: string}[]` | ✅ | 亮点数组（建议 3-4 项） |
| `projects` | `{name: string, tag: string, desc: string}[]` | ✅ | 项目案例展示（建议 3 项） |

### 幻灯片数据格式

幻灯片体系分为两层：**DayCourseDeck（天级别）** 和 **SlideContent（单张幻灯片）**。

**DayCourseDeck 天级别字段**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `day` | `number` | ✅ | 天数序号（1-14） |
| `stageName` | `string` | ✅ | 所属阶段名（如「入门筑基阶段」） |
| `title` | `string` | ✅ | 当天课程标题 |
| `subtitle` | `string` | ✅ | 当天副标题 |
| `duration` | `string` | ✅ | 时长（如「3 小时」） |
| `target` | `string` | ✅ | 当天目标 |
| `output` | `string` | ✅ | 当天产出物 |
| `aiPractice` | `string` | ✅ | AI 练习重点 |
| `slides` | `SlideContent[]` | ✅ | 当天所有幻灯片数组 |

**SlideContent 单张幻灯片字段**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | `string` | ✅ | 幻灯片唯一 ID |
| `title` | `string` | ✅ | 幻灯片标题 |
| `subtitle` | `string` | ❌ | 副标题 |
| `layout` | `SlideLayout` | ✅ | 布局枚举（8 种，见下表） |
| `bullets` | `string[]` | ❌ | 要点列表（concept / exercise / summary 布局） |
| `codeBlock` | `{language, code, filename?}` | ❌ | 代码块（split_code 布局） |
| `comparison` | `{leftTitle, leftItems, rightTitle, rightItems}` | ❌ | 双栏对比（comparison 布局） |
| `steps` | `{stepNumber, title, desc}[]` | ❌ | 步骤列表（steps 布局） |
| `promptBox` | `{role, task, stack, template}` | ❌ | 提示词模板框（prompt_template 布局） |
| `instructorNotes` | `string` | ❌ | 讲师备注 |
| `keyTakeaway` | `string` | ❌ | 核心要点 |

**8 种 SlideLayout 布局与对应字段**：

| 布局值 | 名称 | 必填字段 | 常用可选字段 |
|--------|------|----------|-------------|
| `cover` | 封面页 | 标题 + 副标题 | — |
| `concept` | 概念讲解 | 标题 + bullets | keyTakeaway |
| `split_code` | 代码讲解 | 标题 + codeBlock | subtitle |
| `comparison` | 双栏对比 | 标题 + comparison | — |
| `steps` | 步骤流程 | 标题 + steps | — |
| `prompt_template` | 提示词模板 | 标题 + promptBox | — |
| `exercise` | 练习页 | 标题 + bullets | instructorNotes |
| `summary` | 总结页 | 标题 + bullets | keyTakeaway |

## 脚本命令

所有命令定义于 `package.json`。

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动本地开发服务器（Next.js dev，含 HMR） |
| `npm run build` | 生产构建，生成 `.next/` 产物 |
| `npm run start` | 启动构建后的生产服务器（需先 `build`） |
| `npm run lint` | ESLint 全量检查 |

## 许可证

本项目许可证详见 [LICENSE](LICENSE) 文件。

---

**软件学院 AI 创新应用社 · 集训营标准化体系全景门户**
