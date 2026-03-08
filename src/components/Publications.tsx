import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const PUBLICATIONS = [
  {
    authors: "Subandhu Agravanshi, Rasika Kedia & Dr. Sushruta Mishra",
    title: "An Analytical Perspective of Machine Learning applied to Cybersecurity",
    venue: "Springer",
  },
  {
    authors: "Subandhu Agravanshi, Muskaan Walia & Dr. Sushruta Mishra",
    title: "Understanding CNN based models applied to interpreting ECG data",
    venue: "Springer",
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-2"
        >
          Publications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--text-muted)] mb-12"
        >
          Academic work in ML and cybersecurity
        </motion.p>
        <div className="space-y-6">
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-dim)] transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-dim)] flex items-center justify-center text-[var(--accent)]">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)] mb-1">
                  {pub.authors}
                </p>
                <p className="font-medium">{pub.title}</p>
                <p className="text-sm text-[var(--text-dim)] mt-1">{pub.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
