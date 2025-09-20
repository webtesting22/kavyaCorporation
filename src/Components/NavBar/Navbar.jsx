import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.jpg";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Products",
    mega: true,
    link: "/products",
    subMenu: [
      {
        title: "Extinguishers",
        items: [
          { name: "ABC Powder", filter: "ABC Powder Fire Extinguisher" },
          { name: "CO2", filter: "CO2 Fire Extinguisher" },
          { name: "Water", filter: "Water Fire Extinguisher" },
          { name: "Foam", filter: "Foam Fire Extinguisher" },
          { name: "Clean Agent", filter: "Clean Agent Fire Extinguisher" },
        ],
      },
      {
        title: "Hydrant Systems",
        items: [
          { name: "Fire Hydrant System", filter: "Fire Hydrant System" },
          { name: "Pillar Hydrant", filter: "Pillar Hydrant" },
        ],
      },
      {
        title: "Hose Reels",
        items: [
          { name: "Fire Hose Reel System", filter: "Fire Hose Reel System" },
          { name: "Canvas Fire Hose", filter: "Canvas Fire Hose" },
        ],
      },
      {
        title: "Alarm & Detection",
        items: [
          { name: "Control Panel", filter: "Fire Alarm Control Panel" },
          { name: "Smoke Detector", filter: "Smoke Detector" },
          { name: "Heat Detector", filter: "Heat Detector" },
          { name: "Hooter-Sounder", filter: "Hooter-Sounder" },
        ],
      },
      {
        title: "Lighting",
        items: [
          { name: "Exit-Emergency Light", filter: "Exit-Emergency Light" },
        ],
      },
      {
        title: "Suppression Systems",
        items: [
          {
            name: "Kitchen Suppression",
            filter: "Kitchen Fire Suppression System",
          },
          { name: "Fire Sprinkler", filter: "Fire Sprinkler System" },
          {
            name: "Gas-Based Suppression",
            filter: "Gas-Based Suppression System",
          },
        ],
      },
      {
        title: "Accessories",
        items: [
          { name: "Fire Blanket", filter: "Fire Blanket" },
          { name: "Safety Signage", filter: "Safety Signage" },
          { name: "Firefighter PPE Kit", filter: "Firefighter PPE Kit" },
        ],
      },
    ],
  },
  // { name: "Services", link: "#services" },
  // { name: "Training", link: "#training" },
  // { name: "Contact", link: "#contact" },
];

const isMobile = () => window.innerWidth <= 900;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [mobile, setMobile] = useState(isMobile());
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
      if (window.innerWidth > 900) {
        setShowMenu(false);
        setShowMega(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on link click (mobile)
  const handleLinkClick = (link, filter = null) => {
    if (mobile) {
      setShowMenu(false);
      setShowMega(false);
    }
    if (link && link !== "#") {
      if (filter) {
        navigate(`${link}?filter=${encodeURIComponent(filter)}`);
      } else {
        navigate(link);
      }
    }
  };

  // Toggle mega menu for mobile only
  const handleMegaToggle = (e) => {
    if (mobile) {
      e.stopPropagation();
      setShowMega((prev) => !prev);
    }
  };

  // Close drawer with close button
  const handleDrawerClose = () => {
    setShowMenu(false);
    setShowMega(false);
  };

  // Check if current page is active
  const isActivePage = (link) => {
    if (link === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(link);
  };

  return (
    <nav
      className={`navbar${showNavbar ? " show" : " hide"}`}
      ref={navRef}
      style={{ background: "#fff" }}
    >
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleLinkClick("/")}>
          <img src={logo} alt="Fire Equipment & Services" />
        </div>
        <div
          className="navbar-hamburger"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <ul className={`navbar-menu${showMenu ? " active" : ""}`}>
          {/* Drawer close button for mobile */}
          {mobile && (
            <li className="navbar-drawer-close">
              <button onClick={handleDrawerClose} aria-label="Close Menu">
                <FaTimes size={28} />
              </button>
            </li>
          )}
          {menuItems.map((item, idx) => {
            if (item.mega) {
              // Accordion for mobile, overlay for desktop
              return (
                <li
                  className={`navbar-item mega-menu-parent${
                    showMega && mobile ? " open" : ""
                  }${isActivePage(item.link) ? " active" : ""}`}
                  key={item.name}
                  onMouseEnter={() => !mobile && setShowMega(true)}
                  onMouseLeave={() => !mobile && setShowMega(false)}
                >
                  <span
                    onClick={
                      mobile
                        ? handleMegaToggle
                        : () => handleLinkClick(item.link)
                    }
                    tabIndex={0}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={showMega}
                  >
                    {item.name}{" "}
                    <FaChevronDown
                      className={`chevron${
                        showMega && mobile ? " rotate" : ""
                      }`}
                    />
                  </span>
                  {/* Accordion style for mobile */}
                  {mobile ? (
                    <div
                      className={`mega-menu-accordion${
                        showMega ? " show" : ""
                      }`}
                    >
                      <div className="mega-menu-content">
                        {item.subMenu.map((col) => (
                          <div className="mega-menu-col" key={col.title}>
                            <h4>{col.title}</h4>
                            <ul>
                              {col.items.map((sub, i) => (
                                <li key={i}>
                                  <span
                                    onClick={() =>
                                      handleLinkClick("/products", sub.filter)
                                    }
                                  >
                                    {sub.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={`mega-menu${showMega ? " show" : ""}`}>
                      <div className="mega-menu-content">
                        {item.subMenu.map((col) => (
                          <div className="mega-menu-col" key={col.title}>
                            <h4>{col.title}</h4>
                            <ul>
                              {col.items.map((sub, i) => (
                                <li key={i}>
                                  <span
                                    onClick={() =>
                                      handleLinkClick("/products", sub.filter)
                                    }
                                  >
                                    {sub.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            } else {
              return (
                <li
                  className={`navbar-item${
                    isActivePage(item.link) ? " active" : ""
                  }`}
                  key={item.name}
                >
                  <span onClick={() => handleLinkClick(item.link)}>
                    {item.name}
                  </span>
                </li>
              );
            }
          })}
          <li className="navbar-item navbar-contact">
            <a
              href="tel:+919327337171"
              className="contact-btn"
              onClick={() => handleLinkClick("#")}
            >
              <FaPhoneAlt /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
