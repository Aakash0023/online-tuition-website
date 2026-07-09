import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Are the classes conducted online?",
    answer:
      "Yes. All classes are conducted live online, allowing students to learn from anywhere.",
  },
  {
    question: "Do you provide a free demo class?",
    answer: "Yes. Students can attend a free demo class before enrolling.",
  },
  {
    question: "Will notes and recordings be provided?",
    answer:
      "Yes. Study materials, notes, and recordings are shared whenever required.",
  },
  {
    question: "How are doubts cleared?",
    answer:
      "Dedicated doubt-solving sessions are conducted regularly, and students can ask questions during live classes.",
  },
  {
    question: "How can I enroll?",
    answer:
      "Simply fill out the enquiry form and we'll contact you with all the details.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before joining our classes.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between bg-white px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="border-t border-slate-200 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
