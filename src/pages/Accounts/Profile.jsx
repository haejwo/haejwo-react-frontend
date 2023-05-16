import React from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from './actions';
import { FaUserCircle, FaTruck } from 'react-icons/fa';

export default function Profile() {
    
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user);
    console.log(userInfo);    
    
    const logOut = () => {
        const user = {id: null, email: null, username: null, bankName: null, accountNumber: null, role: null};

        removeCookie('token');
        dispatch(loginUser(user));
        navigate('/');
    };

    return (
        <div className="flex flex-col justify-center p-4">
            {userInfo.username ? userInfo.role === 'CU' ? 
                <div className='flex items-center'>
                    <FaUserCircle className='text-2xl'/>
                    <span className='font-bold text-2xl mx-2'>{userInfo.username}</span> 
                    <span className='text-lg mt-2'>고객님</span>
                </div> : 
                <div className='flex items-center'>
                    <FaTruck className='text-2xl'/>
                    <span className='font-bold text-2xl mx-2'>{userInfo.username}</span> 
                    <span className='text-lg mt-2'>파트너님</span>
                </div> : 
                <Link to='/login' className='font-bold text-2xl'>로그인/회원가입</Link>
            }
            
            <button onClick={logOut}>로그아웃</button>
        </div>
    );
}