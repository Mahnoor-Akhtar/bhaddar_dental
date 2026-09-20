import React from "react";
import {
  ShieldCheck,
  Sparkles,
  Users,
  UserCheck,
  LockKeyhole,
  Heart,
  type LucideIcon,
} from "lucide-react";

export interface FacilityFeature {
  icon: LucideIcon;
  label: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageQuote: string[];
  mainIcon: LucideIcon;
  badgeColor?: string;
  features: FacilityFeature[];
}

export const facilitiesData: FacilityItem[] = [
  {
    id: "sterilization-unit",
    title: "Advanced Sterilization Unit",
    description:
      "Advanced instrument sterilization procedures to help protect patients against the spread of infections such as Hepatitis C and HIV.",
    image: "/sterilization-unit.jpg",
    imageAlt: "Advanced dental autoclave sterilization equipment with sterile instruments",
    imageQuote: ["STERILE", "INSTRUMENTS", "SAFE PATIENTS", "HEALTHY SMILES"],
    mainIcon: ShieldCheck,
    features: [
      { icon: Sparkles, label: "Infection Control" },
      { icon: ShieldCheck, label: "Advanced Sterilization" },
      { icon: Users, label: "Patient Safety" },
    ],
  },
  {
    id: "female-treatment-area",
    title: "Separate Treatment Area for Female Patients",
    description:
      "Dedicated treatment arrangements with qualified female doctors for veiled female patients.",
    image: "/female-treatment.jpg",
    imageAlt: "Qualified female dentist providing gentle care in private treatment room",
    imageQuote: ["A DEDICATED", "SPACE FOR", "OUR FEMALE", "PATIENTS"],
    mainIcon: UserCheck,
    features: [
      { icon: UserCheck, label: "Qualified Female Doctors" },
      { icon: LockKeyhole, label: "Private & Comfortable Environment" },
      { icon: Heart, label: "Respectful Patient Care" },
    ],
  },
];

interface FacilityCardProps {
  facility: FacilityItem;
  index: number;
}

export function FacilityCard({ facility, index }: FacilityCardProps) {
  const MainIcon = facility.mainIcon;
  const isSecondCard = index === 1;

  return (
    <article
      className={`facility-card animate-in ${index % 2 === 0 ? "facility-card--left" : "facility-card--right"}`}
      style={{ "--stagger": `${index * 120}ms` } as React.CSSProperties}
    >
      <div className="facility-card__image-container">
        <img
          src={facility.image}
          alt={facility.imageAlt}
          className="facility-card__image"
          loading="lazy"
        />
        <div className="facility-card__image-overlay" aria-hidden="true" />
        
        {facility.imageQuote && (
          <div
            className={`facility-card__image-badge ${isSecondCard ? "facility-card__image-badge--right" : "facility-card__image-badge--left"}`}
            aria-hidden="true"
          >
            {facility.imageQuote.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
            <div className="facility-card__image-badge-line" />
          </div>
        )}

        <div className="facility-card__wave" aria-hidden="true">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none">
            <path d="M0,0 C150,45 350,-15 500,25 L500,50 L0,50 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <div className="facility-card__badge-wrapper">
        <div className="facility-card__badge-icon" aria-hidden="true">
          <MainIcon size={24} strokeWidth={1.8} />
        </div>
      </div>

      <div className="facility-card__body">
        <h3 className="facility-card__title">{facility.title}</h3>
        <p className="facility-card__description">{facility.description}</p>

        <div className="facility-card__features" aria-label="Key features">
          {facility.features.map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={i} className="facility-feature">
                <div className="facility-feature__icon">
                  <FeatureIcon size={20} strokeWidth={1.75} />
                </div>
                <span className="facility-feature__label">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export function AdditionalFacilities() {
  return (
    <section id="facilities" className="facilities-section section-pad animate-in">
      <div className="container facilities-container">
        <div className="facilities-header-wrapper">
          <div className="facilities-eyebrow">
            <span className="facilities-eyebrow-line" />
            <span>ADDITIONAL FACILITIES</span>
            <span className="facilities-eyebrow-line" />
          </div>

          <h2 className="facilities-main-title">
            A Safer, More <em>Comfortable</em> Experience
          </h2>

          <p className="facilities-subtitle">
            Modern facilities designed for your safety, comfort and peace of mind.
          </p>

          <div className="facilities-floating-script" aria-hidden="true">
            <span>Care</span>
            <span>For Every</span>
            <span>Smile</span>
            <svg
              className="facilities-script-swoosh"
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

        <div className="facilities-grid">
          {facilitiesData.map((facility, index) => (
            <FacilityCard key={facility.id} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdditionalFacilities;
