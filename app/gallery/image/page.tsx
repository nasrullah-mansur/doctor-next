"use client";

import { GALLERY_IMAGES } from '@/constants';
import { Maximize2, Plus, X } from 'lucide-react';
import { useState } from 'react';


export default function ImageGallery() {
    const [itemsToShow, setItemsToShow] = useState(8);
    const [selectedImage, setSelectedImage] = useState<{ url: string, title: string } | null>(null);

    const visibleImages = GALLERY_IMAGES.slice(0, itemsToShow);
    const hasMore = itemsToShow < GALLERY_IMAGES.length;

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 4);
    };
    return (
        <section className="pt-40 pb-24 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Visual Portfolio</h2>
                    <h3 className="gradient-text text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">Image Gallery</h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm font-medium">
                        Snapshots of our clinical facilities, surgical equipment, and academic life.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleImages.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedImage(img)}
                            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 aspect-square cursor-pointer bg-slate-50"
                        >
                            <img
                                src={`${img.url}?auto=format&fit=crop&q=80&w=600`}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                                    <Maximize2 className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 pointer-events-none">
                                <div className="space-y-1">

                                    <p className="text-white font-bold text-lg leading-tight">{img.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-20 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-10 py-5 bg-white border-2 border-slate-100 rounded-[2rem] font-bold text-slate-900 hover:bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex items-center gap-2 mx-auto active:scale-95"
                        >
                            <Plus className="w-5 h-5 text-blue-500" /> Load More Gallery Items
                        </button>
                    </div>
                )}
            </div>

            {/* LIGHTBOX POPUP */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-slate-950/98 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/40 hover:text-white transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div
                        className="relative max-w-6xl w-full h-full flex flex-col justify-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex-grow overflow-hidden rounded-[3rem] shadow-2xl bg-black">
                            <img
                                src={`${selectedImage.url}?auto=format&fit=crop&q=95&w=1600`}
                                className="w-full h-full object-contain"
                                alt={selectedImage.title}
                            />
                        </div>
                        <div className="flex justify-between items-end text-white pb-4">
                            <div className="space-y-1">
                                <h4 className="text-3xl font-black font-display tracking-tight">{selectedImage.title}</h4>
                                <p className="text-white/50 text-sm font-medium">Dr. Md. Sumon Rana | Assistant Professor DMCH</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
