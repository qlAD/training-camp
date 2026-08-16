'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useServerRoom } from '../scene/useServerRoom';
import { EASE } from '../scene/theme';
import { Database, LayoutDashboard, Key, Globe2, AlertTriangle } from 'lucide-react';

export const MySQLHome: React.FC = () => {
  const { active } = useServerRoom();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* MySQL 服务 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-950/25 via-slate-900/40 to-slate-900/40 p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20">
              <Database className="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <p className="text-base font-black text-blue-100">MySQL 8.0</p>
              <p className="text-[11px] text-slate-400">仓库本身 · 数据真正存的地方</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { k: '安装包', v: 'mysql-installer-community-8.0.46.0.msi' },
              { k: 'root 密码', v: '务必记牢，丢了找回很麻烦' },
              { k: '认证方式', v: '选默认的强密码认证即可' },
              { k: '字符集', v: 'utf8mb4，存 emoji 不慌乱码' },
              { k: '端口', v: '默认 3306，装前确认没被占' },
            ].map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-baseline justify-between gap-3 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-1.5"
              >
                <span className="font-mono text-[10px] font-bold text-blue-300">{row.k}</span>
                <span className="text-right text-[10.5px] text-slate-200">{row.v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DataGrid 可视化工具 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 18 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
          className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-950/25 via-slate-900/40 to-slate-900/40 p-5"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20">
              <LayoutDashboard className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-base font-black text-cyan-100">DataGrid</p>
              <p className="text-[11px] text-slate-400">可视化工具 · 仓库管理后台</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { k: '能做啥', v: '不用敲命令行，点鼠标看表改数据' },
              { k: '连接四件', v: 'host / port / 用户名 / 密码' },
              { k: '默认端口', v: '3306' },
              { k: '成功标志', v: '能看见几个默认系统库' },
              { k: '新建库', v: '命名 cike，字符集 utf8mb4' },
            ].map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-baseline justify-between gap-3 rounded-lg border border-white/5 bg-slate-950/40 px-3 py-1.5"
              >
                <span className="font-mono text-[10px] font-bold text-cyan-300">{row.k}</span>
                <span className="text-right text-[10.5px] text-slate-200">{row.v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 连接验证示意 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 7 ? 1 : 0, y: active >= 7 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 rounded-2xl border border-emerald-400/25 bg-slate-900/50 p-4"
      >
        <div className="mb-2 flex items-center gap-2">
          <Key className="h-3.5 w-3.5 text-emerald-300" />
          <p className="text-xs font-bold text-emerald-100">连接验证示意</p>
          <span className="ml-auto rounded border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
            CONNECT OK
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 rounded-xl border border-white/5 bg-slate-950/50 p-3">
          {[
            { k: 'Host', v: '127.0.0.1', icon: Globe2 },
            { k: 'Port', v: '3306', icon: Key },
            { k: 'User', v: 'root', icon: Key },
            { k: 'DB', v: 'cike', icon: Database },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.k}
                className="flex flex-col items-center gap-1 rounded-lg border border-white/5 bg-slate-900/40 p-2"
              >
                <Icon className="h-3 w-3 text-slate-500" />
                <span className="font-mono text-[9px] text-slate-500">{f.k}</span>
                <span className="font-mono text-[10.5px] font-bold text-slate-200">{f.v}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* 避坑 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 8 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="mt-3 flex items-start gap-2 rounded-xl border border-rose-400/25 bg-rose-500/8 px-3 py-2.5"
      >
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-300" />
        <div className="text-[11px] text-rose-200">
          <p className="font-bold">两个高频坑：</p>
          <p>① 字符集没选 utf8mb4 → 社区里存 😂 emoji 直接乱码</p>
          <p>② 3306 端口被别的程序占了 → 安装前先扫一遍端口</p>
        </div>
      </motion.div>
    </div>
  );
};
