import React from "react";
import ThingsLikeAboutUs from "./Components/Sub-Components/ThingsLikeAboutUs";
import HowItWorks from "./Components/Sub-Components/HowItWorks";
import OurTrubuddies from "./Components/Sub-Components/OurTrubuddies";
import OurServices from "./Components/Sub-Components/OurServices";
import LearnInspire from "./Components/Sub-Components/LearnInspire";

const App = () => {
  return (
    <div className="bg-newVeryLightBlue">
      <div className={`homeBg`}></div>
      <ThingsLikeAboutUs />
      <HowItWorks />
      <OurTrubuddies />
      <OurServices />
      <LearnInspire />
    </div>
  );
};

export default App;
