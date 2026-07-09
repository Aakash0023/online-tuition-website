import {
  BookOpen,
  GraduationCap,
  MonitorSmartphone,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Teaching",
    description:
      "Concept-focused learning designed to help students understand, practice, and excel in every subject.",
  },
  {
    icon: MonitorSmartphone,
    title: "Live Online Classes",
    description:
      "Interactive online sessions with real-time explanations, discussions, and doubt-solving.",
  },
  {
    icon: BookOpen,
    title: "Weekly Assessments",
    description:
      "Regular tests and assignments to monitor progress and strengthen concepts.",
  },
  {
    icon: Users,
    title: "Personal Guidance",
    description:
      "Individual attention and continuous support to help every student improve confidently.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Learning Beyond the Classroom
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We believe every student has the potential to excel with the right
            guidance, consistent practice, and a supportive learning
            environment. Our classes are designed to simplify concepts and build
            confidence through interactive teaching.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
