import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function MoveDeposit({ movepk, iscompleted }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;

    const DepositRes = async () => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}movequotes/${movepk}/deposit/ `, 
            {
              headers: {
                'Authorization': `Bearer ${token}`
              } 
            });
        } catch (error) {
        console.log(error);
        }
    };
    
    return (
        <div>
            <button onClick={DepositRes} className={iscompleted === 'complete' ? 'w-full py-2 px-4 rounded-lg font-semibold text-brand border-2 border-yellow-200' : 'w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'}>입금완료</button>
        </div>
    );
}