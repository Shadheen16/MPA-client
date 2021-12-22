import React from 'react';
import MangoSwapLogo from "../../../Images/mangoSwap.png"

const SimilarStartupCard = ({ data }) => {
    const { id, title, description, target_fund, raised_fund } = data;
    console.log("simi", data);
    return (
        <div>
            <div className="p-8 bg-white rounded-[20px] border-4 min-w-[360px]">
                {/* card header */}
                <div className="flex items-center">
                    <img src={MangoSwapLogo} alt="" />
                    <h2 className="text-xl md:text-[24px] xl:text-[1.5vw] ml-4">{title}</h2>
                </div>
                {/* card content */}
                <div className="my-8">
                    <p className='text-[18px]'>{description}</p>
                </div>
                <div>
                    <div className="flex justify-between font-bold my-2">
                        <h3 className="text-[24px]">Fund raise</h3>
                        <p>{raised_fund / target_fund * 100}% complete</p>
                    </div>
                    <h2 className="text-[24px] font-bold mb-2"><span>$</span>{raised_fund}/ <span>$</span>{target_fund}</h2>
                    {/* progress bar */}
                    <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-gradient-to-r from-clr-accent to-clr-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-5" style={{ width: `${raised_fund / target_fund * 100}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimilarStartupCard;