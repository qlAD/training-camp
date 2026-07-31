import React from 'react';
import { CheckCircle2, Server, Database, ArrowRight } from 'lucide-react';

interface ConnectionNode {
  label: string;
  icon?: React.ReactNode;
}

interface ConnectionSuccessEffectProps {
  from: ConnectionNode;
  to: ConnectionNode;
  dataFlow?: string[];
  title?: string;
}

// 联调成功效果：两节点 + 连接动画线 + 数据流动点 + 成功打勾
export const ConnectionSuccessEffect: React.FC<ConnectionSuccessEffectProps> = ({ from, to, dataFlow, title }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes connection-success-draw {
          0% { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes connection-success-dot {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes connection-success-check {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes connection-success-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(16,185,129,0); }
        }
      `}</style>
      {title && <h3 className="text-sm font-bold text-white">{title}</h3>}

      <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-700/80 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* From node */}
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="h-16 w-16 rounded-2xl bg-slate-800 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
              {from.icon || <Server className="h-7 w-7" />}
            </div>
            <div className="mt-2 text-xs font-bold text-white">{from.label}</div>
          </div>

          {/* Connection line */}
          <div className="relative flex-1 h-16 flex items-center">
            <svg className="w-full h-12" viewBox="0 0 400 40" preserveAspectRatio="none">
              <line
                x1="0" y1="20" x2="400" y2="20"
                stroke="rgba(99,102,241,0.25)"
                strokeWidth="2"
              />
              <line
                x1="0" y1="20" x2="400" y2="20"
                stroke="url(#connection-success-grad)"
                strokeWidth="2.5"
                strokeDasharray="400"
                style={{ animation: 'connection-success-draw 1.6s ease-out forwards' }}
              />
              <defs>
                <linearGradient id="connection-success-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            {/* flowing dots */}
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="absolute h-2 w-2 rounded-full bg-emerald-400"
                style={{
                  offsetPath: "path('M0,0 L400,0')",
                  animation: `connection-success-dot 2s linear ${d * 0.6}s infinite`,
                  top: 'calc(50% - 4px)',
                  left: 0,
                }}
              />
            ))}
            {/* center success badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center"
              style={{ animation: 'connection-success-check 0.6s ease-out 1.4s both, connection-success-pulse 2s ease-in-out 2s infinite' }}
            >
              <CheckCircle2 className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* To node */}
          <div className="flex flex-col items-center text-center shrink-0">
            <div className="h-16 w-16 rounded-2xl bg-slate-800 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              {to.icon || <Database className="h-7 w-7" />}
            </div>
            <div className="mt-2 text-xs font-bold text-white">{to.label}</div>
          </div>
        </div>

        {dataFlow && dataFlow.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {dataFlow.map((d, i) => (
              <React.Fragment key={i}>
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-cyan-300">
                  {d}
                </span>
                {i < dataFlow.length - 1 && <ArrowRight className="h-3 w-3 text-slate-600" />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
