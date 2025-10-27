import type { MetaFunction } from "@vercel/remix";
import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import { projects } from "~/data/projects";
import Modal from "~/components/Modal";
import ContactCard from "~/components/ContactCard";
import { contact } from "~/data/contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Zoe Homan - Portfolio" },
    { name: "description", content: "Student portfolio showcasing creative work" },
  ];
};

export default function Index() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentProjectIndex];
  const location = useLocation();

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream py-3 px-8">
        <nav className="flex items-center gap-8">
          <a href="#home" className="font-semibold text-gray-800 hover:text-gray-600 transition-colors">
            Zoe Homan
          </a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
            projects
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            about
          </a>
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            contact
          </button>
        </nav>
      </header>

      <main id="pageContainer" className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Landing Section */}
        <section
          id="home"
          className="relative h-screen gradient-hero flex items-center justify-center overflow-hidden snap-start"
        >
        {/* Hero Text with per-letter gradient streaks (varied gaps/offsets) */}
        <h1 className="text-8xl md:text-9xl font-display font-bold text-white tracking-tight z-10">
          <span>
            <span className="streak-letter streak-gap-18 streak-offset-6" data-letter="Z">Z</span>
            <span className="streak-letter streak-gap-22 streak-offset-14" data-letter="o">o</span>
            <span className="streak-letter streak-gap-20 streak-offset-8" data-letter="e">e</span>
            <span> </span>
            <span className="streak-letter streak-gap-24 streak-offset-10" data-letter="H">H</span>
            <span className="streak-letter streak-gap-16 streak-offset-16" data-letter="o">o</span>
            <span className="streak-letter streak-gap-26 streak-offset-4" data-letter="m">m</span>
            <span className="streak-letter streak-gap-18 streak-offset-20" data-letter="a">a</span>
            <span className="streak-letter streak-gap-24 streak-offset-22" data-letter="n">n</span>
          </span>
        </h1>

        {/* Cream Circle Arc at Bottom */}
        <button className="bottom-arc z-20" onClick={scrollToProjects} aria-label="See my work">
          <div className="relative z-10 flex flex-col items-center gap-3 text-gray-800">
            <p className="text-[1.7rem] md:text-[2.05rem] lg:text-[2.7rem] font-bold">See My Work</p>
            <svg
              className="w-8 h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
        </section>

        {/* Shared giant circle positioned between sections for seamless look */}
        <div className="giant-circle" />

        {/* Projects Section */}
        <section
          id="projects"
          className="relative min-h-screen gradient-hero py-32 px-8 flex flex-col items-center justify-center overflow-hidden snap-start"
        >
        {/* circle is handled by the shared element above */}

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-display font-bold text-gray-800 text-center mb-16">
            Projects
          </h2>

          {/* Carousel */}
          <div className="flex items-center justify-center gap-8">
            {/* Left Arrow */}
            <button
              onClick={prevProject}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-800"
              aria-label="Previous project"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Project Card as Link to details (modal route) */}
            <Link
              to={`/projects/${currentProject.slug}`}
              prefetch="intent"
              state={{ modal: true, background: location }}
              className="w-80 h-80 bg-white rounded-lg shadow-2xl overflow-hidden group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {currentProject.summary}
                </p>
              </div>
            </Link>

            {/* Right Arrow */}
            <button
              onClick={nextProject}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 text-gray-800"
              aria-label="Next project"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProjectIndex
                    ? "bg-gray-800 w-8"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Down arrow to About section (matches hero arrow) */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-gray-800"
          aria-label="Go to About section"
        >
          <svg
            className="w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative h-screen gradient-hero overflow-hidden snap-start"
        >
          {/* Title inside the top arc fragment */}
          <div className="absolute top-0 left-0 right-0 h-56 flex items-center justify-center z-10 pointer-events-none -translate-y-2">
            <h2 className="text-5xl font-display font-bold text-gray-800">About Me</h2>
          </div>

          {/* About content */}
          <div className="relative z-10 max-w-5xl mx-auto px-8 pt-56">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <img
                src="/zoe-headshot.jpg"
                alt="Zoe Homan headshot"
                className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl justify-self-center md:justify-self-start"
              />
              <div className="space-y-4 text-gray-800/90 text-lg leading-relaxed">
                <p>
                  Zoe Homan is a creative student with a passion for visual storytelling and
                  interactive design. She enjoys building engaging experiences that blend art,
                  technology, and thoughtful user-centered design.
                </p>
                <p>
                  Her work spans illustration, digital media, and interactive projects, often
                  exploring playful color, motion, and tactile interfaces. When she’s not
                  designing, Zoe is learning new tools and collaborating on student showcases
                  and portfolio projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        ariaLabel="Contact"
        className="bg-cream"
      >
        <ContactCard info={contact} />
      </Modal>
    </div>
  );
}
