import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Section } from "../components/layout/Section";
import { PageHeader } from "../components/layout/PageHeader";
import { GlowCard } from "../components/ui/GlowCard";

const METHODS = [
  {
    icon: Mail,
    title: "Email",
    desc: "subandwho@gmail.com",
    href: "mailto:subandwho@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    desc: "Connect and message",
    href: "https://linkedin.com/in/subandwho",
  },
  {
    icon: Github,
    title: "GitHub",
    desc: "Code and projects",
    href: "https://github.com/agravans",
  },
  {
    icon: ExternalLink,
    title: "Topmate",
    desc: "Book calls, mentoring",
    href: "https://topmate.io/subandwho/",
  },
];

const FAQ = [
  { q: "Open to roles?", a: "Yes, depends on fit. AI Engineer, Founding AI Engineer roles." },
  { q: "Open to collaborations?", a: "Yes." },
  { q: "Available for mentoring / calls?", a: "Via Topmate." },
];

export function Contact() {
  return (
    <>
      <Section>
        <PageHeader
          title="Contact"
          description="If you're building something ambitious in AI, hiring for a strong AI engineer, or just want to exchange ideas, reach out."
        />
      </Section>

      <Section className="border-t border-white/10 -mt-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHODS.map((m) => (
            <a key={m.title} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}>
              <GlowCard className="flex h-full flex-col items-start p-6">
                <m.icon size={20} className="mb-4 text-[var(--accent)]" />
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{m.desc}</p>
                <span className="mt-4 text-sm text-[var(--accent)] hover:underline">Get in touch →</span>
              </GlowCard>
            </a>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <h2 className="mb-6 text-lg font-semibold">Short FAQ</h2>
        <div className="space-y-4 max-w-2xl">
          {FAQ.map((f) => (
            <div key={f.q} className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4">
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
