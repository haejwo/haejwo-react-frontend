import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function MoveDeposit({ movepk }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(true);

    const DepositRes = async () => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}movequotes/${movepk}/deposit/`, 
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
            <div className='p-3 border border-brand rounded-lg mb-5'>
                <p className='text-xl font-semibold mb-2'>입금이 확인되셨나요?</p>
                <p className='mb-2'>진행 상황을 업데이트해주세요</p>
                <p>버튼 클릭 시 <span className='text-lg text-red-500'>준비 중</span>으로 바뀝니다</p>
            </div>
            <button onClick={() => {DepositRes(); handleClick();}} className={click ? 'w-full py-2 px-4 rounded-lg font-semibold text-brand border-2 border-yellow-200' : 'w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'}>입금 확인</button>
        </div>
    );
}