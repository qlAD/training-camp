import React from 'react';
import { Workflow } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';
type FlowNodeType = 'start' | 'process' | 'decision' | 'end' | 'io';

interface FlowNode {
  id: string;
  label: string;
  type: FlowNodeType;
  tone?: Tone;
}

interface FlowEdge {
  from: string;
  to: string;
  label?: string;
}

interface FlowchartDiagramProps {
  nodes: FlowNode[];
  edges: FlowEdge[];
  title?: string;
}

const TYPE_TONE: Record<FlowNodeType, Tone> = {
  start: 'emerald',
  process: 'indigo',
  decision: 'amber',
  end: 'rose',
  io: 'violet',
};

const NODE_COLOR: Record<Tone, { fill: string; stroke: string; text: string }> = {
  indigo: { fill: '#1e1b4b', stroke: '#818cf8', text: '#e0e7ff' },
  emerald: { fill: '#022c22', stroke: '#34d399', text: '#a7f3d0' },
  amber: { fill: '#451a03', stroke: '#fbbf24', text: '#fde68a' },
  rose: { fill: '#4c0519', stroke: '#fb7185', text: '#fecdd3' },
  violet: { fill: '#2e1065', stroke: '#a78bfa', text: '#ddd6fe' },
  cyan: { fill: '#083344', stroke: '#22d3ee', text: '#a5f3fc' },
};

const EDGE_STROKE: Record<Tone, string> = {
  indigo: '#818cf8',
  emerald: '#34d399',
  amber: '#fbbf24',
  rose: '#fb7185',
  violet: '#a78bfa',
  cyan: '#22d3ee',
};

const DEFAULT_STROKE = '#64748b';

const NW = 85; // node half width
const NH = 30; // node half height
const DW = 90; // decision half width
const DH = 34; // decision half height

function rectBorder(cx: number, cy: number, tx: number, ty: number, hw: number, hh: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const sx = dx === 0 ? Infinity : hw / Math.abs(dx);
  const sy = dy === 0 ? Infinity : hh / Math.abs(dy);
  const s = Math.min(sx, sy);
  return { x: cx + dx * s, y: cy + dy * s };
}

function diamondBorder(cx: number, cy: number, tx: number, ty: number, hw: number, hh: number) {
  const dx = tx - cx;
  const dy = ty - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const t = 1 / (Math.abs(dx) / hw + Math.abs(dy) / hh);
  return { x: cx + dx * t, y: cy + dy * t };
}

function nodeBorder(node: FlowNode, cx: number, cy: number, tx: number, ty: number) {
  if (node.type === 'decision') return diamondBorder(cx, cy, tx, ty, DW, DH);
  return rectBorder(cx, cy, tx, ty, NW, NH);
}

const NodeShape: React.FC<{ node: FlowNode; cx: number; cy: number }> = ({ node, cx, cy }) => {
  const tone = node.tone ?? TYPE_TONE[node.type];
  const c = NODE_COLOR[tone];
  const label = node.label;
  const common = { fill: c.fill, stroke: c.stroke, strokeWidth: 1.6 };
  switch (node.type) {
    case 'start':
    case 'end':
      return (
        <g>
          <rect x={cx - NW} y={cy - NH} width={NW * 2} height={NH * 2} rx={NH} ry={NH} {...common} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={13} fontWeight="bold" fill={c.text}>
            {label}
          </text>
        </g>
      );
    case 'decision':
      return (
        <g>
          <polygon points={`${cx},${cy - DH} ${cx + DW},${cy} ${cx},${cy + DH} ${cx - DW},${cy}`} {...common} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={12} fontWeight="bold" fill={c.text}>
            {label}
          </text>
        </g>
      );
    case 'io':
      return (
        <g>
          <polygon points={`${cx - 70},${cy - NH} ${cx + 85},${cy - NH} ${cx + 70},${cy + NH} ${cx - 85},${cy + NH}`} {...common} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={13} fontWeight="bold" fill={c.text}>
            {label}
          </text>
        </g>
      );
    default: // process
      return (
        <g>
          <rect x={cx - NW} y={cy - NH} width={NW * 2} height={NH * 2} rx={8} ry={8} {...common} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={13} fontWeight="bold" fill={c.text}>
            {label}
          </text>
        </g>
      );
  }
};

// 决策/流程图：start/end 圆角胶囊、process 矩形、decision 菱形、io 平行四边形，SVG 连线 + 箭头
export const FlowchartDiagram: React.FC<FlowchartDiagramProps> = ({ nodes, edges, title }) => {
  const n = Math.max(nodes.length, 1);
  const cols = Math.min(n, Math.max(1, Math.ceil(Math.sqrt(n * 1.5))));
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

  const markerTones = new Set<Tone>();
  edges.forEach((e) => {
    const bi = idxMap.get(e.to);
    if (bi !== undefined) markerTones.add(nodes[bi].tone ?? TYPE_TONE[nodes[bi].type]);
  });

  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <Workflow className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="arrow-default" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L12,6 L0,12 Z" fill={DEFAULT_STROKE} />
          </marker>
          {Array.from(markerTones).map((t) => (
            <marker key={`arrow-${t}`} id={`arrow-${t}`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M0,0 L12,6 L0,12 Z" fill={EDGE_STROKE[t]} />
            </marker>
          ))}
        </defs>

        {/* 连线层 */}
        {edges.map((edge, i) => {
          const ai = idxMap.get(edge.from);
          const bi = idxMap.get(edge.to);
          if (ai === undefined || bi === undefined) return null;
          const A = center(ai);
          const B = center(bi);
          const aNode = nodes[ai];
          const bNode = nodes[bi];
          const start = nodeBorder(aNode, A.x, A.y, B.x, B.y);
          const end = nodeBorder(bNode, B.x, B.y, A.x, A.y);
          const bTone = bNode.tone ?? TYPE_TONE[bNode.type];
          const stroke = EDGE_STROKE[bTone];
          const mx = (start.x + end.x) / 2;
          const my = (start.y + end.y) / 2;
          const lw = edge.label ? edge.label.length * 6.6 + 10 : 0;
          return (
            <g key={`e-${i}`}>
              <path
                d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                fill="none"
                stroke={stroke}
                strokeWidth={1.6}
                strokeLinecap="round"
                markerEnd={`url(#arrow-${bTone})`}
              />
              {edge.label && (
                <g>
                  <rect x={mx - lw / 2} y={my - 10} width={lw} height={20} rx={4} fill="#0f172a" opacity={0.92} />
                  <text x={mx} y={my + 4} textAnchor="middle" fontSize={11} fill="#cbd5e1">
                    {edge.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* 节点层 */}
        {nodes.map((nd, i) => {
          const c = center(i);
          return <NodeShape key={nd.id} node={nd} cx={c.x} cy={c.y} />;
        })}
      </svg>
    </div>
  );
};
