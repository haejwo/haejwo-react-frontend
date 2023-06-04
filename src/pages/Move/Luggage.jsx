import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import LuggageItems from '../../components/LuggageItems/LuggageItems';

export default function Luggage() {
    const infos = useSelector(state => state.move.move);

    const [item, setItem] = useState({});
    const handleCnt = (title, cnt) => setItem({...item, [title]: cnt });
    console.log(item);

    return (
        <div className='flex flex-col items-center p-4'>
            <div className='flex'>
                <p className='font-bold text-xl my-2'>짐 정보를 입력해주세요</p>
                <Link to='/'><RxCross2 className='text-zinc-400 mt-2.5 ml-2 text-2xl'/></Link>
            </div>
            <div>
                <LuggageItems title='침실/거실가구' itemList={bedroom} itemcnt={handleCnt}/>
                <LuggageItems title='서재가구' itemList={office} itemcnt={handleCnt}/>
                <LuggageItems title='생활가전' itemList={digital} itemcnt={handleCnt}/>
                <LuggageItems title='주방가전' itemList={kitchen} itemcnt={handleCnt}/>
                <LuggageItems title='기타' itemList={etc} itemcnt={handleCnt}/>
            </div>
        </div>
    );
}

const bedroom = [
    {
        item: "침대",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "옷장",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "연결장",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "시스템 행거",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "행거",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "수납장",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "테이블/식탁",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "화장대",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "소파",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "커튼",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
]

const kitchen = [
    {
        item: "냉장고",
        icon: "",
    },
    {
        item: "전자레인지",
        icon: "",
    },
    {
        item: "정수기",
        icon: "",
    },
    {
        item: "가스레인지",
        icon: "",
    },
]

const office = [
    {
        item: "책상",
        icon: "",
    },
    {
        item: "의자",
        icon: "",
    },
    {
        item: "책장",
        icon: "",
    },
    {
        item: "서랍",
        icon: "",
    },
]

const digital = [
    {
        item: "TV/모니터",
        icon: "",
    },
    {
        item: "PC/데스크탑",
        icon: "",
    },
    {
        item: "에어컨",
        icon: "",
    },
    {
        item: "세탁기",
        icon: "",
    },
    {
        item: "건조기",
        icon: "",
    },
    {
        item: "공기청정기",
        icon: "",
    },
    {
        item: "의류관리기",
        icon: "",
    },
    {
        item: "청소기",
        icon: "",
    },
]

const etc = [
    {
        item: "거울",
        icon: "",
    },
    {
        item: "악기",
        icon: "",
    },
    {
        item: "비데",
        icon: "",
    },
    {
        item: "운동용품",
        icon: "",
    },
    {
        item: "화분",
        icon: "",
    },
    {
        item: "안마의자",
        icon: "",
    },
    {
        item: "캣타워",
        icon: "",
    },
    {
        item: "유모차",
        icon: "",
    },
    {
        item: "책",
        icon: "",
    },
    {
        item: "빨래건조대",
        icon: "",
    },
]