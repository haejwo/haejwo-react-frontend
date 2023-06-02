import React, { useState } from 'react';

export default function Buttons({ buttonList, title, onValueSelect }) {
    const [buttonSelect, setButtonSelect] = useState('');
    const handleClick = (btn) => {setButtonSelect(btn); onValueSelect(title, btn); };
    return (
        <div className='w-full p-4'>
            <p className='text-lg font-bold mb-3'>{title}</p>
            <div className='grid grid-cols-2 gap-1'>
                {buttonList.map((btn, idx) => (
                    <button key={idx} onClick={() => handleClick(btn)}
                        className={buttonSelect === btn ? 
                            'font-semibold rounded-md text-brand border py-2 px-4 border-yellow-200 bg-yellow-100' : 
                            'font-semibold rounded-md text-zinc-500 py-2 px-4 border border-zinc-200'}>{btn}</button>
                ))}
            </div>
        </div>
    );
}