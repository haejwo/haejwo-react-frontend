import React, { useState } from 'react';
import DaumPopup from '../../api/DaumPopUp';

export default function AddressInput({ addressInfo }) {
    const [address, setAddress] = useState({});
    const handleAddressChange = (fullAddress, extraAddress) => {
        setAddress({ "FullAddress": fullAddress, "ExtraAddress": extraAddress });
        addressInfo(address);
    };

    return (
        <div>
           <DaumPopup onAddressChange={handleAddressChange} />
        </div>
    );
}

