// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 text-center text-slate-300">
      <div className="max-w-4xl mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Sarah. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/sarah2201" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/sarah-baig-900351285/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="sarahbaig317@gmail.com" className="hover:text-white transition">Email</a>
        </div>
      </div>
    </footer>
  );
}