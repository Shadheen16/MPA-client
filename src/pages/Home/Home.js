import React from 'react';
import NavBar from '../SHared/NavBar/NavBar';
import FeaturedStartups from './HomeComponents/FeaturedStartups';
import TopBanner from './HomeComponents/TopBanner';

const Home = () => {
    return (
        <div className="">
            <header>
                <NavBar/>
                <TopBanner/>
            </header>
            <main className="bg-gradient-to-r from-clr-accent to-clr-secondary px-5 md:px-10 lg:px-[100px] xl:px-[200px]">
                <FeaturedStartups/>
                
            </main>
            
        </div>
    );
};

export default Home;