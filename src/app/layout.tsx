import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NODE_ENV === 'production' ? '/moonple' : '';

export const metadata: Metadata = {
  title: "Moon Ple - 달이 기억하는 당신의 하루",
  description: "보름달에 소원을 적듯, 당신의 하루를 달에 새기세요",
  icons: {
    icon: `${basePath}/assets/logo_moon_circle.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
