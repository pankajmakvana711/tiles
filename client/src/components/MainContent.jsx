import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import mainContentImage from "../assets/main-content-image.jpg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={mainContentImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h3 className="title-font sm:text-2xl text-1xl mb-4 font-light">
            {t("main_content_white_title")}
            <span className="text-yellow-800"> Tiles Zone</span>
          </h3>

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            {t("Empowering")}
            <br className="hidden lg:inline-block" />{" "}
            {t("progress through cutting")}
            <br className="hidden lg:inline-block" />{" "}
            {t("edge technology solutions")}
          </h1>
          <p className="mb-8 leading-relaxed">
            {" "}
            Tiles Zone {t("main_content_first_para")}
          </p>
          <p className="mb-8 leading-relaxed">
            {t("We at")} Tiles Zone {t("main_content_second_para")}
          </p>

          <div className="flex justify-center">
            <Link to="/companyProfile">
              <button className="ml-0 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                {t("Read More")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
