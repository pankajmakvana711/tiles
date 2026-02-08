import React, { useEffect, useState } from "react";

const BackgroundImage = ({
  backgroundImage,
  mobileBackgroundImage,
  backgroundPosition = "center top", // Default position
  mobileBackgroundPosition = "center bottom", // Default position
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const detectMobile = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    detectMobile();
    window.addEventListener("resize", detectMobile);
    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  return (
    <div
      className={`responsive-container ${isMobile ? "mobile" : ""}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile
          ? mobileBackgroundPosition
          : backgroundPosition,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: isMobile ? "35vh" : "57vh",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
      }}
    >
      {isMobile && (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${mobileBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: mobileBackgroundPosition,
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "5px",
          }}
        ></div>
      )}

      {children}
    </div>
  );
};

export default BackgroundImage;
