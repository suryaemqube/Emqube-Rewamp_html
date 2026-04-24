import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow  } from "swiper/modules";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "/src/assets/css/common.css";
// import "/src/assets/css/home.css";
import "/src/assets/css/inside.css";

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

  const [activeTab, setActiveTab] = useState('custom');
  const [activeTab1, setActiveTab1] = useState('enterprise');
  const [activeTab2, setActiveTab2] = useState('whatsapp');
  const [webSwiper, setWebSwiper] = useState(null);
  const [webActiveSlide, setWebActiveSlide] = useState(0);
   const [webSwiper1, setWebSwiper1] = useState(null);
  const [webActiveSlide1, setWebActiveSlide1] = useState(0);
   const [webSwiper2, setWebSwiper2] = useState(null);
  const [webActiveSlide2, setWebActiveSlide2] = useState(0);

  const webSlides = [
    { key: 'ecommerce', 
      img: '/assets/img/Business-application-development-1.jpg', 
      title: 'Custom Business Applications', 
      text: (
        <>
        Build bespoke software applications tailored to your specific operational requirements with <span className="txt-med">zero licensing costs</span>.
        </>
      )
    },
    { key: 'corporate', 
      img: '/assets/img/Mobile-app-development.jpg', 
      title: 'Enterprise Mobile App Development', 
      text: (
        <>
        Create high-performance mobile applications for your business or startup on robust <span className="txt-med">iOS, Android, and Hybrid</span> platforms.
        </>
      )
    },
    { key: 'webapp', 
      img: '/assets/img/Whatsapp-for-business.jpg', 
      title: 'WhatsApp for Business & AI Chatbots', 
      text: (
        <>
        Integrate your business systems with <span className="txt-med">WhatsApp for Business</span> to automate customer acquisition, transactions, and support.
        </>
      ) 
    },
    { key: 'cms', 
      img: '/assets/img/ai-development-1x.webp', 
      title: 'AI & Generative AI Development', 
      text: (
        <>
        Leverage <span className="txt-med">AI Agents</span>, LLMs, and GenAI services to automate complex tasks and execute intelligent workflows across departments.
        </>
      )
    },
    { key: 'pwa', 
      img: '/assets/img/business-intelligence-1x.webp', 
      title: 'Business Intelligence & Analytics', 
      text: (
        <>
        Rely on <span className="txt-med">Intelligent MIS</span> to make data-driven decisions with visual dashboards and insightful reports on <span className="txt-med">PowerBI, Tableau, and QlikSense</span>.
        </>
      )
    },
    { key: 'api', 
      img: '/assets/img/e-commerce-application-1x.webp', 
      title: 'Scalable E-Commerce Solutions', 
      text: (
        <>
        Go online with e-commerce platforms tailored to your business model on robust systems like <span className="txt-med">Magento, WooCommerce, and Shopify</span>.
        </>
      ) 
    },
  ];

  const webSlides1 = [
    { key: 'ecommerce', 
      img: '/assets/img/crm-1x.webp', 
      title: 'CRM Implementation', 
      text: (
        <>
        Configure leading tools such as <span className="txt-med">Zoho CRM</span> and <span className="txt-med">Salesforce</span>, or our fully customizable <span className="txt-med">SalesPro</span> for local sales cycles.
        </>
      ) 
    },
    { key: 'corporate', 
      img: '/assets/img/erp-transformation-1x.webp', 
      title: 'ERP Transformation', 
      text: (
        <>
        Digitally transform your business with versatile ERPs built on <span className="txt-med">Odoo</span> or <span className="txt-med">Zoho One</span> for a unified system.
        </>
      ) 
    },
    { key: 'webapp', 
      img: '/assets/img/facility-management-1x.webp', 
      title: 'Advanced Facility Management', 
      text: (
        <>
        Optimize your FM services with <span className="txt-med">CAFM Pro</span>, our proprietary solution built specifically for the FM industry.
        </>
      )
    },
    { key: 'cms', 
      img: '/assets/img/payroll-1x.webp', 
      title: 'HRMS, Payroll & Attendance', 
      text: (
        <>
        Manage attendance and disburse payroll with overtime calculations via <span className="txt-med">HRMS Pro</span>, built for teams of <span className="txt-med">200+</span>.
        </>
      ) 
    },
    { key: 'pwa', 
      img: '/assets/img/productivity-1x.webp', 
      title: 'Personal Productivity', 
      text: (
        <>
        Enhance daily output with the <span className="txt-med">135 Pro To-Do Planner</span>, featuring managerial overview and priority control.
        </>
      )
    },
  ];

  const webSlides2 = [
    { key: 'ecommerce', 
      img: '/assets/img/digital-transformation-1x.webp', 
      title: 'Digital Transformation Strategy', 
      text: (
        <>
        Achieve your long-term objectives by relying on our deep understanding of <span className="txt-med">business processes</span> and emerging technologies.
        </>
      )

    },
    { key: 'corporate', 
      img: '/assets/img/MVP-Software-Product-Development.webp', 
      title: 'MVP & Software Product Development', 
      text: (
        <>
        Launch your Minimum <span className="txt-med">Viable Product (MVP)</span> with expert UI/UX services supplemented by our decades of technical expertise.
        </>
      ) 

    },
  ];

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

  const [visibleCount, setVisibleCount] = useState(8);
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  useEffect(() => {
    if (!isMobile) {
      setOpenIndex(null);
    }
  }, [isMobile]);

  const toggleFooter = (index) => {
    if (!isMobile) return; // ⛔ only mobile

    setOpenIndex(prev => (prev === index ? null : index));
  };

  const logos = [
    { src: "/assets/img/logo-difc.jpg", alt: "DIFC" },
    { src: "/assets/img/logo-bmw.jpg", alt: "BMW" },
    { src: "/assets/img/logo-nespresso-logo.jpg", alt: "NESPRESSO" },
    { src: "/assets/img/logo-emovers.jpg", alt: "E-Movers" },
    { src: "/assets/img/logo-tld.jpg", alt: "The Leather Doctor" },
    { src: "/assets/img/logo-innerspace.jpg", alt: "Innerspace" },
    { src: "/assets/img/logo-lighttech.jpg", alt: "Lighttech" },
    { src: "/assets/img/logo-Haecker.jpg", alt: "Haecker" },
    { src: "/assets/img/logo-nikai.jpg", alt: "Nikai" },
    { src: "/assets/img/logo-swisscotec.jpg", alt: "Swisscotec" },
    { src: "/assets/img/logo-karam.jpg", alt: "Karam" },
    { src: "/assets/img/logo-transAsia.jpg", alt: "TransAsia" },
    { src: "/assets/img/logo-winspire.jpg", alt: "Winspire" },
    { src: "/assets/img/logo-electricway.jpg", alt: "Electricway" },
  ];

    // onload intro section animation - starts
    useEffect(() => {

      const mm = gsap.matchMedia();

      gsap.fromTo(
        ".inside-intro-wrapper .inside-intro-title,.inside-intro-wrapper .inside-intro-txt",
        {
          filter: "blur(20px)",
          opacity: 0.6,
          // scale: 0.6
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          // scale: 1,
          duration: 1.5,
          ease: "power2.out",
          // delay: 0.2,
        }
      );

      // Breakpoint-specific animations
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // LEFT LIST
        gsap.fromTo(
          ".inside-intro-wrapper .inside-intro-count.left ul li",
          {
            x: isDesktop ? -100 : 0, // 👈 change based on screen
            y: isMobile ? 50 : 0,    // 👈 example for mobile
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5,
            ease: "power2.out",
          }
        );

        // RIGHT LIST
        gsap.fromTo(
          ".inside-intro-wrapper .inside-intro-count.right ul li",
          {
            x: isDesktop ? 100 : 0,
            y: isMobile ? 50 : 0,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5,
            ease: "power2.out",
          }
        );
      }
    );

      // gsap.fromTo(
      //   ".inside-intro-wrapper .inside-intro-count.left ul li",
      //   {
      //     x: -100,
      //     opacity: 0,
      //     stagger: 0.3,
      //     ease: "power2.out"
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     stagger: 0.3,
      //     duration: 0.5,
      //     ease: "power2.out",
      //     // delay: 0.2,
      //   },
      //   "-=0.5"
      // )
      // gsap.fromTo(
      //   ".inside-intro-wrapper .inside-intro-count.right ul li",
      //   {
      //     x: 100,
      //     opacity: 0,
      //     stagger: 0.3,
      //     ease: "power2.out"
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     stagger: 0.3,
      //     ease: "power2.out",
      //     // delay: 0.2,
      //   },
      //   "-=0.5"
      // )
    }, [])
    // onload intro section animation - ends

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
              }, index * 250);
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

      {/* Inside intro section starts */}
      <section className="inside-intro-wrapper">
        <div className="container">
          <div className="inside-intro-count left">
            <ul className="d-flex">
              <li className="bg-green">
                <p className="count">
                  <span className="num">200</span>
                  <span className="icon">+</span>
                </p>
                <p className="count-txt">Software & Web Projects</p>
              </li>
              <li className="bg-white">
                <p className="count">
                  <span className="num">10</span>
                  <span className="icon">+</span>
                </p>
                <p className="count-txt">Average Customer Relationship</p>
              </li>
            </ul>
          </div>
          <div className="inside-intro-title">
            <h1>Software Solutions House</h1>
            <p className="inside-sub-txt">Custom Software Development & Digital Transformation Services in Dubai <br />Partnering with UAE Businesses since 2003</p>
            {/* <p className="inside-sub-txt txt-med">Partnering with UAE Businesses since 2003</p> */}
          </div>
          <div className="inside-intro-txt">
            <p><span className="txt-med">emQube</span> fulfills the digital transformation goals of your organization with a complete range of software services. Whether you need a <span className="txt-med">customized software system</span> developed from scratch, the integration of powerful <span className="txt-med">SaaS solutions</span>, or a hybrid of both, we deliver. </p>
            <p>Our engagement begins with expert <span className="txt-med">software consulting</span> and extends through development, seamless integration, and dedicated ongoing support.</p>
          </div>
          <div className="inside-intro-count right">
            <ul className="d-flex">
              <li className="bg-white">
                <p className="count">
                  <span className="num">20</span>
                  <span className="icon">+</span>
                </p>
                <p className="count-txt">Years in Dubai</p>
              </li>
              <li className="bg-green">
                <p className="count">
                  <span className="num">80</span>
                  <span className="icon">+</span>
                </p>
                <p className="count-txt">Years Team<br /> Experience</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="scroll-down-arrow">
          <a href="#"
            onClick={(e) => {
              e.preventDefault();

              gsap.to(window, {
                duration: 1,
                scrollTo: {
                  y: ".tab-system-wrapper.tab1", // target section class or id
                  offsetY: 100,       // 👈 your offset
                },
                ease: "power2.out",
              });
            }}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 18L12 22M12 22L16 18M12 22V2" stroke="#4E9C5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>
        </div>
      </section>
      {/* Inside intro section ends */}

      {/* tab system starts */}
      <section className="tab-system-wrapper tab1 slide-up">
        <div className="container">
          <div className="tab-system">
            <div className="tab-buttons">
              <h2 className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>Comprehensive Software Development Services</h2>
            </div>
            <div className="tab-content">
              {activeTab === 'custom' && (
                <div className="tab-pane">
                  <div className="web-swiper-container">
                    <Swiper
                      // effect="coverflow"
                      loop={true}
                      // effect="fade"
                      modules={[Navigation]}
                    //  slidesPerView={"auto"}
                    //   slidesOffsetBefore={0}
                    //   spaceBetween={0}
                      // slidesPerView={"auto"}
                      // grabCursor={true}
                      // centeredSlides={true}
                      coverflowEffect={{
                        rotate: 0,       // keep flat like your design
                        stretch: 0,
                        depth: 120,      // 👈 controls 3D depth
                        modifier: 2.5,
                        slideShadows: false,
                      }}
                      navigation={{
                        prevEl: ".swiper-prev-btn",
                        nextEl: ".swiper-next-btn",
                      }}
                      autoplay={{ delay: 3000 }}
                      breakpoints={{
                        0: {
                          // centeredSlides: false,
                          slidesPerView: 1,
                          spaceBetween: 20,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                        },
                        768: {
                          centeredSlides: true,
                          slidesPerView: 1.3,
                          spaceBetween: 0,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                        },
                        991: {
                          centeredSlides: true,
                          slidesPerView: 1.4,
                          slidesOffsetBefore: 0,
                          spaceBetween: 0,
                          preventClicks:true,
                        },
                        1300: {
                          effect: "coverflow",
                          centeredSlides: true,
                          slidesPerView: 1.55,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                          spaceBetween: 0,
                        },
                      }}
                      // initialSlide={0}
                      className="web-swiper"
                      onSwiper={(swiper) => setWebSwiper(swiper)}
                      onSlideChange={(swiper) => setWebActiveSlide(swiper.realIndex)}
                    >
                      {webSlides.map((slide, index) => (
                        <SwiperSlide key={slide.key}>
                          <div className="swiper-slide-content">
                            <a href="#">
                              <div className="slide-image">
                                <img src={slide.img} alt={slide.title} />
                              </div>
                              <div className="slide-text">
                                <h3>{slide.title}</h3>
                                <p>{slide.text}</p>
                              </div>
                              <span class="arrow-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                  <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-button-prev swiper-prev-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33" fill="none">
                        <path d="M16.0673 2.56174L3.38702 15.4455C3.10892 15.7266 2.95294 16.1061 2.95294 16.5015C2.95294 16.8969 3.10892 17.2764 3.38702 17.5575L16.0645 30.4412C16.3425 30.7241 16.4982 31.1048 16.4982 31.5014C16.4982 31.8979 16.3425 32.2786 16.0645 32.5615C15.9287 32.7008 15.7664 32.8115 15.5872 32.887C15.408 32.9626 15.2154 33.0016 15.0209 33.0016C14.8264 33.0016 14.6338 32.9626 14.4546 32.887C14.2754 32.8115 14.1131 32.7008 13.9773 32.5615L1.29977 19.6805C0.466728 18.8321 0 17.6905 0 16.5015C0 15.3125 0.466728 14.1709 1.29977 13.3225L13.9773 0.441488C14.1131 0.301783 14.2756 0.190731 14.4551 0.114901C14.6345 0.0390703 14.8274 0 15.0223 0C15.2171 0 15.41 0.0390703 15.5895 0.114901C15.769 0.190731 15.9314 0.301783 16.0673 0.441488C16.3452 0.72434 16.501 1.10504 16.501 1.50161C16.501 1.89818 16.3452 2.27889 16.0673 2.56174Z" fill="#4E9C5A"/>
                      </svg>
                    </div>
                    <div className="swiper-button-next swiper-next-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33" fill="none">
                        <path d="M0.433702 2.56174L13.114 15.4455C13.3921 15.7266 13.548 16.1061 13.548 16.5015C13.548 16.8969 13.3921 17.2764 13.114 17.5575L0.436454 30.4412C0.158495 30.7241 0.00274563 31.1048 0.00274563 31.5014C0.00274563 31.8979 0.158495 32.2786 0.436454 32.5615C0.57224 32.7008 0.734534 32.8115 0.91377 32.887C1.09301 32.9626 1.28556 33.0016 1.48008 33.0016C1.6746 33.0016 1.86715 32.9626 2.04639 32.887C2.22562 32.8115 2.38792 32.7008 2.5237 32.5615L15.2012 19.6805C16.0342 18.8321 16.501 17.6905 16.501 16.5015C16.501 15.3125 16.0342 14.1709 15.2012 13.3225L2.5237 0.441488C2.38787 0.301783 2.22541 0.190731 2.04592 0.114901C1.86643 0.0390703 1.67355 0 1.4787 0C1.28385 0 1.09098 0.0390703 0.911488 0.114901C0.731998 0.190731 0.569532 0.301783 0.433702 0.441488C0.155744 0.72434 -5.48354e-06 1.10504 -5.48354e-06 1.50161C-5.48354e-06 1.89818 0.155744 2.27889 0.433702 2.56174Z" fill="#4E9C5A"/>
                      </svg>
                    </div>
                    <div className="swiper-pagination-dots">
                      {webSlides.map((slide, index) => (
                        <button
                          key={slide.key + '-dot'}
                          className={`dot ${webActiveSlide === index ? 'active' : ''}`}
                          onClick={() => webSwiper?.slideToLoop(index)}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    <div className="swiper-pagination-text">
                      {webSlides.map((slide, index) => (
                        <p
                          key={slide.key + '-text'}
                          className={`slide-title ${webActiveSlide === index ? 'active' : ''}`}
                          onClick={() => webSwiper?.slideToLoop(index)}
                        >
                          {slide.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* tab system ends */}

      {/* tab system starts */}
      <section className="tab-system-wrapper tab2 slide-up">
        <div className="container">
          <div className="tab-system">
            <div className="tab-buttons">
              <h2 className={`tab-btn ${activeTab1 === 'enterprise' ? 'active' : ''}`} onClick={() => setActiveTab1('enterprise')}>Specialized Software Products for UAE Enterprises</h2>
            </div>
            <div className="tab-content">
              {activeTab1 === 'enterprise' && (
                <div className="tab-pane">
                  <div className="web-swiper-container">
                    <Swiper
                      // effect="coverflow"
                      loop={true}
                      // effect="fade"
                      modules={[Navigation]}
                    //  slidesPerView={"auto"}
                    //   slidesOffsetBefore={0}
                    //   spaceBetween={0}
                      // slidesPerView={"auto"}
                      // grabCursor={true}
                      // centeredSlides={true}
                      // coverflowEffect={{
                      //   rotate: 0,       // keep flat like your design
                      //   stretch: 0,
                      //   depth: 120,      // 👈 controls 3D depth
                      //   modifier: 2.5,
                      //   slideShadows: false,
                      // }}
                      navigation={{
                        prevEl: ".swiper-prev-btn-prod",
                        nextEl: ".swiper-next-btn-prod",
                      }}
                      autoplay={{ delay: 3000 }}
                      breakpoints={{
                        0: {
                          centeredSlides: true,
                          slidesPerView: 1,
                          spaceBetween: 20,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                        },
                        768: {
                          centeredSlides: true,
                          slidesPerView: 1.3,
                          spaceBetween: 0,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                        },
                        991: {
                          centeredSlides: true,
                          slidesPerView: 1.4,
                          slidesOffsetBefore: 0,
                          spaceBetween: 0,
                          preventClicks:true,
                        },
                        1300: {
                          centeredSlides: true,
                          slidesPerView: 1.55,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                          spaceBetween: 0,
                        },
                      }}
                      // initialSlide={0}
                      className="web-swiper1"
                      onSwiper={(swiper1) => setWebSwiper1(swiper1)}
                      onSlideChange={(swiper1) => setWebActiveSlide1(swiper1.realIndex)}
                    >
                      {webSlides1.map((slide1, index1) => (
                        <SwiperSlide key={slide1.key}>
                          <div className="swiper-slide-content">
                            <a href="#">
                              <div className="slide-image">
                                <img src={slide1.img} alt={slide1.title} />
                              </div>
                              <div className="slide-text">
                                <h3>{slide1.title}</h3>
                                <p>{slide1.text}</p>
                              </div>
                              <span class="arrow-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                  <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-button-prev swiper-prev-btn swiper-prev-btn-prod">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33" fill="none">
                        <path d="M16.0673 2.56174L3.38702 15.4455C3.10892 15.7266 2.95294 16.1061 2.95294 16.5015C2.95294 16.8969 3.10892 17.2764 3.38702 17.5575L16.0645 30.4412C16.3425 30.7241 16.4982 31.1048 16.4982 31.5014C16.4982 31.8979 16.3425 32.2786 16.0645 32.5615C15.9287 32.7008 15.7664 32.8115 15.5872 32.887C15.408 32.9626 15.2154 33.0016 15.0209 33.0016C14.8264 33.0016 14.6338 32.9626 14.4546 32.887C14.2754 32.8115 14.1131 32.7008 13.9773 32.5615L1.29977 19.6805C0.466728 18.8321 0 17.6905 0 16.5015C0 15.3125 0.466728 14.1709 1.29977 13.3225L13.9773 0.441488C14.1131 0.301783 14.2756 0.190731 14.4551 0.114901C14.6345 0.0390703 14.8274 0 15.0223 0C15.2171 0 15.41 0.0390703 15.5895 0.114901C15.769 0.190731 15.9314 0.301783 16.0673 0.441488C16.3452 0.72434 16.501 1.10504 16.501 1.50161C16.501 1.89818 16.3452 2.27889 16.0673 2.56174Z" fill="#4E9C5A"/>
                      </svg>
                    </div>
                    <div className="swiper-button-next swiper-next-btn swiper-next-btn-prod">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33" fill="none">
                        <path d="M0.433702 2.56174L13.114 15.4455C13.3921 15.7266 13.548 16.1061 13.548 16.5015C13.548 16.8969 13.3921 17.2764 13.114 17.5575L0.436454 30.4412C0.158495 30.7241 0.00274563 31.1048 0.00274563 31.5014C0.00274563 31.8979 0.158495 32.2786 0.436454 32.5615C0.57224 32.7008 0.734534 32.8115 0.91377 32.887C1.09301 32.9626 1.28556 33.0016 1.48008 33.0016C1.6746 33.0016 1.86715 32.9626 2.04639 32.887C2.22562 32.8115 2.38792 32.7008 2.5237 32.5615L15.2012 19.6805C16.0342 18.8321 16.501 17.6905 16.501 16.5015C16.501 15.3125 16.0342 14.1709 15.2012 13.3225L2.5237 0.441488C2.38787 0.301783 2.22541 0.190731 2.04592 0.114901C1.86643 0.0390703 1.67355 0 1.4787 0C1.28385 0 1.09098 0.0390703 0.911488 0.114901C0.731998 0.190731 0.569532 0.301783 0.433702 0.441488C0.155744 0.72434 -5.48354e-06 1.10504 -5.48354e-06 1.50161C-5.48354e-06 1.89818 0.155744 2.27889 0.433702 2.56174Z" fill="#4E9C5A"/>
                      </svg>
                    </div>
                    <div className="swiper-pagination-dots">
                      {webSlides1.map((slide1, index1) => (
                        <button
                          key={slide1.key + '-dot'}
                          className={`dot ${webActiveSlide1 === index1 ? 'active' : ''}`}
                          onClick={() => webSwiper1?.slideToLoop(index1)}
                          aria-label={`Go to slide ${index1 + 1}`}
                        />
                      ))}
                    </div>
                    <div className="swiper-pagination-text">
                      {webSlides1.map((slide1, index1) => (
                        <p
                          key={slide1.key + '-text'}
                          className={`slide-title ${webActiveSlide1 === index1 ? 'active' : ''}`}
                          onClick={() => webSwiper1?.slideToLoop(index1)}
                        >
                          {slide1.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* tab system ends */}

      {/* tab system starts */}
      <section className="tab-system-wrapper tab3 slide-up">
        <div className="container">
          <div className="tab-system">
            <div className="tab-buttons">
              <h2 className={`tab-btn ${activeTab2 === 'whatsapp' ? 'active' : ''}`} onClick={() => setActiveTab2('whatsapp')}>Strategic Software Consulting & Product Growth</h2>
            </div>
            <div className="tab-content">
              {activeTab2 === 'whatsapp' && (
                <div className="tab-pane">
                  <div className="web-swiper-container">
                    <Swiper
                      // effect="coverflow"
                      loop={true}
                      // effect="fade"
                      modules={[Navigation]}
                    //  slidesPerView={"auto"}
                    //   slidesOffsetBefore={0}
                    //   spaceBetween={0}
                      // slidesPerView={"auto"}
                      // grabCursor={true}
                      // centeredSlides={true}
                      // coverflowEffect={{
                      //   rotate: 0,       // keep flat like your design
                      //   stretch: 0,
                      //   depth: 120,      // 👈 controls 3D depth
                      //   modifier: 2.5,
                      //   slideShadows: false,
                      // }}
                      navigation={{
                        prevEl: ".swiper-prev-btn-con",
                        nextEl: ".swiper-next-btn-con",
                      }}
                      autoplay={{ delay: 3000 }}
                      breakpoints={{
                        0: {
                          centeredSlides: true,
                          slidesPerView: 1,
                          spaceBetween: 20,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                        },
                        768: {
                          centeredSlides: true,
                          slidesPerView: 1.3,
                          spaceBetween: 0,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                        },
                        991: {
                          centeredSlides: true,
                          slidesPerView: 1.4,
                          slidesOffsetBefore: 0,
                          spaceBetween: 0,
                          preventClicks:true,
                        },
                        1300: {
                          centeredSlides: true,
                          slidesPerView: 1.55,
                          slidesOffsetBefore: 0,
                          preventClicks:true,
                          spaceBetween: 0,
                        },
                      }}
                      // initialSlide={0}
                      className="web-swiper"
                      onSwiper={(swiper2) => setWebSwiper2(swiper2)}
                      onSlideChange={(swiper2) => setWebActiveSlide2(swiper2.realIndex)}
                    >
                      {webSlides2.map((slide2, index2) => (
                        <SwiperSlide key={slide2.key}>
                          <div className="swiper-slide-content">
                            <a href="#">
                              <div className="slide-image">
                                <img src={slide2.img} alt={slide2.title} />
                              </div>
                              <div className="slide-text">
                                <h3>{slide2.title}</h3>
                                <p>{slide2.text}</p>
                              </div>
                              <span class="arrow-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                                  <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-button-prev swiper-prev-btn swiper-prev-btn-con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33" fill="none">
                        <path d="M16.0673 2.56174L3.38702 15.4455C3.10892 15.7266 2.95294 16.1061 2.95294 16.5015C2.95294 16.8969 3.10892 17.2764 3.38702 17.5575L16.0645 30.4412C16.3425 30.7241 16.4982 31.1048 16.4982 31.5014C16.4982 31.8979 16.3425 32.2786 16.0645 32.5615C15.9287 32.7008 15.7664 32.8115 15.5872 32.887C15.408 32.9626 15.2154 33.0016 15.0209 33.0016C14.8264 33.0016 14.6338 32.9626 14.4546 32.887C14.2754 32.8115 14.1131 32.7008 13.9773 32.5615L1.29977 19.6805C0.466728 18.8321 0 17.6905 0 16.5015C0 15.3125 0.466728 14.1709 1.29977 13.3225L13.9773 0.441488C14.1131 0.301783 14.2756 0.190731 14.4551 0.114901C14.6345 0.0390703 14.8274 0 15.0223 0C15.2171 0 15.41 0.0390703 15.5895 0.114901C15.769 0.190731 15.9314 0.301783 16.0673 0.441488C16.3452 0.72434 16.501 1.10504 16.501 1.50161C16.501 1.89818 16.3452 2.27889 16.0673 2.56174Z" fill="#4E9C5A"/>
                      </svg>
                    </div>
                    <div className="swiper-button-next swiper-next-btn swiper-next-btn-con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="33" viewBox="0 0 17 33" fill="none">
                        <path d="M0.433702 2.56174L13.114 15.4455C13.3921 15.7266 13.548 16.1061 13.548 16.5015C13.548 16.8969 13.3921 17.2764 13.114 17.5575L0.436454 30.4412C0.158495 30.7241 0.00274563 31.1048 0.00274563 31.5014C0.00274563 31.8979 0.158495 32.2786 0.436454 32.5615C0.57224 32.7008 0.734534 32.8115 0.91377 32.887C1.09301 32.9626 1.28556 33.0016 1.48008 33.0016C1.6746 33.0016 1.86715 32.9626 2.04639 32.887C2.22562 32.8115 2.38792 32.7008 2.5237 32.5615L15.2012 19.6805C16.0342 18.8321 16.501 17.6905 16.501 16.5015C16.501 15.3125 16.0342 14.1709 15.2012 13.3225L2.5237 0.441488C2.38787 0.301783 2.22541 0.190731 2.04592 0.114901C1.86643 0.0390703 1.67355 0 1.4787 0C1.28385 0 1.09098 0.0390703 0.911488 0.114901C0.731998 0.190731 0.569532 0.301783 0.433702 0.441488C0.155744 0.72434 -5.48354e-06 1.10504 -5.48354e-06 1.50161C-5.48354e-06 1.89818 0.155744 2.27889 0.433702 2.56174Z" fill="#4E9C5A"/>
                      </svg>
                    </div>
                    <div className="swiper-pagination-dots">
                      {webSlides2.map((slide2, index2) => (
                        <button
                          key={slide2.key + '-dot'}
                          className={`dot ${webActiveSlide2 === index2 ? 'active' : ''}`}
                          onClick={() => webSwiper2?.slideToLoop(index2)}
                          aria-label={`Go to slide ${index2 + 1}`}
                        />
                      ))}
                    </div>
                    <div className="swiper-pagination-text">
                      {webSlides2.map((slide2, index2) => (
                        <p
                          key={slide2.key + '-text'}
                          className={`slide-title ${webActiveSlide2 === index2 ? 'active' : ''}`}
                          onClick={() => webSwiper2?.slideToLoop(index2)}
                        >
                          {slide2.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* tab system ends */}

      {/* Home Page Why choose section starts */}
      <section className="home-choose-wrapper inside-choose-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient-mix slide-up">Why <span className="txt-med">Choose Us</span></h2>
          <div className="home-why-choose-list">
            <ul className="d-flex">
              <li className="stagger-li">
                <div className="icon">
                  <div className="desk">
                    <svg xmlns="http://www.w3.org/2000/svg" width="427" height="154" viewBox="0 0 427 154" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M252.366 73.1763C254.5 73.047 257.116 73.2102 259.303 73.1519C261.574 73.1578 263.848 73.1297 266.118 73.1675C266.754 73.1781 267.501 73.3604 267.514 74.146C267.54 75.6905 267.52 77.2377 267.521 78.7817L267.523 88.7183L267.531 119.941C268.752 119.936 288.784 119.945 290.002 119.968C290.027 120.922 290.041 121.762 290.012 122.718C288.53 122.772 268.02 122.738 266.521 122.741L256.292 122.724L225.411 122.734L180.725 122.738L162.054 122.742C158.494 122.768 154.933 122.757 151.374 122.706C151.351 121.797 151.352 120.887 151.376 119.979C153.082 119.914 154.911 119.944 156.626 119.943L165.317 119.937L196.163 119.922L196.167 116.211L196.162 109.63C196.16 108.511 196.151 107.393 196.173 106.272C196.185 105.699 196.343 105.064 197.028 104.999C197.664 104.937 198.35 104.967 198.995 104.966L202.816 104.967H208.05C208.99 104.968 209.923 104.964 210.864 104.995C211.284 104.924 211.918 105.443 211.934 105.892C212.094 110.538 211.851 115.266 211.992 119.911C212.87 119.922 213.749 119.927 214.627 119.927L214.644 105.021L214.634 100.634C214.631 99.8315 214.608 99.0191 214.651 98.2183C214.703 97.2545 215.465 97.149 216.239 97.1548C220.312 97.1854 224.387 97.1776 228.459 97.146C229.216 97.1401 230.389 97.1091 230.439 98.1353C230.489 98.9845 230.473 99.841 230.471 100.692L230.467 105.082L230.482 119.93L233.137 119.94C233.033 112.182 233.132 104.22 233.13 96.4468L233.109 90.4116C233.104 89.4646 233.062 88.3342 233.157 87.3911C233.201 86.9494 233.645 86.6548 233.99 86.4272L243.259 86.4263C244.845 86.4222 246.457 86.3728 248.035 86.4585C249.144 86.5188 248.957 87.8264 248.957 88.5894C248.956 89.2856 248.948 89.9825 248.945 90.6782L248.933 97.0259L248.947 119.943L251.642 119.934L251.632 85.4829V77.3062C251.632 76.2565 251.577 74.9624 251.682 73.9204C251.715 73.5997 252.104 73.3373 252.366 73.1763ZM235.904 89.2671L235.887 119.924C239.178 119.94 242.955 120.026 246.216 119.926C246.132 113.342 246.226 106.62 246.207 100.019L246.191 92.9409C246.189 91.9542 246.122 90.185 246.224 89.2651L235.904 89.2671ZM227.708 99.9438C224.366 99.9435 220.708 99.8663 217.393 99.9614L217.396 119.939C220.708 119.965 224.397 119.999 227.7 119.935C227.787 117.75 227.714 115.03 227.712 112.806L227.708 99.9438ZM254.391 75.9517L254.412 100.46C254.424 106.858 254.515 113.544 254.403 119.924C255.293 119.928 264.488 120.053 264.756 119.831L264.728 90.0396L264.73 81.1655C264.727 79.5326 264.659 77.5433 264.758 75.9507C261.321 75.9447 257.827 75.9144 254.391 75.9517ZM198.928 107.727L198.929 119.928L207.84 119.945L209.226 119.937L209.235 107.737L200.517 107.718L198.928 107.727Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M183.81 47.0881C185.751 46.9614 188.801 47.0598 190.803 47.0607L203.82 47.0539C205.809 47.0533 207.117 47.0691 208.64 48.632C210.627 50.6713 210.01 55.1858 210.009 57.9856L222.675 57.9875C224.268 57.9899 227.94 57.8698 229.365 58.2043C230.625 58.5077 231.777 59.1559 232.694 60.0783C233.672 61.0499 234.368 62.2723 234.709 63.6135C235.003 64.8066 234.897 67.0029 234.894 68.3391C234.884 70.3214 234.888 72.3041 234.908 74.2863C234.063 74.8253 232.787 75.8795 232.083 76.5705C232.112 76.3587 232.133 76.0415 232.133 75.8234C232.136 73.7087 232.153 71.6088 232.133 69.4914C232.118 67.8897 232.218 66.0108 232.009 64.4533C231.923 63.8121 231.314 62.7191 230.85 62.2648C229.816 61.251 228.83 60.787 227.405 60.7854C222.658 60.7799 217.911 60.7899 213.167 60.7893L183.735 60.7883H168.766L164.185 60.7844C163.291 60.7832 162.381 60.7629 161.482 60.8244C159.595 60.9633 157.764 62.588 157.517 64.5178C157.348 65.8426 157.446 67.6986 157.443 69.091L157.438 79.4826C158.346 79.7442 159.424 80.243 160.347 80.5725C169.489 83.8349 178.62 85.3969 188.246 86.3566C188.245 85.3502 188.212 84.3382 188.212 83.3352C188.213 82.8946 188.246 82.4224 188.585 82.1213C188.736 81.9771 188.984 81.8123 189.198 81.8039C190.342 81.7595 191.526 81.7876 192.671 81.7893L200.351 81.8137C201.218 82.3416 201.124 83.0702 201.133 83.9826C201.141 84.7842 201.144 85.5872 201.154 86.3889C202.449 86.1579 203.788 86.063 205.097 85.9162C206.529 85.7419 207.96 85.5522 209.388 85.3459C211.876 84.9716 214.348 84.4986 216.798 83.9289C218.97 83.4458 221.71 82.7941 223.843 82.1232C223.359 82.5544 222.478 83.127 221.917 83.5139C220.879 84.2278 219.845 84.947 218.815 85.6721C218.412 85.9566 217.587 86.5707 217.148 86.7072C216.172 87.0104 215.019 87.2048 214.004 87.4035C211.363 87.9121 208.704 88.323 206.032 88.635C204.398 88.8382 202.789 89.0551 201.143 89.1311C201.106 91.3362 201.407 93.8668 198.523 94.5578C197.496 94.8039 196.259 94.6382 195.202 94.6701C194.191 94.7006 193.155 94.658 192.143 94.6906C189.989 94.7673 188.23 93.4316 188.27 91.1535C188.281 90.5126 188.274 89.7937 188.279 89.1359C185.912 89.0866 182.823 88.6039 180.455 88.2775C172.414 87.1699 165.059 85.2743 157.425 82.4738L157.427 100.004L157.417 104.791C157.411 106.989 157.151 109.154 158.829 110.861C159.491 111.539 160.359 111.978 161.295 112.106C162.11 112.224 164.019 112.169 164.908 112.165L170.905 112.166L193.156 112.167L193.181 115.007C190.387 114.936 187.444 114.994 184.638 114.996L169.518 114.982L164.023 114.997C161.348 114.997 159.271 115.068 157.133 113.147C155.675 111.855 154.791 110.027 154.681 108.072C154.63 107.125 154.664 105.853 154.665 104.877L154.672 99.1086L154.671 80.5822L154.672 69.6945C154.67 68.2806 154.687 66.8551 154.669 65.4426C154.646 63.5483 155.253 61.7821 156.523 60.3586C157.419 59.3423 158.589 58.6101 159.889 58.2502C161.387 57.8485 164.565 57.9667 166.224 57.9699L174.482 57.9758C176.05 57.9785 177.928 58.0328 179.475 57.9465C179.437 56.2308 179.469 54.505 179.452 52.7883C179.446 52.2005 179.448 51.5729 179.561 50.9963C179.69 50.3055 179.975 49.6538 180.394 49.092C181.25 47.9485 182.412 47.2795 183.81 47.0881ZM198.388 84.5754C196.086 84.5667 193.288 84.4993 191.028 84.591C191.051 85.9421 191.057 87.2935 191.048 88.6447C191.048 88.9748 191.031 89.3441 191.047 89.6682C191.088 90.4929 190.847 91.8977 192.032 91.9123C193.755 91.9333 195.481 91.8942 197.207 91.9416C197.623 91.9531 197.879 91.9324 198.183 91.6359C198.526 91.0224 198.409 89.6714 198.404 88.9367C198.384 87.483 198.379 86.0291 198.388 84.5754ZM188.235 49.8342C187.317 49.8325 184.922 49.7151 184.094 49.8508C183.421 50.0932 182.756 50.4983 182.434 51.1731C181.972 52.1427 182.258 56.5624 182.197 57.9602C184.795 58.0486 187.518 57.9527 190.128 57.968C195.157 57.9974 200.205 57.9267 205.233 57.9846L207.229 57.9836C207.209 55.9476 207.353 53.6366 207.132 51.6506C206.881 49.3924 203.775 49.8257 202.295 49.8303L196.49 49.843L188.235 49.8342Z" fill="#333333"/>
                      <path d="M257.296 50.0719C258.442 50.0318 267.546 49.9393 268.097 50.2504C268.296 50.363 268.418 50.6588 268.473 50.8733C268.69 51.7123 268.527 53.7782 268.53 54.7444C268.537 56.7644 268.653 58.852 268.534 60.8647C268.521 61.0944 268.507 61.329 268.381 61.5276C268.202 61.8057 267.879 61.9557 267.569 62.0264C267.061 62.1422 266.274 62.1585 265.824 61.8537C265.63 61.7239 265.489 61.528 265.426 61.3017C265.319 60.9197 265.333 59.594 265.229 59.0415C265.026 57.9626 264.744 56.9596 264.546 55.8811C262.125 58.3501 259.662 60.778 257.159 63.1635C244.74 74.8453 230.976 85.2246 215.765 92.876C215.337 93.0914 214.918 93.2995 214.481 93.4962C212.464 94.3428 210.486 95.4489 208.412 96.2123C207.686 96.4792 206.949 96.8462 206.196 97.0201C206.99 96.2743 208.041 95.7857 208.975 95.2272C210.906 94.0965 212.825 92.9455 214.732 91.7744C219.905 88.5217 224.983 85.1173 229.959 81.5654C237.353 76.3228 244.453 70.6704 251.226 64.6343C253.252 62.8267 255.244 60.9806 257.201 59.0969C258.911 57.4429 260.73 55.5818 262.477 54.0036C261.45 53.8462 260.6 53.3519 259.639 53.1033C259.033 52.9465 257.776 53.0134 257.064 52.9983C256.826 52.837 256.56 52.6641 256.479 52.3777C256.198 51.3931 256.246 50.4642 257.296 50.0719Z" fill="#333333"/>
                      <path d="M0.512207 102.5C3.31221 103.7 41.6789 97 60.5122 93.5C69.0122 91.5 88.4122 86.3 98.0122 81.5C107.612 76.7 122.346 69.5 128.512 66.5C132.122 65.0781 137.884 63.1538 142.267 61.7163C145.745 60.5757 149.37 59.9381 153.028 59.8162L162.512 59.5" stroke="#333333" stroke-width="2.6"/>
                      <path d="M281.512 121V102.5C281.846 87.6667 292.512 61.1 332.512 73.5C358.679 83.1667 393.012 102.999 426.512 102.999" stroke="#333333" stroke-width="2.6"/>
                    </svg>
                  </div>
                  <div className="mob">
                    <svg xmlns="http://www.w3.org/2000/svg" width="270" height="107" viewBox="0 0 270 107" fill="none">
                      <path d="M159.685 49.8043C161.027 49.7229 162.673 49.8253 164.049 49.7887C165.477 49.7924 166.908 49.7747 168.336 49.7984C168.737 49.8051 169.207 49.9203 169.215 50.4146C169.231 51.3862 169.218 52.3594 169.219 53.3307L169.22 59.5807L169.225 79.2213C169.99 79.2183 182.597 79.2233 183.362 79.2379C183.378 79.838 183.386 80.3669 183.368 80.9683C182.435 81.0021 169.533 80.9803 168.59 80.982L162.154 80.9713L142.727 80.9781L114.615 80.9801L102.869 80.983C100.63 80.9997 98.3898 80.9926 96.1505 80.9605C96.1363 80.3892 96.1361 79.817 96.1514 79.2457C97.2244 79.2051 98.375 79.2231 99.4542 79.2223L104.922 79.2183L124.327 79.2096L124.33 76.8746L124.326 72.7359C124.325 72.0315 124.32 71.3282 124.334 70.6226C124.341 70.2624 124.441 69.8632 124.871 69.8219C125.272 69.7835 125.703 69.8016 126.108 69.8014L128.513 69.8023H131.806C132.397 69.8026 132.984 69.8008 133.575 69.8199C133.84 69.7755 134.239 70.1019 134.249 70.3844C134.35 73.3063 134.197 76.2803 134.285 79.2017C134.838 79.2086 135.391 79.2125 135.943 79.2125L135.953 69.8365L135.947 67.0767C135.945 66.5718 135.931 66.0609 135.958 65.5572C135.991 64.9508 136.47 64.8846 136.957 64.8883C139.52 64.9075 142.083 64.9023 144.645 64.8824C145.121 64.8787 145.859 64.8589 145.891 65.5045C145.922 66.0387 145.911 66.5776 145.91 67.1129L145.908 69.8736L145.917 79.2144L147.588 79.2203C147.523 74.3407 147.584 69.3326 147.583 64.443L147.569 60.6461C147.566 60.0503 147.541 59.339 147.601 58.7457C147.629 58.4681 147.908 58.2833 148.124 58.1402L153.956 58.1392C154.954 58.1367 155.967 58.1058 156.96 58.1598C157.658 58.1977 157.541 59.0197 157.54 59.4996C157.54 59.9376 157.534 60.3764 157.532 60.814L157.524 64.8062L157.534 79.2223L159.23 79.2164L159.224 57.5455L159.223 52.4019C159.222 51.7418 159.189 50.9284 159.255 50.273C159.275 50.0712 159.52 49.9056 159.685 49.8043ZM144.172 66.6422C142.07 66.642 139.768 66.5931 137.683 66.6529L137.685 79.2193C139.768 79.2356 142.09 79.2575 144.167 79.2174C144.222 77.8428 144.176 76.132 144.175 74.733L144.172 66.6422ZM149.327 59.9264L149.317 79.2105C151.388 79.2204 153.764 79.2743 155.815 79.2115C155.763 75.0696 155.822 70.8413 155.81 66.689L155.8 62.2369C155.799 61.6164 155.756 60.5041 155.82 59.9254L149.327 59.9264ZM160.959 51.5504L160.972 66.9674C160.979 70.9913 161.036 75.1973 160.966 79.2105C161.524 79.2131 167.307 79.2915 167.48 79.1519L167.462 60.4127L167.463 54.8297C167.461 53.8026 167.418 52.5511 167.481 51.5494C165.318 51.5456 163.12 51.5269 160.959 51.5504ZM126.066 71.5387L126.067 79.2125L131.674 79.2232L132.545 79.2183L132.551 71.5445L127.066 71.5328L126.066 71.5387Z" fill="#333333"/>
                      <path d="M120.955 33.3767L129.144 33.3718C130.395 33.3715 131.218 33.3821 132.176 34.365C133.426 35.6478 133.038 38.4877 133.037 40.2488L141.006 40.2507C142.008 40.2522 144.318 40.1761 145.214 40.3865C146.007 40.5773 146.731 40.9851 147.308 41.5652C147.923 42.1763 148.362 42.9452 148.576 43.7888C148.761 44.5393 148.695 45.921 148.693 46.7615C148.686 48.0085 148.689 49.2558 148.701 50.5027C148.17 50.8417 147.368 51.5045 146.925 51.9392C146.943 51.806 146.955 51.6066 146.955 51.4695C146.957 50.1393 146.969 48.818 146.956 47.4861C146.947 46.4786 147.01 45.2968 146.878 44.3172C146.824 43.9139 146.44 43.227 146.149 42.9412C145.498 42.3034 144.877 42.0115 143.981 42.0105C140.995 42.0071 138.009 42.0129 135.025 42.0125H116.508L107.091 42.0115L104.209 42.0095C103.647 42.0088 103.074 41.9962 102.508 42.0349C101.321 42.1225 100.169 43.1443 100.014 44.3582C99.9075 45.1916 99.9698 46.3592 99.9681 47.2351L99.9642 53.7713C100.535 53.9358 101.214 54.2495 101.795 54.4568C107.546 56.5089 113.29 57.4917 119.345 58.0955C119.344 57.4623 119.324 56.8251 119.325 56.1941C119.325 55.917 119.347 55.6208 119.56 55.4314C119.655 55.3408 119.81 55.2365 119.945 55.2312C120.665 55.2033 121.41 55.2214 122.13 55.2224L126.961 55.2371C127.507 55.5692 127.448 56.0282 127.453 56.6023C127.458 57.1063 127.46 57.611 127.466 58.115C128.281 57.9697 129.124 57.9105 129.948 57.8181C130.849 57.7085 131.749 57.5885 132.647 57.4588C134.212 57.2233 135.767 56.9265 137.309 56.5681C138.675 56.2642 140.398 55.8543 141.741 55.4324C141.436 55.7035 140.882 56.0631 140.53 56.3064C139.876 56.7555 139.226 57.2086 138.577 57.6648C138.324 57.8437 137.805 58.2292 137.529 58.3152C136.915 58.5059 136.189 58.6287 135.551 58.7537C133.889 59.0736 132.215 59.3318 130.534 59.5281C129.507 59.6559 128.495 59.7928 127.46 59.8406C127.437 61.2276 127.626 62.8189 125.812 63.2537C125.165 63.4085 124.388 63.3049 123.722 63.325C123.086 63.3441 122.434 63.3171 121.797 63.3377C120.442 63.3857 119.337 62.545 119.362 61.1121C119.369 60.709 119.363 60.2571 119.367 59.8435C117.878 59.8125 115.935 59.5087 114.445 59.3035C109.386 58.6067 104.759 57.4147 99.9564 55.6531L99.9583 66.6795L99.9515 69.6912C99.9476 71.0734 99.784 72.4358 100.839 73.5095C101.256 73.9364 101.802 74.2124 102.391 74.2927C102.903 74.3671 104.104 74.332 104.663 74.3298H108.437L122.435 74.3308L122.45 76.1179C120.693 76.0735 118.841 76.1098 117.076 76.1111L107.565 76.1013L104.107 76.1111C102.424 76.1111 101.118 76.1558 99.7728 74.947C98.855 74.1345 98.2991 72.9844 98.2298 71.7547C98.1973 71.1587 98.2201 70.3587 98.221 69.7449L98.2249 66.117L98.2239 54.4627L98.2249 47.614C98.2237 46.7247 98.2339 45.8286 98.223 44.9402C98.2083 43.7486 98.5899 42.6374 99.389 41.742C99.9528 41.1027 100.688 40.6413 101.506 40.4148C102.448 40.1621 104.448 40.237 105.492 40.239L110.687 40.2429C111.674 40.2446 112.855 40.2787 113.828 40.2244C113.804 39.1451 113.825 38.0592 113.814 36.9793C113.81 36.6096 113.811 36.2149 113.882 35.8523C113.964 35.4179 114.143 35.0084 114.407 34.655C114.945 33.9357 115.676 33.5146 116.556 33.3943C117.777 33.3146 119.696 33.3762 120.955 33.3767ZM125.727 56.9744C124.278 56.9689 122.518 56.9264 121.096 56.9841C121.11 57.834 121.114 58.684 121.109 59.5339C121.108 59.7415 121.098 59.9737 121.108 60.1775C121.133 60.6963 120.982 61.5805 121.728 61.5896C122.812 61.6028 123.898 61.5783 124.984 61.6082C125.245 61.6154 125.406 61.602 125.597 61.4158C125.813 61.03 125.74 60.1798 125.737 59.7175C125.724 58.8032 125.721 57.8888 125.727 56.9744ZM119.339 35.1209C118.762 35.1198 117.255 35.0462 116.735 35.1316C116.311 35.2841 115.892 35.539 115.69 35.9636C115.399 36.5745 115.58 39.3531 115.541 40.2322C117.176 40.2878 118.889 40.2275 120.532 40.2371C123.695 40.2556 126.871 40.2114 130.034 40.2478L131.289 40.2468C131.277 38.9662 131.367 37.5127 131.228 36.2634C131.07 34.8428 129.115 35.1151 128.185 35.1179L124.534 35.1257L119.339 35.1209Z" fill="#333333"/>
                      <path d="M162.787 35.2712C163.507 35.2459 169.235 35.1878 169.581 35.3835C169.707 35.4543 169.784 35.6404 169.818 35.7753C169.954 36.303 169.852 37.6026 169.854 38.2104C169.858 39.481 169.932 40.7942 169.857 42.0602C169.848 42.2047 169.84 42.3523 169.76 42.4772C169.648 42.6521 169.444 42.7465 169.249 42.791C168.93 42.8638 168.435 42.8741 168.152 42.6823C168.029 42.6007 167.941 42.4774 167.901 42.3351C167.834 42.0948 167.843 41.2609 167.777 40.9133C167.65 40.2347 167.472 39.6038 167.348 38.9254C165.824 40.4785 164.275 42.0057 162.7 43.5062C154.887 50.8544 146.229 57.3834 136.659 62.1964C136.39 62.3319 136.126 62.4627 135.851 62.5865C134.582 63.119 133.338 63.8148 132.033 64.295C131.576 64.4629 131.113 64.6937 130.639 64.8031C131.139 64.334 131.8 64.0267 132.387 63.6753C133.602 62.9641 134.809 62.2401 136.009 61.5034C139.264 59.4574 142.458 57.3159 145.589 55.0816C150.24 51.7838 154.707 48.2283 158.968 44.4314C160.242 43.2944 161.496 42.1331 162.727 40.9482C163.803 39.9078 164.947 38.7371 166.046 37.7444C165.4 37.6454 164.865 37.3344 164.26 37.178C163.879 37.0794 163.088 37.1215 162.641 37.112C162.491 37.0105 162.324 36.9018 162.272 36.7216C162.096 36.1023 162.126 35.518 162.787 35.2712Z" fill="#333333"/>
                      <path d="M98.7418 54.5002C70.3499 37.1262 27.8971 54.6717 0.741772 84.7067" stroke="#333333" stroke-width="2"/>
                    </svg>
                  </div>
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Business First</h3>
                  <p>Deeper insights of business processes and requirements</p>
                </div>
                <div className="icon-num">1</div>
              </li>
              <li className="stagger-li">
                <div className="icon">
                  <div className="desk">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="426" height="90" viewBox="0 0 426 90" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M153.7 2.68904e-05C155.428 0.00209964 169.73 5.65815 170.81 6.75393C171.293 8.2546 170.49 9.46022 169.826 10.916C186.397 16.7185 194.679 1.64024 212.272 8.90823C231.77 1.07084 237.5 14.536 255.879 12.1231C255.27 10.6743 253.493 7.21216 255.025 6.41214C257.618 5.05809 269.045 0.0615238 271.433 0.0908472C271.956 0.856356 272.584 2.04657 272.919 2.9053C278.017 15.9727 282.993 29.0996 287.949 42.2207C288.126 42.6917 288.151 43.0393 287.969 43.5088C287.057 44.7602 274.53 49.1409 272.37 50.0371C270.157 50.9562 269.679 48.5465 269.253 46.9541C265.773 49.6588 262.155 52.2131 258.766 55.0274C260.075 57.6402 260.183 58.6576 259.92 61.5567C258.254 67.5689 253.697 68.9112 248.098 67.376C247.61 74.7362 243.419 77.703 236.344 75.4151C236.307 82.8619 230.552 86.0081 223.943 82.8174C220.394 95.0819 210.446 87.6078 203.725 83.4414C198.477 89.0144 193.283 86.0723 190.677 79.9512C190.28 79.0217 181.938 81.7917 180.961 72.6446C174.503 73.2859 171.889 71.2918 170.958 65.1973C170.802 64.1774 167.48 64.3356 166.11 63.6074C160.78 60.7737 160.914 57.5407 163.062 52.5996C162.735 51.4274 157.043 47.4315 155.788 46.4698C155.508 47.2452 154.449 50.5963 153.385 50.1817C150.379 49.0059 138.866 45.2816 137.004 43.2696C137.162 41.5944 152.35 1.511 153.416 0.0049097C153.51 0.00121348 153.605 -0.000219524 153.7 2.68904e-05ZM209.828 10.4063C207.369 9.59706 204.283 8.87725 201.695 9.24905C188.965 10.609 183.124 17.633 168.915 13.2364C164.804 23.5162 160.75 33.8194 156.754 44.1446C159.215 46.1028 162.39 48.6944 164.96 50.4356C168.18 46.2924 171.75 42.913 176.974 46.3848C179.55 48.0965 179.228 50.6312 180.315 51.669C186.054 49.0171 190.086 52.4492 191.281 58.1651C195.949 57.335 200.039 58.6793 200.934 63.7676C201.095 64.6818 201.057 66.1874 201.57 66.8311C211.178 69.535 211.173 74.3769 205.123 81.417C208.188 83.4083 220.264 92.8443 221.237 82.1817C221.557 78.6766 208.458 74.9113 209.864 71.9766C214.581 69.9311 228.537 88.7516 233.493 78.5596C233.963 77.7969 234.008 75.1145 233.47 74.4024C229.771 69.5058 222.531 66.7285 217.652 62.918C215.971 61.6079 212.738 60.7426 212.96 58.3741C214.426 57.1064 220.475 61.8272 222.094 62.9287C227.238 66.3098 232.601 70.1763 237.966 73.1924C238.929 73.7348 240.644 73.8462 241.669 73.6563C245.313 73.4249 246.733 67.0246 244.279 64.9659C242.179 63.206 238.667 61.1486 236.166 59.5176L222.462 50.3848C220.823 49.2996 217.516 47.9171 217.403 46.0459C217.856 45.376 217.605 45.5645 218.453 45.3467C222.115 46.0291 238.862 59.2626 243.367 61.3741C246.92 63.0406 250.455 67.8671 255.27 64.6006C256.5 63.7694 257.338 62.4709 257.587 61.0069C257.877 59.3634 257.453 57.7234 256.492 56.3701C255.989 55.662 255.373 55.1626 254.678 54.6524C248.614 50.1911 242.081 46.2192 235.824 42.0186C230.844 38.6755 225.959 34.8946 220.771 31.8994C219.418 31.1179 217.932 30.4238 216.38 30.1612C213.23 29.6286 210.306 30.9974 207.809 32.7998C203.536 35.8856 198.069 41.9443 192.351 41.0586C190.508 40.773 188.96 39.9585 187.859 38.4268C187.105 37.3771 186.765 35.8795 186.982 34.6006C187.537 31.3386 200.029 18.4613 202.828 15.8262C204.47 14.281 206.225 12.802 208.088 11.5293C208.659 11.1415 209.239 10.767 209.828 10.4063ZM205.983 76.3379C208.028 71.7405 204.706 69.1924 200.538 69.5332C198.374 70.7456 194.533 75.7517 193.825 78.1553C192.638 82.1844 195.741 84.2728 199.399 83.5948C201.54 82.6559 205.047 78.4401 205.983 76.3379ZM193.61 60.1944C189.735 61.2027 189.797 63.1687 187.403 65.4785C183.475 69.2689 180.568 76.8376 188.876 77.5274C191.838 76.5378 191.639 75.7706 193.588 73.7852C197.089 70.2178 203.098 61.0361 193.61 60.1944ZM188.089 60.4492C189.855 56.1814 187.173 52.8284 182.643 53.2881C178.484 55.408 167.984 67.761 177.081 70.1797C178.053 70.4385 178.51 70.3887 179.46 70.2256C181.568 69.4371 182.701 67.9962 184.005 66.2295C185.283 64.497 187.29 62.3779 188.089 60.4492ZM172.067 47.3633C168.473 48.7274 159.8 57.9782 166.724 61.3614C167.584 61.7814 168.624 61.9759 169.592 61.9717C173.04 60.9185 176.967 55.6834 177.778 52.3223C176.876 49.2966 175.651 47.2512 172.067 47.3633ZM256.576 14.2393C241.723 17.436 232.861 7.01453 221.082 8.98928C214.278 9.89731 210.121 12.4689 205.131 16.9629C199.668 21.8845 195.205 27.4312 190.432 32.9883C189.04 34.6092 188.89 36.7004 190.822 38.0547C194.586 40.4607 199.654 36.1002 202.537 33.8155C208.555 29.0454 213.97 25.0026 221.596 29.6338C227.41 33.1632 233.13 37.181 238.783 41.0928L238.988 41.2334C243.239 44.0431 253.317 50.3654 256.898 53.3623C260.659 50.5003 264.663 47.5576 268.357 44.6416C264.508 34.4772 260.583 24.3426 256.576 14.2393ZM270.034 2.75393C265.677 4.48278 261.221 6.19465 256.945 8.09475C258.118 11.5495 271.679 47.0229 272.268 47.5791C276.241 45.8042 281.392 43.8299 285.505 42.3701C284.004 38.4546 270.711 3.2393 270.034 2.75393ZM154.784 2.61233C150.299 15.4047 144.465 29.479 139.541 42.209C140.878 42.8086 151.931 47.3214 152.776 47.2315L152.986 47.0049C158.337 33.9972 163.165 20.8541 168.481 7.85843C163.877 6.21311 159.309 4.46389 154.784 2.61233Z" fill="#333333"/>
                      <path d="M0.00378418 61.5342C2.33446 61.541 4.57674 61.0554 6.68517 60.0621C34.5548 46.9328 59.6396 29.2942 96.5038 30.5368C114.415 31.1405 137.104 37.5335 141.504 39.5335C145.904 41.5335 147.84 42.324 148.004 42.0335C152.504 34.0371 163.504 14.0371 168.504 8.03711" stroke="#333333" stroke-width="2.6"/>
                      <path d="M426.004 17.6084C425.328 17.6064 424.693 17.7487 424.079 18.0306C395.294 31.2466 369.86 49.8818 332.004 48.6058C314.093 48.002 291.404 41.6091 287.004 39.6091L284.504 39.0352L278.504 41.0352L257.004 7.53516" stroke="#333333" stroke-width="2.6"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="426" height="154" viewBox="0 0 426 154" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M153.7 38.4629C155.428 38.465 169.73 44.121 170.81 45.2168C171.293 46.7175 170.49 47.9231 169.826 49.3789C186.397 55.1814 194.679 40.1031 212.272 47.3711C231.77 39.5337 237.5 52.9988 255.879 50.586C255.27 49.1372 253.493 45.675 255.025 44.875C257.618 43.521 269.045 38.5244 271.433 38.5537C271.956 39.3192 272.584 40.5095 272.919 41.3682C278.017 54.4356 282.993 67.5625 287.949 80.6836C288.126 81.1546 288.151 81.5022 287.969 81.9717C287.057 83.2231 274.53 87.6038 272.37 88.5C270.157 89.419 269.679 87.0094 269.253 85.417C265.773 88.1217 262.155 90.676 258.766 93.4903C260.075 96.1031 260.183 97.1205 259.92 100.02C258.254 106.032 253.697 107.374 248.098 105.839C247.61 113.199 243.419 116.166 236.344 113.878C236.307 121.325 230.552 124.471 223.943 121.28C220.394 133.545 210.446 126.071 203.725 121.904C198.477 127.477 193.283 124.535 190.677 118.414C190.28 117.485 181.938 120.255 180.961 111.107C174.503 111.749 171.889 109.755 170.958 103.66C170.802 102.64 167.48 102.799 166.11 102.07C160.78 99.2366 160.914 96.0036 163.062 91.0625C162.735 89.8903 157.043 85.8944 155.788 84.9326C155.508 85.7081 154.449 89.0592 153.385 88.6446C150.379 87.4687 138.866 83.7445 137.004 81.7324C137.162 80.0573 152.35 39.9739 153.416 38.4678C153.51 38.4641 153.605 38.4627 153.7 38.4629ZM209.828 48.8692C207.369 48.06 204.283 47.3401 201.695 47.7119C188.965 49.0719 183.124 56.0959 168.915 51.6992C164.804 61.9791 160.75 72.2823 156.754 82.6074C159.215 84.5657 162.39 87.1573 164.96 88.8985C168.18 84.7553 171.75 81.3759 176.974 84.8477C179.55 86.5594 179.228 89.0941 180.315 90.1319C186.054 87.4799 190.086 90.9121 191.281 96.628C195.949 95.7979 200.039 97.1422 200.934 102.23C201.095 103.145 201.057 104.65 201.57 105.294C211.178 107.998 211.173 112.84 205.123 119.88C208.188 121.871 220.264 131.307 221.237 120.645C221.557 117.139 208.458 113.374 209.864 110.439C214.581 108.394 228.537 127.214 233.493 117.022C233.963 116.26 234.008 113.577 233.47 112.865C229.771 107.969 222.531 105.191 217.652 101.381C215.971 100.071 212.738 99.2055 212.96 96.8369C214.426 95.5692 220.475 100.29 222.094 101.392C227.238 104.773 232.601 108.639 237.966 111.655C238.929 112.198 240.644 112.309 241.669 112.119C245.313 111.888 246.733 105.488 244.279 103.429C242.179 101.669 238.667 99.6115 236.166 97.9805L222.462 88.8477C220.823 87.7625 217.516 86.3799 217.403 84.5088C217.856 83.8389 217.605 84.0274 218.453 83.8096C222.115 84.492 238.862 97.7255 243.367 99.8369C246.92 101.503 250.455 106.33 255.27 103.064C256.5 102.232 257.338 100.934 257.587 99.4698C257.877 97.8263 257.453 96.1863 256.492 94.833C255.989 94.1249 255.373 93.6255 254.678 93.1153C248.614 88.6539 242.081 84.6821 235.824 80.4815C230.844 77.1384 225.959 73.3575 220.771 70.3623C219.418 69.5808 217.932 68.8867 216.38 68.6241C213.23 68.0915 210.306 69.4603 207.809 71.2627C203.536 74.3485 198.069 80.4072 192.351 79.5215C190.508 79.2359 188.96 78.4214 187.859 76.8897C187.105 75.84 186.765 74.3423 186.982 73.0635C187.537 69.8015 200.029 56.9242 202.828 54.2891C204.47 52.7438 206.225 51.2649 208.088 49.9922C208.659 49.6044 209.239 49.2299 209.828 48.8692ZM205.983 114.801C208.028 110.203 204.706 107.655 200.538 107.996C198.374 109.208 194.533 114.215 193.825 116.618C192.638 120.647 195.741 122.736 199.399 122.058C201.54 121.119 205.047 116.903 205.983 114.801ZM193.61 98.6573C189.735 99.6656 189.797 101.632 187.403 103.941C183.475 107.732 180.568 115.3 188.876 115.99C191.838 115.001 191.639 114.233 193.588 112.248C197.089 108.681 203.098 99.499 193.61 98.6573ZM188.089 98.9121C189.855 94.6443 187.173 91.2913 182.643 91.751C178.484 93.8709 167.984 106.224 177.081 108.643C178.053 108.901 178.51 108.852 179.46 108.689C181.568 107.9 182.701 106.459 184.005 104.692C185.283 102.96 187.29 100.841 188.089 98.9121ZM172.067 85.8262C168.473 87.1903 159.8 96.4411 166.724 99.8242C167.584 100.244 168.624 100.439 169.592 100.435C173.04 99.3814 176.967 94.1463 177.778 90.7852C176.876 87.7595 175.651 85.7141 172.067 85.8262ZM256.576 52.7022C241.723 55.8989 232.861 45.4774 221.082 47.4522C214.278 48.3602 210.121 50.9318 205.131 55.4258C199.668 60.3474 195.205 65.8941 190.432 71.4512C189.04 73.0721 188.89 75.1633 190.822 76.5176C194.586 78.9236 199.654 74.5631 202.537 72.2783C208.555 67.5083 213.97 63.4655 221.596 68.0967C227.41 71.6261 233.13 75.6439 238.783 79.5557L238.988 79.6963C243.239 82.506 253.317 88.8283 256.898 91.8252C260.659 88.9632 264.663 86.0205 268.357 83.1045C264.508 72.9401 260.583 62.8055 256.576 52.7022ZM270.034 41.2168C265.677 42.9457 261.221 44.6575 256.945 46.5576C258.118 50.0124 271.679 85.4858 272.268 86.042C276.241 84.2671 281.392 82.2928 285.505 80.833C284.004 76.9175 270.711 41.7022 270.034 41.2168ZM154.784 41.0752C150.299 53.8676 144.465 67.9419 139.541 80.6719C140.878 81.2715 151.931 85.7843 152.776 85.6944L152.986 85.4678C158.337 72.4601 163.165 59.317 168.481 46.3213C163.877 44.676 159.309 42.9268 154.784 41.0752Z" fill="#333333"/>
                      <path d="M0.00378418 99.9971C2.33446 100.004 4.57674 99.5183 6.68517 98.525C34.5548 85.3957 59.6396 67.7571 96.5038 68.9997C114.415 69.6034 137.104 75.9964 141.504 77.9964C145.904 79.9964 147.84 80.7869 148.004 80.4964C152.504 72.5 163.504 52.5 168.504 46.5" stroke="#333333" stroke-width="2.6"/>
                      <path d="M426.004 56.0713C425.328 56.0693 424.693 56.2116 424.079 56.4935C395.294 69.7095 369.86 88.3447 332.004 87.0687C314.093 86.4649 291.404 80.072 287.004 78.072L284.504 77.498L278.504 79.498L257.004 45.998" stroke="#333333" stroke-width="2.6"/>
                    </svg>
                  </div>
                  <div className="mob">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="245" height="90" viewBox="0 0 245 90" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M77.5117 37C78.5216 37.001 86.8833 40.3073 87.5156 40.9483C87.798 41.8256 87.3284 42.5307 86.9404 43.3819C96.6286 46.7742 101.471 37.9588 111.757 42.208C123.156 37.6256 126.507 45.4986 137.252 44.0879C136.896 43.2408 135.858 41.2156 136.754 40.7481C138.27 39.9561 144.951 37.0356 146.347 37.0527C146.652 37.5003 147.019 38.1962 147.215 38.6983C150.196 46.3383 153.105 54.0131 156.003 61.6846C156.107 61.9598 156.121 62.1631 156.015 62.4375C155.483 63.169 148.156 65.7311 146.894 66.2549C145.6 66.7918 145.321 65.3821 145.071 64.4512C143.037 66.0325 140.922 67.5265 138.94 69.1719C139.705 70.6995 139.769 71.2945 139.615 72.9893C138.641 76.5044 135.977 77.2892 132.703 76.3916C132.418 80.6948 129.968 82.4294 125.831 81.0918C125.809 85.4456 122.445 87.2852 118.581 85.4199C116.506 92.5906 110.689 88.2201 106.76 85.7842C103.691 89.0427 100.655 87.323 99.1318 83.7442C98.9004 83.2003 94.0216 84.8204 93.4502 79.4717C89.6745 79.8466 88.1458 78.6813 87.6016 75.1182C87.5105 74.5219 85.5684 74.6142 84.7676 74.1885C81.6512 72.5317 81.7306 70.6418 82.9863 67.7529C82.7956 67.0679 79.4661 64.7313 78.7324 64.169C78.5689 64.6229 77.9497 66.5814 77.3281 66.3389C75.5701 65.6514 68.8387 63.4742 67.75 62.2979C67.8423 61.3186 76.7201 37.8906 77.3457 37.0029C77.4008 37.0008 77.4565 36.9999 77.5117 37ZM110.327 43.084C108.889 42.6109 107.085 42.1898 105.572 42.4072C98.1298 43.2024 94.7144 47.3088 86.4072 44.7383C84.0035 50.7486 81.6331 56.7728 79.2969 62.8096C80.7361 63.9545 82.5923 65.4693 84.0947 66.4873C85.9774 64.065 88.0647 62.0894 91.1191 64.1192C92.625 65.12 92.4365 66.6023 93.0723 67.209C96.4273 65.6585 98.7845 67.665 99.4834 71.0069C102.212 70.5215 104.604 71.3073 105.128 74.2822C105.222 74.8167 105.199 75.6969 105.499 76.0733C111.116 77.6541 111.114 80.4855 107.577 84.6016C109.37 85.7662 116.429 91.282 116.998 85.0488C117.185 82.9996 109.527 80.7979 110.349 79.082C113.106 77.8861 121.266 88.8893 124.163 82.9307C124.438 82.4849 124.464 80.9164 124.15 80.5C121.988 77.6372 117.754 76.014 114.901 73.7861C113.919 73.0202 112.029 72.5137 112.158 71.1289C113.015 70.3877 116.553 73.1483 117.5 73.792C120.507 75.7687 123.642 78.0296 126.778 79.793C127.342 80.1101 128.345 80.1755 128.944 80.0645C131.075 79.9287 131.905 76.1859 130.47 74.9824C129.242 73.9536 127.189 72.7514 125.727 71.7979L117.714 66.458C116.756 65.8236 114.822 65.0149 114.756 63.9209C115.021 63.5291 114.875 63.6401 115.37 63.5127C117.511 63.9117 127.303 71.6483 129.937 72.8828C132.014 73.8572 134.08 76.6791 136.896 74.7695C137.614 74.2836 138.104 73.524 138.25 72.668C138.42 71.7071 138.172 70.7482 137.61 69.957C137.316 69.543 136.956 69.2515 136.55 68.9531C133.004 66.3448 129.185 64.0224 125.526 61.5664C122.614 59.6118 119.758 57.4016 116.726 55.6504C115.935 55.1934 115.066 54.7874 114.158 54.6338C112.317 54.3224 110.607 55.1229 109.147 56.1768C106.649 57.9809 103.452 61.5229 100.109 61.0049C99.0321 60.8379 98.1271 60.3622 97.4834 59.4668C97.0422 58.8531 96.8428 57.9772 96.9697 57.2295C97.2935 55.3226 104.599 47.7935 106.235 46.2529C107.195 45.3496 108.22 44.4843 109.31 43.7402C109.644 43.5135 109.983 43.2949 110.327 43.084ZM108.08 81.6319C109.276 78.9438 107.333 77.4541 104.896 77.6533C103.631 78.3622 101.386 81.2891 100.972 82.6944C100.278 85.0499 102.092 86.2704 104.23 85.874C105.482 85.3251 107.533 82.8609 108.08 81.6319ZM100.846 72.1934C98.5802 72.7829 98.6157 73.9317 97.2158 75.2822C94.9191 77.4983 93.2199 81.9238 98.0771 82.3272C99.8088 81.7486 99.693 81.3003 100.832 80.1397C102.879 78.054 106.392 72.6856 100.846 72.1934ZM97.6182 72.3418C98.6506 69.8468 97.0816 67.8865 94.4336 68.1553C92.0018 69.3948 85.863 76.6172 91.1816 78.0313C91.7503 78.1825 92.0169 78.154 92.5723 78.0586C93.8047 77.5976 94.4675 76.7546 95.2295 75.7217C95.9768 74.7087 97.1515 73.4694 97.6182 72.3418ZM88.25 64.6914C86.1488 65.4887 81.0767 70.8978 85.125 72.876C85.6277 73.1216 86.2359 73.2348 86.8018 73.2324C88.818 72.6167 91.1146 69.556 91.5889 67.5908C91.0616 65.8219 90.345 64.6261 88.25 64.6914ZM137.659 45.3242C128.975 47.1933 123.794 41.1013 116.907 42.2559C112.929 42.7868 110.499 44.2896 107.581 46.917C104.387 49.7945 101.778 53.0381 98.9873 56.2871C98.1736 57.2348 98.0865 58.4573 99.2158 59.249C101.416 60.6555 104.379 58.1064 106.064 56.7705C109.583 53.9816 112.749 51.6183 117.208 54.3262C120.607 56.3897 123.952 58.7383 127.257 61.0254L127.376 61.1074C129.861 62.7501 135.754 66.447 137.848 68.1992C140.046 66.5259 142.388 64.8045 144.548 63.0996C142.297 57.1568 140.002 51.2313 137.659 45.3242ZM145.527 38.6094C142.98 39.6202 140.375 40.6215 137.875 41.7324C138.561 43.7524 146.49 64.4938 146.834 64.8174C149.156 63.7797 152.168 62.6259 154.572 61.7725C153.695 59.4831 145.921 38.8857 145.527 38.6094ZM78.1455 38.5274C75.5234 46.0065 72.1125 54.235 69.2334 61.6777C70.0147 62.0281 76.4775 64.6669 76.9717 64.6143L77.0947 64.4815C80.2234 56.8764 83.0461 49.1928 86.1543 41.5947C83.4621 40.6328 80.7913 39.6099 78.1455 38.5274Z" fill="#333333"/>
                      <path d="M0.75 0C0.75 9.5 23.9923 38.1829 47.75 45.5C57.3328 48.4514 73.25 48.5 73.25 48.5" stroke="#333333" stroke-width="1.5"/>
                      <path d="M150.75 50.5001C170.75 17 232.75 45.0464 244.75 45.0467" stroke="#333333" stroke-width="1.5"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="269" height="107" viewBox="0 0 269 107" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M101.762 37C102.772 37.001 111.133 40.3073 111.766 40.9483C112.048 41.8256 111.578 42.5307 111.19 43.3819C120.879 46.7742 125.721 37.9588 136.007 42.208C147.406 37.6256 150.757 45.4986 161.502 44.0879C161.146 43.2408 160.108 41.2156 161.004 40.7481C162.52 39.9561 169.201 37.0356 170.597 37.0527C170.902 37.5003 171.269 38.1962 171.465 38.6983C174.446 46.3383 177.355 54.0131 180.253 61.6846C180.357 61.9598 180.371 62.1631 180.265 62.4375C179.733 63.169 172.406 65.7311 171.144 66.2549C169.85 66.7918 169.571 65.3821 169.321 64.4512C167.287 66.0325 165.172 67.5265 163.19 69.1719C163.955 70.6995 164.019 71.2945 163.865 72.9893C162.891 76.5044 160.227 77.2892 156.953 76.3916C156.668 80.6948 154.218 82.4294 150.081 81.0918C150.059 85.4456 146.695 87.2852 142.831 85.4199C140.756 92.5906 134.939 88.2201 131.01 85.7842C127.941 89.0427 124.905 87.323 123.382 83.7442C123.15 83.2003 118.272 84.8204 117.7 79.4717C113.924 79.8466 112.396 78.6813 111.852 75.1182C111.761 74.5219 109.818 74.6142 109.018 74.1885C105.901 72.5317 105.981 70.6418 107.236 67.7529C107.046 67.0679 103.716 64.7313 102.982 64.169C102.819 64.6229 102.2 66.5814 101.578 66.3389C99.8201 65.6514 93.0887 63.4742 92 62.2979C92.0923 61.3186 100.97 37.8906 101.596 37.0029C101.651 37.0008 101.706 36.9999 101.762 37ZM134.577 43.084C133.139 42.6109 131.335 42.1898 129.822 42.4072C122.38 43.2024 118.964 47.3088 110.657 44.7383C108.254 50.7486 105.883 56.7728 103.547 62.8096C104.986 63.9545 106.842 65.4693 108.345 66.4873C110.227 64.065 112.315 62.0894 115.369 64.1192C116.875 65.12 116.687 66.6023 117.322 67.209C120.677 65.6585 123.034 67.665 123.733 71.0069C126.462 70.5215 128.854 71.3073 129.378 74.2822C129.472 74.8167 129.449 75.6969 129.749 76.0733C135.366 77.6541 135.364 80.4855 131.827 84.6016C133.62 85.7662 140.679 91.282 141.248 85.0488C141.435 82.9996 133.777 80.7979 134.599 79.082C137.356 77.8861 145.516 88.8893 148.413 82.9307C148.688 82.4849 148.714 80.9164 148.4 80.5C146.238 77.6372 142.004 76.014 139.151 73.7861C138.169 73.0202 136.279 72.5137 136.408 71.1289C137.265 70.3877 140.803 73.1483 141.75 73.792C144.757 75.7687 147.892 78.0296 151.028 79.793C151.592 80.1101 152.595 80.1755 153.194 80.0645C155.325 79.9287 156.155 76.1859 154.72 74.9824C153.492 73.9536 151.439 72.7514 149.977 71.7979L141.964 66.458C141.006 65.8236 139.072 65.0149 139.006 63.9209C139.271 63.5291 139.125 63.6401 139.62 63.5127C141.761 63.9117 151.553 71.6483 154.187 72.8828C156.264 73.8572 158.33 76.6791 161.146 74.7695C161.864 74.2836 162.354 73.524 162.5 72.668C162.67 71.7071 162.422 70.7482 161.86 69.957C161.566 69.543 161.206 69.2515 160.8 68.9531C157.254 66.3448 153.435 64.0224 149.776 61.5664C146.864 59.6118 144.008 57.4016 140.976 55.6504C140.185 55.1934 139.316 54.7874 138.408 54.6338C136.567 54.3224 134.857 55.1229 133.397 56.1768C130.899 57.9809 127.702 61.5229 124.359 61.0049C123.282 60.8379 122.377 60.3622 121.733 59.4668C121.292 58.8531 121.093 57.9772 121.22 57.2295C121.543 55.3226 128.849 47.7935 130.485 46.2529C131.445 45.3496 132.47 44.4843 133.56 43.7402C133.894 43.5135 134.233 43.2949 134.577 43.084ZM132.33 81.6319C133.526 78.9438 131.583 77.4541 129.146 77.6533C127.881 78.3622 125.636 81.2891 125.222 82.6944C124.528 85.0499 126.342 86.2704 128.48 85.874C129.732 85.3251 131.783 82.8609 132.33 81.6319ZM125.096 72.1934C122.83 72.7829 122.866 73.9317 121.466 75.2822C119.169 77.4983 117.47 81.9238 122.327 82.3272C124.059 81.7486 123.943 81.3003 125.082 80.1397C127.129 78.054 130.642 72.6856 125.096 72.1934ZM121.868 72.3418C122.901 69.8468 121.332 67.8865 118.684 68.1553C116.252 69.3948 110.113 76.6172 115.432 78.0313C116 78.1825 116.267 78.154 116.822 78.0586C118.055 77.5976 118.717 76.7546 119.479 75.7217C120.227 74.7087 121.401 73.4694 121.868 72.3418ZM112.5 64.6914C110.399 65.4887 105.327 70.8978 109.375 72.876C109.878 73.1216 110.486 73.2348 111.052 73.2324C113.068 72.6167 115.365 69.556 115.839 67.5908C115.312 65.8219 114.595 64.6261 112.5 64.6914ZM161.909 45.3242C153.225 47.1933 148.044 41.1013 141.157 42.2559C137.179 42.7868 134.749 44.2896 131.831 46.917C128.637 49.7945 126.028 53.0381 123.237 56.2871C122.424 57.2348 122.336 58.4573 123.466 59.249C125.666 60.6555 128.629 58.1064 130.314 56.7705C133.833 53.9816 136.999 51.6183 141.458 54.3262C144.857 56.3897 148.202 58.7383 151.507 61.0254L151.626 61.1074C154.111 62.7501 160.004 66.447 162.098 68.1992C164.296 66.5259 166.638 64.8045 168.798 63.0996C166.547 57.1568 164.252 51.2313 161.909 45.3242ZM169.777 38.6094C167.23 39.6202 164.625 40.6215 162.125 41.7324C162.811 43.7524 170.74 64.4938 171.084 64.8174C173.406 63.7797 176.418 62.6259 178.822 61.7725C177.945 59.4831 170.171 38.8857 169.777 38.6094ZM102.396 38.5274C99.7734 46.0065 96.3625 54.235 93.4834 61.6777C94.2647 62.0281 100.727 64.6669 101.222 64.6143L101.345 64.4815C104.473 56.8764 107.296 49.1928 110.404 41.5947C107.712 40.6328 105.041 39.6099 102.396 38.5274Z" fill="#333333"/>
                      <path d="M25 0C25 9.5 48.2423 38.1829 72 45.5C81.5828 48.4514 97.5 48.5 97.5 48.5" stroke="#333333" stroke-width="1.5"/>
                      <path d="M175 50.5001C195 17 257 45.0464 269 45.0467" stroke="#333333" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Keeping Promises</h3>
                  <p>Committed to deliver the right solutions on time</p>
                </div>
                <div className="icon-num">2</div>
              </li>
              <li className="stagger-li">
                <div className="icon">
                  <div className="desk">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="427" height="96" viewBox="0 0 427 96" fill="none">
                      <path d="M239.766 14.4365C241.352 14.58 242.138 15.2879 243.29 16.3052C243.507 17.5761 243.82 19.1275 243.377 20.3389C243.104 20.309 242.861 20.1434 242.616 20.0067C242.171 19.1674 242.215 17.8494 242.173 16.856C240.769 16.1653 239.665 16.085 239.766 14.4365Z" fill="#333333"/>
                      <path d="M196.632 31.6631C198.621 32.755 194.684 35.6141 193.704 36.5267C193.039 36.0053 193.132 36.2377 192.983 35.5253C193.545 34.3179 195.572 32.6321 196.632 31.6631Z" fill="#333333"/>
                      <path d="M184.865 43.332L185.364 43.419C185.511 43.566 185.774 43.7631 185.763 43.9131C185.688 44.9752 183.066 47.135 182.245 47.8977C181.825 47.8285 181.748 47.6918 181.456 47.3706C181.561 46.1585 183.88 44.2735 184.865 43.332Z" fill="#333333"/>
                      <path d="M239.766 45.2344C240.438 45.3508 240.207 45.2267 240.668 45.6715C240.524 46.9321 238.221 48.7516 237.193 49.7119C236.759 49.5738 236.705 49.4992 236.381 49.174C236.553 47.7917 238.644 46.2505 239.766 45.2344Z" fill="#333333"/>
                      <path d="M179.308 48.9492C181.288 50.1897 177.402 52.8044 176.31 53.7706C175.676 53.2471 175.748 53.4711 175.664 52.7955C176.198 51.7279 178.337 49.8601 179.308 48.9492Z" fill="#333333"/>
                      <path d="M234.141 50.7754C234.507 50.8857 234.626 51.053 234.899 51.3194C234.792 52.7092 232.611 54.3668 231.493 55.412C230.81 55.0467 230.901 55.2317 230.679 54.6348C230.983 53.5711 233.236 51.6287 234.141 50.7754Z" fill="#333333"/>
                      <path d="M202.326 26.0938C202.571 26.233 202.769 26.4915 202.961 26.7075C202.776 28.1211 200.639 29.7343 199.501 30.778L198.843 30.2459L198.794 29.7084C199.408 28.5832 201.288 27.042 202.326 26.0938Z" fill="#333333"/>
                      <path d="M190.767 37.5352C193.058 38.2678 188.586 41.5805 187.834 42.2481C187.258 41.7162 187.296 41.9136 187.2 41.2653C187.858 40.0355 189.666 38.5468 190.767 37.5352Z" fill="#333333"/>
                      <path d="M213.78 14.6328C215.968 15.3233 211.66 18.7045 210.934 19.3935L210.304 18.9228L210.234 18.4012C210.857 17.2179 212.73 15.6228 213.78 14.6328Z" fill="#333333"/>
                      <path d="M207.901 20.4854C208.328 20.5318 208.401 20.6367 208.718 20.936C208.634 22.26 206.278 24.1021 205.198 25.1157C204.505 24.6883 204.638 24.9127 204.449 24.2367C204.915 23.181 206.964 21.3851 207.901 20.4854Z" fill="#333333"/>
                      <path d="M228.603 56.3936C229.161 56.8503 229.023 56.6254 229.263 57.2986C228.925 58.4118 226.823 60.1748 225.888 61.0374C225.451 60.9327 225.4 60.8576 225.085 60.5296C225.232 59.1867 227.511 57.4113 228.603 56.3936Z" fill="#333333"/>
                      <path d="M222.773 62.2539C223.426 62.4405 223.251 62.2887 223.587 62.8044C223.527 63.8924 220.94 66.0046 220.058 66.811C219.496 66.3025 219.538 66.4914 219.4 65.8534C219.971 64.633 221.709 63.228 222.773 62.2539Z" fill="#333333"/>
                      <path d="M217.3 67.8242C217.517 67.9035 217.751 68.152 217.93 68.3185C217.779 69.7076 215.565 71.4179 214.45 72.459C214.149 72.2861 213.99 72.0851 213.755 71.8352C213.988 70.409 216.132 68.855 217.3 67.8242Z" fill="#333333"/>
                      <path d="M211.604 73.4219C213.815 74.1826 209.688 77.2815 208.879 78.0342C207.904 77.4518 208.048 76.9505 208.76 76.1653C209.63 75.2047 210.649 74.3057 211.604 73.4219Z" fill="#333333"/>
                      <path d="M184.247 72.2227C185.896 72.5082 188.394 74.8639 188.273 76.6682C186.864 76.5318 185.112 74.441 184.303 73.3104C184.144 73.0871 184.235 72.5315 184.247 72.2227Z" fill="#333333"/>
                      <path d="M206.035 79.0322C206.637 79.4768 206.509 79.2513 206.679 79.9207C206.276 80.9534 204.16 82.7691 203.248 83.6185C203.021 83.4888 202.755 83.2177 202.557 83.0337C202.776 81.5975 204.871 80.0686 206.035 79.0322Z" fill="#333333"/>
                      <path d="M243.563 38.585C246.272 39.059 243.948 42.6459 243.055 43.8246L242.481 43.6289C241.907 42.9004 243.444 40.1707 243.563 38.585Z" fill="#333333"/>
                      <path d="M243.293 30.4844C244.791 31.2437 244.77 35.1231 244.238 36.355L243.528 36.1024C242.791 35.2295 242.721 31.5056 243.293 30.4844Z" fill="#333333"/>
                      <path d="M195.999 83.3311C197.565 83.9956 200.194 84.4029 200.728 84.9511L200.672 85.8109C199.03 86.0062 196.356 85.6698 195.705 83.9287L195.999 83.3311Z" fill="#333333"/>
                      <path d="M189.85 77.8291C190.837 77.9054 191.413 78.3509 192.087 79.0561C193.125 80.1461 194.054 80.7295 193.846 82.2644C192.652 82.1165 190.685 79.7953 189.953 78.7955C189.787 78.5721 189.85 78.1309 189.85 77.8291Z" fill="#333333"/>
                      <path d="M178.475 66.9625C180.215 66.7378 182.572 69.4232 182.597 71.0959C181.218 70.9275 178.582 68.3861 178.475 66.9625Z" fill="#333333"/>
                      <path d="M216.078 12.8837C217.14 12.7888 220.317 12.5737 221.185 13.2147C221.57 13.4996 221.49 13.7571 221.553 14.2658C220.284 14.2873 217.557 14.4886 216.461 13.8852C216.106 13.6908 216.153 13.3323 216.078 12.8837Z" fill="#333333"/>
                      <path d="M242.917 22.6064C244.413 23.2664 244.242 27.4546 243.584 28.4395C243.377 28.3075 243.095 28.0644 242.894 27.9044C242.535 26.7112 242.129 23.5586 242.917 22.6064Z" fill="#333333"/>
                      <path d="M172.797 61.5024C174.413 61.4611 176.786 64.073 176.996 65.7416C175.533 65.6606 172.895 63.003 172.797 61.5024Z" fill="#333333"/>
                      <path d="M223.991 13.3468C225.136 13.2695 228.237 13.1685 229.212 13.7932C229.503 13.9812 229.48 14.3344 229.562 14.7466C228.246 14.7622 225.54 14.9535 224.397 14.3304C224.054 14.1436 224.08 13.7825 223.991 13.3468Z" fill="#333333"/>
                      <path d="M173.534 54.748L173.998 55.0189C174.637 56.2176 172.75 57.3373 172.265 59.7022L171.738 59.4803C170.543 57.9566 172.452 55.8311 173.534 54.748Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M248.561 0.108426C257.279 -0.998709 263.267 6.56122 258.216 14.1826C256.079 17.4095 252.858 18.9079 249.613 20.7432C249.713 26.8657 250.035 32.9308 250.229 39.0401C250.353 42.9991 249.571 44.0909 246.821 46.8223C237.308 56.2697 227.808 65.7429 218.33 75.2246L209.168 84.377C205.973 87.5536 203.6 90.7949 198.668 90.6953C193.462 90.5899 189.654 85.4813 186.185 82.0635C180.526 76.1548 174.342 70.6106 168.699 64.668C166.035 61.8649 164.929 57.5197 167.382 54.2354C168.787 52.3544 171.442 49.9766 173.145 48.2744L184.233 37.2178L201.689 19.7774C204.857 16.6068 207.948 13.2476 211.293 10.2735C212.196 9.47058 213.004 8.75438 214.184 8.41311C218.194 7.25589 231.727 8.7393 236.556 9.02249C237.009 8.09114 237.536 7.19753 238.133 6.35061C240.69 2.71565 244.271 0.872162 248.561 0.108426ZM216.319 10.0938C215.148 10.4513 214.168 10.8131 213.23 11.6192C209.674 14.6702 169.676 54.6636 168.911 56.1055C168.3 57.262 168.178 59.045 168.568 60.2764C168.853 61.1749 169.373 61.9613 169.984 62.669C172.752 65.8654 193.756 86.8286 195.673 87.7754C197.309 88.5836 199.012 88.7399 200.743 88.1465C204.389 86.8962 215.395 74.9407 218.787 71.501L238.515 51.7852C241.394 48.9251 244.798 45.9764 247.29 42.794C248.027 41.854 247.987 40.1553 248.015 39.0186C247.812 31.7252 247.394 24.4254 247.128 17.1348C247.082 15.8052 246.953 13.6574 245.911 12.753C244.166 11.2414 239.981 11.5352 237.707 11.4795C237.273 14.0393 237.466 15.0174 236.82 17.7598C238.261 19.2141 239.775 21.4089 239.511 23.4307C237.885 35.8966 219.242 29.1695 226.996 18.4854C228.852 15.9284 234.048 16.8436 235.093 15.9698L235.038 15.6065C233.489 14.7353 232.529 15.4627 231.914 14.3867C232.686 13.4274 234.416 14.0857 235.13 13.6416C235.319 13.5239 235.569 11.747 235.641 11.2901L222.755 10.4385C221.167 10.3389 217.763 10.0383 216.319 10.0938ZM234.442 19.0313C233.798 18.4665 232.251 18.449 231.43 18.502L231.363 18.5069C229.788 19.1101 228.512 19.8171 227.777 21.4649C227.299 22.5564 227.295 23.7975 227.768 24.8916C228.312 26.1571 229.338 27.1547 230.617 27.6651C231.135 27.8694 231.732 28.024 232.273 28.1563C234.307 27.6676 235.443 27.3617 236.701 25.5391C236.953 24.822 237.265 24.0039 237.482 23.2852C237.134 22.2947 236.833 21.3432 236.336 20.417C235.581 21.7974 234.999 22.9849 233.542 23.7061C232.718 23.7457 232.347 23.6314 231.981 22.8233C232.179 20.7666 234.745 20.7532 234.442 19.0313ZM253.408 15.9951C260.933 10.1133 258.519 1.44349 248.325 2.43557C243.689 3.47174 241.625 5.11672 239.14 9.02835L239.036 9.19534C246.979 9.7092 249.228 9.3356 249.375 18.1397C250.203 18.0023 252.693 16.5538 253.408 15.9951Z" fill="#333333"/>
                      <path d="M0.0169678 14.9985C38.517 14.4957 85.0667 6.25037 116.517 14.9978C138.648 21.3915 158.472 41.4241 172.342 39.6014C175.9 39.0676 183.117 38.1 183.517 38.5" stroke="#333333" stroke-width="2.6" stroke-miterlimit="1.88708"/>
                      <path d="M426.017 89.4989L408.517 90.7192C408.517 90.7192 323.467 99.4673 292.017 90.7198C269.885 84.3262 269.887 65.395 256.017 67.2177C252.517 66.4778 241.517 69.498 245.517 59.498C249.517 49.498 258.517 34.998 249.517 37.998" stroke="#333333" stroke-width="2.6" stroke-miterlimit="1.88708"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="429" height="154" viewBox="0 0 429 154" fill="none">
                      <path d="M241.749 55.4365C243.335 55.58 244.121 56.2879 245.273 57.3052C245.49 58.5761 245.803 60.1275 245.36 61.3389C245.087 61.309 244.844 61.1434 244.599 61.0067C244.154 60.1674 244.198 58.8494 244.156 57.856C242.752 57.1653 241.648 57.085 241.749 55.4365Z" fill="#333333"/>
                      <path d="M198.615 72.6631C200.604 73.755 196.667 76.6141 195.687 77.5267C195.022 77.0053 195.115 77.2377 194.966 76.5253C195.528 75.3179 197.555 73.6321 198.615 72.6631Z" fill="#333333"/>
                      <path d="M186.848 84.332L187.347 84.419C187.494 84.566 187.757 84.7631 187.746 84.9131C187.671 85.9752 185.049 88.135 184.228 88.8977C183.808 88.8285 183.731 88.6918 183.439 88.3706C183.544 87.1585 185.863 85.2735 186.848 84.332Z" fill="#333333"/>
                      <path d="M241.749 86.2344C242.421 86.3508 242.19 86.2267 242.651 86.6715C242.507 87.9321 240.204 89.7516 239.176 90.7119C238.742 90.5738 238.688 90.4992 238.364 90.174C238.536 88.7917 240.627 87.2505 241.749 86.2344Z" fill="#333333"/>
                      <path d="M181.291 89.9492C183.271 91.1897 179.385 93.8044 178.293 94.7706C177.659 94.2471 177.731 94.4711 177.647 93.7955C178.181 92.7279 180.32 90.8601 181.291 89.9492Z" fill="#333333"/>
                      <path d="M236.124 91.7754C236.49 91.8857 236.609 92.053 236.882 92.3194C236.775 93.7092 234.594 95.3668 233.476 96.412C232.793 96.0467 232.884 96.2317 232.662 95.6348C232.966 94.5711 235.219 92.6287 236.124 91.7754Z" fill="#333333"/>
                      <path d="M204.309 67.0938C204.554 67.233 204.752 67.4915 204.943 67.7075C204.759 69.1211 202.622 70.7343 201.484 71.778L200.826 71.2459L200.777 70.7084C201.391 69.5832 203.271 68.042 204.309 67.0938Z" fill="#333333"/>
                      <path d="M192.75 78.5352C195.041 79.2678 190.569 82.5805 189.817 83.2481C189.241 82.7162 189.279 82.9136 189.183 82.2653C189.841 81.0355 191.649 79.5468 192.75 78.5352Z" fill="#333333"/>
                      <path d="M215.763 55.6328C217.951 56.3233 213.643 59.7045 212.917 60.3935L212.287 59.9228L212.217 59.4012C212.84 58.2179 214.713 56.6228 215.763 55.6328Z" fill="#333333"/>
                      <path d="M209.884 61.4854C210.311 61.5318 210.384 61.6367 210.701 61.936C210.617 63.26 208.261 65.1021 207.181 66.1157C206.488 65.6883 206.621 65.9127 206.432 65.2367C206.898 64.181 208.947 62.3851 209.884 61.4854Z" fill="#333333"/>
                      <path d="M230.586 97.3936C231.144 97.8503 231.006 97.6254 231.246 98.2986C230.908 99.4118 228.806 101.175 227.871 102.037C227.434 101.933 227.383 101.858 227.068 101.53C227.215 100.187 229.494 98.4113 230.586 97.3936Z" fill="#333333"/>
                      <path d="M224.756 103.254C225.409 103.441 225.234 103.289 225.57 103.804C225.51 104.892 222.923 107.005 222.041 107.811C221.479 107.302 221.521 107.491 221.383 106.853C221.954 105.633 223.692 104.228 224.756 103.254Z" fill="#333333"/>
                      <path d="M219.283 108.824C219.5 108.904 219.734 109.152 219.913 109.319C219.762 110.708 217.548 112.418 216.433 113.459C216.132 113.286 215.973 113.085 215.738 112.835C215.971 111.409 218.115 109.855 219.283 108.824Z" fill="#333333"/>
                      <path d="M213.587 114.422C215.798 115.183 211.671 118.281 210.862 119.034C209.887 118.452 210.031 117.95 210.743 117.165C211.613 116.205 212.632 115.306 213.587 114.422Z" fill="#333333"/>
                      <path d="M186.23 113.223C187.879 113.508 190.377 115.864 190.256 117.668C188.847 117.532 187.095 115.441 186.286 114.31C186.127 114.087 186.218 113.532 186.23 113.223Z" fill="#333333"/>
                      <path d="M208.018 120.032C208.62 120.477 208.492 120.251 208.662 120.921C208.259 121.953 206.143 123.769 205.23 124.618C205.004 124.489 204.738 124.218 204.54 124.034C204.759 122.597 206.854 121.069 208.018 120.032Z" fill="#333333"/>
                      <path d="M245.546 79.585C248.255 80.059 245.931 83.6459 245.038 84.8246L244.464 84.6289C243.89 83.9004 245.427 81.1707 245.546 79.585Z" fill="#333333"/>
                      <path d="M245.276 71.4844C246.774 72.2437 246.753 76.1231 246.221 77.355L245.511 77.1024C244.774 76.2295 244.704 72.5056 245.276 71.4844Z" fill="#333333"/>
                      <path d="M197.982 124.331C199.548 124.996 202.177 125.403 202.711 125.951L202.655 126.811C201.013 127.006 198.339 126.67 197.688 124.929L197.982 124.331Z" fill="#333333"/>
                      <path d="M191.833 118.829C192.82 118.905 193.396 119.351 194.07 120.056C195.108 121.146 196.037 121.73 195.829 123.264C194.635 123.117 192.668 120.795 191.935 119.796C191.77 119.572 191.833 119.131 191.833 118.829Z" fill="#333333"/>
                      <path d="M180.458 107.962C182.198 107.738 184.555 110.423 184.58 112.096C183.201 111.928 180.565 109.386 180.458 107.962Z" fill="#333333"/>
                      <path d="M218.061 53.8837C219.123 53.7888 222.3 53.5737 223.168 54.2147C223.553 54.4996 223.473 54.7571 223.536 55.2658C222.267 55.2873 219.54 55.4886 218.444 54.8852C218.089 54.6908 218.136 54.3323 218.061 53.8837Z" fill="#333333"/>
                      <path d="M244.9 63.6064C246.396 64.2664 246.225 68.4546 245.567 69.4395C245.36 69.3075 245.078 69.0644 244.877 68.9044C244.518 67.7112 244.112 64.5586 244.9 63.6064Z" fill="#333333"/>
                      <path d="M174.78 102.502C176.396 102.461 178.769 105.073 178.979 106.742C177.516 106.661 174.878 104.003 174.78 102.502Z" fill="#333333"/>
                      <path d="M225.974 54.3468C227.119 54.2695 230.22 54.1685 231.195 54.7932C231.486 54.9812 231.463 55.3344 231.545 55.7466C230.229 55.7622 227.523 55.9535 226.38 55.3304C226.037 55.1436 226.063 54.7825 225.974 54.3468Z" fill="#333333"/>
                      <path d="M175.517 95.748L175.981 96.0189C176.62 97.2176 174.733 98.3373 174.248 100.702L173.721 100.48C172.526 98.9566 174.435 96.8311 175.517 95.748Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M250.544 41.1084C259.262 40.0013 265.25 47.5612 260.199 55.1826C258.062 58.4095 254.841 59.9079 251.596 61.7432C251.696 67.8657 252.018 73.9308 252.212 80.0401C252.336 83.9991 251.554 85.0909 248.804 87.8223C239.291 97.2697 229.791 106.743 220.313 116.225L211.152 125.377C207.956 128.554 205.583 131.795 200.652 131.695C195.445 131.59 191.637 126.481 188.168 123.064C182.509 117.155 176.325 111.611 170.682 105.668C168.018 102.865 166.912 98.5197 169.365 95.2354C170.77 93.3544 173.425 90.9766 175.128 89.2744L186.216 78.2178L203.672 60.7774C206.84 57.6068 209.931 54.2476 213.277 51.2735C214.179 50.4706 214.987 49.7544 216.167 49.4131C220.177 48.2559 233.71 49.7393 238.539 50.0225C238.992 49.0911 239.519 48.1975 240.116 47.3506C242.673 43.7156 246.254 41.8722 250.544 41.1084ZM218.302 51.0938C217.131 51.4513 216.151 51.8131 215.213 52.6192C211.657 55.6702 171.659 95.6636 170.894 97.1055C170.283 98.262 170.161 100.045 170.551 101.276C170.836 102.175 171.356 102.961 171.967 103.669C174.735 106.865 195.739 127.829 197.656 128.775C199.292 129.584 200.995 129.74 202.726 129.147C206.372 127.896 217.378 115.941 220.77 112.501L240.498 92.7852C243.377 89.9251 246.781 86.9764 249.273 83.794C250.01 82.854 249.97 81.1553 249.998 80.0186C249.795 72.7252 249.377 65.4254 249.111 58.1348C249.065 56.8052 248.936 54.6574 247.894 53.753C246.149 52.2414 241.964 52.5352 239.69 52.4795C239.256 55.0393 239.449 56.0174 238.803 58.7598C240.244 60.2141 241.758 62.4089 241.494 64.4307C239.868 76.8966 221.225 70.1695 228.979 59.4854C230.836 56.9284 236.031 57.8436 237.076 56.9698L237.021 56.6065C235.472 55.7353 234.513 56.4627 233.897 55.3867C234.669 54.4274 236.399 55.0857 237.113 54.6416C237.302 54.5239 237.552 52.747 237.624 52.2901L224.738 51.4385C223.15 51.3389 219.746 51.0383 218.302 51.0938ZM236.425 60.0313C235.781 59.4665 234.234 59.449 233.413 59.502L233.346 59.5069C231.771 60.1101 230.495 60.8171 229.76 62.4649C229.282 63.5564 229.278 64.7975 229.751 65.8916C230.295 67.1571 231.321 68.1547 232.6 68.6651C233.118 68.8694 233.715 69.024 234.256 69.1563C236.29 68.6676 237.426 68.3617 238.684 66.5391C238.936 65.822 239.248 65.0039 239.465 64.2852C239.117 63.2947 238.816 62.3432 238.319 61.417C237.564 62.7974 236.982 63.9849 235.525 64.7061C234.701 64.7457 234.33 64.6314 233.964 63.8233C234.162 61.7666 236.728 61.7532 236.425 60.0313ZM255.391 56.9951C262.917 51.1133 260.502 42.4435 250.308 43.4356C245.672 44.4717 243.608 46.1167 241.123 50.0283L241.019 50.1953C248.962 50.7092 251.211 50.3356 251.358 59.1397C252.186 59.0023 254.676 57.5538 255.391 56.9951Z" fill="#333333"/>
                      <path d="M2 55.9985C40.5 55.4957 87.0497 47.2504 118.5 55.9978C140.631 62.3915 160.455 82.4241 174.325 80.6014C177.883 80.0676 185.1 79.1 185.5 79.5" stroke="#333333" stroke-width="2.6" stroke-miterlimit="1.88708"/>
                      <path d="M428 130.499L410.5 131.719C410.5 131.719 325.45 140.467 294 131.72C271.869 125.326 271.87 106.395 258 108.218C254.5 107.478 243.5 110.498 247.5 100.498C251.5 90.498 260.5 75.998 251.5 78.998" stroke="#333333" stroke-width="2.6" stroke-miterlimit="1.88708"/>
                    </svg>
                  </div>
                  <div className="mob">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="70" height="89" viewBox="0 0 70 89" fill="none">
                      <path d="M50.4497 35.876C51.5349 35.9741 52.0727 36.4584 52.8611 37.1543C53.0095 38.0237 53.2233 39.085 52.9201 39.9137C52.7334 39.8932 52.5674 39.7799 52.3999 39.6864C52.0951 39.1123 52.1254 38.2107 52.0967 37.5311C51.1359 37.0586 50.3811 37.0037 50.4497 35.876Z" fill="#333333"/>
                      <path d="M20.9433 47.6602C22.3045 48.4071 19.6107 50.363 18.9405 50.9873C18.4857 50.6306 18.5495 50.7896 18.4474 50.3022C18.832 49.4763 20.2188 48.323 20.9433 47.6602Z" fill="#333333"/>
                      <path d="M12.8932 55.6426L13.2347 55.7021C13.3352 55.8026 13.5155 55.9375 13.5076 56.0401C13.4565 56.7666 11.6627 58.2441 11.101 58.7659C10.8137 58.7185 10.7611 58.625 10.5616 58.4053C10.6334 57.5761 12.2197 56.2866 12.8932 55.6426Z" fill="#333333"/>
                      <path d="M50.4504 56.9434C50.9101 57.023 50.7521 56.9381 51.068 57.2424C50.9691 58.1047 49.394 59.3494 48.6902 60.0064C48.3934 59.9119 48.3567 59.8608 48.1349 59.6384C48.253 58.6928 49.6828 57.6385 50.4504 56.9434Z" fill="#333333"/>
                      <path d="M9.09145 59.4854C10.4463 60.334 7.78764 62.1226 7.04078 62.7836C6.60671 62.4255 6.65618 62.5787 6.59872 62.1166C6.96418 61.3862 8.42757 60.1085 9.09145 59.4854Z" fill="#333333"/>
                      <path d="M46.6027 60.7344C46.8533 60.8099 46.9346 60.9243 47.1214 61.1065C47.048 62.0572 45.5558 63.1912 44.7914 63.9062C44.3238 63.6563 44.3861 63.7829 44.2345 63.3745C44.4419 62.6469 45.9835 61.3181 46.6027 60.7344Z" fill="#333333"/>
                      <path d="M24.8381 43.8496C25.0057 43.9449 25.1413 44.1217 25.2722 44.2694C25.1461 45.2365 23.6843 46.3401 22.9055 47.054L22.4555 46.69L22.422 46.3224C22.8417 45.5526 24.1279 44.4983 24.8381 43.8496Z" fill="#333333"/>
                      <path d="M16.9314 51.6768C18.4985 52.178 15.4392 54.4441 14.9254 54.9008C14.5312 54.537 14.5567 54.672 14.4913 54.2285C14.9413 53.3872 16.1781 52.3688 16.9314 51.6768Z" fill="#333333"/>
                      <path d="M32.6738 36.0098C34.1707 36.4821 31.2232 38.7951 30.7269 39.2665L30.296 38.9445L30.2481 38.5877C30.6742 37.7782 31.9557 36.687 32.6738 36.0098Z" fill="#333333"/>
                      <path d="M28.652 40.0137C28.944 40.0454 28.9935 40.1172 29.2106 40.322C29.1531 41.2277 27.5413 42.4879 26.8024 43.1812C26.3284 42.8889 26.4194 43.0424 26.2901 42.5799C26.6093 41.8577 28.0105 40.6291 28.652 40.0137Z" fill="#333333"/>
                      <path d="M42.8139 64.5771C43.1953 64.8896 43.1011 64.7358 43.2655 65.1963C43.0341 65.9578 41.5962 67.1638 40.9563 67.7539C40.6579 67.6823 40.6228 67.6309 40.4073 67.4065C40.5079 66.4879 42.067 65.2734 42.8139 64.5771Z" fill="#333333"/>
                      <path d="M38.8253 68.5869C39.2721 68.7146 39.1524 68.6107 39.3822 68.9635C39.3407 69.7078 37.5709 71.1527 36.9677 71.7043C36.5831 71.3565 36.6118 71.4857 36.5177 71.0493C36.9087 70.2144 38.0976 69.2533 38.8253 68.5869Z" fill="#333333"/>
                      <path d="M35.082 72.3975C35.2304 72.4517 35.39 72.6217 35.5129 72.7356C35.4092 73.6859 33.8947 74.8558 33.1319 75.568C32.926 75.4498 32.8175 75.3122 32.6563 75.1413C32.8159 74.1657 34.2825 73.1026 35.082 72.3975Z" fill="#333333"/>
                      <path d="M31.1841 76.2266C32.697 76.7469 29.8739 78.8669 29.3202 79.3818C28.6531 78.9834 28.752 78.6404 29.2388 78.1033C29.834 77.4462 30.5314 76.8312 31.1841 76.2266Z" fill="#333333"/>
                      <path d="M12.4704 75.4062C13.5986 75.6016 15.3078 77.2131 15.2248 78.4474C14.2609 78.3541 13.0624 76.9238 12.5087 76.1503C12.4002 75.9976 12.4624 75.6175 12.4704 75.4062Z" fill="#333333"/>
                      <path d="M27.3756 80.0635C27.7873 80.3676 27.6996 80.2133 27.8161 80.6713C27.54 81.3777 26.0925 82.6198 25.4686 83.2008C25.3138 83.1121 25.1318 82.9267 24.9962 82.8008C25.1462 81.8183 26.5793 80.7725 27.3756 80.0635Z" fill="#333333"/>
                      <path d="M53.0477 52.3955C54.9005 52.7198 53.3111 55.1735 52.6998 55.9798L52.3073 55.846C51.9147 55.3476 52.9664 53.4803 53.0477 52.3955Z" fill="#333333"/>
                      <path d="M52.8623 46.8535C53.8869 47.3729 53.8725 50.0268 53.5087 50.8695L53.0235 50.6967C52.5192 50.0996 52.4714 47.5521 52.8623 46.8535Z" fill="#333333"/>
                      <path d="M20.5107 83.0049C21.5816 83.4595 23.3801 83.7381 23.7455 84.1131L23.7072 84.7013C22.5838 84.8349 20.7549 84.6048 20.3097 83.4137L20.5107 83.0049Z" fill="#333333"/>
                      <path d="M16.3031 79.2422C16.9781 79.2944 17.3723 79.5992 17.8335 80.0815C18.5436 80.8272 19.1788 81.2263 19.0368 82.2763C18.2197 82.1751 16.8744 80.5872 16.3733 79.9033C16.26 79.7504 16.3031 79.4487 16.3031 79.2422Z" fill="#333333"/>
                      <path d="M8.52255 71.8079C9.71306 71.6542 11.3249 73.4912 11.3424 74.6355C10.3993 74.5203 8.59596 72.7818 8.52255 71.8079Z" fill="#333333"/>
                      <path d="M34.2462 34.8141C34.9723 34.7492 37.1459 34.602 37.7395 35.0405C38.0028 35.2354 37.9486 35.4115 37.9917 35.7596C37.1235 35.7743 35.258 35.912 34.5079 35.4991C34.2653 35.3662 34.2973 35.121 34.2462 34.8141Z" fill="#333333"/>
                      <path d="M52.6061 41.4648C53.6291 41.9163 53.5126 44.7814 53.0626 45.4551C52.9205 45.3648 52.7274 45.1985 52.5902 45.0891C52.3444 44.2729 52.0667 42.1162 52.6061 41.4648Z" fill="#333333"/>
                      <path d="M4.63779 68.0726C5.74371 68.0444 7.3667 69.8311 7.51033 70.9725C6.50972 70.9172 4.70481 69.0991 4.63779 68.0726Z" fill="#333333"/>
                      <path d="M39.6593 35.1303C40.4428 35.0775 42.5637 35.0084 43.2308 35.4357C43.4303 35.5643 43.4143 35.8059 43.4702 36.0879C42.5701 36.0986 40.7189 36.2294 39.9369 35.8032C39.7024 35.6754 39.7199 35.4284 39.6593 35.1303Z" fill="#333333"/>
                      <path d="M5.14298 63.4521L5.46055 63.6374C5.89782 64.4575 4.60678 65.2234 4.27484 66.8412L3.91418 66.6894C3.0971 65.6471 4.4025 64.193 5.14298 63.4521Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M56.4667 26.0742C62.4303 25.3167 66.5271 30.4884 63.0721 35.7021C61.6103 37.9096 59.4062 38.9339 57.1864 40.1894C57.255 44.3779 57.4758 48.5277 57.6083 52.707C57.6928 55.4151 57.1576 56.1617 55.2762 58.0302C48.7684 64.4931 42.2699 70.9736 35.786 77.4599L29.5194 83.7207C27.3331 85.8937 25.7094 88.1111 22.3358 88.0429C18.7741 87.9706 16.1697 84.4757 13.7967 82.1377C9.92528 78.0956 5.69411 74.3034 1.83384 70.2383C0.0115332 68.3207 -0.744285 65.3482 0.934424 63.1015C1.89514 61.8148 3.71089 60.1878 4.87583 59.0234L12.4608 51.4599L24.4032 39.5293C26.5701 37.3605 28.6843 35.0627 30.9725 33.0283C31.59 32.4791 32.1427 31.9893 32.9501 31.7558C35.6933 30.9642 44.9513 31.9781 48.2547 32.1718C48.5642 31.5349 48.9245 30.9239 49.3329 30.3447C51.0819 27.8579 53.5319 26.5967 56.4667 26.0742ZM34.41 32.9052C33.6091 33.1498 32.9391 33.3978 32.2977 33.9492C29.8649 36.0368 2.49959 63.3984 1.97935 64.3818C1.56147 65.173 1.47853 66.3921 1.74497 67.2343C1.93967 67.849 2.29563 68.387 2.71372 68.8711C4.60695 71.0576 18.9734 85.3962 20.287 86.0459C21.4056 86.5987 22.5707 86.7056 23.7547 86.2998C26.249 85.445 33.7778 77.2665 36.0985 74.9131L49.5946 61.4258C51.5638 59.4692 53.8931 57.4514 55.5975 55.2744C56.1014 54.6313 56.0745 53.4698 56.0936 52.6924C55.9548 47.703 55.6691 42.7091 55.4872 37.7217C55.4552 36.8122 55.3673 35.3433 54.6542 34.7246C53.4605 33.6904 50.5968 33.8916 49.0409 33.8535C48.7441 35.6046 48.8764 36.2733 48.4344 38.1494C49.4206 39.1443 50.4566 40.6461 50.2762 42.0293C49.1637 50.5566 36.4109 45.9551 41.7147 38.6465C42.9849 36.8973 46.5385 37.5225 47.2538 36.9248L47.2157 36.6758C46.1562 36.0799 45.5002 36.5779 45.079 35.8418C45.6072 35.1857 46.7908 35.6358 47.2792 35.332C47.4084 35.2515 47.5792 34.0361 47.6288 33.7236L38.8133 33.1406C37.7265 33.0725 35.3978 32.8673 34.41 32.9052ZM46.8084 39.0195C46.3679 38.6332 45.3096 38.621 44.7479 38.6572L44.702 38.6601C43.6248 39.0728 42.7516 39.5573 42.2489 40.6845C41.9219 41.4312 41.9192 42.2799 42.243 43.0283C42.6148 43.8939 43.3168 44.5766 44.1913 44.9258C44.5454 45.0655 44.9539 45.1712 45.3241 45.2617C46.7155 44.9274 47.4933 44.7183 48.3534 43.4717C48.5257 42.9812 48.7391 42.4213 48.8876 41.9297C48.6498 41.2521 48.4441 40.6013 48.1043 39.9677C47.5874 40.9119 47.1895 41.7244 46.1922 42.2177C45.6292 42.2448 45.3753 42.166 45.1249 41.6133C45.2606 40.2065 47.0159 40.1974 46.8084 39.0195ZM59.7821 36.9424C64.9303 32.9187 63.2784 26.9883 56.3045 27.667C53.1339 28.3758 51.7218 29.501 50.0223 32.1767L49.9501 32.291C55.3839 32.6425 56.9227 32.3867 57.0233 38.4092C57.5901 38.3148 59.2936 37.3244 59.7821 36.9424Z" fill="#333333"/>
                      <path d="M69.2181 0C69.2181 2.5 68.1955 5.05916 67.336 8.5C65.4357 16.1084 60.836 27.5 60.836 27.5" stroke="#333333" stroke-width="1.5"/>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="269" height="107" viewBox="0 0 269 107" fill="none">
                      <path d="M153.114 35.876C154.199 35.9741 154.737 36.4584 155.525 37.1543C155.673 38.0237 155.887 39.085 155.584 39.9137C155.397 39.8932 155.231 39.7799 155.064 39.6864C154.759 39.1123 154.789 38.2107 154.761 37.5311C153.8 37.0586 153.045 37.0037 153.114 35.876Z" fill="#333333"/>
                      <path d="M123.607 47.6602C124.969 48.4071 122.275 50.363 121.604 50.9873C121.15 50.6306 121.213 50.7896 121.111 50.3022C121.496 49.4763 122.883 48.323 123.607 47.6602Z" fill="#333333"/>
                      <path d="M115.557 55.6426L115.899 55.7021C115.999 55.8026 116.18 55.9375 116.172 56.0401C116.12 56.7666 114.327 58.2441 113.765 58.7659C113.478 58.7185 113.425 58.625 113.226 58.4053C113.297 57.5761 114.884 56.2866 115.557 55.6426Z" fill="#333333"/>
                      <path d="M153.114 56.9434C153.574 57.023 153.416 56.9381 153.732 57.2424C153.633 58.1047 152.058 59.3494 151.354 60.0064C151.057 59.9119 151.021 59.8608 150.799 59.6384C150.917 58.6928 152.347 57.6385 153.114 56.9434Z" fill="#333333"/>
                      <path d="M111.755 59.4854C113.11 60.334 110.452 62.1226 109.705 62.7836C109.271 62.4255 109.32 62.5787 109.263 62.1166C109.628 61.3862 111.092 60.1085 111.755 59.4854Z" fill="#333333"/>
                      <path d="M149.267 60.7344C149.517 60.8099 149.599 60.9243 149.785 61.1065C149.712 62.0572 148.22 63.1912 147.455 63.9062C146.988 63.6563 147.05 63.7829 146.898 63.3745C147.106 62.6469 148.647 61.3181 149.267 60.7344Z" fill="#333333"/>
                      <path d="M127.502 43.8496C127.67 43.9449 127.805 44.1217 127.936 44.2694C127.81 45.2365 126.348 46.3401 125.569 47.054L125.119 46.69L125.086 46.3224C125.506 45.5526 126.792 44.4983 127.502 43.8496Z" fill="#333333"/>
                      <path d="M119.595 51.6768C121.162 52.178 118.103 54.4441 117.589 54.9008C117.195 54.537 117.221 54.672 117.155 54.2285C117.605 53.3872 118.842 52.3688 119.595 51.6768Z" fill="#333333"/>
                      <path d="M135.338 36.0098C136.835 36.4821 133.887 38.7951 133.391 39.2665L132.96 38.9445L132.912 38.5877C133.338 37.7782 134.62 36.687 135.338 36.0098Z" fill="#333333"/>
                      <path d="M131.316 40.0137C131.608 40.0454 131.657 40.1172 131.875 40.322C131.817 41.2277 130.205 42.4879 129.466 43.1812C128.992 42.8889 129.083 43.0424 128.954 42.5799C129.273 41.8577 130.674 40.6291 131.316 40.0137Z" fill="#333333"/>
                      <path d="M145.478 64.5771C145.859 64.8896 145.765 64.7358 145.929 65.1963C145.698 65.9578 144.26 67.1638 143.62 67.7539C143.322 67.6823 143.287 67.6309 143.071 67.4065C143.172 66.4879 144.731 65.2734 145.478 64.5771Z" fill="#333333"/>
                      <path d="M141.489 68.5869C141.936 68.7146 141.816 68.6107 142.046 68.9635C142.005 69.7078 140.235 71.1527 139.632 71.7043C139.247 71.3565 139.276 71.4857 139.182 71.0493C139.573 70.2144 140.762 69.2533 141.489 68.5869Z" fill="#333333"/>
                      <path d="M137.746 72.3975C137.894 72.4517 138.054 72.6217 138.177 72.7356C138.073 73.6859 136.559 74.8558 135.796 75.568C135.59 75.4498 135.481 75.3122 135.32 75.1413C135.48 74.1657 136.946 73.1026 137.746 72.3975Z" fill="#333333"/>
                      <path d="M133.848 76.2266C135.361 76.7469 132.538 78.8669 131.984 79.3818C131.317 78.9834 131.416 78.6404 131.903 78.1033C132.498 77.4462 133.195 76.8312 133.848 76.2266Z" fill="#333333"/>
                      <path d="M115.134 75.4062C116.263 75.6016 117.972 77.2131 117.889 78.4474C116.925 78.3541 115.726 76.9238 115.173 76.1503C115.064 75.9976 115.126 75.6175 115.134 75.4062Z" fill="#333333"/>
                      <path d="M130.04 80.0635C130.451 80.3676 130.364 80.2133 130.48 80.6713C130.204 81.3777 128.757 82.6198 128.133 83.2008C127.978 83.1121 127.796 82.9267 127.66 82.8008C127.81 81.8183 129.243 80.7725 130.04 80.0635Z" fill="#333333"/>
                      <path d="M155.712 52.3955C157.565 52.7198 155.975 55.1735 155.364 55.9798L154.971 55.846C154.579 55.3476 155.63 53.4803 155.712 52.3955Z" fill="#333333"/>
                      <path d="M155.526 46.8535C156.551 47.3729 156.537 50.0268 156.173 50.8695L155.688 50.6967C155.183 50.0996 155.135 47.5521 155.526 46.8535Z" fill="#333333"/>
                      <path d="M123.175 83.0049C124.246 83.4595 126.044 83.7381 126.41 84.1131L126.371 84.7013C125.248 84.8349 123.419 84.6048 122.974 83.4137L123.175 83.0049Z" fill="#333333"/>
                      <path d="M118.967 79.2422C119.642 79.2944 120.036 79.5992 120.497 80.0815C121.208 80.8272 121.843 81.2263 121.701 82.2763C120.884 82.1751 119.538 80.5872 119.037 79.9033C118.924 79.7504 118.967 79.4487 118.967 79.2422Z" fill="#333333"/>
                      <path d="M111.187 71.8079C112.377 71.6542 113.989 73.4912 114.006 74.6355C113.063 74.5203 111.26 72.7818 111.187 71.8079Z" fill="#333333"/>
                      <path d="M136.91 34.8141C137.636 34.7492 139.81 34.602 140.403 35.0405C140.667 35.2354 140.613 35.4115 140.656 35.7596C139.787 35.7743 137.922 35.912 137.172 35.4991C136.929 35.3662 136.961 35.121 136.91 34.8141Z" fill="#333333"/>
                      <path d="M155.27 41.4648C156.293 41.9163 156.177 44.7814 155.727 45.4551C155.584 45.3648 155.391 45.1985 155.254 45.0891C155.008 44.2729 154.731 42.1162 155.27 41.4648Z" fill="#333333"/>
                      <path d="M107.302 68.0726C108.408 68.0444 110.031 69.8311 110.174 70.9725C109.174 70.9172 107.369 69.0991 107.302 68.0726Z" fill="#333333"/>
                      <path d="M142.323 35.1303C143.107 35.0775 145.228 35.0084 145.895 35.4357C146.094 35.5643 146.078 35.8059 146.134 36.0879C145.234 36.0986 143.383 36.2294 142.601 35.8032C142.366 35.6754 142.384 35.4284 142.323 35.1303Z" fill="#333333"/>
                      <path d="M107.807 63.4521L108.125 63.6374C108.562 64.4575 107.271 65.2234 106.939 66.8412L106.578 66.6894C105.761 65.6471 107.066 64.193 107.807 63.4521Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M159.131 26.0742C165.094 25.3167 169.191 30.4884 165.736 35.7021C164.274 37.9096 162.07 38.9339 159.85 40.1894C159.919 44.3779 160.14 48.5277 160.272 52.707C160.357 55.4151 159.822 56.1617 157.94 58.0302C151.432 64.4931 144.934 70.9736 138.45 77.4599L132.183 83.7207C129.997 85.8937 128.373 88.1111 125 88.0429C121.438 87.9706 118.834 84.4757 116.461 82.1377C112.589 78.0956 108.358 74.3034 104.498 70.2383C102.676 68.3207 101.92 65.3482 103.598 63.1015C104.559 61.8148 106.375 60.1878 107.54 59.0234L115.125 51.4599L127.067 39.5293C129.234 37.3605 131.348 35.0627 133.636 33.0283C134.254 32.4791 134.807 31.9893 135.614 31.7558C138.357 30.9642 147.615 31.9781 150.919 32.1718C151.228 31.5349 151.588 30.9239 151.997 30.3447C153.746 27.8579 156.196 26.5967 159.131 26.0742ZM137.074 32.9052C136.273 33.1498 135.603 33.3978 134.962 33.9492C132.529 36.0368 105.164 63.3984 104.643 64.3818C104.225 65.173 104.142 66.3921 104.409 67.2343C104.604 67.849 104.96 68.387 105.378 68.8711C107.271 71.0576 121.637 85.3962 122.951 86.0459C124.07 86.5987 125.235 86.7056 126.419 86.2998C128.913 85.445 136.442 77.2665 138.762 74.9131L152.259 61.4258C154.228 59.4692 156.557 57.4514 158.261 55.2744C158.765 54.6313 158.738 53.4698 158.758 52.6924C158.619 47.703 158.333 42.7091 158.151 37.7217C158.119 36.8122 158.031 35.3433 157.318 34.7246C156.124 33.6904 153.261 33.8916 151.705 33.8535C151.408 35.6046 151.54 36.2733 151.098 38.1494C152.085 39.1443 153.121 40.6461 152.94 42.0293C151.828 50.5566 139.075 45.9551 144.379 38.6465C145.649 36.8973 149.202 37.5225 149.918 36.9248L149.88 36.6758C148.82 36.0799 148.164 36.5779 147.743 35.8418C148.271 35.1857 149.455 35.6358 149.943 35.332C150.072 35.2515 150.243 34.0361 150.293 33.7236L141.477 33.1406C140.39 33.0725 138.062 32.8673 137.074 32.9052ZM149.472 39.0195C149.032 38.6332 147.974 38.621 147.412 38.6572L147.366 38.6601C146.289 39.0728 145.416 39.5573 144.913 40.6845C144.586 41.4312 144.583 42.2799 144.907 43.0283C145.279 43.8939 145.981 44.5766 146.855 44.9258C147.209 45.0655 147.618 45.1712 147.988 45.2617C149.38 44.9274 150.157 44.7183 151.017 43.4717C151.19 42.9812 151.403 42.4213 151.552 41.9297C151.314 41.2521 151.108 40.6013 150.768 39.9677C150.251 40.9119 149.853 41.7244 148.856 42.2177C148.293 42.2448 148.039 42.166 147.789 41.6133C147.925 40.2065 149.68 40.1974 149.472 39.0195ZM162.446 36.9424C167.594 32.9187 165.942 26.9883 158.969 27.667C155.798 28.3758 154.386 29.501 152.686 32.1767L152.614 32.291C158.048 32.6425 159.587 32.3867 159.687 38.4092C160.254 38.3148 161.958 37.3244 162.446 36.9424Z" fill="#333333"/>
                      <path d="M171.882 0C171.882 2.5 170.859 5.05916 170 8.5C168.1 16.1084 163.5 27.5 163.5 27.5" stroke="#333333" stroke-width="1.5"/>
                    </svg>
                  </div>
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Fair Pricing</h3>
                  <p>Our estimate is based on effort, not opportunity.</p>
                </div>
                <div className="icon-num">3</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Home Page Why choose section ends */}

      {/* engagement model starts */}
      <section className="engagement-model-wrapp parent-eng-model">
        <div className="container">
          <h2 className="txt-center slide-up"><span className="txt-regular">Our</span> Engagement Model</h2>
          <p className="sub-txt slide-up">Refined over hundreds of projects, our model ensures the end-result is aligned with your goals and ready for future scale.</p>
          <div className="eng-model-step">
            <ul>
              <li className="stagger-li">
                <div className="step-count">1</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="76" height="85" viewBox="0 0 76 85" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.1612 12.1027C63.8628 12.1014 68.8271 11.3501 69.8009 16.2443C70.1431 17.965 70.0023 20.3288 70.0011 22.133L69.9864 32.9416C69.982 34.923 70.0509 37.3342 69.7735 39.298C69.6467 40.1961 69.0025 41.161 68.3614 41.798C67.7019 42.4495 66.8712 42.8995 65.9669 43.0949C64.8415 43.3455 61.959 43.2539 60.6475 43.2541L51.0938 43.2502C50.2796 43.9966 49.5153 44.6258 48.6954 45.4103L45.0772 48.884C44.4466 49.4866 43.8098 50.2109 43.0899 50.6965C42.9199 50.8111 42.7129 50.8689 42.5108 50.8937C42.2239 50.929 41.8958 50.8782 41.6759 50.675C41.1969 50.2326 41.3833 44.2963 41.377 43.2463C38.9013 43.4652 36.5432 42.325 35.5723 39.9445C35.152 38.914 35.2072 38.0608 35.1993 36.967L35.1934 24.1369C35.1847 21.622 35.0535 18.6023 35.3516 16.134C35.5363 15.2292 36.1017 14.3777 36.7022 13.7404C38.6574 11.6655 41.6478 12.1242 44.3448 12.1223L50.963 12.1096L60.1612 12.1027ZM61.9083 14.1135L57.046 14.1154L40.5479 14.132C39.0839 14.3267 37.4371 15.3994 37.3048 16.9953C37.1873 18.4112 37.2371 19.9009 37.2374 21.3293L37.2423 29.1584L37.2354 35.1652C37.2326 37.0868 36.856 39.2824 38.5714 40.507C40.1005 41.5987 41.6611 40.9164 43.2999 41.4113C43.507 42.6178 43.4221 46.1715 43.419 47.5412C44.9247 46.3227 49.0826 41.8368 50.4434 41.2912C51.0783 41.0369 57.2975 41.1503 58.546 41.1496L62.5548 41.1535C67.7284 41.1586 67.8854 40.4934 67.8897 35.5061L67.8927 30.9719C67.8947 26.6545 67.9035 22.3254 67.8848 18.007C67.8643 17.5106 67.8425 16.9172 67.7374 16.4338C67.5118 15.3981 66.4258 14.3855 65.3878 14.2326C64.2719 14.0684 63.0402 14.1132 61.9083 14.1135Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.8965 17.1443C54.0659 16.7577 56.8648 18.0694 58.2217 19.7459C60.0987 22.0649 60.2449 25.4809 58.8164 28.0671C58.3192 28.967 57.4616 29.6926 57.0586 30.6472C56.7256 31.474 56.683 32.6317 56.6026 33.531C55.5291 34.1203 54.576 33.9879 53.3653 33.9802C52.6071 33.9738 49.6004 34.1816 49.1153 33.8044C48.4427 33.2815 48.4363 31.5903 48.3262 30.7996C47.1866 29.4348 45.701 26.9703 45.4766 25.1961C44.9565 21.081 47.8512 17.6549 51.8965 17.1443ZM52.0557 19.1687C49.3593 19.6422 46.8804 22.099 47.4942 25.0095C48.1168 27.961 50.3485 28.5702 50.6436 31.9392L53.041 31.9295L54.4873 31.948C54.9381 29.5882 55.4861 29.1504 56.8125 27.2957C58.004 25.6295 57.9748 22.8552 56.7744 21.2166C55.7637 19.7747 53.7548 19.0578 52.0557 19.1687Z" fill="#121A21"/>
                    <path d="M50.1833 34.9719C51.5756 34.9017 53.0192 34.9391 54.4104 34.9124C54.9589 34.9019 56.0187 35.145 55.9447 35.8601C55.8763 36.5207 54.7989 37.2412 54.3173 37.6352L53.4793 38.3352C51.7443 38.584 51.6378 38.3141 50.3182 37.2284C49.8912 36.877 49.4056 36.5376 49.2877 35.9534C49.2437 35.7439 49.2903 35.5257 49.4157 35.3527C49.6322 35.0486 49.8301 35.022 50.1833 34.9719Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3685 37.4234C24.5614 37.1899 26.2328 37.4457 27.3831 37.8219C29.4966 38.5131 31.3792 40.0795 32.3812 42.0787C33.0835 43.4801 33.3506 44.98 33.4114 46.5367C33.5515 50.1252 32.5325 53.1985 30.1966 55.9313C29.7539 56.4491 27.9383 58.0675 27.8128 58.4508C27.7728 58.5734 27.7373 58.6304 27.6487 58.7223L27.5481 58.6822L27.4983 58.2184C27.2944 58.0056 26.8298 58.1995 26.5716 58.2994C24.7384 59.0089 23.079 58.5375 21.2112 58.1051C21.087 58.7288 21.0287 58.8501 20.6058 59.3277C21.7802 61.3112 22.749 63.2137 24.2376 65.0416C25.1864 64.1667 27.8491 59.6796 28.5618 58.4381C29.4214 58.8402 30.3554 58.9437 31.1761 59.2662C34.1663 60.458 37.5069 61.1956 39.9554 63.3971C43.1789 66.2955 42.5139 71.4963 43.0169 75.4205C43.1759 76.6628 42.2654 76.8069 41.2649 76.8072L17.0687 76.815C13.7099 76.806 9.55449 76.9428 6.27275 76.7857C6.05358 76.6488 5.78989 76.4367 5.57939 76.276C5.52209 75.3483 5.61125 74.2214 5.70049 73.2799C5.92637 70.8958 5.92146 68.1089 6.8958 65.8844C8.64352 61.8947 13.3264 60.9023 16.9632 59.4723C17.7258 59.1081 20.5281 58.556 19.3392 57.2477C18.9331 56.8009 18.5314 56.1938 18.1487 55.7252C13.1729 49.6307 13.9091 38.3381 23.3685 37.4234ZM29.7073 60.9693C28.9675 61.7819 28.5058 62.8847 27.8812 63.5943C26.9756 64.6231 25.7408 66.9904 24.8743 67.8131C24.7157 67.962 24.5084 68.0482 24.2913 68.0553C24.0701 68.0644 23.857 67.9643 23.7239 67.7896C22.54 66.2346 21.4913 64.5557 20.3099 62.9928C19.8082 62.3292 19.4297 61.6306 18.8548 61.0328C16.8853 61.651 15.0216 62.4913 13.1165 63.149C7.57627 65.0619 7.98458 69.8015 7.77275 74.7613L13.5394 74.7525C13.5492 73.7483 13.3162 71.0961 13.9925 70.3453C14.5263 69.7529 15.4983 70.2024 15.6243 71.0768C15.615 72.3045 15.6153 73.5326 15.6243 74.7604C21.3043 74.766 27.3934 74.6539 33.0286 74.774C33.0136 73.5329 32.9629 72.0561 33.0501 70.8395C33.3685 70.3318 33.7622 69.7126 34.4134 70.1822C35.3674 70.8706 34.9741 73.6727 35.011 74.7574L40.8372 74.7633C40.728 70.8515 40.8634 65.1696 36.6761 63.7096C35.2153 63.2002 30.9991 61.1476 29.7073 60.9693ZM28.7503 40.857C27.5129 39.8914 25.1094 39.2595 23.5599 39.4527C17.3234 40.3114 15.8554 46.2723 18.0647 51.5377C19.368 54.6432 21.4965 56.8359 25.0882 56.4537C31.2708 55.5883 33.5348 44.5912 28.7503 40.857Z" fill="#121A21"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h3>Consulting</h3>
                  <p>Defining use-cases and functional requirements.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">2</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="91" height="93" viewBox="0 0 91 93" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8431 36.232C32.4634 36.0994 36.0249 36.0914 37.5179 36.5318C39.0201 38.1151 38.6031 39.8479 39.2425 41.5865C39.9695 42.0389 41.8623 42.7734 42.7503 43.1509C44.1818 41.9994 45.1877 41.0378 46.9066 40.3843C49.0615 41.0631 49.6224 42.2861 51.1771 43.6421C55.088 47.0538 52.5961 47.7532 50.5882 50.8609L50.5423 50.9322C50.7441 51.6288 51.7224 53.6478 52.0775 54.4253C54.0129 55.0628 57.4277 54.5982 57.4749 57.2427C57.514 59.445 57.6683 61.8848 57.3558 64.0601C56.09 65.5334 53.8056 65.4621 51.9564 65.7925C51.5385 67.1492 50.792 68.3949 50.5306 69.3374C51.2517 70.1954 53.3158 72.6758 53.2894 73.6119C53.2496 75.0061 48.3844 79.7895 46.9691 79.8882C46.1759 79.9431 43.5442 77.7405 42.8831 77.105C41.6314 77.6323 40.3822 78.1663 39.1361 78.7066C38.9147 80.3397 38.8093 83.8756 36.8167 84.1607C35.2956 84.2957 30.5625 84.2636 29.1517 83.8247C28.4361 82.1404 28.1796 80.6632 28.0618 78.8247C27.2156 78.5683 25.0057 77.5149 24.2083 77.0777C23.2692 78.0139 21.2309 79.6097 19.971 80.0289C19.7026 79.9008 19.4447 79.7513 19.2005 79.5816C18.0098 78.7488 14.1329 75.3648 13.9271 73.8872C13.7277 72.4556 15.5535 70.6842 16.432 69.4634C15.4096 66.6863 15.9207 65.6999 12.5433 65.3521C9.15493 64.908 9.36086 62.9145 9.43001 60.4722C9.54722 56.3334 9.18418 55.1802 13.6224 54.857C15.6539 54.7089 15.7063 52.4194 16.5941 50.9908C15.2116 49.5882 12.8993 46.9765 14.5726 45.063C15.7814 43.681 18.0497 41.0191 19.8656 40.5787C20.988 40.3068 23.3182 42.453 24.3216 43.1519C25.4025 42.8236 27.0134 42.0212 28.0599 41.5386C28.4511 40.0025 28.3816 38.197 29.1624 36.731C29.7706 36.3973 30.1795 36.3326 30.8431 36.232ZM36.1107 38.6187C34.4497 38.5468 32.7313 38.4825 31.0677 38.5406C30.4054 38.9437 30.3545 42.2052 29.9515 43.2281C27.7638 44.0462 26.3104 44.7099 24.1761 45.7056C23.2172 45.0947 20.7628 43.2995 20.0286 42.9439C18.7648 43.7364 17.185 45.4305 16.2318 46.6285C16.9446 47.7167 18.2748 49.8299 19.1107 50.7828C18.7178 51.6747 18.3387 52.5983 17.9447 53.4878C17.5802 54.3107 17.1101 56.3325 16.2269 56.6285C14.8306 57.0954 13.2342 56.8929 11.848 57.4117C11.6327 58.4041 11.636 61.7445 11.7884 62.771C13.071 63.1594 16.7723 63.4348 17.2093 64.731C17.7467 66.3256 18.4987 67.9678 19.0736 69.5318C18.5615 70.3289 18.0261 71.111 17.4691 71.8775C17.1641 72.2935 16.438 73.2217 16.2132 73.6314C17.4368 74.9751 18.5344 76.2049 19.9095 77.397C21.677 76.536 22.576 75.2817 24.2708 74.7144C26.2992 75.4899 27.8151 76.4074 29.97 76.9312C30.1721 78.2517 30.4811 80.7113 30.8079 81.898C32.1066 82.0525 34.4836 81.9843 35.8363 81.9742L36.1741 81.9292C36.3332 81.6572 36.582 79.9641 36.6781 79.522C36.8829 78.5805 37.0405 77.7903 37.4573 76.8912C39.3389 76.1905 41.0069 75.3396 42.887 74.6763C44.5361 75.5027 45.3941 76.4191 46.9017 77.3746C48.1713 76.6008 50.0676 74.835 50.6741 73.4712C49.8221 71.846 48.9286 71.1813 48.0843 69.5894C48.3055 68.1445 49.2582 67.0657 49.4974 66.1246C50.2312 63.2377 51.2068 63.4567 53.8968 63.066C54.3026 63.007 54.8506 62.9425 55.3118 62.8951C55.3988 61.1743 55.3428 59.1757 55.3333 57.4341C53.9247 57.1094 51.5686 56.9036 50.4261 56.4595C49.9967 55.6681 49.7325 54.773 49.3939 53.9097C49.0215 52.9221 47.9548 51.5328 48.262 50.4458C48.4448 49.7988 49.3436 48.9774 49.7386 48.3863C50.1404 47.785 50.4658 47.24 50.7884 46.5845C49.6351 45.2389 48.4144 43.8675 46.9251 42.8824C45.4605 43.7693 44.3344 44.9404 42.7122 45.5835C41.2674 44.8506 38.5607 44.038 37.2366 43.0591C36.512 41.5691 36.5924 40.1478 36.1107 38.6187Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7089 47.1819C39.9011 46.734 46.0904 52.2039 46.5195 59.387C46.9486 66.5701 41.4542 72.7357 34.2597 73.1448C27.0928 73.5522 20.947 68.0914 20.5195 60.9358C20.092 53.7801 25.5442 47.628 32.7089 47.1819ZM44.1601 58.97C43.4919 53.1269 38.2209 48.9213 32.3662 49.5589C26.4693 50.2011 22.2206 55.5097 22.8935 61.3948C23.5665 67.28 28.9048 71.4961 34.7949 70.7942C40.6428 70.0972 44.8283 64.8131 44.1601 58.97Z" fill="#121A21"/>
                    <path d="M29.7278 53.7981C32.0903 53.5356 31.7645 55.4397 29.9509 56.0069C29.7794 57.1772 29.9102 57.9741 29.617 59.3214C29.1982 59.7202 28.9659 59.7908 29.029 60.3903C29.2182 60.7284 29.3954 60.8166 29.7197 61.0368C29.8559 62.1685 29.8456 63.2358 29.8603 64.3744C30.8633 64.7028 32.2251 65.0845 31.1533 66.4731C30.9474 66.7398 30.5826 66.7274 30.2678 66.7397C27.3086 66.305 27.5583 64.2367 27.5337 61.818C27.0581 61.2657 26.2312 61.0093 26.0421 60.1647C25.8439 59.2794 26.8912 58.8637 27.5499 58.7146C27.5475 56.4998 27.1928 54.5414 29.7278 53.7981Z" fill="#121A21"/>
                    <path d="M36.5522 53.709C40.0275 53.9878 39.2478 56.1014 39.5019 58.7993C40.1414 58.9608 40.9179 59.0954 41.1285 59.7948C41.4553 60.88 40.0921 61.2411 39.4478 61.4424C39.4229 62.5126 39.4899 64.1389 39.1892 65.1362C38.9584 65.9016 38.4405 66.1791 37.7732 66.4894C35.0977 67.2974 34.8731 64.9708 37.2491 64.3566C37.282 63.2382 37.3016 62.0966 37.3827 60.9822L38.0886 60.2908C37.0516 58.9209 37.2262 57.8086 37.2203 56.1636C37.0058 56.0803 36.7947 55.9887 36.5873 55.8891C35.5526 55.3837 34.9679 54.0176 36.5522 53.709Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.4542 23.1906C65.8651 23.019 70.3855 27.2711 70.5381 32.6749C70.6907 38.0785 66.4178 42.5776 61.0059 42.7111C55.621 42.8437 51.1424 38.6024 50.9903 33.2257C50.8383 27.8488 55.0702 23.3614 60.4542 23.1906ZM68.2383 32.1984C67.84 28.1068 64.1975 25.1114 60.0997 25.506C55.9975 25.9009 52.9931 29.5437 53.3917 33.6398C53.7904 37.7356 57.4406 40.7321 61.5421 40.3312C65.6395 39.9306 68.6365 36.2902 68.2383 32.1984Z" fill="#121A21"/>
                    <path d="M58.176 13.3421C59.1957 13.2701 63.1338 13.1464 63.9927 13.5645C64.9537 14.0323 65.3058 16.6263 65.6235 17.7914C65.8272 17.8739 68.0972 18.8697 68.0238 18.8866C69.342 18.5837 70.7762 15.847 72.5746 17.1671C73.3654 17.6601 73.9455 18.3905 74.6011 19.017C77.9834 22.2488 76.937 22.2678 74.7464 25.6253C75.067 26.5172 75.4939 27.3202 75.6856 28.2545C76.8472 28.361 78.9413 28.5135 79.841 29.2595C80.4571 29.7703 80.5122 31.6609 80.4643 32.4433C80.4 33.4908 80.6619 35.6398 79.9634 36.4198C79.2198 37.2501 76.822 37.6841 75.7204 37.7165C75.5186 38.5647 75.1792 39.2105 74.7869 39.9819C75.376 41.4676 77.5903 43.0352 76.7697 44.4616C75.9522 45.8824 73.155 48.6332 71.6916 49.2566C70.2575 48.6778 69.4462 47.821 68.2388 46.895C67.1338 47.23 66.5554 47.5034 65.6075 48.1453C65.3573 49.0806 65.2012 51.3567 64.5772 51.9598C63.3185 52.8903 60.4351 52.6278 59.064 52.539C56.6849 52.3848 56.8866 51.2884 56.4974 49.4221C56.2947 48.45 54.4891 45.9251 56.7751 45.9722C57.4843 45.9868 57.976 46.5399 58.4004 47.0217C58.5854 48.0624 58.8073 49.1682 58.8904 50.2169C60.2255 50.2315 61.479 50.3635 62.8369 50.3116C63.2376 49.0974 63.1236 47.7619 63.6138 46.653C64.7913 45.7324 66.9855 44.9482 68.4268 44.4061C69.5328 44.8505 70.4258 45.9047 71.5849 46.6033C72.7416 45.7452 73.6103 44.5877 74.6264 43.8518C73.5926 42.7709 72.8789 41.4905 72.1148 40.2115C72.9904 38.6955 73.4669 36.7988 74.0587 35.8543C74.7547 35.5828 75.5064 35.4386 76.2362 35.2978C76.689 35.2529 77.6565 35.0492 78.1444 34.963C78.1944 33.6211 78.2127 32.2782 78.199 30.9353C76.9131 30.7098 75.1514 30.4705 74.008 29.9281C73.6993 29.3686 73.3428 28.3092 73.0836 27.6772C72.7343 26.8258 72.4707 26.322 72.0295 25.5212C72.6705 24.8114 73.9053 22.9104 74.4991 22.0432C73.5754 21.2945 72.8669 20.2979 71.6088 19.3108C70.4099 20.0242 69.3889 21.0622 68.1396 21.4619C67.238 21.1055 64.1722 19.7271 63.4157 19.2281C63.1083 17.9529 63.13 16.9134 62.9024 15.6495C61.8012 15.549 59.9672 15.6177 58.8503 15.6449C58.7327 16.8917 58.633 17.9535 58.3884 19.1841C57.4947 19.8813 54.4108 21.1794 53.3255 21.4647C52.4482 21.0883 50.9967 19.8517 50.1847 19.2111C48.953 20.2453 48.2586 21.0057 47.1943 22.1876C48.2007 23.2087 48.8182 24.1919 49.5041 25.4332C49.2672 26.6437 48.1761 28.403 47.7845 30.0503C46.423 30.5143 44.9681 30.673 43.5446 30.8392C43.5079 32.2559 43.511 33.6733 43.5539 35.0898C45.1362 35.2902 49.0023 35.2599 48.0808 37.7188C47.954 38.0571 47.3556 38.2063 47.0375 38.3132C46.4962 38.1308 45.8163 37.9005 45.272 37.7569C43.5631 37.3059 42.5834 37.3939 41.34 35.9832C41.2301 34.4459 41.3005 32.8866 41.2677 31.3579C41.2053 28.4537 43.7609 28.4397 45.9873 28.2727C46.2167 27.3995 46.5797 26.4766 46.893 25.6232C45.2103 23.0202 43.6644 22.2591 46.468 19.6529C47.4588 18.7317 48.2827 17.6423 49.5461 16.9862C51.0789 16.1903 52.3941 18.2891 53.6346 18.8593C53.8536 18.9573 56.134 17.849 56.3961 17.7151C56.4603 16.3517 56.601 13.7635 58.176 13.3421Z" fill="#121A21"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h3>Development</h3>
                  <p>Building from scratch or configuring pre-packaged solutions.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">3</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="69" height="83" viewBox="0 0 69 83" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4671 27.9128C33.797 26.8745 41.3862 32.8128 42.4104 41.1696C43.4347 49.5265 37.5049 57.1319 29.1721 58.1481C20.8551 59.1623 13.2912 53.2275 12.2688 44.8864C11.2465 36.5453 17.1527 28.9494 25.4671 27.9128ZM40.4749 42.3229C40.0954 35.0317 33.8864 29.4348 26.6184 29.8327C19.3748 30.2294 13.8175 36.4322 14.1956 43.6989C14.5738 50.9656 20.745 56.5541 27.9905 56.1921C35.2602 55.8286 40.8543 49.6141 40.4749 42.3229Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8721 35.3984C33.9891 35.5768 35.9417 37.746 36.4073 38.7607C35.716 40.2761 31.9901 43.8841 30.6055 45.3613L28.1612 47.9785C27.7228 48.4536 26.0635 50.403 25.4952 50.3584C24.4854 50.2787 22.807 48.3564 22.0977 47.6465C21.47 47.0052 18.4842 44.4413 18.4649 43.5566C18.4483 42.7655 21.0282 40.0148 21.9639 40.1943C22.8703 40.3691 24.5798 42.101 25.1407 42.8613C25.3902 42.5133 26.1593 41.7471 26.4913 41.4014C27.4885 40.3488 28.5077 39.3174 29.5489 38.3086C30.5163 37.3602 31.6755 35.9434 32.8721 35.3984ZM32.7608 37.7705C30.4735 40.0652 28.2992 42.5266 25.9639 44.7754C25.7764 44.9559 25.4311 45.1951 25.1768 45.2363C24.5969 45.0641 22.3644 42.9004 21.8233 42.3496C21.4815 42.888 21.2794 43.0763 20.7696 43.457C21.238 43.939 21.7481 44.4718 22.2325 44.9375C22.9946 45.649 24.6017 47.1873 25.2735 47.9629C27.4064 45.7074 29.6275 43.5701 31.6544 41.2119C32.3857 40.361 33.2876 39.6844 33.8888 38.7119C33.5953 38.2932 33.332 37.7431 32.7608 37.7705Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9467 23.1651C29.2564 22.7247 34.1682 23.9775 37.0199 25.6475C46.9527 31.465 49.9443 43.6005 44.1722 53.6163C44.9797 54.2046 45.7254 55.1006 46.765 55.8516C47.3638 55.91 48.3173 55.8226 48.8607 56.1807C50.2126 57.0785 51.4424 58.2333 52.6889 59.2823C55.2053 61.4 57.781 63.4475 60.2201 65.6553C61.3717 66.6975 62.5183 67.805 62.6156 69.4522C62.6988 70.7854 62.379 72.3654 61.4017 73.3399C57.8987 76.8339 54.9779 74.6614 52.1312 71.7911C51.3642 71.0174 49.7602 69.7551 48.9486 69.0411C46.9974 67.3043 44.9309 65.6768 43.0629 63.8507C42.2455 63.0516 41.9456 62.2563 42.1146 61.1378C41.5469 60.2194 40.5217 59.4295 39.7025 58.7188C38.9274 59.1159 38.0265 59.8228 37.2435 60.2911C34.8085 61.7225 32.0872 62.5939 29.2758 62.8428C14.8155 64.1768 3.82215 49.9903 8.71717 36.3301C11.4339 28.7487 17.9662 23.823 25.9467 23.1651ZM47.6889 57.9337C46.7297 58.5107 44.6289 60.8785 44.0512 61.9014C44.7657 62.6561 45.7018 63.4567 46.4896 64.1514C47.8204 65.328 49.1582 66.4965 50.5033 67.6573C51.9191 68.8996 55.5389 72.5329 57.1361 73.0255C58.6506 73.4073 59.9844 72.3753 60.4154 70.9083C60.6143 70.2308 60.535 69.2181 60.1586 68.5977C59.139 67.1764 57.4668 65.9312 56.1381 64.8155L50.9174 60.4678C50.3095 59.9612 48.3682 58.1755 47.8441 57.9337H47.6889ZM45.0961 41.7403C44.3893 31.8907 35.8437 24.4875 26.0258 25.2198C16.2409 25.9497 8.89076 34.4863 9.5951 44.3028C10.2995 54.1194 18.7931 61.5125 28.5814 60.8292C38.4024 60.1435 45.8026 51.5896 45.0961 41.7403ZM42.8578 55.1993C42.5241 55.9232 41.7168 56.6053 41.226 57.2735C41.5246 57.5941 43.0219 59.1429 43.2904 59.2882L43.4213 59.2237C44.0429 58.6064 44.652 57.9758 45.2474 57.3331C44.5626 56.7275 43.4515 55.8187 42.8578 55.1993Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.072 11.8926C41.7584 11.8935 42.5562 11.8878 43.2399 11.9697C43.4438 11.9941 43.9849 12.4711 44.1569 12.6416C45.0038 13.4811 45.8406 14.3415 46.6862 15.1855C48.488 16.9674 50.2804 18.7587 52.0632 20.5596C52.7417 21.2437 55.3508 23.7532 55.7653 24.3789C55.7905 24.7043 55.8088 25.0303 55.821 25.3564C55.8957 27.3671 55.8507 29.616 55.8512 31.6387L55.8542 42.5918L55.8522 52.0146C55.8506 53.6652 55.8667 55.3388 55.8268 56.9883C55.7976 57.2423 55.8094 57.8566 55.5856 58.0107C54.7813 58.5646 53.8162 58.1265 53.8005 57.1074C53.7884 56.3306 53.7935 55.6525 53.7985 54.9248L53.818 50.6963L53.8073 36.6934L53.8141 29.8496C53.8124 28.6251 53.8551 26.9012 53.7409 25.7275L47.1091 25.7285C45.7055 25.7238 44.0422 25.7758 42.9909 24.6709C41.754 23.3711 42.0172 21.1672 42.0202 19.499L42.0446 13.9297C40.0664 13.8557 37.99 13.8955 36.0065 13.8984L26.322 13.9072L19.3483 13.8975C18.0115 13.8948 16.6757 13.8725 15.3395 13.9307C14.5918 13.9299 14.291 14.5263 14.2214 15.2148C14.1033 16.383 14.1442 17.6323 14.1442 18.8125C14.1533 21.0763 14.1508 23.3407 14.1354 25.6045C13.1296 26.3291 12.2028 26.4407 12.2096 24.8779C12.2216 22.1184 12.2254 19.3581 12.2106 16.5986C12.2035 15.2885 12.1251 13.9383 13.1179 12.9375C13.5174 12.5324 14.0193 12.2444 14.57 12.1045C15.5481 11.849 17.5116 11.9084 18.5895 11.9062L23.5583 11.8994L37.4723 11.8926H41.072ZM44.072 19.8193C44.0724 20.796 43.9094 22.6123 44.5612 23.3213C45.0168 23.8162 47.1283 23.6646 47.8161 23.666C49.1787 23.6687 50.5517 23.7001 51.9001 23.6729L52.3386 23.6621C51.8935 23.1506 44.1293 15.5004 44.0534 15.4629L44.072 19.8193Z" fill="#121A21"/>
                    <path d="M12.9667 59.6582C13.4958 59.7737 13.8144 60.1328 14.1514 60.531L14.1486 67.9622C14.1461 69.0919 14.0873 71.1623 14.231 72.2137C14.548 72.6247 14.7906 72.978 15.3339 73.049C16.281 73.1723 17.3467 73.1325 18.3094 73.1318L23.3455 73.1352L44.125 73.1385C45.8521 73.1318 48.6088 73.0012 50.3414 73.2518C51.0007 73.3473 50.9356 74.7985 50.0924 75.1054C48.4856 75.2274 46.1234 75.1644 44.4729 75.1657L34.539 75.1691L22.3051 75.1737C20.1396 75.1763 17.957 75.1909 15.7917 75.1644C14.6801 75.1591 13.6364 74.6513 12.8933 73.8332C12.3965 73.2863 12.2149 72.2694 12.2094 71.5441C12.1998 70.2706 12.174 68.9765 12.1964 67.7044C12.2392 65.2826 12.1342 62.8182 12.2438 60.4028C12.4668 59.9992 12.5602 59.8664 12.9667 59.6582Z" fill="#121A21"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h3>Quality Assurance</h3>
                  <p>Rigorous testing to ensure a bug-free, fit-for-purpose solution.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">4</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="93" height="87" viewBox="0 0 93 87" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0224 29.5685C30.8238 29.4888 33.1654 31.6696 33.2685 34.4533C33.3715 37.237 31.1971 39.5822 28.3974 39.7072C25.5653 39.8336 23.1725 37.6421 23.0683 34.8263C22.9641 32.0104 25.1885 29.6492 28.0224 29.5685ZM31.1161 34.1799C30.8603 32.5579 29.3256 31.4521 27.6952 31.715C26.0772 31.9761 24.9746 33.4871 25.2284 35.0968C25.4823 36.7065 26.9973 37.8102 28.6181 37.5666C30.2511 37.3209 31.3717 35.8016 31.1161 34.1799Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.2626 12.5063C29.6964 12.8714 32.2459 16.8828 33.0244 18.0532C37.001 24.0327 39.0159 31.8194 38.7773 38.9536C38.7291 40.3929 38.7045 42.0938 38.4169 43.4946C39.034 44.2107 39.8267 44.8037 40.4453 45.5102C44.054 49.6326 44.623 55.0264 43.2548 60.1723C43.1549 60.9585 41.8899 65.0579 40.5878 63.2085C38.6508 60.4571 37.2514 58.6723 34.5263 56.5669C34.3181 56.7776 34.0856 56.9823 33.8652 57.1821C34.2261 57.9337 34.5619 59.0756 34.623 59.9048C34.7509 61.6404 32.6343 61.3348 31.5351 61.3257L28.3955 61.3188C26.9231 61.3206 23.4121 61.4074 22.0898 61.2114C21.9076 61.0126 21.7673 60.795 21.6132 60.5737C21.5328 59.2656 21.829 58.5955 22.0019 57.3354C22.0445 57.0245 22.0112 56.82 21.8115 56.5923C20.8748 56.591 17.6471 60.2424 16.9824 61.1919C16.6335 61.6076 15.6245 63.3165 15.2617 63.5229C13.6556 64.435 13.0145 60.9232 12.7841 59.9292C12.4966 58.6879 12.1948 57.2193 12.1162 55.9165C12.0649 55.0492 12.1011 54.1789 12.2246 53.3188C12.7757 49.38 14.6122 45.9358 17.8408 43.5171C16.9461 39.2095 17.3947 33.1756 18.4755 28.9145C19.699 24.0417 21.9038 19.4658 24.956 15.4634C25.7137 14.4563 26.7194 13.164 27.8115 12.5151C27.9193 12.5043 28.1732 12.4836 28.2626 12.5063ZM18.1367 46.1421C13.9507 50.2343 13.4188 54.7189 15.0253 60.2104C15.2958 59.8074 15.4818 59.569 15.7871 59.1997C16.893 57.8895 19.1242 55.5103 20.6425 54.7612C19.9938 52.9988 19.3497 51.3015 18.9511 49.4614C18.8647 49.0625 18.2699 46.2955 18.1367 46.1421ZM38.0038 46.2143C37.5193 48.4261 36.4599 52.5813 35.582 54.604C36.4945 55.3631 37.5016 56.2196 38.3554 57.0356C38.9841 57.6365 39.6327 58.4342 40.2333 59.0766C40.5037 59.3834 40.8388 59.7431 41.0849 60.061C42.3777 54.1888 42.2295 50.7137 38.0038 46.2143ZM31.6122 57.0893C29.547 57.1268 26.3588 57.2214 24.3515 57.0913C24.1963 57.7995 24.0343 58.5136 23.8886 59.2231C26.5606 59.2633 29.2331 59.2669 31.9052 59.2348L32.1044 59.1928C32.2246 58.8095 31.7609 57.508 31.6122 57.0893ZM22.2011 24.4155C19.3677 32.0165 18.5425 38.6082 20.5107 46.5415C21.2563 49.547 21.7256 52.2289 23.2871 55.0014C25.3414 55.0239 27.3958 55.0327 29.4501 55.0278C30.3192 55.028 32.259 55.0785 32.9912 54.9223C33.2456 54.4761 33.3485 54.2703 33.5458 53.7934C37.0239 44.4025 38.1423 34.4331 34.1298 24.9565C34.065 24.8035 33.9885 24.6096 33.8427 24.5386C30.4844 25.3163 28.3072 25.6298 24.8046 25.0288C24.0332 24.8964 22.9177 24.728 22.2011 24.4155ZM28.0595 15.0659C26.3729 16.7109 24.0666 20.3496 23.1953 22.4946C24.6996 23.0456 26.7072 23.1986 28.3046 23.1841C30.0771 23.1578 31.3443 23.0578 33.0556 22.5522C32.1465 20.7484 31.1616 18.9099 29.9326 17.3003C29.6245 16.8968 28.4542 15.2201 28.0595 15.0659Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.057 12.5372H64.3529L72.722 12.5577C74.1984 12.563 77.4051 12.4195 78.6136 12.881C78.9029 14.0735 78.7083 15.8826 78.7601 17.1476C78.8162 18.5053 77.6904 18.6242 76.5999 18.6583C76.5049 22.8053 76.6323 27.0831 76.5697 31.2433C76.5265 33.1176 76.6767 35.0441 76.4622 36.9063C76.3707 37.6974 75.2943 38.6997 74.5198 38.8097C73.2933 38.9836 71.9689 38.8997 70.7249 38.8946L63.8294 38.8712C63.1169 38.8723 62.4042 38.8777 61.6917 38.8868C61.6889 39.4607 61.6906 40.0347 61.6976 40.6085C62.4041 40.996 62.995 41.3733 63.4378 42.0646C64.3484 43.4856 63.7227 45.3609 62.3441 46.212C61.6606 46.6377 60.8324 46.7705 60.0491 46.5792C59.2103 46.3787 58.4283 45.7975 57.9876 45.0616C57.587 44.3958 57.469 43.5988 57.6605 42.8468C57.9086 41.9038 58.6966 41.1609 59.5189 40.6827C59.5558 40.1126 59.5557 39.4844 59.5657 38.9083C55.7489 38.8184 51.821 38.944 48.0003 38.8888C46.9879 38.8742 46.3428 38.7498 45.6302 38.004C44.5693 36.8938 44.7476 35.427 44.7445 33.9991L44.7386 30.3233C44.7333 26.6164 44.6386 22.3574 44.7689 18.6866C44.605 18.6859 44.441 18.6794 44.2777 18.6671C43.4645 18.6068 43.2673 18.47 42.7513 17.88C42.5038 16.7799 42.5851 14.0704 42.8177 12.9444C43.5543 12.5142 44.4838 12.5702 45.3284 12.5528C47.5211 12.5017 49.853 12.5379 52.057 12.5372ZM60.6995 42.4962C59.3256 43.1826 59.3184 44.044 60.7845 44.5753C61.9283 44.1596 61.9771 42.9961 60.8597 42.5528C60.807 42.5321 60.7535 42.5131 60.6995 42.4962ZM74.3626 18.6261C66.5192 18.4651 58.6031 18.7019 50.7513 18.6017C49.5294 18.5861 48.239 18.5784 47.0208 18.6222C46.8266 20.7989 46.9322 24.5377 46.931 26.8448L46.93 32.3419C46.9303 33.3041 46.8304 35.8301 47.1556 36.6007C48.547 36.9522 51.6375 36.8066 53.1781 36.8058H61.7425L70.2415 36.8106C71.0336 36.8078 73.555 36.8628 74.182 36.6817C74.3704 36.3311 74.3662 35.2421 74.3626 34.8116C74.3173 29.4315 74.4706 23.9999 74.3626 18.6261ZM76.7122 14.5802C69.5076 14.4421 61.926 14.548 54.6956 14.5587C51.5063 14.5706 47.7772 14.4838 44.6234 14.5929L44.6302 16.5265L66.763 16.5255C70.0658 16.5345 73.3687 16.526 76.6712 16.4981L76.7122 14.5802Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.3544 48.0042C69.0321 47.9721 71.1788 51.1154 72.0859 52.2844C72.6617 53.0256 74.3904 53.9778 74.5078 54.9426C74.679 56.3472 74.5909 57.9259 74.5996 59.3538C75.616 59.3537 77.6902 59.2987 78.623 59.4885C78.7626 59.8439 78.8357 60.1697 78.8378 60.553C78.8436 61.4329 76.8547 69.079 76.3818 69.4934C75.9455 69.8754 74.0287 69.7601 73.4111 69.761C73.1714 71.4342 73.0693 73.1716 72.8779 74.8528C72.7253 76.1948 72.8278 77.4451 72.2119 78.6848C71.1796 78.7857 70.0272 78.7503 68.9804 78.7424C64.8864 78.711 60.7925 78.7726 56.6992 78.7483C55.8673 78.7433 55.5024 78.6292 55.2333 77.8079C55.1765 77.5503 55.1348 77.2302 55.1171 76.9641C54.9568 74.5554 54.6512 72.1531 54.4638 69.7483C53.5496 69.7501 52.5984 69.7699 51.6904 69.6897C51.5358 69.4461 51.2861 69.0567 51.205 68.7815C50.427 66.1384 49.4242 63.4646 49.0947 60.7219C49.0393 60.2606 49.1335 59.9864 49.3281 59.5676C50.395 59.2467 56.0973 59.368 57.582 59.3684L72.5341 59.384C72.4694 58.0642 72.4732 56.6929 72.4121 55.3489C71.6477 54.5993 71.1167 54.1408 70.2382 53.5178C68.5385 52.3125 66.6583 51.6032 65.8788 49.5491C66.1324 48.7314 66.3477 48.284 67.1933 48.011C67.2469 48.0081 67.3007 48.0054 67.3544 48.0042ZM56.2812 65.5168C56.3454 68.9207 57.0498 73.1945 57.2509 76.6809C61.6276 76.5385 66.3636 76.6789 70.7763 76.636L70.8232 76.0002C71.0285 72.3823 71.3759 69.0914 71.6396 65.5374C66.5203 65.5015 61.4006 65.4948 56.2812 65.5168ZM51.3447 61.4573C51.7931 63.4339 52.3806 65.6248 53.0595 67.5344L54.2695 67.5999C54.2562 66.4935 54.019 65.0865 54.0585 64.1028C54.191 63.9107 54.3549 63.6598 54.4951 63.4807C55.4621 63.3356 57.1321 63.3832 58.1689 63.384L64.1699 63.3889L70.0449 63.3831C70.8942 63.3825 72.6012 63.3422 73.3867 63.4465C74.1287 64.6021 73.6976 66.1405 73.7011 67.6047L74.8173 67.6028C75.2363 65.6846 76.0499 63.5226 76.5351 61.4495L54.5078 61.4202L51.3447 61.4573Z" fill="#121A21"/>
                    <path d="M24.5598 63.0245C27.0732 62.9637 24.5479 65.578 24.8357 66.9616C25.3568 69.4656 27.3631 71.43 28.2666 73.7516C28.6371 72.8222 29.2056 71.7533 29.7284 70.9008C31.4856 68.0363 31.9863 67.0675 30.4371 64.0019C31.0751 62.8634 31.7278 62.698 32.5727 63.8049C33.5388 65.0704 33.6765 66.4677 33.454 67.9841C33.0191 70.0132 31.0208 72.6119 30.2361 74.7146C29.8862 75.6519 29.332 78.0565 28.9093 78.5953C28.4148 78.9122 27.5673 78.845 27.3269 78.1982C26.939 77.155 26.7199 76.0847 26.355 75.0337C25.173 71.6303 21.8481 68.9471 23.0704 65.0208C23.3578 64.0936 23.6946 63.5026 24.5598 63.0245Z" fill="#121A21"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h3>Deployment & Training</h3>
                  <p>Secure production release and comprehensive user training.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">5</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="84" height="92" viewBox="0 0 84 92" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.1846 13.1833C52.3179 13.3492 59.0479 16.6376 64.625 22.5173C69.036 27.1678 72.2332 35.3374 72.0879 41.8024C74.6091 42.8749 77.8328 45.7165 77.9248 48.6296C78.0249 51.8017 78.4443 57.3234 77.831 60.3337C77.6216 61.3971 77.1853 62.4022 76.5527 63.279C75.1641 65.1748 73.0403 66.3857 70.7412 66.737C69.9827 68.8798 69.2762 71.0196 67.9473 72.9538C65.5244 76.48 61.6961 78.9473 57.4971 79.7057C56.119 79.9546 54.5821 79.7637 53.3818 80.0055C52.6289 81.5755 52.0065 82.7852 50.0293 83.1608C48.4552 83.4602 46.6453 83.1513 45.0293 83.2604C43.8462 83.3398 42.4399 83.2555 41.4189 82.6003C40.4448 81.9819 39.7665 80.9854 39.5439 79.8464C39.0445 77.3813 40.3615 74.9646 42.9473 74.5221C44.2403 74.301 45.5743 74.3915 46.8838 74.3874C47.9885 74.384 49.1413 74.4269 50.2344 74.5856C51.5811 74.8224 53.0668 76.3835 53.3017 77.7009C56.4403 77.6975 59.026 77.4529 61.793 75.7594C65.0521 73.7433 67.3937 70.5137 68.3105 66.7702C67.0593 66.8268 66.4931 66.8885 65.2959 66.527C65.0657 66.1172 64.9392 65.7419 64.916 65.2712C64.8259 63.4427 64.8733 61.5233 64.875 59.6911L64.8828 48.7731C64.8859 45.7472 65.0351 41.8378 64.5801 38.9264C63.6958 33.2698 60.4807 27.8315 55.7178 24.5632C50.9191 21.2162 44.986 19.9597 39.2578 21.0768C35.4639 21.7831 31.9375 23.535 29.0703 26.1383C27.2567 27.7859 25.7514 29.7488 24.626 31.9333C24.1092 32.9205 23.4594 34.2437 23.1328 35.2858C21.8118 39.5002 21.9887 44.0969 21.9805 48.4567L21.9697 60.6071C21.9721 62.4604 22.3129 65.1881 21.3467 66.6237C19.62 66.9224 16.2728 66.859 14.6289 66.319C12.4685 65.6037 10.6767 64.0548 9.64452 62.0114C8.4657 59.6407 8.66428 57.5635 8.69627 54.9948C8.71801 53.2451 8.59913 51.3327 8.76561 49.6003C8.82844 48.8872 8.97347 48.1836 9.19823 47.5046C10.2084 44.484 12.2348 43.123 14.9238 41.7839C14.9502 34.756 17.5748 27.5466 22.3623 22.3776C26.5907 17.8123 32.4555 14.5389 38.5879 13.5182C39.9473 13.2921 41.322 13.2416 42.6963 13.1921C43.1873 13.1652 43.6927 13.1733 44.1846 13.1833ZM50.5088 77.1061C49.5796 76.3935 45.0404 76.5838 43.7334 76.6383C41.4093 76.961 41.1068 79.1477 42.5107 80.738C43.7226 81.1567 47.8396 81.1043 49.2773 81.0397C49.9396 80.9516 50.2759 80.8676 50.709 80.3063C51.1162 79.7766 51.3018 79.1068 51.2246 78.4411C51.1605 77.92 50.9293 77.4285 50.5088 77.1061ZM67.1396 43.8005C66.975 47.4761 67.1068 52.0328 67.1055 55.7829L67.1045 61.2721C67.1048 62.2714 67.0704 63.6312 67.1572 64.6081C69.7604 64.6337 71.9872 64.7011 74.0185 62.7721C76.4202 60.0606 75.7147 58.0507 75.8857 54.7741C76.2569 47.663 75.1988 43.4313 67.1396 43.8005ZM17.8437 43.8044C16.6338 43.8569 15.9901 43.9082 14.8828 44.3747C10.4198 46.2552 10.9463 50.5515 10.958 54.571C10.9683 58.1451 10.4028 61.3754 13.8945 63.527C16.0621 64.6381 17.288 64.5699 19.6924 64.5173C19.8301 57.6237 19.6914 50.7316 19.748 43.8454C19.1012 43.8175 18.4909 43.7872 17.8437 43.8044ZM69.1181 36.2057C66.3425 23.4138 55.0131 14.9032 42.1982 15.4255C35.1995 15.7462 28.6148 18.8625 23.8974 24.0866C20.7934 27.5111 18.5115 32.3293 17.6201 36.8796C17.3147 38.4388 17.2302 40.0137 17.1533 41.5964C17.9506 41.5872 18.8783 41.5972 19.665 41.5622C19.9185 39.6067 20.1418 37.6978 20.6455 35.7751C23.0352 26.6529 31.0413 19.4682 40.4189 18.5807C41.9558 18.4353 43.4805 18.4302 45.0176 18.4616C57.8519 19.3971 66.1652 28.9347 67.1943 41.5807C68.0415 41.5692 68.8893 41.573 69.7363 41.5915C69.6239 39.749 69.5103 38.013 69.1181 36.2057Z" fill="#121A21"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2244 35.199C47.4517 34.615 53.2031 37.3727 56.3474 41.5554C58.9979 45.1365 60.1258 49.6348 59.4832 54.0564C58.861 58.2666 56.6204 62.0603 53.2459 64.6169C49.3285 67.5892 45.4775 68.4315 40.6629 67.7371C38.8271 67.4982 36.6625 66.436 35.0564 65.533C33.7065 65.9642 28.651 68.0454 27.6062 67.7185C27.4022 67.6546 27.2469 67.5351 27.1482 67.3415C26.671 66.4054 28.8179 60.6076 29.2156 59.3005C28.0688 57.523 27.3431 54.7799 27.2019 52.6726C26.923 48.2837 28.3963 43.9643 31.2937 40.6775C33.9627 37.6002 38.17 35.4655 42.2244 35.199ZM44.2537 37.4177C43.7446 37.3743 42.9622 37.366 42.4549 37.4285C38.537 37.8812 35.0576 39.4967 32.5642 42.655C30.2156 45.6117 29.1305 49.3899 29.5486 53.155C29.6749 54.2483 29.9655 55.096 30.2429 56.1062C30.5469 57.2126 31.5615 58.7471 31.3797 59.7839C31.0684 61.5563 30.2692 63.0786 29.9627 64.9001C30.687 64.6547 31.4079 64.3839 32.1258 64.1355C33.124 63.79 34.0623 63.3616 35.1336 63.322C36.1349 63.2852 37.0027 64.0199 37.867 64.4246C39.1108 64.991 40.4164 65.3134 41.7566 65.5564C42.9414 65.6658 43.9572 65.7139 45.1443 65.5701C56.0579 64.2469 61.3008 51.0698 54.1736 42.5115C51.6754 39.5441 48.1025 37.7099 44.2537 37.4177Z" fill="#121A21"/>
                    <path d="M43.0555 42.2248C45.709 41.9724 48.3509 43.604 48.9298 46.3364C49.1688 47.5602 48.992 49.1084 48.2958 50.1604C47.3883 51.4597 45.9414 52.0385 44.945 53.2733C44.2746 54.104 44.7704 56.0926 43.5679 56.2504C42.4535 56.3968 42.0804 55.7218 42.1107 54.7041C42.1554 53.2031 42.6704 52.2462 43.6813 51.2202C44.7905 50.3001 46.3125 49.5428 46.6635 48.0025C46.8253 47.2924 46.7003 46.4634 46.3041 45.8503C45.8254 45.1098 45.1287 44.7093 44.2806 44.5365C40.363 43.7378 40.2279 47.7811 39.6072 48.1141C39.186 48.3401 38.5613 48.1278 38.1378 47.994C37.2956 45.5644 39.3502 43.3843 41.4619 42.5599C41.9966 42.3511 42.4924 42.292 43.0555 42.2248Z" fill="#121A21"/>
                    <path d="M42.9139 57.921C45.1004 57.7373 45.444 59.9414 43.735 60.8099C43.0189 61.0003 42.3522 60.6437 42.0764 59.9552C41.9066 59.5388 41.911 59.0707 42.0887 58.6576C42.2899 58.1926 42.4645 58.1046 42.9139 57.921Z" fill="#121A21"/>
                    </svg>
                </div>
                <div className="eng-title">
                  <h3>Ongoing Support</h3>
                  <p>Sustainable management and change-request handling.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* engagement model ends */}
      

      {/* Work Reference Section Starts */}
      <section className="work-ref-wrapper">
        <div className="container">
          <h2 className="txt-center slide-up"><span className="txt-regular">Work</span> References</h2>
        </div>
        <Swiper className="workSwiper slide-up"
          modules={[Navigation, Pagination]}
          
          
          // slidesPerView={3.2}
          // loop={true}
          navigation
          // pagination
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
              slidesOffsetBefore: 20,
            },
            768: {
              slidesPerView: 1.9,
              spaceBetween: 10,
              slidesOffsetBefore: 20,
            },
            991: {
              slidesPerView: 2.5,
              slidesOffsetBefore: 145,
              spaceBetween: 20,
            },
             1300: {
              slidesPerView: 3.6,
              slidesOffsetBefore: 145,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <a href="#">
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-project-img.webp" alt="Emovers"></img>
                </div>
                <div className="proj-txt">
                  {/* <p className="proj-name">E-Move</p> */}
                  <p>The largest relocation company runs a paperless operation for quotes, jobs, invoices and payroll eclipsing other competitors.</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/bmw-logo.png" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/bmw-project-image.jpg" alt="Emovers"></img>
                </div>
                <div className="proj-txt">
                  {/* <p className="proj-name">E-Move</p> */}
                  <p>German luxury automobile company relies on emQube developed web application to manage sales in 11 countries in the region</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/nestle-logo.png" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/nestle-project-image.jpg" alt="Emovers"></img>
                </div>
                <div className="proj-txt">
                  {/* <p className="proj-name">E-Move</p> */}
                  <p>Swiss multinational leader in FMCG leverages a custom-built application to monitor inventory and sales in the Middle East region.</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
              <a href="#">
                <div className="work-wrapp">
                  <div className="client-icon">
                    <img src="/assets/img/orient-finance-logo.png" alt="Orient Finance logo"></img>
                  </div>
                  <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                      <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <div className="proj-img">
                    <img src="/assets/img/orient-finance-proj-img.jpg" alt="Orient Finance"></img>
                  </div>
                  <div className="proj-txt">
                  {/* <p className="proj-name">E-Move</p> */}
                  <p>Making online purchase of insurance easier, our web application for a leading broker in Dubai helped grow business rapidly.</p>
                </div>
                </div>
              </a>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Work Reference Section Ends */}

      {/* Home Page Brand section starts */}
      {/* <section className="brand-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient">Brands That Trust Us</h2>
          <ul className="brand-list d-flex">
            <li><a href="#"><img src="/assets/img/logo-difc.jpg" width="148" height="72" alt="DIFC"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-bmw.jpg" width="148" height="72" alt="BMW"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-nespresso-logo.jpg" width="148" height="72" alt="NESPRESSO"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-emovers.jpg" width="148" height="72" alt="E-Movers"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-tld.jpg" width="148" height="72" alt="The Leather Doctor"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-innerspace.jpg" width="148" height="72" alt="Innerspace"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-lighttech.jpg" width="148" height="72" alt="Lighttech"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-Haecker.jpg" width="148" height="72" alt="Haecker"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-nikai.jpg" width="148" height="72" alt="Nikai"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-swisscotec.jpg" width="148" height="72" alt="swisscotec"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-karam.jpg" width="148" height="72" alt="Karam"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-transAsia.jpg" width="148" height="72" alt="transAsia"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-winspire.jpg" width="148" height="72" alt="winspire"></img></a></li>
            <li><a href="#"><img src="/assets/img/logo-electricway.jpg" width="148" height="72" alt="Electricway"></img></a></li>
          </ul>
          <a href="#" className="view-more-btn">View more</a>
        </div>
      </section> */}
      <section className="brand-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient slide-up">Brands That Trust Us</h2>

          <ul className="brand-list d-flex slide-up">
            {(isMobile ? logos.slice(0, visibleCount) : logos).map((logo, index) => (
              <li key={index}>
                <a href="#">
                  <img src={logo.src} width="148" height="72" alt={logo.alt} />
                </a>
              </li>
            ))}
          </ul>

          {isMobile && (
            <a href="javascript:void(0);"
              onClick={loadMore}
              className={`view-more-btn ${
                visibleCount >= logos.length ? "disabled" : ""
              }`}
              disabled={visibleCount >= logos.length}
            >
              {visibleCount >= logos.length ? "No more brands" : "View more"}
            </a>
          )}
        </div>
      </section>
      {/* Home Page Brand section ends */}

      {/* Technology Section Starts */}
      <section className="technology-wrapper">
        <div className="container">
          <h2 className="slide-up">Technology Platforms</h2>
          <Swiper className="techSwiper slide-up"
            // modules={[Navigation, Pagination, Autoplay]}
            // slidesPerView={3.2}
            // loop={true}
            navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/angular-js.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/azure.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/asp.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/sql.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/mvc.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/windowsMob.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/vscode.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/angular-js.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/azure.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/asp.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/sql.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/mvc.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/windowsMob.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tech-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/vscode.webp" alt="Emovers logo"></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Technology Section Ends */}

      {/* home cta section starts */}
      <section className="cta-wrapper">
        <div className="container">
          <p className="cta-title stagger-li">Looking for an expert in software?</p>
          <p className="cta-txt stagger-li">Write, Call, or Message to schedule your free consultation.</p>
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

      {/* Sticky buttons starts */}
      <div class="sticky-buttons">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="36" fill="#4E9C5A"/>
              <g clip-path="url(#clip0_1325_7512)">
              <path d="M35.972 14.9748C36.0555 14.975 36.139 14.9751 36.2251 14.9753C37.4235 14.9794 38.5991 15 39.7762 15.2465C39.8562 15.2628 39.9362 15.2791 40.0186 15.2959C43.9742 16.1233 47.6327 17.9311 50.5363 20.7605C50.6857 20.906 50.8363 21.0502 50.9869 21.1944C51.5888 21.7767 52.1277 22.3847 52.6276 23.0565C52.7399 23.2072 52.8536 23.3566 52.9676 23.506C53.4898 24.1973 53.9517 24.9105 54.3778 25.6645C54.4076 25.7162 54.4373 25.7679 54.468 25.8212C56.2345 28.9069 57.0407 32.4116 57.0335 35.944C57.0335 36.0682 57.0335 36.0682 57.0334 36.195C57.0301 37.5497 56.954 38.8542 56.6747 40.184C56.6575 40.2673 56.6404 40.3506 56.6227 40.4364C55.9735 43.4917 54.6466 46.3303 52.7372 48.7973C52.6819 48.87 52.6266 48.9428 52.5696 49.0177C52.1134 49.6047 51.6093 50.1467 51.0965 50.684C51.0283 50.7558 51.0283 50.7558 50.9586 50.8291C50.3292 51.4869 49.6772 52.0816 48.9467 52.6252C48.796 52.7375 48.6466 52.8513 48.4972 52.9652C47.8059 53.4874 47.0927 53.9493 46.3387 54.3754C46.287 54.4052 46.2353 54.435 46.182 54.4657C44.0421 55.6907 41.6356 56.4682 39.202 56.8363C39.1097 56.8509 39.0175 56.8654 38.9224 56.8804C37.9747 57.0159 37.036 57.0297 36.0797 57.026C35.998 57.0259 35.9163 57.0257 35.8321 57.0256C34.6416 57.0219 33.4825 56.9844 32.3114 56.7543C32.2379 56.7411 32.1644 56.7279 32.0888 56.7143C29.6543 56.2739 27.1994 55.4194 25.1484 54.0161C25.087 53.9761 25.0255 53.936 24.9622 53.8948C24.9099 53.8588 24.8575 53.8229 24.8036 53.7859C24.1019 53.5554 23.2419 53.9824 22.5708 54.2046C22.445 54.2457 22.3192 54.2867 22.1934 54.3276C21.8629 54.4354 21.5326 54.544 21.2024 54.6527C20.8715 54.7616 20.5404 54.8698 20.2092 54.978C20.0796 55.0204 19.95 55.0627 19.8204 55.1051C19.7254 55.1361 19.7254 55.1361 19.6285 55.1678C19.4398 55.2295 19.251 55.2913 19.0623 55.3531C18.4034 55.5689 17.7444 55.7844 17.0837 55.9946C17.0221 56.0143 16.9605 56.0341 16.897 56.0545C16.499 56.1801 16.499 56.1801 16.3153 56.1801C16.5016 55.4336 16.7465 54.7094 16.9951 53.982C17.0684 53.7673 17.1414 53.5523 17.2144 53.3374C17.4215 52.727 17.6293 52.1168 17.8373 51.5066C17.965 51.1318 18.0923 50.7568 18.2195 50.3818C18.2912 50.1705 18.3634 49.9595 18.4356 49.7484C18.4796 49.6187 18.5235 49.489 18.5675 49.3592C18.5975 49.272 18.5975 49.272 18.6282 49.1829C18.7353 48.865 18.8266 48.5578 18.8583 48.2231C18.7463 48.0029 18.7463 48.0029 18.5705 47.8014C16.6792 45.3667 15.6472 42.2103 15.1668 39.1996C15.1439 39.0572 15.1439 39.0572 15.1206 38.912C14.9831 37.954 14.9735 37.0028 14.9772 36.0363C14.9774 35.9107 14.9774 35.9107 14.9777 35.7826C14.9818 34.5827 15.002 33.4055 15.2489 32.227C15.2652 32.147 15.2815 32.067 15.2983 31.9846C16.1428 27.9472 17.9833 24.3846 20.827 21.3988C20.8738 21.3497 20.9206 21.3006 20.9688 21.25C21.6248 20.566 22.2986 19.9389 23.0602 19.3743C23.2104 19.2627 23.3593 19.1494 23.5081 19.036C24.1994 18.5136 24.9128 18.0516 25.6668 17.6254C25.7186 17.5956 25.7703 17.5659 25.8235 17.5352C28.9201 15.7625 32.4285 14.9613 35.972 14.9748ZM25.3522 26.0179C24.1121 27.5601 23.6881 29.3807 23.8622 31.3246C24.0136 32.4005 24.3642 33.3918 24.8465 34.3598C24.8858 34.4415 24.8858 34.4415 24.9259 34.5248C25.4232 35.5553 26.0595 36.4729 26.7333 37.3949C26.7684 37.4435 26.8035 37.492 26.8397 37.542C27.5782 38.561 28.3765 39.5372 29.2358 40.4564C29.4231 40.6577 29.6039 40.8631 29.7838 41.071C30.036 41.3566 30.3044 41.6059 30.5951 41.8515C30.7466 41.9833 30.8853 42.121 31.0245 42.2655C31.3994 42.6437 31.8093 42.9749 32.2293 43.3012C32.3125 43.3658 32.3125 43.3658 32.3974 43.4318C35.3203 45.6845 39.8713 48.1595 43.6746 47.6956C45.279 47.4232 46.9532 46.5835 47.9281 45.2494C48.476 44.3609 48.8116 42.9476 48.6356 41.9067C48.3755 41.4942 48.0459 41.3321 47.6211 41.1264C47.5536 41.0927 47.486 41.0591 47.4164 41.0244C47.1978 40.9158 46.9785 40.8088 46.7591 40.7018C46.6091 40.628 46.4591 40.5541 46.3091 40.4801C45.8823 40.2704 45.4544 40.0629 45.0262 39.8559C44.9198 39.8042 44.8134 39.7525 44.707 39.7008C44.4604 39.5816 44.2131 39.4643 43.9649 39.3483C43.8979 39.3163 43.8308 39.2842 43.7617 39.2512C43.3475 39.0627 42.944 38.9224 42.4833 38.9535C41.9452 39.1595 41.7008 39.5165 41.3861 39.9841C41.2935 40.1169 41.2007 40.2495 41.1076 40.382C41.0627 40.4464 41.0178 40.5107 40.9716 40.5769C40.1034 41.7976 40.1034 41.7976 39.5301 41.9887C37.8651 42.1737 35.6928 40.537 34.4461 39.543C33.9617 39.1481 33.5021 38.728 33.0497 38.2973C32.9691 38.2218 32.9691 38.2218 32.8869 38.1448C31.9379 37.2306 30.2452 35.4553 30.117 34.0983C30.246 33.4428 30.781 33.0064 31.2187 32.5279C31.9233 31.7503 31.9233 31.7503 32.1697 30.7782C32.127 30.412 31.9745 30.0878 31.8294 29.7516C31.7964 29.6725 31.7634 29.5934 31.7293 29.5118C31.6236 29.2594 31.5164 29.0077 31.409 28.756C31.3394 28.5905 31.2699 28.4248 31.2004 28.2592C31.0637 27.9335 30.9261 27.6081 30.7877 27.2831C30.6571 26.9758 30.5287 26.6676 30.4026 26.3584C30.3733 26.2873 30.3441 26.2162 30.314 26.1429C30.2597 26.0107 30.206 25.8783 30.1529 25.7457C29.9871 25.3436 29.819 24.9878 29.4458 24.738C29.0978 24.6191 28.7274 24.6533 28.3636 24.6545C28.282 24.6531 28.2004 24.6518 28.1162 24.6505C26.8779 24.6497 26.1491 25.0991 25.3522 26.0179Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_1325_7512">
              <rect width="42" height="42" fill="white" transform="translate(15 15)"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="36" fill="#4E9C5A"/>
            <path d="M23.6113 20.9831C23.7536 20.9837 23.7536 20.9837 23.8988 20.9843C24.1311 20.9852 24.3634 20.9866 24.5957 20.9883C24.5981 21.0594 24.5981 21.0594 24.6006 21.1321C24.6602 22.7855 24.7282 24.2338 26.0056 25.4333C26.9787 26.2184 28.0281 26.3452 29.2325 26.3428C29.3516 26.3432 29.4706 26.3436 29.5897 26.3441C29.9112 26.3452 30.2327 26.3452 30.5543 26.345C30.8235 26.3449 31.0928 26.3453 31.3621 26.3457C31.9978 26.3466 32.6335 26.3467 33.2692 26.3462C33.9231 26.3457 34.577 26.3467 35.2309 26.3484C35.7941 26.3499 36.3573 26.3504 36.9205 26.3501C37.2561 26.35 37.5917 26.3502 37.9272 26.3513C38.243 26.3524 38.5588 26.3522 38.8746 26.3511C38.9898 26.3509 39.1051 26.3511 39.2203 26.3518C40.4849 26.3588 41.6093 26.0875 42.5519 25.2017C43.3809 24.2711 43.5787 23.2512 43.6013 22.0444C43.6041 21.9425 43.6069 21.8405 43.6098 21.7355C43.6165 21.4864 43.6222 21.2374 43.627 20.9883C45.4288 20.9486 47.0685 20.925 48.5078 22.1726C49.4196 23.056 50.0181 24.1605 50.055 25.4485C50.0557 25.6422 50.0551 25.836 50.0533 26.0297C50.0534 26.1363 50.0534 26.2428 50.0534 26.3526C50.0535 26.6418 50.0521 26.9311 50.0503 27.2203C50.0488 27.5237 50.0487 27.8271 50.0484 28.1304C50.0476 28.7036 50.0456 29.2768 50.0431 29.8499C50.0404 30.503 50.039 31.1561 50.0378 31.8092C50.0352 33.1514 50.0309 34.4937 50.0254 35.8359C49.9358 35.8633 49.8461 35.8907 49.7538 35.919C49.6348 35.9557 49.5157 35.9924 49.3967 36.0291C49.3378 36.0471 49.2789 36.0651 49.2182 36.0836C47.8801 36.4979 46.9818 37.3782 46.0143 38.348C45.9106 38.4513 45.8069 38.5546 45.7031 38.6578C45.4236 38.9362 45.1446 39.2152 44.8658 39.4942C44.6323 39.7278 44.3986 39.9611 44.1649 40.1944C43.6135 40.7449 43.0625 41.2959 42.5118 41.8471C41.9447 42.4147 41.3768 42.9815 40.8086 43.548C40.3194 44.0358 39.8307 44.524 39.3424 45.0125C39.0513 45.3038 38.76 45.5948 38.4683 45.8854C38.1942 46.1585 37.9206 46.4322 37.6476 46.7063C37.5476 46.8065 37.4473 46.9065 37.3469 47.0063C36.4115 47.9358 35.9076 48.7481 35.6843 50.0565C35.6719 50.1274 35.6595 50.1982 35.6468 50.2713C35.6209 50.4203 35.5954 50.5694 35.5701 50.7186C35.5318 50.9432 35.4919 51.1676 35.4519 51.3919C35.2745 52.4112 35.1902 53.3436 35.3418 54.375C33.6275 54.3827 31.9133 54.3884 30.199 54.392C29.403 54.3937 28.6069 54.396 27.8109 54.3997C27.1167 54.403 26.4225 54.4051 25.7283 54.4058C25.361 54.4063 24.9938 54.4073 24.6266 54.4097C24.2801 54.4119 23.9338 54.4126 23.5873 54.4121C23.4609 54.4122 23.3345 54.4128 23.2081 54.4141C21.8476 54.4271 20.6519 54.0977 19.6372 53.1519C18.7865 52.3165 18.2443 51.2581 18.1867 50.0522C18.1866 49.9766 18.1864 49.9009 18.1863 49.823C18.1857 49.6911 18.1857 49.6911 18.1852 49.5565C18.1852 49.4608 18.1852 49.3651 18.1852 49.2664C18.1849 49.164 18.1846 49.0617 18.1843 48.9562C18.1835 48.6725 18.1832 48.3889 18.1829 48.1052C18.1826 47.7991 18.1818 47.4929 18.1811 47.1867C18.1795 46.4476 18.1787 45.7084 18.1779 44.9693C18.1776 44.6208 18.1771 44.2723 18.1767 43.9238C18.1753 42.7646 18.1741 41.6054 18.1735 40.4461C18.1734 40.1455 18.1732 39.8449 18.1731 39.5443C18.173 39.4696 18.173 39.3949 18.1729 39.3179C18.1723 38.1085 18.1702 36.8991 18.1675 35.6898C18.1648 34.4468 18.1633 33.2038 18.1631 31.9608C18.1629 31.2634 18.1622 30.5661 18.1601 29.8688C18.1583 29.2747 18.1576 28.6806 18.1584 28.0865C18.1588 27.7838 18.1587 27.4812 18.1571 27.1785C18.148 25.3744 18.1926 23.7752 19.4998 22.3777C20.705 21.2768 22.0063 20.9712 23.6113 20.9831ZM25.4724 31.9087C25.2831 32.2312 25.2264 32.5097 25.252 32.8828C25.3702 33.2802 25.5894 33.5118 25.9537 33.714C26.4155 33.8778 26.9315 33.8296 27.4165 33.8263C27.5451 33.8266 27.6737 33.827 27.8023 33.8276C28.1504 33.8288 28.4985 33.8279 28.8466 33.8265C29.2114 33.8254 29.5762 33.8259 29.941 33.8262C30.5534 33.8264 31.1658 33.8253 31.7782 33.8234C32.4858 33.8212 33.1933 33.8211 33.9009 33.822C34.5823 33.8229 35.2637 33.8224 35.9451 33.8213C36.2348 33.8208 36.5244 33.8208 36.8141 33.8212C37.1553 33.8216 37.4964 33.8207 37.8376 33.819C37.9627 33.8185 38.0877 33.8185 38.2128 33.8189C38.3838 33.8194 38.5547 33.8183 38.7257 33.8169C38.8213 33.8167 38.9169 33.8165 39.0154 33.8163C39.4224 33.7682 39.6876 33.632 39.9612 33.3288C40.1955 32.9904 40.2247 32.7149 40.1816 32.3086C40.035 31.9689 39.8263 31.781 39.5254 31.5703C39.2507 31.4787 39.0443 31.4775 38.7547 31.4767C38.7013 31.4765 38.6478 31.4762 38.5927 31.476C38.4133 31.4753 38.2338 31.4752 38.0543 31.475C37.9258 31.4747 37.7972 31.4742 37.6687 31.4738C37.3192 31.4727 36.9697 31.4722 36.6202 31.4718C36.4019 31.4716 36.1836 31.4713 35.9652 31.4709C35.2821 31.4698 34.599 31.469 33.9159 31.4687C33.1274 31.4683 32.3388 31.4669 31.5502 31.4645C30.9407 31.4627 30.3312 31.4619 29.7217 31.4618C29.3576 31.4617 28.9936 31.4612 28.6295 31.4597C28.287 31.4584 27.9445 31.4582 27.602 31.4589C27.4764 31.459 27.3508 31.4586 27.2252 31.4578C27.0535 31.4568 26.8818 31.4573 26.7101 31.4581C26.5661 31.4579 26.5661 31.4579 26.4192 31.4577C26.0289 31.5027 25.7598 31.6446 25.4724 31.9087ZM25.4314 38.6865C25.2536 39.0233 25.1967 39.3438 25.3061 39.7071C25.4672 40.0613 25.6215 40.2729 25.9902 40.4297C26.2895 40.5264 26.5756 40.5232 26.8887 40.5249C26.9738 40.5255 26.9738 40.5255 27.0606 40.5261C27.2478 40.5273 27.435 40.5279 27.6222 40.5284C27.7528 40.5288 27.8834 40.5293 28.0139 40.5298C28.2876 40.5306 28.5613 40.5311 28.835 40.5314C29.1847 40.5319 29.5345 40.5338 29.8842 40.5362C30.154 40.5377 30.4237 40.5381 30.6935 40.5382C30.8223 40.5385 30.9512 40.5391 31.0801 40.5402C31.2609 40.5416 31.4417 40.5415 31.6225 40.5409C31.7764 40.5414 31.7764 40.5414 31.9335 40.5418C32.3682 40.4968 32.6896 40.3834 32.9937 40.0554C33.2402 39.6855 33.2614 39.3919 33.209 38.9531C33.0103 38.5404 32.8068 38.3857 32.3887 38.2148C32.1726 38.1916 31.9763 38.1803 31.7608 38.1817C31.6694 38.1808 31.6694 38.1808 31.5763 38.18C31.3762 38.1785 31.1762 38.1788 30.9762 38.1793C30.8365 38.1789 30.6967 38.1784 30.557 38.1779C30.2646 38.1772 29.9723 38.1774 29.6799 38.1782C29.3059 38.1792 28.9319 38.1775 28.5579 38.1751C28.2695 38.1736 27.9811 38.1736 27.6927 38.1741C27.5548 38.1741 27.4169 38.1736 27.279 38.1726C27.086 38.1714 26.8932 38.1723 26.7002 38.1737C26.6436 38.1729 26.5871 38.1721 26.5289 38.1713C26.0524 38.1785 25.7671 38.3623 25.4314 38.6865Z" fill="white"/>
            <path d="M29.0998 17.5728C29.2217 17.5724 29.3436 17.5718 29.4655 17.571C29.7947 17.5695 30.1238 17.5706 30.4529 17.5722C30.7983 17.5736 31.1438 17.5728 31.4892 17.5724C32.069 17.572 32.6489 17.5733 33.2287 17.5756C33.898 17.5783 34.5673 17.5783 35.2365 17.5768C35.8819 17.5755 36.5273 17.5761 37.1727 17.5775C37.4467 17.5781 37.7206 17.578 37.9946 17.5774C38.3175 17.5767 38.6403 17.5777 38.9632 17.58C39.0813 17.5805 39.1994 17.5806 39.3175 17.58C40.066 17.5766 40.6089 17.604 41.1908 18.1139C41.235 18.1673 41.2792 18.2207 41.3247 18.2757C41.3702 18.3289 41.4157 18.3821 41.4625 18.4369C41.6797 18.7522 41.7654 19.0408 41.7703 19.4217C41.7716 19.4994 41.7729 19.5772 41.7742 19.6574C41.7747 19.7406 41.7751 19.8239 41.7756 19.9096C41.7763 19.9963 41.7771 20.083 41.7778 20.1723C41.779 20.3557 41.7797 20.539 41.78 20.7223C41.781 21.0009 41.785 21.2793 41.7892 21.5578C41.79 21.7364 41.7906 21.9151 41.791 22.0937C41.7926 22.1761 41.7942 22.2585 41.7958 22.3434C41.7921 22.9251 41.6669 23.3756 41.335 23.859C40.8494 24.3272 40.3546 24.535 39.6751 24.5372C39.5741 24.5379 39.4732 24.5386 39.3692 24.5393C39.2584 24.5392 39.1475 24.5391 39.0367 24.5391C38.9192 24.5395 38.8016 24.5401 38.6841 24.5407C38.3656 24.5422 38.0472 24.5426 37.7287 24.5427C37.5294 24.5428 37.3301 24.5431 37.1308 24.5436C36.4347 24.5451 35.7386 24.5457 35.0425 24.5456C34.3951 24.5455 33.7477 24.5473 33.1003 24.5498C32.5433 24.552 31.9863 24.5529 31.4293 24.5528C31.0971 24.5527 30.765 24.5532 30.4328 24.5549C30.1201 24.5565 29.8075 24.5565 29.4948 24.5553C29.3806 24.5552 29.2664 24.5555 29.1521 24.5565C28.4161 24.5626 27.7143 24.5362 27.132 24.0363C26.4789 23.3868 26.4584 22.5744 26.4534 21.702C26.4536 21.5521 26.4542 21.4022 26.4552 21.2523C26.4566 21.024 26.4552 20.7959 26.4537 20.5676C26.4538 20.4205 26.4542 20.2734 26.4546 20.1262C26.4541 20.059 26.4536 19.9919 26.4531 19.9226C26.4616 19.2179 26.649 18.5532 27.1436 18.0347C27.7402 17.5551 28.3648 17.5663 29.0998 17.5728Z" fill="white"/>
            <path d="M45.5152 41.4141C45.8248 41.5587 46.0224 41.7374 46.2646 41.9808C46.3055 42.0216 46.3463 42.0624 46.3884 42.1045C46.5229 42.2391 46.6567 42.3742 46.7906 42.5093C46.8838 42.6029 46.9772 42.6965 47.0705 42.79C47.3158 43.0359 47.5606 43.2823 47.8052 43.5287C48.0551 43.7803 48.3055 44.0314 48.5558 44.2826C49.0467 44.7752 49.537 45.2683 50.0269 45.7617C49.9093 46.0294 49.7649 46.2095 49.5601 46.4173C49.4657 46.5137 49.4657 46.5137 49.3693 46.6121C49.3001 46.6818 49.2309 46.7516 49.1596 46.8235C49.0867 46.8976 49.0139 46.9716 48.9388 47.0479C48.6974 47.2932 48.455 47.5377 48.2126 47.7821C48.129 47.8665 48.0454 47.9509 47.9618 48.0353C47.6136 48.3866 47.2653 48.7376 46.9163 49.0881C46.4175 49.5891 45.92 50.0913 45.4243 50.5954C45.0749 50.9504 44.7242 51.304 44.3723 51.6565C44.1626 51.8668 43.9535 52.0776 43.7459 52.2899C43.5138 52.5273 43.2788 52.7616 43.0434 52.9957C42.9759 53.0656 42.9084 53.1356 42.8388 53.2076C42.3495 53.6875 41.9221 53.8575 41.2496 53.9648C41.1438 53.9865 41.0379 54.0081 40.9289 54.0304C40.6275 54.083 40.326 54.1347 40.0243 54.1853C39.8683 54.213 39.8683 54.213 39.7091 54.2412C38.0003 54.5294 38.0003 54.5294 37.5262 54.2661C37.2821 54.0712 37.1657 53.9359 37.066 53.6367C37.0293 53.0911 37.0863 52.5613 37.1743 52.0237C37.1859 51.9517 37.1975 51.8798 37.2094 51.8057C37.234 51.6549 37.259 51.5042 37.2843 51.3536C37.3223 51.1248 37.3576 50.8956 37.3928 50.6663C37.4172 50.5189 37.4418 50.3715 37.4665 50.2241C37.4766 50.1565 37.4866 50.0889 37.4969 50.0192C37.6474 49.1703 38.2746 48.6309 38.866 48.0447C38.9381 47.9726 39.0102 47.9004 39.0844 47.8262C39.2804 47.6303 39.4767 47.4348 39.6731 47.2395C39.879 47.0347 40.0844 46.8293 40.2899 46.624C40.6783 46.2362 41.0671 45.8487 41.456 45.4614C41.8992 45.0202 42.3418 44.5784 42.7844 44.1366C43.6942 43.2286 44.6045 42.3211 45.5152 41.4141Z" fill="white"/>
            <path d="M52.5466 38.2371C53.233 38.7561 53.6757 39.4966 53.8008 40.3478C53.8991 41.2982 53.6632 42.1218 53.0654 42.8621C52.7812 43.1903 52.4756 43.4949 52.1653 43.7983C52.1014 43.8615 52.0374 43.9246 51.9716 43.9897C51.8161 44.1434 51.6602 44.2966 51.5039 44.4494C51.1902 44.3199 50.9923 44.1217 50.7545 43.8827C50.7136 43.8418 50.6728 43.801 50.6307 43.759C50.4963 43.6244 50.3624 43.4893 50.2286 43.3542C50.1353 43.2606 50.042 43.167 49.9486 43.0735C49.7033 42.8276 49.4586 42.5812 49.2139 42.3347C48.964 42.0831 48.7136 41.832 48.4633 41.5809C47.9725 41.0883 47.4822 40.5952 46.9922 40.1018C47.1902 39.6873 47.4901 39.4095 47.8125 39.0866C47.8714 39.0257 47.9303 38.9648 47.991 38.902C49.2768 37.6093 50.958 37.2159 52.5466 38.2371Z" fill="white"/>
          </svg>
        </a>
      </div>
      {/* sticky button ends */}

      {/* scroll to top - starts */}
      <div id="backtotop" className={`backtotop ${showTop ? "active" : ""}`} onClick={scrollToTop}>
        <div class="svg-wrap">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#D9D9D9"/>
            <path d="M25.1037 17.354L25.1037 32.7598C25.1037 32.9723 25.0319 33.1504 24.8882 33.2943C24.7444 33.4379 24.5662 33.5098 24.3535 33.5098C24.141 33.5098 23.9629 33.4379 23.8192 33.2943C23.6757 33.1504 23.604 32.9723 23.604 32.7598L23.604 17.354L19.252 21.6908C19.1152 21.8269 18.9441 21.8982 18.7387 21.9045C18.5334 21.9107 18.3558 21.8394 18.206 21.6908C18.0687 21.5544 18 21.3809 18 21.1703C18 20.9594 18.0692 20.7848 18.2077 20.6465L23.7212 15.133C23.8147 15.0393 23.9139 14.9733 24.0187 14.935C24.1234 14.8965 24.2356 14.8773 24.3552 14.8773C24.4749 14.8773 24.5886 14.8966 24.6962 14.9353C24.8039 14.9741 24.9039 15.04 24.9962 15.133L30.5097 20.6465C30.6481 20.7833 30.7172 20.9544 30.7172 21.1598C30.7172 21.3649 30.6481 21.5419 30.5097 21.6908C30.3609 21.8458 30.1827 21.9217 29.975 21.9185C29.7673 21.9153 29.5892 21.8394 29.4405 21.6908L25.1037 17.354Z" fill="#242424"/>
          </svg>
        </div>
      </div>
      {/* scroll to top */}
      
    </>
  );
}


export default function Home() {
  return (
    <main className="inside-page">
      <Header />
    </main>
  );
}