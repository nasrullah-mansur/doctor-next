"use client";

import { CHAMBERS } from '@/constants';
import { CheckCircle2, ChevronRight, Clock, MapPin, MessageSquare, Phone, Send, User, X } from 'lucide-react';
import React, { useState } from 'react';

export default function Chambers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChamber, setSelectedChamber] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (chamberName: string) => {
    setSelectedChamber(chamberName);
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChamber(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };
  return (
    <>
      <section id="chambers" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Chambers & Locations</h2>
            <h3 className="gradient-text text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">Visiting Hours</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {CHAMBERS.map((chamber, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="space-y-2">
                    <h5 className="text-xl mb-3 font-bold text-slate-900 font-display leading-tight">{chamber.name}</h5>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      {chamber.address}
                    </div>
                  </div>
                  <div className="shrink-0 border border-blue-500/50 text-blue-500/80 p-4 rounded-2xl transition-transform group-hover:scale-110">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4 border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-400 uppercase tracking-widest">Schedule</span>
                    <span className="text-slate-900 font-bold">{chamber.schedule}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-400 uppercase tracking-widest">Location</span>
                    <span className="text-slate-600 font-medium">{chamber.room}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-4 border-t border-slate-100">
                    <span className="font-bold text-slate-400 uppercase tracking-widest">Contact</span>
                    <a href={`tel:${chamber.contact}`} className="flex items-center gap-2 text-blue-500 font-black text-lg">
                      <Phone className="w-4 h-4" />
                      {chamber.contact}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => openModal(chamber.name)}
                  className="w-full mt-8 py-4 bg-white border cursor-pointer text-md border-slate-200 rounded-2xl font-semibold text-slate-900 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20"
                >
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div
            className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl shadow-black/50 overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 sm:p-12">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4">
                      Fast Booking
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 font-display mb-2">Book Appointment</h4>
                    <p className="text-slate-500 text-sm font-medium">
                      Scheduling for <span className="text-blue-500 font-bold">{selectedChamber}</span>
                    </p>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          required
                          type="text"
                          placeholder="Enter your name"
                          className="w-full bg-slate-50 border border-slate-100 focus:border-blue-500/30 focus:bg-white rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          required
                          type="tel"
                          placeholder="+880 1XXX XXXXXX"
                          className="w-full bg-slate-50 border border-slate-100 focus:border-blue-500/30 focus:bg-white rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Message (Optional)</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-5 top-4 w-4 h-4 text-slate-400" />
                        <textarea
                          rows={4}
                          placeholder="Brief description of the condition..."
                          className="w-full bg-slate-50 border border-slate-100 focus:border-blue-500/30 focus:bg-white rounded-2xl py-4 pl-12 pr-6 text-sm outline-none transition-all resize-none shadow-sm"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-5 rounded-[2rem] font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group mt-8"
                    >
                      Confirm Booking
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 font-display mb-2">Request Sent!</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      We have received your appointment request for {selectedChamber}. Our assistant will contact you shortly to confirm the time.
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-blue-500 font-bold text-sm hover:underline"
                  >
                    Return to home
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
