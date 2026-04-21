import React, { useEffect, useState } from "react";

export default function CursorDot() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        let frame;

        const animate = () => {
            setSmoothPos((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.15,
                y: prev.y + (position.y - prev.y) * 0.15,
            }));

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, [position]);

    return (
        <div
            className="fixed w-3 h-3 bg-black rounded-full pointer-events-none z-9999"
            style={{
                transform: `translate(${smoothPos.x}px, ${smoothPos.y}px)`
            }}
        />
    );
}