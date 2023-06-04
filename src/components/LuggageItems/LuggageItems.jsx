import React, { useState } from 'react';
import ItemBtn from './ItemBtn';

export default function LuggageItems({ title, itemList, itemcnt }) {
    const initialCnt = {};
    
    itemList.forEach((item) => {
      initialCnt[item.item] = 0;
    });
    
    const [cnt, setCnt] = useState(initialCnt);
    const handleCnt = (item, count) => { 
        const updateCnt = {...cnt, [item]: count};
        setCnt(updateCnt); 
        itemcnt(title, updateCnt); 
    };

    return (
        <div>
            <p className='p-4 text-lg font-bold'>{title}</p>
            <div className='w-screen grid grid-cols-3 gap-0'>
                {itemList.map((items, idx) => (
                    <ItemBtn key={idx} item={items.item} img={items.icon} count={handleCnt}/>
                ))}
            </div>
        </div>
    );
}