import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero-content">
                <h1 className="text-white">Stay Home, And Prayer For Victim Of Corona virus.</h1>
                <p className="text.white mt-4 mb-5">"Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances."</p>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="hero-img"> 
                    //img src="./" alt=""//
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;