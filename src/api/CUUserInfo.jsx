import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsername } from '../app/useractions';
import CUInfoForm from '../components/CUInfoForm/CUInfoForm';

export default function CUUserInfo() {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const handleName = (name) => setUsername(name);
    
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
        <div className='w-full flex justify-center flex-col'>
            <CUInfoForm name={handleName}/>
            <button onClick={() => CURes(username)}
                className={username === '' ? 
                    'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                    'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                    disabled={username === ''}>회원등록 완료
            </button>
        </div>
    );
}