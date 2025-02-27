import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-5 md:px-10">
      {/* About Us Section */}
      <div className="text-center text-3xl font-semibold text-gray-800 mb-10 transition-all duration-300 hover:scale-105">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center">
        <img
          className="w-full md:max-w-[400px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          src={assets.ebus_about}
          alt="About eBus"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <p className="text-gray-700 text-lg leading-7">
            Welcome to <b className="text-primary">eBus</b>, your reliable
            partner in modern bus transportation management. We aim to simplify
            ticket booking and fleet management, ensuring a seamless and
            efficient travel experience for all.
          </p>
          <p className="text-gray-700 text-lg leading-7">
            Our platform provides real-time bus tracking, hassle-free online
            booking, and a user-friendly experience. Whether you're a passenger
            planning your journey or a transportation operator managing
            services, eBus delivers smart, innovative solutions tailored to your
            needs.
          </p>
          <b className="text-gray-900 text-xl">Our Mission</b>
          <p className="text-gray-700 text-lg leading-7">
            Our mission is to transform public transportation by offering a
            seamless digital booking experience, reducing wait times, and
            ensuring safe, convenient, and eco-friendly travel.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-3xl font-semibold text-gray-800 mt-16 mb-10 transition-all duration-300 hover:scale-105">
        <p>
          WHY <span className="text-primary">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: "EFFICIENCY",
            description:
              "Seamless online booking and real-time bus tracking to optimize travel time.",
          },
          {
            title: "CONVENIENCE",
            description:
              "Easy-to-use platform with a wide network of routes and bus operators.",
          },
          {
            title: "SAFETY & RELIABILITY",
            description:
              "Partnering with trusted operators to ensure a safe and reliable journey.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border px-8 py-10 rounded-lg shadow-md bg-white text-gray-800 text-lg flex flex-col items-center gap-5 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:border-primary hover:shadow-xl"
          >
            <b className="text-xl text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
              {item.title}
            </b>
            <p className="text-center text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
