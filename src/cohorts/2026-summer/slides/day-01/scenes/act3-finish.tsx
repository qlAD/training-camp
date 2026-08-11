'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScene } from '../components/scene/SceneSlide';
import { COLORS, EASE } from '../components/scene/theme';
import {
  AlertTriangle,
  Lightbulb,
  FileText,
  Rocket,
  BookOpen,
} from 'lucide-react';
import { SceneSlide } from '../components/scene/SceneSlide';
import { RevealBlock } from '../components/kinetic/RevealBlock';
import { NeonTitle } from '../components/kinetic/NeonTitle';
import { StageBackground } from '../components/fx/StageBackground';
import { CheckList } from '../components/visual/CheckList';
import { StaggerList } from '../components/kinetic/StaggerList';
import { FlashWords } from '../components/kinetic/FlashWords';
import { SloganReveal } from '../components/kinetic/SloganReveal';

/* ---------- 横向四步卡片（inline helper，复用 SceneContext 驱动点亮） ---------- */
const StepCards: React.FC<{ steps: string[]; at: number }> = ({ steps, at }) => {
  const { active } = useScene();
  const step = Math.max(0, active - at);

  return (
    <div className="flex items-center justify-between w-full max-w-4xl px-4">
      {steps.map((s, i) => {
        const lit = step >= i + 1;
        return (
          <React.Fragment key={i}>
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-black"
                style={{
                  borderColor: lit ? COLORS.cyan : 'rgba(148,163,184,0.35)',
                  backgroundColor: lit ? 'rgba(34,211,238,0.2)' : 'rgba(15,23,42,0.8)',
                  color: lit ? '#7DF3FF' : 'rgba(148,163,184,0.6)',
                  boxShadow: lit ? `0 0 16px ${COLORS.cyan}55` : 'none',
                }}
              >
                {i + 1}
              </span>
              <motion.p
                className="text-center text-xs font-bold"
                animate={{ color: lit ? '#E2F9FF' : 'rgba(148,163,184,0.55)' }}
                transition={{ duration: 0.4 }}
              >
                {s}
              </motion.p>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.span
                className="text-cyan-400/50 text-lg"
                animate={{ opacity: lit ? 1 : 0.3 }}
              >
                →
              </motion.span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

/* ---------- 镜头 14：今日实操四步法 ---------- */
export const Shot14HandsOn: React.FC = () => (
  <SceneSlide sceneCount={5}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="今天的实操" at={0} sub="四步走一遍" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <StepCards at={1} steps={['想清楚需求', '观察AI产出', '提改进需求', '保存归档']} />
      </RevealBlock>
      <RevealBlock index={4}>
        <p className="text-sm font-medium text-amber-300/80">
          今天不追求漂亮，追求跑通完整流程
        </p>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 15：新手踩坑预警 ---------- */
export const Shot15Pitfalls: React.FC = () => (
  <SceneSlide sceneCount={3}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="新手高频踩坑预警" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-3xl">
        <StaggerList
          at={1}
          items={[
            {
              icon: <AlertTriangle className="h-4 w-4 text-rose-400" />,
              title: 'AI 答非所问',
              desc: '需求太笼统，AI 抓不住重点 → 把需求拆具体，一步一步来',
            },
            {
              icon: <FileText className="h-4 w-4 text-amber-400" />,
              title: '生成代码打不开或乱码',
              desc: '编码格式不匹配 → 让 AI 用 UTF-8 重新生成，或检查文件扩展名',
            },
            {
              icon: <Lightbulb className="h-4 w-4 text-cyan-400" />,
              title: '不知道怎么存文件',
              desc: '用「另存为」保存到本地 homework/day01 文件夹，保持结构清晰',
            },
          ]}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 16：作业与自测清单 ---------- */
export const Shot16Homework: React.FC = () => (
  <SceneSlide sceneCount={6}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 overflow-y-auto px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="今日作业" at={0} sub="生成你的第一个 AI 个人主页" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-2xl">
        <CheckList
          at={1}
          items={[
            '代码能双击在浏览器打开',
            '页面含基本信息（姓名/简介/作品）',
            '至少一轮"提需求→改进"迭代',
            '文件归档到 homework/day01',
          ]}
        />
      </RevealBlock>
      <RevealBlock index={5} className="w-full">
        <div className="flex justify-center">
          <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 text-cyan-200">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-100">提交路径</p>
              <p className="text-[11px] text-slate-400">
                上传 Gitee 仓库 · 文件夹结构：homework/day01/
              </p>
            </div>
          </div>
        </div>
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 17：总结预告 ---------- */
export const Shot17Summary: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 overflow-y-auto px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="Day 1 总结" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full">
        <FlashWords
          at={1}
          words={['14天地图长这样', '全栈工程师思维差在哪', 'Vibe Coding 你是主驾驶']}
          interval={1000}
        />
      </RevealBlock>
      <RevealBlock index={2} className="w-full">
        <div className="flex justify-center">
          <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 text-cyan-200">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-100">明日预告 · DAY 2</p>
              <p className="text-[11px] text-slate-400">计算机底层 + 工具链搭建</p>
            </div>
          </div>
        </div>
      </RevealBlock>
      <RevealBlock index={3} className="w-full pb-2">
        <SloganReveal text="Create wonderful code, build a wonderful world." at={3} />
        <p className="mt-3 text-center text-[11px] text-slate-500">
          —— 明天见，未来的全栈工程师。
        </p>
      </RevealBlock>
    </div>
  </SceneSlide>
);