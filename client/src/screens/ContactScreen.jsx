import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../assets/contact-bg.jpg";
import mobileBackgroundImage from "../assets/contact-bg-mobile.jpg";
import BackgroundImage from "../components/BackgroundImage";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactScreen = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tiles Zone",
          from_email: form.email,
          to_email: "blinkimpex@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for contacting us...");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.log(err);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <BackgroundImage
        backgroundImage={backgroundImage}
        mobileBackgroundImage={mobileBackgroundImage}
      ></BackgroundImage>
      <section className="text-gray-400 body-font relative pb-16 ">
        <div className="flex flex-col text-center w-full pt-0  mb-20 "></div>
        <div className="container px-5 py-24 pt-0 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=22.8053852,70.8185317+(Blink%20Impex)&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ filter: "grayscale(1), contrast(1.2) opacity(0.16)" }}
            ></iframe>
            <div className="bg-gray-900 absolute flex flex-wrap py-6 rounded shadow-md items-center justify-center">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  {t("ADDRESS")}
                </h2>
                <p className="mt-1">
                  SHOP NO-10, Chitrakoot 4 GIDC B/H sanala road, Morbi 363641
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  {t("EMAIL")}
                </h2>
                <a className="text-yellow-800 leading-relaxed">
                  export@blinkimpex.com
                  <br />
                  blinkimpex@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  {t("PHONE")}
                </h2>
                <p className="leading-relaxed">+91 63539 43201</p>
                <p className="leading-relaxed">+91 88495 57832</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              {t("Reach out to us")}
            </h2>
            <p className="leading-relaxed mb-5">
              {t("Anything you want to ask? Jot it down below")}
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  {t("Name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  {t("Email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  {t("Message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-800 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                className="text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-lg"
                type="submit"
              >
                {loading ? "Sending..." : t("Submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactScreen;
