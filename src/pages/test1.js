import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/assets/css/common1.css";

gsap.registerPlugin(ScrollToPlugin);


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [menuItemActive, setMenuItemActive] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [activeMenus, setActiveMenus] = useState({
    level1: null,
    level2: null,
  });

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // for references section - reels / posts / articles - Starts

  const [activeRefTab, setActiveRefTab] = useState("reels");

  // const videoRefs = useRef([]);
  // const [activeIndex, setActiveIndex] = useState(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [activeVideoId, setActiveVideoId] = useState(null);

  const referenceData = {
    reels: [
      { id: 1, type: "video", src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/tamam-reel-1.mp4" },
      { id: 2, type: "video", src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/06/homework-reel-3.mp4" },
      { id: 3, type: "video", src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/emovers-reel-1.mp4" },
    ],
    posts: [
      { id: 1, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/cc-social-media-thumb.jpg", link: "https://www.instagram.com/corporateconnectionsuae/" },
      { id: 2, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/emovers-social-media-thumb-v1.jpg", link: "https://instagram.com/emoversuae/" },
      { id: 3, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/tamam-social-media-thumb-v1.jpg", link: "https://www.instagram.com/tamammovers/" },
      { id: 4, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/tld-social-media-v1.jpg", link: "https://www.instagram.com/leatherdocuae/" },
      { id: 5, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/electricway-social-media-thumb-v1.jpg", link: "https://www.instagram.com/electric_way/" },
    ],
    articles: [
      { id: 1, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/Emovers-mailer.jpg", link: "https://www.wp.emqubeweb.com/wp-content/uploads/Emovers-mailer.jpg" },
      { id: 2, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/Insurance-policy-mailer.jpg", link: "https://www.wp.emqubeweb.com/wp-content/uploads/Insurance-policy-mailer.jpg" },
      { id: 3, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/Homework-mailer.jpg", link: "https://www.wp.emqubeweb.com/wp-content/uploads/Homework-mailer.jpg" },
      { id: 4, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/Tamam-mailer-1.jpg", link: "https://www.wp.emqubeweb.com/wp-content/uploads/Tamam-mailer-1.jpg" },
      { id: 5, type: "image", src: "https://www.wp.emqubeweb.com/wp-content/uploads/TLD-mailer.jpg", link: "https://www.wp.emqubeweb.com/wp-content/uploads/TLD-mailer.jpg" },
    ],
  };

  const PlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
    </svg>
  );
  const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="5" width="4" height="14" fill="currentColor"/>
      <rect x="14" y="5" width="4" height="14" fill="currentColor"/>
    </svg>
  );


  const MediaCard = ({ item, index }) => {

    const videoRef = useRef(null);
    const isPlaying = activeVideoId === `${activeRefTab}-${item.id}`;
    


    const content =
      item.type === "video" ? (
        <div className="video-wrapper"
          onClick={() => handleToggle(index)}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.src}
            muted
            playsInline
            preload="metadata"
            className="video"
          />
          <div className="play-btn">
            {activeIndex === index ? "❚❚" : "▶"}
          </div>
          {/* <video
            ref={videoRef}
            src={item.src}
            muted
            playsInline
            // onClick={handlePlay}
            // onClick={toggleVideo}
          /> */}

          {/* Play / Pause Button */}
          {/* <button className="video-control" 
            onClick={(e) => {
              e.preventDefault();
              toggleVideo();
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button> */}
        </div>
        // <video
        //   src={item.src}
        //   muted
        //   playsInline
        //   onClick={handlePlay}
        // />
      ) : (
        <img src={item.src} alt="" />
      );

    // 👉 POSTS (external link)
    if (item.link && item.link.startsWith("http")) {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="media-card">
          {content}
        </a>
      );
    }

    // 👉 ARTICLES (internal link)
    if (item.link) {
      return (
        <a href={item.link} className="media-card">
          {content}
        </a>
      );
    }

    // 👉 REELS (no link)
    return <div className="media-card">{content}</div>;
  };

  const isMobile1 = windowWidth < 1024;
  const items = referenceData[activeRefTab];

  // for references section - reels / posts / articles - Ends

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleMenuItem = () => {
    setMenuItemActive(!menuItemActive);
    // setMenuItemActive(prev => (prev === menu ? null : menu));
  };

  const handleMenuClick = (level, id) => {
    setActiveMenus(prev => ({
      ...prev,
      [level]: prev[level] === id ? null : id,
      ...(level === "level1" && { level2: null }) // reset child when parent changes
    }));
  };

    // common script for all animation - starts
    useEffect(() => {
      const elements = document.querySelectorAll(
        ".slide-up, .fade-in, .stagger-li"
      );

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

              if (entry.target.classList.contains("fade-in")) {
                entry.target.classList.add("visible");
              }

              if (entry.target.classList.contains("slide-up")) {
                entry.target.classList.add("visible");
              }

              if (entry.target.classList.contains("stagger-li")) {
                setTimeout(() => {
                  entry.target.classList.add("visible");
                }, index * 100);
              }

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      elements.forEach((el) => observer.observe(el));

      // 🧹 CLEANUP (VERY IMPORTANT in React)
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };

    }, []);
    // common script for all animation - ends

  // onload intro section animation - starts
  useEffect(() => {
    gsap.fromTo(
      ".inside-intro-wrapper",
      {
        filter: "blur(10px)",
        opacity: 0.6,
        // scale: 0.6
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        // scale: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2,
      }
    )
  }, [])
  // onload intro section animation - ends


  // create collapsible footer menu - starts
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (!isMobile) {
        setOpenIndex(null);
      }
    }, [isMobile]);

    const toggleFooter = (index) => {
      if (!isMobile) return;

      setOpenIndex(prev => (prev === index ? null : index));
    };

  // create collapsible footer menu - ends

  const [activeTab, setActiveTab] = useState("reels");
  
    const videoRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);
  
    const reels = [
      { id: 1, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/tamam-reel-1.mp4" },
      { id: 2, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/06/homework-reel-3.mp4" },
      { id: 3, src: "http://mohammeds108.sg-host.com/wp-content/uploads/2023/05/emovers-reel-1.mp4" },
    ];
  
    const posts = [
      { id: 1, src: "https://www.wp.emqubeweb.com/wp-content/uploads/cc-social-media-thumb.jpg", link: "https://www.instagram.com/corporateconnectionsuae/" },
      { id: 2, src: "https://www.wp.emqubeweb.com/wp-content/uploads/emovers-social-media-thumb-v1.jpg", link: "https://instagram.com/emoversuae/" },
      { id: 3, src: "https://www.wp.emqubeweb.com/wp-content/uploads/tamam-social-media-thumb-v1.jpg", link: "https://www.instagram.com/tamammovers/" },
    ];

    const articles = [
      { id: 1, src: "https://www.wp.emqubeweb.com/wp-content/uploads/cc-social-media-thumb.jpg", link: "https://www.instagram.com/corporateconnectionsuae/" },
      { id: 2, src: "https://www.wp.emqubeweb.com/wp-content/uploads/emovers-social-media-thumb-v1.jpg", link: "https://instagram.com/emoversuae/" },
      { id: 3, src: "https://www.wp.emqubeweb.com/wp-content/uploads/tamam-social-media-thumb-v1.jpg", link: "https://www.instagram.com/tamammovers/" },
    ];
  
    const handleToggle = (index) => {
      const currentVideo = videoRefs.current[index];
  
      // Pause all videos
      videoRefs.current.forEach((video, i) => {
        if (video && i !== index) {
          video.pause();
        }
      });
  
      // Toggle
      if (activeIndex === index) {
        currentVideo.pause();
        setActiveIndex(null);
      } else {
        currentVideo.play();
        setActiveIndex(index);
      }
    };

  return (
    <>
    
      <header className={`${menuActive ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
        <div className="inner-container d-flex">
          <div className="company-logo stagger-li">
            <a href="javascript:void(0);" className="logo-emqube">
              <img className="logo-black" src="/assets/img/emqube-logo-black.svg" width="196" height="76" alt="emQube Logo"></img>
              <img className="logo-white" src="/assets/img/emqube-logo-white.svg" width="196" height="76" alt="emQube Logo"></img>
            </a>
          </div>
          <nav className="main-nav stagger-li">
            <ul className="main-nav-ul d-flex">
              <li className="menu-item-has-children children-level-2">
                <a href="javascript:void(0);">Software</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li className="menu-item-has-children children-level-0">
                    <a href="/software-solution-house">Development</a>
                    <ul className="sub-menu submenu has-children-inner slide-up">
                      <li><a href="business-application-development">Custom Business Application Development in Dubai</a></li>
                      <li><a href="javascript:void(0);">Mobile App Development Services in Dubai</a></li>
                      <li><a href="javascript:void(0);">AI Development & Agentic Solutions in Dubai</a></li>
                      <li><a href="javascript:void(0);">WhatsApp for Business API Solutions in Dubai</a></li>
                      <li><a href="javascript:void(0);">Business Intelligence & Data Analytics Services in Dubai</a></li>
                      <li><a href="javascript:void(0);">E-Commerce Development & Strategy Services in Dubai</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children children-level-1">
                    <a href="javascript:void(0);">Products</a>
                    <ul className="sub-menu submenu has-children-inner slide-up">
                      <li><a href="javascript:void(0);">Zoho CRM</a></li>
                      <li><a href="javascript:void(0);">Custom Business Application Development in Dubai</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children children-level-2">
                    <a href="javascript:void(0);">Consulting</a>
                    <ul className="sub-menu submenu has-children-inner slide-up">
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children children-level-2">
                <a href="javascript:void(0);">Digital</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li className="menu-item-has-children children-level-0">
                    <a href="javascript:void(0);">Website Development</a>
                    <ul className="sub-menu submenu has-children-inner slide-up">
                      <li><a href="javascript:void(0);">Corporate Website</a></li>
                      <li><a href="javascript:void(0);">Personality Development</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children children-level-1">
                    <a href="javascript:void(0);">Digital Marketing</a>
                    <ul className="sub-menu submenu has-children-inner slide-up">
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children children-level-2">
                    <a href="javascript:void(0);">Content Production</a>
                    <ul className="sub-menu submenu has-children-inner slide-up">
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                      <li><a href="javascript:void(0);">Business Application Development</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">About Us</a></li>
              <li><a href="javascript:void(0);">emQonnect</a></li>
              <li><a href="javascript:void(0);">Reference</a></li>
              <li className="square-fill-btn-wrapp"><a href="javascript: void(0);">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={`mob-menu-click ${scrolled ? "scrolled" : ""}`} onClick={toggleMenu}>
        <svg className={`ham hamRotate ham1 nav-toggle ${menuActive ? "active" : ""}`} viewBox="0 0 100 100" width="80">
          <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path><path class="line middle" d="m 30,50 h 40"></path>
          <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
        </svg>
      </div>
      <nav className={`main-nav menu-toggle ${menuActive ? "active" : ""}`}>
        <ul className="main-nav-ul d-flex">
          <li className="menu-item-has-children children-level-2" onClick={toggleMenuItem}>
            <a href="javascript:void(0);">Software</a>
            <ul className={`sub-menu submenu has-children-inner slide-up ${menuItemActive ? "show" : ""}`}>
              <li className="menu-item-has-children children-level-0">
                <a href="javascript:void(0);">Development</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children children-level-1">
                <a href="javascript:void(0);">Products</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children children-level-2">
                <a href="javascript:void(0);">Consulting</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children children-level-2" onClick={toggleMenuItem}>
            <a href="javascript:void(0);">Digital</a>
            <ul className={`sub-menu submenu has-children-inner slide-up ${menuItemActive ? "show" : ""}`}>
              <li className="menu-item-has-children children-level-0">
                <a href="javascript:void(0);">Website Development</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li><a href="javascript:void(0);">Corporate Website</a></li>
                  <li><a href="javascript:void(0);">Personality Development</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children children-level-1">
                <a href="javascript:void(0);">Digital Marketing</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children children-level-2">
                <a href="javascript:void(0);">Content Production</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="javascript:void(0);">About Us</a></li>
          <li><a href="javascript:void(0);">emQonnect</a></li>
          <li><a href="javascript:void(0);">Reference</a></li>
          <li className="square-fill-btn-wrapp"><a href="javascript: void(0);">Contact Us</a></li>
        </ul>
      </nav>

      {/* references section starts */}
      <section className="references-inside-wrapp">
        <div className="container">
          <h2>References</h2>
        </div>
        {/* Tabs */}
        <div className="ref-inside">
          <div className="container">
            <div className="ref-tabs tabs">
              {/* {["reels", "posts", "articles"].map((tab) => (
                <button
                  key={tab}
                  className={activeRefTab === tab ? "active" : ""}
                  onClick={() => setActiveRefTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))} */}
              <button
                className={activeTab === "reels" ? "active" : ""}
                onClick={() => setActiveTab("reels")}
              >
                Reels
              </button>
              <button
                className={activeTab === "posts" ? "active" : ""}
                onClick={() => setActiveTab("posts")}
              >
                Posts
              </button>
              <button
                className={activeTab === "articles" ? "active" : ""}
                onClick={() => setActiveTab("articles")}
              >
                Articles
              </button>
            </div>
            {/* Content */}
            <div className="ref-content tab-content">

              {/* ✅ VIDEOS */}
              {activeTab === "reels" && (
                <div className="video-list-pradnya">
                  {reels.map((video, index) => (
                    <div key={video.id} className="video-item">
                      <div
                        className="video-wrapper"
                        onClick={() => handleToggle(index)}
                      >
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={video.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="video"
                        />

                        <div className="play-btn">
                          {activeIndex === index ? "❚❚" : "▶"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* ✅ IMAGES */}
              {activeTab === "posts" && (
                <div className="image-list">
                  {posts.map((img) => (
                    <div key={img.id} className="image-item">
                      <a href={img.link} target="_blank" rel="noreferrer">
                        <img src={img.src} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
              {/* ✅ IMAGES */}
              {activeTab === "articles" && (
                <div className="image-list">
                  {articles.map((img) => (
                    <div key={img.id} className="image-item">
                      <a href={img.link} target="_blank" rel="noreferrer">
                        <img src={img.src} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* references section ends */}

      {/* home cta section starts */}
      <section className="cta-wrapper">
        <div className="container">
          <p className="cta-title stagger-li">Ready to build your customized software?</p>
          <p className="cta-txt stagger-li">Talk to our Business Applications Team in Dubai</p>
          <div className="cta-btn-wrapp d-flex">
            <ul class="lets-talk-wrap">
              <li class="whatsapp stagger-li">
                <a href="#" class="view-all pos-ab-aligh-right ">
                  <span class="text">WhatsApp</span>
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M13.75 0C21.3441 0 27.5 6.15588 27.5 13.75C27.5 21.3441 21.3441 27.5 13.75 27.5C11.3201 27.5042 8.93282 26.8611 6.83377 25.6369L0.00552125 27.5L1.86452 20.669C0.639339 18.5693 -0.00423724 16.181 2.09944e-05 13.75C2.09944e-05 6.15588 6.1559 0 13.75 0ZM9.06402 7.2875L8.78902 7.2985C8.61122 7.31075 8.4375 7.35745 8.27752 7.436C8.12844 7.52058 7.99229 7.62616 7.87327 7.7495C7.70827 7.90488 7.61477 8.03963 7.5144 8.17025C7.00581 8.83149 6.73198 9.64331 6.73615 10.4775C6.7389 11.1512 6.9149 11.8071 7.1899 12.4204C7.75227 13.6606 8.67765 14.9737 9.89865 16.1906C10.1929 16.4835 10.4816 16.7778 10.7924 17.0514C12.3096 18.3871 14.1175 19.3503 16.0724 19.8646L16.8534 19.9843C17.1078 19.998 17.3621 19.9788 17.6179 19.9664C18.0183 19.9453 18.4092 19.8369 18.7633 19.6488C18.9432 19.5557 19.1189 19.4548 19.2899 19.3462C19.2899 19.3462 19.3481 19.3068 19.4618 19.2225C19.6474 19.085 19.7615 18.9874 19.9155 18.8265C20.031 18.7073 20.1273 18.5689 20.2043 18.4113C20.3115 18.1871 20.4188 17.7595 20.4628 17.4034C20.4958 17.1311 20.4861 16.9826 20.482 16.8905C20.4765 16.7434 20.3541 16.5907 20.2208 16.5261L19.4205 16.1672C19.4205 16.1672 18.2243 15.6461 17.4928 15.3134C17.4162 15.28 17.3342 15.2609 17.2508 15.257C17.1567 15.2472 17.0616 15.2577 16.9719 15.2878C16.8822 15.3179 16.8001 15.367 16.731 15.4316C16.7241 15.4289 16.632 15.5073 15.6379 16.7118C15.5808 16.7884 15.5022 16.8464 15.4121 16.8782C15.322 16.91 15.2245 16.9143 15.1319 16.8905C15.0423 16.8666 14.9545 16.8363 14.8693 16.7998C14.6988 16.7283 14.6396 16.7008 14.5228 16.6512C13.7333 16.3074 13.0026 15.842 12.3571 15.2721C12.1839 15.1209 12.023 14.9559 11.858 14.7964C11.3171 14.2783 10.8457 13.6922 10.4555 13.0529L10.3744 12.9222C10.317 12.834 10.2699 12.7394 10.2341 12.6404C10.1819 12.4382 10.318 12.276 10.318 12.276C10.318 12.276 10.6521 11.9102 10.8075 11.7122C10.9588 11.5197 11.0866 11.3328 11.1691 11.1994C11.3314 10.9381 11.3823 10.67 11.297 10.4624C10.912 9.52188 10.5142 8.58642 10.1035 7.656C10.0224 7.47175 9.78177 7.33975 9.56315 7.31362C9.4889 7.30446 9.41465 7.29712 9.3404 7.29163C9.15577 7.28104 8.97065 7.28287 8.78627 7.29713L9.06402 7.2875Z" fill="white"/>
                      </svg>
                  </span>
                </a>
              </li>
              <li class="contact-us stagger-li">
                <a href="javascript:void(0);" class="view-all">
                  <span class="text">Contact Us</span>
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li class="call-us stagger-li">
                <a href="#" class="view-all pos-ab-aligh-right ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.6 24C19.8222 24 17.0778 23.3944 14.3667 22.1833C11.6556 20.9722 9.18889 19.2556 6.96667 17.0333C4.74444 14.8111 3.02778 12.3444 1.81667 9.63333C0.605556 6.92222 0 4.17778 0 1.4C0 1 0.133333 0.666667 0.4 0.4C0.666667 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.105556 7.63333 0.316667C7.87778 0.527778 8.02222 0.777778 8.06667 1.06667L8.93333 5.73333C8.97778 6.08889 8.96667 6.38889 8.9 6.63333C8.83333 6.87778 8.71111 7.08889 8.53333 7.26667L5.3 10.5333C5.74444 11.3556 6.27222 12.15 6.88333 12.9167C7.49444 13.6833 8.16667 14.4222 8.9 15.1333C9.58889 15.8222 10.3111 16.4611 11.0667 17.05C11.8222 17.6389 12.6222 18.1778 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0611 15.1833 17.3833 15.0833C17.7056 14.9833 18.0222 14.9556 18.3333 15L22.9333 15.9333C23.2444 16.0222 23.5 16.1833 23.7 16.4167C23.9 16.65 24 16.9111 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24Z" fill="#242424"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* home cta section ends */}

      {/* footer starts */}
      <footer>
        <div className="inner-container">
          <div className="f-top slide-up">
            <div className="f-left">
              <div className="f-logo">
                <img src="/assets/img/emqube-logo-black.svg"></img>
              </div>
            </div>
            <div className="f-right">
              <div className="footer-link">
                <p className="main-link-name">Software Solutions House</p>
                <ul className={`footer-accordion ${openIndex === 0 ? "active" : ""}`}>
                  <li className="f-main-name" onClick={() => toggleFooter(0)}><a href="javascript:void(0);">Software development</a></li>
                  <ul className="submenu">
                    <li><a href="javascript:void(0);">Business Application Development</a></li>
                    <li><a href="javascript:void(0);">Mobile App Development</a></li>
                    <li><a href="javascript:void(0);">WhatsApp for Business</a></li>
                    <li><a href="javascript:void(0);">AI Development</a></li>
                    <li><a href="javascript:void(0);">Business Intelligence</a></li>
                    <li><a href="javascript:void(0);">E-Commerce Applications</a></li>
                  </ul>
                </ul>
                <ul className={`footer-accordion ${openIndex === 1 ? "active" : ""}`}>
                  <li className="f-main-name" onClick={() => toggleFooter(1)}><a href="javascript:void(0);">Software Products</a></li>
                  <ul className="submenu">
                    <li><a href="javascript:void(0);">CRM (Zoho, Salesforce)</a></li>
                    <li><a href="javascript:void(0);">ERP (Zoho One, Odoo)</a></li>
                    <li><a href="javascript:void(0);">FM - CAFM Pro</a></li>
                    <li><a href="javascript:void(0);">HRMS - HRMS Pro</a></li>
                    <li><a href="javascript:void(0);">Productivity-135</a></li>
                  </ul>
                </ul>
                <ul className={`footer-accordion ${openIndex === 2 ? "active" : ""}`}>
                  <li className="f-main-name" onClick={() => toggleFooter(2)}><a href="javascript:void(0);">Software Consulting</a></li>
                  <ul className="submenu">
                    <li><a href="javascript:void(0);">Digital Transformation</a></li>
                    <li><a href="javascript:void(0);">Product Development</a></li>
                  </ul>
                </ul>
              </div>
              <div className="footer-link">
                <p className="main-link-name">Digital Content Studio</p>
                <ul className={`footer-accordion ${openIndex === 3 ? "active" : ""}`}>
                  <li className="f-main-name" onClick={() => toggleFooter(3)}><a href="javascript:void(0);">Website Development</a></li>
                  <ul className="submenu">
                    <li><a href="javascript:void(0);">Corporate Website</a></li>
                    <li><a href="javascript:void(0);">Personality Website</a></li>
                  </ul>
                </ul>
                <ul className={`footer-accordion ${openIndex === 4 ? "active" : ""}`}>
                  <li className="f-main-name" onClick={() => toggleFooter(4)}><a href="javascript:void(0);">Digital Marketing</a></li>
                  <ul className="submenu">
                    <li><a href="javascript:void(0);">Social Media</a></li>
                    <li><a href="javascript:void(0);">SEO</a></li>
                    <li><a href="javascript:void(0);">Email Marketing</a></li>
                    <li><a href="javascript:void(0);">Digital Ads</a></li>
                  </ul>
                </ul>
                <ul className={`footer-accordion ${openIndex === 5 ? "active" : ""}`}>
                  <li className="f-main-name" onClick={() => toggleFooter(5)}><a href="javascript:void(0);">Content Production</a></li>
                  <ul className="submenu">
                    <li><a href="javascript:void(0);">Corporate Films</a></li>
                    <li><a href="javascript:void(0);">Digital Assets</a></li>
                  </ul>
                </ul>
              </div>
              <div className="footer-link">
                <ul>
                  <li className="main-link-name"><a href="javascript:void(0);">About Us</a></li>
                  <li className="main-link-name"><a href="javascript:void(0);">EmQonnect</a></li>
                  <li className="main-link-name"><a href="javascript:void(0);">Reference</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f-btm">
            <p><a href="#">Privacy Policy</a></p>
            <ul className="f-social-list">
              <li><a href="javascript:void(0);"><img src="/assets/img/twitter-icon.svg" alt="twitter icon"></img></a></li>
              <li><a href="javascript:void(0);"><img src="/assets/img/linkedin-icon.svg" alt="linkedin icon"></img></a></li>
              <li><a href="javascript:void(0);"><img src="/assets/img/instagram-icon.svg" alt="instagram icon"></img></a></li>
              <li><a href="javascript:void(0);"><img src="/assets/img/facebook-icon.svg" alt="facebook icon"></img></a></li>
            </ul>
          </div>
        </div>
      </footer>
      {/* footer ends */}
      
    </>
  );
}


export default function Home() {
  return (
    <main className="">
      <Header />
    </main>
  );
}