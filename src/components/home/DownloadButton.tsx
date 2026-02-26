interface DownloadButtonProps {
  platform: string;
  disabled?: boolean;
  url?: string;
}

export default function DownloadButton({
  platform,
  disabled,
  url,
}: DownloadButtonProps) {
  const baseClassName = 'px-8 py-3 border-2 rounded-lg font-medium transition-colors inline-block text-center';
  const disabledClassName = 'bg-white/10 text-gray-500 border-white/20 cursor-not-allowed';
  const activeClassName = 'bg-white text-black hover:bg-transparent hover:text-white border-white';

  if (disabled) {
    return (
      <button
        disabled
        className={`${baseClassName} ${disabledClassName}`}
      >
        {platform}
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClassName} ${activeClassName}`}
    >
      {platform}
    </a>
  );
}
