import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import LuggageItems from '../../components/LuggageItems/LuggageItems';

export default function Luggage() {
    const infos = useSelector(state => state.move.move);
    
    return (
        <div className='flex flex-col items-center p-4'>
            <div className='flex'>
                <p className='font-bold text-xl my-2'>짐 정보를 입력해주세요</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div>
                <LuggageItems/>
            </div>
        </div>
    );
}

