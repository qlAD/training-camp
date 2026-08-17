'use client';

import React from 'react';
import { ApiContractScene } from '../components/scene/ApiContractScene';
import { RevealContract } from '../components/kinetic/RevealContract';
import { ContractTitle } from '../components/kinetic/ContractTitle';
import { SpecSheetGrid } from '../components/fx/SpecSheetGrid';
import { ContractGlow } from '../components/fx/ContractGlow';
import { ThreePiecesTrio } from '../components/visual/ThreePiecesTrio';
import { UnifiedResponse } from '../components/visual/UnifiedResponse';
import { ErrorCodeTable } from '../components/visual/ErrorCodeTable';
import { AIDocWriter } from '../components/visual/AIDocWriter';
import { FullCrudModules } from '../components/visual/FullCrudModules';

/* ---------- Shot05: 三件套别少 ---------- */
export const Shot05Trio: React.FC = () => (
  <ApiContractScene length={8}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="三件套别少"
          sub="HTTP 状态码 · 统一响应体 · 业务错误码"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <ThreePiecesTrio />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot06: 统一响应体 code/message/data ---------- */
export const Shot06ResponseBody: React.FC = () => (
  <ApiContractScene length={8}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="统一响应体"
          sub="code · message · data —— 前端解析逻辑写一遍就够"
          size="lg"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <UnifiedResponse />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot07: 业务错误码表 · 前缀分类 ---------- */
export const Shot07ErrorCodes: React.FC = () => (
  <ApiContractScene length={17}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="业务错误码表"
          sub="前缀分类 · 1xxxx 用户 · 2xxxx 内容 · 3xxxx 文件"
          size="lg"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <ErrorCodeTable />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot08: 让 AI 当接口文书写手 ---------- */
export const Shot08AIDoc: React.FC = () => (
  <ApiContractScene length={13}>
    <SpecSheetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="让 AI 当接口文书写手"
          sub="喂文档 → 批量生成 → 审稿 → 定稿"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <AIDocWriter />
      </RevealContract>
    </div>
  </ApiContractScene>
);

/* ---------- Shot09: 全业务 CRUD · 四模块 ---------- */
export const Shot09FullCrud: React.FC = () => (
  <ApiContractScene length={23}>
    <SpecSheetGrid />
    <ContractGlow />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealContract index={0}>
        <ContractTitle
          text="全业务 CRUD · 把社区的门都开出来"
          sub="用户 · 笔记 · 互动 · 文件上传 —— 一个不落"
          size="lg"
        />
      </RevealContract>
      <RevealContract index={1} className="w-full">
        <FullCrudModules />
      </RevealContract>
    </div>
  </ApiContractScene>
);
