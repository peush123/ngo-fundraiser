import { Link } from "react-router-dom";
import { ngo } from "../data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>{ngo.tagline}</h1>
        <p>
          Join us in giving education, food and healthcare to those who need it most.
          Your donation goes directly to the field.
        </p>
        <div className="hero-buttons">
          <Link to="/donate" className="btn">Donate Now</Link>
          <Link to="/causes" className="btn btn-outline">Our Causes</Link>
        </div>
      </div>
    </section>
  );
}