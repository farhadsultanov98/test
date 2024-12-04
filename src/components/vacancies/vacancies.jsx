import React, { useEffect } from "react";
import "../vacancies/vacancies.css";
import VacanciesTwoSection from "./vacanciestwosection";
import ApplyForm from "./ApplyForm/ApplyForm";
import BackdropHeader from "../about/onesection/backdropheader";
import VacanciesBackImage from "../../assets/vacanciess.jpg";
import VacanciesBackVideo from "../../assets/vacanciesback.MOV";



let Vacancies = () => {
    const useVideo = true; 

  return (
    <>
      <BackdropHeader
        backgroundVideo={useVideo ? VacanciesBackVideo  : undefined} 
        backgroundImage={!useVideo ? VacanciesBackImage : undefined} 
        lastHeaderText="Haqqımızda"
      />
            <VacanciesTwoSection />
            <ApplyForm />
        </>
    )
}

export default Vacancies