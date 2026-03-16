import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer footer-dark">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <span>Evolution</span>
            <span className="brand-dot" aria-hidden="true" />
          </div>
          <p className="footer-desc">
            A trusted HR partner based in New Delhi, specializing in recruitment and staffing solutions across IT, Banking, Retail, and Hospitality sectors.
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Company</div>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <div className="footer-heading">For You</div>
          <Link to="/job-seekers">Job Seekers</Link>
          <Link to="/employers">Employers</Link>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Contact</div>

          <div className="footer-contact">
            <span className="footer-icon">📍</span>
            <span>Bikaji kama place, New Delhi, India</span>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact">
            <span className="footer-icon">✉️</span>
            <span>info@evolutionms.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider" />
        <div className="footer-copy">
          © 2026 Evolution Management Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
