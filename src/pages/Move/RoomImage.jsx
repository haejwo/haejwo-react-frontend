import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import MoveInfo from '../../api/MoveInfo';
import ImagesUpload from '../../components/ImagesUpload/ImagesUpload';

export default function RoomImage() {
    const moveInfos = useSelector(state => state.move.move);
    const [files, setFiles] = useState(null);
    const [imgModal, setImgModal] = useState(false);

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
            {/* <div className='w-screen p-4 border-b-8 border-bottom-zinc-300'>
                <button onClick={() => setImgModal((prev) => !prev)} className='w-full my-4 border border-brand p-2 rounded font-semibold text-zinc-400'>이사 정보 확인</button>
                {imgModal && moveInfos &&
                <div className='flex flex-col'>
                    {moveInfos.size_type === 'BIG' ? <p>20평대 이상</p> : <p>20평대 미만</p>}
                    {moveInfos.packing_type === 'PACKING' ? <p>포장이사</p> : moveInfos.packing_type === 'SEMIPACKING' ? <p>반포장이사</p> : <p>일반이사</p>}
                    {!moveInfos.customer_support ? '없음' : '있음'}
                    {moveInfos.date}
                    {moveInfos.time}
                    {moveInfos.start_info.address["FullAddress"]}{moveInfos.start_info.address["ExtraAddress"]}
                    {Object.entries(moveInfos.start_info.infos).map(([key, value], idx) => (
                      <p key={idx}>{key} : {value}</p>
                    ))}
                    {Object.entries(moveInfos.luggage_info["기타"]).map(([key, value], idx) => (
                      value === 0 ? '' : <p key={idx}>{key} : {value}</p>
                    ))}
                    {moveInfos.content}
                </div>
                }
            </div> */}
            <MoveInfo imgfile={files}/>
        </div>
    );
}