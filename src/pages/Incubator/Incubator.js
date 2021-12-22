import React from 'react';
import { useParams } from 'react-router-dom';
import { StartupsData } from '../../Data';
import Content from './IncubatorComponents/Content';
import LeftBar from './IncubatorComponents/LeftBar';
import TopBar from './IncubatorComponents/TopBar';

const Incubator = () => {
    const { startupId } = useParams();
    const ID = Number(startupId);

    // filter startup data for getting single startup data
    let startup = StartupsData.filter(data => data.id === ID);
    return (
        <div className="bg-gradient-to-r from-clr-accent/80 to-clr-secondary/80 px-5 md:px-10 lg:px-[100px] xl:px-[200px] pt-20 lg:pt-32 pb-16" >
            <div className="lg:grid lg:grid-cols-12 lg:grid-rows-12 gap-6">
                <div className="bg-white col-span-12  rounded-t-[20px]">
                    <TopBar
                        data={startup} />
                </div>
                <div className="bg-white col-start-1 row-end-12 col-span-4 row-span-10">
                    <LeftBar
                        data={startup}
                    />
                </div>
                <div className="col-span-8">
                    <Content
                        data={startup}
                        similarStartups={StartupsData}
                    />
                </div>
            </div>
        </div>
    );
};

export default Incubator;