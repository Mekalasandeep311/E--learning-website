import React from 'react';
import web from '../assets/webdevelop.png';
import ai from '../assets/Artificial intel.png';
import cloud from '../assets/cloud computing.png';
import calender from '../assets/calender.png';
import user from '../assets/user.png';

const CoursesSection = () => (
  <div className="course-top" id="courses">
    <div className="online-title"><h3>Online Courses</h3></div>
    <section className="online-courses">
      {[{ img: web, title: "WEB DEVELOPMENT" }, { img: ai, title: "ARTIFICIAL INTELLIGENCE" }, { img: cloud, title: "CLOUD COMPUTING" }]
        .map((course, i) => (
          <div className="online-box" key={i}>
            <img src={course.img} alt={course.title} />
            <h2>{course.title}</h2>
            <p>Designation</p>
            <a href="#" className="btn started course-btn">Buy Course</a>
            <div className="bottom-feature">
              <div className="left-date">
                <img src={calender} alt="calendar" style={{ width: '20px', height: '20px' }} />
                <p>Start 30 October 2024</p>
              </div>
              <div className="right-stu">
                <img src={user} alt="user" style={{ width: '20px', height: '20px' }} />
                <p>60 Seats</p>
              </div>
            </div>
          </div>
      ))}
    </section>
  </div>
);

export default CoursesSection;
