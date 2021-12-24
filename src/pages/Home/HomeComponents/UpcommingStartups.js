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
        </>
    );
};

export default UpcommingStartups;