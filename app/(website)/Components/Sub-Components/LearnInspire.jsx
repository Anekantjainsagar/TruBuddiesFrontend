"use client";
import Image from "next/image";
import React, { useState } from "react";
import { noto_sans } from "../Utils/font";
import Bulb from "../Elements/Bulb";
import chatBox from "../../Assets/Home/image 7.png";
import text from "../../Assets/Home/image 5.png";
import Network from "../Elements/Network";

// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import blog1 from "../../Assets/Home/Images/Rectangle 20.png";
import blog2 from "../../Assets/Home/Images/Rectangle 21.png";
import blog3 from "../../Assets/Home/Images/Rectangle 22.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ComingSoon from "./ComingSoon";

const LearnInspire = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let data = [
    {
      image: blog1,
      title: "Relationship issues",
      text: "Rakul, 30, and Anaya, 28, encountered relationship issues characterized by dwindling intimacy and communication breakdowns. The symptoms included increasing emotional distance and a lack of shared moments. The root causes were traced to work-related stress and differing expectations. Recognizing the need for change they turned to Trubuddies for professional help, utilizing the platform's confidential and compassionate space to address underlying concerns and rekindle the spark in their marriage.",
    },
    {
      image: blog2,
      title: "Internet Addiction",
      text: "Sam, a 20-year-old boy used to spend too much time on his phone. He stayed up late surfing on the internet, playing games and watching videos on social media platforms for about 15-20 hours everyday. His parents were extremely tensed because of his declining grades and detoriating health. This is a case of internet addiction causing poor concentration, stress, anxiety and physical complaints. Trubuddies offers a compassionate and safe space to share concerns with professionals anonymously and without judgment helping individuals like Sam regain control and well-being.",
    },
    {
      image: blog3,
      title: "Peer Pressure",
      text: "Anisha is a 19-year-old girl studying English Honours at a well-known university in Delhi. Her classmates were jealous of her and doubted her academic success, attributing it to impressing teachers rather than hard work. Falsely accused, isolated, and bullied, she felt depressed, abandoned her hobbies and developed trust issues. Pressurized to obey her classmates orders, this case reflects peer pressure, causing stress, anxiety, and internal conflict as individuals strive to conform to group norms. Trubuddies offers a platform for individuals dealing with such issues providing a confidential and compassionate space where you can freely share your concerns with therapists in an anonymous and non-judgmental environment.",
    },
  ];

  return (
    <div
      className={`bg-gradient-to-br from-newLightBlue from-30% to-newOcean py-[2vw] ${noto_sans.className}`}
    >
      <div
        className={`uppercase text-center w-fit mx-auto text-2xl md:text-3xl mt-2 text-white font-bold relative`}
      >
        Learn & Inspire
        <Bulb />
        <Image
          src={chatBox}
          alt="Chat box"
          className="w-[9vw] md:w-[4vw] absolute -top-1 md:-top-3 -right-12 md:-right-20"
        />
      </div>
      <div className="relative md:mt-0 mt-[6vw] px-0 md:px-[10vw] pt-[2vw]">
        <Network />
        <Image
          src={text}
          alt="Text"
          className="w-[10vw] absolute right-8 bottom-3 -md:block hidden"
        />
        {/* Blocks */}
        <div className="md:grid hidden grid-cols-3 gap-x-6">
          {data?.map((e, i) => {
            return <Block data={e} key={i} />;
          })}
        </div>
        <div className="block md:hidden mt-5">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              interval: 3000,
              disableOnInteraction: false,
            }}
          >
            {data?.map((item, i) => (
              <SwiperSlide key={i}>
                <Block data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div
      onClick={(e) => {
        setShowComingSoon(!showComingSoon);
      }}
      className="bg-white flex flex-col mb-10 md:mx-0 mx-[12vw] md:p-4 p-3 rounded-2xl shadow-lg shadow-gray-400 hover:scale-105 transition-all cursor-pointer"
    >
      <ComingSoon
        showComingSoon={showComingSoon}
        setShowComingSoon={setShowComingSoon}
      />
      <Image src={data?.image} alt="Image" />
      <h1 className="text-xl font-semibold pt-2 pl-2">{data?.title}</h1>
      <p className="px-2 mb-0 text-sm font-light">
        {data?.text?.slice(0, 100) + "..."}
      </p>
    </div>
  );
};

export default LearnInspire;
