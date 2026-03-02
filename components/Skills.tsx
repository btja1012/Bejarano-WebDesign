const skills = [
  { name: "Python", icon: "🐍", level: "Advanced" },
  { name: "HTML", icon: "🌐", level: "Advanced" },
  { name: "CSS", icon: "🎨", level: "Intermediate" },
  { name: "JavaScript", icon: "⚡", level: "Intermediate" },
  { name: "TypeScript", icon: "🔷", level: "Beginner" },
  { name: "Next.js", icon: "▲", level: "Beginner" },
  { name: "Git", icon: "🌿", level: "Advanced" },
  { name: "GitHub", icon: "🐙", level: "Advanced" },
  { name: "SQL", icon: "🗄️", level: "Intermediate" },
  { name: "PostgreSQL", icon: "🐘", level: "Beginner" },
  { name: "Vercel", icon: "▲", level: "Intermediate" },
  { name: "Linux", icon: "🐧", level: "Intermediate" },
];

const levelColor: Record<string, string> = {
  Advanced: "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Beginner: "text-blue-400 bg-blue-400/10",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Technologies and tools I work with.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-blue-500/40 transition-colors"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-gray-200 font-semibold text-sm">{skill.name}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColor[skill.level]}`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
