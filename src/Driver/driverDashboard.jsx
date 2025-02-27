import { useState, useContext } from "react";
import { useFirebase } from "../context/Firebase";
export default function BusDetailsForm() {
  const firebase = useFirebase();const [formData, setFormData] = useState({
    name: "",
    type: "",
    departure: "",
    arrival: "",
    duration: "",
    rating: "",
    price: "",
    seatsAvailable: "",
    departureLocation: "",
    destinationLocation: "",
    dname: "",
    dphonenumber: "",
    amenities: [],
  });

  const amenitiesList = ["WiFi", "Charging Point", "Blanket", "Water Bottle"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "departure" || name === "arrival") {
      calculateDuration({ ...formData, [name]: value });
    }
  };

  const calculateDuration = ({ departure, arrival }) => {
    if (departure && arrival) {
      const [depHour, depMin] = departure.split(":").map(Number);
      const [arrHour, arrMin] = arrival.split(":").map(Number);
      const depMinutes = depHour * 60 + depMin;
      const arrMinutes = arrHour * 60 + arrMin;
      let durationMinutes = arrMinutes - depMinutes;
      if (durationMinutes < 0) durationMinutes += 24 * 60;
      const hours = Math.floor(durationMinutes / 60);
      const minutes = durationMinutes % 60;
      setFormData((prev) => ({ ...prev, duration: `${hours}h ${minutes}m` }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, value]
        : prev.amenities.filter((amenity) => amenity !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.storeBusData(formData);
      alert("Bus details saved successfully!");
      setFormData({
        name: "",
        type: "",
        departure: "",
        arrival: "",
        duration: "",
        rating: "",
        price: "",
        seatsAvailable: "",
        departureLocation: "",
        destinationLocation: "",
        dname: "",
        dphonenumber: "",
        amenities: [],
      });
    } catch (error) {
      console.error("Error saving bus details:", error);
      alert("Failed to save bus details.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Bus Details Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Bus Name", name: "name", type: "text" },
          { label: "Bus Type", name: "type", type: "text" },
          { label: "Departure Time", name: "departure", type: "time" },
          { label: "Arrival Time", name: "arrival", type: "time" },
          { label: "Duration", name: "duration", type: "text", disabled: true },
          { label: "Rating", name: "rating", type: "number", step: "0.1" },
          { label: "Price", name: "price", type: "number" },
          { label: "Seats Available", name: "seatsAvailable", type: "number" },
          {
            label: "Departure Location",
            name: "departureLocation",
            type: "text",
          },
          {
            label: "Destination Location",
            name: "destinationLocation",
            type: "text",
          },
          { label: "Driver Name", name: "dname", type: "text" },
          { label: "Driver Phone Number", name: "dphonenumber", type: "tel" },
        ].map(({ label, name, type, step, disabled }) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              type={type}
              name={name}
              step={step}
              value={formData[name]}
              onChange={handleChange}
              disabled={disabled}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium">Amenities</label>
          <div className="grid grid-cols-2 gap-2">
            {amenitiesList.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
