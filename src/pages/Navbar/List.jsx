import React, { useState } from 'react';
import MoveList from '../../api/MoveList';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import MoveMatchedList from '../../api/MoveMatchedList';

export default function List() {
    const [status, setStatus] = useState('all');
    const handleClick = (value) => setStatus(value);

    return (
        <div className='w-screen p-4'>
            <div className='flex justify-center'>
                <p className='font-bold text-xl my-2'>요청 목록</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-full flex justify-center my-4'>
                <button onClick={() => handleClick('all')}
                    className={ status === 'all' ? 
                    'w-1/3 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/3 font-semibold text-zinc-500 py-2 border border-zinc-200' }>전체</button>
                <button onClick={() => handleClick('matched')}
                    className={ status === 'matched' ? 
                    'w-1/3 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/3 font-semibold text-zinc-500 py-2 border border-zinc-200' }>매칭</button>
                <button onClick={() => handleClick('completed')}
                    className={ status === 'completed' ? 
                    'w-1/3 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/3 font-semibold text-zinc-500 py-2 border border-zinc-200' }>완료</button>
            </div>
            {status === 'all' ? <MoveList/> : status === 'matched' ? <MoveMatchedList/> : '완료'}
        </div>
    );
}