import React from 'react';
import LoadMoreButton from '../SHared/LoadMoreButton';
import NavBar from '../SHared/NavBar/NavBar';
import CallToAction from './HomeComponents/CallToAction';
import FeaturedStartups from './HomeComponents/FeaturedStartups';
import TopBanner from './HomeComponents/TopBanner';
import UpcommingStartups from './HomeComponents/UpcommingStartups';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-clr-accent/80 to-clr-secondary/80">
            <header>
                <TopBanner />
            </header>
            <main className="main-container">
                <FeaturedStartups />
                <CallToAction />
                <UpcommingStartups/>
                <LoadMoreButton/>
            </main>
        </div>
    );
};

export default Home;