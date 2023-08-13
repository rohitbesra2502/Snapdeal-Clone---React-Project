import React from 'react'
import { useProductContext } from "../context/productcontex";
import ProductCard from './ProductCard.jsx';

const MensClothing = () => {
    const {isLoading , products} = useProductContext();
    const filteredData = products.filter((item) => item.category === "men's clothing");
    console.log(filteredData);
    return (
        <div className='mens-clothing' style={{marginTop: "150px"}}>
            <h1>MensClothing</h1>
            {filteredData.map((product,index) => (
                <ProductCard product={product} key={index} />
            ))}
        </div>
    )
}

export default MensClothing