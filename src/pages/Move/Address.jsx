import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

export default function Address() {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col items-center p-4'>
                <p className='font-bold text-lg my-3'>출발지와 도착지를 입력해주세요 ( 3 / 6 )</p>
            </div>
            <div>
                <DaumPostcode/>
            </div>
        </div>
    );
}