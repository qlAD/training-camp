'use client';

import React from 'react';
import { TimelineScene } from '../components/scene/TimelineScene';
import { RevealLayer } from '../components/kinetic/RevealLayer';
import { GlowTitle } from '../components/kinetic/GlowTitle';
import { TypeText } from '../components/kinetic/TypeText';
import { PopCards } from '../components/kinetic/PopCards';
import { NetGrid } from '../components/fx/NetGrid';
import { DataRipple } from '../components/fx/DataRipple';
import { NetworkMesh } from '../components/visual/NetworkMesh';
import { ClientServer } from '../components/visual/ClientServer';

/* ---------- 镜头 1：冷开场钩子 ---------- */
export const Shot01ColdOpen: React.FC = () => (
  <TimelineScene length={3}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center px-10">
      <RevealLayer index={0} className="w-full max-w-2xl">
        <div className="rounded-2xl border border-sky-400/20 bg-slate-950/70 p-5 font-mono text-sm text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
          <TypeText
            at={0}
            speed={26}
            lines={[
              '> 你输入 www.example.com 回车…',
              '> DNS: 正在查找 93.184.216.34',
              '> HTTP: 200 OK · 12.4 KB · 86ms',
              '> 页面渲染完成 ✓',
            ]}
          />
        </div>
      </RevealLayer>
      <RevealLayer index={1} className="mt-8">
        <GlowTitle text="拆开互联网" />
      </RevealLayer>
      <RevealLayer index={2} className="mt-4">
        <p className="text-sm font-medium text-slate-300">一次点击背后，发生了什么？</p>
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 2：承诺快闪 ---------- */
export const Shot02Promises: React.FC = () => (
  <TimelineScene length={4}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0} className="w-full">
        <PopCards at={0} words={['看懂 DNS', '看懂 HTTP', '装好环境', '建好仓库']} />
      </RevealLayer>
      <RevealLayer index={1}>
        <GlowTitle text="今天你也能讲明白" />
      </RevealLayer>
      <RevealLayer index={2}>
        <p className="text-sm font-medium text-slate-300">从「会用」到「懂原理」，只差这 50 分钟</p>
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 3：今日路线 ---------- */
export const Shot03Route: React.FC = () => (
  <TimelineScene length={7}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="今天学什么？" sub="五站走完，互联网不再神秘" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <NetworkMesh
          at={1}
          nodes={[
            { id: 'hub', label: '路线', x: 50, y: 30, kind: 'hub' },
            { id: 'n1', label: '认识网络', x: 20, y: 8 },
            { id: 'n2', label: '请求响应', x: 82, y: 8 },
            { id: 'n3', label: '域名 DNS', x: 14, y: 48 },
            { id: 'n4', label: '传输 HTTP', x: 88, y: 48 },
            { id: 'n5', label: '动手准备', x: 50, y: 55 },
          ]}
          edges={[
            ['hub', 'n1'],
            ['hub', 'n2'],
            ['hub', 'n3'],
            ['hub', 'n4'],
            ['hub', 'n5'],
          ]}
        />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 4：互联网是一张网 ---------- */
export const Shot04Web: React.FC = () => (
  <TimelineScene length={5}>
    <NetGrid />
    <DataRipple />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-5 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="互联网：一张巨大的网" sub="你、同学、学校机房、远方网站…彼此相连" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <NetworkMesh
          at={1}
          nodes={[
            { id: 'you', label: '你', x: 20, y: 50 },
            { id: 'school', label: '学校机房', x: 26, y: 14 },
            { id: 'club', label: '社团服务器', x: 50, y: 12 },
            { id: 'site', label: '远方网站', x: 82, y: 46 },
            { id: 'relay', label: '中转', x: 50, y: 50, kind: 'hub' },
          ]}
          edges={[
            ['you', 'relay'],
            ['school', 'relay'],
            ['club', 'relay'],
            ['site', 'relay'],
          ]}
        />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 5：浏览器 ↔ 服务器 ---------- */
export const Shot05ClientServer: React.FC = () => (
  <TimelineScene length={5}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="浏览器 ↔ 服务器" sub="谁是客户端？谁是服务端？" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <ClientServer at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);
