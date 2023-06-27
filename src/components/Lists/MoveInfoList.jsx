import React, { useState } from 'react';
import { FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MoveComment from '../../api/MoveComment';
import MovePriceList from '../../api/MovePriceList';
import MoveForm from './MoveForm';
import { MdOutlineHandshake } from 'react-icons/md';
import { HiOutlineBanknotes, HiOutlineTruck } from 'react-icons/hi2';
import { BsHouseCheck } from 'react-icons/bs';
import COInfos from './COInfos';
import COMoveStatus from './COMoveStatus';

export default function MoveInfoList({ lists, movestatus }) {
    const userInfo = useSelector(state => state.user.user);
    const buttons = {};
    if (lists) {
        for (let i = 0; i < lists.length; i++) {
            buttons[i] = false;
        }
    };
    
    const ids = {};
    if (lists) {
        for (let i = 0; i < lists.length; i++) {
            ids[lists[i].id] = false;
        }
    };

    const statusDict = {};
    if (lists) {
        for (let i = 0; i < lists.length; i++) {
            statusDict[lists[i].id] = lists[i].status;
        }
    };

    const [btns, setBtns] = useState(buttons);
    const [idx, setIdx] = useState(null);
    const [commentBtns, setCommentBtns] = useState(buttons);
    const [commentPK, setCommentPK] = useState(null);
    const [PriceBtns, setPriceBtns] = useState(ids);
    const [PricePK, setPricePK] = useState(null);
    const [detailIdx, setDetailIdx] = useState(null);
    
    const handleOpenDetail = (idx) => {
        setBtns(prevBtns => ({ ...prevBtns, [idx]: true }));
        setIdx(idx);
        setDetailIdx(lists[idx]);
    };
    const handleCloseDetail = (idx) => {
        setBtns(prevBtns => ({ ...prevBtns, [idx]: false }));
    };
    
    const handleOpenPK = (idx) => {
        setCommentBtns(prevBtns => ({ ...prevBtns, [idx]: true }));
        setCommentPK(idx);
    };
    const handleClosePK = (idx) => {
        setCommentBtns(prevBtns => ({ ...prevBtns, [idx]: false }));
    };

    const handleOpenPrice = (idx) => {
        setPriceBtns(prevBtns => ({ ...prevBtns, [idx]: true }));
        setPricePK(idx);
    };
    const handleClosePrice = (idx) => {
        setPriceBtns(prevBtns => ({ ...prevBtns, [idx]: false }));
    };

    return (
        <div>
            {!lists && 
                <div className='mt-4'>
                    <p className='text-center'>이사 요청서가 없습니다</p>
                    <Link to='/move'><p className='flex text-lg font-semibold items-center justify-center my-2 border border-brand p-2'><FaTruck className='text-2xl mr-1 text-brand'/> 이사서비스 바로가기</p></Link>
                </div>
            }
            {lists && <p className='flex text-xl font-bold items-center justify-center my-2'><FaTruck className='text-2xl mr-1 text-brand'/> 이사 요청 목록</p>}
            {lists && lists.map((list, idx) => (
                <div key={idx} className={list.status === 'MATCHING' ? 'w-full p-2 border border-zinc-400 rounded-lg mb-4' : 'w-full p-2 border border-brand rounded-lg mb-4'}>
                    <p className='text-lg text-zinc-600 font-semibold'>이사 요청서 {list.id}</p>
                    <p className='py-2 text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>출발지 : {list.start_info.address["FullAddress"]}</p>
                    <p className='py-2 text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>도착지 : {list.end_info.address["FullAddress"]}</p>
                    <div className='flex'>
                        <button onClick={() => handleOpenDetail(idx)} className='w-full text-center text-yellow-500 my-1 font-semibold border border-yellow-500 rounded p-2'>상세보기</button>
                        {userInfo.role === 'CO' ? <button onClick={() => handleOpenPK(list.id)} className={movestatus === 'completed' ? 'hidden' : 'w-full text-center text-orange-500 my-1 font-semibold border border-orange-500 rounded p-2 ml-3'}>{movestatus === 'matching' ? '견적 보내기' : '진행 상황 설정'}</button> : 
                            <button onClick={() => handleOpenPrice(list.id)} className='w-full text-center text-orange-500 my-1 font-semibold border border-orange-500 rounded p-2 ml-3'>{movestatus === 'matching' ? '견적 확인' : '사업자 확인'}</button>}
                    </div>
                    {movestatus !== 'matching' && list.status !== 'MATCHING' ?
                    <div className='flex justify-around my-3 p-2 border border-zinc-300 rounded-lg'>
                        <div className='flex flex-col items-center'>
                            <MdOutlineHandshake className='text-3xl text-brand'/>
                            <p className='text-sm text-brand mt-1'>매칭</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <HiOutlineBanknotes className={list.status !== 'MATCHED' ? 'text-3xl text-brand' : 'text-3xl text-zinc-400'}/>
                            <p className={list.status !== 'MATCHED' ? 'text-sm text-brand mt-1' : 'text-sm text-zinc-500 mt-1'}>입금확인</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <HiOutlineTruck className={list.status === 'PREPARING' || list.status === 'COMPLETED' ? 'text-3xl text-brand' : 'text-3xl text-zinc-400'}/>
                            <p className={list.status === 'PREPARING' || list.status === 'COMPLETED' ? 'text-sm text-brand mt-1' : 'text-sm text-zinc-500 mt-1'}>준비중</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BsHouseCheck className={list.status === 'COMPLETED' ? 'text-3xl text-brand' : 'text-3xl text-zinc-400'}/>
                            <p className={list.status === 'COMPLETED' ? 'text-sm text-brand mt-1' : 'text-sm text-zinc-500 mt-1'}>운송완료</p>
                        </div>
                    </div> :
                    ''
                    }
                    {list.status === 'COMPLETED' && userInfo.role === 'CU' ?
                    <button className='w-full text-center p-2 border border-zinc-400 font-semibold rounded-lg text-zinc-500 mb-3'>리뷰쓰기</button> : ''
                    }
                </div>
            ))}
            {commentBtns[commentPK] && movestatus === 'matching' ? 
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <MoveComment pk={commentPK + 1} onClose={() => handleClosePK(commentPK)}/>
                </div> : commentBtns[commentPK] &&
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <COMoveStatus list={lists} onClose={() => handleClosePK(commentPK)} pk={commentPK}/>
                </div>
            }
            {PriceBtns[PricePK] && movestatus === 'matching' ?
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <MovePriceList pk={PricePK} onClose={() => handleClosePrice(PricePK)} status={statusDict[PricePK]}/>
                </div> : PriceBtns[PricePK] &&
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <COInfos list={lists} onClose={() => handleClosePrice(PricePK)} pk={PricePK}/>
                </div>
                
            }
            {btns[idx] && 
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <MoveForm detailIdx={detailIdx} onClose={() => handleCloseDetail(idx)} role={userInfo.role} idx={idx} PricePK={PricePK} />
                </div>    
            }
        </div>
    );
}