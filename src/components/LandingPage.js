import React from 'react';
import {Button} from './Button';

import '../App.css';
import './LandingPage.css';
function LandingPage(){
    return (
        <div className="landing-container">
            {/*
            <video src="/videos/video-2.mp4" autoPlay loop muted/>*/}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="landing-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER
                    <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )

};

export default LandingPage;