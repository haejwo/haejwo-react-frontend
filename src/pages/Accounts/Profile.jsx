import React from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../app/useractions';
import { FaUserCircle, FaTruck, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { GiFlowerPot, GiHandTruck } from 'react-icons/gi';
import NoticeBtn from '../../components/Buttons/NoticeBtn';

export default function Profile() {
    
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.user);
    console.log(userInfo);    
    
    const logOut = () => {
        const user = {id: null, email: null, username: null, bankName: null, accountNumber: null, role: null, category: null};

        removeCookie('token');
        dispatch(loginUser(user));
        navigate('/');
    };

    return (
        <div className="flex flex-col justify-center p-4">
            {userInfo.username ? userInfo.role === 'CU' ? 
                <div className='flex items-center mt-4'>
                    <FaUserCircle className='text-2xl text-yellow-500'/>
                    <span className='font-bold text-2xl mx-2'>{userInfo.username}</span> 
                    <span className='text-lg mt-2'>고객님</span>
                </div> : 
                <div className='flex items-center mt-4'>
                    {userInfo.category === 'MOVE' ? <FaTruck className='text-2xl text-yellow-500'/> : 
                    userInfo.category === 'FLOWER' ? <GiFlowerPot className='text-2xl text-yellow-500'/> : <GiHandTruck className='text-2xl text-yellow-500'/>} 
                    <span className='font-bold text-2xl mx-2'>{userInfo.username}</span> 
                    <span className='text-lg mt-2'>파트너님</span>
                </div> : 
                <Link to='/login' className='mt-4'>
                    <p className='font-bold text-2xl'>로그인/회원가입</p>
                    <p className='text-zinc-500 mt-2'>로그인/회원가입 후 서비스를 이용해주세요</p>
                </Link>
            }
            {userInfo.username ? 
                <div className='flex m-2 text-zinc-400'>
                    <Link to='/userupdate'>회원정보 수정</Link>
                    <button onClick={logOut} className='font-bold ml-3'>로그아웃</button>
                </div> 
            : ''}
            <div className='mt-3'>
                <div className='border-b-8 border-yellow-100'>
                    <NoticeBtn icon='coupon' text='내 쿠폰'/>
                </div>
                <div className='border-b-8 border-yellow-100'>
                    <NoticeBtn icon='friend' text='친구 초대'/>
                </div>
                <div className='border-b-8 border-yellow-100'>
                    <NoticeBtn icon='notice' text='공지사항'/>
                    <NoticeBtn icon='faq' text='FAQ'/>
                    <NoticeBtn icon='one' text='1 : 1 문의'/>
                </div>
                <div className='border-b-8 border-yellow-100'>
                    <NoticeBtn icon='service' text='서비스 이용약관'/>
                    <NoticeBtn icon='personal' text='개인정보 처리방침'/>
                </div>
            </div>
            <div className='mt-20 mb-5 flex items-center justify-between'>
                <div className='text-3xl text-yellow-300'>
                    <button className='bg-yellow-100 p-3 rounded-full mr-2'><FaInstagram/></button>
                    <button className='bg-yellow-100 p-3 rounded-full mr-2'><FaFacebookSquare/></button>
                    <button className='bg-yellow-100 p-3 rounded-full mr-2'><FaTwitter/></button>
                </div>
                <p className='text-zinc-300'>1.0.0</p>
            </div>
        </div>
    );
}