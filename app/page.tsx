'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [stripInput, setStripInput] = useState('');

  const sendMessage = async (text?: string) => {
    const message = (text || chatInput).trim();
    if (!message || isLoading) return;

    setChatInput('');
    setStripInput('');
    setIsChatOpen(true);

    // Add user message to history
    const newHistory = [...chatHistory, { role: 'user' as const, content: message }];
    setChatHistory(newHistory);

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: chatHistory }),
      });

      const data = await response.json();
      const reply = data.reply || data.error || 'Unable to process your request. Please try again.';

      setChatHistory([...newHistory, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatHistory([...newHistory, { role: 'assistant', content: 'Unable to reach the AI Advisor right now. Please try again later.' }]);
    }

    setIsLoading(false);
  };

  const handleStripInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const message = stripInput.trim();
      if (message) {
        setChatInput(message);
        setStripInput('');
        sendMessage(message);
      }
    }
  };

  return (
    <>
      <nav className="nav">
        <a className="nav-brand" href="/">
          <div className="nav-seal">
            <div className="nav-seal-inner">EP</div>
          </div>
          <div>
            <div className="nav-name">EaglePreneurs</div>
            <div className="nav-sub">FGCU &middot; School of Entrepreneurship</div>
          </div>
        </a>
        <div className="nav-links">
          <a className="nav-link active" href="/">Home</a>
          <Link className="nav-link" href="/courses">Courses</Link>
          <Link className="nav-link" href="/my-degree">My Degree</Link>
          <Link className="nav-link" href="/campus">Campus & Programs</Link>
        </div>
        <div className="nav-actions">
          <button className="nav-btn ghost">Meet an Advisor</button>
          <button className="nav-btn solid">Apply Now</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="eyebrow">
            <div className="eyebrow-line"></div>
            <div className="eyebrow-txt">Fort Myers, Florida &middot; Lucas Hall</div>
          </div>
          <h1>The epicenter of<br /><em>entrepreneurial excellence.</em></h1>
          <p className="hero-p">Launch real ventures, develop your entrepreneurial mindset, and connect with founders and mentors &mdash; all from Lucas Hall at FGCU.</p>
          <div className="hero-btns">
            <button className="hero-btn primary">Explore the B.S. Program ↗</button>
            <button className="hero-btn outline">Tour Lucas Hall</button>
          </div>
          <div className="chips">
            <span className="chip">Lean Startup Methodology</span>
            <span className="chip">120 Credits &middot; B.S. Degree</span>
            <span className="chip">Free Runway Incubator</span>
            <span className="chip">Avg. Class Size: 24</span>
          </div>
        </div>
        <div className="hero-right">
          <div id="hero-pattern" style={{ position: 'absolute', inset: 0, background: '#0d1f45' }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-accent">
            <div className="hero-accent-a"></div>
            <div className="hero-accent-b"></div>
            <div className="hero-accent-c"></div>
          </div>
        </div>
      </section>

      <div className="chatbot-strip" id="chatbot-strip">
        <div className="chatbot-label">
          <div className="chatbot-dot"></div>
          AI Advisor
        </div>
        <div className="chatbot-input-wrap">
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask anything — courses, requirements, deadlines, Lucas Hall..."
            value={stripInput}
            onChange={(e) => setStripInput(e.target.value)}
            onKeyDown={handleStripInput}
            onFocus={() => setIsChatOpen(true)}
            autoComplete="off"
          />
          <button className="chatbot-send" onClick={() => sendMessage(stripInput)}>
            ↪
          </button>
        </div>
        <div className="chatbot-suggestions">
          <button className="sug-btn" onClick={() => sendMessage('Where do I start?')}>Where do I start?</button>
          <button className="sug-btn" onClick={() => sendMessage('What is the SCGR requirement?')}>SCGR requirement</button>
          <button className="sug-btn" onClick={() => sendMessage('Tell me about the Runway Program')}>Runway Program</button>
          <button className="sug-btn" onClick={() => sendMessage('How many service-learning hours do I need?')}>Service learning</button>
          <button className="sug-btn" onClick={() => sendMessage('How do I switch my major to Entrepreneurship?')}>Switch my major</button>
        </div>
      </div>

      <div className={`chat-modal ${isChatOpen ? 'open' : ''}`} id="chat-modal">
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-header-dot"></div>
            <div>
              <div className="chat-header-name">EaglePreneurs AI Advisor</div>
              <div className="chat-header-sub">DKSOE &middot; FGCU School of Entrepreneurship</div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setIsChatOpen(false)} aria-label="Close chat">✕</button>
        </div>
        <div className="chat-messages" id="chat-messages">
          {chatHistory.length === 0 && (
            <div className="chat-bubble ai">
              Hi! I&apos;m your EaglePreneurs AI Advisor. Ask me about the B.S. in Entrepreneurship — courses, graduation requirements, Runway, service-learning hours, or how to switch your major. How can I help?
            </div>
          )}
          {chatHistory.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.role}`}>
              {msg.content}
            </div>
          ))}
          {isLoading && (
            <div className="chat-typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
        <div className="chat-input-bar">
          <input
            type="text"
            className="chat-modal-input"
            placeholder="Type your question..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            autoComplete="off"
          />
          <button className="chat-modal-send" onClick={() => sendMessage()}>↪</button>
        </div>
      </div>

      <div className="stats">
        <div className="sc">
          <div className="sc-icon g">🎓</div>
          <div className="sc-num">80<span>hrs</span></div>
          <div className="sc-label">Service-learning</div>
          <div className="sc-desc">40 hrs for upper-level transfers. Verified via Eagle Service Network.</div>
          <span className="sc-badge g">Required to graduate</span>
        </div>
        <div className="sc">
          <div className="sc-icon b">🎓</div>
          <div className="sc-num">120<span>cr</span></div>
          <div className="sc-label">Credits to graduate</div>
          <div className="sc-desc">Min. 48 must be upper-division (3000–4999 level).</div>
          <span className="sc-badge b">B.S. Entrepreneurship</span>
        </div>
        <div className="sc">
          <div className="sc-icon o">👥</div>
          <div className="sc-num">24</div>
          <div className="sc-label">Students per class</div>
          <div className="sc-desc">Small cohorts for hands-on, project-based learning.</div>
          <span className="sc-badge o">Small class size</span>
        </div>
        <div className="sc">
          <div className="sc-icon g">📊</div>
          <div className="sc-num">6<span>th</span></div>
          <div className="sc-label">Largest major at FGCU</div>
          <div className="sc-desc">One of the fastest-growing programs on campus.</div>
          <span className="sc-badge g">High demand</span>
        </div>
      </div>

      <section className="section">
        <div className="sec-hdr">
          <div>
            <div className="sec-eyebrow">Inside DKSOE</div>
            <div className="sec-title">See the school in action</div>
            <div className="sec-sub">Student stories, facility tours, and program highlights.</div>
          </div>
          <a className="sec-all" href="#">View all videos →</a>
        </div>
        <div className="vid-grid">
          <div className="vc">
            <div className="vt" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="play-c"><div className="play-tri"></div></div>
              <div className="vid-dur">2:34</div>
            </div>
            <div className="vb">
              <div className="vb-tag">Incubator</div>
              <div className="vb-title">Runway Program — Launch your startup this semester</div>
            </div>
          </div>
          <div className="vc">
            <div className="vt" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="play-c"><div className="play-tri"></div></div>
              <div className="vid-dur">1:52</div>
            </div>
            <div className="vb">
              <div className="vb-tag">Facilities</div>
              <div className="vb-title">Inside the Makerspace & Media Lab</div>
            </div>
          </div>
          <div className="vc">
            <div className="vt" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="play-c"><div className="play-tri"></div></div>
              <div className="vid-dur">3:10</div>
            </div>
            <div className="vb">
              <div className="vb-tag">Academics</div>
              <div className="vb-title">Your path to the B.S. in Entrepreneurship</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="sec-hdr">
          <div>
            <div className="sec-eyebrow">Navigate</div>
            <div className="sec-title">Everything you need, in one place</div>
            <div className="sec-sub">Your four main destinations on EaglePreneurs.</div>
          </div>
        </div>
        <div className="qa-grid">
          <Link className="qa" href="/courses">
            <div className="qa-icon b">📚</div>
            <div className="qa-title">Course Info</div>
            <div className="qa-desc">Browse all ENT courses, professors, building locations, schedules, and prerequisites.</div>
            <div className="qa-link">Browse courses →</div>
          </Link>
          <Link className="qa" href="/my-degree">
            <div className="qa-icon g">✅</div>
            <div className="qa-title">My Degree</div>
            <div className="qa-desc">Track your progress — credits, writing req., service learning, civic literacy, and more.</div>
            <div className="qa-link">View dashboard →</div>
          </Link>
          <Link className="qa" href="/campus">
            <div className="qa-icon o">🏛️</div>
            <div className="qa-title">Campus & Programs</div>
            <div className="qa-desc">Explore Lucas Hall, the Runway incubator, Makerspace, competitions, and student orgs.</div>
            <div className="qa-link">Explore campus →</div>
          </Link>
          <a className="qa" href="#">
            <div className="qa-icon b">📋</div>
            <div className="qa-title">Schedule a Tour</div>
            <div className="qa-desc">Book a guided tour of Lucas Hall or meet with a human advisor.</div>
            <div className="qa-link">Book a visit →</div>
          </a>
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
