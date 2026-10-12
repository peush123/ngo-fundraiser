import { useState } from "react";
import { ngo } from "../data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    });
    if (res.ok) { setSent(true); e.target.reset(); }
  };

  return (
    <section className="section container narrow">
      <h1 className="title">Contact Us</h1>
      <p style={{ textAlign: "center" }}>{ngo.email} | {ngo.phone}</p>
      <form className="donate-form" onSubmit={submit}>
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
        <textarea name="message" rows="5" placeholder="Message" required />
        <button className="btn" type="submit">Send Message</button>
        {sent && <p className="msg success">Message sent. We'll get back to you soon!</p>}
      </form>
    </section>
  );
}