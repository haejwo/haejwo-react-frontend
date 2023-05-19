import React, { useState } from 'react';
import { useCookies } from 'react-cookie'; 
import ImageUploader from '../../components/ImageUploader/ImageUploader';

export default function BusinessFileUploader() {
    const [cookies, setCookies] = useCookies(['token']);
    const token = cookies.token;
    
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const path = `${backURL}accounts/image-upload/`;
        
    const [data, setData] = useState(null);
    const imageData = (datas) => { 
        setData(datas);
    };
    console.log(data);
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <p className='font-bold my-3 text-lg'>사업자등록증을 업로드해주세요</p>
            <ImageUploader path={path} token={token} imageData={imageData}/>
            {data && <p>{data.대표자} {data.개업연월일} {data.등록번호}</p>}
        </div>
    );
}