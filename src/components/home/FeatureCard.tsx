import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div className="border border-white/20 rounded-lg hover:border-white/40 transition-colors backdrop-blur-sm overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="relative h-96 bg-white/5">
        <Image
          src={image || ''}
          alt={title}
          fill
          className="object-contain p-2"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
