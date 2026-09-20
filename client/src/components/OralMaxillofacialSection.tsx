import React from "react";
import {
  Award,
  Users,
  ShieldCheck,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface OMHighlight {
  icon: LucideIcon;
  kicker: string;
  title: string;
}

export interface OMLocation {
  name: string;
}

export const omHighlightsData: OMHighlight[] = [
  {
    icon: Award,
    kicker: "Trusted by",
    title: "Thousands",
  },
  {
    icon: Users,
    kicker: "Serving Our",
    title: "Communities",
  },
  {
    icon: ShieldCheck,
    kicker: "Advanced",
    title: "Surgical Care",
  },
];

export const omLocationsData: OMLocation[] = [
  { name: "Gujrat" },
  { name: "Jalalpurjattan" },
];

export function OralMaxillofacialSection() {
  return (
    <section id="oral-surgery" className="omfs-section section-pad animate-in">
      {/* Background Decorative Elements */}
      <div className="omfs-bg-decor" aria-hidden="true">
        <div className="omfs-bg-circle omfs-bg-circle--1" />
        <div className="omfs-bg-circle omfs-bg-circle--2" />
        <svg
          className="omfs-bg-curve"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 300 C 300 100, 800 500, 1150 200"
            stroke="rgba(56, 189, 248, 0.18)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path
            d="M200 450 C 500 250, 900 550, 1180 350"
            stroke="rgba(2, 132, 199, 0.12)"
            strokeWidth="1.5"
          />
          <circle cx="1080" cy="180" r="7" fill="#0284c7" />
        </svg>
      </div>

      <div className="container omfs-container">
        <div className="omfs-grid">
          {/* Left Column: Editorial Information & Highlights */}
          <div className="omfs-left animate-in">
            <div className="omfs-eyebrow">
              <span className="omfs-eyebrow-line" />
              <span>EXPERIENCE. EXPERTISE. A STRONGER TOMORROW</span>
            </div>

            <h2 className="omfs-title">
              <span className="omfs-title__prefix">Pioneers in</span>
              <span className="omfs-title__accent">Oral &amp; Maxillofacial</span>
              <span className="omfs-title__bottom-row">
                <span className="omfs-title__accent">Surgery</span>
                <span className="omfs-title__location">
                  in Gujrat &amp; Jalalpurjattan
                </span>
              </span>
            </h2>

            <p className="omfs-description">
              Delivering advanced oral and maxillofacial care with experience,
              precision, and a patient-first approach. Trusted by the community for
              specialized surgical solutions and compassionate care.
            </p>

            <div className="omfs-highlights" aria-label="Key clinic milestones">
              {omHighlightsData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <React.Fragment key={item.title}>
                    <div className="omfs-highlight-item">
                      <div className="omfs-highlight-item__icon" aria-hidden="true">
                        <IconComponent size={20} strokeWidth={1.8} />
                      </div>
                      <div className="omfs-highlight-item__text">
                        <span className="omfs-highlight-item__kicker">
                          {item.kicker}
                        </span>
                        <strong className="omfs-highlight-item__title">
                          {item.title}
                        </strong>
                      </div>
                    </div>
                    {index < omHighlightsData.length - 1 && (
                      <div className="omfs-highlights__divider" aria-hidden="true" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Surgical Feature Card & Location Strip */}
          <div className="omfs-right animate-in">
            <div className="omfs-card">
              {/* Surgical Background Image */}
              <div className="omfs-card__image-wrap">
                <img
                  src="/oral-surgery-hero.jpg"
                  alt="Oral and Maxillofacial surgeon performing surgical procedure with precision"
                  className="omfs-card__image"
                  loading="lazy"
                />
                <div className="omfs-card__overlay" aria-hidden="true" />
              </div>

              {/* Card Top Content */}
              <div className="omfs-card__content">
                <div className="omfs-card__badge" aria-hidden="true">
                  <Sparkles size={20} strokeWidth={1.8} />
                </div>
                <span className="omfs-card__kicker">
                  SPECIALIZED CARE
                  <br />
                  CLOSER TO YOU
                </span>
                <h3 className="omfs-card__title">
                  Expert surgical care
                  <br />
                  for healthier, brighter
                  <br />
                  tomorrows.
                </h3>
              </div>

              {/* Location Strip at the bottom of the Card */}
              <div className="omfs-location-strip" aria-label="Locations served">
                {omLocationsData.map((loc, idx) => (
                  <React.Fragment key={loc.name}>
                    <div className="omfs-location-pill">
                      <div className="omfs-location-pill__icon" aria-hidden="true">
                        <MapPin size={16} strokeWidth={2} />
                      </div>
                      <div className="omfs-location-pill__content">
                        <span className="omfs-location-pill__name">{loc.name}</span>
                        <span className="omfs-location-pill__line" aria-hidden="true" />
                      </div>
                    </div>
                    {idx < omLocationsData.length - 1 && (
                      <div
                        className="omfs-location-strip__divider"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Decorative Handwritten Script in lower right */}
            <div className="omfs-floating-script" aria-hidden="true">
              <span>Building</span>
              <span>Healthier Smiles</span>
              <span>Together</span>
              <svg
                className="omfs-script-swoosh"
                viewBox="0 0 140 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16C40 26 100 24 135 6"
                  stroke="#38bdf8"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OralMaxillofacialSection;
