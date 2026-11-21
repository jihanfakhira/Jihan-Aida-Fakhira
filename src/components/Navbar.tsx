import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#work', label: 'SELECTED WORK' },
    { href: '#skills', label: 'SKILLS & ORG' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#EFECE1]/90 border-b border-[#D8D2C3]/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1 (Left Desktop Nav) */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-[#544E45]"
        >
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1D4ED8] hover:after:w-full after:transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#2D2A26]/30 bg-[#FAF8F5] text-[#1E1C19] hover:border-[#1D4ED8] transition-colors shrink-0"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Zone 2: Center Ornate Signature */}
        <div className="text-center shrink-0">
          <a
            href="#home"
            className="inline-block group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            <span className="font-['Alex_Brush',cursive] text-3xl sm:text-4xl lg:text-[42px] text-[#537fa2] font-bold not-italic group-hover:text-[#1D4ED8] transition-colors leading-none tracking-normal whitespace-nowrap">
              Jihan Aida Fakhira
            </span>
          </a>
        </div>

        {/* Zone 3: Right Nav & Contact Action */}
        <div className="flex items-center gap-5 shrink-0">
          <a
            href="#skills"
            className="hidden lg:inline-block whitespace-nowrap shrink-0 text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-[#544E45] hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1D4ED8] hover:after:w-full after:transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
          >
            SKILLS &amp; ORG
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap shrink-0 px-4 py-2 rounded-full border border-[#2D2A26] bg-[#FAF8F5] text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-[#1E1C19] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:text-white transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#D8D2C3] bg-[#F8F6F0] px-4 py-3 flex flex-wrap gap-3 justify-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-[11px] font-bold tracking-[0.16em] uppercase font-mono text-[#3D3932] hover:text-[#1D4ED8]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
