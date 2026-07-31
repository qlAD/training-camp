import React from 'react';

type TableTone = 'default' | 'indigo' | 'emerald';

interface DataTableProps {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
  /** 高亮行索引（从 0 开始） */
  highlightRow?: number;
  /** 高亮列索引（从 0 开始） */
  highlightCol?: number;
  caption?: string;
  tone?: TableTone;
}

const toneHighlight: Record<TableTone, { row: string; col: string; header: string }> = {
  default: { row: 'bg-indigo-500/15', col: 'bg-indigo-500/10', header: 'text-indigo-300' },
  indigo: { row: 'bg-indigo-500/15', col: 'bg-indigo-500/10', header: 'text-indigo-300' },
  emerald: { row: 'bg-emerald-500/15', col: 'bg-emerald-500/10', header: 'text-emerald-300' },
};

// 暗色表格：斑马纹 + 可高亮行列 + 数字单元格 amber 等宽
export const DataTable: React.FC<DataTableProps> = ({
  title,
  headers,
  rows,
  highlightRow,
  highlightCol,
  caption,
  tone = 'default',
}) => {
  const t = toneHighlight[tone];
  return (
    <div className="space-y-2 max-w-5xl">
      {title && <div className="text-sm font-bold text-white">{title}</div>}
      <div className="rounded-2xl border border-slate-700/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`px-4 py-2.5 text-left font-bold whitespace-nowrap ${
                      i === highlightCol ? `${t.header} ${t.col}` : 'text-slate-300'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={`border-b border-slate-800 last:border-0 ${
                    ri % 2 === 1 ? 'bg-slate-800/40' : ''
                  } ${ri === highlightRow ? t.row : ''}`}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-2 ${
                        ci === highlightCol ? `${t.col} font-bold text-white` : 'text-slate-300'
                      } ${typeof cell === 'number' ? 'font-mono text-amber-300' : ''}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {caption && <div className="text-[11px] text-slate-400 italic">{caption}</div>}
    </div>
  );
};
