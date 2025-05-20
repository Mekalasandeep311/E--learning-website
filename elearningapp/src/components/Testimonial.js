import React from 'react';
import gentsTeach from '../assets/gents teach.jpg';
const Testimonial = () => (
 <section className="testimonial" id="Others">
 <div className="test-title"><h3>Testimonial</h3></div>
 <div className="testimonial-box">
 <img src={gentsTeach} alt="Testimonial" style={{ width: '300px' }} />
 <p>"SASA's E-learning has a team of professionals who are not only experts...
 Their approach is both engaging and comprehensive, making learning an enjoyable
and enriching experience."</p>
 </div>
 </section>
);
export default Testimonial;