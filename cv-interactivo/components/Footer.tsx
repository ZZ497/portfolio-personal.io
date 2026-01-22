import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center no-print">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-4">&copy; {new Date().getFullYear()} CV Interactivo. Construido con React, Tailwind & Gemini API.</p>
        <div className="text-sm text-slate-600">
          Este sitio web utiliza Google Gemini para potenciar el chat asistente. 
          <br />La información presentada es una demostración.
        </div>
      </div>
    </footer>
  );
};

export default Footer;