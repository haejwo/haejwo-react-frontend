import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function MoveStatus({ movepk, status }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(true);

    const StatusRes = async () => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}movequotes/${movepk}/${status}/`, 
            null,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
        } catch (error) {
        console.log(error);
        }
    };
    
    return (
        <div>
            {status === 'deposit' &&
            <div>
                <div className='p-3 border border-brand rounded-lg mb-5'>
                    <p className='text-xl font-semibold mb-2'>입금이 확인되셨나요?</p>
                    <p className='mb-2'>진행 상황을 업데이트해주세요</p>
                    <p>버튼 클릭 시 <span className='text-lg text-red-500'>입금 완료</span>로 바뀝니다</p>
                </div>
                <button onClick={() => {StatusRes(); handleClick();}} className={click ? 'w-full py-2 px-4 rounded-lg font-semibold text-brand border-2 border-yellow-200' : 'w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'}>입금 확인</button>
            </div>
            }
            {status === 'preparing' &&
            <div>
                <div className='p-3 border border-brand rounded-lg mb-5'>
                    <p className='text-xl font-semibold mb-2'>이사 준비가 완료되셨나요?</p>
                    <p className='mb-2'>진행 상황을 업데이트해주세요</p>
                    <p>버튼 클릭 시 <span className='text-lg text-red-500'>준비 중</span>으로 바뀝니다</p>
                </div>
                <button onClick={() => {StatusRes(); handleClick();}} className={click ? 'w-full py-2 px-4 rounded-lg font-semibold text-brand border-2 border-yellow-200' : 'w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'}>준비 중</button>
            </div>
            }
            {status === 'completed' &&
            <div>
                <div className='p-3 border border-brand rounded-lg mb-5'>
                    <p className='text-xl font-semibold mb-2'>이사 서비스가 완료되셨나요?</p>
                    <p className='mb-2'>진행 상황을 업데이트해주세요</p>
                    <p className='mb-2'>버튼 클릭 시 <span className='text-lg text-red-500'>완료</span>로 바뀝니다</p>
                    <p>완료된 요청서는 <br/> <span className='font-bold text-lg text-red-500'>완료 탭</span>에서 확인할 수 있습니다</p>
                </div>
                <button onClick={() => {StatusRes(); handleClick();}} className={click ? 'w-full py-2 px-4 rounded-lg font-semibold text-brand border-2 border-yellow-200' : 'w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'}>서비스 완료</button>
            </div>
            }
        </div>
    );
}