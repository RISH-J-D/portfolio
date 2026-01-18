import React, { useEffect, useRef } from 'react';

const ShootingStarsBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let stars = [];
        let shootingStars = [];
        let animationFrameId;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < 200; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5,
                    opacity: Math.random()
                });
            }
        };

        const createShootingStar = () => {
            if (Math.random() < 0.05) {
                shootingStars.push({
                    x: Math.random() * width,
                    y: 0,
                    length: Math.random() * 50 + 10,
                    speed: Math.random() * 10 + 5,
                    opacity: 1
                });
            }
        };

        const animate = () => {
            ctx.fillStyle = '#050510'; // Deep space blue/black
            ctx.fillRect(0, 0, width, height);

            // Static Stars
            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Shooting Stars
            createShootingStar();
            shootingStars.forEach((star, index) => {
                star.x -= star.speed;
                star.y += star.speed;
                star.opacity -= 0.02;

                ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(star.x + star.length, star.y - star.length);
                ctx.stroke();

                if (star.opacity <= 0) {
                    shootingStars.splice(index, 1);
                }
            });

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

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />;
};

export default ShootingStarsBackground;
