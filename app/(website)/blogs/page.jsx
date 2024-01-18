import React from "react";
import { noto_sans } from "../Components/Utils/font";
import Image from "next/image";
import mainImg from "../Assets/blogs/1 (1).png";
import img3 from "../Assets/blogs/1 (4).png";
import img1 from "../Assets/blogs/1 (2).png";
import img2 from "../Assets/blogs/1 (3).png";

const Blogs = () => {
  return (
    <div className={`flex items-start ${noto_sans.className}`}>
      <div className="w-2/12 border rounded-br-3xl border-newBlue py-20 px-8">
        <p className="font-semibold text-xl">More Topics</p>
        {["Overcoming Anxiety", "Overcoming Anxiety", "Overcoming Anxiety"].map(
          (e) => {
            return (
              <p
                key={e}
                className="border border-newBlue px-3 py-0.5 shadow-sm shadow-gray-300 mt-3 rounded-lg"
              >
                {e}
              </p>
            );
          }
        )}
      </div>
      <div className="w-10/12 py-20 px-[15vw]">
        <h1 className="text-2xl font-semibold">
          Overcoming Anxiety and Depression
        </h1>
        <p className="font-semibold text-newBlue text-xl mt-4">
          Anxiety vs Depression
        </p>
        <Image src={mainImg} alt="Main img" className="rounded-3xl my-3" />
        <p className="my-1">
          While anxiety and depression are distinct disorders, they share
          certain key features. Both involve persistent negative thought
          patterns, emotional anguish, and disruption in daily functioning.
          However, anxiety mainly entails excessive worry while depression
          primarily involves sadness and loss of interest. There is also much
          overlap in causes and treatment approaches.
        </p>
        <div className="flex flex-col items-center my-3">
          <div className="">
            <p className="text-lg text-newBlue font-semibold">
              What is Depression ?
            </p>
            <p>
              Depression refers to ongoing low mood alongside other emotional
              and functional impairments lasting at least 2 weeks. Key symptoms
              include persistent sadness, changes in appetite, low energy, poor
              concentration, feelings of worthlessness and thoughts of death or
              suicide. Depression can become a serious health concern when
              chronic and untreated.
            </p>
          </div>
          <div className="flex w-full mt-3 items-center justify-between">
            <Image
              src={img3}
              alt="Image 1"
              className="w-[48.5%] border-2 border-newBlue rounded-3xl h-[30vh] object-cover object-center"
            />
            <Image
              src={img2}
              alt="Image 2"
              className="w-[48.5%] border-2 border-newBlue rounded-3xl h-[30vh] object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col items-center my-3">
          <div className="">
            <p className="text-lg text-newBlue font-semibold">
              What is Anxiety ?
            </p>
            <p>
              Anxiety describes chronic, irrational worrying that interferes
              with normal life activities. Key symptoms include muscle tension,
              panic attacks, insomnia, nausea and concentration troubles. While
              normal anxiety helps us respond to threats, chronic anxiety is
              disproportionate and uncontrollable. Left untreated, anxiety
              disorders commonly worsen and hamper quality of life.
            </p>
          </div>
          <div className="flex w-full mt-3 items-center justify-between">
            <Image
              src={img1}
              alt="Image 1"
              className="w-full border-2 border-newBlue rounded-3xl h-[50vh] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
