import React, { useState } from 'react';
import AddressDetail from '../../components/AddressDetail/AddressDetail';

export default function Address() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleClick = () => { setIsModalVisible(true); };
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col items-center p-4'>
                <p className='font-bold text-lg my-3'>출발지와 도착지를 입력해주세요 ( 3 / 6 )</p>
            </div>
            <div>
                <button onClick={handleClick}>출발지 상세정보</button>
                {isModalVisible && (
                  <div>
                    <div>
                      <AddressDetail/>
                      <button onClick={() => setIsModalVisible(false)}>Close</button>
                    </div>
                  </div>
                )}
            </div>
        </div>
    );
}