import React from "react";
import backgroundImage from "../assets/catalogue-bg.jpg";
import mobileBackgroundImage from "../assets/catalogue-bg-mobile.jpg";
import downloadIcon from "../assets/download-icon.jpg";
import BackgroundImage from "../components/BackgroundImage";
import { useTranslation } from "react-i18next";
import { catalogue } from "../constants";

const Catalogue = () => {
  const { t } = useTranslation();

  const handleDownload = (link) => {
    window.open(link, "_blank");
  };

  // Group catalogue items by type
  const groupedCatalogue = catalogue.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundPosition="center center"
        mobileBackgroundPosition="center top"
      ></BackgroundImage>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-800">
              {t("DOWNLOAD")}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {t("catalog_para")}
            </p>
          </div>

          {/* Render grouped catalog items */}
          {Object.entries(groupedCatalogue).map(([type, items]) => (
            <div key={type} className="mb-16">
              <h2 className="text-2xl font-medium text-white bg-yellow-800  px-4 py-2 mb-4">
                {type}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <div
                    className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
                    key={index}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          alt="team"
                          className="w-12 h-12 bg-gray-100 object-cover object-center rounded-full cursor-pointer hover:opacity-75"
                          src={downloadIcon}
                          onClick={() => handleDownload(item.link)}
                        />
                        <div className="ml-3">
                          <h3 className="text-white text-lg font-medium">
                            <a
                              href={item.link}
                              target="_blank"
                              className="text-white hover:text-yellow-800"
                            >
                              {item.category}
                            </a>
                          </h3>
                          <p className="text-gray-400 text-sm">{item.size}</p>
                        </div>
                      </div>
                     
                    </div>
                    <div className="h-px bg-gray-700 my-2" />
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Catalogue;
