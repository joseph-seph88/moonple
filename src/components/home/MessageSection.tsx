import { Content } from '@/content/home';

interface MessageSectionProps {
  t: Content;
}

export default function MessageSection({ t }: MessageSectionProps) {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-6xl mb-6">🌕</div>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {t.message.text1}<br />
          {t.message.text2}
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {t.message.text3}
        </p>
        <p className="text-xl text-white font-medium leading-relaxed">
          {t.message.text4}<br />
          {t.message.text5}<br />
          {t.message.text6}<br />
          {t.message.text7}
        </p>
        <p className="text-2xl text-white font-bold mt-8">
          {t.message.text8}<br />
          {t.message.text9}
        </p>
      </div>
    </section>
  );
}
