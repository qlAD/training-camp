import React from 'react';
import { Globe, Lock, Users, Clock, Activity, Server } from 'lucide-react';

interface OnlineAccessEffectProps {
  url: string;
  visitors?: number;
  responseTime?: number;
  uptime?: number;
  title?: string;
  screenshot?: React.ReactNode;
}

const fmtNum = (n: number) => n.toLocaleString('en-US');

// 线上访问效果：浏览器地址栏 + 状态指标卡片
export const OnlineAccessEffect: React.FC<OnlineAccessEffectProps> = ({
  url,
  visitors,
  responseTime,
  uptime,
  title,
  screenshot,
}) => {
  const metrics: { label: string; value: string; icon: React.ReactNode; tone: string }[] = [];
  if (visitors !== undefined) metrics.push({ label: '在线访客', value: fmtNum(visitors), icon: <Users className="h-3.5 w-3.5" />, tone: 'text-cyan-300' });
  if (responseTime !== undefined) metrics.push({ label: '响应时间', value: `${responseTime} ms`, icon: <Clock className="h-3.5 w-3.5" />, tone: 'text-emerald-300' });
  if (uptime !== undefined) metrics.push({ label: '可用率', value: `${uptime}%`, icon: <Activity className="h-3.5 w-3.5" />, tone: 'text-indigo-300' });

  return (
    <div className="space-y-4">
      <style>{`
        @keyframes online-access-ping {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes online-access-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      {/* Browser chrome */}
      <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-700/80">
          <div className="flex items-center space-x-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center space-x-2 px-3 h-7 rounded-full bg-slate-800/80 border border-slate-700 min-w-[260px] max-w-full">
              <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
              <span className="text-[11px] font-mono text-slate-300 truncate">{url}</span>
              <span
                className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0"
                style={{ animation: 'online-access-ping 1.6s ease-in-out infinite' }}
              />
            </div>
          </div>
          <Server className="h-3.5 w-3.5 text-slate-600" />
        </div>

        {/* Screenshot / viewport */}
        <div className="relative min-h-[160px] bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
          <div
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
            style={{ animation: 'online-access-scan 4s ease-in-out infinite' }}
          />
          {screenshot ? (
            <div className="w-full">{screenshot}</div>
          ) : (
            <div className="text-center">
              <Globe className="h-8 w-8 text-slate-700 mx-auto mb-2" />
              <div className="text-[10px] text-slate-600 font-mono">页面预览</div>
            </div>
          )}
        </div>
      </div>

      {/* Metrics */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 flex flex-col items-center text-center"
            >
              <span className={m.tone}>{m.icon}</span>
              <span className={`mt-1.5 text-lg font-black ${m.tone}`}>{m.value}</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{m.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
