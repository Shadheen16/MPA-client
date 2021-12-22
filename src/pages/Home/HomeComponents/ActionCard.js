import React from 'react';

const ActionCard = ({cardImg, cardText}) => {
    console.log(cardImg);
    return (
        <div>
            <div className="relative">
                <img className="w-full" src={cardImg} alt="" />
                <div className='absolute inset-0 flex place-items-center justify-center'>
                    <button className='text-white font-bold text-[24px] p-5 sm:p-2 md:p-3 lg:p-5 border-2 border-white rounded-md hover:bg-white/40'>{cardText}</button>
                </div>
                
            </div>
        </div>
    );
};

export default ActionCard;