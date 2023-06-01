import React, { useState } from 'react';
import { HiOutlineMapPin, HiMapPin } from 'react-icons/hi2';
import AddressDetail from '../../components/AddressDetail/AddressDetail';

export default function Address() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleClick = () => { setIsModalVisible(true); };
    return (
        <div className='w-screen p-4'>
            <div className='w-full text-center mb-8'>
                <p className='font-bold text-lg my-3'>출발지와 도착지를 입력해주세요 ( 3 / 6 )</p>
            </div>
            <div className='w-full'>
                <button onClick={handleClick} className='w-full border border-zinc-400 rounded flex flex-col p-3'>
                  <p className='text-xl font-semibold flex'>출발지 상세정보 <span><HiOutlineMapPin className='text-zinc-400 mt-1'/><HiMapPin/></span></p>
                  <p className='text-lg text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>서울특별시 강서구 무슨무슨동 뭐뭐로9길 (모야모야동)</p>
                  <div className='flex'>
                    <p>아파트</p>
                    <p>투룸</p>
                    <p>10~15평</p>
                    <p>4층</p>
                  </div>
                  <div className='flex'>
                    <p>1층 계단 있음</p>
                    <p>엘리베이터 있음</p>
                    <p>주차 가능</p>
                  </div>
                </button>
                { isModalVisible && 
                  <div className='fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <p className='text-xl font-bold text-center my-5'>출발지 정보를 입력하세요</p>
                    <AddressDetail/>
                    <button onClick={() => setIsModalVisible(false)}>Close</button>
                  </div>
                }
                {/* <button className={!checked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                    disabled={!checked}>다음</button>
                { checked ? '' : <p className='mb-2 text-red-400'>필수 체크 사항을 확인해주세요!</p> } */}
            </div>
        </div>
    );
}