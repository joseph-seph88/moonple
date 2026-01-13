'use client';

import { useState } from 'react';
import StarryBackground from '@/components/StarryBackground';
import TopNavigation from '@/components/home/TopNavigation';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import MessageSection from '@/components/home/MessageSection';
import DownloadSection from '@/components/home/DownloadSection';
import Footer from '@/components/home/Footer';
import { content, Language } from '@/content/home';

export default function Home() {
  const [lang, setLang] = useState<Language>('ko');
  const t = content[lang];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#0F0F23' }}>
      <StarryBackground />
      <TopNavigation lang={lang} setLang={setLang} t={t} />

      <div className="relative z-10">
        <HeroSection t={t} />
        <FeaturesSection t={t} />
        <MessageSection t={t} />
        <DownloadSection t={t} />
        <Footer t={t} />
      </div>
    </div>
  );
}
