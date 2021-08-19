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
        <div className="max-w-screen-2xl mx-auto">
            <Slider {...settings}>
                <div className="bg-yellow-300 pb-10">
                    <div className="flex justify-center py-4 gap-x-8 text-sm">
                        <button className="rounded-2xl bg-white px-4 py-1 font-semibold">Bugüne Özel</button>
                        <button className="font-semibold  ">Okula Dönüş</button>
                        <button className="font-semibold">Kampanyalar</button>
                        <button className="font-semibold">Ayrıcalıklar</button>
                    </div>
                    <div className="bg-white rounded-md max-w-5xl mx-auto shadow-lg grid grid-cols-3 justify-items-stretch items-center">
                        <div className="text-left">
                            <div className="grid grid-cols-1 px-10">
                                <div>
                                    <p className="text-xl py-4">Aksesuar Günleri'ne özel</p>
                                    <p className="text-gray-700 font-bold text-4xl">%50'ye varan indirimler</p>
                                </div>
                                <div className="py-8">
                                    <button className="bg-purple-800 px-4 py-2 rounded-3xl text-white font-semibold">
                                        Acele et kaçırma
                                    </button>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                        <img className="col-span-2 bg-red-500 rounded-md my-1 mr-1 " src="https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2140_20210816174929.png/format:webp" />
                    </div>
                </div>
            </Slider>

        </div>
    )
}

export default HomeSlider
