import React from "react";
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom,Slide} from 'react-slideshow-image'

const slideImages = [
    {
        id: 1,
        url:'https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg',
        caption:"BOB",
    },
    {
        id: 2,
        url:'https://n4.sdlcdn.com/imgs/k/o/y/Menswear_web_13june-d5e5a.jpg',
        caption:"Men's Clothing",
    },{
        id: 3,
        url:'https://n4.sdlcdn.com/imgs/k/o/y/Kitchen_Tools_web_13june-b4639.jpg',
        caption:"Kitchen Tools",
    },{
        id: 4,
        url:'https://n4.sdlcdn.com/imgs/k/o/y/Kurtis_web_13june-ae53b.jpg',
        caption:"Kurtis",
    },{
        id: 5,
        url:'https://n4.sdlcdn.com/imgs/k/o/y/Skin_Care_web_13june-2471b.jpg',
        caption:"Skin Care",
    },{
        id: 6,
        url:'https://n4.sdlcdn.com/imgs/k/o/y/Sports_Shoes_web_13june-6d1dd.jpg',
        caption:"Sports Shoes",
    },{
        id: 7,
        url:'https://n4.sdlcdn.com/imgs/k/o/y/Bedsheets_web_13june-f737a.jpg',
        caption:"Bedsheets",
    },{
        id: 8,
        url:'https://n3.sdlcdn.com/imgs/k/o/y/Home_Utility_web_13june-a92cd.jpg',
        caption:"Home Utility",
    },
];
const divStyle = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    height : '350px',
    backgroundSize : 'cover',
}
const ImageSlider = () => {
    return(
        <div className="slide-container">
            <Slide indicators={true}>
                {slideImages.map((image,index) => (
                    <div key={index} style={{ ...divStyle, backgroundImage: `url(${image.url})`}}></div>
                ))}
            </Slide>
        </div>
    );
}

export default ImageSlider;