'use client';

import Image from "next/image";
import { Layout, Typography, Button, Space, Flex } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  return (
    <Layout className="min-h-screen w-screen relative bg-white">
      {/* Navbar */}
      <Header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 100,
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          padding: '0 24px',
          height: 64,
          lineHeight: '64px',
        }}
      >
        <Flex justify="space-between" align="center" style={{ maxWidth: 1152, margin: '0 auto', height: '100%' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ position: 'relative', height: 32, width: 32, borderRadius: 8, background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #e5e5e5' }}>
              <Image
                src="/logo.png"
                alt="Marshmallo AI logo"
                fill
                sizes="32px"
                style={{ objectFit: 'contain', padding: 2 }}
                priority
              />
            </div>
            <Text strong style={{ fontSize: 14, letterSpacing: '-0.02em' }}>Marshmallo AI</Text>
          </a>
          <Space size={24}>
            <a href="https://docs.marshmallo.ai" style={{ fontSize: 14, fontWeight: 500, color: '#1a1a1a' }}>
              Docs
            </a>
            <a 
              href="https://github.com/marshmallo-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: 14, fontWeight: 500, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <GithubOutlined style={{ fontSize: 16 }} />
              GitHub
            </a>
          </Space>
        </Flex>
      </Header>

      {/* 3D Retro Grid Box - Fixed Background */}
      <div className="retro-box">
        <div className="grid-floor" />
        <div className="grid-ceiling" />
        <div className="grid-left" />
        <div className="grid-right" />
        <div className="diagonal diag-tl" />
        <div className="diagonal diag-tr" />
        <div className="diagonal diag-bl" />
        <div className="diagonal diag-br" />
      </div>

      {/* Frame border */}
      <div className="frame-border frame-top" />
      <div className="frame-border frame-bottom" />
      <div className="frame-border frame-left" />
      <div className="frame-border frame-right" />

      {/* Corner accents */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Scrollable Content */}
      <Content style={{ position: 'relative', zIndex: 10, minHeight: '100vh', padding: '112px 32px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: 672, width: '100%' }}>
          {/* Logo */}
          <Flex align="center" gap={12} style={{ marginBottom: 80 }}>
            <div style={{ position: 'relative', height: 80, width: 80, borderRadius: 16, background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #e5e5e5' }}>
              <Image
                src="/logo.png"
                alt="Marshmallow AI logo"
                fill
                sizes="80px"
                style={{ objectFit: 'contain', padding: 2 }}
                priority
              />
            </div>
            <Title level={2} style={{ margin: 0, letterSpacing: '-0.02em' }}>Marshmallo AI</Title>
          </Flex>

          {/* Content */}
          <Typography style={{ fontSize: 18, lineHeight: 1.8 }}>
            <Title level={3} style={{ fontSize: 24, fontWeight: 700, marginBottom: 32 }}>
              We're Marshmallo AI, and we are building the infrastructure that gives your agents work experience.
            </Title>

            <Paragraph>
              Today's agents have the memory of a goldfish, they forget everything the moment they finish a task. If you've ever managed a team, you know that an employee's intelligence only get them so far. True value comes from learning on the job.
            </Paragraph>

            <Paragraph>
              Currently, agents reason from scratch every time. This means tasks take longer to solve, their reasoning paths change from run to run and consistency suffers. In high stakes environments, this inconsistency is a dealbreaker.
            </Paragraph>

            <Paragraph>When an agent learns on the job:</Paragraph>

            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 8 }}>It stops hallucinating parameters for tools that don't exist</li>
              <li style={{ marginBottom: 8 }}>It learns the specific sequence of API calls that yield the best results for your data</li>
              <li style={{ marginBottom: 8 }}>It stops wasting tokens on tools that in the past led to dead ends</li>
            </ul>

            <Paragraph>
              As a result, it becomes more consistent, faster and dramatically cheaper to run.
            </Paragraph>

            <Paragraph strong>In short:</Paragraph>

            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 8 }}>We're building agents that learn like humans do</li>
              <li style={{ marginBottom: 8 }}>That build experience from every interaction</li>
              <li style={{ marginBottom: 8 }}>That become more trustworthy with every deployment</li>
            </ul>

            <Paragraph>
              The future isn't models that are more intelligence, its models that learn.
            </Paragraph>

            <Paragraph>
              If our mission speaks to you, please get in touch here.
            </Paragraph>

            {/* Button */}
            <div style={{ paddingTop: 48 }}>
              <Button 
                type="primary" 
                size="large"
                icon={<MailOutlined />}
                href="mailto:hello@marshmallo.ai"
                style={{ 
                  height: 52, 
                  paddingInline: 32, 
                  fontSize: 16, 
                  fontWeight: 700,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Get in touch
              </Button>
              <Paragraph type="secondary" style={{ marginTop: 16, fontSize: 14 }}>
                Reach us at hello@marshmallo.ai
              </Paragraph>
            </div>
          </Typography>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ background: 'transparent', textAlign: 'center', position: 'relative', zIndex: 10, padding: '24px 32px 48px' }}>
        <Text type="secondary" style={{ fontSize: 14 }}>Marshmallow AI</Text>
      </Footer>
    </Layout>
  );
}
