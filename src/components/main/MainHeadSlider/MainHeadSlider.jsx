import React, { useState, useEffect, useRef } from 'react';
import './MainHeadSlider.css'; 
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import EmployeeDevelopment from '../../../assets/mainslider/employeeengagement.png';
import RecruitmentProcesses from '../../../assets/mainslider/recruitmentprocesses.jpg';
import HumanResourcesManagement from '../../../assets/mainslider/humanresourcesmanagement.jpg';

const SliderMain = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const slides = [
    {
      src: HumanResourcesManagement,
      alt: "Slide 1",
      text: "main.onesectiononecaption"
    },
    {
      src: RecruitmentProcesses,
      alt: "Slide 2",
      text: "main.onesectiontwocaption"
    },
    {
      src: EmployeeDevelopment,
      alt: "Slide 3",
      text: "main.onesectionthreecaption"
    }
  ];

  useEffect(() => {
    const nextImage = () => {
      setImageIndex(prevIndex => (prevIndex + 1) % slides.length);
    };

    intervalRef.current = setInterval(nextImage, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrevClick = () => {
    setImageIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
    resetInterval();
  };

  const handleNextClick = () => {
    setImageIndex(prevIndex => (prevIndex + 1) % slides.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000);
  };

  const handleMouseEnter = () => {
    const arrows = sliderRef.current.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => arrow.classList.add('visible'));
  };

  const handleMouseLeave = () => {
    const arrows = sliderRef.current.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => arrow.classList.remove('visible'));
  };

  return (
    <div className="MainSliderBodys" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="slider-container">
        <div className="image-container">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === imageIndex ? 'slide-active' : ''}`}>
              <img src={slide.src} alt={slide.alt} className="slide-image" />
              <div className="slide-text">
                <p>{t(slide.text)}</p>
                <a href="#more-info" className="read-more-button">{t('header.contact')}</a>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow prev-arrow" onClick={handlePrevClick}><MdArrowBackIos /></button>
        <button className="nav-arrow next-arrow" onClick={handleNextClick}><MdArrowForwardIos /></button>
      </div>
    </div>
  );
};

export default SliderMain;
