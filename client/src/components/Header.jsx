import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close, languageSvg } from "../assets";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(""); // State to track active dropdown menu
  const [toggle, setToggle] = useState(false); // State to toggle mobile menu
  const [scrolled, setScrolled] = useState(false); // State to track if page is scrolled
  const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile
  const [languageLoaded, setLanguageLoaded] = useState(false); // New state variable

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");

    // Set the initial language title in navLinks based on the retrieved value
    if (selectedLanguage) {
      const languageNavLink = navLinks.find((nav) => nav.id === "language");
      if (languageNavLink) {
        const selectedLanguageItem = languageNavLink.dropdown.find(
          (item) => item.id === selectedLanguage
        );
        if (selectedLanguageItem) {
          languageNavLink.title = selectedLanguageItem.title;
        }
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // Adjust the breakpoint as per your needs
      setIsMobile(isMobileDevice);
    };

    // Event listeners for scroll and resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Call the resize handler initially

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle toggling of dropdown menus on click
  const handleDropdownToggle = (navId) => {
    setActive((prevActive) => (prevActive === navId ? "" : navId));
  };

  // Close the active dropdown menu
  const handleDropdownClose = () => {
    setActive("");
    setToggle(false);
  };

  // Handle click on dropdown menu items
  const handleDropdownItemClick = (navId, dropdownItemId) => {
    if (navId === "language") {
      // Update the title of the "language" NavLink
      const selectedLanguage = navLinks.find((nav) => nav.id === navId);
      const selectedLanguageItem = selectedLanguage.dropdown.find(
        (item) => item.id === dropdownItemId
      );
      if (selectedLanguageItem) {
        selectedLanguage.title = selectedLanguageItem.title;
      }

      // Store the selected language in local storage
      localStorage.setItem("selectedLanguage", dropdownItemId);

      i18next.changeLanguage(dropdownItemId);
    } else {
      setActive("");
      setToggle(false);
      handleDropdownClose();
    }
  };

  // Handle click on mobile dropdown menu items
  const handleMobileDropdownItemClick = (navId, dropdownItemId) => {
    if (navId === "language") {
      // Update the title of the mobile "language" NavLink
      const selectedLanguage = navLinks.find((nav) => nav.id === navId);
      const selectedLanguageItem = selectedLanguage.dropdown.find(
        (item) => item.id === dropdownItemId
      );
      if (selectedLanguageItem) {
        selectedLanguage.title = selectedLanguageItem.title;
      }

      localStorage.setItem("selectedLanguage", dropdownItemId);

      i18next.changeLanguage(dropdownItemId);
    } else {
      setActive("");
      setToggle(false);
      handleDropdownClose();
    }
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      setLanguageLoaded(true);
    }
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-0 fixed top-0 z-50 ${
        scrolled || isMobile ? "bg-gray-900 I shadow-md" : "bg-transparent"
      }`}
      style={{
        boxShadow:
          scrolled || isMobile ? "0 1px 4px rgba(242, 180, 0, 0.5)" : "none",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-14 md:w-24 object-contain"
            style={{ padding: "0", margin: "0", lineHeight: "0" }}
          />
        </Link>

        <ul
          className={`list-none hidden justify-center sm:flex flex-row gap-10 cursor-pointer ${
            isMobile ? "" : "flex-grow justify-center"
          }`}
        >
          {navLinks.map((nav) =>
            nav.dropdown ? (
              <li
                key={nav.id}
                className={`relative ${
                  location.pathname === nav.id
                    ? "text-yellow-800"
                    : "text-white"
                }`}
                onClick={() => {
                  if (!isMobile) {
                    handleDropdownToggle(nav.id);
                  }
                }}
                onMouseEnter={
                  isMobile ? null : () => handleDropdownToggle(nav.id)
                }
                onMouseLeave={isMobile ? null : handleDropdownClose}
              >
                {nav.id === "language" ? (
                  <div className="flex items-center gap-0">
                    <img src={languageSvg} alt="language" className="w-8 h-8" />{" "}
                    {/* Render the language SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        active === nav.id ? "rotate-180" : ""
                      } h-4 w-4 ml-2 transition-transform duration-300 transform ${
                        active === nav.id ? "text-yellow-800" : "text-white"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                ) : (
                  <span className="text-3 font-medium">{t(nav.title)}</span>
                )}
                {!isMobile && active === nav.id && (
                  <ul className="absolute top-full left-0 w-48 py-2 bg-primary shadow-lg text-[14px] rounded-lg">
                    {nav.dropdown.map((dropdownItem) => (
                      <li
                        key={dropdownItem.id}
                        className={`px-4 py-2 hover:bg-yellow-800`}
                        onClick={() =>
                          handleDropdownItemClick(nav.id, dropdownItem.id)
                        }
                      >
                        {nav.id === "language" ? (
                          <span>{t(dropdownItem.title)}</span>
                        ) : (
                          <Link to={dropdownItem.id}>
                            {t(dropdownItem.title)}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  location.pathname === nav.id
                    ? "text-yellow-800"
                    : "text-white"
                } hover:text-yellow-800 text-3 font-medium cursor-pointer`}
              >
                <Link
                  to={nav.id}
                  onClick={() => {
                    setActive("");
                    setToggle(false);
                    handleDropdownClose();
                  }}
                >
                  {t(nav.title)}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* mobile menu */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] h-[20px] object-contain"
            onClick={() => {
              if (isMobile && active === "") {
                setToggle(!toggle);
              } else {
                setActive("");
                setToggle(false);
              }
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-900 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    location.pathname === nav.id && !nav.dropdown
                      ? "text-white"
                      : "text-black-100"
                  }`}
                  onClick={() => {
                    if (isMobile && nav.dropdown) {
                      handleDropdownToggle(nav.id);
                    }
                  }}
                >
                  <div className="flex items-center pb-0">
                    {nav.dropdown ? (
                      <>
                        {nav.id === "language" ? (
                          <div className="flex items-center gap-1">
                            <img
                              src={languageSvg}
                              alt="language"
                              className="w-8 h-8"
                            />{" "}
                            {/* Render the language SVG */}
                          </div>
                        ) : (
                          <span className="text-3 font-medium">
                            {t(nav.title)}
                          </span>
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`${
                            active === nav.id ? "rotate-180" : ""
                          } h-4 w-4 ml-2 transition-transform duration-300 transform ${
                            active === nav.id ? "text-yellow-800" : "text-white"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </>
                    ) : (
                      <Link
                        to={nav.id}
                        onClick={() => {
                          setActive("");
                          setToggle(false);
                          handleDropdownClose();
                        }}
                      >
                        {t(nav.title)}
                      </Link>
                    )}
                  </div>
                  {nav.dropdown && (
                    <ul
                      className={`ml-0  ${
                        active === nav.id
                          ? "max-h-[200px] opacity-100"
                          : "max-h-0 opacity-0"
                      } transition-all duration-300 overflow-hidden`}
                    >
                      {nav.dropdown.map((dropdownItem, index) => (
                        <li
                          key={dropdownItem.id}
                          className={`cursor-pointer pt-[5px] text-[16px] ${
                            index === nav.dropdown.length - 1 ? "pb-2" : ""
                          }`}
                          onClick={() =>
                            handleMobileDropdownItemClick(
                              nav.id,
                              dropdownItem.id
                            )
                          }
                        >
                          {nav.id === "language" ? (
                            <span>{t(dropdownItem.title)}</span>
                          ) : (
                            <Link to={dropdownItem.id}>
                              {t(dropdownItem.title)}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
