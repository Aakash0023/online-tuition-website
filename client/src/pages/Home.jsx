import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section
          id="home"
          className="flex min-h-screen items-center justify-center bg-slate-50"
        >
          <div className="px-6 text-center">
            <h1 className="mb-6 text-5xl font-bold text-slate-900 md:text-7xl">
              Learn Smarter.
              <br />
              Score Better.
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Interactive online classes designed to help students build
              confidence, improve concepts, and achieve excellent academic
              results.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Book Free Demo
              </a>

              <a
                href="#subjects"
                className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Explore Subjects
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
