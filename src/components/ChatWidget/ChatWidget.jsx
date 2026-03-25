/**
 * ChatWidget.jsx — TechAngle Global Chat Widget
 *
 * Behaviour:
 * - First visit: pops open automatically after 8 seconds
 * - Reopens if user scrolls past 40% of page depth
 * - User can close it; once closed it won't auto-reopen in same session
 * - Toggle open/closed by clicking the chat bubble FAB
 * - Quick-reply chips link to WhatsApp with pre-filled messages
 * - Collapsed state shows an unread badge dot
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ChatWidget.css';

const WA_BASE = 'https://wa.me/917907372646';

function wa(msg) {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

const QUICK_REPLIES = [
  { label: '📚 Course Details', msg: 'Hi! I would like to know more about your courses.' },
  //   { label: '💰 Fees & Duration',   msg: 'Hi! Can you share the course fees and duration?' },
  //   { label: '🎓 Placements',        msg: 'Hi! I want to know about your placement support.' },
  { label: '📞 Request a Callback', msg: 'Hi! Please call me back at your earliest convenience.' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false); // track if auto-opened this session
  const [showDot, setShowDot] = useState(true);  // unread badge
  const autoTimer = useRef(null);
  const scrollDone = useRef(false);

  /* ── Auto-open after 8 seconds on first load ── */
  useEffect(() => {
    autoTimer.current = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
        setShowDot(false);
      }
    }, 8000);
    return () => clearTimeout(autoTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Reopen when user scrolls 40% down (once per session) ── */
  useEffect(() => {
    const onScroll = () => {
      if (scrollDone.current || hasOpened) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > 0.4) {
        scrollDone.current = true;
        setIsOpen(true);
        setHasOpened(true);
        setShowDot(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasOpened]);

  const toggle = useCallback(() => {
    setIsOpen(v => {
      if (!v) setShowDot(false); // clear badge when opening
      return !v;
    });
    clearTimeout(autoTimer.current);
    setHasOpened(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setHasOpened(true);           // won't auto-reopen
    clearTimeout(autoTimer.current);
  }, []);

  return (
    <div className="cw-root" aria-live="polite">
      {/* ── Chat Panel ── */}
      <div className={`cw-panel${isOpen ? ' cw-panel--open' : ''}`} role="dialog" aria-label="Chat with TechAngle">

        {/* Header */}
        <div className="cw-header">
          <div className="cw-header__avatar">
            <span className="cw-header__avatar-icon">🎓</span>
            <span className="cw-header__online" aria-hidden="true" />
          </div>
          <div className="cw-header__info">
            <div className="cw-header__name">TechAngle Support</div>
            <div className="cw-header__status">
              <span className="cw-header__dot" />
              Typically replies in minutes
            </div>
          </div>
          <button className="cw-close-btn" onClick={close} aria-label="Close chat">✕</button>
        </div>

        {/* Body */}
        <div className="cw-body">
          {/* Bot bubble */}
          <div className="cw-bubble cw-bubble--bot">
            <p className="cw-bubble__text">
              👋 Hi there! Welcome to <strong>TechAngle</strong>.
              <br /><br />
              How can we help you today? Choose a quick option below or tap the button to chat with us on WhatsApp.
            </p>
            <span className="cw-bubble__time">Just now</span>
          </div>

          {/* Quick reply chips */}
          <div className="cw-chips">
            {QUICK_REPLIES.map(qr => (
              <a
                key={qr.label}
                href={wa(qr.msg)}
                target="_blank"
                rel="noreferrer"
                className="cw-chip"
              >
                {qr.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="cw-footer">
          <a
            href={wa('Hi! I would like to know more about TechAngle courses.')}
            target="_blank"
            rel="noreferrer"
            className="cw-footer__btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.9.524 3.67 1.43 5.185L2.01 22l4.9-1.395A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.045-1.101l-.29-.173-3.005.855.825-2.98-.19-.307A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
            </svg>
            Chat on WhatsApp
          </a>
          <span className="cw-footer__brand">Powered by TechAngle</span>
        </div>
      </div>

      {/* ── Floating Toggle Button ── */}
      <button
        className={`cw-fab${isOpen ? ' cw-fab--open' : ''}`}
        onClick={toggle}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Chat icon (shown when closed) */}
        <span className="cw-fab__icon cw-fab__icon--chat">
          <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </span>
        {/* Close icon (shown when open) */}
        <span className="cw-fab__icon cw-fab__icon--close">✕</span>

        {/* Unread badge */}
        {showDot && !isOpen && (
          <span className="cw-fab__badge" aria-label="New message">1</span>
        )}
      </button>
    </div>
  );
}