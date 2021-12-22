import { ArrowLeftIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import MangoSwapLogo from "../../../Images/mangoSwap.png"

const TopBar = ({ data }) => {

    const { title, description, raised_fund, target_fund } = data[0];
    return (
        <div className="p-8 bg-white rounded-t-[20px] xl:flex xl:justify-between items-center ">

            {/* card header */}
            <div className="flex gap-8 items-center">
                <Link to="/" className="rounded-full bg-black/20">
                        <ArrowLeftIcon className='w-6 h-6 m-5 text-black' />
                </Link>
                <img className="ml-5" src={MangoSwapLogo} alt="" />
                <h2 className="text-xl md:text-[24px] xl:text-[1.5vw]">{title}</h2>
            </div>
            {/* card content */}
            <div>
                <div className="flex justify-between items-center font-bold my-2">
                    <h3 className="text-[20px]">Fund raised</h3>
                    <p className="lg:ml-2">{raised_fund / target_fund * 100}% complete</p>
                </div>
                <h2 className="text-[24px] flex font-bold mb-2"><span>$</span>{raised_fund}/ <span>$</span>{target_fund}</h2>
            </div>
            {/* progress bar */}
            <div className="w-full lg:max-w-[300px] [100px] h-5 bg-gray-200 rounded-full">
                <div className="bg-gradient-to-r from-clr-accent to-clr-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-5" style={{ width: `${raised_fund / target_fund * 100}%` }}></div>
            </div>
            {/* buttons */}
            <div className="text-white font-bold flex justify-between items-center mt-8 lg:mt-0">
                <Link to="/"><button className="p-2 md:px-3 xl:px-16 xl:py-5 bg-gradient-to-r from-clr-accent to-clr-secondary hover:scale-105 transform transition-all divide-neutral-300 ease-out rounded-[4px] border-2 hover:text-black">Fund Startup</button></Link>
            </div>
        </div>
    );
};

export default TopBar;