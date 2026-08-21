// THE LIVING CANVAS — NATIONAL DIGITAL ARCHIVE OF INDIAN ART HISTORY
// Authoritative Curatorial Knowledge Graph across 25+ Canonical Locations

export const ERAS = [
  { id: "all", label: "All Eras (Continuum)", date: "12,000 BCE – Present", desc: "The complete 14,000-year living continuum of Indian visual culture." },
  { id: "prehistoric", label: "Prehistoric Rock Art", date: "c. 12,000 – 2,000 BCE", desc: "Hunter-gatherer rock shelters, hematite ochres, and ritual hunting glyphs in the Vindhyas." },
  { id: "ancient", label: "Ancient & Classical", date: "c. 3,000 BCE – 700 CE", desc: "Indus urban grid planning, Mauryan sandstone monoliths, and Gupta-Vakataka cave murals." },
  { id: "medieval", label: "Medieval Dynastic & Monolithic", date: "c. 700 – 1500 CE", desc: "Monolithic rock excavations, Chola lost-wax bronzes, Vijayanagara granite metropolis, and Kalinga chariot spires." },
  { id: "early-modern", label: "Early Modern Courts & Guilds", date: "c. 1500 – 1800 CE", desc: "Mughal, Rajput & Pahari court miniatures, Banarasi silk brocades, and Kerala temple frescoes." },
  { id: "colonial", label: "Colonial Encounter & Revival", date: "c. 1800 – 1947", desc: "Company school documentary art, Bengal School nationalist wash revival against British academic realism." },
  { id: "modern", label: "Post-Independence Modernism", date: "1947 – 1990", desc: "Bombay Progressive Artists' Group, Madras Art Movement, and Santiniketan eco-modernism." },
  { id: "contemporary", label: "Living Contemporary Crafts", date: "1990 – Present", desc: "Adivasi living traditions, hereditary craft guilds, and global contemporary Indian art." }
];

export const REGIONS = [
  "All regions",
  "North",
  "North-West",
  "West",
  "Central",
  "East",
  "South"
];

export const FORMS = [
  "All forms",
  "Mural & Cave Painting",
  "Miniature Painting",
  "Rock-cut & Monolithic",
  "Temple Architecture",
  "Sculpture & Bronze Casting",
  "Folk & Living Indigenous Art",
  "Woven Textile & Fiber",
  "Master Craft & Metalwork",
  "Modernist Fine Art"
];

export const LOCATIONS = [
  // 1. PREHISTORIC & ANCIENT
  {
    id: "bhimbetka",
    name: "Bhimbetka Rock Shelters",
    state: "Madhya Pradesh",
    region: "Central",
    era: "prehistoric",
    form: "Mural & Cave Painting",
    lat: 22.93,
    lon: 77.58,
    period: "c. 10,000 – 2,000 BCE",
    dynasty: "Mesolithic Hunter-Gatherer Lineages",
    patronage: "Ancestral Forest Communities",
    title: "The First Stroke: Mineral Ochres on Sandstone",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
    description: "Nestled in the Vindhyan sandstone cliffs, over 750 rock shelters contain paintings spanning 10,000+ years. Hunter-gatherers used iron-rich hematite, plant juices, and animal fats to depict bison, deer, stick-figure dances, and sacred shamans.",
    context: "The paintings survived millennia because minerals oxidized directly into the porous quartzose sandstone, bonding pigment chemically into the living rock.",
    spatialPhilosophy: "Cave as cosmic sanctuary: rock walls were treated not as flat canvases, but as living skins mediating between the underworld and human survival.",
    theory: "Bhimbetka establishes the birth of Indian visual grammar: dynamic stick figures in communal rhythm that persist directly in modern Warli art.",
    materials: ["Vindhyan Sandstone", "Hematite (Red Ochre)", "Kaolin White", "Animal Fats", "Plant Gum"],
    techniques: ["Direct Finger Painting", "Feather Stippling", "Natural Mineral Oxidation"],
    pigments: ["Geru (Iron Oxide)", "Lime White", "Manganese Black"],
    artists: ["Mesolithic Ancestral Guilds"],
    movements: ["Indian Prehistoric Rock Art"],
    evidenceLevel: "Directly Documented (Radiocarbon dating of rock shelter floor layers).",
    connectedIds: ["warli", "bastar", "sanchi"],
    source: "UNESCO World Heritage Centre (Ref. 925)",
    sourceUrl: "https://whc.unesco.org/en/list/925/",
    artworks: [
      {
        title: "The Great Animal Procession & Hunters",
        type: "Rock Shelter Mineral Mural",
        date: "c. 8,000 BCE",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
        description: "Dynamic hunting scene with giant horned bison surrounded by running archers painted in red hematite.",
        hotspots: [
          { x: 45, y: 40, title: "Hematite Mineral Bond", note: "Iron oxide chemically oxidized into the sandstone matrix, preserving pigment without varnish." },
          { x: 70, y: 60, title: "Kinetic Motion", note: "Elongated limbs expressing high-velocity sprint and animal panic." }
        ]
      }
    ]
  },
  {
    id: "sanchi",
    name: "Sanchi Great Stupa",
    state: "Madhya Pradesh",
    region: "Central",
    era: "ancient",
    form: "Rock-cut & Monolithic",
    lat: 23.48,
    lon: 77.74,
    period: "3rd BCE – 1st CE",
    dynasty: "Maurya & Satavahana Dynasties",
    patronage: "Emperor Ashoka, Vidisha Merchant & Ivory Carver Guilds",
    title: "Ivory into Stone: The Narrative Gateways (Toranas)",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    description: "Crowning a sandstone hill, the Great Stupa at Sanchi is a cosmological hemisphere ringed by four monumental carved gateways (Toranas) carved with microscopic ivory-like precision.",
    context: "Inscriptions reveal that the Vidisha guild of ivory workers carved the South Gateway, translating microscopic ivory carving techniques directly into massive sandstone beams.",
    spatialPhilosophy: "Pradakshina (Sacred Circumambulation): the devotee walks clockwise around the cosmic mound, viewing continuous pictorial narratives of the Buddha's past lives.",
    theory: "Aniconic Buddhist art: the Buddha is represented not as a human idol, but as pure symbol—footprints, parasol, riderless horse, and empty throne.",
    materials: ["Chunar Sandstone", "Local Buff Sandstone", "Lime Stucco"],
    techniques: ["Ivory-style High Relief", "Mortarless Stone Carpentry", "Continuous Narrative"],
    pigments: ["Traces of red lead and gold leaf on stucco carvings"],
    artists: ["Vidisha Guild of Ivory Carvers (Dantakaras)"],
    movements: ["Early Buddhist Sculpture", "Satavahana Architectural Art"],
    evidenceLevel: "Directly Documented (Epigraphs in Brahmi on South Gateway pillar).",
    connectedIds: ["bhimbetka", "ajanta", "mathura"],
    source: "UNESCO World Heritage Centre (Ref. 524)",
    sourceUrl: "https://whc.unesco.org/en/list/524/",
    artworks: [
      {
        title: "East Gateway Bracket: Shalabhanjika (Tree Nymph)",
        type: "Architectural Sandstone Sculpture",
        date: "1st century BCE",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
        description: "Voluptuous tree goddess kicking a flowering mango tree to induce blossoming, acting as a structural stone bracket.",
        hotspots: [
          { x: 50, y: 35, title: "Tribhanga Arch", note: "The dynamic diagonal posture serving both aesthetic and structural load-bearing roles." },
          { x: 30, y: 70, title: "Drapery Carving", note: "Sheer diaphanous silk rendered through fine sandstone striations." }
        ]
      }
    ]
  },
  {
    id: "ajanta",
    name: "Ajanta Caves",
    state: "Maharashtra",
    region: "West",
    era: "ancient",
    form: "Mural & Cave Painting",
    lat: 20.55,
    lon: 75.70,
    period: "2nd BCE – 6th CE",
    dynasty: "Satavahana & Vakataka Dynasties",
    patronage: "Emperor Harishena, Royal Ministers, Monastic Sangha",
    title: "Mastery of Pigment: The Bodhisattva in Light & Shadow",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    description: "Carved into the crescent basalt gorge of the Waghora River, the 30 rock-cut caves of Ajanta represent the supreme peak of classical Buddhist mural painting and monastic sanctuary design.",
    context: "Executed in tempera on mud-plastered basalt, the murals depict the Jataka tales with extraordinary psychological depth, fluid calligraphic lines, and imported Afghan Lapis Lazuli pigments.",
    spatialPhilosophy: "Architecture as sensory transition: devotees leave the blinding Deccan sunlight to enter candlelit womb-chambers where paintings envelop columns and ceilings without borders.",
    theory: "Ajanta embodies the Chitrasutra canon: using delicate contour lines (rekha) and anatomical modeling to express compassionate spiritual presence (bhava).",
    materials: ["Living Basalt", "Clay & Cow-dung Plaster", "Fine Lime Slip (Chunam)", "Organic Binders"],
    techniques: ["Fresco-secco Painting", "Continuous Narrative Framing", "Calligraphic Shading"],
    pigments: ["Lapis Lazuli (Ultramarine)", "Malachite Green", "Red Ochre", "Lampblack", "Kaolin"],
    artists: ["Vakataka Royal Ateliers & Monastic Guilds"],
    movements: ["Gupta-Vakataka Classical Art", "Buddhist Cave Painting"],
    evidenceLevel: "Directly Documented (Royal cave dedication epigraphs in Caves 16 & 17).",
    connectedIds: ["ellora", "lepakshi", "kerala"],
    source: "UNESCO World Heritage Centre (Ref. 242)",
    sourceUrl: "https://whc.unesco.org/en/list/242/",
    artworks: [
      {
        title: "Padmapani (The Lotus Bearer) — Cave 1",
        type: "Cave Mural Tempera",
        date: "c. 475 CE (Vakataka Golden Age)",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        description: "The Bodhisattva of Compassion standing in graceful tribhanga posture holding a blue lotus flower.",
        hotspots: [
          { x: 48, y: 32, title: "Tribhanga Posture", note: "The gentle triple-bend stance expressing spiritual serenity and inward compassion." },
          { x: 38, y: 50, title: "Lapis Lazuli Pigment", note: "Imported along Silk Road trade routes from Badakhshan mines in northern Afghanistan." },
          { x: 65, y: 22, title: "Jeweled Headdress", note: "Detailed rendering of pearls, emeralds, and silk ribbons worn by 5th-century royalty." }
        ]
      }
    ]
  },

  // 2. MEDIEVAL DYNASTIC & MONOLITHIC
  {
    id: "ellora",
    name: "Ellora Caves & Kailasa",
    state: "Maharashtra",
    region: "West",
    era: "medieval",
    form: "Rock-cut & Monolithic",
    lat: 20.03,
    lon: 75.18,
    period: "6th – 10th centuries CE",
    dynasty: "Rashtrakuta & Chalukya Dynasties",
    patronage: "King Krishna I (Rashtrakuta), Royal Queens, Jain Guilds",
    title: "Extracting a Mountain: The Monolithic Kailasa Temple",
    image: "https://images.unsplash.com/photo-1600100397608-f010f31d8c6d?auto=format&fit=crop&w=1200&q=80",
    description: "Extending over 2 kilometers of Charanandri basalt cliffs, Ellora's 34 caves house Buddhist, Hindu, and Jain monuments standing in harmony. Its crowning wonder is Cave 16 (Kailasa Temple): a multi-story Dravidian temple carved top-down from a single mass of solid rock.",
    context: "Over 200,000 tons of rock were excavated from the cliff summit downward. Master sculptors carved roof spires, mandapas, and life-size elephant plinths without any scaffolding or assembled blocks.",
    spatialPhilosophy: "Subtractive architecture: while standard buildings assemble materials, monolithic rock excavation uncovers sacred space by removing stone from the living mountain.",
    theory: "Ellora is proof of religious coexistence and shared craftsmanship, where the same stone guilds executed Buddhist, Hindu, and Jain sanctuaries consecutively.",
    materials: ["Deccan Traps Basalt", "Lime Stucco Plaster"],
    techniques: ["Top-down Trenching", "Monolithic Sculpture", "High-relief Deep Undercutting"],
    pigments: ["Traces of painted medieval stucco on ceilings"],
    artists: ["Rashtrakuta Master Stonemasons"],
    movements: ["Deccan Rock-Cut Architecture", "Rashtrakuta Imperial Art"],
    evidenceLevel: "Directly Documented (Baroda copper-plate grant of Karka II).",
    connectedIds: ["ajanta", "mahabalipuram", "hampi"],
    source: "UNESCO World Heritage Centre (Ref. 243)",
    sourceUrl: "https://whc.unesco.org/en/list/243/",
    artworks: [
      {
        title: "Kailasa Temple Monolithic Complex (Cave 16)",
        type: "Monolithic Rock Architecture",
        date: "8th century CE",
        image: "https://images.unsplash.com/photo-1600100397608-f010f31d8c6d?auto=format&fit=crop&w=1200&q=80",
        description: "Entire temple complex including vimana, Nandi pavilion, and elephant plinth carved from one basalt cliff.",
        hotspots: [
          { x: 50, y: 55, title: "Ravana Shaking Mount Kailasa", note: "Monumental relief showing multi-armed Ravana trapped under Shiva and Parvati's mountain throne." },
          { x: 30, y: 75, title: "Monolithic Elephant Base", note: "Plinth carved with a herd of life-size elephants supporting the temple weight." }
        ]
      }
    ]
  },
  {
    id: "mahabalipuram",
    name: "Mahabalipuram Monuments",
    state: "Tamil Nadu",
    region: "South",
    era: "medieval",
    form: "Rock-cut & Monolithic",
    lat: 12.62,
    lon: 80.19,
    period: "7th – 8th centuries CE",
    dynasty: "Pallava Dynasty",
    patronage: "Kings Mahendravarman I & Narasimhavarman I (Mamalla)",
    title: "Granite by the Sea: Descent of the Ganges & Shore Temple",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "Along the Bay of Bengal coastline, Pallava sculptors transformed living granite boulders into monolithic rathas, cave sanctuaries, and the world's largest open-air rock relief: the Descent of the Ganges (Arjuna's Penance).",
    context: "The relief incorporates a natural vertical cleft in the rock as the sacred river Ganges, cascading with carved nagas, elephants, celestial gods, and forest animals.",
    spatialPhilosophy: "Maritime consecrated geography: temples were engineered to face the sunrise over crashing ocean waves, serving as navigational beacons for Indian merchant armadas.",
    theory: "Pallava sculpture represents the transition from rock-cut excavation to structural granite masonry in South Indian architecture.",
    materials: ["Coastal Granite Bedrock", "Bas-relief Undercutting"],
    techniques: ["Monolithic Ratha Carving", "Natural Cleft Hydro-Sculpture"],
    pigments: ["Natural grey granite patina"],
    artists: ["Pallava Royal Stonemason Lineages"],
    movements: ["Pallava Classical Dravidian Art"],
    evidenceLevel: "Directly Documented (Granite inscriptions in Grantha and Tamil script).",
    connectedIds: ["thanjavur", "ellora", "kerala"],
    source: "UNESCO World Heritage Centre (Ref. 249)",
    sourceUrl: "https://whc.unesco.org/en/list/249/",
    artworks: [
      {
        title: "Descent of the Ganges (Arjuna's Penance)",
        type: "Open-Air Granite Bas-Relief",
        date: "7th century CE",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        description: "Massive 27m x 9m open-air granite rock relief populated by over 100 life-size figures, gods, and elephants.",
        hotspots: [
          { x: 50, y: 50, title: "Central River Cleft", note: "Natural fissure in the granite designed to channel actual rainwater down the sculpture." },
          { x: 75, y: 70, title: "Life-Size Elephant Herd", note: "Sculpted with profound naturalism showing calves sheltered beneath the bull elephant." }
        ]
      }
    ]
  },
  {
    id: "thanjavur",
    name: "Thanjavur & Brihadisvara",
    state: "Tamil Nadu",
    region: "South",
    era: "medieval",
    form: "Sculpture & Bronze Casting",
    lat: 10.79,
    lon: 79.14,
    period: "10th – 12th centuries CE",
    dynasty: "Imperial Chola Dynasty",
    patronage: "Emperor Rajaraja Chola I, Queen Sembiyan Mahadevi",
    title: "Chola Lost-Wax Bronzes & Granite Tower of Brihadisvara",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    description: "The imperial capital of the Cholas, Thanjavur is home to the titanic Brihadisvara Temple (1010 CE) and the birthplace of the world-famous Chola lost-wax Panchaloha bronze sculptures.",
    context: "Chola bronzes were cast using the cire-perdue (lost-wax) method to create dynamic processional deities (Utsavamurti) carried through streets during grand temple festivals.",
    spatialPhilosophy: "Monumental scale meets intimate street worship: the divine is housed in a 66-meter granite tower and brought into public streets in bronze form.",
    theory: "The Nataraja bronze achieves cosmic balance: holding creation (damaru) and dissolution (fire) in ecstatic stillness within the flaming aureole of time.",
    materials: ["Granite", "Panchaloha (5-Metal Alloy: Copper, Zinc, Lead, Silver, Gold)", "Gold Leaf"],
    techniques: ["Lost-wax Metal Casting (Cire Perdue)", "Tala Proportion System", "Granite Masonry"],
    pigments: ["Natural mineral patina", "Gilded gold leaf"],
    artists: ["Chola Sthapatis & Swamimalai Bronze Guilds"],
    movements: ["Chola Bronze Classical Era", "Dravidian Imperial Temple Architecture"],
    evidenceLevel: "Directly Documented (Detailed Tamil stone inscriptions on Brihadisvara plinths).",
    connectedIds: ["mahabalipuram", "hampi"],
    source: "UNESCO World Heritage Centre (Ref. 250)",
    sourceUrl: "https://whc.unesco.org/en/list/250/",
    artworks: [
      {
        title: "Shiva Nataraja (Lord of the Cosmic Dance)",
        type: "Lost-Wax Panchaloha Bronze",
        date: "11th century CE (Chola Imperial Workshop)",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
        description: "Four-armed dancing Shiva balancing creation and destruction inside an arch of flames.",
        hotspots: [
          { x: 50, y: 35, title: "Damaru & Agni", note: "The upper right hand beats the rhythm of creation; the upper left holds cosmic fire." },
          { x: 50, y: 80, title: "Crushing Delusion", note: "The right foot stamps down on Apasmara, the dwarf of ignorance and spiritual delusion." }
        ]
      }
    ]
  },
  {
    id: "hampi",
    name: "Hampi & Vijayanagara",
    state: "Karnataka",
    region: "South",
    era: "medieval",
    form: "Temple Architecture",
    lat: 15.33,
    lon: 76.46,
    period: "14th – 16th centuries CE",
    dynasty: "Vijayanagara Empire",
    patronage: "Emperor Krishnadevaraya, Royal Queens, Merchant Guilds",
    title: "Granite Metropolis: Musical Colonnades & Chariots",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    description: "Spread across 4,100 hectares of boulder-strewn hills along the Tungabhadra River, Hampi was the capital of the Vijayanagara Empire—celebrated for musical stone pillars, open bazaar streets, and colossal monolithic shrines.",
    context: "Hampi fused southern Dravidian temple towers with northern Indo-Islamic arches and domes, creating grand civic spaces described by Venetian and Portuguese travelers.",
    spatialPhilosophy: "Choreography of imperial movement: wide processional chariot streets connected royal gates directly to sacred temple courtyards.",
    theory: "Architecture grows out of natural granite boulders, transforming rugged geology into monumental urban spectacle.",
    materials: ["Granite", "Teakwood", "Lime Plaster", "Basalt"],
    techniques: ["Acoustic Stone Carving", "Monolithic Excavation", "Ashlar Masonry"],
    pigments: ["Traces of mineral frescoes on ceiling mandapas"],
    artists: ["Vijayanagara Royal Temple Guilds"],
    movements: ["Vijayanagara Imperial Architecture", "Deccan Stone Sculpture"],
    evidenceLevel: "Directly Documented (Chronicles of Domingo Paes, Fernão Nunes & Abdur Razzaq).",
    connectedIds: ["thanjavur", "ellora"],
    source: "UNESCO World Heritage Centre (Ref. 241)",
    sourceUrl: "https://whc.unesco.org/en/list/241/",
    artworks: [
      {
        title: "Vittala Temple & Stone Chariot (Garuda Shrine)",
        type: "Architectural Granite Complex",
        date: "16th century CE (Reign of Krishnadevaraya)",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
        description: "Monolithic stone chariot shrine with functioning rotating stone wheels and musical pillared hall.",
        hotspots: [
          { x: 50, y: 55, title: "Precision Interlocking Granite", note: "Constructed from dressed granite slabs fitted without mortar." },
          { x: 80, y: 40, title: "Musical Pillars (SaReGaMa)", note: "Pillar clusters that emit musical notes when lightly struck." }
        ]
      }
    ]
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temples",
    state: "Madhya Pradesh",
    region: "Central",
    era: "medieval",
    form: "Temple Architecture",
    lat: 24.85,
    lon: 79.92,
    period: "950 – 1050 CE",
    dynasty: "Chandela Dynasty",
    patronage: "Chandela Kings (Yashovarman, Dhanga, Vidyadhara)",
    title: "The Inhabited Spire: Nagara Spires & Sculptural Density",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
    description: "Rising in Bundelkhand, Khajuraho's 25 temples represent the zenith of Nagara architecture, with soaring mountain-like shikhara spires and exterior walls populated by celestial nymphs, deities, and sacred sensual couples.",
    context: "Rooted in Kaula and Tantric philosophies, the sculptures celebrate Kama (sensual vitality) as an integral aspect of universal cosmic manifestation.",
    spatialPhilosophy: "Vertical ascent from worldly celebration on the exterior plinth to the quiet, dark, unadorned inner sanctum (garbhagriha).",
    theory: "Khajuraho dissolves the division between sacred and worldly life: cosmic reality encompasses dance, love, music, and divine stillness.",
    materials: ["Buff Sandstone", "Granite Foundation"],
    techniques: ["Mortarless Ashlar Masonry", "High-relief Undercutting"],
    pigments: ["Warm natural golden patina of sandstone"],
    artists: ["Chandela Sculptural Guilds"],
    movements: ["Nagara Temple Architecture", "Chandela Sculptural Style"],
    evidenceLevel: "Directly Documented (Sanskrit dedicatory inscriptions).",
    connectedIds: ["konark", "jaipur"],
    source: "UNESCO World Heritage Centre (Ref. 240)",
    sourceUrl: "https://whc.unesco.org/en/list/240/",
    artworks: [
      {
        title: "Kandariya Mahadeva Exterior Friezes",
        type: "Architectural Sandstone Sculpture",
        date: "c. 1030 CE",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
        description: "Over 800 life-size figures sculpted onto the exterior spires of the 31-meter temple.",
        hotspots: [
          { x: 50, y: 30, title: "Urushringa Spires", note: "Cluster spires replicating Mount Kailash mountain peaks." },
          { x: 45, y: 65, title: "Surasundari Figures", note: "Celestial maidens applying kohl and tying anklets with graceful fluid anatomy." }
        ]
      }
    ]
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    state: "Odisha",
    region: "East",
    era: "medieval",
    form: "Temple Architecture",
    lat: 19.89,
    lon: 86.09,
    period: "13th century CE (c. 1250 CE)",
    dynasty: "Eastern Ganga Dynasty",
    patronage: "King Narasimhadeva I",
    title: "Chariot of the Sun: Kalinga Engineering & Cosmic Time",
    image: "https://images.unsplash.com/photo-1609766418204-94aae0ecfddc?auto=format&fit=crop&w=1200&q=80",
    description: "Conceived as a colossal stone chariot for the Sun God Surya, Konark sits on the Bay of Bengal coast with 24 carved stone wheels drawn by seven galloping horses.",
    context: "Constructed by 1,200 craftsmen over 12 years, the temple wheels function as precise astronomical sundials whose spoke shadows give the exact time of day.",
    spatialPhilosophy: "Static stone turned into celestial motion: thousands of tons of khondalite stone engineered as a speeding cosmic vehicle.",
    theory: "Konark demonstrates the integration of advanced mathematics, metallurgy (wrought-iron reinforcing beams), and sacred cosmology.",
    materials: ["Khondalite Stone", "Green Chlorite", "Wrought Iron Beams"],
    techniques: ["Kalinga Deula Architecture", "Intaglio Wheel Carving"],
    pigments: ["Natural chlorite green and weathered khondalite red"],
    artists: ["Chief Architect Bishu Maharana & Eastern Ganga Artisans"],
    movements: ["Kalinga Temple Architecture", "Eastern Ganga Art"],
    evidenceLevel: "Directly Documented (Madala Panji palm-leaf temple chronicles).",
    connectedIds: ["khajuraho", "madhubani"],
    source: "UNESCO World Heritage Centre (Ref. 246)",
    sourceUrl: "https://whc.unesco.org/en/list/246/",
    artworks: [
      {
        title: "The Great Sundial Wheel of Surya",
        type: "Architectural Stone Relief",
        date: "c. 1250 CE",
        image: "https://images.unsplash.com/photo-1609766418204-94aae0ecfddc?auto=format&fit=crop&w=1200&q=80",
        description: "Intricately carved 3-meter chariot wheel with 8 major spokes and medallions.",
        hotspots: [
          { x: 50, y: 50, title: "Astronomical Hub", note: "The central hub shadow casts exact time across carved perimeter beads." },
          { x: 75, y: 70, title: "Chlorite Surya Deity", note: "Sculpted in fine-grained green chlorite wearing Central Asian riding boots." }
        ]
      }
    ]
  },

  // 3. EARLY MODERN COURTS & GUILDS
  {
    id: "jaipur",
    name: "Jaipur & Amber",
    state: "Rajasthan",
    region: "North-West",
    era: "early-modern",
    form: "Miniature Painting",
    lat: 26.91,
    lon: 75.79,
    period: "16th – 19th centuries CE",
    dynasty: "Kachhwaha Rajput Dynasty",
    patronage: "Maharaja Sawai Jai Singh II, Sawai Pratap Singh",
    title: "The Court Miniature: Opaque Gouache, Gold & Ragamala",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    description: "In the royal Suratkhana (painting studio), master painters synthesized Mughal naturalism with Rajput lyrical passion, creating vivid Ragamala music illustrations and Gita Govinda manuscripts in gold and mineral gouache.",
    context: "Miniatures were created on layered Wasli paper, burnished with agate stone for an enamel sheen, and illuminated with 24k gold leaf (vark).",
    spatialPhilosophy: "Intimate tactile contemplation: designed to be held in hands and turned sheet-by-sheet in albums (muraqqa) rather than viewed from a wall distance.",
    theory: "Visualizing music and emotion: Ragamala paintings assign visual colors, seasons, and moods (rasas) to specific musical melodies.",
    materials: ["Layered Wasli Paper", "Mineral Gouache", "24k Gold Leaf", "Agate Stone"],
    techniques: ["Microscopic Squirrel-hair Brushwork", "Agate Burnishing", "Gold Detailing"],
    pigments: ["Malachite Green", "Peori (Indian Yellow)", "Cinnabar Red", "Lapis Lazuli"],
    artists: ["Sahibram, Ramji Das & Royal Suratkhana Painters"],
    movements: ["Jaipur School of Miniature Painting", "Rajasthani Court Art"],
    evidenceLevel: "Directly Documented (Suratkhana royal inventory records).",
    connectedIds: ["kangra", "varanasi", "udaipur"],
    source: "National Gallery of Modern Art / City Palace Museum Jaipur",
    sourceUrl: "https://www.ngmaindia.gov.in/",
    artworks: [
      {
        title: "Ragamala: Asavari Ragini",
        type: "Opaque Watercolour & Gold on Wasli",
        date: "Late 18th century CE",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        description: "A female snake-charmer seated on a rocky cliff under flowering trees playing music for serpents.",
        hotspots: [
          { x: 45, y: 55, title: "Agate Burnished Sheen", note: "Sheet rubbed with smooth agate stone to fuse pigment into an enamel finish." },
          { x: 30, y: 30, title: "Luminous Peori Yellow", note: "Traditional Indian Yellow pigment providing vibrant sunlight intensity." }
        ]
      }
    ]
  },
  {
    id: "kangra",
    name: "Kangra & Basohli",
    state: "Himachal Pradesh",
    region: "North",
    era: "early-modern",
    form: "Miniature Painting",
    lat: 32.10,
    lon: 76.27,
    period: "17th – 19th centuries CE",
    dynasty: "Katoch Dynasty & Hill State Rajas",
    patronage: "Raja Sansar Chand of Kangra, Raja Kripal Pal of Basohli",
    title: "Poetry in the Hills: The Lyrical Pahari Brush",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    description: "In the shadow of the Dhauladhar Himalayas, Pahari miniature painting reached an emotional peak of visual poetry. The fiery red borders of Basohli evolved into the gentle, delicate naturalism of Kangra celebrating Radha and Krishna.",
    context: "Artists fleeing political instability in Delhi entered the mountain valleys, turning Sanskrit poetry (Gita Govinda, Rasikapriya) into visual romance.",
    spatialPhilosophy: "Atmospheric pastoral nature: rolling green hills, monsoon thunderclouds, and quiet marble terraces mirroring inner emotional states (bhavas).",
    theory: "Pahari art humanizes the divine: Krishna and Radha are depicted not as distant gods, but as lovers wandering through familiar Himalayan pine forests.",
    materials: ["Sialkoti Handmade Paper", "Mineral Pigments", "Beetle Wings (Basohli)", "Gold Foil"],
    techniques: ["Single-feather Micro Brushwork", "Beetle-wing Jewel Application"],
    pigments: ["Lapis Lazuli", "Malachite", "Cinnabar", "Peori"],
    artists: ["Pandit Seu, Nainsukh, Manaku, Purkhu"],
    movements: ["Kangra School", "Basohli School", "Pahari Miniature Tradition"],
    evidenceLevel: "Directly Documented (B.N. Goswamy's genealogical research on Pandit Seu family).",
    connectedIds: ["jaipur", "varanasi"],
    source: "National Museum New Delhi",
    sourceUrl: "https://nationalmuseumindia.gov.in/",
    artworks: [
      {
        title: "Radha and Krishna in the Forest at Night",
        type: "Opaque Watercolour on Paper",
        date: "c. 1785 CE (Kangra Valley)",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
        description: "Krishna shelters Radha under an umbrella during a sudden monsoon downpour in the forest.",
        hotspots: [
          { x: 50, y: 40, title: "Nainsukh's Tender Line", note: "Subtle facial modeling and gentle eye contact that transformed miniature painting." },
          { x: 75, y: 15, title: "Monsoon Atmosphere", note: "Translucent indigo washes capturing the drama of mountain rainfall and lightning." }
        ]
      }
    ]
  },
  {
    id: "varanasi",
    name: "Varanasi Silk & Zari",
    state: "Uttar Pradesh",
    region: "North",
    era: "early-modern",
    form: "Woven Textile & Fiber",
    lat: 25.32,
    lon: 82.97,
    period: "14th century CE – Present",
    dynasty: "Mughal & Kashi Naresh",
    patronage: "Imperial Mughal Court, Royal Weddings across India",
    title: "Woven Gold & Silk: The Banarasi Brocade Tradition",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80",
    description: "Along the sacred curve of the Ganga, Varanasi is the ancient home of silk brocade weaving (Kinkhab). Master Ansari weavers operate pit looms to interweave pure mulberry silk with silver-gilt gold zari threads, creating complex Mughal floral vines (bel) and paisleys.",
    context: "Following the migration of Persian and Gujarati weavers during Akbar's reign, the city fused Islamic arabesques with Hindu sacred motifs (lotus, peacock), creating India's premier ceremonial textile.",
    spatialPhilosophy: "Pattern as mathematics and light: supplementary gold weft threads catch light dynamically as the wearer moves, turning the textile into an architectural garment.",
    theory: "Banarasi weaving proves that master craft is pure structural design: the weaver encodes memory directly into warp and weft.",
    materials: ["Pure Mulberry Silk", "Silver-Gilt Gold Zari", "Jacquard/Pit Looms"],
    techniques: ["Kadhwa (hand-locked embroidery on loom)", "Naqsha Graph Drafting"],
    pigments: ["Madder Red", "Turmeric Yellow", "Indigo Blue", "Pure Gold Wire"],
    artists: ["Ansari Master Weaving Lineages of Madanpura"],
    movements: ["Banarasi Silk & Zari Brocade", "Kinkhab Royal Weaving"],
    evidenceLevel: "Directly Documented (Geographical Indication GI & Ain-i-Akbari ledgers).",
    connectedIds: ["jaipur", "kolkata"],
    source: "Ministry of Textiles / Weaver Service Centre Varanasi",
    sourceUrl: "https://handlooms.nic.in/",
    artworks: [
      {
        title: "Kinkhab Royal Brocade Panel (Shikar-gah Motif)",
        type: "Woven Silk & Gold Metallic Zari",
        date: "Traditional Master Craft Technique",
        image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=80",
        description: "Dense royal hunting ground textile pattern woven entirely in raised gold thread.",
        hotspots: [
          { x: 45, y: 50, title: "Kadhwa Weft Locking", note: "Each motif is locked by hand with supplementary spools, leaving zero loose threads on the back." },
          { x: 80, y: 70, title: "Silver-Gilt Zari", note: "Silver wire flattened and wrapped around silk core before 24k gold electroplating." }
        ]
      }
    ]
  },

  // 4. COLONIAL & MODERNIST REVOLUTIONS
  {
    id: "kolkata",
    name: "Kolkata & Bengal School",
    state: "West Bengal",
    region: "East",
    era: "colonial",
    form: "Modernist Fine Art",
    lat: 22.57,
    lon: 88.36,
    period: "Late 19th – Early 20th century",
    dynasty: "Swadeshi Nationalist Movement",
    patronage: "Indian Society of Oriental Art, E.B. Havell, Tagore Family",
    title: "Nationalist Modernism: The Bengal School Wash Technique",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
    description: "Kolkata was the testing ground for modern Indian visual identity. Abanindranath Tagore, E.B. Havell, and Nandalal Bose created the Bengal School, rejecting Victorian academic oils in favor of misty, meditative water wash paintings rooted in Indian mythology and Pan-Asianism.",
    context: "The Bengal School was a cultural weapon of the anti-colonial Swadeshi movement, demonstrating that Indian modernity could draw from indigenous roots rather than imitating British realism.",
    spatialPhilosophy: "Atmospheric Japanese wash meets Ajanta line: soft, glowing, dreamlike spaces bathed in translucent golden mist.",
    theory: "Modernity in non-Western art involves the revolutionary rediscovery and political reinvention of one's own civilizational heritage.",
    materials: ["Handmade Paper", "Chinese Ink", "Watercolour", "Japanese Wash Brushes"],
    techniques: ["Multi-layer Water Wash (Taikan method)", "Calligraphic Ink Line"],
    pigments: ["Earth Ochres", "Indigo", "Soot Black", "Vegetable Washes"],
    artists: ["Abanindranath Tagore, Nandalal Bose, Gaganendranath Tagore, Sunayani Devi"],
    movements: ["Bengal School of Art", "Swadeshi Nationalist Revivalism"],
    evidenceLevel: "Directly Documented (National Gallery of Modern Art collection).",
    connectedIds: ["mumbai", "varanasi"],
    source: "National Gallery of Modern Art",
    sourceUrl: "https://www.ngmaindia.gov.in/",
    artworks: [
      {
        title: "Bharat Mata (Mother India)",
        type: "Watercolour & Wash on Paper",
        date: "1905 CE (Abanindranath Tagore)",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80",
        description: "Four-armed saffron-robed ascetic goddess holding the gifts of the nation: food, cloth, manuscript, and rosary.",
        hotspots: [
          { x: 50, y: 40, title: "The Four Boons", note: "Synthesis of traditional iconography with anti-colonial Swadeshi secular aspirations." },
          { x: 30, y: 70, title: "Japanese Wash Technique", note: "Repeatedly immersing the painted sheet in water to build soft, mystical atmosphere." }
        ]
      }
    ]
  },
  {
    id: "mumbai",
    name: "Mumbai & Bombay PAG",
    state: "Maharashtra",
    region: "West",
    era: "modern",
    form: "Modernist Fine Art",
    lat: 19.08,
    lon: 72.88,
    period: "1947 – Present",
    dynasty: "Post-Independence Indian Republic",
    patronage: "Progressive Artists' Group, Sir J.J. School of Art",
    title: "The Midnight Manifesto: Bombay Progressive Artists",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    description: "Founded in December 1947 in Bombay just months after independence, the Progressive Artists' Group (PAG)—led by F.N. Souza, M.F. Husain, S.H. Raza, and Tyeb Mehta—shattered revivalist aesthetics to forge an internationalist, bold, secular Indian modernism.",
    context: "Meeting in Kala Ghoda cafes, PAG artists embraced Post-Impressionism, Expressionism, and Cubism while grounding their imagery in Indian mythology, folk vitality, and urban life.",
    spatialPhilosophy: "The urban easel canvas: moving art from temple walls into public galleries and international biennials.",
    theory: "Indian artists entering the global post-war avant-garde on equal terms with Picasso, Rouault, and Pollock.",
    materials: ["Oil on Canvas", "Acrylic", "Gouache on Board"],
    techniques: ["Impasto Knife Work", "Color Field Abstraction", "Expressionist Line"],
    pigments: ["Industrial Oil Pigments", "Synthetic Cadmium & Cobalt"],
    artists: ["F.N. Souza, M.F. Husain, S.H. Raza, Tyeb Mehta, V.S. Gaitonde"],
    movements: ["Bombay Progressive Artists' Group (PAG)", "Post-Independence Indian Modernism"],
    evidenceLevel: "Directly Documented (1947 Bombay Art Society Manifesto).",
    connectedIds: ["kolkata", "ajanta"],
    source: "National Gallery of Modern Art",
    sourceUrl: "https://www.ngmaindia.gov.in/",
    artworks: [
      {
        title: "Bindu (Cosmic Origin)",
        type: "Acrylic on Canvas",
        date: "1980s Series (S.H. Raza)",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
        description: "Concentric geometric circles of deep black, burnt orange, and earth pigments symbolizing the primordial seed of creation.",
        hotspots: [
          { x: 50, y: 50, title: "The Black Bindu", note: "Focal point of visual meditation (Dhyana) representing the origin of all spatial expansion." },
          { x: 25, y: 75, title: "Panchatatva Colors", note: "Structured according to the five elements: Earth, Fire, Water, Air, and Space." }
        ]
      }
    ]
  },

  // 5. LIVING CONTEMPORARY INDIGENOUS TRADITIONS
  {
    id: "madhubani",
    name: "Madhubani & Mithila",
    state: "Bihar",
    region: "East",
    era: "contemporary",
    form: "Folk & Living Indigenous Art",
    lat: 26.35,
    lon: 86.07,
    period: "Ancient ritual practice; Paper transition 1966 – Present",
    dynasty: "Mithila Cultural Region",
    patronage: "Domestic Ritual, Women's Wedding Ceremonies, Handicrafts Board",
    title: "A Wall that Remembers: The Ritual Line of Mithila",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    description: "In the villages of Mithila, women have practiced ritual wall painting (Bhitti Chitra) and floor designs (Aripan) for generations, painting nuptial chambers (Kohbar) with double-line ink drawings filled with plant dyes.",
    context: "During the 1966 Bihar drought, master artists like Ganga Devi and Sita Devi transferred their sacred wall murals onto paper, gaining global museum recognition.",
    spatialPhilosophy: "Horror vacui (dense filling): every space is populated with delicate cross-hatching (Kachni) and flat color (Bharni) representing fertility and cosmic harmony.",
    theory: "Mithila painting demonstrates how women's hereditary ritual art is an active contemporary language capable of depicting modern social commentary.",
    materials: ["Handmade Paper", "Bamboo Twigs", "Cow-dung Wash", "Natural Plant Dyes"],
    techniques: ["Kachni (fine line hatching)", "Bharni (color filling)", "Godna (tattoo dotting)"],
    pigments: ["Soot / Lampblack", "Aparajita Flower Blue", "Parijat Orange", "Turmeric"],
    artists: ["Ganga Devi, Sita Devi, Mahasundari Devi, Baua Devi"],
    movements: ["Mithila / Madhubani Painting", "Indian Indigenous Women's Art"],
    evidenceLevel: "Directly Documented (National Master Craft Awards & Mithila Museum Japan).",
    connectedIds: ["bastar", "warli"],
    source: "National Crafts Museum New Delhi",
    sourceUrl: "https://nationalcraftsmuseum.nic.in/",
    artworks: [
      {
        title: "Kohbar Nuptial Chamber Painting",
        type: "Natural Pigment on Handmade Paper",
        date: "Contemporary Master Heritage Work",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
        description: "Central lotus pond (Purain) penetrated by bamboo stalk surrounded by auspicious birds and fish.",
        hotspots: [
          { x: 50, y: 50, title: "Purain Lotus Motif", note: "Symbol of female generative fertility and cosmological purity." },
          { x: 20, y: 30, title: "Kachni Line Technique", note: "Microscopic parallel lines drawn with a sharpened bamboo twig dipped in soot." }
        ]
      }
    ]
  },
  {
    id: "warli",
    name: "Warli & Palghar",
    state: "Maharashtra",
    region: "West",
    era: "contemporary",
    form: "Folk & Living Indigenous Art",
    lat: 19.70,
    lon: 72.76,
    period: "3,000 BCE roots to Living Present",
    dynasty: "Warli Indigenous Community",
    patronage: "Village Harvest Festivals, Jivya Soma Mashe",
    title: "The Circle of Life: Rice Paste on Red Ochre Earth",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80",
    description: "Practiced by the Warli tribes in the Sahyadri mountains, Warli painting is an animist visual language of geometric primitives: circle (sun/moon), triangle (trees/mountains), and square (sacred enclosure) painted with white rice paste on cow-dung mud walls.",
    context: "In the 1970s, Jivya Soma Mashe brought Warli painting from hut walls to canvas, exhibiting at the Centre Pompidou in Paris (1989).",
    spatialPhilosophy: "Dynamic spiral rhythm: hundreds of villagers hold hands in an expanding spiral dance around the central Tarpa horn player.",
    theory: "Minimal semiotics: two touching triangles represent human labor and life force without relying on Western three-dimensional perspective.",
    materials: ["Cow-dung & Red Earth (Geru)", "Rice Paste", "Chewed Bamboo Twig"],
    techniques: ["Direct Manual Dotting", "Spiral Radial Composition"],
    pigments: ["White Rice Paste", "Red Earth Ochre", "Charcoal"],
    artists: ["Jivya Soma Mashe, Balu Mashe, Mayur Vayeda"],
    movements: ["Warli Indigenous Painting", "Adivasi Contemporary Art"],
    evidenceLevel: "Directly Documented (Centre Pompidou & Crafts Museum archives).",
    connectedIds: ["bastar", "madhubani"],
    source: "National Crafts Museum New Delhi",
    sourceUrl: "https://nationalcraftsmuseum.nic.in/",
    artworks: [
      {
        title: "The Tarpa Spiral Dance",
        type: "Rice Paste on Ochre Canvas",
        date: "Contemporary Masterwork",
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80",
        description: "Vast spiral of villagers dancing to the hypnotic music of the Tarpa horn amidst trees and animals.",
        hotspots: [
          { x: 50, y: 50, title: "Central Tarpa Musician", note: "The gourd horn that regulates the rhythm of agricultural community life." },
          { x: 30, y: 70, title: "Dual Triangle Anatomy", note: "Minimal geometric representation of the human body in motion." }
        ]
      }
    ]
  },
  {
    id: "bastar",
    name: "Bastar & Kondagaon",
    state: "Chhattisgarh",
    region: "Central",
    era: "contemporary",
    form: "Master Craft & Metalwork",
    lat: 19.07,
    lon: 81.95,
    period: "Over 4,000 years unbroken lineage",
    dynasty: "Gond & Maria Adivasi Communities",
    patronage: "Tribal Village Deities (Anga Deo), Jaidev Baghel",
    title: "Metal Remembers: Dhokra Lost-Wax Bell Metal Casting",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
    description: "In the sal forests of Bastar, Ghadwa artisans practice Dhokra: the ancient lost-wax bell metal casting technique identical to the Harappan Dancing Girl (c. 2300 BCE).",
    context: "Artisans pull fine beeswax wires to build intricate coils over a clay core, coat it in termite clay, and cast it in bronze in pit kilns. Every piece is an absolute monotype.",
    spatialPhilosophy: "Three-dimensional filigree line: drawing fluid contours in beeswax before freezing them into permanent golden metal.",
    theory: "Proves that Indian living craft traditions are sophisticated metallurgical sciences preserving millennia of unbroken memory.",
    materials: ["Bell Metal (Bronze/Brass)", "Beeswax", "Termite Clay"],
    techniques: ["Lost-wax Casting (Cire Perdue)", "Beeswax Wire Coiling"],
    pigments: ["Polished golden bell-metal patina"],
    artists: ["Jaidev Baghel & Ghadwa Master Guilds"],
    movements: ["Dhokra Lost-Wax Metalwork", "Adivasi Metallurgy"],
    evidenceLevel: "Directly Documented (Metallurgical parity with Indus Valley artifacts).",
    connectedIds: ["madhubani", "warli"],
    source: "Ministry of Tribal Affairs / IGRMS Bhopal",
    sourceUrl: "https://tribal.nic.in/",
    artworks: [
      {
        title: "Anga Deo (Tribal Forest Deity)",
        type: "Lost-Wax Cast Bell Metal",
        date: "Contemporary Masterwork",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
        description: "Elongated ceremonial deity on horned animal vehicle adorned with spiral brass jewelry.",
        hotspots: [
          { x: 50, y: 35, title: "Beeswax Wire Texture", note: "Surface constructed from hand-pulled strands of warm natural beeswax." },
          { x: 50, y: 80, title: "Single-use Mold", note: "The clay shell is shattered with a mallet after cooling, creating an irreplaceable unique work." }
        ]
      }
    ]
  }
];

export const INFLUENCE_CONNECTIONS = [
  { from: "ajanta", to: "ellora", type: "style", label: "Vakataka Cave Murals → Rashtrakuta Rock Monoliths", evidence: "Strong Scholarly Consensus", narrative: "The architectural and figurative vocabulary developed at Ajanta directly inspired the top-down excavation techniques at Ellora." },
  { from: "jaipur", to: "kangra", type: "migration", label: "Mughal & Rajput Court Dispersal → Himalayan Pahari Valleys", evidence: "Directly Documented", narrative: "Artists migrating from the plains to the Punjab Hills brought refined miniature drawing and fused it with lyrical Sanskrit poetry." },
  { from: "thanjavur", to: "hampi", type: "patronage", label: "Chola Lost-Wax Bronze Casting → Vijayanagara Imperial Scale", evidence: "Directly Documented", narrative: "The metallurgical mastery of Chola bronze sthapatis informed the monumental granite sculptures and processional arts of Hampi." },
  { from: "kolkata", to: "mumbai", type: "style", label: "Bengal School Nationalist Revivalism → Bombay PAG Expressionism", evidence: "Directly Documented", narrative: "The Bombay Progressive Artists explicitly countered the nostalgic historicism of the Bengal School, asserting bold secular internationalism." },
  { from: "bastar", to: "warli", type: "material", label: "Indigenous Continuity: Lost-Wax Bronze & Earth Rice Paste", evidence: "Curatorial Interpretation", narrative: "Both traditions preserve an animist, non-hierarchical relationship between community, forest ecology, and sacred visual memory." },
  { from: "varanasi", to: "jaipur", type: "trade", label: "Silk Route & Zari Brocade Trade Corridors", evidence: "Directly Documented", narrative: "Courtly ceremonial textiles and precious metallic threads circulated across North Indian trade and pilgrimage routes." }
];

export const PIGMENT_LABORATORY = [
  {
    id: "lapis-lazuli",
    name: "Lapis Lazuli (Ultramarine)",
    chemical: "Sodium Aluminium Silicate with Sulfur [Na₈-₁₀Al₆Si₆O₂₄S₂-₄]",
    source: "Imported from ancient Badakhshan mines (Afghanistan) via Silk Road.",
    preparation: "Finely ground, washed in lye and resins to isolate pure lazurite crystals.",
    traditions: ["Ajanta Cave Murals", "Mughal Miniatures", "Deccani Court Albums"],
    properties: "Deep celestial blue, permanent lightfastness, semi-transparent luminosity.",
    evidenceLevel: "Directly Documented (XRF pigment analysis at Ajanta & National Museum)."
  },
  {
    id: "malachite",
    name: "Malachite (Mineral Green)",
    chemical: "Basic Copper Carbonate [Cu₂CO₃(OH)₂]",
    source: "Copper mineral veins in Rajasthan (Khetri belt).",
    preparation: "Coarsely ground mineral stone to preserve emerald green saturation.",
    traditions: ["Rajasthani Miniature Painting", "Ajanta Mural Backgrounds", "Pahari Miniatures"],
    properties: "Vibrant crystalline emerald green with velvet matte texture.",
    evidenceLevel: "Directly Documented (Historical royal atelier ledgers)."
  },
  {
    id: "indigo",
    name: "Indigo (Natural Plant Dye)",
    chemical: "Indigotin [C₁₆H₁₀N₂O₂]",
    source: "Leaves of Indigofera tinctoria plant.",
    preparation: "Fermentation of green leaves, aeration into sludge, dried into cakes.",
    traditions: ["Patola Double-Ikat", "Kalamkari Textiles", "Ajanta Textile Murals"],
    properties: "Deep rich navy blue that bonds directly to cellulosic cotton and silk fibers.",
    evidenceLevel: "Directly Documented (Trade manifests across ancient ports)."
  },
  {
    id: "gold-leaf",
    name: "Gold Leaf & Vark (Suvarna Patra)",
    chemical: "Elemental Gold [Au >99.5%]",
    source: "Kolar gold fields and bullion trade.",
    preparation: "Beaten between deerskin sheets for thousands of hammer blows into 0.1-micron sheets.",
    traditions: ["Thanjavur Paintings", "Mysore Court Panels", "Mughal Borders"],
    properties: "Non-tarnishing permanent specular brilliance over raised chalk gesso relief.",
    evidenceLevel: "Directly Documented (Living master practice and royal contracts)."
  },
  {
    id: "cinnabar",
    name: "Cinnabar / Hinglu (Vermilion)",
    chemical: "Mercuric Sulfide [HgS]",
    source: "Natural volcanic mineral deposits.",
    preparation: "Ground with sheep milk or egg white to prevent darkening from solar oxidation.",
    traditions: ["Pahari Miniature Red Borders", "Pattachitra of Odisha", "Jain Manuscripts"],
    properties: "Fiery, intense scarlet red with extreme opacity.",
    evidenceLevel: "Directly Documented (Chitrasutra textual pigment recipes)."
  },
  {
    id: "earth-ochres",
    name: "Red & Yellow Earth Ochres (Geru)",
    chemical: "Hydrated Iron Oxides [Fe₂O₃·nH₂O]",
    source: "Local clay strata across the Deccan and Vindhya cliffs.",
    preparation: "Washed in earthen pots, filtered and bound with babool gum.",
    traditions: ["Bhimbetka Prehistoric Rock Art", "Warli Wall Murals", "Mithila Aripan"],
    properties: "Warm terracotta red and mustard yellow, stable over millennia.",
    evidenceLevel: "Directly Documented (Radiocarbon dating of rock patina)."
  }
];

export const MATERIAL_ENCYCLOPEDIA = [
  {
    id: "stone",
    name: "Living Bedrock & Stone",
    types: ["Vindhyan Sandstone", "Deccan Basalt", "Coromandel Granite", "Khondalite"],
    geography: "Vindhyan Cliffs (Bhimbetka, Khajuraho), Deccan Trap (Ajanta, Ellora), Tamil Coast (Mahabalipuram, Thanjavur).",
    properties: "Subtractive sculpting logic; top-down monolithic carving eliminates margin for structural error.",
    culturalSignificance: "Stone represents cosmic permanence (akshaya), turning the living earth into sacred space."
  },
  {
    id: "metal",
    name: "Bronze, Bell Metal & Panchaloha",
    types: ["Panchaloha (5-Metal Sacred Alloy)", "Dhokra Bell Metal (Copper-Tin-Zinc)"],
    geography: "Thanjavur & Swamimalai (Tamil Nadu), Bastar (Chhattisgarh).",
    properties: "Lost-wax casting (cire perdue) allows dynamic, fluid three-dimensional postures in space.",
    culturalSignificance: "Processional deities created to bring the divine out of dark sanctums into public festival streets."
  },
  {
    id: "silk-cotton",
    name: "Woven Silk, Zari & Resist Dye",
    types: ["Mulberry Silk", "Handspun Khadi Cotton", "Silver-gilt Zari Wire"],
    geography: "Varanasi (Uttar Pradesh), Patan (Gujarat), Srikalahasti (Andhra Pradesh).",
    properties: "Double-ikat and brocade weaving encode pattern directly into warp and weft before weaving.",
    culturalSignificance: "Textiles served as currency, diplomatic gifts, and sacred mobile architecture across South Asia."
  }
];

export const COMPARATIVE_STUDIO_PAIRS = [
  {
    id: "ajanta-vs-kerala",
    nameA: "Ajanta Murals (Maharashtra)",
    nameB: "Kerala Temple Murals (Mattancherry)",
    idA: "ajanta",
    idB: "kerala",
    summary: "Ancient Buddhist Monastic Cave Atmosphere vs Early-Modern Hindu Temple Wooden Sensation",
    dimensions: [
      { category: "Geography & Climate", a: "Dry basalt rock gorge of the Deccan with candlelit cave interiors.", b: "High-humidity coastal Malabar with heavy monsoons and timber-framed sanctums." },
      { category: "Material Ground & Plaster", a: "Clay, rock grit, cow dung, and rice husk finished with fine lime slip on basalt.", b: "Unslaked lime plaster treated with coconut water on laterite and teak wood." },
      { category: "Palette & Pigments", a: "Subtle earth tones, soft greens, and imported Lapis Lazuli from Afghanistan.", b: "Strict Panchavarna (five sacred colors): blazing red, golden yellow, green, black, white." },
      { category: "Stylistic Line & Form", a: "Softly modeled, calligraphic, undulating lines expressing tender inward compassion.", b: "Sharp, high-voltage graphic contours and expressive bulging eyes echoing Kathakali masks." }
    ]
  },
  {
    id: "jaipur-vs-kangra",
    nameA: "Jaipur Court Miniature (Rajasthan)",
    nameB: "Kangra Pahari Miniature (Himachal)",
    idA: "jaipur",
    idB: "kangra",
    summary: "Cosmopolitan Rajput Court Darbar vs Lyrical Himalayan Pastoral Romance",
    dimensions: [
      { category: "Geography & Climate", a: "Desert grid city of Jaipur in the hot plains of Rajasthan.", b: "Tranquil mountain valleys framed by snow-capped Dhauladhar Himalayas." },
      { category: "Subject & Narrative", a: "Courtly darbars, royal tiger hunts, Ragamala music, and Gita Govinda.", b: "Radha-Krishna divine romance and atmospheric mountain monsoon moods." },
      { category: "Palette & Finish", a: "Agate-burnished opaque gouache with extensive 24k gold leaf relief.", b: "Lyrical translucent washes with delicate single-feather fine brushwork." }
    ]
  },
  {
    id: "kolkata-vs-mumbai",
    nameA: "Bengal School (Kolkata)",
    nameB: "Progressive Artists (Mumbai)",
    idA: "kolkata",
    idB: "mumbai",
    summary: "Nationalist Pan-Asian Revivalist Wash vs Post-Independence Raw Urban Modernism",
    dimensions: [
      { category: "Historical Era", a: "1905–1920s: Anti-colonial Swadeshi movement against British academic art.", b: "1947–1960s: Midnight birth of the newly independent, democratic Indian republic." },
      { category: "Medium & Technique", a: "Translucent Japanese-inspired water wash, Chinese ink line, tempera on paper.", b: "Thick, expressive oil on canvas, impasto palette knife work, and bold distortion." },
      { category: "Visual Philosophy", a: "Meditative, spiritual, seeking roots in Ajanta, Mughal, and Asian mythologies.", b: "Aggressive, secular, urban, challenging religious dogma with raw expressive vitality." }
    ]
  }
];

export const CURATOR_QUIZ_QUESTIONS = [
  {
    id: 1,
    level: "1. Mineral Chemistry & Pigments",
    question: "The luminous celestial blue pigment in Cave 1 at Ajanta was made from Lapis Lazuli. What was its historical trade origin?",
    options: [
      "Imported along Silk Road trade networks from Badakhshan mines in northern Afghanistan",
      "Mined locally in copper belts of Rajasthan",
      "Derived from organic indigo plant fermentation in Bengal",
      "Extracted from crushed sea conch shells in the Bay of Bengal"
    ],
    correct: 0,
    explanation: "Lapis Lazuli (ultramarine) was an expensive luxury mineral imported across ancient Silk Road networks from Badakhshan (Afghanistan), demonstrating the cosmopolitan trade connections of the Vakataka court."
  },
  {
    id: 2,
    level: "2. Monolithic Architecture",
    question: "How does the construction of the monolithic Kailasa Temple (Cave 16) at Ellora fundamentally differ from normal temples?",
    options: [
      "It was carved entirely from the top of the basalt cliff downwards, removing 200,000 tons of rock without mortar or assembled blocks",
      "It was built using interlocking wrought-iron beams and imported sandstone",
      "It was poured with ancient hydraulic cement inside wooden scaffolding",
      "It was shipped in stone parts from southern Tamil Nadu"
    ],
    correct: 0,
    explanation: "Rashtrakuta master stonemasons started at the summit of the basalt cliff and excavated downwards, sculpting roofs, columns, and elephant galleries from one single unbroken mountain mass."
  },
  {
    id: 3,
    level: "3. Sacred Metallurgy",
    question: "What was the primary religious and spatial purpose of Chola lost-wax bronzes (Panchaloha) in Thanjavur?",
    options: [
      "To serve as portable processional deities (Utsavamurti) brought out of the dark sanctum into public festival streets",
      "To serve as secret currency stored in royal vaults",
      "To decorate foreign merchant ships sailing to China",
      "To replace destroyed stone carvings on the temple tower"
    ],
    correct: 0,
    explanation: "While stone murtis remained fixed inside the dark sanctum (garbhagriha), bronze deities were cast to act as dynamic processional icons carried on palanquins so all citizens could experience direct devotional darshana."
  },
  {
    id: 4,
    level: "4. Nationalist Revivalism",
    question: "Why did Abanindranath Tagore and the Bengal School in Kolkata reject Victorian academic oil painting?",
    options: [
      "They forged an anti-colonial Pan-Asian modernism combining Ajanta line, Mughal delicacy, and Japanese wash techniques",
      "They only wanted to copy European Cubism and Abstract Expressionism",
      "They banned all religious and mythological subjects",
      "They restricted painting exclusively to royal court artists"
    ],
    correct: 0,
    explanation: "Abanindranath Tagore and E.B. Havell fought against colonial British academies that forced Indian students into dry realism, championing Swadeshi cultural independence through an authentic Pan-Asian visual language."
  },
  {
    id: 5,
    level: "5. Master Synthesis",
    question: "Which fundamental principle unites the geographic spread of Indian art history across space and time?",
    options: [
      "Indian art is a dynamic living continuum where geography, mineral chemistry, community memory, and sacred space continuously inform one another",
      "Indian art was strictly isolated with zero circulation between regions",
      "Indian art only began when European artists arrived in the 18th century",
      "All Indian art traditions used identical materials and had no regional variation"
    ],
    correct: 0,
    explanation: "Indian art is an interconnected network where materials (stone, silk, pigment, metal), spatial philosophy (caves, mandapas, stepwells), and trade routes formed a rich geographic continuum of mutual influence."
  }
];

export const ART_HISTORIAN_QUERIES = [
  {
    q: "Why is Ajanta considered an architectural and painted environment rather than just a picture gallery?",
    a: "At Ajanta, painting, sculpture, and rock architecture form a unified ritual world. Devotees leave the blinding Deccan sunlight to enter candlelit basalt caves where murals wrap around pillars and ceilings without frames, guiding circumambulation toward the colossal sculpted Buddha in the inner chamber."
  },
  {
    q: "How did court artists migrating from Delhi transform Pahari painting in Kangra?",
    a: "Following political instability in 18th-century Delhi, master painters migrated into the tranquil valleys of Himachal. Under raja Sansar Chand, they synthesized Mughal refined drawing with Sanskrit Braj Bhasha poetry (Gita Govinda), creating a lyrical pastoral world where gods wander through familiar Himalayan landscapes."
  },
  {
    q: "How does Dhokra lost-wax casting in Bastar preserve unbroken metallurgical memory for 4,000 years?",
    a: "Dhokra practiced by the Ghadwa community uses the exact cire-perdue (lost-wax) technique found in the Harappan Dancing Girl (c. 2300 BCE). Artisans manually coil beeswax wires over clay cores, coat them in termite clay, and cast in bronze in pit kilns. Because each mold is broken, every piece is an irreplaceable monotype."
  },
  {
    q: "Why did the Bombay Progressive Artists' Group (PAG) react against the Bengal School in 1947?",
    a: "Founded in Bombay in 1947 by Souza, Husain, and Raza, the PAG rejected both British colonial academicism and the nostalgic revivalism of the Bengal School. They embraced raw expressive internationalism, post-impressionism, and secular vigor to engage directly with the democratic reality of newly independent India."
  }
];