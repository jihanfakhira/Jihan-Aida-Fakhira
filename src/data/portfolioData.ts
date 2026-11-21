export interface ProjectItem {
  id: string;
  fileCode: string;
  category: 'arts' | 'creative' | 'tech';
  categoryLabel: string;
  accentBg: string;
  accentText: string;
  tapeRotate: string;
  period: string;
  role: string;
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  highlights: string[];
  outcome: string;
}

export interface SpotlightItem {
  num: string;
  label: string;
  title: string;
  subtitle: string;
  detail: string;
}

export interface SkillCardItem {
  id: string;
  title: string;
  subtitle: string;
  colorClass?: string;
  group: 'productivity' | 'domain';
  note: string;
}

export const HERO_IMAGES = {
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCLZIKn2XjeoErVOf54nJAQkISMH7aYZ6EMCMWu0YrhSRvMuvLMznWjHSci2UxThfoJ640i1KCl9SWw6vfQCdaVrXZwI79nH7fL09EBemsbZRiEasSNNHCifb91gZCZV-kV59u7aQS0FS5--SAfkbLj_HtLvqvVQwIDrOlSqVtdZehSTvrOftuVpv0wUBIbVi9mKTaukiFwNmItam28oaopnVLKRKREQ1JUtXQELPX9esChSnV8zuWt',
  polaroid:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAapyWyxiOegEHPKHP06Q__bhE9GdYjzUrAZ5d84LZj_zTpIAzGXvR6Ip4WPnKdh2P5xx34t4IYUpicCiBSoOZwkzzKFiMiDf_WRUXztMIfKJ8jv7EozLCgvPYMzVBl-r0hmq4XvNUNw55GiqJQxFnMMi_KmbI67px318vWRpC_JXFvSAiZv7DpJefKhjuje0LX8X7jEq0FkLAHYo4-U9YfO6d2UyzPOhWJn3k5oJb0krPGsxTj__se',
};

export const DOSSIER_FIELDS = [
  { label: 'FULL NAME', value: 'Jihan Aida Fakhira', style: 'hand-lg' as const },
  {
    label: 'AREA OF FOCUS',
    value: 'Informatics Engineering, Creative Direction & Video Editing',
    style: 'hand-md' as const,
  },
  {
    label: 'HIGHER DEGREE',
    value: 'S1 Teknik Informatika — Institut Teknologi PLN (2026–Present)',
    style: 'sans-degree' as const,
  },
  { label: 'BASED IN', value: 'Cilegon, Banten, Indonesia', style: 'hand-md' as const },
  {
    label: 'CORE PASSION',
    value: 'Information Technology, AI Development & Music',
    style: 'hand-md' as const,
  },
  {
    label: 'KEY LEADERSHIP',
    value: 'Koordinator Sekbid Kesenian — OSIS (2024–2025)',
    style: 'hand-md' as const,
  },
];

export const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  {
    num: '01',
    label: 'CAMPUS',
    title: 'IT-PLN Jakarta',
    subtitle: 'Teknik Informatika',
    detail: 'Menempuh studi S1 Teknik Informatika sejak 2026 dengan minat pada rekayasa perangkat lunak dan sistem cerdas.',
  },
  {
    num: '02',
    label: 'TECH',
    title: 'AI & IT',
    subtitle: 'Future Focus',
    detail: 'Mengeksplorasi integrasi AI generatif, alur kerja otomatis, dan problem solving berbasis logika komputasi.',
  },
  {
    num: '03',
    label: 'OSIS',
    labelColor: '',
    title: 'Sekbid Seni',
    subtitle: 'Koordinator',
    detail: 'Memimpin koordinasi program kesenian, festival sekolah, serta pengembangan bakat artistik siswa (2024–2025).',
  },
  {
    num: '04',
    label: 'MEDIA',
    title: 'Editing',
    subtitle: 'Video & Story',
    detail: 'Merangkai narasi visual dinamis dengan sinkronisasi ritme musik, pacing, dan penyuntingan warna.',
  },
  {
    num: '05',
    label: 'HOMETOWN',
    title: 'Cilegon',
    subtitle: 'Banten',
    detail: 'Berakar dari Cilegon, Banten—tempat tumbuh dan pembentukan karakter kepemimpinan yang adaptif.',
  },
  {
    num: '06',
    label: 'AUDIO',
    title: 'Music',
    subtitle: 'Sonic Inspiration',
    detail: 'Musik menjadi sumber inspirasi ritme utama dalam menyunting video maupun menjaga fokus saat berkarya.',
  },
  {
    num: '07',
    label: 'SOFT',
    title: 'Teamwork',
    subtitle: 'Collaboration',
    detail: 'Terbiasa menyatukan tim lintas divisi agar produksi acara dan proyek kreatif berjalan selaras.',
  },
  {
    num: '08',
    label: 'LOGIC',
    title: 'Problem Solving',
    subtitle: 'Analytical',
    detail: 'Mengurai tantangan teknis maupun operasional lapangan menjadi langkah taktis yang terukur.',
  },
  {
    num: '09',
    label: 'TOOLS',
    title: 'Office Suite',
    subtitle: 'Word/PPT/Excel',
    detail: 'Mengelola dokumentasi terstruktur, data koordinasi, dan dek presentasi visual yang rapi.',
  },
] as (SpotlightItem & { labelColor?: string })[];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'osis-pentas-seni',
    fileCode: 'FILE 01 · ARTS',
    category: 'arts',
    categoryLabel: 'Arts & OSIS',
    accentBg: 'bg-[#9E4763]',
    accentText: 'text-white',
    tapeRotate: 'rotate-1',
    period: 'PERIODE 2024–2025',
    role: 'ROLE: KOORDINATOR',
    title: 'Pentas Seni & Eksibisi Kreatif OSIS',
    summary:
      'Memimpin koordinasi Seksi Bidang Kesenian OSIS dalam merancang panggung pertunjukan, kurasi bakat siswa, visual dekorasi panggung, serta manajemen alur acara.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsY89x3cJu1fKJxBPf_bImdZ9h9xDza-Ou-B7phmdBGpasK03D_WYGEOCDigu6WAuCaAu5-Tkhms8aCVi0XDorjJahf47eu9e76rtOd1xxq25cv2H5MkR8Rk-QPARRDQWtixggh7KhjNfdH5edTnAe9aoDHKZoApVWs7db1g15lzn1QAmWaz5hYI1x84JtYO92cPj8uwcjaUInJuBJnkZu12xF17ImdljMXVV9cRM',
    imageAlt: 'Program Kerja Pentas Seni OSIS',
    tags: ['Event Concept', 'Team Leadership', 'Stage Craft'],
    highlights: [
      'Menyusun konsep tematik dan rundown acara pentas seni sekolah secara menyeluruh.',
      'Mengkoordinasikan tim dekorasi, tata panggung, talent curation, dan dokumentasi visual.',
      'Menjaga sinkronisasi komunikasi antar panitia inti dan pengisi acara selama hari pelaksanaan.',
    ],
    outcome:
      'Mewujudkan panggung ekspresi seni siswa yang tertata rapi, meriah, dan kolaboratif.',
  },
  {
    id: 'video-editing-reel',
    fileCode: 'FILE 02 · CREATIVE',
    category: 'creative',
    categoryLabel: 'Creative Media',
    accentBg: 'bg-[#1D4ED8]',
    accentText: 'text-white',
    tapeRotate: '-rotate-2',
    period: 'CREATIVE PRODUCTION',
    role: 'AUDIO-VISUAL',
    title: 'Visual Storytelling & Video Editing Reel',
    summary:
      'Eksplorasi sequence dinamis, sinkronisasi audio-ritme musik, color timing, dan tata visual naratif untuk dokumentasi kegiatan organisasi dan konten visual digital.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBy08mbP5dkPNayeGtT8oBNXoqoLoWd6y3YLOhvRhq31vOqeWaPtRc69tjO_sVm3LxrOKS3ALHSt8exfuKTbKFZl8idLfHCZZS0qgPr28Cb8-U29ClPranoAC04lcjLh60AVUneVrtPZ-3RxPbNN3EiBzc_fSzsuexSa-ls8Cj9C9ceH44hiLj66W-WIbj_QOQwMoBKrog5Kif-XCnNwGzjobX4aCY_377C7ovmvZg',
    imageAlt: 'Video Editing & Creative Storytelling',
    tags: ['Video Editing', 'Pacing & Audio', 'CapCut / Premiere'],
    highlights: [
      'Penyusunan ritme potongan klip (beat-synced cutting) selaras dengan dinamika musik latar.',
      'Pengaturan transisi halus, tipografi layar yang bersih, dan color mood yang konsisten.',
      'Produksi aftermovie dan rekap visual kegiatan organisasi agar mudah dicerna audiens muda.',
    ],
    outcome:
      'Menghasilkan karya video berdaya tarik tinggi yang memadukan kepekaan musik dan narasi visual.',
  },
  {
    id: 'tech-ai-exploration',
    fileCode: 'FILE 03 · TECH & AI',
    category: 'tech',
    categoryLabel: 'Tech & AI',
    accentBg: 'bg-[#9BA892]',
    accentText: 'text-[#1E251C]',
    tapeRotate: 'rotate-2',
    period: 'IT-PLN ACADEMICS',
    role: '2026 — PRESENT',
    title: 'Eksplorasi Algoritma Informatika & AI Tools',
    summary:
      'Studi dasar pemrograman, struktur data, pengolahan dokumen komputasi, serta utilisasi prompt engineering untuk akselerasi alur kerja kreatif modern.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9O-2ZWTH2bQjDfM1zyw7FOEbK4teSf6GmvMzgqp9eQu5W8yHQvh3DUIpg51HdzC4yxzLzcb3GzbloyC7hwXrIfPz2b53Hz91DQuKn0gwuujDJYTqRll65-CpoJ84xt8SURJTGmuKhS5sISltgaqutozmls8n8NnvC-TaQuX4R_oQBYILQFooZtkscA_ZNj1O0pCrrbo9Q7LW6hgKGbaln-bx8hHAOq9ZWxNEdl6s',
    imageAlt: 'Teknik Informatika & AI Exploration',
    tags: ['Teknik Informatika', 'AI Exploration', 'Problem Solving'],
    highlights: [
      'Pendalaman dasar algoritma, logika pemrograman, dan konsep rekayasa perangkat lunak di IT-PLN.',
      'Eksperimen alur kerja berbasis AI untuk riset, penataan ide, dan efisiensi produksi konten.',
      'Menggabungkan ketelitian analitis informatika dengan kepekaan estetika editorial.',
    ],
    outcome:
      'Membangun fondasi kuat sebagai mahasiswi Teknik Informatika yang melek teknologi AI dan kreatif.',
  },
];

export const CHRONICLE_ITEMS = [
  {
    badge: '2026 — PRESENT',
    title: 'S1 Teknik Informatika',
    org: 'Institut Teknologi PLN (IT-PLN)',
    note: 'Fokus pada fondasi rekayasa perangkat lunak, sistem komputasi, dan adopsi kecerdasan buatan.',
  },
  {
    badge: '2024 — 2025',
    title: 'Koordinator Sekbid Kesenian',
    org: 'Organisasi Siswa Intra Sekolah (OSIS)',
    note: 'Mengorganisir festival kesenian, dekorasi tematik, harmonisasi antar divisi kreatif, dan komunikasi bakat siswa.',
  },
  {
    badge: 'HOMETOWN',
    title: 'Cilegon, Banten',
    org: 'Pusat Tumbuh & Eksplorasi',
    note: 'Basis inspirasi dan pembentukan karakter kepemimpinan yang tangguh.',
  },
];

export const PRODUCTIVITY_SKILLS: SkillCardItem[] = [
  {
    id: 'word',
    title: 'Word',
    subtitle: 'Document Drafting',
    colorClass: 'text-blue-700',
    group: 'productivity',
    note: 'Penyusunan proposal kegiatan, laporan pertanggungjawaban OSIS, dan naskah terformat rapi.',
  },
  {
    id: 'excel',
    title: 'Excel',
    subtitle: 'Data & Sheets',
    colorClass: 'text-emerald-700',
    group: 'productivity',
    note: 'Pengelolaan anggaran acara, daftar inventaris, penjadwalan tim, dan rumus rekapitulasi dasar.',
  },
  {
    id: 'ppt',
    title: 'PPT',
    subtitle: 'Slide Deck Design',
    colorClass: 'text-orange-700',
    group: 'productivity',
    note: 'Perancangan dek presentasi visual yang komunikatif untuk pitching konsep kreatif dan tugas kuliah.',
  },
];

export const DOMAIN_SKILLS: SkillCardItem[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    subtitle: 'CapCut / Premiere',
    group: 'domain',
    note: 'Menyusun alur cerita audio-visual dengan pacing presisi, transisi halus, dan sinkronisasi musik.',
  },
  {
    id: 'informatics',
    title: 'Informatics',
    subtitle: 'Logic & Coding Basics',
    group: 'domain',
    note: 'Berpikir terstruktur dalam memecahkan masalah komputasi dan dasar pemrograman web.',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    subtitle: 'Workflows & Prompts',
    group: 'domain',
    note: 'Memanfaatkan AI modern secara etis dan efektif untuk riset, ideasi, dan produktivitas.',
  },
  {
    id: 'music-audio',
    title: 'Music & Audio',
    subtitle: 'Rhythm & Mood',
    group: 'domain',
    note: 'Kurasi musik dan kepekaan ritme untuk memperkuat suasana emosional karya visual.',
  },
];

export const SOFT_SKILL_STAMPS = [
  {
    label: '★ PROBLEM SOLVING',
    border: 'border-[#1D4ED8]',
    text: 'text-[#1D4ED8]',
    rotate: '-rotate-2',
  },
  {
    label: '★ TEAM WORK',
    border: 'border-[#B91C1C]',
    text: 'text-[#B91C1C]',
    rotate: 'rotate-1',
  },
  {
    label: '★ LEADERSHIP',
    border: 'border-[#047857]',
    text: 'text-[#047857]',
    rotate: '-rotate-1',
  },
  {
    label: '★ ADAPTABILITY',
    border: 'border-[#6B21A8]',
    text: 'text-[#6B21A8]',
    rotate: 'rotate-2',
  },
];

export const CONTACT_INFO = {
  email: 'jihanfakhira53@gmail.com',
  whatsappNumber: '6282223031762',
  whatsappDisplay: '+62 822-2303-1762',
  institution: 'Institut Teknologi PLN (Jakarta)',
  location: 'Cilegon, Banten, Indonesia',
};
