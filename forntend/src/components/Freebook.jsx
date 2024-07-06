import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function Freebook() {
    const filterdata = list.filter((data) => { return data.author_name === "Chetan Bhagat"; });
    // console.log(filterdata);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
        <>
            <div>
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                    <h1 className='font-bold text-xl pb-2'>Free Book </h1>
                    <p>
                    </p>Explore ReadMyBook, where every book is a gateway to new worlds and unforgettable adventures. Join us in discovering the power of storytelling today!
                </div>
            </div>

            <div className='max-w-screen-2xl pb- container mx-auto md:px-20 px-4 pb-10'>
                <Slider {...settings}>
                    {/* Ensure you return the Card component properly */}
                    {filterdata.map((item) => (
                        <Card item={item} key={item.id}></Card>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Freebook;
