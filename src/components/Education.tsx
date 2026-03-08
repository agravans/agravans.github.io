import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  { school: "UC Berkeley – Plaksha University", degree: "Post Graduation (Applied AI & Product)", cgpa: "CGPA 8.5" },
  { school: "KIIT", degree: "BTech, Computer Science and Engineering", cgpa: "CGPA 8.01" },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-2"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] mb-12"
        >
          Applied AI & Product · Computer Science
        </motion.p>
        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)]">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-semibold">{edu.school}</p>
                <p className="text-sm text-[var(--text-muted)]">{edu.degree}</p>
                <p className="text-sm text-[var(--text-dim)] font-mono mt-1">
                  {edu.cgpa}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
