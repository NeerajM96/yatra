import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards(){
    return(
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                        <CardItem
                        src="images/img-8.jpg"
                        text="Explore the Beauty of Desert and enjoy exclusive Camel ride"
                        label = "Desert"
                        path = "/services"
                        text1 = 'Stay : 4Days 5Nights Price:₹25000/-'
                        />
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfalls deep inside the Amazon jungle"
                        label = "Adventure"
                        path = "/services"
                        text1 = 'Stay : 3Days 4Nights Price:₹35000/-'
                        />
                    </ul>
                    
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-11.jpg"
                        text="Enjoy a weekend at Night Dreams City"
                        label = "Night"
                        path = "/services"
                        text1 = 'Stay : 2Days 3Nights Price:₹25000/-'
                        />
                        <CardItem
                        src="images/img-12.jpg"
                        text="Get to know about various technologies at Tech City"
                        label = "TechAd"
                        path = "/services"
                        text1 = 'Stay : 3Days 4Nights Price:₹15000/-'
                        
                        />
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label = "Adventure"
                        path = "/services"
                        text1 = 'Stay : 3Days 4Nights Price:₹35000/-'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards;