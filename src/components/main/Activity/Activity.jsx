import React, { useEffect } from "react";
import "./Activity.css";
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acqusition from '../../../assets/slider/acquisition.png'
import EmployeeBenefit from '../../../assets/slider/employebenefits.png'
import TrainingDevops from '../../../assets/slider/trainingdevelop.png'
import PerformanceManagement from '../../../assets/slider/performance management.jpg'
import EmployeeEngament from '../../../assets/slider/slider1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Translation keys for titles and descriptions
const cardData = [
  {
    id: 1,
    titleKey: "main.threesectiononeheader",
    descriptionKey: "main.threesectiononecaption",
    image: Acqusition,
  },
  {
    id: 2,
    titleKey: "main.threesectiontwoheader",
    descriptionKey: "main.threesectiontwocaption",
    image: EmployeeBenefit,
  },
  {
    id: 3,
    titleKey: "main.threesectionthreeheader",
    descriptionKey: "main.threesectionthreecaption",
    image: TrainingDevops,
  },
  {
    id: 4,
    titleKey: "main.threesectionfourheader",
    descriptionKey: "main.threesectionfourcaption",
    image: PerformanceManagement,
  },
  {
    id: 5,
    titleKey: "main.threesectionfiveheader",
    descriptionKey: "main.threesectionfivecaption",
    image: EmployeeEngament,
  },
];

const Activity = () => {
  const { t } = useTranslation(); // Initialize translation



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="Threesection" data-aos="fade-up"
    data-aos-duration="1000">
      <h1>{t('main.threesectiontitle')}</h1>
      <Slider {...sliderSettings} className="ThreeSectionSlider">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="ExpertiseCards"
          >
            <div className="OneCardMain">
              <img src={card.image} alt={t(card.titleKey)} />
            </div>
            <div className="OneCardFooter">
              <h3>{t(card.titleKey)}</h3>
              <p>{t(card.descriptionKey)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Activity;
