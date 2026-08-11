'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE, FONT_MONO } from '../scene/theme';

interface MakeupCardProps {
  at?: number;
  className?: string;
}

const STEPS = [
  { code: 'background: linear-gradient(135deg, #6366F1, #7C3AED, #E879F9);', step: 1 },
  { code: 'padding: 24px 28px;', step: 2 },
  { code: 'border-radius: 24px;', step: 3 },
  { code: 'box-shadow: 0 18px 52px rgba(99,102,241,0.45);', step: 4 },
  { code: 'border: 1px solid rgba(255,255,255,0.25);', step: 5 },
  { code: 'display: flex; align-items: center; gap: 16px;', step: 6 },
  { code: 'h2 { font-weight: 800; color: white; font-size: 18px; }', step: 7 },
  { code: 'p  { color: rgba(255,255,255,0.82); line-height: 1.55; }', step: 8 },
];

/* 上妆卡：HTML 骨头从 step0 就一直存在（灰扑扑挤在一起），8 步只改 CSS 把它一点点「化漂亮」 */
export const MakeupCard: React.FC<MakeupCardProps> = ({ at = 0, className = '' }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className={`grid grid-cols-[1fr_auto] items-center gap-6 ${className}`}>
      {/* 左：CSS 代码逐行点亮 */}
      <div className={`rounded-2xl border border-white/10 bg-black/40 p-3.5 ${FONT_MONO} text-[10px] leading-relaxed`}>
        <p className="mb-2 text-[9px] font-black tracking-widest text-fuchsia-300">style.css · 化妆师的手</p>
        <div className="py-0.5" style={{ color: step >= 1 ? '#F5D0FE' : 'rgba(148,163,184,0.35)' }}>
          .profile-card {'{'}
        </div>
        {STEPS.slice(0, 6).map((s) => {
          const lit = step >= s.step;
          const isActive = step === s.step;
          return (
            <motion.div
              key={s.step}
              className="flex items-baseline gap-2 py-0.5 pl-4"
              style={{
                color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.3)',
                backgroundColor: isActive ? 'rgba(232,121,249,0.13)' : 'transparent',
                borderRadius: 4,
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: EASE, delay: 0.02 }}
            >
              <span className="text-[9px]" style={{ color: lit ? COLORS.magenta : 'rgba(148,163,184,0.4)' }}>
                {lit ? '✓' : s.step}
              </span>
              <span>{s.code}</span>
            </motion.div>
          );
        })}
        {/* 子选择器 h2 / p（对应已经存在于 HTML 里的标题和段落节点） */}
        {STEPS.slice(6).map((s) => {
          const lit = step >= s.step;
          const isActive = step === s.step;
          return (
            <motion.div
              key={s.step}
              className="flex items-baseline gap-2 py-0.5 pl-4"
              style={{
                color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.3)',
                backgroundColor: isActive ? 'rgba(232,121,249,0.13)' : 'transparent',
                borderRadius: 4,
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: EASE, delay: 0.02 }}
            >
              <span className="text-[9px]" style={{ color: lit ? COLORS.magenta : 'rgba(148,163,184,0.4)' }}>
                {lit ? '✓' : s.step}
              </span>
              <span>{s.code}</span>
            </motion.div>
          );
        })}
        <div className="py-0.5" style={{ color: step >= 1 ? '#F5D0FE' : 'rgba(148,163,184,0.35)' }}>
          {'}'}
        </div>
      </div>

      {/* 右：预览卡 —— 所有 DOM 从 step0 就一直存在，8 步只改 CSS */}
      <div className="flex items-center justify-center">
        <motion.div
          className="relative w-[280px]"
          style={{
            // step1: 背景渐变（step0 默认是一块灰透明方框）
            background:
              step >= 1
                ? 'linear-gradient(135deg, #6366F1 0%, #7C3AED 50%, #E879F9 100%)'
                : 'rgba(148,163,184,0.10)',
            // step2: padding 撑开（step0 紧贴边框）
            padding: step >= 2 ? '24px 28px' : '6px 8px',
            // step3: 大圆角（step0 是浏览器默认的方角）
            borderRadius: step >= 3 ? 24 : step >= 1 ? 6 : 2,
            // step4: 霓虹阴影 + 轻微浮动
            boxShadow:
              step >= 4
                ? '0 18px 52px rgba(99,102,241,0.45), 0 2px 8px rgba(0,0,0,0.2)'
                : 'none',
            // step5: 半透明描边 + backdrop-blur 毛玻璃感
            border:
              step >= 5
                ? '1px solid rgba(255,255,255,0.28)'
                : '1px solid rgba(148,163,184,0.18)',
            backdropFilter: step >= 5 ? 'blur(10px)' : undefined,
            color: step >= 2 ? 'rgba(255,255,255,0.85)' : 'rgba(148,163,184,0.48)',
          }}
          animate={step >= 4 ? { y: [0, -2, 0] } : {}}
          transition={{
            duration: 2.2,
            repeat: step >= 4 ? Infinity : 0,
            repeatDelay: 1.4,
            ease: EASE,
          }}
        >
          {/* 内容容器：step0 就是浏览器默认 display:block，step6 变 flex 左右排布 */}
          <div
            className="w-full"
            style={{
              display: step >= 6 ? 'flex' : 'block',
              alignItems: step >= 6 ? 'center' : undefined,
              gap: step >= 6 ? 16 : 0,
            }}
          >
            {/* ───────── 头像 <img>（step0 就存在：灰方块、很小、无描边、无阴影） ───────── */}
            <motion.div
              className="shrink-0 overflow-hidden"
              style={{
                width: step >= 6 ? 60 : step >= 2 ? 38 : 26,
                height: step >= 6 ? 60 : step >= 2 ? 38 : 26,
                marginLeft: step >= 6 ? 0 : 'auto',
                marginRight: step >= 6 ? 0 : 'auto',
                marginBottom: step >= 6 ? 0 : step >= 2 ? 8 : 4,
                borderRadius: step >= 5 ? 9999 : step >= 3 ? 8 : 0,
                background:
                  step >= 1
                    ? 'radial-gradient(circle at 30% 30%, #FCD34D 0%, #F59E0B 40%, #9333EA 100%)'
                    : 'rgba(148,163,184,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border:
                  step >= 5
                    ? '2px solid rgba(255,255,255,0.45)'
                    : '1px solid rgba(148,163,184,0.35)',
                boxShadow: step >= 4 ? '0 4px 14px rgba(0,0,0,0.25)' : 'none',
                opacity: step >= 1 ? 1 : 0.55,
              }}
            >
              <span
                style={{
                  fontSize: step >= 6 ? 24 : step >= 2 ? 16 : 10,
                  filter: step >= 1 ? 'none' : 'grayscale(0.7)',
                }}
              >
                👩‍💻
              </span>
            </motion.div>

            {/* 信息区（骨头从 step0 就存在：h2 + p1 + badges + p2 四个节点一直都在） */}
            <div className="flex-1 min-w-0">
              {/* ───────── h2（step0 就存在：灰、挤、默认字重 / step7 变亮变粗变大） ───────── */}
              <h2
                className="truncate"
                style={{
                  margin: 0,
                  fontSize: step >= 7 ? 18 : step >= 2 ? 13 : 10,
                  fontWeight: step >= 7 ? 800 : 500,
                  color: step >= 7 ? '#FFFFFF' : step >= 2 ? 'rgba(255,255,255,0.65)' : 'rgba(148,163,184,0.5)',
                  textAlign: step >= 6 ? 'left' : 'center',
                  letterSpacing: step >= 7 ? '-0.01em' : undefined,
                  lineHeight: 1.25,
                  opacity: step >= 2 ? 1 : 0.8,
                }}
              >
                李小白 · Bai
              </h2>

              {/* ───────── p1 头衔（step0 就存在：灰小字挤在一起 / step8 加 color + line-height 变清楚） ───────── */}
              <p
                style={{
                  margin: step >= 2 ? '6px 0 0 0' : '2px 0 0 0',
                  fontSize: step >= 8 ? 11 : step >= 2 ? 10 : 9,
                  color: step >= 8 ? 'rgba(255,255,255,0.82)' : step >= 2 ? 'rgba(255,255,255,0.52)' : 'rgba(148,163,184,0.45)',
                  textAlign: step >= 6 ? 'left' : 'center',
                  lineHeight: step >= 8 ? 1.55 : 1.2,
                  // step<2 时文字很淡，模拟"没 CSS 的默认状态下挤在一起看不清楚"
                  opacity: step >= 2 ? 1 : 0.65,
                }}
              >
                软件学院 2025 级 · AI 创新应用社成员
              </p>

              {/* ───────── 3 枚徽章 <span>（step0 就存在：灰字没 padding 堆成一串 / step7 才变清楚有圆角有底色） ───────── */}
              <div
                className="flex flex-wrap"
                style={{
                  marginTop: step >= 7 ? 10 : 3,
                  gap: step >= 7 ? 6 : 2,
                  justifyContent: step >= 6 ? 'flex-start' : 'center',
                  opacity: step >= 7 ? 1 : 0.5,
                }}
              >
                {['HTML+CSS', 'Prompt 工程', 'AI 助手'].map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: step >= 7 ? '3px 10px' : '1px 2px',
                      fontSize: step >= 7 ? 9.5 : 8.5,
                      fontWeight: step >= 7 ? 700 : 500,
                      color: step >= 7 ? '#F5D0FE' : 'rgba(148,163,184,0.55)',
                      background: step >= 7 ? 'rgba(255,255,255,0.14)' : 'transparent',
                      border: step >= 7 ? '1px solid rgba(255,255,255,0.22)' : 'none',
                      borderRadius: step >= 7 ? 999 : 0,
                      whiteSpace: 'nowrap',
                      // step<7 时就是浏览器默认的一串灰字 —— 没背景没圆角挤在一起
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* ───────── p2 完整简介（step0 就存在：很淡很挤几乎看不清 / step8 变清楚 line-height 撑开） ───────── */}
              <p
                style={{
                  margin: step >= 8 ? '10px 0 0 0' : '3px 0 0 0',
                  fontSize: step >= 8 ? 10.5 : 9,
                  color: step >= 8 ? 'rgba(255,255,255,0.72)' : 'rgba(148,163,184,0.4)',
                  textAlign: step >= 6 ? 'left' : 'center',
                  lineHeight: step >= 8 ? 1.65 : 1.15,
                  opacity: step >= 8 ? 1 : step >= 2 ? 0.45 : 0.3,
                }}
              >
                5 天做出一个 AI 生成的个人简介网页 —— 从一行 HTML 开始，到现在渐变、圆角、阴影、排版全部配齐，你已经拥有了第一张自己的作品页 ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
