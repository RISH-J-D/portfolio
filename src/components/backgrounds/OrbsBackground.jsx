import React, { useEffect, useRef } from 'react';

const OrbsBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let orbs = [];
        let animationFrameId;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initOrbs();
        };

        const initOrbs = () => {
            orbs = [];
            for (let i = 0; i < 15; i++) {
                orbs.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 100 + 50,
                    dx: (Math.random() - 0.5) * 0.5,
                    dy: (Math.random() - 0.5) * 0.5,
                    color: `hsla(${Math.random() * 60 + 100}, 70%, 50%, 0.1)` // Greenish/Teal hues for Team
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = '#080808';
            ctx.fillRect(0, 0, width, height);

            orbs.forEach(orb => {
                orb.x += orb.dx;
                orb.y += orb.dy;

                if (orb.x < -orb.radius || orb.x > width + orb.radius) orb.dx *= -1;
                if (orb.y < -orb.radius || orb.y > height + orb.radius) orb.dy *= -1;

                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
                ctx.fillStyle = orb.color;
                ctx.fill();
            });

            // Blur effect
            ctx.filter = 'blur(40px)'; // Heavy blur for bokeh

            // Note: Canvas filter support varies, fallback might be needed but standard in modern browsers.
            // Reset filter for next frame clear if needed (though we overwrite)
            // Actually filling rect with blur active might blur the whole scene? 
            // Better to compose: Draw orbs, then apply blur? 
            // In 2D context, filter applies to drawing operations. 
            // So we set filter, draw orbs.

            animationFrameId = requestAnimationFrame(animate);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" style={{ filter: 'blur(30px)' }} />;
};

export default OrbsBackground;
