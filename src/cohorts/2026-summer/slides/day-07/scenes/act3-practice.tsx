'use client';

import React from 'react';
import { ApiContractScene } from '../components/scene/ApiContractScene';
import { RevealContract } from '../components/kinetic/RevealContract';
import { ContractTitle } from '../components/kinetic/ContractTitle';
import { SpecSheetGrid } from '../components/fx/SpecSheetGrid';
import { ContractGlow } from '../components/fx/ContractGlow';
import { ParamValidation } from '../components/visual/ParamValidation';
import { DebugTrio } from '../components/visual/DebugTrio';
import { CorsAndException } from '../components/visual/CorsAndException';
import { HandsOnFiveSteps } from '../components/visual/HandsOnFiveSteps';
import { HomeworkChecklist } from '../components/visual/HomeworkChecklist';
import { SummaryPreview } from '../components/visual/SummaryPreview';

/* ---------- Shot10: 参数校验兜底 ---------- */
export const Shot10ParamValidation: React.FC = () => (
  <ApiContractScene length={10}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="参数校验兜底"
          sub="前端可能漏校验 · 后端必须兜底 · Bean Validation 一个注解搞定一个"
          size="lg"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <ParamValidation />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot11: 调试三件套 ---------- */
export const Shot11DebugTrio: React.FC = () => (
  <ApiContractScene length={14}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="调试三件套"
          sub="IDEA HTTP Client 快测 · Apifox 主力 · 跨域拦路虎 CORS"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <DebugTrio />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot12: 跨域配置 + 全局异常处理器 ---------- */
export const Shot12CorsException: React.FC = () => (
  <ApiContractScene length={7}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="跨域放开 + 异常兜底"
          sub="全局 CORS 配置 · 全局异常处理器 —— 前端怎么调都稳稳接住"
          size="lg"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <CorsAndException />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot13: 今日实操五步 ---------- */
export const Shot13HandsOn: React.FC = () => (
  <ApiContractScene length={22}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="今日实操五步"
          sub="定规范 → AI 文档 → 逐模块开发 → 跨域异常 → 逐接口验收"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <HandsOnFiveSteps />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot14: 作业与自测清单 ---------- */
export const Shot14Homework: React.FC = () => (
  <ApiContractScene length={11}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="作业与自测清单"
          sub="两个交付物 · 八项自测 —— 后端开发阶段交付打包"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <HomeworkChecklist />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot15: 总结与 Day8 预告 ---------- */
export const Shot15Summary: React.FC = () => (
  <ApiContractScene length={11}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle text="后端从「能跑」到「能用」" size="xl" />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <SummaryPreview />
      </RevealContract>
    </div>
  </ApiContractScene>
);
