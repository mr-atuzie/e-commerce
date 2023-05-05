import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartImg from "../assets/cart.svg";
import { usePaystackPayment } from "react-paystack";
import { clearCart, removeFromCart } from "../redux/cartSlice";
import Success from "../components/Success";

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [paid, setPaid] = useState(false);

  const dispactch = useDispatch();

  const config = {
    reference: new Date().getTime().toString(),
    email: "atuzierex0@gmail.com",
    amount: totalPrice * 100,
    publicKey: "pk_test_820864edf00e25d73eeb6bf0d1df11ff33fa62e9",
  };

  const onSuccess = (reference) => {
    // console.log(reference);
    setPaid(true);
    dispactch(clearCart());
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="  mt-[80px] bg-gray-50 h-screen w-full">
      {paid && (
        <div className=" z-50 flex justify-center items-center w-full bg-black/90  h-full fixed top-0 right-0 bottom-0 ">
          <Success />
        </div>
      )}
      <div className=" w-[90%] py-20    mx-auto ">
        <div className=" ">
          {cart.length === 0 ? (
            <div className=" h-[70vh] flex flex-col justify-center items-center">
              <p className=" italic text-gray-600 mb-2">Cart is empty</p>
              <img src={cartImg} className width={400} alt="" />
            </div>
          ) : (
            <div className="flex  flex-col lg:flex-row justify-between ">
              <div className=" lg:w-[30%] h-fit bg-white p-6 shadow-md mb-8">
                <h1 className=" text-2xl lg:text-3xl capitalize">Cart Total</h1>{" "}
                <div className="my-5">
                  <div className=" capitalize flex justify-between items-center">
                    <h3 className=" lg:text-lg ">shipping:</h3>
                    <p className=" text-gray-700">Free</p>
                  </div>
                  <div className=" capitalize flex my-2 justify-between items-center">
                    <h3 className=" lg:text-lg ">cart total:</h3>
                    <p className=" text-gray-700">
                      &#x20A6; {new Intl.NumberFormat().format(totalPrice)}
                      {}
                    </p>
                  </div>
                  <div className="border-t uppercase flex justify-between items-center">
                    <h3 className=" text-  font-semibold">total</h3>
                    <p className=" text-gray-700 text-lg lg:text-xl">
                      &#x20A6; {new Intl.NumberFormat().format(totalPrice)}
                      {}
                    </p>
                  </div>
                </div>
                <button
                  className="bg-black w-full p-2 lg:p-4 text-white font-medium"
                  onClick={() => {
                    initializePayment(onSuccess, onClose);
                  }}
                >
                  CHECKOUT
                </button>
              </div>

              <div className=" mt-16 lg:mt-0 lg:w-[60%] overflow-x-auto  ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        s/n
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item, index) => {
                      return (
                        <tr
                          key={item.id}
                          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                          <td className="px-6 py-4">{index + 1}</td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="flex items-center">
                              <img
                                className=" w-[65px] h-[65px] rounded-full object-cover mr-3"
                                src={item.images[2]}
                                alt=""
                              />
                              <div>{item.name}</div>
                            </div>
                          </th>
                          <td className="px-6 py-4 text-center">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 capitalize ">
                            {item.category.slice(0, -1)}
                          </td>
                          <td className="px-6 py-4">
                            &#x20A6;
                            {new Intl.NumberFormat().format(
                              item.price * item.quantity
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() =>
                                dispactch(
                                  removeFromCart({
                                    id: item.id,
                                    totalPrice: item.price * item.quantity,
                                  })
                                )
                              }
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
