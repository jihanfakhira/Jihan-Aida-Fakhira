import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ArchivalImage } from './ArchivalImage';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onContactClick,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/65 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F3] border-2 border-[#D8D2C3] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Archival Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#EFECE1] border-b border-[#D8D2C3]">
          <div className="flex items-center gap-3">
            <span
              className={`${project.accentBg} ${project.accentText} font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs font-bold`}
            >
              {project.fileCode}
            </span>
            <span className="font-mono text-[11px] text-[#5C564B]">
              {project.period} · {project.role}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail proyek"
            className="w-8 h-8 rounded-full border border-[#C4BBA6] bg-white text-[#1E1C19] hover:bg-[#1E1C19] hover:text-white transition-colors inline-flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5">
          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-[#2E3138] border border-[#DDD6C5]">
            <ArchivalImage
              src={project.imageUrl}
              alt={project.imageAlt}
              fallbackLabel={project.fileCode}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3
              id="project-modal-title"
              className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E1C19]"
            >
              {project.title}
            </h3>
            <p className="font-sans text-sm text-[#4A463D] mt-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-white border border-[#E3DEC3] rounded-lg p-4">
            <h4 className="font-mono text-[11px] uppercase tracking-widest font-bold text-[#1D4ED8] mb-2.5">
              KEY RESPONSIBILITIES &amp; HIGHLIGHTS
            </h4>
            <ul className="space-y-2 font-sans text-[13px] text-[#2D2A26]">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="font-mono text-[#9E4763] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome & Tags */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#E3DEC3]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E675C] block">
                OUTCOME &amp; FOCUS
              </span>
              <p className="font-hand text-lg text-[#1E1C19] leading-snug">{project.outcome}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-4 py-2 rounded bg-[#1F1E1C] text-white hover:bg-[#1D4ED8] transition-colors font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 cursor-pointer"
            >
              Discuss Similar Project ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
