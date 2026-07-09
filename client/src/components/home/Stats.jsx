import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    title: "Students Guided",
  },
  {
    icon: GraduationCap,
    value: "95%",
    title: "Success Rate",
  },
  {
    icon: BookOpen,
    value: "1000+",
    title: "Classes Conducted",
  },
  {
    icon: Award,
    value: "5+",
    title: "Years of Teaching",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted Learning
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Helping Students Achieve Better Results
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our teaching approach focuses on concept clarity, consistent
            practice, and individual attention to help every student perform
            with confidence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
