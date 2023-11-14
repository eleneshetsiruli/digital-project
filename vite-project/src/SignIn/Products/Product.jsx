import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
useParams;
export const Product = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const params = useParams();
  console.log(singleProduct);

  async function loadSimpleProduct() {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }
  useEffect(() => {
    loadSimpleProduct();
  }, []);

  return (
    <div className="flex justify-center h-[100vh] items-center bg-orange-100">
      <div className="flex flex-col  w-[400px]">
        <div className="flex gap-10">
          {singleProduct.images?.map((img) => (
            <img
              className="w-[100px] transform hover:scale-150"
              key={img.name}
              src={img}
            />
          ))}
        </div>
        <h1>{singleProduct.title}</h1>
        <span className="text-red-600">{singleProduct.price}$</span>
        <p className="text-gray-500">{singleProduct.description}</p>

        <p className="text-green-700">updated At {singleProduct.updatedAt}</p>
      </div>
    </div>
  );
};
