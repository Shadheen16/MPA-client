import React from 'react';
import FeaturedCourses from './LearnComponents/FeaturedCourses';
import LearnBanner from './LearnComponents/LearnBanner';
import MyCourses from './LearnComponents/MyCourses';
import Search from './LearnComponents/Search';

const Learn = () => {
    return (
        <div className="bg-gradient-to-r from-clr-accent to-clr-secondary">
           <LearnBanner/>
           <main className="main-container bg-clr-primary">
                <Search/>
                <MyCourses/>
                <FeaturedCourses/>
           </main>
        </div>
    );
};

export default Learn;