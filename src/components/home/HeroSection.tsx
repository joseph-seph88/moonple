import Image from 'next/image';
import { Content } from '@/content/home';

interface HeroSectionProps {
  t: Content;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="relative inline-block mb-8">
          <div className="relative">
            <Image
              src="/assets/logo_moon.png"
              alt="Moon Ple Logo"
              width={220}
              height={220}
              priority
              className="rounded-3xl opacity-90"
            />
            <div className="absolute inset-0 flex items-end justify-center pt-8">
              <h1
                className="text-5xl font-light text-white tracking-[0.3em]"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4), 0 4px 8px rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.3em'
                }}
              >
                MOON<span style={{ fontSize: '0.7em', opacity: 0.9 }}>PLE</span>
              </h1>
            </div>
          </div>
        </div>
        <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-4 leading-relaxed" style={{ lineHeight: '1.6' }}>
          {t.hero.slogan1}<br />
          {t.hero.slogan2}
        </p>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          {t.hero.subtitle1}<br />
          {t.hero.subtitle2}
        </p>
      </div>
    </section>
  );
}
