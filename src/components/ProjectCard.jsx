import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            data-logo-collision="true"
            className="glass-card group cursor-pointer relative overflow-hidden hover:bg-white/5 transition-all duration-300 h-full flex flex-col"
            whileHover={{ y: -5 }}
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white/50" size={20} />
            </div>

            <div className="p-6 flex flex-col h-full">
                <div className="mb-4 flex-grow">
                    <span className="inline-flex p-2 rounded-lg bg-green-500/10 text-green-500 mb-4 ring-1 ring-green-500/20">
                        <Layers size={20} />
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-[#b3b3b3] text-base leading-relaxed line-clamp-4">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-500 border border-white/5">
                                +{project.techStack.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
