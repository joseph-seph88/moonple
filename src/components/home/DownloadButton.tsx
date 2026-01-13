interface DownloadButtonProps {
  platform: string;
  disabled?: boolean;
}

export default function DownloadButton({
  platform,
  disabled,
}: DownloadButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`px-8 py-3 border-2 rounded-lg font-medium transition-colors ${
        disabled
          ? 'bg-white/10 text-gray-500 border-white/20 cursor-not-allowed'
          : 'bg-white text-black hover:bg-transparent hover:text-white border-white'
      }`}
    >
      {platform}
    </button>
  );
}
