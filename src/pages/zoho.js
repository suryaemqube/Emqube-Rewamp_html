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
import "/src/assets/css/zoho-product.css";

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
      question: 'Does Zoho CRM work for field sales in the UAE?',
      answer: (
        <>
        Yes, the mobile app allows your Dubai-based field team to log calls and update deals without an internet connection, syncing automatically once online.
        </>
      )
    },
    {
      question: 'Is Zoho CRM FTA-compliant?',
      answer: (
        <>
        While CRM manages your sales process, our expert integration with <span className="txt-med">Zoho Books</span> ensures your entire financial flow is fully <span className="txt-med">UAE VAT-compliant</span> and audit-ready.
        </>
      )
    },
    {
      question: 'Can we restrict data access for different branches?',
      answer: (
        <>
        Absolutely. We set up hierarchical permissions and roles so your staff only see the data relevant to their specific branch or job function.
        </>
      )
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
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
            </div>
            <div className="proj-img">
              <img src="/assets/img/real-estate-brokerages.webp" alt="Real Estate Brokerages"></img>
            </div>
            <div className="proj-txt">
              <p className="proj-name">Real Estate Brokerages</p>
              <p>Configured property-specific modules and lead rotation rules to prevent "lead leakage" and maintain agent confidentiality in the competitive Dubai property market.</p>
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
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
            </div>
            <div className="proj-img">
              <img src="/assets/img/citizenship-residency-services.webp" alt="Citizenship & Residency Services"></img>
            </div>
            <div className="proj-txt">
              <p className="proj-name">Citizenship & Residency Services</p>
              <p>Managed high-value pipelines with automated documentation tracking for complex international application processes.</p>
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
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
            </div>
            <div className="proj-img">
              <img src="/assets/img/trading-distribution.webp" alt="Trading & Distribution"></img>
            </div>
            <div className="proj-txt">
              <p className="proj-name">Trading & Distribution</p>
              <p>Unified customer data across multiple stakeholders with real-time sales leaderboards to drive territory performance in wholesale food distribution.</p>
            </div>
          </div>
        </a>
      )
    },
    {
      key: 4,
      content: (
        <a href="#">
          <div className="work-wrapp">
            <div className="client-icon">
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
            </div>
            <div className="proj-img">
              <img src="/assets/img/plants-accessories-retail.webp" alt="Plants & Accessories Retail"></img>
            </div>
            <div className="proj-txt">
              <p className="proj-name">Plants & Accessories Retail</p>
              <p>Replaced legacy accounting systems with a CRM-led dashboard showing customer history and payment status in one unified view.</p>
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
            <span><span> / </span><a href="/website-development/">Software Solutions House</a></span>
            <span><span> / </span><span class="post post-page current-item">Software Product</span></span>
          </div>
          <div className="title-wrapp">
            <p className="parent-page-title">Software Product</p>
          </div>
          <div className="product-head-wrapper">
            <div className="left">
              <div className="partner-tag">
                <img src="/assets/img/authorized-icon.svg" alt="Authorized Partner"></img>
                <p>Authorized Partner</p>
              </div>
              <h1>Expert Zoho CRM <span className="txt-regular">Partner in Dubai</span></h1>
              <p className="sub-txt">Maximise the complete value <br />of your customer life cycle</p>
            </div>
            <div className="right">
              <div className="form-wrap">
                <div className="wpcf7 js">
                  <form>
                    <div className="form-wrapper">
                      <ul>
                        <li>
                          <span class="wpcf7-form-control-wrap" data-name="first-name">
                            {/* <label>First name</label> */}
                            <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="First name"  type="text" name="first-name" />
                          </span>
                        </li>
                        <li>
                          <span class="wpcf7-form-control-wrap" data-name="last-name">
                            {/* <label>Last Name</label> */}
                            <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Last Name"  type="text" name="last-name" />
                          </span>
                        </li>
                        <li>
                          <span class="wpcf7-form-control-wrap" data-name="company-name">
                            {/* <label>Company Name</label> */}
                            <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Company Name"  type="text" name="company-name" />
                          </span>
                        </li>
                        <li className="w-50">
                          <span class="wpcf7-form-control-wrap" data-name="company-email">
                            {/* <label>Email</label> */}
                            <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email"  type="email" name="company-email" />
                          </span>
                        </li>
                        <li className="w-50">
                          <span class="wpcf7-form-control-wrap" data-name="mobile-number">
                            {/* <label>Phone No.</label> */}
                            <input size="40" maxlength="400" class="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" placeholder="Phone No."  type="tel" name="mobile-number" />
                          </span>
                        </li>
                        <li className="w-100">
                          {/* <label>Describe your requirements</label> */}
                          <textarea cols="40" rows="10" maxlength="2000" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Describe your requirements" name="your-message" spellcheck="false"></textarea>
                        </li>
                        <li className="w-100">
                          <div class="submit-button-wrap">
                            <div class="btn-wrap">
                              <div class="view-all reverse pos-ab-aligh-right">
                                <input class="wpcf7-form-control wpcf7-submit has-spinner submit-btn" type="submit" value="Request a call back" /><span class="wpcf7-spinner"></span>
                                <span class="text">Request a call back</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inside intro section ends */}

      {/* child page intro highlight section starts */}
      <section className="intro-highlight-wrapper slide-up">
        <div className="container">
          <div className="left">
            <p><span className="txt-green">Stop Chasing Leads.</span><span className="txt-grey">Start Closing Deals</span></p>
          </div>
          <div className="right">
            <p>Move beyond fragmented spreadsheets and disconnected tools.</p>
          </div>
        </div>
      </section>
      {/* child page intro highlight section ends */}

      {/* Child page strategic choice section starts */}
      <section className="strategic-choice-wrapper">
        <div className="container">
          <h2>Zoho CRM Modules & Features</h2>
          <ul>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="174" height="105" viewBox="0 0 174 105" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5469 2.86661C53.5078 2.85864 55.549 2.7069 57.4971 2.87051C58.0477 2.91675 58.8294 3.0062 59.2959 3.33243C60.1126 3.90383 63.1162 12.8144 63.4112 14.1293C65.0028 14.57 69.6217 16.2979 71.085 16.9848C72.5981 16.0999 74.2542 15.4284 75.8272 14.6547C77.4011 13.8807 78.9663 12.9768 80.5928 12.3227C81.2174 12.0715 81.8098 11.8404 82.46 12.1303C83.8728 12.7604 92.5739 21.5981 92.9346 22.8002C93.2907 23.991 89.0121 31.9676 88.0557 33.5912C89.113 35.9834 90.6056 39.0956 91.2949 41.5385C94.5673 42.3984 97.8554 43.6808 101.11 44.6195C102.517 45.0252 102.953 45.5189 102.993 46.9799C103.108 51.1313 103.073 55.3235 103.039 59.4779C103.019 59.7679 102.886 60.8494 102.711 61.0717C102.052 61.908 98.9906 62.6946 98.0449 63.0014C95.7562 63.7317 93.4749 64.4856 91.2022 65.2641C90.702 67.0729 88.9595 71.034 88.1651 72.8725C88.8533 74.1591 93.4764 82.7536 93.4385 83.3354C93.4025 83.8863 92.9038 84.5807 92.5684 84.9945C91.1536 86.7398 89.2993 88.3032 87.6944 89.8822C86.3096 91.2448 84.9699 92.8391 83.4239 94.0131C83.0796 94.2746 82.4215 94.7838 81.9629 94.6996C81.9275 94.6929 81.8927 94.684 81.8574 94.6762C79.3289 94.133 73.7777 90.994 71.293 89.6986C68.6533 90.9231 66.5952 91.7219 63.8711 92.6703C62.7298 95.4785 61.8917 98.5037 60.8311 101.35C60.2598 102.883 60.1734 104.011 58.2891 104.147C55.7908 104.151 45.4177 104.462 43.8916 103.891C43.5325 103.757 43.3034 103.278 43.1416 102.95C42.719 102.091 42.4535 101.115 42.1455 100.208C41.6869 98.8571 41.1834 97.5225 40.7217 96.1723C40.3394 95.0546 40.0066 93.8796 39.5069 92.809L39.4463 92.682C37.2361 91.9704 34.3996 90.6799 32.2041 89.7494C28.7131 91.2916 25.0278 93.5686 21.4375 94.6898C20.3028 95.0434 15.032 89.1526 14.0313 88.2367C13.031 87.3209 10.2424 84.6736 9.98635 83.5824C10.2036 82.2026 12.0317 79.3254 12.709 77.8686C13.4412 76.2938 14.3196 74.1751 15.2227 72.7719C14.6169 71.7816 12.4277 66.3253 12.0606 65.2641C10.9165 65.0047 1.4444 62.0374 0.626 61.558C0.178434 60.802 -0.0115586 60.2346 0.00197624 59.3383C0.0683103 55.2071 0.0131552 51.0656 2.3112e-05 46.9359C-0.00330779 45.8761 0.353019 45.2826 1.31545 44.8813C2.29879 44.4711 3.38578 44.196 4.39651 43.8637C6.82945 43.0494 9.2692 42.2558 11.7158 41.4838C12.3763 39.415 13.823 35.6583 14.8985 33.8148C14.8396 33.7276 14.7815 33.6395 14.7256 33.5502C14.1239 32.5877 9.51295 23.6626 9.74123 23.1459C10.6037 21.1946 18.1911 13.9054 20.3311 12.2172C21.1921 11.5381 24.855 13.7415 25.8487 14.2465C27.8239 15.2533 29.8225 16.214 31.8428 17.1273C33.889 16.1827 37.1499 14.8391 39.334 14.1869C40.3629 11.2105 41.4428 8.27539 42.5303 5.32168C43.1591 3.61361 42.9454 3.07853 44.918 2.83731C47.1212 2.77435 49.3413 2.87546 51.5469 2.86661ZM57.6104 5.46817C54.9337 5.30946 50.4309 5.32869 47.7207 5.41836L45.1514 5.50235C43.9172 8.42789 42.8582 11.3905 41.7735 14.3744C41.5762 14.917 41.3911 15.3993 41.1377 15.9193C39.7673 16.4925 32.5117 19.5013 31.6201 19.5785C31.1522 19.6189 30.5762 19.3952 30.1514 19.2191C27.0814 17.9459 24.2388 16.0338 21.1475 14.8393C18.1659 17.5896 15.2788 20.4412 12.4912 23.3881C13.177 24.8666 13.8637 26.3247 14.5801 27.7768C15.2667 29.168 17.0444 32.1604 17.4151 33.4994C16.9619 35.6742 14.8971 38.4073 14.4444 40.7973C14.3373 41.3624 13.8252 42.9955 13.3418 43.3607C12.3455 43.9058 10.9595 44.3407 9.87893 44.724L2.70998 47.2094C2.65263 51.2717 2.55228 55.6694 2.72659 59.7065C6.02466 60.8855 10.1492 61.6653 13.3721 63.1078C14.4415 63.5865 15.0989 66.8293 15.6289 67.8578C16.3544 69.5082 17.4029 71.1885 17.8291 72.8861C17.458 74.1048 16.2401 76.3691 15.6201 77.6039C14.6818 79.4842 13.7692 81.3776 12.8819 83.2826C13.9583 84.6168 15.4829 86.0197 16.7315 87.2299C18.3321 88.7848 19.9004 90.3718 21.4346 91.9926C22.7365 91.327 24.338 90.6121 25.6934 89.9926C27.492 89.171 30.1915 87.5707 31.9697 87.1205C33.685 87.7051 35.4602 88.5911 37.1719 89.2836C38.5777 89.8526 40.1758 90.2464 41.4912 90.7885C42.4203 92.9838 43.1473 95.3746 43.9268 97.6283C44.3585 98.8775 44.8432 100.487 45.4463 101.658L55.7256 101.665L57.8184 101.676C59.2241 98.4842 60.437 94.5089 61.8037 91.1508C63.2578 90.1564 65.6886 89.5049 67.3916 88.8012C68.5185 88.3354 70.4364 87.4563 71.5381 87.1254C73.0042 87.5991 75.5603 88.974 77.0752 89.7338C78.7364 90.5677 80.3934 91.2119 82.0049 91.9818C83.9041 89.9964 85.8384 88.0444 87.8067 86.1273C88.5077 85.444 90.2383 83.9207 90.7647 83.2592C89.4045 80.8507 88.2035 78.1759 86.8321 75.7563C86.2802 74.7825 85.4102 73.5477 85.8067 72.4428C86.756 69.7985 87.9409 67.1661 88.9756 64.5473C89.1224 64.1759 89.2762 63.7781 89.4746 63.4301C91.6109 62.2005 97.8279 60.4403 100.464 59.5258C100.476 55.9204 100.631 50.7067 100.421 47.1977C97.6499 45.8965 92.4009 44.9391 89.5117 43.394C89.0092 42.025 88.4747 40.6678 87.9092 39.3236C86.9363 37.0437 84.9514 34.1288 86.1514 31.7885C87.5785 29.0053 89.0075 26.2191 90.4151 23.4252C87.5443 20.4966 84.6202 17.6203 81.6446 14.7982C78.7277 16.1035 73.9189 18.7228 71.1553 19.6537C69.8159 19.2256 67.6103 18.2458 66.2256 17.6801C64.9984 17.1787 62.6251 16.3634 61.5928 15.8568C61.3548 15.4806 61.1902 15.1093 61.0362 14.6928C59.8991 11.6189 58.8527 8.50162 57.6104 5.46817Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M49.2883 25.3523C64.967 24.0949 78.6897 35.8002 79.9201 51.4812C81.1504 67.1623 69.4207 80.8651 53.7375 82.0681C38.0929 83.2682 24.4307 71.5738 23.2033 55.9314C21.9761 40.2888 33.6478 26.6067 49.2883 25.3523ZM47.4963 57.8025C43.3825 58.7818 39.8301 61.3631 37.6281 64.9734C36.1343 67.4609 35.1942 70.8979 35.0998 73.7947C36.282 74.57 37.2591 75.3882 38.5217 76.074C44.6294 79.391 49.7684 80.0316 56.4631 79.0681C61.8532 77.9039 64.3078 76.5152 68.7287 73.3542L68.6847 73.2185C68.2957 71.9613 68.2076 70.5257 67.8469 69.2136C66.6885 65.0213 63.8829 61.4763 60.0685 59.3865C58.9728 58.7915 57.6185 58.2777 56.4474 57.8122C51.9074 58.4012 52.3092 58.8538 47.4963 57.8025ZM50.2951 27.8269C50.1595 27.8298 50.1568 27.8359 50.0217 27.8601C49.3472 27.9312 48.6428 27.9867 47.9758 28.0955C26.2927 31.6291 17.9483 55.6844 32.8293 71.8152C34.0104 65.9509 35.847 61.452 41.049 57.991C42.2052 57.2349 43.4268 56.5833 44.6984 56.0437C39.8686 51.4945 39.4012 45.0338 44.0139 40.1189C46.0992 37.8967 49.5815 36.5859 52.6262 36.8328C53.8935 37.0211 55.0727 37.2184 56.2472 37.78C63.5323 41.2638 64.903 50.8336 58.6574 56.0505C65.6716 59.1347 69.4767 63.828 70.718 71.4831C86.6467 53.6351 73.9158 27.3247 50.2951 27.8269ZM51.1574 39.283C46.5073 39.5951 42.9887 43.6139 43.2941 48.2644C43.5996 52.9147 47.6131 56.4388 52.2639 56.1404C56.9243 55.841 60.4576 51.8169 60.1515 47.157C59.8455 42.4972 55.8167 38.9704 51.1574 39.283Z" fill="#4E9C5A"/>
                  <path d="M129.579 26.5937C133.643 25.9084 134.914 32.9398 130.83 34.7411C126.336 35.0181 125.801 28.4217 129.579 26.5937Z" fill="#4E9C5A"/>
                  <path d="M149.431 26.4864C153.24 26.4524 154.375 33.7156 149.907 34.7785C145.87 34.5435 145.389 27.9824 149.431 26.4864Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M119.804 0.0119137C120.446 -0.0232062 121.024 0.00939848 121.63 0.245312C122.604 0.621434 123.39 1.36812 123.817 2.32148C124.643 4.20908 123.678 6.5113 121.786 7.27461C121.701 10.572 121.683 13.8711 121.734 17.1691C122.495 16.8741 123.561 16.4537 124.313 16.217C132.809 13.5413 150.585 13.2166 158.277 17.2521C158.333 14.0375 158.32 10.6744 158.309 7.45527C157.534 6.98231 156.681 6.35169 156.247 5.54219C153.84 1.11823 160.599 -2.164 163.028 1.89473C164.384 4.16323 162.933 6.41399 160.869 7.51094C160.737 10.8907 160.845 15.1723 160.826 18.6369C160.948 18.7291 161.069 18.8225 161.188 18.9172C162.931 20.3011 164.201 22.448 164.458 24.6711C165.138 24.6657 165.84 24.6562 166.504 24.6779C171.806 24.8518 171.56 29.8922 171.432 33.8244C171.372 35.6841 170.816 37.2551 169.448 38.4973C167.829 39.5808 166.051 39.5554 164.164 39.2805C161.743 44.184 157.786 48.1628 152.896 50.6115C145.766 54.1157 138.763 54.7823 131.237 52.1828C124.086 49.7131 119.125 46.0625 115.764 39.2131C115.223 39.242 114.682 39.2629 114.14 39.2756C109.578 39.3656 108.667 36.708 108.638 32.6613C108.596 26.7796 108.868 24.6417 115.461 24.7404C116.056 21.8223 116.902 20.4025 119.325 18.6066C119.246 15.0418 119.152 11.0287 119.249 7.46602C117.943 6.89314 116.929 5.98737 116.568 4.55586C116.333 3.61783 116.492 2.62484 117.006 1.80586C117.66 0.760677 118.639 0.271077 119.804 0.0119137ZM157.501 44.7814C155.225 45.7039 152.605 45.963 150.164 45.9826C147.212 46.0062 144.216 46.0558 141.265 46.0041C135.195 45.8977 128.673 46.3374 122.701 45.1047C124.006 46.1615 125.008 46.916 126.452 47.7775C132.596 51.4638 139.965 52.5204 146.897 50.7102C150.557 49.768 154.685 47.506 157.52 45.0051L157.539 44.8283L157.501 44.7814ZM140.267 16.6672C139.268 16.6491 137.216 16.678 136.271 16.7521C131.573 16.9765 122.912 17.702 119.56 21.4143C118.829 22.2097 118.315 23.1795 118.066 24.2307C117.646 26.0633 117.896 29.7395 117.882 31.7229C117.864 34.2607 117.275 39.2197 119.563 40.8791C124.032 44.1214 131.035 43.7542 136.273 43.7551L144.169 43.7512C149.314 43.7862 156.357 44.1867 160.61 40.5383C163.043 38.4515 162.173 33.5376 162.236 30.6057C162.301 27.6027 162.808 23.6561 160.375 21.468C155.253 16.8094 146.788 16.8636 140.267 16.6672ZM164.737 27.135C164.601 30.024 164.729 33.9819 164.777 36.9123C165.988 37 167.246 37.1115 168.232 36.259C169.462 34.8705 169.023 31.906 169.003 30.0861C168.967 26.9752 166.992 27.0718 164.737 27.135ZM113.823 26.967C111.981 27.1195 110.898 28.0222 111.08 30.0139C111.28 32.1867 110.169 35.975 112.72 36.9387C113.605 36.919 114.517 36.916 115.397 36.8352C115.403 33.5709 115.384 30.3061 115.337 27.0422L113.823 26.967ZM161.062 3.44355C160.836 2.63715 160.006 2.16112 159.196 2.37324C158.659 2.51366 158.239 2.93242 158.099 3.46895C157.959 4.00566 158.119 4.57669 158.518 4.96211C158.917 5.34738 159.493 5.48729 160.024 5.32832C160.826 5.08836 161.288 4.24986 161.062 3.44355ZM120.243 2.3C119.695 2.3158 119.198 2.62582 118.944 3.11152C118.69 3.59722 118.718 4.18278 119.018 4.6418C119.317 5.10096 119.842 5.36243 120.39 5.32539C121.212 5.26956 121.839 4.5654 121.8 3.74141C121.76 2.91714 121.068 2.27621 120.243 2.3Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M140.341 62.7904C146.959 62.717 146.191 62.3073 146.173 68.5238L146.16 76.0433C146.189 84.3588 146.173 92.6749 146.114 100.99C147.294 101.024 150.873 100.448 150.896 102.106C150.905 102.78 150.349 103.265 149.678 103.245C147.844 103.192 146.007 103.231 144.169 103.238L130.734 103.237L92.1732 103.226L79.9329 103.219C77.5918 103.225 75.2421 103.249 72.9017 103.206C72.0405 103.191 71.4868 101.817 72.3402 101.326C73.1939 100.835 74.1819 100.991 75.1243 100.964C77.4125 100.973 79.6993 100.991 81.9866 100.996L99.682 100.988C99.664 97.4139 99.665 93.8387 99.6829 90.265C100.097 89.6691 100.452 89.1211 101.247 89.0491C102.72 88.9156 104.235 88.9743 105.716 88.9788L114.543 89.0062C114.584 87.3869 114.599 85.766 114.585 84.1458C114.577 83.0833 114.511 81.7439 114.644 80.6917C114.721 80.0746 115.396 79.687 115.896 79.3685C117.342 79.2769 119.38 79.3326 120.856 79.3392C123.681 79.3607 126.505 79.3642 129.329 79.349L129.296 68.8392C129.292 67.3871 129.213 65.5371 129.374 64.1087C129.434 63.588 130.122 63.1297 130.556 62.8538C133.78 62.7114 137.138 62.8259 140.341 62.7904ZM140.893 65.2806C137.997 65.3175 135.061 65.2379 132.17 65.3577L131.914 65.4163C131.626 65.9532 131.758 97.3504 131.711 100.896C135.078 100.995 140.202 101.096 143.542 100.924L143.834 100.868C144.114 100.428 143.97 98.823 143.967 98.2259C143.93 91.559 143.941 84.8885 143.945 78.221C143.939 75.7957 143.951 73.3697 143.978 70.9447C143.997 69.281 144.059 67.038 143.936 65.388C142.953 65.2831 141.885 65.268 140.893 65.2806ZM114.396 91.5823C110.307 91.5442 106.22 91.5378 102.132 91.5648C102.112 94.6826 102.054 97.7762 102.121 100.893L109.903 100.989C111.206 100.993 113.115 101.024 114.374 100.882C114.56 98.312 114.345 94.3344 114.396 91.5823ZM129.127 81.8909C126.642 81.7241 122.808 81.848 120.238 81.8568L117.087 81.9251C116.832 88.2325 117.166 94.5988 116.975 100.908C119.991 100.96 123.006 100.985 126.021 100.978C127.078 100.961 128.131 100.955 129.185 100.881L129.198 88.762C129.195 86.6111 129.251 84.0122 129.127 81.8909Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M161.269 72.0257C161.587 72.0235 162.157 72.0263 162.347 72.2874C163.746 74.2222 163.846 77.3695 165.329 79.2952C167.21 81.736 170.948 82.0803 173.574 83.3128C174.049 83.5321 174.18 84.5892 173.713 84.8138C171.365 85.9436 168.667 86.4292 166.38 87.7913C163.986 89.2166 163.683 94.6467 162.337 96.2864C162.054 96.3796 161.287 96.5072 161.143 96.2054C159.936 93.6936 159.79 91.4128 158.373 88.8909C156.905 86.2779 149.883 86.0232 149.723 83.8704C150.036 83.1827 150.941 82.8944 151.573 82.682C157.681 80.6286 158.535 80.7088 160.219 74.1224C160.393 73.4416 160.686 72.5575 161.269 72.0257ZM161.743 77.5091C160.116 81.0228 159.181 82.3912 155.437 83.7698C155.098 83.8981 154.753 84.011 154.404 84.1087C157.584 85.0296 160.085 86.409 161.293 89.5755C161.387 89.8223 161.687 90.6141 161.886 90.7493C163.749 86.2219 164.756 85.8526 169.147 84.1468C165.824 82.9301 164.138 82.3326 162.511 78.9017C162.368 78.6 161.978 77.6937 161.743 77.5091Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">Sales Force Automation & Zia AI</p>
                <p>Eliminate manual work with automated follow-ups and advanced lead scoring. We leverage <span className="txt-med">Zia, Zoho’s AI assistant</span>, to predict the "best time to contact" prospects, detect anomalies in sales patterns, and provide intelligent revenue forecasting tailored to the UAE market trends.</p>
              </div>
            </li>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="175" height="120" viewBox="0 0 175 120" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.7889 2.06592C50.2371 1.23509 60.2482 8.12109 63.9227 17.8062C69.888 16.3272 76.5069 18.6131 80.8807 22.772C84.6171 26.3629 86.7765 31.2901 86.8847 36.4712C86.9905 41.3424 84.9232 46.6505 81.5536 50.1685C78.3315 53.5971 73.9663 55.7286 69.2811 56.1607C67.2367 56.35 63.3421 56.2349 61.1932 56.2339C56.6018 56.1992 52.0097 56.2202 47.4188 56.2974C42.9442 56.3624 38.0941 56.2724 33.5888 56.2632L14.7753 56.2515C10.7256 56.248 6.84769 54.6108 4.02039 51.7114C1.49129 49.1019 -0.0610309 45.3292 0.00184016 41.6841C0.0564888 37.61 1.7407 33.7278 4.6786 30.9048C8.07992 27.6441 11.998 26.7197 16.5682 26.7954C16.8817 20.3983 18.3392 15.3585 22.6757 10.4253C27.021 5.447 33.1912 2.43285 39.7889 2.06592ZM48.3163 6.18409C46.3073 5.43547 42.4982 4.747 40.3729 4.95655C36.9797 5.19684 34.4759 5.74921 31.3973 7.28272C24.9468 10.4958 20.3117 17.007 19.6679 24.2153C19.5503 25.5332 19.8165 27.035 19.7929 28.3648C19.7559 29.3873 19.6465 29.7614 18.5692 29.8257C17.3581 29.8979 16.1741 29.6543 14.9813 29.6587C4.11344 29.6989 -1.56438 43.091 6.95399 50.4819C10.7952 53.8148 14.3426 53.3732 18.9774 53.356L27.5409 53.3335L59.2489 53.3208C66.9959 53.3489 73.2156 54.3431 79.2196 48.396C82.3528 45.3205 84.1079 41.1078 84.0848 36.7173C84.1118 29.9509 79.6313 23.6229 73.2079 21.2788C67.6285 19.2429 62.8279 20.271 57.8602 23.3052C57.001 23.83 56.2675 24.7086 55.3446 25.1314C53.5604 25.9092 52.4966 23.6841 53.8554 22.6069C56.0017 20.9058 58.6925 19.5644 61.1923 18.4399C58.3703 12.5537 54.5877 8.52122 48.3163 6.18409Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M146.573 1.36328C147.288 1.3747 159.874 7.53166 161.641 8.48535C165.33 10.4776 171.019 12.7909 174.69 14.7656C174.468 25.9476 174.752 37.2737 174.603 48.4707C173.399 49.3425 169.398 51.1022 167.903 51.8105C160.825 55.1626 153.524 58.1488 146.393 61.3652C145.658 61.4854 120.655 48.3731 118.504 47.25C118.475 46.7415 118.486 46.2518 118.489 45.7432C118.556 35.3363 118.711 24.9393 118.65 14.5322C119.929 13.8618 121.476 13.2543 122.804 12.5908C127.739 10.1252 132.72 7.86976 137.739 5.59766C140.672 4.27031 143.577 2.72897 146.573 1.36328ZM121.341 17.1445C121.117 21.6362 121.202 26.4663 121.189 30.998L121.065 45.585C124.123 47.0357 127.037 48.6773 130.043 50.2256L145.069 57.9502C145.207 48.1972 145.154 38.4388 145.349 28.6992C143.484 27.844 141.613 26.9487 139.77 26.0439C133.657 23.0426 127.383 20.2801 121.341 17.1445ZM171.725 17.8535C169.783 18.8063 167.708 19.6557 165.731 20.5527L155.014 25.417C153.212 26.2187 149.574 28.0854 147.967 28.6064C147.881 35.8001 147.831 42.9943 147.818 50.1885C147.812 51.1868 147.685 57.1071 147.827 57.6543C147.999 57.6983 148.005 57.7319 148.138 57.6963C151.63 56.0491 155.215 54.5492 158.743 52.9629L171.978 46.9375C171.949 44.04 171.998 18.2408 171.725 17.8535ZM146.435 4.16504L130.96 11.2939C128.244 12.5694 126.017 13.7612 123.184 14.9854C130.779 18.9709 138.701 22.5181 146.45 26.207C146.607 26.2821 146.757 26.2442 146.917 26.209L147.029 26.1348C154.653 22.4335 162.637 19.1591 170.239 15.4775C168.362 14.718 166.117 13.5008 164.238 12.5879C160.504 10.8032 156.782 8.99065 153.073 7.15039C152.004 6.61983 146.977 3.98944 146.435 4.16504Z" fill="#4E9C5A"/>
                  <path d="M44.0411 59.8105C45.1225 60.145 46.3559 62.2206 46.9403 63.1285C50.1171 68.0643 54.274 70.5921 59.7516 72.4121C60.4558 72.646 62.7469 73.6907 61.5737 74.6895C60.5914 75.5258 58.2609 74.3169 57.1792 74.0016C52.1588 72.4246 48.7924 69.4142 45.4462 65.4542C45.637 67.3994 45.507 69.4116 45.6294 71.3408C45.8985 75.187 46.8985 79.5503 48.2995 83.101C55.4185 101.145 74.6176 112.454 93.8502 110.381C94.3595 110.326 95.0612 110.256 95.5177 110.506C96.6129 113.036 94.1332 112.73 92.3388 112.877C79.3962 113.94 65.787 108.788 56.6223 99.8135C47.1483 90.5368 42.9832 78.8814 42.8514 66.0251C40.4397 70.2073 37.7619 74.4027 35.2282 78.5003C34.7572 79.2621 31.7922 78.6078 34.0335 75.7944C35.9875 73.3417 42.0619 61.0245 44.0411 59.8105Z" fill="#4E9C5A"/>
                  <path d="M136.176 64.3652C136.633 64.3767 136.721 64.3679 137.132 64.5556C137.855 65.2564 137.876 68.3654 137.904 69.3892C138.087 76.7401 136.255 84.001 132.607 90.3854C126.809 100.576 118.333 106.71 107.122 109.777C109.196 111.01 121.387 116.683 122.105 117.729C122.255 117.948 122.345 118.32 122.274 118.579C122.128 119.11 121.501 119.445 121.069 119.714C119.318 119.14 116.462 117.676 114.766 116.84C110.519 114.744 106.38 112.503 102.123 110.407C101.493 110.021 100.688 109.666 100.986 108.829C101.84 108.004 103.713 106.837 104.773 106.012C108.412 103.181 110.397 100.261 112.704 96.2991C113.274 95.5846 114.583 92.0512 115.433 92.0391C117.794 92.1763 116.617 94.0745 116.077 95.2959C113.952 100.102 111 103.553 107.39 107.219C111.566 105.733 115.383 104.235 119.09 101.724C129.561 94.6285 135.676 82.1794 135.453 69.6023C135.432 68.4091 135.12 66.1112 135.336 64.9896C135.571 64.6033 135.765 64.5618 136.176 64.3652Z" fill="#4E9C5A"/>
                  <path d="M152.425 64.8813C152.79 64.8683 152.818 64.8677 153.169 64.9575C153.242 65.0295 153.443 65.235 153.452 65.3462C154.771 83.8216 143.029 104.517 125.783 111.843C124.834 110.917 124.2 110.281 125.684 109.479C140.715 101.339 150.148 86.944 151.084 69.7775C151.159 68.4075 151.12 66.8117 151.433 65.5143C151.504 65.2141 152.201 64.9747 152.425 64.8813Z" fill="#4E9C5A"/>
                  <path d="M87.0761 0.176944C96.06 -0.824252 106.61 2.53595 114.101 7.40902C114.765 7.84071 115.422 8.27177 115.477 9.10547C115.299 9.58884 114.848 9.91742 114.457 10.2649C112.528 9.35721 110.536 8.09811 108.609 7.10169C104.993 5.23184 101.837 4.26158 97.9059 3.42674C89.4041 1.57336 81.6811 2.68874 73.6485 5.98896C72.0852 6.63128 70.5249 7.55212 68.9711 8.30031C68.4218 7.81481 67.4418 7.01166 68.2118 6.27969C69.0057 5.52496 70.1549 5.10924 71.1236 4.61945C76.2196 2.04341 81.3843 0.621962 87.0761 0.176944Z" fill="#4E9C5A"/>
                  <path d="M92.6875 32.0753C97.6357 31.751 103.214 32.738 107.904 34.3083C109.056 34.694 111.679 35.2645 112.03 36.7099C112.114 37.057 111.796 37.4466 111.595 37.7302C110.629 38.0801 108.294 36.98 107.118 36.5903C104.009 35.549 100.793 34.8501 97.5313 34.5058C96.465 34.3881 95.0013 34.2686 93.9261 34.2643C92.4323 34.2584 91.9469 33.2824 92.6875 32.0753Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">Seamless Zoho Ecosystem Integration</p>
                <p>Break down silos by connecting your CRM with the entire Zoho suite. We specialize in linking <span className="txt-med">Zoho Books</span> for financial visibility, <span className="txt-med">Zoho Projects</span> for post-sale delivery, and <span className="txt-med">Zoho People</span> for resource management. Syncing your data ensures a unified flow from the initial lead to the final ledger.</p>
              </div>
            </li>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="161" height="124" viewBox="0 0 161 124" fill="none">
                  <path d="M119.099 82.5895C120.692 82.5826 127.299 82.3992 128.324 82.8303C128.469 83.0172 128.533 83.1847 128.584 83.4141C128.834 84.5321 128.929 94.4327 128.44 95.061C128.318 95.2185 128.097 95.317 127.9 95.3418C127.457 95.398 127.08 95.2488 126.735 94.9834C126.35 94.3796 126.509 91.7838 126.517 90.8817C126.534 88.9333 126.522 86.9846 126.481 85.0365C125.037 84.839 121.38 84.9096 119.76 84.9088L106.765 84.9382L106.774 92.0006C109.206 92.0574 111.649 91.9364 114.068 92.0576C115.484 92.1285 115.142 94.7192 115.149 95.7363C115.161 97.4078 115.118 99.205 114.944 100.871C114.911 101.184 114.543 101.339 114.295 101.501L114.273 101.693L114.588 102.023C114.7 102.865 114.663 104.433 114.483 105.257C115.402 105.307 117.179 105.16 117.38 106.332C117.425 106.577 117.364 106.829 117.214 107.027C116.99 107.32 116.598 107.458 116.24 107.464C111.374 107.54 106.492 107.454 101.626 107.513C101.123 107.506 97.5016 107.638 97.3394 107.349C96.696 106.202 96.9921 104.335 96.9344 103.016C96.8985 102.18 96.9486 101.059 96.9562 100.179C96.9595 99.5879 96.8365 98.5772 97.2033 98.0918C97.3775 97.8623 97.6824 97.7317 97.9654 97.7132C98.1843 97.6989 98.3976 97.7918 98.5566 97.9392C99.4537 98.7749 99.0215 103.8 99.1053 105.26C103.149 105.398 109.13 105.307 113.197 105.152C113.252 103.873 113.291 102.838 113.549 101.582C113.399 101.371 113.143 101.002 113.11 100.753C112.857 98.7807 112.959 96.2398 112.94 94.2268C110.913 94.288 108.815 94.2801 106.782 94.2957C106.77 95.3588 107.431 104.159 104.546 100.534C104.407 100.361 104.47 95.0125 104.462 94.2822C102.251 94.2726 99.6986 94.3168 97.518 94.1901C94.5698 91.2694 103.145 92.0138 104.469 92.0063L104.486 84.9307C102.247 84.9215 99.5473 85.1 97.3895 84.6592C96.7929 84.5373 96.3759 82.8148 97.9382 82.7259C100.347 82.5888 102.758 82.6369 105.174 82.6313L119.099 82.5895Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M149.71 59.0664C154.195 59.0929 159.296 61.0194 160.209 66.1143C160.409 67.9949 160.425 70.0404 160.417 71.9326C160.356 86.3423 160.369 100.781 160.332 115.188C160.308 124.463 148.822 123.384 142.467 123.382L125.968 123.35L94.7802 123.392C90.6553 123.384 86.2281 123.485 82.1435 123.368C79.5207 122.988 77.1624 122.176 75.7402 119.748C75.2378 118.891 74.737 117.467 74.705 116.467C74.6196 113.794 74.6652 111.104 74.6689 108.428L74.6845 92.8711L74.6582 80.7373C74.6548 78.6335 74.4826 75.4306 74.8896 73.498C75.9349 68.537 82.6205 67.4507 86.8027 68.3799C88.2224 68.6954 89.3792 69.9573 90.0644 71.1865C95.5253 70.9191 102.608 71.1397 108.131 71.1416L142.83 71.0938C142.803 69.6431 142.794 63.65 143.095 62.4629C143.237 61.8868 143.52 61.3552 143.92 60.916C145.328 59.3871 147.764 59.1584 149.71 59.0664ZM156.921 63.7334C154.729 61.336 151.531 60.7433 148.438 61.001C146.769 61.3106 145.735 61.4955 144.676 62.9229C144.616 65.1026 144.804 81.2232 144.497 81.7236C143.185 82.3213 142.867 81.0639 142.873 80.0664C142.89 77.7312 142.856 75.3907 142.812 73.0557C137.244 72.8458 131.062 73.0127 125.45 73.0391L103.678 73.0176C99.2098 73.052 94.7419 73.0473 90.2734 73.0049L90.2558 99.8418L90.2685 108.454C90.269 109.986 90.293 111.528 90.2099 113.059C90.1973 113.29 90.0786 113.534 89.9189 113.703C89.643 113.936 89.5827 113.887 89.2627 113.885C88.691 113.664 87.8581 112.562 87.3545 112.1C84.4727 109.453 78.3932 110.263 76.916 114.092C76.4358 115.355 76.4777 116.756 77.0332 117.988C78.1287 120.448 80.7799 121.427 83.3086 121.497C87.1778 121.603 91.0613 121.585 94.9316 121.588L117.033 121.593C124.441 121.656 131.847 121.662 139.255 121.613C142.146 121.611 145.086 121.613 147.973 121.628C150.593 121.642 152.489 121.474 154.882 120.396C159.115 118.486 160.032 113.774 154.903 112.334C152.308 111.605 149.975 111.655 147.384 112.328C146.89 112.465 146.555 112.584 146.09 112.742C145.338 112.999 144.09 114.001 143.385 113.82C142.664 113.009 142.877 110.892 142.842 109.842C142.759 107.417 142.922 104.93 142.744 102.513C141.42 103.82 140.036 105.06 138.708 106.361L134.061 110.871C132.962 111.945 130.996 114.199 129.714 114.815C126.555 116.333 121.842 117.217 118.747 118.484C118.362 118.184 118.089 117.984 117.757 117.623C118.247 116.047 119.256 113.649 119.869 112.037C120.442 110.528 121.436 107.15 122.127 105.993C122.468 105.424 125.26 102.753 125.93 102.087C130.03 98.0048 134.29 94.0157 138.442 89.9961L145.911 82.6709C146.91 81.7017 148.062 80.2855 149.268 79.5908C149.664 79.3629 150.159 79.2815 150.595 79.4395C151.322 79.7052 157.466 86.1481 157.791 86.8613C157.92 87.1452 157.871 87.3857 157.749 87.667C157.307 88.6885 156.126 89.5857 155.335 90.3584C153.383 92.2921 151.393 94.1881 149.368 96.0459C147.907 97.4058 145.848 98.9978 144.74 100.619C144.721 100.648 144.699 100.676 144.681 100.705C144.583 100.857 144.668 110.336 144.696 111.281C149.78 109.687 153.351 109.07 158.397 111.47C158.563 108.728 158.458 105.956 158.49 103.213C158.557 97.8183 158.392 92.3484 158.427 86.9658L158.496 73.0879C158.497 71.0872 158.547 68.8445 158.436 66.8467C158.383 65.9179 157.526 64.4187 156.921 63.7334ZM123.153 108.172C122.437 110.255 121.189 113.383 120.877 115.48C122.514 115.32 123.867 114.876 125.417 114.326C126.476 113.965 127.531 113.589 128.58 113.199C127.356 111.952 124.592 108.985 123.153 108.172ZM143.906 87.5039C141.297 89.8378 139.127 92.099 136.641 94.4785C132.586 98.3595 128.45 102.18 124.562 106.237C125.365 106.918 126.342 108 127.092 108.775C128.169 109.881 129.262 110.974 130.368 112.052C133.265 108.937 135.93 106.531 138.887 103.609L146.01 96.6328C147.186 95.4791 148.329 94.2535 149.527 93.1318C148.866 92.4507 144.308 87.6475 143.906 87.5039ZM88.334 72.0234C87.2103 70.2441 85.3444 69.809 83.3369 69.9512C79.3941 70.3685 76.3854 71.448 76.3486 75.9277C76.3302 78.1695 76.3658 80.4386 76.3545 82.6777L76.33 103.462C76.3121 105.61 76.4594 109.536 76.2636 111.445C77.676 110.076 78.5493 109.476 80.5234 109.026C83.4416 108.394 85.8761 108.818 88.4189 110.321C88.5297 107.379 88.4825 104.196 88.4814 101.237L88.4658 88.1514C88.4381 82.9497 88.6232 77.1493 88.334 72.0234ZM149.935 81.7402C148.234 82.9804 147.138 84.3205 145.648 85.7207C146.326 86.489 150.612 91.3429 151.301 91.6123C152.725 90.2925 154.17 88.7615 155.536 87.3604C154.746 86.5779 150.469 81.8501 149.935 81.7402Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3184 69.2881C36.9705 69.2402 43.6095 68.8778 44.6954 69.5811C45.2444 69.9367 45.7996 73.8317 45.9864 74.668C47.1225 74.9859 48.1835 75.3191 49.2403 75.8545C50.2107 75.1825 53.6493 72.5986 54.4561 73.3174C55.6074 74.3432 60.8901 78.9809 61.2393 80.1124C61.0498 81.0381 59.1246 83.5285 58.459 84.5469C58.9352 85.3009 59.6044 87.0929 59.9151 87.9434C61.583 88.4207 65.8121 88.4526 65.7647 90.5167C65.6955 93.49 66.117 96.8943 65.5411 99.7872C65.4332 100.322 60.7956 101.17 60.17 101.304C59.6322 102.476 59.1211 103.66 58.6377 104.856C61.5661 109.698 63.0794 108.433 58.2676 112.872C53.8127 116.982 54.852 117.962 49.294 114.028C48.3165 114.523 47.0835 114.939 46.0508 115.295C45.5413 117.003 45.3972 118.569 44.8702 120.221C44.7314 120.655 44.4404 120.807 44.0391 120.963C42.499 120.965 35.4728 121.172 34.5098 120.831C33.7313 120.223 33.1639 116.519 32.9327 115.407C31.934 115.148 30.6919 114.655 29.6553 114.326C28.5708 114.84 25.4499 116.886 24.7383 116.587C23.6369 116.122 17.8048 110.486 17.3584 109.79C17.9596 108.128 19.2305 106.509 20.2706 105.059C19.7549 104.065 19.2814 102.81 18.9053 101.76C17.7486 101.515 14.14 101.021 13.4805 100.283C13.1138 99.1873 13.0846 90.8718 13.4444 90.0821C14.3671 89.2017 17.4486 88.7471 18.8057 88.4737C19.1393 87.4501 19.8642 85.8169 20.2881 84.7725C19.4523 83.8541 17.4761 81.3796 17.4073 80.1631C17.7651 79.3802 20.0129 77.544 20.751 76.8331C21.8161 75.807 23.3919 73.8932 24.6641 73.3604C25.877 73.3909 28.4764 75.2211 29.6163 75.9336C30.8206 75.4306 31.5656 75.1855 32.8184 74.8194C33.2144 73.2634 33.3616 71.0226 34.1026 69.7442C34.3327 69.3474 34.8911 69.3229 35.3184 69.2881ZM43.1329 71.4278C40.6653 71.3914 38.1971 71.391 35.7295 71.4278C35.5429 72.9946 35.0522 74.8345 34.6202 76.3575C33.1334 76.9508 30.9874 77.8987 29.5362 78.377C28.1959 77.7567 26.2522 76.6325 25.0284 75.7725C23.0719 77.3026 21.7289 78.939 19.9229 80.5352C20.8969 81.8243 21.9691 83.4074 22.7491 84.8272C21.7778 86.6887 21.0938 88.1808 20.2549 90.1202C19.1628 90.5303 16.5766 91.2375 15.4053 91.4112C15.3635 93.8445 15.3528 96.2784 15.3731 98.712C16.6848 98.9657 19.3867 99.3969 20.5176 99.8975C21.2048 101.611 21.84 103.587 22.6485 105.212C21.8501 106.635 20.8939 107.939 20.0694 109.35C21.7737 110.926 23.5013 112.781 25.1895 114.433C26.4759 113.563 28.2187 112.34 29.6387 111.797C31.4116 112.622 33.0557 113.346 34.9483 113.84C35.2099 115.2 35.6999 117.467 35.836 118.775C38.2425 118.754 40.6495 118.718 43.0557 118.669C43.4742 117.447 43.7394 115.106 44 113.761C45.9781 113.12 47.7723 112.322 49.6006 111.721C51.0209 112.527 52.4225 113.367 53.8038 114.239C55.6555 112.558 57.1005 110.916 58.8321 109.189C58.0317 108.029 56.8053 106.341 56.2051 105.123L56.2764 105.01C56.8838 104.039 57.3468 102.726 57.752 101.643C58.1389 100.61 58.0502 99.7391 59.3594 99.3809C60.7729 98.9937 62.1767 98.664 63.5762 98.2247C63.5518 95.8977 63.4814 93.3881 63.5372 91.0752C62.5355 90.881 59.3295 90.1323 58.4356 89.7999C57.6657 87.9056 56.9355 86.4364 56.0957 84.6114C56.8803 83.1851 57.7241 81.6662 58.7247 80.379C57.0069 78.5687 55.6828 77.2795 53.8028 75.627C52.5101 76.4151 50.704 77.5888 49.3936 78.2422C47.5699 77.5111 45.805 77.0219 44.1338 76.3643C43.8525 75.3601 43.2756 72.4842 43.1329 71.4278Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M38.0826 82.7314C44.7604 82.001 50.7669 86.8204 51.5006 93.498C52.2344 100.176 47.4172 106.184 40.7399 106.921C34.0583 107.659 28.0445 102.839 27.3102 96.1562C26.576 89.474 31.4001 83.4624 38.0826 82.7314ZM49.4156 93.9736C48.9111 88.44 44.0061 84.369 38.4742 84.8925C32.9696 85.4138 28.9236 90.2894 29.4254 95.7958C29.9275 101.303 34.789 105.366 40.2975 104.883C45.8328 104.397 49.9201 99.5071 49.4156 93.9736Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M95.0349 45.3555C98.7439 45.3942 102.454 45.4086 106.163 45.3994C107.43 45.3997 112.52 45.1816 113.194 45.8193C113.341 46.19 113.423 46.6378 113.42 47.0381C113.391 50.861 113.407 54.6818 113.403 58.5049C113.401 60.2044 113.508 62.0033 113.228 63.6699C113.131 64.2453 112.593 64.3384 112.102 64.3438C109.268 64.359 106.427 64.3558 103.594 64.3584L87.0838 64.3408C85.4451 64.3334 77.2467 64.4626 76.1238 64.1104C75.3501 63.1992 75.6391 57.391 75.6443 55.8477C72.4016 55.6925 68.8363 55.8213 65.5613 55.8252L47.7166 55.8184C44.9432 55.8212 40.4412 55.9922 37.8455 55.7725C37.8315 57.1634 38.05 63.0694 37.5642 63.8486C36.402 64.5714 31.8409 64.3417 30.2254 64.3428L19.0769 64.3467L7.66481 64.3545C6.6568 64.3539 0.200967 64.7605 0.144305 63.5059C-0.0516584 59.0662 0.122379 54.5224 0.0251645 50.0566C0.0036086 49.064 -0.0949372 46.3293 0.330829 45.6064L0.44411 45.5791C1.64666 45.2951 4.53196 45.3853 5.92556 45.3867L14.5672 45.4014L28.6365 45.3994C30.1665 45.3996 36.5717 45.1898 37.5799 45.8096C37.9902 46.6223 37.8385 52.2268 37.8367 53.5762L75.7371 53.5684C75.7407 52.2397 75.4645 46.2754 76.0925 45.6221C77.3997 45.2467 82.787 45.3955 84.4216 45.3994C87.9593 45.4043 91.4977 45.39 95.0349 45.3555ZM5.82399 47.292C4.76337 47.2912 3.10603 47.363 2.09352 47.2969C1.98738 51.8965 1.94433 57.8222 2.07399 62.3945C8.84623 62.4881 15.8145 62.365 22.6131 62.373L31.2654 62.3838C32.6094 62.3817 34.4591 62.4292 35.7683 62.3369L35.7595 47.3984L14.1228 47.2852L5.82399 47.292ZM111.383 47.4111C103.48 47.1506 95.2362 47.433 87.3113 47.332C84.1614 47.2919 80.9389 47.4229 77.7927 47.3008C77.5781 52.1903 77.8055 57.3953 77.7058 62.3369C84.3901 62.5063 91.4647 62.3576 98.1873 62.3682L106.357 62.3701C107.826 62.3704 109.888 62.4312 111.316 62.2979C111.525 57.6711 111.296 52.1714 111.383 47.4111Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M73.6228 0.0105882C74.3759 0.0145866 76.3067 -0.0813703 76.8211 0.448088C77.0447 1.26798 77.009 2.17602 77.0066 3.02231C76.993 7.82519 76.9235 12.6267 76.9715 17.4295C76.9749 17.7685 76.9019 18.1988 76.7498 18.5008C75.777 19.0055 71.1431 18.8389 69.7156 18.8368L59.0623 18.8397C58.887 21.7665 58.9592 27.0689 59.0613 30.0565L83.9842 30.0672L91.7957 30.0711C92.8016 30.071 95.7728 29.8664 96.4969 30.3651C96.7679 31.258 96.7368 41.0078 96.4734 42.5858C96.4364 42.8074 96.177 43.0135 95.9158 43.1209C94.4504 42.9092 94.9627 40.4086 94.9725 39.3123C95.0051 37.0765 94.9832 34.8402 94.907 32.6053C88.0983 32.7625 80.5851 32.6124 73.7293 32.6014L36.8562 32.6161C31.369 32.5978 24.9789 32.791 19.5887 32.5702C19.56 33.9973 19.7506 42.1007 19.4109 42.7625C19.2739 43.0295 19.0143 43.1839 18.7322 43.2664C18.4182 43.3582 18.0246 43.3365 17.7478 43.1493C17.5045 42.9845 17.4222 42.7611 17.3826 42.4813C17.1704 40.9821 17.3328 39.2746 17.3299 37.7538C17.3262 35.7721 17.1924 33.6927 17.3426 31.7186C17.3678 31.3861 17.4098 30.6798 17.6277 30.4198C17.874 30.1261 18.5556 30.0712 18.9197 30.0536C20.1226 29.9953 21.3595 30.0582 22.5662 30.0584L30.2234 30.0614C39.0782 30.0641 48.0578 30.1423 56.8973 30.0418C56.9415 26.3272 56.8567 22.5965 56.9041 18.8397C54.6936 18.7815 39.7849 19.0872 39.115 18.5321C38.9954 18.006 38.9267 17.4696 38.908 16.9305C38.8218 14.9939 38.6733 1.2603 39.0301 0.512541C39.1684 0.22292 39.4111 0.136076 39.699 0.0447679C50.9824 0.174813 62.3345 -0.049976 73.6228 0.0105882ZM74.91 1.82895C70.9451 1.6992 66.7563 1.76027 62.7654 1.75864L41.2527 1.75571L41.2459 16.9803L63.6307 17.033C67.3229 17.0302 71.1956 17.0847 74.8738 17.0047L74.91 1.82895Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">Process Management & Digital Blueprints</p>
                <p>Standardize your "winning formula" with Zoho Blueprints. We design mandatory digital workflows that require specific actions at each stage of a deal. This ensures team accountability, data integrity, and a consistent customer experience across your entire sales organization.</p>
              </div>
            </li>
            <li>
              <div className="left">
                <svg xmlns="http://www.w3.org/2000/svg" width="203" height="118" viewBox="0 0 203 118" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M98.8411 11.9062C112.108 11.9687 126.076 16.1202 133.647 27.833C141.236 39.5763 134.616 52.9365 123.548 59.4668C112.793 65.8123 98.5234 67.5007 86.4105 64.6543C84.3885 64.1275 80.2503 63.0524 78.6712 61.8389C77.4694 62.3734 76.261 62.8932 75.0462 63.3975C72.4303 64.4795 61.2538 68.5608 59.0325 67.5215C58.729 67.3794 58.4566 67.1312 58.3567 66.8037C58.2283 66.3822 58.329 65.9807 58.4915 65.5869C59.2949 63.6401 60.6208 61.8204 61.6731 59.9951C63.0283 57.6444 64.2452 55.1967 65.5013 52.791C55.6662 39.9963 60.4568 26.5023 73.2142 18.4824C81.515 13.264 89.2737 12.1335 98.8411 11.9062ZM107.502 14.9229C104.633 14.4061 98.5741 13.8148 95.7064 14.1221C81.1334 15.1646 62.7601 22.8043 62.7884 39.8906C62.7956 44.1064 65.847 49.5224 68.5335 52.584C66.877 56.2356 64.0911 61.5194 61.8665 64.8652C66.0794 63.8446 69.8167 62.9034 73.7757 61.0625C75.2799 60.363 76.8414 59.2889 78.2669 58.6777C81.112 60.6907 86.2663 62.0816 89.6731 62.7119C101.228 64.8521 113.617 63.0308 123.515 56.4033C133.263 49.8758 138.007 38.5332 130.748 28.1914C125.494 20.704 116.281 16.5714 107.502 14.9229Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M171.915 67.707C161.846 67.7626 151.246 71.4628 145.5 81.9014C139.74 92.3672 144.764 104.274 153.164 110.094C161.327 115.749 172.156 117.253 181.349 114.717C182.883 114.247 186.024 113.29 187.223 112.208C188.135 112.684 189.052 113.147 189.974 113.597C191.959 114.561 200.441 118.199 202.127 117.272C202.358 117.146 202.565 116.924 202.641 116.632C202.738 116.256 202.662 115.899 202.538 115.548C201.929 113.813 200.922 112.191 200.123 110.564C199.095 108.47 198.171 106.288 197.218 104.145C204.682 92.7418 201.047 80.7148 191.365 73.5674C185.065 68.9168 179.176 67.9096 171.915 67.707ZM165.341 70.3965C167.518 69.9359 172.117 69.4088 174.293 69.6826C185.353 70.6116 199.298 77.4209 199.277 92.6484C199.271 96.4056 196.955 101.232 194.916 103.961C196.173 107.215 198.288 111.924 199.976 114.906C196.779 113.997 193.942 113.158 190.938 111.518C189.796 110.894 188.611 109.936 187.529 109.392C185.369 111.185 181.458 112.426 178.872 112.987C170.103 114.895 160.7 113.272 153.188 107.365C145.79 101.548 142.19 91.4393 147.698 82.2227C151.686 75.5495 158.679 71.8657 165.341 70.3965Z" fill="#4E9C5A"/>
                  <path d="M83.0487 36.0684C84.0612 35.9284 85.0845 36.235 85.853 36.9089C86.6216 37.5827 87.0593 38.5572 87.0529 39.5793C87.0419 41.2983 85.7916 42.7584 84.0948 43.0334C82.843 43.2363 81.579 42.7508 80.7851 41.762C79.9911 40.7733 79.79 39.4342 80.2585 38.2558C80.7269 37.0776 81.7926 36.2421 83.0487 36.0684Z" fill="#4E9C5A"/>
                  <path d="M98.1898 36.0971C100.1 35.7126 101.958 36.9565 102.331 38.8692C102.703 40.7819 101.447 42.6321 99.5321 42.9921C98.4894 43.1882 97.414 42.9022 96.6055 42.2143C95.7983 41.5265 95.3443 40.5102 95.3718 39.4494C95.4136 37.8116 96.5833 36.4205 98.1898 36.0971Z" fill="#4E9C5A"/>
                  <path d="M113.764 36.0887C115.653 35.8166 117.41 37.1161 117.703 39.0029C117.996 40.8899 116.716 42.6613 114.833 42.9753C113.596 43.1816 112.343 42.7071 111.553 41.733C110.764 40.7589 110.557 39.4354 111.015 38.2675C111.472 37.0996 112.522 36.2676 113.764 36.0887Z" fill="#4E9C5A"/>
                  <path d="M27.7706 99.4309C31.4364 99.2962 35.5041 99.3786 39.199 99.3773C40.2173 100.339 40.5148 101.812 38.8538 102.178C35.5783 102.356 32.2087 102.102 28.9586 102.219C26.3393 102.313 25.9201 100.204 27.7706 99.4309Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.40221 0.105897C8.86252 -0.0881211 13.1928 0.042252 14.8739 0.0502325L30.2108 0.0971075L50.8964 0.0726935C53.8091 0.0720393 56.8557 0.0111125 59.7674 0.0668341C60.8752 0.174898 61.9317 0.745113 62.8348 1.35883C65.6229 3.25361 66.5532 6.51008 66.4423 9.74164C66.3614 12.0992 66.4263 14.5523 66.4501 16.9243C66.4582 17.7342 66.5168 19.2443 65.9471 19.9106C65.1666 20.8238 63.9393 19.781 63.8758 18.8373C63.7644 17.8308 63.7943 16.5083 63.7489 15.3891L2.91686 15.3871C2.69211 27.4108 2.91628 40.0348 2.90124 52.1049L2.89538 76.5541C2.88779 81.5769 2.80019 86.7831 2.89831 91.7895C7.79467 91.8863 12.91 91.8087 17.8299 91.8139L43.534 91.8286C50.2446 91.8011 57.0239 91.8889 63.7176 91.7973C63.7625 89.1935 63.4382 73.524 64.0272 72.4389C64.1846 72.1494 64.4704 71.9526 64.7909 71.8813C65.113 71.8097 65.5165 71.8613 65.7928 72.0502C66.1373 72.2858 66.2379 72.5545 66.3163 72.9526C66.6698 74.7454 66.3841 78.4647 66.3973 80.5121L66.412 92.1713C66.4915 99.8548 67.9354 110.152 56.8192 110.36C54.614 110.402 52.395 110.377 50.1854 110.368L36.9628 110.35H19.3729C15.8412 110.366 12.2871 110.456 8.80554 110.293C2.12089 109.981 -0.176158 104.885 0.0135428 98.8627C0.094905 96.2776 0.0427181 93.3067 0.0408866 90.6928L0.0194022 65.8295L0.0203788 27.685L0.0194022 15.3608C0.0205796 9.14952 -0.756271 1.46188 7.40221 0.105897ZM24.3456 94.5395C17.3333 94.5369 9.87637 94.3837 2.92663 94.5551C2.72149 102.424 1.59021 107.94 11.62 108.027L42.4178 108.028L52.5135 108.035C55.6981 108.031 59.247 108.546 61.7079 106.192C64.6853 102.768 63.6503 99.0562 63.6522 94.5453L24.3456 94.5395ZM18.1893 2.15082C14.9104 2.14559 11.154 1.88045 7.953 2.26312C3.68916 2.77298 2.79449 6.91743 2.86315 10.4174L2.91393 12.7885L28.0614 12.8559L48.4882 12.8207C53.4315 12.8255 58.7563 12.9336 63.66 12.7836C63.7223 9.84914 64.0874 6.33449 61.9247 4.06488C60.5528 2.6252 58.573 2.0824 56.6434 2.10785C50.739 2.18608 44.7967 2.0735 38.9012 2.09613L18.1893 2.15082Z" fill="#4E9C5A"/>
                  <path d="M27.3638 6.26172L37.3985 6.28644C38.071 6.2888 39.4691 6.20755 39.9288 6.77338C40.5104 7.48901 39.9685 8.23709 39.3761 8.7082C36.1198 8.78892 32.8402 8.69708 29.5829 8.74967C28.7847 8.76249 27.28 8.9692 26.8306 8.23277C26.2904 7.34772 26.5408 6.77155 27.3638 6.26172Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M97.0014 68.1179C97.2957 68.1231 97.5771 68.2457 97.7798 68.4588C98.515 69.2283 98.4027 72.0512 98.4341 73.1492C102.852 73.2413 107.782 72.8777 112.154 73.4617C113.654 73.6622 115.556 74.8015 116.662 75.8601C119.828 78.8947 119.777 82.2887 119.758 86.3172C119.74 88.1713 119.747 90.0256 119.776 91.8797C123.627 91.8862 128.515 91.7544 132.256 91.948C133.907 88.0759 138.118 86.9252 141.203 90.3006C141.756 90.9062 142.045 91.862 142.916 92.0857C143.02 92.0399 143.123 91.9954 143.228 91.9509L143.272 94.8806C143.234 94.8026 143.191 94.7443 143.145 94.7097C141.846 94.7324 140.422 97.0743 139.145 97.616C136.256 98.8431 133.589 97.1808 132.197 94.6912C128.213 94.7854 123.898 94.6454 119.85 94.6834C119.675 100.75 121.158 107.979 116.642 112.705C114.472 114.975 111.863 115.432 108.866 115.442C103.223 115.462 97.5935 115.436 91.9536 115.43C86.9525 115.323 81.4382 116.487 77.6089 112.554C74.344 109.201 74.7132 105.663 74.6743 101.434L74.6108 94.7136C73.5989 94.7058 69.7776 94.5905 71.5356 92.2322C72.0764 91.5061 73.7109 91.6142 74.6157 91.6443C75.6356 86.3139 73.4952 80.3376 77.6577 76.2459C81.0486 72.9128 84.8431 73.2224 89.1177 73.2742C91.2488 73.3075 93.3801 73.3233 95.5112 73.3211L95.5825 70.1423C95.6845 69.1513 95.6749 68.085 97.0014 68.1179ZM113.631 77.0476C111.395 75.5733 109.566 75.5733 107.009 75.6433C99.5732 75.8467 92.0479 75.4711 84.6196 75.7185C82.7359 76.0269 81.3173 76.572 79.8325 77.8484C77.7509 79.638 77.3807 81.8662 77.3716 84.5125C77.3621 87.2228 77.3718 89.9602 77.3628 92.6795L77.3432 101.178C77.3419 105.971 77.0617 111.832 83.7925 112.745C86.9698 113.175 90.4978 112.649 93.7055 112.859C99.1179 112.781 104.747 112.972 110.13 112.823C115.221 112.063 116.826 109.228 116.751 104.334C116.716 101.949 116.77 99.4091 116.787 97.0164C116.809 93.9918 116.813 90.9675 116.797 87.9431C116.814 83.9322 117.503 79.6011 113.631 77.0476ZM139.278 91.6033C138.717 90.8261 137.779 90.4136 136.827 90.5232C135.39 90.6886 134.352 91.9742 134.491 93.4119C134.631 94.8509 135.896 95.9134 137.337 95.7996C138.292 95.725 139.134 95.1401 139.537 94.2703C139.938 93.4003 139.84 92.3791 139.278 91.6033Z" fill="#4E9C5A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M172.299 72.4344C178.646 72.0963 180.276 76.4582 180.888 81.8573C182.151 81.8412 185.442 81.4038 185.758 83.0614C186.176 85.2386 186.306 87.5945 186.534 89.8182C186.915 93.2658 187.241 96.7198 187.511 100.178C187.619 101.606 188.072 104.96 187.436 106.102C186.323 106.629 176.001 106.433 174.178 106.434C172.034 106.424 159.463 106.688 158.825 106.149C158.435 105.82 158.244 105.403 158.217 104.895C158.115 102.903 158.569 100.436 158.749 98.4149C159.01 95.1288 159.331 91.8465 159.709 88.5721C159.794 87.79 160.188 82.8699 160.771 82.4198C161.514 81.8466 164.291 81.9396 165.428 81.9237C165.512 79.9418 165.576 77.9423 166.716 76.2469C168.18 74.0711 169.806 72.9936 172.299 72.4344ZM168.318 84.3026C168.349 85.445 168.551 88.3871 166.773 88.4061C165.173 87.8611 165.36 85.7407 165.444 84.4374L162.702 84.4471C162.414 90.5545 161.021 97.7184 160.81 103.893C166.687 103.96 172.565 103.846 178.44 103.886C180.527 103.89 183.185 103.809 185.218 103.887C185.078 97.4211 183.611 90.8143 183.467 84.4305L180.612 84.4598C180.853 85.6324 181.192 86.8342 180.472 87.9188C179.677 89.1162 178.501 87.8376 177.969 87.1581C178.108 86.376 178.354 85.2016 178.421 84.4403C175.054 84.3295 171.687 84.2835 168.318 84.3026ZM172.772 75.0575C168.827 75.8545 168.16 78.5171 168.368 82.0907C170.245 82.1541 172.122 82.1683 174 82.1317L178.29 82.0663C178.01 79.799 177.726 77.5601 175.782 76.0194C174.931 75.3388 173.859 74.9961 172.772 75.0575Z" fill="#4E9C5A"/>
                </svg>
              </div>
              <div className="right">
                <span className="line-fill"></span>
                <p className="title">Omnichannel & Third-Party App Sync</p>
                <p>Engage with customers via email, live chat, and telephony within a single unified timeline. We connect your CRM with popular third-party applications used across Dubai, including <span className="txt-med">WhatsApp Business, Microsoft 365, Google Workspace, and Zapier</span>, to centralize your business communications.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Child page strategic choice section ends */}

      {/* crm services section starts */}
      <section className="zoho-crm-wrapper">
        <div className="container">
          <h2>Our Specialized CRM Services</h2>
          <ul className="crm-list">
            <li>
              <div className="top">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26 22C24.142 22 22.59 23.28 22.142 25H9.858C9.6783 24.3128 9.31883 23.6858 8.81653 23.1835C8.31424 22.6812 7.68725 22.3217 7 22.142V19C7 17.898 7.897 17 9 17H23C25.206 17 27 15.206 27 13V9.858C28.72 9.411 30 7.858 30 6C30 3.794 28.206 2 26 2C23.794 2 22 3.794 22 6C22 7.858 23.28 9.41 25 9.858V13C25 14.103 24.103 15 23 15H9C6.794 15 5 16.794 5 19V22.142C3.28 22.589 2 24.142 2 26C2 28.206 3.794 30 6 30C7.858 30 9.41 28.72 9.858 27H22.142C22.589 28.72 24.142 30 26 30C28.206 30 30 28.206 30 26C30 23.794 28.206 22 26 22ZM24 6C24 4.898 24.897 4 26 4C27.103 4 28 4.898 28 6C28 7.102 27.103 8 26 8C24.897 8 24 7.103 24 6ZM6 28C4.897 28 4 27.103 4 26C4 24.897 4.897 24 6 24C7.103 24 8 24.898 8 26C8 27.102 7.103 28 6 28ZM26 28C24.897 28 24 27.103 24 26C24 24.897 24.897 24 26 24C27.103 24 28 24.898 28 26C28 27.102 27.103 28 26 28Z" fill="#5E5E5E"/>
                    <path d="M6 10C6.74 10 7.424 9.785 8.019 9.433L11.586 13L13 11.586L9.433 8.019C9.80046 7.40938 9.99637 6.71179 10 6C10 3.794 8.206 2 6 2C3.794 2 2 3.794 2 6C2 8.206 3.794 10 6 10ZM6 4C7.103 4 8 4.898 8 6C8 7.102 7.103 8 6 8C4.897 8 4 7.103 4 6C4 4.897 4.897 4 6 4Z" fill="#5E5E5E"/>
                  </svg>
                </span>
                <h3>CRM Consultation and Process Mapping</h3>
              </div>
              <div className="bottom">
                <p>We begin by deep-diving into your current sales cycles to identify bottlenecks and opportunities for automation. Our Dubai-based experts map your manual workflows into a digital strategy, ensuring the CRM architecture is built to support your specific business goals and regional KPIs from day one.</p>
              </div>
            </li>
            <li>
              <div className="top">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5.33333 14.6667H13.3333C13.687 14.6667 14.0261 14.5262 14.2761 14.2761C14.5262 14.0261 14.6667 13.687 14.6667 13.3333V5.33333C14.6667 4.97971 14.5262 4.64057 14.2761 4.39052C14.0261 4.14048 13.687 4 13.3333 4H5.33333C4.97971 4 4.64057 4.14048 4.39052 4.39052C4.14048 4.64057 4 4.97971 4 5.33333V13.3333C4 13.687 4.14048 14.0261 4.39052 14.2761C4.64057 14.5262 4.97971 14.6667 5.33333 14.6667ZM6.66667 6.66667H12V12H6.66667V6.66667ZM26.6667 4H18.6667C18.313 4 17.9739 4.14048 17.7239 4.39052C17.4738 4.64057 17.3333 4.97971 17.3333 5.33333V13.3333C17.3333 13.687 17.4738 14.0261 17.7239 14.2761C17.9739 14.5262 18.313 14.6667 18.6667 14.6667H26.6667C27.0203 14.6667 27.3594 14.5262 27.6095 14.2761C27.8595 14.0261 28 13.687 28 13.3333V5.33333C28 4.97971 27.8595 4.64057 27.6095 4.39052C27.3594 4.14048 27.0203 4 26.6667 4ZM25.3333 12H20V6.66667H25.3333V12ZM13.3333 28C13.687 28 14.0261 27.8595 14.2761 27.6095C14.5262 27.3594 14.6667 27.0203 14.6667 26.6667V18.6667C14.6667 18.313 14.5262 17.9739 14.2761 17.7239C14.0261 17.4738 13.687 17.3333 13.3333 17.3333H5.33333C4.97971 17.3333 4.64057 17.4738 4.39052 17.7239C4.14048 17.9739 4 18.313 4 18.6667V26.6667C4 27.0203 4.14048 27.3594 4.39052 27.6095C4.64057 27.8595 4.97971 28 5.33333 28H13.3333ZM6.66667 20H12V25.3333H6.66667V20ZM24 18.6667H21.3333V21.3333H18.6667V24H21.3333V26.6667H24V24H26.6667V21.3333H24V18.6667Z" fill="#5E5E5E"/>
                  </svg>
                </span>
                <h3>Bespoke Customization and Implementation</h3>
              </div>
              <div className="bottom">
                <p>We tailor the Zoho CRM interface to feel intuitive for your team by creating custom modules, specialized fields, and unique layouts. By configuring advanced workflow rules and validation checks, we ensure the system handles your data exactly the way your specific industry in the UAE requires.</p>
              </div>
            </li>
            <li>
              <div className="top">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <g clip-path="url(#clip0_2351_6231)">
                    <path d="M13.7467 0.820601C15.1926 0.234279 16.8101 0.234279 18.256 0.820601L30.2533 5.6846C30.7694 5.89413 31.2112 6.2528 31.5224 6.71476C31.8335 7.17671 31.9998 7.72097 32 8.27793V23.7233C32 24.2806 31.8336 24.8253 31.5222 25.2875C31.2108 25.7497 30.7685 26.1085 30.252 26.3179L18.2547 31.1819C16.8087 31.7683 15.1913 31.7683 13.7453 31.1819L1.748 26.3179C1.23149 26.1085 0.789218 25.7497 0.477814 25.2875C0.166409 24.8253 3.83912e-05 24.2806 0 23.7233L0 8.27793C3.83912e-05 7.72059 0.166409 7.17593 0.477814 6.71369C0.789218 6.25146 1.23149 5.89267 1.748 5.68327L13.7467 0.820601ZM17.3533 3.0446C16.4862 2.69324 15.5164 2.69324 14.6493 3.0446L2.64933 7.90727C2.57562 7.93724 2.51252 7.98852 2.4681 8.05455C2.42369 8.12058 2.39997 8.19836 2.4 8.27793V23.7233C2.39997 23.8028 2.42369 23.8806 2.4681 23.9467C2.51252 24.0127 2.57562 24.064 2.64933 24.0939L14.648 28.9579C15.5151 29.3093 16.4849 29.3093 17.352 28.9579L29.3507 24.0939C29.4244 24.064 29.4875 24.0127 29.5319 23.9467C29.5763 23.8806 29.6 23.8028 29.6 23.7233V8.27793C29.6 8.19836 29.5763 8.12058 29.5319 8.05455C29.4875 7.98852 29.4244 7.93724 29.3507 7.90727L17.3533 3.0446ZM8.02533 8.87793L16 11.9046L23.9733 8.87793C25.4693 8.3086 26.3227 10.5526 24.8267 11.1219L17.2 14.0153V22.8006C17.2 24.4006 14.8 24.4006 14.8 22.8006V14.0139L7.17333 11.1206C5.67733 10.5526 6.53067 8.3086 8.02667 8.8766" fill="#5E5E5E"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2351_6231">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                </span>
                <h3>System Integration and API Development</h3>
              </div>
              <div className="bottom">
                <p>Our technical team specializes in bridging the gap between Zoho CRM and your existing tech stack. Whether it is a native integration with Zoho Books for <span className="txt-med">FTA-compliant VAT invoicing</span> or a custom API connection to your corporate website, we ensure data flows seamlessly across all platforms.</p>
              </div>
            </li>
            <li>
              <div className="top">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M30 28.6L27.2 25.8C27.7 25 28 24 28 23C28 20.2 25.8 18 23 18C20.2 18 18 20.2 18 23C18 25.8 20.2 28 23 28C24 28 25 27.7 25.8 27.2L28.6 30L30 28.6ZM20 23C20 21.3 21.3 20 23 20C24.7 20 26 21.3 26 23C26 24.7 24.7 26 23 26C21.3 26 20 24.7 20 23ZM8 16H18V18H8V16ZM8 10H20V12H8V10Z" fill="#5E5E5E"/>
                    <path d="M14 27.7L8.8 24.9C5.8 23.4 4 20.3 4 17V4H24V15H26V4C26 2.9 25.1 2 24 2H4C2.9 2 2 2.9 2 4V17C2 21.1 4.2 24.8 7.8 26.7L14 30V27.7Z" fill="#5E5E5E"/>
                  </svg>
                </span>
                <h3>Data Migration and Quality Assurance</h3>
              </div>
              <div className="bottom">
                <p>Transitioning from Excel or a legacy CRM like Salesforce or HubSpot can be daunting. We handle the heavy lifting of cleaning, de-duplicating, and mapping your historical data. We perform rigorous testing to ensure every record is accurately placed and your system is production-ready.</p>
              </div>
            </li>
            <li className="w-100">
              <div className="top">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6674 2.66602C17.2447 2.66602 19.334 4.75533 19.334 7.33264C19.334 9.82408 17.3817 11.8595 14.9234 11.9924L14.6674 11.9993C12.09 11.9993 10.0007 9.91002 10.0007 7.33264C10.0007 4.84127 11.953 2.80577 14.4113 2.67289L14.6674 2.66602ZM5.33398 26.666H17.0709C16.5939 25.8418 16.2689 24.9385 16.1113 23.9993H8.00067V21.866L8.00761 21.6071C8.13617 19.2093 10.0398 17.3326 12.334 17.3326H17.0007L17.2449 17.3398C17.483 17.3537 17.7162 17.3878 17.9429 17.4405C18.6171 16.6594 19.4355 16.0154 20.3533 15.544C19.3577 14.9842 18.2153 14.666 17.0007 14.666H12.334L12.0455 14.672C8.3133 14.8276 5.33398 17.989 5.33398 21.866V26.666ZM12.6674 7.33264C12.6674 6.22808 13.5628 5.33264 14.6674 5.33264C15.7719 5.33264 16.6674 6.22808 16.6674 7.33264C16.6674 8.4372 15.7719 9.33264 14.6674 9.33264C13.5628 9.33264 12.6674 8.4372 12.6674 7.33264ZM20.0821 28.0595L24.0007 25.666L27.9192 28.0595L26.8539 23.593L30.341 20.6059L25.764 20.239L24.0007 15.9993L22.2373 20.239L17.6603 20.6059L21.1475 23.593L20.0821 28.0595Z" fill="#5E5E5E"/>
                  </svg>
                </span>
                <h3>Ongoing Support and Managed Services (AMC)</h3>
              </div>
              <div className="bottom">
                <p>Our relationship doesn't end at go-live; we provide continuous support to help your system evolve as your business scales. From troubleshooting user queries and performing data health checks to deploying the latest Zoho feature updates, we ensure your CRM remains a high-performing asset.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* crm services section ends */}

      {/* engagement model starts */}
      <section className="engagement-model-wrapp">
        <div className="container">
          <h2 className="txt-center slide-up">Our Proven Engagement Model</h2>
          <div className="eng-model-step">
            <ul>
              <li className="stagger-li">
                <div className="step-count">1</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="93" height="96" viewBox="0 0 93 96" fill="none">
                    <path d="M20.0775 62.8008C20.2673 62.8972 20.3309 62.8871 20.4053 63.1421C20.5889 63.772 20.1625 66.9697 19.9123 67.4176C19.6119 67.4513 17.7389 66.2338 17.3285 65.9953C17.3384 67.6219 17.2732 69.356 17.2695 71.0098C20.7727 71.1103 24.3052 70.9911 27.808 71.026C28.857 71.0365 32.5425 70.8565 33.2184 71.2456C33.2895 71.3791 33.3371 71.5175 33.3621 71.6669C33.4806 72.3728 33.4742 78.5269 33.2099 78.8367C33.0499 79.0233 32.4085 79.0479 32.1714 79.0635C31.0965 79.1318 29.9904 79.0767 28.9122 79.0767C26.8591 79.0603 24.8059 79.0948 22.7544 79.1794C22.9305 79.6692 23.3311 80.873 22.8724 81.2527C22.7318 81.2576 22.5813 81.2469 22.467 81.1598C21.5442 80.4613 20.9448 79.9223 19.9393 79.3068C19.7114 79.1827 19.4939 79.0405 19.289 78.8811C19.068 78.7061 18.981 78.5812 18.9467 78.3149C19.3761 77.7964 21.877 75.7354 22.6469 75.5588C22.8234 75.5185 22.8966 75.6138 23.0183 75.7124C23.3295 76.5818 22.651 77.0535 22.044 77.5178C24.8469 77.7602 29.0841 77.6362 31.9742 77.5901C31.9723 75.8636 31.946 74.1371 31.8951 72.4114C28.4706 72.3063 25.017 72.3991 21.5905 72.3638C20.6974 72.3547 16.4701 72.5396 15.9665 72.0827C15.5635 71.0682 15.868 68.6698 15.801 67.4884C15.7657 66.868 15.6458 65.6722 15.776 65.1342C16.0403 64.8931 19.6403 63.0092 20.0775 62.8008Z" fill="#1B1A1A"/>
                    <path d="M33.3302 62.6872C33.7279 62.6674 34.3798 62.598 34.7426 62.7671C35.169 62.9658 35.2276 63.5741 35.0087 63.9575C34.5351 64.2077 33.0314 64.1868 32.4094 64.2052C31.6828 64.2366 30.6483 64.42 30.3398 63.6248C30.407 62.4391 32.3934 62.7149 33.3302 62.6872Z" fill="#1B1A1A"/>
                    <path d="M34.7705 53.2793C35.5523 53.7988 40.6555 59.1054 41.0518 59.7422C41.0609 59.8471 41.0674 59.9525 41.0723 60.0576C41.13 61.6604 41.0867 63.5642 41.0889 65.1846L41.0771 75.667L41.083 81.2852C41.0854 82.4083 41.0997 83.5076 41.0312 84.6299C40.9885 85.3308 40.4362 86.1526 39.71 86.2471C37.9174 86.4796 35.9987 86.4033 34.1855 86.3926C31.353 86.3696 28.52 86.3705 25.6875 86.3936L15.708 86.4023C14.0928 86.4032 12.4088 86.431 10.7959 86.376C10.3836 86.3619 9.61166 86.1864 9.29688 85.8906C8.72691 85.354 8.72861 84.8595 8.70215 84.124C8.61908 81.8217 8.68084 79.5226 8.67871 77.2227L8.64453 66.0156L8.65039 58.3877C8.66288 57.2097 8.66621 55.9741 8.74023 54.8037C8.84164 53.2003 11.2236 53.3715 12.3418 53.3594C16.2981 53.3162 20.274 53.4271 24.2275 53.3281C24.695 53.2756 25.162 53.3155 25.6309 53.3223C28.662 53.3654 31.7436 53.4053 34.7705 53.2793ZM11.6133 54.7998C10.4717 54.8664 10.0928 54.7565 10.0957 56.0703C10.0995 57.7764 10.1152 59.486 10.1123 61.1924L10.1006 72.8184L10.1025 79.9482C10.102 81.1463 10.0791 82.4605 10.124 83.666C10.1567 84.5443 10.3092 84.8646 11.3115 84.8926C13.1327 84.9435 14.9845 84.9221 16.8193 84.918C20.0865 84.8966 23.3539 84.8952 26.6211 84.9141L34.4492 84.9277C35.3668 84.9286 38.9137 85.0693 39.4346 84.6182C39.6781 83.8315 39.5663 78.7732 39.5615 77.5449L39.5469 68.3525L39.5322 61.1016C37.8938 61.0833 36.2131 61.1461 34.585 61.0967C33.2043 61.0545 33.5171 59.0126 33.5303 58.0215C33.5474 56.9697 33.5463 55.917 33.5273 54.8652C31.0963 54.8361 28.0526 54.7842 25.6562 54.8594C25.6055 57.2806 25.5862 59.7023 25.5986 62.124C25.5972 63.2609 25.6352 65.2651 25.5186 66.3584C26.1899 66.3739 27.8215 66.2488 27.7295 67.2236C27.6324 68.2482 24.2341 67.6769 23.4824 67.8232C22.9648 67.9237 21.6027 67.7197 21.6494 67.002C22.1415 66.1788 23.5442 66.4272 24.46 66.3564C24.2729 65.5183 24.3245 64.4703 24.3086 63.6045C24.2554 60.6964 24.3086 57.7726 24.2285 54.8662C20.024 54.7829 15.8185 54.7612 11.6133 54.7998ZM35.1914 56.0352C35.1587 57.1236 35.0883 58.4347 35.1152 59.5107C36.0532 59.4949 37.6453 59.431 38.5225 59.4932C38.527 59.1386 36.3104 57.1909 35.9766 56.7705C35.8849 56.6549 35.3074 56.0946 35.1914 56.0352Z" fill="#1B1A1A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M59.8291 48.3846C64.2829 47.9652 68.7296 49.2482 72.2754 51.9755C74.2885 53.5527 76.2517 55.8233 77.375 58.1366C82.1417 67.9534 76.661 79.5607 65.4433 80.8632C60.5503 81.472 56.2231 80.0702 52.4531 76.9452C48.9125 74.0395 46.6874 69.8326 46.2773 65.2704C45.5747 57.6818 49.91 51.0494 57.2402 48.8778C58.1567 48.6064 58.8779 48.4702 59.8291 48.3846ZM71.8838 53.6844C69.2706 51.5017 64.6681 49.4737 61.1992 49.8651C47.027 50.851 43.18 67.0517 53.4384 75.7284C56.1438 78.0169 60.5394 79.8186 64.1299 79.4637C77.9566 78.3708 82.1441 62.2559 71.8838 53.6844Z" fill="#1B1A1A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0879 52.1644C65.0272 51.9133 67.7686 53.074 70.7178 55.5336C78.9082 62.3647 75.4785 76.4959 64.3536 77.2084C64.2649 77.2182 64.1754 77.2249 64.086 77.2299C60.5156 77.4534 57.445 76.174 54.7354 73.9125C48.2297 68.4817 48.311 57.9621 55.8965 53.5609C57.6496 52.5438 59.0868 52.279 61.0879 52.1644ZM61.3614 53.6449C51.1638 54.3783 48.2791 66.3852 55.6202 72.6439C58.0938 74.7525 60.8259 75.8355 64.1026 75.7074C70.5705 74.8816 74.3946 70.2185 73.5977 63.6224C72.9239 58.0401 66.9149 53.3205 61.3614 53.6449Z" fill="#1B1A1A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.884 9.16422C33.7072 9.05345 37.4161 10.4756 40.1858 13.1134C46.1446 18.8447 45.3014 27.7518 40.7942 33.9435C39.2913 36.0081 37.9512 37.5934 37.4993 40.1867C37.1314 42.2984 37.7775 45.6295 37.3186 47.5597C37.1676 48.1836 36.8517 48.7554 36.4045 49.216C35.2165 50.4188 32.5618 50.0842 30.842 50.0744C30.2459 50.0748 28.9504 50.0471 28.469 50.0763C23.9277 50.4749 22.569 48.9532 22.9914 44.4513C23.5172 38.8486 22.0646 37.498 18.9846 33.2404C12.1124 23.7408 16.7567 10.2259 29.3381 9.18864C29.5198 9.17518 29.7019 9.1671 29.884 9.16422ZM35.8889 42.4435C33.6196 42.3086 30.1434 42.2967 27.8606 42.3937C26.7603 42.4245 25.6595 42.4393 24.5588 42.4367C24.5765 43.3498 24.5808 44.3008 24.6145 45.2101C25.6522 45.2261 26.6905 45.2163 27.7278 45.1818C28.38 45.1609 29.0425 45.1331 29.6946 45.1271C30.2736 45.1218 30.6998 46.0413 30.1623 46.4425C29.0364 47.2827 25.3708 46.2496 24.6223 47.1769C24.4721 48.2655 25.8544 48.5157 26.6516 48.505C28.1904 48.487 29.7299 48.4804 31.2688 48.4865C32.3081 48.4925 33.4419 48.5837 34.47 48.4191C34.813 48.3642 35.2154 48.2589 35.4631 48.0021C35.8094 47.6428 35.84 43.252 35.8889 42.4435ZM31.8284 10.8312C31.2758 10.7663 30.3345 10.715 29.7795 10.7492C26.0986 10.9899 23.349 12.0818 20.7121 14.838C15.8862 19.8828 16.6324 27.1877 20.4612 32.5763C22.4231 35.3375 24.1417 37.208 24.6077 40.7716C25.6239 40.7112 26.6679 40.7171 27.6877 40.7101C27.7371 38.1901 27.7889 34.1664 26.8069 31.9181C26.2597 30.6655 25.3007 29.1793 24.9133 27.9201C25.3809 27.0715 26.3144 25.8628 27.4084 26.1017C28.141 26.2617 27.963 26.2573 28.6672 26.0988L28.7532 26.0793C29.2917 26.3589 29.6695 26.5839 30.262 26.7355L30.3625 26.7619C31.8211 26.012 31.6507 26.2721 33.0969 25.8937C34.0626 26.2131 35.7982 27.2682 35.2287 28.5002C34.6814 29.6832 34.001 30.7941 33.5364 32.0158C32.7195 34.1484 32.6378 38.3733 32.6995 40.7043L35.8782 40.7326C36.3771 36.5686 38.4813 34.9463 40.6047 31.3625C43.6605 26.2048 44.0584 20.406 40.2209 15.5187C38.1419 12.9212 35.1303 11.2392 31.8284 10.8312ZM27.5461 27.4845C27.192 27.7358 26.9606 27.8917 26.6526 28.1955C27.155 29.1354 27.9192 30.5303 28.2424 31.5109C29.1473 34.2565 28.901 37.7504 29.1106 40.7111L31.2219 40.7238L31.3762 38.4298C31.4558 36.7388 31.5352 35.0509 31.7698 33.3771C32.0242 31.5611 32.8722 30.0472 33.5393 28.3771C33.624 28.1653 33.6161 28.1011 33.552 27.8966C32.9539 27.5613 30.9721 27.9841 30.3577 28.383C29.3845 27.9356 28.347 27.9693 27.5461 27.4845Z" fill="#1B1A1A"/>
                    <path d="M2.51279 29.3033C3.71658 29.2388 13.3969 29.174 13.8859 29.3366C14.1525 29.4254 14.3012 29.6545 14.4098 29.8968C14.3804 31.1432 11.4406 30.7735 10.5529 30.7676L5.21332 30.7533C3.74082 30.7518 1.57328 30.4208 1.56482 32.5259C1.53934 38.835 1.528 45.1425 1.53795 51.4517L1.54312 75.7195L1.5511 84.6306C1.54592 86.0662 1.49456 87.8346 1.62768 89.2727C1.6493 89.506 2.04308 89.9909 2.26027 90.1067C2.52816 90.2505 2.80065 90.276 3.11226 90.276C7.10377 90.2727 11.1057 90.2678 15.0965 90.2637L37.9073 90.2703L49.9226 90.2645C51.5085 90.2637 56.5671 90.4067 57.8246 90.0295C58.0444 89.6991 58.0742 89.6194 58.2099 89.2554C58.4118 87.4845 58.0543 85.0357 58.3424 83.4398C58.3854 83.2015 58.4631 83.0101 58.6859 82.8893C58.9284 82.7578 59.327 82.7816 59.5733 82.8901C59.775 82.9797 59.8948 83.1481 59.9648 83.3519C60.0773 83.6814 60.0729 88.9218 60.0153 89.626C59.9842 90.0057 59.9104 90.3697 59.7435 90.7148C59.385 91.4552 58.7076 92.0239 57.9335 92.2885C56.7462 92.6944 48.0782 92.4685 46.2593 92.466L25.4193 92.4643L10.8156 92.4676C8.27099 92.4701 5.71534 92.4808 3.17127 92.4619C2.51723 92.457 2.24121 92.3682 1.68397 92.1447C1.1961 91.9614 0.244095 90.9803 0.185586 90.4576C-0.108437 87.8297 0.0346303 84.7103 0.0359451 82.0692L0.0435048 64.4112L0.0574745 46.1491C0.0331506 41.6085 0.0147434 37.0673 0.0366021 32.5268C0.0453127 30.7172 0.827952 29.8241 2.51279 29.3033Z" fill="#1B1A1A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M78.2901 76.0314C78.5242 76.0011 78.7929 76.0216 78.9727 76.176C80.705 77.665 82.4714 79.7281 84.0401 81.3527L89.3028 86.7766C90.1038 87.6039 90.9354 88.4014 91.711 89.2697C92.8991 90.5137 92.7683 91.3442 91.4053 92.3713C90.199 93.2818 88.7867 95.261 87.2139 95.3967L87.129 95.383C86.9286 95.3493 86.6538 95.2959 86.5059 95.1516C84.0546 92.7545 81.7237 90.2299 79.3389 87.7687L75.2295 83.5461C74.665 82.9684 72.8085 81.427 72.9424 80.6027C73.1282 79.4577 73.9358 79.7917 74.4756 79.4895C75.7444 78.7795 77.1429 76.7004 78.2901 76.0314ZM78.5079 78.0764C77.3723 79.0805 76.1604 80.1194 75.0528 81.1457C76.6658 82.5928 78.17 84.3427 79.6836 85.9064C81.7322 88.024 83.7888 90.1312 85.8028 92.2824C86.1996 92.7064 86.8793 93.4091 87.4356 93.5432C88.6123 93.014 89.8951 91.665 90.8409 90.7463C89.6433 89.3901 79.0338 78.2769 78.5079 78.0764Z" fill="#1B1A1A"/>
                    <path d="M46.282 29.3118C49.9174 29.3992 53.6573 29.1199 57.2861 29.336C60.2963 29.5152 59.8942 32.6939 59.8873 34.7525L59.8688 40.159C59.8647 41.839 59.8897 43.8709 59.8194 45.5747C59.8089 45.8275 59.4533 46.0381 59.2408 46.1802C59.0023 46.0927 58.5638 45.9292 58.4832 45.6864C58.2596 45.0127 58.3433 43.7153 58.3456 42.9843L58.3656 35.9001C58.3778 30.4052 58.7946 30.7562 53.3217 30.751L46.2914 30.7606C45.9715 30.461 45.6716 30.2101 45.7745 29.7482C45.9253 29.4984 46.0322 29.4569 46.282 29.3118Z" fill="#1B1A1A"/>
                    <path d="M6.34889 17.1035C6.371 17.106 6.39311 17.1084 6.41513 17.1109C7.66181 17.5496 8.95082 17.8696 10.2222 18.224C10.7339 18.3666 12.0422 18.6375 12.304 19.0626C12.3845 19.1926 12.4068 19.3504 12.3654 19.4975C12.2636 19.8598 12.0028 20.025 11.6991 20.1887C10.809 20.0115 5.99423 18.9092 5.64802 18.4148C5.56864 18.3015 5.53601 18.1168 5.56527 17.9812C5.64646 17.604 6.05824 17.3205 6.34889 17.1035Z" fill="#1B1A1A"/>
                    <path d="M53.4781 17.135C54.0327 17.117 54.5156 17.981 54.2535 18.4748C53.7363 18.8795 49.691 19.8163 48.721 20.0689C48.6107 20.0828 48.4878 20.088 48.3805 20.0537C48.1511 19.9802 47.8766 19.732 47.7928 19.505C47.7424 19.3682 47.7591 19.2476 47.8296 19.1211C48.2339 18.3959 52.4451 17.4457 53.4781 17.135Z" fill="#1B1A1A"/>
                    <path d="M14.7861 5.83789C15.1313 5.94488 18.6295 9.57695 18.8721 9.97682C18.9739 10.6162 18.6907 10.7579 18.1634 11.0002C17.1786 10.8161 14.4288 7.78594 13.8633 6.85629C14.1856 6.34614 14.3135 6.21088 14.7861 5.83789Z" fill="#1B1A1A"/>
                    <path d="M44.9087 5.84375C46.7143 6.50995 45.6923 7.47271 44.771 8.29652C43.8916 9.08286 43.0433 10.3902 42.0613 11.0149C41.7335 11.0104 41.4102 10.8992 41.1949 10.6394C41.0903 10.5106 41.041 10.3454 41.058 10.1802C41.0912 9.82909 41.5913 9.27909 41.8499 9.05262C42.8957 8.13669 43.8572 6.68753 44.9087 5.84375Z" fill="#1B1A1A"/>
                    <path d="M29.8861 0C30.8127 0.111594 30.8667 1.31596 30.7681 2.02217C30.5577 3.53141 31.3782 5.57757 30.058 6.5258C29.8289 6.39374 29.5567 6.23884 29.394 6.02601C29.0985 5.63945 29.1466 1.39148 29.2596 0.737771C29.3245 0.362558 29.5983 0.213245 29.8861 0Z" fill="#1B1A1A"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Step 1: Discovery & Planning</h5>
                  <p>We define your business goals, map existing sales processes, and finalize the project scope and technical requirements.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">2</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="86" viewBox="0 0 100 86" fill="none">
                    <path d="M73.1412 63.7266C73.3557 63.7642 73.6676 63.8551 73.8174 64.0148C74.7893 65.0505 75.7333 66.0788 76.7477 67.0769C79.416 69.6985 82.1186 72.2865 84.8532 74.8393C85.7227 75.6531 86.6864 76.7151 87.6705 77.3635C88.2518 77.7467 89.3866 77.3136 90.0817 77.1195L90.6319 78.1634C90.442 78.3836 90.2446 78.5523 90.0301 78.7455C88.8192 79.3686 87.2259 79.308 86.1919 78.3648C85.0669 77.3389 83.9927 76.2607 82.9014 75.1987L77.0007 69.479C75.8586 68.3647 73.6037 66.4538 72.6443 65.0734C72.5756 64.9743 72.5711 64.5609 72.5955 64.4209C72.6588 64.0549 72.8538 63.9173 73.1412 63.7266Z" fill="#1A1919"/>
                    <path d="M77.5924 59.0167C78.213 58.9771 78.7247 58.9591 79.225 59.4094C80.797 60.8269 82.2895 62.3298 83.832 63.7792L88.8337 68.4943C90.21 69.7871 91.8279 71.1503 92.9201 72.6715C93.5955 73.6123 93.5816 75.1359 92.532 75.8433C91.3096 75.732 91.642 74.5866 91.6682 73.6303C90.6497 72.2556 87.8717 69.887 86.4946 68.5361C84.0646 66.1732 81.5682 63.8701 79.1513 61.4961C78.2736 60.6343 75.7789 60.0791 77.5924 59.0167Z" fill="#1A1919"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M73.1809 18.9566C75.7468 13.028 82.3322 9.96861 88.5666 11.4878C89.3403 11.6932 90.833 11.8902 91.1662 12.7241C91.4102 13.3329 89.793 14.5096 89.3869 14.938C87.765 16.6471 85.0246 18.6678 83.8752 20.6782C84.4458 21.5978 88.8774 26.1665 89.7639 26.481C91.2073 26.4919 95.7108 20.6041 97.341 19.6353C97.5326 19.5216 97.8073 19.3914 98.0324 19.4663C98.3451 19.5708 98.5667 19.8281 98.719 20.1099C98.9122 20.4666 99.0097 20.8811 99.135 21.2652C99.9864 23.8771 100.095 26.8646 99.2912 29.5113C98.3112 32.7346 95.9275 35.5978 92.9514 37.1685C89.0624 39.2208 85.0221 39.1308 80.926 37.853C78.9029 39.6336 77.012 42.2202 75.1428 44.1919C74.3086 45.0715 73.5712 46.0587 72.5383 46.7154C72.1381 46.413 71.9486 46.2064 71.6008 45.8384C72.7036 44.366 74.2072 42.795 75.4231 41.4126C76.67 39.9956 77.9707 38.4255 79.3322 37.1333C78.3186 36.5834 76.1347 35.249 76.7766 33.8814C77.2358 33.5764 78.269 34.1678 78.6272 34.4673C84.7161 39.5361 94.5108 37.3412 97.4641 29.8745C98.729 26.6774 98.3478 24.7879 97.7698 21.5259C95.4241 23.4992 93.3522 25.9963 91.0393 27.9956C89.8988 28.9816 88.3768 27.9102 87.5344 26.938C86.0492 25.2242 83.4958 23.3746 82.2063 21.5142C82.167 20.6322 82.1332 19.9423 82.7053 19.2134C83.768 17.8599 85.1003 16.7321 86.3489 15.5552C87.2159 14.7386 88.0493 13.8473 88.9621 13.0874C85.7512 12.5843 83.4416 12.3258 80.4533 13.7564C74.5446 16.5848 71.9578 23.1199 74.5324 29.1753C74.8428 29.9049 75.6341 30.9494 75.3362 31.6958C74.7394 32.2487 74.0789 31.7316 73.5705 31.314C72.4602 31.9667 70.8151 33.5785 69.7795 34.5073C67.3586 36.7087 64.921 38.8917 62.467 41.0562C61.663 41.7754 60.8409 42.6791 60.0334 43.3335C60.2508 43.5159 60.7411 44.0036 60.9211 44.2271C62.5102 46.1989 64.7035 47.3935 66.5227 49.0034C69.7646 45.7422 71.365 48.6609 73.8108 50.8687C74.0629 51.3462 74.0831 51.6554 74.133 52.1948C74.0389 52.6104 73.9202 52.7407 73.6721 53.0855C77.4551 56.519 78.864 53.1819 81.6418 55.4702C84.2993 57.6594 87.5154 60.8313 90.0862 63.2085L95.0315 67.8023C96.1105 68.7953 97.5664 69.9918 98.4367 71.1314C99.2268 72.1613 99.7385 73.377 99.9211 74.6616C100.428 78.3703 98.2552 80.4862 95.799 82.7876C93.4543 84.9841 91.2706 85.6124 88.0696 85.023C84.8749 84.4343 83.3131 82.0031 81.0715 79.8941C77.9341 76.9433 74.8625 73.7849 71.7199 70.8277C71.0187 70.1645 69.5558 68.796 69.1086 68.0337C66.9822 64.4116 69.7497 63.2838 66.0041 60.3784C65.8752 60.4619 65.7445 60.5429 65.6125 60.6216C65.1912 60.8711 64.6828 61.0939 64.1926 60.9566C63.1528 60.6648 60.726 57.8512 60.2658 56.9927C60.3509 55.5099 60.8219 54.944 61.7043 53.772C59.1045 51.342 56.6074 48.7366 54.0852 46.2232L44.2942 36.5786L40.2082 32.5122C39.4963 31.815 38.3052 30.6237 37.5227 30.1128C36.8074 30.0806 35.8404 30.0896 35.2278 29.6929C34.2657 28.9937 33.4583 27.8871 32.6379 27.0161C30.4922 24.7382 27.3162 23.6549 30.4729 20.438C31.626 19.2628 32.5077 17.7111 34.2541 17.313C36.2049 16.8685 37.2095 18.6124 38.4289 19.7456C41.3793 22.223 41.4309 22.5866 42.1438 26.2144C42.7312 26.8826 43.7332 27.7972 44.4094 28.4536L49.3664 33.1988C52.3059 36.0197 55.7146 39.5431 58.8127 42.1421C60.0935 41.2652 62.2595 39.1172 63.4533 38.0425C66.5398 35.264 69.9692 32.3442 72.8918 29.4195C71.658 26.1362 71.7956 22.1493 73.1809 18.9566ZM72.2854 54.1626C71.429 54.9877 70.5568 55.7785 69.6936 56.5952C68.8968 57.349 68.052 58.3822 67.1916 59.0337C69.8585 61.5595 69.8176 61.714 69.801 65.1988C69.7922 67.0491 72.7248 69.5328 74.0705 70.8198L82.0266 78.562C83.3341 79.8434 84.9384 81.613 86.4006 82.6675C88.1527 83.9316 91.2189 83.9964 93.1028 82.9165C95.0202 81.6041 97.9813 78.8755 98.426 76.5464C98.6921 75.148 98.2955 73.7565 97.4817 72.6021C96.4911 71.1966 81.4231 57.1146 79.843 56.2613C76.0989 56.4889 75.6137 57.1567 72.6067 54.4341C72.5257 54.3609 72.3791 54.2252 72.2854 54.1626ZM69.0608 49.0728C67.2352 50.387 63.0667 54.6226 61.9983 56.5327C62.5386 57.2281 63.829 58.8798 64.6858 59.0542C64.8991 58.9922 64.8971 59.0016 65.0656 58.8638C66.6025 57.5034 68.06 55.9997 69.5315 54.562C70.3493 53.7629 71.6236 52.6325 72.3362 51.8013C71.7274 51.0332 69.9885 49.2147 69.0608 49.0728ZM34.9016 18.9458C33.3586 19.781 31.8163 21.4038 30.8615 22.8628C31.6699 23.9465 32.8771 24.9645 33.8576 25.9302C34.5761 26.6377 35.5831 27.7732 36.3362 28.3716C39.1285 28.4264 39.2086 29.1392 41.1584 31.0982L45.5071 35.4693C50.328 40.2534 55.234 44.9836 60.008 49.8198C60.7295 50.5508 61.4151 51.3679 62.1721 52.0659L62.8977 52.7515C63.6996 51.8959 64.5163 51.0028 65.3479 50.1802C62.882 48.4736 58.8878 44.5997 56.6526 42.4527L46.5647 32.7446C44.734 30.9716 42.7445 29.294 41.0237 27.4175C40.3397 26.6718 40.3363 24.8779 39.9533 23.8989L39.9309 23.8413C39.5126 22.7719 36.9588 20.8878 36.1223 19.9195C35.9272 19.6936 35.1782 19.0118 34.9016 18.9458Z" fill="#1A1919"/>
                    <path d="M33.6984 0.0932132C35.3087 0.0505569 43.1947 -0.181884 44.152 0.301582C44.4234 0.438639 44.657 0.938317 44.7811 1.2049C45.2789 2.27516 45.5846 3.47592 45.995 4.58605C46.4178 5.72934 46.9477 6.83627 47.3357 7.99053C49.411 8.74337 51.0565 9.42783 53.0807 10.3143C54.6069 9.59215 56.2227 8.51486 57.6845 7.6501C58.6491 7.07952 59.4354 6.50346 60.507 6.13019C61.5474 6.60367 61.9195 7.12242 62.7487 7.89163C63.7073 8.76359 64.6535 9.64905 65.5871 10.5479C66.6566 11.5727 67.8142 12.554 68.8258 13.6326C69.0711 13.894 69.3606 14.2267 69.4839 14.568C69.7857 15.4037 67.4567 19.1123 66.9978 20.0032C66.5769 20.8203 66.214 21.6658 65.8328 22.5018C66.7941 24.0671 67.6747 26.5397 68.6162 28.094C69.1665 28.3683 69.7183 28.5037 69.6111 29.2154C69.3253 29.6615 68.9611 29.7464 68.4768 29.8825L68.4216 29.8693C67.8413 29.7249 67.7908 29.7174 67.2475 29.4223C67.0609 29.0548 66.8414 28.5569 66.695 28.173C65.9364 26.1834 64.8185 24.3689 63.9442 22.4421C64.4477 21.1977 65.3324 19.6102 65.9716 18.4002C66.491 17.417 67.1843 16.018 67.7614 15.0981C66.1007 13.2278 62.4122 9.73019 60.4726 8.14077C58.4883 8.88173 55.1911 11.4427 53.1784 12.1766C52.1481 11.7813 51.0591 11.2711 50.0022 10.8544C48.9413 10.436 46.9114 9.80216 46.0077 9.29995C45.4271 7.48243 43.9119 3.41542 43.0866 1.69721L43.0444 1.6936C41.7426 1.59282 40.5854 1.68083 39.2926 1.6679C37.406 1.64907 35.6266 1.62057 33.739 1.73331C32.7778 3.85852 32.1048 6.06117 31.3034 8.24737C31.027 9.09305 30.4416 9.7062 29.5759 9.99858C27.5478 10.6836 25.6347 11.4698 23.6702 12.3349C22.0247 11.5932 18.1896 8.98031 16.5357 7.89376C15.4214 8.70922 14.2661 10.0195 13.2534 10.9818C11.8136 12.3501 10.3833 13.7351 8.95686 15.1176L11.413 19.4981C11.849 20.2739 12.6775 21.6667 12.9507 22.4596C12.6472 23.2857 12.0532 24.2124 11.6882 25.0654C11.0824 26.4814 10.6023 28.1209 9.94312 29.4898C8.76733 30.1704 4.85023 31.3164 3.34113 31.7958L1.57003 32.3833L1.55742 42.0086C2.46442 42.2066 4.12024 42.7135 5.05712 42.9828C6.36007 43.3574 8.74809 44.0051 9.93902 44.5446C10.471 45.6283 10.98 47.1815 11.5157 48.3541C11.9881 49.3881 12.7473 50.7634 13.114 51.7613C12.6839 52.8063 9.72713 58.986 9.76684 59.0427C10.5306 60.1338 15.9144 65.084 16.9698 65.9068C19.0997 64.8163 21.7415 63.3842 23.8835 62.4163C24.8386 62.7768 29.2702 64.7131 29.7508 65.3345C29.7631 65.4794 29.7743 65.5351 29.7184 65.6686C29.5813 65.9952 29.2987 66.2933 28.958 66.4087C28.3377 66.6183 24.8117 64.5862 23.9727 64.2218C22.7586 64.781 21.5617 65.3763 20.3836 66.0083C19.7489 66.3514 17.1647 67.9668 16.5488 67.6245C15.0936 66.7829 13.588 65.1675 12.3871 63.9885C11.4802 63.0984 8.28116 60.3772 7.91223 59.4454C7.98207 58.6783 10.822 52.6773 11.289 51.6787C10.5572 50.639 9.10849 47.0548 8.67776 45.8578C6.22088 45.1089 3.72954 44.3961 1.26906 43.6597C0.042832 43.2927 -0.019638 42.3658 0.00721665 41.2302C0.0826226 38.0471 -0.0506683 34.8311 0.0231002 31.6443C0.78633 30.6032 3.01085 30.1073 4.27637 29.7048C5.76689 29.231 7.25339 28.7448 8.73572 28.2461C9.06175 27.1816 10.6097 23.6207 11.1739 22.6378C10.2056 20.9489 9.37508 19.1247 8.36377 17.4466C7.91117 16.6955 7.34198 15.7646 7.03856 14.9628C8.26724 12.7956 12.3831 9.8354 14.0938 7.8037C14.6615 7.12946 15.6712 6.26864 16.5221 6.01541C17.6066 6.43354 18.3923 7.05602 19.3576 7.68318C20.7847 8.61048 22.2828 9.68189 23.8099 10.4227C25.9257 9.64177 27.265 8.932 29.6251 8.18048C29.8552 7.28527 32.0645 0.961487 32.4167 0.530666C32.7458 0.128174 33.2234 0.132103 33.6984 0.0932132Z" fill="#1A1919"/>
                    <path d="M52.8655 47.9238C53.3922 47.9593 53.6095 48.3497 53.9299 48.7336C53.173 49.9755 50.176 52.4967 48.9918 53.5551L43.0519 58.8658L32.8984 68.1231C30.931 69.9072 29.3805 71.2425 29.2379 74.1122C29.1641 75.3395 29.5789 77.0261 30.5644 77.8825C32.516 79.5781 34.5768 82.2439 37.3921 82.2128C38.6298 82.1989 40.2117 81.896 41.1651 81.1329C42.3826 80.1578 43.3365 78.743 44.3863 77.5894C47.4711 74.1564 50.5169 70.6891 53.5231 67.1865C54.8029 65.6931 56.0321 64.2546 57.3887 62.8175C58.0169 62.1098 58.5813 61.3715 59.2519 60.7009C59.9804 59.9723 60.239 60.3252 60.7951 61.0106C60.6558 61.2552 60.4849 61.5129 60.3333 61.7528C59.8947 62.3617 58.743 63.6094 58.1933 64.2382L53.0474 70.0603L46.4366 77.6492C43.6695 80.8586 41.7364 84.2441 36.7792 83.7332C33.2777 83.373 31.4344 81.0895 29.1307 78.725C27.1596 76.4227 27.2408 71.8664 29.1707 69.655C31.6638 66.7984 34.687 64.4765 37.4058 61.905C41.676 57.8663 46.0485 54.0172 50.436 50.1138C51.2515 49.3882 52.0094 48.5977 52.8655 47.9238Z" fill="#1A1919"/>
                    <path d="M27.9126 19.875C28.127 20.1933 27.5255 21.3862 27.2786 21.7127C26.5197 22.7159 25.4508 23.3982 24.5632 24.3225C21.6838 27.3082 19.8933 31.1762 19.4799 35.3034C18.4408 45.7334 25.9206 54.4529 36.0511 56.0327C37.4056 56.2439 38.6793 56.2659 40.0296 56.4008C39.4685 57.0967 39.1637 57.4591 38.3872 57.9355C37.9224 57.9348 37.3918 57.8776 36.9283 57.8307C20.5025 56.1679 11.7874 37.5481 22.373 24.3825C23.7215 22.7054 25.9099 20.633 27.9126 19.875Z" fill="#1A1919"/>
                    <path d="M40.0101 17.174C40.8641 17.1291 42.1984 17.3431 43.0417 17.5181C48.454 18.6172 53.2073 21.8229 56.2543 26.4291C58.2788 29.5316 59.7052 33.6569 59.4691 37.5318C59.4588 37.7007 59.2959 37.7457 59.1577 37.8229C58.2643 37.7463 57.9953 37.3346 57.9476 36.4938C57.456 27.8342 51.034 20.8124 42.6107 19.0919C41.7557 18.9173 39.7265 18.7813 39.6426 17.6742C39.715 17.3913 39.773 17.3736 40.0101 17.174Z" fill="#1A1919"/>
                    <path d="M37.0437 70.3637C39.2012 70.0501 41.2018 71.5525 41.5015 73.7123C41.8011 75.8713 40.2854 77.8617 38.1239 78.1474C35.9826 78.4307 34.0144 76.9316 33.7174 74.7922C33.4206 72.6529 34.9063 70.6748 37.0437 70.3637Z" fill="#1A1919"/>
                    <path d="M37.2286 71.955C40.066 71.7241 41.3536 75.6901 37.9893 76.5694C37.487 76.6218 37.0553 76.5481 36.5982 76.3344C35.9942 76.0585 35.5291 75.5468 35.3112 74.9197C34.7758 73.3534 35.8623 72.4094 37.2286 71.955Z" fill="#F5F5F6"/>
                    <path d="M73.9999 50.6606C73.7445 50.0253 73.1591 48.7551 73.8116 48.2417C74.0245 48.2154 74.1547 48.2001 74.3446 48.3471C75.034 48.8822 76.5348 52.0784 75.0504 52.3835C74.7114 52.4532 74.5338 52.2299 74.3618 51.9694L74.1326 52.1969C74.0826 51.6574 74.0622 51.3481 73.81 50.8706L73.9999 50.6606Z" fill="#1A1919"/>
                    <path d="M73.9985 50.6582C74.1778 50.9832 74.4366 51.5978 74.3604 51.967L74.1312 52.1945C74.0812 51.6549 74.0608 51.3457 73.8086 50.8681L73.9985 50.6582Z" fill="#F5F5F6"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Step 2: Configuration & Setup</h5>
                  <p>Our developers set up custom modules, fields, and automation workflows tailored specifically to your sales team's needs.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">3</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="103" height="77" viewBox="0 0 103 77" fill="none">
                    <path d="M23.7519 35.8418C24.2421 36.5642 24.3086 36.6048 25.1865 36.6172C24.8145 36.7553 24.8797 36.6711 24.6732 36.9558C24.6466 37.2573 24.709 37.3258 24.8488 37.5966C24.4607 37.3239 24.1123 37.0631 23.6392 36.9842C23.5586 36.4259 23.5501 36.3519 23.7519 35.8418Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3768 0.530041C38.8994 -0.201401 39.8578 0.0398666 40.6571 0.0319939C41.4969 0.0236837 42.3423 0.0335041 43.1825 0.0329704L53.1688 0.0271111L88.619 0.0329704L96.9071 0.0251579C98.3517 0.0223373 99.8081 -0.006343 101.249 0.0583611C101.635 0.0756629 101.918 0.297085 101.945 0.68922C102.056 2.2975 102.014 3.93535 102.013 5.54957L102.009 14.9968L102.004 36.2468C102.004 37.919 102.115 44.9345 101.814 45.9617C101.278 46.4911 91.2083 46.2736 89.5516 46.2683L74.0214 46.2879L49.0175 46.2761H42.702C41.2222 46.2723 40.0505 46.365 38.5839 46.115C38.026 45.3807 38.3885 36.1007 38.2684 34.4998C38.1989 33.5711 38.193 30.029 38.3319 29.033C38.3523 28.8872 38.3779 28.7422 38.4091 28.5984C37.187 29.3643 37.6891 29.5619 37.8114 30.7791C38.0964 33.6169 34.9506 34.3855 32.9325 35.2908C30.8444 36.2216 28.717 37.1217 26.5331 37.7947C25.9336 37.9793 25.3977 37.8601 24.8505 37.5955C24.4625 37.3229 24.1143 37.0621 23.6415 36.9832C23.6179 39.739 23.7326 42.4874 23.7909 45.2439L24.1473 61.8015C24.1649 63.5533 24.201 65.3044 24.2557 67.0554C24.3144 69.152 24.6882 71.6867 23.0477 73.2908C21.0197 75.2746 17.1333 75.0401 15.5673 72.6111C15.4048 72.359 15.0807 71.5034 14.9579 71.4402C14.7547 71.7497 14.7315 72.1039 14.5487 72.405C13.1425 74.7241 9.75311 75.3188 7.50281 73.8279C6.59669 73.2241 5.97115 72.2804 5.76843 71.2107C5.56439 70.1571 5.66273 68.7239 5.69421 67.6238L5.82019 63.2986C6.00362 57.8029 6.13068 52.305 6.20105 46.8064C5.70214 46.8454 5.0621 47.2497 4.57996 47.3386C2.20923 47.7762 0.031503 46.5347 0.00378348 43.9763C-0.0228306 41.519 0.0955581 39.1431 0.214721 36.7224C0.328357 34.0321 0.504166 31.3442 0.742065 28.6619C1.56085 19.247 3.32439 20.5543 11.037 17.7752C7.807 15.9148 6.68047 11.1384 8.55749 7.92262C9.55617 6.17765 11.2163 4.90901 13.162 4.40211C15.0792 3.90066 17.1176 4.18893 18.8202 5.20289C20.4407 6.17275 21.7204 7.73141 22.1512 9.58863C22.9147 12.8799 21.5784 15.7939 18.9706 17.8025C22.1385 19.1012 25.7503 19.4978 27.0809 22.9597C27.6089 24.3336 28.3512 27.3862 28.4686 28.8865C29.5407 28.5068 30.7064 28.1162 31.7655 27.7244C33.8034 26.9704 34.6274 27.0409 36.5604 27.9129C37.6392 27.3661 39.389 25.8974 40.4471 25.0847L48.6718 18.7849L51.4921 16.6033C52.0435 16.1687 54.4422 13.9406 54.2938 16.0759C54.2691 16.431 51.8798 18.0959 51.5507 18.3904C50.5434 19.2931 39.9649 27.1556 39.954 27.5222C39.8143 33.3223 39.8895 39.1031 39.869 44.7947C42.7637 44.9766 46.8033 44.8594 49.8065 44.8591L68.2792 44.8455L89.578 44.8543C92.9661 44.8527 97.2432 44.9585 100.56 44.8064L100.55 17.2859C100.55 12.0734 100.623 6.6884 100.536 1.49C97.9874 1.35788 95.1367 1.41803 92.5614 1.41774L78.87 1.41578H55.4227C50.2619 1.39764 45.101 1.41443 39.9403 1.46559C39.864 3.28019 39.9045 5.34186 39.9061 7.17848C39.9285 10.7055 39.9296 14.2326 39.9091 17.7595C39.9007 19.2808 39.941 20.8071 39.9471 22.3269C39.9484 22.6246 39.8043 23.1113 39.5751 23.3269C39.4256 23.4669 39.2231 23.5355 39.0194 23.5144C38.4514 23.4595 38.3276 22.9898 38.3192 22.5213C38.2883 20.7907 38.2926 19.0589 38.2889 17.3279L38.2821 7.80641L38.2811 3.38844C38.281 2.65743 38.2542 1.19964 38.3768 0.530041ZM12.702 18.5662C10.5401 19.9155 7.91822 20.1313 5.59265 21.1228C4.39683 21.6326 3.51588 22.3682 3.03015 23.5925C2.64109 24.5732 2.45918 25.6171 2.31726 26.658C1.9905 29.0549 0.905243 43.2054 1.60632 44.7507C1.84873 45.285 2.31581 45.681 2.86218 45.8816C3.45114 46.0977 4.0343 46.0227 4.59656 45.7595C5.09318 45.527 5.59399 45.115 5.82019 44.6043C6.00332 44.1909 6.10181 43.707 6.15906 43.2605C6.3501 41.7687 6.33904 40.2219 6.40613 38.7195L6.77136 30.322C6.79956 29.6516 6.82615 27.5065 7.01843 26.9871C7.47808 26.5206 8.22249 26.8197 8.20496 27.5535C8.17096 28.9743 8.15283 30.3906 8.10535 31.8123L7.90124 38.9588L7.30554 63.2752C7.27878 64.4317 7.02458 70.0138 7.1991 70.8181C7.3776 71.6109 7.86655 72.2989 8.55652 72.7273C9.36062 73.2351 10.3383 73.3426 11.2401 73.117C13.9347 72.4422 13.7521 70.2387 13.7958 67.9998C13.8059 67.4783 13.8361 66.9526 13.8563 66.4509L14.285 53.3435C14.3451 51.5012 14.4024 49.6604 14.454 47.8181C14.4672 47.3447 14.616 46.7595 15.1346 46.657C15.2992 46.7123 15.7134 46.9587 15.7157 47.1531C15.7922 54.9063 16.2153 62.6565 16.4012 70.4109C16.4099 70.7715 16.5418 71.2671 16.7128 71.5896C17.0918 72.2887 17.7296 72.812 18.4891 73.0476C19.9717 73.4982 22.6415 72.7255 22.83 70.9744C23.05 68.9289 22.8327 66.5685 22.8036 64.4773C22.7408 59.9526 22.6007 55.4197 22.493 50.8953L22.204 37.0847C22.1184 33.7596 21.9804 30.4135 21.9286 27.0984C21.9235 26.7337 22.9533 26.539 23.1053 27.1687C23.2433 27.7402 23.1945 28.3341 23.2596 28.8972C23.4954 30.9351 23.1591 33.9418 23.7548 35.8406C24.2448 36.5628 24.3115 36.6036 25.1893 36.616C25.6429 36.5755 26.1978 36.4997 26.6268 36.3357C27.6531 35.9614 28.6357 35.4799 29.6473 35.0642C31.3029 34.3842 32.9782 33.7469 34.62 33.0349C34.8903 32.9178 35.1735 32.7588 35.4237 32.5984C35.8899 32.2993 36.2671 31.7972 36.3671 31.2468C36.4204 30.9562 36.4115 30.5871 36.3085 30.3054C34.8912 26.4343 29.4198 31.0064 27.5028 30.6355C27.3237 30.4994 27.1263 30.1897 27.0946 29.9763C26.8147 28.0953 26.5721 26.3482 26.0604 24.5252C25.0788 21.0273 22.5329 20.6457 19.5096 19.6697C18.7623 19.4285 17.9332 19.0216 17.2225 18.6482C15.5329 19.0542 14.3687 18.9323 12.702 18.5662ZM20.8641 10.6814C20.4148 7.44882 17.4257 5.19491 14.1942 5.65211C10.9741 6.10782 8.73005 9.08413 9.17761 12.3054C9.62521 15.5267 12.5958 17.7781 15.8182 17.3386C19.052 16.8974 21.3133 13.9141 20.8641 10.6814Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86.1582 50.0014C86.9061 49.9241 87.8449 50.0342 88.5684 50.2338C90.5574 50.7698 92.2479 52.0825 93.2588 53.8774C94.2439 55.6129 94.419 57.6895 93.8838 59.5961C93.3044 61.6369 91.9334 63.362 90.0762 64.3881C92.4609 66.548 94.8323 66.1534 97.6797 67.2085C100.627 68.3017 101.035 71.6035 101.042 74.3237C101.043 74.7552 101.119 75.417 100.958 75.812C100.743 76.0017 100.669 76.0937 100.381 76.1508C99.1923 75.8306 100.209 70.8111 98.1202 69.2612C95.0408 66.9763 90.991 68.3947 88.7862 64.9868C88.114 65.0774 87.4869 65.0799 86.8086 65.0952L84.7198 65.062C83.1514 67.4974 79.1957 67.6249 76.6563 68.3872C74.0643 69.1648 73.4899 71.4715 73.3946 73.8881C73.3717 74.4698 73.4276 75.3786 73.1456 75.9077C73.0442 76.0989 72.9508 76.1315 72.7764 76.184C71.6239 75.9485 72.1284 73.3069 72.1758 72.3833C72.5441 65.2251 79.4774 67.8035 83.3008 64.5444C82.8778 64.3332 82.3191 63.9507 81.9502 63.6489C76.3696 59.0945 78.9539 50.7285 86.1582 50.0014ZM92.6709 56.7309C92.2044 53.3574 89.0897 51.0011 85.7168 51.4692C82.345 51.9373 79.9905 55.0496 80.4571 58.4213C80.9237 61.7927 84.0353 64.1487 87.4073 63.6831C90.7808 63.218 93.1382 60.1044 92.6709 56.7309Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1765 50.0012C53.089 49.8775 54.3585 50.0392 55.2332 50.3098C57.1606 50.9079 58.7699 52.2508 59.7029 54.0402C60.592 55.7523 60.7651 57.7474 60.1843 59.5871C59.5238 61.6928 58.1201 63.3262 56.1707 64.3478C58.6387 66.7972 61.4443 66.0336 64.4187 67.6223C67.2439 69.1317 67.2059 72.9779 66.9334 75.7492C66.9212 75.8733 66.4395 76.1019 66.282 76.1183C65.1017 75.7028 66.3278 71.3975 64.1375 69.2902C61.876 67.1148 57.1649 68.2985 54.7273 64.9982C54.2306 65.0455 53.7326 65.0567 53.2341 65.0734C52.3468 65.0833 51.5444 65.0307 50.6619 64.9758C48.5685 67.8968 44.3695 67.164 41.5632 68.2336C39.3119 69.0913 38.8114 72.5471 38.9744 74.6017C39.0059 74.9982 38.9938 75.8265 38.5359 76.008C38.2938 75.9463 38.2688 75.8929 38.0838 75.7072C37.9113 75.2331 38.0893 73.2092 38.1345 72.6027C38.3237 70.0786 39.1976 67.6504 41.8455 66.8254C43.8273 66.2086 45.9523 66.3258 47.8611 65.5139C48.3642 65.3003 48.983 64.7164 49.407 64.3498C48.9969 64.0998 48.5998 63.8285 48.2175 63.5373C46.5907 62.2984 45.5242 60.4624 45.2547 58.4357C44.7009 54.1067 47.9426 50.5114 52.1765 50.0012ZM58.9832 57.0851C58.7426 53.6886 55.7822 51.1372 52.3875 51.4015C49.0264 51.6633 46.5061 54.5885 46.7439 57.9514C46.982 61.3145 49.89 63.8558 53.2547 63.6408C56.6526 63.424 59.2236 60.4812 58.9832 57.0851Z" fill="#1C1B1B"/>
                    <path d="M57.9208 22.0267C61.8208 21.9934 65.721 21.9856 69.6211 22.0031C70.8762 22.003 72.1384 21.9833 73.3941 21.9844C74.0139 21.9851 75.1171 21.8974 75.4594 22.5136C75.3047 23.5761 73.4185 23.2367 72.5699 23.2178C70.3436 23.2185 56.1541 23.4261 55.2623 23.0541C55.1435 23.0045 55.0265 22.8344 54.9889 22.7164C54.9281 22.5259 55.0027 22.431 55.0909 22.271C55.5538 21.9378 57.2426 22.0354 57.9208 22.0267Z" fill="#1C1B1B"/>
                    <path d="M55.6527 27.1349C61.5556 27.027 67.4709 27.1888 73.3739 27.0859C73.9465 27.0759 75.1366 26.9684 75.4316 27.5688C75.4522 28.0945 75.1373 28.1845 74.7028 28.2833C73.6003 28.3094 72.3088 28.2542 71.1751 28.2552L62.2776 28.2529C61.0059 28.2436 59.734 28.2429 58.4621 28.2506C57.6884 28.2568 55.4494 28.4436 54.9575 27.8375C54.8594 27.3005 55.2238 27.2219 55.6527 27.1349Z" fill="#1C1B1B"/>
                    <path d="M80.3018 22.0274C81.6428 21.9993 90.9639 21.8392 91.4206 22.1228C91.6272 22.2516 91.7271 22.4107 91.7835 22.6427C91.6516 23.2447 91.1698 23.221 90.6559 23.2659C89.3126 23.3069 79.9693 23.4021 79.47 23.0809C79.2801 22.9583 79.1887 22.8166 79.1406 22.5994C79.2923 22.0225 79.7986 22.055 80.3018 22.0274Z" fill="#1C1B1B"/>
                    <path d="M85.6729 15.2318C86.7624 15.1914 93.3076 15.1305 93.9976 15.3411C94.6594 15.8717 94.362 16.3825 93.6355 16.573C91.2713 16.6576 88.8689 16.6187 86.5009 16.6308C85.8902 16.6339 85.156 16.6387 84.8633 16.0049C84.8877 15.5383 85.2651 15.3386 85.6729 15.2318Z" fill="#1C1B1B"/>
                    <path d="M75.976 15.2435C77.0853 15.2208 81.0582 15.043 81.8419 15.4691C82.0348 15.5739 82.1293 15.682 82.198 15.8888C82.1049 16.7741 80.9156 16.6267 80.247 16.6434C79.1019 16.6446 75.0093 16.8566 74.1821 16.4571C73.9412 16.3411 73.8665 16.2413 73.7734 16.0069C73.8878 15.031 75.235 15.2455 75.976 15.2435Z" fill="#1C1B1B"/>
                    <path d="M79.8442 27.1308C81.3354 27.1205 82.8465 27.096 84.3385 27.1251C84.7388 27.133 85.3365 27.227 85.5645 27.5946C85.5759 28.1269 85.2359 28.1956 84.786 28.2946C83.6432 28.3337 82.4638 28.2782 81.3179 28.2751C80.7293 28.2736 79.4561 28.3012 79.094 27.7613C79.0589 27.2782 79.4546 27.2033 79.8442 27.1308Z" fill="#1C1B1B"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Step 3: Data Migration & Testing</h5>
                  <p>We clean, validate, and import your existing customer data while performing rigorous testing of all system configurations.</p>
                </div>
              </li>
              <li className="stagger-li">
                <div className="step-count">4</div>
                <div className="eng-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="125" height="72" viewBox="0 0 125 72" fill="none">
                    <path d="M99.9864 19.0226C100.127 19.0142 100.267 19.0093 100.408 19.0079C101.154 19.0031 102.513 19.3663 102.515 20.2801C102.124 20.9275 100.205 20.4902 99.5349 20.4914C97.0689 20.4956 94.6012 20.4653 92.1352 20.4653C91.5075 20.4652 90.7282 20.42 90.1208 20.5134C89.7619 20.5679 89.4274 20.7282 89.1595 20.9737C88.7155 21.3829 88.6616 21.9405 88.6355 22.5123C88.5563 24.246 88.7231 26.0033 88.7332 27.7388C88.7433 29.428 88.5933 31.1993 88.734 32.8798C88.7542 33.1254 88.7922 33.5503 88.9741 33.7296C89.2715 34.0219 89.9674 34.1139 90.3626 34.1525C91.8209 34.2946 93.3678 34.193 94.8371 34.1912C96.6712 34.1891 98.5542 34.2695 100.383 34.1451C100.721 34.1221 101.313 34.1001 101.602 33.914C102.613 33.2596 101.109 25.8158 102.373 24.4722C102.63 24.1987 102.903 24.1076 103.265 24.1038L103.346 24.1035C103.394 24.3031 103.427 24.5061 103.445 24.7106C103.482 25.1591 103.482 25.6915 103.471 26.1439C103.415 28.3903 103.483 30.6763 103.356 32.9152C103.269 34.4663 101.854 35.6615 100.328 35.6986C97.3604 35.7705 94.3526 35.7288 91.382 35.7259C90.1764 35.7239 89.2522 35.8502 88.2951 34.9693C87.5655 34.2979 87.3279 33.6178 87.29 32.6201C87.2757 30.5865 87.3397 28.5809 87.3245 26.5491C87.3515 24.8946 87.1872 23.2095 87.3582 21.5657C87.386 20.7062 88.6961 19.3691 89.5445 19.2706C92.8227 18.8897 96.7057 19.1331 99.9864 19.0226Z" fill="#1C1B1B"/>
                    <path d="M104.378 19.7384C105.567 19.7258 105.295 20.7492 104.732 21.3682C101.864 24.5269 98.607 27.2694 95.7113 30.407C94.932 31.2511 94.4501 31.1756 93.6758 30.3692C92.8308 29.4886 91.9883 28.6012 91.1416 27.7217C90.5695 27.1438 90.0783 26.7756 90.3816 25.9198C91.2671 25.0272 94.0204 28.376 94.7685 29.0892C96.2859 27.6149 97.7771 26.1137 99.2414 24.5862C100.321 23.4792 103.147 20.35 104.378 19.7384Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.8515 11.061C78.6581 11.0039 81.6743 11.0669 84.5 11.0679L101.714 11.0649L110.614 11.061C112.211 11.0589 113.842 11.014 115.424 11.1186C116.835 11.2121 117.978 12.2624 118.122 13.6714C118.243 14.8556 118.212 15.9695 118.21 17.1538L118.195 22.5737C118.179 28.8985 118.13 35.5331 118.23 41.8423C119.817 43.3499 122.252 44.6075 123.798 46.0659C125.185 47.3744 124.348 50.3283 123.119 51.4927C122.453 52.1234 121.75 53.4842 120.714 53.7134C119.057 54.0793 117.107 53.9365 115.414 53.9311L82.0156 53.9282C78.5599 53.9184 75.0951 53.9389 71.6465 53.937C70.1209 53.9362 69.4635 53.7872 68.4619 52.7007C66.0523 50.0864 66.2691 49.8826 66.3183 46.6284C66.9803 45.7584 71.3531 42.7259 72.457 41.9272C72.3235 40.2764 72.3878 37.7373 72.3838 36.019L72.3926 25.2993C72.413 23.0096 72.4149 20.7198 72.3984 18.4302C72.3908 16.9755 72.3637 15.5377 72.4297 14.0835C72.5075 12.3678 73.6533 11.3818 75.2851 11.0815C75.4738 11.0723 75.6626 11.0655 75.8515 11.061ZM78.6719 47.7183C75.8233 47.7173 72.3266 47.629 69.5293 47.7563L67.8027 47.8071C67.8716 49.475 68.573 50.4372 69.709 51.6089C70.714 52.6457 72.2736 52.3405 73.6094 52.3345L78.1201 52.3306L93.0762 52.3266L109.877 52.3257C112.933 52.3314 116.025 52.3598 119.08 52.2925C119.81 52.2764 120.013 52.233 120.596 51.7934C121.882 50.552 122.666 49.6461 122.835 47.8296C118.959 47.6806 115.134 47.7193 111.259 47.7202H94.7236L78.6719 47.7183ZM117.068 43.2427C114.805 43.1379 112.112 43.2248 109.815 43.229L96.6767 43.2075C90.7946 43.2938 84.851 43.1494 78.9619 43.23C77.805 43.2458 74.6066 43.163 73.6914 43.312C73.1179 43.4054 70.2146 45.6558 69.3965 46.1909L94.0664 46.1919L110.324 46.1958C113.928 46.2266 117.533 46.2011 121.137 46.1196C119.748 45.1898 118.465 44.1318 117.068 43.2427ZM86.1074 12.5815C82.7081 12.5848 79.1673 12.5418 75.7764 12.6138C74.8591 12.7555 74.0135 13.3011 73.9795 14.3218C73.9337 15.6928 73.9564 17.0761 73.9472 18.4497C73.9247 21.7884 73.9254 25.1276 73.9492 28.4663L73.914 36.9692C73.9081 38.2641 73.8415 40.4162 73.9492 41.6567C87.4912 41.6359 101.262 41.803 114.776 41.6352C115.405 41.6221 116.063 41.6192 116.688 41.5796L116.695 23.4907L116.686 17.5181C116.68 16.3655 116.705 14.9805 116.604 13.8579C116.03 12.9745 115.691 12.6252 114.587 12.5962C113.635 12.5711 112.68 12.5837 111.729 12.5854L104.964 12.5932L86.1074 12.5815Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1378 34.0986C30.5408 34.037 33.9004 33.9157 35.2638 34.1865C35.9655 34.326 36.2647 36.9606 36.6144 37.9395C37.4402 38.2911 38.0059 38.4977 38.8625 38.7676C39.6218 38.3853 41.7797 36.7485 42.4377 36.9785C43.3752 37.3065 47.2864 41.1773 47.6701 41.8564C47.2237 43.063 46.4517 43.9798 45.7462 45.0605C46.0089 45.9374 46.241 46.6827 46.6867 47.4863C48.6073 48.2121 50.949 47.4952 50.7873 50.2129C50.6809 51.999 51.0841 54.2537 50.5861 55.9687C50.4197 56.5407 47.4924 57.0378 46.8517 57.2324C46.4486 57.7884 46.0494 58.8065 45.7726 59.4561C46.159 60.263 47.7527 62.2458 47.6886 62.9102C47.6025 63.7914 43.2112 67.7763 42.4084 68.1074C41.8049 68.3558 39.5909 66.7246 38.9679 66.3008C36.5684 67.0843 36.4838 66.9095 36.0705 69.5566C35.9442 70.3653 35.7395 71.0913 34.8488 71.2598C33.7225 71.2472 28.7969 71.3826 28.1447 71.0273C27.6058 70.3036 27.2211 68.2654 26.9787 67.2695L24.7072 66.5596C23.8903 66.9019 22.2495 68.2454 21.4543 68.1826C20.3682 68.0967 16.8291 64.3107 15.9699 63.3418C16.3303 62.0596 17.2658 60.9099 17.9552 59.6875C17.5927 58.893 17.2986 58.1913 16.8351 57.4482C14.9504 56.9571 12.6301 57.4912 12.8107 54.9853C12.9428 53.1511 12.5706 50.8841 12.9484 49.0859C13.0665 48.5241 16.2878 47.854 16.8654 47.7168C17.2051 47.0117 17.4892 45.9886 17.7238 45.2158C17.1318 44.305 15.8195 43.0448 15.8771 41.9814C16.2666 41.2263 19.9545 37.6377 20.9279 37.0684C21.5977 36.6766 23.5806 38.4296 24.6867 38.7949C25.253 38.676 26.2781 38.2217 26.924 38.0098C27.2056 36.9485 27.2083 35.417 27.8546 34.5967C28.1944 34.1655 28.6358 34.15 29.1378 34.0986ZM34.3429 35.7393C32.6327 35.6948 30.8512 35.7421 29.1349 35.7656C28.1667 39.8545 28.509 39.2284 24.5968 40.6709C23.6841 40.2635 22.2147 39.3331 21.3039 38.7891C20.1517 39.855 18.8786 41.1676 17.7228 42.1514C18.2646 42.9793 19.3227 44.5429 19.671 45.3701C19.3533 46.1216 18.3106 48.5982 17.8888 49.1621C16.8312 49.4453 15.437 49.769 14.4377 50.1377C14.421 51.4411 14.3499 53.9292 14.5187 55.166C15.6893 55.5187 17.0356 55.6312 18.1134 56.0596C18.6332 56.9683 19.2647 58.7831 19.7433 59.8496C19.4413 60.7022 18.4428 61.8411 17.9464 62.8184C18.6256 63.6061 20.7754 65.7225 21.6115 66.4336C22.5228 65.8978 23.7792 65.1103 24.7296 64.7109C25.4164 64.9704 26.1034 65.205 26.7931 65.4375C27.3536 65.627 28.2256 65.7847 28.4386 66.4062C28.7887 67.4282 28.8911 68.5257 29.1984 69.5713C30.878 69.5966 32.6777 69.5232 34.3244 69.5889C34.5607 68.578 34.8786 66.7631 35.2209 65.8994C36.4736 65.5346 37.7556 65.0307 38.9826 64.5732C40.0478 65.0627 41.1575 65.7748 42.1759 66.3838C43.5502 65.1217 44.5875 64.1364 45.8351 62.7227C45.2714 61.993 44.3709 60.6483 43.9171 59.8564C44.3722 58.7057 44.874 57.3458 45.3312 56.2158C45.5343 55.716 48.4145 55.1927 49.1173 54.8662C49.1431 53.2185 49.1478 51.5706 49.132 49.9228C47.9931 49.4278 46.5859 49.3289 45.3986 48.8584L43.9084 45.3008C44.2771 44.2867 45.0822 42.9317 45.7257 42.0664C44.5628 40.907 43.4694 39.8271 42.256 38.7236C41.0666 39.2888 40.1232 40.0793 38.9152 40.6016C37.9058 40.1996 36.0309 39.6261 35.2277 39.2568C34.798 38.2056 34.6116 36.8527 34.3429 35.7393Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8514 43.8121C35.646 43.3291 39.9224 46.8293 40.3973 51.6246C40.8722 56.4198 37.3652 60.6901 32.5692 61.1569C27.7846 61.6227 23.5265 58.126 23.0526 53.3424C22.5788 48.5585 26.0684 44.2941 30.8514 43.8121ZM39.0399 51.7096C38.5828 47.6923 34.9377 44.8184 30.9247 45.3111C26.9617 45.7977 24.1309 49.3871 24.5819 53.3541C25.0333 57.3214 28.5982 60.1843 32.5692 59.7682C36.5904 59.3469 39.497 55.727 39.0399 51.7096Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9607 0.0665926C19.4041 -0.123485 23.0897 0.117965 25.5798 0.479679C29.5226 1.11113 34.2209 2.00749 36.9529 5.19062C38.2206 6.668 37.8535 10.1361 37.8533 12.09L37.8718 20.7922L37.866 28.2902C37.8622 29.0345 38.0159 31.927 37.5232 32.4777C37.0888 32.9628 36.283 31.9601 36.0076 31.5031C35.367 31.7425 33.1668 32.2854 32.7517 31.716C33.7647 30.6963 35.2806 30.0206 36.2244 28.7092C36.3467 27.2718 36.3264 25.6337 36.3074 24.1828C36.2948 23.222 36.168 22.2729 36.2224 21.301C34.4724 22.7871 31.7847 23.5973 29.5867 24.1437C21.7915 26.0817 12.8973 26.0722 5.3064 23.3019C4.05317 22.8445 2.79063 22.0676 1.6609 21.3771C1.60019 23.5794 1.50845 26.5106 1.64722 28.6896C1.95767 29.1647 2.33345 29.5938 2.76441 29.9631C3.90871 30.9574 5.55742 31.6532 6.98512 32.1213C13.1825 34.1534 19.0253 33.944 25.3552 33.4631C24.925 34.2947 24.7422 34.6336 23.9343 35.1076C23.1743 35.1335 21.8123 34.8983 21.1677 34.9973C19.0651 35.3208 17.492 35.3863 15.3474 35.2834C11.876 35.1681 7.60604 34.2964 4.42359 32.8303C3.49203 32.401 2.51278 31.7446 1.65699 31.1691C1.58428 33.4265 1.52999 36.432 1.63453 38.633C3.65901 41.9198 9.7082 42.6844 13.1199 43.341C13.2845 43.3727 13.5976 43.8237 13.6179 43.9934C13.792 45.4438 11.6566 44.7033 10.9187 44.6076C7.34969 44.1965 4.7507 43.0151 1.68043 41.2824C1.63936 43.6842 1.39804 48.0554 1.76051 50.3195C2.70706 52.3228 5.44233 53.1568 7.35328 53.7521C8.36773 54.068 9.99491 54.1984 10.2625 55.0471C10.2481 55.5048 9.99416 55.9556 9.40601 55.9855C9.07129 55.9889 8.71396 55.8736 8.38453 55.7824C5.7144 55.043 2.69616 54.1457 0.864998 51.924C0.51944 51.5047 0.0517475 50.558 0.041756 50.008C-0.00869891 47.1747 0.0332736 44.3381 0.0349201 41.5041L0.0271076 24.6574L0.010506 12.9553C0.00824441 11.0748 -0.0324412 9.04929 0.0632404 7.17597C0.100437 6.44787 0.683092 5.38444 1.20289 4.86542C5.01503 1.06061 11.9397 0.317994 16.9607 0.0665926ZM36.2283 11.2365C29.8318 17.0097 8.22294 16.8351 1.61402 11.2678C1.65045 13.6249 1.45847 16.2893 1.65113 18.6262C1.66827 18.8341 1.8929 19.1658 2.01929 19.3508C7.35307 25.4663 31.8454 25.4936 36.3064 18.6193C36.3213 17.7889 36.4063 11.5138 36.2283 11.2365ZM36.3503 7.8371C34.997 1.90145 20.9619 1.42179 16.0681 1.6662C11.8862 1.91636 6.6754 2.76468 3.18726 5.28437C1.15557 6.75214 1.09461 8.67599 3.11012 10.2404C7.65301 13.6331 16.3038 14.3101 21.7263 13.8684C25.6923 13.5812 35.2003 12.398 36.3503 7.8371Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1945 15.6717C31.4427 15.3824 32.6889 16.1611 32.9757 17.4099C33.2624 18.6588 32.481 19.903 31.2316 20.1873C29.9857 20.4706 28.7452 19.6923 28.4591 18.447C28.1732 17.2018 28.9498 15.9602 30.1945 15.6717ZM30.4289 16.699C29.0333 17.4896 29.1144 18.9486 30.7648 19.2293C32.3747 18.828 32.081 16.8448 30.4289 16.699Z" fill="#1C1B1B"/>
                    <path d="M57.8794 23.2793C58.1092 23.2455 58.4678 23.2221 58.6727 23.3193C59.9128 23.9072 61.1307 24.5903 62.3705 25.1809C64.7787 26.328 67.2399 27.3767 69.5924 28.631C69.8442 28.7775 70.0413 28.8736 70.1725 29.1466C70.5248 29.8798 69.6698 30.3767 69.1283 30.6378C67.1594 31.5871 65.2116 32.575 63.246 33.5293C61.72 34.2701 60.2079 35.1329 58.6402 35.752C58.2789 35.893 57.79 35.8355 57.4415 35.6275C56.8189 34.682 59.1422 33.8221 59.7441 33.465C61.6407 32.3399 64.0621 31.493 65.8604 30.2654C63.9792 30.2915 62.0977 30.2926 60.2164 30.2687L48.6959 30.2761C46.9431 30.2753 45.1868 30.3036 43.4357 30.2786C42.898 30.271 42.2084 30.1195 42.0566 29.5425C42.1015 29.3016 42.2225 29.0815 42.4021 28.9147C42.8212 28.521 45.4321 28.6648 46.1797 28.6651L52.4993 28.6669C56.6838 28.6651 61.6381 28.5356 65.773 28.7636C63.3707 27.1388 60.2269 26.162 57.7869 24.6212C57.2348 24.2725 57.4583 23.6757 57.8794 23.2793Z" fill="#1C1B1B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5084 25.5259C31.7707 25.4073 32.8926 26.329 33.0211 27.5904C33.1496 28.8518 32.2366 29.9814 30.9762 30.1197C29.7019 30.2593 28.5581 29.3334 28.4283 28.0581C28.2985 26.7829 29.2322 25.646 30.5084 25.5259ZM30.8141 26.6382C30.667 26.6195 30.4955 26.6323 30.3473 26.6441C29.0969 27.5557 29.3476 28.9904 30.9205 28.9273C31.5284 28.5387 32.0633 27.8366 31.5846 27.1167C31.4097 26.8527 31.1283 26.6778 30.8141 26.6382Z" fill="#1C1B1B"/>
                  </svg>
                </div>
                <div className="eng-title">
                  <h5>Step 4: Training & Onboarding</h5>
                  <p>We conduct hands-on user training and monitor system adoption to ensure a successful and productive organizational rollout.</p>
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
          <h2>Why Partner with <span className="txt-med slide-up">emQube in Dubai?</span></h2>
          <ul className="partner-single">
            <li className="stagger-li">
              <div className="part-txt">
                <p>With over <span className="txt-med">20 years of software background</span> and <span className="txt-med">12+ years specializing in Zoho CRM implementation</span>, emQube is a trusted name in the UAE’s digital landscape. We don't just "install" software; we understand the local business culture and regulatory requirements in Dubai. Our team focuses on <span className="txt-med">"rightsizing"</span> the solution—ensuring you get exactly what your business needs without unnecessary complexity or hidden costs. </p>
                <p>As a leading software development agency in Dubai, we engineer Zoho CRM to mirror your unique sales DNA. Whether you are a startup in JLT or an enterprise in Business Bay, we ensure every prospect is nurtured and every revenue opportunity is captured through world-class CRM strategy.</p>
              </div>
              <div className="part-img">
                <img src="/assets/img/zoho-logo.jpg"></img>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* partner with emqube section ends */}

      {/* zoho app section starts */}
      <section className="zoho-app-wrapper">
        <div className="container">
          <h2>Zoho Apps</h2>
          <ul className="zoho-app-list">
            <li>
              <div className="zoho-app-logo">
                <img src="/assets/img/zoho-books-v1.png" alt="Zoho Books"></img>
              </div>
              <div className="zoho-app-txt">
                <p>Zoho Books is a unified platform that covers all your back-office needs, from invoicing and order management to accounting and beyond. </p>
                <p>Automate routine tasks from invoicing workflows to payment reminders. Allow Zoho to handle them effortlessly while you focus on your business.</p>
                <p>Enhance the power of your CRM and give salesperson a full view of the invoices and payment history of customers.</p>
                <p>Implement Zoho Books with a reliable and responsive authorized Zoho Partner in Dubai</p>
                <a href="#" className="fill-btn">Book a Free Strategy Session with our Zoho Experts</a>
              </div>
              <div className="zoho-app-img">
                <img src="/assets/img/zoho-books-right-img.jpg"></img>
              </div>
            </li>
            <li>
              <div className="zoho-app-logo">
                <img src="/assets/img/zoho-people-v1.png" alt="Zoho People"></img>
              </div>
              <div className="zoho-app-txt">
                <p>Zoho People is a comprehensive online HR solution designed to simplify and automate your HR processes from one centralized platform.</p>
                <p>Centralize your employee database in a single place, expedite your HR tasks and functions. Access valuable information and reports within minutes.</p>
                <p>Give the sales team a single portal to manage their leaves, attendance, wages, appraisals and more.</p>
                <p>Implement Zoho People with a reliable and responsive authorized Zoho Partner in Dubai.</p>
                <a href="#" className="fill-btn">Book a Free Strategy Session with our Zoho Experts</a>
              </div>
              <div className="zoho-app-img">
                <img src="/assets/img/zoho-people-right-img.png"></img>
              </div>
            </li>
            <li>
              <div className="zoho-app-logo">
                <img src="/assets/img/zoho-project-v1.png" alt="Zoho Project"></img>
              </div>
              <div className="zoho-app-txt">
                <p>Zoho Projects is a unified project management platform that covers all your operational needs, from task scheduling and resource planning to collaboration and beyond. </p>
                <p>Automate routine tasks from task transitions to status updates. Allow Zoho to handle them effortlessly while you focus on your business goals.</p>
                <p>Enhance the power of your CRM and give salespersons a full view of project progress and milestone completion for their customers. </p>
                <p>Implement Zoho Projects with a reliable and responsive authorized Zoho Partner in Dubai.</p>
                <a href="#" className="fill-btn">Book a Free Strategy Session with our Zoho Experts</a>
              </div>
              <div className="zoho-app-img">
                <img src="/assets/img/zoho-project-right-img.png"></img>
              </div>
            </li>
            <li>
              <div className="zoho-app-logo">
                <img src="/assets/img/zoho-creator-v1.png" alt="Zoho Creator"></img>
              </div>
              <div className="zoho-app-txt">
                <p>Zoho Creator is a unified low-code platform that covers all your custom application needs, acting as the central nervous system that ties your different Zoho apps into a single, customized solution.</p>
                <p>Automate routine tasks across your entire ecosystem, from cross-departmental data flows to complex approval chains. Allow Zoho to handle the heavy lifting while you focus on business innovation.</p>
                <p>Enhance the power of your CRM, Books, and People by building custom bridges that sync data seamlessly, giving your team a 360-degree view of every customer interaction and internal process.</p>
                <p>Implement Zoho Creator with a reliable and responsive authorized Zoho Partner in Dubai.</p>
                <a href="#" className="fill-btn">Book a Free Strategy Session with our Zoho Experts</a>
              </div>
              <div className="zoho-app-img">
                <img src="/assets/img/zoho-creator-right-img.png"></img>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* zoho app section ends */}

      {/* industry section starts */}
      <section className="insudtry-list-wrapp indus-flex-dir-btm">
        {/* <h2 className="slide-up">Work Reference</h2> */}
        <h2 className="slide-up">Industries</h2>
        <div className="container">
          <div className="left">
            {/* <h3 className="slide-up">Industries</h3> */}
            <ul className="flex-dir-row flex-wrap">
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-fmcg"></i></span>
                <p>Real Estate</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-automative"></i></span>
                <p>Citizen Ship Services</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-insurance"></i></span>
                <p>Business Setup</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-insurance"></i></span>
                <p>Trading</p>
              </li>
              <li className="stagger-li">
                <span className="icon"><i className="icon icon-insurance"></i></span>
                <p>Freight & Logistics</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* industry section ends */}     

      {/* Work Reference Section Starts */}
      <section className="work-ref-wrapper">
        <div className="container">
          <h2 className="txt-center slide-up">Projects</h2>
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
          <p className="cta-title stagger-li">Ready to Scale Your Sales in the UAE?</p>
          <p className="cta-txt stagger-li">Book a Free Zoho CRM Audit & Strategy <br />Session with our Dubai Experts</p>
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
    <main className="inside-page inside-child zoho-product">
      <Header />
    </main>
  );
}