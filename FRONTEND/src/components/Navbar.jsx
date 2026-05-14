import "../style/navbar.css";
import { useState, lazy, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import logo from "../assets/logo/navbar-jamia-logo.png";

/* =========================
   LAZY PAGES
========================= */
const Home = lazy(() => import("../pages/home/Home"));
const Courses = lazy(() => import("../pages/Course"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
const Contact = lazy(() => import("../pages/Contact"));
const About = lazy(() => import("../pages/about/About"));

const Navbar = () => {

  /* =========================
     STATES
  ========================= */
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================
     CLOSE MOBILE MENU
  ========================= */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}
      <header className="navbar">
        <div className="navbar-container">

          {/* =========================
              LOGO
          ========================= */}
          <div className="navbar-logo">
            <img src={logo} alt="Jamia Academy" />
            <p>Learn • Create • Achieve</p>
          </div>

          {/* =========================
              HAMBURGER
              ✅ Mobile pe dikhega
              Desktop pe hidden CSS se
          ========================= */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* =========================
              NAV LINKS
              Mobile pe hamburger click pe
              slide down hoga
          ========================= */}
          <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>

            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/courses" onClick={closeMenu}>
              Courses
            </NavLink>

            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            {/* ✅ Mobile Search — Menu ke ANDAR */}
            {/* Desktop pe CSS se hidden hoga */}
            {/* Mobile menu open hone pe dikhega */}
            <div className="mobile-search-wrapper">
              <span className="mobile-search-icon">
                <FiSearch />
              </span>
              <input
                type="text"
                placeholder="Search courses..."
              />
            </div>

          </nav>

          {/* =========================
              SEARCH — DESKTOP ONLY
              Mobile pe CSS se hide hoga
          ========================= */}
          <div className={`search-wrapper ${searchOpen ? "active" : ""}`}>
            <input
              type="text"
              placeholder="Search courses..."
              className="search-input"
            />
            <button
              className="search-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <FiSearch />
            </button>
          </div>

        </div>
      </header>

      {/* =========================
          ROUTES
      ========================= */}
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Navbar;