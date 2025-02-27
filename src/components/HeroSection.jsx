import { useState, useRef, useEffect } from "react";
import { FaBus, FaCalendarAlt, FaExchangeAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { buses } from "../assets/busdata.jsx"; // Adjust path if needed

const HeroSection = () => {
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Jaipur");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [error, setError] = useState("");

  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fromInputRef.current &&
        !fromInputRef.current.contains(event.target)
      ) {
        setFromSuggestions([]);
      }
      if (toInputRef.current && !toInputRef.current.contains(event.target)) {
        setToSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getUniqueLocations = (key) => {
    return [...new Set(buses.map((bus) => bus[key]))];
  };

  const validFromLocations = getUniqueLocations("departureLocation");
  const validToLocations = getUniqueLocations("destinationLocation");

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    setError(""); // Clear error on typing
    setFromSuggestions(
      e.target.value
        ? validFromLocations.filter((city) =>
            city.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : []
    );
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    setError(""); // Clear error on typing
    setToSuggestions(
      e.target.value
        ? validToLocations.filter((city) =>
            city.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : []
    );
  };

  const handleFromSelect = (city) => {
    setFrom(city);
    setFromSuggestions([]);
    setError(""); // Clear error
  };

  const handleToSelect = (city) => {
    setTo(city);
    setToSuggestions([]);
    setError(""); // Clear error
  };

  const swapLocations = () => {
    if (from.trim() && to.trim()) {
      setFrom(to);
      setTo(from);
    }
  };

  const handleSearch = () => {
    if (!from.trim()) {
      setError("Please enter a departure city.");
      return;
    }
    if (!to.trim()) {
      setError("Please enter a destination city.");
      return;
    }
    if (!validFromLocations.includes(from)) {
      setError("Please enter a valid departure city from the suggestions.");
      return;
    }
    if (!validToLocations.includes(to)) {
      setError("Please enter a valid destination city from the suggestions.");
      return;
    }

    navigate(
      `/busbooking?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${encodeURIComponent(date)}`
    );
  };

  return (
    <div
      className="relative bg-cover bg-center text-white text-center py-12 px-4 sm:px-6 md:px-10 min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage:
          "url('https://www.castanet.net/content/2022/9/ebus-coach._p3623368.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        India's No. 1 Online Bus Ticket Booking Site
      </h1>

      <div className="bg-white bg-opacity-0 text-black rounded-lg shadow-xl backdrop-blur-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto w-full md:p-8 md:gap-6">
        <div
          className="flex flex-col w-full md:flex-1 relative"
          ref={fromInputRef}
        >
          <span className="text-gray-700 text-sm mb-1">From</span>
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 w-full">
            <FaBus className="text-gray-600" />
            <input
              type="text"
              value={from}
              onChange={handleFromChange}
              className="outline-none w-full text-lg"
              placeholder="Enter Departure City"
            />
          </div>
          {fromSuggestions.length > 0 && (
            <ul className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg">
              {fromSuggestions.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleFromSelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <FaExchangeAlt
          className="text-gray-700 text-2xl cursor-pointer md:mt-6"
          onClick={swapLocations}
        />

        <div
          className="flex flex-col w-full md:flex-1 relative"
          ref={toInputRef}
        >
          <span className="text-gray-700 text-sm mb-1">To</span>
          <div className="flex items-center gap-2 border border-gray-400 rounded-lg px-4 py-3 w-full">
            <FaBus className="text-gray-600" />
            <input
              type="text"
              value={to}
              onChange={handleToChange}
              className="outline-none w-full text-lg"
              placeholder="Enter Destination City"
            />
          </div>
          {toSuggestions.length > 0 && (
            <ul className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg">
              {toSuggestions.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleToSelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition-all flex items-center justify-center text-lg shadow-lg w-full md:w-auto mt-5"
        >
          <FaSearch className="text-xl mr-2" />
          <span className="font-semibold">Search Buses</span>
        </button>
      </div>

      {error && (
        <p className="text-red-600 mt-4 text-lg font-semibold">{error}</p>
      )}
    </div>
  );
};

export default HeroSection;
