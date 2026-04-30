import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/assets/css/common.css";
// import "/src/assets/css/home.css";
import "/src/assets/css/inside.css";
import "/src/assets/css/inside-child.css";

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

  const [activeTab, setActiveTab] = useState('custom');

  const [activeAccordion, setActiveAccordion] = useState(null);
  

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

  const accordionItems = [
    {
      question: 'What are the benefits of customized software development?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tellus vitae dolor vestibulum porta in eget arcu.'
    },
    {
      question: 'How long does it take to build a business application?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula nibh vitae libero dictum, at luctus nisl suscipit.'
    },
    {
      question: 'What is a typical project cycle for developing your own application?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod turpis vel leo tincidunt, vitae luctus justo tempor.'
    },
    {
      question: 'What does it cost to build a bespoke software solution?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed libero non purus cursus suscipit ut id enim.'
    },
    {
      question: 'Why do software development projects get delayed?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur sit amet purus ut libero ultrices vehicula.'
    },
    {
      question: 'What are the benefits of a in-house development team?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada.'
    },
    {
      question: 'What are you integration skills with legacy systems?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada arcu et nibh commodo, at egestas nisi vulputate.'
    },
    {
      question: 'What is the cost of maintaining a bespoke software?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet neque et risus placerat molestie eu ut libero.'
    },
    {
      question: 'What hardware do we need to host the software application?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus enim sed felis egestas, quis mattis ipsum viverra.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const slides = [
    {
      key: 1,
      content: (
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
              <p>Region's largest relocation company with services for furniture installation and storage</p>
            </div>
          </div>
        </a>
      )
    },
    {
      key: 2,
      content: (
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
              <img src="/assets/img/ccms-project-img.webp" alt="Emovers"></img>
            </div>
          </div>
        </a>
      )
    },
    {
      key: 3,
      content: (
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
              <img src="/assets/img/insurance-policy-project-img.webp" alt="Emovers"></img>
            </div>
          </div>
        </a>
      )
    }
  ];

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
      if (!isMobile) return; // ⛔ only mobile

      setOpenIndex(prev => (prev === index ? null : index));
    };

  // create collapsible footer menu - ends

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
      <section className="inside-intro-wrapper inside-child-intro-wrapper">
        <div class="container">
          <div class="breadcrumbs" vocab="http://schema.org/" typeof="BreadcrumbList">
            <span><a href="/">Home</a></span>
            <span><span> / </span><a href="/website-development/">Website Development</a></span>
            <span><span> / </span><span class="post post-page current-item">About Website Development</span></span>
          </div>
          <div className="title-wrapp">
            <p className="parent-page-title">Software Development</p>
            <h1><span className="txt-regular">Custom</span> Business Application <br />Development <span className="txt-regular">in Dubai</span></h1>
            <p className="sub-txt">Bespoke Software Solutions Tailored to Your Unique Business Logic</p>
          </div>
          <div className="scroll-down-arrow">
            <a href="#"
              onClick={(e) => {
                e.preventDefault();

                gsap.to(window, {
                  duration: 1,
                  scrollTo: {
                    y: ".intro-highlight-wrapper", // target section class or id
                    offsetY: 50,       // 👈 your offset
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
        </div>
      </section>
      {/* Inside intro section ends */}

      {/* child page intro highlight section starts */}
      <section className="intro-highlight-wrapper slide-up">
        <div className="container">
          <div className="left">
            <p><span className="txt-grey">License Free Applications</span><span className="txt-green">Suited to your exact needs</span></p>
          </div>
          <div className="right">
            <p>When off-the-shelf software isn’t good enough, we design and develop custom business applications that eliminate manual work and solve your specific operational challenges.</p>
          </div>
        </div>
      </section>
      {/* child page intro highlight section ends */}

      {/* Child page strategic choice section starts */}
      <section className="strategic-choice-wrapper">
        <div className="container">
          <ul>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="135" height="117" viewBox="0 0 135 117" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M88.0885 8.33191C96.7099 8.15885 105.422 8.43647 114.049 8.32117C114.843 8.3106 116.619 8.27047 117.274 8.62488C117.31 8.76613 117.338 8.91003 117.358 9.05457C117.489 9.98764 117.434 11.9981 117.435 13.0419L117.437 20.3866L117.43 33.0126C117.432 35.2873 117.601 39.1037 117.216 41.4188C117.165 41.7343 116.089 41.7503 115.743 41.7665L94.608 41.7909C93.3066 41.7898 87.5826 41.9016 86.5895 41.6639C85.9791 40.777 86.1786 36.3074 86.1803 34.9784L86.1862 25.9638C86.1894 24.1371 86.0218 9.40488 86.3502 8.71961C86.8833 8.28919 87.3955 8.35564 88.0885 8.33191ZM114.756 31.3446C111.073 31.2704 106.816 31.2462 103.137 31.3319C103.111 33.9591 103.112 36.5866 103.14 39.2138C106.635 39.2316 111.312 39.3392 114.745 39.1561C114.818 36.5529 114.82 33.948 114.756 31.3446ZM100.527 31.3173C96.7707 31.3251 92.6316 31.2382 88.9147 31.3622C88.8718 33.8852 88.8365 36.6879 88.8795 39.2128L100.537 39.2411C100.566 36.6001 100.562 33.9583 100.527 31.3173ZM100.454 20.8749C96.6087 20.8231 92.7636 20.823 88.9186 20.8749C88.8563 23.2949 88.8319 26.3966 88.8991 28.8212C92.7584 28.8481 96.6189 28.854 100.478 28.8388C100.569 26.2162 100.5 23.5031 100.454 20.8749ZM114.743 20.9022C111.233 20.7497 106.781 20.8428 103.22 20.8866C103.061 23.3095 103.131 26.3002 103.155 28.747C106.238 28.9598 109.478 28.7408 112.577 28.8163C113.286 28.8335 114.033 28.8135 114.741 28.7821C114.804 26.0823 114.785 23.6054 114.743 20.9022ZM114.797 10.9833C112.392 10.8142 109.408 10.9089 106.964 10.9305C103.571 10.9716 100.176 10.9722 96.7809 10.9315L88.9352 10.9823C88.8765 13.4134 88.8601 15.8456 88.8873 18.2772C91.6742 18.444 94.893 18.3368 97.7125 18.3202L107.093 18.3427L114.782 18.3309C114.765 15.8819 114.77 13.4323 114.797 10.9833Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M74.3497 0.0279915C78.4421 -0.0388373 82.5562 0.0345652 86.6504 0.0377572L110.027 0.0328744L123.701 0.0250619C125.841 0.0339397 128.14 0.0234414 130.27 0.147132C131.047 0.192515 132.222 0.884656 132.778 1.44108C134.118 2.78128 134.345 4.06426 134.359 5.88444C134.38 8.57441 134.337 11.2474 134.343 13.9274L134.321 37.4362L134.343 47.5924C134.351 50.8509 135.117 56.5917 130.552 57.6256C128.609 58.0658 125.389 57.8655 123.313 57.8649L112.031 57.8727C111.996 60.8359 112.193 64.1079 112.28 67.1081L114.184 67.1237C115.562 67.1119 120.394 66.5623 120.606 68.363C120.69 69.0834 120.015 69.8211 119.174 69.8278C116.649 69.8477 114.121 69.8406 111.594 69.8395H97.1993L87.2491 69.8454C85.6101 69.846 83.9542 69.8645 82.3155 69.8171C81.5967 69.78 81.0422 69.2554 81.0645 68.528C81.1184 66.772 84.0005 67.0884 85.1758 67.0846L89.6329 67.0612C89.8816 64.0056 90.0536 60.9438 90.1475 57.8796C85.7106 57.9731 81.1984 57.7957 76.754 57.8727C74.9507 57.904 72.8737 57.9349 71.3585 56.8356C70.3003 56.0815 69.5993 54.9253 69.421 53.6393C69.2217 52.1915 69.3263 48.136 69.3174 46.5475L69.3106 30.3112L69.3135 13.3444C69.3105 10.5096 69.2571 7.66352 69.3448 4.8317C69.4322 2.00923 71.4812 0.363186 74.1436 0.0445931C74.2472 0.0301426 74.2246 0.029986 74.3497 0.0279915ZM102.551 57.9391C99.2909 57.9023 96.0305 57.9145 92.7715 57.9772C92.5208 60.1596 92.4145 64.8493 92.3526 67.1559C97.7879 67.2981 103.802 67.2647 109.251 67.2116L109.485 67.1559C109.605 66.8844 109.228 59.1269 109.212 58.071C107.449 57.8694 104.419 57.9422 102.551 57.9391ZM131.575 49.7878C127.668 49.7006 123.486 49.7847 119.554 49.7858L98.3282 49.7751L81.3897 49.7839C78.3239 49.7839 75.0472 49.7215 71.9962 49.8112C71.9821 50.6556 71.9468 51.5182 71.9717 52.3688C72.0306 54.3764 72.7132 55.0241 74.6719 55.0485C77.8438 55.088 81.008 55.0524 84.1758 55.0505L102.058 55.0573L120.372 55.0544C122.609 55.0524 124.846 55.0504 127.083 55.0534C128.279 55.055 129.998 55.1966 130.974 54.4235C131.896 52.9676 131.513 51.5828 131.575 49.7878ZM112.232 2.72233L74.1563 2.72135C72.7091 3.13571 71.9829 3.6292 71.9629 5.28092C71.9367 7.44693 71.9753 9.61616 71.9864 11.7829L71.9874 22.6051C71.9999 30.6923 71.8499 39.1151 71.9893 47.1676C74.6064 47.1974 77.1713 47.1358 79.7745 47.1462L129.57 47.1774L131.598 47.1813L131.59 18.0798L131.607 9.25944C131.611 7.73572 131.652 6.17356 131.567 4.65592C131.509 3.63058 130.332 2.81009 129.355 2.7692C127.497 2.69141 125.633 2.71017 123.774 2.70768L112.232 2.72233Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4434 7.82235C24.2603 7.76659 26.317 7.72136 28.1123 7.79208C30.4582 7.88454 30.1355 11.6705 30.1631 13.2638L32.333 14.2227C33.5677 13.6351 35.1296 12.7623 36.543 13.1124C38.2315 13.5308 39.1818 15.8689 39.8848 17.2638C40.3955 18.3362 41.2057 19.7716 40.9102 20.9962C40.6063 22.2549 38.4816 23.2898 37.4268 23.8507C37.4243 24.8027 37.4899 25.7874 37.5381 26.7403C38.4669 27.1503 40.4101 28.0003 40.7422 29.0011C41.1373 30.1929 40.6262 31.5366 40.0772 32.589C37.8975 36.7668 37.155 38.7826 32.2656 36.0616C31.6225 36.4818 30.8533 36.7678 30.1397 37.0645C29.9871 39.5146 30.6175 41.6239 27.5947 42.296C27.3808 42.3141 27.1666 42.3282 26.9522 42.3399C25.3389 42.4299 21.3694 42.7086 20.209 41.5304C19.2889 40.5959 19.5419 38.6318 19.499 37.2686C18.6563 36.6846 18.1542 36.3986 17.1924 36.0567C15.7906 36.5889 14.2521 37.7079 12.5156 37.0431C11.1389 36.1994 9.94565 33.6766 9.28713 32.3321C7.6003 28.8883 9.03506 28.0385 11.9121 26.7325C11.9562 25.8712 11.9496 24.8807 11.961 24.0089C9.63843 22.3556 7.28958 22.094 9.27931 18.1954C9.99793 16.7874 11.105 13.9362 12.6445 13.3067C14.2291 12.6589 15.7985 13.5486 17.2432 14.2599C17.9868 13.9148 18.7228 13.5277 19.4531 13.1534C19.461 12.5362 19.4777 11.8554 19.4844 11.2413C19.5102 8.87861 19.827 8.03512 22.3057 7.82724L22.4434 7.82235ZM27.3965 10.5411C26.4137 10.2719 24.0023 10.4014 22.8672 10.4229C22.6203 10.4549 22.2241 10.452 22.1494 10.6388C21.7357 11.6781 21.976 13.0139 21.7598 14.2745C20.8348 15.442 18.7099 16.6713 17.2979 16.9981C15.9526 16.6948 14.9101 16.0198 13.7022 15.7247C12.6757 16.8692 11.7088 18.9218 11.1231 20.3673C12.3131 21.3176 14.248 22.0315 14.3447 23.7179C14.6433 28.9326 14.4182 27.4528 11.1338 30.1964C11.8135 31.8547 12.4932 33.4864 13.8242 34.7384C15.1689 34.2727 15.9164 33.7399 17.3662 33.3809C18.4068 33.8534 20.4705 34.6698 21.2617 35.4239C22.1132 36.2362 21.9507 38.5046 22.0625 39.7179C23.4 39.9684 25.1972 39.9717 26.5664 39.8702C26.8238 39.8517 27.2876 39.8468 27.3945 39.6475C27.9375 38.6332 27.6473 37.1825 27.8965 35.88C28.7458 34.7278 30.9752 33.8242 32.335 33.4542C33.4466 33.8412 34.5939 34.2271 35.6406 34.7696C36.9022 33.5684 37.6279 31.8708 38.4014 30.3165L38.2969 30.2276C37.1357 29.2601 35.0046 28.5507 35.0586 27.2052C35.1066 26.0187 34.727 23.148 35.6143 22.2423C36.3273 21.5145 37.5606 20.9269 38.3584 20.2852C37.6356 18.5319 36.9813 16.7789 35.4619 15.5763C34.508 16.0489 33.2381 16.7335 32.2276 16.9854C31.2239 16.6342 28.3105 15.3833 27.8877 14.378C27.5954 13.682 27.8697 11.2359 27.3965 10.5411Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9786 19.2206C27.2002 18.7673 30.1834 20.9986 30.6543 24.2138C31.1249 27.4289 28.9062 30.4201 25.6895 30.9071C22.4489 31.3976 19.4266 29.1618 18.9522 25.9227C18.4778 22.6836 20.7328 19.6774 23.9786 19.2206ZM28.0938 24.7245C27.8623 22.9414 26.2334 21.679 24.4463 21.8973C22.6415 22.1181 21.3614 23.7644 21.5948 25.5653C21.8284 27.3665 23.4863 28.6335 25.2881 28.3876C27.072 28.144 28.3251 26.5077 28.0938 24.7245Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.9666 0.0975625C56.4206 0.0938524 60.0512 -0.0555009 61.2567 0.176664C62.1604 0.358011 62.9938 0.791652 63.661 1.42666C64.9625 2.6885 65.1258 4.09403 65.1473 5.79287C65.1807 8.43442 65.1141 11.0585 65.1219 13.7001C65.1634 21.4201 65.1653 29.1403 65.1287 36.8603L65.1014 47.3915C65.1074 50.3625 65.6998 54.2714 63.4549 56.4989C62.937 57.0128 61.7113 57.587 60.9842 57.6317C55.6576 57.9599 50.2586 57.675 44.911 57.7636C44.9279 60.75 45.1802 64.0523 45.4256 67.0185C46.6192 67.04 52.4449 66.7969 53.0457 67.3183C53.3353 67.5695 53.4965 67.9259 53.5184 68.3056C53.541 68.7001 53.4368 69.0995 53.1551 69.3876C52.8325 69.7176 52.3488 69.7407 51.9139 69.7763C50.7037 69.8752 49.4646 69.818 48.2498 69.8124L41.5018 69.7577L23.37 69.7685C22.0725 69.7729 15.4865 70.0734 14.7723 69.5819C14.4479 69.3587 14.2062 68.8787 14.1649 68.495C14.1292 68.1627 14.2299 67.8643 14.4618 67.623C14.7683 67.3041 15.2226 67.1422 15.6502 67.0712C17.2383 66.8077 20.7657 67.0309 22.5496 67.0468C22.8183 63.9588 22.9852 60.8624 23.0516 57.7636L10.702 57.7567C6.04032 57.7544 0.139269 58.7742 0.0779622 52.2802L0.0799154 19.998L0.0681966 10.4589C0.0536819 7.76172 -0.453178 3.52161 1.53402 1.47061C3.19528 -0.243591 6.37143 0.0898722 8.60628 0.0829141L16.3534 0.0780313L42.242 0.0575235C46.4636 0.0220122 50.7399 0.108435 54.9666 0.0975625ZM42.0848 57.8983C37.4533 57.7471 32.7398 57.9453 28.1014 57.8739C27.3092 57.8617 26.4652 57.8645 25.6766 57.9052C25.6219 60.9678 25.5163 64.0296 25.3602 67.0888C30.8597 67.2653 36.88 67.1382 42.4246 67.1532L42.577 67.036C42.3432 64.0419 42.2816 60.9066 42.0848 57.8983ZM62.4305 49.8954C60.5906 49.6698 57.0975 49.7622 55.117 49.7655L42.4139 49.787C29.5282 49.8051 16.4931 49.676 3.62484 49.8241C3.28615 49.8542 3.05701 49.8167 2.81331 49.9921C2.59219 51.7633 2.50179 55.016 4.9432 55.039C7.96555 55.0672 10.9839 55.0494 14.0067 55.0419L31.8885 55.0038L50.6229 55.0546C52.6405 55.0569 60.0793 55.2335 61.4989 54.7675C62.8703 53.629 62.49 51.5173 62.4305 49.8954ZM60.2996 2.75577C58.7984 2.68985 57.3042 2.74993 55.8035 2.74405L43.9198 2.78409L5.01644 2.72647C3.63925 3.04796 2.8214 3.64296 2.79378 5.17666C2.76901 6.54923 2.80993 7.92401 2.82601 9.29678C2.85487 11.6904 2.85961 14.0847 2.84163 16.4784L2.79378 47.1688L41.3787 47.1474C47.6111 47.1763 53.8438 47.1686 60.076 47.1249L62.4891 47.12L62.4793 18.0585L62.4901 9.30948C62.4924 7.8296 62.5311 6.30129 62.453 4.82901C62.397 3.77833 61.3474 2.80185 60.2996 2.75577Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M66.7628 74.2453C67.4374 74.1706 68.5251 74.4327 69.1368 74.7472C70.3344 75.3746 71.237 76.4469 71.6495 77.7335L111.815 77.7218L124.695 77.7179C127.039 77.7109 129.403 77.6923 131.746 77.7023C132.163 77.7292 132.606 77.7184 132.928 78.0246C133.31 78.3885 133.487 78.8929 133.404 79.4132C133.301 80.0745 132.54 80.5217 131.92 80.5138C130.155 80.4919 128.394 80.4924 126.631 80.4914L114.812 80.4884L87.296 80.4933C82.0663 80.4903 76.7532 80.4361 71.5333 80.5109C71.0512 81.8625 70.4022 82.5755 69.2462 83.3605C70.6869 86.765 72.2446 89.9592 73.7716 93.3058C75.6774 97.4833 77.499 101.584 79.502 105.72C83.1043 106.586 82.0492 108.226 82.2745 110.973C82.7826 117.171 78.953 116.722 74.2891 116.705L67.9717 116.677L59.8165 116.667C58.6105 116.664 56.4543 116.72 55.3536 116.526C54.6925 116.412 54.0657 116.15 53.5215 115.758C52.7763 115.219 52.2771 114.416 52.1964 113.531C52.1001 112.476 52.0209 108.866 52.1758 107.983C52.2379 107.619 52.3869 107.274 52.6104 106.98C53.1882 106.229 54.0053 105.927 54.9044 105.797L65.1739 83.424C63.6542 82.631 63.2373 82.1107 62.5938 80.5187C56.5933 80.4648 50.5925 80.4536 44.5919 80.4835L19.7676 80.4894L7.56354 80.4835C5.86593 80.4826 4.15925 80.5191 2.46393 80.4992C0.41923 80.4761 0.522872 77.7443 2.39753 77.715C4.33135 77.6861 6.28612 77.714 8.22175 77.715L20.7989 77.7287L62.546 77.6945C62.9905 75.6279 64.8419 74.6119 66.7628 74.2453ZM54.9434 108.628C54.9151 109.912 54.6316 112.773 55.3438 113.704C55.8496 113.967 56.4938 114.026 57.0577 114.052C59.2018 114.148 61.4041 114.018 63.5557 114.016C65.7092 114.014 77.3037 114.228 78.421 113.878C78.6086 113.818 78.7858 113.723 78.9561 113.626C79.5547 113.012 79.4807 112.156 79.4688 111.293C79.4496 110.404 79.4189 109.515 79.377 108.627L54.9434 108.628ZM67.0538 85.838C64.1063 92.5303 60.7948 99.154 57.9083 105.829C61.1191 105.859 64.3301 105.872 67.5411 105.868L76.5528 105.844C75.4756 103.72 67.5841 86.1463 67.0538 85.838ZM68.3292 77.3664C67.815 76.9757 67.1491 76.8444 66.5245 77.0099C65.3986 77.3072 64.7315 78.4649 65.0401 79.5861C65.3488 80.7083 66.5147 81.3623 67.6348 81.0441C68.5426 80.7857 69.1651 79.9534 69.1553 79.0099C69.1486 78.3645 68.8435 77.7574 68.3292 77.3664Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">The Strategic Advantage: Custom-Built vs. Packaged Software</p>
                <p>While packaged software offers speed, it often forces your organization to conform to rigid, pre-set workflows. A <span className="txt-med">custom-built application</span> is engineered specifically for your business logic, ensuring your technology supports your unique operational needs rather than restricting them.</p>
              </div>
            </li>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="137" viewBox="0 0 124 137" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M61.2625 0.0334264C62.0255 -0.0571483 62.7992 0.0370095 63.5184 0.30784C65.2605 0.958099 67.6515 2.55899 69.3983 3.42015C72.0664 4.73532 74.766 6.01171 77.491 7.20237C86.8632 11.2756 96.6833 14.2306 106.748 16.0071C110.16 16.6276 113.639 16.9365 117.068 17.3254C118.838 17.664 122.814 16.6718 123.141 19.301C123.407 21.4298 123.293 23.7279 123.289 25.842L123.287 37.8889V55.7805C123.29 60.5196 123.378 65.0172 122.97 69.7483C122.069 79.7441 118.789 89.3789 113.405 97.8498C103.733 113.025 90.0066 123.658 74.1502 131.806C70.7977 133.528 65.668 136.096 62.0447 136.898C59.7646 137.039 50.5755 132.51 48.1688 131.272C28.1637 120.917 9.8675 104.715 2.9627 82.6526C0.267848 74.0411 0.017597 68.2079 0.0125094 59.3694L0.00957976 46.4035V29.677C0.00283344 26.5201 -0.00857464 23.3637 0.0105563 20.2043C-0.0167616 19.0662 0.452564 17.6022 1.83185 17.5246C3.73276 17.4177 5.57788 17.3594 7.49493 17.1731C12.8998 16.6476 18.208 15.8746 23.5008 14.6428C31.7141 12.7442 39.7187 10.0331 47.3953 6.55003C49.2932 5.7089 51.1687 4.81667 53.0184 3.87425C55.3062 2.68918 58.8711 0.544233 61.2625 0.0334264ZM62.16 3.89085C61.9689 3.78906 61.6772 3.72081 61.4647 3.77073C59.5073 4.66981 57.6261 5.71983 55.7108 6.69456C41.6033 13.8744 26.4144 18.8248 10.6385 20.4895C8.30361 20.736 6.03742 21.0001 3.68341 21.0647C3.57901 24.5528 3.63198 28.2284 3.63165 31.7366L3.62677 49.0325L3.62286 60.1008C3.62175 63.7532 3.51338 67.3467 3.98517 70.9826C7.64257 99.1676 30.5532 119.436 55.1854 130.588C56.2408 131.065 60.9086 133.242 61.8279 133.155C65.322 131.933 68.1618 130.592 71.4949 128.971C88.765 120.571 105.035 107.382 113.675 89.9084C116.103 84.9973 118.125 78.924 118.941 73.5344C119.94 66.9482 119.554 59.4613 119.553 52.7102L119.565 21.0578C99.4583 20.2252 79.7722 13.2757 62.16 3.89085Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M59.8442 27.7094C61.0324 27.5653 62.6005 27.6472 63.7778 27.7348C75.971 28.641 86.3849 36.5987 90.1763 48.3773C92.7941 56.7512 91.6034 65.8521 86.9175 73.2699C85.9498 74.8332 84.7095 76.4815 83.6577 78.0316C81.5165 81.1581 79.7658 84.6063 78.5835 88.2084C77.8071 90.4654 77.7857 92.6063 77.7349 94.9496C77.6829 97.3671 78.1136 100.372 76.9888 102.579C76.2323 104.066 74.9469 104.869 73.4097 105.355C73.2493 107.256 72.8277 108.776 71.4243 110.158C69.184 112.364 66.3729 112.058 63.4849 112.026C57.3504 111.989 50.7373 113.493 49.8882 105.369C43.4743 103.722 46.3385 96.4982 45.4653 91.5316C44.5916 86.563 42.6243 82.1187 39.647 78.057C35.6674 72.6287 32.6165 67.3728 31.9409 60.5668C31.077 52.5831 33.4826 44.5892 38.6089 38.4076C44.0828 31.7491 51.4057 28.5393 59.8442 27.7094ZM65.4409 105.275C61.5698 105.248 57.6982 105.268 53.8276 105.339L53.4155 105.407C52.995 106.383 54.286 107.782 55.0513 108.284C55.921 108.349 57.786 108.457 58.6274 108.385C60.997 108.179 66.8427 108.9 68.7095 107.874C69.2883 107.319 69.8751 106.441 69.9077 105.629L69.7788 105.392C69.1721 105.236 66.2379 105.279 65.4409 105.275ZM59.6909 98.2133C57.1552 98.21 53.6401 98.1152 51.1636 98.269L48.9419 98.3725C48.9619 99.3909 48.9273 100.053 49.2895 101.012C50.7992 102.279 51.2716 101.971 53.1636 101.932C59.6137 101.8 66.0721 101.932 72.5249 101.846C74.4393 101.415 74.5943 100.014 74.4683 98.3246C69.5429 98.2328 64.6168 98.1956 59.6909 98.2133ZM65.7085 69.5824C63.926 69.5687 62.1436 69.5849 60.3618 69.6313L58.352 69.6674C58.8769 77.8693 59.3364 86.6582 59.2642 94.8627C60.806 94.8716 62.3742 94.8949 63.9136 94.8871L64.1304 94.7914C64.2293 93.8968 64.1669 92.9698 64.1977 92.0697C64.4508 84.7029 64.7234 76.8603 65.7085 69.5824ZM61.8559 31.1723C61.3162 31.1644 60.5326 31.1734 60.02 31.2504C45.1482 32.7056 33.8844 44.6033 35.3784 59.8539C35.6891 62.9506 36.5541 65.9661 37.9311 68.7572C38.7351 70.3597 39.816 71.9592 40.8149 73.4506C43.6373 77.664 46.4111 81.6387 47.8813 86.5688C48.6733 89.2239 48.9505 92.1016 49.0308 94.8695C51.3076 94.9005 53.9012 94.7722 56.0903 94.8529C56.0401 86.0977 55.9253 77.5616 54.8188 68.8666C52.604 69.0846 50.7523 69.1773 48.8774 67.6664C47.847 66.8446 47.1968 65.6372 47.0786 64.3246C46.8224 61.6609 48.6571 59.2208 51.4106 59.0922C55.9004 58.8828 56.9384 62.5835 57.5268 66.2182C59.6419 66.3852 61.0543 66.3706 63.1802 66.2826C64.2977 66.2559 65.415 66.2082 66.5308 66.1391C66.7689 63.9775 67.0372 61.6103 68.8657 60.1605C69.8795 59.3569 71.2539 58.9354 72.5434 59.1107C73.7543 59.2835 74.8436 59.9423 75.5591 60.935C76.3708 62.0447 76.6985 63.4356 76.4663 64.7904C76.2606 66.0394 75.5516 67.15 74.5054 67.8627C72.8431 69.0097 71.0546 68.9512 69.1518 68.7807C67.8726 76.8142 67.2954 86.6382 67.3315 94.8227L74.4097 94.8031C74.5214 85.1459 78.1596 79.8546 83.3843 72.1703C87.618 65.9419 89.2921 58.4334 87.3345 51.0395C86.1865 46.5417 83.8708 42.4267 80.6216 39.1107C75.6579 34.0945 68.913 31.2415 61.8559 31.1723ZM51.6841 62.2689C49.0912 63.3794 50.1394 65.4186 52.2593 65.5307C52.7433 65.4876 53.1612 65.5078 53.5493 65.2426C54.3978 64.0951 52.7329 62.4587 51.6841 62.2689ZM71.7788 62.4076C70.9017 62.6291 69.827 63.6281 69.9927 64.6498C70.1266 65.4738 71.1893 65.3918 71.855 65.391C72.4089 65.2424 72.8526 65.0596 73.1655 64.5346C73.3524 64.2267 73.404 63.8556 73.3101 63.5082C73.1198 62.7985 72.439 62.5025 71.7788 62.4076Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">Protecting Your Innovation and Intellectual Property (IP)</p>
                <p>Bespoke software is the only way to secure a proprietary, "copyrighted" asset. We help Dubai companies transition from generic platforms to software they truly own, protecting your <span className="txt-med">intellectual property</span> and ensuring your innovative processes cannot be replicated by competitors.</p>
              </div>
            </li>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="138" viewBox="0 0 150 138" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M88.1396 45.7961C89.8643 45.8005 92.8052 45.4277 92.7373 47.9709C92.8041 51.2944 92.756 54.626 92.7627 57.9572L92.7929 78.5226L92.8076 99.6926C92.8087 103.267 92.8315 106.847 92.7881 110.42C92.7302 111.015 92.7784 111.611 92.3008 112.052C91.006 113.25 89.5407 112.152 89.4658 110.587C89.4335 109.913 89.4857 109.255 89.4902 108.584L89.497 103.94L89.4892 90.3478L89.4853 49.1467C86.9091 49.1026 84.3322 49.1046 81.7558 49.1525L81.7519 118.002C85.171 118.018 88.5905 118.012 92.0088 117.987C93.7257 119.075 93.4236 120.957 91.5107 121.165C89.9553 121.335 87.8467 121.198 86.2295 121.192C81.6682 121.147 77.1062 121.13 72.5449 121.139L19.3027 121.137L7.07712 121.152C5.29753 121.153 3.43244 121.149 1.6572 121.174C-0.505798 121.204 -0.436002 118.225 1.19821 118.113C2.45151 118.029 3.96149 118.06 5.23727 118.058L13.1074 118.044C13.2015 111.613 13.1555 104.972 13.1718 98.5246C13.15 96.4362 12.3856 91.6312 15.3222 91.5851C18.861 91.5294 22.5144 91.3748 26.04 91.6603C26.7291 91.7172 27.206 92.4532 27.5215 92.9787C27.647 95.3516 27.5652 98.5771 27.5722 101L27.5703 117.979C30.0161 118.079 32.465 118.084 34.9111 117.992C34.7458 109.975 34.9127 101.312 34.9179 93.2531L34.917 84.2443C34.9158 82.4806 34.8735 80.6904 34.9883 78.9308C35.1136 77.0342 36.5877 76.4595 38.2666 76.4728C40.5115 76.5154 43.0523 76.5067 45.2666 76.4679C47.2953 76.4326 49.261 76.4188 49.2675 78.8908C49.2707 80.0792 49.3125 81.3611 49.334 82.5431C49.3794 85.8225 49.3965 89.1023 49.3857 92.382L49.3711 117.961C51.8209 118.049 54.2732 118.057 56.7236 117.985L56.707 84.632C56.6632 80.3447 56.6624 76.057 56.705 71.7697C56.7087 69.4956 56.697 67.1874 56.7343 64.9142C56.7406 64.5422 56.8927 63.3583 57.1416 63.1125C57.7515 62.5103 59.0867 62.4111 59.8965 62.4133C61.9196 62.4191 63.9187 62.4099 65.9394 62.426C67.0946 62.4665 68.2876 62.3598 69.4316 62.5217C70.516 62.6752 70.9891 63.347 71.0127 64.3908C71.0603 66.5051 71.054 68.6151 71.0634 70.7267L71.0976 83.0803L71.0927 117.976C73.5794 118.061 76.0679 118.079 78.5556 118.033C78.3459 115.985 78.453 111.846 78.4541 109.597L78.4609 94.1877L78.4922 62.3576C78.5035 58.116 78.4444 53.8762 78.5039 49.6359C78.5325 47.5947 78.323 46.5746 80.4834 45.8215C81.5542 45.7827 82.6993 45.8345 83.7754 45.8312C85.2266 45.8269 86.6921 45.7924 88.1396 45.7961ZM46.0498 79.8195C43.4576 79.7807 40.8646 79.7823 38.2724 79.8234L38.2558 118.012C39.2343 118.039 45.5473 118.19 46.0888 117.959L46.1064 89.7619C46.0922 86.405 46.146 83.205 46.0498 79.8195ZM17.4287 94.7121C17.1129 94.7255 16.6865 94.7027 16.4414 94.8644C16.3112 95.6311 16.4057 100.127 16.4004 101.164L16.331 118.076C18.6216 118.063 21.1761 117.985 23.4404 118.039L24.4336 118.038L24.4228 94.7746C22.0918 94.7266 19.7601 94.7054 17.4287 94.7121ZM67.8027 65.6896C65.3595 65.642 62.6603 65.5993 60.2187 65.6916L59.9834 65.8254C59.8696 67.261 59.9476 70.0978 59.9463 71.6476L59.9336 83.0871L59.8838 118.05C62.5091 118.054 65.1346 118.043 67.7597 118.016C67.8525 115.57 67.7902 112.807 67.8027 110.333C67.8383 104.547 67.837 98.7624 67.7988 92.9767C67.8479 83.8811 67.849 74.7853 67.8027 65.6896Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M126.12 37.6875C127.285 37.6799 129.922 37.5984 130.977 37.8125C131.619 37.9384 132.213 38.2441 132.689 38.6944C134.41 40.3106 133.867 45.2946 133.933 47.6885C137.491 47.8594 141.038 47.635 144.586 47.7881C146.233 47.7416 148.717 49.5 148.781 51.2832C149.027 58.1186 148.911 65.6843 148.919 72.4776C148.925 74.7113 148.912 76.9451 148.881 79.1787C148.865 80.4265 148.967 81.9502 148.553 83.1319C147.213 86.953 143.235 86.2254 139.887 86.2041C136.895 86.1809 133.902 86.1777 130.91 86.1953L113.401 86.1846C110.455 86.1891 107.102 86.3111 104.19 86.0459C103.129 85.9493 102.343 85.5463 101.59 84.7891C100.327 83.5181 100.391 82.0731 100.384 80.4151L100.372 60.2237L100.366 54.4912C100.365 52.5451 100.11 50.4923 101.665 49.0254C103.379 47.4086 106.235 47.7636 108.439 47.7666L115.307 47.7686C115.329 43.9373 113.96 38.4271 118.937 37.7022C121.33 37.7102 123.726 37.7052 126.12 37.6875ZM103.528 76.0352C103.523 77.7888 103.473 79.5516 103.557 81.3018C103.593 82.0731 103.981 82.8723 104.842 82.9365C106.74 83.0779 108.682 83.025 110.587 83.0235L120.389 83.0332L135.438 83.0283C136.797 83.0268 144.257 83.2932 145.128 82.4903C146.022 81.6656 145.707 76.5291 145.725 74.9063L145.76 65.6035C142.557 66.8505 139.389 67.8424 136.002 68.4961C134.004 68.8818 131.918 69.059 129.922 69.3838C129.894 71.2504 130.161 72.7698 128.276 73.7901C127.105 73.8353 125.89 73.8059 124.731 73.8242C120.285 73.8943 119.371 74.2058 119.418 69.374C115.131 69.1578 107.608 67.0308 103.552 65.4629L103.528 76.0352ZM122.546 65.3213C122.506 67.2065 122.462 68.9069 122.538 70.792C123.942 70.7966 125.374 70.8167 126.775 70.7569C126.893 68.9061 126.854 67.1851 126.79 65.3311C125.386 65.3254 123.948 65.3031 122.546 65.3213ZM144.922 51.0879C141.505 50.7723 135.383 50.987 131.79 50.9951L107.471 50.9824C106.611 50.9758 104.637 50.759 104.031 51.4483C103.236 52.3525 103.58 60.1065 103.62 61.7256C108.596 64.3671 113.762 65.452 119.332 66.1397L119.452 63.6367C120.59 61.9247 122.825 62.2213 124.69 62.252C126.661 62.2843 129.616 61.7929 129.906 64.4473C129.963 65.0019 129.996 65.5589 130.005 66.1162C132.063 65.8828 135.496 65.5072 137.436 64.9571C140.245 64.3247 143.121 63.1969 145.702 61.9268C145.781 59.0051 145.779 55.0157 145.693 52.0615C145.453 51.7389 145.199 51.3743 144.922 51.0879ZM130.777 45.667C131.457 39.3101 129.355 41.1107 124.47 40.8848C123.128 40.8228 120.872 40.8133 119.31 40.9024C118.838 41.2134 118.549 41.388 118.484 41.9824C118.291 43.7666 118.408 45.9349 118.437 47.7373C122.016 47.8993 126.511 47.8151 130.131 47.7617C130.63 47.685 130.538 47.7812 130.759 47.4805C130.836 46.9308 130.726 46.1424 130.777 45.667Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M117.828 88.8812C122.578 88.648 127.745 88.931 132.523 88.931C132.878 88.9312 133.32 89.1726 133.585 89.4056C133.885 89.6633 134.102 90.0027 134.207 90.3831C134.48 91.363 134.355 97.2806 134.425 98.8548C136.692 98.9351 139.007 98.8826 141.231 98.8949C143.992 98.9104 146.908 98.5049 148.466 101.312C148.998 102.271 149.018 103.041 149.022 104.116C149.031 106.522 148.982 108.929 148.977 111.334L149.033 122.224C149.048 124.665 149.04 127.105 149.011 129.544C148.983 131.812 149.203 134.325 147.406 136.031C145.886 137.473 142.569 137.083 140.598 137.08L131.852 137.069L113.321 137.072C110.364 137.075 107.278 137.163 104.327 136.964C104.04 136.945 103.273 136.779 102.983 136.656C101.525 136.036 100.485 134.511 100.388 132.934C100.37 130.76 100.39 128.558 100.394 126.374L100.393 113.994L100.391 106.69C100.391 105.838 100.403 104.948 100.395 104.1C100.345 98.2985 104.799 98.8598 109.067 98.8822C111.221 98.8955 113.377 98.8932 115.532 98.8753C115.517 96.9263 115.126 91.5606 115.997 90.0589C116.436 89.3037 117.026 89.0753 117.828 88.8812ZM103.617 116.45C103.67 121.634 103.426 126.901 103.611 132.089C103.647 133.138 104.1 133.822 105.193 133.88C106.877 133.967 108.574 133.935 110.261 133.933L119.609 133.926C127.62 133.922 135.628 133.941 143.641 133.91C146.294 133.899 145.833 131.911 145.857 129.938C145.876 128.331 145.814 126.719 145.831 125.109C145.82 122.377 145.74 119.333 145.807 116.627C141.552 118.295 134.797 120.147 130.218 120.366C130.25 123.101 130.135 125.515 126.568 125.325C124.098 125.192 119.832 126.244 119.353 122.783C119.253 122.057 119.294 121.097 119.299 120.356C114.569 119.908 107.984 118.221 103.617 116.45ZM127.008 116.142C125.493 116.036 123.973 116.028 122.456 116.118C122.16 117.141 122.272 121.024 122.341 122.187C123.686 122.389 125.594 122.343 126.97 122.224C127.275 121.711 127.076 117.019 127.008 116.142ZM144.902 102.047C139.055 101.728 131.498 101.986 125.627 101.999L110.74 101.993C108.886 101.989 106.874 101.899 105.042 101.941C104.574 102.096 104.064 102.329 103.813 102.784C103.257 103.79 103.595 111.316 103.59 112.868C104.702 113.348 106.029 114.05 107.146 114.419C110.621 115.571 115.625 116.703 119.275 117.137C119.274 116.065 119.261 114.841 120.101 114.07C121.693 112.609 124.72 113.162 126.751 113.069C129.618 112.936 130.27 114.871 130.249 117.172C133.279 116.863 135.923 116.341 138.882 115.622C141.354 114.924 143.561 114.133 145.809 112.849C145.879 109.649 145.87 106.449 145.781 103.25C145.445 102.69 145.355 102.526 144.902 102.047ZM119.584 92.0013C119.196 92.1508 118.891 92.3787 118.819 92.807C118.496 94.7001 118.637 96.9896 118.659 98.9017C122.612 99.0344 126.509 98.9154 130.464 98.9075C130.966 98.8897 130.911 98.9739 131.227 98.724C131.337 98.2365 131.328 92.9572 131.075 92.3763C130.37 91.9512 128.31 92.0023 127.43 92.0335C124.82 92.1272 122.185 91.9455 119.584 92.0013Z" fill="#4E9C5A"/>
                  <path d="M102.821 0.0757498C106.535 -0.0152875 111.17 -0.0374898 114.873 0.0833355C115.099 0.249122 115.358 0.421044 115.549 0.626659C116.115 1.23469 115.776 11.0252 115.742 12.4845C114.162 14.6117 112.514 13.3153 112.475 11.085C112.445 9.36234 112.423 7.64357 112.438 5.91966C109.008 8.7359 106 11.4706 102.697 14.3787L92.4486 23.2569C90.4299 24.9948 88.5426 26.8952 86.4418 28.5388C85.8877 28.9722 85.3639 29.3358 84.6418 29.4343C83.6731 29.5664 83.2185 28.9466 82.5339 28.3905C81.327 27.3271 80.1201 26.2554 78.9108 25.1904C75.8127 22.4458 72.664 19.7592 69.4663 17.1319C69.3171 17.3589 69.1637 17.5832 69.006 17.8044C67.9361 19.3025 66.6775 20.8289 65.5654 22.3288L56.5048 34.6919C53.2213 39.2347 49.8172 43.7569 46.4799 48.2643C46.2196 48.7655 44.7365 49.1319 44.3129 48.8139C40.0826 45.6368 35.7871 41.9306 31.6115 38.7274C29.9205 40.3028 27.2534 43.4705 25.6291 45.2739L12.1937 60.3358C10.8439 61.8837 9.52222 63.4118 8.03644 64.8306C6.04504 66.7319 4.20785 64.1849 5.42696 62.7398C6.7484 61.1734 8.26926 59.5629 9.65349 58.0319L16.8328 49.9683C21.1821 45.1535 25.4397 40.2589 29.7918 35.4473C30.8103 34.3213 31.7228 34.4848 32.861 35.3166C35.6302 37.3402 38.2949 39.525 40.9504 41.6956C42.1407 42.6845 43.7327 43.7562 44.7887 44.8416C45.8555 43.1383 48.2877 39.9187 49.5281 38.2456L57.19 27.8368C60.705 22.9883 64.3316 18.1129 67.8304 13.2467C68.2549 12.6564 69.4936 12.4102 70.0815 12.8784C73.1986 15.3613 76.1286 18.1187 79.0571 20.8241C80.835 22.4625 82.8498 23.8916 84.5837 25.5478C86.1509 24.0209 88.3712 22.2307 90.0636 20.7329L101.503 10.6507C104.507 8.04799 106.712 6.33256 109.501 3.40085C107.427 3.40944 104.954 3.51698 102.929 3.29463C101.367 3.12305 100.887 0.903788 102.821 0.0757498Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">Long-Term Value with Zero Licensing Costs</p>
                <p>Custom development is a cost-effective long-term asset. By eliminating recurring per-user licenses and expensive "workarounds," bespoke software creates a leaner, more efficient operation that scales organically with your business ambitions.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Child page strategic choice section ends */}

      {/* engagement model starts */}
      <section className="engagement-model-wrapp">
        <div className="container">
          <h2 className="txt-center slide-up">Our Engagement Model</h2>
          <div className="eng-model-step">
            <ul>
              <li className="stagger-li">
                <div className="step-count">1</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="79" height="77" viewBox="0 0 79 77" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1632 11.6858C14.7495 11.6128 24.6678 11.1253 26.1544 12.4808C26.8376 14.1569 26.3611 17.5764 26.3947 19.555C26.4318 21.7325 27.1014 24.6071 25.4025 26.1663C24.0569 26.2977 12.3533 26.5536 11.9005 25.7024C10.5177 23.1024 11.3663 16.8685 11.2384 13.7854C11.1967 12.7815 11.4374 12.3289 12.1632 11.6858ZM13.4728 13.9212C13.4638 17.2477 13.472 20.5751 13.4972 23.9017C16.9707 23.921 20.6727 23.9985 24.1222 23.8938L24.1437 13.9456L13.4728 13.9212Z" fill="#3C3C3C"/>
                    <path d="M11.9139 32.4003C19.2553 32.1932 29.9053 32.3002 37.5267 32.4499C37.9588 32.4584 38.1829 32.9297 38.359 33.2541C38.2211 34.1809 38.3513 33.8221 37.7214 34.6388L20.7666 34.6709C18.7423 34.6736 13.4446 34.802 11.7714 34.4876C11.1708 34.0206 11.3324 34.2745 11.1631 33.5358C11.4234 32.6651 11.2212 32.9636 11.9139 32.4003Z" fill="#3C3C3C"/>
                    <path d="M11.5153 40.875C13.321 40.7649 15.3011 40.7997 17.124 40.8037C21.9475 40.8143 26.7874 40.7255 31.6079 40.8629C32.1916 40.8796 32.3286 41.135 32.6496 41.5184C32.7649 42.1934 32.6027 42.3521 32.2744 43.0049C26.8495 43.3844 17.942 43.0287 12.281 43.003C11.7238 43.0005 11.4988 42.6623 11.2314 42.306C11.147 41.6144 11.2243 41.5426 11.5153 40.875Z" fill="#3C3C3C"/>
                    <path d="M12.39 62.4269C14.8994 62.4199 29.836 61.9697 30.8712 62.8429C31.2008 63.5241 31.1431 63.2211 31.063 63.9991C30.5571 64.6108 30.8197 64.424 30.0555 64.6934L18.3839 64.718C17.0938 64.722 12.2774 64.9918 11.4052 64.257C11.0919 63.5502 11.1413 63.8625 11.2566 63.0612C11.7686 62.4801 11.5532 62.6644 12.39 62.4269Z" fill="#3C3C3C"/>
                    <path d="M22.4127 53.6739C24.461 53.6875 29.4802 53.2255 30.9288 54.2734C31.2071 54.9166 31.1758 54.6306 30.9333 55.3954C29.8091 56.3522 22.8029 55.9615 20.827 55.9477C18.7868 55.8972 12.4681 56.4719 11.2401 55.1752C11.1663 54.5196 11.148 54.7709 11.4926 54.1191C12.4986 53.4077 20.4776 53.6731 22.4127 53.6739Z" fill="#3C3C3C"/>
                    <path d="M30.8852 11.6939C35.0998 11.658 40.0535 11.5798 44.3141 11.6962C44.8478 11.7108 45.0698 12.0788 45.3468 12.4291C45.4081 13.1703 45.2889 13.2514 44.8745 13.9243C40.7147 14.0465 36.3574 13.933 32.177 13.9526C31.26 13.9568 30.7274 13.8548 30.3259 13.011C30.3905 12.3211 30.4637 12.28 30.8852 11.6939Z" fill="#3C3C3C"/>
                    <path d="M31.0784 19.8713C35.2931 19.8346 39.9231 19.6763 44.1473 19.9528C44.8921 20.0016 45.141 20.2885 45.4518 20.8763C45.2955 21.7249 45.4399 21.4015 44.8394 22.0934C40.6002 22.118 35.9231 22.28 31.6837 21.9822C30.956 21.9311 30.7186 21.6734 30.3838 21.1117C30.5358 20.265 30.3984 20.5888 31.0784 19.8713Z" fill="#3C3C3C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.13578 0.0850117C18.5683 -0.155178 34.0594 0.224555 49.4883 0.00395697C54.68 -0.0702098 55.4269 0.861585 55.25 5.91607C55.1904 7.62394 55.2435 9.68477 55.2393 11.4356L55.2452 27.7989C59.0086 27.5796 61.89 27.6205 65.5176 29.0176C70.5537 30.9373 74.6068 34.8018 76.7657 39.7413C78.896 44.5783 78.995 50.0689 77.0401 54.9795C74.7396 60.8239 70.8167 64.1113 65.2373 66.5352C61.6323 67.7502 58.9369 67.9189 55.2422 67.5137C55.222 69.7336 55.765 74.9895 53.9063 75.9327C51.8874 76.9562 44.4076 76.4985 41.9239 76.4991L18.6455 76.4835L8.37015 76.5215C6.42885 76.5347 4.31289 76.6205 2.39554 76.4024C1.09821 76.2548 0.0737245 74.6234 0.0625366 73.377C0.0237644 69.022 0.0401408 64.6674 0.0390991 60.3125L0.0351928 33.9649L0.0332397 14.295C0.0330115 11.5407 -0.172978 3.9192 0.443396 1.64263C1.43433 0.49952 1.64819 0.364172 3.13578 0.0850117ZM52.5274 2.80767C38.1587 2.47906 23.6533 2.92969 9.27445 2.74224C7.16593 2.71472 4.96857 2.71233 2.86234 2.77446L2.82133 73.8702L52.5645 73.8956L52.5537 66.9063C50.8891 66.4053 49.2874 65.7142 47.7803 64.8477C43.0581 61.8359 39.7293 57.6027 38.4922 52.0635C37.3176 46.8788 38.2596 41.4393 41.1094 36.9522C43.9436 32.5294 47.6835 30.0178 52.5928 28.4376C52.5276 19.9196 52.6518 11.2924 52.5274 2.80767ZM75.6856 45.6338C74.536 35.9265 65.6957 29.0175 56.001 30.2501C46.4225 31.4681 39.6163 40.1816 40.752 49.7725C41.8877 59.3632 50.5402 66.2452 60.1377 65.1915C69.8523 64.1248 76.8348 55.3414 75.6856 45.6338Z" fill="#3C3C3C"/>
                    <path d="M67.8954 39.7383C68.6483 40.154 69.2639 40.923 69.8657 41.5688C65.2284 46.1678 59.4002 52.457 54.6954 56.6367C52.9314 55.1442 51.2244 53.3043 49.6107 51.6282L47.4365 49.4028L49.4012 47.3805L54.7994 52.8191C59.1407 48.4349 63.5062 44.0746 67.8954 39.7383Z" fill="#3C3C3C"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Our Software Development Lifecycle: From RFP to Deployment</h5>
                  <p>Our engagement typically begins with a Request for Proposal (RFP) that outlines the software's scope and technical specifications. Whether developed by your internal team or in collaboration with external consultants, the RFP serves as the roadmap for the project.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">2</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="61" height="80" viewBox="0 0 61 80" fill="none">
                    <path d="M28.7482 60.1144C34.7778 59.5992 41.879 60.2048 47.9926 60.1168C48.506 60.1094 48.5466 60.367 48.8386 60.7563C48.9689 61.5154 48.8414 61.678 48.566 62.4362C46.8393 62.6316 42.9428 62.4594 41.0468 62.4928C37.4493 62.5563 33.6635 62.5198 30.0534 62.4915C29.1886 62.4847 29.0422 62.3415 28.5483 61.807C28.3579 61.0586 28.4834 60.8554 28.7482 60.1144Z" fill="#3C3C3C"/>
                    <path d="M29.0893 26.5551C34.7838 26.3907 40.5729 26.5516 46.2779 26.4907C47.4299 26.4783 48.321 26.3678 48.9228 27.4179C48.9285 28.194 48.7842 28.3222 48.3173 28.9606C43.6292 28.9317 33.8972 29.2948 28.9197 28.708C28.61 28.6713 28.4901 28.1574 28.4059 27.889C28.4901 27.1572 28.5678 27.0858 29.0893 26.5551Z" fill="#3C3C3C"/>
                    <path d="M28.9661 32.6482C30.8249 32.5777 32.7882 32.617 34.6574 32.6194C38.9821 32.6246 43.3236 32.4963 47.645 32.6214C48.3271 32.6412 48.5081 32.9381 48.8817 33.3968C48.9904 34.1668 48.8376 34.343 48.4614 35.0419C42.6642 35.0329 35.1775 35.1741 29.2462 34.9604C28.8448 34.946 28.5955 34.4327 28.4117 34.119C28.4131 33.3818 28.5379 33.297 28.9661 32.6482Z" fill="#3C3C3C"/>
                    <path d="M28.8377 66.2163C30.6401 66.1117 32.6947 66.1737 34.5196 66.1779C38.9438 66.1879 43.3982 66.046 47.8148 66.2287C48.4178 66.2536 48.5676 66.5697 48.8498 66.9835C48.9105 67.7484 48.7898 67.8685 48.4475 68.5953C42.6513 68.6128 35.201 68.7365 29.3404 68.4909C28.8316 68.4695 28.6166 68.1122 28.3835 67.769C28.308 67.0692 28.4939 66.8769 28.8377 66.2163Z" fill="#3C3C3C"/>
                    <path d="M28.9496 42.8787C34.6742 42.8558 42.1356 42.7176 47.9925 42.916C48.4288 42.9307 48.6613 43.4147 48.856 43.7424C48.8593 44.5165 48.7772 44.6135 48.3444 45.266L35.1572 45.2911C33.3773 45.295 31.1429 45.3601 29.3577 45.1881C28.8289 45.1372 28.6401 44.7497 28.3925 44.3803C28.3845 43.6371 28.5228 43.5376 28.9496 42.8787Z" fill="#3C3C3C"/>
                    <path d="M29.132 49.023C34.7257 49.0001 42.1628 48.8763 47.906 49.0335C48.388 49.0466 48.6396 49.5101 48.8657 49.8548C48.8939 50.639 48.7985 50.7395 48.3421 51.3914C42.9479 51.4029 34.8025 51.5752 29.2064 51.2551C28.7873 51.2313 28.5533 50.7344 28.4215 50.3757C28.4931 49.6426 28.6094 49.5599 29.132 49.023Z" fill="#3C3C3C"/>
                    <path d="M20.6287 24.668L21.6198 24.8775C22.2209 25.4821 22.0732 25.1784 22.1812 26.0169C21.6768 27.6441 16.0713 33.4075 14.6007 33.3955C13.7156 33.0263 13.0172 32.1491 12.3412 31.4299C11.4229 30.589 10.5824 29.8707 11.0333 28.5577L11.5635 28.3512C13.3893 28.4936 13.6108 29.0476 14.8866 30.4156C16.7514 28.4326 18.682 26.5678 20.6287 24.668Z" fill="#3C3C3C"/>
                    <path d="M20.6295 41.2734C21.4415 41.3702 21.6538 41.4944 22.0945 42.0415C22.2606 44.1046 16.1666 49.8931 14.5713 50.0917C13.7487 49.8029 13.2738 49.1574 12.655 48.5057C11.6859 47.6093 10.6819 46.9006 11.3004 45.4922C12.8368 44.5748 13.8856 46.0147 14.8649 47.0392C16.8088 45.1691 18.6741 43.1663 20.6295 41.2734Z" fill="#3C3C3C"/>
                    <path d="M20.63 58.7422C21.5701 58.8365 21.758 58.9529 22.1607 59.727C22.0544 61.4932 16.3018 67.2278 14.6495 67.4725C13.807 67.2917 13.2513 66.5006 12.6585 65.8415C11.6549 64.9053 10.719 64.2414 11.2219 62.7599C12.9039 61.9811 13.8025 63.3162 14.8447 64.4545L20.63 58.7422Z" fill="#3C3C3C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6468 0.113183C32.0571 -0.0300338 35.3502 -0.745435 36.5618 4.48525C41.0568 4.55533 47.1389 2.93208 48.0091 8.83584C53.2808 8.91267 60.3608 7.15804 60.3616 14.621C60.3629 28.1403 60.3714 41.6612 60.3694 55.1806L60.3792 68.0312C60.3801 71.9714 61.4665 78.3785 56.1068 78.8319C53.4229 79.059 50.8263 79.0078 48.1361 79.0067L33.7659 78.9853C25.3787 78.8857 16.9507 79.1284 8.5589 79.0077C6.3398 78.9758 3.43606 79.1622 1.54523 77.789C0.545647 77.0628 0.0367181 74.7178 0.026678 73.536C-0.0110809 69.1081 0.0487159 64.6326 0.0657405 60.206L0.0598811 36.7489L0.0413264 21.8993C-0.0405281 8.75609 -0.942547 8.74957 12.429 8.82314C13.4908 3.02693 19.1539 4.43418 23.7894 4.46475C24.3741 1.95422 25.1475 0.934038 27.6468 0.113183ZM57.2611 12.372C55.5456 10.9425 50.3907 11.5559 47.9124 11.5468L47.8734 14.6142C47.3054 15.6049 46.3241 17.2552 45.0706 17.3251C35.9826 17.8307 26.6989 17.4765 17.5902 17.5058C13.0072 17.5206 12.4739 15.6133 12.556 11.536C9.82164 11.4762 7.08664 11.4613 4.35187 11.4901C3.64513 11.9429 3.31995 12.0918 2.86945 12.8251C2.56484 14.277 2.66444 18.3903 2.66926 20.0429L2.70539 32.8358C2.73289 46.352 2.6756 59.8685 2.70441 73.3847C2.70681 74.5044 2.66462 75.1287 3.51594 75.9198C6.66853 76.4949 10.4058 76.3262 13.6546 76.327L27.1644 76.3241L45.3616 76.3173C47.8182 76.3208 54.2094 76.6092 56.6712 75.9315C57.9625 75.576 57.7386 72.5675 57.72 71.1884L57.7249 36.0956C57.7251 32.8925 58.0094 14.3041 57.2611 12.372ZM29.6741 2.69131L27.6927 2.73037C26.0699 4.02631 26.4318 5.11935 26.3978 7.08291C24.2184 7.07592 17.2805 6.40351 15.7933 7.80752C14.8342 8.71319 15.1091 10.492 15.139 11.7099C15.1575 12.465 15.0836 13.772 15.6175 14.3446C16.7133 15.5187 30.5646 14.9324 33.1097 14.9335C35.5381 14.9521 42.8533 15.2573 44.6693 14.4862C45.6634 13.3767 45.5371 7.92367 44.6165 7.54482C42.628 6.72812 35.9513 7.09786 33.9525 7.09853C34.0631 3.21727 33.6699 2.63302 29.6741 2.69131Z" fill="#3C3C3C"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Requirements Study and SRS Development</h5>
                  <p>The foundation of a successful delivery is a comprehensive <span className="txt-med">Requirements Study</span>. We collaborate with stakeholders to translate business needs into a <span className="txt-med">Software Requirements Specification (SRS)</span>, capturing every functional requirement and feature.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">3</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5078 19.1717C48.7413 14.3246 50.2854 15.3132 54.5215 15.3933C58.566 15.1946 58.6432 15.2769 59.0869 19.2185L61.7354 20.533C62.7884 19.9764 63.9627 19.2203 65.1348 19.4119C66.4074 20.2768 67.7667 22.5682 68.5957 23.9158C70.8305 27.5496 70.8284 27.9001 67.2461 30.0584L67.2812 33.4969C69.3245 34.7719 70.9937 35.4572 69.3428 38.0183C67.9978 40.105 66.5809 42.2627 64.916 44.1121C63.5429 43.7493 62.9025 43.4575 61.5947 42.8679C60.7564 43.2178 59.7196 43.7913 58.8906 44.2234C58.7458 49.3461 57.1299 48.1346 52.6836 48.1033C48.6951 48.1208 48.5475 48.2368 48.4961 44.0984L45.8203 42.6658C44.8116 43.1745 43.7889 43.7062 42.6611 43.6736C41.3511 43.1056 37.6701 37.3674 37.4131 35.7273C37.308 35.0546 39.7183 33.578 40.2881 33.2029L40.3604 30.074C39.2863 29.4668 37.8806 28.8233 37.3691 27.7058C37.4509 26.1065 39.375 23.4609 40.2764 22.0652C42.2963 18.9418 42.6419 18.9155 45.876 20.4607L48.5078 19.1717ZM56.2168 18.1365C54.6407 18.1465 53.0086 18.1336 51.4395 18.2049C50.9282 18.8189 50.916 20.0852 50.7129 20.9588L46.0381 23.4783L43.3799 22.4314L40.4355 26.8426C41.1618 27.4015 42.2385 28.1825 42.876 28.7937L42.7588 34.4461C42.035 35.0895 41.3414 35.7289 40.5615 36.3015L43.3027 40.5877C44.3279 40.2733 45.2464 39.9647 46.3066 39.7928C47.6564 40.5932 49.4873 41.6066 50.7646 42.4461L51.2012 45.3533L56.1963 45.3074L56.542 42.5408C58.2419 41.4863 59.61 40.8136 61.4033 39.9324C62.2744 40.1994 63.3376 40.4935 64.1807 40.7928C65.1101 39.3696 66.06 37.9577 67.0244 36.5584C66.3098 36.0193 65.3617 35.3476 64.7266 34.7576C64.7336 32.7086 64.7545 30.7056 64.6494 28.658L67.1807 26.8025C66.2046 25.3532 65.2105 23.8199 64.1924 22.407C63.0156 22.9432 62.5457 23.1745 61.292 23.4568C59.5172 22.3424 58.5612 21.8509 56.6533 20.9773L56.2168 18.1365Z" fill="#3C3C3C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.9385 25.1666C56.5627 24.7056 59.8667 27.2856 60.2989 30.9127C60.7332 34.54 58.127 37.826 54.4981 38.2311C50.9066 38.6314 47.6657 36.0599 47.2383 32.4723C46.8111 28.8846 49.3563 25.6228 52.9385 25.1666ZM56.5 28.9225C55.4936 27.932 54.0315 27.5598 52.6748 27.9479C50.6105 28.5377 49.4027 30.679 49.9678 32.7506C50.5331 34.8219 52.6582 36.0539 54.7364 35.5152C56.1024 35.1607 57.1748 34.0985 57.5391 32.734C57.9034 31.3694 57.5089 29.9131 56.5 28.9225Z" fill="#3C3C3C"/>
                    <path d="M17.524 29.1722C19.8849 29.1876 25.9612 28.8267 27.8224 29.4123C28.4926 30.0577 28.572 30.3517 28.1844 31.1655C26.7505 32.1767 22.6732 31.7976 20.77 31.7651C18.4277 31.7493 11.3683 32.2388 9.93682 31.1574C9.67293 30.2639 9.63558 30.6026 9.95084 29.8241C11.3333 28.7466 15.6511 29.1423 17.524 29.1722Z" fill="#3C3C3C"/>
                    <path d="M10.4718 20.9399C14.2595 20.9485 18.0473 20.9378 21.8327 20.9074C23.5584 20.8981 27.4723 20.3894 28.3784 21.8259C28.4204 22.6747 28.3177 22.7875 27.8389 23.5046C22.4982 23.6415 16.9427 23.4743 11.5763 23.5289C10.6376 23.5387 10.0631 23.4175 9.74316 22.4921C9.81789 21.6516 9.89729 21.5675 10.4718 20.9399Z" fill="#3C3C3C"/>
                    <path d="M10.3033 37.4756C15.8005 37.4828 21.5218 37.3508 27.026 37.4826C27.7662 37.5003 27.9601 37.8035 28.3314 38.2637C28.4411 39.0943 28.3033 39.2517 27.8923 39.9992L16.8023 40.0543C14.9855 40.0606 10.7727 40.5355 9.7592 39.1034C9.71717 38.2971 9.85263 38.202 10.3033 37.4756Z" fill="#3C3C3C"/>
                    <path d="M7.18812 5.09771C7.61079 4.86296 8.12922 4.88444 8.53088 5.1533C8.9302 5.42191 9.14736 5.89281 9.09131 6.37258C9.03527 6.85236 8.71536 7.26019 8.26232 7.42907C7.6318 7.66429 6.92655 7.37349 6.64399 6.76197C6.36376 6.15046 6.59963 5.42472 7.18812 5.09771Z" fill="#3C3C3C"/>
                    <path d="M12.0411 5.11178C12.4498 4.87867 12.9542 4.89105 13.3535 5.14472C13.7505 5.39815 13.9747 5.85083 13.935 6.32056C13.8976 6.79053 13.6011 7.20047 13.1691 7.38546C12.5479 7.65011 11.831 7.385 11.532 6.78142C11.2308 6.17785 11.455 5.44534 12.0411 5.11178Z" fill="#3C3C3C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81839 0.15045C20.0464 -0.178895 36.5849 0.134527 51.876 0.138731L67.4473 0.127012C70.511 0.121402 73.7827 0.0238395 76.8184 0.317442C77.9252 0.424414 78.5625 0.928753 79.3447 1.67682C80.921 3.18082 80.9563 4.8885 80.961 6.95611C80.9913 18.4738 80.9864 30.0063 80.9864 41.5235L80.9824 52.8047C80.9824 54.2395 81.0591 57.3343 80.8887 58.6631C80.7206 59.9574 80.13 61.1608 79.21 62.086C77.3068 63.992 69.9926 63.4285 67.1856 63.4268L49.4053 63.4278C49.7672 65.2361 50.0731 67.2218 50.3907 69.0508C50.6218 70.2238 50.8084 71.5578 51.0069 72.7501C53.0479 72.7092 59.93 71.9322 60.334 74.1905C60.0305 74.8953 60.0303 74.9343 59.4024 75.3243C58.2675 75.4873 56.9176 75.4271 55.7617 75.4278C44.8422 75.4346 33.9245 75.4042 23.0049 75.4503C21.9238 75.4549 21.0393 75.1782 20.8828 74.0333C21.8758 71.9987 27.8764 72.7204 30.1602 72.7286C30.6622 69.6264 31.1831 66.5268 31.7178 63.4297C26.4517 63.3676 6.07212 64.1086 2.81448 62.7403C1.67033 62.2605 0.82079 61.1459 0.412135 59.9835C-0.0175487 58.7614 -0.137497 10.7894 0.17776 5.13678C0.224487 4.29555 0.385947 3.60039 0.796901 2.85162C1.63292 1.32115 3.07628 0.639244 4.67581 0.154356L4.81839 0.15045ZM34.4824 63.4171C33.929 66.5142 33.3993 69.6157 32.8926 72.7208L47.1963 72.7452L47.9219 72.6563C48.501 71.6376 46.9203 64.8299 46.6377 63.4102L34.4824 63.4171ZM29.7442 53.0704C21.0245 53.0708 11.438 52.856 2.81643 53.0821C2.74871 55.4174 1.99721 60.5283 5.40432 60.709C8.35371 60.8655 11.3503 60.8206 14.3067 60.8204L29.7139 60.8194C44.2506 60.8178 58.7992 60.8212 73.336 60.8008C74.8282 60.7987 75.9918 60.8271 77.3135 60.1016C78.663 58.1286 78.2591 55.5543 78.2217 53.0743L29.7442 53.0704ZM2.79397 50.3126L78.2061 50.3253L78.2197 12.0547L2.79397 12.0235V50.3126ZM76.209 3.02447C73.5352 2.61407 70.0812 2.80436 67.3233 2.8067L48.7461 2.83697L20.1162 2.81744C15.8684 2.8137 8.92565 2.64419 4.83206 2.90533C2.21204 4.688 2.78183 6.47131 2.8262 9.35553L76.4756 9.35846C77.5188 9.31392 77.4441 9.49821 78.044 8.88775C78.5437 7.16537 78.5838 3.38923 76.209 3.02447Z" fill="#3C3C3C"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>In-House Design, Development, and Quality Assurance</h5>
                  <p>Our Dubai-based development team establishes the system architecture and a rigorous <span className="txt-med">Quality Assurance (QA) Plan</span>. We build the solution in-house, followed by internal testing before releasing the system for <span className="txt-med">User Acceptance Testing (UAT)</span>.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">4</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="69" height="78" viewBox="0 0 69 78" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.4113 12.8146C55.2419 12.3471 58.7457 15.0286 59.296 18.8508C59.8486 22.6733 57.2435 26.2361 53.4347 26.8693C50.8955 27.2916 48.3288 26.3061 46.7228 24.2951C45.117 22.2839 44.724 19.5614 45.6964 17.1789C46.6714 14.7963 48.8573 13.1263 51.4113 12.8146ZM56.588 19.3127C56.2786 16.9644 54.154 15.2904 51.799 15.5402C50.2226 15.7076 48.8602 16.7176 48.2413 18.1779C47.6225 19.6384 47.8431 21.3202 48.8205 22.5705C49.7954 23.8207 51.3749 24.4433 52.9415 24.1965C55.2791 23.8277 56.8973 21.6607 56.588 19.3127Z" fill="#3C3C3C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.1648 0.0509725C66.8866 -0.0580361 66.9483 0.00446501 67.658 0.270699C68.8267 1.29501 68.8367 3.0837 68.9226 4.58515C69.8066 20.207 63.0189 30.8482 53.238 41.9992C53.7562 44.094 54.0458 46.2393 54.1023 48.3967C54.2864 57.0025 49.8292 63.9899 43.3191 69.1906C41.7524 70.4419 39.2298 72.849 37.2039 72.8937C36.7325 72.6887 36.1971 72.4054 36.2683 71.8215C36.9534 66.1391 37.7713 62.6418 35.1218 57.0353C26.6327 62.5356 29.267 62.053 22.1921 55.5871C14.2676 48.2901 11.4635 52.4234 17.6004 41.0695C13.6148 39.9591 9.68331 40.5387 5.74195 41.4436C4.84562 41.6494 2.69894 42.06 1.86891 41.9797C1.29427 41.0171 1.45686 40.4456 1.94801 39.4289C7.98415 26.9361 16.7531 20.587 30.947 21.2043C40.6226 10.4415 51.2635 1.68737 66.1648 0.0509725ZM50.822 44.1643C46.5786 48.2899 42.1014 51.8418 37.3963 55.4123C39.5768 60.2353 39.7 62.5358 39.5183 67.7883L39.4685 68.4221L39.7732 68.51C45.4877 64.1669 50.3841 59.1318 51.3025 51.6398C51.4596 50.3521 51.5537 45.0908 50.822 44.1643ZM65.8865 3.00996C65.2999 2.78808 65.1497 2.86404 64.5408 2.97578C49.7943 5.25927 37.1501 16.8098 28.7712 28.4797C24.6604 34.2043 19.8225 41.6199 16.9763 48.1389C19.2944 49.7754 21.6443 51.383 23.7488 53.2912C25.3548 54.88 27.0302 56.4977 28.5994 58.1154C44.0114 47.9635 61.5947 33.9971 65.5877 14.9514C66.123 12.3958 66.8712 5.26034 65.8865 3.00996ZM29.0388 23.7971C28.3021 23.815 26.7913 23.8035 26.1209 23.8732C15.5566 25.004 10.4317 29.9047 5.34352 38.6945L8.80348 38.051C12.4355 37.7174 15.2941 37.731 18.9089 38.5676C22.2143 33.1991 25.0385 28.7787 29.0388 23.7971Z" fill="#3C3C3C"/>
                    <path d="M13.7694 55.7716C14.9998 55.6502 17.9319 55.3761 17.534 57.3353C16.3799 58.6374 16.4265 58.4011 14.7886 58.516C6.73874 59.0807 3.25897 68.2703 2.86115 75.1067C8.66155 73.7459 14.7468 71.2262 17.9663 65.8727C18.9142 64.2982 18.8823 61.0613 20.724 60.3384C21.8046 60.6044 21.9666 60.9124 22.0796 61.907C21.0359 68.4307 16.2031 72.9577 10.3904 75.57C8.54859 76.398 2.82677 78.5208 0.935873 77.8069C-1.82926 75.3143 2.24968 65.0852 3.94167 62.6308C6.66014 58.6862 9.17235 56.7996 13.7694 55.7716Z" fill="#3C3C3C"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Deployment and Agile Ongoing Support</h5>
                  <p>Following a successful launch, we monitor the system to resolve initial bugs. We remain agile; <span className="txt-med">Change Requests</span> are promptly addressed as your business needs evolve or new gaps are identified.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* engagement model ends */}

      {/* partner with emqube section starts */}
      <section className="inside-partner-wrapper">
        <div className="container">
          <h2><span className="txt-med slide-up">Why Partner with emQube</span> for Business Applications?</h2>
          <ul>
            <li className="stagger-li">
              <div className="part-img">
                <img src="/assets/img/partner-img.jpg"></img>
                <div className="img-angle"><img src="/assets/img/partner-shape-circle.png"></img></div>
              </div>
              <div className="part-txt">
                <h3>20+ Years of Expertise in Dubai and the UAE</h3>
                <p>We are the preferred partners for large and medium enterprises seeking robust, <span className="txt-med">scalable software</span>. Our projects power mission-critical operations for clients across the Middle East, Europe, America, and Asia.</p>
              </div>
            </li>
            <li className="stagger-li">
              <div className="part-img">
                <img src="/assets/img/local-team-img.jpg"></img>
                <div className="img-angle"><img src="/assets/img/partner-shape-circle.png"></img></div>
              </div>
              <div className="part-txt">
                <h3>Local Team, End-to-End Delivery</h3>
                <p>Our entire team—including <span className="txt-med">Business Analysts, Software Architects, and Project Managers</span>—is based in Dubai. This provides you with direct access and real-time collaboration.</p>
              </div>
            </li>
            <li className="stagger-li">
              <div className="part-img">
                <img src="/assets/img/specialized-img.jpg"></img>
                <div className="img-angle"><img src="/assets/img/partner-shape-circle.png"></img></div>
              </div>
              <div className="part-txt">
                <h3>Specialized Technical Stack: Microsoft Platforms with Business insights</h3>
                <p>We specialize in high-performance delivery on <span className="txt-med">Microsoft platforms (C#, SQL, Angular)</span>, combining local presence with global technical excellence to ensure strict adherence to schedules and cost-competitiveness. Add to this our deep insights into business domains and processes.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* partner with emqube section ends */}

      {/* industry section starts */}
      <section className="insudtry-list-wrapp">
        <h2 className="slide-up">Work Reference</h2>
        <div className="container">
          <div className="left">
            <h3 className="slide-up">Industries</h3>
            <ul>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-fmcg"></i></span>
                <p>FMCG</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-automative"></i></span>
                <p>Automotive</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-insurance"></i></span>
                <p>Insurance</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-Logistics"></i></span>
                <p>Logistics</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-Facility-Management"></i></span>
                <p>Facility Management</p>
              </li>
            </ul>
          </div>
          <div className="right">
            <h3 className="slide-up">Applications</h3>
            <ul>
              <li className="stagger-li">
                <span className="icon"><i className="icon-Brokerage"></i></span>
                <p>Brokerage</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon-Operations"></i></span>
                <p>Operations</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon-Accounting"></i></span>
                <p>Accounting</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon-Reporting"></i></span>
                <p>Reporting</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon-Legacy-Integration"></i></span>
                <p>Legacy Integration</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-crm"></i></span>
                <p>CRM</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* industry section ends */}
      

      {/* Work Reference Section Starts */}
      <section className="work-ref-wrapper">
        <div className="container">
          <h2 className="txt-center slide-up">Select Projects</h2>
        </div>
        {windowWidth > 991 && slides.length <= 3 ? (
          <div className="centered-slides slide-up">
            {slides.map((slide) => (
              <div key={slide.key} className="swiper-slide" style={{ flex: '0 0 auto' }}>
                {slide.content}
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            className="workSwiper slide-up"
            navigation
            pagination
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
            {slides.map((slide) => (
              <SwiperSlide key={slide.key}>
                {slide.content}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
      {/* Work Reference Section Ends */}

      {/* faq section starts */}
      <section className="faq-accordion-wrapper">
        <div className="container">
          <div className="faq-accordion">
            <h2 className="faq-heading slide-up">Frequently Asked Questions</h2>
            <div className="accordion-list slide-up">
              {accordionItems.map((item, index) => (
                <div className={`accordion-item ${activeAccordion === index ? 'active' : ''}`} key={index}>
                  <button type="button" className="accordion-trigger" onClick={() => toggleAccordion(index)}>
                    <span>{item.question}</span>
                    <span className="accordion-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="20" viewBox="0 0 46 20" fill="none">
                        <path d="M22.7883 18.5158C22.6016 18.5181 22.4163 18.4812 22.2446 18.4076C22.0729 18.334 21.9185 18.2253 21.7914 18.0885L8.97291 5.27006C8.4032 4.70035 8.4032 3.8173 8.97291 3.24759C9.54262 2.67789 10.4257 2.67789 10.9954 3.24759L22.8168 15.069L34.6098 3.27608C35.1795 2.70637 36.0626 2.70637 36.6323 3.27608C37.202 3.84579 37.202 4.72884 36.6323 5.29855L23.8138 18.117C23.529 18.4018 23.1587 18.5443 22.8168 18.5443L22.7883 18.5158Z" fill="#707070"/>
                      </svg>
                    </span>
                  </button>
                  <div className="accordion-panel" style={{ maxHeight: activeAccordion === index ? '260px' : '0px' }}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* faq section ends */}

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
    <main className="inside-page inside-child">
      <Header />
    </main>
  );
}