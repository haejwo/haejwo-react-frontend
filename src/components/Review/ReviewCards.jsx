import React from 'react';
import { BsPencilSquare, BsStarFill, BsStar } from 'react-icons/bs';
import moment from 'moment';

export default function ReviewCards({ COdata, review }) {

    return (
        <div className='mt-4 w-[364px]'>
            <p className='text-xl font-bold my-3 flex items-center text-zinc-600'><BsPencilSquare className='mr-2'/> {review && review.length} 개의 리뷰</p>
            <div className='w-full flex my-4 overflow-hidden whitespace-nowrap scrollbar-none'>
                {review && COdata && review.map((list, idx) => (
                <div key={idx} className='mr-6 flex flex-col bg-zinc-100 p-4 rounded-md min-w-[364px]'>
                    <div className='text-brand text-xl mb-1 flex items-center'>
                        {list.rating === 1 ? <div className='flex'><BsStarFill /><BsStar/><BsStar/><BsStar/><BsStar/></div> : 
                         list.rating === 2 ? <div className='flex'><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/></div> : 
                         list.rating === 3 ? <div className='flex'><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></div> : 
                         list.rating === 4 ? <div className='flex'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div> : <div className='flex'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>} 
                        <div className='text-[1rem] text-zinc-400 ml-2'>{moment(list.created_at).format("YY-MM-DD")}</div>
                    </div>
                    <div className='mb-2 text-zinc-500 text-[1rem] font-semibold flex'>{COdata.map((data, idx) => (<p key={idx}>{data.id === list.company ? data.username : ''}</p>))}<span className='ml-1'>파트너님</span></div>
                    <div className='whitespace-pre-wrap overflow-y-auto scrollbar-none'>{list.comment}</div>
                </div>
                ))}
            </div>
        </div>
    );
}

