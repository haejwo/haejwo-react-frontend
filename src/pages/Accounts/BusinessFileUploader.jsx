import React, { useState } from 'react';
import { useCookies } from 'react-cookie'; 
import ImageUploader from '../../api/ImageUploader';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveBusinessFile } from '../../app/useractions';
import { useSelector } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';

export default function BusinessFileUploader() {
    const userInfo = useSelector(state => state.user.user);
    const [cookies, setCookies] = useCookies(['token']);
    const token = cookies.token;
    const dispatch = useDispatch();
    
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const path = `${backURL}accounts/image-upload/`;
        
    const [data, setData] = useState(null);
    const imageData = (datas) => { 
        setData(datas);
    };

    return (
        <div className="flex flex-col justify-center items-center p-4">
            {userInfo.businessfile &&
            <div className='flex justify-center items-center'>
                <p className='font-bold text-lg my-3'>사업자등록증 변경</p>
                <Link to='/profile'><RxCross2 className='text-zinc-400 ml-1 text-lg' /></Link>
            </div>
            }
            <div>
                <p className='font-bold my-3 text-lg text-center mb-8'>사업자등록증을 업로드해주세요</p>
                <ImageUploader path={path} token={token} imageData={imageData}/>
            </div>
            { data &&
                <div className='w-full p-4 border border-top-zinc-400 my-6'>
                    <p className='font-bold text-lg mb-3'>사업자 정보</p>
                    <p className='my-2'>대표자명 : <span className='font-semibold'>{data.대표자}</span></p>
                    <p className='my-2'>개업일 : <span className='font-semibold'>{data.개업연월일}</span></p>
                    <p className='my-2'>사업자등록번호 : <span className='font-semibold'>{data.등록번호}</span></p>
                </div>
            }
            { data &&
                <Link to='/profile' className={'my-3 w-full text-center p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} onClick={() => dispatch(saveBusinessFile(true))}>사업자등록 완료</Link>
            }
        </div>
    );
}