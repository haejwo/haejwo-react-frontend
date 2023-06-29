import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import ImagesUpload from '../../components/ImagesUpload/ImagesUpload';

export default function F_Image() {
    const [files, setFiles] = useState(null);

    const handleFiles = (imgFiles) => setFiles(imgFiles);
    
    return (
        <div className='w-screen flex flex-col items-center p-4'>
            <div className='flex items-center mt-4'>
                <Link to='/memo'><AiOutlineDoubleLeft className='text-zinc-400 mr-2 text-2xl'/></Link>
                <p className='font-semibold text-lg'>사진을 업로드해주세요 ( 5 / 5 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen p-4 my-5 border-b-8 border-bottom-zinc-300'>
                <p className='font-bold mb-4'>정확한 견적을 위해 사진을 업로드해주세요</p>
                <ImagesUpload imageFiles={handleFiles}/>
            </div>
            <Link to='/'>
                <button className='my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>꽃/식물 운송요청 등록</button>
            </Link>
        </div>
    );
}