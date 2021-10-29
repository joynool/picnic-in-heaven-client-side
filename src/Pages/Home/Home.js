import React from 'react';
import Banner from './Banner';
import Facilities from './Facilities';
import Service from './Service';
import ThingsToDo from './ThingsToDo';

const Home = () =>
{
    return (
        <div>
            <Banner />
            <Service />
            <ThingsToDo />
            <Facilities />
        </div>
    );
};

export default Home;