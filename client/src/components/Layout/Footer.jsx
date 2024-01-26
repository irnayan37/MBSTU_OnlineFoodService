import React from "react";
import playStore from "../../assets/images/play-store.png";
import appStore from "../../assets/images/app-store.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>MBSTU</h1>
        <h2>ONLINE FOOD ORDERING</h2>
        <p>
          Copyrights 2024 &copy; <b>Noyon Hossain</b>
          <b> && Abu Bakar Siddique Nayan</b>
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <Link
          to="https://www.instagram.com/shabik_yeamin_shoumik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        <Link
          to="https://www.youtube.com/@shoumik7379"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </Link>
        <Link
          to="https://www.facebook.com/shoumik152/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
