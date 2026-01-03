import React, { useRef, useEffect } from 'react';

interface GridOffset {
    x: number;
    y: number;
}

interface SquaresProps {
    direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
    speed?: number;
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
    className?: string;
}

/**
 * Squares Component
 * A highly optimized canvas-based grid background with smooth motion and interactive hover states.
 */
const Squares: React.FC<SquaresProps> = ({
    direction = 'diagonal',
    speed = 0.4,
    borderColor = 'rgba(0, 0, 0, 0.05)',
    squareSize = 60,
    hoverFillColor = 'rgba(0, 0, 0, 0.03)',
    className = ""
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);
    const gridOffset = useRef<GridOffset>({ x: 0, y: 0 });
    const hoveredSquareRef = useRef<GridOffset | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            if (ctx) ctx.scale(dpr, dpr);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawGrid = () => {
            if (!ctx || !canvas) return;
            const width = canvas.width / (window.devicePixelRatio || 1);
            const height = canvas.height / (window.devicePixelRatio || 1);

            ctx.clearRect(0, 0, width, height);

            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            ctx.lineWidth = 0.5;
            ctx.strokeStyle = borderColor;

            for (let x = startX - squareSize; x < width + squareSize; x += squareSize) {
                for (let y = startY - squareSize; y < height + squareSize; y += squareSize) {
                    const squareX = x - (gridOffset.current.x % squareSize);
                    const squareY = y - (gridOffset.current.y % squareSize);

                    // Hover state
                    if (
                        hoveredSquareRef.current &&
                        Math.floor((x - startX) / squareSize) === hoveredSquareRef.current.x &&
                        Math.floor((y - startY) / squareSize) === hoveredSquareRef.current.y
                    ) {
                        ctx.fillStyle = hoverFillColor;
                        ctx.fillRect(squareX, squareY, squareSize, squareSize);
                    }

                    ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                }
            }

            // Technical Fade Overlay
            const gradient = ctx.createRadialGradient(
                width / 2,
                height / 2,
                0,
                width / 2,
                height / 2,
                Math.sqrt(width ** 2 + height ** 2) / 2
            );
            gradient.addColorStop(0, 'rgba(243, 243, 243, 0)');
            gradient.addColorStop(1, 'rgba(243, 243, 243, 1)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const updateAnimation = () => {
            const effectiveSpeed = Math.max(speed, 0.1);
            switch (direction) {
                case 'right':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'left':
                    gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'up':
                    gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'down':
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                    break;
                case 'diagonal':
                    gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
                    gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
                    break;
            }

            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
            const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

            const hoveredSquareX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
            const hoveredSquareY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

            hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
        };

        const handleMouseLeave = () => {
            hoveredSquareRef.current = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [direction, speed, borderColor, hoverFillColor, squareSize]);

    return (
        <canvas
            ref={canvasRef}
            className={`w-full h-full border-none block ${className}`}
            style={{ imageRendering: 'auto' }}
        />
    );
};

export default Squares;
