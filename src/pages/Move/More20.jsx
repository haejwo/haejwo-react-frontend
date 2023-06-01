import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePacking, saveSupport } from '../../app/moveactions';

export default function More20() {
    const dispatch = useDispatch();
    
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);
    const handleSave = () => {
        dispatch(savePacking('PACKING'));
        dispatch(saveSupport(false));
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col items-center p-4'>
                <p className='font-bold text-lg my-3'>이사 종류를 선택해주세요 ( 1 / 6 )</p>
            </div>
            <div className='flex flex-col items-center p-4'>
                <div> 
                    <img src="https://img.freepik.com/free-vector/house-moving-concept-illustration_23-2148651548.jpg?w=900&t=st=1682227403~exp=1682228003~hmac=61172ad9ad408a41376b40f734eb0b9decad8c68be7c39c72cfe12ef820d5aa3" alt="" />
                    <p className='text-2xl font-bold my-4'>전문 이사</p>
                    <p>규모가 큰 포장이사를 전문으로 하는 업체에서 보양작업, 포장, 운반, 이동, 정리 등 전체적인 이사 서비스를 제공합니다. 고객 요청에 따라 추가 서비스도 제공받을 수 있습니다.</p>
                </div>
            </div>
            <div className='w-full p-4'>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>주요 차량</p>
                    <p className='font-bold text-lg'>2.5톤 ~ 5톤</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>업체 구성</p>
                    <p className='font-bold text-lg'>가정 이사 전문 업체</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>평균 작업 인원</p>
                    <p className='font-bold text-lg'>3명 이상</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>추천 평수</p>
                    <p className='font-bold text-lg'>20평 ~ 30평</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>추가 서비스</p>
                    <p className='font-bold text-lg'>업체별 제공</p>
                </div>
            </div>
            <div className='w-screen'>
                <div className='w-full bg-zinc-100 p-4'>
                    <p className='text-lg font-semibold my-3'>서비스 이용 전 <span className='text-red-600 font-bold'>필수 체크 사항</span> !</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 방문견적 진행 후 최종 견적서를 확인합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 이사 전까지 귀중품 및 고가의 상품은 별도로 확인 및 보관합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반된 짐의 파손이나 분실여부를 확인합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 도착지에서 가구의 짐이 배치될 곳을 안내합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 완료된 이사를 파트너님과 함께 검수합니다.</p>
                </div>
            </div>
            <div className='my-3'>
                <input type="checkbox" name="" id="check" value={checked} onChange={handleChange} />
                <label htmlFor="check" className='text-lg font-bold'> 필수 체크 사항을 확인했습니다.</label>
            </div>
            <Link to='/datepick'><button onClick={handleSave} className={!checked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
            'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                disabled={!checked}>다음</button></Link>
            { checked ? '' : <p className='mb-2 text-red-400'>필수 체크 사항을 확인해주세요!</p> }
        </div>
    );
}