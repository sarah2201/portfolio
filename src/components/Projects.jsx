// components/Projects.jsx
import { motion } from "framer-motion";
const projects = [
  {
    name: "FamilyLegacyAndFudingHub-live",
    tech: "React, Node.js, Express.js, MongoDB",
    desc: "A digital legacy platform for families to preserve memories.",
    img: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVscGluZyUyMGhhbmRzfGVufDB8fDB8fHww",
    github: "https://github.com/sarah2201/FamilyLegacyAndFundingHub",
    live: "https://family-hub-iota.vercel.app/",
  },
  {
    name: "MiniSchoolPortal-frontEnd",
    tech: "React-Redux stateManagement",
    desc: "Student Registration and Admin Managing Students",
    img: "https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.webp?a=1&b=1&s=612x612&w=0&k=20&c=XuFG-ld8CGs24t7g569vPupOI2bTcvqwq2NuPTuOfIo=",
    github: "https://github.com/sarah2201/SchoolPortal-redux",
    // live: "#",
  },
  {
    name: "SuperMall-Backend",
    tech: "Node.js, Express.js, MongoDB",
    desc: "Store-StoreManager-AdminControls-ThirdPartySuggestions",
    img: "#",
    github: "https://github.com/sarah2201/ExpressJsBackend-SuperMall",
    // live: "#",
  },
  // Add more...
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {p.tech}
                </p>
                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {p.desc}
                </p>
                <div className="mt-4 space-x-4">
                  <a
                    href={p.github}
                    className="text-blue-600 dark:text-blue-400"
                  >
                    GitHub
                  </a>
                  <a
                    href={p.live}
                    className="text-purple-600 dark:text-purple-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
