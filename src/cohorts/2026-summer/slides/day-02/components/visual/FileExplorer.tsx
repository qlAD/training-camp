'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Folder,
  FileText,
  FileCode,
  FileJson,
  FileType,
  ChevronRight,
} from 'lucide-react';
import { useTimeline } from '../scene/TimelineScene';
import { COLORS, EASE, SPRING } from '../scene/theme';

interface FileExplorerProps {
  at?: number;
  className?: string;
}

interface FileNode {
  name: string;
  ext: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

const FOLDERS = ['my-blog/', 'css/', 'assets/'];

const FILES: FileNode[] = [
  {
    name: 'index',
    ext: '.html',
    icon: <FileCode className="h-4 w-4" />,
    color: '#7DD3FC',
    bg: 'rgba(56,189,248,0.15)',
  },
  {
    name: 'style',
    ext: '.css',
    icon: <FileCode className="h-4 w-4" />,
    color: '#5EEAD4',
    bg: 'rgba(45,212,191,0.15)',
  },
  {
    name: 'app',
    ext: '.js',
    icon: <FileJson className="h-4 w-4" />,
    color: '#FDE68A',
    bg: 'rgba(251,191,36,0.15)',
  },
  {
    name: 'README',
    ext: '.md',
    icon: <FileType className="h-4 w-4" />,
    color: '#BEF264',
    bg: 'rgba(163,230,53,0.15)',
  },
];

export const FileExplorer: React.FC<FileExplorerProps> = ({ at = 0, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400/80" />
          <span className="ml-2 font-mono text-[10px] text-slate-400">~/projects/my-blog</span>
        </div>

        <div className="space-y-1 font-mono text-[12px]">
          {FOLDERS.map((folder, i) => {
            const lit = s(i);
            return (
              <motion.div
                key={folder}
                initial={{ opacity: 0, x: -12 }}
                animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.1 }}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5"
                style={{
                  backgroundColor: lit ? 'rgba(56,189,248,0.1)' : 'transparent',
                }}
              >
                <ChevronRight
                  className="h-3 w-3"
                  style={{
                    color: lit ? COLORS.sky : 'rgba(148,163,184,0.4)',
                  }}
                />
                <Folder
                  className="h-4 w-4"
                  style={{ color: lit ? COLORS.amber : 'rgba(148,163,184,0.5)' }}
                />
                <span
                  style={{
                    color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.5)',
                  }}
                >
                  {folder}
                </span>
              </motion.div>
            );
          })}

          <div className="ml-4 space-y-1">
            {FILES.map((file, i) => {
              const lit = s(i + 3);
              return (
                <motion.div
                  key={file.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={lit ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.1 }}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5"
                  style={{
                    backgroundColor: lit ? file.bg : 'transparent',
                  }}
                >
                  {file.icon && (
                    <span
                      style={{
                        color: lit ? file.color : 'rgba(148,163,184,0.5)',
                      }}
                    >
                      {file.icon}
                    </span>
                  )}
                  <span
                    className="font-bold"
                    style={{
                      color: lit ? '#F1F5F9' : 'rgba(148,163,184,0.5)',
                    }}
                  >
                    {file.name}
                  </span>
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      s(7)
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={SPRING}
                    className="rounded-md px-1.5 py-0.5 text-[10px] font-bold"
                    style={{
                      backgroundColor: lit ? file.bg : 'rgba(15,23,42,0.5)',
                      color: lit ? file.color : 'rgba(148,163,184,0.5)',
                      border: `1px solid ${lit ? file.color + '66' : 'rgba(148,163,184,0.2)'}`,
                    }}
                  >
                    {file.ext}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={s(8) ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-3 text-center text-[12px] text-slate-300"
      >
        文件 = 名字 + 扩展名 — 扩展名决定操作系统用什么程序打开它
      </motion.p>
    </div>
  );
};