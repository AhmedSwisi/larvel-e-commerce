import React from "react";
import ProductItem, { Product } from "./ProductItem";

interface Props {
    products:Product[]
}

const ProductList:React.FC<Props> = ({products}) => {
  return (
    <div className="grid grid-cols-3 col-span-3 mr-40 gap-x-16 px-4 gap-y-20 mt-4 overscroll-auto h-full max-h-screen overflow-auto">
        {products.map((product, index) => {
            return(
            <ProductItem key={index} product={product} />
            )
        })}
    </div>
  );
};

export default ProductList;
