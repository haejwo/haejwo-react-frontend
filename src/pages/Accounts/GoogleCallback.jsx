import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function GoogleCallback() {

    let backURL = process.env.REACT_APP_BACK_BASE_URL;
    const navigate = useNavigate()

    const code = new URL(window.location.href).searchParams.get('code');
    useEffect(() => {
        axios({
            method: 'get',
            url: `${backURL}accounts/google/login/callback/?code=${code}`,
        })
            .then((res) => {console.log(res.data); navigate('/profile');})
    }, [])

    return (
        <div>

        </div>
    );
}

