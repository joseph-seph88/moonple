import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moon Ple - 개인정보 처리방침',
  description: 'Moon Ple 앱의 개인정보 처리방침 및 Privacy Policy',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
