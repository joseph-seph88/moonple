import { Content } from '@/content/home';
import FeatureCard from './FeatureCard';

interface FeaturesSectionProps {
  t: Content;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          {t.features.title}
        </h2>
        <p className="text-center text-gray-400 mb-12">
          {t.features.subtitle}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {t.features.cards.map((card, index) => (
            <div
              key={index}
              className={card.images && card.images.length > 1 ? 'md:col-span-2' : ''}
            >
              <FeatureCard
                title={card.title}
                description={card.description}
                image={card.image}
                images={card.images}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
