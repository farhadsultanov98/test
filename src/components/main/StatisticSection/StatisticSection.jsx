import React, { useEffect, useState } from 'react';
import './StatisticSection.css';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatisticSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const { t } = useTranslation();
  const [counters, setCounters] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0
  });

  useEffect(() => {
    const targetValues = {
      stat1: 163,
      stat2: 85,
      stat3: 43
    };

    const updateCounter = (elementId, endValue) => {
      let count = 0;
      const increment = endValue / 200;
      const interval = setInterval(() => {
        count += increment;
        setCounters(prevCounters => ({
          ...prevCounters,
          [elementId]: Math.floor(count)
        }));
        if (count >= endValue) {
          clearInterval(interval);
          setCounters(prevCounters => ({
            ...prevCounters,
            [elementId]: endValue
          }));
        }
      }, 10);
    };

    Object.entries(targetValues).forEach(([elementId, endValue]) => {
      updateCounter(elementId, endValue);
    });

  }, []);

  return (
    <div className="statistics">
      <div className="stat"
      data-aos="fade-up"
      data-aos-duration="3000">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat1}+
          </div>
          <p>{t('main.statisticheaderone')}</p>
        </div>
        <div className="stat-info">
        <p>{t('main.statisticdescriptionone')}</p>
        </div>
      </div>
      <div className="stat"
      data-aos="fade-up"
      data-aos-duration="3000">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat2}+
          </div>
          <p>{t('main.statisticheadertwo')}</p>
        </div>
        <div className="stat-info">
        <p>{t('main.statisticdescriptiontwo')}</p>
        </div>
      </div>
      <div className="stat"
      data-aos="fade-up"
      data-aos-duration="3000">
        <div className="stat-content">
          <div className="stat-number">
            {counters.stat3}+
          </div>
          <p>{t('main.statisticheaderthree')}</p>
        </div>
        <div className="stat-info">
        <p>{t('main.statisticdescriptionthree')}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
