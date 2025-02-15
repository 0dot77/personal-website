'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {useSpring, animated} from '@react-spring/web';

interface DotProps {
    text: string;
    hoverText: string;
    href: string;
    bgColor: string;
}

const Dot = ({ text, hoverText, href, bgColor }: DotProps) => {
    const [isHover, setIsHover] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);
    const router = useRouter();


    const expandAnimation = useSpring({
        scale: isExpanding ? 100 : 1,
        config: {tension: 180, friction: 20, duration: 1000},
        onRest: () => {
            if (isExpanding) {
                router.push(href);
            }
        }
    });

    return (
        <div className="w-20 h-20 flex flex-col items-center">
            <animated.div
                    className={`w-5 h-5 rounded-full`}
                    style={{ 
                        backgroundColor: bgColor,
                        zIndex: isExpanding ? 9999 : 1,
                        position: isExpanding ? 'fixed' : 'relative',
                        top: isExpanding ? '50%' : 'auto',
                        left: isExpanding ? '50%' : 'auto',
                        transform: isExpanding ? expandAnimation.scale.to(s => `translate(-50%, -50%) scale(${s})`) : expandAnimation.scale.to(s => `scale(${s})`),
                        transformOrigin: 'center center',
                        borderRadius: '50%',
                    }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onClick={() => setIsExpanding(true)}
                />
            <div className='mt-1 w-auto h-10 text-white cursor-default' style={{zIndex: isExpanding ? 0 : 1}}>
                {isHover ? <p>{hoverText}</p> : <p>{text}</p>}
            </div>
        </div>
    );
}

export default Dot;
