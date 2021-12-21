import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import StartupCard from './StartupCard';


const FeaturedStartups = () => {
    return (
        <div className="pt-10 md:pt-[100px] md:flex overflow-x-hidden">
            {/* left */}
            <div className="text-white my-8 md:my-0 text-center">
                <h2 className="text-[60px] font-bold leading-[79px]">
                    Featured <br /> Startups
                </h2>
                <p className="text-[30px] leading-[40px]">
                    Invest in the next <br /> billion dollar <br /> company today
                </p>
            </div>
            {/* right */}
            <div className="flex items-center">
                {/* left arrow    */}
                <div className="hidden md:block md:mx-8 p-8 rounded-full border border-white/40 bg-white/20 cursor-pointer">
                    <ArrowLeftIcon className="h-6 w-6 text-white font-bold" />
                </div>
                {/* cards */}
                <div className="flex space-x-8 overflow-x-scroll scrollbar-hide">
                    <StartupCard/>
                    <StartupCard/>
                    <StartupCard/>
                </div>
                {/* rigt arrow */}
                <div className="hidden md:block mx-8 p-8 rounded-full border border-white/40 bg-white/20 cursor-pointer absolute md:right-0 xl:right-12">
                    <ArrowRightIcon className="h-6 w-6 text-white font-bold" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedStartups;