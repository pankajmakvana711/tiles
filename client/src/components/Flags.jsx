import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { flagsData } from "../constants";

const Flags = () => {
  const { t } = useTranslation();

  const [hoveredFlagIndex, setHoveredFlagIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredFlagIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredFlagIndex(null);
  };
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 ">
          <h1 className="sm:text-3xl text-center pt-24 text-2xl font-medium title-font text-white">
            {t("OUR")} <span style={{ color: "#f2b400" }}>{t("NETWORK")}</span>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center ">
          {flagsData.map((flag, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/6 md:w-1/4 sm:w-1/3"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseOut}
            >
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg h-20 sm:h-24 object-cover object-center mb-2 flag-image"
                  src={flag.image}
                />
                <div className="w-full">
                  <h2
                    className={`title-font font-medium text-md flag-text ${
                      hoveredFlagIndex === index
                        ? "text-yellow-800"
                        : "text-white"
                    }`}
                  >
                    {flag.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flags;
