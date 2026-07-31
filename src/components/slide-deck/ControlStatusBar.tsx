import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlStatusBarProps {
  currentSlideIndex: number;
  slidesLength: number;
  onPrev: () => void;
  onNext: () => void;
}

// 底部控制状态栏：上一页/下一页 + 页码计数 + 快捷键提示
export const ControlStatusBar: React.FC<ControlStatusBarProps> = ({
  currentSlideIndex,
  slidesLength,
  onPrev,
  onNext,
}) => (
  <div className="p-4 shrink-0 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
    <div className="flex items-center space-x-2">
      <button
        onClick={onPrev}
        disabled={currentSlideIndex === 0}
        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white font-medium flex items-center space-x-1"
      >
        <ChevronLeft className="h-4 w-4" />
        <span>上一页</span>
      </button>

      <span className="text-slate-500">
        {currentSlideIndex + 1} / {slidesLength}
      </span>

      <button
        onClick={onNext}
        disabled={currentSlideIndex === slidesLength - 1}
        className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 text-white font-medium flex items-center space-x-1"
      >
        <span>下一页</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>

    <div className="hidden sm:flex items-center space-x-4 text-[11px] text-slate-500">
      <span>快捷键: ⬅️ ➡️ 翻页 | F 全屏 | B 黑屏 | O 缩略图</span>
    </div>
  </div>
);
