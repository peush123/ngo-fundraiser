import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}