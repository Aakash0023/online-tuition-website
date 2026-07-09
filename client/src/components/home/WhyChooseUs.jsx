import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  BookOpen,
  Users,
  ClipboardCheck,
  MessageCircle,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Live Online Classes",
    description:
      "Interactive sessions with real-time explanations and discussions.",
  },
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description: "Understand topics deeply instead of memorizing answers.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Tests",
    description: "Regular assessments to measure progress and improve scores.",
  },
  {
    icon: MessageCircle,
    title: "Doubt Support",
    description: "Quick doubt-solving sessions to keep learning uninterrupted.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description:
      "Small batches ensure every student receives individual guidance.",
  },
  {
    icon: Trophy,
    title: "Result Oriented",
    description: "Structured preparation focused on academic improvement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything Your Child Needs To Succeed
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A learning experience designed to build confidence, improve
            understanding, and deliver consistent academic results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:border-blue-600 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
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
