import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const addProduct = (products) =>{
      dispatch(addToCart(products))   
    }

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    getData();
}, [id]); // Add

  const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>  
    );
  };

  const ShowProduct = () => {
    return (
      <div className="d-flex align-items-center justify-content-between mt-5">
        <div className="col-md-6 mt-5 ">
          <img
            src={products.image}
            alt={products.title}
            className="img-fluid"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-black-50">{products.category}</h4>
            <h2>{products.title}</h2>
          <p className="lead">{products.description}</p>
          <p className="lead fw-bold display-6">${products.price}</p>
          <p className="fw-bold">Rating: {products.rating && products.rating.rate}
            <i className="fa fa-star ms-1"></i>
          </p>
          <button className="btn btn-outline-dark" onClick={() => addProduct(products)}>Add to Cart</button>
        <NavLink to="/cart" className="btn btn-outline-dark ms-2" >Go to Cart</NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
