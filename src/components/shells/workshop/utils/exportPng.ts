import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import type { PosterConfig } from '@/lib';

/**
 * 海报 PNG 导出封装（共享工具函数，shell 层统一调用）。
 *
 * @param canvasRef 海报画布最外层 div 的 ref（由期数 posterLayoutRenderer 按约定挂载）
 * @param meta 期数 meta 信息（用于生成导出文件名：<year>-<season>_宣传海报_<theme>.png）
 * @param config 海报配置（用于取 theme 字段生成文件名）
 * @param setIsExporting 可选：导出前后回调（shell 层用它控制按钮 loading 态）
 */
export async function exportPosterPng({
  canvasRef,
  meta,
  config,
  setIsExporting,
  pixelRatio = 2,
  preExportDelayMs = 120,
}: {
  canvasRef: { current: HTMLElement | null };
  meta: { year: string; season: string };
  config: Pick<PosterConfig, 'theme'> & { theme: PosterConfig['theme'] };
  setIsExporting?: (v: boolean) => void;
  pixelRatio?: number;
  preExportDelayMs?: number;
}): Promise<string | null> {
  if (!canvasRef.current) return null;
  try {
    if (setIsExporting) setIsExporting(true);
    // 等 React 把「导出中」的状态渲染完成（隐藏 preview 标签等）
    await new Promise((resolve) => setTimeout(resolve, preExportDelayMs));

    const dataUrl = await toPng(canvasRef.current, {
      cacheBust: true,
      pixelRatio,
    });

    // 触发浏览器下载
    const link = document.createElement('a');
    link.download = `${meta.year}-${meta.season}_宣传海报_${config.theme}.png`;
    link.href = dataUrl;
    link.click();

    // 撒花庆祝 🎉
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    return dataUrl;
  } catch (err) {
    console.error('[exportPosterPng] Failed to generate poster PNG:', err);
    if (typeof window !== 'undefined') {
      try {
        window.alert('海报导出失败，请重试或截屏保存。');
      } catch {
        // ignore
      }
    }
    return null;
  } finally {
    if (setIsExporting) setIsExporting(false);
  }
}
