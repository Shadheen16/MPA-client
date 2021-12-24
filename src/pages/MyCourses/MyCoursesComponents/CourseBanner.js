import React from 'react';

const CourseBanner = () => {
    return (
        <div className='grid lg:grid-cols-2 p-5 lg:p-10 place-items-center justify-items-center text-white bg-gradient-to-r from-clr-accent to-clr-secondary'>
            <div>
                <img src="" className='h-20 w-20 rounded-full' alt="" />
            </div>
            <div>
                <div>
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold pt-10 lg:pt-20">
                    Welcome back, <br />  Arman
                </h1>
                </div>
                <h1 className="text-[24px] lg:text-[36px] mt-5">75% completed</h1>
                <button className='py-3 px-8 bg-clr-primary my-8'>
                    Resume
                </button>
            </div>
        </div>
    );
};

export default CourseBanner;