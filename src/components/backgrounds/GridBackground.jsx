import React, { useEffect, useRef } from 'react';

const GridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;
        let offset = 0;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const drawGrid = (offset) => {
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, width, height);

            const gridSize = 40;
            const perspective = 300;
            const horizon = height * 0.4; // Horizon line position

            ctx.strokeStyle = 'rgba(0, 255, 0, 0.15)'; // Green retro grid
            ctx.lineWidth = 1;

            // Vertical lines (converging)
            for (let x = -width; x < width * 2; x += gridSize * 2) {
                ctx.beginPath();
                ctx.moveTo(x - (width / 2) * (horizon / height), horizon);
                ctx.lineTo((x - width / 2) * 4 + width / 2, height);
                ctx.stroke();
            }

            // Horizontal lines (moving down)
            const speed = 0.5;
            const totalLines = 20;

            for (let i = 0; i < totalLines; i++) {
                const z = (i * gridSize + offset) % (gridSize * totalLines);
                const y = height - (height - horizon) * (perspective / (perspective + z));

                if (y > horizon) {
                    ctx.beginPath();
                    ctx.moveTo(0, y);
                    ctx.lineTo(width, y);
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            offset = (offset + 1) % (40 * 20);
            drawGrid(offset);
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

export default GridBackground;
