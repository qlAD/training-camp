'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { Hash, User, FileText, Image as ImageIcon } from 'lucide-react';

interface CodeGroup {
  prefix: string;
  range: string;
  category: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  text: string;
  examples: { code: string; desc: string }[];
}

const GROUPS: CodeGroup[] = [
  {
    prefix: '1xxxx',
    range: '10001 - 19999',
    category: '用户相关',
    icon: User,
    color: 'border-blue-400/30 bg-blue-950/15',
    text: 'text-blue-200',
    examples: [
      { code: '10001', desc: '参数错误' },
      { code: '10002', desc: '用户名已存在' },
      { code: '10003', desc: '账号或密码错误' },
      { code: '10004', desc: '未登录 / 登录过期' },
    ],
  },
  {
    prefix: '2xxxx',
    range: '20001 - 29999',
    category: '内容相关',
    icon: FileText,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    text: 'text-emerald-200',
    examples: [
      { code: '20001', desc: '笔记不存在' },
      { code: '20002', desc: '无权操作他人笔记' },
      { code: '20003', desc: '评论不存在' },
      { code: '20004', desc: '已经点过赞' },
    ],
  },
  {
    prefix: '3xxxx',
    range: '30001 - 39999',
    category: '文件相关',
    icon: ImageIcon,
    color: 'border-amber-400/30 bg-amber-950/15',
    text: 'text-amber-200',
    examples: [
      { code: '30001', desc: '文件为空' },
      { code: '30002', desc: '文件类型不允许' },
      { code: '30003', desc: '文件超大' },
      { code: '30004', desc: '上传失败' },
    ],
  },
];

export const ErrorCodeTable: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {GROUPS.map((g, gi) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.prefix}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active >= 1 + gi ? 1 : 0,
                y: active >= 1 + gi ? 0 : 20,
              }}
              transition={{ duration: 0.45, ease: EASE, delay: gi * 0.08 }}
              className={`rounded-2xl border p-4 ${g.color}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/40">
                  <Icon className={`h-4 w-4 ${g.text}`} />
                </div>
                <div>
                  <p className={`font-mono text-sm font-black ${g.text}`}>{g.prefix}</p>
                  <p className="font-mono text-[9px] text-slate-500">{g.range}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold text-slate-300">{g.category}</span>
              </div>
              <div className="space-y-1.5">
                {g.examples.map((e, i) => (
                  <motion.div
                    key={e.code}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: active >= 4 + gi * 4 + i ? 1 : 0,
                      x: active >= 4 + gi * 4 + i ? 0 : -8,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5"
                  >
                    <Hash className="h-2.5 w-2.5 text-slate-500" />
                    <span className={`font-mono text-[10.5px] font-bold ${g.text}`}>{e.code}</span>
                    <span className="ml-auto text-[10px] text-slate-300">{e.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 小贴士 */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: active >= 16 ? 1 : 0, y: active >= 16 ? 0 : 14 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mt-4 flex items-center gap-2.5 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-blue-950/20 via-slate-900/40 to-emerald-950/20 px-4 py-3"
      >
        <Hash className="h-4 w-4 shrink-0 text-cyan-300" />
        <p className="text-[11px] text-slate-200">
          建议维护一张错误码表，前缀分类 —— 前端一看到码就知道该弹什么提示，不用解析 message。
        </p>
      </motion.div>
    </div>
  );
};
