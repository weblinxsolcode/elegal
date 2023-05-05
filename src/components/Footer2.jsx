import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Footer2 = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase:'linear',
    infinite: true,
    focusOnSelect: false,
    arrows: false,
    slidesToShow: 7,
    responsive: [{
      breakpoint: 768,
      settings: {
          arrows: false,
          slidesToShow: 3
      }
      },
      {
      breakpoint: 480,
      settings: {
          arrows: false,
          slidesToShow: 2
      }
      }],
  };
  return (
    <>
        <section className='footer__section bg-black py-3'>
        <div>
        
        <Slider {...settings}>
          <div>
            <h5 className='text-white fw-bolder'>Digital product </h5>
          </div>
          <div>
            <h5 className='text-white-50'>Remote work</h5>
          </div>
          <div>
            <h5 className='text-white fw-bolder'>UX design</h5>
          </div>
          <div>
            <h5 className='text-white-50'>Distributed teams</h5>
          </div>
          <div>
            <h5 className='text-white fw-bolder'>Creativity</h5>
          </div>
          <div>
            <h5 className='text-white-50'>Strategy</h5>
          </div>
          <div>
            <h5 className='text-white fw-bolder'>Suspense</h5>
          </div>
          <div>
            <h5 className='text-white-50'>Growth</h5>
          </div>
        </Slider>
        </div>
          <div className="container " >
            <div className="d-flex justify-content-center gap-3" style={{paddingTop:'150px'}}>
              <a href="#" className='text-white'>Twitter</a>
              <a href="#" className='text-white'>LinkedIn</a>
              <a href="#" className='text-white'>RSS</a>
            </div>
            <div className='mt-5 pt-3 text-center'>
<small className="text-white text-center">
  &copy; 2012-2023 Nordic Rose Co.
</small> 
<br />  
<small className="text-white text-center">
  &copy; All rights reserved
</small>
            </div>

          </div>
        </section>
    </>
  )
}

export default Footer2