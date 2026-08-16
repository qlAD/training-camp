'use client';

import React from 'react';
import { ServerRoomScene } from '../components/scene/ServerRoomScene';
import { RevealRack } from '../components/kinetic/RevealRack';
import { ServerTitle } from '../components/kinetic/ServerTitle';
import { RackGrid } from '../components/fx/RackGrid';
import { DatabaseGlow } from '../components/fx/DatabaseGlow';
import { TwoToolsCard } from '../components/visual/TwoToolsCard';
import { MavenMirrorFix } from '../components/visual/MavenMirrorFix';
import { SpringBootWhy } from '../components/visual/SpringBootWhy';
import { SpringBootThreeCards } from '../components/visual/SpringBootThreeCards';
import { MySQLHome } from '../components/visual/MySQLHome';
import { ThreeParadigms } from '../components/visual/ThreeParadigms';

/* ---------- Shot04: 两把"刀"配齐 ---------- */
export const Shot04TwoTools: React.FC = () => (
  <ServerRoomScene length={6}>
    <RackGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="工欲善其事，先配好两把刀" sub="IDEA（Java 灶台）+ Maven（依赖管家）" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <TwoToolsCard />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot05: Maven 镜像配置避坑 ---------- */
export const Shot05MavenMirror: React.FC = () => (
  <ServerRoomScene length={8}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="Maven 镜像配置避坑" sub="阿里云镜像 —— 从蜗牛变高铁" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <MavenMirrorFix />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot06: SpringBoot 为什么当主角 ---------- */
export const Shot06SpringBootWhy: React.FC = () => (
  <ServerRoomScene length={7}>
    <RackGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="SpringBoot 为什么是主角" sub="约定大于配置 · 开箱即用" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <SpringBootWhy />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot07: SpringBoot 三个省头发本事 ---------- */
export const Shot07ThreePowers: React.FC = () => (
  <ServerRoomScene length={16}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="三个帮你省头发的本事" sub="内嵌服务器 · 自动配置 · 起步依赖" size="lg" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <SpringBootThreeCards />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot08: 给数据安个"家" — MySQL + DataGrid ---------- */
export const Shot08MySQLHome: React.FC = () => (
  <ServerRoomScene length={9}>
    <RackGrid />
    <DatabaseGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text={'给数据安个"家"'} sub="MySQL 仓库 + DataGrid 管理后台" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <MySQLHome />
      </RevealRack>
    </div>
  </ServerRoomScene>
);

/* ---------- Shot09: 三大范式 · 仓库整理规矩 ---------- */
export const Shot09Paradigms: React.FC = () => (
  <ServerRoomScene length={15}>
    <RackGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealRack index={0}>
        <ServerTitle text="三大范式 · 仓库整理规矩" sub="1NF 不可分 · 2NF 全依赖 · 3NF 不传话" />
      </RevealRack>
      <RevealRack index={1} className="w-full">
        <ThreeParadigms />
      </RevealRack>
    </div>
  </ServerRoomScene>
);
