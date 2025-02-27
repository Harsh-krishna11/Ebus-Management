import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-200 p-2 md:p-4 min-h-[50px] md:min-h-screen flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
      <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4 md:mr-4">
        Admin Panel
      </h2>
      <ul className="flex md:flex-col flex-row w-full md:w-auto">
        <li className="md:mb-2 md:mr-0 mr-2">
          <Link
            to="profile"
            className="block px-3 py-1 rounded hover:bg-gray-300 transition duration-200 text-sm md:text-base"
          >
            Profile
          </Link>
        </li>
        <li className="md:mb-2 md:mr-0 mr-2">
          <Link
            to="addDriver"
            className="block px-3 py-1 rounded hover:bg-gray-300 transition duration-200 text-sm md:text-base"
          >
            Add Driver
          </Link>
        </li>
        <li className="md:mb-2 md:mr-0 mr-2">
          <Link
            to="driverlist"
            className="block px-3 py-1 rounded hover:bg-gray-300 transition duration-200 text-sm md:text-base"
          >
            Driver List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-3 flex justify-between">
      <h1 className="text-lg md:text-2xl">Admin Dashboard</h1>
      <button className="bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
        Logout
      </button>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-3 text-center text-sm md:text-base">
      <p>&copy; 2025 Your Company</p>
    </footer>
  );
};

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar & Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
