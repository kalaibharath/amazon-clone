import Image from "next/image";
import {StarIcon} from '@heroicons/react/solid'
import { useState } from "react";
import Currency from 'react-currency-formatter';


const MAX_RATING =5;
const MIN_RATING =1;
export default function Product({id,title,price,description,category,image}) {

    const[rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
  
  return (
    <div className="relative flex-shrink flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image src={image} width={200} height={200} style={{objectFit:'contain',alignSelf:"center"}}/>
        <h4 className="my-4">{title}</h4>
        {/* <div  suppressHydrationWarning={true} className="flex">
            {Array(rating)
            .fill().map((_,i) =>(
       <StarIcon className="h-5 text-yellow-300"/>
            ))}
          
        </div> */}
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="my-2">
            <Currency quantity={price} currency='usd'/>
        </div>
        
        <button className="mt-auto button">Add to Basket</button>
    </div>
  )
}

