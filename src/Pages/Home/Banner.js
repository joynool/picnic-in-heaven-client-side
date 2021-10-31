import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from './../../images/carousel/carousel_one.jpg';
import two from './../../images/carousel/carousel_two.jpg';
import three from './../../images/carousel/carousel_three.jpg';

/*------------------------------------------------------------------
            Bootstrap carousel for banner section
--------------------------------------------------------------------*/
const Banner = () =>
{
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={one}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>RECAP YOUR CORE MEMORY</h3>
                        <p>A picnic presents a perfect opportunity. Staying involved with your family and friends can help develop stronger bonds and foster warmth, protection and love, as well as emotions of belonging. Study proves that spending time in a natural environment is good for mental health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={two}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>STRONG YOUR FAMILY BONDING</h3>
                        <p>Going on a picnic allows you to focus on your kids without distractions. Picnics are the perfect opportunity to make your kids feel loved and heard. Plus, you never know what you might learn from your kids.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={three}
                        alt="Third slide"
                    />
                    <Carousel.Caption className=" position-absolute">
                        <h3>IMPROVED MENTAL HEALTH</h3>
                        <p>The fresh air does wonders for your child’s mental health. Spending time outside is shown to reduce levels of anxiety and lower levels of activity in the parts of our brains related to mental illness. Time in the sunshine is also related to improved mood and reduced stress levels for the whole family.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;