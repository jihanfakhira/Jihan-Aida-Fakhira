import { useState, FormEvent } from 'react';
import { Copy, Check, Send, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactEnvelopeProps {
  onShowToast: (message: string) => void;
}

export function ContactEnvelope({ onShowToast }: ContactEnvelopeProps) {
  const [copied, setCopied] = useState(false);
  const [showComposer, setShowComposer] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [dispatched, setDispatched] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT_INFO.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    onShowToast('Alamat email berhasil disalin!');
    setTimeout(() => setCopied(false), 2400);
  };

  const handlePostcardSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    const mailSubject = encodeURIComponent(
      subject.trim() || `Kolaborasi / Inquiry dari ${senderName.trim()}`
    );
    const mailBody = encodeURIComponent(
      `Halo Jihan,\n\nNama: ${senderName.trim()}\n\n${message.trim()}\n\nDikirim melalui Editorial Dossier Portfolio.`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${mailSubject}&body=${mailBody}`;

    setDispatched(true);
    onShowToast('Draft kartu pos disiapkan di aplikasi email Anda!');
    setTimeout(() => {
      setDispatched(false);
      setSenderName('');
      setSubject('');
      setMessage('');
      setShowComposer(false);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Vintage Blue Archival Envelope Card */}
      <div className="bg-[#D3E2F2] rounded-2xl shadow-[0_24px_50px_-12px_rgba(45,30,35,0.22)] border-2 border-[#BDD3E8] p-6 sm:p-10 md:p-14 relative overflow-hidden">
        {/* Postmark Stamp in Top Right */}
        <div
          aria-hidden="true"
          className="hidden sm:flex absolute top-6 right-6 w-24 h-24 border-2 border-[#1D4ED8] rounded-full flex-col items-center justify-center p-2 text-center text-[#1D4ED8] -rotate-12 select-none opacity-80 pointer-events-none"
        >
          <span className="font-mono text-[8px] uppercase tracking-widest font-bold">
            OFFICIAL POST
          </span>
          <span className="font-mono text-[9px] font-bold">CILEGON · ID</span>
          <span className="font-mono text-[8px]">★ 2026 ★</span>
        </div>

        <div className="max-w-2xl">
          <div className="inline-block washi-tape px-4 py-1 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#204060]">
              INQUIRIES &amp; COLLABORATIONS
            </span>
          </div>
          <h2 className="font-script text-5xl sm:text-6xl text-[#1B2A4A] leading-tight">
            Let&apos;s Create &amp; Connect
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#2E476B] mt-2 leading-relaxed">
            Terbuka untuk kolaborasi proyek teknologi informasi, kreasi video, kepanitiaan
            kreatif, maupun kesempatan magang dan networking profesional. Silakan hubungi langsung
            melalui kanal di bawah ini:
          </p>

          {/* Contact Channels List */}
          <div className="mt-8 space-y-4 font-mono text-sm">
            {/* Email (with Interactive Copy) */}
            <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-lg border border-[#BACEE2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center space-x-3">
                <span className="text-xl" aria-hidden="true">
                  ✉️
                </span>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                    PRIMARY EMAIL
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-bold text-[#1B2A4A] hover:text-[#1D4ED8] transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded bg-[#1B2A4A] text-white hover:bg-[#1D4ED8] transition-colors text-xs font-bold uppercase tracking-wider shrink-0 inline-flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
              </button>
            </div>

            {/* WhatsApp Direct Contact */}
            <div className="bg-white/85 backdrop-blur-xs p-3.5 rounded-lg border border-[#BACEE2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center space-x-3">
                <span className="text-xl" aria-hidden="true">
                  💬
                </span>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">
                    WHATSAPP DIRECT
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1B2A4A] hover:text-[#1D4ED8] transition-colors"
                  >
                    {CONTACT_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider text-center shrink-0 inline-flex items-center justify-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <span>CHAT VIA WA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Interactive Archival Postcard Toggle */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowComposer((prev) => !prev)}
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#1B2A4A] underline decoration-[#1D4ED8]/60 underline-offset-4 hover:text-[#1D4ED8] cursor-pointer"
              >
                {showComposer ? 'Close Postcard Note ×' : 'Write a Quick Postcard Note ↗'}
              </button>

              {showComposer && (
                <form
                  onSubmit={handlePostcardSubmit}
                  className="mt-3 bg-[#FAF8F3] border border-[#BACEE2] rounded-lg p-4 sm:p-5 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#E3DEC3] pb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-[#1B2A4A]">
                      AIRMAIL INQUIRY CARD
                    </span>
                    {dispatched && (
                      <span className="font-mono text-[10px] text-emerald-700 font-bold">
                        ✓ READY TO SEND
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="senderName"
                        className="block font-mono text-[10px] uppercase tracking-wider text-[#544E45] mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        id="senderName"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Nama atau Organisasi"
                        className="w-full bg-white border border-[#D4CCB9] rounded px-3 py-2 font-sans text-xs text-[#1E1C19] focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="postcardSubject"
                        className="block font-mono text-[10px] uppercase tracking-wider text-[#544E45] mb-1"
                      >
                        Topic
                      </label>
                      <input
                        id="postcardSubject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Video Editing / Tech Project / Event"
                        className="w-full bg-white border border-[#D4CCB9] rounded px-3 py-2 font-sans text-xs text-[#1E1C19] focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="postcardMessage"
                      className="block font-mono text-[10px] uppercase tracking-wider text-[#544E45] mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="postcardMessage"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan pesan atau ajakan kolaborasi Anda di sini..."
                      className="w-full bg-white border border-[#D4CCB9] rounded px-3 py-2 font-sans text-xs text-[#1E1C19] focus:outline-none focus:border-[#1D4ED8]"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#1B2A4A] text-white hover:bg-[#1D4ED8] transition-colors font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Secondary Info: Campus & Dossier Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white/60 rounded border border-[#BACEE2]">
                <span className="text-[10px] text-neutral-600 uppercase font-bold block">
                  ACADEMIC INSTITUTION
                </span>
                <span className="text-xs font-sans font-bold text-[#1B2A4A]">
                  {CONTACT_INFO.institution}
                </span>
              </div>
              <div className="p-3.5 bg-white/60 rounded border border-[#BACEE2]">
                <span className="text-[10px] text-neutral-600 uppercase font-bold block">
                  ORIGIN &amp; RESIDENCE
                </span>
                <span className="text-xs font-sans font-bold text-[#1B2A4A]">
                  {CONTACT_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Watermark & Copyright */}
      <footer className="mt-16 text-center text-neutral-500 font-mono text-xs">
        <p className="font-script text-3xl text-neutral-700 mb-2">Jihan Aida Fakhira</p>
        <p>© 2026 Jihan Aida Fakhira. Personal Editorial Scrapbook &amp; Archival Dossier.</p>
        <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">
          Designed with tactile physical stationery aesthetics
        </p>
      </footer>
    </section>
  );
}
