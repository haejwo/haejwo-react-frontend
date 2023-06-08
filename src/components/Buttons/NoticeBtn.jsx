import React from 'react';
import { RiCoupon3Line } from 'react-icons/ri';
import { BiMailSend } from 'react-icons/bi';
import { AiOutlineNotification, AiOutlineMessage, AiOutlineRight } from 'react-icons/ai';
import { SlEarphonesAlt } from 'react-icons/sl';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { BsExclamationOctagon } from 'react-icons/bs';

export default function NoticeBtn({ icon, text }) {
    const iconDict = {
        coupon: RiCoupon3Line,
        friend: BiMailSend,
        notice: AiOutlineNotification,
        faq: AiOutlineMessage,
        one: SlEarphonesAlt,
        service: HiOutlineClipboardDocumentList,
        personal: BsExclamationOctagon
    };
    const Icon = iconDict[icon];
    
    return (
        <button className='w-full flex justify-between py-6 px-2 items-center'>
            <div className='flex items-center text-xl'>
                <Icon className='text-2xl'/>
                <p className='font-semibold ml-2 text-zinc-500'>{text}</p>
            </div>
            <AiOutlineRight/>
        </button>
    );
}