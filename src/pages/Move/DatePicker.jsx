import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BsCheckAll } from 'react-icons/bs';

export default function DatePicker() {
    const [value, setValue] = useState(new Date());
    const [timePick, setTimePick] = useState('');
    const handleChange = (event) => { 
        setTimePick(event.target.value);
    }; 
    const minDate = new Date(); 
    minDate.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    const tileDisabled = ({ date }) => {
        return date < new Date();
    };

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center p-4'>
                <p className='font-bold text-lg my-3'>이사 날짜와 시간을 선택해주세요 ( 2 / 6 )</p>
            </div>
            <div className='my-3'>
                <Calendar 
                    onChange={setValue} 
                    value={value}
                    minDate={minDate}
                    maxDate={maxDate}
                    tileDisabled={tileDisabled}
                     />
                <div className='my-3'>
                    <p className='text-md text-zinc-400 flex'><BsCheckAll className='text-lg mt-1 mr-1'/>예약일은 60일 이내까지 선택할 수 있습니다.</p>
                </div>
                <div className='my-3'>
                   선택하신 날짜는 <span className='font-semibold text-lg'>{moment(value).format("YYYY년 MM월 DD일 ")}</span>
                   입니다.
                </div>
            </div>
            <div className='w-screen p-4'>
                <input type="time" 
                    id="time-select" 
                    name="time-select"  
                    value={timePick}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:shadow-outline-brand focus:border-brand" />
                    <div className='my-3'>
                        { timePick ? <p>선택하신 시간은 <span className='font-semibold text-lg'>{moment(timePick, 'hh:mm A').format('A hh시 mm분 ').replace("AM", "오전").replace("PM", "오후")}</span>
                        입니다.</p> : ''}
                    </div>
            </div>
            <div onClick={() => alert('이사 날짜 : ' + moment(value).format("YYYY년 MM월 DD일") + '\n' + '이사 시간 : ' + moment(timePick, 'hh:mm A').format('A hh시 mm분 ').replace("AM", "오전").replace("PM", "오후"))}>
                <Link to='/address'><button className={!value || !timePick ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
            'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                disabled={!value || !timePick}>다음</button></Link>
                { value && timePick ? '' : <p className='mb-2 text-red-400 text-center'>날짜와 시간을 선택해주세요!</p> }
            </div>
        </div>
    );
}