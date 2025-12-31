"use client";

import { Award, MapPin, Phone, Send } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../../constants';

export default function Footer({ onNavigate }: { onNavigate?: (view: string) => void; }) {

  const handleLinkClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button onClick={() => handleLinkClick('home')} className="flex items-center gap-3 group cursor-pointer text-left">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
                <span className="text-xl font-bold">SR</span>
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight font-display">
                  Dr. Sumon Rana
                </h1>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Neurosurgery</p>
              </div>
            </button>
            <p className="text-slate-600 text-sm leading-relaxed">
              Assistant Professor at Dhaka Medical College. Specialized in Brain, Spine and Pediatric Neurosurgery with international surgical training from Japan and India.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link, i) => (
                <a key={i} href={link.href} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Award className="w-5 h-5 text-primary shrink-0" />
                <span>Dept. of Neurosurgery, DMCH</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+880 1713228218</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Panthapath / Sono Tower, Dhaka</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-slate-500 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6">Quick Link</h4>
            <p className="text-sm text-slate-600 mb-6">Schedule your clinical evaluation today.</p>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full bg-primary text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-primary/10"
            >
              Contact Us <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-medium">© 2025 Dr. Md. Sumon Rana. All rights reserved.</p>
          <div className="flex gap-8">
            <button onClick={() => handleLinkClick('contact')} className="text-sm text-slate-500 hover:text-primary font-medium">Emergency Care</button>
            <button onClick={() => handleLinkClick('home')} className="text-sm text-slate-500 hover:text-primary font-medium">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
