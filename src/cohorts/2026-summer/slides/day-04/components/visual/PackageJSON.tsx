'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useBlueprint } from '../scene/useBlueprint';
import { EASE } from '../scene/theme';
import { Package, Check, X, Plus } from 'lucide-react';

export const PackageJSON: React.FC = () => {
  const { active } = useBlueprint();

  const deps = [
    { name: 'vue', version: '^3.5.0', highlight: true },
    { name: 'vue-router', version: '^4.4.0', highlight: true },
    { name: 'lucide-react', version: '^0.460.0', highlight: false },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* package.json 代码框 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 20 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80"
      >
        {/* 标签栏 */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800/60 px-4 py-2">
          <Package className="h-3.5 w-3.5 text-amber-400" />
          <span className="font-mono text-xs text-slate-300">package.json</span>
        </div>

        {/* 代码内容 */}
        <div className="p-4 font-mono text-xs leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 2 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-slate-500">{'{'}</span>
            <br />
            <span className="text-cyan-300">&nbsp;&nbsp;"name"</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-300">"my-app"</span>
            <span className="text-slate-500">,</span>
            <br />
            <span className="text-cyan-300">&nbsp;&nbsp;"version"</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-300">"1.0.0"</span>
            <span className="text-slate-500">,</span>
            <br />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 3 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-cyan-300">&nbsp;&nbsp;"scripts"</span>
            <span className="text-slate-500">: {'{'}</span>
            <br />
            <span className="text-slate-400">&nbsp;&nbsp;&nbsp;&nbsp;"dev"</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-300">"vite"</span>
            <span className="text-slate-500">,</span>
            <br />
            <span className="text-slate-400">&nbsp;&nbsp;&nbsp;&nbsp;"build"</span>
            <span className="text-slate-500">: </span>
            <span className="text-amber-300">"vite build"</span>
            <br />
            <span className="text-slate-500">&nbsp;&nbsp;{'},'}</span>
            <br />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active >= 4 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-cyan-300">&nbsp;&nbsp;"dependencies"</span>
            <span className="text-slate-500">: {'{'}</span>
            <br />
            {deps.map((dep, i) => (
              <motion.div
                key={dep.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: active >= 5 + i ? 1 : 0, x: active >= 5 + i ? 0 : -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-slate-400">&nbsp;&nbsp;&nbsp;&nbsp;"{dep.name}"</span>
                <span className="text-slate-500">: </span>
                <span className={dep.highlight ? 'text-emerald-300' : 'text-amber-300'}>"{dep.version}"</span>
                <span className="text-slate-500">,</span>
                <br />
              </motion.div>
            ))}
            <span className="text-slate-500">&nbsp;&nbsp;{'}'}</span>
            <br />
            <span className="text-slate-500">{'}'}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* 说明 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active >= 8 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-3 grid grid-cols-2 gap-3"
      >
        <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
          <div className="mb-1 flex items-center gap-1.5">
            <Plus className="h-3 w-3 text-cyan-400" />
            <span className="text-xs font-bold text-slate-300">安装新依赖</span>
          </div>
          <code className="block rounded bg-slate-950/60 px-2 py-1 font-mono text-[9px] text-slate-400">
            npm install axios
          </code>
        </div>
        <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3">
          <div className="mb-1 flex items-center gap-1.5">
            <Check className="h-3 w-3 text-emerald-400" />
            <span className="text-xs font-bold text-slate-300">他人拿到项目</span>
          </div>
          <code className="block rounded bg-slate-950/60 px-2 py-1 font-mono text-[9px] text-slate-400">
            npm install
          </code>
        </div>
      </motion.div>
    </div>
  );
};