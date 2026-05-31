import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SectionType } from './BottomNav';

import Link from 'next/link';

interface HeaderProps {
  activeSection?: SectionType;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const tabs = [
    { id: 'home' as SectionType, href: '/', label: 'Home' },
    { id: 'services' as SectionType, href: '/services', label: 'Services' },
    { id: 'contact' as SectionType, href: '/contact', label: 'Quote' },
  ];

  return (
    <header className="app-header">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: 1 }}>
        <h1 style={{ fontSize: '22px', margin: 0, fontWeight: 800, letterSpacing: '0.02em', color: '#ffffff', textTransform: 'uppercase' }}>
          Peninsula
        </h1>
        <span style={{ fontSize: '12px', color: 'var(--accent-orange)', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', paddingLeft: '0.05em' }}>
          Mobile Mechanic
        </span>
      </div>

      {/* Desktop Horizontal Navigation Links */}
      <div className="desktop-nav-links">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`desktop-nav-link ${activeSection === tab.id ? 'active' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <motion.a
          href="tel:6418402842"
          style={{
            background: 'var(--accent-orange)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 14px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: 'var(--shadow-orange)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={14} />
          <span>Call Us</span>
        </motion.a>
      </div>
    </header>
  );
};
