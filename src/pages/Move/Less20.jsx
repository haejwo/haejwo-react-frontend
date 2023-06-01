import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Less20() {
    const [moveChoice, setMoveChoice] = useState('normal');
    const handleClick = (choice) => { setMoveChoice(choice) };
    const [moveHelp, setMoveHelp] = useState('no');
    const handleToggle = (helps) => { setMoveHelp(helps) };
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);
    const moveInfo = useSelector(state => state.move);
    console.log(moveInfo);
    
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col items-center p-4'>
                <p className='font-bold text-lg my-3'>이사 종류를 선택해주세요 ( 1 / 6 )</p>
                <div className='w-full flex justify-center my-4'>
                    <button onClick={() => handleClick('normal')}
                        className={ moveChoice === 'normal' ? 
                        'w-1/3 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                        'w-1/3 font-semibold text-zinc-500 py-2 border border-zinc-200' }>일반</button>
                    <button onClick={() => handleClick('semipack')}
                        className={ moveChoice === 'semipack' ? 
                        'w-1/3 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                        'w-1/3 font-semibold text-zinc-500 py-2 border border-zinc-200' }>반포장</button>
                    <button onClick={() => handleClick('pack')}
                        className={ moveChoice === 'pack' ? 
                        'w-1/3 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                        'w-1/3 font-semibold text-zinc-500 py-2 border border-zinc-200' }>포장</button>
                </div>
            </div>
            <div className='flex flex-col items-center p-4'>
                { moveChoice === 'normal' ?
                    <div> 
                        <img src="https://img.freepik.com/free-vector/house-moving-concept-with-couple_23-2148658324.jpg?size=626&ext=jpg&ga=GA1.1.1862743365.1677328339&semt=sph" alt="" />
                        <p className='text-2xl font-bold my-4'>일반 이사</p>
                        <p>파트너님이 포장된 짐을 목적지 공간까지 이동/운반하는 서비스입니다.</p>
                    </div>
                : moveChoice === 'semipack' ?
                    <div> 
                        <img src="https://img.freepik.com/free-vector/people-moving-furniture-illustrated_23-2148677772.jpg?size=626&ext=jpg&ga=GA1.1.1862743365.1677328339&semt=sph" alt="" />
                        <p className='text-2xl font-bold my-4'>반포장 이사</p>
                        <p>파트너님과 함께 짐을 포장하고 목적지에 운반하여 가구배치까지 진행하는 서비스입니다.</p>
                    </div>
                :
                    <div> 
                        <img src="https://img.freepik.com/free-vector/house-moving-concept-illustration_23-2148651548.jpg?w=900&t=st=1682227403~exp=1682228003~hmac=61172ad9ad408a41376b40f734eb0b9decad8c68be7c39c72cfe12ef820d5aa3" alt="" />
                        <p className='text-2xl font-bold my-4'>포장 이사</p>
                        <p>포장, 운반, 이동, 가구배치, 정리까지 파트너님과 모든 이사 과정을 진행하는 서비스입니다.</p>
                    </div>
                }
            </div>
            <div className='w-full p-4'>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>주요 차량</p>
                    <p className='font-bold text-lg'>1톤</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>업체 구성</p>
                    <p className='font-bold text-lg'>소형 이사 전문 업체</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>평균 작업 인원</p>
                    <p className='font-bold text-lg'>1 ~ 2명</p>
                </div>
                <div className='flex justify-between my-2'>
                    <p className='text-zinc-400 font-semibold'>추천 평수</p>
                    <p className='font-bold text-lg'>20평 미만</p>
                </div>
            </div>
            <div className='w-screen'>
                { moveChoice === 'normal' ? 
                <div className='w-full bg-zinc-100 p-4'>
                    <p className='text-lg font-semibold my-3'>서비스 이용 전 <span className='text-red-600 font-bold'>필수 체크 사항</span> !</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 이사 전까지 모든 포장을 완료해야합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반된 짐의 파손이나 분실여부를 확인합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반 후의 이사 사항은 직접 마무리합니다.</p>
                </div>
                : moveChoice === 'semipack' ?
                 <div className='w-full bg-zinc-100 p-4'>
                    <p className='text-lg font-semibold my-3'>서비스 이용 전 <span className='text-red-600 font-bold'>필수 체크 사항</span> !</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 이사 전까지 귀중품 및 고가의 상품을 확인 및 별도 보관해야합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 제공된 박스로 함께 포장을 진행합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반된 짐의 파손이나 분실여부를 확인합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 도착지에서 가구가 배치될 장소를 안내해야합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반된 박스의 짐은 직접 정리해야합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반 후의 이사 사항은 직접 마무리합니다.</p>
                </div>
                :
                <div className='w-full bg-zinc-100 p-4'>
                    <p className='text-lg font-semibold my-3'>서비스 이용 전 <span className='text-red-600 font-bold'>필수 체크 사항</span> !</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 이사 전까지 귀중품 및 고가의 상품을 확인 및 별도 보관해야합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 운반된 짐의 파손이나 분실여부를 확인합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 도착지에서 가구와 짐이 배치될 장소를 안내해야합니다.</p>
                    <p className='flex mb-2'><AiOutlineCheck className='mt-1 mr-2'/> 완료된 이사를 파트너님과 함께 검수합니다.</p>
                </div>
                }
            </div>
            <div className='w-screen p-4'>
                { moveChoice === 'pack' ? '' : 
                <div className='w-full my-4'>
                    <p className='text-lg font-bold'>이사 도움 인원 여부</p>
                    <p className='my-3'>고객 본인 혹은 파트너님과 함께 무거운 짐(냉장고, 침대 등)을 함께 운반할 수 있는 인원이 있나요?</p>
                    <p className='text-zinc-400'>'있음'을 선택한 경우 반드시 운반 과정에 동참해야합니다.</p>
                    <div className='flex justify-center my-4'>
                        <button onClick={() => handleToggle('yes')}
                            className={ moveHelp === 'yes' ? 
                            'w-1/2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                            'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200' 
                            }
                        >있음</button>
                        <button onClick={() => handleToggle('no')}
                            className={ moveHelp === 'no' ? 
                            'w-1/2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                            'w-1/2 font-semibold text-zinc-500 py-2 border border-zinc-200' 
                            }
                        >없음</button>
                    </div>
                </div> 
                }
            </div>
            <div className='my-3'>
                <input type="checkbox" name="" id="check" value={checked} onChange={handleChange} />
                <label htmlFor="check" className='text-lg font-bold'> 필수 체크 사항을 확인했습니다.</label>
            </div>
            <Link to='/datepick'><button className={!checked ? 'my-4 w-screen py-2 font-semibold border border-zinc-200 text-zinc-500' : 
            'my-4 w-screen py-2 font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100'} 
                disabled={!checked}>다음</button></Link>
            { checked ? '' : <p className='mb-2 text-red-400'>필수 체크 사항을 확인해주세요!</p> }
        </div>
    );
}