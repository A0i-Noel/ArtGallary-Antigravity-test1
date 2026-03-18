"use client";

import { useState } from "react";
import Image from "next/image";
import { Painting } from "@/data/paintings";
import styles from "./PaintingCard.module.css";

interface PaintingCardProps {
  painting: Painting;
}

export default function PaintingCard({ painting }: PaintingCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className={`${styles.card} ${expanded ? styles.expanded : ""}`}
      onClick={() => setExpanded((v) => !v)}
    >
      <div className={styles.imageWrapper}>
        {imgError ? (
          <div className={styles.imgFallback}>🖼️</div>
        ) : (
          <Image
            src={painting.imageUrl}
            alt={`${painting.title} by ${painting.artist}`}
            fill
            className={styles.image}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
        <div className={styles.overlay} />
        <div className={styles.eraBadge}>{painting.era}</div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{painting.title}</h2>

        <p className={styles.meta}>
          <span className={styles.artist}>{painting.artist}</span>
          <span className={styles.year}>{painting.year}</span>
        </p>

        <div className={`${styles.backstory} ${expanded ? styles.backstoryVisible : ""}`}>
          <p>{painting.backstory}</p>
        </div>

        <button className={styles.readMore} aria-label="Toggle backstory">
          {expanded ? "Hide story ↑" : "Read story ↓"}
        </button>
      </div>
    </article>
  );
}
