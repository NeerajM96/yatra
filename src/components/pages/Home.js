import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import LandingPage from '../LandingPage';

function Home(){
    return(
        <>
        <LandingPage/>
        <Cards/>
        <Footer/>
        </>
    )
};
export default Home;