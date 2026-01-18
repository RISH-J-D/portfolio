import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import ReactDOM from 'react-dom';

const ResumeModal = ({ isOpen, onClose, resumeUrl, memberName }) => {
    React.useEffect(() => {
        if (isOpen) {
            window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: true }));
        } else {
            window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: false }));
        }
        return () => {
            // Cleanup: ensure we unlock if component unmounts while open
            window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: false }));
        }
    }, [isOpen]);

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-black/95 backdrop-blur-md"
                    onClick={onClose}
                >
                    {/* ... (keep existing content) ... */}
                    <div
                        className="relative w-full max-w-5xl h-full md:h-[90vh] flex flex-col items-center justify-center rounded-none md:rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Floating Controls */}
                        <div className="absolute top-4 left-4 md:top-4 md:right-4 md:left-auto z-50 flex items-center gap-2 p-2">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-black/50 text-white rounded-full hover:bg-green-600 transition-colors backdrop-blur-sm border border-white/10 shadow-lg"
                                title="Open in new tab"
                            >
                                <ExternalLink size={20} />
                            </a>
                            <button
                                onClick={onClose}
                                className="p-3 bg-black/50 text-white rounded-full hover:bg-red-600 transition-colors backdrop-blur-sm border border-white/10 shadow-lg"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Resume Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full h-full overflow-y-auto rounded-none md:rounded-lg shadow-2xl bg-[#1e1e1e] flex items-start justify-center p-0.5"
                        >
                            <img
                                src={resumeUrl}
                                alt={`${memberName}'s Resume`}
                                className="max-w-full h-auto object-contain min-h-full md:min-h-0"
                            />
                        </motion.div>

                        {/* Minimal Caption */}
                        <div className="absolute bottom-8 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-medium border border-white/10 pointer-events-none z-50">
                            Viewing {memberName}'s Resume
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ResumeModal;
