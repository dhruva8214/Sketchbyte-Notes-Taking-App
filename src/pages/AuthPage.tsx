import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '../firebase/authService';
import { useThemeStore } from '../store/themeStore';
import { FiSun, FiMoon } from 'react-icons/fi';

const AuthPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useThemeStore();
    const [tab, setTab] = useState<'login' | 'signup'>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGoogle = async () => {
        setError(''); setLoading(true);
        try {
            await signInWithGoogle();
            navigate('/canvas');
        } catch (e: unknown) {
            setError(e instanceof Error ? e.message : 'Google sign-in failed');
        } finally { setLoading(false); }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); setLoading(true);
        try {
            if (tab === 'login') {
                await signInWithEmail(email, password);
            } else {
                if (!name.trim()) { setError('Name is required'); setLoading(false); return; }
                await signUpWithEmail(email, password, name);
            }
            navigate('/canvas');
        } catch (e: unknown) {
            const msg = e instanceof Error ? e.message : 'Authentication failed';
            setError(msg.replace('Firebase: ', '').replace(/\(auth\/.*?\)/, '').trim());
        } finally { setLoading(false); }
    };

    return (
        <div className="auth-page">
            {/* Background glow orbs */}
            <div className="auth-orb auth-orb-1" />
            <div className="auth-orb auth-orb-2" />

            <div className="auth-card">
                {/* Logo & Theme Toggle */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div className="auth-logo" style={{ marginBottom: 0 }}>
                        <div className="auth-logo-icon">✦</div>
                        <span className="auth-logo-text">Sketchbyte</span>
                    </div>
                    <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme" style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', fontSize: '18px', padding: '4px' }}>
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </button>
                </div>
                <p className="auth-tagline">Think Without Limits.</p>

                {/* Tabs */}
                <div className="auth-tabs">
                    <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => { setTab('login'); setError(''); }}>Sign In</button>
                    <button className={`auth-tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => { setTab('signup'); setError(''); }}>Create Account</button>
                </div>

                {/* Google Button */}
                <button className="auth-google-btn" onClick={handleGoogle} disabled={loading}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                        <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                        <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <div className="auth-divider"><span>or</span></div>

                {/* Form */}
                <form className="auth-form" onSubmit={handleSubmit}>
                    {tab === 'signup' && (
                        <div className="auth-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Dhruva M" value={name}
                                onChange={e => setName(e.target.value)} required autoComplete="name" />
                        </div>
                    )}
                    <div className="auth-field">
                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" value={email}
                            onChange={e => setEmail(e.target.value)} required autoComplete="email" />
                    </div>
                    <div className="auth-field">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" value={password}
                            onChange={e => setPassword(e.target.value)} required autoComplete={tab === 'login' ? 'current-password' : 'new-password'} />
                    </div>

                    {error && <p className="auth-error">⚠ {error}</p>}

                    <button type="submit" className="auth-submit-btn" disabled={loading}>
                        {loading ? <span className="auth-btn-spinner" /> : null}
                        {loading ? 'Please wait...' : tab === 'login' ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <p className="auth-footer-note">
                    Free forever · No credit card · Your data stays private
                </p>
            </div>
        </div>
    );
};

export default AuthPage;
