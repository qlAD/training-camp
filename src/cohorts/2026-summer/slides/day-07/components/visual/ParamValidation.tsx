'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { ShieldCheck, Smartphone, Tag, Hash, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface Check {
  label: string;
  detail: string;
  icon: React.FC<{ className?: string }>;
}

const CHECKS: Check[] = [
  { label: '手机号格式', detail: '是不是 11 位数字', icon: Smartphone },
  { label: '必填字段', detail: '空没空', icon: Tag },
  { label: 'ID 类型', detail: '是不是数字', icon: Hash },
];

const ANNOTATIONS = [
  { name: '@NotBlank', desc: '字符串非空非 null' },
  { name: '@NotNull', desc: '对象不为 null' },
  { name: '@Size', desc: '长度范围' },
  { name: '@Pattern', desc: '正则匹配' },
  { name: '@Min / @Max', desc: '数值范围' },
  { name: '@Email', desc: '邮箱格式' },
];

export const ParamValidation: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* 左：前端漏校验，后端必须兜底 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-amber-400/30 bg-amber-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-bold text-amber-100">后端必须兜底</span>
          </div>
          <div className="space-y-2">
            {CHECKS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: active >= 2 + i ? 1 : 0,
                    x: active >= 2 + i ? 0 : -8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-2"
                >
                  <Icon className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-[11px] font-bold text-slate-200">{c.label}</span>
                  <span className="ml-auto text-[10px] text-slate-400">{c.detail}</span>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 5 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 flex items-center gap-1.5 rounded-lg border border-amber-400/25 bg-amber-500/8 px-3 py-1.5"
          >
            <AlertTriangle className="h-3 w-3 text-amber-300" />
            <span className="text-[10px] text-amber-200">前端可能漏校验，后端不兜底 = 脏数据入库</span>
          </motion.div>
        </motion.div>

        {/* 右：Bean Validation 注解 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="rounded-2xl border border-emerald-400/30 bg-emerald-950/10 p-4"
        >
          <div className="mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            <span className="text-sm font-bold text-emerald-100">Bean Validation 注解</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {ANNOTATIONS.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  scale: active >= 2 + i ? 1 : 0.9,
                }}
                transition={{ duration: 0.25 }}
                className="rounded-lg border border-emerald-400/15 bg-slate-950/40 px-2.5 py-1.5"
              >
                <p className="font-mono text-[10px] font-bold text-emerald-200">{a.name}</p>
                <p className="text-[9.5px] text-slate-400">{a.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 8 ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 flex items-center gap-1.5 rounded-lg border border-emerald-400/25 bg-emerald-500/8 px-3 py-1.5"
          >
            <CheckCircle2 className="h-3 w-3 text-emerald-300" />
            <span className="text-[10px] text-emerald-200">
              一个注解搞定一个校验，比手写 if-else 优雅得多
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* 避坑 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: active >= 9 ? 1 : 0, y: active >= 9 ? 0 : 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-start gap-2.5 rounded-2xl border border-rose-400/30 bg-rose-950/15 px-4 py-3"
      >
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
        <div>
          <p className="text-xs font-bold text-rose-100">避坑笔记</p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
            参数校验这一步千万别偷懒。控制层加上 <span className="font-mono text-emerald-300">@Valid</span>{' '}
            就能触发校验，校验失败的异常交给全局异常处理器统一兜成响应体。
          </p>
        </div>
      </motion.div>
    </div>
  );
};
