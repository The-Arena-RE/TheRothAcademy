"use client";

import { useEffect, useRef, useState } from "react";

export function useVideoBackground<T extends HTMLElement>() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const regionRef = useRef<T>(null);
  const [label, setLabel] = useState("Play background video");
  const [showToggle, setShowToggle] = useState(false);
  const syncRef = useRef<() => void>(() => {});

  useEffect(() => {
    const video = videoRef.current;
    const region = regionRef.current;
    if (!video || !region) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const state = { visible: false, playOverride: null as boolean | null };

    const updateLabel = () => setLabel(video.paused ? "Play background video" : "Pause background video");

    const syncPlayback = () => {
      if (state.visible && (state.playOverride ?? !motionPreference.matches)) {
        video.muted = true;
        video.play().catch(updateLabel);
      } else {
        video.pause();
      }
    };
    syncRef.current = () => {
      state.playOverride = video.paused;
      syncPlayback();
    };

    const onVisibility: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        state.visible = entry.isIntersecting;
        syncPlayback();
      }
    };

    const observer = new IntersectionObserver(onVisibility, { threshold: 0.2 });
    observer.observe(region);

    const onError = () => setShowToggle(false);
    video.addEventListener("play", updateLabel);
    video.addEventListener("pause", updateLabel);
    video.addEventListener("error", onError);
    setShowToggle(true);

    const onMotionChange = () => {
      state.playOverride = null;
      syncPlayback();
    };
    motionPreference.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      video.removeEventListener("play", updateLabel);
      video.removeEventListener("pause", updateLabel);
      video.removeEventListener("error", onError);
      motionPreference.removeEventListener("change", onMotionChange);
    };
  }, []);

  const toggle = () => syncRef.current();

  return { videoRef, regionRef, label, showToggle, toggle };
}
