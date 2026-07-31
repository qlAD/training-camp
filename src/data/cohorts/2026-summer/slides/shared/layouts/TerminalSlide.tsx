import React from 'react';
import { Sparkles, TerminalSquare } from 'lucide-react';

interface TerminalCommand {
  /** 命令文本（含参数） */
  cmd: string;
  /** 预期输出（可多行，使用 \n 分隔） */
  expected?: string;
  /** 可选注释说明 */
  comment?: string;
}

interface TerminalSlideProps {
  title: string;
  subtitle?: string;
  commands: TerminalCommand[];
  takeaway?: string;
  /** 终端提示符，默认 "$" */
  prompt?: string;
}

// 终端命令模拟页：标题 + 命令-预期输出区块 + 关键结论
export const TerminalSlide: React.FC<TerminalSlideProps> = ({
  title,
  subtitle,
  commands,
  takeaway,
  prompt = '$',
}) => (
  <div className="h-full flex flex-col min-h-0 space-y-4 max-w-5xl">
    <div>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-xs text-indigo-300 mt-1">{subtitle}</p>}
    </div>
    <div className="flex-1 min-h-0 flex flex-col rounded-2xl border border-slate-800 bg-black overflow-hidden">
      <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
        </div>
        <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] font-mono ml-2">
          <TerminalSquare className="h-3.5 w-3.5" />
          <span>bash — terminal</span>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 font-mono text-xs leading-relaxed">
        {commands.map((c, i) => (
          <div key={i} className="space-y-1">
            {c.comment && (
              <div className="text-slate-500 italic"># {c.comment}</div>
            )}
            <div className="flex items-start space-x-2">
              <span className="text-emerald-400 shrink-0">{prompt}</span>
              <span className="text-slate-100 break-all">{c.cmd}</span>
            </div>
            {c.expected && (
              <pre className="pl-4 text-slate-400 whitespace-pre-wrap">{c.expected}</pre>
            )}
          </div>
        ))}
      </div>
    </div>
    {takeaway && (
      <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs text-indigo-200 flex items-center space-x-2">
        <Sparkles className="h-4 w-4 text-indigo-400 shrink-0" />
        <span><strong>关键结论：</strong> {takeaway}</span>
      </div>
    )}
  </div>
);
