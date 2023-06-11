import React, { useState } from 'react';
import TextArea from '../../components/InputText/TextArea';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft, AiOutlineCheckCircle } from 'react-icons/ai';

export default function Memo() {
    const [memo, setMemo] = useState('');
    
    return (
        <div className='w-screen flex flex-col items-center p-4'>
            <div className='flex'>
                <Link to='/flower/address'><AiOutlineDoubleLeft className='text-zinc-400 mt-2.5 mr-2 text-2xl'/></Link>
                <p className='font-bold text-lg my-2'>추가 정보를 입력해주세요 ( 4 / 5 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen border-b-4 border-bottom-zinc-400 mt-6'>
                <div className='flex flex-col items-center mt-3'>
                    <div className='w-4/5 p-4 text-zinc-500 border-2 border-brand rounded'>
                        <p className='mb-2 text-lg font-semibold text-red-500'>필수 입력 사항 체크리스트</p>
                        <p className='flex items-center'><AiOutlineCheckCircle className='mr-1'/>주소지 관련 추가 정보</p>
                        <p className='flex items-center my-1'><AiOutlineCheckCircle className='mr-1'/>꽃/식물 관련 주의사항</p>
                        <p className='flex items-center'><AiOutlineCheckCircle className='mr-1'/>기타 요청 사항</p>
                    </div>
                </div>
                <div className='p-4'>
                    <TextArea title='주의사항 및 요청사항' placeholder='주의사항 및 요청사항을 입력해주세요' row='8' handleChange={(e) => {setMemo(e.target.value);}} value={memo}/>
                </div>
            </div>            
            <Link to='/flower/img'>
                <button className='my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>다음</button>
            </Link>
        </div>
    );
}