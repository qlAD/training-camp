'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { FileText, CheckCircle2, Database as DBIcon, GitBranch } from 'lucide-react';

export const HomeworkChecklist: React.FC = () => {
  const { active } = useServerRoom();

  const deliverables = [
    { icon: FileText, text: '数据库设计文档 → 归档到 day06 目录' },
    { icon: DBIcon, text: '建表 SQL 脚本 → 归档到 day06 目录' },
    { icon: GitBranch, text: '初始化好的后端工程 → cike/backend 并推送 Gitee' },
  ];

  const checks = [
    'SpringBoot 项目能在 IDEA 里正常启动，基础接口能正常响应',
    'MySQL 服务能正常启动，DataGrid 能连上并看到新建的 cike 库',
    '建表 SQL 已执行，所有表结构在库里可见，字段类型与设计文档一致',
    '数据库设计文档已归档到 day06 目录，包含表结构、字段说明、关系描述',
    '后端工程已放入 cike/backend 并推送到 Gitee，提交记录清晰',
  ];

  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* 交付物 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <FileText className="h-4 w-4 text-amber-300" />
          <span className="text-sm font-bold text-slate-100">两个交付物 + 一个工程</span>
        </div>
        <div className="space-y-2">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-2 rounded-lg border border-amber-400/15 bg-amber-500/5 px-3 py-2"
              >
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span className="text-[11px] leading-relaxed text-slate-300">{item.text}</span>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 5 ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="mt-3 rounded-lg border border-white/10 bg-slate-950/50 p-2"
        >
          <p className="text-[10px] text-slate-400">
            前后端工程正式「成双成对」：
            <span className="font-mono text-cyan-300"> cike/frontend</span> +
            <span className="font-mono text-emerald-300"> cike/backend</span>
          </p>
        </motion.div>
      </motion.div>

      {/* 自测清单 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.08 }}
        className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
          <span className="text-sm font-bold text-slate-100">自测清单 · 5 项</span>
        </div>
        <div className="space-y-1.5">
          {checks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 8 }}
              animate={{
                opacity: active >= 2 + i ? 1 : 0,
                x: active >= 2 + i ? 0 : 8,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2 rounded-lg border border-emerald-400/15 bg-emerald-500/5 px-3 py-1.5"
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600 font-mono text-[9px] font-bold text-slate-500">
                {i + 1}
              </span>
              <span className="text-[10px] leading-relaxed text-slate-300">{task}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
