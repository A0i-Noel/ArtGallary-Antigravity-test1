export type Lang = "en" | "ja";

export type Era =
  | "Renaissance"
  | "Baroque"
  | "Romanticism"
  | "Impressionism"
  | "Modern";

const t = {
  // ── Nav ─────────────────────────────────────────────────────────────────
  logoText: { en: "ArtGallery", ja: "アートギャラリー" },
  allEras: { en: "All Eras", ja: "全時代" },
  langToggle: { en: "🇯🇵 日本語", ja: "🇺🇸 English" },

  // ── Era names ────────────────────────────────────────────────────────────
  eras: {
    Renaissance: { en: "Renaissance", ja: "ルネサンス" },
    Baroque: { en: "Baroque", ja: "バロック" },
    Romanticism: { en: "Romanticism", ja: "ロマン主義" },
    Impressionism: { en: "Impressionism", ja: "印象派" },
    Modern: { en: "Modern", ja: "モダン" },
  } as Record<Era, { en: string; ja: string }>,

  // ── Era descriptions ─────────────────────────────────────────────────────
  eraDescriptions: {
    Renaissance: {
      en: "A cultural rebirth (14th–17th c.) that rediscovered classical antiquity, pioneering perspective, humanism, and the notion of the artist as genius.",
      ja: "古典古代を再発見した文化的再生（14〜17世紀）。遠近法・人文主義・天才としての芸術家像を先導した。",
    },
    Baroque: {
      en: "A dramatic, emotionally charged style (17th–early 18th c.) of contrasting light and shadow, grand movement, and theatrical intensity.",
      ja: "劇的で感情的なスタイル（17世紀〜18世紀初頭）。明暗のコントラスト・力強い動き・演劇的な迫力が特徴。",
    },
    Romanticism: {
      en: "A 19th-century movement that prized emotion, imagination, nature's power, and the individual spirit over Enlightenment rationalism.",
      ja: "感情・想像力・自然の力・個の精神を啓蒙主義の合理性よりも重んじた19世紀の運動。",
    },
    Impressionism: {
      en: "Late 19th-century artists who abandoned studio conventions, painting outdoors to capture fleeting light, colour, and everyday life.",
      ja: "スタジオの慣習を捨て、屋外で移ろう光・色彩・日常を描いた19世紀後半の芸術家たち。",
    },
    Modern: {
      en: "A sweeping 20th-century wave of movements—Cubism, Surrealism, Abstract Expressionism—that shattered centuries of artistic convention.",
      ja: "キュビズム・シュルレアリスム・抽象表現主義など、数世紀の芸術的慣習を打ち破った20世紀の大きな潮流。",
    },
  } as Record<Era, { en: string; ja: string }>,

  // ── Hero ─────────────────────────────────────────────────────────────────
  heroEyebrow: { en: "Public Domain Collection", ja: "パブリックドメイン コレクション" },
  heroTitle1: { en: "A Journey Through", ja: "芸術史を巡る" },
  heroAccent: { en: "Art History", ja: "旅" },
  heroSub: {
    en: "Navigate the eras above and explore masterpieces spanning six centuries — each painting with the story behind it.",
    ja: "上部のメニューで時代を選び、6世紀にわたる傑作を探索しましょう。各絵画にはその背景にある物語があります。",
  },

  // ── Stats ────────────────────────────────────────────────────────────────
  statMasterpieces: { en: "masterpieces", ja: "傑作" },
  statEras: { en: "eras", ja: "時代" },
  statPublicDomain: { en: "All public domain", ja: "全てパブリックドメイン" },

  // ── PaintingCard ─────────────────────────────────────────────────────────
  readStory: { en: "Read story ↓", ja: "物語を読む ↓" },
  hideStory: { en: "Hide story ↑", ja: "物語を閉じる ↑" },

  // ── Footer ───────────────────────────────────────────────────────────────
  footerPrefix: { en: "All images sourced from", ja: "全画像の出典：" },
  footerSuffix: { en: "— public domain worldwide.", ja: "（世界的なパブリックドメイン）" },
} as const;

export default t;
