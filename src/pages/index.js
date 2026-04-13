import React, { useEffect, useState } from "react";
import "/src/assets/css/common.css";
import "/src/assets/css/home.css";


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

  return (
    <>
    
      <header className={`${menuActive ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
        <div className="inner-container d-flex">
          <div className="company-logo">
            <a href="javascript:void(0);" className="logo-emqube">
              <img className="logo-black" src="/assets/img/emqube-logo-black.svg" width="196" height="76" alt="emQube Logo"></img>
              <img className="logo-white" src="/assets/img/emqube-logo-white.svg" width="196" height="76" alt="emQube Logo"></img>
            </a>
          </div>
          <nav className="main-nav">
            <ul className="main-nav-ul d-flex">
              <li className="menu-item-has-children children-level-2">
                <a href="javascript:void(0);">Software</a>
                <ul className="sub-menu submenu has-children-inner slide-up">
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
            <ul className={`sub-menu submenu has-children-inner slide-up ${activeMenu === "software" ? "show" : ""}`}>
              <li className={`menu-item-has-children children-level-0 ${activeSubMenu === "development" ? "click" : ""}`} onClick={(e) => {e.stopPropagation(); toggleSubMenu("development");}}>
                <a href="javascript:void(0);">Development</a>
                <ul className={`sub-menu submenu has-children-inner slide-up ${activeSubMenu === "development" ? "show" : ""}`}>
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

      {/* Home page INtro section - starts */}
      <section className="hero-video-wrapper">
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
      <section className="home-intro-wrapper">
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
              <p>Since 2003, we have a single focus on helping businesses succeed by leveraging digital technology. As a <span className="txt-med">software solutions house</span> we assist companies to automate business processes. As a <span className="txt-med">digital content studio</span> we create content that builds your brand value and gets more  business. We are about understanding your 'Business First'</p>
            </div>
          </div>
          <div className="right anim-vid-wrapp">
            <ul className="d-flex">
              <li>
                <video autoPlay muted loop playsInline preload="none">
                  <source src="https://wp.emqubeweb.com/emqube-revamp/vid/intro-vid1.mp4" type="video/mp4" />
                </video>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <h4>Software Solutions House</h4>
              </li>
              <li>
                <video autoPlay muted loop playsInline preload="none">
                  <source src="https://wp.emqubeweb.com/emqube-revamp/vid/intro-vid2.mp4" type="video/mp4" />
                </video>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <h4>Digital Content Studio</h4>
              </li>
            </ul>
          </div>
          <div className="intro-vid-wrapp">
            <ul className="d-flex">
              <li>
                <a href="javascript:void(0);">
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
              <li>
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
          <h2 className="txt-center txt-gradient-mix">Why <span className="txt-med">Choose Us</span></h2>
          <div className="home-why-choose-list">
            <ul className="d-flex">
              <li>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="427" height="162" viewBox="0 0 427 162" fill="none">
                    <path d="M251.854 72.1743C253.987 72.045 256.604 72.2082 258.791 72.1499C261.062 72.1559 263.335 72.1278 265.605 72.1655C266.242 72.1761 266.989 72.3592 267.002 73.145C267.028 74.6895 267.008 76.2368 267.009 77.7808L267.011 87.7163L267.019 118.939C268.235 118.934 269.453 118.943 270.669 118.966C270.693 119.92 270.707 120.761 270.679 121.717C269.196 121.771 267.507 121.737 266.009 121.74L255.779 121.722L224.898 121.733L180.213 121.736L161.542 121.741C157.982 121.767 154.422 121.756 150.862 121.705C150.84 120.796 150.84 119.887 150.864 118.978C152.57 118.913 154.399 118.942 156.114 118.941L164.805 118.936L195.65 118.921L195.655 115.21L195.65 108.629C195.649 107.51 195.639 106.393 195.661 105.271C195.673 104.698 195.831 104.063 196.516 103.998C197.152 103.937 197.838 103.965 198.482 103.964L202.304 103.965L207.538 103.966C208.478 103.967 209.411 103.963 210.352 103.994C210.772 103.923 211.406 104.442 211.422 104.891C211.582 109.537 211.339 114.265 211.479 118.91C212.358 118.921 213.237 118.925 214.115 118.925L214.132 104.02L214.122 99.6333C214.119 98.8305 214.096 98.0182 214.139 97.2173C214.191 96.2532 214.954 96.148 215.728 96.1538C219.801 96.1845 223.875 96.1756 227.947 96.144C228.704 96.1382 229.877 96.1072 229.927 97.1333C229.977 97.9825 229.96 98.839 229.959 99.6899L229.956 104.081L229.97 118.929L232.625 118.939C232.521 111.181 232.62 103.219 232.618 95.4458L232.597 89.4106C232.592 88.4634 232.55 87.3325 232.645 86.3892C232.689 85.9476 233.133 85.6537 233.478 85.4263L242.748 85.4243C244.334 85.4202 245.945 85.3708 247.523 85.4565C248.632 85.5171 248.445 86.8256 248.444 87.5884C248.444 88.2845 248.435 88.9816 248.433 89.6772L248.421 96.0239L248.435 118.941L251.13 118.932L251.12 84.4819V76.3042C251.119 75.2546 251.065 73.9614 251.17 72.9194C251.202 72.5985 251.591 72.3354 251.854 72.1743ZM235.392 88.2681L235.375 118.924C238.666 118.94 242.443 119.027 245.704 118.927C245.62 112.343 245.714 105.621 245.694 99.02L245.679 91.9409C245.677 90.9542 245.61 89.1859 245.712 88.2661L235.392 88.2681ZM227.195 98.9419C223.854 98.9416 220.196 98.8634 216.881 98.9585L216.884 118.937C220.196 118.963 223.885 118.996 227.187 118.932C227.275 116.747 227.202 114.027 227.2 111.803L227.195 98.9419ZM253.879 74.9487L253.899 99.4575C253.912 105.855 254.002 112.541 253.891 118.921C254.781 118.925 263.976 119.05 264.244 118.828L264.216 89.0376L264.218 80.1636C264.214 78.5308 264.147 76.5413 264.246 74.9487C260.809 74.9428 257.315 74.9114 253.879 74.9487ZM198.416 106.725L198.417 118.925L207.328 118.943L208.714 118.934L208.723 106.735L200.005 106.716L198.416 106.725Z" fill="#333333"/>
                    <path d="M183.298 46.09C185.239 45.9633 188.289 46.0618 190.291 46.0627L203.308 46.0559C205.297 46.0553 206.605 46.0711 208.128 47.634C210.114 49.6733 209.498 54.1877 209.497 56.9875L222.163 56.9895C223.755 56.9918 227.427 56.8718 228.853 57.2063C230.113 57.5097 231.265 58.1578 232.182 59.0803C233.159 60.0519 233.856 61.2742 234.197 62.6154C234.491 63.8085 234.385 66.0048 234.382 67.341C234.372 69.3233 234.376 71.3061 234.395 73.2883C233.551 73.8273 232.275 74.8814 231.571 75.5725C231.6 75.3607 231.621 75.0435 231.621 74.8254C231.624 72.7107 231.641 70.6107 231.621 68.4934C231.606 66.8916 231.706 65.0128 231.497 63.4553C231.411 62.8141 230.801 61.721 230.338 61.2668C229.304 60.253 228.318 59.789 226.893 59.7873C222.145 59.7818 217.399 59.7919 212.655 59.7912L183.223 59.7902H168.254L163.673 59.7863C162.778 59.7851 161.869 59.7649 160.97 59.8264C159.083 59.9653 157.251 61.5899 157.005 63.5197C156.836 64.8446 156.933 66.7005 156.931 68.093L156.926 78.4846C157.833 78.7461 158.912 79.2449 159.835 79.5744C168.977 82.8369 178.108 84.3988 187.733 85.3586C187.732 84.3521 187.699 83.3401 187.7 82.3371C187.7 81.8965 187.734 81.4244 188.073 81.1232C188.224 80.9791 188.471 80.8142 188.686 80.8059C189.83 80.7614 191.014 80.7896 192.159 80.7912L199.839 80.8156C200.706 81.3436 200.612 82.0721 200.621 82.9846C200.629 83.7862 200.632 84.5891 200.642 85.3908C201.937 85.1599 203.275 85.0649 204.585 84.9182C206.017 84.7439 207.448 84.5542 208.876 84.3479C211.364 83.9735 213.836 83.5005 216.286 82.9309C218.458 82.4477 221.198 81.796 223.331 81.1252C222.847 81.5564 221.966 82.129 221.405 82.5158C220.367 83.2297 219.333 83.9489 218.303 84.674C217.9 84.9585 217.074 85.5727 216.636 85.7092C215.66 86.0124 214.507 86.2068 213.492 86.4055C210.851 86.914 208.191 87.325 205.519 87.6369C203.886 87.8402 202.276 88.057 200.631 88.133C200.594 90.3381 200.894 92.8687 198.011 93.5598C196.983 93.8059 195.747 93.6401 194.689 93.6721C193.679 93.7026 192.643 93.6599 191.631 93.6926C189.477 93.7692 187.718 92.4336 187.758 90.1555C187.769 89.5145 187.761 88.7956 187.767 88.1379C185.4 88.0886 182.311 87.6058 179.942 87.2795C171.901 86.1718 164.547 84.2763 156.913 81.4758L156.915 99.0061L156.905 103.793C156.899 105.991 156.639 108.156 158.316 109.863C158.979 110.541 159.847 110.98 160.783 111.108C161.598 111.226 163.506 111.171 164.395 111.167L170.393 111.168L192.644 111.169L192.669 114.009C189.875 113.938 186.931 113.996 184.126 113.998L169.006 113.984L163.511 113.999C160.836 113.999 158.759 114.07 156.621 112.149C155.162 110.857 154.279 109.029 154.169 107.074C154.117 106.127 154.152 104.855 154.153 103.879L154.16 98.1106L154.159 79.5842L154.16 68.6965C154.158 67.2825 154.175 65.8571 154.157 64.4445C154.134 62.5503 154.741 60.784 156.011 59.3606C156.907 58.3442 158.076 57.6121 159.377 57.2522C160.875 56.8505 164.052 56.9686 165.712 56.9719L173.97 56.9777C175.538 56.9805 177.416 57.0347 178.963 56.9484C178.924 55.2328 178.957 53.5069 178.939 51.7902C178.933 51.2024 178.936 50.5749 179.049 49.9982C179.178 49.3074 179.463 48.6558 179.882 48.094C180.738 46.9505 181.899 46.2814 183.298 46.09ZM197.876 83.5783C195.574 83.5696 192.775 83.5022 190.516 83.594C190.538 84.9451 190.545 86.2964 190.536 87.6477C190.535 87.9777 190.519 88.347 190.535 88.6711C190.576 89.4959 190.335 90.9006 191.519 90.9152C193.243 90.9362 194.969 90.8971 196.694 90.9445C197.111 90.956 197.367 90.9354 197.671 90.6389C198.014 90.0254 197.897 88.6743 197.892 87.9397C197.872 86.486 197.867 85.0321 197.876 83.5783ZM187.723 48.8352C186.805 48.8335 184.41 48.7161 183.582 48.8518C182.908 49.0942 182.244 49.4992 181.922 50.174C181.459 51.1437 181.746 55.5634 181.685 56.9611C184.283 57.0496 187.006 56.9537 189.616 56.969C194.645 56.9984 199.693 56.9277 204.721 56.9856L206.717 56.9846C206.697 54.9486 206.841 52.6376 206.62 50.6516C206.369 48.3933 203.262 48.8267 201.783 48.8313L195.978 48.844L187.723 48.8352Z" fill="#333333"/>
                    <path d="M256.784 49.0719C257.929 49.0318 267.034 48.9393 267.585 49.2504C267.784 49.363 267.906 49.6588 267.961 49.8733C268.178 50.7123 268.015 52.7782 268.018 53.7444C268.025 55.7644 268.141 57.852 268.022 59.8647C268.008 60.0944 267.995 60.329 267.868 60.5276C267.69 60.8057 267.367 60.9557 267.057 61.0264C266.549 61.1422 265.762 61.1585 265.312 60.8537C265.118 60.7239 264.977 60.528 264.914 60.3017C264.806 59.9197 264.821 58.594 264.717 58.0415C264.514 56.9626 264.232 55.9596 264.034 54.8811C261.612 57.3501 259.15 59.778 256.647 62.1635C244.228 73.8453 230.464 84.2246 215.252 91.876C214.825 92.0914 214.406 92.2995 213.969 92.4962C211.951 93.3428 209.974 94.4489 207.9 95.2123C207.174 95.4792 206.437 95.8462 205.684 96.0201C206.478 95.2743 207.529 94.7857 208.463 94.2272C210.394 93.0965 212.313 91.9455 214.219 90.7744C219.393 87.5217 224.471 84.1173 229.447 80.5654C236.841 75.3228 243.941 69.6704 250.713 63.6343C252.74 61.8267 254.732 59.9806 256.689 58.0969C258.399 56.4429 260.218 54.5818 261.965 53.0036C260.937 52.8462 260.088 52.3519 259.127 52.1033C258.521 51.9465 257.264 52.0134 256.552 51.9983C256.314 51.837 256.048 51.6641 255.966 51.3777C255.685 50.3931 255.734 49.4642 256.784 49.0719Z" fill="#333333"/>
                    <path d="M267 118.5V119.999C286.5 122 336 112.9 346 130.5C356 148.1 423 128.5 426.5 128.5" stroke="#333333" stroke-width="2.6"/>
                    <path d="M191.5 112.5H144.5C117.167 112.667 55.2714 105.878 48.5 71.5C42 38.5 10.5 38.5009 0 38.5" stroke="#333333" stroke-width="2.6"/>
                  </svg>
                  {/* <img src="/assets/img/business-icon.svg" alt="Business First"></img> */}
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Business First</h3>
                  <p>We understand your business deeply before we talk about technology or design</p>
                </div>
                <div className="icon-num">1</div>
              </li>
              <li>
                <div className="icon">
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
                  {/* <img src="/assets/img/thought-icon.svg" alt="Thoughtful Interaction"></img> */}
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Thoughtful Interaction</h3>
                  <p>We think before we act ensuring an intelligent and innovative outcome</p>
                </div>
                <div className="icon-num">2</div>
              </li>
              <li>
                <div className="icon">
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
        </div>
      </section>
      {/* Home Page Brand section ends */}

      {/* home cta section starts */}
      <section className="cta-wrapper">
        <div className="container">
          <p className="cta-title">Need help with a project?</p>
          <p className="cta-txt">Let’s Talk!</p>
          <div className="cta-btn-wrapp d-flex">
            <ul class="lets-talk-wrap">
              <li class="whatsapp">
                <a href="#" class="view-all pos-ab-aligh-right ">
                  <span class="text">WhatsApp</span>
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M13.75 0C21.3441 0 27.5 6.15588 27.5 13.75C27.5 21.3441 21.3441 27.5 13.75 27.5C11.3201 27.5042 8.93282 26.8611 6.83377 25.6369L0.00552125 27.5L1.86452 20.669C0.639339 18.5693 -0.00423724 16.181 2.09944e-05 13.75C2.09944e-05 6.15588 6.1559 0 13.75 0ZM9.06402 7.2875L8.78902 7.2985C8.61122 7.31075 8.4375 7.35745 8.27752 7.436C8.12844 7.52058 7.99229 7.62616 7.87327 7.7495C7.70827 7.90488 7.61477 8.03963 7.5144 8.17025C7.00581 8.83149 6.73198 9.64331 6.73615 10.4775C6.7389 11.1512 6.9149 11.8071 7.1899 12.4204C7.75227 13.6606 8.67765 14.9737 9.89865 16.1906C10.1929 16.4835 10.4816 16.7778 10.7924 17.0514C12.3096 18.3871 14.1175 19.3503 16.0724 19.8646L16.8534 19.9843C17.1078 19.998 17.3621 19.9788 17.6179 19.9664C18.0183 19.9453 18.4092 19.8369 18.7633 19.6488C18.9432 19.5557 19.1189 19.4548 19.2899 19.3462C19.2899 19.3462 19.3481 19.3068 19.4618 19.2225C19.6474 19.085 19.7615 18.9874 19.9155 18.8265C20.031 18.7073 20.1273 18.5689 20.2043 18.4113C20.3115 18.1871 20.4188 17.7595 20.4628 17.4034C20.4958 17.1311 20.4861 16.9826 20.482 16.8905C20.4765 16.7434 20.3541 16.5907 20.2208 16.5261L19.4205 16.1672C19.4205 16.1672 18.2243 15.6461 17.4928 15.3134C17.4162 15.28 17.3342 15.2609 17.2508 15.257C17.1567 15.2472 17.0616 15.2577 16.9719 15.2878C16.8822 15.3179 16.8001 15.367 16.731 15.4316C16.7241 15.4289 16.632 15.5073 15.6379 16.7118C15.5808 16.7884 15.5022 16.8464 15.4121 16.8782C15.322 16.91 15.2245 16.9143 15.1319 16.8905C15.0423 16.8666 14.9545 16.8363 14.8693 16.7998C14.6988 16.7283 14.6396 16.7008 14.5228 16.6512C13.7333 16.3074 13.0026 15.842 12.3571 15.2721C12.1839 15.1209 12.023 14.9559 11.858 14.7964C11.3171 14.2783 10.8457 13.6922 10.4555 13.0529L10.3744 12.9222C10.317 12.834 10.2699 12.7394 10.2341 12.6404C10.1819 12.4382 10.318 12.276 10.318 12.276C10.318 12.276 10.6521 11.9102 10.8075 11.7122C10.9588 11.5197 11.0866 11.3328 11.1691 11.1994C11.3314 10.9381 11.3823 10.67 11.297 10.4624C10.912 9.52188 10.5142 8.58642 10.1035 7.656C10.0224 7.47175 9.78177 7.33975 9.56315 7.31362C9.4889 7.30446 9.41465 7.29712 9.3404 7.29163C9.15577 7.28104 8.97065 7.28287 8.78627 7.29713L9.06402 7.2875Z" fill="white"/>
                      </svg>
                  </span>
                </a>
              </li>
              <li class="contact-us">
                <a href="javascript:void(0);" class="view-all">
                  <span class="text">Contact Us</span>
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li class="call-us">
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
          <div className="f-top">
            <div className="f-left">
              <div className="f-logo">
                <img src="/assets/img/emqube-logo-black.svg"></img>
              </div>
            </div>
            <div className="f-right">
              <div className="footer-link">
                <p className="main-link-name">Software Solutions House</p>
                <ul>
                  <li className="f-main-name"><a href="javascript:void(0);">Software development</a></li>
                  <li><a href="javascript:void(0);">Business Application Development</a></li>
                  <li><a href="javascript:void(0);">Mobile App Development</a></li>
                  <li><a href="javascript:void(0);">WhatsApp for Business</a></li>
                  <li><a href="javascript:void(0);">AI Development</a></li>
                  <li><a href="javascript:void(0);">Business Intelligence</a></li>
                  <li><a href="javascript:void(0);">E-Commerce Applications</a></li>
                </ul>
                <ul>
                  <li className="f-main-name"><a href="javascript:void(0);">Software Products</a></li>
                  <li><a href="javascript:void(0);">CRM (Zoho, Salesforce)</a></li>
                  <li><a href="javascript:void(0);">ERP (Zoho One, Odoo)</a></li>
                  <li><a href="javascript:void(0);">FM - CAFM Pro</a></li>
                  <li><a href="javascript:void(0);">HRMS - HRMS Pro</a></li>
                  <li><a href="javascript:void(0);">Productivity-135</a></li>
                </ul>
                <ul>
                  <li className="f-main-name"><a href="javascript:void(0);">Software Consulting</a></li>
                  <li><a href="javascript:void(0);">Digital Transformation</a></li>
                  <li><a href="javascript:void(0);">Product Development</a></li>
                </ul>
              </div>
              <div className="footer-link">
                <p className="main-link-name">Digital Content Studio</p>
                <ul>
                  <li className="f-main-name"><a href="javascript:void(0);">Website Development</a></li>
                  <li><a href="javascript:void(0);">Corporate Website</a></li>
                  <li><a href="javascript:void(0);">Personality Website</a></li>
                </ul>
                <ul>
                  <li className="f-main-name"><a href="javascript:void(0);">Digital Marketing</a></li>
                  <li><a href="javascript:void(0);">Social Media</a></li>
                  <li><a href="javascript:void(0);">SEO</a></li>
                  <li><a href="javascript:void(0);">Email Marketing</a></li>
                  <li><a href="javascript:void(0);">Digital Ads</a></li>
                </ul>
                <ul>
                  <li className="f-main-name"><a href="javascript:void(0);">Content Production</a></li>
                  <li><a href="javascript:void(0);">Corporate Films</a></li>
                  <li><a href="javascript:void(0);">Digital Assets</a></li>
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
    <main>
      <Header />
    </main>
  );
}