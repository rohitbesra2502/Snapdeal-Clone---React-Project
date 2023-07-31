import React from "react";
import Carousel from "react-multi-carousel";
import ProductsCarousel from "./ProductsCarousel";
import "react-multi-carousel/lib/styles.css";

import { useProductContext } from "../context/productcontex";

const responsive = {
    superLargeDesktop:{
        breakpoint: {max:4000 , min :1024},
        items:7,
        slidesToSlide : 5,
    },
    desktop:{
        breakpoint:{max:1024 , min:768},
        items:4,
    },
    tablet:{
        breakpoint:{max:768 , min:480},
        items:3,
    },
    mobile:{
        breakpoint:{max:480 , min:320},
        items:2,
    },
}

const TreandingProductCarousel = () => {
    const {isLoading,products} = useProductContext();
    if(isLoading) return <div>Laoding...</div>

    const product = products.map((item , index) => (
        <ProductsCarousel key={item} data={item}/>
    ))
    return(
        <div className="trendingContainer">
            <h3 className="trendingproductTitle">TRENDING PRODUCTS</h3>  
            <div className = "trending-product-wrapper">
                <Carousel infinite={true} responsive = {responsive}>
                    {product}
                </Carousel>
            </div>
        </div>
    );
}
export default TreandingProductCarousel;