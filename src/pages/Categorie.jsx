import React from "react";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
// import { productData } from "../data";

const Categorie = () => {
  const { cat } = useParams();

  // house listing Site Description. and it features for a developer

  // E-commerce website,an online platform where businesses can sell their products and services to customers through the internet.   The website include a shopping cart feature that allows customers to add items to their cart and checkout when they are ready to purchase.with a secure payment gateway that allows customers to make payments using different payment methods, such as credit cards or bank transfers.The website  allow easy management of products, by filtering producs base on sizes, categories e.t.c

  //A business site is an online platform that allows businesses to showcase their products or services, interact with customers, and conduct transactions. These sites provide a central location where potential customers can learn more about the business, view products or services, and make purchases or inquiries.

  return (
    <div className="mt-[110px]">
      <Category cat={cat} heading={"All"} />
    </div>
  );
};

export default Categorie;
