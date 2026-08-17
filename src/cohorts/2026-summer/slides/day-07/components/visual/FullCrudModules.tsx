'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { User, FileText, Heart, Upload, Repeat2, Database } from 'lucide-react';

interface Module {
  no: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  color: string;
  text: string;
  endpoints: { method: string; path: string; desc: string; methodColor: string }[];
  note?: string;
}

const METHOD_COLOR: Record<string, string> = {
  GET: 'border-blue-400/40 text-blue-200 bg-blue-950/40',
  POST: 'border-emerald-400/40 text-emerald-200 bg-emerald-950/40',
  PUT: 'border-amber-400/40 text-amber-200 bg-amber-950/40',
  DELETE: 'border-rose-400/40 text-rose-200 bg-rose-950/40',
};

const MODULES: Module[] = [
  {
    no: '01',
    name: '用户',
    icon: User,
    color: 'border-blue-400/30 bg-blue-950/15',
    text: 'text-blue-200',
    endpoints: [
      { method: 'POST', path: '/users/register', desc: '注册', methodColor: METHOD_COLOR.POST },
      { method: 'POST', path: '/users/login', desc: '登录(简化版)', methodColor: METHOD_COLOR.POST },
      { method: 'GET', path: '/users/:id', desc: '查用户信息', methodColor: METHOD_COLOR.GET },
      { method: 'PUT', path: '/users/:id', desc: '改资料', methodColor: METHOD_COLOR.PUT },
    ],
    note: 'JWT 鉴权是 Day8 联调重点，今天先留简化版',
  },
  {
    no: '02',
    name: '笔记',
    icon: FileText,
    color: 'border-emerald-400/30 bg-emerald-950/15',
    text: 'text-emerald-200',
    endpoints: [
      { method: 'POST', path: '/notes', desc: '发布(多图 images)', methodColor: METHOD_COLOR.POST },
      { method: 'GET', path: '/notes?page=1', desc: '列表分页', methodColor: METHOD_COLOR.GET },
      { method: 'GET', path: '/notes/:id', desc: '查详情', methodColor: METHOD_COLOR.GET },
      { method: 'PUT', path: '/notes/:id', desc: '更新', methodColor: METHOD_COLOR.PUT },
      { method: 'DELETE', path: '/notes/:id', desc: '删除', methodColor: METHOD_COLOR.DELETE },
    ],
    note: '图片先上传拿 URL，再把 URL 数组作为 images 字段一起存',
  },
  {
    no: '03',
    name: '互动',
    icon: Heart,
    color: 'border-rose-400/30 bg-rose-950/15',
    text: 'text-rose-200',
    endpoints: [
      { method: 'POST', path: '/notes/:id/likes', desc: '点赞', methodColor: METHOD_COLOR.POST },
      { method: 'DELETE', path: '/notes/:id/likes', desc: '取消赞', methodColor: METHOD_COLOR.DELETE },
      { method: 'POST', path: '/notes/:id/comments', desc: '发评论', methodColor: METHOD_COLOR.POST },
      { method: 'DELETE', path: '/comments/:id', desc: '删评论', methodColor: METHOD_COLOR.DELETE },
      { method: 'GET', path: '/users/me/liked-notes', desc: '我赞过', methodColor: METHOD_COLOR.GET },
    ],
    note: 'my-liked-notes 复用点赞表反查 · 不新建表',
  },
  {
    no: '04',
    name: '文件上传',
    icon: Upload,
    color: 'border-amber-400/30 bg-amber-950/15',
    text: 'text-amber-200',
    endpoints: [
      { method: 'POST', path: '/files/upload', desc: '图片/头像都走它', methodColor: METHOD_COLOR.POST },
    ],
    note: '存服务器目录或对象存储，返回访问 URL',
  },
];

export const FullCrudModules: React.FC = () => {
  const { active } = useApiContract();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {MODULES.map((m, mi) => {
          const Icon = m.icon;
          const baseIdx = 1 + mi * 5;
          return (
            <motion.div
              key={m.no}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active >= baseIdx ? 1 : 0,
                y: active >= baseIdx ? 0 : 20,
              }}
              transition={{ duration: 0.45, ease: EASE, delay: mi * 0.06 }}
              className={`rounded-2xl border p-4 ${m.color}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 font-mono text-[11px] font-black text-white/80">
                    {m.no}
                  </span>
                  <Icon className={`h-4 w-4 ${m.text}`} />
                  <span className={`text-sm font-black ${m.text}`}>{m.name}</span>
                </div>
              </div>
              <div className="space-y-1.5">
                {m.endpoints.map((e, i) => (
                  <motion.div
                    key={e.path}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: active >= baseIdx + 1 + i ? 1 : 0,
                      x: active >= baseIdx + 1 + i ? 0 : -8,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-950/40 px-2.5 py-1.5"
                  >
                    <span
                      className={`rounded border px-1.5 py-0.5 font-mono text-[8.5px] font-bold ${e.methodColor}`}
                    >
                      {e.method}
                    </span>
                    <span className="font-mono text-[10px] text-slate-200">{e.path}</span>
                    <span className="ml-auto text-[9.5px] text-slate-400">{e.desc}</span>
                  </motion.div>
                ))}
              </div>
              {m.note && active >= baseIdx + 1 + m.endpoints.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2.5 flex items-start gap-1.5 rounded-lg border border-white/10 bg-slate-950/50 px-2.5 py-1.5"
                >
                  <span className="mt-0.5 text-[9px] text-slate-500">→</span>
                  <span className="text-[10px] leading-relaxed text-slate-300">{m.note}</span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* my-liked-notes 复用思路 + 开发套路 */}
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: active >= 21 ? 1 : 0, y: active >= 21 ? 0 : 12 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex items-start gap-2.5 rounded-2xl border border-rose-400/30 bg-rose-950/15 px-4 py-3"
        >
          <Repeat2 className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
          <div>
            <p className="text-xs font-bold text-rose-100">my-liked-notes · 零成本复用</p>
            <p className="mt-1 text-[10.5px] leading-relaxed text-slate-300">
              点赞表里 user_id = 当前用户的所有记录，关联笔记表拿详情。换个查询方向就是「我赞过谁」，个人主页「我的收藏」同理复用收藏表。
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: active >= 22 ? 1 : 0, y: active >= 22 ? 0 : 12 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="flex items-start gap-2.5 rounded-2xl border border-cyan-400/30 bg-cyan-950/15 px-4 py-3"
        >
          <Database className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
          <div>
            <p className="text-xs font-bold text-cyan-100">每个接口的开发套路</p>
            <p className="mt-1 text-[10.5px] leading-relaxed text-slate-300">
              接参 → 校验 → 调 service 处理业务 → 操作数据库 → 封装统一响应体返回。写熟前两三个，后面就是复制粘贴改改的体力活。
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
