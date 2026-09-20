import React from "react";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="custom-footer" id="contact">
      {/* Background glow and ambient light elements */}
      <div className="custom-footer__glow-sphere custom-footer__glow-sphere--1" aria-hidden="true" />
      <div className="custom-footer__glow-sphere custom-footer__glow-sphere--2" aria-hidden="true" />

      {/* TOP DESKTOP CTA BANNER */}
      <div className="container custom-footer__cta-container">
        <div className="custom-footer-cta">
          <div className="custom-footer-cta__glow" aria-hidden="true" />
          <div className="custom-footer-cta__inner">
            <div className="custom-footer-cta__copy">
              <div className="custom-footer-cta__kicker">
                <span className="custom-footer-cta__kicker-line" />
                <span>CONFIDENCE BEGINS HERE</span>
              </div>
              <h2 className="custom-footer-cta__title">
                Transform Your Smile <br />
                with <em>Expert Care</em>{" "}
                <span className="custom-footer-cta__tooth-emoji" role="img" aria-label="Tooth">
                  🦷
                </span>
              </h2>
              <p className="custom-footer-cta__desc">
                Bhaddar Dental OMFS — Because Your Smile Matters! Tell us what you need and we&apos;ll help you find the right next step.
              </p>
            </div>

            <div className="custom-footer-cta__side">
              <div className="custom-footer-cta__script">
                <span>Healthy</span>
                <span>Smiles</span>
                <span>Brighter Lives</span>
                <svg
                  className="custom-footer-cta__tooth-watermark"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="rgba(146, 210, 214, 0.45)"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M25,25 C35,10 65,10 75,25 C85,40 85,60 70,80 C60,95 55,80 50,65 C45,80 40,95 30,80 C15,60 15,40 25,25 Z" />
                </svg>
              </div>
              <a href="/#clinics" className="custom-footer-cta__btn">
                <span>Our Clinics</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN EXACT REFERENCE FOOTER SECTION */}
      <div className="container custom-footer__main">
        {/* Background Large Glowing Tooth Watermark on the Right */}
        <div className="custom-footer__watermark-wrap" aria-hidden="true">
          <svg
            className="custom-footer__giant-tooth"
            viewBox="0 0 420 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M210 35 C150 35 85 68 60 120 C35 172 45 245 78 295 C98 322 132 335 155 295 C175 250 185 200 210 200 C235 200 245 250 265 295 C288 335 322 322 342 295 C375 245 385 172 360 120 C335 68 270 35 210 35 Z"
              stroke="url(#giant-tooth-glow)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M160 80 C190 55 230 55 260 80 C285 102 305 142 292 190 C276 238 244 278 226 295 C218 303 210 295 210 286 C210 246 222 195 210 175 C198 195 210 246 210 286 C210 295 202 303 194 295 C176 278 144 238 128 190 C115 142 135 102 160 80 Z"
              stroke="url(#giant-tooth-glow-inner)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="giant-tooth-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.32" />
                <stop offset="60%" stopColor="#00838F" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#004D40" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient id="giant-tooth-glow-inner" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#80DEEA" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#004D40" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="custom-footer__grid custom-footer__grid--ref">
          {/* Left Column: Brand & Bio */}
          <div className="custom-footer__col custom-footer__col--ref-brand">
            <a href="/#top" className="custom-footer__brand-header" aria-label="Bhaddar Dental home">
              <img src="/logo.png" alt="Bhaddar Dental OMFS Logo" className="custom-footer__brand-logo" />
              <div className="custom-footer__brand-title">
                <span className="custom-footer__brand-word-white">Bhaddar</span>{" "}
                <span className="custom-footer__brand-word-cyan">Dental</span>
              </div>
            </a>

            <div className="custom-footer__headline-block">
              <h3 className="custom-footer__headline-white">Dentist &amp; Dental Office —</h3>
              <h3 className="custom-footer__headline-cyan">Because Your Smile Matters!</h3>
            </div>

            <p className="custom-footer__bio-text">
              Providing compassionate, high-quality dental care with advanced technology for healthier smiles and brighter lives.
            </p>

            <div className="custom-footer__signature-block">
              <span className="custom-footer__signature-line-text">A Healthier Smile A Brighter You</span>
              <div className="custom-footer__signature-cyan-bar" />
            </div>
          </div>

          {/* Right Column: Explore & Quick Links */}
          <div className="custom-footer__col custom-footer__col--ref-links">
            <div className="custom-footer__ref-heading">
              <span className="custom-footer__ref-kicker">EXPLORE</span>
              <h4 className="custom-footer__ref-title">QUICK LINKS</h4>
              <div className="custom-footer__ref-underline" />
            </div>

            <ul className="custom-footer__ref-nav-list">
              <li>
                <a href="/#about" className="custom-footer__ref-link">
                  <span>About Clinic</span>
                  <ChevronRight size={16} className="custom-footer__ref-chevron" />
                </a>
              </li>
              <li>
                <a href="/#services" className="custom-footer__ref-link">
                  <span>Treatments</span>
                  <ChevronRight size={16} className="custom-footer__ref-chevron" />
                </a>
              </li>
              <li>
                <a href="/#facilities" className="custom-footer__ref-link">
                  <span>Facilities</span>
                  <ChevronRight size={16} className="custom-footer__ref-chevron" />
                </a>
              </li>
              <li>
                <a href="/#team" className="custom-footer__ref-link">
                  <span>Our Experts</span>
                  <ChevronRight size={16} className="custom-footer__ref-chevron" />
                </a>
              </li>
              <li>
                <a href="/#clinics" className="custom-footer__ref-link">
                  <span>Our Clinics</span>
                  <ChevronRight size={16} className="custom-footer__ref-chevron" />
                </a>
              </li>
              <li>
                <a href="/#contact" className="custom-footer__ref-link">
                  <span>Contact Us</span>
                  <ChevronRight size={16} className="custom-footer__ref-chevron" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM FLOWING GLOWING WAVE GRAPHIC */}
      <div className="custom-footer__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path
            d="M0,50 C280,110 520,15 820,75 C1100,125 1320,35 1440,60 L1440,120 L0,120 Z"
            fill="url(#footer-wave-grad-1)"
            opacity="0.4"
          />
          <path
            d="M0,85 C360,25 680,115 1020,45 C1240,5 1380,90 1440,80 L1440,120 L0,120 Z"
            fill="url(#footer-wave-grad-2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="footer-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004D40" />
              <stop offset="50%" stopColor="#00838F" />
              <stop offset="100%" stopColor="#001824" />
            </linearGradient>
            <linearGradient id="footer-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0097A7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#001F29" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* COPYRIGHT & LEGAL BOTTOM BAR */}
      <div className="custom-footer__bottom-bar">
        <div className="container custom-footer__bottom-inner">
          <span className="custom-footer__copyright">
            © {new Date().getFullYear()} Bhaddar Dental. All Rights Reserved.
          </span>
          <div className="custom-footer__legal-links">
            <a href="/#top" className="custom-footer__legal-link">Privacy Policy</a>
            <span className="custom-footer__legal-sep">|</span>
            <a href="/#top" className="custom-footer__legal-link">Terms of Service</a>
            <span className="custom-footer__legal-sep">|</span>
            <a href="/#clinics" className="custom-footer__legal-link">Our Clinics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
