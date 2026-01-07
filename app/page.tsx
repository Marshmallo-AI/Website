'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  Typography, 
  Button, 
  Flex,
  Layout,
} from 'antd';
import { 
  EyeOutlined,
  EditOutlined,
  ExperimentOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

interface TeamMember {
  name: string;
  role: string;
  company?: string;
  image: string;
  bio: string;
  linkedin: string;
  twitter: string;
}

const team: TeamMember[] = [
  {
    name: "Gaby Haffner",
    role: "Co-Founder & CEO",
    company: "Ex-Farfetch, Monitor Deloitte",
    image: "/team/gaby.png",
    bio: "",
    linkedin: "https://www.linkedin.com/in/gaby-haffner-4a006165/",
    twitter: "#",
  },
  {
    name: "Aman Jaglan",
    role: "Co-Founder & CTO",
    company: "ML Research, Ex-Protiviti",
    image: "/team/aman.png",
    bio: "",
    linkedin: "https://www.linkedin.com/in/aman-jaglan/",
    twitter: "#",
  },
  {
    name: "Vishnu Arun",
    role: "Founding Research Engineer",
    company: "Shopify, YC-backed Jovian",
    image: "/team/vishnu.png",
    bio: "",
    linkedin: "https://www.linkedin.com/in/vishnuarun/",
    twitter: "#"
  },
  {
    name: "Nitin Kumar",
    role: "Founding Software Engineer",
    company: "Deel, Razorpay, Webpack Core",
    image: "/team/nitin.png",
    bio: "",
    linkedin: "https://www.linkedin.com/in/snitin315/",
    twitter: "#"
  },
];

// Features data
const features = [
  {
    id: 'observe',
    icon: EyeOutlined,
    label: "Observe",
    title: "Observe agent behaviour",
    tagline: "",
    description: "Capture complete agent trajectories, including actions, tool calls, reasoning steps, and outcomes. These trajectories are evaluated and rewarded, allowing the right behaviours to be reinforced and failures to be identified.",
    color: "#c4a7ff",
    highlights: ["Full trajectory capture", "Automatic evaluation", "Reward signals", "Failure detection"],
  },
  {
    id: 'learn',
    icon: EditOutlined,
    label: "Learn",
    title: "Editable Learnings",
    tagline: "Control and steer how your agents behave",
    description: "Convert your agent trajectories and rewards into structured learnings that can be viewed, edited and approved by humans. Full control over what your agents learn from each interaction.",
    color: "#7dd3fc",
    highlights: ["Human-in-the-loop", "Structured learnings", "Edit & approve", "Version control"],
  },
  {
    id: 'simulate',
    icon: ExperimentOutlined,
    label: "Simulate",
    title: "Simulation Environment",
    tagline: "Compare and choose the right model",
    description: "Benchmark models using your trajectories, comparing performance, cost, and efficiency across workflows. Make data-driven decisions about model selection.",
    color: "#c4a7ff",
    highlights: ["Model benchmarking", "Cost analysis", "Performance metrics", "A/B testing"],
  },
];

// Interactive Feature Showcase Component
const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];
  const Icon = activeFeature.icon;

  return (
    <div className="feature-showcase">
      <Flex justify="center" gap={12} wrap="wrap" className="feature-tabs">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`feature-tab ${isActive ? 'is-active' : ''}`}
              aria-pressed={isActive}
            >
              <FeatureIcon className="feature-tab-icon" />
              <span>{feature.label}</span>
            </button>
          );
        })}
      </Flex>

      <div className="feature-display">
        <div key={activeFeature.id} className="feature-content">
          <div className="feature-panel">
            <div className="feature-icon-badge">
              <Icon className="feature-icon-glyph" />
            </div>

            <Title level={2} className="feature-title">
              {activeFeature.title}
            </Title>

            {activeFeature.tagline && (
              <Text className="feature-tagline">{activeFeature.tagline}</Text>
            )}

            <Paragraph className="feature-description">
              {activeFeature.description}
            </Paragraph>

            <Flex gap={12} wrap="wrap" className="feature-highlights">
              {activeFeature.highlights.map((highlight, i) => (
                <div
                  key={highlight}
                  className="feature-highlight"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {highlight}
                </div>
              ))}
            </Flex>
          </div>
        </div>

        <div className="feature-visual">
          <div className="feature-visual-frame">
            <div className="feature-visual-grid" aria-hidden="true" />
            <div className="feature-visual-index">0{activeIndex + 1}</div>
            <div className="feature-visual-icon">
              <Icon className="feature-visual-glyph" />
            </div>
            <div className="feature-visual-pixels" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <Flex justify="center" gap={12} className="feature-progress">
        {features.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`feature-progress-dot ${index === activeIndex ? 'is-active' : ''}`}
            aria-label={`Show feature ${index + 1}`}
          />
        ))}
      </Flex>
    </div>
  );
};

const TeamCarouselCard = ({ member }: { member: TeamMember }) => {
  const roleParts = member.role.startsWith('Founding ')
    ? ['Founding', member.role.replace('Founding ', '')]
    : [member.role];

  return (
    <div className="team-card">
      <div className="team-photo">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="team-photo-img"
        />
      </div>
      <div className="team-card-content">
        <Link href={member.linkedin} target="_blank">
          <Title level={4} className="team-card-name">
            {member.name}
          </Title>
        </Link>
        <Text className="team-card-role">
          {roleParts.map((part) => (
            <span key={part} className="team-card-role-line">
              {part}
            </span>
          ))}
        </Text>
        {member.bio && <Paragraph className="team-card-bio">{member.bio}</Paragraph>}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('loading');
    setSubmitError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get('firstName') || ''),
      lastName: String(formData.get('lastName') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed.');
      }

      form.reset();
      setSubmitState('success');
    } catch (error) {
      setSubmitState('error');
      setSubmitError(error instanceof Error ? error.message : 'Submission failed.');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show border after scrolling past 100px
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout className="app-shell">
      <div className="pixel-drift" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Header / Navigation */}
      <Header className={`navbar ${hasScrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner">
          <Flex justify="space-between" align="center" className="navbar-row">
            <Link href="/" className="brand-card">
              <span className="brand-avatar">
                <Image 
                  src="/logo.png" 
                  alt="Marshmallo" 
                  width={64} 
                  height={64}
                  className="brand-image"
                />
              </span>
              <Text strong className="brand-name">
                Marshmallo AI
              </Text>
            </Link>
            <Link href="https://docs.marshmallo.ai/" target="_blank">
              <Button type="text" className="pixel-btn pixel-btn--ghost">
                Docs
              </Button>
            </Link>
          </Flex>
        </div>
      </Header>

      {/* Main Content */}
      <Content style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        {/* Hero Section - Full viewport height */}
        <section className="hero-section">
          <div className="section-inner hero-wrapper">
            <div className="hero-graphic">
              <div className="hero-graphic-overlay" />
              <div className="hero-text-frame">
                <Title level={1} className="hero-title">
                  Agents you can consistently trust
                </Title>

                <Paragraph className="hero-subtitle">
                  Observe agent behaviour, evaluate outcomes, and turn every run into a learning that
                  makes your agents more reliable over time.
                </Paragraph>

                <Flex gap={16} className="hero-actions">
                  <Link href="https://app.marshmallo.ai" target="_blank">
                    <Button type="text" size="large" className="pixel-btn pixel-btn--primary">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button type="text" size="large" className="pixel-btn pixel-btn--secondary">
                      Get in Touch
                    </Button>
                  </Link>
                </Flex>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section section-features">
          <div className="section-inner">
            <div className="section-header">
              <Text className="section-kicker">The Agent Lifecycle with Marlo</Text>
              <Title level={2} className="section-title">
                Agents that learn autonomously
              </Title>
            </div>

            <FeatureShowcase />
          </div>
        </section>

        {/* Team Section */}
        <section className="section section-team">
          <div className="section-inner team-layout">
            <div className="team-grid">
              {team.map((member) => (
                <TeamCarouselCard key={member.name} member={member} />
              ))}
            </div>
            <div className="team-aside">
              <Title level={2} className="section-title">
                The Team
              </Title>
              <Paragraph className="section-description">
                Our founding team brings deep expertise across ML research, platform engineering, and
                enterprise GTM.
              </Paragraph>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section section-about">
          <div className="section-inner">
            <div className="about-layout">
              <Title level={2} className="section-title">
                About us
              </Title>
              <div className="about-copy">
                <Paragraph className="section-description">
                  Marshmallo was born out of the frustration that agents cannot be truly trusted in production.
                </Paragraph>
                <Paragraph className="section-description">
                  Today's agents do not learn in production, they repeat mistakes and constantly fail
                  requiring manual intervention to debug. There is no learning loop tied to their production
                  behavior.
                </Paragraph>
                <Paragraph className="section-description">
                  For most companies, updating model weights with reinforcement learning is not realistic,
                  most models are closed-source, and the cost and complexity makes it prohibitive. While
                  observability tools can tell you what went wrong, they do not turn those failures into
                  learnings for improvement.
                </Paragraph>
                <Paragraph className="section-description">
                  Marshmallo's infrastructure enables agents to learn and improve autonomously in their
                  production environment by turning their behaviour, actions and reasoning into structured
                  learnings whenever performance drops.
                </Paragraph>
                <Paragraph className="section-description">
                  Those learnings feed back directly into the agent, so your agents get more reliable and
                  cheaper over time.
                </Paragraph>
                <Paragraph className="section-description">
                  So instead of babysitting your agents, you can focus on what you do best: building your
                  product. Marshmallo ensures your agents keep getting smarter in the background.
                </Paragraph>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <Title level={2} className="section-title">
                Get in touch
              </Title>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-grid">
                <label className="contact-field">
                  <span className="contact-label">First name</span>
                  <input type="text" name="firstName" className="contact-input" autoComplete="given-name" required />
                </label>
                <label className="contact-field">
                  <span className="contact-label">Last name</span>
                  <input type="text" name="lastName" className="contact-input" autoComplete="family-name" required />
                </label>
                <label className="contact-field">
                  <span className="contact-label">Email</span>
                  <input type="email" name="email" className="contact-input" autoComplete="email" required />
                </label>
                <label className="contact-field">
                  <span className="contact-label">Company</span>
                  <input type="text" name="company" className="contact-input" autoComplete="organization" required />
                </label>
                <label className="contact-field contact-field--full">
                  <span className="contact-label">Message</span>
                  <textarea name="message" rows={4} className="contact-input contact-textarea" required />
                </label>
              </div>
              <Button
                type="text"
                size="large"
                className="pixel-btn pixel-btn--primary contact-submit"
                htmlType="submit"
                disabled={submitState === 'loading' || submitState === 'success'}
              >
                {submitState === 'loading'
                  ? 'Sending...'
                  : submitState === 'success'
                    ? 'Submitted!'
                    : 'Submit'}
              </Button>
              {submitState === 'error' && (
                <Text className="contact-status contact-status--error">
                  {submitError || 'Something went wrong. Please try again.'}
                </Text>
              )}
            </form>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer className="site-footer">
        <div className="section-inner">
          <div className="footer-divider" aria-hidden="true" />
          <div className="footer-box">
            <Text className="footer-text">
              © 2025 Marshmallo AI. All rights reserved.
            </Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}
