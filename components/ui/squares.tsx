"use client";
import { useTheme } from 'next-themes';
import { useRef, useEffect, useState } from 'react';

const Squares = ({
    direction = 'diagonal',
    speed = 0.5,
    borderColor = '#999',
    hoverFillColor = '#222', // Default hover color set to semi-transparent red
    children,
    className,
    id,
    squaresRef,
}: {
    direction?: 'diagonal' | 'right' | 'left' | 'up' | 'down',
    borderColor?: string;
    speed?: number;
    hoverFillColor?: string;
    children: React.ReactNode;
    id?: string;
    className?: string;
    squaresRef: any;
}) => {
    const { resolvedTheme } = useTheme();

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);
    const squareSize = 50; // Square size set to 50px
    const numSquaresX = useRef<number>(100);
    const numSquaresY = useRef<number>(100);
    const gridOffset = useRef({ x: 0, y: 0 });
    const [hoveredSquare, setHoveredSquare] = useState<{ x: number | null, y: number | null }>({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !numSquaresX || !numSquaresY) return;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

        const resizeCanvas = (): void => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
            numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawGrid = (): void => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (numSquaresX.current && numSquaresY.current)
                for (let x = 0; x < numSquaresX.current ?? 0; x++) {
                    for (let y = 0; y < numSquaresY.current ?? 0; y++) {
                        const squareX = (x * squareSize) + (gridOffset.current.x % squareSize);
                        const squareY = (y * squareSize) + (gridOffset.current.y % squareSize);

                        // Set the border color
                        if (resolvedTheme == 'light')
                            ctx.strokeStyle = '#000000';
                        else
                            ctx.strokeStyle = borderColor;
                        ctx.strokeRect(squareX, squareY, squareSize, squareSize);
                    }
                }

            // Draw radial gradient overlay
            const gradient: CanvasGradient = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
            );

            gradient.addColorStop(0, resolvedTheme == 'light' ? '#ffffff00' : '#11111100'); // Transparent center
            gradient.addColorStop(1, resolvedTheme == 'light' ? '#ffffff' : '#111111'); // Black edge

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const updateAnimation = (): void => {
            switch (direction) {
                case 'right':
                    gridOffset.current.x -= speed;
                    break;
                case 'left':
                    gridOffset.current.x += speed;
                    break;
                case 'down':
                    gridOffset.current.y += speed;
                    break;
                case 'up':
                    gridOffset.current.y -= speed;
                    break;
                case 'diagonal':
                    gridOffset.current.x -= speed;
                    gridOffset.current.y -= speed;
                    break;
                default:
                    break;
            }

            if (Math.abs(gridOffset.current.x) > squareSize) gridOffset.current.x = 0;
            if (Math.abs(gridOffset.current.y) > squareSize) gridOffset.current.y = 0;
            drawGrid();
            requestRef.current = requestAnimationFrame(updateAnimation);
        };


        requestRef.current = requestAnimationFrame(updateAnimation);

        return () => {
            if (requestRef.current) {
                window.removeEventListener('resize', resizeCanvas);
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, resolvedTheme]);

    return <div ref={squaresRef} className={className} id={id} >
        {children}
        <canvas ref={canvasRef} className='absolute top-0 left-0 w-full -z-20 h-full opacity-30 border-none '>
        </canvas>
    </div>;
};

export default Squares;