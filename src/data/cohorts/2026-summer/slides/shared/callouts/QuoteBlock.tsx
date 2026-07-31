import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  /** 作者头像 URL */
  avatar?: string;
}

// 引言/寄语块：大引号装饰 + 引文 + 作者署名（可选头像）
export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author, role, avatar }) => (
  <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-indigo-950/40 border border-slate-700/80 p-6 sm:p-8 overflow-hidden">
    <Quote className="absolute top-4 left-4 h-16 w-16 text-indigo-500/10" />
    <div className="relative">
      <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">&ldquo;{quote}&rdquo;</p>
      {(author || role || avatar) && (
        <div className="mt-4 flex items-center space-x-3">
          {avatar && (
            <img
              src={avatar}
              alt={author || ''}
              className="h-10 w-10 rounded-full border border-indigo-500/40 object-cover"
            />
          )}
          <div>
            {author && <div className="text-sm font-bold text-indigo-200">{author}</div>}
            {role && <div className="text-xs text-slate-400">{role}</div>}
          </div>
        </div>
      )}
    </div>
  </div>
);
