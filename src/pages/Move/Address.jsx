import React, { useState } from 'react';
import { HiOutlineMapPin, HiMapPin } from 'react-icons/hi2';
import AddressDetail from '../../components/AddressDetail/AddressDetail';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveStart, saveEnd } from '../../app/moveactions';

export default function Address() {
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEndModalVisible, setIsEndModalVisible] = useState(false); 
    const handleClick = () => { setIsModalVisible(true); };
    const handleEndClick = () => { setIsEndModalVisible(true); };

    const [startInfos, setStartInfos] = useState({});
    const [startAddress, setStartAddress] = useState(null);
    const [startSelectedInfos, setStartSelectedInfos] = useState(null);
    const [startChecked, setStartChecked] = useState(false);
    const handleSelectedInfos = (infos) => setStartSelectedInfos(infos);
    const handleAddress = (address) => setStartAddress(address);
    const handleCheck = (check) => setStartChecked(!check);
    const handleSave = () => {
      setIsModalVisible(false);
      setStartInfos({ ...startInfos, address: startAddress, infos: startSelectedInfos });
    };

    const [endInfos, setEndInfos] = useState({});
    const [endAddress, setEndAddress] = useState(null);
    const [endSelectedInfos, setEndSelectedInfos] = useState(null);
    const [endChecked, setEndChecked] = useState(false);
    const handleEndSelectedInfos = (infos) => setEndSelectedInfos(infos);
    const handleEndAddress = (address) => setEndAddress(address);
    const handleEndCheck = (check) => setEndChecked(!check);
    const handleEndSave = () => {
      setIsEndModalVisible(false);
      setEndInfos({ ...endInfos, address: endAddress, infos: endSelectedInfos });
    };

    const handleNext = () => { dispatch(saveStart(startInfos)); dispatch(saveEnd(endInfos)); }

    return (
        <div className='w-screen'>
            <div className='w-full p-4 text-center mb-8'>
                <p className='font-bold text-lg my-3'>출발지와 도착지를 입력해주세요 ( 3 / 6 )</p>
            </div>
            <div className='w-full p-4'>
                <button onClick={handleClick} className={!startAddress ? 'w-full border border-zinc-400 rounded flex flex-col p-3' : 'w-full border-2 border-brand rounded flex flex-col p-3'}>
                  <p className='text-xl font-semibold flex items-center'>출발지 상세정보 <span>{!startAddress ? <HiOutlineMapPin className='text-zinc-400 text-2xl'/> : <HiMapPin className='text-brand text-2xl'/>}</span></p>
                  {startAddress && <p className='flex justify-start py-2 text-lg text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>{startAddress.FullAddress}</p>}
                  {startSelectedInfos &&
                    <div className='flex my-1 text-zinc-600 text-sm'>
                      <p className='pr-2 border-r-2 border-zinc-300'>{startSelectedInfos['건물 종류']}</p>
                      <p className='px-2 border-r-2 border-zinc-300'>{startSelectedInfos['방 구조']}</p>
                      <p className='px-2 border-r-2 border-zinc-300'>{startSelectedInfos['평수']}</p>
                      <p className='px-2'>{startSelectedInfos['층']}</p>
                    </div>
                  }
                  {startSelectedInfos &&
                    <div className='flex pb-2 pt-1'>
                      {startSelectedInfos['공동현관 앞 계단 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>현관계단 있음</p> : ''}
                      {startSelectedInfos['엘리베이터 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>엘리베이터 있음</p> : ''}
                      {startSelectedInfos['주차 가능 여부'] === '가능' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>주차 가능</p> : ''}
                    </div>
                  }
                </button>
                { isModalVisible && 
                  <div className='fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <p className='text-xl font-bold text-center my-5'>출발지 정보를 입력하세요</p>
                    <AddressDetail addressInfo={handleAddress} selectedInfo={handleSelectedInfos} boxCheck={handleCheck}/>
                    <button onClick={handleSave} className={!startChecked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                        'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                        disabled={!startChecked}>출발지 정보입력</button>
                    { startChecked ? '' : <p className='mb-2 text-red-400 text-center'>체크 사항을 확인해주세요!</p> }
                  </div>
                }
            </div>
            <div className='w-full my-5 p-4'>
                <button onClick={handleEndClick} className={!endAddress ? 'w-full border border-zinc-400 rounded flex flex-col p-3' : 'w-full border-2 border-brand rounded flex flex-col p-3'}>
                  <p className='text-xl font-semibold flex items-center'>도착지 상세정보 <span>{!endAddress ? <HiOutlineMapPin className='text-zinc-400 text-2xl'/> : <HiMapPin className='text-brand text-2xl'/>}</span></p>
                  {endAddress && <p className='flex justify-start py-2 text-lg text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>{endAddress.FullAddress}</p>}
                  {endSelectedInfos &&
                    <div className='flex my-1 text-zinc-600 text-sm'>
                      <p className='pr-2 border-r-2 border-zinc-300'>{endSelectedInfos['건물 종류']}</p>
                      <p className='px-2 border-r-2 border-zinc-300'>{endSelectedInfos['방 구조']}</p>
                      <p className='px-2 border-r-2 border-zinc-300'>{endSelectedInfos['평수']}</p>
                      <p className='px-2'>{endSelectedInfos['층']}</p>
                    </div>
                  }
                  {endSelectedInfos &&
                    <div className='flex pb-2 pt-1'>
                      {endSelectedInfos['공동현관 앞 계단 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>현관계단 있음</p> : ''}
                      {endSelectedInfos['엘리베이터 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>엘리베이터 있음</p> : ''}
                      {endSelectedInfos['주차 가능 여부'] === '가능' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>주차 가능</p> : ''}
                    </div>
                  }
                </button>
                { isEndModalVisible && 
                  <div className='fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <p className='text-xl font-bold text-center my-5'>도착지 정보를 입력하세요</p>
                    <AddressDetail addressInfo={handleEndAddress} selectedInfo={handleEndSelectedInfos} boxCheck={handleEndCheck}/>
                    <button onClick={handleEndSave} className={!endChecked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
                        'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                        disabled={!endChecked}>도착지 정보입력</button>
                    { endChecked ? '' : <p className='mb-2 text-red-400 text-center'>체크 사항을 확인해주세요!</p> }
                  </div>
                }
            </div>
            <Link to='/luggage'><button onClick={handleNext} className={!startAddress || !endAddress ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
            'my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'} 
            disabled={!startAddress || !endAddress}>다음</button></Link>
            { startAddress && endAddress ? '' : <p className='mb-2 text-red-400 text-center'>출발지와 도착지 정보를 입력해주세요!</p> }
        </div>
    );
}