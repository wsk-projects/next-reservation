"use client";

import { useEffect } from "react";

export default function useBodyScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [enabled]);
}
