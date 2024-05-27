import { Button } from "@/shadcn/ui/button";
import { Head, router } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { ToggleGroup, ToggleGroupItem, } from "@/shadcn/ui/toggle-group";
import { Separator } from "@/shadcn/ui/separator";
import { Textarea } from "@/shadcn/ui/textarea";
import {useForm} from "@inertiajs/react";

const ProductPage = ({auth,product}) => {
    console.log(auth)
    console.log(product)
    const [menuState, setMenuState] = useState('description')
    const {data, setData, post, errors, processing} = useForm({
        product_id:product.id,
        comment:'',
        rating:1,
    })

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
          errorRef.current?.scrollIntoView({ behavior: 'smooth' });
          errorRef.current?.focus();
        }
      }, [errors]);

    const errorRef = useRef(null)
    console.log(menuState)

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            post(route('reviews.store',{ product: product }))
        } catch (error) {
            console.log(error)
        }

    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        // Options for formatting the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        // Format the date
        const formattedDate = new Intl.DateTimeFormat('en-US').format(date);

        return formattedDate;
    };

  return (
    <div className="flex flex-col mt-24 px-32 mb-24">
        <div className="flex flex-col">
            <div className="flex flex-row gap-96">
                <div className="flex flex-col gap-8">
                    <div className="bg-gray-300 w-96 h-96"></div>
                    <div className="flex flex-row gap-8">
                    <div className="bg-gray-300 w-20 h-20"></div>
                    <div className="bg-gray-300 w-20 h-20"></div>
                    <div className="bg-gray-300 w-20 h-20"></div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full gap-20">
                    <p className="font-bold text-5xl">{product.name}</p>
                    <p className="text-2xl font-semibold">${product.price}</p>
                    <p>{product.description}</p>
                    <p className="font-bold text-lg">In Stock: {product.stock}</p>
                    <div className="flex flex-row w-full justify-between">
                        <Button className="flex w-full mx-4">Add to Cart</Button>
                        <Button className="flex w-full mx-4 bg-slate-200 text-black">Buy Now</Button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-40 gap-0">
                <ToggleGroup onValueChange={(e:string) => setMenuState(e)} defaultValue={menuState} type="single" className="gap-0 flex">
                    <ToggleGroupItem  className="rounded-l-lg rounded-r-none" value="description">
                        Description
                    </ToggleGroupItem>
                    <ToggleGroupItem  className="rounded-l-none rounded-r-lg " value="reviews">
                        Reviews
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            <div className="flex flex-col justify-start gap-12 pt-8">
                {menuState === 'description' &&
                        <>
                            <p className="font-semibold text-lg">Description</p>
                            <Separator className="h-1 bg-black rounded" />
                            <p>{product.description}</p>
                        </>

                }
                {menuState === 'reviews' &&
                    <>
                    <p className="font-semibold text-lg">Reviews</p>
                        <Separator className="h-1 bg-black rounded" />
                    {product.reviews.map((review) => {
                        return(
                        <div className="flex flex-col gap-4 w-full bg-gray-200 px-12 pt-8 pb-8 rounded-xl">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row justify-center items-center gap-4">
                                    <div className="w-10 h-10 bg-slate-300 rounded-full"></div>
                                    <div className="flex flex-col">
                                        <p>{product.reviews[0].user.name}</p>
                                        <p>Added at: {formatDate(review.created_at)}</p>
                                    </div>
                                </div>

                            </div>
                            <Separator className=" bg-black rounded" />
                            <p>{review.comment}</p>
                        </div>
                        )
                    })}
                    </>
                }
                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col justify-start gap-8">
                        <p className="text-4xl font-bold">Add a Review:</p>
                        <div>
                            <p className="font-semibold">Your Rating:</p>
                        </div>
                        <div className="flex flex-col justify-start gap-4">
                            <p>Your Review:</p>
                            <Textarea value={data.comment} onChange={(e) => setData('comment',e.target.value)} className="w-96" placeholder="Type your review here"/>
                            {errors.comment && <div>{errors.comment}</div>}
                            <Button className="flex w-28" disabled={processing} type="submit">Add Review</Button>
                            {errors.error  && <div ref={errorRef} className="text-red-500">{errors.error}</div>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
};

export default ProductPage;

