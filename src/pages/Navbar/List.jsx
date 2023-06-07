import React from 'react';
import MoveList from '../../api/MoveList';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

export default function List() {
    
    return (
        <div className='w-screen p-4'>
            <div className='flex justify-center'>
                <p className='font-bold text-xl my-2'>요청 목록</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
        <MoveList/>
        </div>
    );
}