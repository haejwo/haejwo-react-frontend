import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import ImagesUpload from '../../components/ImagesUpload/ImagesUpload';
import { useSelector } from 'react-redux';

export default function F_Image() {
    const [files, setFiles] = useState(null);

    const handleFiles = (imgFiles) => setFiles(imgFiles);
    
    console.log(useSelector(state => state.flower));
    return (
        <div className='w-screen flex flex-col items-center p-4'>
            <div className='flex'>
                <Link to='/memo'><AiOutlineDoubleLeft className='text-zinc-400 mt-2.5 mr-2 text-2xl'/></Link>
                <p className='font-semibold text-lg my-2'>꽃/식물 사진을 업로드해주세요 ( 5 / 5 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen p-4 my-5 border-b-8 border-bottom-zinc-300'>
                <p className='font-bold mb-4'>정확한 견적을 위해 꽃/식물 사진을 업로드해주세요</p>
                <ImagesUpload imageFiles={handleFiles}/>
            </div>
            <Link to='/'>
                <button className='my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>꽃/식물 운송요청 등록</button>
            </Link>
        </div>
    );
}