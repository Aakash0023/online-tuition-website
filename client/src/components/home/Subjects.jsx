import { motion } from "framer-motion";
import {
  Calculator,
  Atom,
  FlaskConical,
  BookOpen,
  Laptop,
  Languages,
} from "lucide-react";

const subjects = [
  {
    title: "Mathematics",
    classes: "Class 6 - 12",
    description:
      "Build strong fundamentals with concept-based learning and regular practice sessions.",
    icon: Calculator,
  },
  {
    title: "Physics",
    classes: "Class 11 - 12",
    description:
      "Understand every concept through interactive explanations and numerical practice.",
    icon: Atom,
  },
  {
    title: "Chemistry",
    classes: "Class 9 - 12",
    description:
      "Master physical, organic, and inorganic chemistry with structured learning.",
    icon: FlaskConical,
  },
  {
    title: "Biology",
    classes: "Class 9 - 12",
    description:
      "Learn important concepts with diagrams, notes, and exam-oriented preparation.",
    icon: BookOpen,
  },
  {
    title: "Computer Science",
    classes: "Class 9 - 12",
    description:
      "Programming fundamentals, logic building, and practical coding sessions.",
    icon: Laptop,
  },
  {
    title: "English",
    classes: "Class 6 - 12",
    description:
      "Improve grammar, vocabulary, comprehension, and communication skills.",
    icon: Languages,
  },
];

export default function Subjects() {
  return (
    <section id="subjects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Subjects
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Courses Designed for Academic Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Personalized online coaching that focuses on concept clarity,
            consistent practice, and measurable improvement for every student.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white transition group-hover:bg-slate-900">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {subject.title}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {subject.classes}
                </span>

                <p className="mt-6 leading-7 text-slate-600">
                  {subject.description}
                </p>

                <button className="mt-8 rounded-full bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
