import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, teamInfo } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import DecryptedText from '../components/ui/DecryptedText';

const Dashboard = ({ scrollContainerRef }) => {
    const sectionRef = React.useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        container: isMobile ? null : scrollContainerRef,
        offset: ["start start", "center start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="h-[100dvh] overflow-hidden bg-transparent">
            {/* Hero Section */}
            <section ref={sectionRef} className="h-full flex flex-col justify-center items-center text-center px-4 relative">
                <motion.div style={{ opacity }} className="z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 2, ease: "easeOut" }} // Converting into longer fade in effect
                    >
                        {/* Giant Typography */}
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter drop-shadow-2xl mb-4 flex items-center justify-center gap-4 md:gap-8 flex-wrap md:flex-nowrap">
                            <DecryptedText
                                text="KLEIN"
                                animateOn="view"
                                revealDirection="center"
                                speed={100}
                                maxIterations={20}
                                className="text-white"
                                replay={true}
                            />
                            <span className="text-[#1ed760]">X</span>

                        </h1>

                        {/* Subtitle */}
                        <div className="bg-black/40 backdrop-blur-full inline-block px-20 py-8 mt-8 rounded-full">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2.5 }} // Fades in after main text
                                className="text-sm md:text-2xl font-bold uppercase tracking-[0.2em] text-gradient"
                            >
                                We don't build ideas <br />
                                We awaken them
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
                >
                    <span className="text-xs font-bold uppercase tracking-widest"></span>
                </motion.div>
            </section>
        </div>
    );
};

export default Dashboard;
