import { useState } from 'react';
import { DOSSIER_FIELDS, HERO_IMAGES } from '../data/portfolioData';
import { ArchivalImage } from './ArchivalImage';

interface HeroDossierProps {
  onOpenDossier: () => void;
}

export function HeroDossier({ onOpenDossier }: HeroDossierProps) {
  const [polaroidFlipped, setPolaroidFlipped] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-10 pb-20 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Scattered Silver Star Stickers */}
      <div aria-hidden="true" className="absolute left-6 top-14 text-3xl chrome-star select-none">
        ✦
      </div>
      <div aria-hidden="true" className="absolute left-16 top-32 text-xl chrome-star select-none">
        ✧
      </div>
      <div aria-hidden="true" className="absolute right-12 top-20 text-4xl chrome-star select-none">
        ✦
      </div>
      <div aria-hidden="true" className="absolute right-28 top-36 text-2xl chrome-star select-none">
        ✧
      </div>

      {/* Desk Manila Folder Outer Shell */}
      <div className="relative mx-auto max-w-5xl bg-[#E6A6B8] rounded-2xl shadow-[0_24px_50px_-12px_rgba(45,30,35,0.22)] p-4 sm:p-8 md:p-12 border-2 border-[#D996A8]">
        {/* Folder die-cut tab (top left) */}
        <div className="absolute -top-7 left-8 bg-[#E6A6B8] border-t-2 border-l-2 border-r-2 border-[#D996A8] px-8 py-1.5 rounded-t-xl folder-tab shadow-sm hidden sm:block">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5E2B3A] font-bold">
            DOSSIER NO. 2026-01
          </span>
        </div>

        {/* Folder Spine crease subtle shadow */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-1/2 w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/[0.04] to-transparent pointer-events-none"
        />

        {/* Main Scrapbook Workspace Inside Folder */}
        <div className="relative min-h-[560px] md:min-h-[620px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10">
          {/* LEFT CLUSTER: Framed Photo & Silver Tray Charm */}
          <div className="relative w-full lg:w-5/12 flex flex-col items-center justify-center pt-4 pb-8 lg:pb-0">
            {/* Underneath Peeking Blue Note Paper */}
            <div className="absolute -rotate-12 -left-2 top-8 w-44 h-60 bg-[#D4E4F5] rounded-xs shadow-md border border-[#BACEE2] p-3 hidden sm:block">
              <span className="font-script text-2xl text-[#2B4B6F]">Creative spirit</span>
              <p className="font-hand text-sm text-[#3D5570] mt-1 leading-snug">
                S1 Teknik Informatika @ IT-PLN. Memadukan teknologi &amp; seni visual sejak 2024.
              </p>
            </div>

            {/* Main Color Photo Frame */}
            <div className="relative z-20 bg-white p-3 md:p-4 rounded-xs shadow-[0_20px_40px_-15px_rgba(50,40,30,0.18),0_3px_8px_-2px_rgba(50,40,30,0.08)] border border-neutral-200 -rotate-3 hover:rotate-0 transition-transform duration-300 tactile-lift w-64 sm:w-72 md:w-80">
              <div className="overflow-hidden bg-[#242124] aspect-[4/5] relative group">
                <ArchivalImage
                  src={HERO_IMAGES.portrait}
                  alt="Potret Jihan Aida Fakhira"
                  fallbackLabel="PORTRAIT PLATE"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-white font-mono text-[10px] tracking-wider uppercase">
                  PORTRAIT · CILEGON, INDONESIA
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-neutral-500">
                <span className="font-mono text-[11px] tracking-widest uppercase">
                  JIHAN A. FAKHIRA
                </span>
                <span className="font-hand text-lg text-neutral-700">archive &apos;26</span>
              </div>

              {/* Daisy Enamel Pin / Flower Charm sticker */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 z-30 w-10 h-10 rounded-full bg-[#FAF5EB] shadow-md border border-[#E2D8C3] flex items-center justify-center transform rotate-12"
              >
                <span className="text-xl">🌸</span>
              </div>
            </div>

            {/* Overlapping Ornate Vintage Silver Tray Charm */}
            <button
              type="button"
              onClick={onOpenDossier}
              title="Lihat Ringkasan Dossier Lengkap"
              className="relative sm:absolute -bottom-2 sm:-bottom-6 left-0 sm:-left-4 z-30 silver-tray rounded-xl p-3 w-48 sm:w-52 transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              <div className="text-center border border-white/60 py-2 px-1.5 rounded bg-[#E4E4E8]/70 backdrop-blur-xs">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#3B3A40] font-bold">
                  OSIS KESENIAN
                </div>
                <div className="font-script text-2xl text-[#26242B] leading-none mt-1">
                  Art &amp; Leadership
                </div>
                <div className="text-[9px] font-mono text-[#525059] mt-0.5">
                  PERIODE 2024 — 2025
                </div>
              </div>
            </button>
          </div>

          {/* CENTER / RIGHT CLUSTER: Punched Binder Form & Polaroid Paperclipped */}
          <div className="relative w-full lg:w-7/12 flex flex-col items-center mt-6 lg:mt-4">
            {/* B&W Polaroid Floating Top Right — positioned cleanly above the right margin */}
            <button
              type="button"
              onClick={() => setPolaroidFlipped((prev) => !prev)}
              aria-label="Toggle Polaroid archival caption"
              className="relative sm:absolute sm:-top-14 sm:-right-4 z-30 mb-4 sm:mb-0 bg-white p-2.5 pt-2.5 pb-4 shadow-[0_16px_32px_-6px_rgba(20,20,20,0.25),0_4px_8px_-2px_rgba(0,0,0,0.12)] rotate-6 hover:rotate-2 transition-transform duration-300 w-36 sm:w-40 tactile-lift cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              {/* Metallic Paperclip */}
              <div className="silver-paperclip -top-5 right-6" aria-hidden="true" />
              <div className="w-full aspect-square bg-[#1B1B1B] overflow-hidden">
                {polaroidFlipped ? (
                  <div className="w-full h-full bg-[#F7F4EC] text-[#1E1C19] p-2.5 flex flex-col justify-between text-left border border-[#DDD6C5]">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#1D4ED8] font-bold">
                      BACK NOTE
                    </span>
                    <p className="font-hand text-sm leading-tight text-[#2A2723]">
                      &ldquo;Logic meets artistic rhythm — IT-PLN &apos;26.&rdquo;
                    </p>
                    <span className="font-mono text-[8px] text-neutral-500">TAP TO FLIP</span>
                  </div>
                ) : (
                  <ArchivalImage
                    src={HERO_IMAGES.polaroid}
                    alt="Polaroid Editorial Jihan Aida"
                    fallbackLabel="POLAROID"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                )}
              </div>
              <p className="font-hand text-center text-neutral-800 text-base mt-2 leading-none">
                always dreaming ✦
              </p>
            </button>

            {/* Loose Leaf Punched Binder Dossier Card */}
            <div className="relative z-20 w-full bg-[#FBF9F4] rounded-xs shadow-[0_12px_28px_-8px_rgba(60,50,40,0.15),0_2px_6px_rgba(0,0,0,0.04)] border border-[#E3DEC3] p-5 sm:p-8 pt-7 -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* 3 Punched Binder Holes on Left Margin */}
              <div aria-hidden="true" className="absolute left-2.5 top-8 flex flex-col space-y-24">
                <div className="binder-hole" />
                <div className="binder-hole" />
                <div className="binder-hole" />
              </div>

              {/* Content Offset from margin */}
              <div className="pl-6 sm:pl-8">
                {/* Dossier Header — right padding leaves clean breathing room for Polaroid */}
                <div className="border-b-2 border-[#1E1C19] pb-3 mb-4 sm:pr-36">
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-[#6E685E] uppercase font-bold">
                    OFFICIAL DOSSIER RECORD · INFORMATICS &amp; ARTS
                  </p>
                  <h1 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-[#992121] uppercase mt-1 text-balance">
                    WELCOME TO THE WORLD OF
                  </h1>
                </div>

                {/* Structured Dossier Fields */}
                <div className="space-y-3 font-mono text-xs">
                  {DOSSIER_FIELDS.map((field, index) => (
                    <div
                      key={field.label}
                      className={`grid grid-cols-1 sm:grid-cols-3 border-b border-[#E3DEC3] pb-2 items-baseline gap-1 ${
                        index === 0 ? 'sm:pr-32' : index === 1 ? 'sm:pr-24' : ''
                      }`}
                    >
                      <span className="text-[#736C60] uppercase text-[10px] sm:text-[11px] tracking-wider">
                        {field.label}
                      </span>
                      {field.style === 'hand-lg' ? (
                        <span className="sm:col-span-2 font-hand text-2xl text-[#181614] font-bold leading-tight">
                          {field.value}
                        </span>
                      ) : field.style === 'sans-degree' ? (
                        <span className="sm:col-span-2 font-sans font-medium text-[13px] text-[#2A2723]">
                          S1 Teknik Informatika —{' '}
                          <strong className="text-[#1D4ED8]">Institut Teknologi PLN</strong>{' '}
                          (2026–Present)
                        </span>
                      ) : (
                        <span className="sm:col-span-2 font-hand text-xl text-[#1E293B] font-semibold leading-tight">
                          {field.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Row: Stamp & Quick CTA */}
                <div className="mt-6 pt-2 flex flex-wrap items-center justify-between gap-4">
                  {/* Rubber Stamp Certification Box */}
                  <div className="rubber-stamp px-3 py-1.5 rounded-xs -rotate-2 inline-flex items-center space-x-2">
                    <span className="text-[11px] font-bold">★ VERIFIED ARCHIVE ★</span>
                    <span className="text-[10px] font-sans font-bold bg-[#1D4ED8] text-white px-1.5 py-0.5 rounded-xs">
                      PASSED
                    </span>
                  </div>

                  {/* Direct Action */}
                  <div className="flex items-center gap-3">
                    <a
                      href="#work"
                      className="inline-flex items-center whitespace-nowrap shrink-0 text-xs font-mono font-bold uppercase tracking-wider bg-[#1F1E1C] text-white px-4 py-2.5 rounded hover:bg-[#1D4ED8] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      EXPLORE WORKS ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Peeking Olive Stationery Card Beneath */}
            <div className="hidden sm:block self-end -mt-4 mr-4 w-56 h-24 bg-[#8C936D] rounded shadow-md -rotate-3 p-2.5 text-white border border-[#767C59] z-10">
              <div className="border border-white/40 h-full w-full p-2 flex flex-col justify-between">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#E3E8C8]">
                  NOTE RECORD
                </span>
                <p className="font-hand text-lg leading-none text-[#F4F7E6]">
                  Combining logic &amp; artistry
                </p>
                <span className="font-mono text-[8px] text-right text-[#D5DDC0]">JIHAN · 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
