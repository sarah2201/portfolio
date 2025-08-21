// src/components/About.jsx
import { motion } from "framer-motion";
import sarah from "../assets/images/SarahGPT.png"; // ✅ Add your image in public/assets/ or src/assets/

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={sarah}
            alt="Sarah - Full-Stack Developer"
            className="w-130 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-blue-500/30 shadow-xl"
          />
          {/* <div className="absolute inset-1 rounded-2xl bg-gradient-to-t from-blue-600/20 to-purple-600/20 pointer-events-none"></div> */}
        </motion.div>

        {/* Bio Text */}
        <div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed"
          >
            I'm a passionate Full-Stack Developer specializing in{" "}
            <strong className="text-blue-600 dark:text-blue-400">React</strong>{" "}
            and{" "}
            <strong className="text-purple-600 dark:text-purple-400">
              Node.js
            </strong>
            . I love building clean, scalable web apps that blend strong
            functionality with beautiful design.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 dark:text-slate-400 mb-6"
          >
            When I'm not coding, you'll find me sketching UI ideas in Figma,
            contributing to open-source, or learning the latest in web tech. I'm
            currently looking for opportunities to grow as a developer and work
            on impactful projects.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
