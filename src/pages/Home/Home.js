import React from 'react';
import NavBar from '../SHared/NavBar/NavBar';
import CallToAction from './HomeComponents/CallToAction';
import FeaturedStartups from './HomeComponents/FeaturedStartups';
import TopBanner from './HomeComponents/TopBanner';
import UpcommingStartups from './HomeComponents/UpcommingStartups';

const Home = () => {
    return (
        <>
            <header>
                <TopBanner />
            </header>
            <main className="bg-gradient-to-r from-clr-accent/80 to-clr-secondary/80 px-5 md:px-10 lg:px-[100px] xl:px-[200px]">
                <FeaturedStartups />
                <CallToAction />
                <UpcommingStartups/>
            </main>
        </>
    );
};

export default Home;