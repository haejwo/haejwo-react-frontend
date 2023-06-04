import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveLuggage } from '../../app/moveactions';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import LuggageItems from '../../components/LuggageItems/LuggageItems';

export default function Luggage() {
    const infos = useSelector(state => state.move.move);
    console.log(infos);
    const dispatch = useDispatch();

    const [item, setItem] = useState({});
    const handleCnt = (title, cnt) => setItem({...item, [title]: cnt });
    
    const handleSave = () => { dispatch(saveLuggage(item)); }

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
            <Link to='/luggage'>
                <button onClick={handleSave} className='my-4 w-screen py-2 font-semibold text-brand border border-yellow-200 bg-yellow-100'>
                    다음
                </button>
            </Link>
        </div>
    );
}

const bedroom = [
    {
        item: "침대",
        icon: "https://cdn-icons-png.flaticon.com/128/3030/3030336.png",
    },
    {
        item: "매트리스",
        icon: "https://cdn-icons-png.flaticon.com/128/5091/5091269.png",
    },
    {
        item: "옷장",
        icon: "https://cdn-icons-png.flaticon.com/128/114/114829.png",
    },
    {
        item: "연결장",
        icon: "https://cdn-icons-png.flaticon.com/128/4782/4782519.png",
    },
    {
        item: "시스템 행거",
        icon: "https://cdn-icons-png.flaticon.com/128/5995/5995402.png",
    },
    {
        item: "행거",
        icon: "https://cdn-icons-png.flaticon.com/128/10472/10472850.png",
    },
    {
        item: "수납장",
        icon: "https://cdn-icons-png.flaticon.com/128/1116/1116122.png",
    },
    {
        item: "테이블/식탁",
        icon: "https://cdn-icons-png.flaticon.com/128/1663/1663834.png",
    },
    {
        item: "화장대",
        icon: "https://cdn-icons-png.flaticon.com/128/8383/8383055.png",
    },
    {
        item: "소파",
        icon: "https://cdn-icons-png.flaticon.com/128/1010/1010398.png",
    },
    {
        item: "커튼",
        icon: "https://cdn-icons-png.flaticon.com/128/638/638172.png",
    },
]

const kitchen = [
    {
        item: "냉장고",
        icon: "https://cdn-icons-png.flaticon.com/128/3441/3441529.png",
    },
    {
        item: "전자레인지",
        icon: "https://cdn-icons-png.flaticon.com/128/4969/4969547.png",
    },
    {
        item: "정수기",
        icon: "https://cdn-icons-png.flaticon.com/128/3097/3097663.png",
    },
    {
        item: "가스레인지",
        icon: "https://cdn-icons-png.flaticon.com/128/3100/3100641.png",
    },
]

const office = [
    {
        item: "책상",
        icon: "https://cdn-icons-png.flaticon.com/128/3071/3071718.png",
    },
    {
        item: "의자",
        icon: "https://cdn-icons-png.flaticon.com/128/664/664374.png",
    },
    {
        item: "책장",
        icon: "https://cdn-icons-png.flaticon.com/128/1133/1133838.png",
    },
    {
        item: "서랍",
        icon: "https://cdn-icons-png.flaticon.com/128/6403/6403980.png",
    },
]

const digital = [
    {
        item: "TV/모니터",
        icon: "https://cdn-icons-png.flaticon.com/128/3566/3566955.png",
    },
    {
        item: "PC/데스크탑",
        icon: "https://cdn-icons-png.flaticon.com/128/2004/2004580.png",
    },
    {
        item: "에어컨",
        icon: "https://cdn-icons-png.flaticon.com/128/900/900233.png",
    },
    {
        item: "세탁기",
        icon: "https://cdn-icons-png.flaticon.com/128/1104/1104590.png",
    },
    {
        item: "건조기",
        icon: "https://cdn-icons-png.flaticon.com/128/518/518923.png",
    },
    {
        item: "공기청정기",
        icon: "https://cdn-icons-png.flaticon.com/128/5713/5713479.png",
    },
    {
        item: "의류관리기",
        icon: "https://cdn-icons-png.flaticon.com/128/160/160681.png",
    },
    {
        item: "청소기",
        icon: "https://cdn-icons-png.flaticon.com/128/3365/3365798.png",
    },
]

const etc = [
    {
        item: "거울",
        icon: "https://cdn-icons-png.flaticon.com/128/670/670605.png",
    },
    {
        item: "악기",
        icon: "https://cdn-icons-png.flaticon.com/128/2685/2685924.png",
    },
    {
        item: "비데",
        icon: "https://cdn-icons-png.flaticon.com/128/4315/4315770.png",
    },
    {
        item: "운동용품",
        icon: "https://cdn-icons-png.flaticon.com/128/2906/2906741.png",
    },
    {
        item: "화분",
        icon: "https://cdn-icons-png.flaticon.com/128/628/628365.png",
    },
    {
        item: "안마의자",
        icon: "https://cdn-icons-png.flaticon.com/128/5863/5863151.png",
    },
    {
        item: "캣타워",
        icon: "https://cdn-icons-png.flaticon.com/128/8334/8334283.png",
    },
    {
        item: "유모차",
        icon: "https://cdn-icons-png.flaticon.com/128/1866/1866216.png",
    },
    {
        item: "책",
        icon: "https://cdn-icons-png.flaticon.com/128/3330/3330300.png",
    },
    {
        item: "빨래건조대",
        icon: "https://cdn-icons-png.flaticon.com/128/1739/1739023.png",
    },
]