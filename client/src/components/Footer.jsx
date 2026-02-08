import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <section className="text-gray-400 pt-24 body-font relative">
        <footer className="px-4 divide-y bg-gray-900">
          <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <Link
                to="/"
                className="flex justify-center space-x-3 lg:justify-start"
              >
                <div className="flex items-center justify-center sm:w-13 sm:h-12 md:w-13 md:h-12 lg:w-auto lg:h-auto  rounded-full">
                  <img
                    src={logo}
                    alt="logo"
                    className="logo-image sm:w-13 sm:h-13 md:w-13 md:h-13 lg:w-48 lg:h-48"
                    style={{ padding: "0", margin: "0", lineHeight: "0" }}
                  />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="tracki uppercase text-yellow-800">Quicklinks</h3>
                <ul className="space-y-1 ">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    <Link
                      to="/"
                      className="hover:text-yellow-800"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/companyProfile"
                      className="hover:text-yellow-800"
                    >
                      Company Profile
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/infrastructure"
                      className="hover:text-yellow-800"
                    >
                      Infrastructure
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/catalogue"
                      className="hover:text-yellow-800"
                    >
                      Catalogue
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/packingDetails"
                      className="hover:text-yellow-800"
                    >
                      Packing Details
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/tileCalculator"
                      className="hover:text-yellow-800"
                    >
                      Tile Calculator
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/exports"
                      className="hover:text-yellow-800"
                    >
                      Exports
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <Link
                      to="/contactUs"
                      className="hover:text-yellow-800"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="tracki uppercase text-yellow-800">Contact Us</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      id="phone"
                    >
                      <path
                        fill="currentColor"
                        d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"
                      ></path>
                    </svg>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800"
                    >
                      +91 81400 45379
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      id="phone"
                    >
                      <path
                        fill="currentColor"
                        d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"
                      ></path>
                    </svg>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800"
                    >
                      +91 92281 11444
                    </a>
                  </li>

                  <li className="flex items-center">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800"
                    >
                      export@tileszone.com
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800"
                    >
                      tilezone@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="uppercase text-yellow-800">Address</h3>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      id="location"
                    >
                      <path
                        fill="currentColor"
                        d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"
                      ></path>
                    </svg>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800"
                    >
                      Chitrakoot 4 GIDC
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800 pl-5"
                    >
                      B/H sanala road
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:text-yellow-800 pl-5"
                    >
                      Somnath 362265
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="uppercase text-yellow-800">Social media</div>
                <div className="flex justify-start space-x-3">
                  <a
                    rel="noopener noreferrer"
                    href="https://youtube.com/"
                    target="_blank"
                    title="Youtube"
                    className="flex items-center p-1 hover:text-yellow-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      id="youtube"
                    >
                      <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/tileszone_dolasa"
                    target="_blank"
                    title="Instagram"
                    className="flex items-center p-1 hover:text-yellow-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/"
                    target="_blank"
                    title="Linkedin"
                    className="flex items-center p-1 hover:text-yellow-800"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>

                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                    title="Facebook"
                    className="flex items-center p-1 hover:text-yellow-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-sm text-center">
            Copyright © {new Date().getFullYear()} Tiles Zone All Rights Reserved
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
