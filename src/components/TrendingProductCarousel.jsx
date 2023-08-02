import React from "react";
import Carousel from "react-multi-carousel";
import ProductsCarousel from "./ProductsCarousel.jsx";
import "react-multi-carousel/lib/styles.css";

import { useProductContext } from "../context/productcontex";

const responsive = {
    superLargeDesktop:{
        breakpoint: {max:4000 , min :320},
        items:6,
        slidesToSlide : 5,
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