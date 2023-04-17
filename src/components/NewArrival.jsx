import React, { useEffect, useState } from "react";
import { productData } from "../data";
import { BsStarFill, BsStar, BsEye, BsSuitHeart } from "react-icons/bs";

import { toast } from "react-toastify";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { addToFavourites } from "../redux/favoriteSlice";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const NewArrival = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 3) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [count]);

  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const handleFav = (product) => {
    const notify = () => toast("Item Added to Favorites");
    notify();
    dispatch(addToFavourites(product));
  };

  return (
    <div className=" bg-gray-50 py-16">
      <div className=" w-[92%] mx-auto ">
        <div className="mb-4">
          <h1 className=" font-medium tracking-wide capitalize text-2xl  ">
            New Arrivals
          </h1>
          <p className=" text-sm text-gray-600  capitalize">
            get 20% off on our newest nike clothes
          </p>
        </div>

        <div className=" ">
          <div className=" w-full ">
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-8">
              {productData
                .slice(0, 9)
                .map(({ id, name, desc, price, category, images }, index) => {
                  return (
                    <article className="bg-white w-fit  shadow-md" key={id}>
                      <div className=" flex flex-col lg:flex-row">
                        <div>
                          <div className=" w-full h-[200px] lg:w-[200px] lg:h-full">
                            <Link to={`/product/${id}`}>
                              <img
                                className=" cursor-pointer w-full h-full object-cover"
                                src={images[count]}
                                alt={name}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="">
                            <p className=" text-orange-500 text-sm uppercase mb-2 font-semibold ">
                              {category}
                            </p>
                          </div>
                          <div className=" flex gap-1 mb-1 text-yellow-400">
                            <BsStarFill size={15} />
                            <BsStarFill size={15} />
                            <BsStarFill size={15} />
                            <BsStarFill size={15} />
                            <BsStar size={15} />
                          </div>
                          <p className=" font-medium uppercase">
                            {name.substring(0, 16)}
                          </p>
                          <p className="  text-gray-600 mt-1">
                            {desc.substring(0, 100)}...{" "}
                            <Link
                              to={`/product/${id}`}
                              className=" font-medium text-blue-400"
                            >
                              Read More
                            </Link>
                          </p>
                          {/* reduce price */}
                          <div className="flex items-center">
                            <div className=" flex font-light text-xl items-center   mt-1">
                              <span className="">&#x20A6;</span>
                              <p className="ml-1 ">
                                {new Intl.NumberFormat().format(price - 1750)}
                              </p>
                            </div>
                            <div className=" ml-2 line-through text-sm flex font-light items-center text-gray-400 mt-2">
                              <p>
                                <span className=" ">&#x20A6;</span>
                                {new Intl.NumberFormat().format(price)}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 my-4 ">
                            <Link to={`/product/${id}`}>
                              <div className=" cursor-pointer w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black text-white  bg-black/70">
                                <BsEye size={25} />
                              </div>
                            </Link>
                            <div
                              onClick={() =>
                                handleClick({
                                  id,
                                  name,
                                  price,
                                  category,
                                  images,
                                  quantity: 1,
                                  totalPrice: Number(price) * 1,
                                })
                              }
                              className=" w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black text-white bg-black/70"
                            >
                              <HiOutlineShoppingCart size={25} />
                            </div>
                            <div
                              onClick={() =>
                                handleFav({
                                  id,
                                  name,
                                  price,
                                  category,
                                  images,
                                })
                              }
                              className=" w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black  text-white bg-black/70"
                            >
                              <BsSuitHeart size={25} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
