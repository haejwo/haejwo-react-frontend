import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function KakaoCallback() {

    let backURL = process.env.REACT_APP_BACK_BASE_URL;
    const navigate = useNavigate()

    const code = new URL(window.location.href).searchParams.get('code');
    useEffect(() => {
        axios({
            method: 'get',
            url: `${backURL}accounts/kakao/login/callback/?code=${code}`,
        })
        .then((res) => {console.log(res.data); navigate('/user');})
    }, [])

    return (
        <div>

        </div>
    );
}