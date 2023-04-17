import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { GiFlowerPot, GiHandTruck } from 'react-icons/gi';

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <div className='w-screen p-3 bg-zinc-100'>
                <div className='font-logo text-3xl text-yellow-400'>해줘</div>
                <p className='font-bold text-zinc-700 my-2'>원하는 서비스를 선택해주세요</p>
                <button className='flex w-full justify-between bg-white border border-zinc-300 rounded-md p-5 my-2'>
                    <div className='flex flex-col items-start'>
                        <p className='text-2xl font-bold'>이사</p>
                        <p className='text-sm text-zinc-400 mb-1 mt-2'>합리적인 가격으로 맞춤이사</p>
                        <p className='text-sm text-zinc-400'>소규모이사도 가능! </p>
                    </div>
                    <div className='mt-14 text-3xl text-yellow-500'><FaTruck/></div>
                </button>
                <div className='w-full flex justify-between'>
                    <button className='w-1/2 justify-between flex bg-white border border-zinc-300 rounded-md p-5 mr-2'>
                        <div className='flex flex-col items-start'>
                            <p className='text-2xl font-bold'>꽃</p>
                            <p className='text-sm text-zinc-400 mb-1 mt-2'>경조사를 위한</p>
                        </div>
                        <div className='mt-8 text-3xl text-yellow-500'><GiFlowerPot/></div>
                    </button>
                    <button className='w-1/2 flex justify-between bg-white border border-zinc-300 rounded-md p-5'>
                        <div className='flex flex-col items-start'>
                            <p className='text-2xl font-bold'>기타</p>
                            <p className='text-sm text-zinc-400 mb-1 mt-2'>맞춤 배송</p>
                        </div>
                        <div className='mt-8 text-4xl text-yellow-500'><GiHandTruck/></div>
                    </button>
                </div>
            </div>
            <div className='w-screen p-3'>
                <div className='flex flex-col items-start'>
                    <p>0개의 리뷰</p>
                    <div>리뷰카드</div>
                </div>
            </div>
            <div>
                캐러셀광고
            </div>
            <div className='w-screen p-3'>
                <div className='flex flex-col items-start'>
                    <p>파트너</p>
                    <div>파트너카드</div>
                </div>
            </div>
        </main>
    );
}