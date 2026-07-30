import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "集训营标准化体系全景门户 · 软件学院 AI 创新应用社",
  description:
    "软件学院 AI 创新应用社集训营标准化体系全景门户。聚合历届与未来规划集训期数，每期配套完整训练营策划案 (支持 PDF 导出)、宣传海报 (支持 PNG 导出) 及课时教学演示幻灯片 (支持全屏教学模式)。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
