import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import InputText from '../components/InputText/InputText';

export default function MoveComment({ pk, onClose }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const navigate = useNavigate()
    const [amounts, setAmounts] = useState(0);

    const CommentRes = async () => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}movequotes/${pk}/comments/`, 
            {"amount": amounts},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            navigate('/list');
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <div className='p-4'>
            <div className='w-full p-2 mb-4 flex justify-center items-center'>
                <p className='text-xl text-center text-zinc-600 font-semibold'>이사 요청서 {pk} 견적 입력</p>
                <div onClick={onClose}><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></div>
            </div>
            <div className='mb-5'>
                <InputText title='견적 가격을 입력하세요' placeholder='숫자만 입력하세요' value={amounts} handleChange={(e) => setAmounts(e.target.value.replace(/\D/g, ''))}/>
                <p className='text-red-500 mb-3 font-bold'>숫자만 입력할 수 있습니다!</p>
                <p className='text-red-500 mb-3 font-bold'>여러 번 요청 시, <br/> 가장 마지막에 보내진 가격으로 변경됩니다.</p>
            </div>
            <button onClick={() => {onClose(); CommentRes();}} className='my-4 w-full py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>보내기</button>
        </div>
    );
}