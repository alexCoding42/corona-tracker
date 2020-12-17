import React from "react";
import moment from "moment";

// Translation
import { useTranslation } from "react-i18next";

// Images
import logo from "../assets/images/logo.png";
import frenchFlag from "../assets/images/french_flag.png";
import englishFlag from "../assets/images/english_flag.png";

const Navbar = () => {
  const { i18n } = useTranslation();

  const handleTranslation = (lang) => {
    i18n.changeLanguage(lang);
    moment.locale(lang);
  };

  return (
    <nav className="p-3 bg-black">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center px-2">
          <img className="w-auto h-8" src={logo} alt="Logo" />
        </div>
        <div className="flex ml-auto mr-5">
          <div
            className="flex items-center mx-3 cursor-pointer"
            onClick={() => handleTranslation("fr")}
          >
            <span className="mx-2 text-white">FR</span>
            <img src={frenchFlag} alt="flag" className="w-auto h-3" />
          </div>
          <div
            className="flex items-center mx-3 cursor-pointer"
            onClick={() => handleTranslation("en")}
          >
            <span className="mx-2 text-white">EN</span>
            <img src={englishFlag} alt="flag" className="w-auto h-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
