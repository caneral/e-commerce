import React from 'react'
import Slider from "react-slick";

const HomeSlider = () => {
    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="max-w-screen-2xl	 mx-auto">
            <Slider {...settings}>
                <div className="bg-blue-800 py-20">

                    <div className="bg-white rounded-sm max-w-4xl py-40 mx-auto">
                        abc
                    </div>
                </div>
            </Slider>
            
        </div>
    )
}

export default HomeSlider
