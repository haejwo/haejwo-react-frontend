import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsername, saveBankName, saveAccountNumber, saveCategory } from '../../app/actions';
import { FaTruck } from 'react-icons/fa';
import { GiFlowerPot, GiHandTruck } from 'react-icons/gi';
import RoleSelect from '../../api/RoleSelect';
import COUserInfo from '../../api/COUserInfo';

export default function User() {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    
    const [role, setRole] = useState(null);
    const [check, setCheck] = useState(null);
    const handleRole = (role) => setRole(role);
    const handleRoleCheck = (check) => setCheck(check); 

    const dispatch = useDispatch();
    const navigate = useNavigate()
    
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

    return (
        <div className='flex flex-col items-center'>
            <RoleSelect onRoleSelect={handleRole} onCheck={handleRoleCheck}/>
            { check ? role === 'CU' ? 
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
                    <COUserInfo/>
                </div> : ''
            }
        </div>
    );
}