import React, { useState } from 'react';
import { Phone, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ConnectDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/kleinx.online', color: 'hover:text-pink-500' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/klein-x', color: 'hover:text-blue-500' },
        { name: 'Email', icon: Mail, url: 'mailto:kleinx.online@gmail.com', color: 'hover:text-yellow-500' }
    ];

    return (
        <div
            className="fixed top-6 right-6 z-50 hidden md:flex flex-col items-end"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="group flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-lg py-2 px-4 rounded-full shadow-lg cursor-pointer text-white/80 hover:text-green-500 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300">
                <span className="font-semibold text-sm group-hover:text-green-500 transition-colors">Connect with us</span>
                <Phone size={18} className="transition-transform group-hover:scale-110" />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 min-w-[160px] bg-black/90 border border-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-xl"
                    >
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target={item.name === 'Email' ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-green-500 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-transparent block w-full text-left"
                            >
                                <item.icon size={16} />
                                <span className="text-sm">{item.name}</span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
