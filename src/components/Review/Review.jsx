import React, { useState, useEffect } from 'react';
import { ImStarFull } from "react-icons/im";
import { RxCross2 } from 'react-icons/rx';
import TextArea from '../InputText/TextArea';
import MoveReview from '../../api/MoveReview';

export default function Review({ COname, COid, onClose, movepk }) {
    const ARRAY = [0, 1, 2, 3, 4];
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    const [stars, setStars] = useState(0);
    const [memo, setMemo] = useState('');
    
    const handleStarClick = idx => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= idx ? true : false;
        }
        setClicked(clickStates);
    };
    
    useEffect(() => {
        setStars(clicked.filter(Boolean).length);
    }, [clicked]);
    
    return (
        <div className='p-2'>
            <div className='w-full p-2 mb-4 flex justify-center items-center'>
                <p className='text-xl text-center text-zinc-600 font-semibold flex'><span className='text-orange-500 font-bold overflow-hidden whitespace-nowrap truncate w-40'>{COname}</span> 님 리뷰 작성</p>
                <div onClick={onClose}><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></div>
            </div>
            <div className='p-2'>
                <p className='font-bold my-3 text-xl'>편안한 이사 되셨나요?</p>
                <div className='flex justify-center'>
                    {ARRAY.map((el, idx) => (                    
                        <ImStarFull key={idx} size="50" onClick={() => handleStarClick(el)}
                          className={clicked[el] ? 'text-yellow-200 mr-1' : 'text-zinc-500 mr-1'} />                    
                    ))}
                </div>
            </div>
            <div className='p-2'>
                <TextArea title='서비스 후기를 알려주세요' placeholder={COname + ' 파트너님의 리뷰를 작성해주세요'} row='10' handleChange={(e) => {setMemo(e.target.value);}} value={memo}/>
            </div>
            <div onClick={onClose}><MoveReview COid={COid} movepk={movepk} star={stars} memo={memo} /></div>
        </div>
    );
}