import { useState } from "react";

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What is this app?",
      a: "This is a tech support platform to help users.",
    },
    {
      q: "Is it free?",
      a: "Yes, completely free to use.",
    },
  ];

  return (
    <div>
      <h1>FAQ</h1>

      {faqs.map((item, index) => (
        <div key={index} className="card">
          <h3 onClick={() => setOpen(open === index ? null : index)}>
            {item.q}
          </h3>
          {open === index && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}