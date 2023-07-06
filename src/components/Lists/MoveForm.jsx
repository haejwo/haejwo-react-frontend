import React from 'react';

export default function MoveForm({ detailIdx, onClose }) {
    return (
        <div>
            <p className='text-center p-4 font-bold text-xl'>이사 요청서 {detailIdx.id}</p>
            <div>
                <div className='flex justify-around border border-zinc-400 p-3'>
                    {detailIdx.size_type === 'BIG' ? <p>20평대 이상</p> : <p>20평대 미만</p>}
                    {detailIdx.packing_type === 'PACKING' ? <p className='border-x-2 px-3' >포장이사</p> : detailIdx.packing_type === 'SEMIPACKING' ? <p className='border-x-2 px-3'>반포장이사</p> : <p className='border-x-4 px-3'> 일반이사</p>}
                    {!detailIdx.customer_support ? '이사 도움 없음' : '이사 도움 있음'}
                </div>
                <div className='flex justify-between border border-x-zinc-400 border-b-zinc-400 p-3 bg-yellow-100'>
                    <div className='w-1/2 flex justify-around border-r-2 border-zinc-400'>
                        <p>날짜</p>
                        <p className='font-bold'>{detailIdx.date}</p>
                    </div>
                    <div className='w-1/2 flex justify-around'>
                        <p>시간</p>
                        <p className='font-bold'>{detailIdx.time}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between border border-x-zinc-400 border-b-zinc-400 p-3'>
                    <p className='font-bold mb-1'>출발지 정보</p>
                    <div className='flex flex-col text-zinc-600 overflow-hidden whitespace-nowrap truncate w-full'>
                        <p>{detailIdx.start_info.address["FullAddress"]}</p>
                        <span>{detailIdx.start_info.address["ExtraAddress"]}</span>
                    </div>
                    <div className='flex my-2 text-zinc-600'>
                        <p className='pr-2 border-r-2 border-zinc-300'>{detailIdx.start_info.infos["건물 종류"]}</p>
                        <p className='px-2 border-r-2 border-zinc-300'>{detailIdx.start_info.infos["방 구조"]}</p>
                        <p className='px-2 border-r-2 border-zinc-300'>{detailIdx.start_info.infos["층"]}</p>
                        <p className='px-2'>{detailIdx.start_info.infos["평수"]}</p>
                    </div>
                    <div className='flex pb-2 pt-1'>
                        {detailIdx.start_info.infos['공동현관 앞 계단 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>현관계단 있음</p> : ''}
                        {detailIdx.start_info.infos['엘리베이터 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>엘리베이터 있음</p> : ''}
                        {detailIdx.start_info.infos['주차 가능 여부'] === '가능' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>주차 가능</p> : ''}
                    </div>
                </div>
                <div className='flex flex-col justify-between border border-x-zinc-400 border-b-zinc-400 p-3'>
                    <p className='font-bold mb-1'>도착지 정보</p>
                    <div className='flex flex-col text-zinc-600 overflow-hidden whitespace-nowrap truncate w-full'>
                        <p>{detailIdx.end_info.address["FullAddress"]}</p>
                        <span>{detailIdx.end_info.address["ExtraAddress"]}</span>
                    </div>
                    <div className='flex my-2 text-zinc-600'>
                        <p className='pr-2 border-r-2 border-zinc-300'>{detailIdx.end_info.infos["건물 종류"]}</p>
                        <p className='px-2 border-r-2 border-zinc-300'>{detailIdx.end_info.infos["방 구조"]}</p>
                        <p className='px-2 border-r-2 border-zinc-300'>{detailIdx.end_info.infos["층"]}</p>
                        <p className='px-2'>{detailIdx.end_info.infos["평수"]}</p>
                    </div>
                    <div className='flex pb-2 pt-1'>
                        {detailIdx.end_info.infos['공동현관 앞 계단 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>현관계단 있음</p> : ''}
                        {detailIdx.end_info.infos['엘리베이터 유무'] === '있음' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>엘리베이터 있음</p> : ''}
                        {detailIdx.end_info.infos['주차 가능 여부'] === '가능' ? <p className='p-1 mr-2 rounded bg-yellow-100 text-yellow-500 font-semibold text-sm'>주차 가능</p> : ''}
                    </div>
                </div>
                <div className='flex flex-col justify-between border border-x-zinc-400 border-b-zinc-400 p-3'>
                    <p className='font-bold mb-1'>짐 정보</p>
                    {detailIdx.luggage_info["침실/거실가구"] &&
                        <div className='my-1'>
                            <p className='font-semibold text-zinc-500 mb-2'>침실/거실가구</p>
                            <div className='grid grid-cols-2 gap-1 border border-zinc-300 bg-yellow-100 p-2 flex justify-between'>
                                {detailIdx.luggage_info["침실/거실가구"] && Object.entries(detailIdx.luggage_info["침실/거실가구"]).map(([key, value], idx) => (value === 0 ? '' : 
                                    <div key={idx} className='flex justify-around border-r-2 border-zinc-200'>
                                        <p>{key}</p>
                                        <p className='font-semibold'>{value}개</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    {detailIdx.luggage_info["서재가구"] &&
                        <div className='my-1'>
                            <p className='font-semibold text-zinc-500 mb-2'>서재가구</p>
                            <div className='grid grid-cols-2 gap-1 border border-zinc-300 bg-yellow-100 p-2 flex justify-between'>
                                {detailIdx.luggage_info["서재가구"] && Object.entries(detailIdx.luggage_info["서재가구"]).map(([key, value], idx) => (value === 0 ? '' : 
                                    <div key={idx} className='flex justify-around border-r-2 border-zinc-200'>
                                        <p>{key}</p>
                                        <p className='font-semibold'>{value}개</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    {detailIdx.luggage_info["생활가전"] &&
                        <div className='my-1'>
                            <p className='font-semibold text-zinc-500 mb-2'>생활가전</p>
                            <div className='grid grid-cols-2 gap-1 border border-zinc-300 bg-yellow-100 p-2 flex justify-between'>
                                {detailIdx.luggage_info["생활가전"] && Object.entries(detailIdx.luggage_info["생활가전"]).map(([key, value], idx) => (value === 0 ? '' : 
                                    <div key={idx} className='flex justify-around border-r-2 border-zinc-200'>
                                        <p>{key}</p>
                                        <p className='font-semibold'>{value}개</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    {detailIdx.luggage_info["주방가전"] &&
                        <div className='my-1'>
                            <p className='font-semibold text-zinc-500 mb-2'>주방가전</p>
                            <div className='grid grid-cols-2 gap-1 border border-zinc-300 bg-yellow-100 p-2 flex justify-between'>
                                {detailIdx.luggage_info["주방가전"] && Object.entries(detailIdx.luggage_info["주방가전"]).map(([key, value], idx) => (value === 0 ? '' : 
                                    <div key={idx} className='flex justify-around border-r-2 border-zinc-200'>
                                        <p>{key}</p>
                                        <p className='font-semibold'>{value}개</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    {detailIdx.luggage_info["기타"] && 
                        <div className='my-1'>
                            <p className='font-semibold text-zinc-500 mb-2'>기타</p>
                            <div className='grid grid-cols-2 gap-1 border border-zinc-300 bg-yellow-100 p-2 flex justify-between'>
                                {detailIdx.luggage_info["기타"] && Object.entries(detailIdx.luggage_info["기타"]).map(([key, value], idx) => (value === 0 ? '' : 
                                    <div key={idx} className='flex justify-around border-r-2 border-zinc-200'>
                                        <p>{key}</p>
                                        <p className='font-semibold'>{value}개</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }    
                </div>
                <div className='flex flex-col justify-between border border-x-zinc-400 border-b-zinc-400 p-3'>
                    <p className='font-bold mb-2'>요청 사항</p>
                    <textarea className='border border-zinc-400 rounded-lg p-2 text-zinc-600' rows="5" value={detailIdx.content} readOnly />
                </div>
                <div className='flex flex-col justify-between border border-x-zinc-400 border-b-zinc-400 p-3'>
                    <p className='font-bold mb-2'>방 사진</p>
                    <div className='grid grid-cols-3 gap-1 border-b-2 border-zinc-200 p-2'>
                        {Object.entries(detailIdx.images).map((img) => <img key={img[0]} src={img[1].image}/>)}
                    </div>
                </div>                        
            </div>
            <button onClick={onClose} className='my-4 w-full py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>닫기</button>
        </div>
    );
}