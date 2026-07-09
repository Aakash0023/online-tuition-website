import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Class 10 Student",
    review:
      "The classes helped me improve my understanding of Mathematics. Weekly tests and doubt sessions made a huge difference in my scores.",
  },
  {
    name: "Priya Nair",
    role: "Parent",
    review:
      "The teaching approach is excellent. My daughter became more confident in Science and her marks improved consistently.",
  },
  {
    name: "Arjun Kumar",
    role: "Class 12 Student",
    review:
      "Every concept is explained clearly. The notes, assignments, and regular guidance helped me prepare well for my exams.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            What Students & Parents Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            The trust of our students and parents motivates us to deliver the
            best learning experience every day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-8 text-slate-600">"{item.review}"</p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-lg font-semibold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
