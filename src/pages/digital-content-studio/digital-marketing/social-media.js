import React, { lazy, Suspense, useEffect, useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import gsap from 'gsap';
import LazyLoad from "react-lazy-load";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../src/assets/css/common.css";
import "../../../../src/assets/css/inside.css";
import "../../../../src/assets/css/inside-child.css";

import Seo from "../../../components/SeoMeta";
import Breadcrumb from "../../../components/Breadcrumbs";
import Layout from "../../../components/Layout";

gsap.registerPlugin(ScrollToPlugin);

const CtaSection = lazy(() => import("../../../components/Lazyload/CtaSection"));


export default function SoftwareSolChild({ data }) {

  const [isLoaded, setIsLoaded] = useState(false);

  const softSolChild = data?.wpPage?.websiteDevelopment || {};
  const socialMedia = data?.wpPage?.socialMediaPlatform || {};
  const softSolChildProject = data?.wpPage?.websiteDevelopment?.selectDigitalProjects || [];
  const options = data?.wp?.acfOption?.common;

  const reelsList = data?.reels?.edges?.map(e => e.node) || [];
  const socialList = data?.socialMedia?.edges?.map(e => e.node) || [];
  const emailersList = data?.emailers?.edges?.map(e => e.node) || [];

  // ✅ repeat to double the list
  const reelsListRepeated = reelsList.length > 0
    ? [...reelsList, ...reelsList]
    : [];

  const socialListRepeated = socialList.length > 0
    ? [...socialList, ...socialList]
    : [];

  const emailersListRepeated = emailersList.length > 0
    ? [...emailersList, ...emailersList]
    : [];

    // Falls back to options if page fields are empty
  const ctaTitle = softSolChild?.ctaTitle || options?.ctaTitle;
  const ctaText = softSolChild?.ctaContent || options?.ctaSubtitle;
  const whatsappUrl = options?.whatsappurl;
  const callNumber = options?.callnumber;
  const contactUsUrl = options?.contactusUrl;

  const itemCount = softSolChild?.websiteEmContent?.length || 0;

  const [menuActive, setMenuActive] = useState(false);

  const [menuItemActive, setMenuItemActive] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [activeMenus, setActiveMenus] = useState({
    level1: null,
    level2: null,
  });

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // for reels play/pause
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("reels");

  const handleToggle = (index) => {
    const currentVideo = videoRefs.current[index];
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });
    if (activeIndex === index) {
      currentVideo.pause();
      setActiveIndex(null);
    } else {
      currentVideo.play();
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // const [activeTab, setActiveTab] = useState('custom');

  const [activeAccordion, setActiveAccordion] = useState(null);
  

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

  const accordionItems = softSolChild?.webisteFaqsContent?.map((faqLst, index) => ({
    question: faqLst.faqsTitle,
    answer: faqLst.faqsContent,
  })) || [];

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
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
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
              {/* <img src="/assets/img/emovers-new-logo.webp" alt="Emovers logo"></img> */}
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
      if (typeof window !== "undefined") return;
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

  // function for icon name convert to lower case and add hiphen between 2 words = starts
  const formatIconClass = (text) => {
    if (!text) return "";

    return text
      .replace(/<[^>]*>/g, "") // remove HTML tags (important for dangerouslySetInnerHTML)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-"); // replace spaces with hyphen
  };
  // function for icon name convert to lower case and add hiphen between 2 words = ends

  return (
    <Layout isAiDevChild>
    <>

      {/* Inside intro section starts */}
      {softSolChild && 
        <section className="inside-intro-wrapper inside-child-intro-wrapper">
          <div class="container">
            <div className="breadcrumbs 123-test">
              {<Breadcrumb postId={154} />}
            </div>
            <div className="title-wrapp">
              <p className="parent-page-title">Digital Content Studio</p>
              <h1 dangerouslySetInnerHTML={{__html: softSolChild.ssspPageTitle}} />
              <p className="sub-txt" dangerouslySetInnerHTML={{__html: softSolChild.sspSubText}} />
            </div>
            <div className="scroll-down-arrow">
              <a href="#"
                onClick={(e) => {
                  e.preventDefault();
                   if (typeof window !== "undefined") return;
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
      }
      {/* Inside intro section ends */}

      {/* child page intro highlight section starts */}
      {softSolChild?.inroTitle && softSolChild?.introDescription &&
        <section className="intro-highlight-wrapper slide-up">
          <div className="container">
            <div className="left" dangerouslySetInnerHTML={{__html: softSolChild.inroTitle}} />
            <div className="right">
              <p dangerouslySetInnerHTML={{__html: softSolChild?.introDescription}} />
            </div>
          </div>
        </section>
      }
      {/* child page intro highlight section ends */}

      {/* Child page strategic choice section starts */}
      {softSolChild?.websiteSaContent && 
        <section className="strategic-choice-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softSolChild.strategicAdvanageTitle}} />
            <p className="sub-txt txt-center" dangerouslySetInnerHTML={{__html: softSolChild.strategicAdvanageSubtext}} />
            <ul>
              {softSolChild?.websiteSaContent.map((strategList,index) => (
                <li>
                  <div className="left" dangerouslySetInnerHTML={{__html: strategList.saImage}} />
                  <div className="right">
                    <span className="line-fill"></span>
                    <p className="title" dangerouslySetInnerHTML={{__html: strategList.saTitle}} />
                    <p dangerouslySetInnerHTML={{__html: strategList.saDescription}} />
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* Child page strategic choice section ends */}

      {/* core web development section starts */}
      {softSolChild?.websiteCwcp && 
        <section className="core-web-deve-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softSolChild.cwcpTitle}} />
            <ul>
              {softSolChild?.websiteCwcp.map((corelst, index) => (
                <li>
                  <div className="left-img">
                    <img src={corelst?.cwdcImage?.mediaItemUrl}></img>
                  </div>
                  <div className="right-txt">
                    <p className="title" dangerouslySetInnerHTML={{__html: corelst.cwdcTitle}} />
                    <p dangerouslySetInnerHTML={{__html: corelst.cwdcText}} />
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* core web development section ends */}

      {/* social media platform section starts */}
      {socialMedia && 
        <section className="social-media-plat-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: socialMedia.smpTitle}} />
            <ul>
              {socialMedia?.smpList && socialMedia?.smpList.map((socialLst,index) => (
                <li className="linkedin">
                  <div className="social-txt-wrapp">
                    <div className="social-media-title">
                      <h3 dangerouslySetInnerHTML={{__html: socialLst.smpListTitle}} />
                    </div>
                    <div className="social-media-txt">
                      {socialLst?.smpListText?.map((socialLstTxt, ind) => (
                        <p><span className="txt-med">{socialLstTxt.smpHead}</span>{socialLstTxt.smpTxt}</p>
                      ))
                      }
                    </div>
                    <div className="social-platgform-logo">
                      <img src={socialLst?.smpListImage?.mediaItemUrl} alt={socialLst?.smpListTitle}></img>
                    </div>
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* social media platform section ends */}

      {/* partner with emqube section starts */}
      {softSolChild?.wpTitle && softSolChild?.websiteWpwContent && 
        <section className="inside-partner-wrapper">
          <div className="container">
            <h2 dangerouslySetInnerHTML={{__html: softSolChild?.wpTitle}} />
            <ul>
              {softSolChild?.websiteWpwContent.map((partnerLst, index) => (
                <li className="stagger-li">
                  <div className="part-img">
                    <img src={partnerLst?.wpwImage?.mediaItemUrl} alt={partnerLst?.wpwImage?.altText}></img>
                    <div className="img-angle"><img src="https://mohammeds161.sg-host.com/wp-content/uploads/2026/05/partner-shape-circle.png"></img></div>
                  </div>
                  <div className="part-txt">
                    <h3 dangerouslySetInnerHTML={{__html: partnerLst.wpwTitle}} />
                    <div dangerouslySetInnerHTML={{__html: partnerLst.wpwDescription}} />
                  </div>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      }
      {/* partner with emqube section ends */}

      {/* engagement model starts */}
      {softSolChild?.websiteEmContent && 
        <section className={`engagement-model-wrapp step-${itemCount}`}>
          <div className="container">
            <h2 className="txt-center slide-up" dangerouslySetInnerHTML={{__html: softSolChild.engagementModelSectionTitle}} />
            <div className="eng-model-step">
              <ul className={`count-${itemCount}`}>
                {softSolChild?.websiteEmContent.map((engModel,index) => (
                  <li className="stagger-li">
                    <div className="step-count">{index + 1}</div>
                    <div className="eng-icon" dangerouslySetInnerHTML={{__html: engModel.emImage}} />
                    <div className="eng-title">
                      <h5 dangerouslySetInnerHTML={{__html: engModel.emTitle}} />
                      <div dangerouslySetInnerHTML={{__html: engModel.emDescription}} />
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


      {/* references section starts */}
      <section className="references-inside-wrapp">
        <div className="container">
          <h2>References</h2>
        </div>

        <div className="ref-inside">
          <div className="container">

            {/* Tabs */}
            <div className="ref-tabs tabs">
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

            {/* Tab Content */}
            <div className="ref-content tab-content">

              {/* Reels Tab */}
              {activeTab === "reels" && (
                <div className="video-list reels-wrapper">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={20}
                    navigation={true}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 10 },
                      768: { slidesPerView: 2.5 },
                      1024: { slidesPerView: 4 },
                    }}
                  >
                    {reelsListRepeated.map((reel, index) => (
                      <SwiperSlide key={reel.id || index}>
                        <div className="video-item">
                          <div
                            className="video-wrapper"
                            onClick={() => handleToggle(index)}
                          >
                            <video
                              ref={(el) => (videoRefs.current[index] = el)}
                              src={reel?.reels?.reelVideo?.mediaItemUrl}
                              muted
                              playsInline
                              preload="metadata"
                              className="video"
                            />
                            <div className="play-btn video-control">
                              {/* {activeIndex === index ? "❚❚" : "▶"} */}
                              {activeIndex === index ? (
                                // Pause icon
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M25 0C11.2074 0 0 11.2074 0 25C0 38.7926 11.2074 50 25 50C38.7926 50 50 38.7926 50 25C50 11.2074 38.7926 0 25 0ZM25 2.43902C37.4744 2.43902 47.561 12.5256 47.561 25C47.561 37.4744 37.4744 47.561 25 47.561C12.5256 47.561 2.43902 37.4744 2.43902 25C2.43902 12.5256 12.5256 2.43902 25 2.43902ZM18 13C16.3431 13 15 14.3431 15 16V34C15 35.6569 16.3431 37 18 37C19.6569 37 21 35.6569 21 34V16C21 14.3431 19.6569 13 18 13ZM32 13C30.3431 13 29 14.3431 29 16V34C29 35.6569 30.3431 37 32 37C33.6569 37 35 35.6569 35 34V16C35 14.3431 33.6569 13 32 13Z" fill="white"/>
                                </svg>
                              ) : (
                                // Play icon
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M25 0C11.2074 0 0 11.2074 0 25C0 38.7926 11.2074 50 25 50C38.7926 50 50 38.7926 50 25C50 11.2074 38.7926 0 25 0ZM25 2.43902C37.4744 2.43902 47.561 12.5256 47.561 25C47.561 37.4744 37.4744 47.561 25 47.561C12.5256 47.561 2.43902 37.4744 2.43902 25C2.43902 12.5256 12.5256 2.43902 25 2.43902ZM18.5023 12.1761C17.8207 12.1906 17.1651 12.3725 16.5968 12.7096C15.4602 13.3839 14.6671 14.659 14.6341 16.1395V33.7843C14.6671 35.2646 15.4615 36.5551 16.5968 37.2332C17.7321 37.9113 19.2326 37.9808 20.5412 37.271C25.6277 34.3298 30.7176 31.3771 35.8041 28.4296C36.986 27.7431 37.8049 26.4386 37.8049 24.9616C37.8049 23.4846 36.986 22.199 35.8041 21.5127C30.7412 18.5258 25.5861 15.6816 20.5412 12.6712C19.8466 12.2947 19.1354 12.1687 18.5023 12.1761ZM18.5976 14.596C18.8448 14.6009 19.0901 14.6771 19.3407 14.8056C24.4188 17.7394 29.5049 20.6871 34.5846 23.628C35.062 23.9053 35.3659 24.3698 35.3659 24.9619C35.3659 25.554 35.0621 26.0374 34.5846 26.3148C29.4946 29.2468 24.436 32.2338 19.3407 35.1562C18.7724 35.448 18.2562 35.3885 17.8354 35.1373C17.4085 34.8824 17.0945 34.4308 17.0732 33.7654V16.1777C17.0945 15.5123 17.4096 15.0584 17.8354 14.8058C18.1013 14.6567 18.3503 14.5909 18.5976 14.596Z" fill="white"/>
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Posts Tab */}
              {activeTab === "posts" && (
                <div className="image-list posts-wrapper">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={20}
                    navigation={true}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 10 },
                      768: { slidesPerView: 2.5 },
                      1024: { slidesPerView: 4 },
                    }}
                  >
                    {socialListRepeated.map((post, index) => (
                      <SwiperSlide key={post.id || index}>
                        <div className="image-item">
                            <a
                            href={post?.socialMediaLayout?.socialPostLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={post?.socialMediaLayout?.socialPostImage?.mediaItemUrl}
                              alt={post?.socialMediaLayout?.socialPostImage?.altText || post.title}
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Articles (Emailers) Tab */}
              {activeTab === "articles" && (
                <div className="arti-list articles-wrapper">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={20}
                    navigation={true}
                    breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 10 },
                      768: { slidesPerView: 2.5 },
                      1024: { slidesPerView: 4 },
                      1400: { slidesPerView: 5 },
                    }}
                  >
                    {emailersListRepeated.map((item, index) => {
                      const galleryImages = item?.emailersLayout?.emailersGalleryImages || [];
                      const thumbImage = item?.emailersLayout?.emailerMainImage?.mediaItemUrl;
                      const thumbAlt = item?.emailersLayout?.emailerMainImage?.altText || item.title;

                      return (
                        <SwiperSlide key={item.id || index}>
                          <LightGallery
                            plugins={[lgThumbnail, lgZoom]}
                            loop={true}
                            thumbnail={true}
                            exThumbImage="data-exthumbimage"
                            download={false}
                            counter={false}
                            selector="li"
                          >
                            <ul className="design-gallery">
                              {galleryImages.map((img, i) => (
                                <li
                                  key={`${index}-${i}`}
                                  className="gallery-item"
                                  data-src={img?.mediaItemUrl}
                                  data-exthumbimage={img?.mediaItemUrl}
                                >
                                  {i === 0 && (
                                    <div className="thumb-wrapper">
                                      <img src={thumbImage} alt={thumbAlt} />
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </LightGallery>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
      {/* references section ends */}

      {/* faq section starts */}
      {softSolChild?.webisteFaqsContent &&
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
                      <p dangerouslySetInnerHTML={{__html: item.answer}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
      {/* faq section ends */}


      {/* home cta section starts */}
      <LazyLoad onContentVisible={() => setIsLoaded(true)}>
        <Suspense fallback={<div>Loading...</div>}>
          <CtaSection
            ctaTitle={ctaTitle}
            ctaText={ctaText}
            whatsappUrl={whatsappUrl}
            callNumber={callNumber}
            contactUsUrl={contactUsUrl}
          />
        </Suspense>
      </LazyLoad>
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
    wpPage(databaseId: {eq: 154}) {
      title
      websiteDevelopment {
        ssspPageTitle
        sspSubText
        inroTitle
        introDescription
        strategicAdvanageSubtext
        strategicAdvanageTitle
        websiteSaContent {
          saDescription
          saTitle
          saImage
        }
        engagementModelSectionTitle
        websiteEmContent {
          emDescription
          emImage
          emTitle
        }
        wpTitle
        websiteWpwContent {
          wpwDescription
          wpwTitle
          wpwImage {
            altText
            mediaItemUrl
          }
        }
        cwcpTitle
        websiteCwcp {
          cwdcText
          cwdcTitle
          cwdcImage {
            altText
            mediaItemUrl
          }
        }
        webisteFaqsContent {
          faqsContent
          faqsTitle
        }
        ctaContent
        ctaTitle
        selectDigitalProjects {
          ... on WpPortfolio {
            id
            content
            title
            digitalPortfolioLayout {
              clientLogo {
                altText
                mediaItemUrl
              }
              showcaseImageOnListingPage {
                altText
                mediaItemUrl
              }
              websiteLink
            }
          }
        }
      }
      socialMediaPlatform {
        smpTitle
        smpList {
          smpListTitle
          smpListText {
            smpHead
            smpTxt
          }
          smpListImage {
            altText
            mediaItemUrl
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
          ctaSubtitle
          ctaTitle
          whatsappurl
          callnumber
          contactusUrl
        }
      }
    }
    reels: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "reels" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          reels {
            reelVideo { mediaItemUrl altText }
          }
        }
      }
    }

    socialMedia: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "social-media" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          socialMediaLayout {
            socialPostImage {
              altText
              mediaItemUrl
            }
            socialPostLink
          }
        }
      }
    }

    emailers: allWpPortfolio(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "emailers" } } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          emailersLayout {
            emailerMainImage {
              altText
              mediaItemUrl
            }
            emailersGalleryImages {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;