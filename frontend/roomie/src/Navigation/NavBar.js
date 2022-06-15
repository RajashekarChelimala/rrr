// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../context/auth-context";
// import "./NavBar.css";
// const NavBar = (props) => {
//   const auth = useContext(AuthContext);

//   return (
//     <nav id="nav_navbar">
//       <ul className="navbar">
//         <li>
//           {" "}
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           {" "}
//           <Link to="/contactus">Contact Us</Link>
//         </li>
//         {!auth.isLoggedIn && (
//           <li>
//             <Link to="/myaccount">My Account</Link>
//           </li>
//         )}
//         {!auth.isLoggedIn && (
//           <li>
//             <Link to="/addnewroom">Add New Room</Link>
//           </li>
//         )}
//         {auth.isLoggedIn && (
//           <li>
//             <Link to="/">Log Out</Link>
//           </li>
//         )}
//         {auth.isLoggedIn && (
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//         {auth.isLoggedIn && (
//           <li>
//             <Link to="/signup">Sign Up</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };
// export default NavBar;
