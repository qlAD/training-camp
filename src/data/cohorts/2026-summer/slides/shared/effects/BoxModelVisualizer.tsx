import React from 'react';
import { Box } from 'lucide-react';

interface BoxSides {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface BoxModelContent {
  width?: number;
  height?: number;
  label?: string;
}

interface BoxBorder {
  width: number;
  color?: string;
}

interface BoxModelVisualizerProps {
  content?: BoxModelContent;
  padding?: BoxSides;
  border?: BoxBorder;
  margin?: BoxSides;
  title?: string;
}

const num = (v: number | undefined, fallback = 0) => (typeof v === 'number' ? v : fallback);

// 盒模型可视化：margin → border → padding → content 嵌套矩形
export const BoxModelVisualizer: React.FC<BoxModelVisualizerProps> = ({
  content,
  padding,
  border,
  margin,
  title,
}) => {
  const pad = padding ?? { top: 0, right: 0, bottom: 0, left: 0 };
  const mar = margin ?? { top: 0, right: 0, bottom: 0, left: 0 };
  const bdw = num(border?.width, 0);
  const cw = num(content?.width, 120);
  const ch = num(content?.height, 64);

  const SideLabel = ({ value, side }: { value: number; side: string }) =>
    value > 0 ? (
      <span className="text-[10px] font-mono font-bold text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
        {side}: {value}px
      </span>
    ) : null;

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center space-x-2">
          <Box className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      {/* Margin layer */}
      <div
        className="rounded-xl bg-rose-500/10 border border-dashed border-rose-500/40 p-3"
        style={{ paddingTop: num(mar.top, 16), paddingRight: num(mar.right, 16), paddingBottom: num(mar.bottom, 16), paddingLeft: num(mar.left, 16) }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider">Margin</span>
          <div className="flex flex-wrap items-center gap-1">
            <SideLabel value={mar.top} side="t" />
            <SideLabel value={mar.right} side="r" />
            <SideLabel value={mar.bottom} side="b" />
            <SideLabel value={mar.left} side="l" />
          </div>
        </div>

        {/* Border layer */}
        <div
          className="rounded-lg bg-slate-900/40"
          style={{ borderWidth: bdw || 4, borderStyle: 'solid', borderColor: border?.color || '#818cf8', paddingTop: 12, paddingRight: 12, paddingBottom: 12, paddingLeft: 12 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider">Border</span>
            {bdw > 0 && (
              <span className="text-[10px] font-mono font-bold text-indigo-300 px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                width: {bdw}px
              </span>
            )}
          </div>

          {/* Padding layer */}
          <div
            className="rounded-md bg-amber-500/10 border border-dashed border-amber-500/30"
            style={{ paddingTop: num(pad.top, 16), paddingRight: num(pad.right, 16), paddingBottom: num(pad.bottom, 16), paddingLeft: num(pad.left, 16) }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">Padding</span>
              <div className="flex flex-wrap items-center gap-1">
                <SideLabel value={pad.top} side="t" />
                <SideLabel value={pad.right} side="r" />
                <SideLabel value={pad.bottom} side="b" />
                <SideLabel value={pad.left} side="l" />
              </div>
            </div>

            {/* Content */}
            <div
              className="rounded bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-center mx-auto"
              style={{ width: cw, height: ch, minWidth: cw, minHeight: ch }}
            >
              <div>
                <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Content</div>
                <div className="text-[10px] font-mono text-emerald-200/80 mt-0.5">
                  {content?.label || `${cw} × ${ch}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
