import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsername, saveBankName, saveAccountNumber, saveRole } from './actions';

export default function User() {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const userInfo = useSelector(state => state.user);
    // console.log(userInfo);    
    const [userRole, setUserRole] = useState('CU');
    const handleClick = (role) => { setUserRole(role) };
    const [roleCheck, setRoleCheck] = useState(false);
    const handleCheck = (prev) => setRoleCheck(!prev);
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const handleChange = (e) => {setUsername(e.target.value);};

    const roleRes = async (userRole) => {
        const token = cookies.token;
        try {
            const res = await axios.put(`${backURL}accounts/user/`, 
            {"id": userInfo.id, "email": userInfo.email, "role": userRole},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            dispatch(saveRole(userRole));
        } catch (error) {
        console.log('실패');
        }
    };
    
    const CURes = async (username) => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}accounts/profile/`, 
            {"username": username},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            dispatch(saveUsername(username));
            navigate('/profile');
        } catch (error) {
        console.log('실패');
        }
    };

    const CORes = async (username, bankName, accountNumber) => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}accounts/profile/`, 
            {"username": username, "bankName": bankName, "accountNumber": accountNumber},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            dispatch(saveUsername(username), saveBankName(bankName), saveAccountNumber(accountNumber));
            navigate('/profile');
        } catch (error) {
        console.log('실패');
        }
    };

    return (
        <div className='flex flex-col items-center'>
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
                <button onClick={() => {roleRes(userRole); handleCheck();}} 
                    className={!roleCheck ? 'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                    'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                disabled={roleCheck}>{userRole === 'CU' ? '고객' : '사업자'}(으)로 이용합니다</button>
                { roleCheck ? userRole === 'CU' ? 
                    <div className='w-full flex justify-center my-4 flex-col'>
                        <p className='font-bold my-3 text-lg'>유저명을 입력해주세요</p>
                        <input type="text" placeholder='유저명을 입력하세요' value={username} onChange={handleChange} 
                        className='border boreder-zinc-200 rounded-md text-md p-2'/>
                        <button onClick={() => CURes(username)}
                        className={username === '' ? 'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                        'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                        disabled={username === ''}>회원등록 완료</button>
                    </div> :
                    <div className='w-full flex justify-center my-4 flex-col'>
                        <p className='font-bold my-3 text-lg'>사업자명을 입력해주세요</p>
                        <input type="text" placeholder='사업자명을 입력하세요' value={username} onChange={handleChange} 
                        className='border boreder-zinc-200 rounded-md text-md p-2 mb-2'/>
                        <p className='font-bold my-3 text-lg'>은행명을 입력해주세요</p>
                        <input type="text" placeholder='은행명을 입력하세요' value={bankName} onChange={(e) => {setBankName(e.target.value);}} 
                        className='border boreder-zinc-200 rounded-md text-md p-2 mb-2'/>
                        <p className='font-bold my-3 text-lg'>계좌번호를 입력해주세요</p>
                        <input type="text" placeholder='계좌번호를 입력하세요' value={accountNumber} onChange={(e) => {setAccountNumber(e.target.value);}} 
                        className='border boreder-zinc-200 rounded-md text-md p-2 mb-2'/>
                        <p className='text-zinc-400 ml-2 mb-2'>하이픈(-)없이 숫자만 입력해주세요</p>
                        <button onClick={() => CORes(username, bankName, accountNumber)}
                        className={username === '' || bankName === '' || accountNumber === '' ? 'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                        'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                        disabled={username === '' || bankName === '' || accountNumber === ''}>회원등록 완료</button>
                    </div> : ''
                }
            </div>
        </div>
    );
}