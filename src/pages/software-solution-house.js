import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "/src/assets/css/common.css";
// import "/src/assets/css/home.css";
import "/src/assets/css/inside.css";


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const [menuItemActive, setMenuItemActive] = useState(false);

  const [scrolled, setScrolled] = useState(false);

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
                <p className="count-txt">Projects Successfully Delivered</p>
              </li>
              <li className="bg-white">
                <p className="count">
                  <span className="num">8</span>
                  <span className="icon">+</span>
                </p>
                <p className="count-txt">Countries Served</p>
              </li>
            </ul>
          </div>
          <div className="inside-intro-title">
            <h1>Software Solutions House</h1>
            <p className="inside-sub-txt">Custom Software Development & Digital Transformation Services in Dubai Partnering with UAE Businesses since 2003</p>
          </div>
          <div className="inside-intro-txt">
            <p>emQube fulfills the digital transformation goals of your organization with a complete range of software services. Whether you need a customized software system developed from scratch, the integration of powerful SaaS solutions, or a hybrid of both, we deliver. Our engagement begins with expert software consulting and extends through development, seamless integration, and dedicated ongoing support.</p>
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
                <p className="count-txt">Years of Team Exoperience</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="scroll-down-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 18L12 22M12 22L16 18M12 22V2" stroke="#4E9C5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </section>
      {/* Inside intro section ends */}

      {/* Home Page Why choose section starts */}
      <section className="home-choose-wrapper">
        <div className="container">
          <h2 className="txt-center txt-gradient-mix">Why <span className="txt-med">Choose Us</span></h2>
          <div className="home-why-choose-list">
            <ul className="d-flex">
              <li>
                <div className="icon">
                  <img src="/assets/img/business-icon.svg" alt="Business First"></img>
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Business First</h3>
                  <p>We understand your business deeply before we talk about technology or design</p>
                </div>
                <div className="icon-num">1</div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/img/thought-icon.svg" alt="Thoughtful Interaction"></img>
                </div>
                <div className="icon-txt">
                  <h3 className="txt-gradient">Thoughtful Interaction</h3>
                  <p>We think before we act ensuring an intelligent and innovative outcome</p>
                </div>
                <div className="icon-num">2</div>
              </li>
              <li>
                <div className="icon">
                  <img src="/assets/img/exceed-icon.svg" alt="Exceed Expectations"></img>
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

      {/* engagement model starts */}
      <section className="engagement-model-wrapp">
        <div className="container">
          <h2 className="txt-center">Our Engagement Model</h2>
          <div className="eng-model-step">
            <ul>
              <li>
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
                  <h5>Consulting</h5>
                  <p>Defining use-cases and functional requirements.</p>
                </div>
              </li>
              <li>
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
                  <h5>Development</h5>
                  <p>Building from scratch or configuring pre-packaged solutions.</p>
                </div>
              </li>
              <li>
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
                  <h5>Quality Assurance</h5>
                  <p>Rigorous testing to ensure a bug-free, fit-for-purpose solution.</p>
                </div>
              </li>
              <li>
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
                  <h5>Deployment & Training</h5>
                  <p>Secure production release and comprehensive user training.</p>
                </div>
              </li>
              <li>
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
                  <h5>Ongoing Support</h5>
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
          <Swiper
            // modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3.2}
            // loop={true}
            navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.jpg" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-projects.jpg" alt="Emovers"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.jpg" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-projects.jpg" alt="Emovers"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.jpg" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-projects.jpg" alt="Emovers"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.jpg" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-projects.jpg" alt="Emovers"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.jpg" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-projects.jpg" alt="Emovers"></img>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="work-wrapp">
                <div className="client-icon">
                  <img src="/assets/img/emovers-new-logo.jpg" alt="Emovers logo"></img>
                </div>
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <div className="proj-img">
                  <img src="/assets/img/emove-projects.jpg" alt="Emovers"></img>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Work Reference Section Ends */}

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