'use client';

import Link from 'next/link';

export default function MyDegreePage() {
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
          <Link className="nav-link active" href="/my-degree">My Degree</Link>
          <Link className="nav-link" href="/campus">Campus & Programs</Link>
        </div>
        <div className="nav-actions">
          <button className="nav-btn ghost">Meet an Advisor</button>
          <button className="nav-btn solid">Apply Now</button>
        </div>
      </nav>

      <section className="section">
        <div className="sec-eyebrow">Progress Dashboard</div>
        <div className="sec-title">My Degree</div>
        <div className="sec-sub">Track your progress toward the B.S. in Entrepreneurship.</div>

        <div style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#002D72', marginBottom: '16px' }}>
            Degree Requirements
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={{ border: '1px solid #e2e5ea', borderRadius: '8px', padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                Major Credits
              </h4>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#002D72' }}>
                30/30 <span style={{ fontSize: '12px', fontWeight: '400', color: '#5a6277' }}>cr</span>
              </div>
              <p style={{ fontSize: '12px', color: '#5a6277', marginTop: '8px' }}>
                10 required courses + 9 elective credits
              </p>
            </div>

            <div style={{ border: '1px solid #e2e5ea', borderRadius: '8px', padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                General Education
              </h4>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#002D72' }}>
                20/36 <span style={{ fontSize: '12px', fontWeight: '400', color: '#5a6277' }}>cr</span>
              </div>
              <p style={{ fontSize: '12px', color: '#5a6277', marginTop: '8px' }}>
                Communication, math, sciences, humanities, social sciences
              </p>
            </div>

            <div style={{ border: '1px solid #e2e5ea', borderRadius: '8px', padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                Service-Learning
              </h4>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#002D72' }}>
                45/80 <span style={{ fontSize: '12px', fontWeight: '400', color: '#5a6277' }}>hrs</span>
              </div>
              <p style={{ fontSize: '12px', color: '#5a6277', marginTop: '8px' }}>
                Track through Eagle Service Network
              </p>
            </div>

            <div style={{ border: '1px solid #e2e5ea', borderRadius: '8px', padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                Writing (CLWS)
              </h4>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#002D72' }}>
                6/12 <span style={{ fontSize: '12px', fontWeight: '400', color: '#5a6277' }}>cr</span>
              </div>
              <p style={{ fontSize: '12px', color: '#5a6277', marginTop: '8px' }}>
                ENT 3114 (3 cr) + ENT 3204 (3 cr) count here
              </p>
            </div>

            <div style={{ border: '1px solid #e2e5ea', borderRadius: '8px', padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                Sustainability (SCGR)
              </h4>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#002D72' }}>
                0/3 <span style={{ fontSize: '12px', fontWeight: '400', color: '#5a6277' }}>cr</span>
              </div>
              <p style={{ fontSize: '12px', color: '#5a6277', marginTop: '8px' }}>
                ENT 3503 satisfies both an elective AND this requirement
              </p>
            </div>

            <div style={{ border: '1px solid #e2e5ea', borderRadius: '8px', padding: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                Total Credits
              </h4>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#002D72' }}>
                50/120 <span style={{ fontSize: '12px', fontWeight: '400', color: '#5a6277' }}>cr</span>
              </div>
              <p style={{ fontSize: '12px', color: '#5a6277', marginTop: '8px' }}>
                Complete all requirements to graduate
              </p>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#002D72', marginBottom: '16px' }}>
              Switch Major or Add Minor?
            </h3>
            <div style={{ border: '1px solid #007749', borderRadius: '8px', padding: '20px', background: '#e6f2ec' }}>
              <p style={{ fontSize: '14px', color: '#1a1a2e', marginBottom: '12px' }}>
                <strong>Important Note:</strong> The Entrepreneurship Minor CANNOT be declared with the BS in Entrepreneurship major. If you want to add a different minor, contact your academic advisor.
              </p>
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  padding: '10px 16px',
                  background: '#007749',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                Ask AI Advisor about Switching
              </Link>
            </div>
          </div>
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
