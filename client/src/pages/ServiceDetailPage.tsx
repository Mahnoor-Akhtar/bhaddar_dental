import React, { useEffect, useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { getServiceBySlug, servicesData } from "../data/servicesData";
import NotFound from "./NotFound";

export function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug;
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleStepBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setLocation("/#services");
    }
  };

  useEffect(() => {
    const onPopState = () => {
      // If mobile menu was open, back button simply closes it (1 step back)
      setMenuOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Bhaddar Dental OMFS`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          `Learn about ${service.title} at Bhaddar Dental OMFS in Jalalpur Jattan & Gujrat. ${service.shortDescription}`
        );
      }
    }
  }, [service]);

  if (!service) {
    return <NotFound />;
  }

  const relatedServices = service.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="site-shell service-detail-shell">
      {/* Site Header */}
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="nav-wrap">
          <Link href="/" className="brand" aria-label="Bhaddar Dental OMFS home">
            <img
              src="/logo.png"
              alt="Bhaddar Dental OMFS Logo"
              className="brand__logo-img"
            />
            <span className="brand__wordmark">
              Bhaddar <span>Dental</span>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#facilities">Facilities</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <Link
              href="/#clinics"
              className="button button--small button--teal nav-cta-clinics"
            >
              OUR CLINICS <ArrowRight size={14} className="nav-cta-arrow" />
            </Link>
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
            <Link href="/#about" onClick={handleCloseMenu}>
              About <ArrowUpRight size={15} />
            </Link>
            <Link href="/#services" onClick={handleCloseMenu}>
              Services <ArrowUpRight size={15} />
            </Link>
            <Link href="/#facilities" onClick={handleCloseMenu}>
              Facilities <ArrowUpRight size={15} />
            </Link>
            <Link href="/#team" onClick={handleCloseMenu}>
              Team <ArrowUpRight size={15} />
            </Link>
            <Link href="/#contact" onClick={handleCloseMenu}>
              Contact <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/#clinics"
              className="button button--teal nav-cta-clinics"
              onClick={handleCloseMenu}
            >
              OUR CLINICS <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </header>

      <main className="service-detail-main">
        {/* Breadcrumb Bar */}
        <section className="service-breadcrumb-bar">
          <div className="container">
            <nav aria-label="Breadcrumb" className="service-breadcrumbs">
              <Link href="/">Home</Link>
              <span className="service-breadcrumb-sep">/</span>
              <Link href="/#services">Services</Link>
              <span className="service-breadcrumb-sep">/</span>
              <span className="service-breadcrumb-current" aria-current="page">
                {service.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="service-hero-section section-pad">
          <div className="container service-hero-grid">
            {/* Left Hero Content */}
            <div className="service-hero-copy">
              <div className="service-hero-eyebrow">
                <span className="service-hero-eyebrow-line" />
                <span>{service.category}</span>
              </div>

              <h1 className="service-hero-title">
                {service.title}
              </h1>

              <p className="service-hero-description">
                {service.shortDescription}
              </p>

              <div className="service-hero-actions">
                <Link
                  href="/#clinics"
                  className="button button--teal service-hero-btn"
                >
                  <span>Our Clinics</span>
                  <ArrowRight size={17} />
                </Link>

                <button
                  type="button"
                  onClick={handleStepBack}
                  className="service-hero-back-link"
                  style={{ cursor: "pointer", background: "rgba(255, 255, 255, 0.85)" }}
                >
                  <ArrowLeft size={16} />
                  <span>Back to All Services</span>
                </button>
              </div>

              <div className="service-hero-badge-strip">
                <div className="service-hero-mini-badge">
                  <ShieldCheck size={16} />
                  <span>Certified Procedures</span>
                </div>
                <div className="service-hero-mini-badge">
                  <Sparkles size={16} />
                  <span>Modern Technology</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="service-hero-visual">
              <div className="service-hero-card">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="service-hero-img"
                />
                <div className="service-hero-card-tag">
                  <span>{service.tag}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: About This Treatment */}
        <section className="service-about-section section-pad">
          <div className="container">
            <div className="service-section-header">
              <span className="service-section-kicker">CLINICAL OVERVIEW</span>
              <h2 className="service-section-title">About This Treatment</h2>
              <div className="service-section-divider" />
            </div>

            <div className="service-about-content">
              <p className="service-about-lead">{service.detailedDescription}</p>
            </div>
          </div>
        </section>

        {/* Section: Why This Treatment Matters (Benefits) */}
        <section className="service-benefits-section section-pad">
          <div className="container">
            <div className="service-section-header">
              <span className="service-section-kicker">KEY ADVANTAGES</span>
              <h2 className="service-section-title">Why This Treatment Matters</h2>
              <div className="service-section-divider" />
            </div>

            <div className="service-benefits-grid">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="service-benefit-card">
                  <div className="service-benefit-card__icon">
                    <CheckCircle2 size={22} strokeWidth={2} />
                  </div>
                  <h3 className="service-benefit-card__title">{benefit.title}</h3>
                  <p className="service-benefit-card__desc">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: What to Expect (Procedure Steps) */}
        <section className="service-steps-section section-pad">
          <div className="container">
            <div className="service-section-header">
              <span className="service-section-kicker">STEP-BY-STEP PROCESS</span>
              <h2 className="service-section-title">What to Expect</h2>
              <div className="service-section-divider" />
            </div>

            <div className="service-steps-grid">
              {service.procedureSteps.map((step) => (
                <div key={step.stepNumber} className="service-step-card">
                  <div className="service-step-card__number">{step.stepNumber}</div>
                  <h3 className="service-step-card__title">{step.title}</h3>
                  <p className="service-step-card__desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Who May Need This Treatment */}
        <section className="service-suitability-section section-pad">
          <div className="container">
            <div className="service-suitability-box">
              <div className="service-suitability-header">
                <span className="service-section-kicker">TREATMENT CANDIDATES</span>
                <h2 className="service-section-title">Who May Need This Treatment?</h2>
                <p className="service-suitability-intro">
                  Your dentist will assess whether this treatment is appropriate for your specific
                  needs. Commonly recommended for:
                </p>
              </div>

              <div className="service-suitability-list">
                {service.suitableFor.map((item, idx) => (
                  <div key={idx} className="service-suitability-item">
                    <div className="service-suitability-item__dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Image Gallery */}
        {service.galleryImages && service.galleryImages.length > 0 && (
          <section className="service-gallery-section section-pad">
            <div className="container">
              <div className="service-section-header">
                <span className="service-section-kicker">CLINICAL PHOTOGRAPHY</span>
                <h2 className="service-section-title">Treatment Imagery &amp; Environment</h2>
                <div className="service-section-divider" />
              </div>

              <div className="service-detail-gallery-grid">
                {service.galleryImages.map((imgSrc, idx) => (
                  <div key={idx} className="service-detail-gallery-item">
                    <img
                      src={imgSrc}
                      alt={`${service.title} illustration ${idx + 1}`}
                      className="service-detail-gallery-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section: FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="service-faq-section section-pad">
            <div className="container service-faq-container">
              <div className="service-section-header">
                <span className="service-section-kicker">COMMON QUESTIONS</span>
                <h2 className="service-section-title">Frequently Asked Questions</h2>
                <div className="service-section-divider" />
              </div>

              <div className="service-faq-accordion">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className={`service-faq-item ${isOpen ? "service-faq-item--open" : ""}`}
                    >
                      <button
                        type="button"
                        className="service-faq-question"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <HelpCircle size={18} className="service-faq-q-icon" />
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={18}
                          className={`service-faq-chevron ${isOpen ? "service-faq-chevron--open" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="service-faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Section: Related Services */}
        {relatedServices.length > 0 && (
          <section className="service-related-section section-pad">
            <div className="container">
              <div className="service-section-header">
                <span className="service-section-kicker">EXPLORE FURTHER</span>
                <h2 className="service-section-title">Related Services</h2>
                <div className="service-section-divider" />
              </div>

              <div className="service-related-grid">
                {relatedServices.map((rel) => {
                  if (!rel) return null;
                  return (
                    <article key={rel.id} className="service-related-card">
                      <div className="service-related-card__image">
                        <img src={rel.heroImage} alt={rel.title} loading="lazy" />
                      </div>
                      <div className="service-related-card__body">
                        <span className="service-related-card__tag">{rel.tag}</span>
                        <h3 className="service-related-card__title">{rel.title}</h3>
                        <p className="service-related-card__desc">{rel.shortDescription}</p>
                        <Link
                          href={`/services/${rel.slug}`}
                          className="service-related-card__view-btn"
                        >
                          <span>View</span>
                          <ArrowRight size={14} className="service-card__view-arrow" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA Section */}
        <section className="service-final-cta section-pad">
          <div className="container service-final-cta-box">
            <div className="service-final-cta-content">
              <span className="service-final-cta-kicker">EXPERIENCE & EXPERTISE</span>
              <h2 className="service-final-cta-title">
                Ready to Take Care of <em>Your Smile?</em>
              </h2>
              <p className="service-final-cta-text">
                Visit Bhaddar Dental OMFS at our Gujrat or Jalalpur Jattan branches for specialized
                dental and maxillofacial care designed for your health and comfort.
              </p>
              <div className="service-final-cta-actions">
                <Link
                  href="/#clinics"
                  className="button button--teal service-final-cta-btn"
                >
                  <span>Our Clinics</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="site-footer__glow" aria-hidden="true" />
        <div className="container site-footer__grid">
          <div className="site-footer__brand-column">
            <Link href="/" className="brand brand--footer" aria-label="Bhaddar Dental OMFS home">
              <img
                src="/logo.png"
                alt="Bhaddar Dental OMFS Logo"
                className="brand__logo-img"
              />
              <span className="brand__wordmark">
                Bhaddar <span>Dental</span>
              </span>
            </Link>
            <p>Dentist &amp; Dental Office — Because Your Smile Matters!</p>
            <div className="footer-socials">
              <a href="mailto:contact@dentalcarebydrawais.com" aria-label="Email Dr. Awais">
                <Mail size={17} />
              </a>
              <Link href="/#team" aria-label="Meet Dr. Awais &amp; team">
                <Users size={17} />
              </Link>
            </div>
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Explore</span>
            <Link href="/#about">About clinic <ArrowUpRight size={13} /></Link>
            <Link href="/#services">Treatments <ArrowUpRight size={13} /></Link>
            <Link href="/#facilities">Facilities <ArrowUpRight size={13} /></Link>
            <Link href="/#team">Our experts <ArrowUpRight size={13} /></Link>
            <Link href="/#clinics">Our Clinics <ArrowUpRight size={13} /></Link>
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Find us</span>
            <span className="footer-detail">
              <MapPin size={16} />
              Circular Road, Near Butt Service Station
              <br />
              Chandni Chowk, Jalalpur Jattan 50700
            </span>
            <a className="footer-detail" href="mailto:contact@dentalcarebydrawais.com">
              <Mail size={16} />
              contact@dentalcarebydrawais.com
            </a>
          </div>
          <div className="site-footer__column">
            <span className="site-footer__label">Clinic hours</span>
            <span className="footer-hours">
              <b>Mon — Fri</b>
              <span>09:00 — 20:00</span>
            </span>
            <span className="footer-hours">
              <b>Saturday</b>
              <span>10:00 — 16:00</span>
            </span>
            <span className="footer-hours footer-hours--muted">
              <b>Sunday</b>
              <span>By appointment</span>
            </span>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>© 2026 Bhaddar Dental OMFS. All rights reserved.</span>
          <span>Dentist &amp; Dental Office</span>
          <a href="#top">Back to top <ArrowUpRight size={13} /></a>
        </div>
      </footer>
    </div>
  );
}

export default ServiceDetailPage;
