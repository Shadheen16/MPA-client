import React from 'react';
import LoadMoreButton from '../SHared/LoadMoreButton';
import FeaturedCourses from './LearnComponents/FeaturedCourses';
import LearnBanner from './LearnComponents/LearnBanner';
import MyCourses from './LearnComponents/MyCourses';
import Search from './LearnComponents/Search';

const Learn = () => {
    return (
        <div className="bg-clr-primary">
            <header className="bg-gradient-to-r from-clr-accent to-clr-secondary">
                 <LearnBanner/>
            </header>
           <main className="main-container pb-20">
                <Search/>
                <MyCourses/>
                <FeaturedCourses/>
                <LoadMoreButton/>
           </main>
        </div>
    );
};

export default Learn;