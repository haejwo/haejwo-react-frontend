import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BsCheckAll } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineDoubleLeft } from 'react-icons/ai';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { saveDate, saveTime } from '../../app/moveactions';

export default function DatePicker() {
    const movesize = useSelector(state => state.move.move.size_type);
    const dispatch = useDispatch();
    
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked((prev) => !prev);

    const handleSave = () => {
        dispatch(saveDate(moment(value).format("YYYY-MM-DD")));
        dispatch(saveTime(moment(timePick, 'hh:mm A').format('HH:MM')));
    };
    
    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center p-4'>
                <Link to={movesize === 'BIG' ? '/more20' : '/less20'}><AiOutlineDoubleLeft className='text-zinc-400 mr-2 text-2xl'/></Link>
                <p className='font-bold text-lg my-3'>날짜와 시간을 선택해주세요 ( 2 / 6 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></Link>
            </div>
            <div className='my-3'>
                <div className='border-2 border-yellow-200'>
                    <Calendar 
                        className='custom-calendar'
                        onChange={setValue} value={value}
                        minDate={minDate} maxDate={maxDate}
                        tileDisabled={tileDisabled}
                        next2Label={null} prev2Label={null}
                        formatDay={(locale, date) => moment(date).format("DD")}
                        />
                </div>
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
            <div>
                <input type="checkbox" name="" id="check" value={checked} onChange={handleCheck} onClick={openModal} />
                <label htmlFor="check" className='text-lg font-bold'> 정확한 날짜와 시간은 조정될 수 있습니다.</label>
                { checked ? '' : <p className='my-2 text-center text-red-400'>필수 체크 사항을 확인해주세요!</p> }
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className='font-notice px-8'>
                        <h1 className='font-bold text-2xl mb-4'>이사요청 날짜와 시간</h1>
                        <p className='text-lg mb-1 flex items-center text-zinc-600'><AiOutlineCalendar className='mr-1 text-xl'/>이사 날짜</p>
                        <p className='text-xl font-bold mb-3 ml-5 text-yellow-600'>{moment(value).format("YYYY년 MM월 DD일")}</p>
                        <p className='text-lg mb-1 flex items-center text-zinc-600'><AiOutlineClockCircle className='mr-1 text-xl'/>이사 시간</p>
                        <p className='text-xl font-bold mb-3 ml-5 text-yellow-600'>{moment(timePick, 'hh:mm A').format('A hh시 mm분 ').replace("AM", "오전").replace("PM", "오후")}</p>
                    </div>
                </Modal>
            </div>
            <Link to='/address'><button onClick={handleSave} className={!value || !timePick || !checked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
            'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
            disabled={!value || !timePick || !checked}>다음</button></Link>
            { value && timePick ? '' : <p className='mb-2 text-red-400 text-center'>날짜와 시간을 선택해주세요!</p> }
        </div>
    );
}