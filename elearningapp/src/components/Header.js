import React from 'react';
import logo from '../assets/logo2.png';
const Header = () => (
 <div className="top-header" id="home">
 <header>
 <nav>
 <div className="logo">
 <img src={logo} alt="Logo" className="logo-img" />
 </div>
 <ul>
 <li><a href="https://saaslearn.com.au/moodle/">HOME</a></li>
 <li><a href="https://openlibrary.org/">BOOKS</a></li>
 <li><a
href="https://www.coursera.org/courses?query=emerging%20technologies">COURSES</a></li>
 <li><a
href="https://v2.scrimba.com/courses?price=free&ref=classcentral">Others</a></li>
 <li><a href="#">Blog</a></li>
 <li><a href="https://saaslearn.com.au/moodle/login/index.php"
className="btn">SIGN IN</a></li>
 </ul>
 </nav>
 </header>
 </div>
);
export default Header;