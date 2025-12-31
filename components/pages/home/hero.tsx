"use client";

import { ArrowRight, Award, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <section className="relative pt-40 pb-24 overflow-hidden bg-background">

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-primary text-[11px] font-bold tracking-wider uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Fellowship in Japan & India
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-5xl font-black font-display text-foreground tracking-tight leading-[0.95]">
                                    <span className="gradient-text">Dr. Md. Sumon Rana</span>
                                </h1>
                                <p className="text-xl font-bold text-slate-700">Assistant Professor, Dept. of Neurosurgery</p>
                                <p className="text-slate-500 font-semibold text-sm">Dhaka Medical College & Hospital, Dhaka</p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {['MBBS', 'BCS (Health)', 'MS (Neurosurgery)'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">{tag}</span>
                                ))}
                            </div>

                            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
                                Expert in Brain, Spine, and Pediatric Neurosurgery. Specializing in Neuro Endovascular Surgery and Stroke management with advanced training from international centers of excellence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <button
                                    onClick={() => scrollToSection('chambers')}
                                    className="bg-primary cursor-pointer text-primary-foreground px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/25 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 group"
                                >
                                    Find Chambers
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => scrollToSection('features')}
                                    className="bg-background cursor-pointer text-foreground border-2 border-border/60 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-secondary/50 transition-all flex items-center justify-center gap-2"
                                >
                                    Specializations
                                </button>
                            </div>

                            <div className="flex items-center gap-6 pt-10 justify-center lg:justify-start border-t border-border/50">
                                <div className="flex -space-x-3">
                                    <div className="w-14 h-14 rounded-full border-4 border-background bg-blue-100 flex items-center justify-center text-blue-600 shadow-xl">
                                        <Globe className="w-7 h-7" />
                                    </div>
                                    <div className="w-14 h-14 rounded-full border-4 border-background bg-rose-100 flex items-center justify-center text-rose-600 shadow-xl">
                                        <Award className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-foreground">Advanced Microvascular Specialist</p>
                                    <p className="text-xs font-medium text-muted-foreground">Certified in Japan & India</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - PORTRAIT */}
                        <div className="relative flex justify-center items-center py-12 lg:py-0">
                            <div className="absolute w-[105%] h-[105%] border border-dashed border-blue-600/20 rounded-full animate-spin-slow"></div>

                            <div className="relative w-full max-w-[480px] aspect-square group">
                                <div className="relative z-10 w-full h-full rounded-full border-[12px] border-white shadow-2xl overflow-hidden transition-all duration-700 hover:scale-[1.03]">
                                    <Image
                                        src="/image.jpeg"
                                        className="w-full h-full object-cover"
                                        alt="Dr. Md. Sumon Rana"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                                </div>

                                {/* Badges */}
                                <div className="absolute -bottom-4 -left-8 glass p-5 rounded-3xl shadow-xl border-white/40 z-20 animate-bounce-slow">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Faculty</p>
                                    <p className="text-xl font-black text-foreground font-display">DMCH Dhaka</p>
                                </div>

                                <div className="absolute -top-4 -right-8 glass p-5 rounded-3xl shadow-xl border-white/40 z-20">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Experience</p>
                                    <p className="text-xl font-black text-foreground font-display">Senior Surgeon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-10 items-center justify-center grayscale opacity-60 flex-wrap font-display font-semibold text-slate-800 uppercase tracking-tighter text-xs md:text-sm">
                        <span>Assistant Professor, DMCH</span>
                        <span className="text-primary opacity-30">/</span>
                        <span>Microvascular Surgery (Japan)</span>
                        <span className="text-primary opacity-30">/</span>
                        <span>Neuro Endovascular (India)</span>
                        <span className="text-primary opacity-30">/</span>
                        <span>MS Neurosurgery</span>
                    </div>
                </div>
            </div>

        </>
    )
}
