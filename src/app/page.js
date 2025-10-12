'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';

// Carousel Component
function Carousel({ images, height = 500, aspectRatio = 'contain' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="gallery-carousel">
      <div className="carousel-container" style={{ height: `${height}px` }}>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={1080}
                className="carousel-image"
                priority={index === 0}
                style={{ objectFit: aspectRatio }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="carousel-nav">
          <button onClick={goToPrevious} className="carousel-btn">
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button onClick={goToNext} className="carousel-btn">
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Team data - Updated with all headshots
  const founders = [
    { name: "Isaac Howe", role: "Co-Founder", image: "/headshots/isaac-howe.jpg" },
    { name: "Aden Almonte", role: "Co-Founder", image: "/headshots/aden-almonte.jpg" }
  ];

  const analysts = [
    { name: "Azam Ahmed", role: "Analyst", image: "/headshots/azam-ahmed.jpg" },
    { name: "Abdullah Mehmood", role: "Analyst", image: "/headshots/abdullah-mehmood.jpg" },
    { name: "Julia Lee", role: "Analyst", image: "/headshots/julia-lee.jpg" },
    { name: "Abhinav Reddy", role: "Analyst", image: "/headshots/abhinav-reddy.jpg" },
    { name: "Atula Ravi", role: "Analyst", image: "/headshots/atula-ravi.jpg" },
    { name: "Krishv Chivukula", role: "Analyst", image: "/headshots/krishv-chivukula.jpg" },
    { name: "Michael Breibart", role: "Analyst", image: "/headshots/michael-breibart.jpg" },
    { name: "Mohammad Saqib", role: "Analyst", image: "/headshots/mohammad-saqib.jpg" },
    { name: "Yuta Chen", role: "Analyst", image: "/headshots/yuta-chen.jpg" },
    { name: "Piyush Patel", role: "Analyst", image: "/headshots/piyush-patel.jpg" },
    { name: "Prabhjit Singh", role: "Analyst", image: "/headshots/prabhjit-singh.jpg" },
    { name: "Tanmay Thorat", role: "Analyst", image: "/headshots/tanmay-thorat.jpg" },
  ];

  // Gallery data
  const vipGallery = [
    "/vip-gallery/gallery-1.jpeg",
    "/vip-gallery/gallery-2.jpeg",
    "/vip-gallery/gallery-3.jpeg",
    "/vip-gallery/gallery-4.jpeg",
    "/vip-gallery/gallery-5.jpeg",
    "/vip-gallery/gallery-6.jpeg"
  ];

  const clubGallery = [
    "/club-gallery/30981744.jpeg",
    "/club-gallery/30981872.jpeg",
    "/club-gallery/31244336.jpg",
    "/club-gallery/31244672.jpg",
    "/club-gallery/31244736.jpg",
    "/club-gallery/31244768.jpeg",
    "/club-gallery/IMG_0683.jpeg",
    "/club-gallery/IMG_1736.jpg",
    "/club-gallery/IMG_2871.jpeg",
    "/club-gallery/IMG_4329.jpeg",
    "/club-gallery/IMG_4333.jpeg",
    "/club-gallery/IMG_8654.jpg"
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <a href="#hero" className="navbar-brand">
              <Image
                src="/logos/vc-logo-black.png"
                alt="Rutgers VC Club"
                width={48}
                height={48}
                className="navbar-logo"
              />
              <div>
                <div className="navbar-title">RUTGERS VIP</div>
                <div className="navbar-subtitle">VENTURE INVESTOR PROGRAM</div>
              </div>
            </a>

            <div className="navbar-menu desktop-menu">
              {['About', 'Program', 'Gallery', 'Team', 'Partners', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://forms.gle/zpjus5KCirZuefcn9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                {mobileMenuOpen ? (
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                ) : (
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            {['About', 'Program', 'Gallery', 'Team', 'Partners', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://forms.gle/zpjus5KCirZuefcn9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mobile-apply-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <Image
              src="/logos/vc-logo-transparent.png"
              alt="Rutgers VC Club"
              width={140}
              height={140}
              className="hero-logo"
              priority
            />
            <h1>VENTURE INVESTOR PROGRAM</h1>
            <p className="hero-subtitle">Rutgers Venture Capital Club</p>
            <p className="hero-description">
              Join the premier 12-week venture sourcing program connecting
              Rutgers students with founders and top-tier VC firms
            </p>
            <div className="hero-buttons">
              <a
                href="https://forms.gle/zpjus5KCirZuefcn9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>
              <button
                onClick={() => scrollToSection('about')}
                className="btn btn-outline"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Info Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="text-center">About VIP</h2>

          <div className="info-grid">
            <div className="info-card">
              <h3>Overview</h3>
              <p>
                VIP is a 12-week, student-run venture-sourcing program. Every four weeks,
                one VC firm partners with a cohort of 12 Rutgers analyst-trainees.
              </p>
              <p>
                Each cycle ends with a live or virtual pitch session where each team presents
                3 pre-screened startups, custom-selected for your investment thesis, followed
                by feedback.
              </p>
            </div>

            <div className="info-card">
              <h3>What We Do</h3>
              <ol className="numbered-list">
                <li>
                  <div>
                    <strong>Sourcing & Interviewing Startups</strong><br />
                    Cold outreach and warm intros
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Fundamentals of a Great Startup</strong><br />
                    Financial modeling + qualitative drivers
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Live Interaction with VC Pros</strong><br />
                    Office visits, feedback sessions, and presentations
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Guest Speakers</strong><br />
                    Operators, partners, startup founders, etc.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section id="program" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="text-center">Program Structure</h2>

          <div className="program-grid">
            <div className="program-card">
              <div className="program-number">12</div>
              <h4>Weeks</h4>
              <p>Comprehensive training in venture capital fundamentals and practical sourcing</p>
            </div>

            <div className="program-card">
              <div className="program-number">3</div>
              <h4>VC Partners</h4>
              <p>Work directly with top-tier venture capital firms throughout the program</p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a
              href="https://forms.gle/zpjus5KCirZuefcn9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply for Fall 2025 Cohort
            </a>
            <p style={{ marginTop: '1rem', color: 'var(--gray-medium)' }}>
              Application deadline: September 19, 2025
            </p>
          </div>
        </div>
      </section>

      {/* VIP Gallery Section */}
      <section id="gallery" className="section">
        <div className="container">
          <h2 className="text-center">VIP in Action</h2>
          <Carousel images={vipGallery} height={520} />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <div className="container">
          <h2 className="text-center">Our Team</h2>

          {/* Founders */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 className="text-center text-accent" style={{ marginBottom: '3rem' }}>Founders</h3>
            <div className="team-founders">
              {founders.map((founder) => (
                <div key={founder.name} className="team-member founder">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={440}
                    height={440}
                    className="team-photo"
                    quality={95}
                    priority
                  />
                  <h4>{founder.name}</h4>
                  <p>{founder.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Analysts */}
          <div>
            <h3 className="text-center text-accent" style={{ marginBottom: '3rem' }}>Analysts</h3>
            <div className="team-grid">
              {analysts.map((analyst) => (
                <div key={analyst.name} className="team-member">
                  <Image
                    src={analyst.image}
                    alt={analyst.name}
                    width={400}
                    height={400}
                    className="team-photo"
                    quality={95}
                  />
                  <h4>{analyst.name}</h4>
                  <p>{analyst.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="section">
        <div className="container">
          <h2 className="text-center">Our Partners</h2>

          <div className="partners-grid">
            <div className="partner-logo">
              <Image
                src="/partners/kp.jpg"
                alt="Kleiner Perkins"
                width={260}
                height={140}
                className="object-contain"
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
              />
            </div>
            <div className="partner-logo">
              <Image
                src="/partners/reach.jpg"
                alt="Reach Capital"
                width={260}
                height={140}
                className="object-contain"
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
              />
            </div>
            <div className="partner-logo">
              <Image
                src="/partners/jj.jpg"
                alt="Johnson & Johnson Ventures"
                width={260}
                height={140}
                className="object-contain"
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              Interested in partnering with us?
            </p>
            <a
              href="mailto:ruventurecc@gmail.com?subject=Partnership%20Inquiry%20-%20Rutgers%20VIP"
              className="btn btn-outline"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* About VC Club Section */}
      <section id="vc-club" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="text-center">About Rutgers Venture Capital Club</h2>

          <div className="vc-club-content">
            <div className="vc-club-info">
              <div className="vc-club-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Mission</h3>
                <p>
                  The Rutgers Venture Capital Club is the premier organization for students interested
                  in venture capital, entrepreneurship, and innovation. We bridge the gap between
                  academic learning and real-world venture capital experience.
                </p>
              </div>

              <div className="vc-club-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>What We Offer</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▸</span>
                    Workshops with industry professionals
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▸</span>
                    Speaker events featuring VCs and founders
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▸</span>
                    Pitch competitions and startup showcases
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▸</span>
                    Flagship VIP analyst training program
                  </li>
                </ul>
              </div>

              <div className="vc-club-card">
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Impact</h3>
                <p>
                  Our alumni have gone on to work at leading VC firms, start their own companies,
                  and drive innovation across various industries. Join us to build your network and
                  develop the skills needed to succeed in venture capital.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-center text-accent" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Club Activities</h3>
          <Carousel images={clubGallery} height={480} />
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section">
        <div className="container">
          <h2 className="text-center">Resources</h2>

          <div className="text-center">
            <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Coming Soon</h3>
              <p style={{ marginTop: '1.5rem', color: 'var(--gray-medium)' }}>
                Check back soon for updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Get In Touch</h2>

            <p>
              Ready to join the next generation of venture investors?
              Have questions about the program? We&apos;d love to hear from you!
            </p>

            <div className="contact-links">
              <a
                href="mailto:ruventurecc@gmail.com"
                className="contact-email"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                ruventurecc@gmail.com
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/rutgers-venture-capitalist-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ruventurecc/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 Rutgers Venture Capital Club. All rights reserved.</p>
          <p>Rutgers, The State University of New Jersey</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="modal-image"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="modal-close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}