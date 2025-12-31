
'use client';

import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ILink = {
    label: string;
    href: string;
    subLinks?: ILink[]
}

const NAV_LINKS: ILink[] = [
    { label: 'Home', href: 'home' },
    { label: 'Image Gallery', href: 'images' },
    { label: 'Video Gallery', href: 'videos' },
    { label: 'Contact Us', href: 'contact' }
]

export default function Header({ onNavigate, currentView }: { onNavigate?: (view: string) => void; currentView?: string; }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
        if (onNavigate) {
            onNavigate(href);
            setIsOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 glass shadow-lg border-b' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <button onClick={() => handleLinkClick('home')} className="flex items-center gap-3 group cursor-pointer text-left">
                        <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20 transition-all group-hover:rotate-6">
                            <span className="text-xl font-extrabold font-display">SR</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-extrabold font-display tracking-tight leading-none">
                                Dr. Sumon <span className="text-pink-600">RANA</span>
                            </h1>
                            <p className="text-[9px] font-bold text-muted-foreground tracking-[0.2em] uppercase mt-1">Neurosurgery Specialist</p>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-2">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.label}
                                className="relative group px-1"
                                onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    onClick={() => handleLinkClick(link.href)}
                                    className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${currentView === link.href ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'}`}
                                >
                                    {link.label}
                                    {link.subLinks && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                                </button>

                                {link.subLinks && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transition-all duration-300 ${activeDropdown === link.label ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                        <div className="glass rounded-2xl shadow-2xl border p-2">
                                            {link.subLinks.map((sub) => (
                                                <button
                                                    key={sub.label}
                                                    onClick={() => handleLinkClick(sub.href)}
                                                    className="w-full cursor-pointer text-left flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-secondary/80 hover:text-primary transition-all"
                                                >
                                                    {sub.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="h-6 w-px bg-border mx-4"></div>

                        <Link
                            href={"/#chambers"}
                            // onClick={() => handleLinkClick('about')}
                            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold shadow-xl shadow-primary/20 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2"
                        >
                            Appointment
                            <ChevronRight className="w-4 h-4" />
                        </Link>

                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 top-18 bg-background/95 backdrop-blur-lg z-50 p-6 animate-in slide-in-from-top duration-300 overflow-y-auto">
                    <div className="space-y-2">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="border-b border-border/50 pb-2">
                                <button
                                    className="flex justify-between items-center w-full py-4 text-xl font-bold text-foreground"
                                    onClick={() => handleLinkClick(link.href)}
                                >
                                    {link.label}
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={handleAppointmentClick}
                            className="w-full bg-primary text-white py-5 rounded-2xl font-bold mt-8 shadow-xl"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            )}
        </nav>

    )
}
