'use client';

import React from 'react';
import { Cloud, GitBranch } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface GitPushProps {
  /* 时间轴位置 */
  at: number;
  className?: string;
}

const CMDS = [
  { cmd: 'git init', out: 'Initialized empty repository' },
  { cmd: 'git add .', out: 'added 12 files' },
  { cmd: 'git commit -m "my page"', out: '[main] 1 commit' },
  { cmd: 'git push origin main', out: '→ gitee.com/you/portfolio' },
];

/* git 四步 → Gitee 云端（0-3 命令 4 云仓库 5 总结） */
export const GitPush: React.FC<GitPushProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-lg space-y-2">
        {CMDS.map((c, i) => (
          <motion.div
            key={c.cmd}
            initial={{ opacity: 0, x: -18 }}
            animate={s(i) ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-2 font-mono text-xs"
          >
            <p className="text-sky-300">
              $ <span className="font-bold text-slate-100">{c.cmd}</span>
            </p>
            <p className="text-slate-400">{c.out}</p>
          </motion.div>
        ))}
      </div>

      {/* Gitee 云端仓库 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={s(4) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className="mx-auto mt-4 flex w-full max-w-lg items-center gap-3 rounded-2xl border border-teal-400/40 bg-teal-400/10 px-5 py-3"
      >
        <Cloud className="h-6 w-6 shrink-0 text-teal-300" />
        <div className="flex min-w-0 items-center gap-2 text-left">
          <GitBranch className="h-4 w-4 shrink-0 text-teal-300/80" />
          <div className="min-w-0">
            <p className="truncate font-mono text-sm font-bold text-teal-100">
              gitee.com/you/portfolio
            </p>
            <p className="text-[11px] text-teal-200/70">代码已经躺在云端仓库里</p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(5) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-sm text-slate-300"
      >
        Git 管版本，Gitee 帮你把代码存在云端 —— 今天的小目标达成
      </motion.p>
    </div>
  );
};
