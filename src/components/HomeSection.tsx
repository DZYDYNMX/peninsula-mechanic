import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';
import { Footer } from './Footer';

import Link from 'next/link';

export const HomeSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } }
  };

  return (
    <motion.div
      className="scroll-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Brand Hero Welcome - Full Bleed Overlay */}
      <motion.div 
        variants={itemVariants} 
        className="hero-container"
      >
        <img 
          src="/hero.webp" 
          alt="Mechanic working on a car in a driveway" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          fetchPriority="high"
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,27,42,0.4) 0%, rgba(13,27,42,0.8) 50%, rgba(13,27,42,0.98) 100%)', zIndex: 1 }} />
        
        <div style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center', padding: '0 20px 32px 20px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', margin: '0 0 4px 0', lineHeight: 1.05, textTransform: 'uppercase' }}>
            YOUR MECHANIC.<br />YOUR DRIVEWAY.
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '18px',
            margin: '0 0 16px 0',
            fontWeight: 500
          }}>
            Top-rated mobile auto repair. We fix cars in your driveway.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{ display: 'flex', color: '#f07230' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff' }}>5.0 (14 Google Reviews)</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div style={{ paddingBottom: '32px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        
        {/* Main Hero Actions */}
        <motion.div
          variants={itemVariants}
          className="service-card"
          style={{
            background: 'var(--bg-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          <h2 style={{ fontSize: '20px', color: 'var(--navy)', fontWeight: 800, margin: 0 }}>Need a car mechanic near you?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', margin: 0, lineHeight: 1.5 }}>
            Tell us your vehicle make, model, and symptoms. Our onsite mechanics handle everything from brake pad replacement and alternator replacement to check engine light diagnostics and fluid changes. We'll give you an honest quote and come directly to your location for same-day service when available.
          </p>
          <div style={{ display: 'flex', gap: '12px', width: '100%', marginTop: '4px' }}>
            <Link
              href="/contact"
              className="btn-orange"
              style={{ flex: 1, fontSize: '15px', padding: '12px 16px', textAlign: 'center', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <span>Book Service</span>
            </Link>
            <Link
              href="/services"
              className="btn-outline"
              style={{ flex: 1, fontSize: '15px', padding: '12px 16px', textAlign: 'center', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <span>View Services</span>
            </Link>
          </div>
        </motion.div>

        {/* Why Choose a Mobile Mechanic? */}
        <motion.div
          variants={itemVariants}
          className="service-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <h2 style={{ fontSize: '20px', color: 'var(--navy)', margin: 0, fontWeight: 800 }}>Why Choose a Mobile Mechanic?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden' }}>
            {/* Header Row */}
            <div style={{ padding: '12px 16px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Traditional Shop</span>
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(224, 92, 26, 0.06)', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Peninsula (Us)</span>
            </div>
            {/* Rows */}
            {[
              ['$$$ Dealership markup', '$$ Fair mobile pricing'],
              ['2-3 day wait typical', 'Same-day appointments'],
              ['Tow truck required', 'We come to your driveway'],
              ['Stuck in a waiting room', 'Stay home or at work'],
            ].map(([shop, mobile], i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--text-secondary)', borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none', borderRight: '1px solid var(--border-color)', lineHeight: 1.4 }}>{shop}</div>
                <div style={{ padding: '12px 16px', fontSize: '14px', color: 'var(--navy)', fontWeight: 600, borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none', lineHeight: 1.4 }}>{mobile}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SEO Rich Description Section */}
        <motion.div
          variants={itemVariants}
          className="service-card"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <h2 style={{ fontSize: '22px', color: 'var(--text-primary)', margin: 0, fontWeight: 800 }}>Reliable Mobile Auto Repair on the Virginia Peninsula</h2>
          <div style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: 0 }}>
              Peninsula Mobile Mechanic is your trusted on-the-go repair service, providing expert automotive care throughout Hampton, Newport News, Williamsburg, and Yorktown. We eliminate the frustration of dealership wait times and expensive towing by bringing our fully-equipped repair shop directly to your home, office, or roadside location.
            </p>
            <p style={{ margin: 0 }}>
              Our comprehensive mobile services cover everything your vehicle needs to stay safe and reliable. We specialize in precision brake pad and rotor replacements, check engine light diagnostics using advanced scanners, cooling system repairs, and routine maintenance like full synthetic oil changes. Whether your car won't start due to a faulty alternator or you simply need a tune-up before a long trip, our mechanics arrive ready to fix the problem on-site.
            </p>
            <p style={{ margin: 0 }}>
              At Peninsula Mobile Mechanic, we pride ourselves on transparent pricing, clear communication, and high-quality workmanship. We service all makes and models, using premium parts to ensure lasting repairs. Don't let car trouble disrupt your busy day—book your mobile repair appointment today and experience the convenience of professional mechanics who come to you.
            </p>
          </div>
        </motion.div>

        {/* Areas We Serve */}
        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0, fontWeight: 800 }}>Areas We Serve</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { name: 'Hampton', slug: 'hampton' },
              { name: 'Newport News', slug: 'newport-news' },
              { name: 'Williamsburg', slug: 'williamsburg' },
              { name: 'Yorktown', slug: 'yorktown' },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                style={{
                  padding: '8px 16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Map Embed */}
        <motion.div variants={itemVariants} style={{ width: '100%', height: '220px', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=Hampton,%20VA&t=&z=10&ie=UTF8&iwloc=&output=embed"
          />
        </motion.div>

        {/* Business Hours */}
        <motion.div variants={itemVariants} style={{ maxWidth: '640px', width: '100%', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: 0, fontWeight: 800 }}>Business Hours</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '15px' }}>Monday - Sunday</span>
            <span style={{ color: 'var(--navy)', fontWeight: 800, fontSize: '15px' }}>8:00 AM - 8:00 PM</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '12px 0 0 0', lineHeight: 1.4 }}>
            * Same-day and emergency roadside appointments are available depending on schedule availability.
          </p>
        </motion.div>

        {/* Google Review CTA */}
        <motion.div variants={itemVariants}>
          <a
            href="https://www.google.com/maps/search/Peninsula+Mobile+Mechanic+Hampton+VA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '16px 20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(224, 92, 26, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Star size={20} fill="var(--accent-orange)" color="var(--accent-orange)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.3 }}>Love our service? Leave us a review!</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>Help other car owners find us on Google</div>
            </div>
            <ChevronRight size={18} color="var(--text-muted)" />
          </a>
        </motion.div>

        {/* Payment Options */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', padding: '10px 0 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Accepted Payments</span>
          </div>
          <div className="payment-logo-grid" style={{ justifyContent: 'center', gap: '10px' }}>
            {['Cash', 'Credit/Debit', 'CashApp', 'Zelle'].map((payment) => (
              <span key={payment} className="payment-pill" style={{ padding: '8px 16px', fontSize: '13px' }}>{payment}</span>
            ))}
          </div>
        </motion.div>

      </div>
      <Footer />
    </motion.div>
  );
};
