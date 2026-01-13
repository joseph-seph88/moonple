import Link from 'next/link';
import { Content } from '@/content/home';

interface FooterProps {
  t: Content;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-12 bg-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left p-4 bg-white/5 rounded-lg border border-white/10">
            <h3 className="font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-2">
              🌙 Moon Ple
            </h3>
            <p className="text-sm text-gray-400 mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>👨‍💻</span>
              <span>{t.footer.developer}:</span>
              <span className="text-gray-300 font-medium">Joseph88</span>
            </p>
            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <span>✉️</span>
              <span>{t.footer.contact}:</span>
              <a
                href="mailto:pathetic.sim@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                pathetic.sim@gmail.com
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-300 hover:text-white px-4 py-2 bg-white/10 rounded-lg border border-white/10 transition-all hover:bg-white/20"
            >
              🔒 {t.footer.privacy}
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-white/10 pt-6">
          © 2026 Moon Ple. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
