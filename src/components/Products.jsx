import React, { useState } from "react";
import { productData } from "../data";
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsEye,
  BsSuitHeart,
} from "react-icons/bs";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/cartSlice";
import { addToFavourites } from "../redux/favoriteSlice";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Products = ({ simplified }) => {
  const magic = Math.floor(Math.random() * 4);
  const rating = Math.floor(Math.random() * 3);

  const [products, setProducts] = useState(productData);
  const [cate, setCate] = useState("all");

  const filterCategory = (cat) => {
    const newProducts = productData.filter((item) => {
      setCate(cat);
      return item.category === cat;
    });

    setProducts(newProducts);
  };

  const filterSize = (size) => {
    const newProducts = productData.filter((item) => {
      return item.size === size;
    });

    setProducts(newProducts);
  };

  const hadleClick = () => {
    setProducts(productData);
    setCate("all");
  };

  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const handleFav = (product) => {
    const notify = () => toast("item added to favorites");
    notify();
    dispatch(addToFavourites(product));
  };

  return (
    <div className="hidden md:block bg-gray-50 py-16">
      <div className=" w-[92%] mx-auto ">
        <h1 className=" font-medium text-2xl mb-4">Featured products</h1>
        <div className=" flex flex-col lg:flex-row lg:justify-between">
          <div className=" bg-white shadow-md p-6 h-fit w-full lg:w-[28%]">
            {/* categories */}
            <div className="">
              <h1 className="text-lg font-medium text-gray-800">Categories</h1>
              <div className=" flex items-center flex-wrap gap-2 mt-3">
                <button
                  onClick={hadleClick}
                  className=" capitalize bg-gray-50 border border-gray-300  text-gray-900 w-24 rounded-lg p-4 italic"
                >
                  all
                </button>
                <button
                  onClick={() => filterCategory("shoes")}
                  className=" capitalize bg-gray-50 border border-gray-300  text-gray-900 w-24 rounded-lg p-4 italic"
                >
                  shoes
                </button>
                <button
                  onClick={() => filterCategory("shirts")}
                  className=" capitalize bg-gray-50 border border-gray-300  text-gray-900 w-24 rounded-lg p-4 italic"
                >
                  Shirts
                </button>
                <button
                  onClick={() => filterCategory("trousers")}
                  className=" capitalize bg-gray-50 border border-gray-300  text-gray-900 w-24 rounded-lg p-4 italic"
                >
                  trousers
                </button>
                <button
                  onClick={() => filterCategory("Jackets")}
                  className=" capitalize bg-gray-50 border border-gray-300  text-gray-900 w-24 rounded-lg p-4 italic"
                >
                  jackets
                </button>
                <button
                  onClick={() => filterCategory("caps")}
                  className=" capitalize bg-gray-50 border border-gray-300  text-gray-900 w-24 rounded-lg p-4 italic"
                >
                  caps
                </button>
              </div>
            </div>

            <div className=" mt-5">
              <h1 className="text-lg capitalize font-medium  text-gray-800">
                Sizes
              </h1>

              <div className=" flex items-center flex-wrap gap-2 mt-1 ">
                <select
                  onChange={(e) => filterSize(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  p-4 italic "
                >
                  <option>Sort Clothes by Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="2XL">XXL</option>
                </select>

                <select
                  onChange={(e) => filterSize(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500 p-4 italic "
                >
                  <option>Sort Shoes by Size</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            {/* <div className=" mt-5">
              <h1 className="text-lg capitalize font-medium text-gray-800">
                Prices
              </h1>

              <div className=" flex items-center flex-wrap gap-2 mt-1">
                <select
                  onChange={(e) => filterPrice(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  p-4 italic "
                >
                  <option> Sort by price</option>
                  <option value="15,999">Lowest</option>
                  <option value="28,999">Average</option>
                  <option value="70,999">Hightesst</option>
                </select>
              </div>
            </div> */}
          </div>
          <div className=" shadow-md bg-white p-6 h-fit w-full lg:w-[68%]">
            <div>
              {cate === "all" ? (
                <p className=" text-gray-500 mb-4 italic ">
                  All our clothes - {products.length} items
                </p>
              ) : (
                <p className=" text-gray-500 mb-4 italic capitalize">
                  {products.length} {cate} found
                </p>
              )}
            </div>

            {!products.length && (
              <p className=" text-lg italic text-gray-600">No product found</p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products
                .slice(0, 12)
                .map(({ id, name, desc, price, category, images }) => {
                  return (
                    <article key={id}>
                      <div>
                        <div>
                          <div className=" relative">
                            <Link to={`/product/${id}`}>
                              <img src={images[magic]} alt={name} />
                            </Link>
                            <div className="absolute right-4 top-4 ">
                              <Link to={`/product/${id}`}>
                                <div className=" w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black text-white  bg-black/70">
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
                                className=" w-12 h-12 flex justify-center items-center rounded-full hover:scale-105 hover:bg-black text-white my-2 bg-black/70"
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
                          <div className=" mt-2 ">
                            <h4 className="text-sm font-semibold uppercase text-orange-500 mb-2">
                              {category.slice(0, -1)}
                            </h4>

                            <p className=" font-medium uppercase">{name}</p>
                            {rating === 0 && (
                              <div className=" flex gap-1  mb-1 text-yellow-400">
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarHalf size={15} />
                              </div>
                            )}
                            {rating === 1 && (
                              <div className=" flex gap-1 mb-1 text-yellow-400">
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStar size={15} />
                              </div>
                            )}
                            {rating === 2 && (
                              <div className=" flex gap-1  mb-1 text-yellow-400">
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                                <BsStarFill size={15} />
                              </div>
                            )}

                            <div className=" flex font-light text-base md:text-lg items-start  ">
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

export default Products;
