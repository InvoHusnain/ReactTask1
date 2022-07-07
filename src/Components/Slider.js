import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import '@fontsource/poppins';
import '../Components/slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../images/slide1.svg';
import slide2 from '../images/slide2.svg';
import slide3 from '../images/slide3.svg';
import slide4 from '../images/slide4.svg';
import slide5 from '../images/slide5.svg';
import slide6 from '../images/slide6.svg';
import slide7 from '../images/slide7.svg';


function Slide(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true
            }
          }
        ]
      };

    return(
        <Container className='slider-contain'>
            <Grid container xs={12}>
            <div className='slider'>
                <h3>200+ Happy Customer</h3>
            </div>
            </Grid>
            <Slider {...settings}>
      <div>
        <img src={slide1}/>
      </div>
      <div>
      <img src={slide2}/>
      </div>
      <div>
      <img src={slide3}/>
      </div>
      <div>
      <img src={slide4}/>
      </div>
      <div>
      <img src={slide5}/>
      </div>
      <div>
      <img src={slide6}/>
      </div>
      <div>
      <img src={slide7}/>
      </div>
    </Slider>
        </Container>
    )
}

export default Slide;