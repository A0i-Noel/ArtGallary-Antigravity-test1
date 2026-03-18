"use client";

import { Era, eras } from "@/data/paintings";
import { useLanguage } from "@/context/LanguageContext";
import t from "@/i18n/translations";
import styles from "./NavBar.module.css";

const eraEmojis: Record<Era, string> = {
  Renaissance: "🏛️",
  Baroque: "🕯️",
  Romanticism: "🌊",
  Impressionism: "🌸",
  Modern: "🎨",
};

interface NavBarProps {
  activeEra: Era | "All";
  onEraChange: (era: Era | "All") => void;
}

export default function NavBar({ activeEra, onEraChange }: NavBarProps) {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🖼️</span>
        <span className={styles.logoText}>{t.logoText[lang]}</span>
      </div>

      <ul className={styles.links}>
        <li>
          <button
            className={`${styles.link} ${activeEra === "All" ? styles.active : ""}`}
            onClick={() => onEraChange("All")}
          >
            {t.allEras[lang]}
          </button>
        </li>
        {eras.map((era) => (
          <li key={era}>
            <button
              className={`${styles.link} ${activeEra === era ? styles.active : ""}`}
              onClick={() => onEraChange(era)}
            >
              <span className={styles.eraEmoji}>{eraEmojis[era]}</span>
              {t.eras[era][lang]}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={styles.langToggle}
        onClick={toggleLang}
        aria-label="Toggle language"
      >
        {t.langToggle[lang]}
      </button>
    </nav>
  );
}
