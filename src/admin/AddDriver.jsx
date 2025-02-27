import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";

const AddDriver = () => {
  const firebase = useFirebase();
  const { signupUserWithEmailAndPassword, addDriverToFirestore } =
    useFirebase();
  const [driver, setDriver] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create driver in Firebase Authentication
      const user = await signupUserWithEmailAndPassword(
        driver.name,
        driver.email,
        driver.password,
        "driver"
      );

      // Store driver data in Firestore using the utility function
      await addDriverToFirestore(user.uid, driver);

      alert("Driver added successfully!");
      setDriver({
        name: "",
        age: "",
        email: "",
        password: "",
        phoneNumber: "",
      }); // Reset form
    } catch (error) {
      console.error("Error adding driver:", error);
      alert("Failed to add driver: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Driver</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Driver Name"
          value={driver.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={driver.age}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={driver.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={driver.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={driver.phoneNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Driver"}
        </button>
      </form>
    </div>
  );
};

export default AddDriver;
