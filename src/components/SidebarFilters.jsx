import { useState } from "react";
import { Filter } from "lucide-react";

export default function SidebarFilters({ filters, setFilters }) {
  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type]?.includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...(prev[type] || []), value],
    }));
  };

  return (
    <div className="w-72 bg-white p-5 border-r shadow-md h-screen">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <Filter className="text-gray-600" size={20} />
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
      </div>

      {/* Filter Options */}
      <div className="space-y-3">
        {/* Price Range */}
        <div>
          <label className="block text-gray-700 font-medium">Price Range</label>
          <input
            type="range"
            min="100"
            max="5000"
            value={filters.price || 100}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            className="w-full"
          />
          <span className="text-gray-600">Up to ₹{filters.price || 100}</span>
        </div>

        {/* Departure Time (24-hour format) */}
        <div>
          <label className="block text-gray-700 font-medium">
            Departure Time
          </label>
          {[
            { label: "00:00 - 05:59", value: "00-06" },
            { label: "06:00 - 11:59", value: "06-12" },
            { label: "12:00 - 17:59", value: "12-18" },
            { label: "18:00 - 23:59", value: "18-24" },
          ].map(({ label, value }) => (
            <label
              key={value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.departure?.includes(value) || false}
                onChange={() => handleCheckboxChange("departure", value)}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-gray-700">{label}</span>
            </label>
          ))}
        </div>

        {/* Arrival Time (24-hour format) */}
        <div>
          <label className="block text-gray-700 font-medium">
            Arrival Time
          </label>
          {[
            { label: "00:00 - 05:59", value: "00-06" },
            { label: "06:00 - 11:59", value: "06-12" },
            { label: "12:00 - 17:59", value: "12-18" },
            { label: "18:00 - 23:59", value: "18-24" },
          ].map(({ label, value }) => (
            <label
              key={value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.arrival?.includes(value) || false}
                onChange={() => handleCheckboxChange("arrival", value)}
                className="w-4 h-4 accent-blue-500"
              />
              <span className="text-gray-700">{label}</span>
            </label>
          ))}
        </div>

        {/* Available Seats */}
        <div>
          <label className="block text-gray-700 font-medium">
            Seats Available
          </label>
          <input
            type="number"
            min="1"
            value={filters.availableSeats || ""}
            onChange={(e) =>
              setFilters({
                ...filters,
                availableSeats: Number(e.target.value) || "",
              })
            }
            placeholder="Enter minimum seats"
            className="w-full border p-1 rounded"
          />
        </div>

        {/* Bus Type */}
        <div>
          <label className="block text-gray-700 font-medium">Bus Type</label>
          <select
            value={filters.busType || ""}
            onChange={(e) =>
              setFilters({ ...filters, busType: e.target.value })
            }
            className="w-full border p-1 rounded"
          >
            <option value="">All</option>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
            <option value="Sleeper">Sleeper</option>
          </select>
        </div>

        {/* Operator */}
        <div>
          <label className="block text-gray-700 font-medium">Operator</label>
          <input
            type="text"
            value={filters.operator || ""}
            onChange={(e) =>
              setFilters({ ...filters, operator: e.target.value })
            }
            placeholder="Enter operator name"
            className="w-full border p-1 rounded"
          />
        </div>

        {/* Amenities */}
        <div>
          <label className="block text-gray-700 font-medium">Amenities</label>
          <div className="space-y-2">
            {["Blanket", "Water Bottle", "Charging Point", "WiFi"].map(
              (amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.amenities?.includes(amenity) || false}
                    onChange={() => handleCheckboxChange("amenities", amenity)}
                    className="w-4 h-4 accent-blue-500"
                  />
                  <span className="text-gray-700">{amenity}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
