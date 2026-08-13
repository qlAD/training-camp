'use client';

import React from 'react';
import { BlueprintScene } from '../components/scene/BlueprintScene';
import { RevealProject } from '../components/kinetic/RevealProject';
import { BlueprintTitle } from '../components/kinetic/BlueprintTitle';
import { BlueprintGrid } from '../components/fx/BlueprintGrid';
import { ProjectGlow } from '../components/fx/ProjectGlow';
import { NodeSetup } from '../components/visual/NodeSetup';
import { ScaffoldFlow } from '../components/visual/ScaffoldFlow';
import { ProjectStructure } from '../components/visual/ProjectStructure';
import { RouterDemo } from '../components/visual/RouterDemo';
import { PackageJSON } from '../components/visual/PackageJSON';
import { ConfigFiles } from '../components/visual/ConfigFiles';

/* ---------- Shot05: Node.js 安装与 npm 配置 ---------- */
export const Shot05NodeSetup: React.FC = () => (
  <BlueprintScene length={6}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="装好引擎再上路" sub="Node.js 是前端工程的'发动机'" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <NodeSetup />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot06: Vue3+Vite 脚手架 ---------- */
export const Shot06Scaffold: React.FC = () => (
  <BlueprintScene length={6}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="Vue3 + Vite 脚手架" sub="一秒搭好项目骨架" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <ScaffoldFlow />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot07: 项目结构解析 ---------- */
export const Shot07Structure: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="项目结构解析" sub="脚手架生成的目录长什么样" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <ProjectStructure />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot08: 路由系统 ---------- */
export const Shot08Router: React.FC = () => (
  <BlueprintScene length={6}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="路由系统" sub="URL 和页面的对应关系" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <RouterDemo />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot09: 包管理与 package.json ---------- */
export const Shot09PackageJSON: React.FC = () => (
  <BlueprintScene length={7}>
    <BlueprintGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-4 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="包管理" sub="package.json 是项目的'采购清单'" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <PackageJSON />
      </RevealProject>
    </div>
  </BlueprintScene>
);

/* ---------- Shot10: 配置文件与工程化总结 ---------- */
export const Shot10Config: React.FC = () => (
  <BlueprintScene length={5}>
    <BlueprintGrid />
    <ProjectGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealProject index={0}>
        <BlueprintTitle text="配置文件" sub="工程化不止一套脚手架" />
      </RevealProject>
      <RevealProject index={1} className="w-full">
        <ConfigFiles />
      </RevealProject>
    </div>
  </BlueprintScene>
);