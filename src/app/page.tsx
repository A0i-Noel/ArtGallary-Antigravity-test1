"use client";

import { useState, useMemo } from "react";
import NavBar from "@/components/NavBar";
import PaintingCard from "@/components/PaintingCard";
import { paintings, eras, Era } from "@/data/paintings";
import styles from "./page.module.css";

const eraDescriptions: Record<Era, string> = {
  Renaissance:
    "A cultural rebirth (14th–17th c.) that rediscovered classical antiquity, pioneering perspective, humanism, and the notion of the artist as genius.",
  Baroque:
    "A dramatic, emotionally charged style (17th–early 18th c.) of contrasting light and shadow, grand movement, and theatrical intensity.",
  Romanticism:
    "A 19th-century movement that prized emotion, imagination, nature's power, and the individual spirit over Enlightenment rationalism.",
  Impressionism:
    "Late 19th-century artists who abandoned studio conventions, painting outdoors to capture fleeting light, colour, and everyday life.",
  Modern:
    "A sweeping 20th-century wave of movements—Cubism, Surrealism, Abstract Expressionism—that shattered centuries of artistic convention.",
};

export default function Home() {
  const [activeEra, setActiveEra] = useState<Era | "All">("All");

  const filtered = useMemo(
    () =>
      activeEra === "All"
        ? paintings
        : paintings.filter((p) => p.era === activeEra),
    [activeEra]
  );

  return (
    <>
      <NavBar activeEra={activeEra} onEraChange={setActiveEra} />

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <p className={styles.heroEyebrow}>Public Domain Collection</p>
          <h1 className={styles.heroTitle}>
            A Journey Through
            <br />
            <span className={styles.heroAccent}>Art History</span>
          </h1>
          <p className={styles.heroSub}>
            Navigate the eras above and explore masterpieces spanning six
            centuries — each painting with the story behind it.
          </p>
          <div className={styles.heroStats}>
            <span>{paintings.length} masterpieces</span>
            <span className={styles.dot}>·</span>
            <span>{eras.length} eras</span>
            <span className={styles.dot}>·</span>
            <span>All public domain</span>
          </div>
        </section>

        {/* Era description */}
        {activeEra !== "All" && (
          <section className={styles.eraHeader}>
            <h2 className={styles.eraTitle}>{activeEra}</h2>
            <p className={styles.eraDesc}>{eraDescriptions[activeEra]}</p>
          </section>
        )}

        {/* Grid */}
        <section className={styles.grid}>
          {filtered.map((p) => (
            <PaintingCard key={p.id} painting={p} />
          ))}
        </section>

        <footer className={styles.footer}>
          <p>
            All images sourced from{" "}
            <a
              href="https://commons.wikimedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            — public domain worldwide.
          </p>
        </footer>
      </main>
    </>
  );
}
