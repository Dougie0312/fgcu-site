'use client';

import { useState } from 'react';
import Link from 'next/link';
import { courses } from '@/lib/knowledge-base';

export default function CoursesPage() {
  const [filter, setFilter] = useState('all');

  const allCourses = Object.values(courses);
  const filteredCourses =
    filter === 'all'
      ? allCourses
      : allCourses.filter(c => {
          if (filter === 'req') return c.role === 'required';
          if (filter === 'elec') return c.role === 'restricted-elective';
          if (filter === 'dual') return c.isCLWS || c.isSCGR;
          return true;
        });

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
          <Link className="nav-link active" href="/courses">Courses</Link>
          <Link className="nav-link" href="/my-degree">My Degree</Link>
          <Link className="nav-link" href="/campus">Campus & Programs</Link>
        </div>
        <div className="nav-actions">
          <button className="nav-btn ghost">Meet an Advisor</button>
          <button className="nav-btn solid">Apply Now</button>
        </div>
      </nav>

      <section className="section">
        <div className="sec-hdr">
          <div>
            <div className="sec-eyebrow">Curriculum</div>
            <div className="sec-title">Featured courses</div>
            <div className="sec-sub">30 major credits — 10 required + 9 elective credits.</div>
          </div>
        </div>
        <div className="cf">
          <button
            className={`cf-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`cf-btn ${filter === 'req' ? 'active' : ''}`}
            onClick={() => setFilter('req')}
          >
            Required
          </button>
          <button
            className={`cf-btn ${filter === 'elec' ? 'active' : ''}`}
            onClick={() => setFilter('elec')}
          >
            Electives
          </button>
          <button
            className={`cf-btn ${filter === 'dual' ? 'active' : ''}`}
            onClick={() => setFilter('dual')}
          >
            Dual-credit
          </button>
        </div>
        <div className="cc-grid">
          {filteredCourses.map(course => (
            <div
              key={course.code}
              className={`cc ${(course.isCLWS || course.isSCGR) ? 'dual' : ''}`}
            >
              <div className="cc-top">
                <div>
                  <div className="cc-code">{course.code}</div>
                  <div className="cc-name">{course.name}</div>
                </div>
                <div className="cc-bgs">
                  {course.role === 'required' && <span className="cb req">Required</span>}
                  {course.role === 'restricted-elective' && <span className="cb elec">Elective</span>}
                  {course.isCLWS && <span className="cb dual">CLWS writing</span>}
                  {course.isSCGR && <span className="cb dual">SCGR</span>}
                </div>
              </div>
              <div className="cc-desc">{course.description}</div>
              {course.prerequisites.length > 0 && (
                <div className="cc-pre">
                  <div className="pre-dot"></div>
                  Prereq: {course.prerequisites.join(' or ')}
                </div>
              )}
            </div>
          ))}
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
