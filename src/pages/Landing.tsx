import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';
import { FiSun, FiMoon, FiBookOpen, FiCalendar, FiBarChart2, FiZap, FiCheckCircle } from 'react-icons/fi';

const Landing: React.FC = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useThemeStore();

    return (
        <div className="landing">
            {/* Navigation */}
            <nav className="landing-nav">
                <div className="landing-logo">
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">Sketchbyte</span>
                </div>
                <div className="landing-nav-links">
                    <a href="#features">Features</a>
                    <a href="#study-planner">Study Planner</a>
                    <a href="#templates">Templates</a>
                    <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '18px', padding: '4px' }}>
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </button>
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

            {/* ── AI STUDY PLANNER SECTION ── */}
            <section id="study-planner" style={{
                padding: '80px 24px',
                background: 'linear-gradient(180deg, var(--bg) 0%, #16103a 50%, var(--bg) 100%)',
                position: 'relative', overflow: 'hidden',
            }}>
                {/* Background glow circles */}
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(103,232,249,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                    {/* Section header */}
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '6px 18px', borderRadius: '999px', marginBottom: '20px',
                            background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.3)',
                            color: '#a78bfa', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em',
                        }}>
                            <FiZap size={13} /> NEW FEATURE
                        </div>
                        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, margin: '0 0 16px', color: 'var(--text-primary)', lineHeight: 1.15 }}>
                            AI Study Planner
                            <span style={{
                                display: 'block', fontSize: 'clamp(28px, 5vw, 44px)',
                                background: 'linear-gradient(135deg, #a78bfa, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            }}>Built for Students.</span>
                        </h2>
                        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                            Auto-generate a smart, adaptive study timetable based on your syllabus, exam date, and weak subjects — 100% free, no AI API needed.
                        </p>
                    </div>

                    {/* Main feature card + sidebar */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>

                        {/* LEFT — interactive mockup */}
                        <div style={{
                            background: 'var(--surface, #1a1535)', borderRadius: '20px', overflow: 'hidden',
                            border: '1px solid rgba(167,139,250,0.2)', boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
                        }}>
                            {/* Mockup header */}
                            <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(167,139,250,0.15)', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(167,139,250,0.06)' }}>
                                <FiBookOpen size={16} color="#a78bfa" />
                                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary, #e2e8f0)' }}>AI Study Planner</span>
                                <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
                                    {['Create Plan', 'Timetable', 'Dashboard'].map((t, i) => (
                                        <span key={t} style={{
                                            padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600,
                                            background: i === 1 ? '#7c3aed' : 'transparent',
                                            color: i === 1 ? 'white' : 'rgba(148,163,184,0.6)',
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Mockup timetable */}
                            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {[
                                    { date: 'Mon, 3 Mar', tasks: [{ name: 'Data Structures', topic: 'Arrays & Hashing', type: 'study', h: '2h', weak: true }, { name: 'DBMS', topic: 'Normalization', type: 'study', h: '1.5h', weak: false }] },
                                    { date: 'Tue, 4 Mar', tasks: [{ name: 'All Subjects', topic: 'Spaced Revision', type: 'revision', h: '2h', weak: false }] },
                                    { date: 'Wed, 5 Mar', tasks: [{ name: 'Data Structures', topic: 'Trees & Graphs', type: 'study', h: '2h', weak: true }, { name: 'OS', topic: 'Scheduling', type: 'study', h: '1h', weak: false }] },
                                ].map(day => (
                                    <div key={day.date} style={{ borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)', padding: '12px', background: 'rgba(255,255,255,0.02)' }}>
                                        <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.04em' }}>📅 {day.date}</div>
                                        {day.tasks.map((task, ti) => {
                                            const colors = { study: { bg: 'rgba(167,139,250,0.12)', text: '#a78bfa', label: 'Study' }, revision: { bg: 'rgba(103,232,249,0.12)', text: '#67e8f9', label: 'Revision' } };
                                            const c = colors[task.type as 'study' | 'revision'];
                                            return (
                                                <div key={ti} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 10px', borderRadius: '8px', background: c.bg, marginBottom: ti < day.tasks.length - 1 ? '6px' : 0 }}>
                                                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: `2px solid ${c.text}`, flexShrink: 0 }} />
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>{task.topic}</div>
                                                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>{task.name} · {task.h}</div>
                                                    </div>
                                                    {task.weak && <span style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '999px', background: 'rgba(252,165,165,0.15)', color: '#fca5a5', border: '1px solid #fca5a540' }}>WEAK</span>}
                                                    <span style={{ fontSize: '10px', padding: '2px 7px', borderRadius: '999px', background: c.bg, color: c.text, border: `1px solid ${c.text}40` }}>{c.label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}

                                {/* Progress bar preview */}
                                <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '12px', color: '#94a3b8' }}>📊 Overall Progress</span>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#a78bfa' }}>42%</span>
                                    </div>
                                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '999px' }}>
                                        <div style={{ width: '42%', height: '100%', background: 'linear-gradient(90deg, #7c3aed, #a78bfa)', borderRadius: '999px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — feature list + CTA */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '8px' }}>

                            {[
                                { icon: <FiZap size={20} color="#fbbf24" />, title: 'Smart Timetable Generator', desc: 'Enter your exam date, subjects, topics, and daily hours. The planner builds your full schedule automatically with balanced distribution.', accent: '#fbbf2420' },
                                { icon: <FiCalendar size={20} color="#a78bfa" />, title: 'Weak Subject Adaptive', desc: 'Mark subjects as "Weak" or rate topics "Not Confident" — the algorithm automatically allocates more time to areas you need most.', accent: '#a78bfa20' },
                                { icon: <FiBarChart2 size={20} color="#67e8f9" />, title: 'Spaced Repetition Built-In', desc: 'Revision sessions inserted every 4 study sessions. Final revision block auto-scheduled 2 days before exam day.', accent: '#67e8f920' },
                                { icon: <FiCheckCircle size={20} color="#86efac" />, title: 'Progress Dashboard & Streak', desc: 'Track overall % done, per-subject progress bars, study streak, and upcoming tasks. Gamified to keep you motivated.', accent: '#86efac20' },
                            ].map(f => (
                                <div key={f.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: f.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,255,255,0.06)' }}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ margin: '0 0 6px', fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{f.title}</h3>
                                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Pill badges */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
                                {['No AI API needed', '100% Offline', 'localStorage', 'Free forever', 'Whiteboard integration'].map(b => (
                                    <span key={b} style={{
                                        padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600,
                                        background: 'rgba(167,139,250,0.1)', color: '#a78bfa',
                                        border: '1px solid rgba(167,139,250,0.25)',
                                    }}>{b}</span>
                                ))}
                            </div>

                            {/* CTA buttons */}
                            <div style={{ display: 'flex', gap: '12px', paddingTop: '8px', flexWrap: 'wrap' }}>
                                <button onClick={() => navigate('/study-planner')} style={{
                                    padding: '14px 28px', borderRadius: '12px', border: 'none',
                                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: 'white',
                                    cursor: 'pointer', fontWeight: 800, fontSize: '15px',
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    boxShadow: '0 8px 28px rgba(124,58,237,0.45)',
                                    transition: 'transform 0.15s, box-shadow 0.15s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(124,58,237,0.55)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.45)'; }}
                                    id="planner-cta"
                                >
                                    <FiBookOpen size={16} /> Try Study Planner →
                                </button>
                                <button onClick={() => navigate('/canvas')} style={{
                                    padding: '14px 24px', borderRadius: '12px',
                                    border: '1px solid rgba(167,139,250,0.3)', background: 'transparent',
                                    color: '#a78bfa', cursor: 'pointer', fontWeight: 700, fontSize: '15px',
                                    transition: 'all 0.15s',
                                }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(167,139,250,0.08)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                >
                                    Open Whiteboard ↗
                                </button>
                            </div>
                        </div>
                    </div>
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
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="hero-cta" onClick={() => navigate('/canvas')} id="final-cta">
                        Open Whiteboard →
                    </button>
                    <button onClick={() => navigate('/study-planner')} style={{
                        padding: '14px 28px', borderRadius: '12px',
                        border: '2px solid rgba(167,139,250,0.4)', background: 'transparent',
                        color: '#a78bfa', cursor: 'pointer', fontWeight: 700, fontSize: '15px',
                        display: 'flex', alignItems: 'center', gap: '8px',
                    }}
                        id="final-planner-cta"
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(167,139,250,0.1)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                        <FiBookOpen size={15} /> Try Study Planner
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-brand">
                    <span className="logo-icon">✦</span>
                    <span>Sketchbyte</span>
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
