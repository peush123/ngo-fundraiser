import { Link } from "react-router-dom";
import { ngo } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>{ngo.name}</h4>
          <p>{ngo.tagline}</p>
          <small>{ngo.regNo}</small>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/about">About</Link>
          <Link to="/causes">Causes</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{ngo.email}</p>
          <p>{ngo.phone}</p>
          <p>{ngo.address}</p>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {ngo.name}. All rights reserved.</p>
    </footer>
  );
}