import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import MoveInfoList from '../components/Lists/MoveInfoList';

export default function MoveCompletedList() {
    const [completedList, setCompletedList] = useState(null);
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    
    useEffect(() => {
        const Data = async () => {
            const token = cookies.token;
        
            try {
                const res = await axios.get(`${backURL}movequotes/get_completed/`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                } 
                );
                setCompletedList(res.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        Data();
    }, []);
    
    return (
        <div>
            <MoveInfoList lists={completedList} movestatus='completed'/>
        </div>
    );
}