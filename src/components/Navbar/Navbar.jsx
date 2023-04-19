import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { TfiMoreAlt, TfiMore } from 'react-icons/tfi';
import { HiClipboardList, HiOutlineClipboardList } from 'react-icons/hi';
 
export default function Navbar() {
    const [tabMenu, setTabMenu] = useState('tabHome');
  
    const handleToggle = (id) => {
      setTabMenu(id);
    }
        
    return (
        <nav className='w-screen fixed bottom-0'>
            <div className='flex justify-around border-t border-gray-300 p-3'>
                <Link to='/' className='flex flex-col items-center' onClick={() => handleToggle('tabHome')}>
                    <div className='text-2xl'>{tabMenu === 'tabHome' ? <AiFillHome/> : <AiOutlineHome/>}</div>
                    <div>Home</div>
                </Link>
                <Link to='/login' className='flex flex-col items-center' onClick={() => handleToggle('tabList')}>   
                    <div className='text-2xl'>{tabMenu === 'tabList' ? <HiClipboardList/> : <HiOutlineClipboardList/>}</div>
                    <div>Lists</div>
                </Link>
                <Link to='/profile' className='flex flex-col items-center' onClick={() => handleToggle('tabMore')}>
                      <div className='text-2xl'>{tabMenu === 'tabMore' ? <TfiMoreAlt/> : <TfiMore/>}</div>
                      <div>More</div>
                </Link>
            </div>
        </nav>
    );
}