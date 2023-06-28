import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import MoveInfoList from '../components/Lists/MoveInfoList';
import { useSelector } from 'react-redux';

export default function MoveList() {
    const [movelist, setMovelist] = useState(null);
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const userRole = useSelector(state => state.user.user.role);
    
    useEffect(() => {
        const Data = async () => {
            const token = cookies.token;
        
            try {
                const res = await axios.get(`${backURL}movequotes/`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                } 
                );
                setMovelist(res.data);
            } catch (error) {
                console.log(error);
            }
        };
    
        Data();
    }, []);

    if (movelist === null) {
        return <MoveInfoList lists={null}/>
    }
    
    const matchinglist = movelist.filter(item => item.status === 'MATCHING');
    
    return (
        <div>
            <MoveInfoList lists={userRole === 'CO' ? matchinglist : movelist} movestatus='matching'/>
        </div>
    );
}