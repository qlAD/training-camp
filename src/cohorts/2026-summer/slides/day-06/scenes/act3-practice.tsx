'use client';

import React from 'react';
import { ServerRoomScene } from '../components/scene/ServerRoomScene';
import { RevealRack } from '../components/kinetic/RevealRack';
import { ServerTitle } from '../components/kinetic/ServerTitle';
import { RackGrid } from '../components/fx/RackGrid';
import { DatabaseGlow } from '../components/fx/DatabaseGlow';
import { AIDesignFlow } from '../components/visual/AIDesignFlow';
import { ImagesJsonPitfall } from '../components/visual/ImagesJsonPitfall';
import { HandsOnThreeBlocks } from '../components/visual/HandsOnThreeBlocks';
import { HomeworkChecklist } from '../components/visual/HomeworkChecklist';
import { SummaryPreview } from '../components/visual/SummaryPreview';

/* ---------- Shot10: 让 AI 画图纸 ---------- */
export const Shot10AIDesign: React.FC = () => (
  <ServerRoomScene length={17}>
    <RackGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="让 AI 帮你画图纸" sub="喂需求 → 出文档+SQL → 人工校验三道关" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <AIDesignFlow />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot11: 多图存储避坑 ---------- */
export const Shot11ImagesPitfall: React.FC = () => (
  <ServerRoomScene length={8}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle
          text="多图存储避坑"
          sub="images 字段用 JSON 数组，别新建图片表去一对一关联"
          size="lg"
        />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <ImagesJsonPitfall />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot12: 今日实操三段 ---------- */
export const Shot12HandsOn: React.FC = () => (
  <ServerRoomScene length={22}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle
          text="今日实操三段"
          sub="SpringBoot Hello API · MySQL 部署 · AI 生成 + 执行建表 SQL"
        />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <HandsOnThreeBlocks />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot13: 作业与自测清单 ---------- */
export const Shot13Homework: React.FC = () => (
  <ServerRoomScene length={8}>
    <RackGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="作业与自测清单" sub="两个交付物 + 一个后端工程 · 五项自测" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <HomeworkChecklist />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot14: 总结与 Day7 预告 ---------- */
export const Shot14Summary: React.FC = () => (
  <ServerRoomScene length={11}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="今天是个分水岭" size="xl" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <SummaryPreview />
      </RevealRack>
    </div>
  </ServerRoomScene>
);
