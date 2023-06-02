import React, { useState } from 'react';
import ItemBtn from './ItemBtn';

export default function LuggageItems() {
    const [cnt, setCnt] = useState(0);
    const handlePlus = () => setCnt((prev) => prev + 1);
    const handleMinus = () => setCnt((prev) => ( prev === 0 ? prev : prev - 1));
    
    console.log(cnt);
    return (
        <div className='w-screen grid grid-cols-3 gap-0'>
            <ItemBtn item='침대' img="https://cdn-icons-png.flaticon.com/128/3030/3030336.png" plus={handlePlus} minus={handleMinus}/>
            <ItemBtn/>
            <ItemBtn/>
            <ItemBtn/>
        </div>
    );
}

