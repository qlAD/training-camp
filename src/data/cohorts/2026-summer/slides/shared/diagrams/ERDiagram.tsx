import React from 'react';
import { Database, Key, Link2, Table2 } from 'lucide-react';

type Tone = 'indigo' | 'emerald' | 'amber' | 'rose' | 'violet' | 'cyan';

interface ERField {
  name: string;
  type: string;
  isPK?: boolean;
  isFK?: boolean;
}

interface EREntity {
  name: string;
  fields: ERField[];
}

interface ERRelation {
  from: string;
  to: string;
  label?: string;
  type?: '1:1' | '1:N' | 'N:M';
}

interface ERDiagramProps {
  entities: EREntity[];
  relations?: ERRelation[];
  title?: string;
}

const REL_TONE: Record<string, Tone> = {
  '1:1': 'cyan',
  '1:N': 'indigo',
  'N:M': 'violet',
};

const REL_COLOR: Record<Tone, string> = {
  indigo: 'border-indigo-500/40 bg-indigo-950/40 text-indigo-200',
  emerald: 'border-emerald-500/40 bg-emerald-950/40 text-emerald-200',
  amber: 'border-amber-500/40 bg-amber-950/40 text-amber-200',
  rose: 'border-rose-500/40 bg-rose-950/40 text-rose-200',
  violet: 'border-violet-500/40 bg-violet-950/40 text-violet-200',
  cyan: 'border-cyan-500/40 bg-cyan-950/40 text-cyan-200',
};

// 数据库实体关系图：实体卡片（表名标题栏 + 字段列表）+ 关系标签
export const ERDiagram: React.FC<ERDiagramProps> = ({ entities, relations = [], title }) => (
  <div className="w-full">
    {title && (
      <div className="mb-4 flex items-center gap-2">
        <Database className="h-4 w-4 text-cyan-400" />
        <h3 className="text-sm font-bold text-white">{title}</h3>
      </div>
    )}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entities.map((entity) => (
        <div key={entity.name} className="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-800/80">
          <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-900/60 px-3 py-2">
            <Table2 className="h-3.5 w-3.5 text-indigo-400" />
            <span className="text-xs font-bold text-white">{entity.name}</span>
            <span className="ml-auto text-[10px] text-slate-500">{entity.fields.length} fields</span>
          </div>
          <ul className="divide-y divide-slate-700/50">
            {entity.fields.map((field) => (
              <li key={field.name} className="flex items-center gap-2 px-3 py-1.5">
                {field.isPK ? (
                  <Key className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                ) : field.isFK ? (
                  <Link2 className="h-3.5 w-3.5 shrink-0 text-violet-400" />
                ) : (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                )}
                <span className={`truncate text-[11px] ${field.isPK ? 'font-bold text-amber-200' : field.isFK ? 'font-semibold text-violet-200' : 'text-slate-300'}`}>
                  {field.name}
                </span>
                <span className="ml-auto shrink-0 text-[10px] text-slate-500">{field.type}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {relations.length > 0 && (
      <div className="mt-5">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">关系 · Relations</div>
        <div className="flex flex-wrap gap-2">
          {relations.map((rel, i) => {
            const tone = rel.type ? REL_TONE[rel.type] : 'indigo';
            return (
              <div key={i} className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] ${REL_COLOR[tone]}`}>
                <span className="font-bold">{rel.from}</span>
                <span className="opacity-60">—{rel.type ?? '→'}</span>
                <span className="font-bold">{rel.to}</span>
                {rel.label && <span className="opacity-70">· {rel.label}</span>}
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
);
