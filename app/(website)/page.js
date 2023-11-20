"use client";
import React, { useContext, useEffect } from "react";
import ThingsLikeAboutUs from "./Components/Sub-Components/ThingsLikeAboutUs";
import HowItWorks from "./Components/Sub-Components/HowItWorks";
import OurTrubuddies from "./Components/Sub-Components/OurTrubuddies";
import OurServices from "./Components/Sub-Components/OurServices";
import LearnInspire from "./Components/Sub-Components/LearnInspire";
import FAQs from "./Components/Sub-Components/FAQs";
import OurTeam from "./Components/Sub-Components/OurTeam";
import BlueEffect from "./Components/Elements/BlueEffect";
import SocialMedia from "./Components/Sub-Components/SocialMedia";
import { noto_sans } from "./Components/Utils/font";

import redCircle from "./Assets/Home/red circle.png";
import Image from "next/image";
import girl from "./Assets/Home/Images/Frame.png";
import logo from "./Assets/Home/Logo Image.png";
import LeftBlueLight from "./Components/Sub-Components/LeftBlueLight";
import RightDotsHome from "./Components/Sub-Components/rightDotsHome";

import bg from "./Assets/Home/Home bg.png";
import mobileBg from "./Assets/Home/Home mobile bg.png";

import cloud from "./Assets/Home/cloud.png";
import lightCloud from "./Assets/Home/image 16.png";
import gsap from "gsap";
import { Power2, ScrollTrigger } from "gsap/all";
import { useRouter } from "next/navigation";
import Context from "../Context/Context";
import LoginModal from "./Components/login";
import { getCookie } from "cookies-next";

const App = () => {
  const { modalIsOpen, setIsOpen } = useContext(Context);
  gsap.registerPlugin(ScrollTrigger);
  const history = useRouter();
  const context = useContext(Context);
  const animateLeftRight = (e) => {
    let timeline = gsap.timeline({ repeat: Infinity });

    timeline
      .fromTo(e, { x: 20 }, { x: 0, duration: 4, ease: Power2.easeInOut })
      .fromTo(
        e,
        { x: 0 },
        {
          x: -20,
          duration: 4,
          ease: Power2.easeInOut,
        }
      )
      .fromTo(e, { x: -20 }, { x: 0, duration: 4, ease: Power2.easeInOut })
      .fromTo(e, { x: 0 }, { x: 20, duration: 4, ease: Power2.easeInOut });
  };

  const animateRightLeft = (e) => {
    let timeline = gsap.timeline({ repeat: Infinity });

    timeline
      .fromTo(e, { x: -20 }, { x: 0, duration: 4, ease: Power2.easeInOut })
      .fromTo(
        e,
        { x: 0 },
        {
          x: 20,
          duration: 4,
          ease: Power2.easeInOut,
        }
      )
      .fromTo(e, { x: 20 }, { x: 0, duration: 4, ease: Power2.easeInOut })
      .fromTo(e, { x: 0 }, { x: -20, duration: 4, ease: Power2.easeInOut });
  };

  useEffect(() => {
    animateLeftRight("#rightCloud");
    animateRightLeft("#right1Cloud");
  }, []);

  useEffect(() => {
    let element = document.getElementById(context?.scrollTo);
    if (element) {
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    let element = document.getElementById("logoIcon");

    if (typeof window != "undefined" && window.innerWidth < 550) {
      gsap.to("#logoIcon", {
        x: window.innerWidth - element.offsetLeft - 100,
        y: window.innerHeight - (element.offsetHeight + element.offsetTop),
        duration: 1,
        scrollTrigger: {
          trigger: "#trigger",
          start: "top 65%",
          ease: Power2.easeInOut,
          onEnter: () => {
            element.classList.remove("sticky");
            element.classList.add("fixed");
          },
          onEnterBack: () => {
            element.classList.remove("fixed");
            element.classList.add("sticky");
          },
        },
      });
    } else {
      gsap.to("#logoIcon", {
        x: window.innerWidth - element.offsetLeft - 155,
        y: window.innerHeight - (element.offsetHeight + element.offsetTop) - 10,
        duration: 1,
        scrollTrigger: {
          trigger: "#trigger",
          start: "top 65%",
          ease: Power2.easeInOut,
          onEnter: () => {
            element.classList.remove("sticky");
            element.classList.add("fixed");
          },
        },
      });
    }
  }, []);

  return (
    <>
      <LoginModal />
      <div className="bg-newVeryLightBlue relative overflow-x-hidden">
        <Image
          src={bg}
          alt="background"
          className="absolute z-10 md:block hidden -top-[5vw]"
        />
        <Image
          src={mobileBg}
          alt="background"
          className="absolute z-10 top-0 h-[100vh]"
        />
        <div
          id="home"
          className={`homeBg relative h-fit md:h-[100vh] md:py-[6vw] py-[5vw] flex md:flex-row flex-col justify-between items-center`}
        >
          <RightDotsHome />
          <div className="flex h-[70vh] md:h-full relative justify-center md:mt-0 mt-[5vw] items-center w-full md:w-6/12 z-20">
            <Image
              src={girl}
              alt="Girl"
              className="floatGirl absolute w-11/12 md:w-7/12 md:mt-0 mt-5"
            />
          </div>
          <div
            className={`flex flex-col items-end w-full md:w-6/12 pr-[4vw] ${noto_sans.className} z-40`}
          >
            <div
              className="text-4xl md:text-7xl font-bold text-center md:text-end text-newDarkNavyGrey leading-[45px] md:leading-[90px]"
              style={{ textShadow: "0px 5px 3px rgba(56, 56, 56,0.5)" }}
            >
              KEEP YOUR{" "}
              <div className="text-white relative inline">
                {" "}
                <Image
                  src={redCircle}
                  alt="Red circle"
                  className="top-2 right-0 md:block hidden absolute w-[36vw]"
                />
                MIND
              </div>{" "}
              HEALTHY
            </div>
            <p
              className="text-end mt-8 text-white pl-[7vw] text-xl md:block hidden"
              style={{ textShadow: "0px 3px 2px rgba(56, 56, 56,0.5)" }}
            >
              TruBuddies is a mental health-focused organization fostering
              community, awareness, and support for individuals navigating
              mental health challenges.
            </p>
            <div
              id="trigger"
              className="cursor-pointer flex items-center self-center md:self-end mt-1 md:mt-[3vw] text-newDarkNavyGrey"
            >
              <div
                onClick={(e) => {
                  if (getCookie("token")) {
                    history.push("/chats");
                  } else {
                    setIsOpen(!modalIsOpen);
                  }
                }}
                id="logoIcon"
                className="bg-newYellow sticky h-[15vw] w-[15vw] md:h-[4.5vw] md:w-[4.5vw] rounded-full z-20 flex justify-center items-center"
              >
                <Image src={logo} alt="Logo" className="w-7/12" />
              </div>
              <div
                onClick={(e) => {
                  if (getCookie("token")) {
                    history.push("/chats");
                  } else {
                    setIsOpen(!modalIsOpen);
                  }
                }}
                className="bg-newYellow h-[9.5vw] md:h-[3vw] w-[65vw] md:w-[18vw] rounded-xl -ml-7 pl-3 flex justify-center items-center  text-lg md:text-xl font-bold"
                style={{ textShadow: "0px 3px 3px rgba(56, 56, 56,0.5)" }}
              >
                Chat With TruBuddies
              </div>
            </div>
          </div>
          <Image
            src={cloud}
            alt="Cloud"
            id="rightCloud"
            className="absolute md:z-50 z-30 bottom-[35%] md:-bottom-20 opacity-80 md:opacity-40 left-[45%] w-[65vw] md:w-[35vw]"
          />
          <Image
            src={cloud}
            alt="Cloud"
            id="rightCloud"
            className="absolute md:z-50 z-30 bottom-[25%] md:-bottom-20 opacity-80 md:opacity-60 -left-0 w-[80vw] md:w-[35vw]"
          />
          <Image
            src={cloud}
            alt="Cloud"
            id="right1Cloud"
            className="absolute md:z-50 z-30 bottom-[30%] md:bottom-[1vw] left-[30vw] md:left-5 w-[80vw] md:w-[25vw]"
          />
          <Image
            src={lightCloud}
            alt="Cloud"
            id="right1Cloud"
            className="absolute z-10 bottom-[40vw] md:bottom-[10vw] -left-10 md:left-0 w-[80vw] md:w-[25vw]"
          />
          <Image
            src={cloud}
            alt="Cloud"
            id={
              typeof window !== "undefined"
                ? window.innerWidth < 500
                  ? "rightCloud"
                  : "right1Cloud"
                : ""
            }
            className="absolute md:z-50 z-30 bottom-[20%] opacity-100 md:bottom-12 left-[35vw] md:left-[18vw] w-[90vw] md:w-[22vw]"
          />
          <Image
            src={cloud}
            alt="Cloud"
            id={
              typeof window !== "undefined"
                ? window.innerWidth < 500
                  ? "rightCloud"
                  : "right1Cloud"
                : ""
            }
            className="absolute md:z-50 z-30 md:hidden bottom-[16%] opacity-100 md:bottom-12 -left-[30%] md:left-[18vw] w-[90vw] md:w-[22vw]"
          />
          <Image
            src={cloud}
            alt="Cloud"
            id="rightCloud"
            className="absolute z-30 md:z-50 bottom-[45vw] hidden md:block md:opacity-100 opacity-80 md:bottom-24 left-0 md:left-[22vw] w-[60vw] md:w-[25vw]"
          />
          <Image
            src={lightCloud}
            alt="Cloud"
            id="right1Cloud"
            className="absolute z-10 bottom-5 md:-bottom-20 left-0 md:left-28 w-[45vw]"
          />
          <Image
            src={lightCloud}
            alt="Cloud"
            id="right1Cloud"
            className="absolute z-10 -bottom-5 right-20 w-[45vw]"
          />
          <Image
            src={lightCloud}
            id="rightCloud"
            alt="Cloud"
            className="absolute z-10 bottom-0 -right-[16vw] w-[90vw] md:w-[35vw]"
          />
        </div>
        <div>
          <LeftBlueLight />
          <BlueEffect />
          <ThingsLikeAboutUs />
          <HowItWorks />
          <OurTrubuddies />
          <OurServices />
          <LearnInspire />
          <FAQs />
          {/* <OurTeam /> */}
          {/* <SocialMedia /> */}
        </div>
      </div>
    </>
  );
};

export default App;
