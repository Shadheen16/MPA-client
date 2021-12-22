import React from 'react';
import ActionCard from './ActionCard';
import img1 from '../../../Images/CallToAction/advice.png';
import img2 from '../../../Images/CallToAction/join.png';
import img3 from '../../../Images/CallToAction/help.png';

const CallToAction = () => {
    return (
        <div className="space-y-8 md:flex md:space-y-0 md:space-x-8 my-32">
            <ActionCard
            cardImg={img1}
            cardText='Advice a startup'
            />
            <ActionCard
            cardImg={img2}
            cardText='Join Minority Ventures Cohort'
            />
            <ActionCard
            cardImg={img3}
            cardText='Help <code/>'
            />
        </div>
    );
};

export default CallToAction;