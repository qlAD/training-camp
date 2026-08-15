'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Home, ImagePlus, FileText, User, LogIn } from 'lucide-react';

export const PageDevPoints: React.FC = () => {
  const { active } = useDesignCanvas();

  const pages = [
    {
      icon: Home,
      name: '首页',
      points: ['瀑布流 / 列表渲染', '分页加载', '卡片=首图+标题+互动数据'],
      color: 'violet' as const,
    },
    {
      icon: ImagePlus,
      name: '发布页',
      points: ['九宫格多图选图预览', '标题正文输入', '发布按钮禁用 / 启用'],
      color: 'pink' as const,
    },
    {
      icon: FileText,
      name: '详情页',
      points: ['多图按比例排布', '评论区单独成块', '互动按钮状态随点击变化'],
      color: 'cyan' as const,
    },
    {
      icon: User,
      name: '个人中心',
      points: ['信息聚合页', '头像信息在顶', '三 Tab 切换'],
      color: 'amber' as const,
    },
    {
      icon: LogIn,
      name: '登录注册',
      points: ['两表单切换', '基础校验（空值 / 格式）', '最简单但要稳'],
      color: 'emerald' as const,
    },
  ];

  const colorMap = {
    violet: { border: 'border-violet-400/30', bg: 'bg-violet-500/10', text: 'text-violet-300', iconBg: 'bg-violet-500/20' },
    pink: { border: 'border-pink-400/30', bg: 'bg-pink-500/10', text: 'text-pink-300', iconBg: 'bg-pink-500/20' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-500/10', text: 'text-cyan-300', iconBg: 'bg-cyan-500/20' },
    amber: { border: 'border-amber-400/30', bg: 'bg-amber-500/10', text: 'text-amber-300', iconBg: 'bg-amber-500/20' },
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-300', iconBg: 'bg-emerald-500/20' },
  } as const;

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {pages.map((p, i) => {
          const Icon = p.icon;
          const c = colorMap[p.color];
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: active >= 1 + i ? 1 : 0, y: active >= 1 + i ? 0 : 20 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`rounded-xl border ${c.border} ${c.bg} p-3`}
            >
              <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${c.iconBg}`}>
                <Icon className={`h-4 w-4 ${c.text}`} />
              </div>
              <p className="mb-2 text-sm font-bold text-slate-100">{p.name}</p>
              <ul className="space-y-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-1.5">
                    <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${c.text.replace('text-', 'bg-')}`} />
                    <span className="text-[10px] leading-relaxed text-slate-400">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-center"
      >
        <p className="text-xs text-slate-500">
          今天不追求样式精致 —— 追求「流程跑通、布局合理」
        </p>
      </motion.div>
    </div>
  );
};
