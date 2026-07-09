import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold">
              Online
              <span className="text-blue-400"> Teaching</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Helping students achieve academic excellence through interactive
              online learning, personal guidance, and consistent practice.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#subjects" className="hover:text-white">
                  Subjects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact</h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@onlineteaching.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              <a className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600">
                <Facebook size={20} />
              </a>

              <a className="rounded-xl bg-slate-800 p-3 transition hover:bg-pink-600">
                <Instagram size={20} />
              </a>

              <a className="rounded-xl bg-slate-800 p-3 transition hover:bg-sky-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Online Teaching. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
