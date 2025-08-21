// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950"
    >
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-full overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b dark:border-slate-700 p-4">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                My Resume
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-2xl font-bold text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition"
              >
                &times;
              </button>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 overflow-auto max-h-96 md:max-h-[60vh]">
              <iframe
                src="src/assets/SarahBaigCV.pdf#zoom=85"
                className="w-full h-80 md:h-96"
                title="CV Preview"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 p-4 bg-slate-50 dark:bg-slate-700/50">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition"
              >
                Close
              </button>
              <a
                href="src/assets/SarahBaigCV.pdf"
                download="Sarah_Baig_FullStack_Developer_CV.pdf"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content - Centered */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Hi, I'm Sarah
        </motion.h1>
        <p className="mt-4 text-xl text-slate-700 dark:text-slate-300">
          Full-Stack Developer | React & Node.js
        </p>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
          Building scalable apps with clean code & sleek design.
        </p>

        {/* Buttons - Centered */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a
            href="#projects"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="block border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-full font-medium transition"
          >
            Contact Me
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105"
          >
            View CV
          </button>
        </div>
      </div>
    </section>
  );
}
