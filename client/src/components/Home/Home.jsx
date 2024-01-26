import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../Product/ProductCard.jsx";
import { getProducts } from "../../APIRequest/ProductAPI.js";

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  function seeMoreHandleClick() {
    navigate("/products");
  }

  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to</p>
        <p style={{ fontSize: "50px", fontWeight: "700" }}>
          MBSTU ONLINE FOOD SERVICE
        </p>
        <h1>FIND AMAZING FOODS HERE</h1>
      </div>
      {/* <div className="empty-div"></div> */}

      <h2 className="homeHeading">Featured Foods</h2>

      <div className="container">
        {products.data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <button onClick={seeMoreHandleClick} className="seeMore">
        Go to Foods →
      </button>
    </Fragment>
  );
};

export default Home;
