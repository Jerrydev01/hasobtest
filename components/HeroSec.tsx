import Image from "next/legacy/image";
import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlinePlayCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

import { BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.png";
import ReactPlayer from "react-player";
import { useWindowSize } from "../hooks/windowSize";

const slides = [
  {
    image: img1,
  },
  {
    image: img2,
  },
];

const HeroSec = () => {
  const [showVid, setShowVid] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShowVid = () => {
    if (showVid) {
      setShowVid(false);
    } else {
      setShowVid(true);
    }
  };

  // image slider function
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="flex justify-between w-full ">
        <span className="bg-[#7E7C78] h-4 w-10"></span>
        <span className="bg-[#89B67C] h-4 w-10"></span>
      </div>

      <article className="flex padding">
        <div className="xl:w-[55%] w-[75%] pt-10 xl:pt-14">
          <h2 className="xl:text-6xl lg:text-5xl md:text-3xl">
            Subscribe to FG Saving Bond
          </h2>
          <p className="py-3 text-xl">Loan and get paid in Interest</p>

          <div className="flex gap-4 pt-8 whitespace-nowrap">
            <button className="text-white bg-[#417B13] px-6 py-2 rounded-[3px] flex gap-2 items-center font-semibold hover:bg-black transition-all duration-200">
              Get Started
              <span className="">
                <AiOutlineArrowRight />
              </span>
            </button>
            <button
              onClick={handleShowVid}
              className="flex items-center gap-2 font-semibold hover:text-[#417B13] transition-all duration-200"
            >
              <span className="text-3xl">
                <AiOutlinePlayCircle />
              </span>
              See Video
            </button>
          </div>
        </div>
        <div className={`w-[70rem] h-fit relative -translate-x-10 fade-in-fwd`}>
          {/* animate on each image change */}
          <Image
            src={slides[currentIndex].image}
            alt="trader"
            layout="responsive"
            objectFit="cover"
            className="fade-in-fwd"
          />
        </div>
        <div className="flex flex-col justify-end">
          <div className="pb-16">
            {/* <div className={`${slides.length === 0 ? "block" : "hidden"}`}>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div> */}
            <div className="flex justify-end text-black font-bold">
              <BsChevronRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`text-3xl cursor-pointer ${
                    currentIndex === slideIndex
                      ? "text-black"
                      : "text-[#A2ABA2]"
                  }`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
      {/* /* how to create a modal */}
      {showVid ? (
        <div className="relative">
          <Video setShowVid={setShowVid} />
        </div>
      ) : null}
    </div>
  );
};

interface Func {
  setShowVid: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Video = ({ setShowVid }: Func) => {
  const size = useWindowSize();
  return (
    //  {/* /* how to create a modal */}

    <div className="relative">
      <div className="fixed top-0 left-0 z-50 w-screen h-screen text-white bg-[#000000a4]">
        <button
          onClick={() => setShowVid(false)}
          className="absolute pt-10 pl-10 text-4xl"
        >
          <AiFillCloseCircle />
        </button>
        <div className="grid h-screen place-items-center  ">
          <div className="swing-in-top-fwd">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=tRT_X_MJgic"
              controls={true}
              width={size.width! > 750 ? 640 : 320}
              height={360}
              light={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
