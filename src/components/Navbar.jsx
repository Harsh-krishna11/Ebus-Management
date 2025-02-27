// // // // import { useState } from "react";
// // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // import {
// // // //   FaBus,
// // // //   FaUser,
// // // //   FaBars,
// // // //   FaTimes,
// // // //   FaSignOutAlt,
// // // //   FaUserShield,
// // // // } from "react-icons/fa";
// // // // import { useFirebase } from "../context/Firebase";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const { user, role, logoutUser } = useFirebase();

// // // //   const handleLogout = async () => {
// // // //     await logoutUser();
// // // //     alert("Logged out successfully!");
// // // //     navigate("/login");
// // // //   };

// // // //   return (
// // // //     <nav className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md border-b border-gray-300 bg-white relative z-50">
// // // //       <div className="flex items-center space-x-3">
// // // //         <FaBus className="text-3xl text-blue-600" />
// // // //         <h1 className="text-2xl font-bold text-gray-800">eBus Management</h1>
// // // //       </div>

// // // //       {role === "admin" || role === "driver" ? (
// // // //         <div className="flex items-center space-x-4">
// // // //           <NavLink
// // // //             to={role === "admin" ? "/admin-dashboard" : "/driver-dashboard"}
// // // //             className="text-lg text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
// // // //           >
// // // //             {role === "admin" ? (
// // // //               <FaUserShield className="mr-2" />
// // // //             ) : (
// // // //               <FaBus className="mr-2" />
// // // //             )}
// // // //             {role === "admin" ? "Admin Panel" : "Driver Panel"}
// // // //           </NavLink>
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 flex items-center transition duration-300"
// // // //           >
// // // //             <FaSignOutAlt className="mr-2" /> Logout
// // // //           </button>
// // // //         </div>
// // // //       ) :
// // // //       <div className="flex items-center space-x-4 lg:space-x-6">
// // // //         <div className="lg:hidden">
// // // //           <button
// // // //             className="text-2xl focus:outline-none"
// // // //             onClick={() => setIsOpen(!isOpen)}
// // // //           >
// // // //             {isOpen ? <FaTimes /> : <FaBars />}
// // // //           </button>
// // // //         </div>

// // // //         <div
// // // //           className={`lg:flex items-center space-x-8 text-lg font-medium text-gray-700 ${
// // // //             isOpen
// // // //               ? "block absolute top-16 left-0 w-full bg-white shadow-md"
// // // //               : "hidden"
// // // //           } lg:relative lg:top-0 lg:w-auto lg:bg-transparent lg:shadow-none`}
// // // //         >
// // // //           {[
// // // //             { path: "/", label: "Home" },
// // // //             { path: "/about", label: "About" },
// // // //             { path: "/services", label: "Services" },
// // // //             { path: "/contact", label: "Contact" },
// // // //           ].map(({ path, label }) => (
// // // //             <NavLink
// // // //               key={path}
// // // //               to={path}
// // // //               className="block px-4 py-2 lg:p-0 hover:text-blue-600 transition duration-300"
// // // //             >
// // // //               {label}
// // // //             </NavLink>
// // // //           ))}
// // // //         </div>

// // // //         <div className="relative flex items-center space-x-4">
// // // //           {user ? (
// // // //             <div className="relative">
// // // //               <button
// // // //                 onClick={() => setDropdownOpen(!dropdownOpen)}
// // // //                 className="flex items-center focus:outline-none"
// // // //               >
// // // //                 <img
// // // //                   src={
// // // //                     user.photoURL ||
// // // //                     "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// // // //                   }
// // // //                   alt="Profile"
// // // //                   className="w-10 h-10 rounded-full border border-gray-300 object-cover hover:shadow-md"
// // // //                 />
// // // //               </button>
// // // //               {dropdownOpen && (
// // // //                 <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
// // // //                   <NavLink
// // // //                     to="/profile"
// // // //                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200"
// // // //                     onClick={() => setDropdownOpen(false)}
// // // //                   >
// // // //                     <FaUser className="mr-2 text-blue-600" /> Profile
// // // //                   </NavLink>
// // // //                   <button
// // // //                     onClick={handleLogout}
// // // //                     className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 transition duration-200 cursor-pointer"
// // // //                   >
// // // //                     <FaSignOutAlt className="mr-2" /> Logout
// // // //                   </button>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           ) : (
// // // //             <button
// // // //               onClick={() => navigate("/login")}
// // // //               className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center transition duration-300"
// // // //             >
// // // //               <FaUser className="mr-2" /> Login
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </div>}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // // useEffect(() => {
// // // //   //   const unsubscribe = authStateListener(async (authUser) => {
// // // //   //     setUser(authUser);
// // // //   //     if (authUser) {
// // // //   //       try {
// // // //   //         const userRole = await getUserRole(authUser.uid);
// // // //   //         setRole(userRole);
// // // //   //         console.log("User role updated:", userRole);
// // // //   //       } catch (error) {
// // // //   //         console.error("Error fetching user role:", error);
// // // //   //       }
// // // //   //     } else {
// // // //   //       setRole(null);
// // // //   //     }
// // // //   //   });

// // // //   //   return () => unsubscribe();
// // // //   // }, [authStateListener, getUserRole, setUser, setRole]);

// // // //   // useEffect(() => {
// // // //   //   const unsubscribe = authStateListener(async (authUser) => {
// // // //   //     if (authUser) {
// // // //   //       try {
// // // //   //         const userRole = await getUserRole(authUser.uid);
// // // //   //         if (!userRole) {
// // // //   //           await signOut(auth); // 🚨 Logout if no role exists
// // // //   //           setUser(null);
// // // //   //           setRole(null);
// // // //   //           console.error("Access denied! No role assigned.");
// // // //   //           return;
// // // //   //         }

// // // //   //         // ✅ Only set state if role is valid
// // // //   //         setUser(authUser);
// // // //   //         setRole(userRole);
// // // //   //         console.log("User role updated:", userRole);
// // // //   //       } catch (error) {
// // // //   //         console.error("Error fetching user role:", error);
// // // //   //       }
// // // //   //     } else {
// // // //   //       setUser(null);
// // // //   //       setRole(null);
// // // //   //     }
// // // //   //   });

// // // //   //   return () => unsubscribe();
// // // //   // }, [authStateListener, getUserRole, setUser, setRole])

// // // import { useState, useEffect } from "react";
// // // import { NavLink, useNavigate } from "react-router-dom";
// // // import {
// // //   FaBus,
// // //   FaUser,
// // //   FaBars,
// // //   FaTimes,
// // //   FaSignOutAlt,
// // //   FaUserShield,
// // // } from "react-icons/fa";
// // // import { useFirebase } from "../context/Firebase";

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // //   const navigate = useNavigate();

// // //   const { user, role, logoutUser } = useFirebase();

// // //   useEffect(() => {
// // //     setIsOpen(false); // Close menu when role changes
// // //   }, [role]);

// // //   const handleLogout = async () => {
// // //     await logoutUser();
// // //     alert("Logged out successfully!");
// // //     navigate("/login");
// // //   };

// // //   // Prevent rendering before Firebase auth state is loaded
// // //   if (user === undefined) return null;

// // //   return (
// // //     <nav className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md border-b border-gray-300 bg-white relative z-50">
// // //       <div className="flex items-center space-x-3">
// // //         <FaBus className="text-3xl text-blue-600" />
// // //         <h1 className="text-2xl font-bold text-gray-800">eBus Management</h1>
// // //       </div>

// // //       {role === "admin" || role === "driver" ? (
// // //         <div className="flex items-center space-x-4">
// // //           <NavLink
// // //             to={role === "admin" ? "/admin-dashboard" : "/driver-dashboard"}
// // //             className="text-lg text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
// // //           >
// // //             {role === "admin" ? (
// // //               <FaUserShield className="mr-2" />
// // //             ) : (
// // //               <FaBus className="mr-2" />
// // //             )}
// // //             {role === "admin" ? "Admin Panel" : "Driver Panel"}
// // //           </NavLink>
// // //           <button
// // //             onClick={handleLogout}
// // //             className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 flex items-center transition duration-300"
// // //           >
// // //             <FaSignOutAlt className="mr-2" /> Logout
// // //           </button>
// // //         </div>
// // //       ) : (
// // //         <div className="flex items-center space-x-4 lg:space-x-6">
// // //           <div className="lg:hidden">
// // //             <button
// // //               className="text-2xl focus:outline-none"
// // //               onClick={() => setIsOpen(!isOpen)}
// // //             >
// // //               {isOpen ? <FaTimes /> : <FaBars />}
// // //             </button>
// // //           </div>

// // //           <div
// // //             className={`lg:flex items-center space-x-8 text-lg font-medium text-gray-700 ${
// // //               isOpen
// // //                 ? "block absolute top-16 left-0 w-full bg-white shadow-md"
// // //                 : "hidden"
// // //             } lg:relative lg:top-0 lg:w-auto lg:bg-transparent lg:shadow-none`}
// // //           >
// // //             {[
// // //               { path: "/", label: "Home" },
// // //               { path: "/about", label: "About" },
// // //               { path: "/services", label: "Services" },
// // //               { path: "/contact", label: "Contact" },
// // //             ].map(({ path, label }) => (
// // //               <NavLink
// // //                 key={path}
// // //                 to={path}
// // //                 className="block px-4 py-2 lg:p-0 hover:text-blue-600 transition duration-300"
// // //                 onClick={() => setIsOpen(false)} // Close menu on click
// // //               >
// // //                 {label}
// // //               </NavLink>
// // //             ))}
// // //           </div>

// // //           <div className="relative flex items-center space-x-4">
// // //             {user ? (
// // //               <div className="relative">
// // //                 <button
// // //                   onClick={() => setDropdownOpen(!dropdownOpen)}
// // //                   className="flex items-center focus:outline-none"
// // //                 >
// // //                   <img
// // //                     src={
// // //                       user.photoURL ||
// // //                       "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// // //                     }
// // //                     alt="Profile"
// // //                     className="w-10 h-10 rounded-full border border-gray-300 object-cover hover:shadow-md"
// // //                   />
// // //                 </button>
// // //                 {dropdownOpen && (
// // //                   <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
// // //                     <NavLink
// // //                       to="/profile"
// // //                       className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200"
// // //                       onClick={() => setDropdownOpen(false)}
// // //                     >
// // //                       <FaUser className="mr-2 text-blue-600" /> Profile
// // //                     </NavLink>
// // //                     <button
// // //                       onClick={handleLogout}
// // //                       className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 transition duration-200 cursor-pointer"
// // //                     >
// // //                       <FaSignOutAlt className="mr-2" /> Logout
// // //                     </button>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ) : (
// // //               <button
// // //                 onClick={() => navigate("/login")}
// // //                 className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center transition duration-300"
// // //               >
// // //                 <FaUser className="mr-2" /> Login
// // //               </button>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import { useState, useEffect, useMemo } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   FaBus,
// //   FaUser,
// //   FaBars,
// //   FaTimes,
// //   FaSignOutAlt,
// //   FaUserShield,
// // } from "react-icons/fa";
// // import { useFirebase } from "../context/Firebase";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();
// //   const { user, role, logoutUser } = useFirebase();

// //   // Track when user & role are fully loaded
// //   useEffect(() => {
// //     if (user !== undefined && role !== undefined) {
// //       setLoading(false);
// //     }
// //   }, [user, role]);

// //   const handleLogout = async () => {
// //     await logoutUser();
// //     alert("Logged out successfully!");
// //     navigate("/login");
// //   };

// //   // Prevent rendering incorrect UI before Firebase loads
// //   if (loading) return null;

// //   return (
// //     <nav className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md border-b border-gray-300 bg-white relative z-50">
// //       <div className="flex items-center space-x-3">
// //         <FaBus className="text-3xl text-blue-600" />
// //         <h1 className="text-2xl font-bold text-gray-800">eBus Management</h1>
// //       </div>

// //       {role === "admin" || role === "driver" ? (
// //         <div className="flex items-center space-x-4">
// //           <NavLink
// //             to={role === "admin" ? "/admin-dashboard" : "/driver-dashboard"}
// //             className="text-lg text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
// //           >
// //             {role === "admin" ? (
// //               <FaUserShield className="mr-2" />
// //             ) : (
// //               <FaBus className="mr-2" />
// //             )}
// //             {role === "admin" ? "Admin Panel" : "Driver Panel"}
// //           </NavLink>
// //           <button
// //             onClick={handleLogout}
// //             className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 flex items-center transition duration-300"
// //           >
// //             <FaSignOutAlt className="mr-2" /> Logout
// //           </button>
// //         </div>
// //       ) : (
// //         <div className="flex items-center space-x-4 lg:space-x-6">
// //           <div className="lg:hidden">
// //             <button
// //               className="text-2xl focus:outline-none"
// //               onClick={() => setIsOpen(!isOpen)}
// //             >
// //               {isOpen ? <FaTimes /> : <FaBars />}
// //             </button>
// //           </div>

// //           <div
// //             className={`lg:flex items-center space-x-8 text-lg font-medium text-gray-700 ${
// //               isOpen
// //                 ? "block absolute top-16 left-0 w-full bg-white shadow-md"
// //                 : "hidden"
// //             } lg:relative lg:top-0 lg:w-auto lg:bg-transparent lg:shadow-none`}
// //           >
// //             {[
// //               { path: "/", label: "Home" },
// //               { path: "/about", label: "About" },
// //               { path: "/services", label: "Services" },
// //               { path: "/contact", label: "Contact" },
// //             ].map(({ path, label }) => (
// //               <NavLink
// //                 key={path}
// //                 to={path}
// //                 className="block px-4 py-2 lg:p-0 hover:text-blue-600 transition duration-300"
// //                 onClick={() => setIsOpen(false)} // Close menu on click
// //               >
// //                 {label}
// //               </NavLink>
// //             ))}
// //           </div>

// //           <div className="relative flex items-center space-x-4">
// //             {user ? (
// //               <div className="relative">
// //                 <button
// //                   onClick={() => setDropdownOpen(!dropdownOpen)}
// //                   className="flex items-center focus:outline-none"
// //                 >
// //                   <img
// //                     src={
// //                       user.photoURL ||
// //                       "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
// //                     }
// //                     alt="Profile"
// //                     className="w-10 h-10 rounded-full border border-gray-300 object-cover hover:shadow-md"
// //                   />
// //                 </button>
// //                 {dropdownOpen && (
// //                   <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
// //                     <NavLink
// //                       to="/profile"
// //                       className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200"
// //                       onClick={() => setDropdownOpen(false)}
// //                     >
// //                       <FaUser className="mr-2 text-blue-600" /> Profile
// //                     </NavLink>
// //                     <button
// //                       onClick={handleLogout}
// //                       className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 transition duration-200 cursor-pointer"
// //                     >
// //                       <FaSignOutAlt className="mr-2" /> Logout
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             ) : (
// //               <button
// //                 onClick={() => navigate("/login")}
// //                 className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center transition duration-300"
// //               >
// //                 <FaUser className="mr-2" /> Login
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   FaBus,
//   FaUser,
//   FaBars,
//   FaTimes,
//   FaSignOutAlt,
//   FaUserShield,
// } from "react-icons/fa";
// import { useFirebase } from "../context/Firebase";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [role, setRole] = useState(localStorage.getItem("role") || null); // Load role instantly
//   const navigate = useNavigate();
//   const { user, getRole, logoutUser } = useFirebase();

//   // Load role from Firebase but use localStorage for instant UI updates
//   useEffect(() => {
//     const fetchRole = async () => {
//       if (!role && user) {
//         const fetchedRole = await getRole(user.uid);
//         setRole(fetchedRole);
//         localStorage.setItem("role", fetchedRole);
//       }
//     };
//     fetchRole();
//   }, [user,role,logoutUser]);

//   const handleLogout = async () => {
//     await logoutUser();
//     localStorage.removeItem("role"); // Remove role on logout
//     alert("Logged out successfully!");
//     navigate("/login");
//   };

//   return (
//     <nav className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md border-b border-gray-300 bg-white relative z-50">
//       <div className="flex items-center space-x-3">
//         <FaBus className="text-3xl text-blue-600" />
//         <h1 className="text-2xl font-bold text-gray-800">eBus Management </h1>
//       </div>

//       {role === "admin" || role === "driver" ? (
//         <div className="flex items-center space-x-4">
//           <NavLink
//             to={role === "admin" ? "/admin-dashboard" : "/driver-dashboard"}
//             className="text-lg text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
//           >
//             {role === "admin" ? (
//               <FaUserShield className="mr-2" />
//             ) : (
//               <FaBus className="mr-2" />
//             )}
//             {role === "admin" ? "Admin Panel" : "Driver Panel"}
//           </NavLink>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 flex items-center transition duration-300"
//           >
//             <FaSignOutAlt className="mr-2" /> Logout
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center space-x-4 lg:space-x-6">
//           <div className="lg:hidden">
//             <button
//               className="text-2xl focus:outline-none"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>

//           <div
//             className={`lg:flex items-center space-x-8 text-lg font-medium text-gray-700 ${
//               isOpen
//                 ? "block absolute top-16 left-0 w-full bg-white shadow-md"
//                 : "hidden"
//             } lg:relative lg:top-0 lg:w-auto lg:bg-transparent lg:shadow-none`}
//           >
//             {[
//               { path: "/", label: "Home" },
//               { path: "/about", label: "About" },
//               { path: "/services", label: "Services" },
//               { path: "/contact", label: "Contact" },
//             ].map(({ path, label }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 className="block px-4 py-2 lg:p-0 hover:text-blue-600 transition duration-300"
//                 onClick={() => setIsOpen(false)} // Close menu on click
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>

//           <div className="relative flex items-center space-x-4">
//             {user ? (
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center focus:outline-none"
//                 >
//                   <img
//                     src={
//                       user.photoURL ||
//                       "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                     }
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full border border-gray-300 object-cover hover:shadow-md"
//                   />
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
//                     <NavLink
//                       to="/profile"
//                       className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       <FaUser className="mr-2 text-blue-600" /> Profile
//                     </NavLink>
//                     <button
//                       onClick={handleLogout}
//                       className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 transition duration-200 cursor-pointer"
//                     >
//                       <FaSignOutAlt className="mr-2" /> Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate("/login")}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center transition duration-300"
//               >
//                 <FaUser className="mr-2" /> Login
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBus,
  FaUser,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";
import { useFirebase } from "../context/Firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logoutUser } = useFirebase();

  // Load role from localStorage
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  // Ensure role updates when user logs in/out
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
    console.log("Updated role:", storedRole); // Debugging log
  }, [user]); // Runs when `user` changes

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("role");
    setRole(null);
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 shadow-md border-b border-gray-300 bg-white relative z-50">
      <div className="flex items-center space-x-3">
        <FaBus className="text-3xl text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">eBus Management</h1>
      </div>

      {role === "admin" || role === "driver" ? (
        <div className="flex items-center space-x-4">
          <NavLink
            to={role === "admin" ? "/admin-dashboard" : "/driver-dashboard"}
            className="text-lg text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
          >
            {role === "admin" ? (
              <FaUserShield className="mr-2" />
            ) : (
              <FaBus className="mr-2" />
            )}
            {role === "admin" ? "Admin Panel" : "Driver Panel"}
          </NavLink>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 flex items-center transition duration-300"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4 lg:space-x-6">
          <button
            className="text-2xl lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`lg:flex items-center space-x-8 text-lg font-medium text-gray-700 ${
              isOpen
                ? "block absolute top-16 left-0 w-full bg-white shadow-md"
                : "hidden"
            } lg:relative lg:top-0 lg:w-auto lg:bg-transparent lg:shadow-none`}
          >
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className="block px-4 py-2 lg:p-0 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="relative flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-gray-300 object-cover hover:shadow-md"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-50">
                    <NavLink
                      to="/profile"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <FaUser className="mr-2 text-blue-600" /> Profile
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 transition duration-200 cursor-pointer"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 flex items-center transition duration-300"
              >
                <FaUser className="mr-2" /> Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
