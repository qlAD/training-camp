'use client';

import React from 'react';
import { TimelineScene } from '../components/scene/TimelineScene';
import { RevealLayer } from '../components/kinetic/RevealLayer';
import { GlowTitle } from '../components/kinetic/GlowTitle';
import { NetGrid } from '../components/fx/NetGrid';
import { IPPlate } from '../components/visual/IPPlate';
import { PortDoor } from '../components/visual/PortDoor';
import { URLSplit } from '../components/visual/URLSplit';
import { PhoneBook } from '../components/visual/PhoneBook';
import { DNSTrip } from '../components/visual/DNSTrip';
import { LetterFlow } from '../components/visual/LetterFlow';
import { StatusBadges } from '../components/visual/StatusBadges';

/* ---------- 镜头 6：IP 地址 ---------- */
export const Shot06IP: React.FC = () => (
  <TimelineScene length={6}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="IP：设备的门牌号" sub="172.16.0.1 这样的数字地址" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <IPPlate at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 7：端口 ---------- */
export const Shot07Port: React.FC = () => (
  <TimelineScene length={4}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="端口：门牌下的「门」" sub="一台服务器，同时服务很多程序" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <PortDoor at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 8：URL 拆解 ---------- */
export const Shot08URL: React.FC = () => (
  <TimelineScene length={7}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="URL：一封信的完整地址" sub="协议 · 域名 · 端口 · 路径 · 参数" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <URLSplit at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 9：DNS 通讯录 ---------- */
export const Shot09DNS: React.FC = () => (
  <TimelineScene length={6}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="DNS：互联网的通讯录" sub="记名字，不记数字" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <PhoneBook at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 10：DNS 解析旅程 ---------- */
export const Shot10DNSTrip: React.FC = () => (
  <TimelineScene length={7}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="输入网址后发生了什么" sub="一次 DNS 解析的旅程" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <DNSTrip at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 11：HTTP 请求 ---------- */
export const Shot11HTTP: React.FC = () => (
  <TimelineScene length={4}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="HTTP：浏览器写的信" sub="请求 = 方法 + 路径 + 头" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <LetterFlow at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);

/* ---------- 镜头 12：状态码 ---------- */
export const Shot12Status: React.FC = () => (
  <TimelineScene length={4}>
    <NetGrid />
    <div className="relative z-10 flex h-full min-h-0 flex-col items-center justify-center gap-6 px-10">
      <RevealLayer index={0}>
        <GlowTitle text="服务器回的信" sub="状态码 200 / 404 / 500" />
      </RevealLayer>
      <RevealLayer index={1} className="w-full">
        <StatusBadges at={1} />
      </RevealLayer>
    </div>
  </TimelineScene>
);
