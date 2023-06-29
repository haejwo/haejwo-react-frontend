import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { TfiMoreAlt, TfiMore } from 'react-icons/tfi';
import { HiClipboardList, HiOutlineClipboardList } from 'react-icons/hi';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const userInfo = useSelector(state => state.user.user);
    
    const [tabMenu, setTabMenu] = useState('tabHome');
  
    const handleToggle = (id) => {
      setTabMenu(id);
    }
        
    return (
        <nav className='w-screen sticky bottom-0'>
            <div className='flex justify-around border-t border-gray-300 bg-white p-3'>
                <Link to='/' className='flex flex-col items-center' onClick={() => handleToggle('tabHome')}>
                    <div className='text-2xl'>{tabMenu === 'tabHome' ? <AiFillHome className='text-brand'/> : <AiOutlineHome className='text-zinc-400'/>}</div>
                    <div className={tabMenu === 'tabHome' ? 'text-brand' : 'text-zinc-400'}>Home</div>
                </Link>
                <Link to={userInfo.username ? '/list' : '/login'} className='flex flex-col items-center' onClick={() => handleToggle('tabList')}>   
                    <div className='text-2xl'>{tabMenu === 'tabList' ? <HiClipboardList className='text-brand'/> : <HiOutlineClipboardList className='text-zinc-400'/>}</div>
                    <div className={tabMenu === 'tabList' ? 'text-brand' : 'text-zinc-400'}>Lists</div>
                </Link>
                <Link to='/profile' className='flex flex-col items-center' onClick={() => handleToggle('tabMore')}>
                      <div className='text-2xl'>{tabMenu === 'tabMore' ? <TfiMoreAlt className='text-brand'/> : <TfiMore className='text-zinc-400'/>}</div>
                      <div className={tabMenu === 'tabMore' ? 'text-brand' : 'text-zinc-400'}>More</div>
                </Link>
            </div>
        </nav>
    );
}