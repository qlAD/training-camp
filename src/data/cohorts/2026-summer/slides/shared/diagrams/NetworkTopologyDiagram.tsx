import React from 'react';
import {
  Database,
  Globe,
  Network,
  Server,
  Shield,
  Smartphone,
  Waypoints,
} from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';
type NodeType = 'client' | 'server' | 'dns' | 'proxy' | 'db' | 'firewall';

interface TopologyNode {
  id: string;
  label: string;
  type: NodeType;
  sublabel?: string;
}

interface TopologyEdge {
  from: string;
  to: string;
  label?: string;
  tone?: Tone;
}

interface NetworkTopologyDiagramProps {
  nodes: TopologyNode[];
  edges: TopologyEdge[];
  title?: string;
}

const NODE_META: Record<NodeType, { icon: React.ComponentType<{ className?: string }>; border: string; bg: string; iconColor: string; badge: string }> = {
  client: { icon: Smartphone, border: 'border-cyan-500/50', bg: 'bg-cyan-950/50', iconColor: 'text-cyan-400', badge: 'text-cyan-300' },
  server: { icon: Server, border: 'border-indigo-500/50', bg: 'bg-indigo-950/50', iconColor: 'text-indigo-400', badge: 'text-indigo-300' },
  dns: { icon: Globe, border: 'border-amber-500/50', bg: 'bg-amber-950/50', iconColor: 'text-amber-400', badge: 'text-amber-300' },
  proxy: { icon: Waypoints, border: 'border-violet-500/50', bg: 'bg-violet-950/50', iconColor: 'text-violet-400', badge: 'text-violet-300' },
  db: { icon: Database, border: 'border-emerald-500/50', bg: 'bg-emerald-950/50', iconColor: 'text-emerald-400', badge: 'text-emerald-300' },
  firewall: { icon: Shield, border: 'border-rose-500/50', bg: 'bg-rose-950/50', iconColor: 'text-rose-400', badge: 'text-rose-300' },
};

const EDGE_STROKE: Record<Tone, string> = {
  indigo: '#818cf8',
  emerald: '#34d399',
  amber: '#fbbf24',
  rose: '#fb7185',
  violet: '#a78bfa',
  cyan: '#22d3ee',
};

const HW = 90; // node half width (viewBox units)
const HH = 32; // node half height

// 射线 (cx,cy)->(tx,ty) 与以 (cx,cy) 为中心、半宽 hw 半高 hh 的矩形边界的交点
function borderPoint(cx: number, cy: number, tx: number, ty: number, hw: number, hh: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const sx = dx === 0 ? Infinity : hw / Math.abs(dx);
  const sy = dy === 0 ? Infinity : hh / Math.abs(dy);
  const s = Math.min(sx, sy);
  return { x: cx + dx * s, y: cy + dy * s };
}

// 网络拓扑图：节点按 type 着色，SVG 曲线连接，foreignObject 渲染节点卡片
export const NetworkTopologyDiagram: React.FC<NetworkTopologyDiagramProps> = ({ nodes, edges, title }) => {
  const n = Math.max(nodes.length, 1);
  const cols = Math.min(n, Math.max(1, Math.ceil(Math.sqrt(n * 1.6))));
  const rows = Math.ceil(n / cols);
  const VB_W = 1000;
  const VB_H = Math.max(240, rows * 180);
  const cellW = VB_W / cols;
  const cellH = VB_H / rows;
  const idxMap = new Map<string, number>();
  nodes.forEach((nd, i) => idxMap.set(nd.id, i));
  const center = (i: number) => ({
    x: ((i % cols) + 0.5) * cellW,
    y: (Math.floor(i / cols) + 0.5) * cellH,
  });

  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <Network className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
        {/* 连线层 */}
        {edges.map((edge, i) => {
          const ai = idxMap.get(edge.from);
          const bi = idxMap.get(edge.to);
          if (ai === undefined || bi === undefined) return null;
          const A = center(ai);
          const B = center(bi);
          const start = borderPoint(A.x, A.y, B.x, B.y, HW, HH);
          const end = borderPoint(B.x, B.y, A.x, A.y, HW, HH);
          const mx = (start.x + end.x) / 2;
          const my = (start.y + end.y) / 2;
          const cx = mx + (VB_W / 2 - mx) * 0.15;
          const cy = my + (VB_H / 2 - my) * 0.15;
          const stroke = edge.tone ? EDGE_STROKE[edge.tone] : '#475569';
          return (
            <g key={`e-${i}`}>
              <path
                d={`M ${start.x} ${start.y} Q ${cx} ${cy} ${end.x} ${end.y}`}
                fill="none"
                stroke={stroke}
                strokeWidth={1.6}
                strokeLinecap="round"
              />
              {edge.label && (
                <g>
                  <rect
                    x={mx - edge.label.length * 3.4 - 4}
                    y={my - 9}
                    width={edge.label.length * 6.8 + 8}
                    height={18}
                    rx={4}
                    fill="#0f172a"
                    opacity={0.9}
                  />
                  <text x={mx} y={my + 3.5} textAnchor="middle" fontSize={11} fill="#cbd5e1">
                    {edge.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* 节点层 */}
        {nodes.map((nd, i) => {
          const meta = NODE_META[nd.type];
          const Icon = meta.icon;
          const c = center(i);
          return (
            <foreignObject key={nd.id} x={c.x - HW} y={c.y - HH} width={HW * 2} height={HH * 2}>
              <div
                className={`flex h-full w-full items-center gap-2 rounded-xl border ${meta.border} ${meta.bg} px-3`}
              >
                <Icon className={`h-[18px] w-[18px] shrink-0 ${meta.iconColor}`} />
                <div className="min-w-0">
                  <div className="truncate text-[13px] font-bold leading-tight text-white">{nd.label}</div>
                  {nd.sublabel && <div className={`truncate text-[10px] leading-tight ${meta.badge}`}>{nd.sublabel}</div>}
                </div>
              </div>
            </foreignObject>
          );
        })}
      </svg>

      {/* 图例 */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
        {(Object.keys(NODE_META) as NodeType[]).map((t) => {
          const m = NODE_META[t];
          const Icon = m.icon;
          return (
            <div key={t} className="flex items-center gap-1.5">
              <Icon className={`h-3 w-3 ${m.iconColor}`} />
              <span className="text-[10px] capitalize text-slate-400">{t}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
