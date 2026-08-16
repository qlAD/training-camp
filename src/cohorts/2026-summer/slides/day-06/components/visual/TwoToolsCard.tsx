'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Code2, Package, Flame, Sparkles } from 'lucide-react';

export const TwoToolsCard: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* IDEA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-950/25 via-slate-900/40 to-slate-900/40 p-5"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20">
            <Code2 className="h-6 w-6 text-amber-300" />
            <Flame className="absolute -right-1 -top-1 h-4 w-4 text-amber-400" />
          </div>
          <div>
            <p className="text-base font-black text-amber-100">IDEA</p>
            <p className="text-[11px] text-slate-400">Java 灶台 · IntelliJ IDEA 2024.3.4</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { k: '定位', v: '专门写 Java 的超级记事本，管项目+补全+调试' },
            { k: '安装', v: 'exe 一路下一步，别塞中文或带空格目录' },
            { k: '角色', v: '后端开发的主战场' },
          ].map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[10px] font-bold text-amber-300">{row.k}</span>
                <span className="text-[11px] text-slate-200">{row.v}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Maven */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
        className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-950/25 via-slate-900/40 to-slate-900/40 p-5"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20">
            <Package className="h-6 w-6 text-emerald-300" />
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-base font-black text-emerald-100">Maven</p>
            <p className="text-[11px] text-slate-400">依赖管家 · Apache Maven 3.9.16</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { k: '定位', v: '自动下载别人写好的库，管好版本不打架' },
            { k: '安装', v: '解压到固定目录，配环境变量 PATH 即可' },
            { k: '角色', v: '一句话：拉 jar 包的管家 + 编译打包机' },
          ].map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[10px] font-bold text-emerald-300">{row.k}</span>
                <span className="text-[11px] text-slate-200">{row.v}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 底部配好通知 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 5 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2"
      >
        <div className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-500/8 px-4 py-2.5">
          <span className="font-mono text-[10px] font-bold text-cyan-300">RESULT</span>
          <p className="text-xs font-medium text-cyan-100">
            配好这两把 → 后厨硬件齐活，可以开干 SpringBoot 项目了
          </p>
        </div>
      </motion.div>
    </div>
  );
};
