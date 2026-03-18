export type Era =
  | "Renaissance"
  | "Baroque"
  | "Romanticism"
  | "Impressionism"
  | "Modern";

export interface Painting {
  id: number;
  title: string;
  artist: string;
  year: string;
  era: Era;
  imageUrl: string;
  backstory: string;
}

export const eras: Era[] = [
  "Renaissance",
  "Baroque",
  "Romanticism",
  "Impressionism",
  "Modern",
];

export const paintings: Painting[] = [
  // ── Renaissance ──────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503–1519",
    era: "Renaissance",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    backstory:
      "Commissioned as a portrait of Lisa Gherardini, wife of Florentine merchant Francesco del Giocondo, the Mona Lisa beguiled Europe with her enigmatic smile. Leonardo worked on it for over a decade, experimenting with sfumato—a smoky blending of light and shadow—to give her face an uncanny lifelike depth. Today she resides in the Louvre, drawing millions of visitors every year.",
  },
  {
    id: 2,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1484–1486",
    era: "Renaissance",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    backstory:
      "Painted for the powerful Medici family of Florence, Botticelli's masterpiece depicts Venus emerging fully grown from the sea. Drawing on both classical mythology and Neoplatonist philosophy fashionable at Lorenzo de' Medici's court, the canvas celebrates ideal beauty and divine love. Its tempera-on-canvas format was unusually large for the era—a bold statement of artistic ambition.",
  },
  {
    id: 3,
    title: "The School of Athens",
    artist: "Raphael",
    year: "1509–1511",
    era: "Renaissance",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    backstory:
      "Commissioned by Pope Julius II for the Apostolic Palace in the Vatican, this fresco gathers the greatest thinkers of antiquity—Plato, Aristotle, Socrates—in an airy classical hall. Raphael subtly inserted contemporary faces: Plato bears Leonardo da Vinci's features, while Michelangelo broods alone in the foreground. The painting is a declaration that reason and faith can coexist.",
  },
  {
    id: 4,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "c. 1512",
    era: "Renaissance",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    backstory:
      "Part of the breathtaking Sistine Chapel ceiling, this scene captures the divine spark of life passing between God's fingertip and Adam's. Painted while Michelangelo lay on scaffolding for four years, the gap between the two almost-touching hands has become one of Western art's most recognizable images. Modern neuroscientists have noted that the form surrounding God closely resembles a cross-section of the human brain.",
  },

  // ── Baroque ───────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    era: "Baroque",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    backstory:
      "Often called the 'Mona Lisa of the North,' Vermeer's tronie (character study) depicts an anonymous young woman against an impossibly deep black background. The single luminous pearl—which may in fact be glass or tin—catches the light as perfectly as her over-the-shoulder glance catches our eye. Nothing is known of the sitter, which has fuelled centuries of romantic speculation.",
  },
  {
    id: 6,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    era: "Baroque",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rembrandt_van_Rijn_-_De_Nachtwacht.jpg/1280px-Rembrandt_van_Rijn_-_De_Nachtwacht.jpg",
    backstory:
      "Amsterdam's civic militia commissioned Rembrandt to paint their company portrait—a genre usually stiff and formulaic. Instead he created a scene of explosive movement: torchlight, clashing pikes, a mysterious child in gold, a barking dog. The monumental canvas (originally even larger before it was trimmed) now hangs in the Rijksmuseum, an enduring symbol of Dutch Golden Age confidence.",
  },
  {
    id: 7,
    title: "Judith Slaying Holofernes",
    artist: "Artemisia Gentileschi",
    year: "c. 1614–1620",
    era: "Baroque",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg/800px-Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg",
    backstory:
      "Artemisia Gentileschi, one of the few female artists of her era to achieve renown, painted this brutal scene from the Book of Judith with a visceral ferocity rarely matched. The canvas is widely read as personal: Artemisia had survived a sexual assault and endured a harrowing public trial. Judith and Abra strain muscle and sinew, transforming a biblical story of salvation into a statement of defiant female power.",
  },
  {
    id: 8,
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: "1656",
    era: "Baroque",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Las_Meninas_01.jpg/800px-Las_Meninas_01.jpg",
    backstory:
      "Velázquez painted himself at work in the Spanish royal court, capturing Infanta Margarita surrounded by her ladies-in-waiting while the king and queen appear reflected in a distant mirror. The picture plays exhilarating games with viewpoint: are we looking at the royal couple, or are we them? Picasso later paid homage with an entire series of interpretations.",
  },

  // ── Romanticism ───────────────────────────────────────────────────────────
  {
    id: 9,
    title: "The Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich",
    year: "c. 1818",
    era: "Romanticism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
    backstory:
      "A lone figure stands on a rocky precipice, his back to us, gazing into a churning sea of mist and distant peaks. Friedrich intentionally denied us the man's face, making him a stand-in for every viewer confronting the sublime forces of nature. The painting became an icon of German Romanticism—a movement that prized feeling, solitude, and awe over Enlightenment rationalism.",
  },
  {
    id: 10,
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: "1830",
    era: "Romanticism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
    backstory:
      "Painted just months after the July Revolution of 1830, Delacroix's allegory shows Liberty—a bare-breasted woman bearing the tricolour—striding over barricades and fallen bodies. She became the face of France itself: Marianne. Delacroix painted himself in the scene as the top-hatted bourgeois with a rifle, signalling his own emotional investment in the uprising.",
  },
  {
    id: 11,
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: "c. 1831",
    era: "Romanticism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    backstory:
      "Though Japanese in origin, Hokusai's woodblock print resonates deeply with Romantic themes of nature's overwhelming power. Part of his series 'Thirty-six Views of Mount Fuji,' it shows a tempestuous wave dwarfing tiny fishing boats—and the sacred mountain itself. When it reached Europe via trade, it sparked Japonisme, profoundly influencing Impressionists and Symbolists alike.",
  },

  // ── Impressionism ─────────────────────────────────────────────────────────
  {
    id: 12,
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    era: "Impressionism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg",
    backstory:
      "This hazy view of the industrial port of Le Havre gave Impressionism its very name—a critic used it mockingly, and the artists adopted it as a badge of honour. Monet captured a fleeting moment before dawn fully breaks, prioritising the sensation of light over precise detail. The small orange sun is perhaps the most efficiently rendered object in art history.",
  },
  {
    id: 13,
    title: "A Sunday on La Grande Jatte",
    artist: "Georges Seurat",
    year: "1884–1886",
    era: "Impressionism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    backstory:
      "Seurat spent two years perfecting this monumental canvas using Pointillism—thousands of tiny dots of pure colour that the eye blends at a distance. The park scene on an island in the Seine is oddly still: figures stand stiffly, faces unseen, as if frozen in time. Seurat wanted to elevate everyday leisure to the grandeur of ancient frieze paintings.",
  },
  {
    id: 14,
    title: "Dance at Le Moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: "1876",
    era: "Impressionism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg/1280px-Auguste_Renoir_-_Bal_du_moulin_de_la_Galette.jpg",
    backstory:
      "Renoir lugged this large canvas every week to outdoor dances at Montmartre's Moulin de la Galette, painting sunlight filtering through trees onto swirling dancers. The models were his friends and neighbours. Where Seurat's crowds feel static, Renoir's shimmer with warmth—his brushwork letting light dissolve solid forms into a joyous, flickering haze.",
  },
  {
    id: 15,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    era: "Impressionism",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    backstory:
      "Painted during van Gogh's voluntary stay at the Saint-Paul-de-Mausole asylum, The Starry Night shows the view from his room—a swirling, emotionally charged night sky over a quiet village. He wrote that looking at stars made him dream of a peaceful afterlife. The turbulent brushwork, born of mental anguish, paradoxically produces one of the most comforting images in art.",
  },

  // ── Modern ────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: "1907",
    era: "Modern",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg",
    backstory:
      "Radical and deliberately shocking, Picasso shattered the Renaissance tradition of coherent perspective by showing five nude figures simultaneously from multiple viewpoints. Influenced by Iberian sculpture and African masks, the painting is widely regarded as the doorway to Cubism and modern abstraction. Even Matisse and Braque were disturbed by it at first.",
  },
  {
    id: 17,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: "1931",
    era: "Modern",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    backstory:
      "Dalí painted his melting watches in under two hours, inspired—so he claimed—by a piece of soft Camembert cheese. Set against the cliffs of Cap de Creus in Catalonia, the tiny landscape depicts time itself becoming fluid and irrelevant. The painting became Surrealism's most recognisable icon, probing the difference between clock-time and the elastic time of dreams.",
  },
  {
    id: 18,
    title: "Composition VIII",
    artist: "Wassily Kandinsky",
    year: "1923",
    era: "Modern",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kandinsky_Composition_8%2C_July_1923.jpg/1280px-Kandinsky_Composition_8%2C_July_1923.jpg",
    backstory:
      "Kandinsky was one of the first artists to push painting into pure abstraction. Teaching at the Bauhaus, he developed a theory that geometric forms and colours have direct emotional equivalents—circles are cosmic and calm, triangles are sharp and spiritual. Composition VIII is geometry as orchestral score, each shape a note in a visual symphony.",
  },
  {
    id: 19,
    title: "Campbell's Soup Cans",
    artist: "Andy Warhol",
    year: "1962",
    era: "Modern",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Campbell%27s_Soup_Cans_MOMA.jpg",
    backstory:
      "Warhol displayed thirty-two canvases—one for each variety of Campbell's Soup—on shelves like products in a supermarket, blurring the line between high art and consumer culture. He chose the subject because he ate the soup daily for lunch for twenty years. The work launched Pop Art into museums, asking whether an everyday object, treated with the reverence of fine art, becomes art.",
  },
  {
    id: 20,
    title: "No. 61 (Rust and Blue)",
    artist: "Mark Rothko",
    year: "1953",
    era: "Modern",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Rothko_No_61.jpg",
    backstory:
      "Rothko's large colour-field canvases were designed to be experienced at close range, so the luminous rectangles of colour fill the viewer's entire peripheral vision. He wanted tears—a direct emotional transmission without imagery or narrative. No. 61 layers rust and maroon beneath a hovering blue rectangle, evoking something between elegy and warmth.",
  },
];
