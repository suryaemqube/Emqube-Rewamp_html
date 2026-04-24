import React, { useEffect, useState, useRef } from "react";
import "/src/assets/css/common.css";
import "/src/assets/css/home.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [menuItemActive, setMenuItemActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);        // level 1
  const [activeSubMenu, setActiveSubMenu] = useState(null);  // level 2

  const [scrolled, setScrolled] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [activeMenus, setActiveMenus] = useState({
    level1: null,
    level2: null,
  });

  const rightUlRef = useRef(null);
  const introUlRef = useRef(null);
  const wrapperRef = useRef(null);

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

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleMenuItem = () => {
    setMenuItemActive(!menuItemActive);
    // setMenuItemActive(prev => (prev === menu ? null : menu));
  };

  const toggleMainMenu = (menu) => {
    setActiveMenu(prev => (prev === menu ? null : menu));
    setActiveSubMenu(null); // reset child when parent closes
  };

  const toggleSubMenu = (submenu) => {
    setActiveSubMenu(prev => (prev === submenu ? null : submenu));
  };

  const handleMenuClick = (level, id) => {
    setActiveMenus(prev => ({
      ...prev,
      [level]: prev[level] === id ? null : id,
      ...(level === "level1" && { level2: null }) // reset child when parent changes
    }));
  };

  // homepage video section animation - onscroll - starts
  useEffect(() => {
    const itemsUl = rightUlRef.current;
    const items = rightUlRef.current?.children;
    const target = introUlRef.current;
    const wrapper = wrapperRef.current;

    if (!items?.length || !target || !wrapper) return;

    gsap.registerPlugin(ScrollTrigger);

    // 🔥 GAP CONTROL
    const GAP = 80;

    // 🔥 CALCULATE POSITIONS ONCE
    const positions = [];

    const targetRect = target.getBoundingClientRect();
    const colWidth = (targetRect.width - GAP) / 2;

    Array.from(items).forEach((el, i) => {
      const elRect = el.getBoundingClientRect();
      // const targetRect = target.getBoundingClientRect();

      // const colWidth = (targetRect.width - GAP) / 2;

      positions.push({
        x: targetRect.left - elRect.left + (i * colWidth),
      });
    });

    // 🔥 SAME Y FOR BOTH ITEMS
    // const targetRect = target.getBoundingClientRect();
    const firstRect = items[0].getBoundingClientRect();
    const baseY = targetRect.top - firstRect.top;

    // 🔥 INITIAL STATE
    gsap.set(wrapper, {
      width: 800,
      margin: "0 auto", // ✅ CENTER FIX
    });

    gsap.set(items, {
      // x: 80,
      x: (i) => {
        if (i === 0) {
          // left item
          // return center - itemWidth - GAP / 2;
          // return center - itemWidth;
          // return -265
          const w = window.innerWidth;

          if (w >= 1200) return 80;
          if (w >= 1380) return 80;
          if (w >= 1300) return 80;
          if (w >= 850) return 80;
          if (w >= 768) return 40;
          return 0;
        }

        if (i === 1) {
          // right item
          // return center + GAP / 2;
          // return -62
          const w = window.innerWidth

          if (w >= 1200) return 0;
          if (w >= 768) return 0;
          return 0;
        }
      },
      y: -50,
      scale: 0.7,
      rotate: (i) => (i === 0 ? -7.49 : 5.35),
      transformPerspective: 1200,
      transformOrigin: "center center",
      willChange: "transform",
    });

    // gsap.to(itemsUl, {
    //   display: "block",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".home-intro-wrapper",
    //     start: "top 30%",
    //     end: "bottom 60%",
    //     scrub: 1.2,
    //     invalidateOnRefresh: true,
    //   }
    // })
    // 🔥 WRAPPER ANIMATION (RESPONSIVE)
    gsap.to(wrapper, {
      // left: "35%",
      // xPercent: -50, // ✅ replaces translateX(-50%)
      // right: "auto",
      width: () => {
        const w = window.innerWidth;

        if (w >= 1500) return 1200;
        if (w >= 1300) return 1000;
        if (w >= 851) return "90%";
        return "80%";
      },
      ease: "none",

      scrollTrigger: {
        trigger: ".home-intro-wrapper",
        start: "top 30%",
        end: "bottom 60%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    // 🔥 ITEMS ANIMATION
    gsap.to(items, {
      // position: "absolute",
      // left: "50%",
      // top: 0,
      // x: (i) => positions[i].x,
      // x: (i) => {
      //   const baseX = positions[i].x;

      //   // 👇 push items apart from center
      //   if (i === 0) return baseX - GAP / 2;
      //   if (i === 1) return baseX + GAP / 2;

      //   return baseX;f
      // },

      x: (i) => {
        const containerWidth = introUlRef.current.getBoundingClientRect().width;
        const itemWidth = (containerWidth - GAP) / 2;

        // center point
        const center = containerWidth / 2;

        // if (i === 0) {
        //   return -(itemWidth + GAP / 2);
        // }

        // if (i === 1) {
        //   return GAP / 2;
        // }

        if (i === 0) {
          // left item
          // return center - itemWidth - GAP / 2;
          // return center - itemWidth;
          // return -265
          const w = window.innerWidth;

          if (w >= 1700) return -413;
          if (w >= 1500) return -300;
          if (w >= 1380) return -265;
          if (w >= 1300) return -230;
          if (w >= 850) return -176;
          if (w >= 768) return -165;
          return 0;
        }

        if (i === 1) {
          // right item
          // return center + GAP / 2;
          // return -62
          const w = window.innerWidth

          if (w >= 1700) return -250;
          if (w >= 1500) return -140;
          // if (w >= 1500) return -250;
          if (w >= 1380) return -62;
          if (w >= 1200) return -15;
          if (w >= 850) return -25;
          if (w >= 768) return -7;
          return 0;
        }

        return 0;
      },

      // ✅ SAME Y ALIGNMENT
      // y: baseY,

      y: () => {
        const w = window.innerWidth

        if (w >= 1381) return baseY;
        if (w >= 1300) return 645;
        if (w >= 852) return 580;
        if (w >= 768) return 550;
        return baseY;
      },

      scale: 1,
      rotate: 0.18,

      // ✅ WIDTH WITH GAP FIX
      width: () => {
        const containerWidth = target.getBoundingClientRect().width;
        // return (containerWidth - GAP) / 2;
        return (containerWidth  / 2) - GAP;
        // return (containerWidth) / 2;

      },

      height: () => {
        const w = window.innerWidth

        if (w >= 1501) return 480;
        if (w >= 1301) return 380;
        if (w >= 1101) return 350;
        if (w >= 768) return 320;
        // if (w >= 850) return 500;
        return baseY;
      },

      margin: 0,
      ease: "none",

      scrollTrigger: {
        trigger: ".home-intro-wrapper",
        start: "top 30%",
        end: "bottom 80%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  // homepage video section animation - onscroll - ends


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
            <a href="index.js" className="logo-emqube">
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
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21" fill="none">
          <path d="M0 1.45104C0 0.648958 0.650416 0 1.45104 0H13.1323C13.5171 1.14691e-08 13.8862 0.152877 14.1583 0.425C14.4305 0.697123 14.5833 1.0662 14.5833 1.45104C14.5833 1.83588 14.4305 2.20496 14.1583 2.47708C13.8862 2.74921 13.5171 2.90208 13.1323 2.90208H1.45104C1.0662 2.90208 0.697123 2.74921 0.425 2.47708C0.152877 2.20496 0 1.83588 0 1.45104ZM0 10.2083C0 9.40625 0.650416 8.75729 1.45104 8.75729H27.7156C28.1005 8.75729 28.4695 8.91017 28.7417 9.18229C29.0138 9.45442 29.1667 9.82349 29.1667 10.2083C29.1667 10.5932 29.0138 10.9623 28.7417 11.2344C28.4695 11.5065 28.1005 11.6594 27.7156 11.6594H1.45104C1.0662 11.6594 0.697123 11.5065 0.425 11.2344C0.152877 10.9623 0 10.5932 0 10.2083ZM1.45104 17.5146C1.0662 17.5146 0.697123 17.6675 0.425 17.9396C0.152877 18.2117 0 18.5808 0 18.9656C0 19.3505 0.152877 19.7195 0.425 19.9917C0.697123 20.2638 1.0662 20.4167 1.45104 20.4167H18.9656C19.3505 20.4167 19.7195 20.2638 19.9917 19.9917C20.2638 19.7195 20.4167 19.3505 20.4167 18.9656C20.4167 18.5808 20.2638 18.2117 19.9917 17.9396C19.7195 17.6675 19.3505 17.5146 18.9656 17.5146H1.45104Z" fill="white"/>
        </svg> */}
      </div>
      <nav className={`main-nav menu-toggle ${menuActive ? "active" : ""}`}>
        <ul className="main-nav-ul d-flex">
          <li className={`menu-item-has-children children-level-2 ${activeMenu === "software" ? "click" : ""}`} onClick={() => toggleMainMenu("software")}>
            <a href="javascript:void(0);">Software</a>
            <ul className={`sub-menu submenu has-children-inner  ${activeMenu === "software" ? "show" : ""}`}>
              <li className={`menu-item-has-children children-level-0 ${activeSubMenu === "development" ? "click" : ""}`} onClick={(e) => {e.stopPropagation(); toggleSubMenu("development");}}>
                <a href="javascript:void(0);">Development</a>
                <ul className={`sub-menu submenu has-children-inner  ${activeSubMenu === "development" ? "show" : ""}`}>
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
                <ul className="sub-menu submenu has-children-inner ">
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children children-level-2">
                <a href="javascript:void(0);">Consulting</a>
                <ul className="sub-menu submenu has-children-inner ">
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

      {/* Home page INtro section - starts */}
      <section className="hero-video-wrapper fade-in">
        <div className="container">
          <video autoPlay muted loop playsInline preload="none">
            <source src="https://wp.emqubeweb.com/emqube-revamp/vid/hero-section-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
            <source src="https://wp.emqubeweb.com/emqube-revamp/vid/hero-section-mob.mp4" media="(max-width: 767px)" type="video/mp4" />
          </video>
          <div className="hero-txt">
            <h1>Go Digital<span className="txt-med d-block">We know how.</span></h1>
            <a href="javascript:void(0);" class="view-all">
              <span class="text">know more</span>
              <span class="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Home page INtro section - ends */}

      {/* Home Page Intro section starts */}
      <section className="home-intro-wrapper slide-up">
        <div className="container">
          <div className="left">
            <div className="count-wrapper">
              <ul className="d-flex">
                <li>
                  <p className="count">
                    <span className="num">200</span>
                    <span className="icon">+</span>
                  </p>
                  <p className="count-txt">Projects Successfully Delivered</p>
                </li>
                <li>
                  <p className="count">
                    <span className="num">20</span>
                    <span className="icon">+</span>
                  </p>
                  <p className="count-txt">Years in Dubai</p>
                </li>
                <li>
                  <p className="count">
                    <span className="num">8</span>
                    <span className="icon">+</span>
                  </p>
                  <p className="count-txt">Countries Served</p>
                </li>
                <li>
                  <p className="count">
                    <span className="num">80</span>
                    <span className="icon">+</span>
                  </p>
                  <p className="count-txt">Years of Team Exoperience</p>
                </li>
              </ul>
            </div>
            <div className="intro-txt">
              <h2 className="head-txt"><span className="txt-grey">Keeping</span> Business First. <span className="txt-grey d-block">Always.</span></h2>
              <p>Since 2003, we have a single focus on helping businesses succeed by leveraging digital technology. As a <a href="software-solution-house"><span className="txt-med">software solutions house</span></a> we assist companies to automate business processes. As a <a href="#"><span className="txt-med">digital content studio</span></a> we create content that builds your brand value and gets more  business. We are about understanding your 'Business First'</p>
            </div>
          </div>
          <div className="right anim-vid-wrapp" ref={wrapperRef}>
            <ul className=""  ref={rightUlRef}>
              <li>
                <a href="software-solution-house/">
                  <video autoPlay muted loop playsInline preload="none">
                    <source src="https://wp.emqubeweb.com/emqube-revamp/vid/intro-vid1.mp4" type="video/mp4" />
                  </video>
                  <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                      <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <h4>Software Solutions House</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <video autoPlay muted loop playsInline preload="none">
                    <source src="https://wp.emqubeweb.com/emqube-revamp/vid/intro-vid2.mp4" type="video/mp4" />
                  </video>
                  <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                      <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <h4>Digital Content Studio</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="intro-vid-wrapp">
            <ul className="d-flex"  ref={introUlRef}>
              <li className="d-none">
                <a href="software-solution-house/">
                  <video autoPlay muted loop playsInline preload="none">
                    <source src="https://wp.emqubeweb.com/emqube-revamp/vid/intro-vid1.mp4" type="video/mp4" />
                  </video>
                  <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                      <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <h4>Software Solutions <span className="txt-light">House</span></h4>
                </a>
              </li>
              <li className="d-none">
                <a href="javascript: void(0);">
                  <video autoPlay muted loop playsInline preload="none">
                    <source src="https://wp.emqubeweb.com/emqube-revamp/vid/intro-vid2.mp4" type="video/mp4" />
                  </video>
                  <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                      <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <h4>Digital Content <span className="txt-light">Studio</span></h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Home Page Intro section ends */}

      {/* Home Page Why choose section starts */}
      <section className="home-choose-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient-mix slide-up">Why <span className="txt-med">Choose Us</span></h2>
          <div className="home-why-choose-list">
            <ul className="d-flex">
              <li className="stagger-li">
                <div className="icon">
                  <div className="desk">
                    <svg xmlns="http://www.w3.org/2000/svg" width="427" height="162" viewBox="0 0 427 162" fill="none">
                      <path d="M251.854 72.1743C253.987 72.045 256.604 72.2082 258.791 72.1499C261.062 72.1559 263.335 72.1278 265.605 72.1655C266.242 72.1761 266.989 72.3592 267.002 73.145C267.028 74.6895 267.008 76.2368 267.009 77.7808L267.011 87.7163L267.019 118.939C268.235 118.934 269.453 118.943 270.669 118.966C270.693 119.92 270.707 120.761 270.679 121.717C269.196 121.771 267.507 121.737 266.009 121.74L255.779 121.722L224.898 121.733L180.213 121.736L161.542 121.741C157.982 121.767 154.422 121.756 150.862 121.705C150.84 120.796 150.84 119.887 150.864 118.978C152.57 118.913 154.399 118.942 156.114 118.941L164.805 118.936L195.65 118.921L195.655 115.21L195.65 108.629C195.649 107.51 195.639 106.393 195.661 105.271C195.673 104.698 195.831 104.063 196.516 103.998C197.152 103.937 197.838 103.965 198.482 103.964L202.304 103.965L207.538 103.966C208.478 103.967 209.411 103.963 210.352 103.994C210.772 103.923 211.406 104.442 211.422 104.891C211.582 109.537 211.339 114.265 211.479 118.91C212.358 118.921 213.237 118.925 214.115 118.925L214.132 104.02L214.122 99.6333C214.119 98.8305 214.096 98.0182 214.139 97.2173C214.191 96.2532 214.954 96.148 215.728 96.1538C219.801 96.1845 223.875 96.1756 227.947 96.144C228.704 96.1382 229.877 96.1072 229.927 97.1333C229.977 97.9825 229.96 98.839 229.959 99.6899L229.956 104.081L229.97 118.929L232.625 118.939C232.521 111.181 232.62 103.219 232.618 95.4458L232.597 89.4106C232.592 88.4634 232.55 87.3325 232.645 86.3892C232.689 85.9476 233.133 85.6537 233.478 85.4263L242.748 85.4243C244.334 85.4202 245.945 85.3708 247.523 85.4565C248.632 85.5171 248.445 86.8256 248.444 87.5884C248.444 88.2845 248.435 88.9816 248.433 89.6772L248.421 96.0239L248.435 118.941L251.13 118.932L251.12 84.4819V76.3042C251.119 75.2546 251.065 73.9614 251.17 72.9194C251.202 72.5985 251.591 72.3354 251.854 72.1743ZM235.392 88.2681L235.375 118.924C238.666 118.94 242.443 119.027 245.704 118.927C245.62 112.343 245.714 105.621 245.694 99.02L245.679 91.9409C245.677 90.9542 245.61 89.1859 245.712 88.2661L235.392 88.2681ZM227.195 98.9419C223.854 98.9416 220.196 98.8634 216.881 98.9585L216.884 118.937C220.196 118.963 223.885 118.996 227.187 118.932C227.275 116.747 227.202 114.027 227.2 111.803L227.195 98.9419ZM253.879 74.9487L253.899 99.4575C253.912 105.855 254.002 112.541 253.891 118.921C254.781 118.925 263.976 119.05 264.244 118.828L264.216 89.0376L264.218 80.1636C264.214 78.5308 264.147 76.5413 264.246 74.9487C260.809 74.9428 257.315 74.9114 253.879 74.9487ZM198.416 106.725L198.417 118.925L207.328 118.943L208.714 118.934L208.723 106.735L200.005 106.716L198.416 106.725Z" fill="#333333"/>
                      <path d="M183.298 46.09C185.239 45.9633 188.289 46.0618 190.291 46.0627L203.308 46.0559C205.297 46.0553 206.605 46.0711 208.128 47.634C210.114 49.6733 209.498 54.1877 209.497 56.9875L222.163 56.9895C223.755 56.9918 227.427 56.8718 228.853 57.2063C230.113 57.5097 231.265 58.1578 232.182 59.0803C233.159 60.0519 233.856 61.2742 234.197 62.6154C234.491 63.8085 234.385 66.0048 234.382 67.341C234.372 69.3233 234.376 71.3061 234.395 73.2883C233.551 73.8273 232.275 74.8814 231.571 75.5725C231.6 75.3607 231.621 75.0435 231.621 74.8254C231.624 72.7107 231.641 70.6107 231.621 68.4934C231.606 66.8916 231.706 65.0128 231.497 63.4553C231.411 62.8141 230.801 61.721 230.338 61.2668C229.304 60.253 228.318 59.789 226.893 59.7873C222.145 59.7818 217.399 59.7919 212.655 59.7912L183.223 59.7902H168.254L163.673 59.7863C162.778 59.7851 161.869 59.7649 160.97 59.8264C159.083 59.9653 157.251 61.5899 157.005 63.5197C156.836 64.8446 156.933 66.7005 156.931 68.093L156.926 78.4846C157.833 78.7461 158.912 79.2449 159.835 79.5744C168.977 82.8369 178.108 84.3988 187.733 85.3586C187.732 84.3521 187.699 83.3401 187.7 82.3371C187.7 81.8965 187.734 81.4244 188.073 81.1232C188.224 80.9791 188.471 80.8142 188.686 80.8059C189.83 80.7614 191.014 80.7896 192.159 80.7912L199.839 80.8156C200.706 81.3436 200.612 82.0721 200.621 82.9846C200.629 83.7862 200.632 84.5891 200.642 85.3908C201.937 85.1599 203.275 85.0649 204.585 84.9182C206.017 84.7439 207.448 84.5542 208.876 84.3479C211.364 83.9735 213.836 83.5005 216.286 82.9309C218.458 82.4477 221.198 81.796 223.331 81.1252C222.847 81.5564 221.966 82.129 221.405 82.5158C220.367 83.2297 219.333 83.9489 218.303 84.674C217.9 84.9585 217.074 85.5727 216.636 85.7092C215.66 86.0124 214.507 86.2068 213.492 86.4055C210.851 86.914 208.191 87.325 205.519 87.6369C203.886 87.8402 202.276 88.057 200.631 88.133C200.594 90.3381 200.894 92.8687 198.011 93.5598C196.983 93.8059 195.747 93.6401 194.689 93.6721C193.679 93.7026 192.643 93.6599 191.631 93.6926C189.477 93.7692 187.718 92.4336 187.758 90.1555C187.769 89.5145 187.761 88.7956 187.767 88.1379C185.4 88.0886 182.311 87.6058 179.942 87.2795C171.901 86.1718 164.547 84.2763 156.913 81.4758L156.915 99.0061L156.905 103.793C156.899 105.991 156.639 108.156 158.316 109.863C158.979 110.541 159.847 110.98 160.783 111.108C161.598 111.226 163.506 111.171 164.395 111.167L170.393 111.168L192.644 111.169L192.669 114.009C189.875 113.938 186.931 113.996 184.126 113.998L169.006 113.984L163.511 113.999C160.836 113.999 158.759 114.07 156.621 112.149C155.162 110.857 154.279 109.029 154.169 107.074C154.117 106.127 154.152 104.855 154.153 103.879L154.16 98.1106L154.159 79.5842L154.16 68.6965C154.158 67.2825 154.175 65.8571 154.157 64.4445C154.134 62.5503 154.741 60.784 156.011 59.3606C156.907 58.3442 158.076 57.6121 159.377 57.2522C160.875 56.8505 164.052 56.9686 165.712 56.9719L173.97 56.9777C175.538 56.9805 177.416 57.0347 178.963 56.9484C178.924 55.2328 178.957 53.5069 178.939 51.7902C178.933 51.2024 178.936 50.5749 179.049 49.9982C179.178 49.3074 179.463 48.6558 179.882 48.094C180.738 46.9505 181.899 46.2814 183.298 46.09ZM197.876 83.5783C195.574 83.5696 192.775 83.5022 190.516 83.594C190.538 84.9451 190.545 86.2964 190.536 87.6477C190.535 87.9777 190.519 88.347 190.535 88.6711C190.576 89.4959 190.335 90.9006 191.519 90.9152C193.243 90.9362 194.969 90.8971 196.694 90.9445C197.111 90.956 197.367 90.9354 197.671 90.6389C198.014 90.0254 197.897 88.6743 197.892 87.9397C197.872 86.486 197.867 85.0321 197.876 83.5783ZM187.723 48.8352C186.805 48.8335 184.41 48.7161 183.582 48.8518C182.908 49.0942 182.244 49.4992 181.922 50.174C181.459 51.1437 181.746 55.5634 181.685 56.9611C184.283 57.0496 187.006 56.9537 189.616 56.969C194.645 56.9984 199.693 56.9277 204.721 56.9856L206.717 56.9846C206.697 54.9486 206.841 52.6376 206.62 50.6516C206.369 48.3933 203.262 48.8267 201.783 48.8313L195.978 48.844L187.723 48.8352Z" fill="#333333"/>
                      <path d="M256.784 49.0719C257.929 49.0318 267.034 48.9393 267.585 49.2504C267.784 49.363 267.906 49.6588 267.961 49.8733C268.178 50.7123 268.015 52.7782 268.018 53.7444C268.025 55.7644 268.141 57.852 268.022 59.8647C268.008 60.0944 267.995 60.329 267.868 60.5276C267.69 60.8057 267.367 60.9557 267.057 61.0264C266.549 61.1422 265.762 61.1585 265.312 60.8537C265.118 60.7239 264.977 60.528 264.914 60.3017C264.806 59.9197 264.821 58.594 264.717 58.0415C264.514 56.9626 264.232 55.9596 264.034 54.8811C261.612 57.3501 259.15 59.778 256.647 62.1635C244.228 73.8453 230.464 84.2246 215.252 91.876C214.825 92.0914 214.406 92.2995 213.969 92.4962C211.951 93.3428 209.974 94.4489 207.9 95.2123C207.174 95.4792 206.437 95.8462 205.684 96.0201C206.478 95.2743 207.529 94.7857 208.463 94.2272C210.394 93.0965 212.313 91.9455 214.219 90.7744C219.393 87.5217 224.471 84.1173 229.447 80.5654C236.841 75.3228 243.941 69.6704 250.713 63.6343C252.74 61.8267 254.732 59.9806 256.689 58.0969C258.399 56.4429 260.218 54.5818 261.965 53.0036C260.937 52.8462 260.088 52.3519 259.127 52.1033C258.521 51.9465 257.264 52.0134 256.552 51.9983C256.314 51.837 256.048 51.6641 255.966 51.3777C255.685 50.3931 255.734 49.4642 256.784 49.0719Z" fill="#333333"/>
                      <path d="M267 118.5V119.999C286.5 122 336 112.9 346 130.5C356 148.1 423 128.5 426.5 128.5" stroke="#333333" stroke-width="2.6"/>
                      <path d="M191.5 112.5H144.5C117.167 112.667 55.2714 105.878 48.5 71.5C42 38.5 10.5 38.5009 0 38.5" stroke="#333333" stroke-width="2.6"/>
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
                  {/* <img src="/assets/img/business-icon.svg" alt="Business First"></img> */}
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Business First</h3>
                  <p>We understand your business deeply before we talk about technology or design</p>
                </div>
                <div className="icon-num">1</div>
              </li>
              <li className="stagger-li">
                <div className="icon">
                  <div className="desk">
                    <svg xmlns="http://www.w3.org/2000/svg" width="427" height="162" viewBox="0 0 427 162" fill="none">
                      <path d="M209.98 42.042C213.517 41.788 220.233 42.7271 223.745 43.751C230.728 45.9307 237.664 50.2988 241.322 56.8721C243.68 61.1086 244.169 66.3461 242.995 71.0274C241.437 77.2404 236.841 82.0229 231.605 85.3584C230.461 86.0875 229.235 86.5493 228.068 87.2188C228.172 87.9283 228.4 89.356 228.685 89.9873C229.289 91.345 230.665 92.7076 230.948 94.168C231.266 95.8063 228.842 95.1223 228.04 95.0264C224.481 94.6006 221.88 92.2558 219.237 90.0459C217.022 90.356 214.791 90.5253 212.555 90.5508C210.63 90.5768 205.84 90.5334 204.056 89.9863C203.231 90.5448 202.359 91.4081 201.565 92.0606C199.49 93.7553 196.998 94.8511 194.356 95.2305C193.678 95.3309 192.809 95.4922 192.243 95.0645C191.425 93.8463 193.649 91.9015 194.111 90.8301C194.63 89.6273 194.835 88.5604 195.006 87.2822C193.933 86.6872 192.709 86.2311 191.691 85.624C185.251 81.7818 179.777 75.5719 179.222 67.7627C178.856 62.5026 180.596 57.3147 184.051 53.3633C190.224 46.1754 199.216 42.7414 208.432 42.1543C208.947 42.1214 209.465 42.0783 209.98 42.042ZM212.806 44.209C211.961 44.1794 210.511 44.1645 209.683 44.2295C201.179 44.7373 191.83 48.0026 186.053 54.3574C176.315 65.0688 182.567 78.8661 194.294 84.3496C194.982 84.6715 196.106 85.1979 196.722 85.6963C197.867 87.1219 196.218 91.2872 195.71 92.5566C198.358 91.6243 201.486 90.1075 202.921 87.5342C206.782 87.945 209.835 88.3249 213.738 88.1338C214.901 88.076 216.062 87.971 217.217 87.8184C221.019 87.3156 219.34 86.9693 222.006 89.585C223.103 90.6615 226.163 92.0684 227.602 92.7559C226.311 90.1505 226.118 88.8808 226.009 85.9981L226.098 85.9141C227.03 85.0484 229.372 84.1728 230.55 83.3447C231.803 82.4634 233.209 81.6129 234.375 80.5791C238.298 77.1025 241.347 72.15 241.665 66.792C241.925 62.4093 239.603 57.4973 236.777 54.2744C236.174 53.5858 235.036 52.6239 234.333 52.0332C228.438 47.0809 220.402 44.4752 212.806 44.209Z" fill="#333333"/>
                      <path d="M211.405 55.6836C211.98 55.6959 212.552 55.7716 213.11 55.9095C213.867 56.0975 214.405 56.3636 215.093 56.6432C220.431 58.8132 222.046 66.2858 218.985 70.9688C217.764 72.8376 216.639 73.829 216.032 76.155C215.464 76.1999 214.801 76.1451 214.224 76.1146C214.595 75.0463 214.896 73.9081 215.444 72.9004C216.328 71.3195 217.455 70.1254 218.153 68.4232C220.305 63.1707 215.578 56.3882 209.786 57.9562C207.278 58.6351 206.1 60.1443 204.8 62.3303C204.548 62.8132 204.405 63.475 204.331 63.9824C203.722 68.1694 205.622 69.7575 207.664 72.8873C208.03 73.4488 208.256 74.7937 208.741 75.4763C209.096 75.6674 208.942 75.6354 209.327 75.6178C210.46 74.6817 207.829 69.8786 208.325 68.6404C208.447 68.3382 209.219 68.1217 209.537 68.0147C210.419 70.1617 210.99 73.717 211.109 76.0436C210.272 76.0422 207.648 76.3006 207.002 76.0429C206.711 75.9266 206.18 74.0177 205.945 73.618C205.608 73.106 205.187 72.4683 204.795 72.0085C201.677 68.352 201.51 62.7686 204.602 59.0189C206.104 57.1972 209.017 55.9153 211.405 55.6836Z" fill="#333333"/>
                      <path d="M207.166 79.414C208.526 79.3895 214.586 79.2679 215.55 79.5697C216.033 79.9754 215.966 80.503 215.652 81.0122L215.551 81.0362C214.892 81.1979 213.753 81.1534 213.043 81.1461C211.354 81.1134 209.656 81.2577 207.971 81.2014C206.957 81.1674 207.071 80.123 207.166 79.414Z" fill="#333333"/>
                      <path d="M208.406 76.7212C210.677 76.8024 213.374 76.5215 215.626 76.8749C216.088 76.9474 216.019 77.8812 215.829 78.249C215.501 78.4628 215.222 78.4285 214.824 78.4425C213.686 78.4328 208.023 78.6013 207.273 78.3821C206.882 77.9771 206.857 77.4013 207.178 76.9438C207.518 76.6998 207.965 76.7413 208.406 76.7212Z" fill="#333333"/>
                      <path d="M214.038 67.9629C214.407 68.1029 214.995 68.5169 214.994 68.8142C214.992 69.606 213.721 75.7486 213.571 76.0095L213.276 76.0214L212.049 75.9309C212.295 74.2476 213.106 69.0782 214.038 67.9629Z" fill="#333333"/>
                      <path d="M209.284 81.6777C210.571 81.9468 211.594 81.938 212.888 81.7692C213.49 81.6904 214.364 81.5873 214.602 82.2672C214.516 82.8563 214.081 83.2221 213.668 83.6135C212.946 84.1306 212.587 84.3093 211.677 84.3644C210.532 84.4336 208.667 83.5046 208.689 82.1993C208.896 81.8069 208.843 81.9189 209.284 81.6777Z" fill="#333333"/>
                      <path d="M197.493 59.3594C198.609 59.6777 203.036 60.8703 200.793 62.5621C199.21 62.1672 195.302 61.6765 197.493 59.3594Z" fill="#333333"/>
                      <path d="M225.137 59.5898C226.381 59.9405 226.437 61.2215 225.228 61.7426C224.319 62.134 223.437 62.3348 222.488 62.5856C221.855 62.4657 221.269 61.9765 221.6 61.401C222.06 60.6029 224.368 59.8948 225.137 59.5898Z" fill="#333333"/>
                      <path d="M202.849 52.4746C203.996 52.4964 205.744 54.9834 205.716 56.0414C205.588 56.421 205.456 56.4756 205.138 56.7198C203.853 56.7037 202.599 54.4263 202.159 53.3618C202.368 53.0571 202.616 52.763 202.849 52.4746Z" fill="#333333"/>
                      <path d="M219.872 52.5938C220.571 52.6197 220.781 52.925 221.276 53.4135C220.89 54.0846 219.398 56.1801 218.883 56.7355C218.446 56.827 218.306 56.8248 217.896 56.6681C216.95 55.6343 219.114 53.3158 219.872 52.5938Z" fill="#333333"/>
                      <path d="M211.085 49.2676C213.133 49.3118 212.486 51.4237 212.565 52.8777C212.591 53.3716 212.517 53.7322 212.175 54.1021C211.838 54.2082 211.786 54.2433 211.444 54.217C210.427 53.6818 210.643 50.1388 211.085 49.2676Z" fill="#333333"/>
                      <path d="M258.585 78.3906C274.86 78.0233 281.727 95.0883 274.56 108.308C272.714 111.713 269.813 114.209 270.189 118.474C270.243 119.074 270.306 119.895 270.46 120.475C271.65 124.96 274.213 129.05 276.206 133.203C276.423 133.656 276.562 134.743 276.334 135.216C274.413 135.848 269.623 124.811 268.999 123.25C267.503 119.504 267.708 114.101 270.322 110.804C282.408 95.5577 271.213 75.3675 251.688 82.0139C248.529 83.0891 244.663 86.0011 243.294 89.1157C241.941 91.9893 241.501 94.0986 241.216 97.3372C241.116 98.4731 241.336 100.484 240.959 101.492C239.857 104.44 237.682 105.425 236.268 108.449C237.466 109.618 238.495 109.593 240.084 110.107C240.138 111.44 239.965 112.977 240.1 114.228C240.317 115.135 240.718 115.854 240.818 116.799C241.068 119.161 239.78 120.898 242.074 122.383C244.369 122.511 247.665 121.707 250.111 121.317C253.474 120.781 254.28 121.841 253.185 125.192C253.002 125.748 252.582 126.48 252.28 127.009C250.259 130.542 247.874 133.853 245.366 137.046C244.938 137.591 243.52 138.862 242.87 138.195C242.599 136.658 245.628 133.291 246.49 131.903C247.785 129.823 249.536 127.908 250.559 125.628C250.858 124.964 251.23 124.251 251.55 123.588C248.402 123.824 244.656 124.816 241.607 124.479C238.061 124.087 239.072 119.643 238.802 117.603C238.458 114.996 237.595 114.818 238.141 111.892C236.521 111.296 234.367 110.746 234.316 108.636C234.241 105.599 237.842 103.908 238.787 101.141C239.258 99.7602 239.032 98.4139 239.128 96.9842C239.355 92.3887 240.894 87.8234 244.003 84.3996C247.572 80.4682 253.456 78.6572 258.585 78.3906Z" fill="#333333"/>
                      <path d="M164.515 78.4863C168.161 78.1001 171.44 78.954 174.826 80.1976C179.372 81.8681 182.75 84.9741 184.596 89.5224C185.532 91.829 185.909 93.6193 185.971 96.1258C186.083 97.4103 185.754 99.5831 186.223 100.738C187.732 104.459 191.568 105.063 190.794 109.615C189.802 110.829 188.756 111.508 187.239 111.853C188.081 115.059 187.111 114.708 186.481 117.633C186.331 118.728 186.484 119.826 186.402 120.933C186.078 125.286 182.451 124.599 179.382 124.272C177.532 124.058 175.678 123.871 173.823 123.713C175.348 127.189 177.599 129.909 179.754 132.992C180.271 133.731 183.415 137.434 182.39 138.198C181.937 138.234 181.456 138.057 181.01 137.931C178.657 134.984 172.951 127.967 172.008 124.745C171.744 123.843 171.632 122.581 172.138 121.738C172.343 121.395 172.688 121.284 173.063 121.245C173.907 121.155 174.803 121.363 175.638 121.493C177.54 121.789 181.557 122.621 183.261 122.237C185.246 121.79 184.237 118.23 184.491 116.744C184.669 115.71 185.154 114.871 185.704 114.002C185.558 113.248 185.127 111.293 185.3 110.647C185.63 109.413 188.117 109.87 188.879 108.595C189.17 107.283 186.576 104.968 185.648 103.852C183.349 101.09 184.329 99.2968 184.039 96.0147C183.857 93.9429 183.431 92.5153 182.663 90.6027C181.351 87.1869 179.648 85.3902 176.6 83.4355C172.576 80.8964 165.756 80.0772 161.225 81.4077C150.207 84.6435 146.963 98.6763 152.98 107.805C155.562 111.723 157.512 113.788 157.254 118.771C157.048 122.745 155.66 125.6 153.81 129.034C153.253 130.056 150.35 136.216 149.007 135.302C148.319 134.072 150.387 130.8 151.018 129.627C152.784 126.348 154.701 123.173 155.225 119.429C155.904 114.58 152.754 111.81 150.52 107.967C146.701 101.032 147.168 90.8817 152.296 84.7246C155.435 80.9563 159.754 78.9868 164.515 78.4863Z" fill="#333333"/>
                      <path d="M180 135C192 150 232 150.5 244.5 136" stroke="#333333" stroke-width="1.9" stroke-linecap="round"/>
                      <path d="M152.405 130.926C152.64 130.426 152.426 129.83 151.926 129.595C151.426 129.36 150.83 129.574 150.595 130.074L151.5 130.5L152.405 130.926ZM62.5 135L62.2671 135.972C76.523 139.386 96.8497 142.524 114.642 142.675C123.533 142.75 131.848 142.08 138.472 140.297C145.057 138.524 150.213 135.584 152.405 130.926L151.5 130.5L150.595 130.074C148.787 133.916 144.368 136.638 137.953 138.366C131.577 140.082 123.467 140.75 114.658 140.675C97.0503 140.526 76.877 137.414 62.7329 134.027L62.5 135ZM0 132.5V133.5C8.21386 133.5 34.0179 129.208 62.2671 135.972L62.5 135L62.7329 134.027C34.1821 127.191 7.78614 131.5 0 131.5V132.5Z" fill="#333333"/>
                      <path d="M273.5 131C292.49 164.922 423 96 426 96" stroke="#333333" stroke-width="1.9" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <div className="mob">
                    <svg xmlns="http://www.w3.org/2000/svg" width="269" height="110" viewBox="0 0 269 110" fill="none">
                      <path d="M115 88.9639C125 97.4639 141.5 102.464 154.5 87.4639" stroke="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M132.365 32.1454C134.497 31.9924 138.544 32.5585 140.661 33.1757C144.871 34.4897 149.053 37.1231 151.258 41.0858C152.679 43.6398 152.974 46.797 152.267 49.6191C151.328 53.3645 148.557 56.2479 145.401 58.2587C144.711 58.6982 143.971 58.9772 143.268 59.3808C143.33 59.8087 143.468 60.6693 143.64 61.0497C144.004 61.868 144.833 62.6891 145.004 63.5692C145.196 64.5569 143.735 64.1446 143.251 64.0868C141.106 63.8302 139.538 62.4171 137.945 61.0849C136.609 61.2718 135.263 61.3732 133.915 61.3886C132.755 61.4043 129.868 61.3785 128.792 61.0487C128.295 61.3853 127.77 61.9055 127.291 62.2987C126.04 63.3204 124.538 63.9812 122.946 64.2099C122.537 64.2704 122.012 64.3681 121.671 64.1103C121.178 63.3761 122.518 62.2035 122.797 61.5575C123.11 60.8324 123.234 60.1885 123.337 59.4179C122.691 59.0592 121.953 58.7847 121.339 58.4189C117.457 56.1026 114.157 52.3591 113.822 47.6513C113.601 44.4802 114.65 41.3527 116.733 38.9706C120.454 34.6375 125.874 32.5668 131.43 32.2128C131.741 32.193 132.054 32.1673 132.365 32.1454ZM134.068 33.4521C133.559 33.4342 132.684 33.4255 132.185 33.4648C127.058 33.7709 121.423 35.7393 117.94 39.5702C112.07 46.0274 115.838 54.3445 122.908 57.6503C123.323 57.8444 124 58.1614 124.371 58.4618C125.062 59.3211 124.067 61.8335 123.761 62.5985C125.357 62.0365 127.244 61.1216 128.109 59.5702C130.436 59.8179 132.277 60.0468 134.63 59.9316C135.331 59.8967 136.031 59.8331 136.727 59.7411C139.019 59.4381 138.007 59.2299 139.614 60.8066C140.275 61.4556 142.121 62.3033 142.988 62.7177C142.209 61.1471 142.092 60.3823 142.027 58.6444L142.08 58.5937C142.642 58.0718 144.054 57.544 144.764 57.0448C145.52 56.5135 146.368 56.001 147.071 55.3778C149.435 53.282 151.274 50.2963 151.465 47.0663C151.622 44.4243 150.222 41.4633 148.519 39.5204C148.155 39.1053 147.469 38.525 147.045 38.1689C143.491 35.1834 138.647 33.6125 134.068 33.4521Z" fill="#333333"/>
                      <path d="M133.224 40.3694C133.57 40.3768 133.915 40.4224 134.251 40.5056C134.708 40.6189 135.032 40.7793 135.447 40.9479C138.664 42.256 139.638 46.7608 137.793 49.5839C137.057 50.7105 136.378 51.3082 136.013 52.7104C135.67 52.7375 135.271 52.7044 134.923 52.686C135.146 52.0421 135.328 51.3559 135.658 50.7484C136.191 49.7954 136.871 49.0755 137.291 48.0494C138.589 44.8829 135.739 40.7941 132.247 41.7394C130.736 42.1487 130.025 43.0585 129.242 44.3763C129.09 44.6674 129.004 45.0664 128.959 45.3722C128.592 47.8963 129.737 48.8537 130.968 50.7405C131.189 51.079 131.325 51.8897 131.618 52.3013C131.832 52.4165 131.738 52.3972 131.971 52.3866C132.654 51.8223 131.068 48.9267 131.367 48.1803C131.44 47.9981 131.906 47.8676 132.097 47.8031C132.629 49.0974 132.973 51.2407 133.045 52.6432C132.54 52.6424 130.958 52.7982 130.569 52.6428C130.393 52.5727 130.074 51.4219 129.932 51.181C129.729 50.8724 129.475 50.4879 129.239 50.2107C127.359 48.0064 127.259 44.6405 129.122 42.3801C130.028 41.2819 131.784 40.5091 133.224 40.3694Z" fill="#333333"/>
                      <path d="M130.667 54.6753C131.487 54.6604 135.141 54.5872 135.722 54.7691C136.013 55.0137 135.972 55.3317 135.783 55.6387L135.722 55.6532C135.325 55.7507 134.639 55.7238 134.21 55.7194C133.192 55.6997 132.168 55.7867 131.153 55.7527C130.542 55.7323 130.61 55.1027 130.667 54.6753Z" fill="#333333"/>
                      <path d="M131.415 53.0521C132.784 53.1011 134.41 52.9317 135.768 53.1448C136.046 53.1885 136.005 53.7514 135.89 53.9732C135.692 54.1021 135.524 54.0814 135.284 54.0898C134.598 54.084 131.185 54.1855 130.732 54.0534C130.497 53.8093 130.481 53.4621 130.675 53.1864C130.88 53.0393 131.149 53.0643 131.415 53.0521Z" fill="#333333"/>
                      <path d="M134.811 47.772C135.033 47.8563 135.387 48.106 135.387 48.2852C135.385 48.7625 134.619 52.4655 134.529 52.6228L134.351 52.63L133.611 52.5754C133.76 51.5607 134.249 48.4443 134.811 47.772Z" fill="#333333"/>
                      <path d="M131.944 56.0398C132.72 56.202 133.337 56.1967 134.117 56.0949C134.48 56.0475 135.007 55.9853 135.15 56.3951C135.099 56.7503 134.836 56.9708 134.587 57.2067C134.152 57.5185 133.935 57.6262 133.387 57.6594C132.697 57.7012 131.572 57.1411 131.586 56.3542C131.71 56.1176 131.678 56.1852 131.944 56.0398Z" fill="#333333"/>
                      <path d="M124.837 42.5854C125.509 42.7774 128.178 43.4963 126.826 44.5162C125.871 44.2781 123.516 43.9823 124.837 42.5854Z" fill="#333333"/>
                      <path d="M141.501 42.7241C142.251 42.9355 142.285 43.7077 141.556 44.0219C141.008 44.2579 140.477 44.3789 139.904 44.5301C139.523 44.4578 139.169 44.1629 139.369 43.816C139.646 43.3348 141.038 42.9079 141.501 42.7241Z" fill="#333333"/>
                      <path d="M128.065 38.4351C128.757 38.4482 129.81 39.9475 129.794 40.5853C129.716 40.8141 129.636 40.847 129.445 40.9942C128.671 40.9845 127.914 39.6116 127.649 38.9699C127.775 38.7862 127.925 38.6089 128.065 38.4351Z" fill="#333333"/>
                      <path d="M138.327 38.5066C138.749 38.5222 138.875 38.7063 139.174 39.0008C138.941 39.4053 138.042 40.6686 137.731 41.0034C137.468 41.0586 137.383 41.0572 137.136 40.9628C136.566 40.3395 137.871 38.9419 138.327 38.5066Z" fill="#333333"/>
                      <path d="M133.03 36.5017C134.265 36.5284 133.875 37.8015 133.922 38.6781C133.938 38.9758 133.893 39.1932 133.687 39.4162C133.484 39.4801 133.453 39.5013 133.246 39.4854C132.634 39.1628 132.764 37.0269 133.03 36.5017Z" fill="#333333"/>
                      <path d="M161.665 54.0582C171.476 53.8368 175.616 64.1243 171.295 72.0938C170.182 74.1463 168.434 75.6509 168.66 78.2219C168.693 78.5838 168.731 79.0787 168.824 79.4286C169.541 82.1324 171.086 84.5977 172.287 87.1014C172.418 87.3745 172.502 88.0299 172.365 88.3149C171.207 88.6959 168.319 82.0426 167.943 81.1016C167.041 78.8432 167.165 75.5862 168.741 73.5986C176.027 64.4072 169.278 52.2357 157.507 56.2425C155.603 56.8907 153.272 58.6461 152.447 60.5237C151.631 62.2561 151.366 63.5276 151.194 65.48C151.134 66.1648 151.267 67.3771 151.039 67.9847C150.375 69.7618 149.064 70.3556 148.211 72.1784C148.934 72.8832 149.554 72.8682 150.512 73.1779C150.544 73.9816 150.44 74.9082 150.522 75.6624C150.652 76.2095 150.894 76.6425 150.954 77.2121C151.105 78.6366 150.329 79.6837 151.711 80.5786C153.095 80.6559 155.082 80.1712 156.557 79.936C158.584 79.6128 159.07 80.2522 158.41 82.2718C158.3 82.607 158.046 83.0484 157.864 83.3673C156.645 85.4974 155.208 87.4931 153.696 89.4179C153.438 89.7469 152.583 90.5128 152.191 90.111C152.028 89.1844 153.854 87.1547 154.374 86.3179C155.154 85.0636 156.21 83.9091 156.827 82.5348C157.007 82.1343 157.231 81.7049 157.424 81.305C155.526 81.4475 153.268 82.0452 151.43 81.8424C149.292 81.6057 149.902 78.9271 149.739 77.6968C149.531 76.1252 149.011 76.0184 149.34 74.2544C148.364 73.8951 147.066 73.5637 147.034 72.2913C146.99 70.4603 149.16 69.4413 149.73 67.7733C150.014 66.9407 149.877 66.1291 149.936 65.2672C150.073 62.4968 151 59.7447 152.874 57.6807C155.026 55.3106 158.573 54.2189 161.665 54.0582Z" fill="#333333"/>
                      <path d="M104.956 54.1156C107.154 53.8827 109.131 54.3975 111.172 55.1472C113.913 56.1543 115.949 58.0267 117.061 60.7686C117.626 62.1591 117.853 63.2384 117.89 64.7494C117.958 65.5238 117.76 66.8336 118.042 67.5299C118.952 69.7732 121.265 70.1371 120.798 72.8813C120.2 73.6128 119.569 74.0227 118.655 74.2302C119.162 76.1632 118.578 75.9516 118.198 77.715C118.107 78.3749 118.2 79.0368 118.15 79.7039C117.955 82.3281 115.769 81.9144 113.918 81.7173C112.803 81.5879 111.686 81.4756 110.567 81.3801C111.486 83.4757 112.843 85.1155 114.143 86.9737C114.454 87.4195 116.35 89.6519 115.732 90.112C115.459 90.134 115.168 90.0273 114.9 89.9513C113.481 88.1747 110.042 83.9446 109.473 82.0023C109.314 81.4586 109.247 80.6977 109.551 80.1892C109.675 79.9827 109.883 79.916 110.109 79.892C110.618 79.8381 111.158 79.9634 111.661 80.0416C112.808 80.22 115.23 80.7216 116.257 80.4906C117.453 80.2206 116.845 78.075 116.999 77.1789C117.105 76.5555 117.398 76.0498 117.729 75.5259C117.641 75.0716 117.382 73.8927 117.486 73.5033C117.685 72.7594 119.184 73.035 119.644 72.2665C119.819 71.4756 118.255 70.0797 117.696 69.4071C116.31 67.7422 116.9 66.661 116.726 64.6825C116.616 63.4335 116.359 62.5728 115.896 61.4198C115.105 59.3607 114.079 58.2776 112.241 57.0991C109.815 55.5685 105.704 55.0747 102.973 55.8767C96.3305 57.8274 94.375 66.287 98.002 71.7902C99.5585 74.1519 100.734 75.3969 100.579 78.4009C100.455 80.7963 99.6178 82.5177 98.5027 84.5881C98.1667 85.204 96.4168 88.9174 95.6069 88.3662C95.1926 87.6247 96.4387 85.6522 96.8194 84.9453C97.8841 82.9684 99.0397 81.0543 99.3555 78.7976C99.7646 75.8746 97.866 74.2042 96.5192 71.8879C94.2168 67.7068 94.4984 61.588 97.59 57.8763C99.4822 55.6046 102.086 54.4173 104.956 54.1156Z" fill="#333333"/>
                      <path d="M170.5 84.9641C177.5 101.964 229.142 106.872 268 108.144" stroke="#333333" stroke-width="1.3"/>
                      <path d="M96 87.4639C65.5 88.9639 66.882 27.8481 42 3.46377C41.2962 2.77409 39.6301 1.08228 39 0.463867" stroke="#333333" stroke-width="1.3"/>
                      </svg>
                  </div>
                  {/* <img src="/assets/img/thought-icon.svg" alt="Thoughtful Interaction"></img> */}
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Thoughtful Interaction</h3>
                  <p>We think before we act ensuring an intelligent and innovative outcome</p>
                </div>
                <div className="icon-num">2</div>
              </li>
              <li className="stagger-li">
                <div className="icon">
                  <div className="desk">
                    <svg xmlns="http://www.w3.org/2000/svg" width="426" height="162" viewBox="0 0 426 162" fill="none">
                      <path d="M246.599 27C247.078 27.0004 247.759 26.9827 247.988 27.4854C249.519 30.8398 250.932 34.3127 252.49 37.6524C253.211 37.8521 254.816 38.0093 255.613 38.1045C257.368 38.3186 259.124 38.5208 260.881 38.7119C261.612 38.7894 265.563 38.7744 264.213 40.8242C263.958 41.2122 262.339 42.422 261.856 42.8486L255.8 48.2061C255.964 48.8079 256.093 49.4575 256.23 50.0684C256.791 52.5675 257.31 55.0791 257.901 57.5713C258.091 58.3696 258.511 59.9596 257.423 60.2852C257.121 60.3752 256.642 60.2566 256.346 60.124C253.378 58.3532 250.063 56.594 247.155 54.7686C246.637 54.8734 245.35 55.6953 244.855 55.9756C242.825 57.1324 240.804 58.286 238.811 59.5068C238.322 59.806 237.261 60.5052 236.676 60.3213C236.076 60.1327 235.642 59.5503 235.779 58.8926C236.024 57.7348 236.36 56.598 236.63 55.4443C237.172 53.126 237.51 50.5929 238.258 48.335C235.638 46.2936 233.014 43.8624 230.446 41.7217C230.031 41.3752 229.453 40.8735 229.455 40.29C229.457 39.496 229.88 39.1307 230.646 39.0264C232.054 38.8321 233.472 38.7826 234.883 38.6094C237.013 38.4111 239.213 37.9952 241.342 37.8818C241.561 37.317 241.87 36.7399 242.119 36.1826C243.42 33.2753 244.739 30.3761 246.022 27.4619C246.115 27.2511 246.402 27.0978 246.599 27ZM246.976 31.4873C245.835 33.9198 244.644 36.3021 243.638 38.7988C243.469 39.2154 243.281 39.6316 243.065 40.0254C241.185 40.294 239.3 40.5316 237.411 40.7373C236.257 40.8707 234.677 41.0836 233.543 41.1035C235.073 42.5396 239.902 46.2808 240.733 47.5713C240.543 49.5055 239.243 54.8904 238.539 56.7002C240.465 55.7372 245.494 52.3799 247.083 52.1172C247.656 52.3007 248.151 52.5155 248.66 52.8379C250.866 54.2348 253.18 55.4976 255.386 56.8848C255.17 56.3082 255.011 55.7229 254.896 55.1182C254.41 52.5093 253.6 49.8718 253.18 47.2617C254.098 46.2307 256.004 44.7973 257.133 43.8066C258.015 43.0319 259.309 41.8036 260.188 41.1133C259.268 41.0801 258.32 40.9454 257.408 40.8018C255.29 40.468 253.141 40.3131 251.02 40.0283C250.108 38.6844 247.448 31.8591 246.976 31.4873Z" fill="#333333"/>
                      <path d="M154.432 71.9339C157.13 71.8262 158.701 73.4779 160.548 75.2115C162.574 77.1443 164.501 79.1778 166.323 81.3044C169.292 84.7104 172.951 89.8101 177.296 91.2208C183.702 93.3007 189.31 87.2766 193.159 83.0664C195.603 80.3921 198.164 77.5689 200.807 75.1252C201.898 74.121 202.952 73.2523 204.263 72.5586C206.185 71.4537 208.927 71.6696 209.906 73.9164C211.639 77.8932 207.929 81.293 205.684 84.0187C201.862 88.6583 199.49 93.0779 197.731 98.8032C195.953 104.545 195.051 110.522 195.054 116.533C195.104 121.405 195.79 126.39 196.572 131.193C196.722 132.114 197.468 134.667 197.197 135.467C196.754 135.867 195.762 135.716 195.145 135.686C195.016 135.234 194.901 134.779 194.799 134.321C191.282 118.397 191.821 101.73 200.223 87.3621C202.244 84.0163 205.111 81.3659 207.281 78.1161C208.462 76.3483 208.292 73.778 205.591 74.636C202.78 76.0892 200.219 78.8716 198.051 81.1658C193.4 86.0868 189.468 91.8826 182.559 93.7169C175.232 95.6623 170.545 89.8694 166.311 84.9631C164.611 82.9808 162.869 81.0358 161.084 79.1294C159.957 77.9185 155.066 72.4075 153.517 75.3922C152.55 77.2546 155.269 80.9965 156.381 82.5117C160.56 88.2058 164.504 93.6979 166.778 100.478C167.67 103.196 168.204 106.018 168.364 108.875C168.69 114.258 167.485 129.777 165.235 134.17C164.876 134.873 164.343 135.491 163.561 135.721C163.142 135.846 162.567 135.886 162.18 135.644C162.023 135.546 161.908 135.389 161.88 135.204C161.779 134.513 163.116 133.38 163.491 132.766C164.256 131.514 165.111 123.906 165.343 122.007C167.319 105.8 165.484 99.2822 155.872 85.9027C154.13 83.4771 151.83 80.8891 151.163 77.9046C150.854 76.5259 150.951 74.8218 151.745 73.6123C152.377 72.6497 153.338 72.1722 154.432 71.9339Z" fill="#333333"/>
                      <path d="M180.212 67.2099C185.923 67.0772 190.654 71.6115 190.764 77.3231C190.873 83.0348 186.32 87.7481 180.608 87.8349C174.929 87.9212 170.248 83.3988 170.139 77.7196C170.03 72.0405 174.533 67.3419 180.212 67.2099ZM188.292 76.6913C187.828 72.3772 183.962 69.2507 179.646 69.7001C175.311 70.1518 172.167 74.0398 172.633 78.3739C173.098 82.7082 176.996 85.8399 181.329 85.3603C185.642 84.8825 188.756 81.0056 188.292 76.6913Z" fill="#333333"/>
                      <path d="M268.157 82.3067C268.612 82.2777 269.039 82.2514 269.416 82.5152C269.595 82.7523 269.667 82.982 269.67 83.2814C269.689 85.2997 269.674 87.3467 269.674 89.3628L269.648 103.775L269.698 123.54C269.703 127.14 269.708 130.787 269.667 134.388C269.646 134.743 269.585 135.25 269.308 135.497C268.822 135.93 267.765 135.834 267.365 135.327C267.167 135.075 267.181 134.39 267.179 134.088L267.218 101.254C267.239 98.5369 267.242 95.8196 267.226 93.1023C267.206 91.2345 267.09 88.6524 267.261 86.8324L256.274 98.7196C253.983 101.171 253.41 99.8699 251.469 97.8692C250.449 96.8708 249.363 95.9989 248.392 94.9232C248.507 96.0891 248.407 98.979 248.4 100.258L248.382 110.316L248.37 125.827C248.368 128.625 248.387 131.45 248.322 134.247C248.312 134.691 248.282 135.067 247.981 135.414C247.756 135.67 247.434 135.819 247.094 135.823C245.847 135.843 245.904 134.681 245.899 133.788C245.845 124.718 245.879 115.647 245.882 106.577L245.88 96.8968C245.867 95.1784 245.826 93.4284 245.824 91.7097C245.836 91.4177 245.935 91.0223 246.164 90.8231C246.608 90.4389 247.5 90.4145 247.937 90.8134C249.073 91.8514 250.082 93.03 251.16 94.1324C252.175 95.1713 253.299 96.1194 254.286 97.1748C254.83 96.5222 255.616 95.7602 256.21 95.1037L261.587 89.2045C262.648 88.0483 267.157 82.8037 268.157 82.3067Z" fill="#333333"/>
                      <path d="M237.782 106.626C239.12 106.513 239.255 106.962 239.27 108.128C239.293 110.059 239.271 111.988 239.264 113.919L239.296 121.572L239.298 130.29C239.294 131.702 239.291 133.134 239.275 134.546C239.236 134.931 239.288 135.297 238.931 135.544C237.751 136.356 236.834 135.529 236.812 134.261C236.788 132.882 236.813 131.548 236.819 130.193L236.829 122.255L236.782 115.119C236.775 113.9 236.723 112.319 236.826 111.13C236.086 111.948 235.287 112.773 234.509 113.559C231.499 116.601 228.725 119.845 225.79 122.964C224.373 124.471 223.847 124.596 222.273 123.053C221.919 122.707 221.505 122.319 221.148 121.974C220.114 120.982 219.091 119.979 218.08 118.964C218.23 122.196 217.937 125.646 218.066 128.895C218.139 130.757 218.007 132.701 218.097 134.567C218.179 136.244 215.733 136.185 215.608 134.803C215.569 133.874 215.594 132.827 215.599 131.895L215.606 126.819L215.591 119.624C215.587 118.416 215.526 117.181 215.588 115.974C215.604 115.652 215.612 115.387 215.853 115.143C216.078 114.914 216.51 114.741 216.83 114.75C217.846 114.782 222.972 120.249 223.973 121.278C227.654 117.107 231.602 113.05 235.387 108.964C235.994 108.308 237.076 107.104 237.782 106.626Z" fill="#333333"/>
                      <path d="M270.935 64.9341C271.531 64.8766 271.969 64.8634 272.462 65.2659C272.712 65.4712 272.923 65.72 272.947 66.0563C272.967 66.3577 272.828 66.6407 272.654 66.877C271.878 67.9282 270.894 68.8793 270.043 69.8758C268.512 71.6693 267.038 73.5169 265.531 75.3308C262.5 78.9785 259.65 82.7801 256.612 86.4209C256.236 86.8715 255.835 87.3363 255.2 87.3665C254.261 87.4112 249.728 82.5631 248.809 81.6809C247.948 80.9227 246.348 79.7949 247.443 78.5048C247.656 78.2537 247.969 78.1081 248.297 78.1064C249.149 78.0972 249.983 79.1177 250.51 79.7224C251.944 81.3644 253.555 82.8152 255.053 84.3891C256.769 82.0982 258.967 79.5788 260.781 77.2985C263.091 74.3932 265.449 71.4485 267.864 68.6362C268.732 67.6257 270.005 65.6751 270.935 64.9341Z" fill="#333333"/>
                      <path d="M238.951 92.8696C239.735 92.8543 240.559 93.2301 240.364 94.1583C240.149 95.2476 239.24 95.9189 238.583 96.7277C234.745 101.452 230.601 105.912 226.846 110.704C226.616 110.998 226.355 111.249 226.088 111.507C225.221 112.345 224.542 111.92 223.774 111.244C221.985 109.671 220.268 108.017 218.542 106.375C215.959 104.073 218.007 102.313 219.563 103.725C221.2 105.211 223.42 107.414 224.892 109.082C228.574 104.838 232.145 100.537 235.801 96.2749C236.657 95.2767 237.426 94.2769 238.232 93.2378C238.388 93.0371 238.708 92.9399 238.951 92.8696Z" fill="#333333"/>
                      <path d="M180.242 120.613C181.235 120.592 181.627 120.815 181.954 121.759C182.707 124.009 183.485 126.442 184.11 128.722C184.475 130.053 186.03 134.526 185.583 135.573C185.108 136.023 184.816 135.925 184.224 135.639C183.959 135.51 183.517 135.052 183.432 134.764C183.065 133.521 182.758 132.255 182.376 131.016C181.844 129.194 181.11 127.409 180.586 125.603C179.669 126.314 177.714 134.612 176.502 135.238C175.887 135.331 175.329 135.198 174.761 134.967C174.657 134.745 174.657 134.6 174.745 134.355C175.84 131.329 176.978 128.322 177.992 125.268C178.442 123.913 178.915 122.515 179.539 121.232C179.693 120.915 179.945 120.777 180.242 120.613Z" fill="#333333"/>
                      <path d="M222.267 72.5929C221.749 73.4343 221.155 74.2447 220.516 75.006C218.053 77.9334 215.764 81.0608 213.221 83.9103C212.119 85.1457 209.908 83.572 211.228 82.0717C213.831 79.1137 216.43 76.1202 218.852 73.0087C219.102 72.6883 219.548 72.3406 219.869 72.0977C220.239 72.3453 221.708 72.4888 222.267 72.5929Z" fill="#333333"/>
                      <path d="M220.641 70.8396C221.806 68.2418 225.341 65.0629 226.879 62.4888C227.187 61.9736 228.191 61.8449 228.688 62.0862C229.387 62.4285 229.685 63.4981 229.264 64.1694C228.451 65.4638 227.349 66.5486 226.398 67.7409C225.169 69.2017 224.029 70.8135 222.671 72.14L222.267 72.5917C221.708 72.4876 220.239 72.3441 219.869 72.0965C220.269 71.5751 220.372 71.4323 220.641 70.8396Z" fill="#333333"/>
                      <path d="M48 94.9992L47.8395 95.9356L48 94.9992ZM144.5 136.498L144.331 135.563L144.5 136.498ZM159.8 132.901C160.298 132.735 160.567 132.197 160.401 131.7C160.235 131.202 159.697 130.933 159.2 131.099L159.5 132L159.8 132.901ZM0 91.9992L-0.000159045 92.9492C13.0112 92.9514 29.42 92.7772 47.8395 95.9356L48 94.9992L48.1605 94.0629C29.5569 90.873 12.9888 91.0514 0.000159045 91.0492L0 91.9992ZM48 94.9992L47.8395 95.9356C67.7787 99.3545 81.6029 111.369 95.7077 121.848C109.766 132.294 124.069 141.158 144.669 137.433L144.5 136.498L144.331 135.563C124.563 139.138 110.833 130.719 96.8408 120.323C82.8956 109.962 68.6538 97.5768 48.1605 94.0629L48 94.9992ZM144.5 136.498L144.669 137.433C150.724 136.338 156.877 133.876 159.8 132.901L159.5 132L159.2 131.099C156.123 132.124 150.208 134.501 144.331 135.563L144.5 136.498Z" fill="#333333"/>
                      <path d="M269.75 135.999C269.75 135.308 269.19 134.749 268.5 134.749C267.81 134.749 267.25 135.308 267.25 135.999H268.5H269.75ZM268.5 135.999H267.25C267.25 138.995 268.612 141.43 270.906 143.313C273.161 145.163 276.323 146.492 280.046 147.417C287.497 149.267 297.598 149.593 308.388 148.833C329.947 147.315 354.787 141.417 367.62 134.084L367 132.999L366.38 131.913C354.013 138.98 329.603 144.833 308.212 146.339C297.527 147.092 287.728 146.749 280.648 144.99C277.105 144.11 274.344 142.899 272.492 141.38C270.679 139.892 269.75 138.128 269.75 135.999H268.5ZM367 132.999L367.62 134.084C379.887 127.074 392.069 126.935 402.378 128.584C407.541 129.409 412.211 130.68 416.202 131.76C420.108 132.817 423.542 133.75 426 133.75L426 132.5L426 131.25C423.958 131.25 420.917 130.446 416.855 129.346C412.876 128.27 408.084 126.965 402.772 126.115C392.131 124.413 379.313 124.523 366.38 131.913L367 132.999Z" fill="#333333"/>
                    </svg>
                  </div>
                  <div className="mob">
                    <svg xmlns="http://www.w3.org/2000/svg" width="268" height="107" viewBox="0 0 268 107" fill="none">
                      <path d="M145.5 35.8572C144 37.3572 135.508 46.1459 134.5 47.3572C132.667 49.6905 128.7 54.3572 127.5 54.3572" stroke="#333333" stroke-width="1.1"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M149.508 22.3572C149.716 22.3574 150.012 22.3498 150.112 22.5681C150.776 24.0246 151.39 25.5322 152.067 26.9822C152.38 27.0689 153.076 27.1371 153.422 27.1785C154.184 27.2714 154.946 27.3601 155.709 27.4431C156.026 27.4767 157.742 27.4694 157.156 28.3591C157.046 28.5275 156.343 29.0537 156.133 29.239L153.503 31.5652C153.575 31.8266 153.631 32.1085 153.691 32.3738C153.934 33.4588 154.159 34.5495 154.416 35.6316C154.499 35.9784 154.68 36.668 154.208 36.8093C154.077 36.8485 153.869 36.7966 153.74 36.739C152.452 35.9701 151.013 35.2064 149.75 34.4138C149.525 34.4593 148.966 34.8165 148.751 34.9382C147.87 35.4404 146.993 35.9415 146.127 36.4714C145.915 36.6013 145.455 36.9046 145.2 36.825C144.94 36.7431 144.751 36.4905 144.811 36.2048C144.917 35.7022 145.063 35.2086 145.18 34.7078C145.415 33.7011 145.562 32.6013 145.887 31.6209C144.749 30.7345 143.61 29.6792 142.495 28.7498C142.315 28.5993 142.064 28.3811 142.065 28.1277C142.066 27.7831 142.249 27.6242 142.581 27.5789C143.193 27.4945 143.808 27.4734 144.421 27.3982C145.346 27.3121 146.302 27.131 147.226 27.0818C147.321 26.8366 147.456 26.5864 147.564 26.3445C148.128 25.0823 148.701 23.8235 149.258 22.5584C149.298 22.4668 149.423 22.3996 149.508 22.3572ZM149.672 24.3054C149.177 25.3616 148.66 26.3961 148.223 27.4802C148.15 27.6611 148.068 27.8415 147.974 28.0125C147.157 28.129 146.339 28.2327 145.519 28.322C145.018 28.3799 144.333 28.4725 143.84 28.4812C144.505 29.105 146.601 30.7286 146.962 31.2888C146.879 32.1286 146.315 34.4669 146.009 35.2527C146.846 34.8345 149.029 33.3763 149.719 33.2625C149.968 33.3421 150.182 33.4359 150.404 33.5759C151.361 34.1824 152.366 34.7305 153.323 35.3328C153.23 35.0824 153.161 34.8278 153.112 34.5652C152.9 33.4325 152.548 32.2873 152.365 31.1541C152.764 30.7065 153.592 30.0851 154.082 29.655C154.465 29.3186 155.028 28.7848 155.409 28.4851C155.01 28.4707 154.597 28.4127 154.201 28.3503C153.282 28.2054 152.349 28.138 151.428 28.0144C151.032 27.4312 149.877 24.4669 149.672 24.3054Z" fill="#333333"/>
                      <path d="M109.49 41.8675C110.661 41.8207 111.344 42.5379 112.146 43.2906C113.025 44.1298 113.862 45.0127 114.653 45.9361C115.942 47.4149 117.531 49.6292 119.418 50.2417C122.199 51.1448 124.634 48.5292 126.305 46.7011C127.366 45.54 128.478 44.3142 129.626 43.2531C130.099 42.8171 130.557 42.4399 131.126 42.1387C131.961 41.659 133.152 41.7527 133.577 42.7283C134.329 44.455 132.718 45.9312 131.743 47.1146C130.084 49.1291 129.054 51.0481 128.29 53.5339C127.518 56.027 127.126 58.6223 127.128 61.2321C127.15 63.3475 127.448 65.512 127.787 67.5975C127.852 67.9972 128.176 69.1058 128.058 69.4533C127.866 69.6269 127.435 69.5613 127.167 69.5483C127.111 69.3521 127.061 69.1544 127.017 68.9555C125.49 62.0413 125.724 54.8045 129.372 48.5663C130.25 47.1136 131.494 45.9628 132.437 44.5518C132.949 43.7842 132.876 42.6682 131.703 43.0407C130.483 43.6717 129.371 44.8798 128.429 45.8759C126.41 48.0126 124.702 50.5291 121.703 51.3255C118.521 52.1702 116.486 49.655 114.648 47.5247C113.91 46.664 113.153 45.8195 112.378 44.9917C111.889 44.466 109.766 42.0731 109.093 43.369C108.673 44.1777 109.854 45.8024 110.337 46.4603C112.151 48.9326 113.863 51.3173 114.851 54.2611C115.238 55.4411 115.47 56.6668 115.539 57.9069C115.681 60.2444 115.157 66.9823 114.181 68.8899C114.025 69.195 113.793 69.4636 113.454 69.5635C113.272 69.6175 113.022 69.6349 112.854 69.5301C112.786 69.4872 112.736 69.4194 112.724 69.3391C112.68 69.0389 113.261 68.5468 113.423 68.2805C113.756 67.7367 114.127 64.4333 114.228 63.6089C115.086 56.5719 114.289 53.7419 110.115 47.9327C109.359 46.8794 108.36 45.7558 108.071 44.4599C107.937 43.8613 107.979 43.1214 108.323 42.5962C108.598 42.1783 109.015 41.971 109.49 41.8675Z" fill="#333333"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M120.684 39.8152C123.164 39.7579 125.218 41.727 125.265 44.2068C125.313 46.6866 123.336 48.7324 120.856 48.7703C118.39 48.8077 116.357 46.8446 116.31 44.3787C116.263 41.9128 118.219 39.8725 120.684 39.8152ZM124.192 43.9324C123.991 42.0591 122.312 40.7021 120.438 40.8972C118.556 41.0933 117.191 42.781 117.393 44.6628C117.595 46.5447 119.287 47.9043 121.169 47.696C123.041 47.4886 124.393 45.8056 124.192 43.9324Z" fill="#333333"/>
                      <path d="M158.869 46.371C159.066 46.3583 159.252 46.3469 159.415 46.4615C159.493 46.5644 159.525 46.6641 159.526 46.7941C159.534 47.6705 159.527 48.5593 159.527 49.4347L159.516 55.6921L159.538 64.2742C159.54 65.8374 159.542 67.4206 159.525 68.9842C159.515 69.1385 159.489 69.3585 159.368 69.466C159.157 69.6538 158.698 69.6123 158.525 69.3919C158.439 69.2826 158.445 68.9851 158.444 68.8539L158.461 54.5978C158.47 53.418 158.471 52.2381 158.465 51.0583C158.456 50.2473 158.405 49.1262 158.48 48.336L153.709 53.4973C152.714 54.5616 152.466 53.9968 151.623 53.1281C151.18 52.6946 150.709 52.316 150.287 51.8489C150.337 52.3552 150.293 53.6099 150.29 54.1652L150.283 58.5326L150.277 65.2672C150.276 66.482 150.285 67.7088 150.257 68.9231C150.252 69.1158 150.239 69.2791 150.109 69.4298C150.011 69.5409 149.871 69.6056 149.723 69.6074C149.182 69.6159 149.207 69.1113 149.204 68.7237C149.181 64.7854 149.196 60.8472 149.197 56.9088L149.196 52.7059C149.191 51.9598 149.173 51.1999 149.172 50.4537C149.177 50.3269 149.22 50.1552 149.32 50.0687C149.512 49.9019 149.9 49.8913 150.09 50.0645C150.583 50.5152 151.021 51.0269 151.489 51.5056C151.93 51.9567 152.418 52.3683 152.846 52.8266C153.082 52.5432 153.424 52.2123 153.682 51.9273L156.016 49.3659C156.477 48.8639 158.435 46.5867 158.869 46.371Z" fill="#333333"/>
                      <path d="M145.68 56.9307C146.261 56.8816 146.32 57.0763 146.326 57.5827C146.336 58.4211 146.327 59.2587 146.324 60.0969L146.338 63.42L146.338 67.2052C146.337 67.8186 146.335 68.44 146.329 69.0534C146.312 69.2202 146.334 69.3795 146.179 69.4866C145.667 69.839 145.268 69.4799 145.259 68.9294C145.248 68.3307 145.26 67.7517 145.262 67.1632L145.267 63.7166L145.246 60.618C145.243 60.0889 145.22 59.4024 145.265 58.8862C144.944 59.2413 144.597 59.5995 144.259 59.9408C142.952 61.2617 141.748 62.6701 140.473 64.0244C139.858 64.6789 139.63 64.7329 138.946 64.0633C138.793 63.9129 138.613 63.7443 138.458 63.5944C138.009 63.1639 137.565 62.7285 137.126 62.2878C137.191 63.6908 137.064 65.1888 137.119 66.5998C137.151 67.4082 137.094 68.2522 137.133 69.0623C137.168 69.7903 136.106 69.7649 136.052 69.1649C136.035 68.7616 136.046 68.307 136.049 67.902L136.051 65.6982L136.045 62.5742C136.043 62.0495 136.017 61.5133 136.044 60.9896C136.051 60.8495 136.054 60.7344 136.159 60.6287C136.256 60.5292 136.444 60.4538 136.583 60.4578C137.024 60.4717 139.25 62.8454 139.684 63.2924C141.283 61.4812 142.997 59.72 144.64 57.9456C144.904 57.6611 145.373 57.1381 145.68 56.9307Z" fill="#333333"/>
                      <path d="M160.075 38.8276C160.334 38.8027 160.524 38.7969 160.738 38.9717C160.847 39.0608 160.938 39.1689 160.948 39.3149C160.957 39.4457 160.897 39.5686 160.821 39.6712C160.484 40.1277 160.057 40.5406 159.688 40.9733C159.023 41.752 158.383 42.5542 157.728 43.3418C156.412 44.9256 155.175 46.5762 153.856 48.157C153.693 48.3527 153.518 48.5545 153.243 48.5676C152.835 48.587 150.867 46.482 150.468 46.099C150.094 45.7698 149.4 45.2801 149.875 44.7199C149.967 44.6109 150.103 44.5477 150.246 44.5469C150.616 44.543 150.978 44.986 151.207 45.2486C151.829 45.9615 152.529 46.5915 153.179 47.2749C153.924 46.2802 154.879 45.1863 155.666 44.1962C156.669 42.9347 157.693 41.6561 158.741 40.4351C159.118 39.9963 159.671 39.1494 160.075 38.8276Z" fill="#333333"/>
                      <path d="M146.188 50.9577C146.528 50.9511 146.886 51.1143 146.801 51.5173C146.708 51.9902 146.313 52.2817 146.028 52.6329C144.361 54.6842 142.562 56.6205 140.932 58.7014C140.832 58.8287 140.719 58.938 140.603 59.0498C140.226 59.414 139.931 59.2293 139.598 58.9359C138.821 58.2528 138.076 57.5347 137.326 56.8217C136.205 55.8222 137.094 55.0578 137.77 55.671C138.481 56.3162 139.444 57.2729 140.083 57.9968C141.682 56.1544 143.232 54.2866 144.82 52.4363C145.192 52.0028 145.526 51.5687 145.876 51.1176C145.943 51.0304 146.082 50.9882 146.188 50.9577Z" fill="#333333"/>
                      <path d="M120.697 63.0032C121.128 62.9943 121.298 63.0911 121.44 63.5011C121.767 64.4781 122.105 65.5344 122.376 66.5243C122.535 67.102 123.21 69.0444 123.016 69.499C122.809 69.6944 122.683 69.652 122.426 69.5275C122.311 69.4718 122.119 69.2728 122.082 69.1479C121.922 68.6081 121.789 68.0585 121.623 67.5205C121.392 66.7291 121.073 65.9542 120.846 65.17C120.448 65.4787 119.599 69.0819 119.073 69.3535C118.806 69.3937 118.563 69.3361 118.317 69.2358C118.272 69.1394 118.271 69.0765 118.31 68.9699C118.785 67.6561 119.279 66.3508 119.72 65.0245C119.915 64.4361 120.121 63.8294 120.391 63.2722C120.458 63.1344 120.568 63.0746 120.697 63.0032Z" fill="#333333"/>
                      <path d="M132.625 61.137C133.351 61.1459 133.356 62.0488 132.833 62.2357C132.348 62.4088 131.746 62.5319 131.238 62.6653C130.461 62.8745 129.688 63.0963 128.92 63.3314C128.213 63.2644 128.159 62.4619 128.633 62.3316C129.911 61.9805 131.352 61.4006 132.625 61.137Z" fill="#333333"/>
                      <path d="M169.207 0.357178L150 22.8572" stroke="#333333" stroke-width="1.1"/>
                      </svg>
                  </div>
                  {/* <img src="/assets/img/exceed-icon.svg" alt="Exceed Expectations"></img> */}
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Exceed Expectations</h3>
                  <p>We are not done even if you are happy, we work till you are delighted</p>
                </div>
                <div className="icon-num">3</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Home Page Why choose section ends */}

      {/* Home Page Brand section starts */}
      <section className="brand-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient slide-up">Brands That Trust Us</h2>
          <ul className="brand-list d-flex">
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-difc.jpg" width="148" height="72" alt="DIFC"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-bmw.jpg" width="148" height="72" alt="BMW"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-nespresso-logo.jpg" width="148" height="72" alt="NESPRESSO"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-emovers.jpg" width="148" height="72" alt="E-Movers"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-tld.jpg" width="148" height="72" alt="The Leather Doctor"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-innerspace.jpg" width="148" height="72" alt="Innerspace"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-lighttech.jpg" width="148" height="72" alt="Lighttech"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-Haecker.jpg" width="148" height="72" alt="Haecker"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-nikai.jpg" width="148" height="72" alt="Nikai"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-swisscotec.jpg" width="148" height="72" alt="swisscotec"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-karam.jpg" width="148" height="72" alt="Karam"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-transAsia.jpg" width="148" height="72" alt="transAsia"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-winspire.jpg" width="148" height="72" alt="winspire"></img></a></li>
            <li className="stagger-li"><a href="#"><img src="/assets/img/logo-electricway.jpg" width="148" height="72" alt="Electricway"></img></a></li>
          </ul>
        </div>
      </section>
      {/* Home Page Brand section ends */}

      {/* home cta section starts */}
      <section className="cta-wrapper">
        <div className="container">
          <p className="cta-title stagger-li">Need help with a project?</p>
          <p className="cta-txt stagger-li">Let’s Talk!</p>
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
      <div class={`sticky-buttons ${showTop ? "active" : ""}`}>
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
    <main className="home">
      <Header />
    </main>
  );
}