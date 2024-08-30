import React from "react";
import Image from "next/image";
import whyImage from "../../../Images/Services/diary/why.png";
import hero from "../../../Images/Services/diary/hero.png";
import yellowBg from "../../../Images/Services/diary/yellow bg.png";
import planners from "../../../Images/Services/diary/planners.png";
import personalDiary from "../../../Images/Services/diary/personal diary.png";
import polygon from "../../../Images/Services/diary/polygon.png";
import PersonalDiaryScroller from "./PersonalDiary";

const Diary = () => {
  return (
    <div>
      <div className="diaryBg relative h-[100vh] px-[8vw]">
        <Image
          src={hero}
          alt={"Diary bg"}
          className="absolute right-0 top-0 w-5/12"
        />
        <div className="h-full flex flex-col items-start justify-center">
          <h1 className="text-diaryBlue text-8xl font-semibold noto_sans">
            Diary
          </h1>
          <p className="text-3xl text-gray-700 my-4 w-4/12">
            Your personal and exclusive best friend
          </p>
          <button className="bg-diaryBlue text-white px-8 py-2 text-2xl font-semibold rounded-lg mt-2">
            Categories
          </button>
        </div>
      </div>
      <div className="bg-diaryPink flex flex-col items-center justify-center py-5">
        <h4 className="text-3xl font-medium my-3">
          Why is Journaling important?
        </h4>
        <div className="w-10/12 mx-auto flex items-start justify-between gap-x-5">
          {[1, 2, 3].map((e,i) => {
            return (
              <div key={i} className="w-[25vw] rounded-xl bg-white">
                <Image src={whyImage} className="Why" />
                <h4 className="text-2xl mt-2 font-semibold px-5">
                  Releases built in thougts
                </h4>
                <p className="text-lg px-5 pb-3">
                  Letting out inner thoughts helps release mental pressure.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="diaryBg2 w-full">
        <div className="w-full flex items-center justify-between pr-[5vw]">
          <div className="relative">
            <Image src={yellowBg} alt="Yellow bg" className="w-10/12" />
            <h4 className="text-5xl pl-[5vw] w-9/12 font-medium absolute top-1/2 -translate-y-1/2">
              What do we have in store for you?
            </h4>
          </div>
          <Image src={planners} alt="Yellow bg" />
        </div>
        <div className="px-[5vw] flex items-center justify-between">
          <PersonalDiaryScroller />
          <Image src={personalDiary} alt="Personal diary" className="w-4/12" />
        </div>
        <div className="flex flex-col items-center justify-center py-[6vw]">
          <h4 className="bg-gradient-to-r from-[#FFCCDB] to-[#FD6291] w-fit text-4xl text-diaryBlue px-8 py-1 rounded-lg font-medium">
            Planners
          </h4>
          <p className="text-xl text-gray-600 mt-2">To keep you planned out</p>
          <p className="text-xl text-gray-600 mt-1">
            And a whole lot of templates to choose from!
          </p>{" "}
          <div className="flex items-start gap-x-16 px-[5vw] mt-5">
            {[1, 2, 3]?.map((item, i) => (
              <div key={i} className="w-[22vw] mb-10 h-[46vh] bg-gray-300 rounded-md"></div>
            ))}
          </div>
          <button className="text-white text-xl bg-gradient-to-r from-[#376EFF] to-[#030154] px-8 py-2 font-medium rounded-2xl">
            View All
          </button>
        </div>
        <div className="py-[6vw] flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <h5 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-4xl font-semibold">
              And what’s more exciting!!
            </h5>
            <Image src={polygon} alt="Polygon" />
          </div>
          <p className="text-2xl text-gray-500 text-center">
            An entire set of stickers to decorate your diaries and planners!
          </p>{" "}
          <div className="w-full noto_sans text-5xl font-semibold bg-gray-300 h-[20vh] my-5 flex items-center justify-center">
            Stickers
          </div>
          <button className="text-white text-xl bg-gradient-to-r from-[#376EFF] mt-5 to-[#030154] px-8 py-2 font-medium rounded-2xl">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diary;
