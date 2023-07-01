import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { GiFlowerPot, GiHandTruck } from 'react-icons/gi';

export default function COCards({ data }) {
    return (
        <div className='flex flex-col items-start'>
            <p className='text-xl font-bold mt-3 flex items-center'><FaTruck className='mr-2'/> 파트너</p>
            <div className='w-full flex my-4 overflow-x-auto whitespace-nowrap scrollbar-none'>
                {data && data.map((item) => (
                    <div key={item.id} className='flex flex-col justify-center items-center mr-6 w-30'>
                        {!item.profile_img ?
                        <div className='bg-zinc-100 p-5 text-center rounded-full mb-1'>
                              {item.category === 'MOVE' ? <FaTruck className='text-brand text-2xl'/> :
                              item.category === 'FLOWER' ? <GiFlowerPot className='text-brand text-2xl'/> :
                              <GiHandTruck className='text-brand text-2xl'/>}
                        </div> :
                        <div className='w-16 h-16'><img src={item.profile_img} className='w-full h-full rounded-full'/></div>
                        }
                        <div className='font-semibold'>{item.username}</div>
                        { 
                          item.category === 'MOVE' ? <div className='text-sm text-zinc-300'>이사</div> :
                          item.category === 'FLOWER' ? <div className='text-sm text-zinc-300'>꽃</div> :
                          <div className='text-sm text-zinc-300'>기타</div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}