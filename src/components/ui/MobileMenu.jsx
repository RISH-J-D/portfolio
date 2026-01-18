import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, X, Phone, Instagram, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function MobileMenu({ items, className }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isConnectOpen, setIsConnectOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isConnectOpen) setIsConnectOpen(false);
    };

    const toggleConnect = () => {
        setIsConnectOpen(!isConnectOpen);
        if (isOpen) setIsOpen(false);
    };

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setIsConnectOpen(false);
    }, [location.pathname, location.hash]);

    return (
        <>
            {/* Mobile Header Bar */}
            <div className={cn("fixed top-0 left-0 right-0 h-16 z-50 md:hidden flex items-center justify-between px-4 bg-transparent bg-gradient-to-b from-black/80 to-transparent", className)}>
                {/* Logo Section (Left) */}
                <div className="flex items-center gap-3 mix-blend-difference drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]">
                    <img src={logo} alt="KLEIN X Logo" className="w-6 h-6 object-contain" />
                    <div className="flex flex-col justify-center items-start leading-[0.8]">
                        <span className="text-white font-black text-sm tracking-tighter uppercase">
                            KLEIN <span className="text-[#1ed760]">X</span>
                        </span>
                    </div>
                </div>

                {/* Actions (Right) */}
                <div className="flex items-center gap-2">
                    {/* Menu Trigger */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg z-50 relative"
                    >
                        {isOpen ? <X size={20} /> : <MoreVertical size={20} />}
                    </button>

                    {/* Connect Trigger */}
                    <button
                        onClick={toggleConnect}
                        className={cn(
                            "p-2 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg z-50 relative transition-colors",
                            isConnectOpen ? "bg-white/20" : "bg-white/10"
                        )}
                    >
                        <Phone size={20} />
                    </button>
                </div>
            </div>

            {/* Main Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="fixed top-16 right-4 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-40 md:hidden"
                    >
                        <div className="flex flex-col py-2">
                            {items.map((item) => {
                                const Icon = item.icon;
                                const isActive =
                                    location.hash === item.url.replace("/", "") ||
                                    (item.url === "/" && location.pathname === "/" && !location.hash);

                                return (
                                    <Link
                                        key={item.name}
                                        to={item.url}
                                        onClick={() => {
                                            if (item.url.startsWith('/#')) {
                                                const id = item.url.replace('/#', '');
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            } else if (item.url === '/') {
                                                const element = document.getElementById('home');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }
                                            }
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10",
                                            isActive ? "text-white bg-white/5" : "text-white/70"
                                        )}
                                    >
                                        <Icon size={18} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Connect Dropdown */}
            <AnimatePresence>
                {isConnectOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20, x: 20 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className="fixed top-16 right-4 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-40 md:hidden"
                    >
                        <div className="flex flex-col py-2">
                            {[
                                { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
                                { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
                                { name: 'Email', icon: Mail, url: 'mailto:contact@example.com' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target={item.name === 'Email' ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <item.icon size={18} />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
