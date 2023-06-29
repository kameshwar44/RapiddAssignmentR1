import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link className="title" to="/"></Link>
      <div className="menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink className="Nav1"  to="/home">
            Ipsum
          </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className="Nav2" activeClassName="active" to="/about">
            Ipsum
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <NavLink className="Nav3" activeClassName="active" to="/contact">
            Ipsum
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li>
          <NavLink className="Nav4" activeClassName="active" to="/Call">
            Ipsum
              </NavLink>
          <ul>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">link</NavLink>
              <ul>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
                <li>
                  <NavLink to="#">link</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = (buttonName) => {
//     if (activeButton === buttonName) {
//       setDropdownOpen(!dropdownOpen);
//     } else {
//       setDropdownOpen(true);
//     }
//     setActiveButton(buttonName);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//     setDropdownOpen(false);
//     setActiveButton(null);
//   };

//   return (
//     <nav>
//       <Link className="title" to="/" onClick={closeMenu}></Link>
//       <div className="menu" onClick={toggleMenu}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink
//             className={`dropbtn ${activeButton === "Nav1" && "active"}`}
//             onClick={() => toggleDropdown("Nav1")}
//           >
//             Ipsum
//           </NavLink>
//           {dropdownOpen && activeButton === "Nav1" && (
//             <div className="dropdown-content">
//               <NavLink to="/dropdown1" onClick={closeMenu}>
//                link
//               </NavLink>
//               <NavLink to="/dropdown2" onClick={closeMenu}>
//                 link
//               </NavLink>
//               <NavLink to="/dropdown3" onClick={closeMenu}>
//                 link
//               </NavLink>
//             </div>
//           )}
//         </li>

//         <li>
//           <NavLink
//             className={`dropbtn ${activeButton === "Nav2" && "active"}`}
//             onClick={() => toggleDropdown("Nav2")}
//           >
//             Ipsum
//           </NavLink>
//           {dropdownOpen && activeButton === "Nav2" && (
//             <div className="dropdown-content">
//               <NavLink to="/dropdown4" onClick={closeMenu}>
//                 link
//               </NavLink>
//               <NavLink to="/dropdown5" onClick={closeMenu}>
//                 link
//               </NavLink>
//               <NavLink to="/dropdown6" onClick={closeMenu}>
//                 link
//               </NavLink>
//             </div>
//           )}
//         </li>

//         <li>
//           <NavLink
//             className={`dropbtn ${activeButton === "Nav3" && "active"}`}
//             onClick={() => toggleDropdown("Nav3")}
//           >
//             Ipsum
//           </NavLink>
//           {dropdownOpen && activeButton === "Nav3" && (
//             <div className="dropdown-content">
//               <NavLink to="/dropdown7" onClick={closeMenu}>
//                 link
//               </NavLink>
//               <NavLink to="/dropdown8" onClick={closeMenu}>
//                link
//               </NavLink>
//               <NavLink to="/dropdown9" onClick={closeMenu}>
//                 link
//               </NavLink>
//             </div>
//           )}
//         </li>

//         <li>
//         <NavLink
//             className={`dropbtn ${activeButton === "Nav4" && "active"}`}
//             onClick={() => toggleDropdown("Nav4")}
//           >
//             Ipsum
//           </NavLink>
//           {dropdownOpen && activeButton === "Nav4" && (
//             <div className="dropdown-content">
//               <a to="/dropdown7" onClick={closeMenu}>
//                 link
//               </a>
//               <a to="/dropdown8" onClick={closeMenu}>
//                link
//               </a>
//               <a to="/dropdown9" onClick={closeMenu}>
//                link
//               </a>
//             </div>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
