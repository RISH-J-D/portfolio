import React, { useEffect, useRef } from 'react';

const HexagonBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let hexagons = [];
        let animationFrameId;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initHexagons();
        };

        const initHexagons = () => {
            hexagons = [];
            const hexSize = 50; // Radius of hexagon
            const rowHeight = hexSize * 1.5;
            const colWidth = hexSize * Math.sqrt(3);

            const rows = Math.ceil(height / rowHeight) + 1;
            const cols = Math.ceil(width / colWidth) + 1;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const xOffset = (r % 2) * (colWidth / 2);
                    const x = c * colWidth + xOffset;
                    const y = r * rowHeight;

                    hexagons.push({
                        x, y,
                        size: hexSize,
                        opacity: 0,
                        targetOpacity: Math.random() * 0.6 + 0.1, // Increased opacity range (0.1 - 0.7)
                        flickerSpeed: Math.random() * 0.02 + 0.005
                    });
                }
            }
        };

        const drawHexagon = (x, y, size) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const hx = x + size * Math.cos(angle);
                const hy = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        };

        const animate = () => {
            ctx.fillStyle = '#050505'; // Dark background
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 2; // Thicker lines

            hexagons.forEach(hex => {
                // Flicker effect
                hex.opacity += (Math.random() - 0.5) * hex.flickerSpeed;
                if (hex.opacity < 0) hex.opacity = 0;
                if (hex.opacity > hex.targetOpacity) hex.opacity = hex.targetOpacity;

                ctx.strokeStyle = `rgba(0, 255, 128, ${hex.opacity})`; // Full opacity for stroke
                ctx.fillStyle = `rgba(0, 255, 128, ${hex.opacity * 0.15})`; // Subtle fill

                drawHexagon(hex.x, hex.y, hex.size * 0.95); // Slightly smaller for spacing
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

export default HexagonBackground;
