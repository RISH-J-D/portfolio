import React, { useEffect, useRef } from 'react';
import Dashboard from './Dashboard';
import Vision from './Vision';
import Projects from './Projects';
import Team from './Team';
import Skills from './Skills';
import Exposure from './Exposure';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Home = () => {
    const location = useLocation();
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const [logoOpacity, setLogoOpacity] = React.useState(1);

    // Collision Detection Logic
    const checkLogoCollision = () => {
        if (!logoRef.current) return;

        const logoRect = logoRef.current.getBoundingClientRect();
        const centerX = logoRect.left + logoRect.width / 2;
        const centerY = logoRect.top + logoRect.height / 2;

        // Get all elements at the logo's center position
        const elements = document.elementsFromPoint(centerX, centerY);

        // Check if any element is a "card" or "image" (collidable)
        // CRITICAL: Exclude the logo itself from collision detection to prevent self-hiding
        const isOverlapping = elements.some(el => {
            // Ignore if the element is inside the logo container
            if (logoRef.current && logoRef.current.contains(el)) return false;

            // Check for our custom attribute ONLY. 
            // We removed tagName === 'IMG' because the static background image covers the whole screen.
            return el.closest('[data-logo-collision="true"]');
        });

        setLogoOpacity(isOverlapping ? 0 : 1);
    };

    // Scroll to section handling
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const activeIndexRef = useRef(0);
    const sections = ['Home', 'Vision', 'Skills', 'Projects', 'Team', 'Exposure'];

    const handleContainerScroll = (e) => {
        const container = e.target;
        checkLogoCollision(); // Check collision on scroll

        const index = Math.round(container.scrollTop / container.clientHeight);

        if (index !== activeIndexRef.current && index >= 0 && index < sections.length) {
            activeIndexRef.current = index;
            const sectionName = sections[index];
            window.dispatchEvent(new CustomEvent('section-change', { detail: sectionName }));
        }
    };

    // Mobile Scroll Handler (Window Scroll)
    useEffect(() => {
        let ticking = false;

        const handleWindowScroll = () => {
            // Throttled Collision Detection
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkLogoCollision();
                    ticking = false;
                });
                ticking = true;
            }

            if (window.innerWidth >= 768) return; // Skip on desktop/tablet where container scrolls

            const scrollPosition = window.scrollY + window.innerHeight / 3; // Trigger earlier

            // Find which section is currently in view
            let currentIndex = 0;
            for (let i = 0; i < sections.length; i++) {
                const element = document.getElementById(sections[i].toLowerCase());
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        currentIndex = i;
                        break;
                    }
                }
            }

            if (currentIndex !== activeIndexRef.current) {
                activeIndexRef.current = currentIndex;
                const sectionName = sections[currentIndex];
                window.dispatchEvent(new CustomEvent('section-change', { detail: sectionName }));
            }
        };

        window.addEventListener('scroll', handleWindowScroll);
        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, []);

    // Scroll Lock Handler
    useEffect(() => {
        const handleScrollLock = (e) => {
            const shouldLock = e.detail;

            // Nuclear Scroll Lock strategy
            const root = document.getElementById('root');
            const html = document.documentElement;
            const body = document.body;

            if (shouldLock) {
                html.style.overflow = 'hidden';
                body.style.overflow = 'hidden';
                body.style.overscrollBehavior = 'none'; // Prevent bounce
                if (root) root.style.overflow = 'hidden';

                if (containerRef.current) {
                    containerRef.current.style.overflowY = 'hidden';
                    containerRef.current.style.scrollSnapType = 'none';
                }
            } else {
                html.style.overflow = '';
                body.style.overflow = '';
                body.style.overscrollBehavior = '';
                if (root) root.style.overflow = '';

                if (containerRef.current) {
                    containerRef.current.style.overflowY = 'scroll';
                    containerRef.current.style.scrollSnapType = 'y mandatory';
                }
            }
        };

        window.addEventListener('toggle-scroll-lock', handleScrollLock);
        return () => window.removeEventListener('toggle-scroll-lock', handleScrollLock);
    }, []);

    return (
        <div
            ref={containerRef}
            onScroll={handleContainerScroll}
            className="md:h-screen w-full md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth no-scrollbar min-h-screen relative overflow-x-hidden"
        >
            {/* Global Logo & Brand - Fixed */}
            <div
                ref={logoRef}
                style={{ opacity: logoOpacity, transition: 'opacity 0.3s ease-in-out' }}
                className="hidden md:flex fixed top-2 left-6 md:top-2 md:left-16 z-50 items-center gap-4 mix-blend-difference drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]"
            >
                <img src={logo} alt="KLEIN X Logo" className="w-10 h-10 md:w-10 md:h-10 object-contain" />
                <div className="flex flex-col justify-center items-start leading-[0.8]">
                    <span className="text-white font-black text-lg md:text-3xl tracking-tighter uppercase">
                        KLEIN <span className="text-[#1ed760]">X</span>
                    </span>
                </div>
            </div>

            {/* Dashboard Section */}
            <section id="home" className="min-h-screen md:h-screen w-full md:snap-start relative md:overflow-hidden">
                <div className="relative z-10 h-full w-full pointer-events-none">
                    <div className="pointer-events-auto h-full">
                        <Dashboard scrollContainerRef={containerRef} />
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="min-h-screen md:h-screen w-full md:snap-start relative md:overflow-hidden">
                <div className="relative z-10 h-full w-full pointer-events-none">
                    <div className="pointer-events-auto h-full">
                        <Vision />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen md:h-screen w-full md:snap-start relative md:overflow-hidden">
                <div className="relative z-10 h-full w-full pointer-events-none">
                    <div className="pointer-events-auto h-full">
                        <Skills />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen md:h-screen w-full md:snap-start relative md:overflow-hidden">
                <div className="relative z-10 h-full w-full pointer-events-none">
                    <div className="pointer-events-auto h-full">
                        <Projects />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="min-h-screen md:h-screen w-full md:snap-start relative md:overflow-hidden">
                <div className="relative z-10 h-full w-full pointer-events-none">
                    <div className="pointer-events-auto h-full">
                        <Team />
                    </div>
                </div>
            </section>

            {/* Exposure Section */}
            <section id="exposure" className="min-h-screen md:h-screen w-full md:snap-start relative md:overflow-hidden">
                <div className="relative z-10 h-full w-full pointer-events-none">
                    <div className="pointer-events-auto h-full">
                        <Exposure />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
