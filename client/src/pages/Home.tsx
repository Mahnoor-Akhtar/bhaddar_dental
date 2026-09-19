// Design philosophy: Warm Editorial Smile — use calm editorial composition, warm ivory surfaces, ink-teal hierarchy, sea-glass green actions, and plainspoken reassurance.
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
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

// WhatsApp consultation contact link
const WHATSAPP_NUMBER = "923374960842";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Dr. Awais, I would like to book a dental appointment at Bhaddar Dental OMFS.")}`;

// Public asset host can be overridden on Vercel with VITE_ASSET_BASE_URL.
const assetBaseUrl = (import.meta.env.VITE_ASSET_BASE_URL || "https://brightsmile-4jarhlb3.manus.space").replace(/\/$/, "");
const publicAsset = (path: string) => `${assetBaseUrl}${path}`;
const generatedHero = publicAsset("/manus-storage/brightsmile-professional-hero_e4867d2e.png");
const suppliedHero = publicAsset("/manus-storage/source-hero_3e8f32c2.jpeg");
const generatedMark = publicAsset("/manus-storage/brightsmile-mascot-transparent_1169474d.png");
const mascotMark = "/logo.png";
const suppliedChair = publicAsset("/manus-storage/source-chair_36d212fc.webp");
const suppliedTreatment = publicAsset("/manus-storage/brightsmile-hero-lab_817e3482.png");
const suppliedCare = publicAsset("/manus-storage/source-care_468c4db4.jpg");
const suppliedClinic = publicAsset("/manus-storage/source-clinic_d10f9fab.jpg");
const treatmentScaling = publicAsset("/manus-storage/scaling-root-planing_cf7bebe9.png");
const treatmentWhitening = publicAsset("/manus-storage/teeth-whitening_2985d7aa.png");
const treatmentFillings = publicAsset("/manus-storage/dental-fillings_cca82b16.png");
const treatmentRootCanal = publicAsset("/manus-storage/root-canal_5daa8523.png");
const treatmentExtraction = publicAsset("/manus-storage/tooth-extraction_1b88871d.png");
const treatmentImplants = publicAsset("/manus-storage/dental-implants_9edc6c47.png");
const treatmentDentures = publicAsset("/manus-storage/dentures_be8d9fd8.png");
const treatmentBraces = publicAsset("/manus-storage/braces_e81f3148.png");
const treatmentGumDisease = publicAsset("/manus-storage/gum-disease_879c8e32.png");
const treatmentClinicDentist = publicAsset("/manus-storage/clinic-dentist_591ad9b4.png");
const teamPortraitMahnoor = publicAsset("/manus-storage/dr-mahnoor_bf7623a9.png");
const teamPortraitHaris = publicAsset("/manus-storage/muhammad-haris-khan_e8b65594.png");

const teamExperts = [
  {
    name: "Dr. Awais Farooq Ch",
    role: "FOUNDER",
    roleSuffix: "Of Bhaddar Dental OMFS",
    bio: "Dr Awais Farooq is dedicated to create healthy, confident, and beautiful smiles with expert dental care.",
    specialties: ["Cosmetic Dentistry", "Dental Implants", "Root Canal Treatment", "Smile Makeovers", "Preventive Care"],
    image: "/dr-awais.png",
  },
];

const heroSlides = [
  { src: generatedHero, label: "Expert Care", alt: "Bhaddar Dental OMFS clinic", title: "Transform Your Smile with", emphasis: "Expert Care 🦷", lede: "Bhaddar Dental OMFS — Because Your Smile Matters!" },
  { src: suppliedClinic, label: "Jalalpur Jattan Studio", alt: "Modern dental office in Jalalpur Jattan", title: "Dentistry that respects", emphasis: "your time & comfort.", lede: "Circular Road, Near Butt Service Station, Chandni Chowk, Jalalpur Jattan 50700." },
  { src: suppliedTreatment, label: "Clinical Precision", alt: "Dental professional performing procedure", title: "Clarity before", emphasis: "every procedure.", lede: "Modern techniques and honest explanations, shaped around what your smile needs." },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const serviceItems = [
  { title: "Teeth Whitening", detail: "In-office or take-home whitening treatments planned around your smile goals.", icon: Sparkles, tag: "Smile brightness", image: treatmentWhitening },
  { title: "Dental Fillings", detail: "Composite, tooth-colored fillings for cavities and everyday restorative care.", icon: Cross, tag: "Restorative care", image: treatmentFillings },
  { title: "Root Canal Treatment (RCT)", detail: "Careful treatment for infected or damaged tooth pulp, with clear next steps.", icon: Syringe, tag: "Pain relief", image: treatmentRootCanal },
  { title: "Tooth Extraction", detail: "Simple and surgical extractions delivered with thoughtful planning and aftercare.", icon: Stethoscope, tag: "Gentle treatment", image: treatmentExtraction },
  { title: "Dental Implants", detail: "Permanent tooth replacement using titanium posts and a considered restorative plan.", icon: Cross, tag: "Long-term care", image: treatmentImplants },
  { title: "Dentures", detail: "Full or partial removable tooth replacements designed for comfort and confidence.", icon: Users, tag: "Everyday confidence", image: treatmentDentures },
  { title: "Braces / Orthodontics", detail: "Metal, ceramic, and traditional braces for thoughtful alignment planning.", icon: Cross, tag: "Alignment", image: treatmentBraces },
  { title: "Invisalign / Clear Aligners", detail: "Invisible teeth-straightening trays for a discreet, modern treatment journey.", icon: Sparkles, tag: "Discreet care", image: generatedHero },
  { title: "Scaling & Root Planing", detail: "Deep cleaning for gum disease and periodontal treatment planning.", icon: Stethoscope, tag: "Gum health", image: treatmentScaling },
  { title: "Gum Disease Treatment", detail: "Focused care for gingivitis and periodontitis with clear follow-up guidance.", icon: HeartPulse, tag: "Periodontics", image: treatmentGumDisease },
];

const galleryItems = [
  { src: suppliedClinic, alt: "Bright dental treatment room with teal chairs", label: "The studio" },
  { src: suppliedChair, alt: "Close view of a modern dental chair and equipment", label: "Thoughtful details" },
  { src: suppliedCare, alt: "Dentist caring for a smiling young patient", label: "Gentle by design" },
  { src: suppliedHero, alt: "Dental care detail with a soft sea-glass palette", label: "Sea-glass calm" },
];

function scrollToSection(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thanks — your request is ready for a personal follow-up.");
  };

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
            <a className="button button--small button--teal" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Book an appointment <ArrowUpRight size={15} /></a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={15} /></a>
            ))}
            <a className="button button--teal" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Book an appointment <ArrowUpRight size={15} /></a>
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
                style={{ backgroundImage: `url(${slide.src})` }}
              />
            ))}
          </div>
          <div className="hero__overlay" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__copy hero__copy--glass reveal-up" key={activeHero}>
              <h1>{heroSlides[activeHero].title} <em>{heroSlides[activeHero].emphasis}</em></h1>
              <p className="hero__lede">{heroSlides[activeHero].lede}</p>
              <div className="hero__actions">
                <a className="button button--teal" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Book an appointment <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#services">View services <MoveRight size={17} /></a>
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
              <div className="about__image-main animate-in"><img src={suppliedCare} alt="Dr. Awais dental team and patient" /></div>
              <div className="about__image-small animate-in" style={{ "--stagger": "140ms" } as CSSProperties}><img src={suppliedChair} alt="Close view of modern dental chair and equipment" /></div>
              <div className="about__seal animate-in" style={{ "--stagger": "220ms" } as CSSProperties}><span>Expert Care<br />by Dr. Awais</span><Sparkles size={17} /></div>
            </div>
            <div className="about__copy about__copy--from-right animate-in">
              <p className="eyebrow"><span className="eyebrow__rule" />Dentist & Dental Office</p>
              <h2>Transform Your Smile with <em>Expert Care 🦷</em></h2>
              <p className="body-copy">Bhaddar Dental OMFS — Because Your Smile Matters! Clear, modern dentistry for healthier, brighter smiles.</p>
              <a className="text-link" href="#team">Meet Dr. Awais & team <MoveRight size={17} /></a>
              <div className="about__signature"><span className="signature-line" /><span>Dr. Awais & Team</span></div>
              <span className="smile-arc" aria-hidden="true" />
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
                autoplay={{ delay: 1000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                navigation={{ nextEl: ".services-swiper-next", prevEl: ".services-swiper-prev" }}
                speed={650}
                grabCursor
                coverflowEffect={{ rotate: 15, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
              >
                {serviceItems.map((service) => (
                  <SwiperSlide key={service.title} className="services-swiper__slide">
                    <article className="service-card">
                      <div className="service-card__image"><img src={service.image} alt="" /></div>
                      <div className="service-card__body">
                        <h3>{service.title}</h3>
                        <p>{service.detail}</p>
                        <span className="service-card__tag">{service.tag}</span>
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

        <section id="team" className="team section-pad animate-in">
          <div className="container team__header team__header--centered">
            <p className="eyebrow"><span className="eyebrow__rule" />Meet our dental experts</p>
            <h2>Dedicated to your <em>healthiest smile.</em></h2>
          </div>
          <div className="container team__people team__people--single" aria-label="Bhaddar Dental founder">
            {teamExperts.map((expert) => (
              <article className="team__person team__person--single animate-in" key={expert.name}>
                <div className="team__person-image">
                  <img src={expert.image} alt={expert.name} />
                </div>
                <div className="team__person-copy">
                  <div className="team__role-badge">
                    <span>{expert.role}</span>
                    <small>{expert.roleSuffix}</small>
                  </div>
                  <h3>{expert.name}</h3>
                  <p className="team__intro-copy">
                    At Bhaddar Dental OMFS, our team combines clinical excellence with a patient-first approach. Every treatment is delivered with precision, compassion, and a commitment to your long-term oral health.
                  </p>
                  <p className="team__bio-text">
                    <span className="tooth-bullet">🦷</span> {expert.bio}
                  </p>
                  <div className="team__stats-grid">
                    <div className="team__stat-item">
                      <strong>8+ Years</strong>
                      <span>Clinical Excellence</span>
                    </div>
                    <div className="team__stat-item">
                      <strong>1,000+</strong>
                      <span>Transformed Smiles</span>
                    </div>
                    <div className="team__stat-item">
                      <strong>100%</strong>
                      <span>Gentle & Painless</span>
                    </div>
                  </div>
                  <div className="team__specialties-block">
                    <strong>Specialties & Clinical Care</strong>
                    <ul>
                      {expert.specialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="team__card-action">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--whatsapp button--small"
                    >
                      <MessageCircle size={18} />
                      <span>Book Consultation with Dr. Awais</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="container team__trust" aria-label="Why patients trust our team"><span>Why patients trust our team</span><div className="team__trust-list"><b>Board-certified professionals</b><b>Patient-centered plans</b><b>Modern techniques</b><b>Comfortable environment</b><b>Long-term oral health</b></div><strong>Together, we’re dedicated to expert care for every smile.</strong></div>
        </section>

        <section id="gallery" className="gallery section-pad section-pad--mist animate-in">
          <div className="container gallery__header">
            <div><p className="eyebrow"><span className="eyebrow__rule" />A look around</p><h2>Designed for <em>room to breathe.</em></h2></div>
            <p>Bright, considered spaces. Modern tools. Small details that make a difference before the appointment even begins.</p>
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

        <section id="faq" className="faq section-pad section-pad--mist animate-in">
          <div className="container faq__grid">
            <div className="faq__intro"><p className="eyebrow"><span className="eyebrow__rule" />FAQ</p><h2>Questions,<br />answered <em>clearly.</em></h2><p className="faq__intro-copy">Find quick, helpful answers to common questions about your visit, treatments, and our services.</p><a className="faq__contact-card" href="#contact"><span className="faq__contact-icon"><Phone size={22} /></span><span><strong>Still have questions?</strong><small>Our team is here to help.</small><b>Contact us <ArrowRight size={16} /></b></span></a></div>
            <div className="faq__list">
              <details open><summary><span className="faq__summary-icon" aria-hidden="true" />What should I expect at my first visit?</summary><p>Your first visit includes a warm welcome, a comprehensive dental exam, digital X-rays if needed, and a personalized discussion of your oral health goals. We’ll create a treatment plan tailored to your needs.</p></details>
              <details><summary><span className="faq__summary-icon" aria-hidden="true" />Will treatment be explained before it begins?</summary><p>Yes. We explain your options, timing, expected outcomes, and next steps clearly before treatment starts.</p></details>
              <details><summary><span className="faq__summary-icon" aria-hidden="true" />Can I ask about discomfort or payment options?</summary><p>Absolutely. Bring every question to your consultation so the team can discuss comfort planning and available payment options.</p></details>
              <details><summary><span className="faq__summary-icon" aria-hidden="true" />Do you offer emergency appointments?</summary><p>Contact the clinic as soon as possible and we’ll guide you to the most appropriate next step for urgent dental concerns.</p></details>
              <details><summary><span className="faq__summary-icon" aria-hidden="true" />Do you accept dental insurance?</summary><p>Our team can review your insurance questions during your appointment request and explain what information is needed.</p></details>
            </div>
          </div>
        </section>
        <section className="review-band section-pad animate-in">
          <div className="review-band__texture" aria-hidden="true" />
          <div className="container review-band__grid">
            <div className="review-band__copy"><p className="eyebrow eyebrow--light"><span className="eyebrow__rule" />Patient trust, responsibly handled</p><h2>Good care should feel <em>easy to talk about.</em></h2><p>Verified patient feedback belongs here. Connect your Google review source or add approved comments when you are ready — never fill the space with made-up words.</p></div>
            <div className="review-placeholder"><div className="review-placeholder__mark"><Sparkles size={18} /></div><span className="review-placeholder__label">Reviews coming from a verified source</span><strong>Your patients' real words,<br />when you are ready to share them.</strong><a className="button button--ivory button--outline" href="#contact">Connect review source <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section id="appointment" className="appointment section-pad animate-in">
          <div className="container appointment__grid">
            <div className="appointment__intro">
              <p className="eyebrow"><span className="eyebrow__rule" />Your next step</p>
              <h2>Let's make the first appointment <em>the easy part.</em></h2>
              <p className="body-copy">Tell us a little about what you need. A member of Dr. Awais's team will be in touch to find a time that works for you.</p>
              <div className="appointment__contact-list">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><Phone size={17} /><span><small>Call / WhatsApp</small>+92 337 4960842</span></a>
                <a href="mailto:contact@dentalcarebydrawais.com"><Mail size={17} /><span><small>Email us</small>contact@dentalcarebydrawais.com</span></a>
                <span><MapPin size={17} /><span><small>Address</small>Circular Road, Near Butt Service Station, Chandni Chowk, Jalalpur Jattan 50700</span></span>
              </div>
            </div>
            <div className="booking-card booking-card--whatsapp">
              <div className="whatsapp-card__badge"><MessageCircle size={18} /><span>Direct WhatsApp Consultation</span></div>
              <h3>Book your appointment instantly on WhatsApp</h3>
              <p className="whatsapp-card__description">
                Connect directly with Dr. Awais Farooq Ch & team to schedule your preferred day and time for consultation or treatment.
              </p>
              <div className="whatsapp-card__info-box">
                <div className="whatsapp-card__info-item">
                  <Clock3 size={18} />
                  <div>
                    <strong>Fast Response Time</strong>
                    <small>Mon–Fri 09:00–20:00 & Sat 10:00–16:00</small>
                  </div>
                </div>
                <div className="whatsapp-card__info-item">
                  <ShieldCheck size={18} />
                  <div>
                    <strong>Direct & Confidential</strong>
                    <small>Personalized dental guidance directly on WhatsApp</small>
                  </div>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--whatsapp button--full"
              >
                <MessageCircle size={22} />
                <span>Book Appointment on WhatsApp</span>
                <ArrowUpRight size={18} />
              </a>
              <p className="form-note"><ShieldCheck size={14} />Clicking opens WhatsApp directly on your phone or computer.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-strip animate-in">
          <div className="container contact-strip__grid">
            <div><span className="contact-strip__kicker">Visit Bhaddar Dental</span><strong>Circular Road, Near Butt Service Station<br />Chandni Chowk, Jalalpur Jattan 50700</strong></div>
            <div><span className="contact-strip__kicker">Opening hours</span><strong>Mon–Fri / 9:00–20:00<br />Saturday / By appointment</strong></div>
            <a className="contact-strip__map" href="#contact" onClick={() => toast.info("Circular Road, Near Butt Service Station, Chandni Chowk, Jalalpur Jattan 50700")}><Compass size={20} /><span>Open map<br /><small>Directions to clinic</small></span><ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__glow" aria-hidden="true" />
        <div className="container site-footer__cta">
          <div><p className="eyebrow"><span className="eyebrow__rule" />Your next comfortable visit</p><h2>Transform Your Smile with <em>Expert Care 🦷</em></h2><p>Bhaddar Dental OMFS — Because Your Smile Matters! Tell us what you need and we’ll help you find the right next step.</p></div>
          <a className="button button--teal footer__cta-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Book an appointment <ArrowUpRight size={17} /></a>
        </div>
        <div className="container site-footer__grid">
          <div className="site-footer__brand-column"><a className="brand brand--footer" href="#top" aria-label="Bhaddar Dental OMFS home"><img src="/logo.png" alt="Bhaddar Dental OMFS Logo" className="brand__logo-img" /><span className="brand__wordmark">Bhaddar <span>Dental</span></span></a><p>Dentist & Dental Office — Because Your Smile Matters!</p><div className="footer-socials"><a href="mailto:contact@dentalcarebydrawais.com" aria-label="Email Dr. Awais"><Mail size={17} /></a><a href="#team" aria-label="Meet Dr. Awais & team"><Users size={17} /></a></div></div>
          <div className="site-footer__column"><span className="site-footer__label">Explore</span><a href="#about">About clinic <ArrowUpRight size={13} /></a><a href="#services">Treatments <ArrowUpRight size={13} /></a><a href="#team">Our experts <ArrowUpRight size={13} /></a><a href="#faq">FAQs <ArrowUpRight size={13} /></a></div>
          <div className="site-footer__column"><span className="site-footer__label">Find us</span><span className="footer-detail"><MapPin size={16} />Circular Road, Near Butt Service Station<br />Chandni Chowk, Jalalpur Jattan 50700</span><a className="footer-detail" href="mailto:contact@dentalcarebydrawais.com"><Mail size={16} />contact@dentalcarebydrawais.com</a></div>
          <div className="site-footer__column"><span className="site-footer__label">Clinic hours</span><span className="footer-hours"><b>Mon — Fri</b><span>09:00 — 20:00</span></span><span className="footer-hours"><b>Saturday</b><span>10:00 — 16:00</span></span><span className="footer-hours footer-hours--muted"><b>Sunday</b><span>By appointment</span></span></div>
        </div>
        <div className="container site-footer__bottom"><span>© 2026 Bhaddar Dental OMFS. All rights reserved.</span><span>Dentist & Dental Office</span><a href="#top">Back to top <ArrowUpRight size={13} /></a></div>
      </footer>
    </div>
  );
}
