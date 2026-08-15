'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Folder, FolderOpen } from 'lucide-react';

export const CikeStructure: React.FC = () => {
  const { active } = useDesignCanvas();

  const tree = [
    { depth: 0, name: 'cike/', type: 'root' as const },
    { depth: 1, name: 'frontend/', type: 'dir' as const, tag: '社区前端工程' },
    { depth: 2, name: 'views/', type: 'dir' as const, tag: '页面' },
    { depth: 2, name: 'components/', type: 'dir' as const, tag: '公共组件' },
    { depth: 2, name: 'mock/', type: 'dir' as const, tag: 'Mock 数据（单一数据源）' },
    { depth: 2, name: 'router/', type: 'dir' as const, tag: '路由配置' },
    { depth: 2, name: 'styles/', type: 'dir' as const, tag: '公共样式' },
    { depth: 2, name: 'utils/', type: 'dir' as const, tag: '工具函数' },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/60 px-4 py-1.5">
          <Folder className="h-3 w-3 text-violet-400" />
          <span className="font-mono text-[10px] text-slate-400">项目目录结构</span>
        </div>
        <div className="p-3 font-mono text-[11px] leading-relaxed">
          {tree.map((node, i) => {
            const isRoot = node.type === 'root';
            const isDir = node.type === 'dir';
            const Icon = isRoot ? Folder : FolderOpen;
            return (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active >= 1 + i ? 1 : 0, x: active >= 1 + i ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
                style={{ paddingLeft: `${node.depth * 18}px` }}
              >
                <Icon className={`h-3.5 w-3.5 ${isRoot ? 'text-violet-400' : isDir ? 'text-pink-300' : 'text-slate-500'}`} />
                <span className={isRoot ? 'font-bold text-violet-200' : isDir ? 'text-pink-200' : 'text-slate-400'}>
                  {node.name}
                </span>
                {node.tag && (
                  <span className="text-slate-600">{'# '}{node.tag}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 9 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2.5"
      >
        <span className="text-xs text-amber-300">{'>'} 避坑</span>
        <p className="text-xs font-medium text-amber-200">
          各回各家是工程化基本功 —— 别把所有东西堆在一个文件夹，那不叫项目，叫垃圾堆
        </p>
      </motion.div>
    </div>
  );
};
