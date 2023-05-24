import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUsername, saveBankName, saveAccountNumber, saveCategory } from '../app/actions';
import COInfoForm from '../components/COInfoForm/COInfoForm';

export default function COUserInfo() {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [category, setCategory] = useState('MOVE');
    const handleName = (name) => setUsername(name);
    const handleBank = (bank) => setBankName(bank);
    const handleAccount = (account) => setAccountNumber(account);
    const handleCategory = (category) => setCategory(category);

    const CORes = async (username, bankName, accountNumber, category) => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}accounts/profile/`, 
            {
                "username": username, "bankName": bankName, "accountNumber": accountNumber, "category": category
            },
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
            dispatch(saveUsername(username));
            dispatch(saveBankName(bankName));
            dispatch(saveAccountNumber(accountNumber));
            dispatch(saveCategory(category));
            
            navigate('/businessfileuploader');
        } catch (error) {
        console.log('실패');
        }
    };
    return (
        <div className='w-full flex justify-center my-4 flex-col'>
            <COInfoForm name={handleName} bank={handleBank} account={handleAccount} COcategory={handleCategory}/>
            <button onClick={() => CORes(username, bankName, accountNumber, category)}
                className={username === '' || bankName === '' || accountNumber === '' ? 
                    'my-4 w-full p-4 py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                    'my-4 w-full p-4 py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
                disabled={username === '' || bankName === '' || accountNumber === ''}>다음
            </button>
        </div>
    );
}

