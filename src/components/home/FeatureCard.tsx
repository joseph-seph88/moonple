import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string;
  images?: string[];
}

export default function FeatureCard({
  title,
  description,
  image,
  images,
}: FeatureCardProps) {
  return (
    <div className="border border-white/20 rounded-lg hover:border-white/40 transition-colors backdrop-blur-sm overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      {images && images.length > 1 ? (
        <div className="relative h-64 bg-white/5 flex">
          {images.map((img, idx) => (
            <div key={idx} className="relative flex-1">
              <Image
                src={img}
                alt={`${title} ${idx + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative h-64 bg-white/5">
          <Image
            src={image || ''}
            alt={title}
            fill
            className="object-contain p-4"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
