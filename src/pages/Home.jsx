import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CauseCard from "../components/CauseCard";
import { causes } from "../data/content";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="section container">
        <h2 className="title">Featured Causes</h2>
        <div className="grid">
          {causes.map((c) => <CauseCard key={c.id} cause={c} />)}
        </div>
      </section>
      <section className="cta">
        <h2>Be the reason someone smiles today</h2>
        <Link to="/donate" className="btn btn-light">Donate Now</Link>
      </section>
    </>
  );
}