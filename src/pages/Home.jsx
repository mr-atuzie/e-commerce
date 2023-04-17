import React from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import { productData } from "../data";

const Home = ({ simplified }) => {
  return (
    <div>
      <div className=" mt-[110px]">
        <Category
          items={productData}
          simplified={simplified}
          cat={"Jackets"}
          heading={"Best Seller for"}
        />
        <Category
          items={productData}
          simplified={simplified}
          cat={"shoes"}
          heading={"Best Seller for"}
        />

        <Category
          items={productData}
          simplified={simplified}
          cat={"shirts"}
          heading={"Best Seller for"}
        />
        <Category
          items={productData}
          simplified={simplified}
          cat={"trousers"}
          heading={"Best Seller for"}
        />
        {/*
        <NewArrival /> */}
        <Products />
      </div>
    </div>
  );
};

export default Home;
