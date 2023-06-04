import React, { useState } from 'react';
import TextArea from '../../components/InputText/TextArea';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveMemo } from '../../app/moveactions';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

export default function Memo() {
    console.log(useSelector(state => state.move.move.content));
    const [memo, setMemo] = useState({});
    const handleText = (title, text) => { 
        const updateText = {...memo, [title]: text};
        setMemo(updateText); 
    };

    const dispatch = useDispatch();
    const handleSave = () => { dispatch(saveMemo(memo)); }

    
    return (
        <div className='w-screen flex flex-col items-center p-4'>
            <div className='flex'>
                <Link to='/luggage'><AiOutlineDoubleLeft className='text-zinc-400 mt-2.5 mr-2 text-2xl'/></Link>
                <p className='font-bold text-lg my-2'>추가 정보를 입력해주세요 ( 5 / 6 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen border-b-4 border-bottom-zinc-400 mt-6'>
                <p className='text-xl font-bold px-4'>주소지 관련 추가 사항을 입력하세요</p>
                <div className='p-4'>
                    <TextArea title='출발지 추가 사항' placeholder='출발지 관련 추가 사항을 입력해주세요' row='3' handleChange={handleText}/>
                    <TextArea title='도착지 추가 사항' placeholder='도착지 관련 추가 사항을 입력해주세요' row='3' handleChange={handleText}/>
                </div>
            </div>
            <div className='w-screen border-b-4 border-bottom-zinc-400 mt-6'>
                <p className='text-xl font-bold px-4'>짐 정보 관련 추가 사항을 입력하세요</p>
                <div className='p-4'>
                    <TextArea title='짐 정보 추가 사항' placeholder='짐 정보 관련 추가 사항을 입력해주세요' row='6' handleChange={handleText}/>
                </div>
            </div>
            <div className='w-screen border-b-4 border-bottom-zinc-400 mt-6'>
                <p className='text-xl font-bold px-4'>그 외 요청 사항을 입력하세요</p>
                <div className='p-4'>
                    <TextArea title='요청 사항' placeholder='요청 사항을 입력해주세요' row='6' handleChange={handleText}/>
                </div>
            </div>            
            <Link to='/memo'>
                <button onClick={handleSave} className='my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>다음</button>
            </Link>
        </div>
    );
}