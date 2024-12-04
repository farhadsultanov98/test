import React, {useEffect} from "react";
import "./Partners.css";
import Partner1 from '../../../assets/partner/psgfinans.png'
import Partner2 from '../../../assets/partner/safcatering.avif'
import Partner3 from '../../../assets/partner/socar.avif'
import Partner4 from '../../../assets/partner/tacs.png'
import Partner5 from '../../../assets/partner/yunikteam.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


let Partners = () => {
  useEffect(() => {
    AOS.init();
  }, [])
return(

    <div className="twosection-bodys" data-aos="zoom-in-up" data-aos-duration="3000">
    <div className="slider">
  <div className="slide-track">
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner1}
          height={80}
          width={100}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner2}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner3}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner4}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner5}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner1}
          height={80}
          width={100}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner2}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner3}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner4}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
    <div className="slide">
      <a href="#" tabIndex={-1}>
        <img
          src={Partner5}
          height={80}
          width={200}
          alt=""
        />
      </a>
    </div>
  </div>
</div>
</div>

)
    

}




export default Partners;