import React from "react";
import { Card,CardContent, CardHeader, CardFooter,CardDescription,CardTitle } from "@/shadcn/ui/card";
import { Link } from "@inertiajs/react";

export interface Product {
    id:number,
    name:string,
    description:string,
    category:string,
    price:string
}

interface Props  {
    product: Product
}

const ProductItem:React.FC<Props> = ({product}) => {
    console.log(product.id)
  return (
    <Card className="w-full rounded-xl">
        <CardHeader className="bg bg-gray-800 h-48 rounded-t-xl" />
        <CardContent className="flex flex-col mt-4 gap-4">
            <div className="bg-gray-100 rounded-xl justify-start h-8 items-center flex px-4 w-fit">
                <p className="font-semibold">{product.category}</p>
            </div>
            <Link className="hover:underline" href={route("shop.show",product.id)}>{product.name}</Link>
            <p>${product.price}</p>
        </CardContent>
    </Card>
  );
};

export default ProductItem;
