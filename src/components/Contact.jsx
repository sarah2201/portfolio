// components/Contact.jsx
import { Phone, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <a
            href="+923145793574"
            className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Phone size={22} className="text-blue-600 dark:text-blue-300" />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500">Phone</p>
              <p className="text-lg font-medium">+92 3145793574</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="sarahbaig317@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Mail size={22} className="text-blue-600 dark:text-blue-300" />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500">Email</p>
              <p className="text-lg font-medium">sarahbaig317@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sarah-baig-900351285/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Linkedin
                size={22}
                className="text-blue-600 dark:text-blue-300"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500">Linkedin</p>
              <p className="text-lg font-medium">
                https://www.linkedin.com/in/sarah-baig-900351285/
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sarah2201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Github size={22} className="text-blue-600 dark:text-blue-300" />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="text-lg font-medium">
                https://github.com/sarah2201
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
