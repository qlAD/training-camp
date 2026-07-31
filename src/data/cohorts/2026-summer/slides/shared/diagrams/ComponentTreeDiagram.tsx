import React from 'react';
import { Component } from 'lucide-react';

interface TreeNode {
  name: string;
  props?: { key: string; value: string }[];
  children?: TreeNode[];
}

interface ComponentTreeDiagramProps {
  root: TreeNode;
  title?: string;
  highlightNodes?: string[];
}

const NodeView: React.FC<{ node: TreeNode; highlightSet: Set<string> }> = ({ node, highlightSet }) => {
  const highlighted = highlightSet.has(node.name);
  return (
    <div className="relative">
      <div
        className={`inline-flex max-w-full flex-col rounded-lg border px-3 py-1.5 ${
          highlighted
            ? 'border-amber-400 bg-amber-950/40 ring-2 ring-amber-400/30'
            : 'border-indigo-500/40 bg-indigo-950/40'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <Component className={`h-3.5 w-3.5 shrink-0 ${highlighted ? 'text-amber-400' : 'text-indigo-400'}`} />
          <span className="truncate text-xs font-bold text-white">{node.name}</span>
        </div>
        {node.props && node.props.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {node.props.map((p) => (
              <span key={p.key} className="rounded bg-slate-800/80 px-1.5 py-0.5 text-[9px] text-slate-400">
                <span className="text-slate-300">{p.key}</span>=<span className="text-cyan-300">{p.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <div className="mt-1.5 space-y-1.5">
          {node.children.map((child, i) => {
            const isLast = i === node.children!.length - 1;
            return (
              <div key={i} className="relative pl-7">
                <span
                  className={`absolute left-[7px] w-px bg-slate-700 ${isLast ? 'top-0 h-3' : 'top-0 bottom-0'}`}
                />
                <span className="absolute left-[7px] top-3 h-px w-5 bg-slate-700" />
                <NodeView node={child} highlightSet={highlightSet} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// 组件树层级图：根节点在顶部，子节点向下展开，缩进 + CSS 连接线（└─ 形状）
export const ComponentTreeDiagram: React.FC<ComponentTreeDiagramProps> = ({
  root,
  title,
  highlightNodes = [],
}) => {
  const highlightSet = new Set(highlightNodes);
  return (
    <div className="w-full">
      {title && (
        <div className="mb-4 flex items-center gap-2">
          <Component className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <NodeView node={root} highlightSet={highlightSet} />
      </div>
    </div>
  );
};
