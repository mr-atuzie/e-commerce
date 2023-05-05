import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className=" w-[90%] lg:w-[40%] p-6 rounded-sm  bg-white">
      <h1 className=" font-semibold  text-center text-xl lg:text-2xl">
        Thank you for shopping with THRIFT
      </h1>

      <div className=" flex mt-4 flex-col justify-center items-center">
        <p className=" text-blue-700 mb-1">Your order is on the way to you</p>
        <img
          className=" w-[250px] h-[250px] lg:w-[250px] lg:h-[350px]  object-cover  rounded-full"
          src="https://img.freepik.com/free-psd/home-delivery-express-shipping-background-3d-render-illustration_47987-13641.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=robertav1_2_sidr"
          alt=""
        />

        <button
          onClick={handleClick}
          className=" bg-black text-white py-3 px-7 uppercase my-6"
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Success;
