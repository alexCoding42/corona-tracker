import React from "react";
import moment from "moment";

// Translation
import { useTranslation } from "react-i18next";

// Images
import logo from "../assets/images/image.png";
import frenchFlag from "../assets/images/french_flag.png";
import englishFlag from "../assets/images/english_flag.png";

const Navbar = () => {
  const { i18n } = useTranslation();

  const handleTranslation = (lang) => {
    i18n.changeLanguage(lang);
    moment.locale(lang);
  };

  return (
    <nav className="bg-gray-800 p-3">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center px-2">
          <img className="h-8 w-auto" src={logo} alt="Logo" />
        </div>
        <div className="flex ml-auto mr-5">
          <div
            className="flex items-center mx-3 cursor-pointer"
            onClick={() => handleTranslation("fr")}
          >
            <span className="text-white mx-2">FR</span>
            <img src={frenchFlag} alt="flag" className="h-3 w-auto" />
          </div>
          <div
            className="flex items-center mx-3 cursor-pointer"
            onClick={() => handleTranslation("en")}
          >
            <span className="text-white mx-2">EN</span>
            <img src={englishFlag} alt="flag" className="h-3 w-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
