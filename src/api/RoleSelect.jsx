import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { saveRole } from '../app/useractions';

export default function RoleSelect({ onRoleSelect, onCheck }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const userInfo = useSelector(state => state.user.user);
    const [userRole, setUserRole] = useState('CU');
    const handleClick = (role) => { setUserRole(role); onRoleSelect(role); };
 
    const [roleCheck, setRoleCheck] = useState(false);
    const handleCheck = (prev) => { setRoleCheck(!prev); onCheck(!prev); };
 
    const dispatch = useDispatch();
    const roleRes = async () => {
        const token = cookies.token;
        
        try {
            const res = await axios.put(`${backURL}accounts/user/`, 
            {"email": userInfo.email, "role": userRole},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            dispatch(saveRole(userRole));
        } catch (error) {
        console.log(error);
        }
    };
    return (
        <div className='w-full flex flex-col items-center p-4'>
            <p className='font-bold text-lg my-3'>이용하실 유저 정보를 입력해주세요</p>
            <div className='w-full flex justify-center my-4'>
                <button onClick={() => handleClick('CU')} disabled={roleCheck}
                    className={ userRole === 'CU' ? 
                    'w-1/2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200' }>고객</button>
                <button onClick={() => handleClick('CO')} disabled={roleCheck}
                    className={ userRole === 'CO' ? 
                    'w-1/2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200' }>사업자</button>
            </div>
            <div className='w-full flex flex-col items-center p-4 text-zinc-600 bg-yellow-100 rounded-md'>
                <p className='mb-2'>선택하신 유저 정보는 <span className='font-bold text-lg'>{userRole === 'CU' ? '고객' : '사업자'}</span>입니다.</p>
                <p className='font-semibold text-red-600'>하단 버튼 클릭 시 유저 정보 변경 불가!</p>
            </div>
            <button onClick={() => {roleRes(); handleCheck();}} 
                className={!roleCheck ? 'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                disabled={roleCheck}>{userRole === 'CU' ? '고객' : '사업자'}(으)로 이용합니다
            </button>
        </div>
    );
}