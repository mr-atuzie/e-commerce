import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const favorites = useSelector((state) => state.favorites.products);
  console.log(favorites);

  return (
    <nav className="w-full  shadow-md fixed top-0 bg-white z-50 flex flex-col  ">
      <div className="w-[90%] h-[80px] mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <h1 className=" text-xl lg:text-3xl font-bold uppercase">
            THRIFT STORE
          </h1>
        </Link>

        <div className=" hidden">
          <input
            className=" py-3 px-6 border outline-none border-gray-300 w-[600px] rounded-full placeholder:italic"
            type="text"
            placeholder="Search Category"
          />
          {/* <button>search</button> */}
        </div>

        <div className="flex gap-2 lg:gap-4 items-center">
          <Link to={"/cart"}>
            <div className=" flex justify-center items-center relative  hover:scale-105 text-gray-700">
              <HiOutlineShoppingCart size={30} />
              {quantity > 0 && (
                <div className=" absolute -top-1 left-5 text-sm bg-red-600 flex items-center justify-center text-gray-50 h-6 w-6 p-2 rounded-full">
                  {quantity}
                </div>
              )}
            </div>
          </Link>
          <div>
            <Link
              className=" bg-gray-100 rounded-full px-2 md:px-4 py-2 md:py-3 flex text-sm items-center justify-center text-center w-20 lg:w-24"
              to={"/cart"}
            >
              <span className="">&#x20A6;</span>
              <p className="ml-1 text-sm md:text-base ">
                {new Intl.NumberFormat().format(cartTotal)}
              </p>
            </Link>
          </div>
          <div className=" flex justify-center items-center relative  hover:scale-105 text-gray-700">
            <BsSuitHeart size={30} />
            {favorites.length > 0 && (
              <div className=" absolute -top-1 left-5 text-sm bg-red-600 flex items-center justify-center text-gray-50 h-6 w-6 p-2 rounded-full"></div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-800 p-2 w-full ">
        <div className=" w-[90%] mx-auto flex items-center justify-between flex-col">
          <ul className=" text-sm uppercase text-gray-50 font-medium flex gap-8 ">
            <li className="hover:scale-105">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:scale-105">
              <Link to={`/category/shirts`}>shirts</Link>
            </li>
            <li className="hover:scale-105">
              <Link to={`/category/trousers`}>trousers</Link>
            </li>
            <li className="hover:scale-105">
              <Link to={`/category/shoes`}> shoes</Link>{" "}
            </li>
            <li className="hover:scale-105">
              <Link to={`/category/Jackets`}>Jackets</Link>{" "}
            </li>
          </ul>
          <p className="text-xs text-gray-50">Hotline:+234-801-234-5678</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
