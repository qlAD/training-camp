# 集训营标准化体系全景门户

软件学院 AI 创新应用社集训营标准化体系全景门户。聚合历届与未来规划集训期数，每期配套完整训练营策划案（支持 PDF 导出）、宣传海报（支持 PNG 导出）及课时教学演示幻灯片（支持全屏教学模式）。

## 项目结构

```
src/
├── components/                  # 视图组件（纯 UI，数据通过 props 注入）
│   ├── BootcampPortal.tsx       # 门户首页：期数卡片列表与轮播
│   ├── MaterialOverview.tsx     # 单期物料工坊总览
│   ├── Navbar.tsx
│   ├── PlanDocumentView.tsx     # 策划案视图（支持 PDF 导出）
│   ├── PosterGeneratorView.tsx  # 海报生成器（支持 PNG 导出）
│   └── SlideDeckView.tsx        # 幻灯片演示（支持全屏教学）
├── data/
│   ├── cohorts/                 # 按期数组织的数据文件夹
│   │   ├── 2026-summer/         # 2026 暑期全栈 AI 交付集训营（完整物料）
│   │   │   ├── slides/          # 14 课时幻灯片，按 day 拆分
│   │   │   ├── planData.ts
│   │   │   ├── posterConfig.ts
│   │   │   └── index.ts         # 聚合导出该期全部物料
│   │   ├── 2026-winter/         # 2026 寒假 AI Agent 专修营（占位）
│   │   ├── 2025-summer/         # 2025 暑期 Web 全栈工程基础营（占位）
│   │   └── 2027-winter/         # 2027 寒假具身智能前沿营（占位）
│   └── cohortsRegistry.ts       # 统一注册表（唯一注册点）
├── types.ts
└── App.tsx                      # 数据分发：按 activeCohortId 查注册表后注入视图
```

## 新增一期集训

1. 复制 `src/data/cohorts/2026-summer/` 文件夹，重命名为新的期数 ID（如 `2027-summer`）
2. 修改其中的策划案、幻灯片、海报配置数据
3. 在 `src/data/cohortsRegistry.ts` 增加一行 import 与注册

```ts
import { cohort_2027_summer } from './cohorts/2027-summer';

export const COHORTS_REGISTRY: Record<string, CohortMaterials> = {
  // ...
  '2027-summer': cohort_2027_summer,
};
```

无需改动任何组件代码。

## 本地运行

**前置条件：** Node.js

1. 安装依赖：
   `npm install`
2. 启动开发服务器：
   `npm run dev`
3. 构建生产版本：
   `npm run build`
