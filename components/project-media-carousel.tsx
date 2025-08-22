"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type Media =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster?: string; alt?: string };

type Props = {
  items: Media[];
  title: string;
};

export function ProjectMediaCarousel({ items, title }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const len = items.length;
  const clamp = (i: number) => (i + len) % len;

  const goto = (i: number) => setIndex(clamp(i));
  const next = () => goto(index + 1);
  const prev = () => goto(index - 1);

  // Keyboard nav in dialog
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, len]);

  // Compute transform for slides
  const transform = useMemo(
    () => ({ transform: `translateX(-${index * 100}%)` }),
    [index]
  );

  return (
    <div className="group relative" aria-label={`${title} media carousel`}>
      <div
        ref={viewportRef}
        className="relative overflow-hidden rounded-md border bg-muted"
      >
        <div
          className="flex transition-transform duration-300 ease-out will-change-transform"
          style={transform}
          role="listbox"
          aria-roledescription="carousel"
          aria-label={`${title} media`}
        >
          {items.map((m, i) => (
            <button
              key={i}
              role="option"
              aria-selected={index === i}
              tabIndex={index === i ? 0 : -1}
              className="relative aspect-video w-full shrink-0 focus:outline-none"
              onClick={() => setOpen(true)}
            >
              {m.kind === "image" ? (
                <img
                  src={m.src || "/placeholder.svg"}
                  alt={m.alt}
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              ) : m.src.includes("vimeo.com") || m.src.includes("loom.com") ? (
                <img
                  src={m.poster || "/placeholder.svg"}
                  alt={m.alt}
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              ) : (
                <video
                  className="h-full w-full object-cover"
                  src={m.src}
                  poster={(m as any).poster}
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
              <div
                className="absolute inset-0 cursor-zoom-in bg-black/0 hover:bg-black/20 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                }}
              />
              <span className="pointer-events-none absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize className="h-5 w-5 text-white drop-shadow" />
              </span>
            </button>
          ))}
        </div>

        {/* Controls */}
        {len > 1 && (
          <>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Previous slide"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Next slide"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>

      {/* Dots */}
      {len > 1 && (
        <div
          className="mt-2 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          {items.map((_, i) => (
            <button
              key={i}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors",
                i === index
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              )}
              onClick={() => goto(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="bg-black/70" />
        <DialogContent className="w-screen max-w-[96vw] sm:max-w-[96vw] md:max-w-[96vw] lg:max-w-[96vw] xl:max-w-[96vw] p-5">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Use ← → keys to navigate</DialogDescription>
          </DialogHeader>
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-xl bg-background">
              <div
                className="flex transition-transform duration-300"
                style={transform}
              >
                {/* Each slide fills width and uses a tall viewport height for media */}
                {items.map((m, i) => (
                  <div key={i} className="w-full h-[82vh] shrink-0 bg-black">
                    {m.kind === "image" ? (
                      <img
                        src={m.src || "/placeholder.svg"}
                        alt={m.alt}
                        className="h-full w-full object-contain"
                        crossOrigin="anonymous"
                      />
                    ) : m.src.includes("vimeo.com") ? (
                      <iframe
                        src={
                          m.src.includes("player.vimeo.com")
                            ? m.src
                            : `https://player.vimeo.com/video/${m.src
                                .split("/")
                                .pop()}?title=0&byline=0&portrait=0`
                        }
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full object-contain rounded-md"
                        title={m.alt || "Vimeo video"}
                      />
                    ) : m.src.includes("loom.com") ? (
                      <iframe
                        src={`https://www.loom.com/embed/${m.src
                          .split("/")
                          .pop()}`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full object-contain rounded-md"
                      ></iframe>
                    ) : (
                      <video
                        src={m.src}
                        poster={(m as any).poster}
                        className="h-full w-full object-contain"
                        controls
                        playsInline
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {len > 1 && (
              <>
                <Button
                  size="icon"
                  variant="secondary"
                  aria-label="Previous"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  aria-label="Next"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
