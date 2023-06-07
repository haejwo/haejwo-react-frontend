import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import MoveInfo from '../../api/MoveInfo';
import ImagesUpload from '../../components/ImagesUpload/ImagesUpload';

export default function RoomImage() {
    const [files, setFiles] = useState(null);

    const handleFiles = (imgFiles) => setFiles(imgFiles);
    
    return (
        <div className='w-screen flex flex-col items-center p-4'>
            <div className='flex'>
                <Link to='/memo'><AiOutlineDoubleLeft className='text-zinc-400 mt-2.5 mr-2 text-2xl'/></Link>
                <p className='font-bold text-lg my-2'>방 사진을 업로드해주세요 ( 6 / 6 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-screen p-4 my-5 border-b-8 border-bottom-zinc-300'>
                <p className='font-bold mb-4'>정확한 견적을 위해 방 사진을 업로드해주세요</p>
                <ImagesUpload imageFiles={handleFiles}/>
            </div>
            <MoveInfo imgfile={files}/>
        </div>
    );
}