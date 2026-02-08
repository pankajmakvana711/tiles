import React from "react";
import backgroundImage from "../assets/infrastructure-bg.jpg";
import mobileBackgroundImage from "../assets//infrastructure-bg.jpg";
import BackgroundImage from "../components/BackgroundImage";
import infra1 from "../assets/infra-1.jpg";
import infra2 from "../assets/infra-2.jpg";
import infra3 from "../assets/infra-3.jpg";
import infra4 from "../assets/infra-4.jpg";
import infra5 from "../assets/infra-5.jpg";
import infra6 from "../assets/infra-6.jpg";
import { useTranslation } from "react-i18next";

const Infrastructure = () => {
  const imageStyles = {
    transition: "transform 0.3s",
    border: "none",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.04)";
    event.target.style.border = "2.5px solid #F59E0B";
  };

  const handleHoverEnd = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.border = "none";
  };

  const { t } = useTranslation();
  return (
    
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundPosition="center center"
        mobileBackgroundPosition="center center"
      ></BackgroundImage>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              <span style={{ color: "#f2b400" }}>{t("INFRASTRUCTURE")}</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("infra_first_para")}
            </p>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80 "
                  src={infra2}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80"
                  src={infra1}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:opacity-80 "
                  src={infra5}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:opacity-80"
                  src={infra3}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80"
                  src={infra6}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:opacity-80"
                  src={infra4}
                  style={imageStyles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverEnd}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-16 pb-16 mx-auto">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl text-white font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            {t("SUPER MODERN")}
             
              <span style={{ color: "#f2b400" }}> {t("MANUFACTURING")}  <br className="hidden lg:inline-block" /> {t("FACILITIES")}</span>
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            {t("infra_second_para")}
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-16 pb-16 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            {t("INFRASTRUCTURE")}{" "}
              <span style={{ color: "#f2b400" }}> {t("FOR ALL SIZES")}</span>
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("Capacity: 25000 sq. mtrs. Per day")}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("Feeding System: Multicharged modular")}{" "}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("Kiln: 3 nos. of longest kilns of length 220 mtrs. from SACMI")}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("Polishing Line: Biggest line with 48 heads from KEDA")}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("Press: PH 5000 tons - 4 nos. from SACMI")}
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("Polishing machine with Nano facility")}
                </span>
              </div>
            </div>
            <div className="p-2   w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-yellow-800 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">
                {t("TGV (Track Guided Vehicle) Robotic equipment for automatic polishing machine with nano facility control of storage & movement of tiles")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-400 body-font">
        <div className="container px-5 pt-16 pb-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              <span style={{ color: "#f2b400" }}>{t("CERTIFICATES")}</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto blinking-text">
            {t("Coming Soon...")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infrastructure;
