import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const LeftBar = ({ data }) => {
    const { location, founded_on, website, team, tags } = data[0];
    return (
        <div className=" ">
            {/* first block */}
            <div className="box-container">
                <h1 className="text-[30px] font-bold box-wrapper">{`Founded ${founded_on.day}th ${founded_on.month} ${founded_on.year}`}</h1>
            </div>
            {/* second block */}
            <div className="box-container">
                <div className="box-wrapper space-y-8">
                    <div>
                        <p>Website</p>
                        <div className='flex items-center gap-4'>
                            <h1 className="text-[30px] text-[#003CD8]">{website}</h1>
                            <FaTwitter className='text-[#003CD8]' />
                            <FaLinkedinIn className='text-[#003CD8]' />
                            <FaFacebookF className='text-[#003CD8]' />
                        </div>
                    </div>

                    <div>
                        <p>Location</p>
                        <h1 className='text-[30px]'>
                            {location}
                        </h1>
                    </div>
                    <div>
                        <p>Team size</p>
                        <h1 className='text-[30px]'>
                            100-500 people
                        </h1>
                    </div>
                </div>
            </div>
            {/* third block */}
            <div className="box-container">
                <div className="box-wrapper">
                    <h1 className='text-[30px] font-bold mb-10'>Meet the team</h1>
                    <div className='space-y-4'>
                        {
                            team.map(member => <div
                                
                                member={member}
                                className='flex gap-4 items-center'
                            >
                                <img className="w-16 h-16 rounded-full" src="" alt="" />
                                <div>
                                    <h1 className='text-[24px] font-bold'>{member.member_name}</h1>
                                    <p>{member.designation}</p>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>
            {/* last block */}
            <div className="box-container border-none">
                <div className="box-wrapper">
                    <h1 className="text-[30px] font-bold mb-10">Tags</h1>
                    {
                        tags.map(tag => <button
                            tag={tag}
                            className='p-2 border-2 rounded-xl gap-2'
                        >
                            <p>{tag}</p>
                        </button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftBar;