import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { teamMembers } from '../data/team';
import ProjectCard from '../components/ProjectCard'; // Using the new summary card
import { X, Code, ExternalLink, Calendar } from 'lucide-react';

import { useLocation } from 'react-router-dom';

import ReactDOM from 'react-dom';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const scrollRef = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        if (location.hash === '#projects' && scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [location]);

    // Ensure nav is visible when unmounting or leaving
    React.useEffect(() => {
        return () => {
            window.dispatchEvent(new CustomEvent('toggle-navigation', { detail: true }));
            window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: false }));
        };
    }, []);

    const handleOpenProject = (project) => {
        setSelectedProject(project);
        window.dispatchEvent(new CustomEvent('toggle-navigation', { detail: false }));
        window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: true }));
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
        window.dispatchEvent(new CustomEvent('toggle-navigation', { detail: true }));
        window.dispatchEvent(new CustomEvent('toggle-scroll-lock', { detail: false }));
    };

    return (
        <div className="md:h-screen md:overflow-hidden w-full flex flex-col pt-20 md:pt-28 pb-0 px-6 md:px-12 bg-transparent min-h-screen h-auto relative">
            {/* Header - Static on Desktop, Sticky on Mobile */}
            <div className="max-w-7xl mx-auto w-full mb-8 text-center flex-shrink-0 sticky top-16 md:static z-30 py-4 md:py-0 bg-transparent md:bg-transparent backdrop-blur-none md:backdrop-blur-none">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-white mb-3"
                >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Work</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-[#b3b3b3] max-w-2xl mx-auto"
                >
                    Explore our innovative solutions and technical breakthroughs.
                </motion.p>
            </div>

            {/* Scrollable Content Area */}
            <div ref={scrollRef} className="md:flex-1 md:overflow-y-auto custom-scrollbar w-full pb-12 h-auto overflow-visible">
                {/* Grid Layout */}
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <ProjectCard
                                project={project}
                                onClick={() => handleOpenProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal - Portal */}
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={handleCloseProject}
                                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                            />

                            {/* Modal Content */}
                            <motion.div
                                layoutId={`project-${selectedProject.id}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={handleCloseProject}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all"
                                >
                                    <X size={20} />
                                </button>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto custom-scrollbar p-4 md:p-10 w-full">
                                    <div className="mb-4">
                                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                                            {selectedProject.title}
                                        </h2>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.techStack.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#2a2a2a] text-green-400 rounded-full border border-green-500/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    {/* Contributions Section */}
                                    <div className="border-t border-white/10 pt-4">
                                        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6 uppercase tracking-wider">
                                            <Code size={20} className="text-green-500" />
                                            Team Contributions
                                        </h3>

                                        <div className="flex flex-wrap justify-center gap-4">
                                            {Object.entries(selectedProject.contributions).map(([memberId, contribution]) => {
                                                const member = teamMembers.find(m => m.id === parseInt(memberId));
                                                if (!member) return null;

                                                return (
                                                    <div key={memberId} className="w-full md:w-[calc(50%-0.5rem)] flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-12 h-12 rounded-full object-cover border-2 border-white/10 shrink-0"
                                                        />
                                                        <div>
                                                            <span className="block font-bold text-white mb-1">{member.name}</span>
                                                            <p className="text-sm text-gray-400 leading-relaxed">{contribution}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default Projects;
