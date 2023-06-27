import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import MoveStatus from '../../api/MoveStatus';

export default function COMoveStatus({ list, onClose, pk }) {
    const data = list.filter(item => item.id === pk)[0];
    console.log(data);
    return (
        <div className='p-4'>
            <div className='w-full p-2 mb-4 flex justify-center items-center'>
                <p className='text-xl text-center text-zinc-600 font-semibold'>이사 {pk} 진행 상황</p>
                <div onClick={onClose}><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></div>
            </div>
            {data.status === 'MATCHED' ? 
                <MoveStatus movepk={data.id} status='deposit'/> :
            data.status === 'DEPOSIT' ?
            <MoveStatus movepk={data.id} status='preparing'/> :
            data.status === 'PREPARING' ?
                <div>완료</div> : ''
            }
        </div>
    );
}