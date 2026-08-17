'use client';

import React from 'react';
import { ApiContractScene } from '../components/scene/ApiContractScene';
import { RevealContract } from '../components/kinetic/RevealContract';
import { ContractTitle } from '../components/kinetic/ContractTitle';
import { SpecSheetGrid } from '../components/fx/SpecSheetGrid';
import { ContractGlow } from '../components/fx/ContractGlow';
import { FrontendLockedOut } from '../components/visual/FrontendLockedOut';
import { ContractMetaphor } from '../components/visual/ContractMetaphor';
import { HttpVerbs } from '../components/visual/HttpVerbs';
import { RestVsOldStyle } from '../components/visual/RestVsOldStyle';

/* ---------- Shot01: 冷开场 · 前端还在门外干瞪眼 ---------- */
export const Shot01Open: React.FC = () => (
  <ApiContractScene length={8}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text={'后厨开出了第一份正经菜单'}
          sub="Day7 开工 · 给「此刻」社区开一道对外的门 —— RESTful API"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <FrontendLockedOut />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot02: RESTful = 前后端那份不成文的契约 ---------- */
export const Shot02Contract: React.FC = () => (
  <ApiContractScene length={8}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="RESTful · 前后端那份不成文的契约"
          sub="餐厅点单的规矩 · 一切皆资源 · URL 是地址 · HTTP 方法是动作"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <ContractMetaphor />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot03: HTTP 四个动作 ---------- */
export const Shot03Verbs: React.FC = () => (
  <ApiContractScene length={10}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle text="HTTP 四个动作" sub="GET 取 · POST 增 · PUT 改 · DELETE 删" />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <HttpVerbs />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot04: REST vs 老接口风格 ---------- */
export const Shot04RestVsOld: React.FC = () => (
  <ApiContractScene length={7}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="REST vs 老接口风格"
          sub="动作 + 资源分离 · 接口干净一致"
          size="lg"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <RestVsOldStyle />
      </RevealContract>
    </div>
  </ApiContractScene>
);
