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
import COMoveStatus from './COMoveStatus';
import Review from '../Review/Review';

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

    const reviews = {};
    if (lists) {
      for (let i = 0; i < lists.length; i++) {
        const idx = lists[i].id;
        reviews[idx] = { [idx]: false, COname: '', COId: 0 };
      }
    }

    const [btns, setBtns] = useState(buttons);
    const [idx, setIdx] = useState(null);
    const [commentBtns, setCommentBtns] = useState(buttons);
    const [commentPK, setCommentPK] = useState(null);
    const [PriceBtns, setPriceBtns] = useState(ids);
    const [PricePK, setPricePK] = useState(null);
    const [reviewBtns, setReviewBtns] = useState(reviews);
    const [reviewId, setReviewId] = useState(0);
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

    const handleOpenReview = (idx, name, id) => {
        reviewBtns[idx][idx] = true;
        reviewBtns[idx]['COname'] = name;
        reviewBtns[idx]['COId'] = id;
        setReviewId(idx);
    };

    const handleCloseReview = (idx) => {
        reviewBtns[idx][idx] = false;
        setReviewId(0);
    };
    
    return (
        <div>
            {userInfo.role === 'CU' && !lists && 
                <div className='my-4'>
                    <p className='text-center'>이사 요청서가 없습니다</p>
                    <Link to='/move'><p className='flex text-lg font-semibold items-center justify-center my-2 border border-brand p-2'><FaTruck className='text-2xl mr-1 text-brand'/> 이사서비스 바로가기</p></Link>
                </div>
            }
            {lists && <p className='flex text-xl font-bold items-center justify-center my-2'><FaTruck className='text-2xl mr-1 text-brand'/> {userInfo.role === 'CU' || movestatus === 'matching' ? '이사 요청 목록' : movestatus === 'matched' ? '이사 매칭 목록' : '이사 완료 목록'}</p>}
            {lists && lists.map((list, idx) => (
                <div key={idx} className={list.status === 'MATCHING' ? 'w-full p-2 border border-zinc-400 rounded-lg mb-4' : list.status === 'COMPLETED' ? 'w-full p-2 border-2 border-orange-400 rounded-lg mb-4' : 'w-full p-2 border border-brand rounded-lg mb-4'}>
                    <p className='text-lg text-zinc-600 font-semibold'>이사 요청서 {list.id} {list.status === 'COMPLETED' && <span className='fontbold text-orange-500'>완료</span>}</p>
                    <p className='py-2 text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>출발지 : {list.start_info.address["FullAddress"]}</p>
                    <p className='py-2 text-zinc-500 overflow-hidden whitespace-nowrap truncate w-full'>도착지 : {list.end_info.address["FullAddress"]}</p>
                    <div className='flex'>
                        <button onClick={() => handleOpenDetail(idx)} className='w-full text-center text-yellow-500 my-1 font-semibold border border-yellow-500 rounded p-2'>상세보기</button>
                        {userInfo.role === 'CO' ? 
                            <button onClick={() => handleOpenPK(list.id)} className={movestatus === 'completed' ? 'hidden' : 'w-full text-center text-orange-500 my-1 font-semibold border border-orange-500 rounded p-2 ml-3'}>{movestatus === 'matching' ? '견적 보내기' : '진행 상황 설정'}</button> : 
                            list.status !== 'COMPLETED' ? 
                            <button onClick={() => handleOpenPrice(list.id)} className='w-full text-center text-orange-500 my-1 font-semibold border border-orange-500 rounded p-2 ml-3'>견적 확인</button> : 
                            <button onClick={() => handleOpenReview(list.id, list.company.company.username, list.company.id)} className='w-full text-center text-zinc-500 my-1 font-semibold border border-zinc-500 rounded p-2 ml-3'>리뷰 작성</button>}
                    </div>
                    {movestatus !== 'matching' || userInfo.role === 'CU' && list.status !== 'MATCHING' ?
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
                </div>
            ))}
            {commentBtns[commentPK] && movestatus === 'matching' ? 
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <MoveComment pk={commentPK} onClose={() => handleClosePK(commentPK)}/>
                </div> : commentBtns[commentPK] &&
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <COMoveStatus list={lists} onClose={() => handleClosePK(commentPK)} pk={commentPK}/>
                </div>
            }
            {PriceBtns[PricePK] &&
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <MovePriceList pk={PricePK} onClose={() => handleClosePrice(PricePK)} status={statusDict[PricePK]}/>
                </div>
            }
            {btns[idx] && 
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <MoveForm detailIdx={detailIdx} onClose={() => handleCloseDetail(idx)} />
                </div>    
            }
            {reviewId !== 0 && reviewBtns[reviewId][reviewId] &&
                <div className='w-full p-4 fixed overflow-y-scroll h-full top-0 left-0 bg-white'>
                    <Review COname={reviewBtns[reviewId]['COname']} COid={reviewBtns[reviewId]['COId']} onClose={() => handleCloseReview(reviewId)} movepk={reviewId} />
                </div>
            }
        </div>
    );
}