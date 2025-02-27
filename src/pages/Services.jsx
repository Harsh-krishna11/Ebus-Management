import React from "react";
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16 px-5 md:px-10">
      {/* Services Header */}
      <div className="text-center text-4xl font-bold text-gray-800 mb-12 transition-all duration-300 hover:scale-105">
        <p className="tracking-wide uppercase">
          OUR <span className="text-primary">SERVICES</span>
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Online Ticket Booking",
            description:
              "Book your bus tickets easily with our seamless online booking system.",
            image: assets.ebus_ticket,
          },
          {
            title: "Real-Time Bus Tracking",
            description:
              "Track your bus location in real-time and reduce wait times.",
            image: assets.ebus_tracking,
          },
          {
            title: "Comfort & Safety",
            description:
              "Enjoy a safe, comfortable, and hassle-free journey with trusted operators.",
            image: assets.ebus_safety,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-primary hover:bg-gray-50 transform hover:-translate-y-2"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto w-44 h-44 object-cover mb-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-110 hover:rotate-2 hover:border-4 border-primary"
            />
            <b className="text-xl text-gray-800 font-semibold">
              {service.title}
            </b>
            <p className="text-gray-600 mt-3 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Future Enhancements Section */}
      <div className="text-center text-4xl font-bold text-gray-800 mt-20 mb-10">
        <p className="tracking-wide uppercase">
          FUTURE <span className="text-primary">ENHANCEMENTS</span>
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-primary hover:scale-105 transform hover:-translate-y-2 hover:bg-gray-50">
        <ul className="text-gray-700 space-y-4 text-lg list-disc pl-5 font-medium">
          <li>AI-based smart route recommendations for optimized travel.</li>
          <li>Integration with digital wallets for faster, secure payments.</li>
          <li>
            Enhanced customer support with live chat and instant response.
          </li>
          <li>Eco-friendly buses with carbon footprint tracking.</li>
          <li>Exclusive discounts and rewards for frequent travelers.</li>
        </ul>
      </div>

      {/* Customer Reviews Section */}
      <div className="text-center text-4xl font-bold text-gray-800 mt-20 mb-10">
        <p className="tracking-wide uppercase">
          CUSTOMER <span className="text-primary">REVIEWS</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "John Doe",
            review:
              "The best bus service I have used! Reliable and super easy to book.",
            image: assets.person1,
          },
          {
            name: "Sarah Lee",
            review:
              "Loved the real-time tracking feature. No more waiting for buses!",
            image: assets.person3,
          },
          {
            name: "Michael Smith",
            review:
              "Great service with clean and comfortable buses. Highly recommended!",
            image: assets.person2,
          },
        ].map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:scale-105 hover:border-primary hover:bg-gray-50 transform hover:-translate-y-2"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-primary shadow-sm transform transition-all duration-300 hover:scale-110 hover:rotate-3"
            />
            <b className="text-lg text-gray-800 font-semibold">{review.name}</b>
            <p className="text-gray-600 mt-3 italic">"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
