import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

export function NavBar({
  items,
  className
}) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleSectionChange = (e) => {
      setActiveTab(e.detail);
    };

    window.addEventListener('section-change', handleSectionChange);

    // Initial check
    if (location.hash === '#team') setIsMobile(false); // dummy, just triggering re-render if needed or setting initial tab
    // Actually set initial tab
    if (location.hash === '#team') setActiveTab('Team');
    else if (location.hash === '#vision') setActiveTab('Vision');
    else if (location.hash === '#projects') setActiveTab('Projects');
    else if (location.hash === '#skills') setActiveTab('Skills');
    else setActiveTab('Home');

    return () => window.removeEventListener('section-change', handleSectionChange);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-auto z-50 pt-4 md:pt-6 pointer-events-none",
        className
      )}>
      <div
        className="flex items-center justify-start md:justify-center gap-2 md:gap-3 bg-white/10 border-b md:border border-white/20 backdrop-blur-lg py-3 px-4 md:py-1 md:px-1 md:rounded-full shadow-lg pointer-events-auto overflow-x-auto no-scrollbar w-full md:w-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={(e) => {
                setActiveTab(item.name)
                // Manual Scroll for instant responsiveness if on same page
                if (item.url.startsWith('/#')) {
                  const id = item.url.replace('/#', '');
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
                if (item.name === 'Home') {
                  const element = document.getElementById('home');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={cn(
                "relative cursor-pointer text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors whitespace-nowrap shrink-0",
                "text-white/80 hover:text-white",
                isActive && "bg-white/10 text-white"
              )}>
              <span className="inline">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}>
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full hidden md:block">
                    <div
                      className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div
                      className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
