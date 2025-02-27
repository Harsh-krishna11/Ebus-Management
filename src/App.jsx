import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import BusBooking from "./pages/BusBooking";
import LoginRegister from "./pages/LoginRegister";
import AdminDashboard from "./admin/admindashboard";
import Profile from "./admin/Profile";
import DriverList from "./admin/DriverList";
import AddDriver from "./admin/AddDriver";
import DriverDashboard from "./Driver/driverDashboard";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/busbooking" element={<BusBooking />} />
        <Route path="/adlogin" element={<LoginRegister />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          {/* Nested Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="addDriver" element={<AddDriver />} />
          <Route path="driverlist" element={<DriverList />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
