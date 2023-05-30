import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { loginUser } from '../../app/actions';

export default function KakaoCallback() {

    let backURL = process.env.REACT_APP_BACK_BASE_URL;
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['token']);  

    const code = new URL(window.location.href).searchParams.get('code');
    useEffect(() => {
        axios({
            method: 'get',
            url: `${backURL}accounts/kakao/login/callback/?code=${code}`,
        })
        .then((res) => {
            console.log(res.data);
            setCookie('token', res.data.access_token);
            
            if (res.data && res.data.user.customer != null) {
              const user = {id: res.data.user.id, email: res.data.user.email, username: res.data.user.customer.username, role: res.data.user.role};
              dispatch(loginUser(user));
              navigate('/profile');
            } else if (res.data && res.data.user.company != null) {
              const user = {id: res.data.user.id, email: res.data.user.email, username: res.data.user.company.username, bankName: res.data.user.company.bank.bankName, accountNumber: res.data.user.company.bank.accountNumber, role: res.data.user.role, category: res.data.user.company.category, businessfile: res.data.user.company.has_business_license};
              dispatch(loginUser(user));
              navigate('/profile');
            } else if (res.data.user.customer === null || res.data.user.company === null) {
              const user = {id: res.data.user.id, email: res.data.user.email};
              dispatch(loginUser(user));
              navigate('/user');
            } else {
              console.log('로그인실패');
            }
          })
    }, []);

    return (
        <></>
    );
}