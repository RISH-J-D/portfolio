import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import ReactDOM from 'react-dom';

const Exposure = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Dynamically import all images from the exposure folder
    const images = useMemo(() => {
        const imageModules = import.meta.glob('../assets/exposure/*.{png,jpg,jpeg,svg,webp}', { eager: true });
        return Object.values(imageModules).map((mod) => mod.default);
    }, []);

    // Scroll Lock for Lightbox
    React.useEffect(() => {
        if (selectedImage) {
            window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: true }));
        } else {
            window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: false }));
        }
        return () => window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: false }));
    }, [selectedImage]);

    return (
        <div className="h-full w-full flex flex-col pt-24 md:pt-24 pb-4 md:pb-8 px-2 md:px-12 bg-transparent overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto w-full mb-8 text-center flex-shrink-0">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-6"
                >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Exposure</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto"
                >
                    A glimpse into our journey and moments captured along the way.
                </motion.p>
            </div>

            {/* Content Area - Masonry Layout */}
            <div className="max-w-7xl mx-auto w-full flex-grow overflow-y-auto no-scrollbar pb-20">
                {images.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500 border-2 border-dashed border-gray-700 rounded-xl">
                        <p className="text-xl">No images found.</p>
                        <p className="text-sm">Add images to <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-300">src/assets/exposure</code></p>
                    </div>
                ) : (
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-2">
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                                data-logo-collision="true"
                                className="break-inside-avoid relative rounded-xl overflow-hidden group border border-white/10 hover:border-pink-500/50 transition-all duration-300 cursor-pointer bg-white/5"
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt={`Exposure ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Modal - Portal */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={32} />
                            </button>
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                src={selectedImage}
                                alt="Full screen view"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default Exposure;
