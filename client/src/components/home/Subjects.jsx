import { motion } from "framer-motion";
import {
  Calculator,
  Atom,
  FlaskConical,
  Laptop,
  BookOpen,
  Languages,
  ArrowRight,
} from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    title: "Mathematics",
    class: "Class 6 - 12",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Atom,
    title: "Physics",
    class: "Class 11 - 12",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: FlaskConical,
    title: "Chemistry",
    class: "Class 9 - 12",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: BookOpen,
    title: "Biology",
    class: "Class 9 - 12",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Laptop,
    title: "Computer Science",
    class: "Class 9 - 12",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Languages,
    title: "English",
    class: "Class 6 - 12",
    color: "from-amber-500 to-orange-600",
  },
];

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Subjects
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Learn From The Best
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Carefully designed courses that help students understand concepts,
            build confidence and score better.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl"
              >
                <div
                  className={`bg-gradient-to-br ${subject.color} p-8 text-white`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold">{subject.title}</h3>

                  <p className="mt-3 opacity-90">{subject.class}</p>
                </div>

                <div className="p-8">
                  <p className="leading-8 text-slate-600">
                    Interactive live classes with concept-based teaching,
                    assignments, regular assessments and doubt-solving sessions.
                  </p>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-blue-700 transition group-hover:gap-4">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
