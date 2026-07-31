'use client';

import React, { useState } from 'react';
import { Braces, ChevronRight } from 'lucide-react';

interface JSONTreeProps {
  title?: string;
  /** 任意 JSON 数据（data 字段允许 any） */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  /** 初始是否整体折叠 */
  collapsed?: boolean;
  /** 初始展开的最大深度，超出该深度的节点初始折叠，默认 2 */
  maxInitialDepth?: number;
}

type NodeType = 'null' | 'array' | 'object' | 'string' | 'number' | 'boolean' | 'other';

const getType = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  v: any
): NodeType => {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'array';
  if (typeof v === 'object') return 'object';
  if (typeof v === 'string') return 'string';
  if (typeof v === 'number') return 'number';
  if (typeof v === 'boolean') return 'boolean';
  return 'other';
};

const ValueLeaf: React.FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}> = ({ value }) => {
  if (value === null) return <span className="text-slate-500 italic">null</span>;
  if (typeof value === 'string') return <span className="text-emerald-300">&ldquo;{value}&rdquo;</span>;
  if (typeof value === 'number') return <span className="text-amber-300">{value}</span>;
  if (typeof value === 'boolean') return <span className="text-rose-300">{String(value)}</span>;
  return <span className="text-slate-300">{String(value)}</span>;
};

interface TreeNodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  keyName?: string;
  depth: number;
  maxDepth: number;
}

const TreeNode: React.FC<TreeNodeProps> = ({ value, keyName, depth, maxDepth }) => {
  const type = getType(value);
  const isContainer = type === 'array' || type === 'object';

  if (!isContainer) {
    return (
      <div className="flex items-start space-x-1.5 py-0.5 pl-2">
        {keyName !== undefined && <span className="text-indigo-300">&ldquo;{keyName}&rdquo;</span>}
        {keyName !== undefined && <span className="text-slate-500">:</span>}
        <ValueLeaf value={value} />
      </div>
    );
  }

  const openBracket = type === 'array' ? '[' : '{';
  const closeBracket = type === 'array' ? ']' : '}';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const entries: [string, any][] =
    type === 'array'
      ? value.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (v: any, i: number) => [String(i), v] as [string, any]
        )
      : Object.entries(value);
  const count = entries.length;

  if (count === 0) {
    return (
      <div className="flex items-start space-x-1.5 py-0.5 pl-2">
        {keyName !== undefined && <span className="text-indigo-300">&ldquo;{keyName}&rdquo;</span>}
        {keyName !== undefined && <span className="text-slate-500">:</span>}
        <span className="text-slate-500">
          {openBracket}
          {closeBracket}
        </span>
      </div>
    );
  }

  const initialOpen = depth < maxDepth;
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="pl-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer w-full flex items-start space-x-1.5 py-0.5 text-left hover:bg-slate-800/40 rounded transition-colors"
      >
        <ChevronRight
          className={`h-3 w-3 mt-0.5 shrink-0 transition-transform ${open ? 'rotate-90 text-indigo-300' : 'text-slate-500'}`}
        />
        {keyName !== undefined && <span className="text-indigo-300">&ldquo;{keyName}&rdquo;</span>}
        {keyName !== undefined && <span className="text-slate-500">:</span>}
        <span className="text-slate-500">{openBracket}</span>
        {!open && (
          <span className="text-slate-500">
            {closeBracket}
            <span className="text-slate-600 ml-1">{count} 项</span>
          </span>
        )}
      </button>
      {open && (
        <div className="ml-3 border-l border-slate-700/60 pl-2">
          {entries.map(([k, v], idx) => (
            <TreeNode
              key={k || idx}
              value={v}
              keyName={type === 'array' ? undefined : k}
              depth={depth + 1}
              maxDepth={maxDepth}
            />
          ))}
          <div className="py-0.5 pl-2">
            <span className="text-slate-500">{closeBracket}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// JSON 树形展示：递归渲染，对象/数组可折叠；键 indigo / 字符串 emerald / 数字 amber / 布尔 rose
export const JSONTree: React.FC<JSONTreeProps> = ({ title, data, collapsed = false, maxInitialDepth = 2 }) => {
  const maxDepth = collapsed ? 0 : maxInitialDepth;
  return (
    <div className="space-y-2 max-w-3xl">
      {title && (
        <div className="text-sm font-bold text-white flex items-center space-x-2">
          <Braces className="h-4 w-4 text-indigo-400" />
          <span>{title}</span>
        </div>
      )}
      <div className="rounded-2xl border border-slate-700/80 bg-slate-950 p-4 overflow-x-auto font-mono text-xs leading-relaxed">
        <TreeNode value={data} depth={0} maxDepth={maxDepth} />
      </div>
    </div>
  );
};
