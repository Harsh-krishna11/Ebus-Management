import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const TopBar = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialFrom = searchParams.get("from") || "Faridabad";
  const initialTo = searchParams.get("to") || "Kurukshetra";
  const initialDate = searchParams.get("date") || "2025-02-24";

  const [isEditing, setIsEditing] = useState(false);
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [date, setDate] = useState(initialDate);

  // Temporary state for editing
  const [tempFrom, setTempFrom] = useState(initialFrom);
  const [tempTo, setTempTo] = useState(initialTo);
  const [tempDate, setTempDate] = useState(initialDate);

  // Sync state with URL params when component mounts
  useEffect(() => {
    setFrom(initialFrom);
    setTo(initialTo);
    setDate(initialDate);
    setTempFrom(initialFrom);
    setTempTo(initialTo);
    setTempDate(initialDate);
  }, [initialFrom, initialTo, initialDate]);

  const handleSave = () => {
    const newFrom = tempFrom.trim() || from;
    const newTo = tempTo.trim() || to;
    const newDate = tempDate || date;

    // Update state
    setFrom(newFrom);
    setTo(newTo);
    setDate(newDate);
    setIsEditing(false);

    // Update the URL parameters
    navigate(
      `?from=${encodeURIComponent(newFrom)}&to=${encodeURIComponent(
        newTo
      )}&date=${encodeURIComponent(newDate)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md mx-auto max-w-screen-lg">
      <div className="text-xs sm:text-sm text-gray-500 mb-2">
        <span className="font-semibold">Bus Ticket</span> &gt; {from} To {to}{" "}
        Bus
      </div>
      <h2 className="text-lg sm:text-2xl font-semibold mb-4">
        {from} to {to} Bus
      </h2>

      {!isEditing ? (
        <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow gap-2 sm:gap-4">
          <div className="flex-1 text-sm sm:text-base">
            <span className="font-semibold">{from}</span> →{" "}
            <span className="font-semibold ml-1 sm:ml-2">{to}</span>
            <div className="text-gray-600 text-xs sm:text-sm">
              {new Date(date).toDateString()}
            </div>
          </div>
          <button
            className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-200 text-xs sm:text-sm"
            onClick={() => setIsEditing(true)}
          >
            Modify
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 bg-white p-4 rounded-lg shadow">
          <input
            type="text"
            className="p-2 border rounded-md text-sm sm:text-base"
            value={tempFrom}
            onChange={(e) => setTempFrom(e.target.value)}
            placeholder="From"
          />
          <input
            type="text"
            className="p-2 border rounded-md text-sm sm:text-base"
            value={tempTo}
            onChange={(e) => setTempTo(e.target.value)}
            placeholder="To"
          />
          <input
            type="date"
            className="p-2 border rounded-md text-sm sm:text-base"
            value={tempDate}
            onChange={(e) => setTempDate(e.target.value)}
          />
          <button
            className="col-span-1 sm:col-span-3 px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xs sm:text-sm"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBar;
