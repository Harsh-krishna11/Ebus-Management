import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarFilters from "../components/SidebarFilters";
import TopBar from "../components/TopBar";
import BusCard from "../components/BusCard";
import { useFirebase } from "../context/Firebase";
import { buses } from "../assets/busdata";

export default function App() {
  const location = useLocation();
  const { fetchBuses } = useFirebase(); // Import fetchBuses from Firebase context
  const [buses, setBuses] = useState([]); // State to store buses

  // Function to get query parameters
  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return {
      from: searchParams.get("from") || "",
      to: searchParams.get("to") || "",
      date: searchParams.get("date") || "",
    };
  };

  const [filters, setFilters] = useState({
    price: 5000,
    departure: [],
    arrival: [],
    availableSeats: false,
    busType: "",
    operator: "",
    amenities: [],
    from: "",
    to: "",
  });

  // Fetch buses from Firebase when component mounts
  useEffect(() => {
    const loadBuses = async () => {
      try {
        const busData = await fetchBuses();
        setBuses(busData);
      } catch (error) {
        console.error("Failed to fetch buses:", error);
      }
    };
    loadBuses();
  }, []);

  // Set filters when the page loads
  useEffect(() => {
    const params = getQueryParams();
    setFilters((prevFilters) => ({
      ...prevFilters,
      from: params.from,
      to: params.to,
    }));
  }, [location.search]);

  const filteredBuses = buses.filter((bus) => {
    return (
      bus.price <= filters.price &&
      (filters.departure.length > 0
        ? filters.departure.some((range) => {
            const [start, end] = range.split("-").map((t) => t.trim());
            return bus.departure >= start && bus.departure <= end;
          })
        : true) &&
      (filters.arrival.length > 0
        ? filters.arrival.some((range) => {
            const [start, end] = range.split("-").map((t) => t.trim());
            return bus.arrival >= start && bus.arrival <= end;
          })
        : true) &&
      (filters.availableSeats
        ? bus.seatsAvailable >= Number(filters.availableSeats)
        : true) &&
      (filters.busType
        ? bus.type.toLowerCase().includes(filters.busType.toLowerCase())
        : true) &&
      (filters.operator
        ? bus.name.toLowerCase().includes(filters.operator.toLowerCase())
        : true) &&
      (filters.amenities.length > 0
        ? filters.amenities.every((amenity) => bus.amenities.includes(amenity))
        : true) &&
      // Filter by from and to locations
      (filters.from
        ? bus.departureLocation.toLowerCase() === filters.from.toLowerCase()
        : true) &&
      (filters.to
        ? bus.destinationLocation.toLowerCase() === filters.to.toLowerCase()
        : true)
    );
  });

  return (
    <div className="flex">
      <SidebarFilters filters={filters} setFilters={setFilters} />
      <div className="flex-1 p-5 overflow-y-auto h-screen scrollbar-hidden">
        <TopBar />
        {filteredBuses.map((bus) => (
          <BusCard key={bus.id} bus={bus} />
        ))}
      </div>
    </div>
  );
}
