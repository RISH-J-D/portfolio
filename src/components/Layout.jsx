import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Users, Briefcase, Eye, Cpu, Camera } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { ConnectDropdown } from "@/components/ui/ConnectDropdown";
import StaticBackground from './backgrounds/StaticBackground';

const Layout = () => {
    const location = useLocation();

    const [isNavVisible, setIsNavVisible] = useState(true);

    // Initial check for mobile view (optional if you want to be extra safe, but event should handle it)
    useEffect(() => {
        const handleToggleNav = (e) => {
            setIsNavVisible(e.detail);
        };

        window.addEventListener('toggle-navigation', handleToggleNav);
        return () => window.removeEventListener('toggle-navigation', handleToggleNav);
    }, []);

    // Scroll to top on mount if not hashing
    React.useEffect(() => {
        if (!location.hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [location.pathname]);

    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Vision', url: '/#vision', icon: Eye },
        { name: 'Skills', url: '/#skills', icon: Cpu },
        { name: 'Projects', url: '/#projects', icon: Briefcase },
        { name: 'Team', url: '/#team', icon: Users },
        { name: 'Exposure', url: '/#exposure', icon: Camera }
    ];

    return (
        <div className="min-h-screen w-full relative text-white font-sans bg-transparent flex flex-col">
            {/* Background */}
            <StaticBackground />

            {/* Desktop Navigation */}
            {isNavVisible && <NavBar items={navItems} className="hidden md:block" />}
            {isNavVisible && <ConnectDropdown />}

            {/* Mobile Navigation */}
            {isNavVisible && <MobileMenu items={navItems} className="md:hidden" />}

            {/* Main Content */}
            <main className="flex-1 w-full relative z-10">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
