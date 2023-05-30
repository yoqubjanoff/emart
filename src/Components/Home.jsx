import React from "react";
import bgIMage from "../Components/assets/images/background-website-plant-wall.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0 ">
        <img
          src={bgIMage}
          className="card-img "
          alt="..."
          style={{ height: "1050px" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-around">
          <div className="container">
            <h5 className="card-title text-dark fw-bolder display-3 " style={{marginTop: "150px"}}>NEW SEASON ARRIVALS</h5>
            <p className="card-text  lead fs-2 text-dark"> CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
