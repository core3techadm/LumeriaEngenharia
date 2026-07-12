"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
  priority?: boolean;
};

const THUMBNAIL_QUALITIES = ["maxresdefault", "sddefault", "hqdefault"] as const;

function getThumbnailUrl(videoId: string, quality: (typeof THUMBNAIL_QUALITIES)[number]) {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export function YouTubeEmbed({
  videoId,
  title,
  className,
  priority = false,
}: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);

  const thumbnail = getThumbnailUrl(videoId, THUMBNAIL_QUALITIES[thumbIndex]);

  function handleThumbnailError() {
    setThumbIndex((current) =>
      current < THUMBNAIL_QUALITIES.length - 1 ? current + 1 : current,
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl border border-lumeria-sage/15 bg-lumeria-forest-mid shadow-xl shadow-black/20",
        className,
      )}
    >
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          <Image
            key={thumbnail}
            src={thumbnail}
            alt={title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            onError={handleThumbnailError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lumeria-forest/80 via-lumeria-forest/25 to-lumeria-forest/10 transition-opacity duration-300 group-hover:from-lumeria-forest/70" />
          <span className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white/20 bg-lumeria-sage/95 text-lumeria-forest shadow-2xl shadow-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
            Assistir vídeo
          </span>
        </button>
      )}
    </div>
  );
}
