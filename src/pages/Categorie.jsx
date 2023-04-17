import React from "react";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
// import { productData } from "../data";

const Categorie = () => {
  const { cat } = useParams();

  return (
    <div className="mt-[110px]">
      <Category cat={cat} heading={"All"} />
    </div>
  );
};

export default Categorie;
