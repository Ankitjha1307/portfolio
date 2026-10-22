"use client";

import * as React from "react";
import { FiPauseCircle, FiRotateCcw } from "react-icons/fi";
import { FerrisWheelGallery } from "@/components/ui/ferris-wheel-gallery";
import type { FerrisWheelItem } from "@/components/ui/ferris-wheel-gallery";
import { Button } from "@/components/ui/button";

export const FERRIS_WHEEL_DEMO_ITEMS: FerrisWheelItem[] = [
  { id: "collabix", title: "Collabix", discipline: "MERN", year: "2026", alt: "Collabix platform interface", src: "Collabix.png" },
  { id: "gamezzz", title: "Gamezzz", discipline: "React.js", year: "2025", alt: "Gamezzz platform interface", src: "Gamezzz.png" },
  { id: "typingspeedtester", title: "Typing Speed Tester", discipline: "Web Application", year: "2025", alt: "Typing speed tester platform interface", src: "TypingSpeedTester.png" },
  { id: "brainssnack", title: "BrainSnack", discipline: "MERN", year: "2026", alt: "Brain Snack platform interface", src: "BrainSnack.png" },
  { id: "disha", title: "DISHA", discipline: "MERN + AI + ML", year: "Ongoing", alt: "DISHA platform interface", src: "DISHA.png" },
  { id: "portfolio", title: "Portfolio", discipline: "Next.js", year: "2026", alt: "Portfolio platform interface", src: "Portfolio.png" }
];

export const DEMO_TOUR = [
  { at: 600, index: 4 },
  { at: 3900, index: 5 },
  { at: 5400, index: 3 },
];

export default function Projects({ autoplay = true }: { autoplay?: boolean }) {
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(autoplay);
  const [run, setRun] = React.useState(0);
  const [reducedMotion, setReducedMotion] = React.useState(true);
  const [photosReady, setPhotosReady] = React.useState(false);
  React.useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  React.useEffect(() => {
    let cancelled = false;
    const arrive = (src: string) => new Promise((resolve) => {
      const image = new Image();
      image.onload = image.onerror = () => resolve(src);
      image.src = src;
    });
    const limit = new Promise((resolve) => window.setTimeout(resolve, 1500));
    Promise.race([Promise.all(FERRIS_WHEEL_DEMO_ITEMS.map((item) => arrive(item.src))), limit]).then(() => { if (!cancelled) setPhotosReady(true); });
    return () => { cancelled = true; };
  }, []);
  React.useLayoutEffect(() => {
    if (!playing || reducedMotion || !autoplay || !photosReady) return;
    const timers = DEMO_TOUR.map(({ at, index }) => window.setTimeout(() => setActive(index), at));
    timers.push(window.setTimeout(() => setPlaying(false), 7200));
    return () => timers.forEach(window.clearTimeout);
  }, [playing, run, reducedMotion, autoplay, photosReady]);
  const stop = (target: EventTarget) => {
    if (!(target instanceof Element) || !target.closest("[data-demo-control]")) setPlaying(false);
  };
  return (
    <section
      id="projects"
      data-ferris-demo
      data-tour={!autoplay || reducedMotion ? "off" : !playing ? "stopped" : photosReady ? "playing" : "loading"}
      className="relative overflow-hidden bg-charcoal px-6 py-24 font-sans text-foreground sm:px-10 md:py-32 lg:px-20"
      onPointerDownCapture={(event) => stop(event.target)}
      onWheelCapture={(event) => stop(event.target)}
      onKeyDownCapture={(event) => stop(event.target)}
      onFocusCapture={(event) => stop(event.target)}
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              My Journey via <span className="text-yellow-400">Projects</span>
            </h2>
          </div>
          <span className="w-fit rounded-full border border-foreground/15 px-3 py-1.5 text-[10px] uppercase tracking-widest text-foreground/60">
            Project Demos
          </span>
        </header>

        <FerrisWheelGallery
          key={run}
          items={FERRIS_WHEEL_DEMO_ITEMS}
          active={active}
          onActiveChange={(index) => {
            setPlaying(false);
            setActive(index);
          }}
        />

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-foreground/50">
          <span>{FERRIS_WHEEL_DEMO_ITEMS.length} projects. A different point of view.</span>
          {autoplay && !reducedMotion && (
            <Button
              data-demo-control
              type="button"
              size="sm"
              className="h-8 rounded-md px-2 text-[10px] uppercase tracking-wider"
              onClick={() => {
                if (playing) setPlaying(false);
                else {
                  setActive(0);
                  setRun((value) => value + 1);
                  setPlaying(true);
                }
              }}
            >
              {playing ? <FiPauseCircle aria-hidden="true" className="size-3" /> : <FiRotateCcw aria-hidden="true" className="size-3" />}
              {playing ? "Pause demo" : "Replay demo"}
            </Button>
          )}
        </footer>
      </div>
    </section>
  );
}
