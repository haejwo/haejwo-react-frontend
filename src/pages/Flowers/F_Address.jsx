import React, { useState } from 'react';
import { HiOutlineMapPin, HiMapPin } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddressInput from '../../components/AddressDetail/AddressInput';
import { useDispatch } from 'react-redux';
import { saveStart, saveEnd } from '../../app/floweractions';

export default function F_Address() {
    const dispatch = useDispatch();
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEndModalVisible, setIsEndModalVisible] = useState(false); 
    const handleClick = () => { setIsModalVisible(true); };
    const handleEndClick = () => { setIsEndModalVisible(true); };

    const [startAddress, setStartAddress] = useState(null);
    const handleAddress = (address) => setStartAddress(address);
    const handleSave = () => setIsModalVisible(false);
    const [startChecked, setStartChecked] = useState(false);
    const handleCheck = (check) => setStartChecked(!check);
    
    const [endAddress, setEndAddress] = useState(null);
    const handleEndAddress = (address) => setEndAddress(address);
    const handleEndSave = () => setIsEndModalVisible(false);
    const [endChecked, setEndChecked] = useState(false);
    const handleEndCheck = (check) => setEndChecked(!check);

    const handleNext = () => { dispatch(saveStart(startAddress)); dispatch(saveEnd(endAddress)); }

    return (
        <div className='w-screen flex flex-col items-center p-4'>
            <div className='flex mb-8 items-center'>
                <Link to='/flower/datepick'><AiOutlineDoubleLeft className='text-zinc-400 mr-2 text-2xl'/></Link>
                <p className='font-bold text-lg my-3'>배송지를 입력해주세요 ( 3 / 5 )</p>
                <Link to='/'><RxCross2 className='text-zinc-400 ml-2 text-2xl'/></Link>
            </div>
            <div className='w-full mb-4'>
                <button onClick={handleClick} className={!startAddress ? 'w-full border border-zinc-400 rounded flex flex-col p-3' : 'w-full border-2 border-brand rounded flex flex-col p-3'}>
                  <p className='text-xl font-semibold flex items-center'>출발지 상세정보 <span>{!startAddress ? <HiOutlineMapPin className='text-zinc-400 text-2xl'/> : <HiMapPin className='text-brand text-2xl'/>}</span></p>
                  {startAddress && <p className='flex justify-start py-2 text-lg text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>{startAddress.FullAddress}</p>}
                </button>
                { isModalVisible && 
                  <div className='fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <p className='text-xl font-bold text-center my-5'>출발지 정보를 입력하세요</p>
                    <AddressInput addressInfo={handleAddress} boxCheck={handleCheck}/>
                    <button onClick={handleSave} className={!startChecked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                        'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                        disabled={!startChecked}>출발지 정보입력</button>
                  </div>
                }
            </div>
            <div className='w-full mb-4'>
                <button onClick={handleEndClick} className={!endAddress ? 'w-full border border-zinc-400 rounded flex flex-col p-3' : 'w-full border-2 border-brand rounded flex flex-col p-3'}>
                  <p className='text-xl font-semibold flex items-center'>도착지 상세정보 <span>{!endAddress ? <HiOutlineMapPin className='text-zinc-400 text-2xl'/> : <HiMapPin className='text-brand text-2xl'/>}</span></p>
                  {endAddress && <p className='flex justify-start py-2 text-lg text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>{startAddress.FullAddress}</p>}
                </button>
                { isEndModalVisible && 
                  <div className='fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <p className='text-xl font-bold text-center my-5'>출발지 정보를 입력하세요</p>
                    <AddressInput addressInfo={handleEndAddress} boxCheck={handleEndCheck}/>
                    <button onClick={handleEndSave} className={!endChecked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                        'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                        disabled={!endChecked}>출발지 정보입력</button>
                  </div>
                }
            </div>
            <Link to='/flower/details'><button onClick={handleNext} className={!startAddress || !endAddress ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
            'my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
            disabled={!startAddress || !endAddress}>다음</button></Link>
            { startAddress && endAddress ? '' : <p className='mb-2 text-red-400 text-center'>출발지와 도착지 정보를 입력해주세요!</p> }
        </div>
    );
}