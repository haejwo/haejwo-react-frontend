import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineCheck } from 'react-icons/ai';

export default function MoveSelect() {
    const [selectMove, setSelectMove] = useState('');
  
    const handleClick = (id) => {
      setSelectMove(id);
    }
    return (
        <div className='flex flex-col items-center p-4'>
            <div className='flex'>
                <p className='font-bold text-xl my-2'>이사규모를 선택해주세요.</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen flex justify-evenly px-6 my-4'>
                <button onClick={() => handleClick('less20')}
                    className={ selectMove === 'less20' ? 
                    'w-1/2 mr-4 font-semibold text-brand py-2 border border-yellow-200 bg-yellow-100 rounded-md' : 
                    'w-1/2 mr-4 font-semibold text-zinc-500 py-2 border border-zinc-200 rounded-md' }>20평대 미만</button>
                <button onClick={() => handleClick('more20')}
                    className={ selectMove === 'more20' ? 
                    'w-1/2 font-semibold text-brand py-2 border border-yellow-200 bg-yellow-100 rounded-md' : 
                    'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200 rounded-md' }>20평대 이상</button>
            </div>
            <div className='w-screen m-2 p-7'>
                {selectMove === 'less20' ? 
                    <li className='w-full list-none p-6 text-zinc-600 bg-yellow-100 rounded-md'>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/><span className='font-bold'>원룸, 투룸, 20평대 미만</span>에 적합</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>맞춤 선택으로 합리적인 이사서비스</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>주요차량 : 1톤 ~ 2.5톤 트럭</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>이사종류 : 일반 / 반포장 / 포장</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>평균 작업 인원 : 2명 이하</ul>
                    </li> 
                    : selectMove === 'more20' ?
                    <li className='w-full list-none p-6 text-zinc-600 bg-yellow-100 rounded-md'>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/><span className='font-bold'>쓰리룸, 20평대 이상</span>에 적합</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>전문 이사 업체로 편리한 이사서비스</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>주요차량 : 2.5 ~ 5톤 트럭</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>이사종류 : 전문 포장</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-yellow-500'/>평균 작업 인원 : 3명 이상</ul>
                    </li>
                    :
                    <li className='w-full list-none p-6 text-zinc-600 border border-zinc-400 rounded-md'>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-zinc-700'/>20평대 미만 : 원룸, 투룸</ul>
                        <ul className='mb-1 flex'><AiOutlineCheck className='mt-1 mr-2 text-zinc-700'/>20평대 이상 : 쓰리룸 이상</ul>
                    </li>
                }
            </div>
            <div className='w-screen p-7'>
                {selectMove === 'less20' ? 
                    <button className='w-full py-2 border border-brand bg-brand rounded-md text-white font-bold'>20평대 미만 이사하기</button>
                : selectMove === 'more20' ?
                    <button className='w-full py-2 border border-brand bg-brand rounded-md text-white font-bold'>20평대 이상 이사하기</button>
                : ''
                }
            </div>
        </div>
    );
}

