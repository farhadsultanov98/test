import React from "react";
import "../about/about.css";
import AboutTwoSection from "./twosection/abouttwosection";
import ThreeSection from "./threesection/threesection";
import TestimonialSlider from "./AboutSlider/AboutSlider";
import AboutBackVideo from "../../assets/aboutback.MOV"; 
import AboutBackImage from "../../assets/hrabouts.jpg"; 
import BackdropHeader from "./onesection/backdropheader";
import Activity from "../main/Activity/Activity";

let About = () => {
  const useVideo = true; // Video mu, resim mi kullanmak istediğini burada belirle

  return (
    <>
      <BackdropHeader
        backgroundVideo={useVideo ? AboutBackVideo : undefined} 
        backgroundImage={!useVideo ? AboutBackImage : undefined} 
        lastHeaderText="Haqqımızda"
      />
      <AboutTwoSection />
      <Activity />
      <TestimonialSlider />
      <ThreeSection />
    </>
  );
};

export default About;
