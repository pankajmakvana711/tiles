import React from "react";
import backgroundImage from "../assets/exports-bg.jpg";
import mobileBackgroundImage from "../assets/exports-bg.jpg";
import BackgroundImage from "../components/BackgroundImage";
import leadingExporter from "../assets/leading-exporter.jpg";
import { useTranslation } from "react-i18next";
import Flags from "../components/Flags";
import Map from "../components/Map";

const Exports = () => {
  const { t } = useTranslation();

  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundPosition="center center"
        mobileBackgroundPosition="center center"
      ></BackgroundImage>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-white ">
              {t("OUR")}{" "}
              <span style={{ color: "#f2b400" }}>{t("COMMITMENTS")}</span>
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-800 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      id="star-shape"
                    >
                      <path
                        fill="#ffffff"
                        d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9
	C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7
	c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
                      ></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    {t("Quality Control")}
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    {t("quality_control_para")}
                  </p>
                  <a class="mt-3 text-yellow-800 inline-flex items-center">
                    {t("Learn More")}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-800 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      id="recycle"
                    >
                      <path
                        fill="#ffffff"
                        d="M8 3.1l1.4 2.2-1.6 1.1 1.3.3 2.8.6.6-2.7.4-1.4-1.8 1.1-2-3.3H6.9L4.3 5.3l1.7 1zM16 12l-2.7-4.3-1.7 1 2 3.3H11v-2l-3 3 3 3v-2h3.7zM2.4 12l1.4-2.3 1.7 1.1-.9-4.2-2.8.7-1.3.3 1.6 1L0 12l1.3 2H7v-2z"
                      ></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    {t("Eco-Friendly")}
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    {t("eco_friendly_para")}
                  </p>
                  <a class="mt-3 text-yellow-800 inline-flex items-center">
                    {t("Learn More")}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-800 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      className="w-5 h-5"
                      id="customer-support"
                    >
                      <path
                        fill="#ffffff"
                        d="M59.06 27.69C58.54 12.36 46.95 0 32.93 0h-1.86C17.14 0 5.55 12.27 4.94 27.48 2.6 28.15.89 30.29.89 32.83v6.51c0 3.08 2.5 5.59 5.59 5.59 1.69 0 3.2-.76 4.23-1.96 1.01 3.89 2.63 7.59 4.7 10.74 4.26 6.5 9.94 10.15 15.98 10.28l.34.01c6.12 0 11.9-3.53 16.29-9.93.36-.53.71-1.09 1.05-1.65l1.95-.02a8.16 8.16 0 0 0 8.03-6.57h.05l.07-.68c.01-.09.01-.18.01-.27 2.27-.71 3.93-2.82 3.93-5.31v-6.51c0-2.56-1.71-4.7-4.05-5.37zm-49.3.64c-.43-.32-.91-.57-1.42-.76.57-13.38 10.63-24.16 22.73-24.16h1.86c12.18 0 22.25 10.88 22.72 24.37-.48.17-.93.41-1.34.7C52.76 15.97 44.3 7.75 32.61 7.5h-.45c-6.07 0-11.66 2.33-15.75 6.55-3.55 3.68-5.83 8.61-6.65 14.28zm37.29 20.71-8.04.11a3.674 3.674 0 0 0-3.24-1.97h-3.08c-2.04 0-3.69 1.66-3.69 3.68 0 2.04 1.66 3.69 3.69 3.69h3.08c1.41 0 2.64-.82 3.25-2l5.89-.08c-3.75 5.17-8.5 8.11-13.19 8.11h-.27c-4.89-.11-9.58-3.21-13.21-8.75-3.45-5.26-5.43-12.05-5.43-18.63v-.36l.01-.36c.14-6.57 2.23-12.12 6.04-16.07 3.45-3.56 8.15-5.52 13.23-5.52h.02c.13 0 .26 0 .41.01 10.97.24 18.64 9.18 18.64 21.73 0 .23 0 .45-.01.69-.1 5.47-1.57 11.02-4.1 15.72zm8.7-4.1c-.35 2.31-2.38 4.05-4.74 4.05h-.12c.88-1.88 1.62-3.89 2.22-6.02.67.87 1.59 1.53 2.65 1.89-.01.02-.01.05-.01.08z"
                      ></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">
                    {t("24/7 Customer Support")}
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    {t("customer_support_para")}
                  </p>
                  <a class="mt-3 text-yellow-800 inline-flex items-center">
                    {t("Learn More")}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400  body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white uppercase">
              {t("We are")}{" "}
              <span style={{ color: "#f2b400" }}>
                {t("leading")} <br class="hidden lg:inline-block" />
                {t("exporter")}{" "}
              </span>{" "}
              {t("of ceramic tiles")}
            </h1>
            <p class="mb-8 leading-relaxed">{t("export_main_para")}</p>
            <div class="flex justify-center"></div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={leadingExporter}
            />
          </div>
        </div>
      </section>

      <Map />

      <Flags />
    </>
  );
};

export default Exports;
