'use client';

import React, { useState } from 'react';
import { CheckCircle2, HelpCircle, XCircle } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  /** 正确答案索引（从 0 开始） */
  answer: number;
  /** 可选解析 */
  explanation?: string;
}

interface QuizSlideProps {
  title: string;
  subtitle?: string;
  questions: QuizQuestion[];
}

// 知识检查问答页：可点击选择 + 显示对错 + 解析
export const QuizSlide: React.FC<QuizSlideProps> = ({
  title,
  subtitle,
  questions,
}) => {
  const [picks, setPicks] = useState<(number | null)[]>(questions.map(() => null));

  const pick = (qIdx: number, optIdx: number) => {
    setPicks((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  };

  return (
    <div className="h-full flex flex-col min-h-0 space-y-5 max-w-4xl">
      <div>
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-300 text-[11px] font-bold mb-2">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>知识检查</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs sm:text-sm text-indigo-300 mt-1">{subtitle}</p>}
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-4">
        {questions.map((q, qIdx) => {
          const picked = picks[qIdx];
          const answered = picked !== null;
          return (
            <div
              key={qIdx}
              className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3"
            >
              <div className="flex items-start space-x-2">
                <span className="px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300 font-bold text-[10px] shrink-0">
                  Q{qIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">{q.question}</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => {
                  const isPicked = picked === oIdx;
                  const isCorrect = q.answer === oIdx;
                  const showCorrect = answered && isCorrect;
                  const showWrong = answered && isPicked && !isCorrect;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => pick(qIdx, oIdx)}
                      disabled={answered}
                      className={`text-left px-3 py-2 rounded-xl border text-xs font-medium flex items-start space-x-2 transition-all ${
                        showCorrect
                          ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-100'
                          : showWrong
                          ? 'bg-rose-500/20 border-rose-500/60 text-rose-100'
                          : isPicked
                          ? 'bg-indigo-500/20 border-indigo-400/60 text-indigo-100'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                      } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className="font-bold text-[10px] shrink-0 mt-0.5">
                        {String.fromCharCode(65 + oIdx)}.
                      </span>
                      <span className="flex-1">{opt}</span>
                      {showCorrect && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />}
                      {showWrong && <XCircle className="h-3.5 w-3.5 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
              {answered && q.explanation && (
                <div className="text-[11px] text-slate-400 italic pl-1">
                  💡 {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
