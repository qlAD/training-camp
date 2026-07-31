'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EASE } from '../scene/theme';

export interface QuizQ {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

interface MiniQuizProps {
  questions: QuizQ[];
  className?: string;
}

/** 三题验收：点击选项即时反馈，答对加分；setState 全在事件回调（天然合规） */
export const MiniQuiz: React.FC<MiniQuizProps> = ({ questions, className = '' }) => {
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState<number | null>(null);

  const q = questions[qIdx];
  const finished = qIdx >= questions.length;

  const choose = (i: number) => {
    if (pick !== null) return;
    setPick(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setQIdx((i) => i + 1);
    setPick(null);
  };

  return (
    <div className={`w-full ${className}`}>
      {finished ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="mx-auto w-full max-w-md rounded-2xl border border-lime-400/40 bg-lime-400/10 px-6 py-8 text-center"
        >
          <p className="font-mono text-5xl font-black text-white">
            {score}
            <span className="text-2xl text-lime-300">/{questions.length}</span>
          </p>
          <p className="mt-2 text-sm font-bold text-lime-100">
            {score === questions.length ? '全对！网页三件套你已经拿捏了 🎉' : '答对一部分，回去复习对应的镜头'}
          </p>
        </motion.div>
      ) : (
        <div className="mx-auto w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4"
          >
            <p className="text-[11px] font-bold text-sky-300">
              第 {qIdx + 1} / {questions.length} 题
            </p>
            <p className="mt-1 text-base font-bold text-slate-100">{q.q}</p>
          </motion.div>

          <div className="mt-3 space-y-2">
            {q.options.map((opt, i) => {
              const isPicked = pick === i;
              const isRight = i === q.answer;
              const showResult = pick !== null;
              return (
                <button
                  key={opt}
                  onClick={() => choose(i)}
                  disabled={showResult}
                  className={`w-full rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-all ${
                    showResult
                      ? isRight
                        ? 'border-lime-400/60 bg-lime-400/15 text-lime-200'
                        : isPicked
                        ? 'border-rose-400/60 bg-rose-400/15 text-rose-200'
                        : 'border-white/10 bg-slate-950/40 text-slate-500'
                      : 'border-white/15 bg-white/5 text-slate-200 hover:border-sky-400/50 hover:bg-sky-400/10'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {pick !== null && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="mt-3 flex items-center justify-between gap-3"
            >
              <p className={`text-xs font-bold ${pick === q.answer ? 'text-lime-300' : 'text-rose-300'}`}>
                {pick === q.answer ? '✓ 正确！' : '✗ 不对'}
                <span className="ml-1 font-medium text-slate-400">{q.explain}</span>
              </p>
              <button
                onClick={next}
                className="shrink-0 rounded-lg bg-sky-500/20 px-3 py-1.5 text-xs font-bold text-sky-200 hover:bg-sky-500/30"
              >
                下一题 →
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
