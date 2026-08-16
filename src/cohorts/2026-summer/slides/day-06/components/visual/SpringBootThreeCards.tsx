'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Server, Cog, Boxes, CheckCircle2 } from 'lucide-react';

interface CardDef {
  title: string;
  tag: string;
  tagCls: string;
  color: string;
  icon: React.FC<{ className?: string }>;
  points: string[];
}

const CARDS: CardDef[] = [
  {
    title: '内嵌服务器',
    tag: 'Tomcat 自带',
    tagCls: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30',
    color: 'border-emerald-400/30 bg-emerald-950/15',
    icon: Server,
    points: [
      '不用单独装 Tomcat 服务器',
      '项目一启动就自带一个',
      '跑起来就能接收 HTTP 请求',
      '打包成 jar 就能跑，省事',
    ],
  },
  {
    title: '自动配置',
    tag: 'Auto Config',
    tagCls: 'text-cyan-300 bg-cyan-500/15 border-cyan-400/30',
    color: 'border-cyan-400/30 bg-cyan-950/15',
    icon: Cog,
    points: [
      '引入 DB 依赖 → 自动配好连接',
      '引入 Web 依赖 → 自动开好接口',
      '默认值 90% 场景不用改',
      '要改才写 application.yml',
    ],
  },
  {
    title: '起步依赖',
    tag: 'Starter',
    tagCls: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
    color: 'border-amber-400/30 bg-amber-950/15',
    icon: Boxes,
    points: [
      '一个 starter = 一组相关库',
      'spring-web-starter 全配齐',
      '不用一个一个挑版本号',
      '版本冲突概率大幅降低',
    ],
  },
];

export const SpringBootThreeCards: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
      {CARDS.map((card, ci) => {
        const Icon = card.icon;
        const baseIdx = 1 + ci * 5;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: active >= baseIdx ? 1 : 0,
              y: active >= baseIdx ? 0 : 20,
            }}
            transition={{ duration: 0.45, ease: EASE, delay: ci * 0.08 }}
            className={`relative rounded-2xl border p-5 ${card.color}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/50">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">{card.title}</p>
                </div>
              </div>
              <span
                className={`rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold ${card.tagCls}`}
              >
                {card.tag}
              </span>
            </div>
            <div className="space-y-1.5">
              {card.points.map((pt, pi) => (
                <motion.div
                  key={pt}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: active >= baseIdx + 1 + pi ? 1 : 0,
                    x: active >= baseIdx + 1 + pi ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5"
                >
                  <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-white/40" />
                  <span className="text-[10.5px] leading-relaxed text-slate-200">{pt}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
