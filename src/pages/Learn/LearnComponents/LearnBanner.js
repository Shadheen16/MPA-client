import React from 'react';
import Globe from '../GlobeSvg';


const LearnBanner = () => {
    return (
        <div className="banner-wrapper -ml-10 max-h-[720px] overflow-y-hidden object-fit">
            <Globe />
            <div>
                <h1 className="leading-[99px] text-[20px] sm:text-[36px] xl:text-[75px] -mt-32 ml-10 text-black sm:text-white">
                    Learn high in demand <br/>
                    IT Skills & Get Crypto
                </h1>
                <p className="xl:text-[40px] italic">powered by <span className="text-black">KoinStreet</span></p>
            </div>
        </div>
    );
};

export default LearnBanner;