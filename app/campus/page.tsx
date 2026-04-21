'use client';

import Link from 'next/link';
import { facilities, programs } from '@/lib/knowledge-base';

export default function CampusPage() {
  return (
    <>
      <nav className="nav">
        <Link className="nav-brand" href="/">
          <div className="nav-seal">
            <div className="nav-seal-inner">EP</div>
          </div>
          <div>
            <div className="nav-name">EaglePreneurs</div>
            <div className="nav-sub">FGCU &middot; School of Entrepreneurship</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/courses">Courses</Link>
          <Link className="nav-link" href="/my-degree">My Degree</Link>
          <Link className="nav-link active" href="/campus">Campus & Programs</Link>
        </div>
        <div className="nav-actions">
          <button className="nav-btn ghost">Meet an Advisor</button>
          <button className="nav-btn solid">Apply Now</button>
        </div>
      </nav>

      <section className="section">
        <div className="sec-eyebrow">Explore</div>
        <div className="sec-title">Lucas Hall Facilities</div>
        <div className="sec-sub">State-of-the-art spaces for learning, innovation, and entrepreneurship.</div>

        <div style={{ marginTop: '32px', display: 'grid', gap: '24px' }}>
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #e2e5ea',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#002D72', marginBottom: '4px' }}>
                {facility.name}
              </h3>
              <p style={{ fontSize: '12px', color: '#5a6277', marginBottom: '12px' }}>
                {facility.location}
              </p>
              <p style={{ fontSize: '13px', color: '#1a1a2e', marginBottom: '12px' }}>
                {facility.description}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                {facility.features.map((feature, fidx) => (
                  <div
                    key={fidx}
                    style={{
                      fontSize: '11px',
                      padding: '6px 10px',
                      background: '#e8eef8',
                      borderRadius: '4px',
                      color: '#002D72',
                    }}
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="sec-eyebrow">Community</div>
        <div className="sec-title">Programs & Competitions</div>
        <div className="sec-sub">Get involved with student organizations, competitions, and entrepreneurial initiatives.</div>

        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {programs.map((program, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                border: '1px solid #e2e5ea',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#002D72', marginBottom: '8px' }}>
                {program.name}
              </h3>
              <p style={{ fontSize: '12px', color: '#1a1a2e', marginBottom: '8px' }}>
                {program.description}
              </p>
              <p style={{ fontSize: '11px', color: '#5a6277' }}>
                {program.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sec-eyebrow">Get Started</div>
        <div className="sec-title">Schedule a Tour</div>
        <div className="sec-sub">Visit Lucas Hall and experience the Epicenter of Entrepreneurial Excellence.</div>

        <div style={{ marginTop: '32px', maxWidth: '500px' }}>
          <form
            style={{
              display: 'grid',
              gap: '12px',
              padding: '20px',
              border: '1px solid #e2e5ea',
              borderRadius: '8px',
            }}
          >
            <div>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#002D72', display: 'block', marginBottom: '4px' }}>
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e2e5ea',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#002D72', display: 'block', marginBottom: '4px' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e2e5ea',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#002D72', display: 'block', marginBottom: '4px' }}>
                Preferred Date
              </label>
              <input
                type="date"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e2e5ea',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '11px 24px',
                background: '#007749',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Schedule Tour
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <strong>EaglePreneurs &middot; FGCU School of Entrepreneurship</strong>
          <span>Daveler & Kauanui School &middot; Lucas Hall, Fort Myers, FL &middot; 2025–2026</span>
        </div>
        <div className="footer-links">
          <a href="https://www.fgcu.edu/school-of-entrepreneurship" target="_blank" rel="noopener noreferrer">Official Site</a>
          <a href="https://catalog.fgcu.edu" target="_blank" rel="noopener noreferrer">Course Catalog</a>
          <a href="#">Advising</a>
          <a href="#">Runway Program</a>
          <a href="#">Schedule a Tour</a>
        </div>
      </footer>
    </>
  );
}
