import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

export default function DatePicker() {
    const [value, setValue] = useState(new Date());
    const [timePick, setTimePick] = useState(new Date());
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center p-4'>
                <p className='font-bold text-lg my-3'>이사 날짜와 시간을 선택해주세요 ( 2 / 6 )</p>
            </div>
            <div className='my-3'>
                <Calendar onChange={setValue} value={value} />
                <div className='my-3'>
                   선택하신 날짜는 <span className='font-semibold text-lg'>{moment(value).format("YYYY년 MM월 DD일")}</span>
                   입니다.
                </div>
            </div>
            <div>
                <input type="time" />
            </div>
        </div>
    );
}

