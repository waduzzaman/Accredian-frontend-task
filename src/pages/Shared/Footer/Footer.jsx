import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white pt-10 ">
      <div className="flex justify-between max-w-7xl mx-auto ">
        <img src="/public/logo-removebg.png" alt="logo" />
        <div className="flex">
          <div>
            <button className="bg-blue-600 text-white rounded px-5 py-1 border border-white" type="button ">Schedule 1-on-1 Call Now</button>
            <p>Speak with our Learning Advisor</p>
          </div>
        </div>
      </div>
      <hr className="border-1 my-4 max-w-7xl mx-auto" />
      <footer className="footer pt-2 max-w-7xl mx-auto">
        <nav>
          <h6 className="footer-title">Program</h6>
         
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg ">
            <span className="">Data Science & AI </span>
            <span className="pl-32">+</span>
          </a>


          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Product Management</span>
            <span>+</span>
          </a>
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Business Analytics </span>
            <span>+</span>
          </a>
          
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Digital Transformation</span>
            <span>+</span>
          </a>
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Business Management </span>
            <span>+</span>
          </a>
          
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Project Management </span>
            <span>+</span>
          </a>
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Strategy & Leadership </span>
            <span>+</span>
          </a>
          
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span>Senior Management  </span>
            <span>+</span>
          </a>
          <a className="link link-hover flex justify-between items-center w-full my-2 text-lg">
            <span> Fintech </span>
            <span>+</span>
          </a>
          
          
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <p className="max-w-120">
            
            Email us (For Data Science Queries): admissions@accredian.com 
            <br />Emailus (For Product Management Queries):pm@accredian.com <br /> Data Science
            Admission Helpline:+91 9079653292 (9 AM - 7 PM) <br /> Product Management
            Admission Helpline:+91 9625811095 <br /> Enrolled Student Helpline: +91
            7969322507 <br />Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
            Sector 18, Gurugram, Haryana 122015
          </p>
          <h6 className="text-lg">Why Accredian</h6>
          <h6 className="text-lg">Follow Us </h6>
          <div className="flex gap-5 text-2xl">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>

        </nav>
        <nav>
          <h6 className="footer-title">Accredian</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Admission Policy</a>
          <a className="link link-hover">Referral Policy</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms ofService</a>
          <a className="link link-hover">Master FAQfs</a>
        </nav>
      </footer>
      <p className="text-center py-5"> &copy; Accredian A Board of FullStack Education Pvt Ltd. All Right Researve</p>
    </div>
  );
};

export default Footer;
