import DonateForm from "../components/DonateForm";

export default function Donate() {
  return (
    <section className="section container narrow">
      <h1 className="title">Make a Donation</h1>
      <p style={{ textAlign: "center", marginBottom: 24 }}>
        100% secure. UPI, cards and net banking accepted.
      </p>
      <DonateForm />
    </section>
  );
}