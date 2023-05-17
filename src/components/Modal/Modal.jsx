import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }
    
    return (
        <div className='fixed top-0 left-0 w-screen h-2/5 z-10 bg-yellow-100 flex flex-col justify-center items-center'>
          <div className="bg-white p-9 rounded-md w-90">
            {children}
          </div>
          <button onClick={onClose} className='text-zinc-500 text-lg mt-3'>확인</button>
        </div>
    );
}