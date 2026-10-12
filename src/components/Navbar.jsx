import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ngo } from "../data/content";
import GoogleTranslate from "./GoogleTranslate";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/causes", label: "Causes" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" translate="no" onClick={() => setOpen(false)}>
          ❤️ {ngo.name}
        </Link>

        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}

          <Link to="/donate" className="btn btn-small" onClick={() => setOpen(false)}>
            Donate Now
          </Link>

          <GoogleTranslate />
        </nav>
      </div>
    </header>
  );
}