"use client";

import { Mail, MapPin, Navigation, Phone, Send } from 'lucide-react';
export default function Contact() {

    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5857207097!2d90.39502!3d23.725821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e96752d507%3A0x67303f8a4e156f08!2sDhaka%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1710150000000!5m2!1sen!2sbd";
    const directionsUrl = "https://www.google.com/maps/dir//Dhaka+Medical+College+Hospital,+Secretariate+Road,+Dhaka+1000/@23.725821,90.3975949,17z/";

    return (
        <section className="pt-40 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[11px]">Get in Touch</h2>
                            <h3 className="gradient-text text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">Contact Us</h3>
                            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                                Reach out for surgical consultations, second opinions, or emergency evaluations across Dhaka.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-500/20 transition-all group">
                                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Direct Hotline</p>
                                    <a href="tel:+8801713228218" className="text-lg font-bold text-slate-900 hover:text-blue-500 transition-colors">+880 1713228218</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-emerald-500/20 transition-all group">
                                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:-rotate-6 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Support</p>
                                    <a href="mailto:info@drsumonrana.com" className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors">info@drsumonrana.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-black text-slate-900 font-display flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-blue-500" />
                                    Our location
                                </h4>
                                <a
                                    href={directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
                                >
                                    <Navigation className="w-3.5 h-3.5" />
                                    Get Directions
                                </a>
                            </div>

                            <div className="relative group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 transition-all duration-500">
                                <div className="aspect-[16/10] w-full">
                                    <iframe
                                        src={mapUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Dhaka Medical College & Hospital Location"
                                        className="grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    ></iframe>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border-white/40 flex items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Department of Neurosurgery</p>
                                        <h5 className="text-sm font-bold text-slate-900">Dhaka Medical College & Hospital, Dhaka</h5>
                                    </div>
                                    <div className="shrink-0 w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-32">
                        <div className="bg-slate-50 rounded-[3.5rem] p-10 lg:p-14 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold text-slate-900 mb-2 font-display">Appointment Inquiry</h4>
                                <p className="text-slate-500 text-sm mb-10 font-medium">Please provide your details for a clinical follow-up.</p>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Patient Name"
                                            className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="patient@example.com"
                                                className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+880 1XXX XXXXXX"
                                                className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject / Condition</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Spine Surgery Inquiry"
                                            className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all shadow-sm"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Brief description of the medical condition..."
                                            className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none shadow-sm"
                                        ></textarea>
                                    </div>

                                    <button className="w-full bg-blue-500 text-white py-5 rounded-3xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95 group">
                                        Send Inquiry
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
