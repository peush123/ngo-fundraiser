import { Link } from "react-router-dom";

export default function CauseCard({ cause }) {
  const pct = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
  return (
    <article className="card">
      <img src={cause.image} alt={cause.title} loading="lazy" />
      <div className="card-body">
        <h3>{cause.title}</h3>
        <p>{cause.desc}</p>
        <div className="progress"><div style={{ width: `${pct}%` }} /></div>
        <div className="progress-text">
          <span>Raised ₹{cause.raised.toLocaleString("en-IN")}</span>
          <span>Goal ₹{cause.goal.toLocaleString("en-IN")}</span>
        </div>
        <Link to={`/donate?cause=${cause.id}`} className="btn btn-small">Donate</Link>
      </div>
    </article>
  );
}