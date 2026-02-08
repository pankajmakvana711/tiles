import React, { useState } from "react";
import backgroundImage from "../assets/tileCalculator-bg.jpg";
import mobileBackgroundImage from "../assets/tileCalculator-bg.jpg";
import BackgroundImage from "../components/BackgroundImage";
import tilesImage from "../assets/tile.jpg";
import { euroProducts, normalProducts } from "../constants";
import { useTranslation } from "react-i18next";

const TileCalculator = () => {
  const [lengthFeet, setLengthFeet] = useState("");
  const [widthFeet, setWidthFeet] = useState("");
  const [tileSize, setTileSize] = useState("");
  const [productType, setProductType] = useState("normal");
  const [result, setResult] = useState({
    totalAreaSqM: "",
    totalAreaSqFt: "",
    requiredTiles: "",
    requiredBoxes: "",
  });

  const products = productType === "normal" ? normalProducts : euroProducts;
  const tileSizes = [...new Set(products.map((product) => product.size))];

  const selectedProduct = products.find((product) => product.size === tileSize);

  const calculateTiles = () => {
    const lengthMeter = lengthFeet * 0.3048;
    const widthMeter = widthFeet * 0.3048;
    const areaSqMeter = lengthMeter * widthMeter;
    const areaSqFeet = lengthFeet * widthFeet;
    const tilesPerBox = selectedProduct?.tilesPerBox || 0;
    const boxesNeeded = Math.ceil(areaSqMeter / selectedProduct.sqMtrPerBox);

    setResult({
      totalAreaSqM: areaSqMeter.toFixed(2),
      totalAreaSqFt: areaSqFeet.toFixed(2),
      requiredTiles: (
        (areaSqMeter * tilesPerBox) /
        selectedProduct.sqMtrPerBox
      ).toFixed(0),
      requiredBoxes: boxesNeeded.toFixed(0),
    });
  };

  const { t } = useTranslation();

  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
        backgroundPosition="center center"
        mobileBackgroundPosition="center top"
      ></BackgroundImage>
      <h1 className="sm:text-3xl text-center text-2xl pt-24 font-medium title-font mb-4 text-white">
        {t("TILE")}
        <span style={{ color: "#f2b400" }}> {t("CALCULATOR")}</span>
      </h1>

      <div className="container mx-auto px-5 md:px-0 mt-8 py-12">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 md:mr-4">
            <div className="border border-gray-300 rounded p-4 mb-4">
              <h2 className="text-2xl font-bold mb-4 bg-yellow-800 text-white p-2">
                {t("Box Calculation")}
              </h2>
              <div className="mb-4 flex flex-col">
                <label className="block mb-3 flex flex-row">
                  <p className="w-32"> {t("Length (ft)")}</p>
                  <input
                    type="number"
                    value={lengthFeet}
                    onChange={(e) => setLengthFeet(Number(e.target.value))}
                    className="border border-gray-300 px-2 mx-2 py-1 rounded w-full"
                  />
                </label>
                <label className="block mb-3 flex flex-row">
                  <p className="w-32">{t("Width (ft)")}</p>
                  <input
                    type="number"
                    value={widthFeet}
                    onChange={(e) => setWidthFeet(Number(e.target.value))}
                    className="border border-gray-300 px-2 mx-2 py-1 rounded w-full"
                  />
                </label>
                <label className="block flex flex-row">
                  <p className="w-32">{t("Tile Size (cm)")}</p>
                  <select
                    value={tileSize}
                    onChange={(e) => setTileSize(e.target.value)}
                    className="border border-gray-300 px-2 mx-2 py-1 rounded truncate w-full "
                  >
                    <option value="">{t("Select Tile Size")}</option>
                    {tileSizes.map((size) => {
                      const product = products.find((p) => p.size === size);
                      const tileType = product?.tileType || "";
                      return (
                        <option key={size} value={size}>
                          {`${size} CM ${tileType}`}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <button
                onClick={calculateTiles}
                className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-secondary"
              >
                {t("Calculate")}
              </button>
            </div>
            <div className="border border-gray-300 rounded p-4">
              <h2 className="text-2xl font-bold mb-4 bg-yellow-800 text-white p-2">
                {t("Calculations")}
              </h2>
              <div className="mb-4">
                <p style={{ fontWeight: "600" }}>{t("Total Area Covered")}</p>
                <p>
                  {" "}
                  {t("In Sq. M")} : {result.totalAreaSqM || ""}
                </p>
                <p>
                  {" "}
                  {t("In Sq. Ft")} : {result.totalAreaSqFt || ""}
                </p>
                <p>
                  {t("Required Tiles")} : {result.requiredTiles || ""}
                </p>
                <p>
                  {t("Required Boxes")} : {result.requiredBoxes || ""}
                </p>
                <br />
                <p className="text-center " style={{ fontSize: "12px" }}>
                  {t(
                    "This may vary on basis of your actual need. This is only approx calculation."
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <div className="border border-gray-300 rounded p-4 mb-4">
              <h2 className="text-2xl font-bold mb-4 bg-yellow-800 text-white p-2">
                {t("Tips")}
              </h2>
              <ul>
                <li>{t("Length and Width Dimensions are in feet.")}</li>
                <li>{t("1 Feet = 0.3048 Meter")}</li>
                <li>{t("1 Meter = 3.28084 Feet")}</li>
              </ul>
            </div>
            <div className="border border-gray-300 rounded p-4">
              <img
                src={tilesImage}
                alt="Your Image"
                className="w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TileCalculator;
