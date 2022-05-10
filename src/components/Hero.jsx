import React from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Hero = () => {
  const slider = [
    {
      content: "Get 80% Loan on your Crypto Assets",
      img: "/assets/slider/i1.svg",
      link: "/crypto-loans",
    },
    {
      content: "Up to 18% APY on your Crypto Fixed Deposits",
      img: "/assets/slider/i2.svg",
      link: "/fixed-deposits",
    },
    {
      content: "U Pay us in Crypto we pay you in Cash",
      img: "/assets/slider/i3.svg",
      link: "/crypto-cash",
    },
    {
      content:
        "Now Pay your University Fee, Purchase Motor Vehicles, Properties  with your Crypto",
      img: "/assets/slider/i4.svg",
      link: "/payment-services",
    },
    {
      content:
        "Use our Escrow Service for Safe & Secure Business & Personal Transactions",
      img: "/assets/slider/i5.svg",
      link: "/crypto-escrow",
    },
    {
      content: "Join as Crypto Cash Dealer  Earn up to 5% on each Transaction",
      img: "/assets/slider/i6.svg",
      link: "/dealer",
    },
  ];

  return (
    <div className="hero_container">
      <div className="page_container">
        <div className="container-fluid">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {slider.map((content, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="single_swiper container-fluid">
                    <div className="row gy-5 align-items-center">
                      <div className="col-12 col-md-7 px-0">
                        <h1 className="display-4 fw-bold text-white">
                          {content.content}
                        </h1>
                        <Link to={content.link}>
                          <button className="mt-3 lets_start">
                            Let’s Start
                          </button>
                        </Link>
                      </div>
                      <div className="col-12 col-md-5 px-0">
                        <img src={content.img} alt={content.content} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
