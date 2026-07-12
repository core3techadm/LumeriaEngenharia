"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl border border-lumeria-sage/15 bg-lumeria-forest-mid",
        className,
      )}
    >
      {loaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
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
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-lumeria-forest/40 transition-colors group-hover:bg-lumeria-forest/30" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-lumeria-sage/90 text-lumeria-forest shadow-lg transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
