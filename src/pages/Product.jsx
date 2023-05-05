import React, { useState } from "react";
import { BsStarFill, BsSuitHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { productData } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { addToFavourites } from "../redux/favoriteSlice";
// import Category from "../components/Category";

const Product = ({ simplified }) => {
  const [quantity, setQuantity] = useState(1);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const product = productData.find((item) => item.id == id);

  const { id: productID, price, name, desc, category, size, images } = product;

  const handleQuantity = (type) => {
    if (type === "decr") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = (product) => {
    const notify = () => toast("Item Added to Cart");
    notify();
    dispatch(addToCart(product));
  };

  const handleFav = (product) => {
    const notify = () => toast("Item Added to Favorites");
    notify();
    dispatch(addToFavourites(product));
  };

  return (
    <div>
      <div className="  ">
        <div className="mt-[110px]">
          <div className=" bg-white w-[90%] h-full flex flex-col lg:flex-row gap-10 lg:p-10  mx-auto">
            <div className=" w-full lg:w-[500px]">
              <img
                src={images[count]}
                className=" w-[400px] md:w-full lg:h-[600px] object-cover"
                alt=""
              />
              <div className="flex gap-2 lg:gap-4 mt-4">
                {images.map((img, index) => (
                  <img
                    key={img}
                    onClick={() => setCount(index)}
                    className="h-[80px] w-[70px] md:h-[120px] md:w-[120px]  object-cover"
                    src={img}
                    alt="img"
                  />
                ))}
              </div>
            </div>
            <div className=" w-full lg:w-[60%]">
              <small className=" text-orange-500 text-sm uppercase mb-2 font-semibold ">
                {category.slice(0, -1)}
              </small>

              <h1 className=" text-2xl font-medium tracking-wide capitalize">
                {name}
              </h1>

              <div className=" flex gap-1  mb-1 text-yellow-400">
                <BsStarFill size={20} />
                <BsStarFill size={20} />
                <BsStarFill size={20} />
                <BsStarFill size={20} />
                <BsStarFill size={20} />
              </div>

              <h2 className=" font-medium lg:text-lg uppercase mt-2 mb-1">
                size: {size}
              </h2>

              <p className=" mt-2 text-gray-700">{desc}</p>

              <div className=" flex font-medium text-xl items-center   mt-2">
                <span className="">&#x20A6;</span>
                <p className="ml-1 ">
                  {new Intl.NumberFormat().format(price - 1750)}
                </p>
              </div>
              <div className=" mt-2">
                <h2 className=" font-medium capitalize mb-1">quantity</h2>

                <div className="border border-gray-600 w-52 rounded-lg flex">
                  <button
                    onClick={() => handleQuantity("incr")}
                    className=" text-lg flex-1 py-2 px-4 border-r border-gray-600"
                  >
                    +
                  </button>
                  <button className=" flex-1 py-2 px-4">{quantity}</button>
                  <button
                    onClick={() => handleQuantity("decr")}
                    className=" text-lg flex-1 py-2 px-4  border-l border-gray-600"
                  >
                    -
                  </button>
                </div>
              </div>
              <div className=" my-8 flex flex-col lg:flex-row  flex-wrap gap-4 ">
                <button
                  onClick={() =>
                    handleClick({
                      id: productID,
                      name,
                      price,
                      category,
                      images,
                      quantity,
                      totalPrice: Number(price) * quantity,
                    })
                  }
                  className="  bg-black  flex items-center justify-between  text-white px-6 py-3 "
                >
                  Add to Cart
                  <div className=" ml-3">
                    <HiOutlineShoppingCart size={25} />
                  </div>
                </button>

                <button
                  onClick={() =>
                    handleFav({
                      id: productID,
                      name,
                      price,
                      category,
                      images,
                    })
                  }
                  className=" bg-black  flex items-center justify-between text-white px-6 py-3 "
                >
                  Add to Favorites
                  <div className=" ml-3">
                    <BsSuitHeart size={25} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
