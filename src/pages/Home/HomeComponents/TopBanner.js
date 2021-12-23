import React from 'react';
import bannerImg from '../../../Images/HomeBannerImg.png'

const TopBanner = () => {
    return (
        <div className="banner-wrapper" style={{backgroundImage:`url(${bannerImg})` }}>
            <div></div>
            <div className="">
                <h1 className="text-[4vh] md:text-[6vh] lg:[text-8vh] xl:text-[10vh] lg: leading-[106px]">
                    Invest directly into minority innovations.
                </h1>
                <button className='bg-gradient-to-r from-clr-accent to-clr-secondary px-8 py-4 text-[28px] mt-[32px] hover:transform hover:scale-105 rounded-xs transition-all ease-out'>
                    View StartUps
                </button>
            </div>
        </div>
    );
};

export default TopBanner;