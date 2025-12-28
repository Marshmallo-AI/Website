'use client';

import { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  Typography, 
  Space, 
  Button, 
  Flex,
  Layout,
  Tag,
} from 'antd';
import { 
  LinkedinOutlined, 
  XOutlined, 
  LeftOutlined,
  RightOutlined,
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
    role: "CEO",
    company: "Ex-Farfetch, Monitor Deloitte",
    image: "/team/nitin.jpeg",
    bio: "Commercial co-founder with a track record of enterprise GTM and platform commercialisation. At Farfetch, led productisation of internal infrastructure into white-labeled enterprise platform used by global luxury houses including Chanel.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aman Jaglan",
    role: "CTO",
    company: "ML Research, Ex-Protiviti",
    image: "/team/nitin.jpeg",
    bio: "Technical co-founder with deep expertise in ML, deep learning, and reinforcement learning. Published research in continual learning, developed open-source training frameworks, and built models outperforming state-of-the-art baselines.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michelangelo Naim",
    role: "Founding Researcher",
    company: "PhD MIT, Weizmann Institute",
    image: "/team/nitin.jpeg",
    bio: "PhD in theoretical and computational neuroscience from MIT and the Weizmann Institute. Doctoral research focused on 'Episodic Memory from First Principles,' exploring how intelligent systems store and retrieve experience over time.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Vishnu Arun",
    role: "Founding ML Engineer",
    company: "Shopify, YC-backed Jovian",
    image: "/team/nitin.jpeg",
    bio: "Machine learning engineer at Shopify with prior experience at Jovian, a YC-backed company. Strong background in data engineering, model development, and system-level ML design. Technical writer with over 270k readers on Medium.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Nitin Kumar",
    role: "Founding Software Engineer",
    company: "Deel, Razorpay, Webpack Core",
    image: "/team/nitin.jpeg",
    bio: "Senior full-stack engineer at Deel, previously at Razorpay. Core maintainer in the JavaScript ecosystem, contributing to Webpack and ESLint used by over 100M developers globally. Regular conference speaker at JSConf and React conferences.",
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
    <div style={{ position: 'relative' }}>
      {/* Feature Navigation Pills */}
      <Flex 
        justify="center" 
        gap={8} 
        wrap="wrap"
        style={{ marginBottom: 64 }}
      >
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              className="feature-pill"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 24px',
                borderRadius: 50,
                border: '1px solid',
                borderColor: isActive ? feature.color : 'rgba(255, 255, 255, 0.08)',
                background: isActive 
                  ? `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`
                  : 'rgba(255, 255, 255, 0.02)',
                color: isActive ? feature.color : '#666666',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'inherit',
              }}
            >
              <FeatureIcon style={{ fontSize: 18 }} />
              <span>{feature.label}</span>
            </button>
          );
        })}
      </Flex>

      {/* Main Feature Display */}
      <div 
        className="feature-display"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
          minHeight: 400,
        }}
      >
        {/* Left - Content */}
        <div 
          key={activeFeature.id}
          className="feature-content"
          style={{
            animation: 'fadeSlideIn 0.5s ease forwards',
          }}
        >
          {/* Icon Badge */}
          

          {/* Title */}
          <Title 
            level={2} 
            style={{ 
              color: '#fafafa', 
              margin: 0,
              marginBottom: 12,
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            {activeFeature.title}
          </Title>

          {/* Tagline */}
          <Text 
            style={{ 
              color: activeFeature.color,
              fontSize: 16,
              fontWeight: 500,
              display: 'block',
              marginBottom: 24,
            }}
          >
            {activeFeature.tagline}
          </Text>

          {/* Description */}
          <Paragraph 
            style={{ 
              color: '#888888',
              fontSize: 16,
              lineHeight: 1.8,
              margin: 0,
              marginBottom: 32,
              maxWidth: 500,
            }}
          >
            {activeFeature.description}
          </Paragraph>

          {/* Highlights */}
          <Flex gap={12} wrap="wrap">
            {activeFeature.highlights.map((highlight, i) => (
              <div
                key={highlight}
                style={{
                  padding: '8px 16px',
                  borderRadius: 8,
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#a0a0a0',
                  fontSize: 13,
                  animation: `fadeSlideIn 0.5s ease ${i * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {highlight}
              </div>
            ))}
          </Flex>
        </div>

        {/* Right - Visual */}
        <div 
          style={{
            position: 'relative',
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Animated background orb */}
          <div 
            key={`orb-${activeFeature.id}`}
            style={{
              position: 'absolute',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${activeFeature.color}15, transparent 70%)`,
              filter: 'blur(40px)',
              animation: 'pulseGlow 4s ease-in-out infinite',
            }}
          />
          
          {/* Connection lines */}
          <svg 
            width="350" 
            height="350" 
            style={{ position: 'absolute', opacity: 0.3 }}
          >
            <circle 
              cx="175" 
              cy="175" 
              r="120" 
              fill="none" 
              stroke={activeFeature.color}
              strokeWidth="1"
              strokeDasharray="8 8"
              style={{ animation: 'rotate 30s linear infinite' }}
            />
            <circle 
              cx="175" 
              cy="175" 
              r="80" 
              fill="none" 
              stroke={activeFeature.color}
              strokeWidth="1"
              strokeDasharray="4 12"
              style={{ animation: 'rotate 20s linear infinite reverse' }}
            />
          </svg>

          {/* Feature number */}
          <div 
            style={{
              fontSize: 180,
              fontWeight: 800,
              color: activeFeature.color,
              opacity: 0.08,
              position: 'absolute',
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1,
            }}
          >
            0{activeIndex + 1}
          </div>

          {/* Central icon */}
          <div 
            key={`icon-${activeFeature.id}`}
            style={{
              width: 120,
              height: 120,
              borderRadius: 32,
              background: `linear-gradient(135deg, ${activeFeature.color}25, ${activeFeature.color}10)`,
              border: `2px solid ${activeFeature.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              boxShadow: `0 0 60px ${activeFeature.color}30`,
              animation: 'scaleIn 0.5s ease forwards',
            }}
          >
            <Icon style={{ fontSize: 48, color: activeFeature.color }} />
          </div>

          {/* Floating dots */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: 8 + (i % 3) * 4,
                height: 8 + (i % 3) * 4,
                borderRadius: '50%',
                background: i % 2 === 0 ? activeFeature.color : '#fff',
                opacity: 0.4 - (i * 0.05),
                top: `${20 + (i * 12)}%`,
                left: `${15 + (i * 14)}%`,
                animation: `floatDot ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress indicators */}
      <Flex justify="center" gap={8} style={{ marginTop: 48 }}>
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: index === activeIndex ? 32 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              background: index === activeIndex 
                ? features[index].color 
                : 'rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Flex>
    </div>
  );
};

// Flip card for team carousel
const TeamCarouselCard = ({ member }: { member: TeamMember }) => {
  return (
    <div 
      className="flip-card"
      style={{
        width: 280,
        height: 400,
        flexShrink: 0,
        perspective: 1000,
      }}
    >
      <div className="flip-card-inner">
        {/* Front Face - Image */}
        <div 
          className="flip-card-front"
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          
          {/* Gradient Overlay */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.95) 100%)',
              zIndex: 1,
            }}
          />
          
          {/* Info at Bottom */}
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '24px 20px',
              zIndex: 2,
            }}
          >
            <Title 
              level={4} 
              style={{ 
                color: '#fafafa', 
                margin: 0,
                marginBottom: 4,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {member.name}
            </Title>
            <Text 
              style={{ 
                color: '#a0a0a0',
                fontSize: 13,
                display: 'block',
              }}
            >
              {member.role}
            </Text>
          </div>
        </div>
        
        {/* Back Face - Bio */}
        <div 
          className="flip-card-back"
          style={{
            borderRadius: 16,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            border: '1px solid rgba(196, 167, 255, 0.2)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Decorative gradient line at top */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: 'linear-gradient(90deg, #c4a7ff, #7dd3fc)',
            }}
          />
          
          {/* Header */}
          <div style={{ marginBottom: 16 }}>
            <Title 
              level={4} 
              style={{ 
                color: '#fafafa', 
                margin: 0,
                marginBottom: 4,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {member.name}
            </Title>
            <Text 
              style={{ 
                color: '#c4a7ff',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {member.role}
            </Text>
          </div>
          
          {/* Company */}
          {member.company && (
            <Text 
              style={{ 
                color: '#7dd3fc',
                fontSize: 12,
                display: 'block',
                marginBottom: 16,
              }}
            >
              {member.company}
            </Text>
          )}
          
          {/* Bio */}
          <Paragraph 
            style={{ 
              color: '#a0a0a0',
              fontSize: 13,
              lineHeight: 1.7,
              margin: 0,
              flex: 1,
            }}
          >
            {member.bio}
          </Paragraph>
          
          {/* Social Links */}
          <Flex gap={8} style={{ marginTop: 16 }}>
            <Link href={member.linkedin}>
              <Button
                type="link"
                icon={<LinkedinOutlined />}
                style={{ 
                  color: '#888888',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                }}
              />
            </Link>
            <Link href={member.twitter}>
              <Button
                type="text"
                icon={<XOutlined />}
                style={{ 
                  color: '#888888',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 8,
                  width: 36,
                  height: 36,
                }}
              />
            </Link>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show border after scrolling past 100px
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if carousel needs scrolling
  useEffect(() => {
    const checkScrollNeeded = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setNeedsScroll(scrollWidth > clientWidth);
      }
    };

    checkScrollNeeded();
    window.addEventListener('resize', checkScrollNeeded);
    return () => window.removeEventListener('resize', checkScrollNeeded);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Header / Navigation */}
      <Header 
        className="navbar"
        style={{ 
          background: hasScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderBottomColor: hasScrolled ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
          padding: '0 24px',
          height: 'auto',
          lineHeight: 'normal',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, border-bottom-color 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 0' }}>
          <Flex justify="space-between" align="center">
            <Link href="/">
              <Flex align="center" gap={12}>
                <Image 
                  src="/logo.png" 
                  alt="Marshmallo" 
                  width={32} 
                  height={32}
                  style={{ borderRadius: 8 }}
                />
                <Text strong style={{ color: '#fafafa', fontSize: 18 }}>
                  Marshmallo AI
                </Text>
              </Flex>
            </Link>
            <Link href="https://docs.marshmallo.ai/" target="_blank">
              <Button 
                type="text" 
                style={{ color: '#888888' }}
              >
                Docs
              </Button>
            </Link>
          </Flex>
        </div>
      </Header>

      {/* Main Content */}
      <Content style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>
        {/* Hero Section - Full viewport height */}
        <section 
          style={{ 
            minHeight: 'calc(100vh - 65px)', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Floating particles */}
          <div className="hero-shapes">
            <div className="hero-shape-5" />
          </div>

          <div style={{ maxWidth: 900, textAlign: 'center', position: 'relative', zIndex: 2 }}>
            {/* Main headline */}
            <Title 
              level={1} 
              style={{ 
                color: '#fafafa', 
                margin: 0,
                fontSize: 'clamp(40px, 7vw, 80px)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Give Your Agents{' '}
              <br />
              <span className="font-serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                <span className="text-gradient">Work Experience.</span>
              </span>
            </Title>
            
            {/* Subtitle */}
            <Paragraph 
              style={{ 
                color: '#888888', 
                fontSize: 'clamp(16px, 2vw, 20px)',
                margin: '0 auto 48px',
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              We're building AI agents that learn from every interaction, 
              accumulating expertise just like humans do.
            </Paragraph>
            
            {/* CTA Buttons */}
            <Flex justify="center" gap={16} style={{ marginBottom: 64 }}>
              <Link href="mailto:hello@marshmallo.ai">
                <Button 
                  type="primary" 
                  size="large"
                  style={{
                    background: '#fafafa',
                    border: 'none',
                    color: '#050505',
                    fontWeight: 600,
                    height: 52,
                    paddingInline: 32,
                    borderRadius: 12,
                    fontSize: 15,
                  }}
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href="https://docs.marshmallo.ai/" target="_blank">
                <Button 
                  size="large"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#a0a0a0',
                    height: 52,
                    paddingInline: 32,
                    borderRadius: 12,
                    fontSize: 15,
                  }}
                >
                  Documentation
                </Button>
              </Link>
            </Flex>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: '120px 24px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <Text 
                style={{ 
                  color: '#c4a7ff',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                Platform Features
              </Text>
              <Title 
                level={2} 
                style={{ 
                  color: '#fafafa', 
                  margin: 0,
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                }}
              >
                Everything you need to build{' '}
                <span className="text-gradient font-serif" style={{ fontStyle: 'italic' }}>
                  learning agents
                </span>
              </Title>
            </div>
            
            {/* Interactive Feature Showcase */}
            <FeatureShowcase />
          </div>
        </section>

        {/* Team Section - Horizontal Carousel */}
        <section style={{ padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            {/* Section Header */}
            <Flex justify="space-between" align="flex-end" wrap="wrap" gap={24} style={{ marginBottom: 48 }}>
              <div>
                <Text 
                  style={{ 
                    color: '#c4a7ff',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: 12,
                  }}
                >
                  The Team
                </Text>
                <Title 
                  level={2} 
                  style={{ 
                    color: '#fafafa', 
                    margin: 0,
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                  }}
                >
                  Built by{' '}
                  <span className="text-gradient font-serif" style={{ fontStyle: 'italic' }}>
                    believers
                  </span>
                </Title>
              </div>
              
              {/* Navigation Arrows - Only show if scrolling is needed */}
              {needsScroll && (
                <Space size={8}>
                  <Button
                    type="text"
                    icon={<LeftOutlined />}
                    onClick={() => scroll('left')}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#888888',
                      background: 'rgba(255, 255, 255, 0.02)',
                    }}
                  />
                  <Button
                    type="text"
                    icon={<RightOutlined />}
                    onClick={() => scroll('right')}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#888888',
                      background: 'rgba(255, 255, 255, 0.02)',
                    }}
                  />
                </Space>
              )}
            </Flex>

            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="team-carousel"
              style={{
                display: 'flex',
                gap: 20,
                overflowX: 'auto',
                paddingBottom: 20,
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {team.map((member) => (
                <div key={member.name} style={{ scrollSnapAlign: 'start' }}>
                  <TeamCarouselCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </section>
 
      

        {/* CTA Section */}
        <section style={{ padding: '140px 24px', position: 'relative', overflow: 'hidden' }}>
          {/* Background Elements */}
          <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}>
            {/* Large Gradient Orbs */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 600,
              height: 600,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196, 167, 255, 0.12) 0%, transparent 60%)',
              filter: 'blur(80px)',
              animation: 'pulseGlow 8s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '10%',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(125, 211, 252, 0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'pulseGlow 12s ease-in-out infinite reverse',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: 250,
              height: 250,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196, 167, 255, 0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
              animation: 'pulseGlow 10s ease-in-out infinite',
            }} />

            {/* Floating Decorative Circles */}
            <div style={{
              position: 'absolute',
              top: '15%',
              right: '15%',
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '1px dashed rgba(196, 167, 255, 0.2)',
              animation: 'rotate 25s linear infinite',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '20%',
              left: '12%',
              width: 80,
              height: 80,
              borderRadius: '50%',
              border: '1px dashed rgba(125, 211, 252, 0.2)',
              animation: 'rotate 18s linear infinite reverse',
            }} />
            <div style={{
              position: 'absolute',
              top: '60%',
              right: '8%',
              width: 50,
              height: 50,
              borderRadius: '50%',
              border: '1px solid rgba(196, 167, 255, 0.15)',
              animation: 'rotate 12s linear infinite',
            }} />

            {/* Floating Dots */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: 4 + (i % 3) * 2,
                  height: 4 + (i % 3) * 2,
                  borderRadius: '50%',
                  background: i % 2 === 0 ? 'rgba(196, 167, 255, 0.4)' : 'rgba(125, 211, 252, 0.4)',
                  left: `${10 + i * 11}%`,
                  top: `${20 + (i % 4) * 20}%`,
                  animation: `floatDot ${6 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div style={{
            maxWidth: 800,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}>
            <Flex vertical align="center" gap={40}>
              {/* Eyebrow */}
              <Tag
                style={{
                  background: 'rgba(196, 167, 255, 0.1)',
                  border: '1px solid rgba(196, 167, 255, 0.3)',
                  color: '#c4a7ff',
                  borderRadius: 20,
                  padding: '8px 20px',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Join the waitlist
              </Tag>

              {/* Headline */}
              <Title 
                level={1} 
                style={{ 
                  color: '#fafafa', 
                  margin: 0,
                  fontSize: 'clamp(36px, 6vw, 64px)',
                  fontWeight: 700,
                  textAlign: 'center',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                Ready to give your agents{' '}
                <span className="text-gradient font-serif" style={{ fontStyle: 'italic' }}>
                real work experience?
                </span>
                <br />
              </Title>

              {/* Description */}
              <Paragraph 
                style={{ 
                  color: '#a0a0a0', 
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  margin: 0,
                  lineHeight: 1.7,
                  textAlign: 'center',
                  maxWidth: 600,
                }}
              >
                Join enterprise teams building the next generation of trusted AI agents. 
              </Paragraph>

              {/* Buttons */}
              <Flex gap={20} wrap="wrap" justify="center" style={{ marginTop: 16 }}>
                <Link href="mailto:hello@marshmallo.ai">
                  <Button 
                    type="primary" 
                    size="large"
                    className="btn-primary"
                    style={{
                      background: 'linear-gradient(135deg, #c4a7ff, #7dd3fc)',
                      border: 'none',
                      color: '#050505',
                      fontWeight: 600,
                      height: 56,
                      paddingInline: 40,
                      fontSize: 16,
                      borderRadius: 16,
                      boxShadow: '0 0 40px rgba(196, 167, 255, 0.35)',
                    }}
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Link href="https://linkedin.com/company/marshmallo-ai" target="_blank">
                  <Button 
                    size="large"
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#fafafa',
                      fontWeight: 500,
                      height: 56,
                      paddingInline: 40,
                      fontSize: 16,
                      borderRadius: 16,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    }}
                  >
                    Follow Us
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer 
        style={{ 
          background: 'transparent', 
          padding: '40px 24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Flex justify="center">
            <Text style={{ color: '#666666', fontSize: 14 }}>
              © 2025 Marshmallo AI. All rights reserved.
            </Text>
          </Flex>
    </div>
      </Footer>
    </Layout>
  );
}
