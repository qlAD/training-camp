/**
 * 方案 PDF 导出封装（共享工具函数，shell 层统一调用）。
 *
 * 方案：直接调用浏览器 window.print()（配合 Tailwind 的 @media print 样式 / print-reset class），
 * 这样 PDF 内的 CSS 与页面渲染 100% 一致，排版精确，无需依赖外部 html2pdf 库。
 */
export function exportPlanPdf({
  onBeforePrint,
  onAfterPrint,
  fallbackMessage,
}: {
  /** 打印前回调（例如设置某些 DOM 元素可见/不可见 / 滚动到顶） */
  onBeforePrint?: () => void;
  /** 打印对话框关闭后回调（恢复状态等） */
  onAfterPrint?: () => void;
  /** 浏览器拦截自动打印时的提示文案 */
  fallbackMessage?: string;
} = {}): void {
  try {
    if (typeof onBeforePrint === 'function') onBeforePrint();
    window.focus();
    window.print();
    if (typeof onAfterPrint === 'function') {
      // 大多数浏览器 print() 是同步的（对话框关闭后才继续执行），这里直接回调即可。
      onAfterPrint();
    }
  } catch (err) {
    const msg =
      fallbackMessage ??
      '当前浏览器拦截了自动打印。请直接按下 Ctrl + P (Mac: Cmd + P) 保存为 PDF！';
    if (typeof window !== 'undefined') {
      try {
        // eslint-disable-next-line no-alert
        window.alert(msg);
      } catch {
        // ignore
      }
    }
  }
}
