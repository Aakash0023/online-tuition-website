import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-28"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-20 px-6 lg:flex-row lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Online Teaching Platform
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            Learn
            <span className="text-blue-700"> Smarter.</span>
            <br />
            Build Your
            <span className="text-amber-500"> Future.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Personalized online coaching with live classes, weekly assessments,
            concept-based learning, and continuous guidance to help every
            student achieve academic excellence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Book Free Demo
              <ArrowRight size={18} />
            </a>

            <a
              href="#subjects"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
            >
              Explore Subjects
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">500+</h2>
              <p className="text-slate-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">95%</h2>
              <p className="text-slate-500">Success Rate</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">5+</h2>
              <p className="text-slate-500">Years</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-xl"
        >
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="rounded-[28px] bg-gradient-to-br from-blue-700 via-indigo-600 to-blue-500 p-8 text-white">
              <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                Student Dashboard
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                Track Learning Progress
              </h3>

              <div className="mt-10 space-y-4">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  📚 Live Interactive Classes
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  📝 Weekly Practice Tests
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  👨‍🏫 Personal Mentoring
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  📈 Progress Tracking
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-xl">
              <h4 className="text-3xl font-bold text-slate-900">4.9 ★</h4>
              <p className="text-sm text-slate-500">Student Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
