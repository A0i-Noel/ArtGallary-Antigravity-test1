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
  backstoryJa: string;
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
    backstoryJa:
      "フィレンツェの商人フランチェスコ・デル・ジョコンドの妻、リーザ・ゲラルディーニの肖像として依頼されたこの作品は、謎めいた微笑みでヨーロッパを魅了した。レオナルドは10年以上かけて、スフマートと呼ばれる光と影の煙るような混合技法を実験し続け、彼女の顔に驚くほどの生命感を与えた。現在はルーヴル美術館に所蔵され、毎年数百万人の訪問者を集めている。",
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
    backstoryJa:
      "フィレンツェの有力なメディチ家のために描かれ、ヴィーナスが海から成人した姿で現れる場面を描いている。古典神話とロレンツォ・デ・メディチの宮廷で流行したネオプラトン哲学の両方を取り込み、理想の美と神聖な愛を称えた作品だ。カンパス・テンペラ形式は当時としては異例の大きさで、芸術的野心の大胆な表明であった。",
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
    backstoryJa:
      "ローマ教皇ユリウス2世からバチカンの使徒宮殿のために依頼されたこのフレスコ画は、プラトン・アリストテレス・ソクラテスなど古代最大の思想家たちを壮麗な古典の間に集めている。ラファエロはさりげなく同時代の顔を紛れ込ませており、プラトンはレオナルド・ダ・ヴィンチの面差しを持つ。理性と信仰の共存を宣言した作品といえる。",
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
    backstoryJa:
      "壮大なシスティーナ礼拝堂の天井画の一部であり、神の指先からアダムへと命の火花が伝わる瞬間を捉えている。ミケランジェロが4年間足場の上に横たわりながら描き上げたこの作品の、ほぼ触れ合いそうな2本の指の間の隙間は、西洋美術で最も認知されるイメージの一つとなった。現代の神経科学者は、神を囲む形状が人間の脳の断面図に酷似していることを指摘している。",
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
    backstoryJa:
      "「北のモナ・リザ」とも呼ばれるフェルメールのトローニエ（人物習作）は、底なしの黒い背景を背にした名もなき若い女性を描いている。ガラスや錫かもしれないと言われる一粒の真珠は、彼女の肩越しの視線と同様に完璧に光を捉えている。モデルについては何も判明しておらず、何世紀にもわたるロマンチックな憶測を生んできた。",
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
    backstoryJa:
      "アムステルダムの市民民兵がレンブラントに集合肖像画を依頼したが、当時の慣習とは異なり、爆発的な躍動感あふれる場面が生み出された。松明の光、交差する槍、金色に輝く謎の少女、吠える犬——。この巨大なカンバス（後に切り取られる前はさらに大きかった）は現在ライクスミュージアムに飾られ、オランダ黄金時代の自信の象徴として輝き続けている。",
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
    backstoryJa:
      "当時の数少ない著名な女性画家の一人であるアルテミジア・ジェンティレスキは、ユディット記の残酷な場面をほかに類を見ない内臓的な激しさで描いた。この絵は彼女の個人的な体験——性的暴行の被害と過酷な公開裁判——を反映していると広く解釈されている。筋肉を張りつめさせるユディットとアブラの姿は、聖書の救済物語を女性の反抗的な力の宣言へと変容させた。",
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
    backstoryJa:
      "ベラスケスはスペイン王宮での制作風景を自ら描き込み、王女マルガリータを侍女たちが囲む場面を捉えた。遠くの鏡には国王夫妻が映し出されている。この絵は視点をめぐる刺激的な問いを投げかける——私たちは王室の夫妻を眺めているのか、それとも私たち自身が彼らなのか？ピカソは後に一連の解釈作品でオマージュを捧げた。",
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
    backstoryJa:
      "岩の崖に立つ一人の人物が、こちらに背を向け、渦巻く霧の海と遠くの峰々を見つめている。フリードリヒは意図的にその顔を見せず、自然の崇高な力と向き合うすべての鑑賞者の代わりとした。この絵はドイツ・ロマン主義——啓蒙主義の合理性よりも感情・孤独・畏怖を重んじた運動——の象徴となった。",
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
    backstoryJa:
      "1830年の七月革命のわずか数か月後に描かれたドラクロワの寓意画は、三色旗を掲げた素胸の女性「自由の女神」がバリケードと倒れた人々の上を力強く歩む姿を描いている。彼女はフランスそのものの顔——マリアンヌ——となった。ドラクロワは山高帽の銃を持つ市民として自分自身も画中に描き込み、この蜂起への個人的な感情移入を示した。",
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
    backstoryJa:
      "日本生まれでありながら、北斎のこの木版画は自然の圧倒的な力というロマン主義のテーマと深く共鳴する。「富嶽三十六景」の一枚として、荒れ狂う波が小さな漁船——そして富士山をも——矮小に見せている。貿易を通じてヨーロッパに渡ったこの作品は「ジャポニスム」を巻き起こし、印象派や象徴主義の画家たちに多大な影響を与えた。",
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
    backstoryJa:
      "ル・アーヴルの工業港を霞んだ筆致で捉えたこの作品が「印象派」という名称の由来となった——批評家が揶揄して使った言葉を、画家たちが誇りの証として採用したのだ。モネは夜明け前の一瞬を捉え、精密な描写よりも光の感覚を優先した。小さなオレンジ色の太陽は美術史上最も効率的に描かれたオブジェクトかもしれない。",
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
    backstoryJa:
      "スーラは2年をかけてこの大作をポワンティリズム——純粋な色の無数の小さな点を目が距離をおいて混合する技法——によって完成させた。セーヌ川の島の公園の場面は奇妙なほど静止しており、人物たちは顔を見せず硬直したまま時間の中に凍りついているようだ。スーラは日常の余暇を古代のフリーズ絵画に匹敵する荘厳さへと高めようとした。",
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
    backstoryJa:
      "ルノワールは毎週この大きなカンバスをモンマルトルのムーラン・ド・ラ・ギャレットの野外ダンスパーティーに運び込み、木漏れ日が踊り子たちに降り注ぐ様子を描いた。モデルは彼の友人や隣人たちだ。スーラの群衆が静的に感じられるのに対し、ルノワールの群衆は温かみに輝き、筆致が光の中に固い形を溶かし込んで喜びに溢れた揺らめきを生み出している。",
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
    backstoryJa:
      "ゴッホがサン＝ポール＝ド＝モーゾル療養所に自らの意志で入院していた時期に描かれたこの作品は、彼の部屋から見た景色——渦を巻く感情的な夜空と静かな村——を映し出している。星を眺めると安らかな来世を夢見ると彼は書き記した。精神的苦悩から生まれた激しい筆致が、逆説的に美術史上最も心安らぐイメージの一つを生み出している。",
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
    backstoryJa:
      "意図的に挑発的なこの作品でピカソは、五人の裸の人物を複数の視点から同時に描くことで、ルネサンス以来の一貫した遠近法の伝統を打ち砕いた。イベリアの彫刻とアフリカの仮面に影響を受けたこの絵は、キュビズムと近代抽象芸術の扉として広く認識されている。マティスやブラックでさえ最初はその衝撃に動揺したと伝えられる。",
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
    backstoryJa:
      "ダリは柔らかいカマンベールチーズにインスパイアされて——と彼は語った——2時間以内に溶ける時計を描き上げた。カタルーニャのカップ・デ・クリューの崖を背景に、時間そのものが流動的で無意味なものになる小さな風景が広がる。この絵はシュルレアリスムの最も有名なアイコンとなり、時計の時間と夢の弾力的な時間の違いを問いかける。",
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
    backstoryJa:
      "カンディンスキーは絵画を純粋な抽象へと推し進めた最初の芸術家の一人だ。バウハウスで教鞭をとりながら、幾何学的形態と色彩には直接的な感情的等価物があるという理論を発展させた——円は宇宙的で穏やか、三角形は鋭く霊的だと。コンポジションVIIIは美術として書かれたオーケストラのスコアであり、各形が視覚的交響曲の一音符を成している。",
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
    backstoryJa:
      "ウォーホルはキャンベルスープの全32種類を一枚ずつ、スーパーマーケットの棚のように並べて展示し、高尚な芸術と消費文化の境界線を曖昧にした。この題材を選んだのは、20年間毎日昼食にそのスープを食べていたからだという。この作品はポップアートを美術館へと送り込み、日常のオブジェクトが芸術として扱われることで芸術になり得るかを問い続けている。",
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
    backstoryJa:
      "ロスコの大きなカラーフィールドのカンバスは近距離で体験されるよう設計されており、輝く色の長方形が鑑賞者の周辺視野全体を満たす。彼が求めたのは涙——イメージでも物語でもなく、直接の感情の伝達だ。No.61は錆色とマルーンの上に浮かぶ青の長方形を重ね、哀歌と温もりの間にある何かを喚起する。",
  },
];
