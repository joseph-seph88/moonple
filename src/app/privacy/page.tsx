'use client';

import { useState } from 'react';
import StarryBackground from '@/components/StarryBackground';
import PrivacyNavigation from '@/components/privacy/PrivacyNavigation';
import PrivacySection from '@/components/privacy/PrivacySection';
import Footer from '@/components/home/Footer';
import { privacyContent, PrivacyLanguage } from '@/content/privacy';
import { content } from '@/content/home';

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<PrivacyLanguage>('ko');
  const t = privacyContent[lang];
  const homeContent = content[lang];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#0F0F23' }}>
      <StarryBackground />
      <PrivacyNavigation lang={lang} setLang={setLang} />

      <div className="relative z-10">
        {/* Header Section */}
        <section className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-gray-400 text-sm">
              {t.lastUpdated}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            {t.sections.map((section, index) => (
              <PrivacySection key={index} section={section} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer t={homeContent} />
      </div>
    </div>
  );
}
