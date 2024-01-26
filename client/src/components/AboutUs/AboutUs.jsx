// AboutUs.js

import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">Welcome to Our Service</h1>
        <p className="about-us-text">
          <ul>
            <li>
              Our food delivery organization is dedicated to bringing the
              culinary delights of local restaurants straight to your doorstep,
              ensuring a seamless and convenient dining experience.
            </li>
            <li>
              With a diverse range of cuisines and a user-friendly platform, we
              prioritize efficiency and customer satisfaction, making every meal
              a delightful and hassle-free affair.
            </li>
            <li>
              Committed to freshness and timely deliveries, our food delivery
              organization connects food enthusiasts with their favorite dishes,
              fostering a vibrant and accessible culinary community.
            </li>
          </ul>
        </p>
        <p className="about-us-text">
          Vestibulum eu libero id felis varius eleifend. Ut dictum, massa non
          pulvinar scelerisque, nunc velit lobortis justo, quis bibendum nisl
          libero auctor nisi.
        </p>
        <h2 className="about-us-subtitle">Our Mission</h2>
        <p className="about-us-text">
          Our mission is to provide high-quality products/services and exceed
          customer expectations. We are dedicated to innovation and continuous
          improvement.
        </p>
        <h2 className="about-us-subtitle">Meet the Team</h2>
        <ul className="about-us-team-list">
          <li className="about-us-team-member">Abu Bakar Siddique Nayan</li>
          <li className="about-us-team-member">Md Noyon Hossain</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
