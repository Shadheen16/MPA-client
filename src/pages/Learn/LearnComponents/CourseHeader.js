import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

const CourseHeader = ({headerText}) => {
    return (
        <div className="text-white flex items-center gap-5 lg:gap-12">
            <h1 className="text-[32px] lg:text-[48px] xl:text-[70px] whitespace-nowrap">{headerText}</h1>
            <div className="border border-white w-full"></div>
            <div className="flex items-center gap-8">
                <button >
                     <ArrowLeftIcon className="w-10 h-10"/>
                </button>
                <button>
                    <ArrowRightIcon className="w-10 h-10"/>
                </button>
               
            </div>
        </div>
    );
};

export default CourseHeader;