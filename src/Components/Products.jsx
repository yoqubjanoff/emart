import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [base, setBase] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const data = await response.json();
        setBase(data);
        setFilter(data);
        setLoading(false);
      }
    };
  
    getData();
  }, []);
  
  const ShowProducts = () => {

    const filterProduct = (cat) => {
            const filtered = base.filter((product) => product.category === cat
            )
            setFilter(filtered)

    }
    return (
      <div>
        <div className="buttons d-flex justify-content-center my-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(base)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        <div className="row">
          {filter.map((product) => {
            return (
              <div className="nimadir col-md-3 mb-4">
                <div className="card h-100 text-center p-4 border-0 shadow-sm" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} style={{height: "250px"}}/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,10)}...</h5>
                    <p className="card-text lead fw-bold">
                        ${product.price}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="col-12">
          <h1 className="fw-bolder text-center my-5 display-6">
            Latest Products
          </h1>
          <hr />
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};


export default Products;
