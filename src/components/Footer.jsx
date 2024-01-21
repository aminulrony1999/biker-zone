import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/images/others/android.png";
import image2 from "../assets/images/others/ios.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <p>
            Bikerz Zone
            <br />
            Providing reliability service since 2020
          </p>
        </aside>
        <nav>
          <header className="footer-title">Get the App</header>
          <div className="grid grid-cols-1 gap-4">
            <Link>
              <img className="w-36" src={image1} alt="" />
            </Link>
            <Link>
              <img className="w-36" src={image2} alt="" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
