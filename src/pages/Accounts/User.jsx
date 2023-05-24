import React, { useState } from 'react';
import RoleSelect from '../../api/RoleSelect';
import COUserInfo from '../../api/COUserInfo';
import CUUserInfo from '../../api/CUUserInfo';

export default function User() {
    const [role, setRole] = useState(null);
    const [check, setCheck] = useState(null);
    const handleRole = (role) => setRole(role);
    const handleRoleCheck = (check) => setCheck(check); 
    
    return (
        <div className='flex flex-col items-center'>
            <RoleSelect onRoleSelect={handleRole} onCheck={handleRoleCheck}/>
            { 
                check ? role === 'CU' ? <CUUserInfo/> : <COUserInfo/> : ''
            }
        </div>
    );
}