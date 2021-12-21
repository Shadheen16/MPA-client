import React from 'react';
import NavBar from '../SHared/NavBar/NavBar';
import TopBanner from './HomeComponents/TopBanner';

const Home = () => {
    return (
        <div>
            <header>
                <NavBar/>
                <TopBanner/>
            </header>
            
        </div>
    );
};

export default Home;