import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { GiFlowerPot, GiHandTruck } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Carousel from '../../components/Carousel/Carousel';
import COProfile from '../../api/COProfile';
import 광고1 from '../../assets/광고1.png';
import 광고2 from '../../assets/광고2.png';
import 광고3 from '../../assets/광고3.png';

export default function Home() {
    const slides = [
        {
            img : 광고1
        },
        {
            img : 광고2
        },
        {
            img : 광고3
        }
    ]
    const userInfo = useSelector(state => state.user.user);
    
    return (
        <main className='flex flex-col items-center'>
            <div className='w-screen bg-zinc-100 py-6 px-3'>
                <div className='font-logo text-4xl text-brand'>해줘</div>
                <Link to={userInfo.username ? '/move' : '/login'} className='flex w-full justify-between bg-white border border-zinc-300 rounded-md p-5 my-4'>
                    <div className='flex flex-col items-start'>
                        <p className='text-2xl font-bold'>이사</p>
                        <p className='text-sm text-zinc-400 mb-1 mt-2'>합리적인 가격으로 맞춤이사</p>
                        <p className='text-sm text-zinc-400'>소규모이사도 가능! </p>
                    </div>
                    <div className='mt-14 text-3xl text-brand'><FaTruck/></div>
                </Link>
                <div className='w-full flex justify-between'>
                    <Link to={userInfo.username ? '/flower' : '/login'} className='w-1/2 justify-between flex bg-white border border-zinc-300 rounded-md p-5 mr-2'>
                        <div className='flex flex-col items-start'>
                            <p className='text-2xl font-bold'>꽃<span className='text-lg text-zinc-400 font-thin'>&</span>식물</p>
                            <p className='text-sm text-zinc-400 mb-1 mt-2'>경조사를 위한</p>
                        </div>
                        <div className='mt-8 text-3xl text-brand'><GiFlowerPot/></div>
                    </Link>
                    <button className='w-1/2 flex justify-between bg-white border border-zinc-300 rounded-md p-5'>
                        <div className='flex flex-col items-start'>
                            <p className='text-2xl font-bold'>기타</p>
                            <p className='text-sm text-zinc-400 mb-1 mt-2'>맞춤 배송</p>
                        </div>
                        <div className='mt-8 text-4xl text-brand'><GiHandTruck/></div>
                    </button>
                </div>
            </div>
            <div className='w-screen p-3'>
                <div className='flex flex-col items-start'>
                    <p className='text-xl font-bold my-3'>1개의 리뷰</p>
                    <div>
                        <div className='flex flex-col bg-zinc-100 p-4 rounded-md h-50 overflow-y-scroll'>
                            <p className='text-brand text-xl mb-2'>★★★★★ <span className='mt-2 text-zinc-400 text-sm font-semibold'>이사이사 파트너님</span></p>
                            <p>리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다. 리뷰 예시입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen p-3'>
                <Carousel slides={slides} intervalTime={3000}/>
            </div>
            <div className='w-screen p-3'>
                <COProfile/>
            </div>
        </main>
    );
}