import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ControlStatusBarProps {
  currentSlideIndex: number;
  slidesLength: number;
  onPrev: () => void;
  onNext: () => void;
  autoPlay?: boolean;
  onTogglePlay?: () => void;
}

// 底部控制状态栏：毛玻璃样式，上一页/下一页 + 页码 + 视频式进度条 + 连播控制 + 快捷键提示
export const ControlStatusBar: React.FC<ControlStatusBarProps> = ({
  currentSlideIndex,
  slidesLength,
  onPrev,
  onNext,
  autoPlay = false,
  onTogglePlay,
}) => {
  const ctrlBtn =
    'p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-30 disabled:hover:bg-white/10';

  return (
    <div className="absolute bottom-0 left-0 right-0 px-5 py-2.5 shrink-0 flex items-center justify-between gap-4 text-xs text-slate-300 z-20 pointer-events-none">
      {/* 外层完全透明，内层交互节点重开 pointer-events */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <button onClick={onPrev} disabled={currentSlideIndex === 0} className={ctrlBtn} title="上一页">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlideIndex === slidesLength - 1}
          className={`${ctrlBtn} text-white`}
          title="下一页"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <span className="ml-1 font-mono text-slate-400">
          {currentSlideIndex + 1} <span className="text-slate-600">/</span> {slidesLength}
        </span>
      </div>

      {/* 镜头分段进度条：已完成镜头渐变点亮，当前镜头发光游标（视频章节式） */}
      <div className="hidden md:flex flex-1 items-center">
        <div className="group relative flex-1 h-2 flex items-center">
          {/* 分段轨道：每镜头一节，已完成渐变点亮，未开始暗色 */}
          <div className="absolute inset-x-0 flex items-center gap-[3px]">
            {Array.from({ length: slidesLength }).map((_, i) => (
              <div
                key={i}
                className={`relative h-[3px] flex-1 rounded-full transition-all duration-500 group-hover:h-1 ${
                  i < currentSlideIndex
                    ? 'bg-indigo-400'
                    : i === currentSlideIndex
                    ? 'bg-white/80'
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>
          {/* 当前镜头发光游标 */}
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(99,102,241,0.6)] ring-4 ring-indigo-400/25 transition-all duration-500"
            style={{
              left: `${slidesLength > 1 ? (currentSlideIndex / (slidesLength - 1)) * 100 : 0}%`,
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {onTogglePlay && (
          <button
            onClick={onTogglePlay}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-bold transition-all ${
              autoPlay
                ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
            title="自动连播 (P)"
          >
            {autoPlay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span>{autoPlay ? '暂停' : '连播'}</span>
          </button>
        )}
        <span className="hidden lg:inline text-[11px] text-slate-500">
          ⬅️➡️ 翻页 | F 全屏 | W 网页全屏 | B 黑屏 | O 缩略图 | P 连播
        </span>
      </div>
    </div>
  );
};
