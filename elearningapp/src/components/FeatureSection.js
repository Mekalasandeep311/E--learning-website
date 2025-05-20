import React from 'react';
import book from '../assets/book.png';
import students from '../assets/students.png';
import test from '../assets/test.png';
import doubts from '../assets/doubts.png';
const FeatureSection = () => (
 <section className="feature" id="feature">
 <div className="boxes"><img src={book} alt="Book" style={{ width: '100px' }}
/><h2>1500+ Topics</h2><p>Learning anything</p></div>
 <div className="boxes al-shadow"><img src={students} alt="Students" style={{ width:
'100px' }} /><h2>1500+ Students</h2><p>Learning anything</p></div>
 <div className="boxes"><img src={test} alt="Test" style={{ width: '100px' }}
/><h2>9K+ Test Tokens</h2><p>Learning anything</p></div>
 <div className="boxes"><img src={doubts} alt="Doubts" style={{ width: '100px' }}
/><h2>Live Doubts</h2><p>Learning anything</p></div>
 </section>
);
export default FeatureSection;