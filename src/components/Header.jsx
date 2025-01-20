/* eslint-disable react/prop-types */
"use client";

import { Search, X, UserPlus, LogIn } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = ({ isHeaderVisible }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const locations = [
        "Toronto",
        "Montreal",
        "Vancouver",
        "Ottawa - Gatineau",
    ];

    useEffect(() => {
        if (isHeaderVisible) setIsVisible(true);

        const handleScroll = () => {
            if (isHeaderVisible) return;

            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isHeaderVisible]);

    return (
        <header className={`${isHeaderVisible ? 'relative' : 'fixed'} top-0 left-0 w-full z-[1000] bg-white flex flex-wrap items-center justify-between px-4 py-3 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <img className="h-6" src='https://staging.bclusive.com/assets/img/Logos.png' />

            <div className="flex flex-wrap items-center justify-end gap-4 w-full md:w-auto">
                <select className="bg-transparent text-primary-dark/80 outline-none mb-2 md:mb-0 hidden sm:block">
                    <option>Location</option>
                    {locations.map(t => (
                        <option key={t.replace(' ', '_')} className="text-primary-dark font-semibold">{t}</option>
                    ))}
                </select>
                {showSearchInput && (
                    <div className="flex items-center mb-2 md:mb-0">
                        <input
                            type="text"
                            className="bg-transparent text-primary-dark/80 outline-none border-b border-primary-text-primary-dark/80"
                            placeholder="Search..."
                        />
                        <X
                            className="text-primary-dark/80 cursor-pointer ml-2"
                            size={20}
                            onClick={() => setShowSearchInput(false)}
                        />
                    </div>
                )}
                {!showSearchInput && (
                    <Search
                        className="text-primary-dark/80 cursor-pointer mb-2 md:mb-0"
                        size={20}
                        onClick={() => setShowSearchInput(true)}
                    />
                )}

                <div className="popular-btn flex gap-2 items-center justify-center bg-primary-dark text-white rounded-full h-[40px] px-4 py-2 md:mb-0">
                    <UserPlus className="text-white" size={20} />
                </div>
                <div className="popular-btn flex gap-2 items-center justify-center bg-secondary text-primary-dark rounded-full h-[40px] px-4 py-2">
                    <LogIn className="text-primary-dark" size={20} />
                </div>
            </div>
        </header>
    )
}
