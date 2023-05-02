import React, { useEffect } from 'react';
import axios from 'axios';

export default function KakaoCallback() {
    
    let backURL = process.env.REACT_APP_BACK_BASE_URL;
    const code = new URL(window.location.href).searchParams.get('code');
    useEffect(() => {
        axios({
              method: 'get',
              url: `${backURL}accounts/kakao/callback/login/?code=${code}`,
            })
        }, [])

    return (
        <div>
            
        </div>
    );
}

