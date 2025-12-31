"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const IMAGES = [
    "https://images.unsplash.com/photo-1579154235602-3c2ae48a7983?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
];


export default function CTASection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent(prev => (prev + 1) % IMAGES.length);
    const prev = () => setCurrent(prev => (prev - 1 + IMAGES.length) % IMAGES.length);

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-slate-950 text-white p-10 lg:p-20">
                    <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500 blur-[120px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <h2 className="text-4xl lg:text-6xl font-black font-display leading-[1.1] text-white">
                                Advanced Surgical Precision
                            </h2>
                            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                                Leveraging global medical standards and state-of-the-art neurosurgical technology to ensure the best possible outcomes for every patient.
                            </p>

                        </div>

                        {/* IMAGE SLIDER */}
                        <div className="relative group aspect-[4/3] w-full max-w-[600px] mx-auto overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                            {IMAGES.map((img, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <img src={img} alt="Surgical facility" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                                </div>
                            ))}

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {IMAGES.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`}
                                    ></button>
                                ))}
                            </div>

                            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
