// src/components/Skills.jsx
const skills = {
  Frontend: ['React', 'Tailwind', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  'Programming Languages': ['Python', 'C++', 'JavaScript', 'OOP', 'Data Structures'],
  Testing: ['Jest', 'Postman', 'ThunderClient'],
  Tools: ['GitHub', 'VS Code', 'Figma', 'Canva'],
};

const softSkills = [
  'Teamwork',
  'Problem Solving',
  'Communication',
  'Time Management',
  'Adaptability',
  'Collaboration',
  'Critical Thinking',
  'Leadership'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Technical Skills
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          From full-stack development to core computer science concepts.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skills).map(([category, list]) => (
            <div
              key={category}
              className="bg-slate-50 dark:bg-slate-700/60 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/80 dark:bg-black/30 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Soft Skills
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Collaborative mindset and growth-driven traits.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 rounded-full font-medium hover:scale-105 hover:from-purple-200 dark:hover:from-purple-800 transition-transform duration-200 shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}