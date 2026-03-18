import Link from 'next/link';
import { Language, Content } from '@/content/home';

interface TopNavigationProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
}

export default function TopNavigation({ lang, setLang, t }: TopNavigationProps) {
  return (
    <div className="fixed top-8 right-12 z-50 flex flex-col gap-4 items-end max-w-[180px]">
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
        <a
          href={t.download.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white px-3 py-2 bg-white/10 backdrop-blur-md rounded-md hover:bg-white/20 transition-colors text-center border border-white/20"
        >
          App Store
        </a>
        <a
          href={t.download.googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white px-3 py-2 bg-white/10 backdrop-blur-md rounded-md hover:bg-white/20 transition-colors text-center border border-white/20"
        >
          Google Play
        </a>
      </div>
    </div>
  );
}
