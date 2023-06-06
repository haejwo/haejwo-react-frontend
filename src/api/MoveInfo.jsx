import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

export default function MoveInfo({ imgfile }) {
    const moveInfos = useSelector(state => state.move.move);
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;

    const moveRes = async () => {
        const token = cookies.token;
        const formData = new FormData();
        const options = ['start_info', 'end_info', 'luggage_info']
        for (const key in moveInfos) { 
            if (options.includes(key)) {
                formData.append(key, JSON.stringify(moveInfos[key]))
            } else {
                formData.append(key, moveInfos[key]);
            }
        }
        // for (const idx in imgfile) {
        //     formData.append('image', imgfile[idx]);
        //     console.log('image', imgfile[idx]);
        // }
        // formData.append('image', imgfile[0]);

        try {
            const res = await axios.post(`${backURL}movequotes/`, 
            formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                } 
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Link to='/roomimg'>
                <button onClick={moveRes} className='my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>이사요청 등록</button>
            </Link>
        </div>
    );
}