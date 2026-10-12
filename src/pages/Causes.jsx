import CauseCard from "../components/CauseCard";
import { causes } from "../data/content";

export default function Causes() {
  return (
    <section className="section container">
      <h1 className="title">Our Causes</h1>
      <div className="grid">
        {causes.map((c) => <CauseCard key={c.id} cause={c} />)}
      </div>
    </section>
  );
}