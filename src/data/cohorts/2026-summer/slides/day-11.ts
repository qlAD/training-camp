import { DayCourseDeck } from '../../../../types';

export const day11Deck: DayCourseDeck = {
    day: 11,
    stageName: '第七阶段：部署运维',
    title: 'Day 11 — 功能完善 · Bug 修复 · 项目 Checklist 检查',
    subtitle: '全员代码磨合与体验收拢，打造生产级稳定应用',
    duration: '90 分钟',
    target: '对照上线 Checklist 检查边界条件，修复残留 Bug 并完善评论区功能',
    output: '「此刻」应用功能全量冻结，完成测试与 README 文档初稿',
    aiPractice: 'AI 审查对话 → "请帮我审查这段代码，是否有潜在内存泄漏或空指针问题？"',
    slides: [
      {
        id: 'd11-s1',
        title: '上线前 Checklist 检查清单',
        subtitle: '从开发态迈向生产态',
        layout: 'concept',
        bullets: [
          '✅ 表单校验: 空标题、过长文本、未选择分类的提示',
          '✅ 异常捕获: 全局 GlobalExceptionHandler 捕获 500 报错',
          '✅ 用户体验: 数据加载时的 Loading 骨架屏或转圈提示',
          '✅ 边界处理: 评论区无数据时的空状态占位图',
        ],
      },
      {
        id: 'd11-s2',
        title: '全局异常处理统一格式代码',
        subtitle: '优雅防护后端崩溃',
        layout: 'split_code',
        codeBlock: {
          language: 'java',
          filename: 'GlobalExceptionHandler.java',
          code: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleException(Exception e) {
        return ResponseEntity.status(500).body(Map.of(
            "code", 500,
            "message", e.getMessage() != null ? e.getMessage() : "服务器内部错误",
            "timestamp", System.currentTimeMillis()
        ));
    }
}`,
        },
      },
      {
        id: 'd11-s3',
        title: 'Day 11 任务：项目终稿收尾',
        subtitle: '解决掉最后一个 Bug',
        layout: 'exercise',
        bullets: [
          '1. 在企微群获取 Checklist 文档，逐条打勾测试',
          '2. 完成评论列表与发表评论功能',
          '3. 撰写项目 README.md 描述技术栈与创新点',
          '4. 打卡提交项目最终测试通过截图',
        ],
      },
    ],
};
