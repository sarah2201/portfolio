// components/GitHubStats.jsx
import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">GitHub Activity</h2>
        <GitHubCalendar username="your-github-username" />
      </div>
    </section>
  );
}