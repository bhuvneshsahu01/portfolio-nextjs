'use client';

import { useState } from 'react';
import { X, Wrench } from 'lucide-react';

export function DevelopmentBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(139, 92, 246, 0.95))',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '12px 16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="content-wrapper" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                position: 'relative'
            }}>
                <Wrench style={{ width: '18px', height: '18px', color: 'white' }} />
                <p style={{
                    margin: 0,
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: 1.4
                }}>
                    <span style={{ fontWeight: 600 }}>Website Under Active Development</span>
                    <span style={{ opacity: 0.9, marginLeft: '8px' }}>
                        • Some features may be in progress. Thank you for your patience!
                    </span>
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        position: 'absolute',
                        right: 0,
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                    aria-label="Dismiss banner"
                >
                    <X style={{ width: '16px', height: '16px', color: 'white' }} />
                </button>
            </div>

            {/* Mobile responsive */}
            <style>{`
                @media (max-width: 640px) {
                    .content-wrapper p {
                        font-size: 13px !important;
                    }
                    .content-wrapper p span:last-child {
                        display: block;
                        margin-left: 0 !important;
                        margin-top: 4px;
                    }
                }
            `}</style>
        </div>
    );
}
