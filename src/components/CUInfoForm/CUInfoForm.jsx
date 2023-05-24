import React, { useState } from 'react';
import InputText from '../InputText/InputText';

export default function COInfoForm({ name }) {
    const [username, setUsername] = useState('');
    
    return (
        <div className='w-full p-4'>
            <InputText title='유저명을 입력해주세요' placeholder='유저명을 입력하세요' value={username} handleChange={(e) => {setUsername(e.target.value); name(e.target.value);}}/>
        </div>
    );
}