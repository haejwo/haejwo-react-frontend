import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import MoveInfoList from '../components/Lists/MoveInfoList';

export default function MoveMatchedList() {
    const [matchedList, setMatchedList] = useState(null);
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    
    useEffect(() => {
        const Data = async () => {
            const token = cookies.token;
        
            try {
                const res = await axios.get(`${backURL}movequotes/get_selected/`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                } 
                );
                setMatchedList(res.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        Data();
    }, []);
    
    return (
        <div>
            <MoveInfoList lists={matchedList} movestatus='matched'/>
        </div>
    );
}