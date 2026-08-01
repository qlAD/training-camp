import { Clock } from 'lucide-react';

interface MedalHeaderBarProps {
  selectedDay: number;
  currentSlideIndex: number;
  slidesLength: number;
  stageName: string;
  output: string;
}

// 顶部勋章标题栏：学院/社团 logo 徽章 + Day·Slide 编号 + 阶段名 + 课时产出（毛玻璃，融入舞台统一背景）
export const MedalHeaderBar: React.FC<MedalHeaderBarProps> = ({
  selectedDay,
  currentSlideIndex,
  slidesLength,
  stageName,
  output,
}) => (
  <div className="px-6 sm:px-8 py-3.5 shrink-0 border-b border-white/10 flex items-center justify-between relative z-10">
    <div className="flex items-center space-x-3 min-w-0">
      <div className="flex items-center space-x-2 bg-white/[0.07] border border-white/10 px-2.5 py-1 rounded-xl shrink-0 shadow-xs">
        <img src="/school-logo.svg" alt="软件学院" className="h-5 w-auto object-contain" />
        <div className="h-3.5 w-px bg-white/20" />
        <img src="/club-logo.svg" alt="AI创新应用社" className="h-5 w-auto object-contain" />
      </div>
      <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
        Day {selectedDay} · Slide {currentSlideIndex + 1}/{slidesLength}
      </span>
      <span className="text-xs text-slate-300 font-medium hidden sm:inline truncate">{stageName}</span>
    </div>

    <div className="flex items-center space-x-2 text-xs text-slate-400 shrink-0">
      <Clock className="h-3.5 w-3.5" />
      <span className="hidden md:inline">课时产出: {output}</span>
      <span className="md:hidden">{output}</span>
    </div>
  </div>
);
