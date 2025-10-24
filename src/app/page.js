"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Carousel Component
function Carousel({ images, height = 500, aspectRatio = "contain" }) {
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
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button onClick={goToNext} className="carousel-btn">
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Team data - Updated with all headshots
  const founders = [
    {
      name: "Isaac Howe",
      role: "Co-Founder",
      image: "/headshots/isaac-howe.jpg",
      linkedin: "https://www.linkedin.com/in/isaac-howe-000235327/",
    },
    {
      name: "Aden Almonte",
      role: "Co-Founder",
      image: "/headshots/aden-almonte.jpg",
      linkedin: "https://www.linkedin.com/in/adenalmonte/",
    },
  ];

  const analysts = [
    {
      name: "Azam Ahmed",
      role: "Analyst",
      image: "/headshots/azam-ahmed.jpg",
      linkedin: "https://www.linkedin.com/in/azam-ahmed/",
    },
    {
      name: "Abdullah Mehmood",
      role: "Analyst",
      image: "/headshots/abdullah-mehmood.jpg",
      linkedin: "https://www.linkedin.com/in/abdullah-mehmood-khichi/",
    },
    {
      name: "Julia Lee",
      role: "Analyst",
      image: "/headshots/julia-lee.jpg",
      linkedin: "https://www.linkedin.com/in/aa987235b/",
    },
    {
      name: "Abhinav Reddy",
      role: "Analyst",
      image: "/headshots/abhinav-reddy.jpg",
      linkedin: "https://www.linkedin.com/in/abhi-reddy-/",
    },
    {
      name: "Atula Ravi",
      role: "Analyst",
      image: "/headshots/atula-ravi.jpg",
      linkedin: "https://www.linkedin.com/in/atula-ravi-447627306/",
    },
    {
      name: "Krishv Chivukula",
      role: "Analyst",
      image: "/headshots/krishv-chivukula.jpg",
      linkedin: "https://www.linkedin.com/in/krishv-chivukula/",
    },
    {
      name: "Michael Breibart",
      role: "Analyst",
      image: "/headshots/michael-breibart.jpg",
      linkedin: "https://www.linkedin.com/in/michael-breibart-7a4988343/",
    },
    {
      name: "Mohammad Saqib",
      role: "Analyst",
      image: "/headshots/mohammad-saqib.jpg",
      linkedin: "https://www.linkedin.com/in/mohammad-najmus-saqib-974aba382/",
    },
    {
      name: "Yuta Chen",
      role: "Analyst",
      image: "/headshots/yuta-chen.jpg",
      linkedin: "https://www.linkedin.com/in/kaceyyuta-chen/",
    },
    {
      name: "Piyush Patel",
      role: "Analyst",
      image: "/headshots/piyush-patel.jpg",
      linkedin: "https://www.linkedin.com/in/piyushpatel17/",
    },
    {
      name: "Prabhjit Singh",
      role: "Analyst",
      image: "/headshots/prabhjit-singh.jpg",
      linkedin: "https://www.linkedin.com/in/prabhjit-singh-14297b319/",
    },
    {
      name: "Tanmay Thorat",
      role: "Analyst",
      image: "/headshots/tanmay-thorat.jpg",
      linkedin: "https://www.linkedin.com/in/tanmay-thorat-3b15041a7/",
    },
  ];

  // Gallery data
  const vipGallery = [
    "/vip-gallery/gallery-1.jpeg",
    "/vip-gallery/gallery-2.jpeg",
    "/vip-gallery/gallery-3.jpeg",
    "/vip-gallery/gallery-4.jpeg",
    "/vip-gallery/gallery-5.jpeg",
    "/vip-gallery/gallery-6.jpeg",
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
    "/club-gallery/IMG_8654.jpg",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
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
              </div>
            </a>

            <div className="navbar-menu desktop-menu">
              {[
                "About",
                "Program",
                "Gallery",
                "Team",
                "Partners",
                "Resources",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${
                    activeSection === item.toLowerCase() ? "active" : ""
                  }`}
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                ) : (
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            {["About", "Program", "Gallery", "Team", "Partners", "Resources", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className={`mobile-nav-link ${
                    activeSection === item.toLowerCase() ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              )
            )}
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
        {/* Background Unicorn */}
        <div className="hero-unicorn">
          <Image
            src="/unicorn.svg"
            alt=""
            width={600}
            height={600}
            className="unicorn-bg"
            priority
          />
        </div>

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
                onClick={() => scrollToSection("about")}
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
                VIP is a 12-week, student-run venture-sourcing program. Every
                four weeks, one VC firm partners with a cohort of 12 Rutgers
                analyst-trainees.
              </p>
              <p>
                Each cycle ends with a live or virtual pitch session where each
                team presents 3 pre-screened startups, custom-selected for your
                investment thesis, followed by feedback.
              </p>
            </div>

            <div className="info-card">
              <h3>What We Do</h3>
              <ol className="numbered-list">
                <li>
                  <div>
                    <strong>Sourcing & Interviewing Startups</strong>
                    <br />
                    Cold outreach and warm intros
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Fundamentals of a Great Startup</strong>
                    <br />
                    Qualitative drivers, market analysis, team evaluation
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Live Interaction with VC Pros</strong>
                    <br />
                    Office visits, feedback sessions, and presentations
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Guest Speakers</strong>
                    <br />
                    Operators, partners, startup founders, etc.
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section
        id="program"
        className="section"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <h2 className="text-center">Program Structure</h2>

          <div className="program-grid">
            <div className="program-card">
              <div className="program-number">12</div>
              <h4>Weeks</h4>
              <p>
                Comprehensive training in venture capital fundamentals and
                practical sourcing
              </p>
            </div>

            <div className="program-card">
              <div className="program-number">4</div>
              <h4>VC Partners</h4>
              <p>
                Work directly with top-tier venture capital firms throughout the
                program
              </p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <a
              href="https://forms.gle/zpjus5KCirZuefcn9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply for Fall 2025 Cohort
            </a>
            <p style={{ marginTop: "1rem", color: "var(--gray-medium)" }}>
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
          <div style={{ marginBottom: "4rem" }}>
            <h3
              className="text-center text-accent"
              style={{ marginBottom: "3rem" }}
            >
              Founders
            </h3>
            <div className="team-founders">
              {founders.map((founder) => (
                <div key={founder.name} className="team-member founder">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={440}
                      height={440}
                      className="team-photo"
                      quality={95}
                      priority
                    />
                  </a>
                  <h4>{founder.name}</h4>
                  <p>{founder.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Analysts */}
          <div>
            <h3
              className="text-center text-accent"
              style={{ marginBottom: "3rem" }}
            >
              Analysts
            </h3>
            <div className="team-grid">
              {analysts.map((analyst) => (
                <div key={analyst.name} className="team-member">
                  <a
                    href={analyst.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={analyst.image}
                      alt={analyst.name}
                      width={400}
                      height={400}
                      className="team-photo"
                      quality={95}
                    />
                  </a>
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
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
            <div className="partner-logo">
              <Image
                src="/partners/reach.jpg"
                alt="Reach Capital"
                width={260}
                height={140}
                className="object-contain"
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
            <div className="partner-logo">
              <Image
                src="/partners/jj.jpg"
                alt="Johnson & Johnson Ventures"
                width={260}
                height={140}
                className="object-contain"
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
            <div className="partner-logo">
              <Image
                src="/partners/a16z.png"
                alt="Andreessen Horowitz"
                width={260}
                height={140}
                className="object-contain"
                style={{ width: "90%", height: "90%", objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
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
      <section
        id="vc-club"
        className="section"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <h2 className="text-center">About Rutgers Venture Capital Club</h2>

          <div className="vc-club-content">
            <div className="vc-club-info">
              <div className="vc-club-card">
                <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                  Our Mission
                </h3>
                <p>
                  The Rutgers Venture Capital Club is the premier organization
                  for students interested in venture capital, entrepreneurship,
                  and innovation. We bridge the gap between academic learning
                  and real-world venture capital experience.
                </p>
              </div>

              <div className="vc-club-card">
                <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                  What We Offer
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      marginBottom: "0.75rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                      }}
                    >
                      ▸
                    </span>
                    Workshops with industry professionals
                  </li>
                  <li
                    style={{
                      marginBottom: "0.75rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                      }}
                    >
                      ▸
                    </span>
                    Speaker events featuring VCs and founders
                  </li>
                  <li
                    style={{
                      marginBottom: "0.75rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                      }}
                    >
                      ▸
                    </span>
                    Pitch competitions and startup showcases
                  </li>
                  <li
                    style={{
                      marginBottom: "0.75rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                      }}
                    >
                      ▸
                    </span>
                    Flagship VIP analyst training program
                  </li>
                </ul>
              </div>

              <div className="vc-club-card">
                <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                  Our Impact
                </h3>
                <p>
                  Our alumni have gone on to work at leading VC firms, start
                  their own companies, and drive innovation across various
                  industries. Join us to build your network and develop the
                  skills needed to succeed in venture capital.
                </p>
              </div>
            </div>
          </div>

          <h3
            className="text-center text-accent"
            style={{ marginTop: "3rem", marginBottom: "1.5rem" }}
          >
            Club Activities
          </h3>
          <Carousel images={clubGallery} height={480} />
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section">
        <div className="container">
          <h2 className="text-center">Resources</h2>

          <div className="resources-grid">
            {/* Podcasts & Videos */}
            <div className="resource-category">
              <h3 className="resource-category-title">
                <svg className="resource-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 8v8l6-4-6-4zm11.5 4c0 5.25-4.25 9.5-9.5 9.5S2.5 17.25 2.5 12 6.75 2.5 12 2.5s9.5 4.25 9.5 9.5zm-2 0c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5z"/>
                </svg>
                Podcasts & Videos
              </h3>
              <div className="resource-cards">
                <a
                  href="https://www.youtube.com/@uncappedpod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                >
                  <h4>Uncapped</h4>
                  <p className="resource-author">with Jack Altman</p>
                  <p className="resource-description">
                    Deep dives into venture capital and startups with top founders and investors
                  </p>
                  <span className="resource-link">Watch on YouTube →</span>
                </a>

                <a
                  href="https://www.youtube.com/@20VC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                >
                  <h4>20VC</h4>
                  <p className="resource-author">with Harry Stebbings</p>
                  <p className="resource-description">
                    The world&apos;s largest independent venture podcast with leading VCs and founders
                  </p>
                  <span className="resource-link">Watch on YouTube →</span>
                </a>

                <a
                  href="https://www.youtube.com/playlist?list=PLzQgStRQHwpOxsLuneDBS3LYSNu7Q3tQg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                >
                  <h4>Startup/VC Playlist</h4>
                  <p className="resource-author">Curated Collection</p>
                  <p className="resource-description">
                    Essential videos covering startup fundamentals, VC insights, and founder stories
                  </p>
                  <span className="resource-link">View Playlist →</span>
                </a>
              </div>
            </div>

            {/* Essential Reading */}
            <div className="resource-category">
              <h3 className="resource-category-title">
                <svg className="resource-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Essential Reading
              </h3>
              <div className="resource-cards">
                <a
                  href="https://www.ycombinator.com/library/carousel/Essays%20by%20Paul%20Graham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card"
                >
                  <h4>Paul Graham Essays</h4>
                  <p className="resource-author">Y Combinator Library</p>
                  <p className="resource-description">
                    Foundational essays on startups, growth, and venture capital from YC&apos;s co-founder
                  </p>
                  <span className="resource-link">Read Essays →</span>
                </a>
              </div>
            </div>

            {/* Recommended Books */}
            <div className="resource-category">
              <h3 className="resource-category-title">
                <svg className="resource-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                </svg>
                Recommended Books
              </h3>
              <div className="books-list">
                <div className="book-item">
                  <div className="book-title">Pattern Breakers</div>
                  <div className="book-subtitle">The secrets behind the world&apos;s most successful startups</div>
                </div>
                <div className="book-item">
                  <div className="book-title">Zero to One</div>
                  <div className="book-subtitle">Notes on startups, or how to build the future</div>
                </div>
                <div className="book-item">
                  <div className="book-title">The Unfair Advantage</div>
                  <div className="book-subtitle">How you already have what it takes to succeed</div>
                </div>
                <div className="book-item">
                  <div className="book-title">Secrets of Sand Hill Road</div>
                  <div className="book-subtitle">Venture capital and how to get it</div>
                </div>
                <div className="book-item">
                  <div className="book-title">The Mom Test</div>
                  <div className="book-subtitle">How to talk to customers & learn if your business is a good idea</div>
                </div>
                <div className="book-item">
                  <div className="book-title">Loonshots</div>
                  <div className="book-subtitle">How to nurture the crazy ideas that win wars, cure diseases, and transform industries</div>
                </div>
                <div className="book-item">
                  <div className="book-title">Hooked</div>
                  <div className="book-subtitle">How to build habit-forming products</div>
                </div>
              </div>
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
              Ready to join the next generation of venture investors? Have
              questions about the program? We&apos;d love to hear from you!
            </p>

            <div className="contact-links">
              <a href="mailto:ruventurecc@gmail.com" className="contact-email">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ruventurecc/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
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
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
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
