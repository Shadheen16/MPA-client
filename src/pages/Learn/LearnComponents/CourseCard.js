import { PlusCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const CourseCard = ({ data }) => {
    const { title, subtitle, total_modules, completed_modules, earn } = data;
    console.log(data);
    return (
        <div className="p-8 mr-8 rounded-[32px] text-white transparent-card">
            {/* earn badge */}
            <div className='flex justify-end items-center mb-8'>
                <button className="relative flex justify-center gap-8 py-1 px-10 rounded-full items-center bg-[#9CFF83] text-black"><PlusCircleIcon className="absolute left-0 rounded-full inline-bolck w-4 h-4 bg-[#00D248] text-[#00D248] ml-2" />Earn ${earn}</button>
            </div>
            {/* title and subtitle */}
            <h1 className='text-[36px] xl:text-[64px]'>{title}</h1>
            <p className="text-[24px] xl:text-[36px]">Blockchain Cryptocurrency Fundamentals</p>
            {/* learn button */}
            <div className="flex justify-center">
                <button className="text-[24px] xl:text-[36px] my-5 xl:my-10 py-2 xl:py-4 px-10 xl:px-24 rounded-full bg-gradient-to-r from-clr-accent to-clr-secondary">Learn</button>
            </div>
            
            {/* module completion and prpgress bar  */}
            <div className='flex flex-col'>
                <h3 className="text-[24px] xl:text-[36px] ml-auto">{completed_modules} / {total_modules} Modules</h3>
                {/* progress bar */}
                <div className="w-full bg-gray-200 rounded-full my-4">
                    <div className="bg-gradient-to-r from-clr-accent to-clr-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-2" style={{ width: `${completed_modules/ total_modules * 100}%` }}></div>
                </div>
                <p className="mx-auto">
                    {completed_modules/ total_modules * 100 }% completed
                </p>
            </div>
        </div>
    );
};

export default CourseCard;