import Link from 'next/link';
import { PrivacyLanguage } from '@/content/privacy';

interface PrivacyNavigationProps {
  lang: PrivacyLanguage;
  setLang: (lang: PrivacyLanguage) => void;
}

export default function PrivacyNavigation({ lang, setLang }: PrivacyNavigationProps) {
  return (
    <div className="fixed top-6 right-8 z-50 flex flex-col gap-3 items-end max-w-[180px]">
      <div className="flex gap-2 bg-white/10 backdrop-blur-md rounded-lg p-1 w-full">
        <button
          onClick={() => setLang('ko')}
          className={`px-3 py-2 rounded-md text-xs font-medium transition-all flex-1 ${
            lang === 'ko'
              ? 'bg-white/20 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          한국어
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-2 rounded-md text-xs font-medium transition-all flex-1 ${
            lang === 'en'
              ? 'bg-white/20 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          English
        </button>
      </div>
      <Link
        href="/"
        className="text-xs text-gray-300 hover:text-white px-3 py-2 bg-white/10 backdrop-blur-md rounded-md transition-colors text-center w-full"
      >
        🏠 {lang === 'ko' ? '홈으로' : 'Home'}
      </Link>
    </div>
  );
}
