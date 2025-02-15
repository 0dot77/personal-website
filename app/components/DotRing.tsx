'use client'
import { useEffect, useState } from 'react';
import Dot from './Dot';

interface DotRingProps {
    text: string;
    hoverText: string;
    href: string;
    bgColor: string;
}

const DotRing = ({dots}: {dots: DotRingProps[]}) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let animationFrameId: number;
        let startTime: number | null = null;

        const speed = 0.01;

        const animate = (currentTime:number) => {
            if(!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;

            setRotation(elapsed * speed);
            animationFrameId = requestAnimationFrame(animate);
        }

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if(animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    }, []);
    
    return (
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            {/* 중앙 원 */}
            <div className="w-16 h-16 bg-red-500 rounded-full" />
            
            {/* 회전하는 Dots */}
            <div 
                className="absolute w-full h-full"
                style={{
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                {dots.map((dot, index) => {
                    const angle = (360 / dots.length) * (index + 1);
                    const radius = 100; // 원의 반지름
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);

                    return (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                transform: `translate(${x}px, ${y}px) rotate(-${rotation}deg)`,
                                left: '50%',
                                top: '50%',
                                marginLeft: '-10px',
                                marginTop: '-10px',
                            }}
                        >
                            <Dot {...dot} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DotRing;
