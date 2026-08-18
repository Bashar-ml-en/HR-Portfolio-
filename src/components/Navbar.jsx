import React, { useState, useEffect } from 'react';
import { UserCheck, FileText, Menu, X, Linkedin, Mail } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects & Impact', href: '#projects' },
    { name: 'HR Competencies', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '12px 0' : '20px 0',
        transition: 'all 0.3s ease',
      }}
      className={isScrolled ? 'glass-nav' : ''}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: '800',
              fontSize: '1.2rem',
              boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
            }}
          >
            OM
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              Omer Abdalaziz
            </div>
            <div style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              HR Operations & Talent Support
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.92rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#f59e0b')}
              onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://www.linkedin.com/in/omer-abdalaziz-mohammed-93704b299"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#60a5fa',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0a66c2';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.color = '#60a5fa';
            }}
          >
            <Linkedin size={18} />
          </a>

          <button onClick={onOpenResume} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
            <FileText size={16} />
            <span>View Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}
