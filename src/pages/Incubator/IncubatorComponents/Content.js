import React from 'react';
import SimilarStartupCard from './SimilarStartupCard';

const Content = ({data, similarStartups}) => {
    console.log(similarStartups);
    return (
        <div className="">
            <div className="leftbar-container bg-white">
                <div className="leftbar-wrapper">
                    <h1 className="text-[36px] mb-4">
                       About Startup
                    </h1>
                    <p>{data[0].about}</p>
                </div>
            </div>
            <div className="leftbar-container border-none bg-white">
                <div className="leftbar-wrapper">
                <h1 className="text-[36px] mb-4">
                       About Startup
                    </h1>
                    <p>{data[0].vision}</p>
                </div>
            </div>
            <div>
                <div className="leftbar-container bg-white mt-6">
                    <div  className="leftbar-wrapper flex overflow-x-scroll gap-4">
                        {
                            similarStartups.map(data=><SimilarStartupCard
                            key={data.id}
                            data={data}
                            />)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;