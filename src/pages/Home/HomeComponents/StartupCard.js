import React from 'react';
import MangoSwapLogo from "../../../Images/mangoSwap.png"

const StartupCard = () => {
    return (
        <div className="p-8 bg-white rounded-[20px] min-w-[320px]">
        {/* card header */}
        <div className="flex items-center">
            <img src={MangoSwapLogo} alt="" />
            <h2 className="text-xl md:text-[36px] ml-4">Mangoswap</h2>
        </div>
        {/* card content */}
        <div className="my-8">
            <p className='text-[18px]'>The mango swap coin is the future for crypto currency, it will allow user share and tansact over defi networks with less fees.</p>
        </div>
        <div>
            <div className="flex justify-between font-bold my-2">
                <h3 className="text-[24px]">Fund raise</h3>
                <p>50% complete</p>
            </div>
            <h2 className="text-[24px] font-bold mb-2">$200,000/$400,000</h2>
            {/* progress bar */}
            <div className="w-full bg-gray-200 rounded-full">
                <div className="bg-gradient-to-r from-clr-accent to-clr-secondary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-5" style={{width: "50%"}}></div>
            </div>
            {/* buttons */}
            <div className="text-white font-bold flex justify-between items-center mt-8">
                <button className="p-2 md:px-3 bg-clr-primary border-2 border-clr-primary hover:bg-transparent rounded-[4px] hover:text-black">Fund Startup</button>
                <button className="p-2 md:px-3 hover:bg-clr-primary border-2 border-clr-primary bg-transparent rounded-[4px] text-black hover:text-white">Learn More</button>
            </div>
        </div>
    </div>
    );
};

export default StartupCard;