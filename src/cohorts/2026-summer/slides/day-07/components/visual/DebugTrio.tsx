'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { FileCode, Webhook, Globe, Zap, Layers, ShieldAlert } from 'lucide-react';

interface Tool {
  no: string;
  name: string;
  role: string;
  detail: string;
  bullets: string[];
  icon: React.FC<{ className?: string }>;
  color: string;
  text: string;
}

const TOOLS: Tool[] = [
  {
    no: '01',
    name: 'IDEA HTTP Client',
    role: '快测',
    detail: 'IDEA 自带，新建 .http 文件就能发',
    bullets: ['不用切工具', '贴着代码改完顺手测', '开发过程中快速验证'],
    icon: FileCode,
    color: 'border-blue-400/30 bg-blue-950/15',
    text: 'text-blue-200',
  },
  {
    no: '02',
    name: 'Apifox',
    role: '主力',
    detail: '安装包：06-工具资源/Apifox-2.8.41.exe',
    bullets: ['批量管理接口', '能存历史', '导出分享 = 联调作战地图'],
    icon: Webhook,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    text: 'text-emerald-200',
  },
  {
    no: '03',
    name: '跨域拦路虎 CORS',
    role: '必踩坑',
    detail: '前端 5173 → 后端 8080，浏览器直接拦',
    bullets: ['浏览器报 CORS 错误', 'Day8 联调第一秒就翻车', '后端配全局跨域允许'],
    icon: Globe,
    color: 'border-rose-400/30 bg-rose-950/15',
    text: 'text-rose-200',
  },
];

export const DebugTrio: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {TOOLS.map((t, i) => {
          const Icon = t.icon;
          const baseIdx = 1 + i * 4;
          return (
            <motion.div
              key={t.no}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active >= baseIdx ? 1 : 0,
                y: active >= baseIdx ? 0 : 20,
              }}
              transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
              className={`relative rounded-2xl border p-4 ${t.color}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 font-mono text-[11px] font-black text-white/80">
                  {t.no}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/40">
                  <Icon className={`h-4 w-4 ${t.text}`} />
                </div>
              </div>
              <p className={`text-sm font-black ${t.text}`}>{t.name}</p>
              <p className="mt-0.5 text-[11px] text-slate-400">{t.detail}</p>
              <div className="mt-3 space-y-1.5">
                {t.bullets.map((b, bi) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: active >= baseIdx + 1 + bi ? 1 : 0,
                      x: active >= baseIdx + 1 + bi ? 0 : -8,
                    }}
                    transition={{ duration: 0.28 }}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-500" />
                    <span className="text-[10.5px] text-slate-200">{b}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active >= baseIdx + 3 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/50 px-2 py-1"
              >
                {t.no === '03' ? (
                  <ShieldAlert className="h-2.5 w-2.5 text-rose-300" />
                ) : (
                  <Zap className="h-2.5 w-2.5 text-emerald-300" />
                )}
                <span className={`text-[9.5px] font-bold ${t.text}`}>{t.role}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* 小贴士 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 13 ? 1 : 0, y: active >= 13 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-start gap-2.5 rounded-2xl border border-amber-400/30 bg-amber-950/15 px-4 py-3"
      >
        <Layers className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
        <div>
          <p className="text-xs font-bold text-amber-100">小贴士 · Apifox 环境变量</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
            把 baseUrl 抽出来做环境变量，本地 / 联调 / 线上切换环境只改一个变量，别把地址写死在每个请求里。Apifox 项目本身就是接口文档载体，Day8 联调前端会直接对着它调试。
          </p>
        </div>
      </motion.div>
    </div>
  );
};
