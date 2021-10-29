import React from 'react';
import Banner from './Banner';
import Service from './Service';
import ThingsToDo from './ThingsToDo';

const Home = () =>
{
    return (
        <div>
            <Banner />
            <Service />
            <ThingsToDo />
        </div>
    );
};

export default Home;