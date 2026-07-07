// src/component/utility/AOSInit.tsx
'use client';

import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos";

export default function AOSInit() {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);

  return null;
}