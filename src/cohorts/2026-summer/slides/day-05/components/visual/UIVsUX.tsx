'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useDesignCanvas } from '../scene/useDesignCanvas';
import { EASE } from '../scene/theme';
import { Eye, Heart, UtensilsCrossed } from 'lucide-react';

export const UIVsUX: React.FC = () => {
  const { active } = useDesignCanvas();

  const uiItems = ['颜色', '字号', '按钮形状', '图标风格', '留白多少'];
  const uxItems = ['点了有反应吗', '提示放哪最醒目', '图片没加载显示什么', '操作要不要二次确认', '用起来顺不顺手'];

  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* UI */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : -30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-pink-400/30 bg-pink-950/20 p-5"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20">
            <Eye className="h-5 w-5 text-pink-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-pink-200">UI · 用户界面</p>
            <p className="text-[11px] text-slate-400">看起来长什么样（皮肤）</p>
          </div>
        </div>
        <div className="space-y-2">
          {uiItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
              <span className="text-xs text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* UX */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: active >= 1 ? 1 : 0, x: active >= 1 ? 0 : 30 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="rounded-2xl border border-violet-400/30 bg-violet-950/20 p-5"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
            <Heart className="h-5 w-5 text-violet-300" />
          </div>
          <div>
            <p className="text-sm font-bold text-violet-200">UX · 用户体验</p>
            <p className="text-[11px] text-slate-400">用起来顺不顺手（感受）</p>
          </div>
        </div>
        <div className="space-y-2">
          {uxItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: active >= 2 + i ? 1 : 0, x: active >= 2 + i ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 rounded-lg bg-slate-900/40 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span className="text-xs text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 底部餐厅类比 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 7 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2"
      >
        <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2.5">
          <UtensilsCrossed className="h-4 w-4 text-amber-300" />
          <p className="text-xs font-medium text-amber-200">
            类比：UI 是餐厅的装修和摆盘，UX 是从进门、落座、点菜、上菜到结账整段体验 —— 好产品是皮和骨都讲究
          </p>
        </div>
      </motion.div>
    </div>
  );
};
