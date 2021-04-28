import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "Freeedome is Freedom"
      </span>
      <span>- Dongho Nam</span>
    </div>
  );
}

export default About;