import React from 'react';
import { Braces, Clock, Globe } from 'lucide-react';

interface EndpointInfo {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  status: number;
}

interface APIResponseShowcaseProps {
  endpoint: EndpointInfo;
  response: unknown;
  title?: string;
  responseTime?: number;
}

const methodTone: Record<string, string> = {
  GET: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  POST: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  PUT: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
  DELETE: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  PATCH: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
};

const statusTone = (status: number) => {
  if (status >= 200 && status < 300) return 'text-emerald-400';
  if (status >= 300 && status < 400) return 'text-cyan-400';
  if (status >= 400) return 'text-rose-400';
  return 'text-slate-300';
};

// 将 JSON 字符串按 token 拆分为着色 React 节点
const highlightJson = (json: string): React.ReactNode => {
  const regex = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let idx = 0;
  while ((match = regex.exec(json)) !== null) {
    if (match.index > last) parts.push(json.slice(last, match.index));
    const token = match[0];
    let cls = 'text-amber-300';
    if (/^"/.test(token)) {
      cls = /:$/.test(token) ? 'text-indigo-300' : 'text-emerald-300';
    } else if (/true|false/.test(token)) {
      cls = 'text-violet-300';
    } else if (/null/.test(token)) {
      cls = 'text-rose-300';
    } else {
      cls = 'text-cyan-300';
    }
    parts.push(
      <span key={idx++} className={cls}>
        {token}
      </span>
    );
    last = match.index + token.length;
  }
  if (last < json.length) parts.push(json.slice(last));
  return parts;
};

// API 响应展示：HTTP 方法徽章 + 路径 + 状态码 + 美化 JSON
export const APIResponseShowcase: React.FC<APIResponseShowcaseProps> = ({
  endpoint,
  response,
  title,
  responseTime,
}) => {
  const jsonStr = JSON.stringify(response, null, 2);
  const lines = jsonStr.split('\n');

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center space-x-2">
          <Braces className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      {/* 请求行 */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-700/80 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded border ${methodTone[endpoint.method]}`}>
            {endpoint.method}
          </span>
          <code className="text-xs font-mono text-slate-200 break-all">{endpoint.path}</code>
          <span className="ml-auto flex items-center space-x-1 text-xs font-mono font-bold">
            <Globe className="h-3.5 w-3.5 text-slate-500" />
            <span className={statusTone(endpoint.status)}>{endpoint.status}</span>
          </span>
        </div>
        {responseTime !== undefined && (
          <div className="mt-2 flex items-center space-x-1 text-[10px] text-slate-400">
            <Clock className="h-3 w-3" />
            <span>响应耗时 {responseTime} ms</span>
          </div>
        )}
      </div>

      {/* 响应体 */}
      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Response Body</span>
          <span className="text-[10px] text-slate-500 font-mono">application/json</span>
        </div>
        <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="select-none text-slate-600 w-6 shrink-0 text-right pr-3">{i + 1}</span>
                <span className="text-slate-300">{highlightJson(line)}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};
