import { useState } from "react";
import { Star } from "lucide-react";
import { useFirebase } from "../context/Firebase.jsx";

const seatsData = [
  [{ id: "W1", type: "wheel" }, {}, {}, {}, {}],
  [{ id: "Dr", type: "driver" }, {}, {}, {}, {}],
  [
    { id: "P1", type: "occupied" },
    { id: "P2", type: "available" },
    {},
    { id: "P3", type: "occupied" },
    { id: "P4", type: "available" },
  ],
  [
    { id: "P5", type: "occupied" },
    { id: "P6", type: "available" },
    {},
    { id: "P7", type: "occupied" },
    { id: "P8", type: "available" },
  ],
  [
    { id: "P9", type: "occupied" },
    { id: "P10", type: "available" },
    {},
    { id: "P11", type: "occupied" },
    { id: "P12", type: "available" },
  ],
  [
    { id: "P13", type: "occupied" },
    { id: "P14", type: "available" },
    {},
    { id: "P15", type: "occupied" },
    { id: "P16", type: "available" },
  ],
  [
    { id: "P17", type: "occupied" },
    { id: "P18", type: "available" },
    {},
    { id: "P19", type: "occupied" },
    { id: "P20", type: "available" },
  ],
  [
    { id: "P21", type: "occupied" },
    { id: "P22", type: "available" },
    {},
    { id: "P23", type: "occupied" },
    { id: "P24", type: "available" },
  ],
  [
    { id: "P41", type: "occupied" },
    { id: "P42", type: "available" },
    { id: "P43", type: "occupied" },
    { id: "P44", type: "available" },
    { id: "P45", type: "occupied" },
  ],
];

const statusColors = {
  wheel: "border-black",
  driver: "border-red-500",
  occupied: "border-green-500 cursor-not-allowed",
  available: "border-blue-500 cursor-pointer hover:bg-blue-200",
  selected: "border-yellow-500 bg-yellow-200",
};

function SeatLegend() {
  const legendItems = [
    { label: "Wheel", color: "border-black" },
    { label: "Driver", color: "border-red-500" },
    { label: "Occupied", color: "border-green-500" },
    { label: "Available", color: "border-blue-500" },
    { label: "Selected", color: "border-yellow-500 bg-yellow-200" },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={`w-6 h-6 border ${item.color} rounded`}></div>
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function BusSeating({ selectedSeats, setSelectedSeats }) {
  const { authStateListener } = useFirebase();
  const [user, setUser] = useState(null);

  useState(() => {
    authStateListener(setUser);
  }, []);

  const handleSeatClick = (seat) => {
    if (!user) {
      alert("You must be logged in to book a seat.");
      return;
    }
    if (seat.type === "available") {
      setSelectedSeats((prev) =>
        prev.includes(seat.id)
          ? prev.filter((id) => id !== seat.id)
          : [...prev, seat.id]
      );
    }
  };

  return (
    <div className="flex flex-row items-start space-x-8">
      <div className="border-4 border-black rounded-lg p-3 flex flex-col space-y-1 bg-gray-100">
        {seatsData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row space-x-1 justify-center"
          >
            {row.map((seat, seatIndex) =>
              seat.id ? (
                <div
                  key={seatIndex}
                  className={`w-8 h-8 flex items-center justify-center text-xs font-bold rounded-lg border ${
                    selectedSeats.includes(seat.id)
                      ? statusColors.selected
                      : statusColors[seat.type]
                  }`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat.id}
                </div>
              ) : (
                <div key={seatIndex} className="w-8 h-8"></div>
              )
            )}
          </div>
        ))}
      </div>
      <SeatLegend />
    </div>
  );
}

export default function BusCard({ bus }) {
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const bookSeats = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat to book.");
      return;
    }
    alert(`Seats booked: ${selectedSeats.join(", ")}`);
    setSelectedSeats([]);
  };

  return (
    <div className="p-4 shadow-lg border border-gray-200 rounded-lg bg-white">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{bus.name}</h2>
          <p className="text-sm text-gray-500">{bus.type}</p>
          <p className="mt-2 text-gray-700 font-medium">
            {bus.departure} - {bus.arrival} ({bus.duration})
          </p>
          <div className="flex items-center mt-2">
            <Star className="text-yellow-500" size={16} />
            <span className="ml-1 font-medium text-gray-700">{bus.rating}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">INR {bus.price}</p>
          <p className="text-sm text-gray-600">
            {bus.seatsAvailable} Seats Available
          </p>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={() =>
              setSelectedBus(selectedBus === bus.id ? null : bus.id)
            }
          >
            {selectedBus === bus.id ? "Hide Seats" : "View Seats"}
          </button>
        </div>
      </div>
      {selectedBus === bus.id && (
        <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Seat Selection</h2>
          <p className="text-sm text-gray-500 mb-4 bg-gray-200 p-2 rounded">
            Click on an available seat to proceed with your transaction.
          </p>
          <BusSeating
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />
          <button
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition w-full"
            onClick={bookSeats}
          >
            Book Selected Seats
          </button>
        </div>
      )}
    </div>
  );
}
