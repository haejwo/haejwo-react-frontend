import React, { useState } from 'react';
import InputText from '../InputText/InputText';
import { FaTruck } from 'react-icons/fa';
import { GiFlowerPot, GiHandTruck } from 'react-icons/gi';

export default function COInfoForm({ name, bank, account, COcategory }) {
    const [username, setUsername] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [category, setCategory] = useState('MOVE');
    const handleToggle = (choice) => { setCategory(choice); COcategory(choice); };
    
    return (
        <div className='w-full p-4'>
            <p className='font-bold my-3 text-lg'>제공하는 운송서비스를 선택해주세요</p>
            <div className='flex justify-center my-4'>
                <button onClick={() => handleToggle('MOVE')}
                    className={ category === 'MOVE' ? 
                    'w-1/3 flex items-center justify-center font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/3 flex items-center justify-center font-semibold text-zinc-500 py-2 border border-zinc-200' 
                    }
                ><FaTruck className='mr-2'/>이사</button>
                <button onClick={() => handleToggle('FLOWER')}
                    className={ category === 'FLOWER' ? 
                    'w-1/3 flex items-center justify-center font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/3 flex items-center justify-center font-semibold text-zinc-500 py-2 border border-zinc-200' 
                    }
                ><GiFlowerPot className='mr-2'/>꽃</button>
                <button onClick={() => handleToggle('OTHER')}
                    className={ category === 'OTHER' ? 
                    'w-1/3 flex items-center justify-center font-semibold text-brand border py-2 border-yellow-200 bg-yellow-100' : 
                    'w-1/3 flex items-center justify-center font-semibold text-zinc-500 py-2 border border-zinc-200' 
                    }
                ><GiHandTruck className='mr-2'/>기타</button>
            </div>
            <InputText title='사업자명을 입력해주세요' placeholder='사업자명을 입력하세요' value={username} handleChange={(e) => {setUsername(e.target.value); name(e.target.value);}}/>
            <InputText title='은행명을 입력해주세요' placeholder='은행명을 입력하세요' value={bankName} handleChange={(e) => {setBankName(e.target.value); bank(e.target.value);}}/>
            <InputText title='계좌번호를 입력해주세요' placeholder='계좌번호를 입력하세요' value={accountNumber} handleChange={(e) => {setAccountNumber(e.target.value); account(e.target.value);}}/>
            <p className='text-zinc-400 ml-2 mb-2'>하이픈(-)없이 숫자만 입력해주세요</p>
        </div>
    );
}