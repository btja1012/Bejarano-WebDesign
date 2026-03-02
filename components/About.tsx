export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-16 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-7xl font-bold text-white select-none">
              AB
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m <span className="text-blue-400 font-semibold">Andres Bejarano</span>, a software
              developer and student at <span className="text-blue-400 font-semibold">Universidad Fidelitas</span>.
              I enjoy building practical applications that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My experience spans Python backend systems, web design, and database management.
              I love collaborating with teams and continuously improving my skills through hands-on projects.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Location", value: "Costa Rica" },
                { label: "University", value: "Universidad Fidelitas" },
                { label: "Focus", value: "Software Development" },
                { label: "GitHub", value: "btja1012" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-gray-200 font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="https://github.com/btja1012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
