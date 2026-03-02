import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="landing">
            {/* Navigation */}
            <nav className="landing-nav">
                <div className="landing-logo">
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">Antigravity</span>
                </div>
                <div className="landing-nav-links">
                    <a href="#features">Features</a>
                    <a href="#templates">Templates</a>
                    <button className="nav-cta" onClick={() => navigate('/canvas')} id="nav-cta">
                        Launch App →
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="landing-hero">
                <div className="hero-badge">🚀 Free • Unlimited • Open Source</div>
                <h1 className="hero-title">
                    Think Without
                    <span className="hero-gradient"> Limits.</span>
                </h1>
                <p className="hero-subtitle">
                    The free, unlimited visual whiteboard built for students and developers.
                    Diagram, design, and brainstorm — no login, no paywalls, no limits.
                </p>
                <div className="hero-actions">
                    <button className="hero-cta" onClick={() => navigate('/canvas')} id="hero-cta">
                        Start Drawing — It's Free
                    </button>
                    <a href="https://github.com" className="hero-secondary" target="_blank" rel="noopener noreferrer">
                        ⭐ Star on GitHub
                    </a>
                </div>
                <div className="hero-canvas-preview">
                    <div className="preview-ui">
                        <div className="preview-toolbar">
                            {['▢', '○', '/', '↗', '✏', 'T'].map((icon, i) => (
                                <div key={i} className="preview-tool">{icon}</div>
                            ))}
                        </div>
                        <div className="preview-canvas">
                            <div className="preview-shape rect" style={{ left: '10%', top: '15%', width: 120, height: 60 }}>
                                <span>Start</span>
                            </div>
                            <div className="preview-arrow" style={{ left: '22%', top: '35%' }}>↓</div>
                            <div className="preview-shape diamond" style={{ left: '8%', top: '45%', width: 145, height: 55 }}>
                                <span>Process Data</span>
                            </div>
                            <div className="preview-arrow" style={{ left: '22%', top: '63%' }}>↓</div>
                            <div className="preview-shape rect success" style={{ left: '10%', top: '72%', width: 120, height: 50 }}>
                                <span>Output</span>
                            </div>
                            <div className="preview-shape db" style={{ right: '8%', top: '10%', width: 150, height: 120 }}>
                                <div className="db-header">📋 Users</div>
                                <div className="db-row">🔑 id (PK)</div>
                                <div className="db-row">📝 name</div>
                                <div className="db-row">📧 email</div>
                            </div>
                            <div className="preview-pencil">
                                <svg width="140" height="60" viewBox="0 0 140 60">
                                    <path d="M10,50 Q40,10 70,30 Q100,50 130,15" stroke="#a78bfa" strokeWidth="3" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="landing-features" id="features">
                <h2>Everything you need. Nothing you don't.</h2>
                <div className="features-grid">
                    {[
                        { icon: '✏️', title: '9 Drawing Tools', desc: 'Rectangle, Circle, Line, Arrow, Pencil, Text, Eraser, Select & Pan' },
                        { icon: '💾', title: 'Auto-Save', desc: 'Everything saved locally in your browser. No account needed.' },
                        { icon: '📤', title: 'Export Anywhere', desc: 'Export as PNG, SVG, or save as JSON project files.' },
                        { icon: '📋', title: 'Multiple Boards', desc: 'Create unlimited boards, switch between them instantly.' },
                        { icon: '⚡', title: 'Dev Templates', desc: 'Flowcharts, DB schema, and DSA visualization templates.' },
                        { icon: '🎨', title: 'Infinite Canvas', desc: 'Pan, zoom, and draw on an infinite dark canvas. No limits.' },
                        { icon: '⌨️', title: 'Keyboard Shortcuts', desc: 'Every tool has a shortcut. Ctrl+Z undo, Delete to remove.' },
                        { icon: '🆓', title: '100% Free Forever', desc: 'No paywalls, no feature gates. Built for students.' },
                    ].map((feat) => (
                        <div key={feat.title} className="feature-card">
                            <div className="feature-icon">{feat.icon}</div>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Templates Preview */}
            <section className="landing-templates" id="templates">
                <h2>Developer Templates</h2>
                <p className="section-sub">Start with purpose-built diagrams for your next project</p>
                <div className="template-preview-grid">
                    {[
                        { emoji: '⚡', name: 'System Design', color: '#a78bfa', desc: 'Flowcharts and architecture diagrams' },
                        { emoji: '🗄️', name: 'DB Schema', color: '#60a5fa', desc: 'Entity-relationship diagrams' },
                        { emoji: '🧮', name: 'DSA Visualization', color: '#34d399', desc: 'Arrays, stacks, trees & more' },
                    ].map(t => (
                        <div key={t.name} className="template-preview-card" style={{ '--accent': t.color } as React.CSSProperties}>
                            <div className="tp-icon">{t.emoji}</div>
                            <h3>{t.name}</h3>
                            <p>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="landing-cta-section">
                <h2>Ready to think without limits?</h2>
                <p>No sign-up. No credit card. Just open and start drawing.</p>
                <button className="hero-cta" onClick={() => navigate('/canvas')} id="final-cta">
                    Open Antigravity →
                </button>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-brand">
                    <span className="logo-icon">✦</span>
                    <span>Antigravity</span>
                </div>
                <p>Built with ❤️ for students and coders. Free forever.</p>
                <p className="footer-founder">
                    Founded by <span className="founder-name">Dhruva M</span>
                </p>
                <p className="footer-tagline">Think Without Limits.</p>
            </footer>
        </div>
    );
};

export default Landing;
