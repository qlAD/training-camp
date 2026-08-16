'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { User, ChefHat, Package, DoorOpen, ClipboardList } from 'lucide-react';

export const BackendKitchen: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* 横向流程图：顾客 → 菜单 → 传菜口 → 厨师 → 仓库 */}
      <div className="grid w-full grid-cols-5 items-center gap-1">
        {/* 顾客（前端/用户） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-950/20 p-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20">
            <User className="h-6 w-6 text-cyan-300" />
          </div>
          <p className="text-center text-xs font-bold text-cyan-100">顾客</p>
          <p className="text-center text-[10px] text-slate-400">前端 / 你我</p>
        </motion.div>

        {/* 箭头 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: active >= 2 ? 1 : 0, scaleX: active >= 2 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden h-px w-full bg-gradient-to-r from-cyan-400/60 to-amber-400/60 md:block"
        />

        {/* 菜单/点单（接口） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 2 ? 1 : 0, y: active >= 2 ? 0 : 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-950/15 p-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20">
            <ClipboardList className="h-6 w-6 text-amber-300" />
          </div>
          <p className="text-center text-xs font-bold text-amber-100">点单</p>
          <p className="text-center text-[10px] text-slate-400">接口 API</p>
        </motion.div>

        {/* 箭头 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: active >= 3 ? 1 : 0, scaleX: active >= 3 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden h-px w-full bg-gradient-to-r from-amber-400/60 to-emerald-400/60 md:block"
        />

        {/* 传菜口 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 3 ? 1 : 0, y: active >= 3 ? 0 : 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="flex flex-col items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-950/15 p-3 md:col-span-1"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20">
            <DoorOpen className="h-6 w-6 text-blue-300" />
          </div>
          <p className="text-center text-xs font-bold text-blue-100">传菜口</p>
          <p className="text-center text-[10px] text-slate-400">请求/响应通道</p>
        </motion.div>

        {/* 厨师（业务逻辑） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 4 ? 1 : 0, y: active >= 4 ? 0 : 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mt-4 flex flex-col items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-950/15 p-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20">
            <ChefHat className="h-6 w-6 text-emerald-300" />
          </div>
          <p className="text-center text-xs font-bold text-emerald-100">厨师</p>
          <p className="text-center text-[10px] text-slate-400">后端 · 业务逻辑</p>
        </motion.div>

        {/* 第二行：厨师 → 仓库 */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: active >= 5 ? 1 : 0, scaleX: active >= 5 ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="col-span-5 mx-auto mt-3 h-px w-2/5 bg-gradient-to-r from-emerald-400/60 to-blue-400/60"
        />

        {/* 仓库（数据库） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: active >= 5 ? 1 : 0, y: active >= 5 ? 0 : 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="col-span-5 mx-auto mt-2 flex w-full max-w-xs flex-col items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-950/15 p-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20">
            <Package className="h-6 w-6 text-blue-300" />
          </div>
          <p className="text-center text-xs font-bold text-blue-100">仓库 · 食材</p>
          <p className="text-center text-[10px] text-slate-400">数据库 · 真正存数据的地方</p>
        </motion.div>
      </div>

      {/* 底部一句话总结 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 6 ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        className="mt-5 rounded-xl border border-amber-400/25 bg-amber-500/8 px-4 py-3"
      >
        <p className="text-xs font-medium leading-relaxed text-amber-100">
          你点「发布笔记」= 顾客下单；后端处理 = 厨师炒菜；数据库 = 取食材 + 存剩菜；
          <span className="font-bold text-amber-200"> 接口就是前后端约定好的「传菜口」—— 按格式点单，按格式上菜</span>
        </p>
      </motion.div>
    </div>
  );
};
