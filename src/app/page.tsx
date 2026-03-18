"use client";

import { useState, useMemo } from "react";
import NavBar from "@/components/NavBar";
import PaintingCard from "@/components/PaintingCard";
import { paintings, eras, Era } from "@/data/paintings";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/i18n/translations";
import styles from "./page.module.css";

export default function Home() {
  const [activeEra, setActiveEra] = useState<Era | "All">("All");
  const { lang } = useLanguage();

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
          <p className={styles.heroEyebrow}>{t.heroEyebrow[lang]}</p>
          <h1 className={styles.heroTitle}>
            {t.heroTitle1[lang]}
            <br />
            <span className={styles.heroAccent}>{t.heroAccent[lang]}</span>
          </h1>
          <p className={styles.heroSub}>{t.heroSub[lang]}</p>
          <div className={styles.heroStats}>
            <span>
              {paintings.length} {t.statMasterpieces[lang]}
            </span>
            <span className={styles.dot}>·</span>
            <span>
              {eras.length} {t.statEras[lang]}
            </span>
            <span className={styles.dot}>·</span>
            <span>{t.statPublicDomain[lang]}</span>
          </div>
        </section>

        {/* Era description */}
        {activeEra !== "All" && (
          <section className={styles.eraHeader}>
            <h2 className={styles.eraTitle}>{t.eras[activeEra][lang]}</h2>
            <p className={styles.eraDesc}>
              {t.eraDescriptions[activeEra][lang]}
            </p>
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
            {t.footerPrefix[lang]}{" "}
            <a
              href="https://commons.wikimedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            {t.footerSuffix[lang]}
          </p>
        </footer>
      </main>
    </>
  );
}
