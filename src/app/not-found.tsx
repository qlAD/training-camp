import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800 px-4 text-center">
      <p className="text-6xl font-extrabold text-indigo-600 mb-4">404</p>
      <h1 className="text-xl font-bold text-slate-900 mb-2">未找到该集训期数</h1>
      <p className="text-sm text-slate-600 mb-6">您访问的页面或期数不存在，可能已下线或尚未上线。</p>
      <Link
        href="/"
        className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
      >
        返回训练营门户
      </Link>
    </div>
  );
}
