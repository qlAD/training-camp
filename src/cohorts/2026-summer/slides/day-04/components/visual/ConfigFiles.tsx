'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { FileCode, Settings, Star } from 'lucide-react';

export const ConfigFiles: React.FC = () => {
  const { active } = useBlueprint();

  const files = [
    {
      name: 'vite.config.js',
      icon: Settings,
      desc: 'Vite 构建配置',
      items: ['开发服务器端口', '打包输出目录', '别名路径'],
      color: 'cyan' as const,
    },
    {
      name: '.eslintrc.cjs',
      icon: FileCode,
      desc: '代码规范检查',
      items: ['语法规则', '风格约束', '错误级别'],
      color: 'amber' as const,
    },
    {
      name: '.prettierrc',
      icon: Star,
      desc: '代码格式化',
      items: ['缩进风格', '引号类型', '行宽限制'],
      color: 'emerald' as const,
    },
  ];

  const colorMap = {
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20', dot: 'bg-cyan-400' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20', dot: 'bg-amber-400' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20', dot: 'bg-emerald-400' },
  };

  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
      {files.map((f, i) => {
        const Icon = f.icon;
        const c = colorMap[f.color];
        return (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: active >= 1 + i ? 1 : 0, y: active >= 1 + i ? 0 : 30 }}
            transition={{ duration: 0.45, ease: EASE }}
            className={`flex flex-col gap-2 rounded-2xl border ${c.border} ${c.bg} p-4`}
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.iconBg}`}>
              <Icon className={`h-5 w-5 ${c.text}`} />
            </div>
            <code className="font-mono text-sm font-bold text-slate-100">{f.name}</code>
            <p className="text-[11px] text-slate-400">{f.desc}</p>
            <div className="mt-auto space-y-1">
              {f.items.map((item, j) => (
                <div key={j} className="flex items-center gap-1.5">
                  <span className={`h-1 w-1 rounded-full ${c.dot}`} />
                  <span className="text-[10px] text-slate-500">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* 底部总结 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 4 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-3"
      >
        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/50 px-4 py-2.5">
          <span className="rounded bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] text-cyan-300">工程化</span>
          <p className="text-xs font-medium text-slate-300">
            统一管理构建流程 · 团队协作零成本 · 配置即文档
          </p>
        </div>
      </motion.div>
    </div>
  );
};