import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsername } from './actions';

export default function User() {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const userInfo = useSelector(state => state.username);
    console.log(userInfo);    
    const [userRole, setUserRole] = useState('CU');
    const handleClick = (role) => { setUserRole(role) };
    const [roleCheck, setRoleCheck] = useState(false);
    const handleCheck = (prev) => setRoleCheck(!prev);
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const handleChange = (e) => {setUsername(e.target.value);};
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(saveUsername(username));
    //     setUsername('');
    // };

    const roleRes = async (userRole) => {
        const token = cookies.token; // 쿠키에서 토큰 값 가져오기
        try {
            const res = await axios.put(`${backURL}accounts/user/`, 
            {"id": userInfo.id, "email": userInfo.email, "role": userRole},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            console.log(res);
        } catch (error) {
        console.log('실패');
        }
    };
    
    const CURes = async (username) => {
        const token = cookies.token; // 쿠키에서 토큰 값 가져오기
        try {
            const res = await axios.post(`${backURL}accounts/profile/`, 
            {"username": username},
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            console.log(res);
            dispatch(saveUsername(username));
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
                    <button onClick={() => handleClick('CU')} disabled={roleCheck === true}
                        className={ userRole === 'CU' ? 
                        'w-1/2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                        'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200' }>고객</button>
                    <button onClick={() => handleClick('CO')} disabled={roleCheck === true}
                        className={ userRole === 'CO' ? 
                        'w-1/2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                        'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200' }>사업자</button>
                </div>
                <div>
                    <p>선택하신 유저 정보는 {userRole === 'CU' ? '고객' : '사업자'}입니다.</p>
                    <p>선택한 유저 정보는 변경할 수 없습니다.</p>
                    <button onClick={() => {roleRes(userRole); handleCheck();}} disabled={roleCheck === true}>확인했습니다</button>
                </div>
                { userRole === 'CU' ? 
                    <div>
                        <input type="text" placeholder='유저명을 입력하세요' value={username} onChange={handleChange} />
                        <button onClick={() => CURes(username)}>확인</button>
                    </div> :
                    <div> 회사
                    </div>
                }
            </div>
        </div>
    );
}

