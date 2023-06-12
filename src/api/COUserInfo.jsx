import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsername, saveBankName, saveAccountNumber, saveCategory, saveImage } from '../app/useractions';
import COInfoForm from '../components/COInfoForm/COInfoForm';
import ImagesUpload from '../components/ImagesUpload/ImagesUpload';

export default function COUserInfo() {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [category, setCategory] = useState('MOVE');
    const [file, setFile] = useState(null);
    const handleName = (name) => setUsername(name);
    const handleBank = (bank) => setBankName(bank);
    const handleAccount = (account) => setAccountNumber(account);
    const handleCategory = (category) => setCategory(category);
    const handleFiles = (imgFiles) => setFile(imgFiles[0]);

    const CORes = async () => {
        const token = cookies.token;
        const formData = new FormData();
        formData.append("username", username);
        formData.append("bankName", bankName);
        formData.append("accountNumber", accountNumber);
        formData.append("category", category);
        formData.append('image', file);

        try {
            const res = await axios.post(`${backURL}accounts/profile/`, 
            formData,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
              } 
            });
            dispatch(saveUsername(username));
            dispatch(saveBankName(bankName));
            dispatch(saveAccountNumber(accountNumber));
            dispatch(saveCategory(category));
            dispatch(saveImage(URL.createObjectURL(file)));
            
            navigate('/businessfileuploader');
        } catch (error) {
        console.log('실패');
        }
    };
    return (
        <div className='w-full flex justify-center flex-col'>
            <COInfoForm name={handleName} bank={handleBank} account={handleAccount} COcategory={handleCategory}/>
            <div className='p-4'>
                <p className='text-lg font-bold mb-2'>프로필 이미지 업로드</p>
                <ImagesUpload imageFiles={handleFiles}/>
            </div>
            <button onClick={() => CORes(username, bankName, accountNumber, category)}
                className={username === '' || bankName === '' || accountNumber === '' ? 
                    'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                    'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                disabled={username === '' || bankName === '' || accountNumber === ''}>다음
            </button>
        </div>
    );
}