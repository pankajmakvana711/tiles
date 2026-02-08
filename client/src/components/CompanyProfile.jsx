import React from "react";
import backgroundImage from "../assets/about-bg.jpg";
import mobileBackgroundImage from "../assets/about-bg.jpg";
import BackgroundImage from "../components/BackgroundImage";
import { useTranslation } from "react-i18next";

const CompanyProfile = () => {
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
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            {t("OUR")} <span style={{ color: "#f2b400" }}>{t("STORY")}</span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Tiles Zone {t("main_content_first_para")}
               <span className="non-mobile-text">
               {t("company_profile_second_para")}
              </span>
            </p>

            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-800 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-12 w-12"
                  id="eye"
                >
                  <path
                    fill="#f2b400"
                    d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                {t("Vision")}
                </h2>
                <p className="leading-relaxed text-base">
                {t("innovation_para")}
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-800 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 100 100"
                  id="success-mission"
                >
                  <path
                    fill="#f2b400"
                    d="M64.4 26.1c.8 0 1.6-.4 2-1.1.2-.4.3-.8.3-1.1s-.1-.8-.3-1.1l-4.6-8c-.1-.1-.1-.2 0-.3l4.6-8c.4-.7.4-1.5 0-2.3-.4-.7-1.2-1.1-2-1.1H37.9c-.6 0-1 .4-1 1v35.3c-.2.1-.5.1-.7.2-.2.1-.3.2-.5.3h-.1c-.1.1-.2.1-.3.2-.2.1-.3.3-.4.4-.2.2-.4.5-.5.8L22.9 60.6v.1L2.1 95.4c-.2.3-.2.7 0 1 .2.3.5.5.9.5h69.4c.4 0 .7-.2.9-.5.2-.3.2-.7 0-1L52.6 60.7 41.1 41.4c-.1-.2-.2-.3-.3-.5-.1-.1-.2-.3-.3-.4-.2-.2-.5-.5-.8-.6-.3-.2-.5-.3-.8-.4V26.1h25.5zM39.3 42.3l10.6 17.8H25.5l10.7-17.9c.1-.3.3-.5.6-.7.2-.1.4-.2.7-.2.1.1.3.1.4.1.1 0 .2 0 .3-.1.2 0 .3.1.4.2.3.3.5.5.7.8z"
                  ></path>
                  <path
                    fill="#f2b400"
                    d="m81 68.3-9.2-14.8-.5-.8-.3-.3c-.2-.2-.5-.3-.8-.5-.4-.2-.9-.3-1.3-.3h-.5c-.1 0-.3 0-.4.1-.4.1-.8.3-1.2.6l-.3.3c-.2.2-.4.4-.5.7L58.1 66 75 94.3c.5.8.5 1.7.2 2.5H97c.4 0 .7-.2.9-.5.2-.3.2-.7 0-1L81 68.3zm-21.6-.6 8.3-13.4c.2-.4.6-.7 1.1-.7.5 0 .9.3 1.2.8l8.3 13.3H59.4z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                {t("Mission")}
                </h2>
                <p className="leading-relaxed text-base">
                {t("mission_para")}
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-800 mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 16 16"
                  id="diamond"
                >
                  <path
                    fill="#f2b400"
                    d="M4.5 2C4.26109 2 4.03648 2.11382 3.8952 2.30648L1.1452 6.05648C0.944058 6.33076 0.952675 6.70605 1.16619 6.97081L7.41619 14.7208C7.55857 14.8974 7.77319 15 8 15C8.22681 15 8.44143 14.8974 8.58381 14.7208L14.8338 6.97081C15.0473 6.70605 15.0559 6.33076 14.8548 6.05648L12.1048 2.30648C11.9635 2.11382 11.7389 2 11.5 2H4.5ZM3.04672 6L4.88005 3.5H5.47988L4.69863 6H3.04672ZM6.27016 6L7.05141 3.5H8.94859L9.72984 6H6.27016ZM9.64959 7.5L8 11.699L6.35041 7.5H9.64959ZM10.1034 10.447L11.2612 7.5H12.4801L10.1034 10.447ZM11.3014 6L10.5201 3.5H11.1199L12.9533 6H11.3014ZM3.51995 7.5H4.73881L5.89655 10.447L3.51995 7.5Z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                {t("Value")}
                </h2>
                <p className="leading-relaxed text-base">
                {t("value_para")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfile;
