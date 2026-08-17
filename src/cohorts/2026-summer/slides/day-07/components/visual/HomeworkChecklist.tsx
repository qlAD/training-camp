'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useApiContract } from '../scene/useApiContract';
import { EASE } from '../scene/theme';
import { FileText, CheckCircle2, GitBranch, Image as ImageIcon } from 'lucide-react';

export const HomeworkChecklist: React.FC = () => {
  const { active } = useApiContract();

  const deliverables = [
    { icon: FileText, text: '全套接口文档(Apifox 导出或 Markdown) → 归档到 day07 目录' },
    { icon: GitBranch, text: '后端代码推 Gitee，提交评论附关键接口测试截图' },
  ];

  const checks = [
    '接口文档已归档 day07，覆盖用户/笔记/点赞(含 my-liked-notes)/评论/收藏/文件上传',
    '每个接口包含地址、请求方式、入参、返回体、权限要求、异常场景',
    '所有业务接口已开发完成，统一走 code/message/data 响应格式',
    '全局跨域配置已生效，前端能正常访问(或至少 Apifox 不报 CORS)',
    '全局异常处理器已就位，参数校验异常和数据库异常都能兜成规整响应',
    'Apifox 里每个接口独立调用都能正常响应，错误场景也有合理返回',
    '后端代码已推送 Gitee，提交评论附核心接口测试截图(登录/发笔记/点赞/评论/上传)',
    '业务错误码表已整理，前缀分类清晰',
  ];

  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
      {/* 交付物 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <FileText className="h-4 w-4 text-amber-300" />
          <span className="text-sm font-bold text-slate-100">两个交付物</span>
        </div>
        <div className="space-y-2">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: active >= 2 + i ? 1 : 0,
                  x: active >= 2 + i ? 0 : -8,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-2 rounded-lg border border-amber-400/15 bg-amber-500/5 px-3 py-2"
              >
                <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span className="text-[11px] leading-relaxed text-slate-300">{item.text}</span>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active >= 4 ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="mt-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/50 p-2"
        >
          <ImageIcon className="h-3 w-3 text-cyan-300" />
          <p className="text-[10px] text-slate-400">
            测试截图至少覆盖：登录 / 发笔记 / 点赞 / 评论 / 文件上传
          </p>
        </motion.div>
      </motion.div>

      {/* 自测清单 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: active >= 1 ? 1 : 0, y: active >= 1 ? 0 : 16 }}
        transition={{ duration: 0.45, ease: EASE, delay: 0.08 }}
        className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" />
          <span className="text-sm font-bold text-slate-100">自测清单 · 8 项</span>
        </div>
        <div className="space-y-1.5">
          {checks.map((task, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 8 }}
              animate={{
                opacity: active >= 2 + i ? 1 : 0,
                x: active >= 2 + i ? 0 : 8,
              }}
              transition={{ duration: 0.28 }}
              className="flex items-start gap-2 rounded-lg border border-emerald-400/15 bg-emerald-500/5 px-3 py-1.5"
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-600 font-mono text-[9px] font-bold text-slate-500">
                {i + 1}
              </span>
              <span className="text-[10px] leading-relaxed text-slate-300">{task}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
