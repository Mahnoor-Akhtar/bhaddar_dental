import React from "react";
import {
  MapPin,
  Phone,
  Calendar,
  Clock,
  ArrowRight,
  Building2,
  Crown,
} from "lucide-react";

export interface BranchTiming {
  label: string;
  time: string;
}

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
  timings: BranchTiming[];
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
    established: "Serving Since 1984",
    timings: [
      { label: "Mon – Sun", time: "16:00 – 21:00" },
    ],
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
    name: "Dental Care at Day Care Hospital",
    subtitle: "Dental Clinic",
    image: "/second.png",
    imageAlt: "Dental Care at Day Care Hospital branch in Jalalpur Jattan",
    address: "Jalalpur Jattan",
    phone: "03374960842",
    phoneTel: "tel:03374960842",
    established: null,
    timings: [
      { label: "Mon – Fri", time: "09:00 - 20:00" },
      { label: "Saturday", time: "10:00 - 16:00" },
      { label: "Sunday", time: "By appointment" },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/dentalcarebydrawais/reels/",
      facebook: "https://www.facebook.com/dentalcarebydrawais",
      tiktok: "https://www.tiktok.com/@dentalcarebydrawais",
      maps: "https://www.google.com/maps/place/Dental+Care+By+Dr+Awais/@32.6373208,73.9109616,11z/data=!4m10!1m2!2m1!1sDental+care!3m6!1s0x391f0320f6be293b:0x7f642ad6e0927b6b!8m2!3d32.6375817!4d74.1992512!15sCgtEZW50YWwgY2FyZVoNIgtkZW50YWwgY2FyZZIBDWRlbnRhbF9jbGluaWOaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnM1YWxwRlRqSlRXR2N5VWxSWk0yVldUalJoUkd0NlYydzVhR1JIWXhBQuABAPoBBAgSEDI!16s%2Fg%2F11z61xqcbv?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
    },
    ctaText: "Visit Jalalpur Jattan Branch",
  },
];

function GoogleMapsIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
        fill="#34A853"
      />
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 11.3 5.95 13.38 7.49 14.88L12 7V2Z"
        fill="#4285F4"
      />
      <path
        d="M12 2V7L16.51 14.88C18.05 13.38 19 11.3 19 9C19 5.13 15.87 2 12 2Z"
        fill="#EA4335"
      />
      <path
        d="M12 7L7.49 14.88C8.68 16.32 10.22 18.25 12 20.93V7Z"
        fill="#FBBC04"
      />
      <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#E1306C" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="#E1306C" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="#E1306C" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#000000"
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

        {/* 3-Column Info Strip (Location, Direct Contact, Clinic Hours) */}
        <div className="branch-card__meta-strip">
          {/* Location */}
          <div className="branch-card__meta-item">
            <div className="branch-card__meta-icon-box branch-card__meta-icon-box--green">
              <MapPin size={16} />
            </div>
            <div className="branch-card__meta-text">
              <span className="branch-card__meta-label">Location</span>
              <span className="branch-card__meta-value">{branch.address}</span>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="branch-card__meta-item">
            <div className="branch-card__meta-icon-box branch-card__meta-icon-box--blue">
              <Phone size={15} />
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

          {/* Clinic Hours */}
          <div className="branch-card__meta-item">
            <div className="branch-card__meta-icon-box branch-card__meta-icon-box--green">
              <Clock size={16} />
            </div>
            <div className="branch-card__meta-text">
              <span className="branch-card__meta-label">Clinic Hours</span>
              <div className="branch-card__meta-timings">
                {branch.timings.map((timing, i) => (
                  <div key={i} className="branch-card__timing-row">
                    <span className="branch-card__timing-day">{timing.label}</span>
                    <span className="branch-card__timing-val">{timing.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social and Location Icon Links */}
        <div className="branch-card__socials-section">
          <span className="branch-card__socials-heading">Connect &amp; Navigate</span>
          <div className="branch-card__socials-row">
            {/* Instagram */}
            {branch.socialLinks.instagram && (
              <a
                href={branch.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-icon-btn branch-icon-btn--instagram"
                aria-label={`${branch.name} Instagram`}
                title={`Instagram (${branch.name})`}
              >
                <InstagramIcon size={20} />
              </a>
            )}

            {/* Facebook (Only if provided) */}
            {branch.socialLinks.facebook && (
              <a
                href={branch.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-icon-btn branch-icon-btn--facebook"
                aria-label={`${branch.name} Facebook`}
                title={`Facebook (${branch.name})`}
              >
                <FacebookIcon size={20} />
              </a>
            )}

            {/* TikTok (Only if provided) */}
            {branch.socialLinks.tiktok && (
              <a
                href={branch.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-icon-btn branch-icon-btn--tiktok"
                aria-label={`${branch.name} TikTok`}
                title={`TikTok (${branch.name})`}
              >
                <TikTokIcon size={18} />
              </a>
            )}

            {/* Google Maps Location */}
            {branch.socialLinks.maps && (
              <a
                href={branch.socialLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="branch-icon-btn branch-icon-btn--maps"
                aria-label={`${branch.name} Google Maps Location`}
                title="View on Google Maps"
              >
                <GoogleMapsIcon size={20} />
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
            stroke="rgba(146, 210, 214, 0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle cx="1060" cy="200" r="6" fill="#92D2D6" fillOpacity="0.5" />
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
                stroke="#73ADC0"
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
