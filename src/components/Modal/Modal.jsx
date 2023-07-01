import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className='fixed top-0 left-0 w-screen h-2/5 z-10 bg-[rgb(250,204,21,0.6)] flex flex-col justify-center items-center'>
            <div className="bg-[rgb(250,248,242,0.9)] p-9 rounded-md w-90">
                {children}
            </div>
            <button onClick={onClose} className='text-zinc-500 text-lg mt-3'>확인</button>
        </div>
    );
}