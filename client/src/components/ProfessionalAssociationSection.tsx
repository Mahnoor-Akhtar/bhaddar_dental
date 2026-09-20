import React from "react";
import {
  ShieldCheck,
  Users,
  Heart,
  ExternalLink,
  CalendarDays,
  Building2,
} from "lucide-react";

export function ProfessionalAssociationSection() {
  return (
    <section id="association" className="assoc-section section-pad animate-in">
      {/* Background Decorative Art & Glows */}
      <div className="assoc-bg-decor" aria-hidden="true">
        <div className="assoc-bg-glow assoc-bg-glow--1" />
        <div className="assoc-bg-glow assoc-bg-glow--2" />
        
        {/* Abstract Tooth & Care Beyond Teeth Art (Top Right) */}
        <div className="assoc-bg-tooth-wrap">
          <span className="assoc-bg-script">Better Healthcare Together</span>
          <div className="assoc-bg-tooth">
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 8C32 8 20 18 16 32C11 48 16 68 24 88C28 98 33 112 40 112C46 112 46 96 50 96C54 96 54 112 60 112C67 112 72 98 76 88C84 68 89 48 84 32C80 18 68 8 50 8Z"
                stroke="rgba(146, 210, 214, 0.22)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34 32C38 38 44 42 50 42C56 42 62 38 66 32"
                stroke="rgba(146, 210, 214, 0.18)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="assoc-bg-tooth-label">
              <span>CARE</span>
              <span>BEYOND</span>
              <span>TEETH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container assoc-container">
        {/* Section Header */}
        <div className="assoc-header">
          <p className="eyebrow">
            <span className="eyebrow__rule" />
            PROFESSIONAL ASSOCIATION
          </p>
          <h2 className="assoc-title">
            Our CEO is Part of <span className="assoc-highlight">Marham</span>
          </h2>
          <p className="assoc-description">
            Our CEO is also associated with Marham, Pakistan’s leading digital healthcare
            platform, reflecting a continued commitment to accessible, trusted, and
            patient-focused healthcare.
          </p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="assoc-grid">
          {/* LEFT SIDE: Doctor / CEO Profile */}
          <div className="assoc-profile-card">
            <div className="assoc-profile-card__photo-box">
              <img
                src="/CEO.png"
                alt="Dr. Umair Farooq - Oral & Maxillofacial Surgeon"
                className="assoc-profile-card__img"
                loading="lazy"
              />
            </div>

            <div className="assoc-profile-card__info">
              <div className="assoc-profile-card__name-badge">
                <span className="assoc-rule" />
                <h3 className="assoc-doctor-name">DR. UMAIR FAROOQ</h3>
                <p className="assoc-doctor-title">Oral &amp; Maxillofacial Surgeon</p>
                <p className="assoc-doctor-creds">BDS, MDS (OMFS)</p>
              </div>

              <ul className="assoc-doctor-highlights">
                <li>
                  <span className="assoc-mini-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.5 2 6 4 5 7C3.8 10.5 5 15 7 19C8 21 9 22 10.5 22C12 22 12 19 12 19C12 19 12 22 13.5 22C15 22 16 21 17 19C19 15 20.2 10.5 19 7C18 4 15.5 2 12 2Z" />
                    </svg>
                  </span>
                  <span>Oral &amp; Maxillofacial Surgeon</span>
                </li>
                <li>
                  <span className="assoc-mini-icon">
                    <Building2 size={16} />
                  </span>
                  <span>Consultant at City Hospital Gujrat</span>
                </li>
                <li>
                  <span className="assoc-mini-icon">
                    <ShieldCheck size={16} />
                  </span>
                  <span>PMDC Verified</span>
                </li>
                <li>
                  <span className="assoc-mini-icon">
                    <CalendarDays size={16} />
                  </span>
                  <span>10+ Years Experience</span>
                </li>
              </ul>

              <div className="assoc-doctor-quote">
                <p>“Committed to better smiles and healthier lives.”</p>
                <div className="assoc-quote-line" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Marham Card */}
          <div className="assoc-marham-card">
            <div className="assoc-marham-content">
              {/* Marham Header */}
              <div className="assoc-marham-brand">
                <div className="assoc-marham-logo">
                  <span>M</span>
                </div>
                <div>
                  <h3 className="assoc-marham-title">MARHAM</h3>
                  <p className="assoc-marham-subtitle">Digital Healthcare Platform</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="assoc-marham-quote">
                “Connecting patients with trusted healthcare professionals.”
              </p>

              {/* 3 Features */}
              <div className="assoc-marham-features">
                <div className="assoc-marham-pill">
                  <span className="assoc-pill-icon">
                    <Users size={16} />
                  </span>
                  <div className="assoc-pill-text">
                    <strong>Trusted</strong>
                    <span>Platform</span>
                  </div>
                </div>

                <div className="assoc-marham-pill">
                  <span className="assoc-pill-icon">
                    <ShieldCheck size={16} />
                  </span>
                  <div className="assoc-pill-text">
                    <strong>Verified</strong>
                    <span>Professionals</span>
                  </div>
                </div>

                <div className="assoc-marham-pill">
                  <span className="assoc-pill-icon">
                    <Heart size={16} />
                  </span>
                  <div className="assoc-pill-text">
                    <strong>Better</strong>
                    <span>Healthcare Access</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.marham.pk/doctors/gujrat/maxillofacial-surgeon/dr-umair-farooq"
                target="_blank"
                rel="noopener noreferrer"
                className="assoc-marham-cta"
                id="cta-marham-association"
              >
                <span>VIEW ON MARHAM</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Subtle Phone Mockup Visual */}
            <div className="assoc-marham-visual" aria-hidden="true">
              <div className="assoc-phone-mockup">
                <div className="assoc-phone-notch" />
                <div className="assoc-phone-screen">
                  <div className="assoc-phone-m-logo">M</div>
                  <p className="assoc-phone-text">
                    Better Healthcare<br />
                    <span>For A Healthier</span><br />
                    <strong>Pakistan</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE STRIP */}
        <div className="assoc-feature-strip">
          <div className="assoc-feature-box">
            <div className="assoc-feature-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4 5 7C3.8 10.5 5 15 7 19C8 21 9 22 10.5 22C12 22 12 19 12 19C12 19 12 22 13.5 22C15 22 16 21 17 19C19 15 20.2 10.5 19 7C18 4 15.5 2 12 2Z" />
              </svg>
            </div>
            <div className="assoc-feature-meta">
              <strong>Expert Care</strong>
              <p>Advanced &amp; modern treatments</p>
            </div>
          </div>

          <div className="assoc-strip-divider" aria-hidden="true" />

          <div className="assoc-feature-box">
            <div className="assoc-feature-icon">
              <Users size={22} />
            </div>
            <div className="assoc-feature-meta">
              <strong>Patient First</strong>
              <p>Your comfort is our priority</p>
            </div>
          </div>

          <div className="assoc-strip-divider" aria-hidden="true" />

          <div className="assoc-feature-box">
            <div className="assoc-feature-icon">
              <ShieldCheck size={22} />
            </div>
            <div className="assoc-feature-meta">
              <strong>Trusted Practice</strong>
              <p>Quality care you can rely on</p>
            </div>
          </div>

          <div className="assoc-strip-divider" aria-hidden="true" />

          <div className="assoc-feature-box">
            <div className="assoc-feature-icon">
              <Heart size={22} />
            </div>
            <div className="assoc-feature-meta">
              <strong>Healthier Smiles</strong>
              <p>For A brighter tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
