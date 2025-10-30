import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KT CCTV 설치 상담 신청",
  description: "KT CCTV 설치 상담을 신청하세요. 빠르고 간편한 설치 서비스를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
