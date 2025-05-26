"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"
import Slider from 'react-slick';
export default function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                </div>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                </div>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                </div>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                </div>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                </div>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg" alt="" />
                </div>
            </Slider>
        </div>
    )
}
