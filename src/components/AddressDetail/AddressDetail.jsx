import React, { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import DaumPopup from '../../api/DaumPopUp';

export default function AddressDetail() {
    const [selectedValues, setSelectedValues] = useState({});
    const handleValueSelect = (title, value) => {
        setSelectedValues({ ...selectedValues, [title]: value });
    };

    const buildings = ['빌라/연립', '오피스텔', '주택', '아파트'];
    const rooms = ['원룸', '1.5룸', '2룸', '3룸', '4룸', '5룸 이상'];
    const spaces = ['5평 이하', '5~10평', '10~15평', '15~20평', '20~25평', '30평 이상'];
    const floors = ['반지하', '1층', '2층', '3층', '4층', '5층', '6층', '7층', '8층', '9층', '10층', '10층 이상'];
    const stairs = ['있음', '없음'];
    const lefts = ['있음', '없음'];
    const parkinglot = ['가능', '불가능'];

    return (
        <div>
            <div>
                <DaumPopup/>
                <input type="text" name="" id="" placeholder='상세주소' />
            </div>
            <Buttons buttonList={buildings} title='건물 종류' onValueSelect={handleValueSelect}/>
            <Buttons buttonList={rooms} title='방 구조' onValueSelect={handleValueSelect}/>
            <Buttons buttonList={spaces} title='평수' onValueSelect={handleValueSelect}/>
            <Buttons buttonList={floors} title='층' onValueSelect={handleValueSelect}/>
            <Buttons buttonList={stairs} title='공동현관 앞 계단 유무' onValueSelect={handleValueSelect}/>
            <Buttons buttonList={lefts} title='엘리베이터 유무' onValueSelect={handleValueSelect}/>
            <Buttons buttonList={parkinglot} title='주차 가능 여부' onValueSelect={handleValueSelect}/>
            <div onClick={() => {console.log(selectedValues);}}>
                정보들
            </div>
        </div>
    );
}