import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


export default function Profile() {
    
        const [cookies, setCookie, removeCookie] = useCookies(['token']);
        const [userEmail, setUserEmail] = useState(null);
        const navigate = useNavigate();
        const backURL = process.env.REACT_APP_BACK_BASE_URL;
        const userInfo = useSelector(state => state.user);
        console.log(userInfo);    
    

        // const authCheck = async () => { // 페이지에 들어올때 쿠키로 사용자 체크
        //     const token = cookies.token; // 쿠키에서 id 를 꺼내기
        //     try {
        //         const res = await axios.get(`${backURL}accounts/profile/`, {
        //           headers: {
        //             'Authorization': `Bearer ${token}`
        //           } 
        //         });
        //         console.log(res);
        //         if (res.data) {
        //             setUserEmail(res.data);
        //           } else {
        //             logOut();
        //           }
        //         } catch (error) {
        //           console.log('');
        //         }
              
            
            // const res = await axios({
            //     method: "get",
            //     url: `${backURL}accounts/profile/`,
            //     // withCredentials: true,
            //   }, {
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //       }
            //   });
            //   console.log(res.data);
            // const res = axios.get(`${backURL}accounts/profile/`, {
            //     headers: {
            //       'Authorization': `Bearer ${token}`
            //     }
            // });
              
            // if (res.data) {
            //     setUserEmail(res.data.user.email);
            //     console.log(res.data.user.email);
            // } else { logOut(); console.log('로그인실패'); }
            //   .then((res) => {
            //     setUserEmail(res.data.user.email); // 유저 아이디 표시를 위해 작성
            //     console.log(res.data.user.email);
            //     })
                // .catch(() => {
                //     logOut(); // 에러 발생시 실행
                // });
        // };
    
        // useEffect(() => {
        //     authCheck(); // 로그인 체크 함수
        // }, [])

        const logOut = () => {
            removeCookie('token'); // 쿠키를 삭제
            navigate('/'); // 메인 페이지로 이동
        };

    return (
        <div>
            {userInfo && <h1>{userInfo.username}</h1>} 
			<button onClick={logOut}>로그아웃</button>
        </div>
    );
}