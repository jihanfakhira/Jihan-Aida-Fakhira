/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroDossier } from './components/HeroDossier';
import { DigiworldSpread } from './components/DigiworldSpread';
import { SelectedWork } from './components/SelectedWork';
import { ChronicleAndSkills } from './components/ChronicleAndSkills';
import { ContactEnvelope } from './components/ContactEnvelope';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DossierPreviewModal } from './components/DossierPreviewModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    window.setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2800);
  }, []);

  const scrollToContact = useCallback(() => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="relative z-10 flex-1">
        <HeroDossier onOpenDossier={() => setIsDossierOpen(true)} />
        <DigiworldSpread onOpenDossier={() => setIsDossierOpen(true)} />
        <SelectedWork onSelectProject={setSelectedProject} />
        <ChronicleAndSkills />
        <ContactEnvelope onShowToast={showToast} />
      </main>

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={scrollToContact}
      />
      <DossierPreviewModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        onShowToast={showToast}
      />

      {/* Interactive Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-6 z-50 bg-[#1F1E1C] text-white px-5 py-3 rounded-lg shadow-2xl font-mono text-xs transition-all duration-200 pointer-events-none flex items-center space-x-2 border border-neutral-700 ${
          toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <span className="text-emerald-400 text-base">✓</span>
        <span>{toastMessage ?? 'Alamat email berhasil disalin!'}</span>
      </div>
    </div>
  );
}
