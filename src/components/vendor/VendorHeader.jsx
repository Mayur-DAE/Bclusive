import { Bell, Home, Mail, Settings, ShoppingBag, Star } from "lucide-react";
import './vendorHeader.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const VendorHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full p-4 bg-primary-dark h-18">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <img
                        src="https://staging.bclusive.com/Vendors/assets/img/logo-w.png"
                        alt="Logo"
                        className="mb-4 md:mb-0 w-32"
                    />

                    {/* Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex flex-col items-center"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-1 bg-white mb-1"></div>
                        <div className="w-6 h-1 bg-white mb-1"></div>
                        <div className="w-6 h-1 bg-white"></div>
                    </button>
                </div>


                {/* Navigation Links */}
                <nav
                    className={`flex-col lg:flex-row items-center gap-6 lg:justify-center text-white text-sm ${isMenuOpen ? 'flex' : 'hidden'} lg:flex  w-full lg:w-auto`}
                    aria-expanded={isMenuOpen}
                >
                    <a href="/vendor" className={`flex items-center gap-2 px-[15px] lg:px-0 justify-start lg:justify-center w-full lg:w-auto ${location.pathname === '/vendor' ? 'active' : ''}`}><Home /><span>Home</span></a>
                    <a href="/vendor/storefront" className={`flex items-center gap-2 px-[15px] lg:px-0 justify-start lg:justify-center w-full lg:w-auto ${location.pathname === '/vendor/storefront' ? 'active' : ''}`}><ShoppingBag /><span>Storefront</span></a>
                    <a href="/vendor/messages" className={`flex items-center gap-2 px-[15px] lg:px-0 justify-start lg:justify-center w-full lg:w-auto ${location.pathname === '/vendor/messages' ? 'active' : ''}`}><Mail /><span>Messages</span></a>
                    <a href="/vendor/reviews" className={`flex items-center gap-2 px-[15px] lg:px-0 justify-start lg:justify-center w-full lg:w-auto ${location.pathname === '/vendor/reviews' ? 'active' : ''}`}><Star /><span>Review</span></a>
                    <a href="/vendor/settings" className={`flex items-center gap-2 px-[15px] lg:px-0 justify-start lg:justify-center w-full lg:w-auto ${location.pathname === '/vendor/settings' ? 'active' : ''}`}><Settings /><span>Setting</span></a>
                </nav>

                {/* User Info Section */}
                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex items-center gap-4 justify-start w-full lg:w-auto lg:justify-center text-white divide-x mt-4 md:mt-0`}
                >
                    <div className="p-2">
                        <Bell aria-label="Notifications" />
                    </div>
                    <div className="flex items-center justify-center gap-4 pl-4">
                        <img
                            src="https://staging.bclusive.com/Vendors/assets/img/profile-img.jpg"
                            alt="Profile"
                            className="h-10 w-10 rounded-full"
                        />
                        <div>
                            <p className="text-md font-bold">Abraham Lincoln</p>
                            <p className="text-xs text-gray-200">abraham@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

