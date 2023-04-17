import React, { useEffect, useState } from "react";
import { productData } from "../data";
import { BsStarFill, BsStarHalf, BsEye, BsSuitHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { addToFavourites } from "../redux/favoriteSlice";
import { Link, useNavigate } from "react-router-dom";

const Category = ({ cat, heading, items, simplified }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState(
    productData.filter((item) => {
      return item.category === cat;
    })
  );

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (simplified) {
      setProducts(products.slice(0, 5));
    }
  }, [products, simplified, cat]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 3) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [count]);

  const filterSize = (size) => {
    const newProducts = productData.filter((item) => {
      return item.size === size;
    });

    setProducts(newProducts);
  };

  const filterSizeCloth = (size) => {
    const newProducts = productData.filter((item) => {
      return item.category === cat;
    });

    const filteredProducts = newProducts.filter((item) => {
      return item.size === size;
    });

    setProducts(filteredProducts);
  };

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const handleFav = (product) => {
    const notify = () => toast("item added to favorites");
    notify();
    dispatch(addToFavourites(product));
  };

  const handleNavigate = (cat) => {
    navigate(`/category/${cat}`);
  };
  return (
    <div className=" bg-gray-50 py-8">
      <div className=" w-[98%] mx-auto ">
        <div>
          <div className=" bg-white shadow-md py-8   p-4 lg:p-6 h-fit w-full ">
            <div className=" mb-8 flex justify-between items-center">
              <div>
                <h1 className=" font-semibold text-lg md:text-2xl  capitalize">
                  {heading} {cat}
                </h1>
                <p className=" text-sm md:text-sm text-gray-600  capitalize">
                  here are the top seller'sn for nike {cat}
                </p>
              </div>
              <button
                onClick={() => handleNavigate(cat)}
                className="  capitalize  text-xs md:text-base  text-blue-600  "
              >
                More
              </button>
            </div>

            <div className=" mb-8 flex justify-between items-start">
              <div>
                <div className=" flex   gap-2 lg:gap-4">
                  {cat === "shoes" ? (
                    <select
                      onChange={(e) => filterSize(e.target.value)}
                      id="countries"
                      className="bg-gray-50 border text-sm md:text-base border-gray-300  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500   p-2 md:p-4 "
                    >
                      <option value={"size"}>Sort by Size</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                    </select>
                  ) : (
                    <select
                      onChange={(e) => filterSizeCloth(e.target.value)}
                      id="countries"
                      className="bg-gray-50 border italic text-sm md:text-base border-gray-300  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500    p-2 md:p-4"
                    >
                      <option value={"size"}>Sort by Size</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="2XL">XXL</option>
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-10">
              {!products?.length && (
                <p className=" text-lg italic text-gray-600">
                  No product found
                </p>
              )}
              {products?.map(({ id, name, desc, price, category, images }) => {
                return (
                  <article key={id}>
                    <div>
                      <div>
                        <div className=" relative">
                          <Link to={`/product/${id}`}>
                            {images[count] ? (
                              <img
                                className="w-full h-full block bg-slate-50"
                                src={images[count]}
                                alt={name}
                              />
                            ) : (
                              <div
                                className="w-full h-full block bg-slate-200"
                                src={images[count]}
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
                              className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black  text-white bg-black/70"
                            >
                              <BsSuitHeart size={25} />
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
    </div>
  );
};

export default Category;
