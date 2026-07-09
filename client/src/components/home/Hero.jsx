import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Students",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
  {
    value: "15+",
    label: "Courses",
  },
  {
    value: "5+",
    label: "Years",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 pt-28">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 pb-16 lg:flex-row lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Online Classes for School Students
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Learn
            <span className="text-blue-700"> Smarter.</span>
            <br />
            Score
            <span className="text-amber-500"> Higher.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Interactive online classes designed to build confidence, strengthen
            concepts, and help students achieve academic success through
            personalized learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Book Free Demo
              <ArrowRight size={18} />
            </a>

            <a
              href="#subjects"
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              <PlayCircle size={18} />
              Explore Subjects
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-3xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex w-full max-w-lg justify-center"
        >
          <div className="relative w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-600 p-10 text-white">
              <h3 className="text-3xl font-bold">Start Learning Today</h3>

              <p className="mt-5 leading-7 text-blue-100">
                Personalized online coaching for students with live classes,
                weekly assessments, doubt-solving sessions, and continuous
                progress tracking.
              </p>

              <div className="mt-10 space-y-4">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  Live Interactive Classes
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  Weekly Practice Tests
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  Dedicated Doubt Support
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  Parent Progress Updates
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
