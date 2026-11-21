import { useState } from 'react';
import { SPOTLIGHT_ITEMS } from '../data/portfolioData';

interface DigiworldSpreadProps {
  onOpenDossier: () => void;
}

export function DigiworldSpread({ onOpenDossier }: DigiworldSpreadProps) {
  const [activeIndex, setActiveIndex] = useState<string>('01');
  const activeItem = SPOTLIGHT_ITEMS.find((item) => item.num === activeIndex) ?? SPOTLIGHT_ITEMS[0];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Section Title Badge */}
      <div className="text-center mb-14 relative z-10">
        <div className="inline-block washi-tape px-6 py-1.5 mb-2 -rotate-1">
          <span className="font-mono text-xs uppercase tracking-[0.28em] font-bold text-[#574D3F]">
            VOLUME 02 · ARCHIVAL DOSSIER
          </span>
        </div>
        <h2 className="font-script text-5xl sm:text-6xl text-[#7aacee] text-balance">
          Welcome to my Digiworld
        </h2>
      </div>

      {/* The 3-Spread Scrapbook Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* CARD 1 (Left 4 cols): Deep Burgundy "SPOTLIGHTED IN" with 3x3 Cards */}
        <div className="lg:col-span-4 bg-[#9E4763] rounded-xl shadow-[0_24px_50px_-12px_rgba(45,30,35,0.22)] p-5 sm:p-6 text-white transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300 tactile-lift">
          <div className="text-center pb-4 mb-4 border-b border-pink-200/30">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FCE7EF]">
              MY WORLD SPOTLIGHTED IN
            </h3>
            <p className="font-hand text-lg text-pink-100 mt-1">
              core areas &amp; identity points
            </p>
          </div>

          {/* 3x3 Mini Index Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            {SPOTLIGHT_ITEMS.map((item) => {
              const isSelected = item.num === activeIndex;
              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => setActiveIndex(item.num)}
                  className={`rounded p-2 text-center shadow-xs flex flex-col justify-center min-h-[88px] border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isSelected
                      ? 'bg-white text-[#1E1C19] border-[#1D4ED8] ring-2 ring-[#FCE7EF] -translate-y-0.5'
                      : 'bg-[#F8F6F0] text-[#1E1C19] border-[#DDD6C5] hover:bg-white'
                  }`}
                >
                  <span className="font-mono text-[9px] text-[#8C465D] font-bold">
                    {item.num}. {item.label}
                  </span>
                  <span className="font-sans font-bold text-[11px] leading-tight mt-1 text-[#222]">
                    {item.title}
                  </span>
                  <span className="font-hand text-xs text-neutral-600 mt-0.5 leading-tight">
                    {item.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Detail Readout */}
          <div className="mt-4 pt-3 border-t border-pink-200/25 text-left">
            <div className="flex items-center justify-between font-mono text-[10px] text-pink-100 uppercase tracking-wider mb-1">
              <span>
                INDEX {activeItem.num} · {activeItem.title}
              </span>
              <span>VOL I</span>
            </div>
            <p className="font-sans text-[12px] text-[#FCE7EF]/95 leading-snug">
              {activeItem.detail}
            </p>
          </div>
        </div>

        {/* CARD 2 (Center 5 cols): Periwinkle Blue Letter with 2-Column Bio */}
        <div className="lg:col-span-5 bg-[#C7D9EE] rounded-xl shadow-[0_24px_50px_-12px_rgba(45,30,35,0.22)] p-6 sm:p-8 text-[#1E293B] border border-[#B0C7E0] transform hover:-translate-y-1 transition-transform duration-300 relative">
          {/* Ornate Letterhead */}
          <div className="text-center pb-5 border-b border-[#ADC3DD]">
            <h3 className="font-script text-4xl sm:text-5xl text-[#1B2A4A] leading-tight">
              Welcome to my Digiworld
            </h3>
            <p className="font-mono text-[11px] tracking-[0.25em] text-[#3E5275] uppercase mt-1">
              JIHAN · EST. 2026 · CILEGON
            </p>
          </div>

          {/* Editorial 2-Column Narrative */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] leading-relaxed font-sans text-[#23324A]">
            <p>
              Halo! Saya <strong>Jihan Aida Fakhira</strong>, mahasiswi S1 Teknik Informatika di{' '}
              <em>Institut Teknologi PLN</em>. Saya percaya bahwa dunia teknologi informasi bukan
              sekadar tentang baris kode dan algoritma biner, melainkan juga wadah ekspresi visual
              yang sangat dinamis.
            </p>
            <p>
              Dengan bekal pengalaman sebagai{' '}
              <strong>Koordinator Sekbid Kesenian di OSIS (2024–2025)</strong>, saya terbiasa
              memimpin kolaborasi artistik, mengarahkan produksi kreatif, serta memecahkan problem
              di lapangan secara tangkas dan solutif.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#ADC3DD] text-[13px] leading-relaxed text-[#23324A]">
            <p>
              Fokus saya saat ini mencakup pendalaman <em>software engineering</em> dasar,
              eksplorasi AI tools modern, video editing berdaya tarik tinggi, hingga manajemen
              produktivitas digital.
            </p>
          </div>

          {/* CTA Badge: Open Dossier Modal */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onOpenDossier}
              className="inline-flex items-center whitespace-nowrap shrink-0 space-x-2 border-2 border-[#1B2A4A] bg-[#EBF3FB] px-5 py-2.5 rounded shadow-sm hover:bg-[#1B2A4A] hover:text-white transition-colors duration-200 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              <span className="font-mono text-xs uppercase tracking-widest font-bold">
                GET IN TOUCH / DOSSIER
              </span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>
        </div>

        {/* CARD 3 (Right 3 cols): Sage Green Tri-fold Brochure with Pink Tracing Paper Overlay */}
        <div className="lg:col-span-3 bg-[#9BA892] rounded-xl shadow-[0_24px_50px_-12px_rgba(45,30,35,0.22)] p-6 text-[#1F251C] transform lg:rotate-3 hover:rotate-0 transition-transform duration-300 tactile-lift relative border border-[#8B9882] mt-4 lg:mt-0">
          {/* Pink Tracing Paper Note pinned on top right */}
          <div className="absolute -top-5 -right-2 sm:-right-3 w-36 bg-[#FCECEE]/95 backdrop-blur-xs p-3 rounded shadow-md border border-[#F0D1D8] transform rotate-6">
            <span className="chrome-star text-lg float-right" aria-hidden="true">
              ✦
            </span>
            <p className="font-hand text-sm text-[#7D344B] leading-tight">
              always curious, forever crafting.
            </p>
          </div>

          <div className="pt-5">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#222B1E] border-b border-[#7B8773] pb-2">
              TECHNICAL FOCUS
            </h4>
            <ul className="mt-3 space-y-1.5 font-sans text-[13px] text-[#1A2118]">
              <li>• Informatika &amp; Web Logic</li>
              <li>• Generative AI &amp; Prompts</li>
              <li>• Digital Productivity Systems</li>
              <li>• Microsoft Office Ecosystem</li>
            </ul>

            <h4 className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#222B1E] border-b border-[#7B8773] pb-2 mt-7">
              CREATIVE DIRECTION
            </h4>
            <ul className="mt-3 space-y-1.5 font-sans text-[13px] text-[#1A2118]">
              <li>• Video Editing &amp; Sequencing</li>
              <li>• Art &amp; Event Coordination</li>
              <li>• Visual Storytelling</li>
              <li>• Audio &amp; Music Curation</li>
            </ul>

            <div className="mt-8 pt-4 border-t border-[#7B8773] text-center">
              <span className="font-script text-2xl text-[#1E251C] whitespace-nowrap">
                Jihan A. Fakhira
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
