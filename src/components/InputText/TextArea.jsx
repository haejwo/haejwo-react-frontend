import React, { useState } from 'react';

export default function TextArea({ title, placeholder, row, handleChange }) {
    const [text, setText] = useState('');
    const handleText = (e) => {
        const updateValue = e.target.value;
        setText(updateValue);
        handleChange(title, updateValue);
    }

    return (
        <div className='w-full flex justify-center my-4 flex-col'>
            <p className='font-bold my-3 text-lg'>{title}</p>
            <textarea placeholder={placeholder} 
                onChange={handleText}
                rows={row}
                className='border boreder-zinc-200 rounded-md text-md p-2 mb-2'/>
        </div>
    );
}