import React from 'react';

export default function InputText({ title, placeholder, value, handleChange }) {
    return (
        <div className='w-full flex justify-center my-4 flex-col'>
            <p className='font-bold my-3 text-lg'>{title}</p>
            <input type="text" placeholder={placeholder} 
                value={value} onChange={handleChange} 
                className='border boreder-zinc-200 rounded-md text-md p-2 mb-2'/>
        </div>
    );
}

