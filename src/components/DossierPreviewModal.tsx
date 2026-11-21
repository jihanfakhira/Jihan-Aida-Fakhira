import { useEffect } from 'react';
import { X, Copy, Mail } from 'lucide-react';
import {
  CHRONICLE_ITEMS,
  CONTACT_INFO,
  DOMAIN_SKILLS,
  DOSSIER_FIELDS,
  PRODUCTIVITY_SKILLS,
} from '../data/portfolioData';

interface DossierPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export function DossierPreviewModal({
  isOpen,
  onClose,
  onShowToast,
}: DossierPreviewModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyDossier = async () => {
    const summaryText = [
      'OFFICIAL DOSSIER — JIHAN AIDA FAKHIRA',
      'S1 Teknik Informatika — Institut Teknologi PLN (2026–Present)',
      'Based in: Cilegon, Banten, Indonesia',
      'Leadership: Koordinator Sekbid Kesenian — OSIS (2024–2025)',
      'Skills: Video Editing (CapCut/Premiere), Informatics & AI Exploration, Microsoft Office (Word, Excel, PPT), Leadership, Teamwork, Problem Solving',
      `Email: ${CONTACT_INFO.email}`,
      `WhatsApp: ${CONTACT_INFO.whatsappDisplay}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summaryText);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = summaryText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    onShowToast('Ringkasan Dossier berhasil disalin!');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/65 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FBF9F4] border-2 border-[#D8D2C3] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Manila Header Strip */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#E6A6B8] border-b border-[#D593A5]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5E2B3A] font-bold block">
              SUMMARY SHEET · 2026
            </span>
            <h3
              id="dossier-modal-title"
              className="font-script text-3xl text-[#2B141D] leading-none mt-0.5"
            >
              Jihan Aida Fakhira
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup ringkasan dossier"
            className="w-8 h-8 rounded-full border border-[#5E2B3A]/40 bg-[#FAF8F5] text-[#2B141D] hover:bg-[#2B141D] hover:text-white transition-colors inline-flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          <div className="space-y-2.5">
            {DOSSIER_FIELDS.map((field) => (
              <div
                key={field.label}
                className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#E3DEC3] pb-2 gap-1"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E685E]">
                  {field.label}
                </span>
                <span className="sm:col-span-2 font-sans text-xs font-semibold text-[#1E1C19]">
                  {field.value}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#E3DEC3] rounded-lg p-4">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#9E4763] mb-2">
                TIMELINE HIGHLIGHTS
              </h4>
              <ul className="space-y-2 text-xs font-sans text-[#2A2723]">
                {CHRONICLE_ITEMS.map((item) => (
                  <li key={item.title}>
                    <strong className="block">{item.title}</strong>
                    <span className="text-[#5C564B]">{item.org}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E3DEC3] rounded-lg p-4">
              <h4 className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#1D4ED8] mb-2">
                TOOLKIT &amp; COMPETENCIES
              </h4>
              <div className="text-xs font-sans text-[#2A2723] space-y-1.5">
                <p>
                  <strong>Productivity:</strong>{' '}
                  {PRODUCTIVITY_SKILLS.map((s) => s.title).join(', ')}
                </p>
                <p>
                  <strong>Creative &amp; Tech:</strong>{' '}
                  {DOMAIN_SKILLS.map((s) => s.title).join(', ')}
                </p>
                <p>
                  <strong>Soft Skills:</strong> Leadership, Teamwork, Problem Solving, Adaptability
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E3DEC3]">
            <button
              type="button"
              onClick={handleCopyDossier}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white transition-colors font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Dossier Text</span>
            </button>
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Inquiry%20from%20Portfolio%20-%20Jihan%20Aida`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#1D4ED8] text-white hover:bg-[#1E40AF] transition-colors font-mono text-xs font-bold uppercase tracking-wider"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Jihan Directly</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
