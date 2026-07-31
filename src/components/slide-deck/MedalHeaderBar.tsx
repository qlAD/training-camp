import { Clock } from 'lucide-react';

interface MedalHeaderBarProps {
  selectedDay: number;
  currentSlideIndex: number;
  slidesLength: number;
  stageName: string;
  output: string;
}

// 顶部勋章标题栏：学院/社团 logo 徽章 + Day·Slide 编号 + 阶段名 + 课时产出
export const MedalHeaderBar: React.FC<MedalHeaderBarProps> = ({
  selectedDay,
  currentSlideIndex,
  slidesLength,
  stageName,
  output,
}) => (
  <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-800/80 relative z-10">
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-xl shrink-0 shadow-xs">
        <img src="/school-logo.svg" alt="软件学院" className="h-5 w-auto object-contain" />
        <div className="h-3.5 w-px bg-slate-600" />
        <img src="/club-logo.svg" alt="AI创新应用社" className="h-5 w-auto object-contain" />
      </div>
      <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
        Day {selectedDay} · Slide {currentSlideIndex + 1}/{slidesLength}
      </span>
      <span className="text-xs text-slate-400 font-medium hidden sm:inline">{stageName}</span>
    </div>

    <div className="flex items-center space-x-2 text-xs text-slate-400">
      <Clock className="h-3.5 w-3.5" />
      <span>课时产出: {output}</span>
    </div>
  </div>
);
