import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow  } from "swiper/modules";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "/src/assets/css/common.css";
import "/src/assets/css/inside.css";

import Seo from "../components/SeoMeta";
import Breadcrumb from "../components/Breadcrumbs";
import Layout from "../components/Layout";

gsap.registerPlugin(ScrollToPlugin);

export default function SoftwareSolMain({ data }) {

  const softSolMain = data?.wpPage?.softwareSolutionsHouseLp || {};
  const softSolMainProject = data?.wpPage?.softwareSolutionsHouseLp?.selectProjects || [];
  const softSolMainProjectAll = data?.allWpPortfolio?.nodes || {};
  const options = data?.wp?.acfOption?.common;

  const [menuActive, setMenuActive] = useState(false);

  const [menuItemActive, setMenuItemActive] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [activeMenus, setActiveMenus] = useState({
    level1: null,
    level2: null,
  });

  useEffect(() => {
     if (typeof window !== "undefined") return;
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
     if (typeof window !== "undefined") return;
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
    if (typeof window !== "undefined") return;
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


  const webSlides = softSolMain?.sftSdPages?.map((softItem, index) => ({
    key: softItem?.spUrl?.slug || index, // better unique key
    img: softItem?.spImage?.mediaItemUrl,
    title: softItem?.spTitle,
    text: softItem?.spDescription, // keep as string (HTML)
    link: softItem?.spUrl?.link,
  }));

  const webSlides1 = softSolMain?.sftSpPages?.map((softItem1, index) => ({
    key: softItem1?.spUrl?.slug || index, // better unique key
    img: softItem1?.spImage?.mediaItemUrl,
    title: softItem1?.spTitle,
    text: softItem1?.spDescription, // keep as string (HTML)
    link: softItem1?.spUrl?.link,
  }));

  const webSlides2 = softSolMain?.sftScPages?.map((softItem2, index) => ({
    key: softItem2?.spUrl?.slug || index, // better unique key
    img: softItem2?.spImage?.mediaItemUrl,
    title: softItem2?.spTitle,
    text: softItem2?.spDescription, // keep as string (HTML)
    link: softItem2?.spUrl?.link,
  }));


  useEffect(() => {
     if (typeof window !== "undefined") return;
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
    //  if (typeof window !== "undefined") return;
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

  const logos = options?.brandLogos.map(item => ({
    src: item.mediaItemUrl, 
    alt: item.altText
  }));


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
    <Layout isMainParent>
    <>

      {/* Inside intro section starts */}
      {softSolMain && 
        <section className="inside-intro-wrapper">
          <div className="container">
            <div className="inside-intro-count left">
              <ul className="d-flex">
                {softSolMain?.sftStatsLeft.map((statLeft, index) => (
                  <li 
                  className={` ${index === 0 ? "bg-green" : ""} ${index === 1 ? "bg-white" : ""}`} 
                  dangerouslySetInnerHTML={{__html: statLeft.leftStatContent}}
                  />
                ))
                }
              </ul>
            </div>
            <div className="inside-intro-title">
              <h1 dangerouslySetInnerHTML={{__html: data?.wpPage?.title}} />
              <div className="inside-sub-txt" dangerouslySetInnerHTML={{__html: softSolMain?.heroTitle}} />
            </div>
            <div className="inside-intro-txt" dangerouslySetInnerHTML={{__html: softSolMain?.heroSubText}} />
            <div className="inside-intro-count right">
              <ul className="d-flex">
                {softSolMain?.sftStatsLeftCopy.map((statRight, index) => (
                  <li 
                  className={` ${index === 0 ? "bg-white" : ""} ${index === 1 ? "bg-green" : ""}`} 
                  dangerouslySetInnerHTML={{__html: statRight.statContent}}
                  />
                ))
                }
              </ul>
            </div>
          </div>
          <div className="scroll-down-arrow">
            <a href="#"
              onClick={(e) => {
                e.preventDefault();

                 if (typeof window !== "undefined") return;
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
      }
      {/* Inside intro section ends */}

      {/* tab system starts */}
      {softSolMain?.sftSdPages && 
        <section className="tab-system-wrapper tab1 slide-up">
          <div className="container">
            <div className="tab-system">
              <div className="tab-buttons">
                <h2 className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')} dangerouslySetInnerHTML={{__html: softSolMain?.sdTitle}} />
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
                              <a href={slide.link}>
                                <div className="slide-image">
                                  <img src={slide.img} alt={slide.title} />
                                </div>
                                <div className="slide-text">
                                  <h3>{slide.title}</h3>
                                  <p dangerouslySetInnerHTML={{__html: slide.text}} />
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
      }
      {/* tab system ends */}

      {/* tab system starts */}
      {softSolMain?.sftSpPages && 
        <section className="tab-system-wrapper tab2 slide-up">
          <div className="container">
            <div className="tab-system">
              <div className="tab-buttons">
                <h2 className={`tab-btn ${activeTab1 === 'enterprise' ? 'active' : ''}`} onClick={() => setActiveTab1('enterprise')} dangerouslySetInnerHTML={{__html: softSolMain?.spTitle}} />
              </div>
              <div className="tab-content">
                {activeTab1 === 'enterprise' && (
                  <div className="tab-pane">
                    <div className="web-swiper-container">
                      <Swiper
                        loop={true}
                        modules={[Navigation]}
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
                        className="web-swiper1"
                        onSwiper={(swiper1) => setWebSwiper1(swiper1)}
                        onSlideChange={(swiper1) => setWebActiveSlide1(swiper1.realIndex)}
                      >
                        {webSlides1.map((slide1, index1) => (
                          <SwiperSlide key={slide1.key}>
                            <div className="swiper-slide-content">
                              <a href={slide1.link}>
                                <div className="slide-image">
                                  <img src={slide1.img} alt={slide1.title} />
                                </div>
                                <div className="slide-text">
                                  <h3>{slide1.title}</h3>
                                  <p dangerouslySetInnerHTML={{__html: slide1.text}} />
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
      }
      {/* tab system ends */}

      {/* tab system starts */}
      {softSolMain?.sftScPages && 
        <section className="tab-system-wrapper tab3 slide-up">
          <div className="container">
            <div className="tab-system">
              <div className="tab-buttons">
                <h2 className={`tab-btn ${activeTab2 === 'whatsapp' ? 'active' : ''}`} onClick={() => setActiveTab2('whatsapp')} dangerouslySetInnerHTML={{__html: softSolMain?.scTitle}} />
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
                              <a href={slide2.link}>
                                <div className="slide-image">
                                  <img src={slide2.img} alt={slide2.title} />
                                </div>
                                <div className="slide-text">
                                  <h3>{slide2.title}</h3>
                                  <p dangerouslySetInnerHTML={{__html: slide2.text}} />
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
      }
      {/* tab system ends */}

      {/* Home Page Why choose section starts */}
      {softSolMain?.sftWcuContent &&
        <section className="home-choose-wrapper inside-choose-wrapper">
          <div className="container">
            <h2 className="txt-center txt-gradient-mix slide-up" dangerouslySetInnerHTML={{__html: softSolMain?.wcuTitle}} />
            <div className="home-why-choose-list">
              <ul className="d-flex">
                {softSolMain?.sftWcuContent.map((softChoose, index) => (
                  <li className="stagger-li">
                    <div className="icon">
                      <div className="desk" dangerouslySetInnerHTML={{__html: softChoose.wcuImage}} />
                      <div className="mob" dangerouslySetInnerHTML={{__html: softChoose.wcuImageMob}} />
                    </div>
                    <div className="icon-txt">
                      <h3 className="txt-gradient" dangerouslySetInnerHTML={{__html: softChoose.wcuTitle}} />
                      <p dangerouslySetInnerHTML={{__html: softChoose.wcuDescription}} />
                    </div>
                    <div className="icon-num">{index+1}</div>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* Home Page Why choose section ends */}

      {/* engagement model starts */}
      {softSolMain?.sftEmSteps &&
        <section className="engagement-model-wrapp parent-eng-model">
          <div className="container">
            <h2 className="txt-center slide-up" dangerouslySetInnerHTML={{__html: softSolMain.emTitle}} />
            <p className="sub-txt slide-up" dangerouslySetInnerHTML={{__html: softSolMain.emShortContent}} />
            <div className="eng-model-step">
              <ul>
                {softSolMain?.sftEmSteps && softSolMain?.sftEmSteps.map((engStep, index) => (
                  <li className="stagger-li">
                    <div className="step-count">{index + 1}</div>
                    <div className="eng-icon" dangerouslySetInnerHTML={{__html: engStep.emImage}} />
                    <div className="eng-title">
                      <h3 dangerouslySetInnerHTML={{__html: engStep.emTitle}} />
                      <p dangerouslySetInnerHTML={{__html: engStep.emText}} />
                    </div>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* engagement model ends */}
      
      {/* Work Reference Section Starts */}
      {softSolMainProject && softSolMainProject.length > 0 &&
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
            {softSolMainProject.map((project, index) => (
              <SwiperSlide key={project.id || index}>
                <a href={`/software-projects/${project.slug}`}>
                  <div className="work-wrapp">
                    {/* <div className="client-icon">
                      <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img>
                    </div> */}
                    <span className="arrow-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                        <path d="M21.1521 39.374L37.1533 18.9342M37.1533 18.9342L22.9769 20.1986M37.1533 18.9342L39.3288 32.9996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <div className="proj-img">
                      {/* <img src="/assets/img/emove-project-img.webp" alt="Emovers"></img> */}
                      <img
                        src={
                          project?.softwarePortfolioLayout?.insidePageLisitngImage?.mediaItemUrl
                            ? project?.softwarePortfolioLayout?.insidePageLisitngImage?.mediaItemUrl
                            : "https://wp.emqube.com/wp-content/uploads/2026/05/software-project-placeholder.webp"  // fallback image
                        }
                        alt={
                          project?.softwarePortfolioLayout?.insidePageLisitngImage?.altText
                            ? project?.softwarePortfolioLayout?.insidePageLisitngImage?.altText
                            : project?.title
                        }
                      />
                    </div>
                    <div className="proj-txt" dangerouslySetInnerHTML={{ __html: project?.content }} />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      }
      {/* Work Reference Section Ends */}

      {/* Home Page Brand section starts */}
      {options?.brandLogos &&
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
      }
      {/* Home Page Brand section ends */}

      {/* Technology Section Starts */}
      {softSolMain?.platforms && 
        <section className="technology-wrapper">
          <div className="container">
            <h2 className="slide-up">Technology Platforms</h2>
            <Swiper className="techSwiper slide-up"
              modules={[Autoplay]}
              // slidesPerView={3.2}
              loop={true}
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
              {softSolMain?.platforms && softSolMain?.platforms.map(platform => (
                <SwiperSlide>
                  <div className="tech-wrapp">
                    <div className="client-icon">
                      <img src={platform.mediaItemUrl} alt={platform.altText}></img>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      }
      {/* Technology Section Ends */}

      {/* home cta section starts */}
      {softSolMain?.ctaText && softSolMain?.ctaContent && 
        <section className="cta-wrapper">
          <div className="container">
            <p className="cta-title stagger-li" dangerouslySetInnerHTML={{__html: softSolMain?.ctaText}} />
            <p className="cta-txt stagger-li" dangerouslySetInnerHTML={{__html: softSolMain?.ctaContent}} />
            <div className="cta-btn-wrapp d-flex">
              <ul class="lets-talk-wrap">
                {options && options?.whatsappurl && 
                  <li class="whatsapp stagger-li">
                    <a href={options?.whatsappurl} target="_blank" class="view-all pos-ab-aligh-right ">
                      <span class="text">WhatsApp</span>
                      <span class="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M13.75 0C21.3441 0 27.5 6.15588 27.5 13.75C27.5 21.3441 21.3441 27.5 13.75 27.5C11.3201 27.5042 8.93282 26.8611 6.83377 25.6369L0.00552125 27.5L1.86452 20.669C0.639339 18.5693 -0.00423724 16.181 2.09944e-05 13.75C2.09944e-05 6.15588 6.1559 0 13.75 0ZM9.06402 7.2875L8.78902 7.2985C8.61122 7.31075 8.4375 7.35745 8.27752 7.436C8.12844 7.52058 7.99229 7.62616 7.87327 7.7495C7.70827 7.90488 7.61477 8.03963 7.5144 8.17025C7.00581 8.83149 6.73198 9.64331 6.73615 10.4775C6.7389 11.1512 6.9149 11.8071 7.1899 12.4204C7.75227 13.6606 8.67765 14.9737 9.89865 16.1906C10.1929 16.4835 10.4816 16.7778 10.7924 17.0514C12.3096 18.3871 14.1175 19.3503 16.0724 19.8646L16.8534 19.9843C17.1078 19.998 17.3621 19.9788 17.6179 19.9664C18.0183 19.9453 18.4092 19.8369 18.7633 19.6488C18.9432 19.5557 19.1189 19.4548 19.2899 19.3462C19.2899 19.3462 19.3481 19.3068 19.4618 19.2225C19.6474 19.085 19.7615 18.9874 19.9155 18.8265C20.031 18.7073 20.1273 18.5689 20.2043 18.4113C20.3115 18.1871 20.4188 17.7595 20.4628 17.4034C20.4958 17.1311 20.4861 16.9826 20.482 16.8905C20.4765 16.7434 20.3541 16.5907 20.2208 16.5261L19.4205 16.1672C19.4205 16.1672 18.2243 15.6461 17.4928 15.3134C17.4162 15.28 17.3342 15.2609 17.2508 15.257C17.1567 15.2472 17.0616 15.2577 16.9719 15.2878C16.8822 15.3179 16.8001 15.367 16.731 15.4316C16.7241 15.4289 16.632 15.5073 15.6379 16.7118C15.5808 16.7884 15.5022 16.8464 15.4121 16.8782C15.322 16.91 15.2245 16.9143 15.1319 16.8905C15.0423 16.8666 14.9545 16.8363 14.8693 16.7998C14.6988 16.7283 14.6396 16.7008 14.5228 16.6512C13.7333 16.3074 13.0026 15.842 12.3571 15.2721C12.1839 15.1209 12.023 14.9559 11.858 14.7964C11.3171 14.2783 10.8457 13.6922 10.4555 13.0529L10.3744 12.9222C10.317 12.834 10.2699 12.7394 10.2341 12.6404C10.1819 12.4382 10.318 12.276 10.318 12.276C10.318 12.276 10.6521 11.9102 10.8075 11.7122C10.9588 11.5197 11.0866 11.3328 11.1691 11.1994C11.3314 10.9381 11.3823 10.67 11.297 10.4624C10.912 9.52188 10.5142 8.58642 10.1035 7.656C10.0224 7.47175 9.78177 7.33975 9.56315 7.31362C9.4889 7.30446 9.41465 7.29712 9.3404 7.29163C9.15577 7.28104 8.97065 7.28287 8.78627 7.29713L9.06402 7.2875Z" fill="white"/>
                          </svg>
                      </span>
                    </a>
                  </li>
                }
                {options && options?.contactusUrl && 
                  <li class="contact-us stagger-li">
                    <a href={options?.contactusUrl} class="view-all">
                      <span class="text">Contact Us</span>
                      <span class="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                          <path d="M19.4425 13.5931L1.75468 13.5931C1.30622 13.5931 0.9303 13.4414 0.62693 13.138C0.32356 12.8347 0.171875 12.4587 0.171875 12.0103C0.171875 11.5618 0.32356 11.1859 0.62693 10.8825C0.9303 10.5792 1.30622 10.4275 1.75468 10.4275L19.4425 10.4275L11.6867 2.67177C11.3702 2.35521 11.2185 1.98589 11.2317 1.56381C11.2449 1.14173 11.4098 0.772406 11.7263 0.455846C12.0429 0.165666 12.4122 0.0139809 12.8343 0.000790847C13.2564 -0.0123992 13.6257 0.139286 13.9422 0.455846L24.3887 10.9023C24.547 11.0606 24.6591 11.2321 24.7251 11.4167C24.791 11.6014 24.824 11.7992 24.824 12.0103C24.824 12.2213 24.791 12.4192 24.7251 12.6038C24.6591 12.7885 24.547 12.96 24.3887 13.1182L13.9422 23.5647C13.6521 23.8549 13.2893 24 12.8541 24C12.4188 24 12.0429 23.8549 11.7263 23.5647C11.4098 23.2482 11.2515 22.8723 11.2515 22.437C11.2515 22.0017 11.4098 21.6258 11.7263 21.3092L19.4425 13.5931Z" fill="#4E9C5A"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                }
                {options && options?.callnumber &&
                  <li class="call-us stagger-li">
                    <a href={`tel:${options?.callnumber}`} class="view-all pos-ab-aligh-right ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.6 24C19.8222 24 17.0778 23.3944 14.3667 22.1833C11.6556 20.9722 9.18889 19.2556 6.96667 17.0333C4.74444 14.8111 3.02778 12.3444 1.81667 9.63333C0.605556 6.92222 0 4.17778 0 1.4C0 1 0.133333 0.666667 0.4 0.4C0.666667 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.105556 7.63333 0.316667C7.87778 0.527778 8.02222 0.777778 8.06667 1.06667L8.93333 5.73333C8.97778 6.08889 8.96667 6.38889 8.9 6.63333C8.83333 6.87778 8.71111 7.08889 8.53333 7.26667L5.3 10.5333C5.74444 11.3556 6.27222 12.15 6.88333 12.9167C7.49444 13.6833 8.16667 14.4222 8.9 15.1333C9.58889 15.8222 10.3111 16.4611 11.0667 17.05C11.8222 17.6389 12.6222 18.1778 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0611 15.1833 17.3833 15.0833C17.7056 14.9833 18.0222 14.9556 18.3333 15L22.9333 15.9333C23.2444 16.0222 23.5 16.1833 23.7 16.4167C23.9 16.65 24 16.9111 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24Z" fill="#242424"/>
                      </svg>
                    </a>
                  </li>
                }
              </ul>
            </div>
          </div>
        </section>
      }
      {/* home cta section ends */}

      
    </>
    </Layout>
  );
}

export const Head = ({ data }) => (
  <Seo
    seoData={data?.wpPage?.seo || []}
    pageUrl={data?.wpPage?.uri}
  >

  </Seo>
);

export const data = graphql`
  query MyQuery {
    wpPage(databaseId: {eq: 97}) {
      title
      softwareSolutionsHouseLp {
        heroTitle
        heroSubText
        sftStatsLeft {
          leftStatContent
        }
        sftStatsLeftCopy {
          statContent
        } 
        sdTitle
        sftSdPages {
          spDescription
          spTitle
          spUrl {
            ... on WpPage {
              id
              databaseId
              link
              slug
            }
          }
          spImage {
            altText
            mediaItemUrl
          }
        }
        spTitle
        sftSpPages {
          spDescription
          spTitle
          spUrl {
            ... on WpPage {
              id
              databaseId
              link
              slug
            }
          }
          spImage {
            altText
            mediaItemUrl
          }
        }
        scTitle
        sftScPages {
          spDescription
          spTitle
          spUrl {
            ... on WpPage {
              id
              databaseId
              link
              slug
            }
          }
          spImage {
            altText
            mediaItemUrl
          }
        }
        wcuTitle
        sftWcuContent {
          wcuDescription
          wcuTitle
          wcuImage
          wcuImageMob
        }
        emTitle
        emContent
        emShortContent
        sftEmSteps {
          emImage
          emText
          emTitle
        }
        platforms {
          altText
          mediaItemUrl
        }
        ctaText
        ctaContent
        selectProjects {
          ... on WpPortfolio {
            id
            content
            slug
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            softwarePortfolioLayout {
              insidePageLisitngImage {
                altText
                mediaItemUrl
              }
            }
            title
          }
        }
      }
      uri
      seo {
        canonical
        opengraphDescription
        opengraphImage {
          altText
          mediaItemUrl
          height
          width
          mediaType
        }
        opengraphSiteName
        opengraphTitle
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphUrl
        opengraphModifiedTime
        opengraphType
        title
        metaDesc
        schema {
          raw
        }
      }
    }
    wp {
      acfOption {
        common {
          brandLogos {
            altText
            mediaItemUrl
          }
          ctaSubtitle
          ctaTitle
          whatsappurl
          callnumber
          contactusUrl
        }
      }
    }
    allWpPortfolio(
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "software" } } }
        }
      }
    ) {
      nodes {
        id
        content
        slug
        featuredImage {
          node {
            altText
            mediaItemUrl
          }
        }
        title
      }
    }
  }
`;
