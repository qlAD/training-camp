'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Medal, Crown, Sparkles, Award } from 'lucide-react';

type Rank = 'first' | 'second' | 'third' | 'feature';

interface AwardItem {
  rank: Rank;
  title: string;
  prize?: string;
  certificate?: string;
}

interface AwardShowcaseEffectProps {
  awards: AwardItem[];
  title?: string;
  triggerConfetti?: boolean;
}

const rankConfig: Record<Rank, { tone: string; ring: string; chip: string; icon: React.ReactNode; label: string }> = {
  first: {
    tone: 'text-amber-300',
    ring: 'border-amber-500/50',
    chip: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    icon: <Crown className="h-7 w-7" />,
    label: '一等奖',
  },
  second: {
    tone: 'text-slate-300',
    ring: 'border-slate-400/40',
    chip: 'bg-slate-400/15 text-slate-300 border-slate-400/30',
    icon: <Medal className="h-7 w-7" />,
    label: '二等奖',
  },
  third: {
    tone: 'text-orange-300',
    ring: 'border-orange-500/40',
    chip: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    icon: <Medal className="h-7 w-7" />,
    label: '三等奖',
  },
  feature: {
    tone: 'text-violet-300',
    ring: 'border-violet-500/50',
    chip: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    icon: <Trophy className="h-7 w-7" />,
    label: '特别奖',
  },
};

// 奖项展示：奖杯图标 + 等级配色（first 金 / second 银 / third 铜 / feature 紫）+ 可选 confetti
export const AwardShowcaseEffect: React.FC<AwardShowcaseEffectProps> = ({ awards, title, triggerConfetti }) => {
  const firedRef = useRef(false);

  const fireConfetti = useCallback(() => {
    const colors = ['#f59e0b', '#6366f1', '#8b5cf6', '#10b981', '#06b6d4'];
    const burst = (origin: { x: number; y: number }) => {
      confetti({
        particleCount: 80,
        spread: 70,
        startVelocity: 45,
        origin,
        colors,
        scalar: 1.1,
      });
    };
    burst({ x: 0.2, y: 0.6 });
    burst({ x: 0.8, y: 0.6 });
    setTimeout(() => burst({ x: 0.5, y: 0.5 }), 220);
  }, []);

  useEffect(() => {
    if (triggerConfetti && !firedRef.current) {
      firedRef.current = true;
      const t = setTimeout(fireConfetti, 400);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [triggerConfetti, fireConfetti]);

  return (
    <div className="space-y-4">
      <style>{`
        @keyframes award-showcase-glow {
          0%, 100% { filter: drop-shadow(0 0 0 rgba(245,158,11,0)); }
          50% { filter: drop-shadow(0 0 12px rgba(245,158,11,0.4)); }
        }
        @keyframes award-showcase-rise {
          0% { transform: translateY(16px) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes award-showcase-shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Award className="h-4 w-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 border border-amber-500/20 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((a, i) => {
            const cfg = rankConfig[a.rank];
            const isFirst = a.rank === 'first';
            return (
              <div
                key={`${a.title}-${i}`}
                className={`relative p-5 rounded-2xl bg-slate-800/60 border ${cfg.ring} flex flex-col items-center text-center overflow-hidden`}
                style={{ animation: `award-showcase-rise 0.6s ease-out ${i * 0.12}s both` }}
              >
                {/* shimmer stripe for first place */}
                {isFirst && (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-30"
                    style={{
                      backgroundImage: 'linear-gradient(110deg, transparent 30%, rgba(245,158,11,0.5) 50%, transparent 70%)',
                      backgroundSize: '200% 100%',
                      animation: 'award-showcase-shine 3s linear infinite',
                    }}
                  />
                )}
                <div
                  className={`h-14 w-14 rounded-full bg-slate-900/80 border ${cfg.ring} flex items-center justify-center ${cfg.tone} relative z-10`}
                  style={{ animation: isFirst ? 'award-showcase-glow 2.4s ease-in-out infinite' : undefined }}
                >
                  {cfg.icon}
                </div>
                <span className={`mt-3 text-[10px] font-bold px-2 py-0.5 rounded-full border ${cfg.chip} relative z-10`}>
                  {cfg.label}
                </span>
                <div className="mt-2 text-sm font-bold text-white relative z-10">{a.title}</div>
                {a.prize && (
                  <div className="mt-1 flex items-center space-x-1 text-[11px] text-amber-300 relative z-10">
                    <Sparkles className="h-3 w-3" />
                    <span>{a.prize}</span>
                  </div>
                )}
                {a.certificate && (
                  <div className="mt-1 text-[10px] text-slate-400 relative z-10">{a.certificate}</div>
                )}
              </div>
            );
          })}
        </div>

        {triggerConfetti && (
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={fireConfetti}
              className="inline-flex items-center space-x-1.5 px-4 h-9 rounded-full text-xs font-bold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-900/40 transition-all"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>庆祝一下</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
