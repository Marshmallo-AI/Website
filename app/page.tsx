'use client';

import Image from "next/image";
import Link from "next/link";

// Icons as SVG components for cleaner code
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

const BeakerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23.693L5 15.3m14.8 0 .105 1.158a2.25 2.25 0 0 1-1.836 2.423l-.465.07a21.026 21.026 0 0 1-6.408 0l-.465-.07a2.25 2.25 0 0 1-1.836-2.423l.105-1.158" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const features = [
  {
    icon: <EyeIcon />,
    title: "Trajectory Observability & Rewards",
    subtitle: "Understand how your agents are behaving",
    description: "Capture complete agent trajectories, including actions, tool calls, reasoning steps, and outcomes. These trajectories are evaluated and rewarded, allowing the right behaviours to be reinforced and failures to be identified."
  },
  {
    icon: <EditIcon />,
    title: "Editable Learnings",
    subtitle: "Control and steer how your agents behave",
    description: "Convert your agent trajectories and rewards into structured learnings that can be viewed, edited and approved by humans. Full control over what your agents learn from each interaction."
  },
  {
    icon: <BeakerIcon />,
    title: "Simulation Environment",
    subtitle: "Compare and choose the right model",
    description: "Benchmark models using your trajectories, comparing performance, cost, and efficiency across workflows. Make data-driven decisions about model selection."
  },
  {
    icon: <ChartIcon />,
    title: "Consistency & Efficiency Metrics",
    subtitle: "Monitor how your agents are improving",
    description: "Track consistency and token efficiency so teams can see how their agents are performing over time with experience. Measure real improvements, not just outputs."
  }
];

const team = [
  {
    name: "Gaby Haffner",
    role: "CEO",
    initials: "GH",
    bio: "Commercial co-founder with a track record of enterprise GTM and platform commercialisation. Led productisation of internal infrastructure into white-labeled enterprise platform at Farfetch. Previously advised Fortune 500 companies at Monitor Deloitte and EY.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Aman Jaglan",
    role: "CTO",
    initials: "AJ",
    bio: "Technical co-founder with deep expertise in ML, deep learning, and reinforcement learning. Previously built production systems for enterprise clients. Published research in continual learning and developed open-source training frameworks.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michelangelo Naim",
    role: "Founding Researcher",
    initials: "MN",
    bio: "PhD in theoretical and computational neuroscience from MIT and Weizmann Institute. Doctoral research on 'Episodic Memory from First Principles.' Former research scientist at Basis. First-principles understanding of memory and learning.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Vishnu Arun",
    role: "Founding ML Engineer",
    initials: "VA",
    bio: "Machine learning engineer at Shopify with prior experience at Jovian (YC-backed). Strong background in data engineering, model development, and system-level ML design. Technical writer with over 270k readers on Medium.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Nitin Kumar",
    role: "Founding Software Engineer",
    initials: "NK",
    bio: "Senior full-stack engineer at Deel, previously at Razorpay. Core maintainer of Webpack and ESLint, used by 100M+ developers globally. Regular speaker at JSConf India, React India, and React Day Berlin.",
    linkedin: "#",
    twitter: "#"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Marshmallo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold tracking-tight">Marshmallo</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              <Link href="#features" className="nav-link hidden sm:block">
                Features
              </Link>
              <Link href="#team" className="nav-link hidden sm:block">
                Team
              </Link>
              <Link href="/docs" className="nav-link">
                Docs
              </Link>
              <div className="flex items-center gap-3">
                <Link href="/login" className="nav-link">
                  Log in
                </Link>
                <Link href="/signup" className="btn-primary text-sm !py-2.5 !px-5">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <span className="section-label">AI Infrastructure for Enterprise</span>
            </div>
            
            {/* Main headline */}
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
              Give Your Agents
              <br />
              <span className="font-serif italic text-gradient">Work Experience</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
              Today's agents don't learn. They produce inconsistent outcomes and require constant intervention. 
              <span className="text-[var(--color-text)]"> Marshmallo enables agents to learn from every interaction</span>—becoming more consistent, efficient, and trusted over time.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
              <button className="btn-primary flex items-center gap-2 group">
                Start Building
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </button>
              <button className="btn-secondary">
                Read Documentation
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">Enabling AI agents to be trusted in production</p>
              <div className="flex items-center justify-center gap-8 opacity-40">
                <div className="h-6 w-px bg-[var(--color-border)]" />
                <span className="text-sm font-medium">Continual Learning</span>
                <div className="h-6 w-px bg-[var(--color-border)]" />
                <span className="text-sm font-medium">Trajectory Rewards</span>
                <div className="h-6 w-px bg-[var(--color-border)]" />
                <span className="text-sm font-medium">Human-in-the-Loop</span>
                <div className="h-6 w-px bg-[var(--color-border)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1000ms' }}>
          <div className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[var(--color-text-muted)] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="section-label">The Problem</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Agents Don't <span className="font-serif italic">Learn</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
              Today's agents operate like black boxes. They produce inconsistent outcomes, require constant manual intervention, and do not improve with use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Inconsistent Behaviour</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                The same input can trigger different tools, different reasoning paths, and unpredictable outputs.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Manual & Expensive</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Teams continuously rewrite prompts, manually review outputs, and hire engineers to build bespoke eval systems.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">No Control</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Enterprises lack infrastructure to capture agent behaviour, reasoning, and learnings at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="divider" />
      </div>

      {/* Features Section */}
      <section id="features" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="section-label">The Solution</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              The Learning Infrastructure <br />
              <span className="font-serif italic">for AI Agents</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
              We wrap existing agents with a continual learning loop that observes actions, evaluates task trajectories, and enables agents to learn from experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card p-8 lg:p-10">
                <div className="feature-icon mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-4">{feature.subtitle}</p>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="divider" />
      </div>

      {/* Team Section */}
      <section id="team" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="section-label">Our Team</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Built by <span className="font-serif italic">Experts</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
              World-class researchers and engineers from leading AI labs, enterprise tech, and academia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="team-card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="avatar-initials">
                    {member.initials}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={member.linkedin} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                      <LinkedInIcon />
                    </a>
                    <a href={member.twitter} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                      <XIcon />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-4">{member.role}</p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-elevated)] border border-[var(--color-border)] p-12 lg:p-20 text-center">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-10 blur-[100px] pointer-events-none" />
            
            <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Ready to give your agents
              <br />
              <span className="font-serif italic text-gradient">real work experience?</span>
            </h2>
            <p className="relative text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10">
              Join enterprise teams building the next generation of trusted AI agents.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Get Started Free
                <span className="group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </span>
              </button>
              <button className="btn-secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Marshmallo"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="text-sm text-[var(--color-text-muted)]">
                © 2025 Marshmallo AI. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                Terms
              </Link>
              <a href="https://twitter.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                <XIcon />
              </a>
              <a href="https://linkedin.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
