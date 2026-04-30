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
import "/src/assets/css/about-us.css";

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

  const [visibleCount, setVisibleCount] = useState(9);
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

  // onscroll straegic section aniamtion - starts
    // useEffect(() => {
    //   gsap.registerPlugin(ScrollTrigger)
  
    //   const items = gsap.utils.toArray(".strategic-choice-wrapper li")
  
    //   items.forEach((item) => {
    //     const line = item.querySelector(".line-fill")
    //     const content = item.querySelector(".right")
  
    //     gsap.fromTo(
    //       line,
    //       {
    //         height: "0%",
    //       },
    //       {
    //         height: "calc(100% - 45px)",
    //         ease: "none",
    //         scrollTrigger: {
    //           trigger: item,
    //           start: "top 70%",
    //           end: "bottom 30%",
    //           scrub: true, // 🔥 THIS makes it smooth & reversible
              
    //           onEnter: () => content.classList.add("active"),
    //           onLeaveBack: () => content.classList.remove("active"),
    //         },
    //       }
    //     )
    //   })
    // }, [])
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
  
      const items = gsap.utils.toArray(".strategic-choice-wrapper li")
  
      items.forEach((item) => {
        const line = item.querySelector(".line-fill")
        const right = item.querySelector(".right")
  
        const height = right.offsetHeight - 50 // 👈 exact calc
  
        // gsap.fromTo(
        //   line,
        //   {
        //     height: 0,
        //   },
        //   {
        //     height: height, // 👈 dynamic px value
        //     ease: "none",
        //     scrollTrigger: {
        //       trigger: item,
        //       start: "top 70%",
        //       end: "bottom 30%",
        //       scrub: true,
        //     },
        //   }
        // )
        gsap.fromTo(line,
        { 
          scaleY: 0 
        },
        {
          scaleY: 1,
          // scrollTrigger: {
          //   trigger: item,
          //   scrub: true,
          // },
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
            toggleClass: {
              targets: [item, right], // 👈 both li + right
              className: "active",
            },
          },
        }
      )
      })
    }, [])
    // onscroll straegic section aniamtion - ends


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
                <p className="count-txt">Projects Delivered</p>
              </li>
              <li className="bg-white">
                <p className="count">
                  <span className="num">8</span>
                  <span className="icon">+</span>
                </p>
                <p className="count-txt"> Countries Served</p>
              </li>
            </ul>
          </div>
          <div className="inside-intro-title">
            <h1>About Us</h1>
            <p className="inside-sub-txt">Making a Mark in Dubai Since 20+ Years</p>
            {/* <p className="inside-sub-txt txt-med">Partnering with UAE Businesses since 2003</p> */}
          </div>
          <div className="inside-intro-txt">
            <p>emQube is the exponential power of 3Ms - men & women, minds, and methods.  Business Knowledge, Technology Depth, and Visual Design are our core strengths. We embarked in 2003 on a journey in Dubai to leverage our passion and skill to grow businesses. Over the past 20+ years, <span className="txt-med">Powered by Thought</span>, we have have been developing websites, building software systems, and creating social media content that accelerates profitable growth.</p>
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
                <p className="count-txt">Year of Team<br /> Experience</p>
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
                  y: ".about-step-wrapper", // target section class or id
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

      {/* Child page strategic choice section starts */}
      <section className="strategic-choice-wrapper about-step-wrapper">
        <div className="container">
          <ul>
            <li>
              <div className="right">
                <span className="count">1</span>
                <span className="line-fill"></span>
                <p className="title">Made in UAE</p>
                <p>We are based in Dubai and have our own in-house team for all the services that we provide. We don’t outsource our work or collaborate with 3rd parties. We have all the skills we need for visual design, web development, content writing, software coding, hosting & deploying, and supporting. We are two teams focused on two different yet complementary line of work.</p>
              </div>
            </li>
            <li>
              <div className="right">
                <span className="count">2</span>
                <span className="line-fill"></span>
                <p className="title">Software Solution House</p>
                <p>Our team builds customized solutions and implements SAAS software for business applications across different domains and industries. The domains are operations, customer service, business intelligence, insurance, logistics. Industries include FMCG, Automobiles, Trading, and Logistics.</p>
              </div>
            </li>
            <li>
              <div className="right">
                <span className="count">3</span>
                <span className="line-fill"></span>
                <p className="title">Digital Content Studio</p>
                <p>Our team creates corporate websites and runs social media campaigns to generate leads and build brand credibility and visibility. Our SEO and Digital Ads service help generate leads for different industries including Logistics, Trading, Services.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Child page strategic choice section ends */}

      {/* about us calues section starts */}
      <section className="abt-values-wrapper">
        <div className="container">
          <div className="values-left">
            <h2>Values</h2>
          </div>
          <div className="values-right">
            <ul className="value-list">
              <li>
                <div className="green-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="62" height="59" viewBox="0 0 62 59" fill="none" class="__web-inspector-hide-shortcut__">
                    <path d="M54.9286 25.8879C55.0923 25.909 55.2378 26.0032 55.3231 26.1438C55.5306 26.4836 55.4904 26.8312 55.1502 27.0481C54.2024 27.6533 53.1903 28.1361 52.203 28.6692C50.5856 29.5528 48.9812 30.4616 47.3924 31.3957C47.574 31.7858 47.8086 32.2389 48.0204 32.6145C49.7945 35.7617 51.3486 39.0717 53.1434 42.2024C53.9902 41.8359 54.8663 41.3615 55.702 40.9504C56.6873 40.4762 57.6753 40.0076 58.6659 39.5442C59.2304 39.2738 60.6123 38.3666 61.1463 38.8186C61.3795 39.0163 61.4981 39.5896 61.2059 39.7688C60.5618 40.1623 59.8238 40.4679 59.1375 40.7913L55.744 42.4192C55.0609 42.7457 54.1598 43.2591 53.4852 43.5325C53.282 43.6151 53.0616 43.6494 52.8426 43.6331C52.4574 43.5998 52.3001 43.42 52.0721 43.1526C50.0862 44.3128 49.1747 44.4933 47.4627 46.1243C48.0274 47.9216 47.361 49.8769 45.3329 50.2082C44.8933 50.2799 44.4568 50.223 44.0164 50.1819C44.0153 50.7279 44.0424 51.2584 43.8485 51.7776C43.1851 53.5551 41.5107 53.8892 39.8768 53.3186C39.7957 55.6761 37.625 57.1191 35.5594 55.9397C35.5165 56.5973 35.4311 57.0886 35.0164 57.5999C33.4803 59.4931 31.7927 58.6077 30.0848 57.6067C29.3383 57.1696 28.6541 56.9904 27.9295 56.4348C26.5125 57.3726 25.0158 57.434 23.9881 55.845C23.9051 55.7166 23.7565 55.2997 23.6522 55.2102C23.4797 55.0638 23.0248 55.5126 22.8055 55.4836C22.3397 55.5226 22.031 55.502 21.5848 55.3499C20.7888 55.0854 20.1697 54.453 19.9227 53.6516C19.8779 53.5094 19.8036 53.1258 19.7606 53.0315C19.4978 53.0153 18.9805 53.0999 18.7284 53.0286C17.2574 52.6083 16.5662 51.6953 16.5682 50.1838C14.287 50.2797 12.9098 47.9363 14.3416 46.0452L13.6551 45.6663C12.4608 44.9158 10.9067 44.0816 9.65024 43.3928C9.0382 44.1827 8.61153 44.0721 7.78696 43.6672C6.53697 43.0532 5.30014 42.4238 4.03989 41.8303C3.24331 41.4538 2.44898 41.0726 1.65707 40.6868C1.18203 40.4563 0.73228 40.2443 0.268401 39.9709C-0.25988 39.7741 0.0796775 38.6847 0.531096 38.7825C1.31639 38.9538 2.4968 39.6496 3.23129 39.9924C4.3772 40.5198 5.51638 41.0624 6.64828 41.6194C7.2531 41.9152 7.98454 42.2537 8.55453 42.5969C10.4652 38.9786 12.1638 35.1949 14.0457 31.6047C11.4761 30.1042 8.82473 28.7212 6.22348 27.2766C5.44037 26.8416 5.8221 25.5664 6.98422 26.1692C9.1717 27.3304 11.3373 28.5326 13.4793 29.7756C14.0108 30.0789 14.6286 30.3668 15.1444 30.6926C15.3274 30.8084 15.4211 31.1599 15.4872 31.3684C16.3503 31.7844 17.3097 32.249 18.2469 32.4651C18.926 32.6216 19.7877 32.5406 20.4745 32.5715C22.234 32.6507 25.4676 32.4523 27.0819 32.8166C28.4282 31.9786 28.6282 31.9999 30.1756 31.7766C33.0355 31.3641 35.9809 31.4761 38.8202 31.9905C39.9056 32.1871 41.1156 32.7481 42.1873 33.0852C43.4713 32.8049 44.5045 32.1272 45.6454 31.511C46.1413 31.2429 45.7934 30.7332 46.3045 30.4514C48.2759 29.3649 50.201 28.2028 52.1932 27.1526C52.9768 26.7396 53.7391 26.2731 54.5448 25.9045C54.6542 25.8929 54.8227 25.8735 54.9286 25.8879ZM11.4012 39.8323C11.0489 40.5269 10.6215 41.5388 10.2752 42.1565C10.9699 42.5825 11.5661 42.9567 12.2782 43.3538C13.0691 43.795 14.4608 44.4878 15.1668 45.0139C15.7953 44.2961 16.3534 43.7212 17.37 43.6438C18.5236 43.5565 19.5007 44.3517 20.0545 45.3069C21.6485 43.3517 24.4793 44.2319 24.8133 46.6106C26.2317 45.8649 27.5133 46.2438 28.3426 47.679C28.6775 48.2587 28.6691 49.0169 28.4637 49.6477C28.4541 49.6771 28.4439 49.7062 28.4334 49.7356C29.9532 50.0406 31.0801 51.1519 30.787 52.8245C30.6362 53.6839 29.553 54.7743 28.95 55.4163C29.8765 56.0029 32.0349 57.551 33.1395 57.3499C34.1959 57.1576 34.2845 56.2562 34.1288 55.3411L34.0799 55.2942C33.5716 54.8097 31.0709 53.6977 31.0663 53.1252C31.0648 52.9325 31.1131 52.6855 31.2655 52.5549C31.4037 52.4366 31.5863 52.4315 31.7577 52.4573C32.2176 52.5259 32.6742 52.8826 33.0633 53.1243C33.919 53.6557 35.8696 54.9381 36.8133 55.0803C37.1912 55.1371 37.5945 55.0564 37.912 54.8401C38.2643 54.5999 38.5644 54.2767 38.6405 53.8459C38.7092 53.4563 38.6303 53.0159 38.3963 52.6926C37.9959 52.1405 34.8534 50.4909 34.0702 50.0481C33.6108 49.7885 32.9915 49.515 32.6346 49.1174C32.523 48.9932 32.4623 48.8406 32.4823 48.6721C32.5025 48.5017 32.6078 48.3459 32.744 48.2454C32.8953 48.1338 33.0876 48.0801 33.2743 48.1116C33.6686 48.1784 36.7838 50.1513 37.4725 50.5442C38.5296 51.1272 39.6152 51.8263 40.7137 52.2707C41.4263 52.5587 42.3536 52.0378 42.6532 51.3928C43.4147 49.7519 41.3277 48.8867 40.2918 48.2864L36.7586 46.2483C36.2534 45.9581 34.9363 45.4398 35.3387 44.7073C35.4188 44.5588 35.5586 44.4509 35.7225 44.4114C36.5886 44.2095 43.2067 49.0236 44.7977 49.0432C45.319 49.0495 45.7894 48.696 46.0692 48.2795C46.3146 47.9146 46.4233 47.4918 46.3309 47.0569C46.2116 46.4961 45.8136 46.0991 45.3446 45.801C44.4317 45.2217 43.4598 44.7067 42.5291 44.1516L36.0135 40.2952C35.2589 39.8577 34.1867 39.1245 33.4393 38.7981C33.0315 38.6201 31.2622 38.6437 30.8416 38.7717C28.6453 39.4416 27.2243 42.1725 24.6913 42.1936C23.901 42.1999 23.2618 42.0396 22.5731 41.6057C21.9743 41.2331 21.551 40.6343 21.3993 39.9456C21.2927 39.4531 21.2933 38.7989 21.5907 38.3684C22.2579 37.4035 23.2171 36.6863 24.0516 35.8743C24.6838 35.2648 25.2886 34.6089 25.9266 34.0081C24.7738 33.9806 23.5209 33.9024 22.3817 33.9094C19.5782 33.9267 17.5384 34.0374 15.0038 32.5627L11.4012 39.8323ZM28.0018 50.969C27.3718 51.2892 25.1412 53.7968 24.7987 54.4631C25.0556 55.2936 25.44 55.8313 26.3827 55.8176C27.268 55.5726 28.8538 53.8241 29.3446 53.0247C30.0031 51.952 29.1684 51.0054 28.0018 50.969ZM25.825 47.5022C24.6454 47.8398 22.687 50.5843 21.7469 51.5403C21.5592 51.7314 21.2943 52.0722 21.1444 52.304C20.6851 53.3461 21.5252 54.2168 22.5409 54.177C23.42 53.9921 23.9187 53.2689 24.5038 52.6379C25.0651 52.0324 25.5986 51.3973 26.161 50.7922C26.7219 50.1461 27.5421 49.521 27.328 48.5725C27.2509 48.2198 27.036 47.9128 26.7313 47.719C26.465 47.552 26.1365 47.4885 25.825 47.5022ZM21.8543 45.4934C21.6664 45.5814 21.3886 45.7238 21.2459 45.8655C20.5273 46.5824 18.1157 49.2111 17.7635 49.9836C17.7767 50.5196 17.8301 50.9686 18.243 51.3704C18.4983 51.6179 18.8418 51.7536 19.1971 51.7473C19.3212 51.7442 19.4167 51.7322 19.5379 51.7053C20.3661 51.3311 23.2706 48.0038 23.6688 47.1282C23.404 46.1103 23.0442 45.4667 21.8543 45.4934ZM17.2245 44.967C16.4967 45.3209 15.4197 46.4891 15.1092 47.2454C14.7577 48.1017 15.7972 49.1533 16.703 48.8352C17.3838 48.2527 18.5305 47.1279 18.953 46.3665C18.6768 45.3683 18.3172 44.904 17.2245 44.967ZM46.3543 32.594C45.6607 32.9509 44.8787 33.3693 44.2274 33.7405C43.2172 34.3161 42.1613 34.5579 41.0506 34.0872C38.2428 32.8966 35.5189 32.7506 32.4989 32.9309C31.5537 32.9873 29.4007 33.1737 28.4354 33.5686C26.4882 35.0933 24.8469 37.0704 22.9383 38.6702C22.077 39.3921 23.0295 40.6677 23.8983 40.8284C26.5851 41.3251 28.4896 37.6612 30.8368 37.4582C33.7593 37.2306 33.8993 37.3697 36.3036 38.9153C37.0056 39.3689 37.7156 39.8106 38.4325 40.2405L43.7879 43.4319C44.6508 43.9364 45.8523 44.5621 46.6502 45.0803C48.0018 43.7591 49.8928 42.8189 51.5789 41.9768C50.7523 40.7922 46.8007 32.8505 46.3543 32.594Z" fill="white"/>
                    <path d="M29.8018 8.68522e-05C30.1517 -0.0093381 32.5969 0.751119 33.165 0.913173L44.6729 4.25106C44.6474 6.37453 44.6427 8.49859 44.6572 10.6222C44.6463 14.3269 44.661 16.3875 43.2295 19.921C42.7463 21.1466 42.1295 22.3154 41.3896 23.4054C38.7345 27.2746 34.6454 29.9249 30.0293 30.7686C26.8525 30.4168 23.1709 28.3867 20.8887 26.1934C19.521 24.8742 18.3621 23.3544 17.4531 21.6856C15.2767 17.7105 15.1091 14.5545 15.1055 10.1964C15.118 8.21446 15.114 6.23195 15.0938 4.25009C16.9223 3.79907 18.919 3.16061 20.7256 2.62118C23.7449 1.72657 26.7704 0.852725 29.8018 8.68522e-05ZM29.7227 1.41122C25.286 2.6344 20.8632 3.9088 16.4561 5.23446C16.3847 6.69358 16.4294 8.35786 16.4189 9.83993C16.4092 11.2287 16.4 13.0165 16.5391 14.3868C16.9202 18.1651 18.503 21.7218 21.0547 24.5343C22.941 26.6178 25.4607 28.1214 28.1035 29.0343C28.6651 29.2282 29.5946 29.5543 30.1777 29.4659C34.5005 28.5165 38.2658 25.8815 40.6387 22.1456C44.2771 16.4224 43.1645 11.5677 43.374 5.2745C40.6671 4.40796 37.7765 3.61968 35.0527 2.81454C34.3005 2.59215 30.2222 1.37649 29.7227 1.41122Z" fill="white"/>
                    <path d="M38.1104 8.78906C38.5064 8.79759 38.8597 8.95027 38.9046 9.40366C38.9282 9.64275 38.6712 9.94989 38.5117 10.117C37.7247 10.9415 36.8942 11.7256 36.0808 12.5243L32.3756 16.1951C30.9955 17.5478 29.6636 18.9517 28.2359 20.2576C28.0258 20.4497 27.6661 20.4911 27.4395 20.3053C26.8534 19.8246 26.3263 19.2505 25.7911 18.7111C25.1042 18.0133 24.3977 17.335 23.6725 16.6772C23.3563 16.3934 23.0828 16.2054 23.035 15.7503C22.9476 15.0555 23.6267 14.8141 24.127 15.2107C24.5068 15.5117 24.8506 15.9093 25.1977 16.2502L27.8363 18.8505C30.8561 15.5752 34.3474 12.4548 37.4605 9.25219C37.6536 9.05349 37.8443 8.87891 38.1104 8.78906Z" fill="white"/>
                  </svg>
                </div>
                <div className="white-box">
                  <p className="value-title">Integrity</p>
                  <p>To uphold integrity towards all in intention and action</p>
                </div>
              </li>
              <li>
                <div className="green-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="37" viewBox="0 0 70 37" fill="none">
                    <path d="M23.9199 4.12797C24.5775 4.07059 25.7409 4.38701 26.4121 4.52739C27.5527 4.76693 28.6977 4.98719 29.8457 5.18852L32.3593 5.60942C35.1848 6.07892 35.4568 6.37555 37.082 8.68754L39.2773 11.7832C39.6628 12.332 40.1726 13.1378 40.6035 13.6075C41.9856 13.1427 44.9913 11.6085 46.2021 11.6592C46.8609 11.6869 47.4982 11.9557 47.9453 12.4454C48.4237 12.9687 48.6409 13.6059 48.5976 14.3125C48.5623 14.8893 48.3401 15.589 47.8886 15.9766C47.6823 16.1535 47.4504 16.3079 47.2148 16.4424C46.3343 16.9448 45.3869 17.3478 44.4843 17.8116C43.6909 18.2277 42.8928 18.6365 42.0918 19.0381C40.9498 19.6094 39.781 20.2263 38.5185 19.3399C37.9316 18.9276 37.3519 18.1079 36.8769 17.5372L35.332 15.7012C34.9782 15.9765 34.4808 16.4886 34.1435 16.8164C33.49 17.4505 32.8286 18.0763 32.1601 18.6944C31.7998 19.0301 31.3723 19.4552 30.9921 19.7481C32.4206 21.0343 33.9377 22.2023 35.3701 23.4844C35.639 23.6869 35.9277 23.972 36.1992 24.1612C37.5073 25.0729 37.6341 27.1356 36.4824 28.2237C35.934 28.7417 35.3631 29.2722 34.8134 29.8038C33.3194 31.2621 31.8083 32.7033 30.2802 34.126C29.428 34.9237 28.5086 35.9062 27.5869 36.5987C27.3597 36.7693 26.6348 36.8748 26.3349 36.877C25.6059 36.8876 24.9037 36.6009 24.3906 36.0831C23.8376 35.5277 23.6063 34.8319 23.5878 34.0567C23.5559 32.7126 24.4695 32.1108 25.3349 31.2588L28.2187 28.4239C28.6728 27.962 29.4553 27.2205 29.9501 26.8116C29.648 26.6153 28.978 26.0369 28.6601 25.7832C27.9837 25.2521 27.2987 24.7303 26.6074 24.2188C26.1609 24.9195 25.1966 26.0468 24.6386 26.7725C23.9022 27.7303 22.9475 28.9295 22.1259 29.8116C21.9993 29.9466 20.9819 30.4438 20.7353 30.5713L18.5332 31.7217C16.0844 32.9627 13.649 34.2315 11.2285 35.5264C10.5195 35.9007 9.69107 35.9782 8.92476 35.7432C7.57437 35.3187 6.7976 33.8058 7.24702 32.4502C7.63847 31.27 8.30643 31.0251 9.3271 30.4834C10.1088 30.0648 10.8963 29.6566 11.6884 29.2579L18.2871 25.836C18.5537 25.4066 18.8082 24.9254 19.0673 24.4854C19.9166 23.0461 20.7521 21.5987 21.5722 20.1426C21.217 19.1835 21.0958 18.2766 21.3027 17.2588C21.5442 16.071 22.2989 15.5279 23.164 14.7745L25.3886 12.8711C26.0916 12.2652 27.8288 10.6568 28.5214 10.2227C27.2653 9.87037 26.1691 9.7031 24.9892 9.3936C24.4911 9.59908 23.8539 9.96945 23.3759 10.2344L21.1162 11.4805C20.4659 11.837 19.7302 12.3256 18.9882 12.4346C18.3508 12.5282 17.6673 12.3417 17.1552 11.9541C16.6501 11.5718 16.2884 10.9884 16.2099 10.3555C16.1285 9.69867 16.3451 8.95075 16.7578 8.43364C17.1783 7.90826 22.3382 4.74485 23.122 4.35844C23.3928 4.22495 23.6203 4.16118 23.9199 4.12797ZM23.8691 5.18461C23.1227 5.50604 22.7667 5.78223 22.0859 6.20219C21.2002 6.73788 20.3224 7.28671 19.4531 7.84868C18.9134 8.19032 18.3022 8.48633 17.8027 8.88285C17.61 9.03586 17.4509 9.20332 17.3574 9.43461C17.2241 9.76475 17.2262 10.2987 17.373 10.6221C17.5217 10.9496 17.8278 11.1794 18.1601 11.2998C18.6539 11.4788 19.0672 11.3893 19.5273 11.169C20.5005 10.7029 24.2095 8.3947 24.8115 8.34965C25.4392 8.30288 26.6523 8.66444 27.3056 8.80668L29.0146 9.1768C29.3514 9.24687 30.0172 9.28215 30.1543 9.61528C30.3809 10.168 29.3122 10.8278 28.9257 11.1661L25.0195 14.5899C24.3122 15.2026 23.0804 16.0683 22.5644 16.7969C22.0689 17.4967 22.0073 19.1806 22.7128 19.7784C25.4763 22.0183 28.3616 24.1802 31.1201 26.4258C31.2029 26.4935 31.2212 26.915 31.1435 27.0059C29.2353 28.9739 27.2177 30.8674 25.2539 32.7881C24.7528 33.2784 24.4961 33.8101 24.6562 34.5118C24.7603 34.961 25.0403 35.3501 25.4335 35.5909C26.054 35.972 26.8048 35.9166 27.3652 35.4454C28.0952 34.8319 28.749 34.129 29.4433 33.4756C30.2369 32.7077 31.0834 31.9696 31.8603 31.1944C32.9044 30.1542 34.0113 29.2039 35.0439 28.1592C35.6055 27.5911 36.2873 27.215 36.2519 26.3331C36.2336 25.8809 36.1401 25.4901 35.7861 25.1729C35.2794 24.7187 34.7226 24.2977 34.1972 23.8623L31.2597 21.3975C30.7923 21.0116 30.2632 20.6462 29.8369 20.2168C29.7385 20.1178 29.6371 20.0082 29.6289 19.8614C29.6165 19.6411 29.7851 19.4743 29.9287 19.3301C30.2657 18.9917 30.6427 18.6905 30.9902 18.3623C31.5981 17.7882 32.1858 17.1918 32.8017 16.626C33.2477 16.2163 33.7366 15.829 34.1445 15.3819C34.3711 15.1334 34.8502 14.2517 35.1953 14.2549C35.4433 14.2573 35.7051 14.5285 35.8593 14.7012C36.5748 15.5026 37.2724 16.3386 37.955 17.168C38.2772 17.5594 38.5794 18.0325 38.9589 18.3672C39.185 18.5668 39.4556 18.7493 39.7656 18.7686C40.0384 18.7854 40.3211 18.7214 40.5732 18.6211C41.4133 18.2872 42.2185 17.7757 43.0263 17.3672C43.8029 16.9745 46.6308 15.7027 47.0996 15.2725C47.3978 14.9989 47.584 14.6224 47.5986 14.2159C47.6126 13.8199 47.4632 13.4582 47.1894 13.1739C46.9024 12.8757 46.4958 12.6709 46.0781 12.6563C45.6254 12.6407 42.4622 14.006 41.7021 14.3018C41.3081 14.4553 40.8276 14.7009 40.3984 14.6895C40.2198 14.6847 40.0866 14.5832 39.9648 14.462C39.5866 14.0841 39.279 13.5509 38.9687 13.1133L36.623 9.83207C35.9446 8.87578 35.1614 7.46708 34.0263 7.03422C33.4981 6.83289 32.6871 6.75028 32.1132 6.65532C31.2503 6.51195 30.3886 6.36147 29.5283 6.20317C28.3938 5.99069 27.2609 5.76911 26.1298 5.5391C25.5562 5.42146 24.401 5.12031 23.8691 5.18461ZM22.2617 20.8946C21.4671 22.2522 20.7452 23.6498 19.9697 25.0186C19.7056 25.4846 19.4421 26.0864 19.0898 26.4873C18.746 26.8776 15.9358 28.2064 15.2988 28.5303C14.1114 29.1342 12.9458 29.7889 11.7646 30.4063C10.8902 30.8632 9.9559 31.2829 9.12105 31.8077C8.45818 32.2245 8.00288 32.8265 8.21382 33.6495C8.32646 34.0859 8.61202 34.4593 9.00386 34.6827C9.82211 35.1543 10.5686 34.6457 11.3046 34.2637L18.2011 30.6641C18.7771 30.3674 21.2597 29.2058 21.6103 28.8389C22.7198 27.6745 23.8662 26.0388 24.8837 24.7598C25.1513 24.4132 25.5853 23.863 25.9023 23.5938C24.9562 23.0322 23.8401 21.9066 22.8759 21.293C22.7092 21.1869 22.4254 20.9712 22.2617 20.8946Z" fill="white"/>
                    <path d="M41.0469 0.0327729C43.6694 -0.273459 46.0454 1.60061 46.3584 4.22223C46.6713 6.844 44.803 9.22496 42.1817 9.54449C39.5517 9.865 37.1608 7.98896 36.8467 5.35797C36.5327 2.72683 38.4151 0.340212 41.0469 0.0327729ZM45.295 4.39019C45.0656 2.34432 43.2184 0.873445 41.1729 1.10699C39.1339 1.34009 37.6681 3.17972 37.8965 5.2193C38.1249 7.2589 39.962 8.7284 42.002 8.50445C44.0487 8.27959 45.5242 6.43613 45.295 4.39019Z" fill="white"/>
                    <path d="M56.1681 14.7015C61.8391 14.4934 66.354 19.5544 65.8954 25.0193C65.8755 25.257 65.8687 25.4753 65.8381 25.7142C66.3315 25.417 66.7446 24.9694 67.2672 24.7183C67.457 24.6269 67.7083 24.5473 67.913 24.6316C68.0399 24.6839 68.1253 24.794 68.1715 24.921C68.2221 25.0597 68.2229 25.2353 68.1499 25.3668C68 25.6376 66.0988 26.8985 65.732 27.1112C65.5668 27.2068 65.383 27.2965 65.1957 27.3394C64.997 27.385 64.7988 27.2682 64.6374 27.1635C64.3661 26.9877 62.6806 25.4957 62.6402 25.2404C62.6135 25.0686 62.6462 24.8378 62.751 24.6956C62.8088 24.6178 62.8852 24.5716 62.9812 24.5591C63.559 24.4835 64.3903 25.4768 64.8072 25.827C65.0399 24.3772 64.8391 23.1828 64.4523 21.8023C62.3269 15.1637 53.6228 13.4993 49.6768 19.4624C49.4581 19.793 48.733 21.1952 48.5631 21.3095C48.2766 21.388 47.998 21.2717 47.7148 21.1852C48.2205 19.8422 48.7402 18.7367 49.7201 17.6869C51.5381 15.7387 53.5489 14.8332 56.1681 14.7015Z" fill="white"/>
                    <path d="M64.2263 27.7991C66.3177 27.5154 63.4922 30.6968 63.0468 31.1464C61.7825 32.4473 60.1729 33.3602 58.4076 33.7775C57.0387 34.1066 55.909 34.07 54.5087 34.076L50.5449 34.0688L36.1511 34.0845C35.7634 34.0934 35.4124 33.958 35.3987 33.4875C35.3858 33.043 35.829 32.9814 36.1817 32.9755C36.8209 32.9649 37.4727 32.9687 38.119 32.9683L42.9485 32.9615L52.5676 32.9679C53.9173 32.9657 56.545 33.0528 57.7512 32.8244C58.9909 32.5845 60.1627 32.0741 61.183 31.3294C62.0156 30.7159 62.7738 29.9618 63.3623 29.1049C63.6345 28.7083 63.8438 28.1642 64.1932 27.8305L64.2263 27.7991Z" fill="white"/>
                    <path d="M4.10995 18.4829L13.1284 18.4808L15.936 18.4937C16.4472 18.4966 16.9596 18.4911 17.4699 18.5185C17.7704 18.5347 17.9915 18.7089 17.992 19.0253C17.9927 19.1868 17.9285 19.3417 17.8138 19.4554C17.5514 19.7199 16.4449 19.646 16.0467 19.645L13.8926 19.6409L4.99289 19.6498C3.95578 19.6522 2.91868 19.6475 1.88167 19.6358C1.49276 19.6316 0.452816 19.7024 0.192002 19.4846C0.0792781 19.3913 0.0102429 19.2554 0.00136934 19.1093C-0.0510652 18.2825 1.41655 18.4925 1.96459 18.4928L4.10995 18.4829Z" fill="white"/>
                    <path d="M47.803 22.0274C48.4573 22.0248 48.9753 22.6645 49.523 22.9886C49.8312 23.1708 50.1297 23.3974 50.4418 23.5899C50.7373 23.772 50.6727 24.4688 50.2838 24.525C49.6622 24.5742 48.8352 23.8872 48.3278 23.5636C48.4144 23.8808 48.462 24.4252 48.4985 24.7579C48.743 26.9807 50.0303 29.1165 51.8276 30.4346C52.2475 30.7426 52.8699 30.9456 53.1501 31.3973C53.3017 31.6419 53.08 31.8346 52.8711 31.9187C52.4856 31.9242 52.0691 31.9246 51.6879 31.8758C49.0071 29.7704 47.3963 27.1493 47.3611 23.6708C46.9688 23.9902 45.7676 25.1836 45.3134 24.4336C45.0922 24.0093 45.4301 23.7558 45.7324 23.5569C46.3918 23.123 47.0978 22.3348 47.803 22.0274Z" fill="white"/>
                    <path d="M5.66057 13.5896L15.7802 13.5933C17.1062 13.5923 18.5016 13.5278 19.8105 13.6416C20.2001 13.6755 20.3826 14.4551 19.7205 14.7298C19.0398 14.7882 17.9307 14.746 17.2028 14.7488C15.4383 14.76 13.6738 14.7609 11.9093 14.7518L7.42343 14.7524C6.96519 14.7517 6.5095 14.7534 6.04884 14.7519C5.76421 14.7508 5.38659 14.7492 5.26143 14.4254C5.11423 14.0446 5.31743 13.7327 5.66057 13.5896Z" fill="white"/>
                    <path d="M9.0272 23.3613C11.0161 23.2617 13.109 23.4006 15.1051 23.3442C15.3541 23.3372 15.8944 23.3416 16.1026 23.4588C16.2404 23.5381 16.3376 23.6728 16.3694 23.8286C16.4642 24.2949 16.1076 24.3788 15.7446 24.4324C14.3293 24.4446 12.9139 24.4475 11.4985 24.441C10.6675 24.4418 9.81211 24.4532 8.98343 24.4268C8.27359 24.4041 8.09039 23.4994 9.0272 23.3613Z" fill="white"/>
                    <path d="M63.636 32.9959C65.4952 32.9114 67.4325 33.0112 69.2976 32.9768C69.8046 32.9674 70.2283 33.8854 69.2887 34.0858C68.5538 34.0862 63.523 34.1838 63.2055 33.9902C63.0853 33.9172 63.0004 33.8047 62.9703 33.6667C62.941 33.5317 62.9584 33.3101 63.0424 33.195C63.1639 33.0286 63.45 33.018 63.636 32.9959Z" fill="white"/>
                    <path d="M10.4302 8.79426C10.7056 8.7853 12.3094 8.80989 12.4346 8.77486C13.4782 8.48267 14.5257 9.49514 13.3816 9.87824C12.4621 9.92766 11.5364 9.88991 10.6179 9.88537C9.80757 9.88133 9.67689 8.95182 10.4302 8.79426Z" fill="white"/>
                  </svg>
                </div>
                <div className="white-box">
                  <p className="value-title">Agility</p>
                  <p>To stay nimble and keep evolving to serve</p>
                </div>
              </li>
              <li>
                <div className="green-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="49" viewBox="0 0 59 49" fill="none">
                    <path d="M28.9199 0.0337063C29.485 -0.0355908 30.0581 0.00217737 30.6093 0.145034C31.7276 0.438084 32.6848 1.16199 33.2704 2.15871C33.842 3.14174 33.967 4.22017 33.6855 5.31398C34.4497 5.26658 35.8668 5.31925 36.7021 5.31984L43.1933 5.3257L49.8769 5.31398C51.038 5.31001 52.2022 5.29827 53.3632 5.31105C53.9781 5.31816 54.394 6.05331 53.8925 6.53371C53.7638 6.65888 53.597 6.73804 53.4189 6.75929C52.7882 6.82998 51.6459 6.80448 50.9931 6.80812C49.3564 6.82331 47.7187 6.82208 46.082 6.80324L32.8906 6.7964C32.5681 7.25392 32.3231 7.42065 31.8808 7.74562C31.8116 10.3356 31.8768 13.2834 31.8769 15.896L31.8759 32.2349C31.8734 34.9277 31.9636 38.1527 31.8329 40.7896C33.616 40.8486 35.4458 40.8 37.2216 40.8032C38.6769 40.8059 38.8726 40.9418 38.8447 42.4605C38.8366 42.9097 38.8463 43.4238 38.8554 43.8784L40.8456 43.8657C41.9222 43.856 43.0209 43.7293 43.871 44.5571C44.3729 45.0408 44.661 45.7046 44.6718 46.4019C44.6777 47.4518 43.7716 48.5209 42.7802 48.645C41.5472 48.7996 40.0095 48.7157 38.7587 48.7173L29.8662 48.7183L20.7255 48.7124L18.0156 48.7193C16.9548 48.7209 15.9468 48.8434 15.1269 48.0161C14.12 47.0005 14.1962 45.538 15.2089 44.5552C15.4959 44.2782 15.8501 44.0804 16.2363 43.98C16.9289 43.7981 19.4324 43.8712 20.289 43.8755C20.3203 40.6943 19.8649 40.8041 23.122 40.7837C24.4788 40.7746 25.8356 40.7795 27.1923 40.7993C27.1297 39.7316 27.1693 38.2261 27.1669 37.1245C27.1589 34.5006 27.1663 31.877 27.1894 29.2534L27.1621 7.71242C26.7703 7.39993 26.4427 7.12897 26.0722 6.7925C21.4495 6.84408 16.6763 6.82439 12.0439 6.80812L8.02728 6.79738C7.26257 6.80119 6.5031 6.80931 5.73334 6.8091C5.33666 6.80899 4.96058 6.42069 4.91303 6.04054C4.85951 5.61227 5.56763 5.34341 5.92768 5.33058C6.72381 5.30231 7.53672 5.32249 8.33881 5.32668L12.4736 5.32082C16.6968 5.31319 21.1273 5.2514 25.3388 5.31007C25.3304 5.26944 25.3227 5.22804 25.3163 5.18703C24.9054 2.59687 26.2816 0.463102 28.9199 0.0337063ZM33.7997 45.2739C28.2364 45.2788 22.5664 45.2212 17.0126 45.2974C16.6362 45.3151 16.419 45.3352 16.1288 45.6323C15.6665 46.1064 15.8193 46.7441 16.2871 47.1392C16.4564 47.2824 16.7192 47.2844 16.9306 47.2984C17.8984 47.3155 18.8737 47.2996 19.8427 47.3023L25.9746 47.3081L42.2519 47.312C43.4855 47.0651 43.6026 45.9542 42.5751 45.3325C41.8251 45.2456 40.2756 45.2751 39.4677 45.273L33.7997 45.2739ZM28.6249 8.40578C28.6702 9.21667 28.642 10.1388 28.6376 10.9644L28.623 15.3179L28.6142 31.4653L28.6171 38.7925C28.6131 39.7678 28.705 41.1112 28.5507 42.0415C27.9575 42.3953 22.8791 42.2199 21.7802 42.2017C21.7802 42.7404 21.7717 43.2989 21.7822 43.8355C22.7673 43.9085 24.0443 43.8737 25.0507 43.8726L30.6171 43.8696C32.8628 43.8611 35.109 43.8653 37.3544 43.8814L37.3486 42.2075L33.2714 42.2251C32.624 42.2278 30.9546 42.3447 30.4912 41.9722C30.3306 41.1207 30.4182 39.359 30.413 38.4126C30.3953 35.5886 30.3971 32.764 30.4179 29.94L30.4081 12.1148C30.4141 10.9058 30.3718 9.62399 30.3925 8.43214C29.7266 8.48126 29.2983 8.51921 28.6249 8.40578ZM29.122 1.43507C27.5648 1.66071 26.4891 3.11186 26.7255 4.6675C26.9621 6.22317 28.4206 7.289 29.9746 7.04152C31.5131 6.79641 32.5662 5.3552 32.332 3.81496C32.0977 2.27472 30.6639 1.21171 29.122 1.43507Z" fill="white"/>
                    <path d="M48.184 7.54023C48.7991 7.46937 49.0636 7.48755 49.3422 8.11054C49.7646 9.0582 50.1502 10.0228 50.557 10.9777L53.4691 17.9201L55.4145 22.5187C55.8353 23.4989 56.4378 24.834 56.7738 25.8391C58.5818 25.8752 59.411 25.6602 58.8061 28.0168C58.5221 29.1221 57.9727 30.0635 57.1986 30.9074C55.0536 33.2446 52.1154 34.1556 49.0111 34.3137L48.9047 34.3166C45.8239 34.3632 42.6069 33.4971 40.3217 31.3195C39.1231 30.1436 38.1903 28.5974 38.143 26.8791C38.1194 26.0094 38.5738 25.8236 39.3422 25.8391C39.6369 25.8451 39.9611 25.8395 40.2553 25.842C40.7073 24.481 41.5004 22.8455 42.0678 21.5119L44.8822 14.8322C45.8613 12.5616 46.7691 10.2562 47.7455 7.98456C47.8454 7.75244 47.9821 7.66579 48.184 7.54023ZM39.5111 27.2853C41.193 33.5464 50.8076 34.3961 55.3158 30.759C56.5516 29.6514 57.1051 28.9294 57.5775 27.2873L39.5111 27.2853ZM48.4135 9.85566C47.8665 11.5724 46.9694 13.3832 46.2865 15.0793C45.3815 17.3273 44.4322 19.5781 43.4525 21.7951C42.869 23.115 42.364 24.5081 41.7553 25.8303C44.0544 25.8528 46.3536 25.8563 48.6527 25.841C50.807 25.8456 53.1148 25.8813 55.2621 25.8215C54.3216 23.7129 53.45 21.5715 52.5492 19.4406C51.2185 16.2932 49.9247 13.1155 48.5473 9.98749C48.514 9.91245 48.48 9.89484 48.4135 9.85566Z" fill="white"/>
                    <path d="M10.2066 7.53577C10.8768 7.5246 11.0099 7.66196 11.27 8.27307C12.2332 10.5356 13.1275 12.8433 14.0962 15.1022L17.1382 22.194C17.6284 23.3553 18.2058 24.6595 18.6372 25.8317C19.1689 25.8361 19.8826 25.822 20.3911 25.9049C20.9332 26.4061 20.8552 27.0687 20.6939 27.7301C19.61 32.1729 14.8624 34.161 10.689 34.3141C6.23745 34.3653 0.636739 32.2811 0.0161219 27.0875C-0.15388 25.6634 1.05426 25.8273 2.05323 25.8668C3.50698 22.2328 5.18179 18.4447 6.70655 14.8239L8.42823 10.7672C8.80513 9.85886 9.17288 8.91648 9.58741 8.026C9.73214 7.71534 9.90683 7.63508 10.2066 7.53577ZM1.37257 27.2809C1.77964 28.8809 2.55942 29.9918 3.89503 30.9684C7.60615 33.682 13.5888 33.5813 17.1841 30.7155C18.3756 29.7133 18.9737 28.8167 19.3745 27.2907L1.37257 27.2809ZM10.2983 9.91761C8.5977 13.7733 7.08323 17.8003 5.3755 21.6608C4.76997 23.0296 4.24282 24.4523 3.59327 25.8121C5.85446 25.8427 8.11604 25.8517 10.3775 25.8405L17.1167 25.8326C16.4847 24.3989 10.4485 10.0386 10.2983 9.91761Z" fill="white"/>
                  </svg>
                </div>
                <div className="white-box">
                  <p className="value-title">Equality</p>
                  <p>To treat everyone fairly without discrimination or favour</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* about us calues section ends */}

      {/* about team section starts */}
      <section className="abt-team-wrapper">
        <div className="container">
          <h2><span className="txt-regular">Our Team</span> is Your Team</h2>
          <ul className="team-mem-list">
            <li>
              <a href="#">
                <div class="circle-wrapp">
                  <svg viewBox="0 0 280 280">
                    {/* dotted full circle */}
                    <circle class="dotted-ring" cx="140" cy="140" r="118"></circle>
                    {/* rotating green segment */}
                    {/* <circle class="green-ring" cx="140" cy="140" r="123"></circle> */}
                  </svg>
                </div>
                <div class="circle-wrapp green">
                  <svg viewBox="0 0 280 280">
                    {/* rotating green segment */}
                    <circle class="green-ring" cx="140" cy="140" r="123"></circle>
                  </svg>
                </div>
                <div className="mem-green-shape">
                  {/* <img src="/assets/img/team-mem-ellipse.svg"></img> */}
                </div>
                <div className="team-mem-img">
                  <img src="/assets/img/ms-sir.png" alt="Mohammed Sutarwala"></img>
                </div>
                <div className="team-mem-name">
                  <p>Mohammed Sutarwala</p>
                  <p className="mem-exp-year">XX Years of <br />experience</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="circle-wrapp">
                  <svg viewBox="0 0 280 280">
                    {/* dotted full circle */}
                    <circle class="dotted-ring" cx="140" cy="140" r="118"></circle>
                    {/* rotating green segment */}
                    {/* <circle class="green-ring" cx="140" cy="140" r="123"></circle> */}
                  </svg>
                </div>
                <div class="circle-wrapp green">
                  <svg viewBox="0 0 280 280">
                    {/* rotating green segment */}
                    <circle class="green-ring" cx="140" cy="140" r="123"></circle>
                  </svg>
                </div>
                <div className="mem-green-shape">
                  {/* <img src="/assets/img/team-mem-ellipse.svg"></img> */}
                </div>
                <div className="team-mem-img">
                  <img src="/assets/img/pooja-maam.png" alt="Pooja Shah"></img>
                </div>
                <div className="team-mem-name">
                  <p>Pooja Shah</p>
                  <p className="mem-exp-year">XX Years of <br />experience</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="circle-wrapp">
                  <svg viewBox="0 0 280 280">
                    {/* dotted full circle */}
                    <circle class="dotted-ring" cx="140" cy="140" r="118"></circle>
                    {/* rotating green segment */}
                    {/* <circle class="green-ring" cx="140" cy="140" r="123"></circle> */}
                  </svg>
                </div>
                <div class="circle-wrapp green">
                  <svg viewBox="0 0 280 280">
                    {/* rotating green segment */}
                    <circle class="green-ring" cx="140" cy="140" r="123"></circle>
                  </svg>
                </div>
                <div className="mem-green-shape">
                  {/* <img src="/assets/img/team-mem-ellipse.svg"></img> */}
                </div>
                <div className="team-mem-img">
                  <img src="/assets/img/pooja-maam.png" alt="Sundaram Murugan"></img>
                </div>
                <div className="team-mem-name">
                  <p>Sundaram Murugan</p>
                  <p className="mem-exp-year">XX Years of <br />experience</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="circle-wrapp">
                  <svg viewBox="0 0 280 280">
                    {/* dotted full circle */}
                    <circle class="dotted-ring" cx="140" cy="140" r="118"></circle>
                    {/* rotating green segment */}
                    {/* <circle class="green-ring" cx="140" cy="140" r="123"></circle> */}
                  </svg>
                </div>
                <div class="circle-wrapp green">
                  <svg viewBox="0 0 280 280">
                    {/* rotating green segment */}
                    <circle class="green-ring" cx="140" cy="140" r="123"></circle>
                  </svg>
                </div>
                <div className="mem-green-shape">
                  {/* <img src="/assets/img/team-mem-ellipse.svg"></img> */}
                </div>
                <div className="team-mem-img">
                  <img src="/assets/img/pooja-maam.png" alt="Suryakant Mayekar"></img>
                </div>
                <div className="team-mem-name">
                  <p>Suryakant Mayekar</p>
                  <p className="mem-exp-year">XX Years of <br />experience</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="circle-wrapp">
                  <svg viewBox="0 0 280 280">
                    {/* dotted full circle */}
                    <circle class="dotted-ring" cx="140" cy="140" r="118"></circle>
                    {/* rotating green segment */}
                    {/* <circle class="green-ring" cx="140" cy="140" r="123"></circle> */}
                  </svg>
                </div>
                <div class="circle-wrapp green">
                  <svg viewBox="0 0 280 280">
                    {/* rotating green segment */}
                    <circle class="green-ring" cx="140" cy="140" r="123"></circle>
                  </svg>
                </div>
                <div className="mem-green-shape">
                  {/* <img src="/assets/img/team-mem-ellipse.svg"></img> */}
                </div>
                <div className="team-mem-img">
                  <img src="/assets/img/pooja-maam.png" alt="Abdullah Farman"></img>
                </div>
                <div className="team-mem-name">
                  <p>Abdullah Farman</p>
                  <p className="mem-exp-year">XX Years of <br />experience</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* about team section ends */}

      {/* about bottom section starts */}
      <section className="abt-btm-wrapper">
        <div className="container">
          <div className="emqube-edge-txt">
            <p className="edge-title">The Emqube Edge</p>
            <ul>
              <li>enthusiasm</li>
              <li>experience</li>
              <li>excellence</li>
            </ul>
          </div>
        </div>
      </section>
      {/* about bottom section ends */}

      {/* about emqube info section starts */}
      <section className="abt-emqube-info">
        <div className="container">
          <ul>
            <li>EMQUBE LLC</li>
            <li>Established: 2003</li>
            <li>Trade License: 55</li>
            <li>VAT TRN: 1</li>
            <li>Founder: Mohammed Sutarwala</li>
          </ul>
        </div>
      </section>
      {/* about emqube info section ends */}

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
      <div className={`sticky-buttons ${showTop ? "active" : ""}`}>
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
    <main className="inside-page about-us">
      <Header />
    </main>
  );
}