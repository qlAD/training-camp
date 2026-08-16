'use client';

import React from 'react';
import { ServerRoomScene } from '../components/scene/ServerRoomScene';
import { RevealRack } from '../components/kinetic/RevealRack';
import { ServerTitle } from '../components/kinetic/ServerTitle';
import { RackGrid } from '../components/fx/RackGrid';
import { DatabaseGlow } from '../components/fx/DatabaseGlow';
import { FakeVsRealData } from '../components/visual/FakeVsRealData';
import { BackendKitchen } from '../components/visual/BackendKitchen';
import { FrontendBackendSplit } from '../components/visual/FrontendBackendSplit';

/* ---------- Shot01: 冷开场 · 假数据是"演"的 ---------- */
export const Shot01Open: React.FC = () => (
  <ServerRoomScene length={11}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle
          text={'数据是"演"的，可舞台要真的'}
          sub="Day6 开工 · 给「此刻」社区挖一口真正的井"
        />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <FakeVsRealData />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot02: 后端这张"脸" · 餐厅后厨类比 ---------- */
export const Shot02Kitchen: React.FC = () => (
  <ServerRoomScene length={7}>
    <RackGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle
          text={'后端这张"脸"'}
          sub="餐厅后厨类比：顾客 · 点单 · 传菜口 · 厨师 · 仓库"
        />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <BackendKitchen />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot03: 前后端怎么分工 ---------- */
export const Shot03Split: React.FC = () => (
  <ServerRoomScene length={11}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle
          text="前后端怎么分工"
          sub="前端呈现交互 · 后端数据业务 · 中间那层契约就是接口"
        />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <FrontendBackendSplit />
      </RevealRack>
    </div>
  </ServerRoomScene>
);
