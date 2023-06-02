import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function ItemBtn({ item, img, plus, minus }) {
    const [cnt, setCnt] = useState(0);
    const handlePlus = () => { setCnt((prev) => prev + 1); plus(); };
    const handleMinus = () => { setCnt((prev) => ( prev === 0 ? prev : prev - 1)); minus(); };
    
    return (
        <div className='w-full px-4 pb-4 relative flex flex-col items-center'>
            <p className='text-center'>{item}</p>
            <img src={img} alt="" />
            <div className='flex justify-around mb-6'>
                <button onClick={handleMinus} className='p-1 bg-brand opacity-80 absolute bottom-1/5 left-4'><AiOutlineMinus className='text-white' /></button>
                <p className='font-bold text-xl absolute bottom-1/5'>{cnt}</p>
                <button onClick={handlePlus} className='p-1 bg-brand opacity-80 absolute bottom-1/5 right-4'><AiOutlinePlus className='text-white'/></button>
            </div>
        </div>
    );
}

