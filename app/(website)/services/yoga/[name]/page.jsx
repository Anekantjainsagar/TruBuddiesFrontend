import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

import element from "../../../../Images/Services/yoga/block/element 1.png";
import element2 from "../../../../Images/Services/yoga/block/element 2.png";
import yogaPos from "../../../../Images/Services/yoga/block/position.png";

import pos1 from "../../../../Images/Services/yoga/block/Positions/yoga (12).png";
import pos2 from "../../../../Images/Services/yoga/block/Positions/yoga (11).png";
import pos3 from "../../../../Images/Services/yoga/block/Positions/yoga (10).png";
import pos4 from "../../../../Images/Services/yoga/block/Positions/yoga (9).png";
import pos5 from "../../../../Images/Services/yoga/block/Positions/yoga (8).png";
import pos6 from "../../../../Images/Services/yoga/block/Positions/yoga (7).png";
import pos7 from "../../../../Images/Services/yoga/block/Positions/yoga (6).png";
import pos8 from "../../../../Images/Services/yoga/block/Positions/yoga (5).png";
import pos9 from "../../../../Images/Services/yoga/block/Positions/yoga (4).png";
import pos10 from "../../../../Images/Services/yoga/block/Positions/yoga (3).png";
import pos11 from "../../../../Images/Services/yoga/block/Positions/yoga (2).png";
import pos12 from "../../../../Images/Services/yoga/block/Positions/yoga (1).png";

const SeprateYoga = () => {
  const data = [
    {
      image: pos1,
      title: "Pranamasana or the Prayer Pose",
      value:
        "The Pranamasana pose is the first pose in the series of 12 poses of Surya Namaskar. Perform this pose by standing erect. Bring your feet close together, expand your chest by taking deep breaths. Relax your shoulders. Now inhale and raise your arms and join your palms together at the center of your chest in a Namaste as you exhale.",
    },
    {
      image: pos2,
      title: "Hasta Uttanasana or the Raised Arms Pose",
      value:
        "Lift your arms up as you bend backwards slightly. Your pelvis needs to be pushed forward a bit. Your biceps should be placed close to your ears while you stretch the entire body up right from your heels.",
    },
    {
      image: pos3,
      title: "Hasta Padasana/ Padahastasana or the Standing Forward Bend Pose",
      value:
        "As you exhale, bend forward and try to touch down your toes with the help of your fingers. For beginners, it's okay to bend your knees initially if keeping straight while bending is not possible. However, your spine should not bend. Keep your shoulders and neck relaxed and press gently into your heels so as to evenly balance out your weight.",
    },
    {
      image: pos4,
      title: "Ashwa Sanchalanasana or the Lunge Pose",
      value:
        "As you come back from Hasta Padasana, you will need to bend your knees a little and rest your palms on the mat in line with both your feet. As you inhale, bring your right knee closer to your chest’s right side and stretch your left leg backwards. While balancing your body, raise your head in the forward-facing position.",
    },
    {
      image: pos5,
      title: "Dandasana/Phalakasana or the plank pose",
      value:
        "Exhale and place your left leg back in a plank pose. However, keep in mind that your shoulders, wrists and elbows remain at a ninety-degree angle to the floor. Your shoulder blades must be brought in and your collarbone should be widened as you spread your shoulder blades. Then, roll and press your toes on the yoga mat and avoid contracting the muscles of your knees. Your neck should be relaxed and in line with your spine.",
    },
    {
      image: pos6,
      title: "Ashtanga Namaskar or the Eight-Limbed Pose",
      value:
        "This pose is performed by exhaling and bringing your knees down onto the floor. Then, you need to rest your chin on the floor and lift your hips slightly from the floor. Your hands, chin, knees and chest should touch down on the floor while your posterior should be held in the air.",
    },
    {
      image: pos7,
      title: "Bhujangasana or the Cobra pose",
      value:
        "While inhaling, raise your head to achieve a backbend while your palms are resting on the mat. Your elbows should be gently bent while touching your body. Then, you have to roll your shoulders back while keeping your neck relaxed. Your legs and lower torso should be resting on the floor as you perform this pose.",
    },
    {
      image: pos8,
      title: "Adho Mukha Svanasana or the Downward Facing Dog",
      value:
        "As you exhale, lift your hips upwards towards the ceiling. Your heels should be pushed down on the floor or mat. Then, drop your head down as you look towards your navel. Your weight should be evenly balanced onto your limbs while keeping your shoulders and neck relaxed. With each inhale and exhale, stretch more deeply while looking towards your navel.",
    },
    {
      image: pos9,
      title: "Ashwa Sanchalanasana or the High Lunge Pose",
      value:
        "As you come back from Adho Mukha Svanasana, keep your right leg in forward position. Then place your left leg behind while keeping your feet on the floor and look forward slowly. Softly push your posterior towards the mat to further deepen the stretch.",
    },
    {
      image: pos10,
      title: "Hasta Padasana the Standing Forward Bend",
      value:
        "As you inhale, bring your left foot in forward position, close together to your right foot. Your torso should be bent and keep your hands intact. Exhale slowly while touching the floor with the help of your fingers.",
    },
    {
      image: pos11,
      title: "Hasta Uttanasana or the Raised Arms Pose",
      value:
        "Raise both your hands above while stretching backwards through your spine. Look at the ceiling as you bend backwards.",
    },
    {
      image: pos12,
      title: "Pranamasana or the Prayer Pose",
      value:
        "Now come back to the position we once started. You might notice that we have done a cycle of 12 poses. Similar to the first step, exhale and stand erect as you relax your body. Then, lower your arms and bring your palms at the center of your chest in a Namaste.",
    },
  ];

  return (
    <div className="pt-16 bg-gradient-to-r from-[#AAEEEA] via-[#CDFFFC] to-white">
      <div className="relative">
        <Image src={element} alt="Element" className="absolute z-10" />
        <div className="z-20 relative py-3">
          <h1 className="pt-3 text-3xl font-semibold text-center">
            Surya Namaskar
          </h1>
          <p className="text-gray-500 pb-4 text-center">
            Audio | Video | Article
          </p>
          <div className="flex items-center justify-center py-7 mt-3">
            <div
              style={{ borderRadius: "10rem 3rem 3rem 10rem" }}
              className="bg-[#094886] w-[18vw] h-[8vh] flex items-end justify-between p-2"
            >
              <span className="bg-white cursor-pointer h-full w-[3vw] rounded-full flex items-center justify-center text-xl">
                <FaPlay />
              </span>
              <Image
                src={yogaPos}
                alt="Yoga position"
                className="w-[10vw] -mr-5 -mb-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-gray-300 z-20 relative"></div>
      <div className="relative overflow-hidden">
        <div className="absolute z-10">
          <Image src={element2} alt="Element 2" className="z-10 -mt-60" />
        </div>
        <div className="relative z-20 py-16 px-12">
          <h1 className="text-3xl font-medium">Steps -</h1>
          {data?.map((e, i) => {
            return (
              <div
                key={i}
                className={`flex items-center ${
                  i % 2 == 0 ? "flex-row" : "flex-row-reverse"
                } justify-between w-full mb-5`}
              >
                <div className="w-9/12">
                  <h1 className="font-medium text-2xl">
                    {i + 1}. {e?.title}
                  </h1>
                  <p className="text-lg">{e?.value}</p>
                </div>
                <Image src={e?.image} className="w-2/12" alt={e?.image?.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeprateYoga;
