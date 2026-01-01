"use client";

import { GALLERY_VIDEOS } from '@/constants';
import { Play, Plus, Share2, X } from 'lucide-react';
import React, { useState } from 'react';

export default function VideoGallery() {
    const [itemsToShow, setItemsToShow] = useState(6);
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    const visibleVideos = GALLERY_VIDEOS.slice(0, itemsToShow);
    const hasMore = itemsToShow < GALLERY_VIDEOS.length;

    const handleLoadMore = () => {
        setItemsToShow(prev => prev + 3);
    };

    const handleShare = (e: React.MouseEvent, video: typeof GALLERY_VIDEOS[0]) => {
        e.stopPropagation();
        const shareUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: 'Watch this surgery insight by Dr. Md. Sumon Rana.',
                url: shareUrl,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Video link copied to clipboard!');
            });
        }
    };
    return (
        <section className="pt-40 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Academic & Clinical Insights</h2>
                    <h3 className="gradient-text text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">Video Gallery</h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm font-medium">
                        Educational videos, patient guides, and lectures covering neurosurgical breakthroughs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleVideos.map((video) => (
                        <div
                            key={video.id}
                            className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                        >
                            {/* VIDEO AREA */}
                            <div className="relative aspect-video bg-black overflow-hidden">
                                {playingVideoId === video.id ? (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                ) : (
                                    <div
                                        className="w-full h-full cursor-pointer relative"
                                        onClick={() => setPlayingVideoId(video.id)}
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 shadow-2xl">
                                                <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <h4 className="text-xl font-bold text-slate-900 leading-tight h-14 overflow-hidden line-clamp-2">
                                        {video.title}
                                    </h4>
                                    {playingVideoId === video.id && (
                                        <button
                                            onClick={() => setPlayingVideoId(null)}
                                            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <button
                                        onClick={(e) => handleShare(e, video)}
                                        className="text-xs font-black text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 uppercase tracking-widest"
                                    >
                                        <Share2 className="w-4 h-4" /> Share Video
                                    </button>

                                    {playingVideoId !== video.id ? (
                                        <button
                                            onClick={() => setPlayingVideoId(video.id)}
                                            className="text-xs font-black text-blue-500 flex items-center gap-1.5 uppercase tracking-widest group/btn"
                                        >
                                            Watch Now <Play className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </button>
                                    ) : (
                                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                            Playing Inline
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-10 py-5 bg-white border-2 border-slate-100 rounded-3xl font-bold text-slate-900 hover:bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex items-center gap-2 mx-auto active:scale-95"
                        >
                            <Plus className="w-5 h-5 text-blue-500" /> Load More Videos
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
