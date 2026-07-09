import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[130px]" />
      <div className="absolute right-0 top-32 h-[350px] w-[350px] rounded-full bg-indigo-200/40 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Online Coaching Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
            Learn
            <span className="text-blue-600"> Smarter.</span>
            <br />
            Achieve
            <span className="text-amber-500"> More.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Interactive online classes that focus on concept clarity,
            confidence, and better academic performance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Book Free Demo
              <ArrowRight size={18} />
            </a>

            <a
              href="#subjects"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore Subjects
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-slate-500">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-slate-500">Results</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-slate-500">Years</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="rounded-[28px] bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 p-8 text-white">
              <h2 className="text-3xl font-bold">Your Learning Dashboard</h2>

              <div className="mt-10 space-y-5">
                {[
                  "Live Interactive Classes",
                  "Weekly Assessments",
                  "Personal Mentoring",
                  "Doubt Solving Sessions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                  >
                    <CheckCircle size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-5 shadow-xl">
              <p className="text-sm text-slate-500">Student Rating</p>
              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                ⭐ 4.9/5
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
