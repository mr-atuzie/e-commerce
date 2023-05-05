import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartImg from "../assets/cart.svg";

import { BsEye, BsStarFill, BsStarHalf } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Favorites = () => {
  const fav = useSelector((state) => state.favorites.products);
  const dispactch = useDispatch();

  const handleClick = (product) => {
    dispactch(addToCart(product));
  };

  return (
    <div className=" bg-gray-50 py-8">
      {fav.length === 0 ? (
        <div className=" h-[70vh] flex flex-col justify-center items-center">
          <p className=" italic text-gray-600 mb-2">Cart is empty</p>
          <img src={cartImg} className width={400} alt="" />
        </div>
      ) : (
        <div className=" w-[98%] mx-auto mt-[110px]">
          <div>
            <div className=" bg-white shadow-md py-8   p-4 lg:p-6 h-fit w-full ">
              <div className=" mb-8 flex justify-between items-center">
                <div>
                  <h1 className=" font-semibold text-lg md:text-2xl  capitalize">
                    Your Favorite Product
                  </h1>
                  <p className=" text-sm md:text-sm text-gray-600  capitalize">
                    some of the clothes you love
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-10">
                {!fav?.length && (
                  <p className=" text-lg italic text-gray-600">
                    No product found
                  </p>
                )}
                {fav.map(({ id, name, desc, price, category, images }) => {
                  return (
                    <article key={id}>
                      <div>
                        <div>
                          <div className=" relative">
                            <Link to={`/product/${id}`}>
                              {images[3] ? (
                                <img
                                  className="w-full h-full block bg-slate-50"
                                  src={images[3]}
                                  alt={name}
                                />
                              ) : (
                                <div
                                  className="w-full h-full block bg-slate-200"
                                  src={images[3]}
                                  alt={name}
                                ></div>
                              )}
                            </Link>
                            <div className="hidden lg:block absolute right-4 top-4 ">
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
                                className=" cursor-pointer w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black text-white my-2 bg-black/70"
                              >
                                <HiOutlineShoppingCart size={25} />
                              </div>
                            </div>
                          </div>
                          <div className=" ">
                            <div className=" mt-2 ">
                              <p className=" text-xs md:text-base capitalize font-medium ">
                                {name}
                              </p>
                              <div className="flex gap-1 mb-1 text-yellow-400">
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarHalf size={15} />
                              </div>
                            </div>
                            <div className=" flex font-light text-sm md:text-lg items-start  ">
                              <span className="">&#x20A6;</span>
                              <p className="ml-1 ">
                                {new Intl.NumberFormat().format(price)}
                              </p>
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
      )}
    </div>
  );
};

export default Favorites;
