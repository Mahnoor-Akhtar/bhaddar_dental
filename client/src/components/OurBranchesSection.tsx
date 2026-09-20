import React from "react";
import {
  MapPin,
  Phone,
  Calendar,
  Instagram,
  Facebook,
  ArrowRight,
  Sparkles,
  Building2,
  Crown,
  Compass,
} from "lucide-react";

export interface BranchSocialLinks {
  instagram?: string | null;
  facebook?: string | null;
  tiktok?: string | null;
  maps: string;
}

export interface BranchItem {
  id: string;
  type: "Main Branch" | "Second Branch";
  badgeIcon: "crown" | "building";
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  address: string;
  phone: string;
  phoneTel: string;
  established?: string | null;
  socialLinks: BranchSocialLinks;
  ctaText: string;
}

export const branchesData: BranchItem[] = [
  {
    id: "main-branch",
    type: "Main Branch",
    badgeIcon: "crown",
    name: "Bhaddar Dental",
    subtitle: "Dental & Maxillofacial Surgery Centre",
    image: "/main.png",
    imageAlt: "Bhaddar Dental main branch in Gujrat",
    address: "City Hospital Road, Gujrat",
    phone: "053-3606069",
    phoneTel: "tel:0533606069",
    established: "Serving Since 1994",
    socialLinks: {
      instagram: "https://www.instagram.com/bhaddardental/",
      facebook: null,
      tiktok: null,
      maps: "https://www.google.com/maps/place/Dr+Farooq+Ch+Dental+Clinic/@32.5963754,73.7906507,11z/data=!4m10!1m2!2m1!1sBhaddar+dental!3m6!1s0x391f1ad61861ba19:0x3ae8ace84213088!8m2!3d32.585205!4d74.0765848!15sCg5CaGFkZGFyIGRlbnRhbFoQIg5iaGFkZGFyIGRlbnRhbJIBDWRlbnRhbF9jbGluaWOaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXRMV1kyWkZwM0VBReABAPoBBAgAEEY!16s%2Fg%2F1hg4xr9sl?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
    },
    ctaText: "Visit Main Branch",
  },
  {
    id: "second-branch",
    type: "Second Branch",
    badgeIcon: "building",
    name: "Dental Care By Dr Awais",
    subtitle: "Dental Clinic",
    image: "/second.png",
    imageAlt: "Dental Care By Dr Awais branch in Jalalpur Jattan",
    address: "Jalalpur Jattan",
    phone: "03374960842",
    phoneTel: "tel:03374960842",
    established: null,
    socialLinks: {
      instagram: "https://www.instagram.com/dentalcarebydrawais/reels/",
      facebook: "https://www.facebook.com/dentalcarebydrawais",
      tiktok: "https://www.tiktok.com/@dentalcarebydrawais",
      maps: "https://www.google.com/maps/place/Dental+Care+By+Dr+Awais/@32.6373208,73.9109616,11z/data=!4m10!1m2!2m1!1sDental+care!3m6!1s0x391f0320f6be293b:0x7f642ad6e0927b6b!8m2!3d32.6375817!4d74.1992512!15sCgtEZW50YWwgY2FyZVoNIgtkZW50YWwgY2FyZZIBDWRlbnRhbF9jbGluaWOaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnM1YWxwRlRqSlRXR2N5VWxSWk0yVldUalJoUkd0NlYydzVhR1JIWXhBQuABAPoBBAgSEDI!16s%2Fg%2F11z61xqcbv?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
    },
    ctaText: "Visit Jalalpur Jattan Branch",
  },
];

function TikTokIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.79 4.49 6.27 6.27 0 0 0 1.88-4.48V8.77a8.28 8.28 0 0 0 4.92 1.6V6.92a4.88 4.88 0 0 1-1-.23z" />
    </svg>
  );
}

interface BranchCardProps {
  branch: BranchItem;
  index: number;
}

export function BranchCard({ branch, index }: BranchCardProps) {
  const isMain = branch.type === "Main Branch";

  return (
    <article
      className={`branch-card animate-in ${isMain ? "branch-card--main" : "branch-card--second"}`}
      style={{ "--stagger": `${index * 140}ms` } as React.CSSProperties}
    >
      {/* Card Image Wrap */}
      <div className="branch-card__image-wrap">
        <img
          src={branch.image}
          alt={branch.imageAlt}
          className="branch-card__image"
          loading="lazy"
        />
        <div className="branch-card__image-overlay" aria-hidden="true" />

        {/* Floating Branch Badge */}
        <div className="branch-card__badge">
          {isMain ? (
            <Crown size={15} className="branch-card__badge-icon" />
          ) : (
            <Building2 size={15} className="branch-card__badge-icon" />
          )}
          <span>{branch.type.toUpperCase()}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="branch-card__body">
        {/* Header Info */}
        <div className="branch-card__header">
          <div className="branch-card__titles">
            <h3 className="branch-card__name">{branch.name}</h3>
            <p className="branch-card__subtitle">{branch.subtitle}</p>
          </div>

          {branch.established && (
            <div className="branch-card__established" title={branch.established}>
              <Calendar size={13} className="branch-card__established-icon" />
              <span>{branch.established}</span>
            </div>
          )}
        </div>

        {/* Contact Strip (Address & Phone) */}
        <div className="branch-card__meta-strip">
          <div className="branch-card__meta-item">
            <div className="branch-card__meta-icon-box">
              <MapPin size={16} />
            </div>
            <div className="branch-card__meta-text">
              <span className="branch-card__meta-label">Location</span>
              <span className="branch-card__meta-value">{branch.address}</span>
            </div>
          </div>

          <div className="branch-card__meta-item">
            <div className="branch-card__meta-icon-box">
              <Phone size={16} />
            </div>
            <div className="branch-card__meta-text">
              <span className="branch-card__meta-label">Direct Contact</span>
              <a
                href={branch.phoneTel}
                className="branch-card__meta-value branch-card__phone-link"
                aria-label={`Call ${branch.name} at ${branch.phone}`}
              >
                {branch.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Social and Location Links */}
        <div className="branch-card__socials-section">
          <span className="branch-card__socials-heading">Connect &amp; Navigate</span>
          <div className="branch-card__socials-grid">
            {/* Instagram */}
            {branch.socialLinks.instagram && (
              <a
                href={branch.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-social-link branch-social-link--instagram"
                aria-label={`${branch.name} Instagram`}
              >
                <div className="branch-social-link__icon-box">
                  <Instagram size={17} />
                </div>
                <div className="branch-social-link__content">
                  <span className="branch-social-link__platform">Instagram</span>
                  <span className="branch-social-link__handle">
                    {isMain ? "@bhaddardental" : "@dentalcarebydrawais"}
                  </span>
                </div>
              </a>
            )}

            {/* Facebook (Only if provided) */}
            {branch.socialLinks.facebook && (
              <a
                href={branch.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-social-link branch-social-link--facebook"
                aria-label={`${branch.name} Facebook`}
              >
                <div className="branch-social-link__icon-box">
                  <Facebook size={17} />
                </div>
                <div className="branch-social-link__content">
                  <span className="branch-social-link__platform">Facebook</span>
                  <span className="branch-social-link__handle">Dental Care By Dr Awais</span>
                </div>
              </a>
            )}

            {/* TikTok (Only if provided) */}
            {branch.socialLinks.tiktok && (
              <a
                href={branch.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-social-link branch-social-link--tiktok"
                aria-label={`${branch.name} TikTok`}
              >
                <div className="branch-social-link__icon-box">
                  <TikTokIcon size={17} />
                </div>
                <div className="branch-social-link__content">
                  <span className="branch-social-link__platform">TikTok</span>
                  <span className="branch-social-link__handle">@dentalcarebydrawais</span>
                </div>
              </a>
            )}

            {/* Google Maps Location */}
            {branch.socialLinks.maps && (
              <a
                href={branch.socialLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-social-link branch-social-link--maps"
                aria-label={`${branch.name} Google Maps Location`}
              >
                <div className="branch-social-link__icon-box">
                  <Compass size={17} />
                </div>
                <div className="branch-social-link__content">
                  <span className="branch-social-link__platform">Location</span>
                  <span className="branch-social-link__handle">View on Maps</span>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Card CTA */}
        <div className="branch-card__footer">
          <a
            href={branch.socialLinks.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="branch-card__cta"
            aria-label={`${branch.ctaText} on Google Maps`}
          >
            <span>{branch.ctaText}</span>
            <ArrowRight size={17} className="branch-card__cta-arrow" />
          </a>
        </div>
      </div>
    </article>
  );
}

export function OurBranchesSection() {
  return (
    <section id="clinics" className="branches-section section-pad animate-in">
      <div id="contact" />
      {/* Background Ambience */}
      <div className="branches-bg-decor" aria-hidden="true">
        <div className="branches-bg-glow branches-bg-glow--1" />
        <div className="branches-bg-glow branches-bg-glow--2" />
        <svg
          className="branches-bg-curve"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 280 C 350 120, 850 480, 1120 220"
            stroke="rgba(56, 189, 248, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle cx="1060" cy="200" r="6" fill="#38bdf8" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="container branches-container">
        {/* Section Header */}
        <div className="branches-header-wrapper">
          <div className="branches-eyebrow">
            <span className="branches-eyebrow-line" />
            <span>OUR BRANCHES</span>
            <span className="branches-eyebrow-line" />
          </div>

          <h2 className="branches-main-title">
            Two Locations, <em>One Commitment</em>
          </h2>

          <p className="branches-subtitle">
            Quality dental care, now closer to you. Serving healthy smiles in Gujrat and Jalalpur Jattan.
          </p>

          {/* Decorative Handwritten Script (Upper Right) */}
          <div className="branches-floating-script" aria-hidden="true">
            <span>Healthy</span>
            <span>Smiles</span>
            <span>Near You</span>
            <svg
              className="branches-script-swoosh"
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

        {/* Branch Cards Grid */}
        <div className="branches-grid">
          {branchesData.map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurBranchesSection;
