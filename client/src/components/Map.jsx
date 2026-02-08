import React from "react";
import { exportMap } from "../assets";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="sm:text-3xl text-center text-2xl font-medium title-font text-white pb-12">
        <span style={{ color: "#f2b400" }}>{t("COUNTRIES")}</span> {t("WE EXPORT")} 
      </h1>
      <img
        src={exportMap}
        alt="exportMap"
        className="flex justify-center items-center w-screen"
      />
    </div>
  );
};

export default Map;
