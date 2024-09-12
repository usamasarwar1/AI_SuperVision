"use client"
import Image from "next/image";
import { useRef } from "react";
import gsap from 'gsap';

export default function Home({image, className}) {
    const plane1 = useRef(null);

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        const offsetX = window.innerWidth / 2; 
        const offsetY = window.innerHeight / 2;
        const moveFactor = 0.05; 

        const newX = (clientX - offsetX) * moveFactor;
        const newY = (clientY - offsetY) * moveFactor;

        gsap.to(plane1.current, { x: newX, y: newY, duration: 0.3, ease: 'power2.out' });
    }

    return (
        <main onMouseMove={(e) => {manageMouseMove(e)}} className="relative">
            <div ref={plane1}>
                <Image
                    src={image}
                    alt="image"
                    width={800}
                    height={800}
                    className={className}
                />
               
            </div>
        </main>
    )
}
