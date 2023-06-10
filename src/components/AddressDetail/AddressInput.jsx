import React, { useState } from 'react';
import DaumPopup from '../../api/DaumPopUp';

export default function AddressInput({ addressInfo, boxCheck }) {
    const [address, setAddress] = useState({});
    const handleAddressChange = (fullAddress, extraAddress) => {
        setAddress({ "FullAddress": fullAddress, "ExtraAddress": extraAddress });
    };
    
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);
    
    const handleClick = () => { addressInfo(address); boxCheck(checked); }
    
    return (
        <div>
           <DaumPopup onAddressChange={handleAddressChange} />
            <div className='my-3 text-center' onClick={handleClick}>
                <input type="checkbox" id="check" value={checked} onChange={handleChange} />
                <label htmlFor="check" className='text-lg font-bold ml-2 text-red-600'>추가 사항은 마지막 메모란에 작성해주세요</label>
            </div>
        </div>
    );
}