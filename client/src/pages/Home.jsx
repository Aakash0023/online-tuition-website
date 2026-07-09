import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import Subjects from "../components/home/Subjects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyChooseUs />
        <Subjects />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
