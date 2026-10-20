import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowDown, Atom, BarChart3, BrainCircuit, Briefcase, Cpu, Dna, FlaskConical,
  Github, HeartPulse, Lightbulb, Linkedin, Mail, Menu, Target, X, MapPin, Plus,
} from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ProjectDialog } from "@/components/ProjectDialog";
import {
  activities, contact, isPlaceholder, journey, learning, nav, projects, skills, type Project,
} from "@/content/site";

const TITLE = "Rishabh Sain | Biotechnology, Technology & Strategy";
const DESC =
  "Rishabh Sain — biotechnology student at JECRC University, Jaipur, exploring the intersection of science, AI, technology, and business strategy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-sm font-bold tracking-[0.25em]">RISHABH <span className="text-gradient">SAIN</span></a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-primary/40 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex">Let's Connect</a>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden" aria-label="Mobile">
          {[...nav, { id: "contact", label: "Let's Connect" }].map((n, i) => (
            <a key={i} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[480px] w-[480px] rounded-full bg-violet/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="eyebrow mb-6">Biotechnology × Technology × Strategy</p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Curious by Nature. <span className="text-gradient">Building with Purpose.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">
            I'm Rishabh Sain, a biotechnology student exploring the intersection of science, artificial intelligence,
            technology, and business. I'm interested in turning curiosity into practical projects, meaningful ideas,
            and real-world impact.
          </p>
          <p className="mt-6 text-sm font-medium text-foreground/80">
            Biotechnology Student <span className="text-primary">|</span> Curious Builder <span className="text-primary">|</span> Future Business & Strategy Professional
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="bg-gradient-accent glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary">Let's Connect</a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> Based in Jaipur, Rajasthan, India.</p>
        </div>
        <div className="relative animate-in fade-in zoom-in-95 duration-1000">
          <div className="bg-gradient-accent absolute -inset-px rounded-3xl opacity-40 blur-sm" />
          <img src={heroVisual} alt="Abstract DNA helix merging into a network of connected nodes" width={1024} height={1152} className="relative aspect-[8/9] w-full rounded-3xl border border-border object-cover" />
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="relative mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs text-muted-foreground">
        Scroll <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

const pillars = [
  { icon: FlaskConical, t: "Science", d: "Biotechnology, biological systems, and scientific exploration." },
  { icon: Cpu, t: "Technology", d: "AI tools, digital literacy, and emerging technologies." },
  { icon: Target, t: "Strategy", d: "Business thinking, entrepreneurship, problem-solving, and consulting." },
];

const interests = [
  { icon: Dna, t: "Biotechnology & Life Sciences", d: "Exploring biological systems, scientific discoveries, and applications of biotechnology." },
  { icon: BrainCircuit, t: "Artificial Intelligence", d: "Exploring practical AI tools, automation, and the ways AI can improve learning and productivity." },
  { icon: BarChart3, t: "Bioinformatics & Data Science", d: "Interested in how data analysis and computational methods can support biological research." },
  { icon: Briefcase, t: "Business & Strategy", d: "Exploring strategic thinking, business models, problem-solving, and consulting." },
  { icon: Lightbulb, t: "Entrepreneurship & Innovation", d: "Interested in how ideas become useful products, services, and sustainable ventures." },
  { icon: HeartPulse, t: "Healthcare & Scientific Innovation", d: "Curious about technology-enabled healthcare, research, and emerging scientific solutions." },
];

const card = "glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow";

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90">{children}</span>;
}

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const socials = [
    { label: "Email", href: `mailto:${contact.email}`, value: contact.email, icon: Mail },
    { label: "LinkedIn", href: contact.linkedin, value: contact.linkedin, icon: Linkedin },
    { label: "GitHub", href: contact.github, value: contact.github, icon: Github },
  ];
  const statusStyle = { Learning: "text-primary border-primary/40", Exploring: "text-violet border-violet/50", Building: "text-foreground border-foreground/30" };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="About" title="A little about me." />
          <div className="grid gap-12 md:grid-cols-5">
            <Reveal className="space-y-5 text-muted-foreground md:col-span-3 md:text-lg">
              <p>I'm currently pursuing a B.Sc. in Biotechnology at <span className="text-foreground">JECRC University</span>. My interests go beyond the classroom — I'm curious about how biological sciences, emerging technologies, and business thinking can come together to address meaningful challenges.</p>
              <p>I enjoy exploring new tools, learning through practical assignments, developing ideas, and understanding how innovative solutions move from concept to real-world application.</p>
              <p>I'm at the beginning of my professional journey, focused on building strong fundamentals, gaining hands-on experience, and becoming someone who can connect scientific understanding with broader strategic thinking.</p>
            </Reveal>
            <div className="space-y-4 md:col-span-2">
              {pillars.map((p, i) => (
                <Reveal key={p.t} delay={i * 100}>
                  <div className={`${card} flex gap-4`}>
                    <p.icon className="h-6 w-6 shrink-0 text-primary" />
                    <div><h3 className="font-semibold">{p.t}</h3><p className="mt-1 text-sm text-muted-foreground">{p.d}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Interests" title="Where my curiosity leads." sub="Learning directions I'm actively exploring." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((it, i) => (
              <Reveal key={it.t} delay={(i % 3) * 80}>
                <div className={`${card} h-full`}>
                  <div className="mb-5 inline-flex rounded-xl border border-border bg-surface p-3"><it.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Projects" title="Featured work." sub="Academic projects and practical learning — more added as I go." />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.number} delay={(i % 2) * 100}>
                <button onClick={() => setActive(p)} className={`${card} group flex h-full w-full flex-col text-left`}>
                  <div className="flex items-center justify-between">
                    <span className="text-gradient text-4xl font-semibold">{p.number}</span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{p.status}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="text-xs text-primary">#{t}</span>)}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">View Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Journey" title="My journey so far." />
          <ol className="relative ml-3 max-w-3xl border-l border-border">
            {journey.map((j, i) => (
              <li key={i} className="mb-12 pl-8">
                <Reveal>
                  <span className="bg-gradient-accent glow absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full" />
                  <p className="eyebrow">{j.year}</p>
                  <h3 className="mt-2 text-xl font-semibold">{j.title}</h3>
                  <p className="mt-2 text-muted-foreground">{j.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="ml-3 pl-8 text-sm italic text-muted-foreground">This journey is a work in progress — more to come.</p>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Skills" title="Skills & currently exploring." />
          <div className="grid gap-5 md:grid-cols-2">
            {([["Academic & Conceptual Interests", skills.academic, Atom], ["Digital & Professional Development", skills.digital, Cpu]] as const).map(([t, list, Icon]) => (
              <Reveal key={t}>
                <div className="glass h-full rounded-2xl p-6">
                  <h3 className="mb-5 flex items-center gap-2 font-semibold"><Icon className="h-5 w-5 text-primary" /> {t}</h3>
                  <div className="flex flex-wrap gap-2">{list.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="mb-4 text-sm font-semibold text-muted-foreground">Currently Exploring</p>
            <div className="flex flex-wrap gap-2">
              {skills.exploring.map((s) => <span key={s} className="rounded-full border border-dashed border-primary/40 px-4 py-2 text-sm text-primary">{s}</span>)}
            </div>
          </Reveal>
        </section>

        <section id="activities" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Involvement" title="Activities & involvement." />
          <div className="grid gap-5 md:grid-cols-2">
            {activities.map((a) => (
              <Reveal key={a.title}>
                <div className={`${card} h-full`}>
                  <p className="eyebrow">{a.type}</p>
                  <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="flex h-full min-h-40 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                <Plus className="h-5 w-5" /> Workshops, events, and volunteering — coming soon.
              </div>
            </Reveal>
          </div>
        </section>

        <section id="learning" className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
              <p className="eyebrow mb-3">Right now</p>
              <h2 className="text-3xl font-semibold tracking-tight">Currently learning.</h2>
              <ul className="mt-8 divide-y divide-border">
                {learning.map((l) => (
                  <li key={l.item} className="flex items-center justify-between gap-4 py-4">
                    <span>{l.item}</span>
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyle[l.status]}`}>{l.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Have an idea? <span className="text-gradient">Let's connect.</span></h2>
              <p className="mt-5 text-muted-foreground">I'm always interested in connecting with people who enjoy science, technology, innovation, and thoughtful conversations about new ideas.</p>
              <ul className="mt-8 space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    {isPlaceholder(s.value) ? (
                      <span className="flex items-center gap-3 text-sm text-muted-foreground"><s.icon className="h-4 w-4" /> {s.label}: {s.value}</span>
                    ) : (
                      <a href={s.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm hover:text-primary"><s.icon className="h-4 w-4" /> {s.value}</a>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} · Designed with curiosity by Rishabh Sain.</p>
          <div className="flex gap-4">
            {socials.filter((s) => !isPlaceholder(s.value)).map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-foreground"><s.icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </footer>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </div>
  );
}
