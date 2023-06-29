import React, { useEffect, useState } from 'react';

export default function Carousel({ slides, intervalTime }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, intervalTime);

        return () => {
            clearInterval(timer);
        };
    }, [slides.length, intervalTime]);

    return (
        <div className='flex items-center'>
            {slides.map((slide, idx) => (
                <div key={idx} className={`w-100 ease-in-out ${idx === currentSlide ? 'translate-x-0' : 'hidden'}`}>
                    <img className='w-full h-full object-cover rounded-lg' src={slide.img} />
                </div>
            ))}
        </div>
    );
}