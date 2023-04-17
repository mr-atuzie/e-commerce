import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiGift } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { BsPercent, BsCreditCard2Back } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      icon: <CiDeliveryTruck size={30} />,
      heading: "Free shipping",
      text: "From all orders over 10,000 naira",
    },
    {
      icon: <FiGift size={30} />,
      heading: "Daily Suprise offers",
      text: "Save up to 25% off every order",
    },
    {
      icon: <BiSupport size={30} />,
      heading: "Support 24/7",
      text: "Shop with an expert",
    },
    {
      icon: <BsPercent size={30} />,
      heading: "Affordable prices",
      text: "Get factory direct prices ",
    },
    {
      icon: <BsCreditCard2Back size={30} />,
      heading: "sercue payments",
      text: "100% secure payments",
    },
  ];
  return (
    <div className=" bg-gray-50 py-16">
      <div className=" w-[90%] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map(({ icon, heading, text }, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-center items-center gap-4 bg-white p-6 rounded-md"
              >
                <div>{icon}</div>
                <div>
                  <p className=" text-center uppercase text-lg font-medium">
                    {heading}
                  </p>
                  <p className=" text-center  text-gray-500 ">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
