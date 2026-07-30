export interface SiteConfig {
  orgName: string;
  orgFullName: string;
  portalTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  headerSubText: string;
  footerText: string;
  studentCount: number;
}

export const SITE_CONFIG: SiteConfig = {
  orgName: 'AI 创新应用社',
  orgFullName: '软件学院 AI 创新应用社',
  portalTitle: '集训营标准化体系全景门户',
  heroTitle: 'AI 创新应用社',
  heroSubtitle: '集训营标准化体系全景门户',
  heroDescription:
    '软件学院集训营标准化体系一站式资源中心。聚合历届与规划期数，每期统一配套策划案 (PDF)、宣传海报 (PNG) 及全套 16:9 交互式课时讲义 Slide。',
  headerSubText: '历届与规划集训期数 · 物料全景库',
  footerText: '软件学院 AI 创新应用社 · 历届集训',
  studentCount: 120,
};
