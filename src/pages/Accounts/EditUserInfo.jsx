import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbLicense, TbTruckDelivery } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import EditCUInfo from '../../api/EditCUInfo';

export default function EditUserInfo() {
    const userInfo = useSelector(state => state.user);
    
    return (
        <div className="flex flex-col justify-center p-4">
            {userInfo.role === 'CU' ? 
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex'>
                        <p className='font-bold text-lg my-3'>고객 정보 변경</p>
                        <Link to='/profile'><RxCross2 className='text-zinc-400 mt-4 ml-1 text-lg' /></Link>
                    </div>
                    <div className='w-screen'>
                        <div className='border border-brand m-4 p-3 rounded-md text-center'>현재 유저명 : <span className='font-semibold text-lg'> {userInfo.username}</span></div>
                        <EditCUInfo/>
                    </div>
                </div> : 
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex'>
                        <p className='font-bold text-lg my-3'>변경사항을 선택해주세요</p>
                        <Link to='/profile'><RxCross2 className='text-zinc-400 mt-4 ml-1 text-lg' /></Link>
                    </div>
                    <div className='flex w-full justify-around mt-4'>
                        <Link to='/editco' className='w-1/2 mr-2 flex flex-col items-center justify-center border border-brand p-4 rounded-md'>
                            <TbTruckDelivery className='text-3xl mb-1 text-zinc-500'/>사업자 정보 변경
                        </Link>
                        <Link to='/businessfileuploader' className='w-1/2 flex flex-col items-center justify-center border border-brand p-4 rounded-md'>
                            <TbLicense className='text-3xl mb-1 text-zinc-500'/>사업자등록증 변경
                        </Link>
                    </div>
                </div> 
            }
        </div>
    );
}