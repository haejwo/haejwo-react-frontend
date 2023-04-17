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
        <nav className='flex justify-evenly border-t border-gray-300 p-2 bottom-0'>
            <Link to='/' className='flex flex-col items-center'>
                <button onClick={() => handleToggle('tabHome')} id='tabHome'>
                  <div className='text-2xl'>{tabMenu === 'tabHome' ? <AiFillHome/> : <AiOutlineHome/>}</div>
                  <div>Home</div>
                </button>
            </Link>
            <Link to='/login' className='flex flex-col items-center'>
                <button onClick={() => handleToggle('tabList')} id='tabList'>
                  <div className='text-2xl'>{tabMenu === 'tabList' ? <HiClipboardList/> : <HiOutlineClipboardList/>}</div>
                  <div>Lists</div>
                </button>
            </Link>
            <Link to='/profile' className='flex flex-col items-center'>
                <button onClick={() => handleToggle('tabMore')} id='tabMore'>
                  <div className='text-2xl'>{tabMenu === 'tabMore' ? <TfiMoreAlt/> : <TfiMore/>}</div>
                  <div>More</div>
                </button>
            </Link>
        </nav>
    );
}