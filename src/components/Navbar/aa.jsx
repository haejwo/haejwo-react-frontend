import React from 'react';
import axios from "axios";

export default function Navbar() {
    let backURL = process.env.REACT_APP_BACK_BASE_URL;
    const test = async () => {
    const res = await axios({
                    method: "post",
                    url: `${backURL}accounts/signup/`,
                    data: { "email": "123@gmail.com", "password1": "qweqwe321", "password2": "qweqwe321" }
                });
            console.log(res)
            }    
    return (        
        <nav onClick={test}>
            navbar
        </nav>
    );
}

