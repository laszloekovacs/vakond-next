"use client"
import React from "react";
import { useTrail, animated } from "@react-spring/web";

const items = [
    "Initializing system...",
    "Loading assets...",
    "Connecting to server...",
    "Authentication complete.",
    "Welcome to the console!"
];

export default function ConsoleList() {
    const trail = useTrail(items.length, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 }, // fade speed
        delay: 300, // wait before starting
    });


    return (
        <div className="bg-black text-green-400 font-mono p-4">
            {trail.map((style, index) => (
                <animated.div
                    key={index}
                    style={style}
                    className="mb-1"
                >
                    {items[index]}
                </animated.div>
            ))}
        </div>
    );
}
