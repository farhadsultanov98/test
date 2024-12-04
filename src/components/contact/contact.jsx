import React from "react";
import "../contact/contact.css";
import LeftSideContact from "./contacttwosection/leftside/leftsidecontact";
import RightSideContact from "./contacttwosection/rightside/rightsidecontact";
import ContactBackVideo from "../../assets/contacttback.mp4"; 
import ContactBackImage from "../../assets/contactback.jpg";
import BackdropHeader from "../about/onesection/backdropheader";




let Contact = () =>{
    const useVideo = true; 

  return (
    <>
      <BackdropHeader
        backgroundVideo={useVideo ? ContactBackVideo : undefined} 
        backgroundImage={!useVideo ? ContactBackImage : undefined} 
        lastHeaderText="Haqqımızda"
      />
        <div className="Sides">
        <LeftSideContact/>
        <RightSideContact/>
        </div>
        </>
    )
}

export default Contact