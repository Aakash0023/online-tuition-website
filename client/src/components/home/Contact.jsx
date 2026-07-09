import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Book Your Free Demo Class
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Fill out the form below and we'll get in touch with you shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-3xl bg-white p-8 shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              name="className"
              placeholder="Class"
              value={form.className}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600 md:col-span-2"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600 md:col-span-2"
            />
          </div>

          <button className="mt-8 w-full rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
