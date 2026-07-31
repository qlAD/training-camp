import React from 'react';
import { Network } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  desc: string;
  tone?: Tone;
}

interface APIMatrixShowcaseProps {
  apis: ApiEndpoint[];
  title?: string;
}

const methodTone: Record<string, { badge: string; border: string; glow: string }> = {
  GET: { badge: 'bg-emerald-500/20 text-emerald-300', border: 'hover:border-emerald-500/50', glow: 'shadow-emerald-900/30' },
  POST: { badge: 'bg-amber-500/20 text-amber-300', border: 'hover:border-amber-500/50', glow: 'shadow-amber-900/30' },
  PUT: { badge: 'bg-indigo-500/20 text-indigo-300', border: 'hover:border-indigo-500/50', glow: 'shadow-indigo-900/30' },
  DELETE: { badge: 'bg-rose-500/20 text-rose-300', border: 'hover:border-rose-500/50', glow: 'shadow-rose-900/30' },
};

// CRUD API 矩阵：端点卡片，method 不同颜色
export const APIMatrixShowcase: React.FC<APIMatrixShowcaseProps> = ({ apis, title }) => {
  return (
    <div className="space-y-4">
      <style>{`
        @keyframes api-matrix-in {
          0% { transform: translateX(-8px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Network className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {apis.map((api, i) => {
          const tone = methodTone[api.method];
          return (
            <div
              key={`${api.method}-${api.path}-${i}`}
              className={`group p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 ${tone.border} transition-all duration-300 hover:shadow-lg ${tone.glow}`}
              style={{ animation: `api-matrix-in 0.4s ease-out ${i * 0.06}s both` }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${tone.badge} font-mono`}>
                  {api.method}
                </span>
                <code className="text-xs font-mono text-slate-200 break-all">{api.path}</code>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{api.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
