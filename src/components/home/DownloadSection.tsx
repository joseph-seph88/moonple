import { Content } from '@/content/home';
import DownloadButton from './DownloadButton';

interface DownloadSectionProps {
  t: Content;
}

export default function DownloadSection({ t }: DownloadSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t.download.title}
        </h2>
        <p className="text-gray-300 mb-8">
          {t.download.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DownloadButton
            platform="App Store"
            url={t.download.appStoreUrl}
          />
          <DownloadButton
            platform="Google Play"
            url={t.download.googlePlayUrl}
          />
        </div>
      </div>
    </section>
  );
}
