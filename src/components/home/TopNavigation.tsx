import Link from 'next/link';
import { Language, Content } from '@/content/home';

interface TopNavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
}

export default function TopNavigation({ lang, setLang, t }: TopNavigationProps) {
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
        href="/privacy"
        className="text-xs text-gray-300 hover:text-white px-3 py-2 bg-white/10 backdrop-blur-md rounded-md transition-colors text-center w-full"
      >
        {t.footer.privacy}
      </Link>
      <div className="flex flex-col gap-2 w-full">
        <button
          disabled
          className="text-xs text-gray-500 px-3 py-2 bg-white/5 backdrop-blur-md rounded-md cursor-not-allowed text-center border border-white/10"
        >
          App Store
        </button>
        <button
          disabled
          className="text-xs text-gray-500 px-3 py-2 bg-white/5 backdrop-blur-md rounded-md cursor-not-allowed text-center border border-white/10"
        >
          Google Play
        </button>
      </div>
      <p className="text-[10px] text-gray-600 text-center w-full">{t.download.comingSoon}</p>
    </div>
  );
}
