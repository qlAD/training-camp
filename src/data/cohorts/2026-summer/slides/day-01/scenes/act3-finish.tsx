'use client';

import React from 'react';
import { Wand2, Eye, Flame, Globe, Network } from 'lucide-react';
import { SceneSlide } from '../components/scene/SceneSlide';
import { RevealBlock } from '../components/kinetic/RevealBlock';
import { NeonTitle } from '../components/kinetic/NeonTitle';
import { StaggerList } from '../components/kinetic/StaggerList';
import { SloganReveal } from '../components/kinetic/SloganReveal';
import { StageBackground } from '../components/fx/StageBackground';
import { CheckList } from '../components/visual/CheckList';
import { QuizBoard } from '../components/visual/QuizBoard';

/* ---------- 镜头 15：打卡清单 ---------- */
export const Shot15Checklist: React.FC = () => (
  <SceneSlide sceneCount={7}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="今晚把它做出来" at={0} sub="五步完成首日打卡" />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-2xl">
        <CheckList
          at={1}
          items={[
            '注册 TRAE CN，用 AI 生成第一个页面',
            '按五要素写一条完整提示词',
            '在 AI 帮助下看懂你的 HTML 骨架',
            '给页面加一点 CSS（颜色 + 圆角）',
            '上传 Gitee 并在群里晒出你的作品',
          ]}
        />
      </RevealBlock>
    </div>
  </SceneSlide>
);

/* ---------- 镜头 16：知识快问快答 ---------- */
export const Shot16Quiz: React.FC = () => (
  <SceneSlide sceneCount={1}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="三题验收" at={0} sub="点一点，答对才算吸收" />
      </RevealBlock>
      <QuizBoard
        at={0}
        questions={[
          {
            q: 'Vibe Coding 的核心分工是什么？',
            options: ['AI 自己决定一切', '人做决策，AI 写代码', '完全不用写代码', '放弃 IDE 用命令行'],
            answer: 1,
            explain: '人是方向盘，AI 是执行者 —— 你负责方向与评审。',
          },
          {
            q: '结构化提示词里，「给 AI 设定身份」属于哪个要素？',
            options: ['任务', '约束', '角色', '输出'],
            answer: 2,
            explain: '角色 = 你希望 AI 扮演谁，比如「资深前端工程师」。',
          },
          {
            q: '浏览器拿到 HTML 后，第一步把它解析成什么？',
            options: ['像素', '渲染树', '字节码', 'DOM 树'],
            answer: 3,
            explain: 'HTML 先拆成节点、组成 DOM 树，最后才画成像素。',
          },
        ]}
      />
    </div>
  </SceneSlide>
);

/* ---------- 镜头 17：总结预告 ---------- */
export const Shot17Summary: React.FC = () => (
  <SceneSlide sceneCount={4}>
    <StageBackground />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 overflow-y-auto px-10">
      <RevealBlock index={0} className="text-center">
        <NeonTitle text="今天的收获" at={0} />
      </RevealBlock>
      <RevealBlock index={1} className="w-full max-w-xl">
        <StaggerList
          at={1}
          items={[
            { icon: <Wand2 className="h-4 w-4" />, title: 'Vibe Coding 认知', desc: 'AI 写代码，人做决策' },
            { icon: <Eye className="h-4 w-4" />, title: '看懂网页三件套', desc: 'HTML 是骨架，CSS 是化妆师' },
            { icon: <Globe className="h-4 w-4" />, title: '走通工具链', desc: '生成 → 托管 → 部署，全链路国产' },
            { icon: <Flame className="h-4 w-4" />, title: '完成首日打卡', desc: '你的第一个网页已上线' },
          ]}
        />
      </RevealBlock>
      <RevealBlock index={2} className="w-full">
        <div className="flex justify-center">
          <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-3 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 text-cyan-200">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-100">明日预告 · DAY 2</p>
              <p className="text-[11px] text-slate-400">拆开互联网：DNS 与 HTTP，网页是怎么被找到的</p>
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
