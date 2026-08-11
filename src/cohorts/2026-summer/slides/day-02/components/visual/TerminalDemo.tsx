'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE } from '../scene/theme';

interface TerminalDemoProps {
  at: number;
  className?: string;
}

interface CmdLine {
  cmd: string;
  output: string[];
}

const COMMANDS: CmdLine[] = [
  { cmd: 'cd /home/project', output: ['✓ 切换到项目目录'] },
  { cmd: 'ls', output: ['index.html  styles.css  app.js  README.md'] },
  { cmd: 'mkdir src', output: ['✓ 创建目录 src/'] },
  { cmd: 'rm old-file.log', output: ['✓ 已删除 old-file.log'] },
  { cmd: 'clear', output: [] },
];

const PROMPT = 'user@webdev:~$';

export const TerminalDemo: React.FC<TerminalDemoProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const started = active >= at;
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (!started) {
      setVisibleCount(0);
      setTypedChars(0);
      return;
    }
    if (visibleCount >= COMMANDS.length) return;

    const currentCmd = COMMANDS[visibleCount];
    if (typedChars < currentCmd.cmd.length) {
      const t = setTimeout(() => setTypedChars((c) => c + 1), 45);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleCount((v) => v + 1);
      setTypedChars(0);
    }, 500);
    return () => clearTimeout(t);
  }, [started, visibleCount, typedChars]);

  const lines: React.ReactNode[] = [];

  for (let i = 0; i < COMMANDS.length; i++) {
    const cmd = COMMANDS[i];
    const isCurrent = i === visibleCount;
    const isDone = i < visibleCount;

    if (isCurrent) {
      const typed = cmd.cmd.slice(0, typedChars);
      lines.push(
        <p key={`cmd-${i}`} className="text-sky-300">
          <span className="text-slate-500">{PROMPT}</span> {typed}
          <motion.span
            className="inline-block w-1.5 h-3.5 ml-0.5 align-middle"
            style={{ backgroundColor: COLORS.sky }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        </p>
      );
    } else if (isDone) {
      lines.push(
        <p key={`cmd-${i}`} className="text-sky-300">
          <span className="text-slate-500">{PROMPT}</span> {cmd.cmd}
        </p>
      );
      for (let oi = 0; oi < cmd.output.length; oi++) {
        lines.push(
          <p key={`out-${i}-${oi}`} className="text-lime-300">
            {cmd.output[oi]}
          </p>
        );
      }
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl"
        style={{ boxShadow: '0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.3)' }}
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={started ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 14, scale: 0.98 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/80 px-3 py-2">
          <motion.div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: '#EF4444' }}
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: '#F59E0B' }}
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: '#22C55E' }}
            whileHover={{ scale: 1.2 }}
          />
          <span className="ml-2 font-mono text-[11px] text-slate-400">bash — 80×24</span>
        </div>

        <div
          className="px-4 py-3 font-mono text-[12px] leading-relaxed min-h-[160px]"
          style={{ fontFamily: "'Fira Code', 'SF Mono', 'Cascadia Code', Consolas, monospace" }}
        >
          {COMMANDS[visibleCount]?.cmd === 'clear' && typedChars === COMMANDS[visibleCount]?.cmd.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            />
          )}
          {lines.length > 0 ? (
            lines
          ) : (
            <motion.p
              className="text-slate-600"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-slate-500">{PROMPT}</span>
              <motion.span
                className="inline-block w-1.5 h-3.5 ml-0.5 align-middle"
                style={{ backgroundColor: COLORS.sky }}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={active >= at + 6 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-2 text-center text-xs text-slate-500"
      >
        终端是开发者的工作台 —— 所有操作都是几行命令的事
      </motion.p>
    </div>
  );
};