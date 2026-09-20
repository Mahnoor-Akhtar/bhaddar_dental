import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "wouter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Cross,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { AdditionalFacilities } from "../components/AdditionalFacilities";
import { Footer } from "../components/Footer";
import { OralMaxillofacialSection } from "../components/OralMaxillofacialSection";
import { OurBranchesSection } from "../components/OurBranchesSection";
import { servicesData } from "../data/servicesData";

// Local self-hosted public assets for 100% reliable loading on all devices
const generatedHero = "/main.png";
const suppliedHero = "/main.png";
const generatedMark = "/logo.png";
const mascotMark = "/logo.png";
const suppliedChair = "/second.png";
const suppliedTreatment = "/oral-surgery-hero.jpg";
const suppliedCare = "/female-treatment.jpg";
const suppliedClinic = "/second.png";
const treatmentScaling = "/Scaling & Polishing.png";
const treatmentWhitening = "/Clear Braces.png";
const treatmentFillings = "/Crown & Bridge.png";
const treatmentRootCanal = "/Endodontic Treatment.png";
const treatmentExtraction = "/Tooth Extraction.png";
const treatmentImplants = "/Dental Implants.png";
const treatmentDentures = "/Removable Dentures.png";
const treatmentBraces = "/Fixed Braces.png";
const treatmentGumDisease = "/Scaling & Polishing.png";
const treatmentClinicDentist = "/Minor Oral Surgery.png";

interface TeamDoctor {
  name: string;
  role: "Founder" | "CEO" | "Team Member";
  badgeType: "founder" | "ceo" | "member";
  qualifications: string;
  specialties: string[];
  image: string;
  linkedin: string;
  instagram: string;
  email: string;
  phone: string;
}

const teamMembers: TeamDoctor[] = [
  {
    name: "Dr. Farooq Chaudry",
    role: "Founder",
    badgeType: "founder",
    qualifications: "BDS (de’mont) FCWI (UK) MACS (USA)",
    specialties: ["Chief Dental Surgeon", "Consultant Implantologist"],
    image: "/Founder.jpeg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:contact@dentalcarebydrawais.com",
    phone: "tel:+923374960842",
  },
  {
    name: "Dr. Umair Farooq Chaudry",
    role: "CEO",
    badgeType: "ceo",
    qualifications: "BDS (UOL) MDS OMFS (PIMS)",
    specialties: ["Oral & Maxillofacial Surgeon"],
    image: "/CEO.jpeg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:contact@dentalcarebydrawais.com",
    phone: "tel:+923374960842",
  },
  {
    name: "Dr. Awais Farooq Ch",
    role: "Team Member",
    badgeType: "member",
    qualifications: "BDS, RDS (SZABMU)",
    specialties: ["Dental Surgeon"],
    image: "/dr-awais.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:contact@dentalcarebydrawais.com",
    phone: "tel:+923374960842",
  },
  {
    name: "Dr. Umara Saad",
    role: "Team Member",
    badgeType: "member",
    qualifications: "BDS, FCPS (Oral and Maxillofacial Surgery), CHPE",
    specialties: ["Oral & Maxillofacial Surgeon"],
    image: "/Umaira.jpeg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:contact@dentalcarebydrawais.com",
    phone: "tel:+923374960842",
  },
  {
    name: "Dr. Uzma Ismail",
    role: "Team Member",
    badgeType: "member",
    qualifications: "BDS, MSc Orthodontics",
    specialties: ["Specialist Fixed Braces"],
    image: "/Uzma.png",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:contact@dentalcarebydrawais.com",
    phone: "tel:+923374960842",
  },
];

const heroSlides = [
  {
    src: "/consultation.png",
    label: "Consultation & Care",
    alt: "Professional dental assessment, diagnostics, and personalized consultation",
    title: "Transform Your Smile with",
    emphasis: "Expert Care 🦷",
    lede: "Bhaddar Dental OMFS — Because Your Smile Matters!",
  },
  {
    src: "/oral-surgery-hero.jpg",
    label: "Oral Surgery & OMFS",
    alt: "Oral & maxillofacial surgeon performing clinical procedure with precision",
    title: "Advanced OMFS Care &",
    emphasis: "Surgical Precision.",
    lede: "Modern surgical techniques and honest explanations, shaped around what your smile needs.",
  },
  {
    src: "/female-treatment.jpg",
    label: "Female Treatment Suite",
    alt: "Dedicated private dental treatment area with qualified female doctors",
    title: "Dedicated Care in a",
    emphasis: "Comfortable Space.",
    lede: "Private treatment arrangements with qualified female doctors for your comfort and peace of mind.",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const galleryItems = [
  { src: "/image1.png", alt: "Modern dental operatory unit with digital controls and treatment station", label: "Modern Dental Operatory" },
  { src: "/image2.png", alt: "Private dental treatment room with computerized workstation", label: "Private Treatment Suite" },
  { src: "/image3.png", alt: "Clinical treatment area with digital X-ray diagnostics and sterilization setup", label: "Diagnostic & Clinical Area" },
  { src: "/image4.png", alt: "Advanced ergonomic dental chair with integrated sterile delivery system", label: "Ergonomic Patient Setup" },
];

function scrollToSection(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TeamCard({ doctor }: { doctor: TeamDoctor }) {
  const isDrAwais = doctor.name.toLowerCase().includes("awais");

  return (
    <article className="team-card">
      <div className="team-card__image-container">
        <img
          src={doctor.image}
          alt={doctor.name}
          className={`team-card__img ${isDrAwais ? "team-card__img--top" : ""}`}
          loading="lazy"
        />
        <div className="team-card__wave" aria-hidden="true">
          <svg viewBox="0 0 500 60" preserveAspectRatio="none">
            <path d="M0,0 C150,50 350,-20 500,30 L500,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <div className="team-card__badge-wrapper">
        <span className={`team-card__badge team-card__badge--${doctor.badgeType}`}>
          {doctor.role}
        </span>
      </div>

      <div className="team-card__body">
        <h3 className="team-card__name">{doctor.name}</h3>
        <p className="team-card__qualifications">{doctor.qualifications}</p>
        
        <div className="team-card__divider" aria-hidden="true" />

        <div className="team-card__specialties">
          {doctor.specialties.map((spec, idx) => (
            <span key={idx} className="team-card__specialty-item">{spec}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle Mobile Menu toggle with history popstate so mobile back button closes menu first
  const handleOpenMenu = () => {
    window.history.pushState({ modal: "menu" }, "");
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    if (window.history.state?.modal === "menu") {
      window.history.back();
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    // Ensure manual scroll restoration so browsers don't jump down to previous scroll position on refresh/load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always ensure page starts at the top hero section when loaded/refreshed
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // If initial load has a leftover hash, clean it up so reload stays at top
    if (window.location.hash && window.location.hash !== "#top") {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash && currentHash !== "#top" && currentHash !== "#") {
        const target = document.querySelector(currentHash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      // If mobile menu was open, back button simply closes it (1 step back)
      setMenuOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroSlides.length);
    }, 2000);
    return () => window.clearInterval(carouselTimer);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".animate-in"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const viewportTop = entry.rootBounds?.top ?? 0;
        element.dataset.scrollDirection = entry.boundingClientRect.top >= viewportTop ? "from-bottom" : "from-top";
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -42px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="Bhaddar Dental OMFS home">
            <img src="/logo.png" alt="Bhaddar Dental OMFS Logo" className="brand__logo-img" />
            <span className="brand__wordmark">Bhaddar <span>Dental</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="button button--small button--teal nav-cta-clinics" href="#clinics">
              OUR CLINICS <ArrowRight size={14} className="nav-cta-arrow" />
            </a>
          </div>
          <button
            className="menu-toggle"
            onClick={() => (menuOpen ? handleCloseMenu() : handleOpenMenu())}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={15} /></a>
            ))}
            <a className="button button--teal nav-cta-clinics" href="#clinics" onClick={() => setMenuOpen(false)}>
              OUR CLINICS <ArrowRight size={15} />
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero__background" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.label}
                className={`hero__slide ${activeHero === index ? "hero__slide--active" : ""}`}
                style={{ backgroundImage: `url("${encodeURI(slide.src)}")` }}
              />
            ))}
          </div>
          <div className="hero__overlay" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__copy hero__copy--glass reveal-up" key={activeHero}>
              <h1>{heroSlides[activeHero].title} <em>{heroSlides[activeHero].emphasis}</em></h1>
              <p className="hero__lede">{heroSlides[activeHero].lede}</p>
              <div className="hero__actions">
                <a className="button button--teal" href="#services">
                  View services <ArrowRight size={17} className="hero-btn-arrow" />
                </a>
                <a className="text-link" href="#clinics">
                  Our Clinics <ArrowRight size={17} className="hero-link-arrow" />
                </a>
              </div>
              <div className="hero__dots hero__dots--under-actions" role="tablist" aria-label="Hero image slides">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.label}
                    type="button"
                    role="tab"
                    aria-selected={activeHero === index}
                    aria-label={`Show ${slide.label} image`}
                    className={activeHero === index ? "hero__dot hero__dot--active" : "hero__dot"}
                    onClick={() => setActiveHero(index)}
                  />
                ))}
              </div>
            </div>
            <div className="hero__visual reveal-up reveal-up--delay" aria-hidden="true" />
          </div>
          <button className="hero-arrow hero-arrow--prev" type="button" aria-label="Previous hero image" onClick={() => setActiveHero((current) => (current - 1 + heroSlides.length) % heroSlides.length)}><ArrowLeft size={23} /></button>
          <button className="hero-arrow hero-arrow--next" type="button" aria-label="Next hero image" onClick={() => setActiveHero((current) => (current + 1) % heroSlides.length)}><ArrowRight size={23} /></button>
        </section>

        <section className="proof-rail animate-in" aria-label="Bhaddar Dental care principles">
          <div className="proof-rail__viewport">
            <div className="proof-rail__track">
              <div className="proof-rail__grid">
                <div className="proof-rail__intro"><span className="proof-rail__number">01</span><span>Bhaddar Dental</span></div>
                <div className="proof-item"><HeartPulse size={20} /><div><strong>Because Your Smile Matters!</strong><span>Transforming smiles with expert care.</span></div></div>
                <div className="proof-item"><Stethoscope size={20} /><div><strong>Dentist & Dental Office</strong><span>Modern techniques & personalized plans.</span></div></div>
                <div className="proof-item"><Clock3 size={20} /><div><strong>Jalalpur Jattan Location</strong><span>Circular Road, Near Butt Service Station.</span></div></div>
              </div>
              <div className="proof-rail__grid" aria-hidden="true">
                <div className="proof-rail__intro"><span className="proof-rail__number">01</span><span>Bhaddar Dental</span></div>
                <div className="proof-item"><HeartPulse size={20} /><div><strong>Because Your Smile Matters!</strong><span>Transforming smiles with expert care.</span></div></div>
                <div className="proof-item"><Stethoscope size={20} /><div><strong>Dentist & Dental Office</strong><span>Modern techniques & personalized plans.</span></div></div>
                <div className="proof-item"><Clock3 size={20} /><div><strong>Jalalpur Jattan Location</strong><span>Circular Road, Near Butt Service Station.</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-pad animate-in">
          <div className="container about__grid">
            <div className="about__visual about__visual--from-left animate-in">
              <div className="about__floating-script" aria-hidden="true">
                <span>Healthy</span>
                <span>Smiles</span>
                <span>Brighter</span>
                <span>Futures</span>
                <svg className="about__script-swoosh" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16C35 24 75 22 105 6" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="about__image-main animate-in">
                <img src={suppliedCare} alt="Bhaddar Dental dentist and patient smiling" />
              </div>

              <div className="about__image-small animate-in" style={{ "--stagger": "140ms" } as CSSProperties}>
                <img src={suppliedChair} alt="Bhaddar Dental modern clinical studio" />
              </div>

              <div className="about__since-badge animate-in" style={{ "--stagger": "220ms" } as CSSProperties}>
                <div className="about__since-card">
                  <span className="about__since-kicker">SERVING SINCE</span>
                  <strong className="about__since-year">1994</strong>
                  <span className="about__since-divider" />
                </div>
                <span className="about__since-tagline">
                  THREE DECADES OF<br />TRUSTED DENTAL CARE
                </span>
              </div>
            </div>

            <div className="about__copy about__copy--from-right animate-in">
              <div className="about__eyebrow">
                <span className="about__eyebrow-line" />
                <span>DENTIST & DENTAL OFFICE</span>
              </div>

              <h2 className="about__title">
                Transform<br />
                Your Smile<br />
                with <em>Expert</em><br />
                <em>Care</em> <span className="about__tooth-icon" aria-hidden="true">🦷</span>
              </h2>

              <div className="about__divider-line" />

              <p className="about__highlight">
                Bhaddar Dental OMFS — Because Your Smile Matters!
              </p>
              <p className="about__subtext">
                Clear, modern dentistry for healthier, brighter smiles.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="services section-pad section-pad--teal animate-in">
          <div className="container services__grid">
            <div className="service-coverflow" role="region" aria-label="Dental treatments carousel">
              <Swiper
                className="services-swiper"
                modules={[Autoplay, EffectCoverflow, Navigation]}
                effect="coverflow"
                centeredSlides
                slidesPerView="auto"
                slideToClickedSlide
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                navigation={{ nextEl: ".services-swiper-next", prevEl: ".services-swiper-prev" }}
                speed={650}
                grabCursor
                coverflowEffect={{ rotate: 15, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
              >
                {servicesData.map((service) => (
                  <SwiperSlide key={service.id} className="services-swiper__slide">
                    <article className="service-card">
                      <div className="service-card__image">
                        <img src={service.heroImage} alt={service.title} />
                      </div>
                      <div className="service-card__body">
                        <h3>{service.title}</h3>
                        <p>{service.shortDescription}</p>
                        <div className="service-card__footer">
                          <span className="service-card__tag">{service.tag}</span>
                          <Link
                            href={`/services/${service.slug}`}
                            className="service-card__view-btn"
                            aria-label={`View ${service.title} details`}
                          >
                            <span>View</span>
                            <ArrowRight size={14} className="service-card__view-arrow" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="services-swiper-controls" aria-label="Treatment carousel controls">
                <button type="button" className="services-swiper-button services-swiper-prev" aria-label="Previous treatment"><ArrowLeft size={20} /></button>
                <button type="button" className="services-swiper-button services-swiper-next" aria-label="Next treatment"><ArrowRight size={20} /></button>
              </div>
            </div>
          </div>
        </section>

        <OralMaxillofacialSection />

        <AdditionalFacilities />

        <section id="team" className="team-section section-pad animate-in">
          <div className="container team-container">
            <div className="team-header-wrapper">
              <div className="team-eyebrow">
                <span className="team-eyebrow-line" />
                <span>OUR TEAM</span>
                <span className="team-eyebrow-line" />
              </div>
              <h2 className="team-main-title">
                Meet Our <em>Expert</em> Team
              </h2>
              <p className="team-subtitle">
                A dedicated team of experienced dental professionals committed to delivering advanced, compassionate and patient-centered care.
              </p>
              <div className="team-floating-script" aria-hidden="true">
                <span>Healthy Smiles,</span>
                <span>Happier Lives</span>
                <svg className="team-script-swoosh" viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 18C45 28 115 28 155 8" stroke="#8ED6FF" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="team-grid">
              {teamMembers.map((doctor) => (
                <TeamCard key={doctor.name} doctor={doctor} />
              ))}
            </div>

            <div className="team__trust" aria-label="Why patients trust our team">
              <span>Why patients trust our team</span>
              <div className="team__trust-list">
                <b>Board-certified professionals</b>
                <b>Patient-centered plans</b>
                <b>Modern techniques</b>
                <b>Comfortable environment</b>
                <b>Long-term oral health</b>
              </div>
              <strong>Together, we’re dedicated to expert care for every smile.</strong>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery section-pad section-pad--mist animate-in">
          <div className="container gallery__header">
            <div><p className="eyebrow"><span className="eyebrow__rule" />A look inside our clinic</p><h2>Designed for <em>room to breathe.</em></h2></div>
            <p>A clean, comfortable environment equipped with modern dental units, digital diagnostics, and sterile treatment rooms for your care.</p>
          </div>
          <div className="container gallery__grid">
            {galleryItems.map((item, index) => (
              <figure className={`gallery-card gallery-card--${index + 1} animate-in`} key={item.label} style={{ "--stagger": `${index * 80}ms` } as CSSProperties}>
                <div className="gallery-card__image"><img src={item.src} alt={item.alt} /></div>
                <figcaption><span>0{index + 1}</span>{item.label}<ArrowUpRight size={15} /></figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="review-band section-pad animate-in">
          <div className="review-band__texture" aria-hidden="true" />
          <div className="container review-band__grid">
            <div className="review-band__copy"><p className="eyebrow eyebrow--light"><span className="eyebrow__rule" />Patient trust, responsibly handled</p><h2>Good care should feel <em>easy to talk about.</em></h2><p>Verified patient feedback belongs here. Connect your Google review source or add approved comments when you are ready — never fill the space with made-up words.</p></div>
            <div className="review-placeholder"><div className="review-placeholder__mark"><Sparkles size={18} /></div><span className="review-placeholder__label">Reviews coming from a verified source</span><strong>Your patients' real words,<br />when you are ready to share them.</strong><a className="button button--ivory button--outline" href="#contact">Connect review source <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <OurBranchesSection />
      </main>

      <Footer />
    </div>
  );
}
