import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function MoveMatch({ movepk, commentpk, ismatch }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    
    const MatchRes = async () => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}movequotes/${movepk}/comments/${commentpk}/matching/ `, 
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
            <button onClick={MatchRes} className={ismatch === 'match' ? 'w-full py-2 px-4 rounded-lg font-semibold text-brand border-2 border-yellow-200' : 'w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'}>매칭</button>
        </div>
    );
}