'use client';

import React from 'react';

/** 2026 寒假 · Day 01 课件占位组件（课件就绪后直接替换本文件内容即可） */
export default function WinterDay01() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 p-10 text-center">
      <div className="text-[10px] uppercase tracking-[0.4em] text-sky-500/70 font-bold mb-3">
        Day 01 · 2026 Winter Bootcamp
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-3">
        Agent 时代的前端工程导学
      </h1>
      <p className="text-slate-600 max-w-xl mb-10">
        课件制作中：Day 01 将覆盖 AI/Agent 开发环境一键化、Vibe Coding 协作范式、两个实战项目的整体蓝图与 Day 01 入门代码。
      </p>
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur border border-sky-200 text-xs text-sky-700 font-bold">
        <span>❄</span>
        <span>2026 寒假 · 课件制作中</span>
      </div>
    </div>
  );
}
