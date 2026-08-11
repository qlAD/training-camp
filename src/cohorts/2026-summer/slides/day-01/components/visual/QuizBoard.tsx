'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useScene } from '../scene/SceneSlide';
import { COLORS, EASE } from '../scene/theme';

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

interface QuizBoardProps {
  questions: QuizQuestion[];
  /* 起始场景序号：active > at 后开始出题 */
  at?: number;
  className?: string;
}

/* 交互弹题：点击选项即时对错反馈（镜头 16，唯一交互组件） */
export const QuizBoard: React.FC<QuizBoardProps> = ({ questions, at = 0, className = '' }) => {
  const { active } = useScene();
  const started = active > at;
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[qIdx];

  if (!started) return null;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (qIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      setQIdx((v) => v + 1);
      setPicked(null);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {!finished ? (
        <motion.div
          key={qIdx}
          className="mx-auto max-w-xl rounded-2xl border border-white/12 bg-white/5 p-4 backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-[10px] font-black text-indigo-300">
              {qIdx + 1} / {questions.length}
            </span>
            <span className="text-[10px] text-slate-500">已答对 {score} 题</span>
          </div>
          <p className="text-sm font-black text-slate-100">{q.q}</p>
          <div className="mt-3 space-y-2">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isPicked = picked === i;
              let border = 'rgba(148,163,184,0.25)';
              let bg = 'rgba(15,23,42,0.5)';
              let color = '#E2E8F0';
              if (picked !== null) {
                if (isAnswer) {
                  border = COLORS.green;
                  bg = 'rgba(52,211,153,0.14)';
                  color = '#D1FAE5';
                } else if (isPicked) {
                  border = '#F87171';
                  bg = 'rgba(248,113,113,0.12)';
                  color = '#FECACA';
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => pick(i)}
                  disabled={picked !== null}
                  className="w-full rounded-xl border px-3 py-2 text-left text-xs font-medium transition-all"
                  style={{ borderColor: border, backgroundColor: bg, color }}
                >
                  {picked !== null && isAnswer && <span className="mr-1.5">✅</span>}
                  {picked === i && !isAnswer && <span className="mr-1.5">❌</span>}
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3">
              <p className="text-[11px] leading-relaxed text-slate-400">
                {picked === q.answer ? '💡 答对了！' : '💡 '}
                {q.explain}
              </p>
              <button
                onClick={next}
                className="mt-3 rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-black text-white hover:bg-indigo-500"
              >
                {qIdx + 1 >= questions.length ? '看成绩' : '下一题 →'}
              </button>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          className="mx-auto max-w-xl rounded-2xl border px-6 py-6 text-center"
          style={{
            borderColor: `${COLORS.amber}66`,
            backgroundColor: 'rgba(251,191,36,0.08)',
            boxShadow: `0 0 30px ${COLORS.amber}33`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <p className="text-3xl font-black" style={{ color: COLORS.amber }}>
            {score === questions.length ? '全对 🎉' : `${score} / ${questions.length}`}
          </p>
          <p className="mt-1.5 text-xs text-slate-300">
            {score === questions.length
              ? '今天的知识，稳稳拿下。'
              : '答错的地方，回看对应的镜头再复习一遍。'}
          </p>
        </motion.div>
      )}
    </div>
  );
};
