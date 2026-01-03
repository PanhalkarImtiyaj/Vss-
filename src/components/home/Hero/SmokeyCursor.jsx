import React, { useEffect, useRef } from 'react';

const StardustCursor = ({ active = true }) => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 4 + 1; // Slightly larger for better visibility
                this.speedX = (Math.random() - 0.5) * 3;
                this.speedY = (Math.random() - 0.5) * 3;

                // Premium Color Palette: Blue, Purple, Magenta
                const colors = [
                    '#3b82f6', // Bright Blue
                    '#8b5cf6', // Violet
                    '#d946ef', // Fuchsia
                    '#06b6d4'  // Cyan
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];

                this.life = 1;
                this.decay = Math.random() * 0.015 + 0.008; // Slower decay for more trail
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= this.decay;
                if (this.size > 0.1) this.size -= 0.04;
            }

            draw() {
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;

                // Add stronger glow effect
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.color;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const handleMouseMove = (e) => {
            if (!active) return;
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Increase particle count for more "pure animation" feel
            for (let i = 0; i < 5; i++) {
                particles.current.push(new Particle(e.clientX, e.clientY));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.current.length; i++) {
                particles.current[i].update();
                particles.current[i].draw();

                if (particles.current[i].life <= 0) {
                    particles.current.splice(i, 1);
                    i--;
                }
            }

            ctx.shadowBlur = 0; // Reset for next frame
            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'screen',
                opacity: active ? 0.8 : 0, // Slightly transparent for professionalism
                transition: 'opacity 0.5s ease'
            }}
        />
    );
};

export default StardustCursor;
