import React from 'react';
import { motion } from 'framer-motion';
import { teamInfo } from '../data/projects';

const Vision = () => {
    return (
        <div className="h-[100dvh] w-full flex flex-col items-center justify-start md:justify-center p-4 pt-20 md:px-0 md:overflow-hidden overflow-y-auto relative">
            <div className="absolute inset-0 -z-10"></div> {/* Placeholder for bg adjustment if needed */}

            <div className="flex flex-col h-full w-full max-w-6xl mx-auto py-4 md:justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="shrink-0 text-center mb-4 md:mb-12"
                >
                    <h2 className="text-4xl md:text-7xl font-bold text-white">
                        Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">&</span> Mission
                    </h2>
                </motion.div>

                <div className="flex-1 flex flex-col justify-start md:justify-center gap-6 md:gap-16 min-h-0 w-full pb-20 md:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-4 items-center"
                    >
                        <h3 className="text-xl md:text-2xl text-green-500 uppercase tracking-[0.2em] font-bold text-center px-4 py-1 border border-green-500/50 rounded-full bg-black/20 backdrop-blur-sm">The Vision</h3>
                        <p className="text-lg md:text-3xl font-light text-white leading-relaxed md:leading-relaxed text-center max-w-5xl mx-auto">
                            "{teamInfo.vision}"
                        </p>
                    </motion.div>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-3/4 mx-auto shrink-0 md:hidden"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-4 items-center"
                    >
                        <h3 className="text-xl md:text-2xl text-green-500 uppercase tracking-[0.2em] font-bold text-center px-4 py-1 border border-green-500/50 rounded-full bg-black/20 backdrop-blur-sm">The Mission</h3>
                        <p className="text-lg md:text-3xl font-light text-white leading-relaxed md:leading-relaxed text-center max-w-5xl mx-auto">
                            {teamInfo.mission}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
