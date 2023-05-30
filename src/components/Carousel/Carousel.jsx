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
        <div className='w-100 h-10 flex items-center my-3'>
            {slides.map((slide, idx) => (
                <div key={idx} className={`w-100 h-100 ease-in-out bg-brand w-full py-6 text-lg font-semibold text-zinc-600 text-center rounded-md ${slide.color} ${idx === currentSlide ? 'translate-x-0' : 'hidden'}`}>
                    {slide.text}
                </div>
            ))}
        </div>
    );
}