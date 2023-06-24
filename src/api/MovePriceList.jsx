import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';
import { RxCross2 } from 'react-icons/rx';
import MoveMatch from './MoveMatch';
import MoveDeposit from './MoveDeposit';

export default function MovePriceList({ pk, onClose, status }) {
    const [cookies, setCookie] = useCookies(['token']);
    const backURL = process.env.REACT_APP_BACK_BASE_URL;
    const [lists, setLists] = useState(null);
    const matchDict = {};
    
    if (lists) {
        for (let i = 0; i < lists.length; i++ ) {
            matchDict[lists[i].id] = 'none';
        }
    }
    
    const [match, setMatch] = useState(matchDict);
    const handleClick = (id) => setMatch(prev => ({...prev, [id]: 'match'}));
    const hasMatch = Object.values(match).find(value => value === 'match') !== undefined;
    const [complete, setComplete] = useState(matchDict);
    const handleCompleted = (id) => setComplete(prev => ({...prev, [id]: 'complete'}));
    
    useEffect(() => {
        const token = cookies.token;
        const Data = async () => {
            try {
                const res = await axios.get(`${backURL}movequotes/${pk}/comments/`, 
                {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  } 
                });
                setLists(res.data);
            } catch (error) {
            console.log(error);
            }
        };
    
        Data();
      }, []);
    
    return (
        <div className='p-4'>
            <div className='w-full p-2 mb-4 flex justify-center items-center'>
                <p className='text-xl text-center text-zinc-600 font-semibold'>이사 요청서 {pk} 견적 리스트</p>
                <div onClick={onClose}><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></div>
            </div>
            <div>
                {lists && lists.map((item, idx) => (
                    <div key={idx} className='border-b-4 border-bottom-zinc-200 pb-3 pt-3'>    
                        <div className='flex items-center justify-between'>
                            <div>
                                <div className='flex h-8 items-center'>
                                    <img className='h-full w-8 rounded-full' src={item.author.company.profile_img} alt="" />
                                    <p className='font-bold text-lg ml-2 text-zinc-500'>{item.author.company.username}</p>
                                    <p className='text-zinc-400 text-sm ml-2'>{moment(item.created_at).format("MM/DD HH:MM")}</p>
                                </div>
                                <div className='flex mt-2 items-center'>
                                    <p>견적 가격 :</p>
                                    <p className='font-semibold text-xl ml-2'>{item.amount}원</p>
                                </div>
                            </div>
                            {!hasMatch ?
                                <div onClick={() => handleClick(item.id)}>
                                    <MoveMatch movepk={pk} commentpk={item.id} ismatch={match[item.id]} />
                                </div> : match[item.id] === 'match' ?
                                <div onClick={() => handleCompleted(item.id)}>
                                    <MoveDeposit movepk={pk} iscompleted={complete[item.id]} />
                                </div> : ''
                            }
                        </div>
                        {match[item.id] === 'match' ?
                            <div className='mt-2'>
                                <p>은행명 : <span className='font-semibold'>이사은행</span></p>
                                <p>계좌번호 : <span className='font-semibold'>3093471270418204</span></p>
                            </div> : ''
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}