interface PrivacyOption {
  platform: string;
  instruction: string;
  link?: string;
}

interface PrivacyItem {
  label?: string;
  description?: string;
}

interface PrivacySection {
  title: string;
  subtitle?: string;
  content?: string;
  note?: string;
  highlight?: {
    main: string;
    points: string[];
    note?: string;
  };
  list?: {
    title: string;
    items: string[];
  };
  settings?: {
    title: string;
    description: string;
    options: PrivacyOption[];
  };
  policy?: {
    text: string;
    link: string;
  };
  items?: (string | PrivacyItem)[];
  contact?: {
    label: string;
    email: string;
    message: string;
  };
}

interface PrivacySectionProps {
  section: PrivacySection;
}

export default function PrivacySection({ section }: PrivacySectionProps) {
  return (
    <div className="py-8 border-b border-white/10 last:border-b-0">
      <h2 className="text-2xl font-bold text-white mb-6">
        {section.title}
      </h2>

      {section.subtitle && (
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          {section.subtitle}
        </h3>
      )}

      {section.highlight && (
        <div className="bg-white/5 border-l-4 border-white/30 rounded-r-lg p-6 mb-6">
          <p className="text-lg font-semibold text-white mb-4">
            {section.highlight.main}
          </p>
          <div className="space-y-2">
            {section.highlight.points.map((point: string, idx: number) => (
              <p key={idx} className="text-gray-300 flex items-center gap-2">
                <span className="text-white flex-shrink-0">✓</span>
                <span>{point}</span>
              </p>
            ))}
          </div>
          {section.highlight.note && (
            <p className="text-gray-400 mt-4 flex items-center gap-2">
              <span className="text-red-400 flex-shrink-0">✗</span>
              <span>{section.highlight.note}</span>
            </p>
          )}
        </div>
      )}

      {section.content && (
        <p className="text-gray-300 mb-4 leading-relaxed">
          {section.content}
        </p>
      )}

      {section.list && (
        <div className="mb-6">
          <p className="text-gray-200 font-medium mb-3">{section.list.title}</p>
          <ul className="space-y-2 ml-4">
            {section.list.items.map((item: string, idx: number) => (
              <li key={idx} className="text-gray-300 flex items-start gap-2">
                <span className="text-white/50 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.settings && (
        <div className="bg-white/5 rounded-lg p-6 mb-6">
          <p className="text-white font-semibold mb-3">{section.settings.title}</p>
          <p className="text-gray-300 mb-4">{section.settings.description}</p>
          <ul className="space-y-3">
            {section.settings.options.map((option: PrivacyOption, idx: number) => (
              <li key={idx} className="text-gray-300">
                <span className="text-white font-medium">{option.platform}:</span>{' '}
                {option.link ? (
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {option.instruction}
                  </a>
                ) : (
                  option.instruction
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.policy && (
        <p className="text-gray-300 mb-4">
          <span className="text-gray-200 font-medium">{section.policy.text}:</span>{' '}
          <a
            href={section.policy.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline break-all"
          >
            {section.policy.link}
          </a>
        </p>
      )}

      {section.items && Array.isArray(section.items) && (
        <ul className="space-y-3 ml-4">
          {section.items.map((item: string | PrivacyItem, idx: number) => (
            <li key={idx} className="text-gray-300">
              {typeof item === 'string' ? (
                <div className="flex items-start gap-2">
                  <span className="text-white/50 mt-1.5">•</span>
                  <span>{item}</span>
                </div>
              ) : (
                <div>
                  <span className="text-white font-medium">{item.label}:</span>{' '}
                  <span className="text-gray-300">{item.description}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      {section.contact && (
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-2">
            <span className="text-white font-medium">{section.contact.label}:</span>{' '}
            <a
              href={`mailto:${section.contact.email}`}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {section.contact.email}
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-3">
            {section.contact.message}
          </p>
        </div>
      )}

      {section.note && (
        <p className="text-gray-400 mt-4 italic">
          {section.note}
        </p>
      )}
    </div>
  );
}
