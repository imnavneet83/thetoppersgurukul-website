import { useState } from "react";

export default function TheToppersGurukulWebsite() {
  const [page, setPage] = useState("home");

  const Header = () => (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex-1 text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-800 tracking-wide">
            The Toppers Gurukul
          </h1>
          <p className="text-cyan-800 font-semibold tracking-[0.25em] text-sm md:text-base mt-1">
            Where Wisdom Meets Success
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center px-6">
          <p className="text-sm text-gray-500">Call Us</p>
          <p className="text-lg md:text-xl font-bold text-cyan-800">
            +91 92040506080
          </p>
        </div>

        <div className="flex justify-end">
          <img
            src="/logo.png"
            alt="The Toppers Gurukul Logo"
            className="h-20 w-20 object-contain"
          />
        </div>
      </div>

      <div className="border-t bg-cyan-800 text-white">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-8 text-sm md:text-base font-medium">
          <button onClick={() => setPage('home')} className="hover:text-cyan-100 transition">Home</button>
          <button onClick={() => setPage('about')} className="hover:text-cyan-100 transition">About</button>
          <button onClick={() => setPage('courses')} className="hover:text-cyan-100 transition">Programs</button>
          <button onClick={() => setPage('ai-lab')} className="hover:text-cyan-100 transition">AI Lab</button>
          <button onClick={() => setPage('contact')} className="hover:text-cyan-100 transition">Contact</button>
        </nav>
      </div>
    </header>
  );

  const HomePage = () => (
    <section className="bg-gradient-to-br from-cyan-900 to-cyan-700 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-block bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
            Admissions Open for Session 2026-27
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Academic Excellence with Future-Ready Learning
          </h2>

          <p className="mt-8 text-lg text-cyan-100 leading-relaxed">
            Premium coaching institute for Class 6th to 12th with strong conceptual teaching, disciplined preparation and JEE / NEET foundation guidance.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/9192040506080"
              target="_blank"
              className="bg-white text-cyan-800 px-7 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
            >
              Enquire on WhatsApp
            </a>

            <button
              onClick={() => setPage("contact")}
              className="border border-white px-7 py-4 rounded-2xl font-semibold hover:bg-white hover:text-cyan-800 transition"
            >
              Visit Institute
            </button>
          </div>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-3xl backdrop-blur-md p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-8">Programs Offered</h3>

          <div className="grid grid-cols-2 gap-4 text-base">
            <div className="bg-white/10 rounded-2xl p-4">Class 6th</div>
            <div className="bg-white/10 rounded-2xl p-4">Class 7th</div>
            <div className="bg-white/10 rounded-2xl p-4">Class 8th</div>
            <div className="bg-white/10 rounded-2xl p-4">Class 9th</div>
            <div className="bg-white/10 rounded-2xl p-4">Class 10th</div>
            <div className="bg-white/10 rounded-2xl p-4">Class 11th</div>
            <div className="bg-white/10 rounded-2xl p-4">Class 12th</div>
            <div className="bg-white/10 rounded-2xl p-4">JEE / NEET Foundation</div>
          </div>
        </div>
      </div>
    </section>
  );

  const AboutPage = () => (
    <section className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
          alt="Students learning"
          className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        />

        <div>
          <h2 className="text-5xl font-bold text-cyan-800 leading-tight">
            Building Chapra's Next Generation of Toppers
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            The Toppers Gurukul is committed to quality education, conceptual clarity and future-focused learning for students from Class 6th to 12th.
          </p>
        </div>
      </div>
    </section>
  );

  const CoursesPage = () => (
    <section className="py-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-800">Academic Programs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-cyan-800">Middle School</h3>
            <p className="mt-5 text-gray-600">Classes 6th to 8th with strong fundamentals.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-cyan-800">Secondary</h3>
            <p className="mt-5 text-gray-600">Classes 9th and 10th board preparation.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-cyan-800">JEE / NEET Foundation</h3>
            <p className="mt-5 text-gray-600">Advanced preparation for competitive exams.</p>
          </div>
        </div>
      </div>
    </section>
  );

  const AILabPage = () => (
    <section className="py-24 px-6 bg-cyan-800 text-white min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Upcoming 25-PC Computer Lab & AI Learning Initiative
          </h2>

          <p className="mt-8 text-lg text-cyan-100 leading-relaxed">
            Students will receive free basic exposure to Artificial Intelligence and Data Science along with academics.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Computer Lab"
          className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
        />
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-cyan-800">Contact Us</h2>

        <div className="mt-12 bg-gray-50 rounded-3xl shadow-xl p-10">
          <p className="text-lg leading-relaxed text-gray-700">
            The Toppers Gurukul<br />
            Katahari Bagh Road,<br />
            In Front of Vaibhaw Palace,<br />
            Chapra, Saran, Bihar - 841301
          </p>

          <p className="mt-6 text-2xl font-bold text-cyan-800">
            +91 92040506080
          </p>

          <a
            href="https://wa.me/9192040506080"
            target="_blank"
            className="inline-block mt-8 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      {page === "home" && <HomePage />}
      {page === "about" && <AboutPage />}
      {page === "courses" && <CoursesPage />}
      {page === "ai-lab" && <AILabPage />}
      {page === "contact" && <ContactPage />}

      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />

            <div>
              <h3 className="text-white font-bold text-2xl">
                The Toppers Gurukul
              </h3>
              <p className="text-sm text-gray-400">
                Where Wisdom Meets Success
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center md:text-right">
            © 2026 The Toppers Gurukul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
