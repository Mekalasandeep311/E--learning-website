import React from 'react';
import heroImage from '../assets/image3.png';
const HeroSection = () => (
 <section className="hero-section">
 <div className="hero-box">
 <div className="left-box">
 <p className="ready">Are you ready to learn</p>
 <h1>learn with fun<br />on <span>any schedule</span></h1>
 <p className="left-para">
 "The professionals at SASA's E-learning are truly exceptional...
 With a perfect blend of theoretical knowledge and practical application,
 we provide clear, insightful instruction that makes even the most complex
topics understandable."
 </p>
 <a href="https://saaslearn.com.au/moodle/" className="btn started">Get
started</a>
 </div>
 <div className="right-box">
 <img src={heroImage} alt="Hero" className="right-img" />
 </div>
 </div>
 </section>
);
export default HeroSection;