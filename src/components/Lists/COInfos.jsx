import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

export default function COInfos({ list, onClose, pk }) {
    const data = list.map((item) => {if (item.id === pk) return item});

    
    console.log(data);
    return (
        <div className='p-4'>
            <div className='w-full p-2 mb-4 flex justify-center items-center'>
                <p className='text-xl text-center text-zinc-600 font-semibold'>사업자 정보 확인</p>
                <div onClick={onClose}><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></div>
            </div>
            
        </div>
    );
}

