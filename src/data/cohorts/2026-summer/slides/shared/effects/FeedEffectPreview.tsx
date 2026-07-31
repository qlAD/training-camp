'use client';

import React, { useEffect, useState } from 'react';
import { Newspaper, Heart, MessageCircle } from 'lucide-react';

interface Post {
  author: string;
  time: string;
  content: string;
  avatar?: string;
  images?: string[];
  likes?: number;
  comments?: number;
}

interface FeedEffectPreviewProps {
  posts: Post[];
  title?: string;
}

const avatarColor = (name: string) => {
  const colors = ['bg-indigo-500/30 text-indigo-200', 'bg-emerald-500/30 text-emerald-200', 'bg-amber-500/30 text-amber-200', 'bg-rose-500/30 text-rose-200', 'bg-violet-500/30 text-violet-200', 'bg-cyan-500/30 text-cyan-200'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

// 信息流效果：骨架屏闪烁后逐条淡入
export const FeedEffectPreview: React.FC<FeedEffectPreviewProps> = ({ posts, title }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-4">
      <style>{`
        @keyframes feed-effect-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes feed-effect-fadein {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      {title && (
        <div className="flex items-center space-x-2">
          <Newspaper className="h-4 w-4 text-cyan-400" />
          <h3 className="text-sm font-bold text-white">{title}</h3>
        </div>
      )}

      <div className="space-y-3">
        {!loaded
          ? [0, 1, 2].map((i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-3"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(30,41,59,0.4) 25%, rgba(51,65,85,0.5) 50%, rgba(30,41,59,0.4) 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'feed-effect-shimmer 1.4s linear infinite',
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full bg-slate-700/60" />
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-20 rounded bg-slate-700/60" />
                    <div className="h-2 w-12 rounded bg-slate-700/40" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full rounded bg-slate-700/50" />
                  <div className="h-2 w-4/5 rounded bg-slate-700/40" />
                </div>
                <div className="h-20 w-full rounded-lg bg-slate-700/40" />
              </div>
            ))
          : posts.map((post, i) => (
              <div
                key={`${post.author}-${i}`}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-cyan-500/40 transition-colors"
                style={{ animation: `feed-effect-fadein 0.5s ease-out ${i * 0.12}s both` }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarColor(post.author)}`}>
                    {post.avatar || post.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white">{post.author}</span>
                      <span className="text-[10px] text-slate-500">{post.time}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{post.content}</p>
                    {post.images && post.images.length > 0 && (
                      <div className={`grid ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1.5 mt-2`}>
                        {post.images.map((img, ii) => (
                          <div key={ii} className="h-20 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-[10px] text-slate-500">
                            {img}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center space-x-4 mt-2.5">
                      <span className="flex items-center space-x-1 text-[11px] text-slate-400">
                        <Heart className="h-3.5 w-3.5" />
                        <span>{post.likes ?? 0}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-[11px] text-slate-400">
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>{post.comments ?? 0}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
