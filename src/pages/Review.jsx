import React, { useState, useEffect } from 'react';
import { ImStarFull } from "react-icons/im";
import { v4 as uuidv4 } from 'uuid';
// import styled from 'styled-components';

const ARRAY = [0, 1, 2, 3, 4];
export default function Review() {

    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
      let clickStates = [...clicked];
      for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= index ? true : false;
      }
      setClicked(clickStates);
    };

    useEffect(() => {
      sendReview();
    }, [clicked]);

    const sendReview = () => {
      let score = clicked.filter(Boolean).length;
    };
    const [text, setText] = useState("");
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefaule();
        if (text.trim().length === 0) {
            return ;
        }
        setText("");
        console.log(e.target.value);
    }
    return (
        <div>
            <div className='flex'>
                <p>평가하기</p>
                <div className='flex'>
                    {ARRAY.map((el, idx) => {
                      return (
                        <ImStarFull
                          key={idx}
                          size="50"
                          onClick={() => handleStarClick(el)}
                          className={clicked[el] && 'text-yellow-200'}
                        />
                      );
                    })}
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" value={text} onChange={handleChange} />
                <button>등록</button>
            </form>
        </div>
    );
}