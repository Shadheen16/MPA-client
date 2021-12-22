import React from 'react';
import { StartupsData } from '../../../Data';
import StartupCard from './StartupCard';

const UpcommingStartups = () => {
    return (
        <>
            <div className=" grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {/* section title */}
                <div className="text-white my-8 md:my-0 text-center">
                    <h2 className="text-[60px] font-bold leading-[79px]">
                        Upcoming <br /> Startups
                    </h2>
                    <p className="text-[30px] leading-[40px]">
                        These visionary companies and <br /> disruptors are on their journey  <br /> to change the world.
                    </p>
                </div>
                {/* startup cards */}
                {
                    StartupsData.map(data => <StartupCard
                        key={data.id}
                        data={data}
                    />)
                }

            </div>
            {/* load more button */}
            <div className="flex justify-center">
                <button className='py-2 px-4 lg:py-4 lg:px-16 mt-16 mb-28 border-2 border-white hover:bg-white/40 text-white font-bold'>Load more</button>
            </div>
        </>
    );
};

export default UpcommingStartups;