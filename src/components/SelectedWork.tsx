import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ArchivalImage } from './ArchivalImage';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterKey = 'all' | 'arts' | 'creative' | 'tech';

const FILTER_OPTIONS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Files' },
  { key: 'arts', label: 'Arts & OSIS' },
  { key: 'creative', label: 'Creative Media' },
  { key: 'tech', label: 'Tech & AI' },
];

export function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="work" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 border-b-2 border-[#D8D2C3] pb-5">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#1D4ED8] font-bold block mb-1">
            DOSSIER INDEX · 03
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#1E1C19] text-balance">
            SELECTED WORK &amp; PROJECTS
          </h2>
        </div>
        <p className="font-hand text-xl text-[#635C50]">
          Koleksi proyek kepemimpinan seni, editing video, dan eksplorasi teknologi
        </p>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div
          role="tablist"
          aria-label="Filter proyek berdasarkan kategori"
          className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#E5DFCF] rounded-lg border border-[#D4CCB9]"
        >
          {FILTER_OPTIONS.map((option) => {
            const isActive = activeFilter === option.key;
            return (
              <button
                key={option.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(option.key)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                  isActive
                    ? 'bg-[#1F1E1C] text-white shadow-xs'
                    : 'text-[#4B463D] hover:text-[#1F1E1C] hover:bg-[#EFECE1]/70'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        <span className="font-mono text-[11px] text-[#635C50] uppercase tracking-wider">
          Showing {visibleProjects.length} of {PROJECTS.length} archival files · Click card to inspect
        </span>
      </div>

      {/* Scrapbook Grid of Archival Files */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="bg-[#FAF8F3] border border-[#DDD6C5] rounded-lg p-5 shadow-[0_20px_40px_-15px_rgba(50,40,30,0.18),0_3px_8px_-2px_rgba(50,40,30,0.08)] relative tactile-lift group flex flex-col justify-between"
          >
            {/* Washi tape at top */}
            <div
              aria-hidden="true"
              className={`absolute -top-3 left-1/2 -translate-x-1/2 washi-tape w-28 h-6 ${project.tapeRotate}`}
            />

            <div>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] rounded"
              >
                <div className="aspect-[16/10] bg-[#2E3138] rounded overflow-hidden relative mt-2">
                  <ArchivalImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fallbackLabel={project.fileCode}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                  <span
                    className={`absolute top-2.5 left-2.5 ${project.accentBg} ${project.accentText} font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs font-bold`}
                  >
                    {project.fileCode}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-[#6E675C] font-mono text-[10px] gap-2">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-[#1E1C19] mt-1.5 group-hover:text-[#1D4ED8] transition-colors flex items-start justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="font-sans text-[13px] text-[#524E46] mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </button>
            </div>

            <div className="mt-5 pt-3 border-t border-[#EAE4D5] flex items-center justify-between gap-2">
              <div className="font-mono text-[10px] text-[#5C564B] flex flex-wrap items-center gap-x-1.5 gap-y-1">
                {project.tags.map((tag, idx) => (
                  <span key={tag} className="inline-flex items-center gap-1.5">
                    {idx > 0 && <span aria-hidden="true">·</span>}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1D4ED8] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                Open File
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
