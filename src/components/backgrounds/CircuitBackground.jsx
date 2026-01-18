import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let paths = [];
        let animationFrameId;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initPaths();
        };

        class CircuitPath {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.history = [{ x: this.x, y: this.y }];
                this.maxLength = Math.random() * 100 + 50;
                this.speed = 2;
                this.direction = Math.floor(Math.random() * 4); // 0: up, 1: right, 2: down, 3: left
                this.life = 0;
                this.hue = 180 + Math.random() * 40; // Cyan/Blue range
            }

            update() {
                this.life++;
                if (this.life > this.maxLength) {
                    this.reset();
                    return;
                }

                if (Math.random() < 0.05) {
                    this.direction = (this.direction + (Math.random() < 0.5 ? 1 : 3)) % 4;
                }

                if (this.direction === 0) this.y -= this.speed;
                else if (this.direction === 1) this.x += this.speed;
                else if (this.direction === 2) this.y += this.speed;
                else if (this.direction === 3) this.x -= this.speed;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > 20) this.history.shift();
            }

            draw() {
                ctx.strokeStyle = `hsla(${this.hue}, 70%, 50%, 0.3)`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.history[0].x, this.history[0].y);
                for (let i = 1; i < this.history.length; i++) {
                    ctx.lineTo(this.history[i].x, this.history[i].y);
                }
                ctx.stroke();

                // Head
                ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, 1)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initPaths = () => {
            paths = [];
            for (let i = 0; i < 30; i++) {
                paths.push(new CircuitPath());
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'; // Trail effect
            ctx.fillRect(0, 0, width, height);

            // Draw faint grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = 1;
            const size = 50;
            ctx.beginPath();
            for (let x = 0; x < width; x += size) {
                ctx.moveTo(x, 0); ctx.lineTo(x, height);
            }
            for (let y = 0; y < height; y += size) {
                ctx.moveTo(0, y); ctx.lineTo(width, y);
            }
            ctx.stroke();

            paths.forEach(path => {
                path.update();
                path.draw();
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

export default CircuitBackground;
