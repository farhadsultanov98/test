import React from "react";
import "./backdropheader.css";
import { Link } from "react-router-dom";

const BackdropHeader = ({ backgroundVideo, backgroundImage, lastHeaderText }) => {
  return (
    <div className="AboutBackImage" style={{ position: 'relative' }}>
      {backgroundVideo ? (
        <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div style={{ backgroundImage: `url(${backgroundImage})`, width: '100%', height: '100%', position: 'absolute', backgroundSize: 'cover' }} />
      )}
      <div className="AboutContent">
        <Link to='/'><h3>Əsas səhifə /</h3></Link>
        <h3>{lastHeaderText}</h3>
      </div>
    </div>
  );
};

export default BackdropHeader;
