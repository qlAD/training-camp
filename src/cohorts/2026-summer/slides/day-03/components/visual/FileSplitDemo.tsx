'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useStage } from '../scene/StageClock';
import { EASE } from '../scene/theme';
import { Code2, FileCode2, Paintbrush, Braces } from 'lucide-react';

interface FileSplitDemoProps {
  at: number;
  className?: string;
}

const SOURCE_CODE = `<!-- 全部写在一个文件里 -->
<div class="card">
  <h1>我的主页</h1>
  <style>
    h1 { color: blue; }
  </style>
  <button onclick="alert('hi')">
    点我
  </button>
</div>`;

const TARGET_FILES = [
  {
    name: 'index.html',
    icon: FileCode2,
    badge: 'HTML',
    tone: 'text-orange-300 bg-orange-400/15 border-orange-400/30',
    cls: 'border-orange-400/40 bg-orange-400/10',
    snippet: '<h1>我的主页</h1>\n<button>点我</button>',
    border: 'border-orange-400/40',
  },
  {
    name: 'style.css',
    icon: Paintbrush,
    badge: 'CSS',
    tone: 'text-sky-300 bg-sky-400/15 border-sky-400/30',
    cls: 'border-sky-400/40 bg-sky-400/10',
    snippet: 'h1 { color: blue; }',
    border: 'border-sky-400/40',
  },
  {
    name: 'script.js',
    icon: Braces,
    badge: 'JS',
    tone: 'text-amber-300 bg-amber-400/15 border-amber-400/30',
    cls: 'border-amber-400/40 bg-amber-400/10',
    snippet: "btn.onclick = () => alert('hi');",
    border: 'border-amber-400/40',
  },
];

export const FileSplitDemo: React.FC<FileSplitDemoProps> = ({ at, className = '' }) => {
  const { active } = useStage();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-stretch gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={s(0) ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="min-w-0 flex-1"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1E1E2E]/90">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
              <Code2 className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-mono text-[11px] text-slate-400">all-in-one.html</span>
            </div>
            <pre className="overflow-x-auto px-3 py-2.5 font-mono text-[11px] leading-5 text-slate-300">
              {SOURCE_CODE}
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={s(1) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="flex w-16 shrink-0 flex-col items-center justify-center"
        >
          <div className="flex items-center gap-1">
            <span className="text-sky-300 text-lg font-black">→</span>
          </div>
          <span className="mt-1 font-mono text-[10px] text-slate-400">拆分</span>
        </motion.div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          {TARGET_FILES.map((file, i) => {
            const Icon = file.icon;
            const lit = s(2 + i);
            return (
              <motion.div
                key={file.name}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={lit ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`overflow-hidden rounded-xl border ${file.cls}`}
              >
                <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5">
                  <Icon className="h-3.5 w-3.5 text-slate-300" />
                  <span className="font-mono text-[11px] text-slate-300">{file.name}</span>
                  <span className={`ml-auto rounded-md border px-1.5 py-0.5 font-mono text-[9px] font-bold ${file.tone}`}>
                    {file.badge}
                  </span>
                </div>
                <pre className="overflow-x-auto px-3 py-2 font-mono text-[10px] leading-4 text-slate-300">
                  {file.snippet}
                </pre>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(5) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-center text-sm text-slate-300"
      >
        一个文件 → 三件套：HTML 管结构、CSS 管样式、JS 管交互
      </motion.p>
    </div>
  );
};