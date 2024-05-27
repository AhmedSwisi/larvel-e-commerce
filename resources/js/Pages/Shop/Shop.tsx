import React, { useState } from "react";
import { Slider } from "@/shadcn/ui/slider";
import ProductList from "@/Components/ProductList";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/shadcn/ui/pagination"
import { Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
 } from "@/shadcn/ui/select";
import { router } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";



const Shop = ({auth, products, queryParams}) => {

    const [values, setValues] = useState([0,100])
    console.log(values)
    console.log(queryParams)
    if (queryParams === null) {
        queryParams = {}
    }
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }
        console.log(queryParams[name])
        router.get(route('shop.index'), queryParams)
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return
        searchFieldChanged(name, e.target.value)
    }

    const handlePriceFilterChange = (value:any) => {
        setValues(value)
    }

    const onFilterButtonClick = () => {
        // queryParams["min_price"] = values[0]
        // queryParams["max_price"] = values[1]
        const newQueryParams = {
            ...queryParams,
            min_price:values[0],
            max_price:values[1],
        }
        console.log(newQueryParams, "newww")
        console.log(queryParams, "Filter")
        router.get(route('shop.index'), newQueryParams)
    }



    // console.log(products)
    // console.log(auth)
    // console.log(queryParams)
  return (
    <div className="grid grid-cols-4">
        <div className="grid col-start-1 col-end-1 ml-12 mt-28 pb-28">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="font-semibold">Product Categories</p>
                    </div>
                    <Select defaultValue=""  onValueChange={(e) => {
                        console.log(e)
                        searchFieldChanged("category",e)
                    }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Categories</SelectLabel>
                                <SelectItem value="Headphones">Headphones</SelectItem>
                                <SelectItem value="Headsets">Headsets</SelectItem>
                                <SelectItem value="Laptops">Laptops</SelectItem>
                                <SelectItem value="Watches">Watches</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="font-semibold">Filter By Price</p>
                    </div>
                    <div className="flex w-72">
                        <Slider onValueChange={handlePriceFilterChange} defaultValue={values} />
                    </div>
                    <p>Price: ${values[0]} - ${values[1]}</p>
                    <Button onClick={onFilterButtonClick} className="w-40">Filter</Button>
                </div>
            </div>
        </div>
        <div className="grid col-start-2 col-end-5 mt-10 gap-16 mb-24">
            <div className="flex flex-col w-full gap-12">
                <h1 className="text-5xl font-semibold">Shop</h1>
                    <ProductList products={products.data}/>
            </div>
            <Pagination className="flex flex-row gap-4">
                <PaginationContent className="flex flex-row gap-4">
                    {/* <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem> */}
                    {products.meta.links.map((link,index:number) => {
                        return(
                        <PaginationItem key={link.label}>
                            <PaginationLink className="w-24" dangerouslySetInnerHTML={{__html:link.label}} href={link.url}></PaginationLink>
                        </PaginationItem>
                        )
                    })}
                </PaginationContent>
            </Pagination>
        </div>
    </div>
  )
};

export default Shop;
