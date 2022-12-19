import React, { useState } from "react";
import { bondList } from "../../utils/data";
import logo from "../../assets/LOGO2.png";
import { formatMoney } from "../../utils/currencyFormatter";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "../../store/features/productSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";
import Image from "next/legacy/image";
import { useDispatch } from "react-redux";

const Bond = () => {
  const [isFavourite2, setIsFavourite2] = useState(0);

  const dispatch = useDispatch();

  const handleAddToCart = (id: any) => {
    dispatch(addToCart(id));
  };

  const handleFavourite = (id: any) => {
    if (isFavourite2 === id) {
      setIsFavourite2(0);
    } else {
      setIsFavourite2(id);
    }
  };
  return (
    <article className="relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1054: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {bondList.map((bond) => {
          return (
            <article key={bond.id}>
              <SwiperSlide key={bond.id}>
                <div className="  border rounded-md p-3 border-[#417B13] text-[#7A7A7A]">
                  <div className="flex items-center justify-between w-full">
                    <Image src={logo} alt="logo" width={50} height={50} />
                    <div className="py-2 px-3 rounded-[15px] bg-[#C1EED6] ">
                      <p className="text-[.8125rem]">{bond.tag}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pt-2 text-center">
                    <h2 className="text-lg font-semibold text-black">
                      {bond.name}
                    </h2>
                    <p className="text-[13px]">{bond.interestPayableDate}</p>
                  </div>
                  <div className="pt-3">
                    <div className="flex justify-between">
                      <p className="text-[.875rem] text-center pt-2">
                        {bond.minimum.name}
                      </p>
                      <p className="text-[.875rem] font-bold text-center  text-black">
                        {formatMoney(bond.minimum.amount)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[.875rem] text-center pt-2">
                        {bond.interestPerYear.name}
                      </p>
                      <p className="text-[.875rem] font-bold text-center pt-2 text-black">
                        {bond.interestPerYear.amount}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-[.875rem] text-center pt-2">
                        {bond.interestPayment.name}
                      </p>
                      <p className="text-[.875rem] font-bold text-center pt-2 text-black">
                        {bond.interestPayment.amount}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[.875rem] text-center pt-2">
                        {bond.openingDate.name}
                      </p>
                      <p className="text-[.875rem] font-bold text-center pt-2 text-black">
                        {bond.openingDate.date}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[.875rem] text-center pt-2">
                        {bond.closingDate.name}
                      </p>
                      <p className="text-[.875rem] font-bold text-center pt-2 text-black">
                        {bond.closingDate.date}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[.875rem] text-center pt-2">
                        {bond.settlementDate.name}
                      </p>
                      <p className="text-[.875rem] font-bold text-center pt-2 text-black">
                        {bond.settlementDate.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 mt-5">
                      <button
                        onClick={() => handleAddToCart(bond)}
                        className="bg-[#417B13] py-2 px-4 w-full text-white rounded-[3px]"
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() => handleFavourite(bond.id)}
                        className="text-3xl text-black"
                      >
                        {isFavourite2 === bond.id ? (
                          <AiFillHeart />
                        ) : (
                          <AiOutlineHeart />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </article>
          );
        })}
      </Swiper>
      <div className="absolute z-[50] top-[50%] w-full">
        <div className="flex justify-between font-bold text-black">
          <div className="lg:pl-0 pl-3  text-2xl -translate-x-8 cursor-pointer swiper-button-prev h-fit">
            <AiOutlineLeft />
          </div>
          <div className="lg:pr-0 pr-3 text-2xl translate-x-8 cursor-pointer swiper-button-next h-fit">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Bond;
