'use client';

import React from 'react';
import { Building2, DoorOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useTimeline } from '../scene/TimelineScene';
import { EASE } from '../scene/theme';

interface PortDoorProps {
  /** 时间轴位置 */
  at: number;
  className?: string;
}

/** 端口之门：IP 是楼的门牌号，端口是楼里的「门」（0 大楼 1 门80 2 门443 3 说明） */
export const PortDoor: React.FC<PortDoorProps> = ({ at, className = '' }) => {
  const { active } = useTimeline();
  const s = (i: number) => active >= at + i;

  const door = (port: string, label: string, color: string, i: number) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 14 }}
      animate={s(i) ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 14 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
      className={`flex flex-col items-center gap-1.5 rounded-2xl border ${color} px-5 py-3`}
    >
      <DoorOpen className={`h-5 w-5 ${color.includes('sky') ? 'text-sky-300' : 'text-teal-300'}`} />
      <span className="font-mono text-lg font-black text-white">{port}</span>
      <span className="text-[11px] text-slate-400">{label}</span>
    </motion.div>
  );

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={s(0) ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex items-center gap-3 rounded-2xl border border-slate-500/30 bg-slate-800/50 px-6 py-3"
      >
        <Building2 className="h-6 w-6 text-slate-300" />
        <div className="text-left">
          <p className="font-bold text-slate-100">一台服务器</p>
          <p className="font-mono text-[11px] text-slate-400">IP: 172.16.0.1 · 同时服务很多程序</p>
        </div>
      </motion.div>

      <div className="mt-4 flex items-center gap-3">
        {door('80', '网页', 'border-sky-400/30 bg-sky-400/10', 1)}
        {door('443', '加密网页', 'border-teal-400/30 bg-teal-400/10', 2)}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={s(3) ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="mt-4 text-sm text-slate-300"
      >
        端口 = 门牌号（IP）之下的一扇扇「门」：不同程序，各走各的门
      </motion.p>
    </div>
  );
};
