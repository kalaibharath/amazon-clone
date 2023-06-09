import Image from "next/image";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
export default function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="m-2 mb-0 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
          />
        </div>
        {/* search bar */}
        <div className="hidden h-10 sm:flex items-center rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full  w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex  items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello bharath</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p> Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold">
              4
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link "> Prime Video</p>
        <p className="link "> Amazon Bussiness</p>
        <p className="link "> Today's deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper tollkit</p>


      </div>
    </header>
  );
}
