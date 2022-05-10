import React from "react";

import "../../assets/css/banner.css";
import "../../assets/css/responsive.css";

import Banner1img from "../../assets/images/stock-banner1.jpeg";
import Banner2img from "../../assets/images/stock-banner2.jpeg";
import Banner3img from "../../assets/images/stock-banner3.jpeg";

import BannerSearch from "./BannerSearch";

const Banner = () => {
  return (
    <section className="banner_main">
      <div
        id="myCarousel"
        className="carousel slide banner"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={Banner1img} alt="First slide" />
            <div className="container"></div>
          </div>
          <div className="carousel-item">
            <img className="second-slide" src={Banner2img} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="third-slide" src={Banner3img} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <BannerSearch />
    </section>
  );
};

export default Banner;
