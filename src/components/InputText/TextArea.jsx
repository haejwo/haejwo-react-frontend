import React from 'react';

export default function TextArea({ title, placeholder, row, value, handleChange }) {

    return (
        <div className='w-full flex justify-center my-4 flex-col'>
            <p className='font-bold my-3 text-lg'>{title}</p>
            <textarea placeholder={placeholder} 
                onChange={handleChange}
                rows={row}
                value={value}
                className='border boreder-zinc-200 rounded-md text-md p-2 mb-2'/>
        </div>
    );
}