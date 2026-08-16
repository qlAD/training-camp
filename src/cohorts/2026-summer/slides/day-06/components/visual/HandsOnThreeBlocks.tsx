'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Server, Database as DBIcon, FileCode, Play } from 'lucide-react';

interface Block {
  no: string;
  tag: string;
  tagCls: string;
  color: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  sub: string;
  steps: string[];
}

const BLOCKS: Block[] = [
  {
    no: '01',
    tag: 'SpringBoot',
    tagCls: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
    color: 'border-emerald-400/30 bg-emerald-950/15',
    icon: Server,
    title: '搭空白 SpringBoot 项目',
    sub: '测试第一个基础接口',
    steps: [
      'IDEA 初始化向导 / Spring Initializr 生成',
      '勾选 Spring Web 依赖，下载后 IDEA 打开',
      '等 Maven 拉完依赖，跑主启动类',
      '写一个 hello 基础 GET 接口',
      '浏览器 / Postman 访问能看到返回 → 后端活了',
    ],
  },
  {
    no: '02',
    tag: 'MySQL',
    tagCls: 'text-blue-300 bg-blue-500/15 border-blue-400/30',
    color: 'border-blue-400/30 bg-blue-950/15',
    icon: DBIcon,
    title: '完成 MySQL 环境部署',
    sub: '建库连库，DataGrid 连接成功',
    steps: [
      '安装 MySQL 8.0（选强密码认证 + utf8mb4）',
      '安装 DataGrid 可视化工具',
      '填 host/3306/root/密码，点连接',
      '能看到默认系统库 = 配通了',
      '新建空数据库 cike，字符集 utf8mb4',
    ],
  },
  {
    no: '03',
    tag: 'AI + SQL',
    tagCls: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
    color: 'border-amber-400/30 bg-amber-950/15',
    icon: FileCode,
    title: 'AI 生成 + 执行建表 SQL',
    sub: '人工校验三道关，整理归档',
    steps: [
      '喂 AI 社区需求，出设计文档 + 建表 SQL',
      '人工校验：字段类型 / 约束 / 索引',
      'DataGrid 里执行 SQL（选对 cike 库！）',
      '刷新表列表，确认表都建出来了',
      '设计文档 + SQL → 归档到 day06 目录',
    ],
  },
];

export const HandsOnThreeBlocks: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {BLOCKS.map((b, bi) => {
          const Icon = b.icon;
          const baseIdx = 1 + bi * 7;
          return (
            <motion.div
              key={b.no}
              initial={{ opacity: 0, y: 22 }}
              animate={{
                opacity: active >= baseIdx ? 1 : 0,
                y: active >= baseIdx ? 0 : 22,
              }}
              transition={{ duration: 0.45, ease: EASE, delay: bi * 0.08 }}
              className={`relative rounded-2xl border p-4 ${b.color}`}
            >
              {/* 编号 + 标签 */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 font-mono text-[11px] font-black text-white/80">
                    {b.no}
                  </span>
                  <span
                    className={`rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold ${b.tagCls}`}
                  >
                    {b.tag}
                  </span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/40">
                  <Icon className="h-4 w-4 text-white/70" />
                </div>
              </div>

              <p className="mb-1 text-sm font-black text-white">{b.title}</p>
              <p className="mb-3 text-[11px] text-slate-400">{b.sub}</p>

              <div className="space-y-1.5">
                {b.steps.map((s, si) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: active >= baseIdx + 1 + si ? 1 : 0,
                      x: active >= baseIdx + 1 + si ? 0 : -8,
                    }}
                    transition={{ duration: 0.28 }}
                    className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5"
                  >
                    <span className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-900/60 font-mono text-[8px] font-bold text-slate-400">
                      {si + 1}
                    </span>
                    <span className="text-[10.5px] leading-relaxed text-slate-200">{s}</span>
                  </motion.div>
                ))}
              </div>

              {/* 底部：跑通提示 */}
              {active >= baseIdx + 6 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 flex items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-500/8 px-2 py-1"
                >
                  <Play className="h-2.5 w-2.5 text-emerald-300" />
                  <span className="text-[9.5px] font-bold text-emerald-200">
                    意义：跑通一次完整链路
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
