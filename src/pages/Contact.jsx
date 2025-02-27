import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16 px-5 md:px-10">
      {/* Contact Us Section */}
      <div className="text-center text-3xl font-semibold text-gray-800 mb-10">
        <p>
          CONTACT <span className="text-primary">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.ebus_contact}
          alt="Contact eBus"
        />
        <div className="flex flex-col justify-center items-start gap-6 bg-white p-8 rounded-lg shadow-md">
          <p className="font-semibold text-xl text-gray-700">OUR OFFICE</p>
          <p className="text-gray-600">
            123 eBus Street, Suite 500
            <br /> New York, NY, USA
          </p>
          <p className="text-gray-600">
            Tel: +1-800-456-7890
            <br /> Email: support@ebus.com
          </p>

          <p className="font-semibold text-xl text-gray-700">
            CUSTOMER SUPPORT
          </p>
          <p className="text-gray-600">
            For inquiries, assistance, or feedback, reach out to our 24/7
            support team.
          </p>

          <p className="font-semibold text-xl text-gray-700">
            PARTNERSHIP OPPORTUNITIES
          </p>
          <p className="text-gray-600">
            Interested in collaborating with eBus? Let's build a better
            transportation future together.
          </p>

          <button className="border border-primary px-8 py-3 text-sm font-medium text-primary bg-transparent rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-black hover:shadow-lg hover:scale-105 focus:outline-none active:scale-95">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
