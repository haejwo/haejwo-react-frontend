import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function DaumPopup({ onAddressChange }) {
  const CURRENT_URL =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);
  const [fullAddress, setFullAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');

  const handleComplete = (data) => {
    let updatedFullAddress = data.address;
    let updatedExtraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        updatedExtraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        updatedExtraAddress += updatedExtraAddress !== ''
          ? `, ${data.buildingName}`
          : data.buildingName;
      }
      updatedFullAddress += updatedExtraAddress !== ''
        ? ` (${updatedExtraAddress})`
        : '';
    }

    setFullAddress(updatedFullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleChange = (e) => {
    const updateAddress = e.target.value;
    setExtraAddress(updateAddress);
    onAddressChange(fullAddress, updateAddress);
  }
  return (
    <div className="flex flex-col w-screen p-4">
      <p className='font-bold text-lg mb-2'>주소 입력</p>
      <input className='w-full border border-zinc-400 p-2 rounded mb-2' type="text" value={fullAddress} onClick={handleClick} placeholder='주소를 입력하세요' readOnly />
      <input className='w-full border border-zinc-400 p-2 rounded' type="text" value={extraAddress} onChange={handleChange} placeholder='상세 주소를 입력하세요'/>
    </div>
  );
}