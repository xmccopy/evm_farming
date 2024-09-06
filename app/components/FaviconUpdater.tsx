'use client';

import { useEffect } from "react";

export default function FaviconUpdater() {
  useEffect(() => {
    const updateFavicon = () => {
      const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      const isDarkMode = document.documentElement.classList.contains("dark");

      if (favicon) {
        favicon.href = isDarkMode ? "/images/light.png" : "/images/dark.png";
      }
    };

    updateFavicon();

    const observer = new MutationObserver(() => {
      updateFavicon();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return null;
}
