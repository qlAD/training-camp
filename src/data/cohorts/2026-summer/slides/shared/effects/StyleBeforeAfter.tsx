import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BeforeAfterSide {
  label?: string;
  render: React.ReactNode;
}

interface StyleBeforeAfterProps {
  before: BeforeAfterSide;
  after: BeforeAfterSide;
  title?: string;
}

// 样式前后对比：左灰右彩色，中间分隔条
export const StyleBeforeAfter: React.FC<StyleBeforeAfterProps> = ({ before, after, title }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes style-beforeafter-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
          50% { box-shadow: 0 0 20px 2px rgba(99,102,241,0.25); }
        }
        @keyframes style-beforeafter-divider {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Sparkles className="h-4 w-4 text-violet-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch gap-0 rounded-2xl overflow-hidden border border-slate-700/80">
        {/* Before */}
        <div className="p-5 bg-slate-900/80 bg-gradient-to-br from-slate-900 to-slate-950 min-h-[200px] flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700 text-slate-400 font-bold uppercase tracking-wider">
              {before.label || 'Before'}
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center text-slate-500 grayscale opacity-80">
            {before.render}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex items-center justify-center bg-slate-950 px-2 relative">
          <div
            className="w-px h-full bg-gradient-to-b from-transparent via-indigo-500/60 to-transparent origin-top"
            style={{ animation: 'style-beforeafter-divider 0.5s ease-out' }}
          />
          <div
            className="absolute h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center"
            style={{ animation: 'style-beforeafter-glow 2.4s ease-in-out infinite' }}
          >
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* After */}
        <div className="p-5 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 min-h-[200px] flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-200 font-bold uppercase tracking-wider">
              {after.label || 'After'}
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {after.render}
          </div>
        </div>
      </div>
    </div>
  );
};
