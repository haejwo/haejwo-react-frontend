import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Accounts() {
    return (
        <div>
            <div>login</div>
            <div>signup</div>
            <div>user</div>
            <Outlet/>
        </div>
    );
}

