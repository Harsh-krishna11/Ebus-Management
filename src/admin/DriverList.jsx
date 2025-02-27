import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { XCircle } from "lucide-react";

const DriverList = () => {
  const { fetchDrivers, removeDriverFromFirestore } = useFirebase();
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch drivers from Firestore
  useEffect(() => {
    const getDrivers = async () => {
      try {
        const driverList = await fetchDrivers();
        setDrivers(driverList);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      } finally {
        setLoading(false);
      }
    };

    getDrivers();
  }, [fetchDrivers]);

  // Remove driver and update UI
  const removeDriver = async (id) => {
    try {
      await removeDriverFromFirestore(id);
      setDrivers((prevDrivers) =>
        prevDrivers.filter((driver) => driver.id !== id)
      );
    } catch (error) {
      console.error("Error removing driver:", error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Driver List</h2>

      {loading ? (
        <p>Loading drivers...</p>
      ) : drivers.length === 0 ? (
        <p>No drivers available.</p>
      ) : (
        <ul className="space-y-2">
          {drivers.map((driver) => (
            <li
              key={driver.id}
              className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md"
            >
              <div>
                <p className="font-semibold">{driver.name}</p>
                <p className="text-sm text-gray-600">{driver.email}</p>
              </div>
              <XCircle
                className="text-red-500 cursor-pointer hover:text-red-700"
                onClick={() => removeDriver(driver.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverList;
