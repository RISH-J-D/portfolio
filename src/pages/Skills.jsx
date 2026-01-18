import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('skills'); // 'skills' or 'tools'

    return (
        <div className="min-h-screen md:h-full w-full flex flex-col pt-24 md:pt-24 pb-4 md:pb-8 px-2 md:px-12 bg-transparent md:overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto w-full mb-2 md:mb-8 text-center flex-shrink-0">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-6"
                >
                    Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">&</span> Tools
                </motion.h1>
                <div className="flex justify-center gap-2 md:gap-6 mb-2 md:mb-6">
                    <button
                        onClick={() => setActiveTab('skills')}
                        className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-lg font-bold transition-all duration-300 ${activeTab === 'skills' ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow-lg shadow-green-500/20' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'}`}
                    >
                        SKILLS
                    </button>
                    <button
                        onClick={() => setActiveTab('tools')}
                        className={`px-4 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-lg font-bold transition-all duration-300 ${activeTab === 'tools' ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow-lg shadow-green-500/20' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'}`}
                    >
                        TOOLS
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-start md:justify-center md:overflow-y-auto no-scrollbar">
                <AnimatePresence mode='wait'>
                    {activeTab === 'skills' ? (
                        <motion.div
                            key="skills"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 h-auto md:h-full content-start md:content-center pb-20 md:pb-0"
                        >
                            {Object.entries(skillsData.skills).map(([category, items]) => (
                                <div key={category} className="bg-white/5 border border-white/10 rounded-xl p-2 md:p-5 backdrop-blur-sm flex flex-col justify-start h-full">
                                    <h3 className="text-xs md:text-xl font-bold text-gray-300 mb-2 md:mb-4 border-b border-white/10 pb-1 text-center truncate">{category}</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3 justify-items-center">
                                        {items.map((skill) => (
                                            <div key={skill.name} className="flex flex-col items-center gap-1 md:gap-2 p-1 md:p-2 rounded-lg hover:bg-white/10 transition-colors group w-full">
                                                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center p-1 md:p-2 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                                </div>
                                                <span className="text-[11px] md:text-sm font-medium text-gray-400 group-hover:text-white text-center leading-tight line-clamp-2">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="tools"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 content-start md:content-center h-auto md:h-full max-w-5xl mx-auto pb-20 md:pb-0"
                        >
                            {skillsData.tools.map((tool) => (
                                <div key={tool.name} className="flex flex-col items-center gap-2 md:gap-4 p-2 md:p-6 rounded-xl bg-white/5 border border-white/20 hover:border-green-500/30 hover:bg-green-500/50 transition-all group">
                                    <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center p-2 md:p-4 rounded-xl bg-black/30 group-hover:scale-110 transition-transform">
                                        <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                                    </div>
                                    <span className="text-[10px] md:text-lg font-bold text-gray-300 group-hover:text-white text-center">{tool.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Skills;
