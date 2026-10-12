import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { causes, ngo } from "../data/content";

const presets = [500, 1000, 2500, 5000];

export default function DonateForm() {
  const [params] = useSearchParams();
  const [amount, setAmount] = useState(1000);
  const [causeId, setCauseId] = useState(params.get("cause") || "");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const pay = (e) => {
    e.preventDefault();
    if (!amount || amount < 10) return setStatus({ type: "error", msg: "Minimum donation is ₹10." });
    if (!window.Razorpay) return setStatus({ type: "error", msg: "Payment gateway failed to load. Refresh and retry." });

    const cause = causes.find((c) => String(c.id) === String(causeId));
    const rzp = new window.Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: Number(amount) * 100,
      currency: "INR",
      name: ngo.name,
      description: cause ? cause.title : "General Donation",
      prefill: { name: form.name, email: form.email, contact: form.phone },
      theme: { color: "#e4572e" },
      handler: (res) =>
        setStatus({
          type: "success",
          msg: `Thank you ${form.name}! Payment ID: ${res.razorpay_payment_id}`,
        }),
    });
    rzp.on("payment.failed", () => setStatus({ type: "error", msg: "Payment failed. Please try again." }));
    rzp.open();
  };

  return (
    <form className="donate-form" onSubmit={pay}>
      <h3>Choose Amount (₹)</h3>
      <div className="amount-grid">
        {presets.map((p) => (
          <button type="button" key={p} className={`chip ${amount === p ? "active" : ""}`} onClick={() => setAmount(p)}>
            ₹{p.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
      <input type="number" min="10" placeholder="Custom amount" value={amount}
        onChange={(e) => setAmount(e.target.value)} />

      <select value={causeId} onChange={(e) => setCauseId(e.target.value)}>
        <option value="">General Donation</option>
        {causes.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
      </select>

      <input name="name" placeholder="Full name" required value={form.name} onChange={onChange} />
      <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} />
      <input name="phone" type="tel" placeholder="Phone" required value={form.phone} onChange={onChange} />

      <button className="btn" type="submit">Donate ₹{Number(amount || 0).toLocaleString("en-IN")}</button>
      {status && <p className={`msg ${status.type}`}>{status.msg}</p>}
      <small>Secure payment by Razorpay. Tax receipt (80G) will be emailed.</small>
    </form>
  );
}