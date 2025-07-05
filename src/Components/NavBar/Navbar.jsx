import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";
import logo from "./logo.png";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  {
    name: "Products",
    mega: true,
    subMenu: [
      {
        title: "Fire Extinguishers",
        items: ["ABC Type", "CO2 Type", "Water Type", "Foam Type"]
      },
      {
        title: "Fire Alarm Systems",
        items: ["Conventional", "Addressable", "Wireless"]
      },
      {
        title: "Exit & Emergency Lighting",
        items: ["LED Exit Signs", "Emergency Lights"]
      },
      {
        title: "Accessories",
        items: ["Hoses", "Nozzles", "Brackets"]
      }
    ]
  },
  { name: "Services", link: "#services" },
  { name: "Training", link: "#training" },
  { name: "Contact", link: "#contact" }
];

const isMobile = () => window.innerWidth <= 900;

const Navbar = () => {
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
  const handleLinkClick = () => {
    if (mobile) {
      setShowMenu(false);
      setShowMega(false);
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

  return (
    <nav
      className={`navbar${showNavbar ? " show" : " hide"}`}
      ref={navRef}
      style={{ background: "#fff" }}
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Fire Equipment & Services" />
        </a>
        <div className="navbar-hamburger" onClick={() => setShowMenu(!showMenu)}>
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
                  className={`navbar-item mega-menu-parent${showMega && mobile ? " open" : ""}`}
                  key={item.name}
                  onMouseEnter={() => !mobile && setShowMega(true)}
                  onMouseLeave={() => !mobile && setShowMega(false)}
                >
                  <span
                    onClick={mobile ? handleMegaToggle : undefined}
                    tabIndex={0}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={showMega}
                  >
                    {item.name} <FaChevronDown className={`chevron${showMega && mobile ? " rotate" : ""}`} />
                  </span>
                  {/* Accordion style for mobile */}
                  {mobile ? (
                    <div className={`mega-menu-accordion${showMega ? " show" : ""}`}>
                      <div className="mega-menu-content">
                        {item.subMenu.map((col) => (
                          <div className="mega-menu-col" key={col.title}>
                            <h4>{col.title}</h4>
                            <ul>
                              {col.items.map((sub, i) => (
                                <li key={i}>
                                  <a href="#products" onClick={handleLinkClick}>{sub}</a>
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
                                  <a href="#products" onClick={handleLinkClick}>{sub}</a>
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
                <li className="navbar-item" key={item.name}>
                  <a href={item.link} onClick={handleLinkClick}>{item.name}</a>
                </li>
              );
            }
          })}
          <li className="navbar-item navbar-contact">
            <a href="tel:+911234567890" className="contact-btn" onClick={handleLinkClick}>
              <FaPhoneAlt /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;