import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ArchivalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ArchivalImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'ARCHIVAL PLATE',
}: ArchivalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EDE7D9] via-[#E2DAC8] to-[#D4C9B3] text-[#4A453B] p-4 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 mb-2 opacity-60" strokeWidth={1.5} />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
          {fallbackLabel}
        </span>
        <span className="font-hand text-base text-[#5E574B] mt-0.5 line-clamp-2">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
