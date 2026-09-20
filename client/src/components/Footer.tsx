import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="custom-footer" id="contact">
      {/* Background glow and ambient light elements */}
      <div className="custom-footer__glow-sphere custom-footer__glow-sphere--1" aria-hidden="true" />
      <div className="custom-footer__glow-sphere custom-footer__glow-sphere--2" aria-hidden="true" />

      {/* TOP DESKTOP CTA BANNER (Image 2) */}
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

      <div className="container custom-footer__main">
        {/* MOBILE HEADER (Image 1 - Brand & Script) */}
        <div className="custom-footer__mobile-brand">
          <div className="custom-footer__mobile-brand-top">
            <a href="/#top" className="custom-footer__brand-link" aria-label="Bhaddar Dental home">
              <img src="/logo.png" alt="Bhaddar Dental Logo" className="custom-footer__brand-logo" />
              <div className="custom-footer__brand-text">
                <span className="custom-footer__brand-name">
                  Bhaddar <span>Dental</span>
                </span>
                <span className="custom-footer__brand-tagline">
                  HEALTHY SMILES BRIGHTER LIVES
                </span>
              </div>
            </a>

            <div className="custom-footer__mobile-script">
              <span>Healthy</span>
              <span>Smiles</span>
              <span>Near You</span>
              <svg
                className="custom-footer__mobile-script-underline"
                viewBox="0 0 70 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C20 3 45 4 68 8"
                  stroke="#92D2D6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <p className="custom-footer__mobile-bio">
            Quality dental care with advanced technology and a compassionate approach. Your smile is our priority.
          </p>
        </div>

        {/* 3 CONTACT ACTION CARDS (Image 1) */}
        <div className="custom-footer__action-cards">
          {/* Card 1: Call Us */}
          <a href="tel:0544613444" className="custom-footer__action-card">
            <div className="custom-footer__action-icon">
              <Phone size={17} />
            </div>
            <div className="custom-footer__action-content">
              <span className="custom-footer__action-title">Call Us</span>
              <span className="custom-footer__action-sub">0544-613444</span>
            </div>
          </a>

          {/* Card 2: Email Us */}
          <a href="mailto:contact@dentalcarebydrawais.com" className="custom-footer__action-card">
            <div className="custom-footer__action-icon">
              <Mail size={17} />
            </div>
            <div className="custom-footer__action-content">
              <span className="custom-footer__action-title">Email Us</span>
              <span className="custom-footer__action-sub custom-footer__action-sub--email">
                contact@dentalcarebydrawais.com
              </span>
            </div>
          </a>

          {/* Card 3: Get Directions */}
          <a
            href="https://maps.google.com/?q=Circular+Road+Near+Butt+Service+Station+Chandni+Chowk+Jalalpur+Jattan"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-footer__action-card"
          >
            <div className="custom-footer__action-icon">
              <MapPin size={17} />
            </div>
            <div className="custom-footer__action-content">
              <span className="custom-footer__action-title">Get Directions</span>
              <span className="custom-footer__action-sub">View on Maps</span>
            </div>
          </a>
        </div>

        {/* MAIN 4-COLUMN DESKTOP / 2-COLUMN MOBILE GRID */}
        <div className="custom-footer__grid">
          {/* Col 1: Desktop Brand Info */}
          <div className="custom-footer__col custom-footer__col--brand">
            <a href="/#top" className="custom-footer__brand-link" aria-label="Bhaddar Dental home">
              <img src="/logo.png" alt="Bhaddar Dental Logo" className="custom-footer__brand-logo" />
              <div className="custom-footer__brand-text">
                <span className="custom-footer__brand-name">
                  Bhaddar <span>Dental</span>
                </span>
              </div>
            </a>
            <p className="custom-footer__col-tagline">
              Dentist &amp; Dental Office — Because Your Smile Matters!
            </p>
            <p className="custom-footer__col-desc">
              Providing compassionate, high-quality dental care with advanced technology for healthier smiles and brighter lives.
            </p>
            <div className="custom-footer__brand-signature">
              <span className="custom-footer__script-text">A Healthier Smile A Brighter You</span>
              <div className="custom-footer__signature-line" />
            </div>
          </div>

          {/* Col 2: EXPLORE / QUICK LINKS */}
          <div className="custom-footer__col custom-footer__col--links">
            <div className="custom-footer__heading">
              <span className="custom-footer__heading-text custom-footer__heading-text--desktop">EXPLORE</span>
              <span className="custom-footer__heading-text custom-footer__heading-text--mobile">QUICK LINKS</span>
              <span className="custom-footer__heading-underline" />
            </div>
            <ul className="custom-footer__nav-list">
              <li>
                <a href="/#about" className="custom-footer__nav-link">
                  <span>About Clinic</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
              <li>
                <a href="/#services" className="custom-footer__nav-link">
                  <span>Treatments</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
              <li>
                <a href="/#facilities" className="custom-footer__nav-link">
                  <span>Facilities</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
              <li>
                <a href="/#team" className="custom-footer__nav-link">
                  <span>Our Experts</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
              <li>
                <a href="/#clinics" className="custom-footer__nav-link">
                  <span>Our Clinics</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
              <li>
                <a href="/#services" className="custom-footer__nav-link custom-footer__nav-link--extra">
                  <span>FAQs</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
              <li>
                <a href="/#contact" className="custom-footer__nav-link custom-footer__nav-link--extra">
                  <span>Contact Us</span>
                  <ChevronRight size={15} className="custom-footer__nav-arrow" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: FIND US (and mobile combined with Clinic Hours) */}
          <div className="custom-footer__col custom-footer__col--find">
            <div className="custom-footer__heading">
              <span className="custom-footer__heading-text">FIND US</span>
              <span className="custom-footer__heading-underline" />
            </div>
            <div className="custom-footer__info-group">
              <div className="custom-footer__info-item">
                <div className="custom-footer__info-icon">
                  <MapPin size={17} />
                </div>
                <div className="custom-footer__info-text">
                  <strong className="custom-footer__info-title">
                    Circular Road, Near Butt Service Station
                  </strong>
                  <span className="custom-footer__info-sub">
                    Chandni Chowk, Jalalpur Jattan 50700
                  </span>
                </div>
              </div>

              <a
                href="mailto:contact@dentalcarebydrawais.com"
                className="custom-footer__info-item custom-footer__info-item--clickable"
              >
                <div className="custom-footer__info-icon">
                  <Mail size={17} />
                </div>
                <div className="custom-footer__info-text">
                  <span className="custom-footer__info-email">
                    contact@dentalcarebydrawais.com
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile-only Clinic Hours placed under Find Us */}
            <div className="custom-footer__mobile-hours-wrap">
              <div className="custom-footer__heading">
                <span className="custom-footer__heading-text">CLINIC HOURS</span>
                <span className="custom-footer__heading-underline" />
              </div>
              <div className="custom-footer__hours-group">
                <div className="custom-footer__info-item">
                  <div className="custom-footer__info-icon">
                    <Clock3 size={17} />
                  </div>
                  <div className="custom-footer__info-text">
                    <strong className="custom-footer__info-title">Mon – Fri</strong>
                    <span className="custom-footer__info-sub">09:00 – 20:00</span>
                  </div>
                </div>
                <div className="custom-footer__info-item">
                  <div className="custom-footer__info-icon">
                    <Clock3 size={17} />
                  </div>
                  <div className="custom-footer__info-text">
                    <strong className="custom-footer__info-title">Saturday</strong>
                    <span className="custom-footer__info-sub">10:00 – 16:00</span>
                  </div>
                </div>
                <div className="custom-footer__info-item">
                  <div className="custom-footer__info-icon">
                    <Clock3 size={17} />
                  </div>
                  <div className="custom-footer__info-text">
                    <strong className="custom-footer__info-title">Sunday</strong>
                    <span className="custom-footer__info-sub">By appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: CLINIC HOURS (Desktop Only) */}
          <div className="custom-footer__col custom-footer__col--hours-desktop">
            <div className="custom-footer__heading">
              <span className="custom-footer__heading-text">CLINIC HOURS</span>
              <span className="custom-footer__heading-underline" />
            </div>
            <div className="custom-footer__hours-group">
              <div className="custom-footer__info-item">
                <div className="custom-footer__info-icon">
                  <Clock3 size={17} />
                </div>
                <div className="custom-footer__info-text">
                  <strong className="custom-footer__info-title">Mon – Fri</strong>
                  <span className="custom-footer__info-sub">09:00 – 20:00</span>
                </div>
              </div>
              <div className="custom-footer__info-item">
                <div className="custom-footer__info-icon">
                  <Clock3 size={17} />
                </div>
                <div className="custom-footer__info-text">
                  <strong className="custom-footer__info-title">Saturday</strong>
                  <span className="custom-footer__info-sub">10:00 – 16:00</span>
                </div>
              </div>
              <div className="custom-footer__info-item">
                <div className="custom-footer__info-icon">
                  <Clock3 size={17} />
                </div>
                <div className="custom-footer__info-text">
                  <strong className="custom-footer__info-title">Sunday</strong>
                  <span className="custom-footer__info-sub">By appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIGNATURE SCRIPT (Mobile and Web Bottom Center) */}
        <div className="custom-footer__signature-banner">
          <p className="custom-footer__script-quote">A Healthier Smile A Brighter You</p>
          <div className="custom-footer__script-quote-bar" />
        </div>
      </div>

      {/* BOTTOM FLOWING WAVE GRAPHIC */}
      <div className="custom-footer__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path
            d="M0,45 C280,100 520,10 820,70 C1100,120 1320,30 1440,55 L1440,120 L0,120 Z"
            fill="url(#footer-wave-grad-1)"
            opacity="0.35"
          />
          <path
            d="M0,80 C360,20 680,110 1020,40 C1240,0 1380,85 1440,75 L1440,120 L0,120 Z"
            fill="url(#footer-wave-grad-2)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="footer-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E6148" />
              <stop offset="100%" stopColor="#01263B" />
            </linearGradient>
            <linearGradient id="footer-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92D2D6" />
              <stop offset="100%" stopColor="#114F7A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* COPYRIGHT & LEGAL BOTTOM BAR (Image 1 & 2) */}
      <div className="custom-footer__bottom-bar">
        <div className="container custom-footer__bottom-inner">
          <span className="custom-footer__copyright">
            © 2024 Bhaddar Dental. All Rights Reserved.
          </span>
          <div className="custom-footer__legal-links">
            <a href="#top" className="custom-footer__legal-link">Privacy Policy</a>
            <span className="custom-footer__legal-sep">|</span>
            <a href="#top" className="custom-footer__legal-link">Terms of Service</a>
            <span className="custom-footer__legal-sep">|</span>
            <a href="#top" className="custom-footer__legal-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
