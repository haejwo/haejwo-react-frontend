import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function MoveReview({ COid, movepk, star, memo }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    
    const ReviewRes = async () => {
        const token = cookies.token;
        try {
            const res = await axios.post(`${backURL}accounts/${COid}/reviews/`, 
            { "article" : movepk, "rating" : star, "comment" : memo, "author" : COid, "company" : COid},
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
            <button onClick={ReviewRes} className='w-full py-2 px-4 rounded-lg font-semibold text-zinc-500 border-2 border-zinc-200'>리뷰 작성</button>
        </div>
    );
}