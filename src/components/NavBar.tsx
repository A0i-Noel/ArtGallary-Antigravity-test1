"use client";

import { Era, eras } from "@/data/paintings";
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
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🖼️</span>
        <span className={styles.logoText}>ArtGallery</span>
      </div>
      <ul className={styles.links}>
        <li>
          <button
            className={`${styles.link} ${activeEra === "All" ? styles.active : ""}`}
            onClick={() => onEraChange("All")}
          >
            All Eras
          </button>
        </li>
        {eras.map((era) => (
          <li key={era}>
            <button
              className={`${styles.link} ${activeEra === era ? styles.active : ""}`}
              onClick={() => onEraChange(era)}
            >
              <span className={styles.eraEmoji}>{eraEmojis[era]}</span>
              {era}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
