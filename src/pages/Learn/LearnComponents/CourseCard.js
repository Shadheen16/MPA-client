import { PlusCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const CourseCard = ({data}) => {
    const {title, subtitle, total_modules, completed_modules, earn}=data;
    console.log(data);
    return (
        <div className="p-8 rounded-[32px]">
            <div className='flex justify-between items-center'>
                <button className="flex justify-center gap-8 p-2 rounded-full items-center bg-[#9CFF83]"><PlusCircleIcon className="rounded-full inline-bolck w-4 h-4 bg-[#00D248] text-[#00D248]"/>Earn ${earn}</button>
            </div>
            <h1 className=''>{title}</h1>
        </div>
    );
};

export default CourseCard;