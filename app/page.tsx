'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  Typography, 
  Button, 
  Flex,
  Layout,
  Tag,
} from 'antd';
import { 
  EyeOutlined,
  EditOutlined,
  ExperimentOutlined,
  LineChartOutlined
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
    role: "Co-Founder",
    company: "Ex-Farfetch, Monitor Deloitte",
    image: "/team/gaby.png",
    bio: "",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aman Jaglan",
    role: "Co-Founder",
    company: "ML Research, Ex-Protiviti",
    image: "/team/aman.png",
    bio: "",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vishnu Arun",
    role: "Founding Research Engineer",
    company: "Shopify, YC-backed Jovian",
    image: "/team/vishnu.png",
    bio: "",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Nitin Kumar",
    role: "Founding Software Engineer",
    company: "Deel, Razorpay, Webpack Core",
    image: "/team/nitin.png",
    bio: "",
    linkedin: "#",
    twitter: "#"
  },
];

// Features data
const features = [
  {
    id: 'observe',
    icon: EyeOutlined,
    label: "Observe",
    title: "Trajectory Observability & Rewards",
    tagline: "Understand how your agents are behaving",
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
  {
    id: 'measure',
    icon: LineChartOutlined,
    label: "Measure",
    title: "Consistency & Efficiency Metrics",
    tagline: "Monitor how your agents are improving",
    description: "Track consistency and token efficiency so teams can see how their agents are performing over time with experience. Measure real improvements, not just outputs.",
    color: "#7dd3fc",
    highlights: ["Real-time metrics", "Trend analysis", "Token efficiency", "Quality scores"],
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

            <Text className="feature-tagline">{activeFeature.tagline}</Text>

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
        <Title level={4} className="team-card-name">
          {member.name}
        </Title>
        <Text className="team-card-role">{member.role}</Text>
        {member.bio && <Paragraph className="team-card-bio">{member.bio}</Paragraph>}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [hasScrolled, setHasScrolled] = useState(false);

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
                  width={44} 
                  height={44}
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
                  Give Your Agents{' '}
                  <br />
                  <span className="hero-title-accent">Work Experience.</span>
                </Title>

                <Paragraph className="hero-subtitle">
                  We are building the learning layer for AI agents that learn from every interaction, 
                  accumulating expertise just like humans do.
                </Paragraph>

                <Flex gap={16} className="hero-actions">
                  <Link href="mailto:hello@marshmallo.ai">
                    <Button type="text" size="large" className="pixel-btn pixel-btn--primary">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link href="https://docs.marshmallo.ai/" target="_blank">
                    <Button type="text" size="large" className="pixel-btn pixel-btn--secondary">
                      Documentation
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
              <Text className="section-kicker">Platform Features</Text>
              <Title level={2} className="section-title">
                Everything you need to build{' '}
                <span className="text-gradient">learning agents</span>
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
                Our founding team brings deep experience across ML research, platform engineering,
                and enterprise productization at companies like Farfetch, Shopify, Deel, and Razorpay,
                with open-source leadership and applied AI research.
              </Paragraph>
            </div>
          </div>
        </section>
 
      

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="cta-panel">
            <Flex vertical align="center" gap={32}>
              <Tag className="pixel-label">Join the waitlist</Tag>

              <Title level={1} className="cta-title">
                Ready to give your agents{' '}
                <span className="text-gradient">real work experience?</span>
                <br />
              </Title>

              <Paragraph className="cta-text">
                Join enterprise teams building the next generation of trusted AI agents. 
              </Paragraph>

              <Flex gap={20} wrap="wrap" justify="center" className="cta-actions">
                <Link href="mailto:hello@marshmallo.ai">
                  <Button type="text" size="large" className="pixel-btn pixel-btn--cta">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="https://linkedin.com/company/marshmallo-ai" target="_blank">
                  <Button type="text" size="large" className="pixel-btn pixel-btn--secondary">
                    Follow Us
                  </Button>
                </Link>
              </Flex>
            </Flex>
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
