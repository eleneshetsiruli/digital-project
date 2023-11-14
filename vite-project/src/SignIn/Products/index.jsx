import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  async function getProducts() {
    fetch(" https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" bg-gray-300 flex flex-wrap justify-center items-center gap-5 ">
      {products.map((el) => (
        <ProductCard data={el} key={el.id} />
      ))}
    </div>
  );
};

function ProductCard({ data }) {
  return (
    <>
      <Link
        className="bg-white w-[300px] h-[400px] flex flex-col gap-2  items-center border border-black border-solid rounded-[10px]  "
        to={`/products/${data.id}`}
      >
        <img
          className=" rounded-[10px]   w-[300px ] h-[300px]"
          src={data.images}
          alt="img"
        />

        <h1>{data.title}</h1>
        <p>category:{data.category.name}</p>
        <div className="flex gap-20">
          <span>{data.price}$</span>
          <button className="bg-gray-300 w-[130px] rounded-[10px]">
            add to cart
          </button>
        </div>
      </Link>
    </>
  );
}
