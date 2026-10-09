"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { images } from "@/data/images";

/** Imagine cu rezervă: dacă fișierul nu se încarcă, se afișează logo-ul pe fundal închis. */
export default function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-pine" role="img" aria-label={String(props.alt)}>
        <Image src={images.logo} alt="" width={1100} height={668} className="h-auto w-3/5" />
      </div>
    );
  }
  return <Image {...props} onError={() => setFailed(true)} />;
}
