import { useState } from 'react';
import {
  CHRONICLE_ITEMS,
  DOMAIN_SKILLS,
  PRODUCTIVITY_SKILLS,
  SOFT_SKILL_STAMPS,
  SkillCardItem,
} from '../data/portfolioData';

export function ChronicleAndSkills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillCardItem>(DOMAIN_SKILLS[0]);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Chronicle / Roots (Folder Pink Sheet) */}
        <div className="lg:col-span-5 bg-[#E6A6B8] rounded-xl shadow-[0_24px_50px_-12px_rgba(45,30,35,0.22)] p-6 sm:p-8 border border-[#D593A5] flex flex-col justify-between">
          <div>
            <div className="border-b border-[#CC8296] pb-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5E2B3A] font-bold">
                TIMELINE &amp; ROOTS
              </span>
              <h3 className="font-mono text-2xl font-bold uppercase tracking-tight text-[#2B141D] mt-1">
                CHRONICLE
              </h3>
            </div>

            <div className="relative space-y-6">
              {/* Vertical connecting thread */}
              <div
                aria-hidden="true"
                className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-[#8A3A52]/65"
              />

              {CHRONICLE_ITEMS.map((item) => (
                <div key={item.title} className="relative pl-6">
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#8A3A52] ring-2 ring-[#E6A6B8]"
                  />
                  <span className="font-mono text-[10px] tracking-widest uppercase bg-[#FAF5EB] text-[#5E2B3A] px-2 py-0.5 rounded-xs font-bold inline-block">
                    {item.badge}
                  </span>
                  <h4 className="font-sans font-bold text-base text-[#1E1C19] mt-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#48202E] font-medium">{item.org}</p>
                  <p className="font-hand text-base text-[#3D1B27] mt-1 leading-snug">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Signature Signoff */}
          <div className="mt-8 pt-4 border-t border-[#CC8296] flex items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#5E2B3A]">
              ARCHIVE RECORD
            </span>
            <span className="font-script text-2xl text-[#2B141D] whitespace-nowrap">
              Jihan A. Fakhira
            </span>
          </div>
        </div>

        {/* Right Column: Skills & Toolkit (Loose Leaf Binder Card) */}
        <div className="lg:col-span-7 bg-[#FAF9F5] rounded-xl shadow-[0_20px_40px_-15px_rgba(50,40,30,0.18),0_3px_8px_-2px_rgba(50,40,30,0.08)] p-6 sm:p-8 border border-[#E0DBC8] flex flex-col justify-between">
          <div>
            <div className="border-b border-[#E0DBC8] pb-3 mb-6 flex items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8] font-bold">
                  INVENTORY RECORD
                </span>
                <h3 className="font-mono text-2xl font-bold uppercase tracking-tight text-[#1E1C19] mt-1">
                  SKILLS &amp; TOOLKIT
                </h3>
              </div>
              <span className="chrome-star text-3xl select-none" aria-hidden="true">
                ✦
              </span>
            </div>

            {/* Category 1: Daily Productivity Tools */}
            <div className="mb-6">
              <span className="font-mono text-xs uppercase font-bold text-neutral-600 tracking-wider block mb-2.5">
                01. Daily Productivity &amp; Essentials
              </span>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCTIVITY_SKILLS.map((skill) => {
                  const isActive = selectedSkill.id === skill.id;
                  return (
                    <button
                      key={skill.id}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      className={`bg-white border rounded p-3 text-center shadow-xs transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                        isActive
                          ? 'border-[#1D4ED8] ring-2 ring-[#1D4ED8]/20 -translate-y-0.5'
                          : 'border-[#DDD6C5] hover:border-[#1B2A4A]/50'
                      }`}
                    >
                      <div className={`${skill.colorClass ?? 'text-[#1E1C19]'} font-bold text-lg font-mono`}>
                        {skill.title}
                      </div>
                      <span className="text-[11px] font-sans text-neutral-600 block">
                        {skill.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category 2: Creative & Technical Competencies */}
            <div className="mb-6">
              <span className="font-mono text-xs uppercase font-bold text-neutral-600 tracking-wider block mb-2.5">
                02. Hard Skills &amp; Domain Interests
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {DOMAIN_SKILLS.map((skill) => {
                  const isActive = selectedSkill.id === skill.id;
                  return (
                    <button
                      key={skill.id}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      className={`border p-2.5 rounded text-center transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                        isActive
                          ? 'bg-[#E1ECF8] border-[#1D4ED8] ring-2 ring-[#1D4ED8]/20 -translate-y-0.5'
                          : 'bg-[#F0F5FA] border-[#C9DAEC] hover:bg-[#E7EFF8]'
                      }`}
                    >
                      <span className="font-sans font-bold text-xs text-[#1B2A4A] block">
                        {skill.title}
                      </span>
                      <span className="font-hand text-sm text-neutral-600 block">
                        {skill.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category 3: Soft Skills Rubber Stamps */}
            <div>
              <span className="font-mono text-xs uppercase font-bold text-neutral-600 tracking-wider block mb-2.5">
                03. Core Soft Skills (Verified in Field)
              </span>
              <div className="flex flex-wrap gap-2.5 items-center">
                {SOFT_SKILL_STAMPS.map((stamp) => (
                  <span
                    key={stamp.label}
                    className={`rubber-stamp px-3 py-1 text-xs ${stamp.rotate} inline-block ${stamp.border} ${stamp.text}`}
                  >
                    {stamp.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Stationery Specification Readout */}
          <div className="mt-6 pt-4 border-t border-[#E0DBC8]">
            <div className="flex flex-wrap items-center justify-between gap-2 text-neutral-600 font-mono text-[11px] mb-1">
              <span className="font-bold text-[#1D4ED8]">
                SPEC · {selectedSkill.title.toUpperCase()}
              </span>
              <span className="font-hand text-base text-neutral-700">crafted with precision</span>
            </div>
            <p className="font-sans text-xs text-[#4A463D] leading-relaxed">
              {selectedSkill.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
