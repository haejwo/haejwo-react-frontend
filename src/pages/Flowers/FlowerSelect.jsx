import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineCheck } from 'react-icons/ai';

export default function FlowerSelect() {
    const [selectFlower, setSelectFlower] = useState('');
    const [size, setSize] = useState('');
    
    const handleClick = (id) => {
      setSelectFlower(id);
      {id === 'less100' ? setSize('SMALL') : setSize('BIG')};
    };
    
    return (
        <div className='flex flex-col items-center p-4'>
            <div className='flex'>
                <p className='font-bold text-lg my-2'>꽃/식물 크기를 선택해주세요 ( 1 / 6 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen flex justify-evenly px-6 my-4'>
                <button onClick={() => handleClick('less100')}
                    className={ selectFlower === 'less100' ? 
                    'w-1/2 mr-4 font-semibold text-brand py-2 border border-yellow-200 bg-yellow-100 rounded-md' : 
                    'w-1/2 mr-4 font-semibold text-zinc-500 py-2 border border-zinc-200 rounded-md' }>100cm 미만</button>
                <button onClick={() => handleClick('more100')}
                    className={ selectFlower === 'more100' ? 
                    'w-1/2 font-semibold text-brand py-2 border border-yellow-200 bg-yellow-100 rounded-md' : 
                    'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200 rounded-md' }>100cm 이상</button>
            </div>
            <div className='w-screen m-2 p-7'>
                {selectFlower === 'less100' ? 
                    <li className='w-full list-none p-6 text-zinc-600 bg-yellow-100 rounded-md'>
                        <ul className='mb-1 flex font-bold'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>꽃다발</ul>
                        <ul className='mb-1 flex font-bold'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>꽃바구니</ul>
                        <ul className='mb-1 flex font-bold'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>화분 포함 100cm 미만 식물</ul>
                    </li> 
                    : selectFlower === 'more100' ?
                    <li className='w-full list-none p-6 text-zinc-600 bg-yellow-100 rounded-md'>
                        <ul className='mb-1 flex font-bold'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>꽃 화환</ul>
                        <ul className='mb-1 flex font-bold'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>화분 포함 100cm 이상 식물</ul>
                    </li>
                    :
                    <li className='w-full list-none p-6 text-zinc-600 border border-zinc-400 rounded-md'>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-zinc-700'/>100cm 미만 : 꽃다발, 꽃바구니, <br/> 화분 포함 식물의 길이가 100cm 미만</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-zinc-700'/>100cm 이상 : 꽃 화환, <br/> 화분 포함 식물의 길이가 100cm 이상</ul>
                    </li>
                }
            </div>
            <div className='w-screen'>
            <Link to='datepick'>
                <button className={!selectFlower ? 'my-4 w-full py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                    'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                disabled={!selectFlower}>다음</button>
            </Link>
            </div>
        </div>
    );
}