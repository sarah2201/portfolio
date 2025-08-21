// src/components/Experience.jsx
export default function Experience() {
  const achievements = [
    {
      title: "Training at GIKI IT Center",
      desc: "Full-Stack(MERN stack) Training",
      year: "2025"
    },
    {
      title: "Internship at Techanion",
      desc: "Front-End (Flutter) Internship  ",
      year: "2024"
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Experience & Achievements
        </h2>
        <div className="space-y-8">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full w-fit">
                {item.year}
              </span>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}