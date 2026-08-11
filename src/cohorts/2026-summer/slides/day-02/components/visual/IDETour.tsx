'use client';

import React from 'react';
import {
  FolderOpen,
  FileText,
  FileCode2,
  FileJson,
  ChevronRight,
  Terminal,
  Play,
  Code2,
  MoreHorizontal,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';

interface IDETourProps {
  at?: number;
  className?: string;
}

const TREE_FILES = [
  { name: 'index.html', icon: FileCode2, color: '#FBBF24' },
  { name: 'style.css', icon: FileCode2, color: '#38BDF8' },
  { name: 'script.js', icon: FileCode2, color: '#A3E635' },
  { name: 'data.json', icon: FileJson, color: '#2DD4BF' },
  { name: 'README.md', icon: FileText, color: '#F8FAFC' },
];

const TERMINAL_LINES = [
  { text: '$ npm run dev', color: 'text-sky-300' },
  { text: 'VITE v5.0  ready', color: 'text-slate-400' },
  { text: 'Local:   http://localhost:5173/', color: 'text-lime-300' },
  { text: '✓ 12 modules transformed', color: 'text-slate-400' },
];

export const IDETour: React.FC<IDETourProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={s(0) ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mb-3 text-center"
      >
        <p className="text-sm font-bold text-slate-200">One editor to rule them all</p>
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/80 px-3 py-2">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-lime-400/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">TRAE IDE — my-project</span>
        </div>

        <div className="flex min-h-[220px]">
          {/* Sidebar: file tree */}
          <motion.div
            initial={{ opacity: 0, x: -20, width: 0 }}
            animate={s(1) ? { opacity: 1, x: 0, width: 140 } : { opacity: 0, x: -20, width: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col overflow-hidden border-r border-white/10 bg-slate-900/50 py-2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={s(1) ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 px-2 py-1.5"
            >
              <FolderOpen className="h-4 w-4 text-amber-300" />
              <span className="text-[11px] font-bold text-slate-200">my-project</span>
            </motion.div>

            <motion.div
              className="ml-3 space-y-0.5"
              initial="hidden"
              animate={s(2) ? 'show' : 'hidden'}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {TREE_FILES.map((file, i) => {
                const Icon = file.icon;
                return (
                  <motion.div
                    key={file.name}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-1.5 rounded px-2 py-1 ${
                      s(3) && i === 0 ? 'bg-sky-500/20' : ''
                    }`}
                  >
                    <ChevronRight
                      className={`h-3 w-3 transition-transform duration-300 ${
                        s(2) ? 'rotate-90 text-slate-500' : 'text-slate-600'
                      }`}
                    />
                    <Icon className="h-3.5 w-3.5" style={{ color: file.color }} />
                    <span className="text-[10px] text-slate-300">{file.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Editor area */}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center gap-1 border-b border-white/10 bg-slate-900/30 px-2 py-1">
              {s(3) && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex items-center gap-1 rounded-t bg-slate-950 px-2 py-1"
                >
                  <FileCode2 className="h-3 w-3 text-amber-300" />
                  <span className="font-mono text-[10px] text-slate-300">index.html</span>
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto flex items-center gap-1"
              >
                <MoreHorizontal className="h-3 w-3 text-slate-500" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex-1 overflow-auto p-3 font-mono text-[11px] leading-5"
            >
              <pre className="text-slate-400">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="block"
                >
                  <span className="text-slate-600">01</span>{'  '}
                  <span className="text-sky-300">{'<!DOCTYPE'}</span>{' '}
                  <span className="text-amber-300">html</span>
                  <span>{'>'}</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="block"
                >
                  <span className="text-slate-600">02</span>{'  '}
                  <span className="text-sky-300">{'<html'}</span>{' '}
                  <span className="text-emerald-300">lang</span>=
                  <span className="text-amber-300">"zh-CN"</span>
                  <span>{'>'}</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="block pl-3"
                >
                  <span className="text-slate-600">03</span>{'  '}
                  <span className="text-sky-300">{'<head>'}</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="block pl-6"
                >
                  <span className="text-slate-600">04</span>{'  '}
                  <span className="text-sky-300">{'<title>'}</span>
                  <span className="text-slate-200">My Page</span>
                  <span className="text-sky-300">{'</title>'}</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="block pl-3"
                >
                  <span className="text-slate-600">05</span>{'  '}
                  <span className="text-sky-300">{'</head>'}</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="block"
                >
                  <span className="text-slate-600">06</span>{'  '}
                  <span className="text-sky-300">{'<body>'}</span>
                </motion.span>
              </pre>
            </motion.div>
          </div>
        </div>

        {/* Terminal panel */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={s(4) ? { opacity: 1, height: 120 } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="overflow-hidden border-t border-white/10 bg-black/60"
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-3 py-1.5">
            <Terminal className="h-3.5 w-3.5 text-lime-300" />
            <span className="text-[11px] font-bold text-slate-300">Terminal</span>
            <div className="ml-2 h-3 w-px bg-white/20" />
            <Play className="h-3 w-3 text-slate-500" />
            <span className="text-[10px] text-slate-500">zsh — node</span>
          </div>
          <div className="px-3 py-2 font-mono text-[11px] leading-5">
            {TERMINAL_LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={s(4) ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ duration: 0.35, delay: i * 0.12 }}
                className={line.color}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(5) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-xs text-slate-400"
      >
        打开文件夹 → 文件树 → 代码编辑器 → 内置终端 — 一个 IDE 搞定全流程
      </motion.p>
    </div>
  );
};